function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var formosa = require('@jlbelanger/formosa');
var reactRouterDom = require('react-router-dom');
var React = require('react');
var React__default = _interopDefault(React);
var Cookies = _interopDefault(require('js-cookie'));
var PropTypes = _interopDefault(require('prop-types'));
var get = _interopDefault(require('get-value'));

const capitalize = s => s.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
const cleanKey = key => key.replace(/^relationships\./, '');

class Auth {
  static login(user, token, remember) {
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_user", JSON.stringify(user), Auth.attributes(remember));
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_token", token, Auth.attributes(remember));
  }
  static refresh() {
    let user = Auth.user();
    user = user ? JSON.parse(user) : null;
    if (user && user.remember) {
      Auth.login(user, Auth.token(), user.remember);
    }
  }
  static attributes(remember) {
    const attributes = {
      sameSite: 'lax'
    };
    if (remember) {
      attributes.expires = 365;
    }
    if (window.location.protocol === 'https:') {
      attributes.secure = true;
    }
    return attributes;
  }
  static logout(status) {
    if (status === void 0) {
      status = '';
    }
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_user");
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_token");
    window.location.href = "" + (process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/') + (status ? "?status=" + status : '');
  }
  static id() {
    const user = Auth.user();
    return user ? JSON.parse(user).id : null;
  }
  static user() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_user");
  }
  static token() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_token");
  }
  static isLoggedIn() {
    return !!Auth.user() && !!Auth.token();
  }
}

const errorMessageText = function (response, logout) {
  if (logout === void 0) {
    logout = true;
  }
  if (logout && response.status === 401) {
    return Auth.logout(response.status);
  }
  return "Error: " + response.errors.map(e => e.title).join(' ');
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function Modal(_ref) {
  let {
    cancelable,
    cancelButtonAttributes,
    cancelButtonClass,
    cancelButtonText,
    children,
    event,
    okButtonAttributes,
    okButtonClass,
    okButtonText,
    onClickCancel,
    onClickOk,
    text
  } = _ref;
  const dialogRef = React.useRef(null);
  const onKeydown = e => {
    if (e.key === 'Escape' && onClickCancel) {
      onClickCancel();
    }
  };
  const onClickDialog = e => {
    if (e.target.tagName === 'DIALOG' && onClickCancel) {
      onClickCancel();
    }
  };
  React.useEffect(() => {
    document.body.classList.add('crudnick-modal-open');
    if (cancelable) {
      document.addEventListener('keydown', onKeydown);
    }
    return () => {
      document.body.classList.remove('crudnick-modal-open');
      if (cancelable) {
        document.removeEventListener('keydown', onKeydown);
      }
      if (event.target) {
        event.target.focus();
      }
    };
  }, []);
  React.useEffect(() => {
    if (dialogRef && dialogRef.current && dialogRef.current.getAttribute('open') === null) {
      dialogRef.current.showModal();
      dialogRef.current.focus();
      if (cancelable) {
        dialogRef.current.addEventListener('click', onClickDialog);
      }
    }
  }, [dialogRef]);
  return /*#__PURE__*/React__default.createElement("dialog", {
    className: "crudnick-modal",
    ref: dialogRef,
    tabIndex: -1
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "crudnick-modal__box"
  }, children || /*#__PURE__*/React__default.createElement("p", {
    className: "crudnick-modal__text"
  }, text), /*#__PURE__*/React__default.createElement("p", {
    className: "crudnick-modal__options"
  }, /*#__PURE__*/React__default.createElement("button", _extends({
    className: ("formosa-button " + okButtonClass).trim(),
    onClick: onClickOk,
    type: "button"
  }, okButtonAttributes), okButtonText), /*#__PURE__*/React__default.createElement("button", _extends({
    className: ("formosa-button " + cancelButtonClass).trim(),
    onClick: onClickCancel,
    type: "button"
  }, cancelButtonAttributes), cancelButtonText))));
}
Modal.propTypes = {
  cancelable: PropTypes.bool,
  cancelButtonAttributes: PropTypes.object,
  cancelButtonClass: PropTypes.string,
  cancelButtonText: PropTypes.string,
  children: PropTypes.node,
  event: PropTypes.object.isRequired,
  okButtonAttributes: PropTypes.object,
  okButtonClass: PropTypes.string,
  okButtonText: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickOk: PropTypes.func,
  text: PropTypes.string
};
Modal.defaultProps = {
  cancelable: true,
  cancelButtonAttributes: null,
  cancelButtonClass: 'crudnick-button--secondary',
  cancelButtonText: 'Cancel',
  children: null,
  okButtonAttributes: null,
  okButtonClass: '',
  okButtonText: 'OK',
  onClickCancel: null,
  onClickOk: null,
  text: null
};

