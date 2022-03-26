import React__default, { createElement, useEffect, useContext, useState, useMemo } from 'react';
import get from 'get-value';
import PropTypes from 'prop-types';
import { FormContext, Form, Message, Field, Submit, FormosaContext, Api, FormContainer } from '@jlbelanger/formosa';
import { Prompt, useHistory, NavLink, useParams, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const capitalize = s => s.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
const cleanKey = key => key.replace(/^relationships\./, '');

const escapeRegExp = string => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const filterByKey = (records, key, value) => {
  value = value.toLowerCase();
  const escapedValue = escapeRegExp(value);
  records = records.filter(record => {
    const recordValue = (get(record, key) || '').toString().toLowerCase();
    return recordValue.match(new RegExp(`(^|[^a-z])${escapedValue}`));
  });
  records = records.sort((a, b) => {
    const aValue = get(a, key).toString().toLowerCase();
    const bValue = get(b, key).toString().toLowerCase();
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
const getErrorMessage = response => {
  if (response.message) {
    return `Error: ${response.message}`;
  }

  if (response.errors) {
    return `Error: ${response.errors.map(error => error.title).join(', ')}`;
  }

  return 'Error loading data. Please try again later.';
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

var _path;

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

function SvgCheck(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
    d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z"
  })));
}

function MetaTitle({
  title
}) {
  useEffect(() => {
    let metaTitle = title;

    if (process.env.REACT_APP_TITLE) {
      if (metaTitle) {
        metaTitle += ' | ';
      }

      metaTitle += process.env.REACT_APP_TITLE;
    }

    document.querySelector('title').innerText = metaTitle;
    return () => {};
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
    formState
  } = useContext(FormContext);
  return /*#__PURE__*/React__default.createElement(Prompt, {
    when: formState.dirty.length > 0,
    message: "You have unsaved changes. Are you sure you want to leave this page?"
  });
}

function MyForm({
  children,
  checkForUnsavedChanges,
  ...otherProps
}) {
  return /*#__PURE__*/React__default.createElement(Form, otherProps, children, checkForUnsavedChanges && /*#__PURE__*/React__default.createElement(MyFormPrompt, null));
}
MyForm.propTypes = {
  checkForUnsavedChanges: PropTypes.bool,
  children: PropTypes.node.isRequired
};
MyForm.defaultProps = {
  checkForUnsavedChanges: true
};

function AddForm({
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
}) {
  const [row, setRow] = useState(defaultRow);
  const [addAnother, setAddAnother] = useState(false);
  const history = useHistory();

  const onChange = e => {
    setAddAnother(e.target.checked);
  };

  const afterSubmit = response => {
    if (!addAnother) {
      history.push(`/${path}/${response.id}`);
    }
  };

  const FormComponent = component;
  componentProps.formType = 'add';
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: `${titlePrefixText} ${singular}`
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", null, `${titlePrefixText} ${singular}`), /*#__PURE__*/React__default.createElement("ul", {
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
  }, addAnotherText)))))), /*#__PURE__*/React__default.createElement(MyForm, Object.assign({
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
    successToastText: `${capitalize(singular)} added successfully.`
  }, otherProps), /*#__PURE__*/React__default.createElement(FormComponent, Object.assign({
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

class Auth {
  static login(id, token, remember) {
    Cookies.set(`${process.env.REACT_APP_COOKIE_PREFIX}_id`, id, Auth.attributes(remember));
    Cookies.set(`${process.env.REACT_APP_COOKIE_PREFIX}_token`, token, Auth.attributes(remember));
  }

  static attributes(remember) {
    const attributes = {};

    if (remember) {
      attributes.expires = 365;
    }

    if (window.location.protocol === 'https:') {
      attributes.secure = true;
    }

    return attributes;
  }

  static logout() {
    Cookies.remove(`${process.env.REACT_APP_COOKIE_PREFIX}_id`);
    Cookies.remove(`${process.env.REACT_APP_COOKIE_PREFIX}_token`);
    window.location.href = window.location.origin + process.env.PUBLIC_URL;
  }

  static id() {
    return Cookies.get(`${process.env.REACT_APP_COOKIE_PREFIX}_id`);
  }

  static token() {
    return Cookies.get(`${process.env.REACT_APP_COOKIE_PREFIX}_token`);
  }

  static isLoggedIn() {
    return !!Auth.id() && !!Auth.token();
  }

}

function ForgotPassword() {
  const [row, setRow] = useState({});
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
    label: "Send reset link",
    postfix: /*#__PURE__*/React__default.createElement(NavLink, {
      className: "formosa-button crudnick-button--link",
      to: "/"
    }, "Back to login")
  }));
}

function Login() {
  const [row, setRow] = useState({});

  const afterSubmit = response => {
    Auth.login(response.id, response.token, response.remember);
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
    postfix: /*#__PURE__*/React__default.createElement(NavLink, {
      className: "formosa-button crudnick-button--link",
      to: "/forgot-password"
    }, "Forgot your password?")
  }));
}

