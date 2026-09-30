import * as ce from "react";
import hr, { useRef as Ee, useEffect as X, useContext as ve, useState as q, useMemo as vr } from "react";
import { FormosaContext as Le, Api as fe, FormContext as ir, Form as Te, Field as ae, Alert as pe, FormAlert as Me, Submit as qe, Input as br, FormContainer as gr } from "@jlbelanger/formosa";
import { useNavigate as be, NavLink as Ne, unstable_usePrompt as xr, useParams as ar, useSearchParams as Re, Link as le, useLocation as wr, Outlet as _r, Navigate as jr } from "react-router";
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xe = { exports: {} }, ye = {};
var Be;
function Tr() {
  if (Be) return ye;
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
  return ye.Fragment = n, ye.jsx = i, ye.jsxs = i, ye;
}
var he = {};
var Ve;
function Rr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === W ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
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
        case H:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case j:
            return "Portal";
          case T:
            return r.displayName || "Context";
          case L:
            return (r._context.displayName || "Context") + ".Consumer";
          case u:
            var c = r.render;
            return r = r.displayName, r || (r = c.displayName || c.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case B:
            return c = r.displayName || null, c !== null ? c : e(r.type) || "Memo";
          case Y:
            c = r._payload, r = r._init;
            try {
              return e(r(c));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function i(r) {
      try {
        n(r);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var g = c.error, b = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), n(r);
      }
    }
    function f(r) {
      if (r === C) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Y)
        return "<...>";
      try {
        var c = e(r);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = G.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(r) {
      if (Q.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function d(r, c) {
      function g() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: g,
        configurable: !0
      });
    }
    function m() {
      var r = e(this.type);
      return J[r] || (J[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function h(r, c, g, b, R, E) {
      var w = g.ref;
      return r = {
        $$typeof: S,
        type: r,
        key: c,
        props: g,
        _owner: b
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: m
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
        value: R
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function y(r, c, g, b, R, E) {
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
      if (Q.call(c, "key")) {
        w = e(r);
        var P = Object.keys(c).filter(function(O) {
          return O !== "key";
        });
        b = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", t[w + b] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), t[w + b] = !0);
      }
      if (w = null, g !== void 0 && (i(g), w = "" + g), l(c) && (i(c.key), w = "" + c.key), "key" in c) {
        g = {};
        for (var $ in c)
          $ !== "key" && (g[$] = c[$]);
      } else g = c;
      return w && d(
        g,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), h(
        r,
        w,
        g,
        a(),
        R,
        E
      );
    }
    function x(r) {
      _(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === Y && (r._payload.status === "fulfilled" ? _(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function _(r) {
      return typeof r == "object" && r !== null && r.$$typeof === S;
    }
    var k = hr, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), W = /* @__PURE__ */ Symbol.for("react.client.reference"), G = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, M = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var z, J = {}, Z = k.react_stack_bottom_frame.bind(
      k,
      s
    )(), ie = ee(f(s)), t = {};
    he.Fragment = C, he.jsx = function(r, c, g) {
      var b = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        r,
        c,
        g,
        !1,
        b ? Error("react-stack-top-frame") : Z,
        b ? ee(f(r)) : ie
      );
    }, he.jsxs = function(r, c, g) {
      var b = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        r,
        c,
        g,
        !0,
        b ? Error("react-stack-top-frame") : Z,
        b ? ee(f(r)) : ie
      );
    };
  })()), he;
}
var ze;
function kr() {
  return ze || (ze = 1, process.env.NODE_ENV === "production" ? xe.exports = Tr() : xe.exports = Rr()), xe.exports;
}
var o = kr();
const Fe = (e) => e.replace(/(?:^|\s)\S/g, (n) => n.toUpperCase()), ne = (e) => e.replace(/^relationships\./, "");
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
var Sr = {
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
        var m = s[d].split("="), h = m.slice(1).join("=");
        try {
          var y = decodeURIComponent(m[0]);
          if (l[y] = e.read(h, y), a === y)
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
var de = Ie(Sr, { path: "/" });
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
const te = (e, n = !0) => n && e.status === 401 ? F.logout(e.status) : `Error: ${e.errors.map((i) => i.title).join(" ")}`;
var _e = { exports: {} }, je = { exports: {} }, A = {};
var We;
function Pr() {
  if (We) return A;
  We = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, x = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, _ = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, k = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, D = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function L(u) {
    if (typeof u == "object" && u !== null) {
      var U = u.$$typeof;
      switch (U) {
        case n:
          switch (u = u.type, u) {
            case m:
            case h:
            case f:
            case s:
            case a:
            case x:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case d:
                case y:
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
    return L(u) === h;
  }
  return A.AsyncMode = m, A.ConcurrentMode = h, A.ContextConsumer = d, A.ContextProvider = l, A.Element = n, A.ForwardRef = y, A.Fragment = f, A.Lazy = S, A.Memo = k, A.Portal = i, A.Profiler = s, A.StrictMode = a, A.Suspense = x, A.isAsyncMode = function(u) {
    return T(u) || L(u) === m;
  }, A.isConcurrentMode = T, A.isContextConsumer = function(u) {
    return L(u) === d;
  }, A.isContextProvider = function(u) {
    return L(u) === l;
  }, A.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, A.isForwardRef = function(u) {
    return L(u) === y;
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
    return typeof u == "string" || typeof u == "function" || u === f || u === h || u === s || u === a || u === x || u === _ || typeof u == "object" && u !== null && (u.$$typeof === S || u.$$typeof === k || u.$$typeof === l || u.$$typeof === d || u.$$typeof === y || u.$$typeof === C || u.$$typeof === I || u.$$typeof === D || u.$$typeof === j);
  }, A.typeOf = L, A;
}
var N = {};
var Ke;
function Cr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, f = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, y = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, x = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, _ = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, k = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, D = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function L(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === f || v === h || v === s || v === a || v === x || v === _ || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === k || v.$$typeof === l || v.$$typeof === d || v.$$typeof === y || v.$$typeof === C || v.$$typeof === I || v.$$typeof === D || v.$$typeof === j);
    }
    function T(v) {
      if (typeof v == "object" && v !== null) {
        var re = v.$$typeof;
        switch (re) {
          case n:
            var ge = v.type;
            switch (ge) {
              case m:
              case h:
              case f:
              case s:
              case a:
              case x:
                return ge;
              default:
                var Ue = ge && ge.$$typeof;
                switch (Ue) {
                  case d:
                  case y:
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
    var u = m, U = h, V = d, B = l, Y = n, H = y, W = f, G = S, Q = k, M = i, ee = s, z = a, J = x, Z = !1;
    function ie(v) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(v) || T(v) === m;
    }
    function t(v) {
      return T(v) === h;
    }
    function r(v) {
      return T(v) === d;
    }
    function c(v) {
      return T(v) === l;
    }
    function g(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function b(v) {
      return T(v) === y;
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
    N.AsyncMode = u, N.ConcurrentMode = U, N.ContextConsumer = V, N.ContextProvider = B, N.Element = Y, N.ForwardRef = H, N.Fragment = W, N.Lazy = G, N.Memo = Q, N.Portal = M, N.Profiler = ee, N.StrictMode = z, N.Suspense = J, N.isAsyncMode = ie, N.isConcurrentMode = t, N.isContextConsumer = r, N.isContextProvider = c, N.isElement = g, N.isForwardRef = b, N.isFragment = R, N.isLazy = E, N.isMemo = w, N.isPortal = P, N.isProfiler = $, N.isStrictMode = O, N.isSuspense = K, N.isValidElementType = L, N.typeOf = T;
  })()), N;
}
var Ge;
function sr() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? je.exports = Pr() : je.exports = Cr()), je.exports;
}
var ke, Je;
function Or() {
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
      var m = Object.getOwnPropertyNames(l).map(function(y) {
        return l[y];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        h[y] = y;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ke = a() ? Object.assign : function(s, l) {
    for (var d, m = f(s), h, y = 1; y < arguments.length; y++) {
      d = Object(arguments[y]);
      for (var x in d)
        n.call(d, x) && (m[x] = d[x]);
      if (e) {
        h = e(d);
        for (var _ = 0; _ < h.length; _++)
          i.call(d, h[_]) && (m[h[_]] = d[h[_]]);
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
function cr() {
  return He || (He = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var Ce, Ze;
function $r() {
  if (Ze) return Ce;
  Ze = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ De(), i = {}, f = /* @__PURE__ */ cr();
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(s, l, d, m, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in s)
        if (f(s, y)) {
          var x;
          try {
            if (typeof s[y] != "function") {
              var _ = Error(
                (m || "React class") + ": " + d + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            x = s[y](l, y, m, d, null, n);
          } catch (S) {
            x = S;
          }
          if (x && !(x instanceof Error) && e(
            (m || "React class") + ": type specification of " + d + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof x + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), x instanceof Error && !(x.message in i)) {
            i[x.message] = !0;
            var k = h ? h() : "";
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
function Ar() {
  if (Qe) return Oe;
  Qe = 1;
  var e = sr(), n = Or(), i = /* @__PURE__ */ De(), f = /* @__PURE__ */ cr(), a = /* @__PURE__ */ $r(), s = function() {
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
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function x(t) {
      var r = t && (h && t[h] || t[y]);
      if (typeof r == "function")
        return r;
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
      node: H(),
      objectOf: B,
      oneOf: V,
      oneOfType: Y,
      shape: G,
      exact: Q
    };
    function S(t, r) {
      return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
    }
    function j(t, r) {
      this.message = t, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function C(t) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, c = 0;
      function g(R, E, w, P, $, O, K) {
        if (P = P || _, O = O || w, K !== i) {
          if (m) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = P + ":" + w;
            !r[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            c < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + P + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[re] = !0, c++);
          }
        }
        return E[w] == null ? R ? E[w] === null ? new j("The " + $ + " `" + O + "` is marked as required " + ("in `" + P + "`, but its value is `null`.")) : new j("The " + $ + " `" + O + "` is marked as required in " + ("`" + P + "`, but its value is `undefined`.")) : null : t(E, w, P, $, O);
      }
      var b = g.bind(null, !1);
      return b.isRequired = g.bind(null, !0), b;
    }
    function I(t) {
      function r(c, g, b, R, E, w) {
        var P = c[g], $ = z(P);
        if ($ !== t) {
          var O = J(P);
          return new j(
            "Invalid " + R + " `" + E + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return C(r);
    }
    function D() {
      return C(l);
    }
    function L(t) {
      function r(c, g, b, R, E) {
        if (typeof t != "function")
          return new j("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var w = c[g];
        if (!Array.isArray(w)) {
          var P = z(w);
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected an array."));
        }
        for (var $ = 0; $ < w.length; $++) {
          var O = t(w, $, b, R, E + "[" + $ + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return C(r);
    }
    function T() {
      function t(r, c, g, b, R) {
        var E = r[c];
        if (!d(E)) {
          var w = z(E);
          return new j("Invalid " + b + " `" + R + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(t);
    }
    function u() {
      function t(r, c, g, b, R) {
        var E = r[c];
        if (!e.isValidElementType(E)) {
          var w = z(E);
          return new j("Invalid " + b + " `" + R + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(t);
    }
    function U(t) {
      function r(c, g, b, R, E) {
        if (!(c[g] instanceof t)) {
          var w = t.name || _, P = ie(c[g]);
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return C(r);
    }
    function V(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function r(c, g, b, R, E) {
        for (var w = c[g], P = 0; P < t.length; P++)
          if (S(w, t[P]))
            return null;
        var $ = JSON.stringify(t, function(K, v) {
          var re = J(v);
          return re === "symbol" ? String(v) : v;
        });
        return new j("Invalid " + R + " `" + E + "` of value `" + String(w) + "` " + ("supplied to `" + b + "`, expected one of " + $ + "."));
      }
      return C(r);
    }
    function B(t) {
      function r(c, g, b, R, E) {
        if (typeof t != "function")
          return new j("Property `" + E + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var w = c[g], P = z(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type " + ("`" + P + "` supplied to `" + b + "`, expected an object."));
        for (var $ in w)
          if (f(w, $)) {
            var O = t(w, $, b, R, E + "." + $, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return C(r);
    }
    function Y(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var r = 0; r < t.length; r++) {
        var c = t[r];
        if (typeof c != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(c) + " at index " + r + "."
          ), l;
      }
      function g(b, R, E, w, P) {
        for (var $ = [], O = 0; O < t.length; O++) {
          var K = t[O], v = K(b, R, E, w, P, i);
          if (v == null)
            return null;
          v.data && f(v.data, "expectedType") && $.push(v.data.expectedType);
        }
        var re = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new j("Invalid " + w + " `" + P + "` supplied to " + ("`" + E + "`" + re + "."));
      }
      return C(g);
    }
    function H() {
      function t(r, c, g, b, R) {
        return M(r[c]) ? null : new j("Invalid " + b + " `" + R + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return C(t);
    }
    function W(t, r, c, g, b) {
      return new j(
        (t || "React class") + ": " + r + " type `" + c + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function G(t) {
      function r(c, g, b, R, E) {
        var w = c[g], P = z(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type `" + P + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var $ in t) {
          var O = t[$];
          if (typeof O != "function")
            return W(b, R, E, $, J(O));
          var K = O(w, $, b, R, E + "." + $, i);
          if (K)
            return K;
        }
        return null;
      }
      return C(r);
    }
    function Q(t) {
      function r(c, g, b, R, E) {
        var w = c[g], P = z(w);
        if (P !== "object")
          return new j("Invalid " + R + " `" + E + "` of type `" + P + "` " + ("supplied to `" + b + "`, expected `object`."));
        var $ = n({}, c[g], t);
        for (var O in $) {
          var K = t[O];
          if (f(t, O) && typeof K != "function")
            return W(b, R, E, O, J(K));
          if (!K)
            return new j(
              "Invalid " + R + " `" + E + "` key `" + O + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(c[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var v = K(w, O, b, R, E + "." + O, i);
          if (v)
            return v;
        }
        return null;
      }
      return C(r);
    }
    function M(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(M);
          if (t === null || d(t))
            return !0;
          var r = x(t);
          if (r) {
            var c = r.call(t), g;
            if (r !== t.entries) {
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
    function ee(t, r) {
      return t === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function z(t) {
      var r = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ee(r, t) ? "symbol" : r;
    }
    function J(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var r = z(t);
      if (r === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function Z(t) {
      var r = J(t);
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
    function ie(t) {
      return !t.constructor || !t.constructor.name ? _ : t.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, Oe;
}
var $e, er;
function Nr() {
  if (er) return $e;
  er = 1;
  var e = /* @__PURE__ */ De();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, $e = function() {
    function f(l, d, m, h, y, x) {
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
var rr;
function Ir() {
  if (rr) return _e.exports;
  if (rr = 1, process.env.NODE_ENV !== "production") {
    var e = sr(), n = !0;
    _e.exports = /* @__PURE__ */ Ar()(e.isElement, n);
  } else
    _e.exports = /* @__PURE__ */ Nr()();
  return _e.exports;
}
var Lr = /* @__PURE__ */ Ir();
const p = /* @__PURE__ */ Er(Lr);
function ur({
  cancelButtonAttributes: e = null,
  cancelButtonClass: n = "crudnick-button--secondary",
  cancelButtonText: i = "Cancel",
  cancelable: f = !0,
  children: a = null,
  event: s,
  okButtonAttributes: l = null,
  okButtonClass: d = "",
  okButtonText: m = "OK",
  onClickCancel: h = null,
  onClickOk: y = null,
  text: x = null
}) {
  const _ = Ee(null), k = (j) => {
    j.key === "Escape" && h && h();
  }, S = (j) => {
    j.target.tagName === "DIALOG" && h && h();
  };
  return X(() => (document.body.classList.add("crudnick-modal-open"), f && document.addEventListener("keydown", k), () => {
    document.body.classList.remove("crudnick-modal-open"), f && document.removeEventListener("keydown", k), s.target && s.target.focus();
  }), []), X(() => {
    _ && _.current && _.current.getAttribute("open") === null && (_.current.showModal(), _.current.focus(), f && _.current.addEventListener("click", S));
  }, [_]), /* @__PURE__ */ o.jsx("dialog", { className: "crudnick-modal", ref: _, tabIndex: -1, children: /* @__PURE__ */ o.jsxs("div", { className: "crudnick-modal__box", children: [
    a || /* @__PURE__ */ o.jsx("p", { className: "crudnick-modal__text", children: x }),
    /* @__PURE__ */ o.jsxs("p", { className: "crudnick-modal__options", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${d}`.trim(),
          onClick: y,
          type: "button",
          ...l,
          children: m
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `formosa-button ${n}`.trim(),
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
  children: n = null,
  currentPage: i,
  path: f,
  row: a = null,
  saveButtonText: s = "Save",
  setActionError: l = null,
  showDelete: d = !0,
  showSave: m = !0,
  singular: h,
  subpages: y = []
}) {
  const x = be(), { addToast: _, disableWarningPrompt: k, enableWarningPrompt: S } = ve(Le), [j, C] = q(!1), I = Ee(null), D = (u) => {
    u.key === "s" && u.metaKey && I && I.current && (u.preventDefault(), I.current.click());
  };
  X(() => (window.addEventListener("keydown", D), () => {
    window.removeEventListener("keydown", D);
  }), []);
  const L = () => {
    C(!1), k(), fe.delete(`${e}/${a.id}`).catch((u) => {
      l ? l(te(u)) : _(te(u), "error", 1e4), S();
    }).then((u) => {
      u && (_(`${Fe(h)} deleted successfully.`, "success"), x(`/${f}`), S());
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
        ur,
        {
          event: j,
          okButtonAttributes: { "data-cy": "modal-delete" },
          okButtonClass: "formosa-button--danger",
          okButtonText: "Delete",
          onClickCancel: () => {
            C(!1);
          },
          onClickOk: L,
          text: `Are you sure you want to delete this ${h}?`
        }
      ) : null
    ] }) : null,
    T && a.url ? /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
      "a",
      {
        className: "crudnick-list__button formosa-button crudnick-button--secondary",
        href: `${T}${a.url}`,
        rel: "noreferrer",
        target: "_blank",
        children: "View"
      }
    ) }) : null,
    y.map((u) => /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(
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
function ue({ title: e = "" }) {
  return X(() => {
    let n = e;
    const i = oe.get("siteTitle");
    i && (n && (n += " | "), n += i), document.querySelector("title").innerText = n;
  }, [e]), null;
}
ue.propTypes = {
  title: p.string
};
function Mr() {
  const { getDirtyKeys: e } = ve(ir);
  return xr({
    message: "You have unsaved changes. Are you sure you want to leave this page?",
    when: () => e().length > 0
  }), null;
}
function Ye({ children: e, ...n }) {
  const { showWarningPrompt: i } = ve(Le);
  return /* @__PURE__ */ o.jsxs(Te, { ...n, children: [
    e,
    i ? /* @__PURE__ */ o.jsx(Mr, {}) : null
  ] });
}
Ye.propTypes = {
  children: p.node.isRequired
};
function qr({
  addAnotherText: e = "Add another",
  apiPath: n,
  component: i,
  componentProps: f = {},
  defaultRow: a = {},
  extra: s = null,
  filterBody: l = null,
  filterValues: d = null,
  path: m,
  relationshipNames: h = [],
  saveButtonText: y = "Save",
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
  return X(() => (window.addEventListener("keydown", V), () => {
    window.removeEventListener("keydown", V);
  }), []), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: `${k} ${_}` }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${k} ${_}` }),
      /* @__PURE__ */ o.jsxs("ul", { className: "crudnick-list", children: [
        /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx("button", { className: "formosa-button", "data-cy": "save", form: "crudnick-add-form", ref: T, type: "submit", children: y }) }),
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
        errorMessageText: te,
        filterBody: l,
        filterValues: d,
        htmlId: "crudnick-add-form",
        method: "POST",
        path: n,
        preventEmptyRequest: !0,
        relationshipNames: h,
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
qr.propTypes = {
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
    return F.logout(e.status), null;
  let n = "Error loading data. Please try again later.";
  return e.errors[0].title && (n = `Error: ${e.errors[0].title}`), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: "Error" }),
    /* @__PURE__ */ o.jsx(pe, { type: "error", children: n })
  ] });
}
fr.propTypes = {
  error: p.object.isRequired
};
var Fr = Object.defineProperty, me = (e, n) => Fr(e, "name", { value: n, configurable: !0 }), dr = /* @__PURE__ */ me((e) => e !== null && typeof e == "object", "isObject"), tr = /* @__PURE__ */ me((e, n, i) => typeof i.join == "function" ? i.join(e) : e[0] + n + e[1], "join"), Dr = /* @__PURE__ */ me((e, n, i) => typeof i.split == "function" ? i.split(e) : e.split(n), "split"), Ae = /* @__PURE__ */ me((e, n = {}, i) => typeof i?.isValid == "function" ? i.isValid(e, n) : !0, "isValid"), nr = /* @__PURE__ */ me((e) => dr(e) || typeof e == "function", "isValidObject"), Yr = /* @__PURE__ */ me((e, n, i = {}) => {
  if (dr(i) || (i = { default: i }), !nr(e))
    return typeof i.default < "u" ? i.default : e;
  typeof n == "number" && (n = String(n));
  const f = Array.isArray(n), a = typeof n == "string", s = i.separator || ".", l = i.joinChar || (typeof s == "string" ? s : ".");
  if (!a && !f)
    return e;
  if (e[n] !== void 0)
    return Ae(n, e, i) ? e[n] : i.default;
  const d = f ? n : Dr(n, s, i), m = d.length;
  let h = 0;
  do {
    let y = d[h];
    for (typeof y != "string" && (y = String(y)); y && y.slice(-1) === "\\"; )
      y = tr([y.slice(0, -1), d[++h] || ""], l, i);
    if (e[y] !== void 0) {
      if (!Ae(y, e, i))
        return i.default;
      e = e[y];
    } else {
      let x = !1, _ = h + 1;
      for (; _ < m; )
        if (y = tr([y, d[_++]], l, i), x = e[y] !== void 0) {
          if (!Ae(y, e, i))
            return i.default;
          e = e[y], h = _ - 1;
          break;
        }
      if (!x)
        return i.default;
    }
  } while (++h < m && nr(e));
  return h === m ? e : i.default;
}, "getValue"), se = Yr;
function Ur({
  actions: e = null,
  apiPath: n,
  component: i,
  componentProps: f = {},
  extra: a = null,
  filterBody: s = null,
  filterValues: l = null,
  name: d = null,
  path: m,
  relationshipNames: h = [],
  saveButtonText: y = "Save",
  showDelete: x = !0,
  showSave: _ = !0,
  singular: k,
  subpages: S = [],
  titlePrefixText: j = "Edit",
  transform: C = null,
  url: I,
  ...D
}) {
  const { id: L } = ar(), [T, u] = q(null), [U, V] = q(!1), [B, Y] = q(!1), H = fe.instance();
  if (X(() => {
    H(I).catch((M) => {
      V(M);
    }).then((M) => {
      M && u(C ? C(M) : M);
    });
  }, [I]), U)
    return /* @__PURE__ */ o.jsx(fr, { error: U });
  const W = (M) => {
    Y(te(M));
  }, G = i;
  f.formType = "edit";
  const Q = T ? `${j} ${typeof d == "function" ? d(T) : se(T, d)}` : "";
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: Q }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsx("h1", { "data-cy": "title", children: `${j} ${k}` }),
      T ? /* @__PURE__ */ o.jsx(
        lr,
        {
          apiPath: n,
          currentPage: "/",
          path: m,
          row: T,
          saveButtonText: y,
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
        afterSubmitFailure: W,
        beforeSubmit: () => (Y(!1), !0),
        filterBody: s,
        filterValues: l,
        htmlId: "crudnick-edit-form",
        id: L,
        method: "PUT",
        path: n,
        preventEmptyRequest: !0,
        relationshipNames: h,
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
Ur.propTypes = {
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
function rt() {
  const [e] = Re(), n = be(), [i, f] = q({}), [a, s] = q(!1);
  return X(() => {
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
      errorMessageText: te,
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
const Br = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M0 2l4 4 4-4H0z" })), Vr = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M6.41 1l-.69.72L2.94 4.5l-.81-.78L1.41 3 0 4.41l.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72L6.41 1z" })), zr = (e) => e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), Wr = (e, n, i) => {
  i = i.trim().toLowerCase();
  const f = zr(i);
  return e = e.filter((a) => (se(a, n) || "").toString().replace(/<[^>]+?>/g, "").toLowerCase().match(new RegExp(`(^|[^a-z])${f}`))), e = e.sort((a, s) => {
    const l = (se(a, n) || "").toString().toLowerCase(), d = (se(s, n) || "").toString().toLowerCase(), m = l.indexOf(i) === 0, h = d.indexOf(i) === 0;
    return m && h || !m && !h ? 0 : m && !h ? -1 : 1;
  }), e;
}, Kr = (e, n) => (Object.keys(n).forEach((i) => {
  e = Wr(e, i, n[i]);
}), e);
function pr({ currentPage: e, numPages: n, setCurrentPage: i }) {
  const f = wr(), a = (m, h = 1) => Array.from({ length: m }, (y, x) => h + x), l = n <= 7 ? a(n) : e <= 4 ? [1, 2, 3, 4, 5, "...", n] : e > n - 4 ? [1, "..."].concat(a(5, n - 4)) : [1, "...", e - 1, e, e + 1, "...", n], d = (m) => {
    const h = m.target.getAttribute("href"), y = h.substr(h.lastIndexOf("=") + 1);
    i(parseInt(y, 10));
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
    l.map((m) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-pagination__item", children: m === "..." ? /* @__PURE__ */ o.jsx("span", { className: "crudnick-pagination__link crudnick-pagination__link--dots", children: "…" }) : /* @__PURE__ */ o.jsx(
      le,
      {
        "aria-current": m === e ? "page" : null,
        "aria-label": `Page ${m}`,
        className: "crudnick-pagination__link",
        onClick: d,
        to: `${f.pathname}${m > 1 ? `?page=${m}` : ""}`,
        children: m
      }
    ) }, m)),
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
pr.propTypes = {
  currentPage: p.number.isRequired,
  numPages: p.number.isRequired,
  setCurrentPage: p.func.isRequired
};
const or = (e, n, i) => e.sort((f, a) => {
  let s = se(f, n);
  s == null && (s = "");
  let l = se(a, n);
  return l == null && (l = ""), s === l ? 0 : s === "" ? 1 : l === "" ? -1 : typeof s == "number" && typeof l == "number" ? i === "asc" ? s < l ? -1 : 1 : s > l ? -1 : 1 : (s = s.toString(), l = l.toString(), i === "asc" ? s.localeCompare(l) : l.localeCompare(s));
});
function Gr({ columns: e, defaultOptions: n, path: i, perPage: f = 10, title: a, url: s }) {
  const [l] = Re(), [d, m] = q(null), [h, y] = q(null), [x, _] = q(0), [k, S] = q(0), [j, C] = q(() => {
    if (l.get("page")) {
      const t = parseInt(l.get("page"), 10);
      if (t > 0)
        return t;
    }
    return 1;
  }), [I, D] = q([]), [L, T] = q(!1), [u, U] = q(() => Object.hasOwn(n, "sortKey") ? n.sortKey : "name"), [V, B] = q(() => Object.hasOwn(n, "sortDir") ? n.sortDir : "asc"), [Y, H] = q(() => {
    const t = {};
    return e.forEach((r) => {
      const c = ne(r.key);
      let g = "";
      Object.hasOwn(n, "filters") && Object.hasOwn(n.filters, c) && (g = n.filters[c]), t[c] = g;
    }), t;
  }), [W, G] = q({ ...Y }), Q = fe.instance(), M = f !== null, ee = vr(() => {
    let t = s;
    return M && (t.includes("?") ? t += "&" : t += "?", t += `page[size]=${f}&page[number]=${j}`, u && (t += `&sort=${V === "desc" ? "-" : ""}${u}`), Y && Object.keys(Y).forEach((r) => {
      const c = Y[r];
      c !== "" && (t += `&filter[${r}][like]=%${c}%`);
    })), t;
  }, [s, j, u, V, Y]);
  X(() => {
    z();
  }, [ee]);
  const z = () => {
    Q(ee, !1).catch((t) => {
      T(te(t)), m(null), D([]), S(0);
    }).then((t) => {
      t && (M ? (m(t.data || []), D(t.data || []), _(t.meta.page.total), S(t.meta.page.total), y(t.meta.page.total_pages), t.meta.page.total_pages > 0 && j > t.meta.page.total_pages && C(t.meta.page.total_pages)) : (m(t), D(t), _(t.length), S(t.length), y(1)));
    });
  }, J = (t) => {
    const r = t.target.getAttribute("data-key");
    let c;
    u === r ? c = V === "asc" ? "desc" : "asc" : c = "asc", U(r), B(c), M || (m(or(d, r, c)), D(or(I, r, c)));
  };
  let Z = ` (${k.toLocaleString()}`;
  k !== x && (Z += ` of ${x.toLocaleString()}`), Z += ` result${x === 1 ? "" : "s"})`, e = e.map((t) => (t.link ? t.fn = (r, c) => /* @__PURE__ */ o.jsx(le, { className: "crudnick-link--table", to: `/${i}/${r.id}`, children: c }) : t.type === "checkbox" && (t.fn = (r, c) => c ? /* @__PURE__ */ o.jsx(Vr, { "aria-hidden": "true", height: 16, width: 16 }) : null, t.size = 4), t));
  const ie = (t) => {
    t.preventDefault(), C(1), H({ ...W });
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(ue, { title: a }),
    /* @__PURE__ */ o.jsxs("header", { className: "crudnick-header", children: [
      /* @__PURE__ */ o.jsxs("h1", { children: [
        /* @__PURE__ */ o.jsx("span", { "data-cy": "title", children: a }),
        /* @__PURE__ */ o.jsx("small", { "data-cy": "num-results", children: d ? Z : null })
      ] }),
      /* @__PURE__ */ o.jsx("ul", { className: "crudnick-list", children: /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(le, { className: "formosa-button crudnick-list__button", "data-cy": "add", to: `/${i}/add`, children: "Add new" }) }) })
    ] }),
    M ? /* @__PURE__ */ o.jsx("form", { id: "crudnick-pagination", onSubmit: ie, children: /* @__PURE__ */ o.jsx(pr, { currentPage: j, numPages: h, setCurrentPage: C }) }) : null,
    L ? /* @__PURE__ */ o.jsx(pe, { type: "error", children: L }) : /* @__PURE__ */ o.jsxs("table", { children: [
      /* @__PURE__ */ o.jsxs("thead", { children: [
        /* @__PURE__ */ o.jsx("tr", { children: e.map((t) => /* @__PURE__ */ o.jsx(
          "th",
          {
            className: t.size ? "crudnick-column--shrink" : null,
            scope: "col",
            ...t.thAttributes,
            children: t.disableSort ? t.shortLabel || t.label : /* @__PURE__ */ o.jsxs(
              "button",
              {
                "aria-label": `Sort by ${t.label}`,
                className: "formosa-button crudnick-column__button",
                "data-key": t.sortKey || ne(t.key),
                disabled: d === null,
                onClick: J,
                type: "button",
                children: [
                  t.shortLabel || t.label,
                  u === (t.sortKey || ne(t.key)) ? /* @__PURE__ */ o.jsx(
                    Br,
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
          t.key
        )) }),
        /* @__PURE__ */ o.jsx("tr", { children: e.map(({ key: t, disableSearch: r, label: c, size: g }) => /* @__PURE__ */ o.jsx("td", { className: `formosa-input-wrapper--search${M ? " crudnick__filter" : ""}`, children: !r && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            br,
            {
              "aria-label": `Search ${c}`,
              className: "formosa-field__input",
              disabled: d === null,
              form: M ? "crudnick-pagination" : null,
              setValue: (b) => {
                const R = {
                  ...W,
                  [ne(t)]: b
                };
                if (G(R), !M) {
                  C(1), H(R);
                  const E = Kr(d, R);
                  D(E), S(E.length);
                }
              },
              size: g,
              type: "search",
              value: W[ne(t)]
            }
          ),
          M && W[ne(t)] ? /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "crudnick__filter-button crudnick__filter-button--clear",
              onClick: () => {
                const b = {
                  ...W,
                  [ne(t)]: ""
                };
                G(b), H({ ...b }), C(1);
              },
              type: "button",
              children: `Clear ${c} filter`
            }
          ) : null,
          M ? /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "crudnick__filter-button crudnick__filter-button--submit",
              form: "crudnick-pagination",
              type: "submit",
              children: `Filter by ${c}`
            }
          ) : null
        ] }) }, t)) })
      ] }),
      /* @__PURE__ */ o.jsx("tbody", { children: d === null ? /* @__PURE__ */ o.jsx("tr", { children: /* @__PURE__ */ o.jsx("td", { colSpan: e.length, children: /* @__PURE__ */ o.jsx("div", { className: "formosa-spinner", role: "status", children: "Loading..." }) }) }) : I.map((t) => /* @__PURE__ */ o.jsx("tr", { children: e.map(({ fn: r, key: c }) => /* @__PURE__ */ o.jsx("td", { className: `crudnick-cell--${c}`, children: r ? r(t, se(t, ne(c)), c) : se(t, ne(c)) }, c)) }, t.id)) })
    ] })
  ] });
}
Gr.propTypes = {
  columns: p.array.isRequired,
  defaultOptions: p.object.isRequired,
  path: p.string.isRequired,
  perPage: p.number,
  title: p.string.isRequired,
  url: p.string.isRequired
};
const Jr = (e) => /* @__PURE__ */ ce.createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M0 2v2h20V2zm0 7v2h20V9zm0 7v2h20v-2z" })), Xr = (e) => /* @__PURE__ */ ce.createElement("svg", { viewBox: "0 0 8 8", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ ce.createElement("path", { d: "M1.485.43L.431 1.486l.543.543 1.953 1.989L.97 5.974l-.54.517L1.488 7.57l.541-.54 1.988-1.99 1.957 1.99.515.537L7.567 6.49l-.537-.515-1.99-1.957 1.988-1.989.541-.54L6.491.43l-.517.54-1.957 1.957L2.028.974z" }));
function mr({ nav: e }) {
  const { addToast: n } = ve(Le), i = Ee(null), f = 1025, [a, s] = q(window.innerWidth >= f), l = () => {
    document.body.classList.remove("show-nav"), i.current.tagName === "DIALOG" && i.current.close(), i.current.removeEventListener("transitionend", l);
  }, d = () => {
    s(window.innerWidth >= f);
  };
  X(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), []), X(() => {
    a && (h(), l());
  }, [a]);
  const m = () => {
    fe.delete("auth/logout").catch((S) => {
      S.status !== 401 && n(te(S), "error");
    }).then(() => {
      F.logout();
    });
  }, h = () => {
    document.body.classList.remove("animate-nav"), i.current.addEventListener("transitionend", l);
  }, y = () => {
    document.body.classList.add("show-nav"), i.current.showModal(), setTimeout(() => {
      document.body.classList.add("animate-nav");
    }, 10);
  }, x = (S) => {
    S.preventDefault(), h();
  }, _ = (S) => {
    S.target.tagName === "DIALOG" && h();
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
          onClick: h,
          title: "Close Menu",
          type: "button",
          children: [
            /* @__PURE__ */ o.jsx(Xr, { "aria-hidden": "true" }),
            "Close Menu"
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("ul", { id: "crudnick-nav__list", children: [
        e.map(({ label: S, path: j }) => /* @__PURE__ */ o.jsx("li", { className: "crudnick-list__item", children: /* @__PURE__ */ o.jsx(Ne, { className: "formosa-button crudnick-list__button", onClick: h, to: j, children: S }) }, j)),
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
        onClick: y,
        title: "Show Menu",
        type: "button",
        children: [
          /* @__PURE__ */ o.jsx(Jr, { "aria-hidden": "true" }),
          "Show Menu"
        ]
      }
    )
  ] });
}
mr.propTypes = {
  nav: p.array.isRequired
};
function Hr({ articleProps: e = null, children: n, nav: i }) {
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
    /* @__PURE__ */ o.jsxs(gr, { children: [
      F.isLoggedIn() && /* @__PURE__ */ o.jsx(mr, { nav: i }),
      /* @__PURE__ */ o.jsx("article", { id: "crudnick-article", ...e, children: n })
    ] })
  ] });
}
Hr.propTypes = {
  articleProps: p.object,
  children: p.node,
  nav: p.array.isRequired
};
function yr({
  message: e = null,
  row: n,
  setMessage: i,
  setShowVerificationButton: f,
  showVerificationButton: a = !1
}) {
  const { clearAlert: s } = ve(ir), l = () => {
    s(), i(null), f(!1);
    const d = {
      username: n.username || a
    };
    fe.post("auth/resend-verification", JSON.stringify(d)).catch((m) => {
      i(te(m));
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
yr.propTypes = {
  message: p.object,
  row: p.object.isRequired,
  setMessage: p.func.isRequired,
  setShowVerificationButton: p.func.isRequired,
  showVerificationButton: p.bool
};
function tt() {
  const [e] = Re(), n = be(), [i, f] = q({}), [a, s] = q(null), [l, d] = q(!1), m = () => (s(null), d(!1), !0), h = (x) => {
    d(x.errors[0].code === "auth.unverified");
  }, y = (x) => {
    let _;
    e.get("redirect") && e.get("redirect")[0] === "/" ? _ = e.get("redirect") : _ = window.location.href.replace(/\/$/, ""), F.login(x.user, x.token, x.user.remember), window.location.href = _;
  };
  return X(() => {
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
      afterSubmitFailure: h,
      afterSubmitSuccess: y,
      beforeSubmit: m,
      className: "crudnick-auth-form",
      errorMessageText: (x) => te(x, !1),
      method: "POST",
      path: "auth/login",
      row: i,
      setRow: f,
      showMessage: !1,
      children: /* @__PURE__ */ o.jsx(
        yr,
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
function nt() {
  return F.isLoggedIn() ? /* @__PURE__ */ o.jsx(pe, { type: "error", children: "Page not found." }) : (window.location.href = `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`, null);
}
function ot() {
  return F.isLoggedIn() ? /* @__PURE__ */ o.jsx(_r, {}) : /* @__PURE__ */ o.jsx(jr, { replace: !0, to: `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}` });
}
function it() {
  const [e, n] = q({}), { token: i } = ar(), [f] = Re(), a = be();
  return X(() => {
    f.get("expires") < Math.floor(Date.now() / 1e3) && a("/forgot-password?expired=1");
  }, []), F.isLoggedIn() ? null : /* @__PURE__ */ o.jsxs(
    Te,
    {
      afterSubmitSuccess: () => {
        a("/");
      },
      className: "crudnick-auth-form",
      errorMessageText: te,
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
  lr as Actions,
  qr as AddForm,
  F as Auth,
  oe as CrudnickConfig,
  Ur as EditForm,
  fr as Error,
  rt as ForgotPassword,
  Gr as IndexTable,
  Hr as Layout,
  tt as Login,
  ue as MetaTitle,
  ur as Modal,
  Ye as MyForm,
  mr as Nav,
  nt as NotFound,
  ot as PrivateRoute,
  it as ResetPassword,
  te as errorMessageText
};