function Actions(_ref) {
  let {
    apiPath,
    children,
    currentPage,
    path,
    row,
    saveButtonText,
    setActionError,
    showDelete,
    showSave,
    singular,
    subpages
  } = _ref;
  const history = reactRouterDom.useHistory();
  const {
    addToast,
    disableWarningPrompt,
    enableWarningPrompt
  } = React.useContext(formosa.FormosaContext);
  const [showModal, setShowModal] = React.useState(false);
  const submitRef = React.useRef(null);
  const onKeyDown = e => {
    if (e.key === 's' && e.metaKey && submitRef && submitRef.current) {
      e.preventDefault();
      submitRef.current.click();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  const onDelete = () => {
    setShowModal(false);
    disableWarningPrompt();
    formosa.Api.delete(apiPath + "/" + row.id).catch(response => {
      if (setActionError) {
        setActionError(errorMessageText(response));
      } else {
        addToast(errorMessageText(response), 'error', 10000);
      }
      enableWarningPrompt();
    }).then(response => {
      if (!response) {
        return;
      }
      addToast(capitalize(singular) + " deleted successfully.", 'success');
      history.push("/" + path);
      enableWarningPrompt();
    });
  };
  return /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, showSave && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button",
    "data-cy": "save",
    type: "submit",
    ref: submitRef,
    form: "crudnick-edit-form"
  }, saveButtonText)), currentPage !== '/' && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
    className: "crudnick-list__button formosa-button",
    to: "/" + path + "/" + row.id
  }, "Edit")), showDelete && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button formosa-button--danger",
    "data-cy": "delete",
    onClick: e => {
      if (setActionError) {
        setActionError(false);
      }
      setShowModal(e);
    },
    type: "button"
  }, "Delete"), showModal && /*#__PURE__*/React__default.createElement(Modal, {
    event: showModal,
    okButtonAttributes: {
      'data-cy': 'modal-delete'
    },
    okButtonClass: "formosa-button--danger",
    okButtonText: "Delete",
    onClickOk: onDelete,
    onClickCancel: () => {
      setShowModal(false);
    },
    text: "Are you sure you want to delete this " + singular + "?"
  })), process.env.REACT_APP_FRONTEND_URL && row.url && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    className: "crudnick-list__button formosa-button crudnick-button--secondary",
    href: "" + process.env.REACT_APP_FRONTEND_URL + row.url,
    rel: "noreferrer",
    target: "_blank"
  }, "View")), subpages.map(page => /*#__PURE__*/React__default.createElement("li", {
    key: page
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
    className: "crudnick-list__button formosa-button crudnick-button--secondary",
    to: "/" + path + "/" + row.id + "/" + page.toLowerCase()
  }, page))), children);
}
Actions.propTypes = {
  apiPath: PropTypes.string.isRequired,
  children: PropTypes.node,
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  saveButtonText: PropTypes.string,
  setActionError: PropTypes.func,
  row: PropTypes.object,
  showDelete: PropTypes.bool,
  showSave: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  subpages: PropTypes.array
};
Actions.defaultProps = {
  children: null,
  row: null,
  saveButtonText: 'Save',
  setActionError: null,
  showDelete: true,
  showSave: true,
  subpages: []
};

function MetaTitle(_ref) {
  let {
    title
  } = _ref;
  React.useEffect(() => {
    let metaTitle = title;
    if (process.env.REACT_APP_TITLE) {
      if (metaTitle) {
        metaTitle += ' | ';
      }
      metaTitle += process.env.REACT_APP_TITLE;
    }
    document.querySelector('title').innerText = metaTitle;
  }, [title]);
  return null;
}
MetaTitle.propTypes = {
  title: PropTypes.string
};
MetaTitle.defaultProps = {
  title: ''
};

function MyFormPrompt() {
  const {
    getDirtyKeys
  } = React.useContext(formosa.FormContext);
  return /*#__PURE__*/React__default.createElement(reactRouterDom.Prompt, {
    when: getDirtyKeys().length > 0,
    message: "You have unsaved changes. Are you sure you want to leave this page?"
  });
}

function MyForm(_ref) {
  let {
    children,
    ...otherProps
  } = _ref;
  const {
    showWarningPrompt
  } = React.useContext(formosa.FormosaContext);
  return /*#__PURE__*/React__default.createElement(formosa.Form, otherProps, children, showWarningPrompt && /*#__PURE__*/React__default.createElement(MyFormPrompt, null));
}
MyForm.propTypes = {
  children: PropTypes.node.isRequired
};