var _path$1;

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
  }, props), _path$1 || (_path$1 = /*#__PURE__*/createElement("path", {
    d: "M0 0v1h8V0H0zm0 3v1h8V3H0zm0 3v1h8V6H0z"
  })));
}

function Nav({
  nav
}) {
  const {
    formosaState
  } = useContext(FormosaContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    Api.delete('auth/logout').then(() => {
      Auth.logout();
    }).catch(response => {
      if (response.status === 401) {
        Auth.logout();
        return;
      }

      const text = response.message ? response.message : response.errors.map(err => err.title).join(' ');
      formosaState.addToast(text, 'error', 10000);
    });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return /*#__PURE__*/React__default.createElement("nav", {
    id: "crudnick-nav"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: `crudnick-list${showMenu ? ' show' : ''}`,
    id: "crudnick-nav__list"
  }, nav.map(({
    label,
    path
  }) => /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item",
    key: path
  }, /*#__PURE__*/React__default.createElement(NavLink, {
    activeClassName: "active",
    className: "formosa-button crudnick-list__button",
    onClick: hideMenu,
    to: path
  }, label))), /*#__PURE__*/React__default.createElement("li", {
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
  }, /*#__PURE__*/React__default.createElement(SvgMenu, null), "Menu"));
}
Nav.propTypes = {
  nav: PropTypes.array.isRequired
};

function ResetPassword() {
  const [row, setRow] = useState({});
  const {
    token
  } = useParams();
  const history = useHistory();
  return /*#__PURE__*/React__default.createElement(Form, {
    afterSubmit: () => {
      history.push('/');
    },
    className: "crudnick-auth-form",
    method: "PUT",
    path: `auth/reset-password/${token}`,
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

function App({
  articleProps,
  children,
  nav,
  routerAttributes
}) {
  if (Auth.isLoggedIn() && !Api.getToken()) {
    Api.setToken(Auth.token());
  }

  return /*#__PURE__*/React__default.createElement(BrowserRouter, routerAttributes, /*#__PURE__*/React__default.createElement(FormContainer, null, Auth.isLoggedIn() && /*#__PURE__*/React__default.createElement(Nav, {
    nav: nav
  }), /*#__PURE__*/React__default.createElement("article", Object.assign({
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

var CrudnickContext = /*#__PURE__*/React__default.createContext({
  checkForUnsaveChanges: true,
  setCheckForUnsavedChanges: null
});

function Actions({
  apiPath,
  children,
  currentPage,
  path,
  row,
  saveButtonText,
  setRow,
  showSave,
  singular,
  subpages
}) {
  const history = useHistory();
  const {
    formosaState
  } = useContext(FormosaContext);
  const {
    setCheckForUnsavedChanges
  } = useContext(CrudnickContext);

  const onDelete = e => {
    e.preventDefault();

    if (!confirm(`Are you sure you want to delete this ${singular}?`)) {
      return;
    }

    setCheckForUnsavedChanges(false);
    Api.delete(`${apiPath}/${row.id}`).then(() => {
      formosaState.addToast(`${capitalize(singular)} deleted successfully.`, 'success');
      history.push(`/${path}`);
      setCheckForUnsavedChanges(true);
    }).catch(response => {
      const text = response.message ? response.message : response.errors.map(err => err.title).join(' ');
      formosaState.addToast(text, 'error', 10000);
      setCheckForUnsavedChanges(true);
    });
  };

  return /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, showSave && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button",
    type: "submit",
    form: "crudnick-edit-form"
  }, saveButtonText)), currentPage !== '/' && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(NavLink, {
    className: "crudnick-list__button button",
    to: `/${path}/${row.id}`
  }, "Edit")), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: onDelete,
    row: row,
    setRow: setRow
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "crudnick-list__button formosa-button formosa-button--danger",
    type: "submit"
  }, "Delete"))), process.env.REACT_APP_FRONTEND_URL && row.url && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    className: "crudnick-list__button formosa-button crudnick-button--secondary",
    href: `${process.env.REACT_APP_FRONTEND_URL}${row.url}`,
    rel: "noreferrer",
    target: "_blank"
  }, "View")), subpages.map(page => /*#__PURE__*/React__default.createElement("li", {
    key: page
  }, /*#__PURE__*/React__default.createElement(NavLink, {
    className: "crudnick-list__button formosa-button crudnick-button--secondary",
    to: `/${path}/${row.id}/${page.toLowerCase()}`
  }, page))), children);
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

