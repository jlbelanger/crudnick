function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var formosa = require('@jlbelanger/formosa');
var reactRouterDom = require('react-router-dom');
var Cookies = _interopDefault(require('js-cookie'));
var get = _interopDefault(require('get-value'));

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

function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z"
  })));
}

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
    return function () {};
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
      formState = _useContext.formState;

  return /*#__PURE__*/React__default.createElement(reactRouterDom.Prompt, {
    when: formState.dirty.length > 0,
    message: "You have unsaved changes. Are you sure you want to leave this page?"
  });
}

var _excluded = ["children"];
function MyForm(_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React__default.createElement(formosa.Form, otherProps, children, /*#__PURE__*/React__default.createElement(MyFormPrompt, null));
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

  var onChange = function onChange(e) {
    setAddAnother(e.target.checked);
  };

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
  }, saveButtonText)), showAddAnother && /*#__PURE__*/React__default.createElement("li", {
    className: "formosa-field--label-after",
    id: "crudnick-add-another-wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-input-wrapper formosa-input-wrapper--checkbox"
  }, /*#__PURE__*/React__default.createElement("input", {
    className: "formosa-field__input formosa-field__input--checkbox",
    checked: addAnother,
    id: "crudnick-add-another",
    onChange: onChange,
    type: "checkbox"
  }), /*#__PURE__*/React__default.createElement(SvgCheck, {
    className: "formosa-icon--check",
    height: 16,
    width: 16
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-label-wrapper formosa-label-wrapper--checkbox"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "formosa-label",
    htmlFor: "crudnick-add-another"
  }, addAnotherText)))))), /*#__PURE__*/React__default.createElement(MyForm, _extends({
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
    successToastText: singular + " added successfully."
  }, otherProps), /*#__PURE__*/React__default.createElement(FormComponent, componentProps)), extra ? extra(row) : null);
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
  titlePrefixText: 'Add '
};

var Auth = /*#__PURE__*/function () {
  function Auth() {}

  Auth.login = function login(id, token, remember) {
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_id", id, Auth.attributes(remember));
    Cookies.set(process.env.REACT_APP_COOKIE_PREFIX + "_token", token, Auth.attributes(remember));
  };

  Auth.attributes = function attributes(remember) {
    var attributes = {};

    if (remember) {
      attributes.expires = 365;
    }

    if (window.location.protocol === 'https:') {
      attributes.secure = true;
    }

    return attributes;
  };

  Auth.logout = function logout() {
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_id");
    Cookies.remove(process.env.REACT_APP_COOKIE_PREFIX + "_token");
    window.location.href = window.location.href.replace(window.location.hash, '');
  };

  Auth.id = function id() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_id");
  };

  Auth.token = function token() {
    return Cookies.get(process.env.REACT_APP_COOKIE_PREFIX + "_token");
  };

  Auth.isLoggedIn = function isLoggedIn() {
    return !!Auth.id() && !!Auth.token();
  };

  return Auth;
}();

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

function SvgMenu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0v1h8V0H0zm0 3v1h8V3H0zm0 3v1h8V6H0z"
  })));
}

function Nav(_ref) {
  var nav = _ref.nav;

  var _useContext = React.useContext(formosa.FormosaContext),
      formosaState = _useContext.formosaState;

  var _useState = React.useState(false),
      showMenu = _useState[0],
      setShowMenu = _useState[1];

  var logout = function logout() {
    formosa.Api["delete"]('auth/logout').then(function () {
      Auth.logout();
    })["catch"](function (response) {
      var text = response.message ? response.message : response.errors.map(function (err) {
        return err.title;
      }).join(' ');
      formosaState.addToast(text, 'error', 10000);
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
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      activeClassName: "active",
      className: "formosa-button crudnick-list__button",
      onClick: hideMenu,
      to: path
    }, label));
  }), /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, Auth.isLoggedIn() && /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button crudnick-list__button",
    onClick: logout,
    type: "button"
  }, "Logout"))), /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    id: "crudnick-menu-button",
    onClick: toggleMenu,
    type: "button"
  }, /*#__PURE__*/React__default.createElement(SvgMenu, null), "Menu"));
}