function AddForm(_ref) {
  let {
    addAnotherText,
    apiPath,
    component,
    componentProps,
    defaultRow,
    extra,
    filterBody,
    filterValues,
    path,
    relationshipNames,
    saveButtonText,
    showAddAnother,
    singular,
    titlePrefixText,
    ...otherProps
  } = _ref;
  const [row, setRow] = React.useState(defaultRow);
  const [addAnother, setAddAnother] = React.useState(false);
  const history = reactRouterDom.useHistory();
  const submitRef = React.useRef(null);
  const afterSubmitSuccess = response => {
    if (!addAnother) {
      history.push("/" + path + "/" + response.id);
    }
  };
  const FormComponent = component;
  componentProps.formType = 'add';
  const onKeyDown = e => {
    if (e.key === 's' && e.metaKey && submitRef && submitRef.current) {
      e.preventDefault();
      submitRef.current.click();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: titlePrefixText + " " + singular
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", {
    "data-cy": "title"
  }, titlePrefixText + " " + singular), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    form: "crudnick-add-form",
    "data-cy": "save",
    ref: submitRef,
    type: "submit"
  }, saveButtonText)), showAddAnother && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(formosa.Field, {
    id: "crudnick-add-another",
    label: addAnotherText,
    labelPosition: "after",
    setValue: setAddAnother,
    type: "checkbox",
    value: addAnother
  })))), /*#__PURE__*/React__default.createElement(MyForm, _extends({
    afterSubmitSuccess: afterSubmitSuccess,
    clearOnSubmit: true,
    defaultRow: defaultRow,
    errorMessageText: errorMessageText,
    filterBody: filterBody,
    filterValues: filterValues,
    htmlId: "crudnick-add-form",
    method: "POST",
    path: apiPath,
    preventEmptyRequest: true,
    relationshipNames: relationshipNames,
    row: row,
    setRow: setRow,
    successToastText: capitalize(singular) + " added successfully."
  }, otherProps), /*#__PURE__*/React__default.createElement(FormComponent, _extends({
    row: row,
    setRow: setRow
  }, componentProps))), extra ? extra(row) : null);
}
AddForm.propTypes = {
  addAnotherText: PropTypes.string,
  apiPath: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
  defaultRow: PropTypes.object,
  extra: PropTypes.func,
  filterBody: PropTypes.func,
  filterValues: PropTypes.func,
  path: PropTypes.string.isRequired,
  relationshipNames: PropTypes.array,
  saveButtonText: PropTypes.string,
  showAddAnother: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  titlePrefixText: PropTypes.string
};
AddForm.defaultProps = {
  addAnotherText: 'Add another',
  componentProps: {},
  defaultRow: {},
  extra: null,
  filterBody: null,
  filterValues: null,
  relationshipNames: [],
  saveButtonText: 'Save',
  showAddAnother: true,
  titlePrefixText: 'Add'
};

var _path;
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function SvgMenu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M0 2v2h20V2zm0 7v2h20V9zm0 7v2h20v-2z"
  })));
}

var _path$1;
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function SvgX(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    viewBox: "0 0 8 8",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M1.485.43L.431 1.486l.543.543 1.953 1.989L.97 5.974l-.54.517L1.488 7.57l.541-.54 1.988-1.99 1.957 1.99.515.537L7.567 6.49l-.537-.515-1.99-1.957 1.988-1.989.541-.54L6.491.43l-.517.54-1.957 1.957L2.028.974z"
  })));
}

