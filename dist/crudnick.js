import * as oe from "react";
import yr, { useRef as je, useEffect as K, useContext as he, useState as F } from "react";
import { FormosaContext as Ne, Api as ue, FormContext as ir, Form as Re, Field as te, Alert as de, FormAlert as Le, Submit as Me, Input as hr, FormContainer as vr } from "@jlbelanger/formosa";
import { useNavigate as ve, NavLink as $e, unstable_usePrompt as br, useParams as sr, useSearchParams as qe, Link as Te, Outlet as gr, Navigate as xr } from "react-router";
function wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, me = {};
var Be;
function Er() {
  if (Be) return me;
  Be = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(l, a, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), a.key !== void 0 && (c = "" + a.key), "key" in a) {
      s = {};
      for (var f in a)
        f !== "key" && (s[f] = a[f]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: l,
      key: c,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return me.Fragment = t, me.jsx = i, me.jsxs = i, me;
}
var ye = {};
var Ve;
function Tr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === J ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case O:
          return "Fragment";
        case Y:
          return "Profiler";
        case q:
          return "StrictMode";
        case L:
          return "Suspense";
        case M:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case T:
            return "Portal";
          case j:
            return r.displayName || "Context";
          case N:
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
    function t(r) {
      return "" + r;
    }
    function i(r) {
      try {
        t(r);
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
        ), t(r);
      }
    }
    function l(r) {
      if (r === O) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === W)
        return "<...>";
      try {
        var d = e(r);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = Q.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (re.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function f(r, d) {
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
    function v() {
      var r = e(this.type);
      return X[r] || (X[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function h(r, d, g, b, P, R) {
      var x = g.ref;
      return r = {
        $$typeof: S,
        type: r,
        key: d,
        props: g,
        _owner: b
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: v
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
        value: R
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function y(r, d, g, b, P, R) {
      var x = d.children;
      if (x !== void 0)
        if (b)
          if (B(x)) {
            for (b = 0; b < x.length; b++)
              w(x[b]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(x);
      if (re.call(d, "key")) {
        x = e(r);
        var k = Object.keys(d).filter(function(C) {
          return C !== "key";
        });
        b = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", u[x + b] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          x,
          k,
          x
        ), u[x + b] = !0);
      }
      if (x = null, g !== void 0 && (i(g), x = "" + g), c(d) && (i(d.key), x = "" + d.key), "key" in d) {
        g = {};
        for (var A in d)
          A !== "key" && (g[A] = d[A]);
      } else g = d;
      return x && f(
        g,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), h(
        r,
        x,
        g,
        a(),
        P,
        R
      );
    }
    function w(r) {
      E(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === W && (r._payload.status === "fulfilled" ? E(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function E(r) {
      return typeof r == "object" && r !== null && r.$$typeof === S;
    }
    var _ = yr, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), n = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), W = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), J = /* @__PURE__ */ Symbol.for("react.client.reference"), Q = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, B = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var z, X = {}, ae = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), le = se(l(s)), u = {};
    ye.Fragment = O, ye.jsx = function(r, d, g) {
      var b = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return y(
        r,
        d,
        g,
        !1,
        b ? Error("react-stack-top-frame") : ae,
        b ? se(l(r)) : le
      );
    }, ye.jsxs = function(r, d, g) {
      var b = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return y(
        r,
        d,
        g,
        !0,
        b ? Error("react-stack-top-frame") : ae,
        b ? se(l(r)) : le
      );
    };
  })()), ye;
}
var We;
function jr() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? ge.exports = Er() : ge.exports = Tr()), ge.exports;
}
var o = jr();
const De = (e) => e.replace(/(?:^|\s)\S/g, (t) => t.toUpperCase()), ce = (e) => e.replace(/^relationships\./, "");
class ee {
  static init(t = {}) {
    window.CRUDNICK_CONFIG = {
      basePath: t.basePath || "/",
      cookiePrefix: t.cookiePrefix || "",
      frontendUrl: t.frontendUrl || "",
      siteTitle: t.siteTitle || ""
    };
  }
  static isReady() {
    return typeof window.CRUDNICK_CONFIG < "u";
  }
  static get(t) {
    return ee.isReady() ? t ? window.CRUDNICK_CONFIG[t] : window.CRUDNICK_CONFIG : null;
  }
  static set(t, i) {
    window.CRUDNICK_CONFIG[t] = i;
  }
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];
    for (var l in i)
      e[l] = i[l];
  }
  return e;
}
var Rr = {
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
function Ie(e, t) {
  function i(a, s, c) {
    if (!(typeof document > "u")) {
      c = xe({}, t, c), typeof c.expires == "number" && (c.expires = new Date(Date.now() + c.expires * 864e5)), c.expires && (c.expires = c.expires.toUTCString()), a = encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var f = "";
      for (var v in c)
        c[v] && (f += "; " + v, c[v] !== !0 && (f += "=" + c[v].split(";")[0]));
      return document.cookie = a + "=" + e.write(s, a) + f;
    }
  }
  function l(a) {
    if (!(typeof document > "u" || arguments.length && !a)) {
      for (var s = document.cookie ? document.cookie.split("; ") : [], c = {}, f = 0; f < s.length; f++) {
        var v = s[f].split("="), h = v.slice(1).join("=");
        try {
          var y = decodeURIComponent(v[0]);
          if (c[y] = e.read(h, y), a === y)
            break;
        } catch {
        }
      }
      return a ? c[a] : c;
    }
  }
  return Object.create(
    {
      set: i,
      get: l,
      remove: function(a, s) {
        i(
          a,
          "",
          xe({}, s, {
            expires: -1
          })
        );
      },
      withAttributes: function(a) {
        return Ie(this.converter, xe({}, this.attributes, a));
      },
      withConverter: function(a) {
        return Ie(xe({}, this.converter, a), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var fe = Ie(Rr, { path: "/" });
class D {
  static login(t, i, l) {
    const a = ee.get("cookiePrefix");
    fe.set(`${a}_user`, JSON.stringify(t), D.attributes(l)), fe.set(`${a}_token`, i, D.attributes(l));
  }
  static refresh() {
    let t = D.user();
    t = t ? JSON.parse(t) : null, t && t.remember && D.login(t, D.token(), t.remember);
  }
  static attributes(t) {
    const i = {
      sameSite: "lax"
    };
    return t && (i.expires = 365), window.location.protocol === "https:" && (i.secure = !0), i;
  }
  static logout(t = "") {
    const i = ee.get("basePath"), l = ee.get("cookiePrefix");
    fe.remove(`${l}_user`), fe.remove(`${l}_token`), window.location.href = `${i}${t ? `?status=${t}` : ""}`;
  }
  static id() {
    const t = D.user();
    return t ? JSON.parse(t).id : null;
  }
  static user() {
    const t = ee.get("cookiePrefix");
    return fe.get(`${t}_user`);
  }
  static token() {
    const t = ee.get("cookiePrefix");
    return fe.get(`${t}_token`);
  }
  static isLoggedIn() {
    return !!D.user() && !!D.token();
  }
}
const Z = (e, t = !0) => t && e.status === 401 ? D.logout(e.status) : `Error: ${e.errors.map((i) => i.title).join(" ")}`;
var we = { exports: {} }, Ee = { exports: {} }, $ = {};
var ze;
function _r() {
  if (ze) return $;
  ze = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, l = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, f = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, v = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, E = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _ = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, T = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, O = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, q = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Y = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function N(n) {
    if (typeof n == "object" && n !== null) {
      var L = n.$$typeof;
      switch (L) {
        case t:
          switch (n = n.type, n) {
            case v:
            case h:
            case l:
            case s:
            case a:
            case w:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case f:
                case y:
                case S:
                case _:
                case c:
                  return n;
                default:
                  return L;
              }
          }
        case i:
          return L;
      }
    }
  }
  function j(n) {
    return N(n) === h;
  }
  return $.AsyncMode = v, $.ConcurrentMode = h, $.ContextConsumer = f, $.ContextProvider = c, $.Element = t, $.ForwardRef = y, $.Fragment = l, $.Lazy = S, $.Memo = _, $.Portal = i, $.Profiler = s, $.StrictMode = a, $.Suspense = w, $.isAsyncMode = function(n) {
    return j(n) || N(n) === v;
  }, $.isConcurrentMode = j, $.isContextConsumer = function(n) {
    return N(n) === f;
  }, $.isContextProvider = function(n) {
    return N(n) === c;
  }, $.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === t;
  }, $.isForwardRef = function(n) {
    return N(n) === y;
  }, $.isFragment = function(n) {
    return N(n) === l;
  }, $.isLazy = function(n) {
    return N(n) === S;
  }, $.isMemo = function(n) {
    return N(n) === _;
  }, $.isPortal = function(n) {
    return N(n) === i;
  }, $.isProfiler = function(n) {
    return N(n) === s;
  }, $.isStrictMode = function(n) {
    return N(n) === a;
  }, $.isSuspense = function(n) {
    return N(n) === w;
  }, $.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === l || n === h || n === s || n === a || n === w || n === E || typeof n == "object" && n !== null && (n.$$typeof === S || n.$$typeof === _ || n.$$typeof === c || n.$$typeof === f || n.$$typeof === y || n.$$typeof === O || n.$$typeof === q || n.$$typeof === Y || n.$$typeof === T);
  }, $.typeOf = N, $;
}
var I = {};
var Ke;
function kr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, l = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, f = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, v = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, E = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _ = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, T = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, O = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, q = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Y = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function N(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === l || m === h || m === s || m === a || m === w || m === E || typeof m == "object" && m !== null && (m.$$typeof === S || m.$$typeof === _ || m.$$typeof === c || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === q || m.$$typeof === Y || m.$$typeof === T);
    }
    function j(m) {
      if (typeof m == "object" && m !== null) {
        var H = m.$$typeof;
        switch (H) {
          case t:
            var be = m.type;
            switch (be) {
              case v:
              case h:
              case l:
              case s:
              case a:
              case w:
                return be;
              default:
                var Ue = be && be.$$typeof;
                switch (Ue) {
                  case f:
                  case y:
                  case S:
                  case _:
                  case c:
                    return Ue;
                  default:
                    return H;
                }
            }
          case i:
            return H;
        }
      }
    }
    var n = v, L = h, M = f, U = c, W = t, G = y, J = l, Q = S, re = _, B = i, se = s, z = a, X = w, ae = !1;
    function le(m) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(m) || j(m) === v;
    }
    function u(m) {
      return j(m) === h;
    }
    function r(m) {
      return j(m) === f;
    }
    function d(m) {
      return j(m) === c;
    }
    function g(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function b(m) {
      return j(m) === y;
    }
    function P(m) {
      return j(m) === l;
    }
    function R(m) {
      return j(m) === S;
    }
    function x(m) {
      return j(m) === _;
    }
    function k(m) {
      return j(m) === i;
    }
    function A(m) {
      return j(m) === s;
    }
    function C(m) {
      return j(m) === a;
    }
    function V(m) {
      return j(m) === w;
    }
    I.AsyncMode = n, I.ConcurrentMode = L, I.ContextConsumer = M, I.ContextProvider = U, I.Element = W, I.ForwardRef = G, I.Fragment = J, I.Lazy = Q, I.Memo = re, I.Portal = B, I.Profiler = se, I.StrictMode = z, I.Suspense = X, I.isAsyncMode = le, I.isConcurrentMode = u, I.isContextConsumer = r, I.isContextProvider = d, I.isElement = g, I.isForwardRef = b, I.isFragment = P, I.isLazy = R, I.isMemo = x, I.isPortal = k, I.isProfiler = A, I.isStrictMode = C, I.isSuspense = V, I.isValidElementType = N, I.typeOf = j;
  })()), I;
}
var Ge;
function ar() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? Ee.exports = _r() : Ee.exports = kr()), Ee.exports;
}
var _e, Je;
function Sr() {
  if (Je) return _e;
  Je = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function l(s) {
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
      for (var c = {}, f = 0; f < 10; f++)
        c["_" + String.fromCharCode(f)] = f;
      var v = Object.getOwnPropertyNames(c).map(function(y) {
        return c[y];
      });
      if (v.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        h[y] = y;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _e = a() ? Object.assign : function(s, c) {
    for (var f, v = l(s), h, y = 1; y < arguments.length; y++) {
      f = Object(arguments[y]);
      for (var w in f)
        t.call(f, w) && (v[w] = f[w]);
      if (e) {
        h = e(f);
        for (var E = 0; E < h.length; E++)
          i.call(f, h[E]) && (v[h[E]] = f[h[E]]);
      }
    }
    return v;
  }, _e;
}
var ke, Xe;
function Fe() {
  if (Xe) return ke;
  Xe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = e, ke;
}
var Se, He;
function cr() {
  return He || (He = 1, Se = Function.call.bind(Object.prototype.hasOwnProperty)), Se;
}
var Pe, Ze;
function Pr() {
  if (Ze) return Pe;
  Ze = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Fe(), i = {}, l = /* @__PURE__ */ cr();
    e = function(s) {
      var c = "Warning: " + s;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(s, c, f, v, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in s)
        if (l(s, y)) {
          var w;
          try {
            if (typeof s[y] != "function") {
              var E = Error(
                (v || "React class") + ": " + f + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            w = s[y](c, y, v, f, null, t);
          } catch (S) {
            w = S;
          }
          if (w && !(w instanceof Error) && e(
            (v || "React class") + ": type specification of " + f + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof w + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), w instanceof Error && !(w.message in i)) {
            i[w.message] = !0;
            var _ = h ? h() : "";
            e(
              "Failed " + f + " type: " + w.message + (_ ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Pe = a, Pe;
}
var Ce, Qe;
function Cr() {
  if (Qe) return Ce;
  Qe = 1;
  var e = ar(), t = Sr(), i = /* @__PURE__ */ Fe(), l = /* @__PURE__ */ cr(), a = /* @__PURE__ */ Pr(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(f) {
    var v = "Warning: " + f;
    typeof console < "u" && console.error(v);
    try {
      throw new Error(v);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Ce = function(f, v) {
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function w(u) {
      var r = u && (h && u[h] || u[y]);
      if (typeof r == "function")
        return r;
    }
    var E = "<<anonymous>>", _ = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: Y(),
      arrayOf: N,
      element: j(),
      elementType: n(),
      instanceOf: L,
      node: G(),
      objectOf: U,
      oneOf: M,
      oneOfType: W,
      shape: Q,
      exact: re
    };
    function S(u, r) {
      return u === r ? u !== 0 || 1 / u === 1 / r : u !== u && r !== r;
    }
    function T(u, r) {
      this.message = u, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function O(u) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, d = 0;
      function g(P, R, x, k, A, C, V) {
        if (k = k || E, C = C || x, V !== i) {
          if (v) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var H = k + ":" + x;
            !r[H] && // Avoid spamming the console because they are often not actionable except for lib authors
            d < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[H] = !0, d++);
          }
        }
        return R[x] == null ? P ? R[x] === null ? new T("The " + A + " `" + C + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new T("The " + A + " `" + C + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : u(R, x, k, A, C);
      }
      var b = g.bind(null, !1);
      return b.isRequired = g.bind(null, !0), b;
    }
    function q(u) {
      function r(d, g, b, P, R, x) {
        var k = d[g], A = z(k);
        if (A !== u) {
          var C = X(k);
          return new T(
            "Invalid " + P + " `" + R + "` of type " + ("`" + C + "` supplied to `" + b + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return O(r);
    }
    function Y() {
      return O(c);
    }
    function N(u) {
      function r(d, g, b, P, R) {
        if (typeof u != "function")
          return new T("Property `" + R + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var x = d[g];
        if (!Array.isArray(x)) {
          var k = z(x);
          return new T("Invalid " + P + " `" + R + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected an array."));
        }
        for (var A = 0; A < x.length; A++) {
          var C = u(x, A, b, P, R + "[" + A + "]", i);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return O(r);
    }
    function j() {
      function u(r, d, g, b, P) {
        var R = r[d];
        if (!f(R)) {
          var x = z(R);
          return new T("Invalid " + b + " `" + P + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(u);
    }
    function n() {
      function u(r, d, g, b, P) {
        var R = r[d];
        if (!e.isValidElementType(R)) {
          var x = z(R);
          return new T("Invalid " + b + " `" + P + "` of type " + ("`" + x + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(u);
    }
    function L(u) {
      function r(d, g, b, P, R) {
        if (!(d[g] instanceof u)) {
          var x = u.name || E, k = le(d[g]);
          return new T("Invalid " + P + " `" + R + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return O(r);
    }
    function M(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), c;
      function r(d, g, b, P, R) {
        for (var x = d[g], k = 0; k < u.length; k++)
          if (S(x, u[k]))
            return null;
        var A = JSON.stringify(u, function(V, m) {
          var H = X(m);
          return H === "symbol" ? String(m) : m;
        });
        return new T("Invalid " + P + " `" + R + "` of value `" + String(x) + "` " + ("supplied to `" + b + "`, expected one of " + A + "."));
      }
      return O(r);
    }
    function U(u) {
      function r(d, g, b, P, R) {
        if (typeof u != "function")
          return new T("Property `" + R + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var x = d[g], k = z(x);
        if (k !== "object")
          return new T("Invalid " + P + " `" + R + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected an object."));
        for (var A in x)
          if (l(x, A)) {
            var C = u(x, A, b, P, R + "." + A, i);
            if (C instanceof Error)
              return C;
          }
        return null;
      }
      return O(r);
    }
    function W(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var r = 0; r < u.length; r++) {
        var d = u[r];
        if (typeof d != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(d) + " at index " + r + "."
          ), c;
      }
      function g(b, P, R, x, k) {
        for (var A = [], C = 0; C < u.length; C++) {
          var V = u[C], m = V(b, P, R, x, k, i);
          if (m == null)
            return null;
          m.data && l(m.data, "expectedType") && A.push(m.data.expectedType);
        }
        var H = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new T("Invalid " + x + " `" + k + "` supplied to " + ("`" + R + "`" + H + "."));
      }
      return O(g);
    }
    function G() {
      function u(r, d, g, b, P) {
        return B(r[d]) ? null : new T("Invalid " + b + " `" + P + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return O(u);
    }
    function J(u, r, d, g, b) {
      return new T(
        (u || "React class") + ": " + r + " type `" + d + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function Q(u) {
      function r(d, g, b, P, R) {
        var x = d[g], k = z(x);
        if (k !== "object")
          return new T("Invalid " + P + " `" + R + "` of type `" + k + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var A in u) {
          var C = u[A];
          if (typeof C != "function")
            return J(b, P, R, A, X(C));
          var V = C(x, A, b, P, R + "." + A, i);
          if (V)
            return V;
        }
        return null;
      }
      return O(r);
    }
    function re(u) {
      function r(d, g, b, P, R) {
        var x = d[g], k = z(x);
        if (k !== "object")
          return new T("Invalid " + P + " `" + R + "` of type `" + k + "` " + ("supplied to `" + b + "`, expected `object`."));
        var A = t({}, d[g], u);
        for (var C in A) {
          var V = u[C];
          if (l(u, C) && typeof V != "function")
            return J(b, P, R, C, X(V));
          if (!V)
            return new T(
              "Invalid " + P + " `" + R + "` key `" + C + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(d[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var m = V(x, C, b, P, R + "." + C, i);
          if (m)
            return m;
        }
        return null;
      }
      return O(r);
    }
    function B(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(B);
          if (u === null || f(u))
            return !0;
          var r = w(u);
          if (r) {
            var d = r.call(u), g;
            if (r !== u.entries) {
              for (; !(g = d.next()).done; )
                if (!B(g.value))
                  return !1;
            } else
              for (; !(g = d.next()).done; ) {
                var b = g.value;
                if (b && !B(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(u, r) {
      return u === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function z(u) {
      var r = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : se(r, u) ? "symbol" : r;
    }
    function X(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var r = z(u);
      if (r === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function ae(u) {
      var r = X(u);
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
    function le(u) {
      return !u.constructor || !u.constructor.name ? E : u.constructor.name;
    }
    return _.checkPropTypes = a, _.resetWarningCache = a.resetWarningCache, _.PropTypes = _, _;
  }, Ce;
}
var Oe, er;
function Or() {
  if (er) return Oe;
  er = 1;
  var e = /* @__PURE__ */ Fe();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, Oe = function() {
    function l(c, f, v, h, y, w) {
      if (w !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    l.isRequired = l;
    function a() {
      return l;
    }
    var s = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: a,
      element: l,
      elementType: l,
      instanceOf: a,
      node: l,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Oe;
}
var rr;
function Ar() {
  if (rr) return we.exports;
  if (rr = 1, process.env.NODE_ENV !== "production") {
    var e = ar(), t = !0;
    we.exports = /* @__PURE__ */ Cr()(e.isElement, t);
  } else
    we.exports = /* @__PURE__ */ Or()();
  return we.exports;
}
var $r = /* @__PURE__ */ Ar();
const p = /* @__PURE__ */ wr($r);
function ur({
  cancelButtonAttributes: e = null,
  cancelButtonClass: t = "crudnick-button--secondary",
  cancelButtonText: i = "Cancel",
  cancelable: l = !0,
  children: a = null,
  event: s,
  okButtonAttributes: c = null,
  okButtonClass: f = "",
  okButtonText: v = "OK",
  onClickCancel: h = null,
  onClickOk: y = null,
  text: w = null
}) {
  const E = je(null), _ = (T) => {
    T.key === "Escape" && h && h();
  }, S = (T) => {
    T.target.tagName === "DIALOG" && h && h();
  };
  return K(() => (document.body.classList.add("crudnick-modal-open"), l && document.addEventListener("keydown", _), () => {
    document.body.classList.remove("crudnick-modal-open"), l && document.removeEventListener("keydown", _), s.target && s.target.focus();
  }), []), K(() => {
    E && E.current && E.current.getAttribute("open") === null && (E.current.showModal(), E.current.focus(), l && E.current.addEventListener("click", S));
  }, [E]), /* @__PURE__ */ o.jsx("dialog", { className: "crudnick-modal", ref: E, tabIndex: -1, children: /* @__PURE__ */ o.jsxs("div", { className: "crudnick-modal__box", children: [
    a || /* @__PURE__ */ o.jsx("p", { className: "crudnick-modal__text", children: w }),
    /* @__PURE__ */ o.jsxs("p", { className: "crudnick-modal__options", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${f}`.trim(),
          onClick: y,
          type: "button",
          ...c,
          children: v
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${t}`.trim(),
          onClick: h,
          type: "button",
          ...e,
          children: i
        }
      )
    ] })
  ] }) });
}
ur.propTypes = {
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
function lr({
  apiPath: e,
  children: t = null,
  currentPage: i,
  path: l,
  row: a = null,
  saveButtonText: s = "Save",
  setActionError: c = null,
  showDelete: f = !0,
  showSave: v = !0,
  singular: h,
  subpages: y = []
}) {
  const w = ve(), { addToast: E, disableWarningPrompt: _, enableWarningPrompt: S } = he(Ne), [T, O] = F(!1), q = je(null), Y = (n) => {
    n.key === "s" && n.metaKey && q && q.current && (n.preventDefault(), q.current.click());
  };
  K(() => (window.addEventListener("keydown", Y), () => {
    window.removeEventListener("keydown", Y);
  }), []);
  const N = () => {
    O(!1), _(), ue.delete(`${e}/${a.id}`).catch((n) => {
      c ? c(Z(n)) : E(Z(n), "error", 1e4), S();
    }).then((n) => {
      n && (E(`${De(h)} deleted successfully.`, "success"), w(`/${l}`), S());
    });
  }, j = ee.get("frontendUrl");
  return /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
    v && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "crudnick-list__button formosa-button",
        "data-cy": "save",
        form: "crudnick-edit-form",
        ref: q,
        type: "submit",
        children: s
      }
    ) }),
    i !== "/" && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx($e, { className: "crudnick-list__button formosa-button", to: `/${l}/${a.id}`, children: "Edit" }) }),
    f && /* @__PURE__ */ o.jsxs("li", { children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "crudnick-list__button formosa-button formosa-button--danger",
          "data-cy": "delete",
          onClick: (n) => {
            c && c(!1), O(n);
          },
          type: "button",
          children: "Delete"
        }
      ),
      T && /* @__PURE__ */ o.jsx(
        ur,
        {
          event: T,
          okButtonAttributes: { "data-cy": "modal-delete" },
          okButtonClass: "formosa-button--danger",
          okButtonText: "Delete",
          onClickCancel: () => {
            O(!1);
          },
          onClickOk: N,
          text: `Are you sure you want to delete this ${h}?`
        }
      )
    ] }),
    j && a.url && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "a",
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        href: `${j}${a.url}`,
        rel: "noreferrer",
        target: "_blank",
        children: "View"
      }
    ) }),
    y.map((n) => /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      $e,
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        to: `/${l}/${a.id}/${n.toLowerCase()}`,
        children: n
      }
    ) }, n)),
    t
  ] });
}
lr.propTypes = {
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
function ie({ title: e = "" }) {
  return K(() => {
    let t = e;
    const i = ee.get("siteTitle");
    i && (t && (t += " | "), t += i), document.querySelector("title").innerText = t;
  }, [e]), null;
}
ie.propTypes = {
  title: p.string
};
function Ir() {
  const { getDirtyKeys: e } = he(ir);
  return br({
    message: "You have unsaved changes. Are you sure you want to leave this page?",
    when: () => e().length > 0
  }), null;
}
function Ye({ children: e, ...t }) {
  const { showWarningPrompt: i } = he(Ne);
  return /* @__PURE__ */ o.jsxs(Re, { ...t, children: [
    e,
    i && /* @__PURE__ */ o.jsx(Ir, {})
  ] });
}
Ye.propTypes = {
  children: p.node.isRequired
};
function Nr({
  addAnotherText: e = "Add another",
  apiPath: t,
  component: i,
  componentProps: l = {},
  defaultRow: a = {},
  extra: s = null,
  filterBody: c = null,
  filterValues: f = null,
  path: v,
  relationshipNames: h = [],
  saveButtonText: y = "Save",
  showAddAnother: w = !0,
  singular: E,
  titlePrefixText: _ = "Add",
  ...S
}) {
  const [T, O] = F(a), [q, Y] = F(!1), N = ve(), j = je(null), n = (U) => {
    q || N(`/${v}/${U.id}`);
  }, L = i;
  l.formType = "add";
  const M = (U) => {
    U.key === "s" && U.metaKey && j && j.current && (U.preventDefault(), j.current.click());
  };
  return K(() => (window.addEventListener("keydown", M), () => {
    window.removeEventListener("keydown", M);
  }), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: `${_} ${E}` }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${_} ${E}` }),
      /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
        /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "formosa-button",
            "data-cy": "save",
            form: "crudnick-add-form",
            ref: j,
            type: "submit",
            children: y
          }
        ) }),
        w && /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
          te,
          {
            id: "crudnick-add-another",
            label: e,
            labelPosition: "after",
            setValue: Y,
            type: "checkbox",
            value: q
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitSuccess: n,
        clearOnSubmit: !0,
        defaultRow: a,
        errorMessageText: Z,
        filterBody: c,
        filterValues: f,
        htmlId: "crudnick-add-form",
        method: "POST",
        path: t,
        preventEmptyRequest: !0,
        relationshipNames: h,
        row: T,
        setRow: O,
        successToastText: `${De(E)} added successfully.`,
        ...S,
        children: /* @__PURE__ */ o.jsx(L, { row: T, setRow: O, ...l })
      }
    ),
    s ? s(T) : null
  ] });
}
Nr.propTypes = {
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
function fr({ error: e }) {
  if (e.status === 401)
    return D.logout(e.status), null;
  let t = "Error loading data. Please try again later.";
  return e.errors[0].title && (t = `Error: ${e.errors[0].title}`), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: "Error" }),
    /* @__PURE__ */ o.jsx(de, { type: "error", children: t })
  ] });
}
fr.propTypes = {
  error: p.object.isRequired
};
var Lr = Object.defineProperty, pe = (e, t) => Lr(e, "name", { value: t, configurable: !0 }), dr = /* @__PURE__ */ pe((e) => e !== null && typeof e == "object", "isObject"), tr = /* @__PURE__ */ pe((e, t, i) => typeof i.join == "function" ? i.join(e) : e[0] + t + e[1], "join"), Mr = /* @__PURE__ */ pe((e, t, i) => typeof i.split == "function" ? i.split(e) : e.split(t), "split"), Ae = /* @__PURE__ */ pe((e, t = {}, i) => typeof i?.isValid == "function" ? i.isValid(e, t) : !0, "isValid"), nr = /* @__PURE__ */ pe((e) => dr(e) || typeof e == "function", "isValidObject"), qr = /* @__PURE__ */ pe((e, t, i = {}) => {
  if (dr(i) || (i = { default: i }), !nr(e))
    return typeof i.default < "u" ? i.default : e;
  typeof t == "number" && (t = String(t));
  const l = Array.isArray(t), a = typeof t == "string", s = i.separator || ".", c = i.joinChar || (typeof s == "string" ? s : ".");
  if (!a && !l)
    return e;
  if (e[t] !== void 0)
    return Ae(t, e, i) ? e[t] : i.default;
  const f = l ? t : Mr(t, s, i), v = f.length;
  let h = 0;
  do {
    let y = f[h];
    for (typeof y != "string" && (y = String(y)); y && y.slice(-1) === "\\"; )
      y = tr([y.slice(0, -1), f[++h] || ""], c, i);
    if (e[y] !== void 0) {
      if (!Ae(y, e, i))
        return i.default;
      e = e[y];
    } else {
      let w = !1, E = h + 1;
      for (; E < v; )
        if (y = tr([y, f[E++]], c, i), w = e[y] !== void 0) {
          if (!Ae(y, e, i))
            return i.default;
          e = e[y], h = E - 1;
          break;
        }
      if (!w)
        return i.default;
    }
  } while (++h < v && nr(e));
  return h === v ? e : i.default;
}, "getValue"), ne = qr;
function Dr({
  // eslint-disable-line complexity
  actions: e = null,
  apiPath: t,
  component: i,
  componentProps: l = {},
  extra: a = null,
  filterBody: s = null,
  filterValues: c = null,
  name: f = null,
  path: v,
  relationshipNames: h = [],
  saveButtonText: y = "Save",
  showDelete: w = !0,
  showSave: E = !0,
  singular: _,
  subpages: S = [],
  titlePrefixText: T = "Edit",
  transform: O = null,
  url: q,
  ...Y
}) {
  const { id: N } = sr(), [j, n] = F(null), [L, M] = F(!1), [U, W] = F(!1), G = ue.instance();
  if (K(() => {
    G(q).catch((B) => {
      M(B);
    }).then((B) => {
      B && n(O ? O(B) : B);
    });
  }, [q]), L)
    return /* @__PURE__ */ o.jsx(fr, { error: L });
  const J = (B) => {
    W(Z(B));
  }, Q = i;
  l.formType = "edit";
  const re = j ? `${T} ${typeof f == "function" ? f(j) : ne(j, f)}` : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: re }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${T} ${_}` }),
      j && /* @__PURE__ */ o.jsx(
        lr,
        {
          apiPath: t,
          currentPage: "/",
          path: v,
          row: j,
          saveButtonText: y,
          setActionError: W,
          showDelete: w,
          showSave: E,
          singular: _,
          subpages: S,
          children: e ? e(j, n) : null
        }
      )
    ] }),
    U && /* @__PURE__ */ o.jsx(de, { type: "error", children: U }),
    j && /* @__PURE__ */ o.jsx(
      Ye,
      {
        afterSubmitFailure: J,
        beforeSubmit: () => (W(!1), !0),
        filterBody: s,
        filterValues: c,
        htmlId: "crudnick-edit-form",
        id: N,
        method: "PUT",
        path: t,
        preventEmptyRequest: !0,
        relationshipNames: h,
        row: j,
        setRow: n,
        successToastText: `${De(_)} saved successfully.`,
        ...Y,
        children: /* @__PURE__ */ o.jsx(Q, { row: j, setRow: n, ...l })
      }
    ),
    j && a ? a(j) : null
  ] });
}
Dr.propTypes = {
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
function Zr() {
  const [e] = qe(), t = ve(), [i, l] = F({}), [a, s] = F(!1);
  return K(() => {
    e.get("expired") && (s({
      text: "Error: This link has expired.",
      type: "error"
    }), t(window.location.pathname, { replace: !0 }));
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    Re,
    {
      beforeSubmit: () => (s(!1), !0),
      className: "crudnick-auth-form",
      clearOnSubmit: !0,
      errorMessageText: Z,
      method: "POST",
      path: "auth/forgot-password",
      row: i,
      setRow: l,
      showMessage: !1,
      successMessageText: "If there is an account with this email address, you will receive a password reset email shortly.",
      children: [
        /* @__PURE__ */ o.jsx(ie, { title: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx("h1", { children: "Forgot your password?" }),
        /* @__PURE__ */ o.jsx(Le, {}),
        a && /* @__PURE__ */ o.jsx(de, { type: a.type, children: a.text }),
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
            postfix: /* @__PURE__ */ o.jsx(Te, { className: "formosa-button crudnick-button--link", to: "/", children: "Back to login" })
          }
        )
      ]
    }
  );
}
const Fr = (e) => /* @__PURE__ */ oe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M0 2l4 4 4-4H0z" })), Yr = (e) => /* @__PURE__ */ oe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z" })), Ur = (e) => e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), Br = (e, t, i) => {
  i = i.trim().toLowerCase();
  const l = Ur(i);
  return e = e.filter((a) => (ne(a, t) || "").toString().replace(/<[^>]+?>/g, "").toLowerCase().match(new RegExp(`(^|[^a-z])${l}`))), e = e.sort((a, s) => {
    const c = (ne(a, t) || "").toString().toLowerCase(), f = (ne(s, t) || "").toString().toLowerCase(), v = c.indexOf(i) === 0, h = f.indexOf(i) === 0;
    return v && h || !v && !h ? 0 : v && !h ? -1 : 1;
  }), e;
}, Vr = (e, t) => (Object.keys(t).forEach((i) => {
  e = Br(e, i, t[i]);
}), e), or = (e, t, i) => e.sort((l, a) => {
  let s = ne(l, t);
  s == null && (s = "");
  let c = ne(a, t);
  return c == null && (c = ""), s === c ? 0 : s === "" ? 1 : c === "" ? -1 : typeof s == "number" && typeof c == "number" ? i === "asc" ? s < c ? -1 : 1 : s > c ? -1 : 1 : (s = s.toString(), c = c.toString(), i === "asc" ? s.localeCompare(c) : c.localeCompare(s));
});
function Wr({ columns: e, defaultOptions: t, path: i, title: l, url: a }) {
  const [s, c] = F(null), [f, v] = F([]), [h, y] = F(!1), [w, E] = F("name"), [_, S] = F("asc"), [T, O] = F(() => {
    const n = {};
    return e.forEach((L) => {
      n[ce(L.key)] = "";
    }), n;
  }), q = ue.instance();
  K(() => {
    Object.hasOwn(t, "sortKey") && E(t.sortKey), Object.hasOwn(t, "sortDir") && S(t.sortDir), Object.hasOwn(t, "filters") && O(t.filters), q(a, !1).catch((n) => {
      y(Z(n)), c(null), v([]);
    }).then((n) => {
      n && (c(n), v(n));
    });
  }, [a]);
  const Y = (n) => {
    const L = n.target.getAttribute("data-key");
    let M;
    w === L ? M = _ === "asc" ? "desc" : "asc" : M = "asc", E(L), S(M), c(or(s, L, M)), v(or(f, L, M));
  }, N = s ? s.length : 0;
  let j = ` (${f.length.toLocaleString()}`;
  return f.length !== N && (j += ` of ${N.toLocaleString()}`), j += ` result${N === 1 ? "" : "s"})`, e = e.map((n) => (n.link ? n.fn = (L, M) => /* @__PURE__ */ o.jsx(Te, { className: "crudnick-link--table", to: `/${i}/${L.id}`, children: M }) : n.type === "checkbox" && (n.fn = (L, M) => M ? /* @__PURE__ */ o.jsx(Yr, { "aria-hidden": "true", height: 16, width: 16 }) : null, n.size = 4), n)), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: l }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsxs("h1", { children: [
        /* @__PURE__ */ o.jsx("span", { "data-cy": "title", children: l }),
        /* @__PURE__ */ o.jsx("small", { "data-cy": "num-results", children: s ? j : null })
      ] }),
      /* @__PURE__ */ o.jsx("ul", { className: "crudnick-list", children: /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(Te, { className: "formosa-button crudnick-list__button", "data-cy": "add", to: `/${i}/add`, children: "Add new" }) }) })
    ] }),
    h ? /* @__PURE__ */ o.jsx(de, { type: "error", children: h }) : /* @__PURE__ */ o.jsxs("table", { children: [
      /* @__PURE__ */ o.jsxs("thead", { children: [
        /* @__PURE__ */ o.jsx("tr", { children: e.map((n) => /* @__PURE__ */ o.jsx("th", { className: n.size ? "crudnick-column--shrink" : null, scope: "col", ...n.thAttributes, children: n.disableSort ? n.shortLabel || n.label : /* @__PURE__ */ o.jsxs(
          "button",
          {
            "aria-label": `Sort by ${n.label}`,
            className: "formosa-button",
            "data-key": n.sortKey || ce(n.key),
            disabled: s === null,
            onClick: Y,
            type: "button",
            children: [
              n.shortLabel || n.label,
              w === (n.sortKey || ce(n.key)) ? /* @__PURE__ */ o.jsx(
                Fr,
                {
                  "aria-hidden": "true",
                  className: `crudnick-icon--caret ${_ === "desc" ? "flip" : ""}`,
                  height: 12,
                  width: 12
                }
              ) : null
            ]
          }
        ) }, n.key)) }),
        /* @__PURE__ */ o.jsx("tr", { children: e.map(({ key: n, disableSearch: L, label: M, size: U }) => /* @__PURE__ */ o.jsx("td", { className: "formosa-input-wrapper--search", children: !L && /* @__PURE__ */ o.jsx(
          hr,
          {
            "aria-label": `Search ${M}`,
            className: "formosa-field__input",
            disabled: s === null,
            setValue: (W) => {
              const G = {
                ...T,
                [ce(n)]: W
              };
              O(G);
              const J = Vr(s, G);
              v(J);
            },
            size: U,
            type: "search",
            value: T[ce(n)]
          }
        ) }, n)) })
      ] }),
      /* @__PURE__ */ o.jsx("tbody", { children: s === null ? /* @__PURE__ */ o.jsx("tr", { children: /* @__PURE__ */ o.jsx("td", { colSpan: e.length, children: /* @__PURE__ */ o.jsx("div", { className: "formosa-spinner", role: "status", children: "Loading..." }) }) }) : f.map((n) => /* @__PURE__ */ o.jsx("tr", { children: e.map(({ fn: L, key: M }) => /* @__PURE__ */ o.jsx("td", { className: `crudnick-cell--${M}`, children: L ? L(n, ne(n, ce(M)), M) : ne(n, ce(M)) }, M)) }, n.id)) })
    ] })
  ] });
}
Wr.propTypes = {
  columns: p.array.isRequired,
  defaultOptions: p.object.isRequired,
  path: p.string.isRequired,
  title: p.string.isRequired,
  url: p.string.isRequired
};
const zr = (e) => /* @__PURE__ */ oe.createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M0 2v2h20V2zm0 7v2h20V9zm0 7v2h20v-2z" })), Kr = (e) => /* @__PURE__ */ oe.createElement("svg", { viewBox: "0 0 8 8", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ oe.createElement("path", { d: "M1.485.43L.431 1.486l.543.543 1.953 1.989L.97 5.974l-.54.517L1.488 7.57l.541-.54 1.988-1.99 1.957 1.99.515.537L7.567 6.49l-.537-.515-1.99-1.957 1.988-1.989.541-.54L6.491.43l-.517.54-1.957 1.957L2.028.974z" }));
function pr({ nav: e }) {
  const { addToast: t } = he(Ne), i = je(null), l = 1025, [a, s] = F(window.innerWidth >= l), c = () => {
    document.body.classList.remove("show-nav"), i.current.tagName === "DIALOG" && i.current.close(), i.current.removeEventListener("transitionend", c);
  }, f = () => {
    s(window.innerWidth >= l);
  };
  K(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), []), K(() => {
    a && (h(), c());
  }, [a]);
  const v = () => {
    ue.delete("auth/logout").catch((S) => {
      S.status !== 401 && t(Z(S), "error");
    }).then(() => {
      D.logout();
    });
  }, h = () => {
    document.body.classList.remove("animate-nav"), i.current.addEventListener("transitionend", c);
  }, y = () => {
    document.body.classList.add("show-nav"), i.current.showModal(), setTimeout(() => {
      document.body.classList.add("animate-nav");
    }, 10);
  }, w = (S) => {
    S.preventDefault(), h();
  }, E = (S) => {
    S.target.tagName === "DIALOG" && h();
  }, _ = a ? "div" : "dialog";
  return /* @__PURE__ */ o.jsxs("nav", { id: "crudnick-nav", children: [
    /* @__PURE__ */ o.jsxs(_, { id: "crudnick-nav__dialog", onCancel: w, onClick: E, ref: i, children: [
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
            /* @__PURE__ */ o.jsx(Kr, { "aria-hidden": "true" }),
            "Close Menu"
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("ul", { id: "crudnick-nav__list", children: [
        e.map(({ label: S, path: T }) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(
          $e,
          {
            className: "formosa-button crudnick-list__button",
            onClick: h,
            to: T,
            children: S
          }
        ) }, T)),
        /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button crudnick-list__button", "data-cy": "logout", id: "crudnick-logout", onClick: v, type: "button", children: "Logout" }) })
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
        onClick: y,
        title: "Show Menu",
        type: "button",
        children: [
          /* @__PURE__ */ o.jsx(zr, { "aria-hidden": "true" }),
          "Show Menu"
        ]
      }
    )
  ] });
}
pr.propTypes = {
  nav: p.array.isRequired
};
function Gr({
  articleProps: e = null,
  children: t,
  nav: i
}) {
  D.isLoggedIn() && !ue.getToken() && ue.setToken(D.token()), document.addEventListener("formosaApiRequest", () => {
    D.refresh();
  });
  const l = (a) => {
    a.preventDefault();
    const s = a.target.getAttribute("href").split("#")[1], c = document.getElementById(s);
    c.setAttribute("tabindex", -1), c.addEventListener("blur", () => {
      c.removeAttribute("tabindex");
    }), c.focus();
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("a", { href: "#crudnick-article", id: "crudnick-skip", onClick: l, children: "Skip to content" }),
    /* @__PURE__ */ o.jsxs(vr, { children: [
      D.isLoggedIn() && /* @__PURE__ */ o.jsx(pr, { nav: i }),
      /* @__PURE__ */ o.jsx("article", { id: "crudnick-article", ...e, children: t })
    ] })
  ] });
}
Gr.propTypes = {
  articleProps: p.object,
  children: p.node,
  nav: p.array.isRequired
};
function mr({
  message: e = null,
  row: t,
  setMessage: i,
  setShowVerificationButton: l,
  showVerificationButton: a = !1
}) {
  const { clearAlert: s } = he(ir), c = () => {
    s(), i(null), l(!1);
    const f = {
      username: t.username || a
    };
    ue.post("auth/resend-verification", JSON.stringify(f)).catch((v) => {
      i(Z(v));
    }).then((v) => {
      v && i({
        text: "Check your email to continue the registration process.",
        type: "success"
      });
    });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ie, { title: "Login" }),
    /* @__PURE__ */ o.jsx("h1", { children: "Login" }),
    e && /* @__PURE__ */ o.jsx(de, { type: e.type, children: e.text }),
    a && /* @__PURE__ */ o.jsx("p", { className: `formosa-alert formosa-alert--${a === !0 ? "error" : "success"} post-alert-button`, children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button button--secondary", onClick: c, type: "button", children: "Resend verification email" }) }),
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
        postfix: /* @__PURE__ */ o.jsx(Te, { className: "formosa-button crudnick-button--link", to: "/forgot-password", children: "Forgot password?" })
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
function Qr() {
  const [e] = qe(), t = ve(), [i, l] = F({}), [a, s] = F(null), [c, f] = F(!1), v = () => (s(null), f(!1), !0), h = (w) => {
    f(w.errors[0].code === "auth.unverified");
  }, y = (w) => {
    let E;
    e.get("redirect") && e.get("redirect")[0] === "/" ? E = e.get("redirect") : E = "/", D.login(w.user, w.token, w.user.remember), window.location.href = E;
  };
  return K(() => {
    e.get("status") === "401" ? (s({
      text: "Your session has expired. Please log in again.",
      type: "warning"
    }), t(window.location.pathname, { replace: !0 })) : e.get("verify") ? (s({
      text: `Check your email (${e.get("email")}) to continue the registration process.`,
      type: "success"
    }), f(e.get("username")), t(window.location.pathname, { replace: !0 })) : e.get("expired") && t("/forgot-password?expired=1");
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsx(
    Re,
    {
      afterSubmitFailure: h,
      afterSubmitSuccess: y,
      beforeSubmit: v,
      className: "crudnick-auth-form",
      errorMessageText: (w) => Z(w, !1),
      method: "POST",
      path: "auth/login",
      row: i,
      setRow: l,
      showMessage: !1,
      children: /* @__PURE__ */ o.jsx(
        mr,
        {
          message: a,
          row: i,
          setMessage: s,
          setShowVerificationButton: f,
          showVerificationButton: c
        }
      )
    }
  );
}
function et() {
  return D.isLoggedIn() ? /* @__PURE__ */ o.jsx(de, { type: "error", children: "Page not found." }) : (window.location.href = `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`, null);
}
function rt() {
  return D.isLoggedIn() ? /* @__PURE__ */ o.jsx(gr, {}) : /* @__PURE__ */ o.jsx(xr, { replace: !0, to: `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}` });
}
function tt() {
  const [e, t] = F({}), { token: i } = sr(), [l] = qe(), a = ve();
  return K(() => {
    l.get("expires") < Math.floor(Date.now() / 1e3) && a("/forgot-password?expired=1");
  }, []), D.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    Re,
    {
      afterSubmitSuccess: () => {
        a("/");
      },
      className: "crudnick-auth-form",
      errorMessageText: Z,
      method: "PUT",
      path: `auth/reset-password/${i}${window.location.search}`,
      row: e,
      setRow: t,
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
  lr as Actions,
  Nr as AddForm,
  D as Auth,
  ee as CrudnickConfig,
  Dr as EditForm,
  fr as Error,
  Zr as ForgotPassword,
  Wr as IndexTable,
  Gr as Layout,
  Qr as Login,
  ie as MetaTitle,
  ur as Modal,
  Ye as MyForm,
  pr as Nav,
  et as NotFound,
  rt as PrivateRoute,
  tt as ResetPassword,
  Z as errorMessageText
};
