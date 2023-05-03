import { FormosaContext, Api, FormContext, Form, Field, Message, Submit, FormContainer, Input } from '@jlbelanger/formosa';
import { useHistory, NavLink, Prompt, Link, useParams, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React__default, { useRef, useEffect, useContext, useState, createElement } from 'react';
import get from 'get-value';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

var capitalize = function capitalize(s) {
  return s.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
var cleanKey = function cleanKey(key) {
  return key.replace(/^relationships\./, '');
};

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
var getErrorMessage = function getErrorMessage(response) {
  if (response.message) {
    return "Error: " + response.message;
  }

  if (response.errors) {
    return "Error: " + response.errors.map(function (error) {
      return error.title;
    }).join(', ');
  }

  return 'Error loading data. Please try again later.';
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

function Modal(_ref) {
  var cancelable = _ref.cancelable,
      cancelButtonClass = _ref.cancelButtonClass,
      cancelButtonText = _ref.cancelButtonText,
      children = _ref.children,
      event = _ref.event,
      okButtonClass = _ref.okButtonClass,
      okButtonText = _ref.okButtonText,
      onClickCancel = _ref.onClickCancel,
      onClickOk = _ref.onClickOk,
      text = _ref.text;
  var dialogRef = useRef(null);

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

  useEffect(function () {
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
  useEffect(function () {
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
  }, /*#__PURE__*/React__default.createElement("button", {
    className: ("formosa-button " + okButtonClass).trim(),
    onClick: onClickOk,
    type: "button"
  }, okButtonText), /*#__PURE__*/React__default.createElement("button", {
    className: ("formosa-button " + cancelButtonClass).trim(),
    onClick: onClickCancel,
    type: "button"
  }, cancelButtonText))));
}
Modal.propTypes = {
  cancelable: PropTypes.bool,
  cancelButtonClass: PropTypes.string,
  cancelButtonText: PropTypes.string,
  children: PropTypes.node,
  event: PropTypes.object.isRequired,
  okButtonClass: PropTypes.string,
  okButtonText: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickOk: PropTypes.func,
  text: PropTypes.string
};
Modal.defaultProps = {
  cancelable: true,
  cancelButtonClass: 'crudnick-button--secondary',
  cancelButtonText: 'Cancel',
  children: null,
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
      showSave = _ref.showSave,
      singular = _ref.singular,
      subpages = _ref.subpages;
  var history = useHistory();

  var _useContext = useContext(FormosaContext),
      addToast = _useContext.addToast,
      disableWarningPrompt = _useContext.disableWarningPrompt,
      enableWarningPrompt = _useContext.enableWarningPrompt;

  var _useState = useState(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  var onDelete = function onDelete() {
    setShowModal(false);
    disableWarningPrompt();
    Api["delete"](apiPath + "/" + row.id).then(function () {
      addToast(capitalize(singular) + " deleted successfully.", 'success');
      history.push("/" + path);
      enableWarningPrompt();
    })["catch"](function (response) {
      var text = response.message ? response.message : response.errors.map(function (err) {
        return err.title;
      }).join(' ');
      addToast(text, 'error', 10000);
      enableWarningPrompt();
    });
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, showSave && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button",
    type: "submit",
    form: "crudnick-edit-form"
  }, saveButtonText)), currentPage !== '/' && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(NavLink, {
    className: "crudnick-list__button formosa-button",
    to: "/" + path + "/" + row.id
  }, "Edit")), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button formosa-button--danger",
    onClick: function onClick(e) {
      setShowModal(e);
    },
    type: "button"
  }, "Delete"), showModal && /*#__PURE__*/React__default.createElement(Modal, {
    event: showModal,
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
    }, /*#__PURE__*/React__default.createElement(NavLink, {
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
  row: PropTypes.object,
  showSave: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  subpages: PropTypes.array
};
Actions.defaultProps = {
  children: null,
  row: null,
  saveButtonText: 'Save',
  showSave: true,
  subpages: []
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

function MetaTitle(_ref) {
  var title = _ref.title;
  useEffect(function () {
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
  var _useContext = useContext(FormContext),
      getDirtyKeys = _useContext.getDirtyKeys;

  return /*#__PURE__*/React__default.createElement(Prompt, {
    when: getDirtyKeys().length > 0,
    message: "You have unsaved changes. Are you sure you want to leave this page?"
  });
}

var _excluded = ["children"];
function MyForm(_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(FormosaContext),
      showWarningPrompt = _useContext.showWarningPrompt;

  return /*#__PURE__*/React__default.createElement(Form, otherProps, children, showWarningPrompt && /*#__PURE__*/React__default.createElement(MyFormPrompt, null));
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

  var _useState = useState(defaultRow),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = useState(false),
      addAnother = _useState2[0],
      setAddAnother = _useState2[1];

  var history = useHistory();

  var afterSubmit = function afterSubmit(response) {
    if (!addAnother) {
      history.push("/" + path + "/" + response.id);
    }
  };

  var FormComponent = component;
  componentProps.formType = 'add';
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: titlePrefixText + " " + singular
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", null, titlePrefixText + " " + singular), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    form: "crudnick-add-form",
    type: "submit"
  }, saveButtonText)), showAddAnother && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Field, {
    id: "crudnick-add-another",
    label: addAnotherText,
    labelPosition: "after",
    setValue: setAddAnother,
    type: "checkbox",
    value: addAnother
  })))), /*#__PURE__*/React__default.createElement(MyForm, _extends({
    afterSubmit: afterSubmit,
    clearOnSubmit: true,
    defaultRow: defaultRow,
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

  Auth.logout = function logout() {
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_user");
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_token");
    window.location.href = window.location.origin + process.env.PUBLIC_URL;
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

function ForgotPassword() {
  var _useState = useState({}),
      row = _useState[0],
      setRow = _useState[1];

  return /*#__PURE__*/React__default.createElement(Form, {
    className: "crudnick-auth-form",
    clearOnSubmit: true,
    method: "POST",
    path: "auth/forgot-password",
    row: row,
    setRow: setRow,
    showMessage: false,
    successMessageText: "If there is an account with this email address, you will receive a password reset email shortly."
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Forgot your password?"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Forgot your password?"), /*#__PURE__*/React__default.createElement(Message, null), /*#__PURE__*/React__default.createElement(Field, {
    autoComplete: "email",
    label: "Email",
    name: "email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React__default.createElement(Submit, {
    label: "Send link",
    postfix: /*#__PURE__*/React__default.createElement(Link, {
      className: "formosa-button crudnick-button--link",
      to: "/"
    }, "Back to login")
  }));
}

function Login() {
  var _useState = useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var afterSubmit = function afterSubmit(response) {
    Auth.login(response.user, response.token, response.remember);
    window.location.reload();
  };

  return /*#__PURE__*/React__default.createElement(Form, {
    afterSubmit: afterSubmit,
    className: "crudnick-auth-form",
    method: "POST",
    path: "auth/login",
    row: row,
    setRow: setRow,
    showMessage: false
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Login"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Login"), /*#__PURE__*/React__default.createElement(Message, null), /*#__PURE__*/React__default.createElement(Field, {
    autoCapitalize: "none",
    autoComplete: "username",
    label: "Username",
    name: "username",
    required: true,
    type: "text"
  }), /*#__PURE__*/React__default.createElement(Field, {
    autoComplete: "current-password",
    label: "Password",
    name: "password",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(Field, {
    label: "Remember me",
    labelPosition: "after",
    name: "remember",
    type: "checkbox"
  }), /*#__PURE__*/React__default.createElement(Submit, {
    label: "Log in",
    postfix: /*#__PURE__*/React__default.createElement(Link, {
      className: "formosa-button crudnick-button--link",
      to: "/forgot-password"
    }, "Forgot password?")
  }));
}

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
  return /*#__PURE__*/createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
    d: "M0 0v1h8V0H0zm0 3v1h8V3H0zm0 3v1h8V6H0z"
  })));
}

function Nav(_ref) {
  var nav = _ref.nav;

  var _useContext = useContext(FormosaContext),
      addToast = _useContext.addToast;

  var _useState = useState(false),
      showMenu = _useState[0],
      setShowMenu = _useState[1];

  var logout = function logout() {
    Api["delete"]('auth/logout').then(function () {
      Auth.logout();
    })["catch"](function (response) {
      if (response.status === 401 || response.status === 404) {
        Auth.logout();
        return;
      }

      var text = response.message ? response.message : response.errors.map(function (err) {
        return err.title;
      }).join(' ');
      addToast(text, 'error', 10000);
    });
  };

  var toggleMenu = function toggleMenu() {
    setShowMenu(!showMenu);
  };

  var hideMenu = function hideMenu() {
    setShowMenu(false);
  };

  return /*#__PURE__*/React__default.createElement("nav", {
    id: "crudnick-nav"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list" + (showMenu ? ' show' : ''),
    id: "crudnick-nav__list"
  }, nav.map(function (_ref2) {
    var label = _ref2.label,
        path = _ref2.path;
    return /*#__PURE__*/React__default.createElement("li", {
      className: "crudnick-list__item",
      key: path
    }, /*#__PURE__*/React__default.createElement(NavLink, {
      activeClassName: "active",
      className: "formosa-button crudnick-list__button",
      onClick: hideMenu,
      to: path
    }, label));
  }), /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button crudnick-list__button",
    id: "crudnick-logout",
    onClick: logout,
    type: "button"
  }, "Logout"))), /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    id: "crudnick-menu-button",
    onClick: toggleMenu,
    type: "button"
  }, /*#__PURE__*/React__default.createElement(SvgMenu, {
    "aria-hidden": "true"
  }), "Menu"));
}
Nav.propTypes = {
  nav: PropTypes.array.isRequired
};

