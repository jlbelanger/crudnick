import * as ce from "react";
import yt, { useRef as Ee, useEffect as H, useContext as ve, useState as q, useMemo as vt } from "react";
import { FormosaContext as Le, Api as fe, FormContext as it, Form as Te, Field as ae, Alert as pe, FormAlert as Me, Submit as qe, Input as bt, FormContainer as gt } from "@jlbelanger/formosa";
import { useNavigate as be, NavLink as Ne, unstable_usePrompt as xt, useParams as at, useSearchParams as Re, Link as le, useLocation as wt, Outlet as _t, Navigate as jt } from "react-router";
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xe = { exports: {} }, he = {};
var Be;
function Tt() {
  if (Be) return he;
  Be = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(f, a, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      s = {};
      for (var d in a)
        d !== "key" && (s[d] = a[d]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: f,
      key: l,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return he.Fragment = n, he.jsx = i, he.jsxs = i, he;
}
var ye = {};
var Ve;
function Rt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === z ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case C:
          return "Fragment";
        case D:
          return "Profiler";
        case I:
          return "StrictMode";
        case U:
          return "Suspense";
        case V:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case j:
            return "Portal";
          case T:
            return t.displayName || "Context";
          case L:
            return (t._context.displayName || "Context") + ".Consumer";
          case u:
            var c = t.render;
            return t = t.displayName, t || (t = c.displayName || c.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case B:
            return c = t.displayName || null, c !== null ? c : e(t.type) || "Memo";
          case Y:
            c = t._payload, t = t._init;
            try {
              return e(t(c));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function i(t) {
      try {
        n(t);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var g = c.error, b = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), n(t);
      }
    }
    function f(t) {
      if (t === C) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === Y)
        return "<...>";
      try {
        var c = e(t);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var t = G.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(t) {
      if (ee.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, c) {
      function g() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: g,
        configurable: !0
      });
    }
    function m() {
      var t = e(this.type);
      return J[t] || (J[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function y(t, c, g, b, R, E) {
      var w = g.ref;
      return t = {
        $$typeof: S,
        type: t,
        key: c,
        props: g,
        _owner: b
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function h(t, c, g, b, R, E) {
      var w = c.children;
      if (w !== void 0)
        if (b)
          if (M(w)) {
            for (b = 0; b < w.length; b++)
              x(w[b]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(w);
      if (ee.call(c, "key")) {
        w = e(t);
        var P = Object.keys(c).filter(function(O) {
          return O !== "key";
        });
        b = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", r[w + b] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          w,
          P,
          w
        ), r[w + b] = !0);
      }
      if (w = null, g !== void 0 && (i(g), w = "" + g), l(c) && (i(c.key), w = "" + c.key), "key" in c) {
        g = {};
        for (var $ in c)
          $ !== "key" && (g[$] = c[$]);
      } else g = c;
      return w && d(
        g,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), y(
        t,
        w,
        g,
        a(),
        R,
        E
      );
    }
    function x(t) {
      _(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === Y && (t._payload.status === "fulfilled" ? _(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function _(t) {
      return typeof t == "object" && t !== null && t.$$typeof === S;
    }
    var k = yt, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), z = /* @__PURE__ */ Symbol.for("react.client.reference"), G = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, M = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var W, J = {}, Q = k.react_stack_bottom_frame.bind(
      k,
      s
    )(), ie = te(f(s)), r = {};
    ye.Fragment = C, ye.jsx = function(t, c, g) {
      var b = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        t,
        c,
        g,
        !1,
        b ? Error("react-stack-top-frame") : Q,
        b ? te(f(t)) : ie
      );
    }, ye.jsxs = function(t, c, g) {
      var b = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        t,
        c,
        g,
        !0,
        b ? Error("react-stack-top-frame") : Q,
        b ? te(f(t)) : ie
      );
    };
  })()), ye;
}
var We;
function kt() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? xe.exports = Tt() : xe.exports = Rt()), xe.exports;
}
var o = kt();
const Fe = (e) => e.replace(/(?:^|\s)\S/g, (n) => n.toUpperCase()), X = (e) => e.replace(/^relationships\./, "");
class oe {
  static init(n = {}) {
    window.CRUDNICK_CONFIG = {
      basePath: n.basePath || "/",
      cookiePrefix: n.cookiePrefix || "",
      frontendUrl: n.frontendUrl || "",
      siteTitle: n.siteTitle || ""
    };
  }
  static isReady() {
    return typeof window.CRUDNICK_CONFIG < "u";
  }
  static get(n) {
    return oe.isReady() ? n ? window.CRUDNICK_CONFIG[n] : window.CRUDNICK_CONFIG : null;
  }
  static set(n, i) {
    window.CRUDNICK_CONFIG[n] = i;
  }
}
function we(e) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n];
    for (var f in i)
      e[f] = i[f];
  }
  return e;
}
var St = {
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
function Ie(e, n) {
  function i(a, s, l) {
    if (!(typeof document > "u")) {
      l = we({}, n, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), a = encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var d = "";
      for (var m in l)
        l[m] && (d += "; " + m, l[m] !== !0 && (d += "=" + l[m].split(";")[0]));
      return document.cookie = a + "=" + e.write(s, a) + d;
    }
  }
  function f(a) {
    if (!(typeof document > "u" || arguments.length && !a)) {
      for (var s = document.cookie ? document.cookie.split("; ") : [], l = {}, d = 0; d < s.length; d++) {
        var m = s[d].split("="), y = m.slice(1).join("=");
        try {
          var h = decodeURIComponent(m[0]);
          if (l[h] = e.read(y, h), a === h)
            break;
        } catch {
        }
      }
      return a ? l[a] : l;
    }
  }
  return Object.create(
    {
      set: i,
      get: f,
      remove: function(a, s) {
        i(
          a,
          "",
          we({}, s, {
            expires: -1
          })
        );
      },
      withAttributes: function(a) {
        return Ie(this.converter, we({}, this.attributes, a));
      },
      withConverter: function(a) {
        return Ie(we({}, this.converter, a), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var de = Ie(St, { path: "/" });
class F {
  static login(n, i, f) {
    const a = oe.get("cookiePrefix");
    de.set(`${a}_user`, JSON.stringify(n), F.attributes(f)), de.set(`${a}_token`, i, F.attributes(f));
  }
  static refresh() {
    let n = F.user();
    n = n ? JSON.parse(n) : null, n && n.remember && F.login(n, F.token(), n.remember);
  }
  static attributes(n) {
    const i = {
      sameSite: "lax"
    };
    return n && (i.expires = 365), window.location.protocol === "https:" && (i.secure = !0), i;
  }
  static logout(n = "") {
    const i = oe.get("basePath"), f = oe.get("cookiePrefix");
    de.remove(`${f}_user`), de.remove(`${f}_token`), window.location.href = `${i}${n ? `?status=${n}` : ""}`;
  }
  static id() {
    const n = F.user();
    return n ? JSON.parse(n).id : null;
  }
  static user() {
    const n = oe.get("cookiePrefix");
    return de.get(`${n}_user`);
  }
  static token() {
    const n = oe.get("cookiePrefix");
    return de.get(`${n}_token`);
  }
  static isLoggedIn() {
    return !!F.user() && !!F.token();
  }
}
const ne = (e, n = !0) => n && e.status === 401 ? F.logout(e.status) : `Error: ${e.errors.map((i) => i.title).join(" ")}`;
var _e = { exports: {} }, je = { exports: {} }, A = {};
var ze;
function Pt() {
  if (ze) return A;
  ze = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, x = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, _ = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, k = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, D = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function L(u) {
    if (typeof u == "object" && u !== null) {
      var U = u.$$typeof;
      switch (U) {
        case n:
          switch (u = u.type, u) {
            case m:
            case y:
            case f:
            case s:
            case a:
            case x:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case d:
                case h:
                case S:
                case k:
                case l:
                  return u;
                default:
                  return U;
              }
          }
        case i:
          return U;
      }
    }
  }
  function T(u) {
    return L(u) === y;
  }
  return A.AsyncMode = m, A.ConcurrentMode = y, A.ContextConsumer = d, A.ContextProvider = l, A.Element = n, A.ForwardRef = h, A.Fragment = f, A.Lazy = S, A.Memo = k, A.Portal = i, A.Profiler = s, A.StrictMode = a, A.Suspense = x, A.isAsyncMode = function(u) {
    return T(u) || L(u) === m;
  }, A.isConcurrentMode = T, A.isContextConsumer = function(u) {
    return L(u) === d;
  }, A.isContextProvider = function(u) {
    return L(u) === l;
  }, A.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, A.isForwardRef = function(u) {
    return L(u) === h;
  }, A.isFragment = function(u) {
    return L(u) === f;
  }, A.isLazy = function(u) {
    return L(u) === S;
  }, A.isMemo = function(u) {
    return L(u) === k;
  }, A.isPortal = function(u) {
    return L(u) === i;
  }, A.isProfiler = function(u) {
    return L(u) === s;
  }, A.isStrictMode = function(u) {
    return L(u) === a;
  }, A.isSuspense = function(u) {
    return L(u) === x;
  }, A.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === f || u === y || u === s || u === a || u === x || u === _ || typeof u == "object" && u !== null && (u.$$typeof === S || u.$$typeof === k || u.$$typeof === l || u.$$typeof === d || u.$$typeof === h || u.$$typeof === C || u.$$typeof === I || u.$$typeof === D || u.$$typeof === j);
  }, A.typeOf = L, A;
}
var N = {};
var Ke;
function Ct() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, x = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, _ = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, k = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, D = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function L(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === f || v === y || v === s || v === a || v === x || v === _ || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === k || v.$$typeof === l || v.$$typeof === d || v.$$typeof === h || v.$$typeof === C || v.$$typeof === I || v.$$typeof === D || v.$$typeof === j);
    }
    function T(v) {
      if (typeof v == "object" && v !== null) {
        var re = v.$$typeof;
        switch (re) {
          case n:
            var ge = v.type;
            switch (ge) {
              case m:
              case y:
              case f:
              case s:
              case a:
              case x:
                return ge;
              default:
                var Ue = ge && ge.$$typeof;
                switch (Ue) {
                  case d:
                  case h:
                  case S:
                  case k:
                  case l:
                    return Ue;
                  default:
                    return re;
                }
            }
          case i:
            return re;
        }
      }
    }
    var u = m, U = y, V = d, B = l, Y = n, Z = h, z = f, G = S, ee = k, M = i, te = s, W = a, J = x, Q = !1;
    function ie(v) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(v) || T(v) === m;
    }
    function r(v) {
      return T(v) === y;
    }
    function t(v) {
      return T(v) === d;
    }
    function c(v) {
      return T(v) === l;
    }
    function g(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function b(v) {
      return T(v) === h;
    }
    function R(v) {
      return T(v) === f;
    }
    function E(v) {
      return T(v) === S;
    }
    function w(v) {
      return T(v) === k;
    }
    function P(v) {
      return T(v) === i;
    }
    function $(v) {
      return T(v) === s;
    }
    function O(v) {
      return T(v) === a;
    }
    function K(v) {
      return T(v) === x;
    }
    N.AsyncMode = u, N.ConcurrentMode = U, N.ContextConsumer = V, N.ContextProvider = B, N.Element = Y, N.ForwardRef = Z, N.Fragment = z, N.Lazy = G, N.Memo = ee, N.Portal = M, N.Profiler = te, N.StrictMode = W, N.Suspense = J, N.isAsyncMode = ie, N.isConcurrentMode = r, N.isContextConsumer = t, N.isContextProvider = c, N.isElement = g, N.isForwardRef = b, N.isFragment = R, N.isLazy = E, N.isMemo = w, N.isPortal = P, N.isProfiler = $, N.isStrictMode = O, N.isSuspense = K, N.isValidElementType = L, N.typeOf = T;
  })()), N;
}
var Ge;
function st() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? je.exports = Pt() : je.exports = Ct()), je.exports;
}
var ke, Je;
function Ot() {
  if (Je) return ke;
  Je = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function f(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, d = 0; d < 10; d++)
        l["_" + String.fromCharCode(d)] = d;
      var m = Object.getOwnPropertyNames(l).map(function(h) {
        return l[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        y[h] = h;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ke = a() ? Object.assign : function(s, l) {
    for (var d, m = f(s), y, h = 1; h < arguments.length; h++) {
      d = Object(arguments[h]);
      for (var x in d)
        n.call(d, x) && (m[x] = d[x]);
      if (e) {
        y = e(d);
        for (var _ = 0; _ < y.length; _++)
          i.call(d, y[_]) && (m[y[_]] = d[y[_]]);
      }
    }
    return m;
  }, ke;
}
var Se, Xe;
function De() {
  if (Xe) return Se;
  Xe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Se = e, Se;
}
var Pe, He;
function ct() {
  return He || (He = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var Ce, Ze;
function $t() {
  if (Ze) return Ce;
  Ze = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ De(), i = {}, f = /* @__PURE__ */ ct();
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(s, l, d, m, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (f(s, h)) {
          var x;
          try {
            if (typeof s[h] != "function") {
              var _ = Error(
                (m || "React class") + ": " + d + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            x = s[h](l, h, m, d, null, n);
          } catch (S) {
            x = S;
          }
          if (x && !(x instanceof Error) && e(
            (m || "React class") + ": type specification of " + d + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof x + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), x instanceof Error && !(x.message in i)) {
            i[x.message] = !0;
            var k = y ? y() : "";
            e(
              "Failed " + d + " type: " + x.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Ce = a, Ce;
}
var Oe, Qe;
function At() {
  if (Qe) return Oe;
  Qe = 1;
  var e = st(), n = Ot(), i = /* @__PURE__ */ De(), f = /* @__PURE__ */ ct(), a = /* @__PURE__ */ $t(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var m = "Warning: " + d;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Oe = function(d, m) {
    var y = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function x(r) {
      var t = r && (y && r[y] || r[h]);
      if (typeof t == "function")
        return t;
    }
    var _ = "<<anonymous>>", k = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: D(),
      arrayOf: L,
      element: T(),
      elementType: u(),
      instanceOf: U,
      node: Z(),
      objectOf: B,
      oneOf: V,
      oneOfType: Y,
      shape: G,
      exact: ee
    };
    function S(r, t) {
      return r === t ? r !== 0 || 1 / r === 1 / t : r !== r && t !== t;
    }
    function j(r, t) {
      this.message = r, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function C(r) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, c = 0;
      function g(R, E, w, P, $, O, K) {
        if (P = P || _, O = O || w, K !== i) {
          if (m) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = P + ":" + w;
            !t[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            c < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[re] = !0, c++);
          }
        }
        return E[w] == null ? R ? E[w] === null ? new j("The " + $ + " `" + O + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new j("The " + $ + " `" + O + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : r(E, w, P, $, O);
      }
      var b = g.bind(null, !1);
      return b.isRequired = g.bind(null, !0), b;
    }
    function I(r) {
      function t(c, g, b, R, E, w) {
        var P = c[g], $ = W(P);
        if ($ !== r) {
          var O = J(P);
          return new j(
            "Invalid " + R + " `" + E + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return C(t);
    }
    function D() {
      return C(l);
    }
    function L(r) {
      function t(c, g, b, R, E) {
        if (typeof r != "function")
          return new j("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var w = c[g];
        if (!Array.isArray(w)) {
          var P = W(w);
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected an array."));
        }
        for (var $ = 0; $ < w.length; $++) {
          var O = r(w, $, b, R, E + "[" + $ + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return C(t);
    }
    function T() {
      function r(t, c, g, b, R) {
        var E = t[c];
        if (!d(E)) {
          var w = W(E);
          return new j("Invalid " + b + " `" + R + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(r);
    }
    function u() {
      function r(t, c, g, b, R) {
        var E = t[c];
        if (!e.isValidElementType(E)) {
          var w = W(E);
          return new j("Invalid " + b + " `" + R + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(r);
    }
    function U(r) {
      function t(c, g, b, R, E) {
        if (!(c[g] instanceof r)) {
          var w = r.name || _, P = ie(c[g]);
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return C(t);
    }
    function V(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function t(c, g, b, R, E) {
        for (var w = c[g], P = 0; P < r.length; P++)
          if (S(w, r[P]))
            return null;
        var $ = JSON.stringify(r, function(K, v) {
          var re = J(v);
          return re === "symbol" ? String(v) : v;
        });
        return new j("Invalid " + R + " `" + E + "` of value `" + String(w) + "` " + ("supplied to `" + b + "`, expected one of " + $ + "."));
      }
      return C(t);
    }
    function B(r) {
      function t(c, g, b, R, E) {
        if (typeof r != "function")
          return new j("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var w = c[g], P = W(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected an object."));
        for (var $ in w)
          if (f(w, $)) {
            var O = r(w, $, b, R, E + "." + $, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return C(t);
    }
    function Y(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var t = 0; t < r.length; t++) {
        var c = r[t];
        if (typeof c != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(c) + " at index " + t + "."
          ), l;
      }
      function g(b, R, E, w, P) {
        for (var $ = [], O = 0; O < r.length; O++) {
          var K = r[O], v = K(b, R, E, w, P, i);
          if (v == null)
            return null;
          v.data && f(v.data, "expectedType") && $.push(v.data.expectedType);
        }
        var re = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new j("Invalid " + w + " `" + P + "` supplied to " + ("`" + E + "`" + re + "."));
      }
      return C(g);
    }
    function Z() {
      function r(t, c, g, b, R) {
        return M(t[c]) ? null : new j("Invalid " + b + " `" + R + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return C(r);
    }
    function z(r, t, c, g, b) {
      return new j(
        (r || "React class") + ": " + t + " type `" + c + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function G(r) {
      function t(c, g, b, R, E) {
        var w = c[g], P = W(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type `" + P + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var $ in r) {
          var O = r[$];
          if (typeof O != "function")
            return z(b, R, E, $, J(O));
          var K = O(w, $, b, R, E + "." + $, i);
          if (K)
            return K;
        }
        return null;
      }
      return C(t);
    }
    function ee(r) {
      function t(c, g, b, R, E) {
        var w = c[g], P = W(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type `" + P + "` " + ("supplied to `" + b + "`, expected `object`."));
        var $ = n({}, c[g], r);
        for (var O in $) {
          var K = r[O];
          if (f(r, O) && typeof K != "function")
            return z(b, R, E, O, J(K));
          if (!K)
            return new j(
              "Invalid " + R + " `" + E + "` key `" + O + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(c[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var v = K(w, O, b, R, E + "." + O, i);
          if (v)
            return v;
        }
        return null;
      }
      return C(t);
    }
    function M(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(M);
          if (r === null || d(r))
            return !0;
          var t = x(r);
          if (t) {
            var c = t.call(r), g;
            if (t !== r.entries) {
              for (; !(g = c.next()).done; )
                if (!M(g.value))
                  return !1;
            } else
              for (; !(g = c.next()).done; ) {
                var b = g.value;
                if (b && !M(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(r, t) {
      return r === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
    }
    function W(r) {
      var t = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : te(t, r) ? "symbol" : t;
    }
    function J(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var t = W(r);
      if (t === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return t;
    }
    function Q(r) {
      var t = J(r);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function ie(r) {
      return !r.constructor || !r.constructor.name ? _ : r.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, Oe;
}
var $e, et;
function Nt() {
  if (et) return $e;
  et = 1;
  var e = /* @__PURE__ */ De();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, $e = function() {
    function f(l, d, m, y, h, x) {
      if (x !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    f.isRequired = f;
    function a() {
      return f;
    }
    var s = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: a,
      element: f,
      elementType: f,
      instanceOf: a,
      node: f,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, $e;
}
var tt;
function It() {
  if (tt) return _e.exports;
  if (tt = 1, process.env.NODE_ENV !== "production") {
    var e = st(), n = !0;
    _e.exports = /* @__PURE__ */ At()(e.isElement, n);
  } else
    _e.exports = /* @__PURE__ */ Nt()();
  return _e.exports;
}
var Lt = /* @__PURE__ */ It();
const p = /* @__PURE__ */ Et(Lt);
function ut({
  cancelButtonAttributes: e = null,
  cancelButtonClass: n = "crudnick-button--secondary",
  cancelButtonText: i = "Cancel",
  cancelable: f = !0,
  children: a = null,
  event: s,
  okButtonAttributes: l = null,
  okButtonClass: d = "",
  okButtonText: m = "OK",
  onClickCancel: y = null,
  onClickOk: h = null,
  text: x = null
}) {
  const _ = Ee(null), k = (j) => {
    j.key === "Escape" && y && y();
  }, S = (j) => {
    j.target.tagName === "DIALOG" && y && y();
  };
  return H(() => (document.body.classList.add("crudnick-modal-open"), f && document.addEventListener("keydown", k), () => {
    document.body.classList.remove("crudnick-modal-open"), f && document.removeEventListener("keydown", k), s.target && s.target.focus();
  }), []), H(() => {
    _ && _.current && _.current.getAttribute("open") === null && (_.current.showModal(), _.current.focus(), f && _.current.addEventListener("click", S));
  }, [_]), /* @__PURE__ */ o.jsx("dialog", { className: "crudnick-modal", ref: _, tabIndex: -1, children: /* @__PURE__ */ o.jsxs("div", { className: "crudnick-modal__box", children: [
    a || /* @__PURE__ */ o.jsx("p", { className: "crudnick-modal__text", children: x }),
    /* @__PURE__ */ o.jsxs("p", { className: "crudnick-modal__options", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${d}`.trim(),
          onClick: h,
          type: "button",
          ...l,
          children: m
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${n}`.trim(),
          onClick: y,
          type: "button",
          ...e,
          children: i
        }
      )
    ] })
  ] }) });
}
ut.propTypes = {
  cancelButtonAttributes: p.object,
  cancelButtonClass: p.string,
  cancelButtonText: p.string,
  cancelable: p.bool,
  children: p.node,
  event: p.object.isRequired,
  okButtonAttributes: p.object,
  okButtonClass: p.string,
  okButtonText: p.string,
  onClickCancel: p.func,
  onClickOk: p.func,
  text: p.string
};
function lt({
  apiPath: e,
  children: n = null,
  currentPage: i,
  path: f,
  row: a = null,
  saveButtonText: s = "Save",
  setActionError: l = null,
  showDelete: d = !0,
  showSave: m = !0,
  singular: y,
  subpages: h = []
}) {
  const x = be(), { addToast: _, disableWarningPrompt: k, enableWarningPrompt: S } = ve(Le), [j, C] = q(!1), I = Ee(null), D = (u) => {
    u.key === "s" && u.metaKey && I && I.current && (u.preventDefault(), I.current.click());
  };
  H(() => (window.addEventListener("keydown", D), () => {
    window.removeEventListener("keydown", D);
  }), []);
  const L = () => {
    C(!1), k(), fe.delete(`${e}/${a.id}`).catch((u) => {
      l ? l(ne(u)) : _(ne(u), "error", 1e4), S();
    }).then((u) => {
      u && (_(`${Fe(y)} deleted successfully.`, "success"), x(`/${f}`), S());
    });
  }, T = oe.get("frontendUrl");
  return /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
    m ? /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "crudnick-list__button formosa-button",
        "data-cy": "save",
        form: "crudnick-edit-form",
        ref: I,
        type: "submit",
        children: s
      }
    ) }) : null,
    i !== "/" && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(Ne, { className: "crudnick-list__button formosa-button", to: `/${f}/${a.id}`, children: "Edit" }) }),
    d ? /* @__PURE__ */ o.jsxs("li", { children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "crudnick-list__button formosa-button formosa-button--danger",
          "data-cy": "delete",
          onClick: (u) => {
            l && l(!1), C(u);
          },
          type: "button",
          children: "Delete"
        }
      ),
      j ? /* @__PURE__ */ o.jsx(
        ut,
        {
          event: j,
          okButtonAttributes: { "data-cy": "modal-delete" },
          okButtonClass: "formosa-button--danger",
          okButtonText: "Delete",
          onClickCancel: () => {
            C(!1);
          },
          onClickOk: L,
          text: `Are you sure you want to delete this ${y}?`
        }
      ) : null
    ] }) : null,
    T && a.url ? /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "a",
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        href: a.url.startsWith("http") ? a.url : `${T}${a.url}`,
        rel: "noreferrer",
        target: "_blank",
        children: "View"
      }
    ) }) : null,
    h.map((u) => /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      Ne,
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        to: `/${f}/${a.id}/${u.toLowerCase()}`,
        children: u
      }
    ) }, u)),
    n
  ] });
}
lt.propTypes = {
  apiPath: p.string.isRequired,
  children: p.node,
  currentPage: p.string.isRequired,
  path: p.string.isRequired,
  row: p.object,
  saveButtonText: p.string,
  setActionError: p.func,
  showDelete: p.bool,
  showSave: p.bool,
  singular: p.string.isRequired,
  subpages: p.array
};
function ue({ title: e = "" }) {
  return H(() => {
    let n = e;
    const i = oe.get("siteTitle");
    i && (n && (n += " | "), n += i), document.querySelector("title").innerText = n;
  }, [e]), null;
}
ue.propTypes = {
  title: p.string
};
function Mt() {
  const { getDirtyKeys: e } = ve(it);
  return xt({
    message: "You have unsaved changes. Are you sure you want to leave this page?",
    when: () => e().length > 0
  }), null;
}
function Ye({ children: e, ...n }) {
  const { showWarningPrompt: i } = ve(Le);
  return /* @__PURE__ */ o.jsxs(Te, { ...n, children: [
    e,
    i ? /* @__PURE__ */ o.jsx(Mt, {}) : null
  ] });
}
Ye.propTypes = {
  children: p.node.isRequired
};
function qt({
  addAnotherText: e = "Add another",
  apiPath: n,
  component: i,
  componentProps: f = {},
  defaultRow: a = {},
  extra: s = null,
  filterBody: l = null,
  filterValues: d = null,
  path: m,
  relationshipNames: y = [],
  saveButtonText: h = "Save",
  showAddAnother: x = !0,
  singular: _,
  titlePrefixText: k = "Add",
  ...S
}) {
  const [j, C] = q(a), [I, D] = q(!1), L = be(), T = Ee(null), u = (B) => {
    I || L(`/${m}/${B.id}`);
  }, U = i;
  f.formType = "add";
  const V = (B) => {
    B.key === "s" && B.metaKey && T && T.current && (B.preventDefault(), T.current.click());
  };
  return H(() => (window.addEventListener("keydown", V), () => {
    window.removeEventListener("keydown", V);
  }), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: `${k} ${_}` }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${k} ${_}` }),
      /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
        /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button", "data-cy": "save", form: "crudnick-add-form", ref: T, type: "submit", children: h }) }),
        x ? /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
          ae,
          {
            id: "crudnick-add-another",
            label: e,
            labelPosition: "after",
            setValue: D,
            type: "checkbox",
            value: I
          }
        ) }) : null
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitSuccess: u,
        clearOnSubmit: !0,
        defaultRow: a,
        errorMessageText: ne,
        filterBody: l,
        filterValues: d,
        htmlId: "crudnick-add-form",
        method: "POST",
        path: n,
        preventEmptyRequest: !0,
        relationshipNames: y,
        row: j,
        setRow: C,
        successToastText: `${Fe(_)} added successfully.`,
        ...S,
        children: /* @__PURE__ */ o.jsx(U, { row: j, setRow: C, ...f })
      }
    ),
    s ? s(j) : null
  ] });
}
qt.propTypes = {
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
function ft({ error: e }) {
  if (e.status === 401)
    return F.logout(e.status), null;
  let n = "Error loading data. Please try again later.";
  return e.errors[0].title && (n = `Error: ${e.errors[0].title}`), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: "Error" }),
    /* @__PURE__ */ o.jsx(pe, { type: "error", children: n })
  ] });
}
ft.propTypes = {
  error: p.object.isRequired
};
var Ft = Object.defineProperty, me = (e, n) => Ft(e, "name", { value: n, configurable: !0 }), dt = /* @__PURE__ */ me((e) => e !== null && typeof e == "object", "isObject"), rt = /* @__PURE__ */ me((e, n, i) => typeof i.join == "function" ? i.join(e) : e[0] + n + e[1], "join"), Dt = /* @__PURE__ */ me((e, n, i) => typeof i.split == "function" ? i.split(e) : e.split(n), "split"), Ae = /* @__PURE__ */ me((e, n = {}, i) => typeof i?.isValid == "function" ? i.isValid(e, n) : !0, "isValid"), nt = /* @__PURE__ */ me((e) => dt(e) || typeof e == "function", "isValidObject"), Yt = /* @__PURE__ */ me((e, n, i = {}) => {
  if (dt(i) || (i = { default: i }), !nt(e))
    return typeof i.default < "u" ? i.default : e;
  typeof n == "number" && (n = String(n));
  const f = Array.isArray(n), a = typeof n == "string", s = i.separator || ".", l = i.joinChar || (typeof s == "string" ? s : ".");
  if (!a && !f)
    return e;
  if (e[n] !== void 0)
    return Ae(n, e, i) ? e[n] : i.default;
  const d = f ? n : Dt(n, s, i), m = d.length;
  let y = 0;
  do {
    let h = d[y];
    for (typeof h != "string" && (h = String(h)); h && h.slice(-1) === "\\"; )
      h = rt([h.slice(0, -1), d[++y] || ""], l, i);
    if (e[h] !== void 0) {
      if (!Ae(h, e, i))
        return i.default;
      e = e[h];
    } else {
      let x = !1, _ = y + 1;
      for (; _ < m; )
        if (h = rt([h, d[_++]], l, i), x = e[h] !== void 0) {
          if (!Ae(h, e, i))
            return i.default;
          e = e[h], y = _ - 1;
          break;
        }
      if (!x)
        return i.default;
    }
  } while (++y < m && nt(e));
  return y === m ? e : i.default;
}, "getValue"), se = Yt;
function Ut({
  actions: e = null,
  apiPath: n,
  component: i,
  componentProps: f = {},
  extra: a = null,
  filterBody: s = null,
  filterValues: l = null,
  name: d = null,
  path: m,
  relationshipNames: y = [],
  saveButtonText: h = "Save",
  showDelete: x = !0,
  showSave: _ = !0,
  singular: k,
  subpages: S = [],
  titlePrefixText: j = "Edit",
  transform: C = null,
  url: I,
  ...D
}) {
  const { id: L } = at(), [T, u] = q(null), [U, V] = q(!1), [B, Y] = q(!1), Z = fe.instance();
  if (H(() => {
    Z(I).catch((M) => {
      V(M);
    }).then((M) => {
      M && u(C ? C(M) : M);
    });
  }, [I]), U)
    return /* @__PURE__ */ o.jsx(ft, { error: U });
  const z = (M) => {
    Y(ne(M));
  }, G = i;
  f.formType = "edit";
  const ee = T ? `${j} ${typeof d == "function" ? d(T) : se(T, d)}` : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: ee }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${j} ${k}` }),
      T ? /* @__PURE__ */ o.jsx(
        lt,
        {
          apiPath: n,
          currentPage: "/",
          path: m,
          row: T,
          saveButtonText: h,
          setActionError: Y,
          showDelete: x,
          showSave: _,
          singular: k,
          subpages: S,
          children: e ? e(T, u) : null
        }
      ) : null
    ] }),
    B ? /* @__PURE__ */ o.jsx(pe, { type: "error", children: B }) : null,
    T ? /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitFailure: z,
        beforeSubmit: () => (Y(!1), !0),
        filterBody: s,
        filterValues: l,
        htmlId: "crudnick-edit-form",
        id: L,
        method: "PUT",
        path: n,
        preventEmptyRequest: !0,
        relationshipNames: y,
        row: T,
        setRow: u,
        successToastText: `${Fe(k)} saved successfully.`,
        ...D,
        children: /* @__PURE__ */ o.jsx(G, { row: T, setRow: u, ...f })
      }
    ) : null,
    T && a ? a(T) : null
  ] });
}
Ut.propTypes = {
  actions: p.func,
  apiPath: p.string.isRequired,
  component: p.func.isRequired,
  componentProps: p.object,
  extra: p.func,
  filterBody: p.func,
  filterValues: p.func,
  name: p.oneOfType([p.func, p.string]),
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
function tr() {
  const [e] = Re(), n = be(), [i, f] = q({}), [a, s] = q(!1);
  return H(() => {
    e.get("expired") && (s({
      text: "Error: This link has expired.",
      type: "error"
    }), n("/forgot-password", { replace: !0 }));
  }, []), F.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    Te,
    {
      beforeSubmit: () => (s(!1), !0),
      className: "crudnick-auth-form",
      clearOnSubmit: !0,
      errorMessageText: ne,
      method: "POST",
      path: "auth/forgot-password",
      row: i,
      setRow: f,
      showMessage: !1,
      successMessageText: "If there is an account with this email address, you will receive a password reset email shortly.",
      children: [
        /* @__PURE__ */ o.jsx(ue, { title: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx("h1", { children: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx(Me, {}),
        a ? /* @__PURE__ */ o.jsx(pe, { type: a.type, children: a.text }) : null,
        /* @__PURE__ */ o.jsx(
          ae,
          {
            autoComplete: "email",
            label: "Email",
            name: "email",
            required: !0,
            type: "email"
          }
        ),
        /* @__PURE__ */ o.jsx(
          qe,
          {
            label: "Send link",
            postfix: /* @__PURE__ */ o.jsx(le, { className: "formosa-button crudnick-button--link", to: "/", children: "Back to login" })
          }
        )
      ]
    }
  );
}
const Bt = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M0 2l4 4 4-4H0z" })), Vt = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z" })), Wt = (e) => e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), zt = (e, n, i) => {
  i = i.trim().toLowerCase();
  const f = Wt(i);
  return e = e.filter((a) => (se(a, n) || "").toString().replace(/<[^>]+?>/g, "").toLowerCase().match(new RegExp(`(^|[^a-z])${f}`))), e = e.sort((a, s) => {
    const l = (se(a, n) || "").toString().toLowerCase(), d = (se(s, n) || "").toString().toLowerCase(), m = l.indexOf(i) === 0, y = d.indexOf(i) === 0;
    return m && y || !m && !y ? 0 : m && !y ? -1 : 1;
  }), e;
}, Kt = (e, n) => (Object.keys(n).forEach((i) => {
  e = zt(e, i, n[i]);
}), e);
function pt({ currentPage: e, numPages: n, setCurrentPage: i }) {
  const f = wt(), a = (m, y = 1) => Array.from({ length: m }, (h, x) => y + x), l = n <= 7 ? a(n) : e <= 4 ? [1, 2, 3, 4, 5, "...", n] : e > n - 4 ? [1, "..."].concat(a(5, n - 4)) : [1, "...", e - 1, e, e + 1, "...", n], d = (m) => {
    const y = m.target.getAttribute("href"), h = y.lastIndexOf("="), x = h < 0 ? 1 : y.substr(h + 1);
    i(parseInt(x, 10));
  };
  return /* @__PURE__ */ o.jsx("nav", { "aria-label": "Pagination", className: "crudnick-pagination", children: /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-pagination__list", children: [
    /* @__PURE__ */ o.jsx("li", { className: "crudnick-pagination__item", children: /* @__PURE__ */ o.jsx(
      le,
      {
        "aria-label": "Previous page",
        className: "crudnick-pagination__link crudnick-pagination__link--prev",
        disabled: e <= 1,
        onClick: d,
        to: `${f.pathname}${e > 2 ? `?page=${e - 1}` : ""}`,
        children: "‹"
      }
    ) }),
    l.map((m, y) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-pagination__item", children: m === "..." ? /* @__PURE__ */ o.jsx("span", { className: "crudnick-pagination__link crudnick-pagination__link--dots", children: "…" }) : /* @__PURE__ */ o.jsx(
      le,
      {
        "aria-current": m === e ? "page" : null,
        "aria-label": `Page ${m}`,
        className: "crudnick-pagination__link",
        onClick: d,
        to: `${f.pathname}${m > 1 ? `?page=${m}` : ""}`,
        children: m
      }
    ) }, m === "..." ? `${m}-${y}` : m)),
    /* @__PURE__ */ o.jsx("li", { className: "crudnick-pagination__item", children: /* @__PURE__ */ o.jsx(
      le,
      {
        "aria-label": "Next page",
        className: "crudnick-pagination__link crudnick-pagination__link--next",
        disabled: e >= n,
        onClick: d,
        to: `${f.pathname}?page=${e + 1}`,
        children: "›"
      }
    ) })
  ] }) });
}
pt.propTypes = {
  currentPage: p.number.isRequired,
  numPages: p.number.isRequired,
  setCurrentPage: p.func.isRequired
};
const ot = (e, n, i) => e.sort((f, a) => {
  let s = se(f, n);
  s == null && (s = "");
  let l = se(a, n);
  return l == null && (l = ""), s === l ? 0 : s === "" ? 1 : l === "" ? -1 : typeof s == "number" && typeof l == "number" ? i === "asc" ? s < l ? -1 : 1 : s > l ? -1 : 1 : (s = s.toString(), l = l.toString(), i === "asc" ? s.localeCompare(l) : l.localeCompare(s));
});
function Gt({ columns: e, defaultOptions: n, path: i, perPage: f = 10, title: a, url: s }) {
  const [l] = Re(), [d, m] = q(null), [y, h] = q(null), [x, _] = q(0), [k, S] = q(0), [j, C] = q(() => {
    if (l.get("page")) {
      const r = parseInt(l.get("page"), 10);
      if (r > 0)
        return r;
    }
    return 1;
  }), [I, D] = q([]), [L, T] = q(!1), [u, U] = q(() => Object.hasOwn(n, "sortKey") ? n.sortKey : "name"), [V, B] = q(() => Object.hasOwn(n, "sortDir") ? n.sortDir : "asc"), [Y, Z] = q(() => {
    const r = {};
    return e.forEach((t) => {
      const c = X(t.key);
      let g = "";
      Object.hasOwn(n, "filters") && Object.hasOwn(n.filters, c) && (g = n.filters[c]), r[c] = g;
    }), r;
  }), [z, G] = q({ ...Y }), ee = fe.instance(), M = f !== null, te = vt(() => {
    let r = s;
    return M && (r.includes("?") ? r += "&" : r += "?", r += `page[size]=${f}&page[number]=${j}`, u && (r += `&sort=${V === "desc" ? "-" : ""}${u}`), Y && Object.keys(Y).forEach((t) => {
      const c = Y[t];
      c !== "" && (r += `&filter[${t}][like]=%25${c}%25`);
    })), r;
  }, [s, j, u, V, Y]);
  H(() => {
    W();
  }, [te]);
  const W = () => {
    d !== null && m(null), ee(te, !1).catch((r) => {
      T(ne(r)), m(null), D([]), S(0);
    }).then((r) => {
      r && (M ? (m(r.data || []), D(r.data || []), _(r.meta.page.total), S(r.meta.page.total), h(r.meta.page.total_pages), r.meta.page.total_pages > 0 && j > r.meta.page.total_pages && C(r.meta.page.total_pages)) : (m(r), D(r), _(r.length), S(r.length), h(1)));
    });
  }, J = (r) => {
    const t = r.target.getAttribute("data-crudnick-sort");
    let c;
    u === t ? c = V === "asc" ? "desc" : "asc" : c = "asc", U(t), B(c), M || (m(ot(d, t, c)), D(ot(I, t, c)));
  };
  let Q = ` (${k.toLocaleString()}`;
  k !== x && (Q += ` of ${x.toLocaleString()}`), Q += ` result${x === 1 ? "" : "s"})`, e = e.map((r) => (r.link ? r.fn = (t, c) => /* @__PURE__ */ o.jsx(le, { className: "crudnick-link--table", to: `/${i}/${t.id}`, children: c }) : r.type === "checkbox" && (r.fn = (t, c) => c ? /* @__PURE__ */ o.jsx(Vt, { "aria-hidden": "true", height: 16, width: 16 }) : null, r.size = 4), r));
  const ie = (r) => {
    r.preventDefault(), C(1), Z({ ...z });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: a }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsxs("h1", { children: [
        /* @__PURE__ */ o.jsx("span", { "data-cy": "title", children: a }),
        d === null ? null : /* @__PURE__ */ o.jsx("small", { "data-cy": "num-results", children: Q })
      ] }),
      /* @__PURE__ */ o.jsx("ul", { className: "crudnick-list", children: /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(le, { className: "formosa-button crudnick-list__button", "data-cy": "add", to: `/${i}/add`, children: "Add new" }) }) })
    ] }),
    M ? /* @__PURE__ */ o.jsx("form", { id: "crudnick-pagination", onSubmit: ie, children: /* @__PURE__ */ o.jsx(pt, { currentPage: j, numPages: y, setCurrentPage: C }) }) : null,
    L ? /* @__PURE__ */ o.jsx(pe, { type: "error", children: L }) : /* @__PURE__ */ o.jsxs("table", { children: [
      /* @__PURE__ */ o.jsxs("thead", { children: [
        /* @__PURE__ */ o.jsx("tr", { children: e.map((r) => /* @__PURE__ */ o.jsx(
          "th",
          {
            className: r.size ? "crudnick-column--shrink" : null,
            scope: "col",
            ...r.thAttributes,
            children: r.disableSort ? r.shortLabel || r.label : /* @__PURE__ */ o.jsxs(
              "button",
              {
                "aria-label": `Sort by ${r.label}`,
                className: "formosa-button crudnick-column__button",
                "data-crudnick-sort": r.sortKey || X(r.key),
                disabled: d === null,
                onClick: J,
                type: "button",
                children: [
                  r.shortLabel || r.label,
                  u === (r.sortKey || X(r.key)) ? /* @__PURE__ */ o.jsx(
                    Bt,
                    {
                      "aria-hidden": "true",
                      className: `crudnick-icon--caret ${V === "desc" ? "flip" : ""}`,
                      height: 12,
                      width: 12
                    }
                  ) : null
                ]
              }
            )
          },
          r.key
        )) }),
        /* @__PURE__ */ o.jsx("tr", { children: e.map(({ key: r, disableSearch: t, label: c, size: g }) => /* @__PURE__ */ o.jsx("td", { className: `formosa-input-wrapper--search${M ? " crudnick__filter" : ""}`, children: !t && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            bt,
            {
              "aria-label": `Search ${c}`,
              className: "formosa-field__input",
              "data-crudnick-filter": X(r),
              disabled: d === null,
              form: M ? "crudnick-pagination" : null,
              setValue: (b) => {
                const R = {
                  ...z,
                  [X(r)]: b
                };
                if (G(R), !M) {
                  C(1), Z(R);
                  const E = Kt(d, R);
                  D(E), S(E.length);
                }
              },
              size: g,
              type: "search",
              value: z[X(r)]
            }
          ),
          M && z[X(r)] ? /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "crudnick__filter-button crudnick__filter-button--clear",
              "data-crudnick-filter-clear": X(r),
              onClick: () => {
                const b = {
                  ...z,
                  [X(r)]: ""
                };
                G(b), Z({ ...b }), C(1);
              },
              type: "button",
              children: `Clear ${c} filter`
            }
          ) : null,
          M ? /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "crudnick__filter-button crudnick__filter-button--submit",
              "data-crudnick-filter-submit": X(r),
              form: "crudnick-pagination",
              type: "submit",
              children: `Filter by ${c}`
            }
          ) : null
        ] }) }, r)) })
      ] }),
      /* @__PURE__ */ o.jsx("tbody", { children: d === null ? /* @__PURE__ */ o.jsx("tr", { children: /* @__PURE__ */ o.jsx("td", { colSpan: e.length, children: /* @__PURE__ */ o.jsx("div", { className: "formosa-spinner", role: "status", children: "Loading..." }) }) }) : I.map((r) => /* @__PURE__ */ o.jsx("tr", { children: e.map(({ fn: t, key: c }) => /* @__PURE__ */ o.jsx("td", { className: `crudnick-cell--${c}`, children: t ? t(r, se(r, X(c)), c) : se(r, X(c)) }, c)) }, r.id)) })
    ] })
  ] });
}
Gt.propTypes = {
  columns: p.array.isRequired,
  defaultOptions: p.object.isRequired,
  path: p.string.isRequired,
  perPage: p.number,
  title: p.string.isRequired,
  url: p.string.isRequired
};
const Jt = (e) => /* @__PURE__ */ ce.createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M0 2v2h20V2zm0 7v2h20V9zm0 7v2h20v-2z" })), Xt = (e) => /* @__PURE__ */ ce.createElement("svg", { viewBox: "0 0 8 8", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M1.485.43L.431 1.486l.543.543 1.953 1.989L.97 5.974l-.54.517L1.488 7.57l.541-.54 1.988-1.99 1.957 1.99.515.537L7.567 6.49l-.537-.515-1.99-1.957 1.988-1.989.541-.54L6.491.43l-.517.54-1.957 1.957L2.028.974z" }));
function mt({ nav: e }) {
  const { addToast: n } = ve(Le), i = Ee(null), f = 1025, [a, s] = q(window.innerWidth >= f), l = () => {
    document.body.classList.remove("show-nav"), i.current.tagName === "DIALOG" && i.current.close(), i.current.removeEventListener("transitionend", l);
  }, d = () => {
    s(window.innerWidth >= f);
  };
  H(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), []), H(() => {
    a && (y(), l());
  }, [a]);
  const m = () => {
    fe.delete("auth/logout").catch((S) => {
      S.status !== 401 && n(ne(S), "error");
    }).then(() => {
      F.logout();
    });
  }, y = () => {
    document.body.classList.remove("animate-nav"), i.current.addEventListener("transitionend", l);
  }, h = () => {
    document.body.classList.add("show-nav"), i.current.showModal(), setTimeout(() => {
      document.body.classList.add("animate-nav");
    }, 10);
  }, x = (S) => {
    S.preventDefault(), y();
  }, _ = (S) => {
    S.target.tagName === "DIALOG" && y();
  }, k = a ? "div" : "dialog";
  return /* @__PURE__ */ o.jsxs("nav", { id: "crudnick-nav", children: [
    /* @__PURE__ */ o.jsxs(k, { id: "crudnick-nav__dialog", onCancel: x, onClick: _, ref: i, children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          "aria-controls": "crudnick-nav__dialog",
          "aria-expanded": "false",
          className: "formosa-button crudnick-menu-button",
          id: "crudnick-menu-close-button",
          onClick: y,
          title: "Close Menu",
          type: "button",
          children: [
            /* @__PURE__ */ o.jsx(Xt, { "aria-hidden": "true" }),
            "Close Menu"
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("ul", { id: "crudnick-nav__list", children: [
        e.map(({ label: S, path: j }) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(Ne, { className: "formosa-button crudnick-list__button", onClick: y, to: j, children: S }) }, j)),
        /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "formosa-button crudnick-list__button",
            "data-cy": "logout",
            id: "crudnick-logout",
            onClick: m,
            type: "button",
            children: "Logout"
          }
        ) })
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
        onClick: h,
        title: "Show Menu",
        type: "button",
        children: [
          /* @__PURE__ */ o.jsx(Jt, { "aria-hidden": "true" }),
          "Show Menu"
        ]
      }
    )
  ] });
}
mt.propTypes = {
  nav: p.array.isRequired
};
function Ht({ articleProps: e = null, children: n, nav: i }) {
  F.isLoggedIn() && !fe.getToken() && fe.setToken(F.token()), document.addEventListener("formosaApiRequest", () => {
    F.refresh();
  });
  const f = (a) => {
    a.preventDefault();
    const s = a.target.getAttribute("href").split("#")[1], l = document.getElementById(s);
    l.setAttribute("tabindex", -1), l.addEventListener("blur", () => {
      l.removeAttribute("tabindex");
    }), l.focus();
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("a", { href: "#crudnick-article", id: "crudnick-skip", onClick: f, children: "Skip to content" }),
    /* @__PURE__ */ o.jsxs(gt, { children: [
      F.isLoggedIn() && /* @__PURE__ */ o.jsx(mt, { nav: i }),
      /* @__PURE__ */ o.jsx("article", { id: "crudnick-article", ...e, children: n })
    ] })
  ] });
}
Ht.propTypes = {
  articleProps: p.object,
  children: p.node,
  nav: p.array.isRequired
};
function ht({
  message: e = null,
  row: n,
  setMessage: i,
  setShowVerificationButton: f,
  showVerificationButton: a = !1
}) {
  const { clearAlert: s } = ve(it), l = () => {
    s(), i(null), f(!1);
    const d = {
      username: n.username || a
    };
    fe.post("auth/resend-verification", JSON.stringify(d)).catch((m) => {
      i(ne(m));
    }).then((m) => {
      m && i({
        text: "Check your email to continue the registration process.",
        type: "success"
      });
    });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: "Login" }),
    /* @__PURE__ */ o.jsx("h1", { children: "Login" }),
    e ? /* @__PURE__ */ o.jsx(pe, { type: e.type, children: e.text }) : null,
    a ? /* @__PURE__ */ o.jsx("p", { className: `formosa-alert formosa-alert--${a === !0 ? "error" : "success"} post-alert-button`, children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button button--secondary", onClick: l, type: "button", children: "Resend verification email" }) }) : null,
    /* @__PURE__ */ o.jsx(Me, {}),
    /* @__PURE__ */ o.jsx(
      ae,
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
      ae,
      {
        autoComplete: "current-password",
        label: "Password",
        name: "password",
        required: !0,
        type: "password"
      }
    ),
    /* @__PURE__ */ o.jsx(
      ae,
      {
        label: "Remember me",
        labelPosition: "after",
        name: "remember",
        type: "checkbox"
      }
    ),
    /* @__PURE__ */ o.jsx(
      qe,
      {
        label: "Log in",
        postfix: /* @__PURE__ */ o.jsx(le, { className: "formosa-button crudnick-button--link", to: "/forgot-password", children: "Forgot password?" })
      }
    )
  ] });
}
ht.propTypes = {
  message: p.object,
  row: p.object.isRequired,
  setMessage: p.func.isRequired,
  setShowVerificationButton: p.func.isRequired,
  showVerificationButton: p.bool
};
function rr() {
  const [e] = Re(), n = be(), [i, f] = q({}), [a, s] = q(null), [l, d] = q(!1), m = () => (s(null), d(!1), !0), y = (x) => {
    d(x.errors[0].code === "auth.unverified");
  }, h = (x) => {
    let _;
    e.get("redirect") && e.get("redirect")[0] === "/" ? _ = e.get("redirect") : _ = window.location.href.replace(/\/$/, ""), F.login(x.user, x.token, x.user.remember), window.location.href = _;
  };
  return H(() => {
    e.get("status") === "401" ? (s({
      text: "Your session has expired. Please log in again.",
      type: "warning"
    }), n("/", { replace: !0 })) : e.get("verify") ? (s({
      text: `Check your email (${e.get("email")}) to continue the registration process.`,
      type: "success"
    }), d(e.get("username")), n("/", { replace: !0 })) : e.get("expired") && n("/forgot-password?expired=1");
  }, []), F.isLoggedIn() ? null : /* @__PURE__ */ o.jsx(
    Te,
    {
      afterSubmitFailure: y,
      afterSubmitSuccess: h,
      beforeSubmit: m,
      className: "crudnick-auth-form",
      errorMessageText: (x) => ne(x, !1),
      method: "POST",
      path: "auth/login",
      row: i,
      setRow: f,
      showMessage: !1,
      children: /* @__PURE__ */ o.jsx(
        ht,
        {
          message: a,
          row: i,
          setMessage: s,
          setShowVerificationButton: d,
          showVerificationButton: l
        }
      )
    }
  );
}
function nr() {
  return F.isLoggedIn() ? /* @__PURE__ */ o.jsx(pe, { type: "error", children: "Page not found." }) : (window.location.href = `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`, null);
}
function or() {
  return F.isLoggedIn() ? /* @__PURE__ */ o.jsx(_t, {}) : /* @__PURE__ */ o.jsx(jt, { replace: !0, to: `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}` });
}
function ir() {
  const [e, n] = q({}), { token: i } = at(), [f] = Re(), a = be();
  return H(() => {
    f.get("expires") < Math.floor(Date.now() / 1e3) && a("/forgot-password?expired=1");
  }, []), F.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    Te,
    {
      afterSubmitSuccess: () => {
        a("/");
      },
      className: "crudnick-auth-form",
      errorMessageText: ne,
      method: "PUT",
      path: `auth/reset-password/${i}${window.location.search}`,
      row: e,
      setRow: n,
      showMessage: !1,
      successToastText: "Password reset successfully.",
      children: [
        /* @__PURE__ */ o.jsx(ue, { title: "Reset password" }),
        /* @__PURE__ */ o.jsx("h1", { children: "Reset password" }),
        /* @__PURE__ */ o.jsx(Me, {}),
        /* @__PURE__ */ o.jsx(
          ae,
          {
            autoComplete: "email",
            label: "Email",
            name: "email",
            required: !0,
            type: "email"
          }
        ),
        /* @__PURE__ */ o.jsx(
          ae,
          {
            autoComplete: "new-password",
            label: "New password",
            name: "new_password",
            required: !0,
            type: "password"
          }
        ),
        /* @__PURE__ */ o.jsx(
          ae,
          {
            autoComplete: "new-password",
            label: "Confirm new password",
            name: "new_password_confirmation",
            required: !0,
            type: "password"
          }
        ),
        /* @__PURE__ */ o.jsx(qe, { label: "Reset password" })
      ]
    }
  );
}
export {
  lt as Actions,
  qt as AddForm,
  F as Auth,
  oe as CrudnickConfig,
  Ut as EditForm,
  ft as Error,
  tr as ForgotPassword,
  Gt as IndexTable,
  Ht as Layout,
  rr as Login,
  ue as MetaTitle,
  ut as Modal,
  Ye as MyForm,
  mt as Nav,
  nr as NotFound,
  or as PrivateRoute,
  ir as ResetPassword,
  ne as errorMessageText
};