function Nav(_ref) {
  let {
    nav
  } = _ref;
  const {
    addToast
  } = React.useContext(formosa.FormosaContext);
  const dialogRef = React.useRef(null);
  const breakpoint = 1025;
  const [showInlineNav, setShowInlineNav] = React.useState(window.innerWidth >= breakpoint);
  const onTransitionEnd = () => {
    document.body.classList.remove('show-nav');
    if (dialogRef.current.tagName === 'DIALOG') {
      dialogRef.current.close();
    }
    dialogRef.current.removeEventListener('transitionend', onTransitionEnd);
  };
  const onResize = () => {
    setShowInlineNav(window.innerWidth >= breakpoint);
  };
  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  React.useEffect(() => {
    if (showInlineNav) {
      hideMenu();
      onTransitionEnd();
    }
  }, [showInlineNav]);
  const logout = () => {
    formosa.Api.delete('auth/logout').catch(response => {
      if (response.status === 401) {
        return;
      }
      addToast(errorMessageText(response), 'error');
    }).then(() => {
      Auth.logout();
    });
  };
  const hideMenu = () => {
    document.body.classList.remove('animate-nav');
    dialogRef.current.addEventListener('transitionend', onTransitionEnd);
  };
  const openMenu = () => {
    document.body.classList.add('show-nav');
    dialogRef.current.showModal();
    setTimeout(() => {
      document.body.classList.add('animate-nav');
    }, 10);
  };
  const onCancelDialog = e => {
    e.preventDefault();
    hideMenu();
  };
  const onClickDialog = e => {
    if (e.target.tagName === 'DIALOG') {
      hideMenu();
    }
  };
  const Dialog = showInlineNav ? 'div' : 'dialog';
  return /*#__PURE__*/React__default.createElement("nav", {
    id: "crudnick-nav"
  }, /*#__PURE__*/React__default.createElement(Dialog, {
    id: "crudnick-nav__dialog",
    ref: dialogRef,
    onCancel: onCancelDialog,
    onClick: onClickDialog
  }, /*#__PURE__*/React__default.createElement("button", {
    "aria-controls": "crudnick-nav__dialog",
    "aria-expanded": "false",
    className: "formosa-button crudnick-menu-button",
    id: "crudnick-menu-close-button",
    onClick: hideMenu,
    title: "Close Menu",
    type: "button"
  }, /*#__PURE__*/React__default.createElement(SvgX, {
    "aria-hidden": "true"
  }), "Close Menu"), /*#__PURE__*/React__default.createElement("ul", {
    id: "crudnick-nav__list"
  }, nav.map(_ref2 => {
    let {
      label,
      path
    } = _ref2;
    return /*#__PURE__*/React__default.createElement("li", {
      className: "crudnick-list__item",
      key: path
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      activeClassName: "active",
      className: "formosa-button crudnick-list__button",
      onClick: hideMenu,
      to: path
    }, label));
  }), /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button crudnick-list__button",
    "data-cy": "logout",
    id: "crudnick-logout",
    onClick: logout,
    type: "button"
  }, "Logout")))), /*#__PURE__*/React__default.createElement("button", {
    "aria-controls": "crudnick-nav__dialog",
    "aria-expanded": "true",
    className: "formosa-button crudnick-menu-button",
    "data-cy": "menu",
    id: "crudnick-menu-show-button",
    onClick: openMenu,
    title: "Show Menu",
    type: "button"
  }, /*#__PURE__*/React__default.createElement(SvgMenu, {
    "aria-hidden": "true"
  }), "Show Menu"));
}
Nav.propTypes = {
  nav: PropTypes.array.isRequired
};

function ForgotPassword() {
  const history = reactRouterDom.useHistory();
  const [row, setRow] = React.useState({});
  const [message, setMessage] = React.useState(false);
  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(history.location.search);
    if (urlSearchParams.get('expired')) {
      setMessage({
        text: 'Error: This link has expired.',
        type: 'error'
      });
      history.replace({
        search: ''
      });
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(formosa.Form, {
    beforeSubmit: () => {
      setMessage(false);
      return true;
    },
    className: "crudnick-auth-form",
    clearOnSubmit: true,
    errorMessageText: errorMessageText,
    method: "POST",
    path: "auth/forgot-password",
    row: row,
    setRow: setRow,
    showMessage: false,
    successMessageText: "If there is an account with this email address, you will receive a password reset email shortly."
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Forgot your password?"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Forgot your password?"), /*#__PURE__*/React__default.createElement(formosa.FormAlert, null), message && /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: message.type
  }, message.text), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "email",
    label: "Email",
    name: "email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React__default.createElement(formosa.Submit, {
    label: "Send link",
    postfix: /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      className: "formosa-button crudnick-button--link",
      to: "/"
    }, "Back to login")
  }));
}