function ResetPassword() {
  var _useState = useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var _useParams = useParams(),
      token = _useParams.token;

  var history = useHistory();
  return /*#__PURE__*/React__default.createElement(Form, {
    afterSubmit: function afterSubmit() {
      history.push('/');
    },
    className: "crudnick-auth-form",
    method: "PUT",
    path: "auth/reset-password/" + token,
    row: row,
    setRow: setRow,
    showMessage: false,
    successToastText: "Password reset successfully."
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Reset password"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Reset password"), /*#__PURE__*/React__default.createElement(Message, null), /*#__PURE__*/React__default.createElement(Field, {
    autoComplete: "email",
    label: "Email",
    name: "email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React__default.createElement(Field, {
    autoComplete: "new-password",
    label: "New password",
    name: "new_password",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(Field, {
    autoComplete: "new-password",
    label: "Confirm new password",
    name: "new_password_confirmation",
    required: true,
    type: "password"
  }), /*#__PURE__*/React__default.createElement(Submit, {
    label: "Reset password"
  }));
}

function App(_ref) {
  var articleProps = _ref.articleProps,
      children = _ref.children,
      nav = _ref.nav,
      routerAttributes = _ref.routerAttributes;

  if (Auth.isLoggedIn() && !Api.getToken()) {
    Api.setToken(Auth.token());
  }

  document.addEventListener('formosaApiRequest', function () {
    Auth.refresh();
  });
  return /*#__PURE__*/React__default.createElement(BrowserRouter, routerAttributes, /*#__PURE__*/React__default.createElement(FormContainer, null, Auth.isLoggedIn() && /*#__PURE__*/React__default.createElement(Nav, {
    nav: nav
  }), /*#__PURE__*/React__default.createElement("article", _extends({
    id: "crudnick-article"
  }, articleProps), Auth.isLoggedIn() ? children : /*#__PURE__*/React__default.createElement(Switch, null, /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React__default.createElement(Login, null)), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: "/forgot-password"
  }, /*#__PURE__*/React__default.createElement(ForgotPassword, null)), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: "/reset-password/:token"
  }, /*#__PURE__*/React__default.createElement(ResetPassword, null)), /*#__PURE__*/React__default.createElement(Route, null, /*#__PURE__*/React__default.createElement(Redirect, {
    to: "/"
  }))))));
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

  var _useParams = useParams(),
      id = _useParams.id;

  var _useState = useState(null),
      row = _useState[0],
      setRow = _useState[1];

  var _useState2 = useState(false),
      error = _useState2[0],
      setError = _useState2[1];

  useEffect(function () {
    Api.get(url).then(function (response) {
      setError(null);

      if (transform) {
        setRow(transform(response));
      } else {
        setRow(response);
      }
    })["catch"](function (response) {
      if (response.status === 401) {
        document.getElementById('crudnick-logout').click();
        return;
      }

      setError(response);
      setRow(null);
    });
  }, [url]);
  var FormComponent = component;
  componentProps.formType = 'edit';
  var metaTitle = row ? titlePrefixText + " " + (typeof name === 'function' ? name(row) : get(row, name)) : '';
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: metaTitle
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", null, titlePrefixText + " " + singular), row && /*#__PURE__*/React__default.createElement(Actions, {
    apiPath: apiPath,
    currentPage: "/",
    path: path,
    saveButtonText: saveButtonText,
    row: row,
    singular: singular,
    subpages: subpages
  }, actions ? actions(row, setRow) : null)), error && /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-message formosa-message--error"
  }, getErrorMessage(error)), row && /*#__PURE__*/React__default.createElement(MyForm, _extends({
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

function SvgArrow(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/createElement("path", {
    d: "M0 2l4 4 4-4H0z"
  })));
}

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

function SvgCheck(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/createElement("path", {
    d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z"
  })));
}

