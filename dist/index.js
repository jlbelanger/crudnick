function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var formosa = require('@jlbelanger/formosa');
var reactRouterDom = require('react-router-dom');
var React = require('react');
var React__default = _interopDefault(React);
var Cookies = _interopDefault(require('js-cookie'));
var PropTypes = _interopDefault(require('prop-types'));
var get = _interopDefault(require('get-value'));

var capitalize = function capitalize(s) {
  return s.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
var cleanKey = function cleanKey(key) {
  return key.replace(/^relationships\./, '');
};

var Auth = /*#__PURE__*/function () {
  function Auth() {}

  Auth.login = function login(user, token, remember) {
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_user", JSON.stringify(user), Auth.attributes(remember));
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_token", token, Auth.attributes(remember));
  };

  Auth.refresh = function refresh() {
    var user = Auth.user();
    user = user ? JSON.parse(user) : null;

    if (user && user.remember) {
      Auth.login(user, Auth.token(), user.remember);
    }
  };

  Auth.attributes = function attributes(remember) {
    var attributes = {
      sameSite: 'lax'
    };

    if (remember) {
      attributes.expires = 365;
    }

    if (window.location.protocol === 'https:') {
      attributes.secure = true;
    }

    return attributes;
  };

  Auth.logout = function logout(status) {
    if (status === void 0) {
      status = '';
    }

    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_user");
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_token");
    window.location.href = "" + (process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/') + (status ? "?status=" + status : '');
  };

  Auth.id = function id() {
    var user = Auth.user();
    return user ? JSON.parse(user).id : null;
  };

  Auth.user = function user() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_user");
  };

  Auth.token = function token() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_token");
  };

  Auth.isLoggedIn = function isLoggedIn() {
    return !!Auth.user() && !!Auth.token();
  };

  return Auth;
}();

var errorMessageText = function errorMessageText(response, logout) {
  if (logout === void 0) {
    logout = true;
  }

  if (logout && response.status === 401) {
    return Auth.logout(response.status);
  }

  return "Error: " + response.errors.map(function (e) {
    return e.title;
  }).join(' ');
};

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function Modal(_ref) {
  var cancelable = _ref.cancelable,
      cancelButtonAttributes = _ref.cancelButtonAttributes,
      cancelButtonClass = _ref.cancelButtonClass,
      cancelButtonText = _ref.cancelButtonText,
      children = _ref.children,
      event = _ref.event,
      okButtonAttributes = _ref.okButtonAttributes,
      okButtonClass = _ref.okButtonClass,
      okButtonText = _ref.okButtonText,
      onClickCancel = _ref.onClickCancel,
      onClickOk = _ref.onClickOk,
      text = _ref.text;
  var dialogRef = React.useRef(null);

  var onKeydown = function onKeydown(e) {
    if (e.key === 'Escape' && onClickCancel) {
      onClickCancel();
    }
  };

  var onClickDialog = function onClickDialog(e) {
    if (e.target.tagName === 'DIALOG' && onClickCancel) {
      onClickCancel();
    }
  };

  React.useEffect(function () {
    document.body.classList.add('crudnick-modal-open');

    if (cancelable) {
      document.addEventListener('keydown', onKeydown);
    }

    return function () {
      document.body.classList.remove('crudnick-modal-open');

      if (cancelable) {
        document.removeEventListener('keydown', onKeydown);
      }

      if (event.target) {
        event.target.focus();
      }
    };
  }, []);
  React.useEffect(function () {
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
  var apiPath = _ref.apiPath,
      children = _ref.children,
      currentPage = _ref.currentPage,
      path = _ref.path,
      row = _ref.row,
      saveButtonText = _ref.saveButtonText,
      setActionError = _ref.setActionError,
      showSave = _ref.showSave,
      singular = _ref.singular,
      subpages = _ref.subpages;
  var history = reactRouterDom.useHistory();

  var _useContext = React.useContext(formosa.FormosaContext),
      addToast = _useContext.addToast,
      disableWarningPrompt = _useContext.disableWarningPrompt,
      enableWarningPrompt = _useContext.enableWarningPrompt;

  var _useState = React.useState(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  var submitRef = React.useRef(null);

  var onKeyDown = function onKeyDown(e) {
    if (e.key === 's' && e.metaKey && submitRef && submitRef.current) {
      e.preventDefault();
      submitRef.current.click();
    }
  };

  React.useEffect(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  var onDelete = function onDelete() {
    setShowModal(false);
    disableWarningPrompt();
    formosa.Api["delete"](apiPath + "/" + row.id)["catch"](function (response) {
      if (setActionError) {
        setActionError(errorMessageText(response));
      } else {
        addToast(errorMessageText(response), 'error', 10000);
      }

      enableWarningPrompt();
    }).then(function (response) {
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
  }, "Edit")), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button formosa-button--danger",
    "data-cy": "delete",
    onClick: function onClick(e) {
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
    onClickCancel: function onClickCancel() {
      setShowModal(false);
    },
    text: "Are you sure you want to delete this " + singular + "?"
  })), process.env.REACT_APP_FRONTEND_URL && row.url && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    className: "crudnick-list__button formosa-button crudnick-button--secondary",
    href: "" + process.env.REACT_APP_FRONTEND_URL + row.url,
    rel: "noreferrer",
    target: "_blank"
  }, "View")), subpages.map(function (page) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: page
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      className: "crudnick-list__button formosa-button crudnick-button--secondary",
      to: "/" + path + "/" + row.id + "/" + page.toLowerCase()
    }, page));
  }), children);
}
Actions.propTypes = {
  apiPath: PropTypes.string.isRequired,
  children: PropTypes.node,
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  saveButtonText: PropTypes.string,
  setActionError: PropTypes.func,
  row: PropTypes.object,
  showSave: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  subpages: PropTypes.array
};
Actions.defaultProps = {
  children: null,
  row: null,
  saveButtonText: 'Save',
  setActionError: null,
  showSave: true,
  subpages: []
};