function ForgotPassword() {
  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  return /*#__PURE__*/React__default.createElement(formosa.Form, {
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
  }), /*#__PURE__*/React__default.createElement("h1", null, "Forgot your password?"), /*#__PURE__*/React__default.createElement(formosa.Message, null), /*#__PURE__*/React__default.createElement(formosa.Field, {
    autoComplete: "email",
    label: "Email",
    name: "email",
    required: true,
    type: "email"
  }), /*#__PURE__*/React__default.createElement(formosa.Submit, {
    label: "Send reset link",
    postfix: /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      className: "formosa-button crudnick-button--link",
      to: "/"
    }, "Back to login")
  }));
}

function Login() {
  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var afterSubmit = function afterSubmit(response) {
    Auth.login(response.id, response.token, response.remember);
    window.location.reload();
  };

  return /*#__PURE__*/React__default.createElement(formosa.Form, {
    afterSubmit: afterSubmit,
    className: "crudnick-auth-form",
    method: "POST",
    path: "auth/login",
    row: row,
    setRow: setRow,
    showMessage: false
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: "Login"
  }), /*#__PURE__*/React__default.createElement("h1", null, "Login"), /*#__PURE__*/React__default.createElement(formosa.Message, null), /*#__PURE__*/React__default.createElement(formosa.Field, {
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
    postfix: /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      className: "formosa-button crudnick-button--link",
      to: "/forgot-password"
    }, "Forgot your password?")
  }));
}

function RedirectToHome() {
  return /*#__PURE__*/React__default.createElement(reactRouterDom.Redirect, {
    to: "/"
  });
}

function ResetPassword() {
  var _useState = React.useState({}),
      row = _useState[0],
      setRow = _useState[1];

  var _useParams = reactRouterDom.useParams(),
      token = _useParams.token;

  var history = reactRouterDom.useHistory();
  return /*#__PURE__*/React__default.createElement(formosa.Form, {
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
  }), /*#__PURE__*/React__default.createElement("h1", null, "Reset password"), /*#__PURE__*/React__default.createElement(formosa.Message, null), /*#__PURE__*/React__default.createElement(formosa.Field, {
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

function App(_ref) {
  var children = _ref.children,
      nav = _ref.nav;

  if (Auth.isLoggedIn() && !formosa.Api.getToken()) {
    formosa.Api.setToken(Auth.token());
  }

  return /*#__PURE__*/React__default.createElement(reactRouterDom.BrowserRouter, {
    basename: process.env.PUBLIC_URL
  }, /*#__PURE__*/React__default.createElement(formosa.FormContainer, null, Auth.isLoggedIn() && /*#__PURE__*/React__default.createElement(Nav, {
    nav: nav
  }), /*#__PURE__*/React__default.createElement("article", {
    id: "crudnick-article"
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: Auth.isLoggedIn() ? null : Login
  }), Auth.isLoggedIn() ? children : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/forgot-password",
    component: ForgotPassword
  }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    exact: true,
    path: "/reset-password/:token",
    component: ResetPassword
  })), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
    component: RedirectToHome
  })))));
}
App.propTypes = {
  children: PropTypes.node.isRequired,
  nav: PropTypes.array.isRequired
};