function LoginForm(_ref) {
  let {
    message,
    row,
    setMessage,
    setShowVerificationButton,
    showVerificationButton
  } = _ref;
  const {
    clearAlert
  } = React.useContext(formosa.FormContext);
  const resendVerificationEmail = () => {
    clearAlert();
    setMessage(null);
    setShowVerificationButton(false);
    const data = {
      username: row.username || showVerificationButton
    };
    formosa.Api.post('auth/resend-verification', JSON.stringify(data)).catch(response => {
      setMessage(errorMessageText(response));
    }).then(response => {
      if (!response) {
        return;
      }
      setMessage({
        text: 'Check your email to continue the registration process.',
        type: 'success'
      });
    });
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Login"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Login"), message && /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: message.type
  }, message.text), showVerificationButton && /*#__PURE__*/React__default.createElement("p", {
    className: "formosa-alert formosa-alert--" + (showVerificationButton === true ? 'error' : 'success') + " post-alert-button"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button button--secondary",
    onClick: resendVerificationEmail,
    type: "button"
  }, "Resend verification email")), /*#__PURE__*/React__default.createElement(formosa.FormAlert, null), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoCapitalize: "none",
    autoComplete: "username",
    label: "Username",
    name: "username",
    required: true,
    type: "text"
  }), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "current-password",
    label: "Password",
    name: "password",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(formosa.Field, {
    label: "Remember me",
    labelPosition: "after",
    name: "remember",
    type: "checkbox"
  }), /*#__PURE__*/React__default.createElement(formosa.Submit, {
    label: "Log in",
    postfix: /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      className: "formosa-button crudnick-button--link",
      to: "/forgot-password"
    }, "Forgot password?")
  }));
}
LoginForm.propTypes = {
  message: PropTypes.object,
  row: PropTypes.object.isRequired,
  setMessage: PropTypes.func.isRequired,
  setShowVerificationButton: PropTypes.func.isRequired,
  showVerificationButton: PropTypes.bool
};
LoginForm.defaultProps = {
  message: null,
  showVerificationButton: false
};

function Login() {
  const history = reactRouterDom.useHistory();
  const [row, setRow] = React.useState({});
  const [message, setMessage] = React.useState(null);
  const [showVerificationButton, setShowVerificationButton] = React.useState(false);
  const beforeSubmit = () => {
    setMessage(null);
    setShowVerificationButton(false);
    return true;
  };
  const afterSubmitFailure = response => {
    setShowVerificationButton(response.errors[0].code === 'auth.unverified');
  };
  const afterSubmitSuccess = response => {
    const urlSearchParams = new URLSearchParams(history.location.search);
    let redirect;
    if (urlSearchParams.get('redirect') && urlSearchParams.get('redirect')[0] === '/') {
      redirect = urlSearchParams.get('redirect');
    } else {
      redirect = process.env.PUBLIC_URL || '/';
    }
    Auth.login(response.user, response.token, response.user.remember);
    window.location.href = redirect;
  };
  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(history.location.search);
    if (urlSearchParams.get('status') === '401') {
      setMessage({
        text: 'Your session has expired. Please log in again.',
        type: 'warning'
      });
      history.replace({
        search: ''
      });
    } else if (urlSearchParams.get('verify')) {
      setMessage({
        text: "Check your email (" + urlSearchParams.get('email') + ") to continue the registration process.",
        type: 'success'
      });
      setShowVerificationButton(urlSearchParams.get('username'));
      history.replace({
        search: ''
      });
    } else if (urlSearchParams.get('expired')) {
      history.push('/forgot-password?expired=1');
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(formosa.Form, {
    afterSubmitFailure: afterSubmitFailure,
    afterSubmitSuccess: afterSubmitSuccess,
    beforeSubmit: beforeSubmit,
    className: "crudnick-auth-form",
    errorMessageText: response => errorMessageText(response, false),
    method: "POST",
    path: "auth/login",
    row: row,
    setRow: setRow,
    showMessage: false
  }, /*#__PURE__*/React__default.createElement(LoginForm, {
    message: message,
    row: row,
    setMessage: setMessage,
    showVerificationButton: showVerificationButton,
    setShowVerificationButton: setShowVerificationButton
  }));
}

function ResetPassword() {
  const [row, setRow] = React.useState({});
  const {
    token
  } = reactRouterDom.useParams();
  const history = reactRouterDom.useHistory();
  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(history.location.search);
    if (urlSearchParams.get('expires') < Math.floor(Date.now() / 1000)) {
      history.push('/?expired=1');
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(formosa.Form, {
    afterSubmitSuccess: () => {
      history.push('/');
    },
    className: "crudnick-auth-form",
    errorMessageText: errorMessageText,
    method: "PUT",
    path: "auth/reset-password/" + token + window.location.search,
    row: row,
    setRow: setRow,
    showMessage: false,
    successToastText: "Password reset successfully."
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Reset password"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Reset password"), /*#__PURE__*/React__default.createElement(formosa.FormAlert, null), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "email",
    label: "Email",
    name: "email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "new-password",
    label: "New password",
    name: "new_password",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "new-password",
    label: "Confirm new password",
    name: "new_password_confirmation",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(formosa.Submit, {
    label: "Reset password"
  }));
}

function Routes() {
  const location = reactRouterDom.useLocation();
  return /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React__default.createElement(Login, null)), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/forgot-password"
  }, /*#__PURE__*/React__default.createElement(ForgotPassword, null)), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/reset-password/:token"
  }, /*#__PURE__*/React__default.createElement(ResetPassword, null)), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Redirect, {
    to: "/?redirect=" + encodeURIComponent("" + process.env.PUBLIC_URL + location.pathname + location.search)
  })));
}

