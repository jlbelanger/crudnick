import * as oe from "react";
import yr, { useRef as Te, useEffect as K, useContext as ye, useState as F } from "react";
import { FormosaContext as Ne, Api as ue, FormContext as ir, Form as je, Field as te, Alert as de, FormAlert as Le, Submit as Me, Input as hr, FormContainer as vr } from "@jlbelanger/formosa";
import { useNavigate as he, NavLink as $e, unstable_usePrompt as br, useParams as sr, useSearchParams as qe, Link as Ee, Outlet as gr, Navigate as xr } from "react-router";
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var be = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function wr() {
  if (Ve) return pe;
  Ve = 1;
  var e = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function u(f, c, t) {
    var s = null;
    if (t !== void 0 && (s = "" + t), c.key !== void 0 && (s = "" + c.key), "key" in c) {
      t = {};
      for (var a in c)
        a !== "key" && (t[a] = c[a]);
    } else t = c;
    return c = t.ref, {
      $$typeof: e,
      type: f,
      key: s,
      ref: c !== void 0 ? c : null,
      props: t
    };
  }
  return pe.Fragment = i, pe.jsx = u, pe.jsxs = u, pe;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Er() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === J ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case C:
          return "Fragment";
        case Y:
          return "Profiler";
        case $:
          return "StrictMode";
        case M:
          return "Suspense";
        case q:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case v:
            return "Portal";
          case _:
            return r.displayName || "Context";
          case L:
            return (r._context.displayName || "Context") + ".Consumer";
          case n:
            var d = r.render;
            return r = r.displayName, r || (r = d.displayName || d.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case U:
            return d = r.displayName || null, d !== null ? d : e(r.type) || "Memo";
          case W:
            d = r._payload, r = r._init;
            try {
              return e(r(d));
            } catch {
            }
        }
      return null;
    }
    function i(r) {
      return "" + r;
    }
    function u(r) {
      try {
        i(r);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var g = d.error, b = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), i(r);
      }
    }
    function f(r) {
      if (r === C) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === W)
        return "<...>";
      try {
        var d = e(r);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var r = Q.A;
      return r === null ? null : r.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function s(r) {
      if (re.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function a(r, d) {
      function g() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: g,
        configurable: !0
      });
    }
    function y() {
      var r = e(this.type);
      return X[r] || (X[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function h(r, d, g, b, P, k) {
      var x = g.ref;
      return r = {
        $$typeof: R,
        type: r,
        key: d,
        props: g,
        _owner: b
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function w(r, d, g, b, P, k) {
      var x = d.children;
      if (x !== void 0)
        if (b)
          if (V(x)) {
            for (b = 0; b < x.length; b++)
              E(x[b]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(x);
      if (re.call(d, "key")) {
        x = e(r);
        var S = Object.keys(d).filter(function(O) {
          return O !== "key";
        });
        b = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", l[x + b] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          x,
          S,
          x
        ), l[x + b] = !0);
      }
      if (x = null, g !== void 0 && (u(g), x = "" + g), s(d) && (u(d.key), x = "" + d.key), "key" in d) {
        g = {};
        for (var A in d)
          A !== "key" && (g[A] = d[A]);
      } else g = d;
      return x && a(
        g,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), h(
        r,
        x,
        g,
        c(),
        P,
        k
      );
    }
    function E(r) {
      T(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === W && (r._payload.status === "fulfilled" ? T(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function T(r) {
      return typeof r == "object" && r !== null && r.$$typeof === R;
    }
    var j = yr, R = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), J = Symbol.for("react.client.reference"), Q = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, V = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var z, X = {}, ae = j.react_stack_bottom_frame.bind(
      j,
      t
    )(), le = se(f(t)), l = {};
    me.Fragment = C, me.jsx = function(r, d, g) {
      var b = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return w(
        r,
        d,
        g,
        !1,
        b ? Error("react-stack-top-frame") : ae,
        b ? se(f(r)) : le
      );
    }, me.jsxs = function(r, d, g) {
      var b = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return w(
        r,
        d,
        g,
        !0,
        b ? Error("react-stack-top-frame") : ae,
        b ? se(f(r)) : le
      );
    };
  })()), me;
}
var We;
function Tr() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? be.exports = wr() : be.exports = Er()), be.exports;
}
var o = Tr();
const De = (e) => e.replace(/(?:^|\s)\S/g, (i) => i.toUpperCase()), ce = (e) => e.replace(/^relationships\./, "");
class ee {
  static init(i = {}) {
    window.CRUDNICK_CONFIG = {
      basePath: i.basePath || "/",
      cookiePrefix: i.cookiePrefix || "",
      frontendUrl: i.frontendUrl || "",
      siteTitle: i.siteTitle || ""
    };
  }
  static isReady() {
    return typeof window.CRUDNICK_CONFIG < "u";
  }
  static get(i) {
    return ee.isReady() ? i ? window.CRUDNICK_CONFIG[i] : window.CRUDNICK_CONFIG : null;
  }
  static set(i, u) {
    window.CRUDNICK_CONFIG[i] = u;
  }
}
/*! js-cookie v3.0.5 | MIT */
function ge(e) {
  for (var i = 1; i < arguments.length; i++) {
    var u = arguments[i];
    for (var f in u)
      e[f] = u[f];
  }
  return e;
}
var jr = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Ie(e, i) {
  function u(c, t, s) {
    if (!(typeof document > "u")) {
      s = ge({}, i, s), typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)), s.expires && (s.expires = s.expires.toUTCString()), c = encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var y in s)
        s[y] && (a += "; " + y, s[y] !== !0 && (a += "=" + s[y].split(";")[0]));
      return document.cookie = c + "=" + e.write(t, c) + a;
    }
  }
  function f(c) {
    if (!(typeof document > "u" || arguments.length && !c)) {
      for (var t = document.cookie ? document.cookie.split("; ") : [], s = {}, a = 0; a < t.length; a++) {
        var y = t[a].split("="), h = y.slice(1).join("=");
        try {
          var w = decodeURIComponent(y[0]);
          if (s[w] = e.read(h, w), c === w)
            break;
        } catch {
        }
      }
      return c ? s[c] : s;
    }
  }
  return Object.create(
    {
      set: u,
      get: f,
      remove: function(c, t) {
        u(
          c,
          "",
          ge({}, t, {
            expires: -1
          })
        );
      },
      withAttributes: function(c) {
        return Ie(this.converter, ge({}, this.attributes, c));
      },
      withConverter: function(c) {
        return Ie(ge({}, this.converter, c), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(i) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var fe = Ie(jr, { path: "/" });
class D {
  static login(i, u, f) {
    const c = ee.get("cookiePrefix");
    fe.set(`${c}_user`, JSON.stringify(i), D.attributes(f)), fe.set(`${c}_token`, u, D.attributes(f));
  }
  static refresh() {
    let i = D.user();
    i = i ? JSON.parse(i) : null, i && i.remember && D.login(i, D.token(), i.remember);
  }
  static attributes(i) {
    const u = {
      sameSite: "lax"
    };
    return i && (u.expires = 365), window.location.protocol === "https:" && (u.secure = !0), u;
  }
  static logout(i = "") {
    const u = ee.get("basePath"), f = ee.get("cookiePrefix");
    fe.remove(`${f}_user`), fe.remove(`${f}_token`), window.location.href = `${u}${i ? `?status=${i}` : ""}`;
  }
  static id() {
    const i = D.user();
    return i ? JSON.parse(i).id : null;
  }
  static user() {
    const i = ee.get("cookiePrefix");
    return fe.get(`${i}_user`);
  }
  static token() {
    const i = ee.get("cookiePrefix");
    return fe.get(`${i}_token`);
  }
  static isLoggedIn() {
    return !!D.user() && !!D.token();
  }
}
const Z = (e, i = !0) => i && e.status === 401 ? D.logout(e.status) : `Error: ${e.errors.map((u) => u.title).join(" ")}`;
var xe = { exports: {} }, we = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Rr() {
  if (ze) return I;
  ze = 1;
  var e = typeof Symbol == "function" && Symbol.for, i = e ? Symbol.for("react.element") : 60103, u = e ? Symbol.for("react.portal") : 60106, f = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, t = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, Y = e ? Symbol.for("react.scope") : 60119;
  function L(n) {
    if (typeof n == "object" && n !== null) {
      var M = n.$$typeof;
      switch (M) {
        case i:
          switch (n = n.type, n) {
            case y:
            case h:
            case f:
            case t:
            case c:
            case E:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case a:
                case w:
                case R:
                case j:
                case s:
                  return n;
                default:
                  return M;
              }
          }
        case u:
          return M;
      }
    }
  }
  function _(n) {
    return L(n) === h;
  }
  return I.AsyncMode = y, I.ConcurrentMode = h, I.ContextConsumer = a, I.ContextProvider = s, I.Element = i, I.ForwardRef = w, I.Fragment = f, I.Lazy = R, I.Memo = j, I.Portal = u, I.Profiler = t, I.StrictMode = c, I.Suspense = E, I.isAsyncMode = function(n) {
    return _(n) || L(n) === y;
  }, I.isConcurrentMode = _, I.isContextConsumer = function(n) {
    return L(n) === a;
  }, I.isContextProvider = function(n) {
    return L(n) === s;
  }, I.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === i;
  }, I.isForwardRef = function(n) {
    return L(n) === w;
  }, I.isFragment = function(n) {
    return L(n) === f;
  }, I.isLazy = function(n) {
    return L(n) === R;
  }, I.isMemo = function(n) {
    return L(n) === j;
  }, I.isPortal = function(n) {
    return L(n) === u;
  }, I.isProfiler = function(n) {
    return L(n) === t;
  }, I.isStrictMode = function(n) {
    return L(n) === c;
  }, I.isSuspense = function(n) {
    return L(n) === E;
  }, I.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === f || n === h || n === t || n === c || n === E || n === T || typeof n == "object" && n !== null && (n.$$typeof === R || n.$$typeof === j || n.$$typeof === s || n.$$typeof === a || n.$$typeof === w || n.$$typeof === C || n.$$typeof === $ || n.$$typeof === Y || n.$$typeof === v);
  }, I.typeOf = L, I;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function _r() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, i = e ? Symbol.for("react.element") : 60103, u = e ? Symbol.for("react.portal") : 60106, f = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, t = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, Y = e ? Symbol.for("react.scope") : 60119;
    function L(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === f || m === h || m === t || m === c || m === E || m === T || typeof m == "object" && m !== null && (m.$$typeof === R || m.$$typeof === j || m.$$typeof === s || m.$$typeof === a || m.$$typeof === w || m.$$typeof === C || m.$$typeof === $ || m.$$typeof === Y || m.$$typeof === v);
    }
    function _(m) {
      if (typeof m == "object" && m !== null) {
        var H = m.$$typeof;
        switch (H) {
          case i:
            var ve = m.type;
            switch (ve) {
              case y:
              case h:
              case f:
              case t:
              case c:
              case E:
                return ve;
              default:
                var Ue = ve && ve.$$typeof;
                switch (Ue) {
                  case a:
                  case w:
                  case R:
                  case j:
                  case s:
                    return Ue;
                  default:
                    return H;
                }
            }
          case u:
            return H;
        }
      }
    }
    var n = y, M = h, q = a, U = s, W = i, G = w, J = f, Q = R, re = j, V = u, se = t, z = c, X = E, ae = !1;
    function le(m) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(m) || _(m) === y;
    }
    function l(m) {
      return _(m) === h;
    }
    function r(m) {
      return _(m) === a;
    }
    function d(m) {
      return _(m) === s;
    }
    function g(m) {
      return typeof m == "object" && m !== null && m.$$typeof === i;
    }
    function b(m) {
      return _(m) === w;
    }
    function P(m) {
      return _(m) === f;
    }
    function k(m) {
      return _(m) === R;
    }
    function x(m) {
      return _(m) === j;
    }
    function S(m) {
      return _(m) === u;
    }
    function A(m) {
      return _(m) === t;
    }
    function O(m) {
      return _(m) === c;
    }
    function B(m) {
      return _(m) === E;
    }
    N.AsyncMode = n, N.ConcurrentMode = M, N.ContextConsumer = q, N.ContextProvider = U, N.Element = W, N.ForwardRef = G, N.Fragment = J, N.Lazy = Q, N.Memo = re, N.Portal = V, N.Profiler = se, N.StrictMode = z, N.Suspense = X, N.isAsyncMode = le, N.isConcurrentMode = l, N.isContextConsumer = r, N.isContextProvider = d, N.isElement = g, N.isForwardRef = b, N.isFragment = P, N.isLazy = k, N.isMemo = x, N.isPortal = S, N.isProfiler = A, N.isStrictMode = O, N.isSuspense = B, N.isValidElementType = L, N.typeOf = _;
  })()), N;
}
var Ge;
function cr() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? we.exports = Rr() : we.exports = _r()), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Re, Je;
function kr() {
  if (Je) return Re;
  Je = 1;
  var e = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
  function f(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function c() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var y = Object.getOwnPropertyNames(s).map(function(w) {
        return s[w];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        h[w] = w;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Re = c() ? Object.assign : function(t, s) {
    for (var a, y = f(t), h, w = 1; w < arguments.length; w++) {
      a = Object(arguments[w]);
      for (var E in a)
        i.call(a, E) && (y[E] = a[E]);
      if (e) {
        h = e(a);
        for (var T = 0; T < h.length; T++)
          u.call(a, h[T]) && (y[h[T]] = a[h[T]]);
      }
    }
    return y;
  }, Re;
}
var _e, Xe;
function Fe() {
  if (Xe) return _e;
  Xe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _e = e, _e;
}
var ke, He;
function ur() {
  return He || (He = 1, ke = Function.call.bind(Object.prototype.hasOwnProperty)), ke;
}
var Se, Ze;
function Sr() {
  if (Ze) return Se;
  Ze = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = /* @__PURE__ */ Fe(), u = {}, f = /* @__PURE__ */ ur();
    e = function(t) {
      var s = "Warning: " + t;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function c(t, s, a, y, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in t)
        if (f(t, w)) {
          var E;
          try {
            if (typeof t[w] != "function") {
              var T = Error(
                (y || "React class") + ": " + a + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            E = t[w](s, w, y, a, null, i);
          } catch (R) {
            E = R;
          }
          if (E && !(E instanceof Error) && e(
            (y || "React class") + ": type specification of " + a + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in u)) {
            u[E.message] = !0;
            var j = h ? h() : "";
            e(
              "Failed " + a + " type: " + E.message + (j ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (u = {});
  }, Se = c, Se;
}
var Pe, Qe;
function Pr() {
  if (Qe) return Pe;
  Qe = 1;
  var e = cr(), i = kr(), u = /* @__PURE__ */ Fe(), f = /* @__PURE__ */ ur(), c = /* @__PURE__ */ Sr(), t = function() {
  };
  process.env.NODE_ENV !== "production" && (t = function(a) {
    var y = "Warning: " + a;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Pe = function(a, y) {
    var h = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function E(l) {
      var r = l && (h && l[h] || l[w]);
      if (typeof r == "function")
        return r;
    }
    var T = "<<anonymous>>", j = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: Y(),
      arrayOf: L,
      element: _(),
      elementType: n(),
      instanceOf: M,
      node: G(),
      objectOf: U,
      oneOf: q,
      oneOfType: W,
      shape: Q,
      exact: re
    };
    function R(l, r) {
      return l === r ? l !== 0 || 1 / l === 1 / r : l !== l && r !== r;
    }
    function v(l, r) {
      this.message = l, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function C(l) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, d = 0;
      function g(P, k, x, S, A, O, B) {
        if (S = S || T, O = O || x, B !== u) {
          if (y) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var H = S + ":" + x;
            !r[H] && // Avoid spamming the console because they are often not actionable except for lib authors
            d < 3 && (t(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[H] = !0, d++);
          }
        }
        return k[x] == null ? P ? k[x] === null ? new v("The " + A + " `" + O + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new v("The " + A + " `" + O + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : l(k, x, S, A, O);
      }
      var b = g.bind(null, !1);
      return b.isRequired = g.bind(null, !0), b;
    }
    function $(l) {
      function r(d, g, b, P, k, x) {
        var S = d[g], A = z(S);
        if (A !== l) {
          var O = X(S);
          return new v(
            "Invalid " + P + " `" + k + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return C(r);
    }
    function Y() {
      return C(s);
    }
    function L(l) {
      function r(d, g, b, P, k) {
        if (typeof l != "function")
          return new v("Property `" + k + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var x = d[g];
        if (!Array.isArray(x)) {
          var S = z(x);
          return new v("Invalid " + P + " `" + k + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected an array."));
        }
        for (var A = 0; A < x.length; A++) {
          var O = l(x, A, b, P, k + "[" + A + "]", u);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return C(r);
    }
    function _() {
      function l(r, d, g, b, P) {
        var k = r[d];
        if (!a(k)) {
          var x = z(k);
          return new v("Invalid " + b + " `" + P + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(l);
    }
    function n() {
      function l(r, d, g, b, P) {
        var k = r[d];
        if (!e.isValidElementType(k)) {
          var x = z(k);
          return new v("Invalid " + b + " `" + P + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(l);
    }
    function M(l) {
      function r(d, g, b, P, k) {
        if (!(d[g] instanceof l)) {
          var x = l.name || T, S = le(d[g]);
          return new v("Invalid " + P + " `" + k + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return C(r);
    }
    function q(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? t(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : t("Invalid argument supplied to oneOf, expected an array.")), s;
      function r(d, g, b, P, k) {
        for (var x = d[g], S = 0; S < l.length; S++)
          if (R(x, l[S]))
            return null;
        var A = JSON.stringify(l, function(B, m) {
          var H = X(m);
          return H === "symbol" ? String(m) : m;
        });
        return new v("Invalid " + P + " `" + k + "` of value `" + String(x) + "` " + ("supplied to `" + b + "`, expected one of " + A + "."));
      }
      return C(r);
    }
    function U(l) {
      function r(d, g, b, P, k) {
        if (typeof l != "function")
          return new v("Property `" + k + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var x = d[g], S = z(x);
        if (S !== "object")
          return new v("Invalid " + P + " `" + k + "` of type " + ("`" + S + "` supplied to `" + b + "`, expected an object."));
        for (var A in x)
          if (f(x, A)) {
            var O = l(x, A, b, P, k + "." + A, u);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return C(r);
    }
    function W(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && t("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var r = 0; r < l.length; r++) {
        var d = l[r];
        if (typeof d != "function")
          return t(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(d) + " at index " + r + "."
          ), s;
      }
      function g(b, P, k, x, S) {
        for (var A = [], O = 0; O < l.length; O++) {
          var B = l[O], m = B(b, P, k, x, S, u);
          if (m == null)
            return null;
          m.data && f(m.data, "expectedType") && A.push(m.data.expectedType);
        }
        var H = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new v("Invalid " + x + " `" + S + "` supplied to " + ("`" + k + "`" + H + "."));
      }
      return C(g);
    }
    function G() {
      function l(r, d, g, b, P) {
        return V(r[d]) ? null : new v("Invalid " + b + " `" + P + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return C(l);
    }
    function J(l, r, d, g, b) {
      return new v(
        (l || "React class") + ": " + r + " type `" + d + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function Q(l) {
      function r(d, g, b, P, k) {
        var x = d[g], S = z(x);
        if (S !== "object")
          return new v("Invalid " + P + " `" + k + "` of type `" + S + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var A in l) {
          var O = l[A];
          if (typeof O != "function")
            return J(b, P, k, A, X(O));
          var B = O(x, A, b, P, k + "." + A, u);
          if (B)
            return B;
        }
        return null;
      }
      return C(r);
    }
    function re(l) {
      function r(d, g, b, P, k) {
        var x = d[g], S = z(x);
        if (S !== "object")
          return new v("Invalid " + P + " `" + k + "` of type `" + S + "` " + ("supplied to `" + b + "`, expected `object`."));
        var A = i({}, d[g], l);
        for (var O in A) {
          var B = l[O];
          if (f(l, O) && typeof B != "function")
            return J(b, P, k, O, X(B));
          if (!B)
            return new v(
              "Invalid " + P + " `" + k + "` key `" + O + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(d[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var m = B(x, O, b, P, k + "." + O, u);
          if (m)
            return m;
        }
        return null;
      }
      return C(r);
    }
    function V(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(V);
          if (l === null || a(l))
            return !0;
          var r = E(l);
          if (r) {
            var d = r.call(l), g;
            if (r !== l.entries) {
              for (; !(g = d.next()).done; )
                if (!V(g.value))
                  return !1;
            } else
              for (; !(g = d.next()).done; ) {
                var b = g.value;
                if (b && !V(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(l, r) {
      return l === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function z(l) {
      var r = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : se(r, l) ? "symbol" : r;
    }
    function X(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var r = z(l);
      if (r === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function ae(l) {
      var r = X(l);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function le(l) {
      return !l.constructor || !l.constructor.name ? T : l.constructor.name;
    }
    return j.checkPropTypes = c, j.resetWarningCache = c.resetWarningCache, j.PropTypes = j, j;
  }, Pe;
}
var Ce, er;
function Cr() {
  if (er) return Ce;
  er = 1;
  var e = /* @__PURE__ */ Fe();
  function i() {
  }
  function u() {
  }
  return u.resetWarningCache = i, Ce = function() {
    function f(s, a, y, h, w, E) {
      if (E !== e) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    f.isRequired = f;
    function c() {
      return f;
    }
    var t = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: c,
      element: f,
      elementType: f,
      instanceOf: c,
      node: f,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: u,
      resetWarningCache: i
    };
    return t.PropTypes = t, t;
  }, Ce;
}
var rr;
function Or() {
  if (rr) return xe.exports;
  if (rr = 1, process.env.NODE_ENV !== "production") {
    var e = cr(), i = !0;
    xe.exports = /* @__PURE__ */ Pr()(e.isElement, i);
  } else
    xe.exports = /* @__PURE__ */ Cr()();
  return xe.exports;
}
var Ar = /* @__PURE__ */ Or();
const p = /* @__PURE__ */ ar(Ar);
function lr({
  cancelable: e = !0,
  cancelButtonAttributes: i = null,
  cancelButtonClass: u = "crudnick-button--secondary",
  cancelButtonText: f = "Cancel",
  children: c = null,
  event: t,
  okButtonAttributes: s = null,
  okButtonClass: a = "",
  okButtonText: y = "OK",
  onClickCancel: h = null,
  onClickOk: w = null,
  text: E = null
}) {
  const T = Te(null), j = (v) => {
    v.key === "Escape" && h && h();
  }, R = (v) => {
    v.target.tagName === "DIALOG" && h && h();
  };
  return K(() => (document.body.classList.add("crudnick-modal-open"), e && document.addEventListener("keydown", j), () => {
    document.body.classList.remove("crudnick-modal-open"), e && document.removeEventListener("keydown", j), t.target && t.target.focus();
  }), []), K(() => {
    T && T.current && T.current.getAttribute("open") === null && (T.current.showModal(), T.current.focus(), e && T.current.addEventListener("click", R));
  }, [T]), /* @__PURE__ */ o.jsx("dialog", { className: "crudnick-modal", ref: T, tabIndex: -1, children: /* @__PURE__ */ o.jsxs("div", { className: "crudnick-modal__box", children: [
    c || /* @__PURE__ */ o.jsx("p", { className: "crudnick-modal__text", children: E }),
    /* @__PURE__ */ o.jsxs("p", { className: "crudnick-modal__options", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${a}`.trim(),
          onClick: w,
          type: "button",
          ...s,
          children: y
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${u}`.trim(),
          onClick: h,
          type: "button",
          ...i,
          children: f
        }
      )
    ] })
  ] }) });
}
lr.propTypes = {
  cancelable: p.bool,
  cancelButtonAttributes: p.object,
  cancelButtonClass: p.string,
  cancelButtonText: p.string,
  children: p.node,
  event: p.object.isRequired,
  okButtonAttributes: p.object,
  okButtonClass: p.string,
  okButtonText: p.string,
  onClickCancel: p.func,
  onClickOk: p.func,
  text: p.string
};
function fr({
  apiPath: e,
  children: i = null,
  currentPage: u,
  path: f,
  row: c = null,
  saveButtonText: t = "Save",
  setActionError: s = null,
  showDelete: a = !0,
  showSave: y = !0,
  singular: h,
  subpages: w = []
}) {
  const E = he(), { addToast: T, disableWarningPrompt: j, enableWarningPrompt: R } = ye(Ne), [v, C] = F(!1), $ = Te(null), Y = (n) => {
    n.key === "s" && n.metaKey && $ && $.current && (n.preventDefault(), $.current.click());
  };
  K(() => (window.addEventListener("keydown", Y), () => {
    window.removeEventListener("keydown", Y);
  }), []);
  const L = () => {
    C(!1), j(), ue.delete(`${e}/${c.id}`).catch((n) => {
      s ? s(Z(n)) : T(Z(n), "error", 1e4), R();
    }).then((n) => {
      n && (T(`${De(h)} deleted successfully.`, "success"), E(`/${f}`), R());
    });
  }, _ = ee.get("frontendUrl");
  return /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
    y && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "crudnick-list__button formosa-button",
        "data-cy": "save",
        type: "submit",
        ref: $,
        form: "crudnick-edit-form",
        children: t
      }
    ) }),
    u !== "/" && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx($e, { className: "crudnick-list__button formosa-button", to: `/${f}/${c.id}`, children: "Edit" }) }),
    a && /* @__PURE__ */ o.jsxs("li", { children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "crudnick-list__button formosa-button formosa-button--danger",
          "data-cy": "delete",
          onClick: (n) => {
            s && s(!1), C(n);
          },
          type: "button",
          children: "Delete"
        }
      ),
      v && /* @__PURE__ */ o.jsx(
        lr,
        {
          event: v,
          okButtonAttributes: { "data-cy": "modal-delete" },
          okButtonClass: "formosa-button--danger",
          okButtonText: "Delete",
          onClickOk: L,
          onClickCancel: () => {
            C(!1);
          },
          text: `Are you sure you want to delete this ${h}?`
        }
      )
    ] }),
    _ && c.url && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "a",
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        href: `${_}${c.url}`,
        rel: "noreferrer",
        target: "_blank",
        children: "View"
      }
    ) }),
    w.map((n) => /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      $e,
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        to: `/${f}/${c.id}/${n.toLowerCase()}`,
        children: n
      }
    ) }, n)),
    i
  ] });
}
fr.propTypes = {
  apiPath: p.string.isRequired,
  children: p.node,
  currentPage: p.string.isRequired,
  path: p.string.isRequired,
  saveButtonText: p.string,
  setActionError: p.func,
  row: p.object,
  showDelete: p.bool,
  showSave: p.bool,
  singular: p.string.isRequired,
  subpages: p.array
};
function ie({ title: e = "" }) {
  return K(() => {
    let i = e;
    const u = ee.get("siteTitle");
    u && (i && (i += " | "), i += u), document.querySelector("title").innerText = i;
  }, [e]), null;
}
ie.propTypes = {
  title: p.string
};
function $r() {
  const { getDirtyKeys: e } = ye(ir);
  return br({
    message: "You have unsaved changes. Are you sure you want to leave this page?",
    when: () => e().length > 0
  }), null;
}
function Ye({ children: e, ...i }) {
  const { showWarningPrompt: u } = ye(Ne);
  return /* @__PURE__ */ o.jsxs(je, { ...i, children: [
    e,
    u && /* @__PURE__ */ o.jsx($r, {})
  ] });
}
Ye.propTypes = {
  children: p.node.isRequired
};
function Ir({
  addAnotherText: e = "Add another",
  apiPath: i,
  component: u,
  componentProps: f = {},
  defaultRow: c = {},
  extra: t = null,
  filterBody: s = null,
  filterValues: a = null,
  path: y,
  relationshipNames: h = [],
  saveButtonText: w = "Save",
  showAddAnother: E = !0,
  singular: T,
  titlePrefixText: j = "Add",
  ...R
}) {
  const [v, C] = F(c), [$, Y] = F(!1), L = he(), _ = Te(null), n = (U) => {
    $ || L(`/${y}/${U.id}`);
  }, M = u;
  f.formType = "add";
  const q = (U) => {
    U.key === "s" && U.metaKey && _ && _.current && (U.preventDefault(), _.current.click());
  };
  return K(() => (window.addEventListener("keydown", q), () => {
    window.removeEventListener("keydown", q);
  }), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: `${j} ${T}` }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${j} ${T}` }),
      /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
        /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "formosa-button",
            form: "crudnick-add-form",
            "data-cy": "save",
            ref: _,
            type: "submit",
            children: w
          }
        ) }),
        E && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
          te,
          {
            id: "crudnick-add-another",
            label: e,
            labelPosition: "after",
            setValue: Y,
            type: "checkbox",
            value: $
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitSuccess: n,
        clearOnSubmit: !0,
        defaultRow: c,
        errorMessageText: Z,
        filterBody: s,
        filterValues: a,
        htmlId: "crudnick-add-form",
        method: "POST",
        path: i,
        preventEmptyRequest: !0,
        relationshipNames: h,
        row: v,
        setRow: C,
        successToastText: `${De(T)} added successfully.`,
        ...R,
        children: /* @__PURE__ */ o.jsx(M, { row: v, setRow: C, ...f })
      }
    ),
    t ? t(v) : null
  ] });
}
Ir.propTypes = {
  addAnotherText: p.string,
  apiPath: p.string.isRequired,
  component: p.func.isRequired,
  componentProps: p.object,
  defaultRow: p.object,
  extra: p.func,
  filterBody: p.func,
  filterValues: p.func,
  path: p.string.isRequired,
  relationshipNames: p.array,
  saveButtonText: p.string,
  showAddAnother: p.bool,
  singular: p.string.isRequired,
  titlePrefixText: p.string
};
function dr({ error: e }) {
  if (e.status === 401)
    return D.logout(e.status), null;
  let i = "Error loading data. Please try again later.";
  return e.errors[0].title && (i = `Error: ${e.errors[0].title}`), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: "Error" }),
    /* @__PURE__ */ o.jsx(de, { type: "error", children: i })
  ] });
}
dr.propTypes = {
  error: p.object.isRequired
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var Oe, tr;
function Nr() {
  return tr || (tr = 1, Oe = function(i) {
    return i != null && typeof i == "object" && Array.isArray(i) === !1;
  }), Oe;
}
/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
var Ae, nr;
function Lr() {
  if (nr) return Ae;
  nr = 1;
  const e = Nr();
  Ae = function(t, s, a) {
    if (e(a) || (a = { default: a }), !c(t))
      return typeof a.default < "u" ? a.default : t;
    typeof s == "number" && (s = String(s));
    const y = Array.isArray(s), h = typeof s == "string", w = a.separator || ".", E = a.joinChar || (typeof w == "string" ? w : ".");
    if (!h && !y)
      return t;
    if (h && s in t)
      return f(s, t, a) ? t[s] : a.default;
    let T = y ? s : u(s, w, a), j = T.length, R = 0;
    do {
      let v = T[R];
      for (typeof v == "number" && (v = String(v)); v && v.slice(-1) === "\\"; )
        v = i([v.slice(0, -1), T[++R] || ""], E, a);
      if (v in t) {
        if (!f(v, t, a))
          return a.default;
        t = t[v];
      } else {
        let C = !1, $ = R + 1;
        for (; $ < j; )
          if (v = i([v, T[$++]], E, a), C = v in t) {
            if (!f(v, t, a))
              return a.default;
            t = t[v], R = $ - 1;
            break;
          }
        if (!C)
          return a.default;
      }
    } while (++R < j && c(t));
    return R === j ? t : a.default;
  };
  function i(t, s, a) {
    return typeof a.join == "function" ? a.join(t) : t[0] + s + t[1];
  }
  function u(t, s, a) {
    return typeof a.split == "function" ? a.split(t) : t.split(s);
  }
  function f(t, s, a) {
    return typeof a.isValid == "function" ? a.isValid(t, s) : !0;
  }
  function c(t) {
    return e(t) || Array.isArray(t) || typeof t == "function";
  }
  return Ae;
}
var Mr = Lr();
const ne = /* @__PURE__ */ ar(Mr);
function qr({
  actions: e = null,
  apiPath: i,
  component: u,
  componentProps: f = {},
  extra: c = null,
  filterBody: t = null,
  filterValues: s = null,
  name: a = null,
  path: y,
  relationshipNames: h = [],
  saveButtonText: w = "Save",
  showDelete: E = !0,
  showSave: T = !0,
  singular: j,
  subpages: R = [],
  titlePrefixText: v = "Edit",
  transform: C = null,
  url: $,
  ...Y
}) {
  const { id: L } = sr(), [_, n] = F(null), [M, q] = F(!1), [U, W] = F(!1), G = ue.instance();
  if (K(() => {
    G($).catch((V) => {
      q(V);
    }).then((V) => {
      V && n(C ? C(V) : V);
    });
  }, [$]), M)
    return /* @__PURE__ */ o.jsx(dr, { error: M });
  const J = (V) => {
    W(Z(V));
  }, Q = u;
  f.formType = "edit";
  const re = _ ? `${v} ${typeof a == "function" ? a(_) : ne(_, a)}` : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: re }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${v} ${j}` }),
      _ && /* @__PURE__ */ o.jsx(
        fr,
        {
          apiPath: i,
          currentPage: "/",
          path: y,
          saveButtonText: w,
          row: _,
          setActionError: W,
          showDelete: E,
          showSave: T,
          singular: j,
          subpages: R,
          children: e ? e(_, n) : null
        }
      )
    ] }),
    U && /* @__PURE__ */ o.jsx(de, { type: "error", children: U }),
    _ && /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitFailure: J,
        beforeSubmit: () => (W(!1), !0),
        filterBody: t,
        filterValues: s,
        htmlId: "crudnick-edit-form",
        id: L,
        method: "PUT",
        path: i,
        preventEmptyRequest: !0,
        relationshipNames: h,
        row: _,
        setRow: n,
        successToastText: `${De(j)} saved successfully.`,
        ...Y,
        children: /* @__PURE__ */ o.jsx(Q, { row: _, setRow: n, ...f })
      }
    ),
    _ && c ? c(_) : null
  ] });
}
qr.propTypes = {
  actions: p.func,
  apiPath: p.string.isRequired,
  component: p.func.isRequired,
  componentProps: p.object,
  extra: p.func,
  filterBody: p.func,
  filterValues: p.func,
  name: p.oneOfType([
    p.func,
    p.string
  ]),
  path: p.string.isRequired,
  relationshipNames: p.array,
  saveButtonText: p.string,
  showDelete: p.bool,
  showSave: p.bool,
  singular: p.string.isRequired,
  subpages: p.array,
  titlePrefixText: p.string,
  transform: p.func,
  url: p.string.isRequired
};
function Hr() {
  const [e] = qe(), i = he(), [u, f] = F({}), [c, t] = F(!1);
  return K(() => {
    e.get("expired") && (t({
      text: "Error: This link has expired.",
      type: "error"
    }), i(window.location.pathname, { replace: !0 }));
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    je,
    {
      beforeSubmit: () => (t(!1), !0),
      className: "crudnick-auth-form",
      clearOnSubmit: !0,
      errorMessageText: Z,
      method: "POST",
      path: "auth/forgot-password",
      row: u,
      setRow: f,
      showMessage: !1,
      successMessageText: "If there is an account with this email address, you will receive a password reset email shortly.",
      children: [
        /* @__PURE__ */ o.jsx(ie, { title: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx("h1", { children: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx(Le, {}),
        c && /* @__PURE__ */ o.jsx(de, { type: c.type, children: c.text }),
        /* @__PURE__ */ o.jsx(
          te,
          {
            autoComplete: "email",
            label: "Email",
            name: "email",
            required: !0,
            type: "email"
          }
        ),
        /* @__PURE__ */ o.jsx(
          Me,
          {
            label: "Send link",
            postfix: /* @__PURE__ */ o.jsx(Ee, { className: "formosa-button crudnick-button--link", to: "/", children: "Back to login" })
          }
        )
      ]
    }
  );
}
const Dr = (e) => /* @__PURE__ */ oe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M0 2l4 4 4-4H0z" })), Fr = (e) => /* @__PURE__ */ oe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z" })), Yr = (e) => e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), Ur = (e, i, u) => {
  u = u.trim().toLowerCase();
  const f = Yr(u);
  return e = e.filter((c) => (ne(c, i) || "").toString().replace(/<[^>]+?>/g, "").toLowerCase().match(new RegExp(`(^|[^a-z])${f}`))), e = e.sort((c, t) => {
    const s = (ne(c, i) || "").toString().toLowerCase(), a = (ne(t, i) || "").toString().toLowerCase(), y = s.indexOf(u) === 0, h = a.indexOf(u) === 0;
    return y && h || !y && !h ? 0 : y && !h ? -1 : 1;
  }), e;
}, Vr = (e, i) => (Object.keys(i).forEach((u) => {
  e = Ur(e, u, i[u]);
}), e), or = (e, i, u) => (
  // eslint-disable-line import/prefer-default-export
  e.sort((f, c) => {
    let t = ne(f, i);
    t == null && (t = "");
    let s = ne(c, i);
    return s == null && (s = ""), t === s ? 0 : t === "" ? 1 : s === "" ? -1 : typeof t == "number" && typeof s == "number" ? u === "asc" ? t < s ? -1 : 1 : t > s ? -1 : 1 : (t = t.toString(), s = s.toString(), u === "asc" ? t.localeCompare(s) : s.localeCompare(t));
  })
);
function Br({ columns: e, defaultOptions: i, path: u, title: f, url: c }) {
  const [t, s] = F(null), [a, y] = F([]), [h, w] = F(!1), [E, T] = F("name"), [j, R] = F("asc"), [v, C] = F(() => {
    const n = {};
    return e.forEach((M) => {
      n[ce(M.key)] = "";
    }), n;
  }), $ = ue.instance();
  K(() => {
    Object.prototype.hasOwnProperty.call(i, "sortKey") && T(i.sortKey), Object.prototype.hasOwnProperty.call(i, "sortDir") && R(i.sortDir), Object.prototype.hasOwnProperty.call(i, "filters") && C(i.filters), $(c, !1).catch((n) => {
      w(Z(n)), s(null), y([]);
    }).then((n) => {
      n && (s(n), y(n));
    });
  }, [c]);
  const Y = (n) => {
    const M = n.target.getAttribute("data-key");
    let q;
    E === M ? q = j === "asc" ? "desc" : "asc" : q = "asc", T(M), R(q), s(or(t, M, q)), y(or(a, M, q));
  }, L = t ? t.length : 0;
  let _ = ` (${a.length.toLocaleString()}`;
  return a.length !== L && (_ += ` of ${L.toLocaleString()}`), _ += ` result${L === 1 ? "" : "s"})`, e = e.map((n) => (n.link ? n.fn = (M, q) => /* @__PURE__ */ o.jsx(Ee, { className: "crudnick-link--table", to: `/${u}/${M.id}`, children: q }) : n.type === "checkbox" && (n.fn = (M, q) => q ? /* @__PURE__ */ o.jsx(Fr, { "aria-hidden": "true", height: 16, width: 16 }) : null, n.size = 4), n)), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: f }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsxs("h1", { children: [
        /* @__PURE__ */ o.jsx("span", { "data-cy": "title", children: f }),
        /* @__PURE__ */ o.jsx("small", { "data-cy": "num-results", children: t ? _ : null })
      ] }),
      /* @__PURE__ */ o.jsx("ul", { className: "crudnick-list", children: /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(Ee, { "data-cy": "add", className: "formosa-button crudnick-list__button", to: `/${u}/add`, children: "Add new" }) }) })
    ] }),
    h ? /* @__PURE__ */ o.jsx(de, { type: "error", children: h }) : /* @__PURE__ */ o.jsxs("table", { children: [
      /* @__PURE__ */ o.jsxs("thead", { children: [
        /* @__PURE__ */ o.jsx("tr", { children: e.map((n) => /* @__PURE__ */ o.jsx("th", { className: n.size ? "crudnick-column--shrink" : null, scope: "col", ...n.thAttributes, children: n.disableSort ? n.shortLabel || n.label : /* @__PURE__ */ o.jsxs(
          "button",
          {
            "aria-label": `Sort by ${n.label}`,
            className: "formosa-button",
            "data-key": n.sortKey || ce(n.key),
            disabled: t === null,
            onClick: Y,
            type: "button",
            children: [
              n.shortLabel || n.label,
              E === (n.sortKey || ce(n.key)) ? /* @__PURE__ */ o.jsx(
                Dr,
                {
                  "aria-hidden": "true",
                  className: `crudnick-icon--caret ${j === "desc" ? "flip" : ""}`,
                  height: 12,
                  width: 12
                }
              ) : null
            ]
          }
        ) }, n.key)) }),
        /* @__PURE__ */ o.jsx("tr", { children: e.map(({ key: n, disableSearch: M, label: q, size: U }) => /* @__PURE__ */ o.jsx("td", { className: "formosa-input-wrapper--search", children: !M && /* @__PURE__ */ o.jsx(
          hr,
          {
            "aria-label": `Search ${q}`,
            className: "formosa-field__input",
            disabled: t === null,
            setValue: (W) => {
              const G = {
                ...v,
                [ce(n)]: W
              };
              C(G);
              const J = Vr(t, G);
              y(J);
            },
            size: U,
            type: "search",
            value: v[ce(n)]
          }
        ) }, n)) })
      ] }),
      /* @__PURE__ */ o.jsx("tbody", { children: t === null ? /* @__PURE__ */ o.jsx("tr", { children: /* @__PURE__ */ o.jsx("td", { colSpan: e.length, children: /* @__PURE__ */ o.jsx("div", { className: "formosa-spinner", role: "status", children: "Loading..." }) }) }) : a.map((n) => /* @__PURE__ */ o.jsx("tr", { children: e.map(({ fn: M, key: q }) => /* @__PURE__ */ o.jsx("td", { className: `crudnick-cell--${q}`, children: M ? M(n, ne(n, ce(q)), q) : ne(n, ce(q)) }, q)) }, n.id)) })
    ] })
  ] });
}
Br.propTypes = {
  columns: p.array.isRequired,
  defaultOptions: p.object.isRequired,
  path: p.string.isRequired,
  title: p.string.isRequired,
  url: p.string.isRequired
};
const Wr = (e) => /* @__PURE__ */ oe.createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M0 2v2h20V2zm0 7v2h20V9zm0 7v2h20v-2z" })), zr = (e) => /* @__PURE__ */ oe.createElement("svg", { viewBox: "0 0 8 8", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M1.485.43L.431 1.486l.543.543 1.953 1.989L.97 5.974l-.54.517L1.488 7.57l.541-.54 1.988-1.99 1.957 1.99.515.537L7.567 6.49l-.537-.515-1.99-1.957 1.988-1.989.541-.54L6.491.43l-.517.54-1.957 1.957L2.028.974z" }));
function pr({ nav: e }) {
  const { addToast: i } = ye(Ne), u = Te(null), f = 1025, [c, t] = F(window.innerWidth >= f), s = () => {
    document.body.classList.remove("show-nav"), u.current.tagName === "DIALOG" && u.current.close(), u.current.removeEventListener("transitionend", s);
  }, a = () => {
    t(window.innerWidth >= f);
  };
  K(() => (window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a);
  }), []), K(() => {
    c && (h(), s());
  }, [c]);
  const y = () => {
    ue.delete("auth/logout").catch((R) => {
      R.status !== 401 && i(Z(R), "error");
    }).then(() => {
      D.logout();
    });
  }, h = () => {
    document.body.classList.remove("animate-nav"), u.current.addEventListener("transitionend", s);
  }, w = () => {
    document.body.classList.add("show-nav"), u.current.showModal(), setTimeout(() => {
      document.body.classList.add("animate-nav");
    }, 10);
  }, E = (R) => {
    R.preventDefault(), h();
  }, T = (R) => {
    R.target.tagName === "DIALOG" && h();
  }, j = c ? "div" : "dialog";
  return /* @__PURE__ */ o.jsxs("nav", { id: "crudnick-nav", children: [
    /* @__PURE__ */ o.jsxs(j, { id: "crudnick-nav__dialog", ref: u, onCancel: E, onClick: T, children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "aria-controls": "crudnick-nav__dialog",
          "aria-expanded": "false",
          className: "formosa-button crudnick-menu-button",
          id: "crudnick-menu-close-button",
          onClick: h,
          title: "Close Menu",
          type: "button",
          children: [
            /* @__PURE__ */ o.jsx(zr, { "aria-hidden": "true" }),
            "Close Menu"
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("ul", { id: "crudnick-nav__list", children: [
        e.map(({ label: R, path: v }) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(
          $e,
          {
            className: "formosa-button crudnick-list__button",
            onClick: h,
            to: v,
            children: R
          }
        ) }, v)),
        /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button crudnick-list__button", "data-cy": "logout", id: "crudnick-logout", onClick: y, type: "button", children: "Logout" }) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        "aria-controls": "crudnick-nav__dialog",
        "aria-expanded": "true",
        className: "formosa-button crudnick-menu-button",
        "data-cy": "menu",
        id: "crudnick-menu-show-button",
        onClick: w,
        title: "Show Menu",
        type: "button",
        children: [
          /* @__PURE__ */ o.jsx(Wr, { "aria-hidden": "true" }),
          "Show Menu"
        ]
      }
    )
  ] });
}
pr.propTypes = {
  nav: p.array.isRequired
};
function Kr({
  articleProps: e = null,
  children: i,
  nav: u
}) {
  D.isLoggedIn() && !ue.getToken() && ue.setToken(D.token()), document.addEventListener("formosaApiRequest", () => {
    D.refresh();
  });
  const f = (c) => {
    c.preventDefault();
    const t = c.target.getAttribute("href").split("#")[1], s = document.getElementById(t);
    s.setAttribute("tabindex", -1), s.addEventListener("blur", () => {
      s.removeAttribute("tabindex");
    }), s.focus();
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("a", { href: "#crudnick-article", id: "crudnick-skip", onClick: f, children: "Skip to content" }),
    /* @__PURE__ */ o.jsxs(vr, { children: [
      D.isLoggedIn() && /* @__PURE__ */ o.jsx(pr, { nav: u }),
      /* @__PURE__ */ o.jsx("article", { id: "crudnick-article", ...e, children: i })
    ] })
  ] });
}
Kr.propTypes = {
  articleProps: p.object,
  children: p.node,
  nav: p.array.isRequired
};
function mr({
  message: e = null,
  row: i,
  setMessage: u,
  setShowVerificationButton: f,
  showVerificationButton: c = !1
}) {
  const { clearAlert: t } = ye(ir), s = () => {
    t(), u(null), f(!1);
    const a = {
      username: i.username || c
    };
    ue.post("auth/resend-verification", JSON.stringify(a)).catch((y) => {
      u(Z(y));
    }).then((y) => {
      y && u({
        text: "Check your email to continue the registration process.",
        type: "success"
      });
    });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: "Login" }),
    /* @__PURE__ */ o.jsx("h1", { children: "Login" }),
    e && /* @__PURE__ */ o.jsx(de, { type: e.type, children: e.text }),
    c && /* @__PURE__ */ o.jsx("p", { className: `formosa-alert formosa-alert--${c === !0 ? "error" : "success"} post-alert-button`, children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button button--secondary", onClick: s, type: "button", children: "Resend verification email" }) }),
    /* @__PURE__ */ o.jsx(Le, {}),
    /* @__PURE__ */ o.jsx(
      te,
      {
        autoCapitalize: "none",
        autoComplete: "username",
        label: "Username",
        name: "username",
        required: !0,
        type: "text"
      }
    ),
    /* @__PURE__ */ o.jsx(
      te,
      {
        autoComplete: "current-password",
        label: "Password",
        name: "password",
        required: !0,
        type: "password"
      }
    ),
    /* @__PURE__ */ o.jsx(
      te,
      {
        label: "Remember me",
        labelPosition: "after",
        name: "remember",
        type: "checkbox"
      }
    ),
    /* @__PURE__ */ o.jsx(
      Me,
      {
        label: "Log in",
        postfix: /* @__PURE__ */ o.jsx(Ee, { className: "formosa-button crudnick-button--link", to: "/forgot-password", children: "Forgot password?" })
      }
    )
  ] });
}
mr.propTypes = {
  message: p.object,
  row: p.object.isRequired,
  setMessage: p.func.isRequired,
  setShowVerificationButton: p.func.isRequired,
  showVerificationButton: p.bool
};
function Zr() {
  const [e] = qe(), i = he(), [u, f] = F({}), [c, t] = F(null), [s, a] = F(!1), y = () => (t(null), a(!1), !0), h = (E) => {
    a(E.errors[0].code === "auth.unverified");
  }, w = (E) => {
    let T;
    e.get("redirect") && e.get("redirect")[0] === "/" ? T = e.get("redirect") : T = "/", D.login(E.user, E.token, E.user.remember), window.location.href = T;
  };
  return K(() => {
    e.get("status") === "401" ? (t({
      text: "Your session has expired. Please log in again.",
      type: "warning"
    }), i(window.location.pathname, { replace: !0 })) : e.get("verify") ? (t({
      text: `Check your email (${e.get("email")}) to continue the registration process.`,
      type: "success"
    }), a(e.get("username")), i(window.location.pathname, { replace: !0 })) : e.get("expired") && i("/forgot-password?expired=1");
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsx(
    je,
    {
      afterSubmitFailure: h,
      afterSubmitSuccess: w,
      beforeSubmit: y,
      className: "crudnick-auth-form",
      errorMessageText: (E) => Z(E, !1),
      method: "POST",
      path: "auth/login",
      row: u,
      setRow: f,
      showMessage: !1,
      children: /* @__PURE__ */ o.jsx(
        mr,
        {
          message: c,
          row: u,
          setMessage: t,
          showVerificationButton: s,
          setShowVerificationButton: a
        }
      )
    }
  );
}
function Qr() {
  return D.isLoggedIn() ? /* @__PURE__ */ o.jsx(de, { type: "error", children: "Page not found." }) : (window.location.href = `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`, null);
}
function et() {
  return D.isLoggedIn() ? /* @__PURE__ */ o.jsx(gr, {}) : /* @__PURE__ */ o.jsx(xr, { to: `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`, replace: !0 });
}
function rt() {
  const [e, i] = F({}), { token: u } = sr(), [f] = qe(), c = he();
  return K(() => {
    f.get("expires") < Math.floor(Date.now() / 1e3) && c("/forgot-password?expired=1");
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    je,
    {
      afterSubmitSuccess: () => {
        c("/");
      },
      className: "crudnick-auth-form",
      errorMessageText: Z,
      method: "PUT",
      path: `auth/reset-password/${u}${window.location.search}`,
      row: e,
      setRow: i,
      showMessage: !1,
      successToastText: "Password reset successfully.",
      children: [
        /* @__PURE__ */ o.jsx(ie, { title: "Reset password" }),
        /* @__PURE__ */ o.jsx("h1", { children: "Reset password" }),
        /* @__PURE__ */ o.jsx(Le, {}),
        /* @__PURE__ */ o.jsx(
          te,
          {
            autoComplete: "email",
            label: "Email",
            name: "email",
            required: !0,
            type: "email"
          }
        ),
        /* @__PURE__ */ o.jsx(
          te,
          {
            autoComplete: "new-password",
            label: "New password",
            name: "new_password",
            required: !0,
            type: "password"
          }
        ),
        /* @__PURE__ */ o.jsx(
          te,
          {
            autoComplete: "new-password",
            label: "Confirm new password",
            name: "new_password_confirmation",
            required: !0,
            type: "password"
          }
        ),
        /* @__PURE__ */ o.jsx(Me, { label: "Reset password" })
      ]
    }
  );
}
export {
  fr as Actions,
  Ir as AddForm,
  D as Auth,
  ee as CrudnickConfig,
  qr as EditForm,
  dr as Error,
  Hr as ForgotPassword,
  Br as IndexTable,
  Kr as Layout,
  Zr as Login,
  ie as MetaTitle,
  lr as Modal,
  Ye as MyForm,
  pr as Nav,
  Qr as NotFound,
  et as PrivateRoute,
  rt as ResetPassword,
  Z as errorMessageText
};