function EditForm({
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
  singular,
  subpages,
  titlePrefixText,
  transform,
  url,
  ...otherProps
}) {
  const {
    id
  } = useParams();
  const [row, setRow] = useState(null);
  const [error, setError] = useState(false);
  const [checkForUnsavedChanges, setCheckForUnsavedChanges] = useState(true);
  const crudnickState = useMemo(() => ({
    checkForUnsavedChanges,
    setCheckForUnsavedChanges
  }), [checkForUnsavedChanges]);
  useEffect(() => {
    Api.get(url).then(response => {
      setError(null);

      if (transform) {
        setRow(transform(response));
      } else {
        setRow(response);
      }
    }).catch(response => {
      if (response.status === 401) {
        document.getElementById('crudnick-logout').click();
        return;
      }

      setError(response);
      setRow(null);
    });
    return () => {};
  }, [id]);
  const FormComponent = component;
  componentProps.formType = 'edit';
  const metaTitle = row ? `${titlePrefixText} ${get(row, name)}` : '';
  return /*#__PURE__*/React__default.createElement(CrudnickContext.Provider, {
    value: crudnickState
  }, /*#__PURE__*/React__default.createElement(MetaTitle, {
    title: metaTitle
  }), /*#__PURE__*/React__default.createElement("header", {
    className: "crudnick-header"
  }, /*#__PURE__*/React__default.createElement("h1", null, `${titlePrefixText} ${singular}`), row && /*#__PURE__*/React__default.createElement(Actions, {
    apiPath: apiPath,
    currentPage: "/",
    path: path,
    saveButtonText: saveButtonText,
    row: row,
    setRow: setRow,
    singular: singular,
    subpages: subpages
  }, actions ? actions(row, setRow) : null)), error && /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-message formosa-message--error"
  }, getErrorMessage(error)), row && /*#__PURE__*/React__default.createElement(MyForm, Object.assign({
    checkForUnsavedChanges: checkForUnsavedChanges,
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
    successToastText: `${capitalize(singular)} saved successfully.`
  }, otherProps), /*#__PURE__*/React__default.createElement(FormComponent, Object.assign({
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
  titlePrefixText: 'Edit',
  transform: null
};

var _path$2;

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
  }, props), _path$2 || (_path$2 = /*#__PURE__*/createElement("path", {
    d: "M0 2l4 4 4-4H0z"
  })));
}

var _path$3;

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

function SvgSearch(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/createElement("path", {
    d: "M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.59 0 1.17-.14 1.66-.41a1 1 0 00.13.13l1 1a1.02 1.02 0 101.44-1.44l-1-1a1 1 0 00-.16-.13c.27-.49.44-1.06.44-1.66 0-1.93-1.57-3.5-3.5-3.5zm0 1C4.89 1 6 2.11 6 3.5c0 .66-.24 1.27-.66 1.72l-.03.03a1 1 0 00-.13.13c-.44.4-1.04.63-1.69.63-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"
  })));
}