function MetaTitle(_ref) {
  var title = _ref.title;
  React.useEffect(function () {
    var metaTitle = title;

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
  var _useContext = React.useContext(formosa.FormContext),
      getDirtyKeys = _useContext.getDirtyKeys;

  return /*#__PURE__*/React__default.createElement(reactRouterDom.Prompt, {
    when: getDirtyKeys().length > 0,
    message: "You have unsaved changes. Are you sure you want to leave this page?"
  });
}

var _excluded = ["children"];
function MyForm(_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = React.useContext(formosa.FormosaContext),
      showWarningPrompt = _useContext.showWarningPrompt;

  return /*#__PURE__*/React__default.createElement(formosa.Form, otherProps, children, showWarningPrompt && /*#__PURE__*/React__default.createElement(MyFormPrompt, null));
}
MyForm.propTypes = {
  children: PropTypes.node.isRequired
};

var _excluded$1 = ["addAnotherText", "apiPath", "component", "componentProps", "defaultRow", "extra", "filterBody", "filterValues", "path", "relationshipNames", "saveButtonText", "showAddAnother", "singular", "titlePrefixText"];
function AddForm(_ref) {
  var addAnotherText = _ref.addAnotherText,
      apiPath = _ref.apiPath,
      component = _ref.component,
      componentProps = _ref.componentProps,
      defaultRow = _ref.defaultRow,
      extra = _ref.extra,
      filterBody = _ref.filterBody,
      filterValues = _ref.filterValues,
      path = _ref.path,
      relationshipNames = _ref.relationshipNames,
      saveButtonText = _ref.saveButtonText,
      showAddAnother = _ref.showAddAnother,
      singular = _ref.singular,
      titlePrefixText = _ref.titlePrefixText,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _useState = React.useState(defaultRow),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = React.useState(false),
      addAnother = _useState2[0],
      setAddAnother = _useState2[1];

  var history = reactRouterDom.useHistory();
  var submitRef = React.useRef(null);

  var afterSubmitSuccess = function afterSubmitSuccess(response) {
    if (!addAnother) {
      history.push("/" + path + "/" + response.id);
    }
  };

  var FormComponent = component;
  componentProps.formType = 'add';

  var onKeyDown = function onKeyDown(e) {
    if (e.key === 's' && e.metaKey && submitRef && submitRef.current) {
      e.preventDefault();
      submitRef.current.click();
    }
  };

  React.useEffect(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
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
  _extends$1 = Object.assign || function (target) {
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
  _extends$2 = Object.assign || function (target) {
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
  var nav = _ref.nav;

  var _useContext = React.useContext(formosa.FormosaContext),
      addToast = _useContext.addToast;

  var dialogRef = React.useRef(null);
  var breakpoint = 1025;

  var _useState = React.useState(window.innerWidth >= breakpoint),
      showInlineNav = _useState[0],
      setShowInlineNav = _useState[1];

  var onTransitionEnd = function onTransitionEnd() {
    document.body.classList.remove('show-nav');

    if (dialogRef.current.tagName === 'DIALOG') {
      dialogRef.current.close();
    }

    dialogRef.current.removeEventListener('transitionend', onTransitionEnd);
  };

  var onResize = function onResize() {
    setShowInlineNav(window.innerWidth >= breakpoint);
  };

  React.useEffect(function () {
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  React.useEffect(function () {
    if (showInlineNav) {
      hideMenu();
      onTransitionEnd();
    }
  }, [showInlineNav]);

  var logout = function logout() {
    formosa.Api["delete"]('auth/logout')["catch"](function (response) {
      if (response.status === 401) {
        return;
      }

      addToast(errorMessageText(response), 'error');
    }).then(function () {
      Auth.logout();
    });
  };

  var hideMenu = function hideMenu() {
    document.body.classList.remove('animate-nav');
    dialogRef.current.addEventListener('transitionend', onTransitionEnd);
  };

  var openMenu = function openMenu() {
    document.body.classList.add('show-nav');
    dialogRef.current.showModal();
    setTimeout(function () {
      document.body.classList.add('animate-nav');
    }, 10);
  };

  var onCancelDialog = function onCancelDialog(e) {
    e.preventDefault();
    hideMenu();
  };

  var onClickDialog = function onClickDialog(e) {
    if (e.target.tagName === 'DIALOG') {
      hideMenu();
    }
  };

  var Dialog = showInlineNav ? 'div' : 'dialog';
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
  }, nav.map(function (_ref2) {
    var label = _ref2.label,
        path = _ref2.path;
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
  var history = reactRouterDom.useHistory();

  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = React.useState(false),
      message = _useState2[0],
      setMessage = _useState2[1];

  React.useEffect(function () {
    var urlSearchParams = new URLSearchParams(history.location.search);

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
    beforeSubmit: function beforeSubmit() {
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
  var message = _ref.message,
      row = _ref.row,
      setMessage = _ref.setMessage,
      setShowVerificationButton = _ref.setShowVerificationButton,
      showVerificationButton = _ref.showVerificationButton;

  var _useContext = React.useContext(formosa.FormContext),
      clearAlert = _useContext.clearAlert;

  var resendVerificationEmail = function resendVerificationEmail() {
    clearAlert();
    setMessage(null);
    setShowVerificationButton(false);
    var data = {
      username: row.username || showVerificationButton
    };
    formosa.Api.post('auth/resend-verification', JSON.stringify(data))["catch"](function (response) {
      setMessage(errorMessageText(response));
    }).then(function (response) {
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
  var history = reactRouterDom.useHistory();

  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = React.useState(null),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = React.useState(false),
      showVerificationButton = _useState3[0],
      setShowVerificationButton = _useState3[1];

  var beforeSubmit = function beforeSubmit() {
    setMessage(null);
    setShowVerificationButton(false);
    return true;
  };

  var afterSubmitFailure = function afterSubmitFailure(response) {
    setShowVerificationButton(response.errors[0].code === 'auth.unverified');
  };

  var afterSubmitSuccess = function afterSubmitSuccess(response) {
    var urlSearchParams = new URLSearchParams(history.location.search);
    var redirect;

    if (urlSearchParams.get('redirect') && urlSearchParams.get('redirect')[0] === '/') {
      redirect = urlSearchParams.get('redirect');
    } else {
      redirect = process.env.PUBLIC_URL || '/';
    }

    Auth.login(response.user, response.token, response.user.remember);
    window.location.href = redirect;
  };

  React.useEffect(function () {
    var urlSearchParams = new URLSearchParams(history.location.search);

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
    errorMessageText: function errorMessageText$1(response) {
      return errorMessageText(response, false);
    },
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
  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var _useParams = reactRouterDom.useParams(),
      token = _useParams.token;

  var history = reactRouterDom.useHistory();
  React.useEffect(function () {
    var urlSearchParams = new URLSearchParams(history.location.search);

    if (urlSearchParams.get('expires') < Math.floor(Date.now() / 1000)) {
      history.push('/?expired=1');
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(formosa.Form, {
    afterSubmitSuccess: function afterSubmitSuccess() {
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
  var location = reactRouterDom.useLocation();
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
  var articleProps = _ref.articleProps,
      children = _ref.children,
      nav = _ref.nav,
      routerAttributes = _ref.routerAttributes;

  if (Auth.isLoggedIn() && !formosa.Api.getToken()) {
    formosa.Api.setToken(Auth.token());
  }

  document.addEventListener('formosaApiRequest', function () {
    Auth.refresh();
  });

  var onClick = function onClick(e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').split('#')[1];
    var elem = document.getElementById(id);
    elem.setAttribute('tabindex', -1);
    elem.addEventListener('blur', function () {
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
  var error = _ref.error;

  if (error.status === 401) {
    Auth.logout(error.status);
    return null;
  }

  var message = 'Error loading data. Please try again later.';

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

var _excluded$2 = ["actions", "apiPath", "component", "componentProps", "extra", "filterBody", "filterValues", "name", "path", "relationshipNames", "saveButtonText", "singular", "subpages", "titlePrefixText", "transform", "url"];
function EditForm(_ref) {
  var actions = _ref.actions,
      apiPath = _ref.apiPath,
      component = _ref.component,
      componentProps = _ref.componentProps,
      extra = _ref.extra,
      filterBody = _ref.filterBody,
      filterValues = _ref.filterValues,
      name = _ref.name,
      path = _ref.path,
      relationshipNames = _ref.relationshipNames,
      saveButtonText = _ref.saveButtonText,
      singular = _ref.singular,
      subpages = _ref.subpages,
      titlePrefixText = _ref.titlePrefixText,
      transform = _ref.transform,
      url = _ref.url,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var _useParams = reactRouterDom.useParams(),
      id = _useParams.id;

  var _useState = React.useState(null),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = React.useState(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = React.useState(false),
      actionError = _useState3[0],
      setActionError = _useState3[1];

  var api = formosa.Api.instance();
  React.useEffect(function () {
    api(url)["catch"](function (response) {
      setError(response);
    }).then(function (response) {
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

  var afterSubmitFailure = function afterSubmitFailure(e) {
    setActionError(errorMessageText(e));
  };

  var FormComponent = component;
  componentProps.formType = 'edit';
  var metaTitle = row ? titlePrefixText + " " + (typeof name === 'function' ? name(row) : get(row, name)) : '';
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
    singular: singular,
    subpages: subpages
  }, actions ? actions(row, setRow) : null)), actionError && /*#__PURE__*/React__default.createElement(formosa.Alert, {
    type: "error"
  }, actionError), row && /*#__PURE__*/React__default.createElement(MyForm, _extends({
    afterSubmitFailure: afterSubmitFailure,
    beforeSubmit: function beforeSubmit() {
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
  subpages: [],
  titlePrefixText: 'Edit',
  transform: null
};

var _path$2;

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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
  _extends$4 = Object.assign || function (target) {
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

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
};

var filterByKey = function filterByKey(records, key, value) {
  value = value.trim().toLowerCase();
  var escapedValue = escapeRegExp(value);
  records = records.filter(function (record) {
    var recordValue = (get(record, key) || '').toString().replace(/<[^>]+?>/g, '').toLowerCase();
    return recordValue.match(new RegExp("(^|[^a-z])" + escapedValue));
  });
  records = records.sort(function (a, b) {
    var aValue = (get(a, key) || '').toString().toLowerCase();
    var bValue = (get(b, key) || '').toString().toLowerCase();
    var aPos = aValue.indexOf(value) === 0;
    var bPos = bValue.indexOf(value) === 0;

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

var filterByKeys = function filterByKeys(records, filters) {
  Object.keys(filters).forEach(function (key) {
    records = filterByKey(records, key, filters[key]);
  });
  return records;
};

var sortByKey = function sortByKey(records, key, dir) {
  return records.sort(function (a, b) {
    var aVal = get(a, key);

    if (aVal === undefined || aVal === null) {
      aVal = '';
    }

    var bVal = get(b, key);

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
};

function IndexTable(_ref) {
  var columns = _ref.columns,
      defaultOptions = _ref.defaultOptions,
      path = _ref.path,
      title = _ref.title,
      url = _ref.url;

  var _useState = React.useState(null),
      rows = _useState[0],
      setRows = _useState[1];

  var _useState2 = React.useState([]),
      filteredRows = _useState2[0],
      setFilteredRows = _useState2[1];

  var _useState3 = React.useState(false),
      rowsError = _useState3[0],
      setRowsError = _useState3[1];

  var _useState4 = React.useState('name'),
      sortKey = _useState4[0],
      setSortKey = _useState4[1];

  var _useState5 = React.useState('asc'),
      sortDir = _useState5[0],
      setSortDir = _useState5[1];

  var _useState6 = React.useState(function () {
    var output = {};
    columns.forEach(function (column) {
      output[cleanKey(column.key)] = '';
    });
    return output;
  }),
      filters = _useState6[0],
      setFilters = _useState6[1];

  var api = formosa.Api.instance();
  React.useEffect(function () {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortKey')) {
      setSortKey(defaultOptions.sortKey);
    }

    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortDir')) {
      setSortDir(defaultOptions.sortDir);
    }

    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'filters')) {
      setFilters(defaultOptions.filters);
    }

    api(url, false)["catch"](function (response) {
      setRowsError(errorMessageText(response));
      setRows(null);
      setFilteredRows([]);
    }).then(function (response) {
      if (!response) {
        return;
      }

      setRows(response);
      setFilteredRows(response);
    });
  }, [url]);

  var sort = function sort(e) {
    var newSortKey = e.target.getAttribute('data-key');
    var newSortDir;

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

  var numRows = rows ? rows.length : 0;
  var numResults = " (" + filteredRows.length.toLocaleString();

  if (filteredRows.length !== numRows) {
    numResults += " of " + numRows.toLocaleString();
  }

  numResults += " result" + (numRows === 1 ? '' : 's') + ")";
  columns = columns.map(function (column) {
    if (column.link) {
      column.fn = function (row, value) {
        return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
          className: "crudnick-link--table",
          to: "/" + path + "/" + row.id
        }, value);
      };
    } else if (column.type === 'checkbox') {
      column.fn = function (_row, value) {
        return value ? /*#__PURE__*/React__default.createElement(SvgCheck, {
          "aria-hidden": "true",
          height: 16,
          width: 16
        }) : null;
      };

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
  }, rowsError) : /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement("th", _extends({
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
    }) : null));
  })), /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (_ref2) {
    var key = _ref2.key,
        disableSearch = _ref2.disableSearch,
        label = _ref2.label,
        size = _ref2.size;
    return /*#__PURE__*/React__default.createElement("td", {
      className: "formosa-input-wrapper--search",
      key: key
    }, !disableSearch && /*#__PURE__*/React__default.createElement(formosa.Input, {
      "aria-label": "Search " + label,
      className: "formosa-field__input",
      disabled: rows === null,
      setValue: function setValue(newValue) {
        var _extends2;

        var newFilters = _extends({}, filters, (_extends2 = {}, _extends2[cleanKey(key)] = newValue, _extends2));

        setFilters(newFilters);
        var newRows = filterByKeys(rows, newFilters);
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
  }, "Loading..."))) : filteredRows.map(function (row) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: row.id
    }, columns.map(function (_ref3) {
      var fn = _ref3.fn,
          key = _ref3.key;
      return /*#__PURE__*/React__default.createElement("td", {
        className: "crudnick-cell--" + key,
        key: key
      }, fn ? fn(row, get(row, cleanKey(key)), key) : get(row, cleanKey(key)));
    }));
  }))));
}
IndexTable.propTypes = {
  columns: PropTypes.array.isRequired,
  defaultOptions: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

var Actions$1 = Actions;
var AddForm$1 = AddForm;
var App$1 = App;
var Auth$1 = Auth;
var EditForm$1 = EditForm;
var Error$1 = Error;
var errorMessageText$1 = errorMessageText;
var ForgotPassword$1 = ForgotPassword;
var IndexTable$1 = IndexTable;
var Login$1 = Login;
var MetaTitle$1 = MetaTitle;
var MyForm$1 = MyForm;
var Modal$1 = Modal;
var Nav$1 = Nav;
var ResetPassword$1 = ResetPassword;

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