function IndexTable(_ref) {
  var columns = _ref.columns,
      defaultOptions = _ref.defaultOptions,
      path = _ref.path,
      title = _ref.title,
      url = _ref.url;

  var _useState = useState(null),
      rows = _useState[0],
      setRows = _useState[1];

  var _useState2 = useState([]),
      filteredRows = _useState2[0],
      setFilteredRows = _useState2[1];

  var _useState3 = useState(false),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = useState('name'),
      sortKey = _useState4[0],
      setSortKey = _useState4[1];

  var _useState5 = useState('asc'),
      sortDir = _useState5[0],
      setSortDir = _useState5[1];

  var _useState6 = useState(function () {
    var output = {};
    columns.forEach(function (column) {
      output[cleanKey(column.key)] = '';
    });
    return output;
  }),
      filters = _useState6[0],
      setFilters = _useState6[1];

  useEffect(function () {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortKey')) {
      setSortKey(defaultOptions.sortKey);
    }

    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortDir')) {
      setSortDir(defaultOptions.sortDir);
    }

    if (Object.prototype.hasOwnProperty.call(defaultOptions, 'filters')) {
      setFilters(defaultOptions.filters);
    }

    Api.get(url, false).then(function (response) {
      setError(null);
      setRows(response);
      setFilteredRows(response);
    })["catch"](function (response) {
      if (response.status === 401) {
        document.getElementById('crudnick-logout').click();
        return;
      }

      setError(response);
      setRows(null);
      setFilteredRows([]);
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
        return /*#__PURE__*/React__default.createElement(Link, {
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
  }, /*#__PURE__*/React__default.createElement("h1", null, /*#__PURE__*/React__default.createElement("span", null, title), /*#__PURE__*/React__default.createElement("small", null, rows ? numResults : null)), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement(Link, {
    className: "formosa-button crudnick-list__button",
    to: "/" + path + "/add"
  }, "Add new")))), error ? /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-message formosa-message--error"
  }, getErrorMessage(error)) : /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement("th", _extends({
      key: column.key,
      scope: "col",
      style: {
        width: column.size ? 0 : null
      }
    }, column.thAttributes), column.disableSort ? column.shortLabel || column.label : /*#__PURE__*/React__default.createElement("button", {
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
        size = _ref2.size;
    return /*#__PURE__*/React__default.createElement("td", {
      className: "formosa-input-wrapper--search",
      key: key
    }, !disableSearch && /*#__PURE__*/React__default.createElement(Input, {
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
    style: {
      justifyContent: 'center',
      margin: '16px auto'
    }
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
var ForgotPassword$1 = ForgotPassword;
var IndexTable$1 = IndexTable;
var Login$1 = Login;
var MetaTitle$1 = MetaTitle;
var MyForm$1 = MyForm;
var Modal$1 = Modal;
var Nav$1 = Nav;
var ResetPassword$1 = ResetPassword;

export { Actions$1 as Actions, AddForm$1 as AddForm, App$1 as App, Auth$1 as Auth, EditForm$1 as EditForm, ForgotPassword$1 as ForgotPassword, IndexTable$1 as IndexTable, Login$1 as Login, MetaTitle$1 as MetaTitle, Modal$1 as Modal, MyForm$1 as MyForm, Nav$1 as Nav, ResetPassword$1 as ResetPassword };
//# sourceMappingURL=index.modern.js.map