function Actions(_ref) {
  var apiPath = _ref.apiPath,
      children = _ref.children,
      currentPage = _ref.currentPage,
      path = _ref.path,
      row = _ref.row,
      saveButtonText = _ref.saveButtonText,
      setRow = _ref.setRow,
      showSave = _ref.showSave,
      subpages = _ref.subpages;
  var history = reactRouterDom.useHistory();

  var _useContext = React.useContext(formosa.FormosaContext),
      formosaState = _useContext.formosaState;

  var onDelete = function onDelete(e) {
    e.preventDefault();

    if (!confirm('Are you sure you want to delete this?')) {
      return;
    }

    formosa.Api["delete"](apiPath + "/" + row.id).then(function () {
      formosaState.addToast('Record deleted successfully.', 'success');
      history.push("/" + path);
    })["catch"](function (response) {
      var text = response.message ? response.message : response.errors.map(function (err) {
        return err.title;
      }).join(' ');
      formosaState.addToast(text, 'error', 10000);
    });
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, showSave && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    type: "submit",
    form: "edit-form"
  }, saveButtonText)), currentPage !== '/' && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
    className: "button",
    to: "/" + path + "/" + row.id
  }, "Edit")), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(formosa.Form, {
    onSubmit: onDelete,
    row: row,
    setRow: setRow
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button formosa-button--danger",
    type: "submit"
  }, "Delete"))), process.env.REACT_APP_FRONTEND_URL && row.url && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    className: "formosa-button crudnick-button--secondary",
    href: "" + process.env.REACT_APP_FRONTEND_URL + row.url,
    rel: "noreferrer",
    target: "_blank"
  }, "View")), subpages.map(function (page) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: page
    }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
      className: "formosa-button crudnick-button--secondary",
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
  setRow: PropTypes.func.isRequired,
  showSave: PropTypes.bool,
  subpages: PropTypes.array
};
Actions.defaultProps = {
  children: null,
  row: null,
  saveButtonText: 'Save',
  showSave: true,
  subpages: []
};

var cleanKey = function cleanKey(key) {
  return key.replace(/^relationships\./, '');
};

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
};