function App(_ref) {
  let {
    articleProps,
    children,
    nav,
    routerAttributes
  } = _ref;
  if (Auth.isLoggedIn() && !formosa.Api.getToken()) {
    formosa.Api.setToken(Auth.token());
  }
  document.addEventListener('formosaApiRequest', () => {
    Auth.refresh();
  });
  const onClick = e => {
    e.preventDefault();
    const id = e.target.getAttribute('href').split('#')[1];
    const elem = document.getElementById(id);
    elem.setAttribute('tabindex', -1);
    elem.addEventListener('blur', () => {
      elem.removeAttribute('tabindex');
    });
    elem.focus();
  };
  return /*#__PURE__*/React__default.createElement(reactRouterDom.BrowserRouter, routerAttributes, /*#__PURE__*/React__default.createElement("a", {
    href: "#crudnick-article",
    id: "crudnick-skip",
    onClick: onClick
  }, "Skip to content"), /*#__PURE__*/React__default.createElement(formosa.FormContainer, null, Auth.isLoggedIn() && /*#__PURE__*/React__default.createElement(Nav, {
    nav: nav
  }), /*#__PURE__*/React__default.createElement("article", _extends({
    id: "crudnick-article"
  }, articleProps), Auth.isLoggedIn() ? children : /*#__PURE__*/React__default.createElement(Routes, null))));
}
App.propTypes = {
  articleProps: PropTypes.object,
  children: PropTypes.node.isRequired,
  nav: PropTypes.array.isRequired,
  routerAttributes: PropTypes.object
};
App.defaultProps = {
  articleProps: null,
  routerAttributes: null
};

function Error(_ref) {
  let {
    error
  } = _ref;
  if (error.status === 401) {
    Auth.logout(error.status);
    return null;
  }
  let message = 'Error loading data. Please try again later.';
  if (error.errors[0].title) {
    message = "Error: " + error.errors[0].title;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Error"
  }), /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: "error"
  }, message));
}
Error.propTypes = {
  error: PropTypes.object.isRequired
};

function EditForm(_ref) {
  let {
    actions,
    apiPath,
    component,
    componentProps,
    extra,
    filterBody,
    filterValues,
    name,
    path,
    relationshipNames,
    saveButtonText,
    showDelete,
    showSave,
    singular,
    subpages,
    titlePrefixText,
    transform,
    url,
    ...otherProps
  } = _ref;
  const {
    id
  } = reactRouterDom.useParams();
  const [row, setRow] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [actionError, setActionError] = React.useState(false);
  const api = formosa.Api.instance();
  React.useEffect(() => {
    api(url).catch(response => {
      setError(response);
    }).then(response => {
      if (!response) {
        return;
      }
      if (transform) {
        setRow(transform(response));
      } else {
        setRow(response);
      }
    });
  }, [url]);
  if (error) {
    return /*#__PURE__*/React__default.createElement(Error, {
      error: error
    });
  }
  const afterSubmitFailure = e => {
    setActionError(errorMessageText(e));
  };
  const FormComponent = component;
  componentProps.formType = 'edit';
  const metaTitle = row ? titlePrefixText + " " + (typeof name === 'function' ? name(row) : get(row, name)) : '';
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: metaTitle
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", {
    "data-cy": "title"
  }, titlePrefixText + " " + singular), row && /*#__PURE__*/React__default.createElement(Actions, {
    apiPath: apiPath,
    currentPage: "/",
    path: path,
    saveButtonText: saveButtonText,
    row: row,
    setActionError: setActionError,
    showDelete: showDelete,
    showSave: showSave,
    singular: singular,
    subpages: subpages
  }, actions ? actions(row, setRow) : null)), actionError && /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: "error"
  }, actionError), row && /*#__PURE__*/React__default.createElement(MyForm, _extends({
    afterSubmitFailure: afterSubmitFailure,
    beforeSubmit: () => {
      setActionError(false);
      return true;
    },
    filterBody: filterBody,
    filterValues: filterValues,
    htmlId: "crudnick-edit-form",
    id: id,
    method: "PUT",
    path: apiPath,
    preventEmptyRequest: true,
    relationshipNames: relationshipNames,
    row: row,
    setRow: setRow,
    successToastText: capitalize(singular) + " saved successfully."
  }, otherProps), /*#__PURE__*/React__default.createElement(FormComponent, _extends({
    row: row,
    setRow: setRow
  }, componentProps))), row && extra ? extra(row) : null);
}
EditForm.propTypes = {
  actions: PropTypes.func,
  apiPath: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
  extra: PropTypes.func,
  filterBody: PropTypes.func,
  filterValues: PropTypes.func,
  name: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  path: PropTypes.string.isRequired,
  relationshipNames: PropTypes.array,
  saveButtonText: PropTypes.string,
  showDelete: PropTypes.bool,
  showSave: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  subpages: PropTypes.array,
  titlePrefixText: PropTypes.string,
  transform: PropTypes.func,
  url: PropTypes.string.isRequired
};
EditForm.defaultProps = {
  actions: null,
  componentProps: {},
  extra: null,
  filterBody: null,
  filterValues: null,
  name: null,
  relationshipNames: [],
  saveButtonText: 'Save',
  showDelete: true,
  showSave: true,
  subpages: [],
  titlePrefixText: 'Edit',
  transform: null
};