function IndexTable({
  columns,
  defaultOptions,
  path,
  title,
  url
}) {
  const [rows, setRows] = useState(null);
  const [filteredRows, setFilteredRows] = useState([]);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState({
    sortKey: 'name',
    sortDir: 'asc',
    filters: {}
  });
  useEffect(() => {
    setOptions(defaultOptions);
    Api.get(url).then(response => {
      setError(null);
      setRows(response);
      setFilteredRows(response);
    }).catch(response => {
      if (response.status === 401) {
        document.getElementById('crudnick-logout').click();
        return;
      }

      setError(response);
      setRows(null);
      setFilteredRows([]);
    });
    return () => {};
  }, [url]);

  const sort = e => {
    const sortKey = e.target.getAttribute('data-key');
    let sortDir;

    if (options.sortKey === sortKey) {
      sortDir = options.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortDir = 'asc';
    }

    setOptions({ ...options,
      sortKey,
      sortDir
    });
    setRows(sortByKey(rows, sortKey, sortDir));
    setFilteredRows(sortByKey(filteredRows, sortKey, sortDir));
  };

  const filter = e => {
    const key = e.target.getAttribute('data-key');
    const newFilters = { ...options.filters,
      [key]: e.target.value
    };
    setOptions({ ...options,
      filters: newFilters
    });
    const newRows = filterByKeys(rows, newFilters);
    setFilteredRows(newRows);
  };

  const numRows = rows ? rows.length : 0;
  let numResults = ` (${filteredRows.length.toLocaleString()}`;

  if (filteredRows.length !== numRows) {
    numResults += ` of ${numRows.toLocaleString()}`;
  }

  numResults += ` result${numRows === 1 ? '' : 's'})`;
  columns = columns.map(column => {
    if (column.link) {
      column.fn = (row, value) => /*#__PURE__*/React__default.createElement(NavLink, {
        className: "crudnick-link--table",
        to: `/${path}/${row.id}`
      }, value);
    } else if (column.type === 'checkbox') {
      column.fn = (_row, value) => value ? /*#__PURE__*/React__default.createElement(SvgCheck, {
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
  }, /*#__PURE__*/React__default.createElement("h1", null, /*#__PURE__*/React__default.createElement("span", null, title), /*#__PURE__*/React__default.createElement("small", null, rows ? numResults : null)), /*#__PURE__*/React__default.createElement("ul", {
    className: "crudnick-list"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "crudnick-list__item"
  }, /*#__PURE__*/React__default.createElement(NavLink, {
    className: "formosa-button crudnick-list__button",
    to: `/${path}/add`
  }, "Add new")))), error ? /*#__PURE__*/React__default.createElement("div", {
    className: "formosa-message formosa-message--error"
  }, getErrorMessage(error)) : /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(({
    disableSort,
    key,
    label,
    shortLabel,
    sortKey,
    size
  }) => /*#__PURE__*/React__default.createElement("th", {
    key: key,
    style: {
      width: size ? 0 : null
    }
  }, disableSort ? shortLabel || label : /*#__PURE__*/React__default.createElement("button", {
    className: "formosa-button",
    "data-key": sortKey || cleanKey(key),
    onClick: sort,
    type: "button"
  }, shortLabel || label, options.sortKey === (sortKey || cleanKey(key)) ? /*#__PURE__*/React__default.createElement(SvgArrow, {
    className: `crudnick-icon--caret ${options.sortDir === 'desc' ? 'flip' : ''}`,
    height: 12,
    width: 12
  }) : null)))), /*#__PURE__*/React__default.createElement("tr", null, columns.map(({
    key,
    disableSearch,
    size
  }) => /*#__PURE__*/React__default.createElement("td", {
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
  })))))), /*#__PURE__*/React__default.createElement("tbody", null, filteredRows.map(row => /*#__PURE__*/React__default.createElement("tr", {
    key: row.id
  }, columns.map(({
    fn,
    key
  }) => /*#__PURE__*/React__default.createElement("td", {
    className: `crudnick-cell--${key}`,
    key: key
  }, fn ? fn(row, get(row, cleanKey(key)), key) : get(row, cleanKey(key)))))))));
}
IndexTable.propTypes = {
  columns: PropTypes.array.isRequired,
  defaultOptions: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const AddForm$1 = AddForm;
const App$1 = App;
const Auth$1 = Auth;
const EditForm$1 = EditForm;
const ForgotPassword$1 = ForgotPassword;
const IndexTable$1 = IndexTable;
const Login$1 = Login;
const MetaTitle$1 = MetaTitle;
const Nav$1 = Nav;
const ResetPassword$1 = ResetPassword;

export { AddForm$1 as AddForm, App$1 as App, Auth$1 as Auth, EditForm$1 as EditForm, ForgotPassword$1 as ForgotPassword, IndexTable$1 as IndexTable, Login$1 as Login, MetaTitle$1 as MetaTitle, Nav$1 as Nav, ResetPassword$1 as ResetPassword };
//# sourceMappingURL=index.modern.js.map