var filterByKey = function filterByKey(records, key, value) {
  value = value.toLowerCase();
  var escapedValue = escapeRegExp(value);
  records = records.filter(function (record) {
    var recordValue = (get(record, key) || '').toString().toLowerCase();
    return recordValue.match(new RegExp("(^|[^a-z])" + escapedValue));
  });
  records = records.sort(function (a, b) {
    var aValue = get(a, key).toString().toLowerCase();
    var bValue = get(b, key).toString().toLowerCase();
    var aPos = aValue.indexOf(value) === 0;
    var bPos = bValue.indexOf(value) === 0;

    if (aPos && bPos || !aPos && !bPos) {
      return aValue.localeCompare(bValue);
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
  } else if (response.errors) {
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

  React.useEffect(function () {
    formosa.Api.get(url).then(function (response) {
      setError(null);

      if (transform) {
        setRow(transform(response));
      } else {
        setRow(response);
      }
    })["catch"](function (response) {
      setError(response);
      setRow(null);
    });
    return function () {};
  }, [id]);
  var FormComponent = component;
  componentProps.formType = 'edit';
  var metaTitle = row ? titlePrefixText + " " + get(row, name) : null;
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
    setRow: setRow,
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
    successToastText: singular + " saved successfully."
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
  name: PropTypes.string,
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
  titlePrefixText: 'Edit ',
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

function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.59 0 1.17-.14 1.66-.41a1 1 0 00.13.13l1 1a1.02 1.02 0 101.44-1.44l-1-1a1 1 0 00-.16-.13c.27-.49.44-1.06.44-1.66 0-1.93-1.57-3.5-3.5-3.5zm0 1C4.89 1 6 2.11 6 3.5c0 .66-.24 1.27-.66 1.72l-.03.03a1 1 0 00-.13.13c-.44.4-1.04.63-1.69.63-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"
  })));
}

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
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = React.useState({
    sortKey: 'name',
    sortDir: 'asc',
    filters: {}
  }),
      options = _useState4[0],
      setOptions = _useState4[1];

  React.useEffect(function () {
    setOptions(defaultOptions);
    formosa.Api.get(url).then(function (response) {
      setError(null);
      setRows(response);
      setFilteredRows(response);
    })["catch"](function (response) {
      setError(response);
      setRows(null);
      setFilteredRows([]);
    });
    return function () {};
  }, [url]);

  var sort = function sort(e) {
    var sortKey = e.target.getAttribute('data-key');
    var sortDir;

    if (options.sortKey === sortKey) {
      sortDir = options.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortDir = 'asc';
    }

    setOptions(_extends({}, options, {
      sortKey: sortKey,
      sortDir: sortDir
    }));
    setRows(sortByKey(rows, sortKey, sortDir));
    setFilteredRows(sortByKey(filteredRows, sortKey, sortDir));
  };

  var filter = function filter(e) {
    var _extends2;

    var key = e.target.getAttribute('data-key');

    var newFilters = _extends({}, options.filters, (_extends2 = {}, _extends2[key] = e.target.value, _extends2));

    setOptions(_extends({}, options, {
      filters: newFilters
    }));
    var newRows = filterByKeys(rows, newFilters);
    setFilteredRows(newRows);
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
        return /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
          className: "crudnick-link--table",
          to: "/" + path + "/" + row.id
        }, value);
      };
    } else if (column.type === 'checkbox') {
      column.fn = function (_row, value) {
        return value ? /*#__PURE__*/React__default.createElement(SvgCheck, {
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
  }, /*#__PURE__*/React__default.createElement("h1", null, /*#__PURE__*/React__default.createElement("span", null, title), /*#__PURE__*/React__default.createElement("small", null, numResults)), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
    className: "formosa-button crudnick-list__button",
    to: "/" + path + "/add"
  }, "Add new")))), error ? /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-message formosa-message--error"
  }, getErrorMessage(error)) : /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (_ref2) {
    var disableSort = _ref2.disableSort,
        key = _ref2.key,
        label = _ref2.label,
        shortLabel = _ref2.shortLabel,
        size = _ref2.size;
    return /*#__PURE__*/React__default.createElement("th", {
      key: key,
      style: {
        width: size ? 0 : null
      }
    }, disableSort ? shortLabel || label : /*#__PURE__*/React__default.createElement("button", {
      className: "formosa-button",
      "data-key": key === 'name' ? 'slug' : cleanKey(key),
      onClick: sort,
      type: "button"
    }, shortLabel || label, options.sortKey === (key === 'name' ? 'slug' : cleanKey(key)) ? /*#__PURE__*/React__default.createElement(SvgArrow, {
      className: "crudnick-icon--caret " + (options.sortDir === 'desc' ? 'flip' : ''),
      height: 12,
      width: 12
    }) : null));
  })), /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (_ref3) {
    var key = _ref3.key,
        disableSearch = _ref3.disableSearch,
        size = _ref3.size;
    return /*#__PURE__*/React__default.createElement("td", {
      className: "formosa-input-wrapper--search",
      key: key
    }, !disableSearch && /*#__PURE__*/React__default.createElement("div", {
      className: "formosa-search-wrapper"
    }, /*#__PURE__*/React__default.createElement("input", {
      className: "formosa-field__input",
      "data-key": cleanKey(key),
      onChange: filter,
      size: size,
      type: "search",
      value: options.filters[cleanKey(key)] || ''
    }), /*#__PURE__*/React__default.createElement(SvgSearch, {
      className: "formosa-icon--search",
      height: 16,
      width: 16
    })));
  }))), /*#__PURE__*/React__default.createElement("tbody", null, filteredRows.map(function (row) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: row.id
    }, columns.map(function (_ref4) {
      var fn = _ref4.fn,
          key = _ref4.key;
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

var AddForm$1 = AddForm;
var App$1 = App;
var Auth$1 = Auth;
var EditForm$1 = EditForm;
var ForgotPassword$1 = ForgotPassword;
var IndexTable$1 = IndexTable;
var Login$1 = Login;
var MetaTitle$1 = MetaTitle;
var Nav$1 = Nav;
var RedirectToHome$1 = RedirectToHome;
var ResetPassword$1 = ResetPassword;

exports.AddForm = AddForm$1;
exports.App = App$1;
exports.Auth = Auth$1;
exports.EditForm = EditForm$1;
exports.ForgotPassword = ForgotPassword$1;
exports.IndexTable = IndexTable$1;
exports.Login = Login$1;
exports.MetaTitle = MetaTitle$1;
exports.Nav = Nav$1;
exports.RedirectToHome = RedirectToHome$1;
exports.ResetPassword = ResetPassword$1;
//# sourceMappingURL=index.js.map