var _path$2;
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function SvgArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M0 2l4 4 4-4H0z"
  })));
}

var _path$3;
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z"
  })));
}

const escapeRegExp = string => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
const filterByKey = (records, key, value) => {
  value = value.trim().toLowerCase();
  const escapedValue = escapeRegExp(value);
  records = records.filter(record => {
    const recordValue = (get(record, key) || '').toString().replace(/<[^>]+?>/g, '').toLowerCase();
    return recordValue.match(new RegExp("(^|[^a-z])" + escapedValue));
  });
  records = records.sort((a, b) => {
    const aValue = (get(a, key) || '').toString().toLowerCase();
    const bValue = (get(b, key) || '').toString().toLowerCase();
    const aPos = aValue.indexOf(value) === 0;
    const bPos = bValue.indexOf(value) === 0;
    if (aPos && bPos || !aPos && !bPos) {
      return 0;
    }
    if (aPos && !bPos) {
      return -1;
    }
    return 1;
  });
  return records;
};
const filterByKeys = (records, filters) => {
  Object.keys(filters).forEach(key => {
    records = filterByKey(records, key, filters[key]);
  });
  return records;
};

const sortByKey = (records, key, dir) => records.sort((a, b) => {
  let aVal = get(a, key);
  if (aVal === undefined || aVal === null) {
    aVal = '';
  }
  let bVal = get(b, key);
  if (bVal === undefined || bVal === null) {
    bVal = '';
  }
  if (aVal === bVal) {
    return 0;
  }
  if (aVal === '') {
    return 1;
  }
  if (bVal === '') {
    return -1;
  }
  if (typeof aVal === 'number' && typeof bVal === 'number') {
    if (dir === 'asc') {
      return aVal < bVal ? -1 : 1;
    }
    return aVal > bVal ? -1 : 1;
  }
  aVal = aVal.toString();
  bVal = bVal.toString();
  return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
});

function IndexTable(_ref) {
  let {
    columns,
    defaultOptions,
    path,
    title,
    url
  } = _ref;
  const [rows, setRows] = React.useState(null);
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [rowsError, setRowsError] = React.useState(false);
  const [sortKey, setSortKey] = React.useState('name');
  const [sortDir, setSortDir] = React.useState('asc');
  const [filters, setFilters] = React.useState(() => {
    const output = {};
    columns.forEach(column => {
      output[cleanKey(column.key)] = '';
    });
    return output;
  });
  const api = formosa.Api.instance();
  React.useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortKey')) {
      setSortKey(defaultOptions.sortKey);
    }
    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortDir')) {
      setSortDir(defaultOptions.sortDir);
    }
    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'filters')) {
      setFilters(defaultOptions.filters);
    }
    api(url, false).catch(response => {
      setRowsError(errorMessageText(response));
      setRows(null);
      setFilteredRows([]);
    }).then(response => {
      if (!response) {
        return;
      }
      setRows(response);
      setFilteredRows(response);
    });
  }, [url]);
  const sort = e => {
    const newSortKey = e.target.getAttribute('data-key');
    let newSortDir;
    if (sortKey === newSortKey) {
      newSortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      newSortDir = 'asc';
    }
    setSortKey(newSortKey);
    setSortDir(newSortDir);
    setRows(sortByKey(rows, newSortKey, newSortDir));
    setFilteredRows(sortByKey(filteredRows, newSortKey, newSortDir));
  };
  const numRows = rows ? rows.length : 0;
  let numResults = " (" + filteredRows.length.toLocaleString();
  if (filteredRows.length !== numRows) {
    numResults += " of " + numRows.toLocaleString();
  }
  numResults += " result" + (numRows === 1 ? '' : 's') + ")";
  columns = columns.map(column => {
    if (column.link) {
      column.fn = (row, value) => /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
        className: "crudnick-link--table",
        to: "/" + path + "/" + row.id
      }, value);
    } else if (column.type === 'checkbox') {
      column.fn = (_row, value) => value ? /*#__PURE__*/React__default.createElement(SvgCheck, {
        "aria-hidden": "true",
        height: 16,
        width: 16
      }) : null;
      column.size = 4;
    }
    return column;
  });
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: title
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", null, /*#__PURE__*/React__default.createElement("span", {
    "data-cy": "title"
  }, title), /*#__PURE__*/React__default.createElement("small", {
    "data-cy": "num-results"
  }, rows ? numResults : null)), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
    "data-cy": "add",
    className: "formosa-button crudnick-list__button",
    to: "/" + path + "/add"
  }, "Add new")))), rowsError ? /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: "error"
  }, rowsError) : /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(column => /*#__PURE__*/React__default.createElement("th", _extends({
    className: column.size ? 'crudnick-column--shrink' : null,
    key: column.key,
    scope: "col"
  }, column.thAttributes), column.disableSort ? column.shortLabel || column.label : /*#__PURE__*/React__default.createElement("button", {
    "aria-label": "Sort by " + column.label,
    className: "formosa-button",
    "data-key": column.sortKey || cleanKey(column.key),
    disabled: rows === null,
    onClick: sort,
    type: "button"
  }, column.shortLabel || column.label, sortKey === (column.sortKey || cleanKey(column.key)) ? /*#__PURE__*/React__default.createElement(SvgArrow, {
    "aria-hidden": "true",
    className: "crudnick-icon--caret " + (sortDir === 'desc' ? 'flip' : ''),
    height: 12,
    width: 12
  }) : null)))), /*#__PURE__*/React__default.createElement("tr", null, columns.map(_ref2 => {
    let {
      key,
      disableSearch,
      label,
      size
    } = _ref2;
    return /*#__PURE__*/React__default.createElement("td", {
      className: "formosa-input-wrapper--search",
      key: key
    }, !disableSearch && /*#__PURE__*/React__default.createElement(formosa.Input, {
      "aria-label": "Search " + label,
      className: "formosa-field__input",
      disabled: rows === null,
      setValue: newValue => {
        const newFilters = {
          ...filters,
          [cleanKey(key)]: newValue
        };
        setFilters(newFilters);
        const newRows = filterByKeys(rows, newFilters);
        setFilteredRows(newRows);
      },
      size: size,
      type: "search",
      value: filters[cleanKey(key)]
    }));
  }))), /*#__PURE__*/React__default.createElement("tbody", null, rows === null ? /*#__PURE__*/React__default.createElement("tr", null, /*#__PURE__*/React__default.createElement("td", {
    colSpan: columns.length
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-spinner",
    role: "status"
  }, "Loading..."))) : filteredRows.map(row => /*#__PURE__*/React__default.createElement("tr", {
    key: row.id
  }, columns.map(_ref3 => {
    let {
      fn,
      key
    } = _ref3;
    return /*#__PURE__*/React__default.createElement("td", {
      className: "crudnick-cell--" + key,
      key: key
    }, fn ? fn(row, get(row, cleanKey(key)), key) : get(row, cleanKey(key)));
  }))))));
}
IndexTable.propTypes = {
  columns: PropTypes.array.isRequired,
  defaultOptions: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const Actions$1 = Actions;
const AddForm$1 = AddForm;
const App$1 = App;
const Auth$1 = Auth;
const EditForm$1 = EditForm;
const Error$1 = Error;
const errorMessageText$1 = errorMessageText;
const ForgotPassword$1 = ForgotPassword;
const IndexTable$1 = IndexTable;
const Login$1 = Login;
const MetaTitle$1 = MetaTitle;
const MyForm$1 = MyForm;
const Modal$1 = Modal;
const Nav$1 = Nav;
const ResetPassword$1 = ResetPassword;

exports.Actions = Actions$1;
exports.AddForm = AddForm$1;
exports.App = App$1;
exports.Auth = Auth$1;
exports.EditForm = EditForm$1;
exports.Error = Error$1;
exports.ForgotPassword = ForgotPassword$1;
exports.IndexTable = IndexTable$1;
exports.Login = Login$1;
exports.MetaTitle = MetaTitle$1;
exports.Modal = Modal$1;
exports.MyForm = MyForm$1;
exports.Nav = Nav$1;
exports.ResetPassword = ResetPassword$1;
exports.errorMessageText = errorMessageText$1;
//# sourceMappingURL=index.js.map
