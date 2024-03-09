function Im(e, n) {
  for (var r = 0; r < n.length; r++) {
    const t = n[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(t, a);
          o &&
            Object.defineProperty(
              e,
              a,
              o.get ? o : { enumerable: !0, get: () => t[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) t(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && t(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = r(a);
    fetch(a.href, o);
  }
})();
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nu = { exports: {} },
  Ja = {},
  Gu = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xt = Symbol.for("react.element"),
  xm = Symbol.for("react.portal"),
  Bm = Symbol.for("react.fragment"),
  Rm = Symbol.for("react.strict_mode"),
  Lm = Symbol.for("react.profiler"),
  Dm = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  Nm = Symbol.for("react.forward_ref"),
  Gm = Symbol.for("react.suspense"),
  Fm = Symbol.for("react.memo"),
  zm = Symbol.for("react.lazy"),
  rs = Symbol.iterator;
function Om(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rs && e[rs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zu = Object.assign,
  Ou = {};
function _r(e, n, r) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ou),
    (this.updater = r || Fu);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hu() {}
Hu.prototype = _r.prototype;
function Xo(e, n, r) {
  (this.props = e),
    (this.context = n),
    (this.refs = Ou),
    (this.updater = r || Fu);
}
var el = (Xo.prototype = new Hu());
el.constructor = Xo;
zu(el, _r.prototype);
el.isPureReactComponent = !0;
var ts = Array.isArray,
  Uu = Object.prototype.hasOwnProperty,
  nl = { current: null },
  Wu = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, n, r) {
  var t,
    a = {},
    o = null,
    l = null;
  if (n != null)
    for (t in (n.ref !== void 0 && (l = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      Uu.call(n, t) && !Wu.hasOwnProperty(t) && (a[t] = n[t]);
  var c = arguments.length - 2;
  if (c === 1) a.children = r;
  else if (1 < c) {
    for (var m = Array(c), h = 0; h < c; h++) m[h] = arguments[h + 2];
    a.children = m;
  }
  if (e && e.defaultProps)
    for (t in ((c = e.defaultProps), c)) a[t] === void 0 && (a[t] = c[t]);
  return {
    $$typeof: xt,
    type: e,
    key: o,
    ref: l,
    props: a,
    _owner: nl.current,
  };
}
function Hm(e, n) {
  return {
    $$typeof: xt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function rl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xt;
}
function Um(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return n[r];
    })
  );
}
var as = /\/+/g;
function vi(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? Um("" + e.key)
    : n.toString(36);
}
function ta(e, n, r, t, a) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xt:
          case xm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (a = a(l)),
      (e = t === "" ? "." + vi(l, 0) : t),
      ts(a)
        ? ((r = ""),
          e != null && (r = e.replace(as, "$&/") + "/"),
          ta(a, n, r, "", function (h) {
            return h;
          }))
        : a != null &&
          (rl(a) &&
            (a = Hm(
              a,
              r +
                (!a.key || (l && l.key === a.key)
                  ? ""
                  : ("" + a.key).replace(as, "$&/") + "/") +
                e
            )),
          n.push(a)),
      1
    );
  if (((l = 0), (t = t === "" ? "." : t + ":"), ts(e)))
    for (var c = 0; c < e.length; c++) {
      o = e[c];
      var m = t + vi(o, c);
      l += ta(o, n, r, m, a);
    }
  else if (((m = Om(e)), typeof m == "function"))
    for (e = m.call(e), c = 0; !(o = e.next()).done; )
      (o = o.value), (m = t + vi(o, c++)), (l += ta(o, n, r, m, a));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Ft(e, n, r) {
  if (e == null) return e;
  var t = [],
    a = 0;
  return (
    ta(e, t, "", "", function (o) {
      return n.call(r, o, a++);
    }),
    t
  );
}
function Wm(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  aa = { transition: null },
  jm = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: aa,
    ReactCurrentOwner: nl,
  };
H.Children = {
  map: Ft,
  forEach: function (e, n, r) {
    Ft(
      e,
      function () {
        n.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var n = 0;
    return (
      Ft(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      Ft(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!rl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = _r;
H.Fragment = Bm;
H.Profiler = Lm;
H.PureComponent = Xo;
H.StrictMode = Rm;
H.Suspense = Gm;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
H.cloneElement = function (e, n, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var t = zu({}, e.props),
    a = e.key,
    o = e.ref,
    l = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (l = nl.current)),
      n.key !== void 0 && (a = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (m in n)
      Uu.call(n, m) &&
        !Wu.hasOwnProperty(m) &&
        (t[m] = n[m] === void 0 && c !== void 0 ? c[m] : n[m]);
  }
  var m = arguments.length - 2;
  if (m === 1) t.children = r;
  else if (1 < m) {
    c = Array(m);
    for (var h = 0; h < m; h++) c[h] = arguments[h + 2];
    t.children = c;
  }
  return { $$typeof: xt, type: e.type, key: a, ref: o, props: t, _owner: l };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: _m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dm, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = ju;
H.createFactory = function (e) {
  var n = ju.bind(null, e);
  return (n.type = e), n;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Nm, render: e };
};
H.isValidElement = rl;
H.lazy = function (e) {
  return { $$typeof: zm, _payload: { _status: -1, _result: e }, _init: Wm };
};
H.memo = function (e, n) {
  return { $$typeof: Fm, type: e, compare: n === void 0 ? null : n };
};
H.startTransition = function (e) {
  var n = aa.transition;
  aa.transition = {};
  try {
    e();
  } finally {
    aa.transition = n;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, n) {
  return Ae.current.useCallback(e, n);
};
H.useContext = function (e) {
  return Ae.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
H.useEffect = function (e, n) {
  return Ae.current.useEffect(e, n);
};
H.useId = function () {
  return Ae.current.useId();
};
H.useImperativeHandle = function (e, n, r) {
  return Ae.current.useImperativeHandle(e, n, r);
};
H.useInsertionEffect = function (e, n) {
  return Ae.current.useInsertionEffect(e, n);
};
H.useLayoutEffect = function (e, n) {
  return Ae.current.useLayoutEffect(e, n);
};
H.useMemo = function (e, n) {
  return Ae.current.useMemo(e, n);
};
H.useReducer = function (e, n, r) {
  return Ae.current.useReducer(e, n, r);
};
H.useRef = function (e) {
  return Ae.current.useRef(e);
};
H.useState = function (e) {
  return Ae.current.useState(e);
};
H.useSyncExternalStore = function (e, n, r) {
  return Ae.current.useSyncExternalStore(e, n, r);
};
H.useTransition = function () {
  return Ae.current.useTransition();
};
H.version = "18.2.0";
Gu.exports = H;
var z = Gu.exports;
const cn = _u(z),
  Yi = Im({ __proto__: null, default: cn }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm = z,
  Km = Symbol.for("react.element"),
  Jm = Symbol.for("react.fragment"),
  Ym = Object.prototype.hasOwnProperty,
  $m = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vu(e, n, r) {
  var t,
    a = {},
    o = null,
    l = null;
  r !== void 0 && (o = "" + r),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (l = n.ref);
  for (t in n) Ym.call(n, t) && !Zm.hasOwnProperty(t) && (a[t] = n[t]);
  if (e && e.defaultProps)
    for (t in ((n = e.defaultProps), n)) a[t] === void 0 && (a[t] = n[t]);
  return {
    $$typeof: Km,
    type: e,
    key: o,
    ref: l,
    props: a,
    _owner: $m.current,
  };
}
Ja.Fragment = Jm;
Ja.jsx = Vu;
Ja.jsxs = Vu;
Nu.exports = Ja;
var D = Nu.exports,
  $i = {},
  Ku = { exports: {} },
  Fe = {},
  Ju = { exports: {} },
  Yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(w, C) {
    var M = w.length;
    w.push(C);
    e: for (; 0 < M; ) {
      var T = (M - 1) >>> 1,
        E = w[T];
      if (0 < a(E, C)) (w[T] = C), (w[M] = E), (M = T);
      else break e;
    }
  }
  function r(w) {
    return w.length === 0 ? null : w[0];
  }
  function t(w) {
    if (w.length === 0) return null;
    var C = w[0],
      M = w.pop();
    if (M !== C) {
      w[0] = M;
      e: for (var T = 0, E = w.length, Q = E >>> 1; T < Q; ) {
        var W = 2 * (T + 1) - 1,
          te = w[W],
          se = W + 1,
          de = w[se];
        if (0 > a(te, M))
          se < E && 0 > a(de, te)
            ? ((w[T] = de), (w[se] = M), (T = se))
            : ((w[T] = te), (w[W] = M), (T = W));
        else if (se < E && 0 > a(de, M)) (w[T] = de), (w[se] = M), (T = se);
        else break e;
      }
    }
    return C;
  }
  function a(w, C) {
    var M = w.sortIndex - C.sortIndex;
    return M !== 0 ? M : w.id - C.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      c = l.now();
    e.unstable_now = function () {
      return l.now() - c;
    };
  }
  var m = [],
    h = [],
    d = 1,
    f = null,
    b = 3,
    A = !1,
    P = !1,
    I = !1,
    B = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(w) {
    for (var C = r(h); C !== null; ) {
      if (C.callback === null) t(h);
      else if (C.startTime <= w)
        t(h), (C.sortIndex = C.expirationTime), n(m, C);
      else break;
      C = r(h);
    }
  }
  function k(w) {
    if (((I = !1), v(w), !P))
      if (r(m) !== null) (P = !0), S(L);
      else {
        var C = r(h);
        C !== null && x(k, C.startTime - w);
      }
  }
  function L(w, C) {
    (P = !1), I && ((I = !1), y(N), (N = -1)), (A = !0);
    var M = b;
    try {
      for (
        v(C), f = r(m);
        f !== null && (!(f.expirationTime > C) || (w && !U()));

      ) {
        var T = f.callback;
        if (typeof T == "function") {
          (f.callback = null), (b = f.priorityLevel);
          var E = T(f.expirationTime <= C);
          (C = e.unstable_now()),
            typeof E == "function" ? (f.callback = E) : f === r(m) && t(m),
            v(C);
        } else t(m);
        f = r(m);
      }
      if (f !== null) var Q = !0;
      else {
        var W = r(h);
        W !== null && x(k, W.startTime - C), (Q = !1);
      }
      return Q;
    } finally {
      (f = null), (b = M), (A = !1);
    }
  }
  var _ = !1,
    G = null,
    N = -1,
    K = 5,
    O = -1;
  function U() {
    return !(e.unstable_now() - O < K);
  }
  function i() {
    if (G !== null) {
      var w = e.unstable_now();
      O = w;
      var C = !0;
      try {
        C = G(!0, w);
      } finally {
        C ? s() : ((_ = !1), (G = null));
      }
    } else _ = !1;
  }
  var s;
  if (typeof p == "function")
    s = function () {
      p(i);
    };
  else if (typeof MessageChannel < "u") {
    var u = new MessageChannel(),
      g = u.port2;
    (u.port1.onmessage = i),
      (s = function () {
        g.postMessage(null);
      });
  } else
    s = function () {
      B(i, 0);
    };
  function S(w) {
    (G = w), _ || ((_ = !0), s());
  }
  function x(w, C) {
    N = B(function () {
      w(e.unstable_now());
    }, C);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      P || A || ((P = !0), S(L));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return b;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(m);
    }),
    (e.unstable_next = function (w) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = b;
      }
      var M = b;
      b = C;
      try {
        return w();
      } finally {
        b = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, C) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var M = b;
      b = w;
      try {
        return C();
      } finally {
        b = M;
      }
    }),
    (e.unstable_scheduleCallback = function (w, C, M) {
      var T = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? T + M : T))
          : (M = T),
        w)
      ) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return (
        (E = M + E),
        (w = {
          id: d++,
          callback: C,
          priorityLevel: w,
          startTime: M,
          expirationTime: E,
          sortIndex: -1,
        }),
        M > T
          ? ((w.sortIndex = M),
            n(h, w),
            r(m) === null &&
              w === r(h) &&
              (I ? (y(N), (N = -1)) : (I = !0), x(k, M - T)))
          : ((w.sortIndex = E), n(m, w), P || A || ((P = !0), S(L))),
        w
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (w) {
      var C = b;
      return function () {
        var M = b;
        b = C;
        try {
          return w.apply(this, arguments);
        } finally {
          b = M;
        }
      };
    });
})(Yu);
Ju.exports = Yu;
var Qm = Ju.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $u = z,
  _e = Qm;
function R(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    n += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zu = new Set(),
  st = {};
function tr(e, n) {
  Tr(e, n), Tr(e + "Capture", n);
}
function Tr(e, n) {
  for (st[e] = n, e = 0; e < n.length; e++) Zu.add(n[e]);
}
var mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zi = Object.prototype.hasOwnProperty,
  qm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  is = {},
  os = {};
function Xm(e) {
  return Zi.call(os, e)
    ? !0
    : Zi.call(is, e)
    ? !1
    : qm.test(e)
    ? (os[e] = !0)
    : ((is[e] = !0), !1);
}
function ef(e, n, r, t) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return t
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nf(e, n, r, t) {
  if (n === null || typeof n > "u" || ef(e, n, r, t)) return !0;
  if (t) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function Me(e, n, r, t, a, o, l) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = t),
    (this.attributeNamespace = a),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  pe[n] = new Me(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tl = /[\-:]([a-z])/g;
function al(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(tl, al);
    pe[n] = new Me(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(tl, al);
    pe[n] = new Me(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(tl, al);
  pe[n] = new Me(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function il(e, n, r, t) {
  var a = pe.hasOwnProperty(n) ? pe[n] : null;
  (a !== null
    ? a.type !== 0
    : t ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (nf(n, r, a, t) && (r = null),
    t || a === null
      ? Xm(n) && (r === null ? e.removeAttribute(n) : e.setAttribute(n, "" + r))
      : a.mustUseProperty
      ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
      : ((n = a.attributeName),
        (t = a.attributeNamespace),
        r === null
          ? e.removeAttribute(n)
          : ((a = a.type),
            (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
            t ? e.setAttributeNS(t, n, r) : e.setAttribute(n, r))));
}
var vn = $u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zt = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ur = Symbol.for("react.fragment"),
  ol = Symbol.for("react.strict_mode"),
  Qi = Symbol.for("react.profiler"),
  Qu = Symbol.for("react.provider"),
  qu = Symbol.for("react.context"),
  ll = Symbol.for("react.forward_ref"),
  qi = Symbol.for("react.suspense"),
  Xi = Symbol.for("react.suspense_list"),
  sl = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  Xu = Symbol.for("react.offscreen"),
  ls = Symbol.iterator;
function zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ls && e[ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  yi;
function Jr(e) {
  if (yi === void 0)
    try {
      throw Error();
    } catch (r) {
      var n = r.stack.trim().match(/\n( *(at )?)/);
      yi = (n && n[1]) || "";
    }
  return (
    `
` +
    yi +
    e
  );
}
var Ci = !1;
function bi(e, n) {
  if (!e || Ci) return "";
  Ci = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (h) {
          var t = h;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (h) {
          t = h;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        t = h;
      }
      e();
    }
  } catch (h) {
    if (h && t && typeof h.stack == "string") {
      for (
        var a = h.stack.split(`
`),
          o = t.stack.split(`
`),
          l = a.length - 1,
          c = o.length - 1;
        1 <= l && 0 <= c && a[l] !== o[c];

      )
        c--;
      for (; 1 <= l && 0 <= c; l--, c--)
        if (a[l] !== o[c]) {
          if (l !== 1 || c !== 1)
            do
              if ((l--, c--, 0 > c || a[l] !== o[c])) {
                var m =
                  `
` + a[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    m.includes("<anonymous>") &&
                    (m = m.replace("<anonymous>", e.displayName)),
                  m
                );
              }
            while (1 <= l && 0 <= c);
          break;
        }
    }
  } finally {
    (Ci = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function rf(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = bi(e.type, !1)), e;
    case 11:
      return (e = bi(e.type.render, !1)), e;
    case 1:
      return (e = bi(e.type, !0)), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ur:
      return "Fragment";
    case sr:
      return "Portal";
    case Qi:
      return "Profiler";
    case ol:
      return "StrictMode";
    case qi:
      return "Suspense";
    case Xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qu:
        return (e.displayName || "Context") + ".Consumer";
      case Qu:
        return (e._context.displayName || "Context") + ".Provider";
      case ll:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sl:
        return (
          (n = e.displayName || null), n !== null ? n : eo(e.type) || "Memo"
        );
      case Cn:
        (n = e._payload), (e = e._init);
        try {
          return eo(e(n));
        } catch {}
    }
  return null;
}
function tf(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eo(n);
    case 8:
      return n === ol ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function _n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ec(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function af(e) {
  var n = ec(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    t = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var a = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (l) {
          (t = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, n, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return t;
        },
        setValue: function (l) {
          t = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Ot(e) {
  e._valueTracker || (e._valueTracker = af(e));
}
function nc(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var r = n.getValue(),
    t = "";
  return (
    e && (t = ec(e) ? (e.checked ? "true" : "false") : e.value),
    (e = t),
    e !== r ? (n.setValue(e), !0) : !1
  );
}
function pa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function no(e, n) {
  var r = n.checked;
  return ee({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function ss(e, n) {
  var r = n.defaultValue == null ? "" : n.defaultValue,
    t = n.checked != null ? n.checked : n.defaultChecked;
  (r = _n(n.value != null ? n.value : r)),
    (e._wrapperState = {
      initialChecked: t,
      initialValue: r,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function rc(e, n) {
  (n = n.checked), n != null && il(e, "checked", n, !1);
}
function ro(e, n) {
  rc(e, n);
  var r = _n(n.value),
    t = n.type;
  if (r != null)
    t === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (t === "submit" || t === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? to(e, n.type, r)
    : n.hasOwnProperty("defaultValue") && to(e, n.type, _n(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function us(e, n, r) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var t = n.type;
    if (
      !(
        (t !== "submit" && t !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      r || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function to(e, n, r) {
  (n !== "number" || pa(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Yr = Array.isArray;
function br(e, n, r, t) {
  if (((e = e.options), n)) {
    n = {};
    for (var a = 0; a < r.length; a++) n["$" + r[a]] = !0;
    for (r = 0; r < e.length; r++)
      (a = n.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== a && (e[r].selected = a),
        a && t && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + _n(r), n = null, a = 0; a < e.length; a++) {
      if (e[a].value === r) {
        (e[a].selected = !0), t && (e[a].defaultSelected = !0);
        return;
      }
      n !== null || e[a].disabled || (n = e[a]);
    }
    n !== null && (n.selected = !0);
  }
}
function ao(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ee({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cs(e, n) {
  var r = n.value;
  if (r == null) {
    if (((r = n.children), (n = n.defaultValue), r != null)) {
      if (n != null) throw Error(R(92));
      if (Yr(r)) {
        if (1 < r.length) throw Error(R(93));
        r = r[0];
      }
      n = r;
    }
    n == null && (n = ""), (r = n);
  }
  e._wrapperState = { initialValue: _n(r) };
}
function tc(e, n) {
  var r = _n(n.value),
    t = _n(n.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    n.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    t != null && (e.defaultValue = "" + t);
}
function ds(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function io(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ac(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ht,
  ic = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, r, t, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, r, t, a);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        Ht = Ht || document.createElement("div"),
          Ht.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = Ht.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function ut(e, n) {
  if (n) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  of = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  of.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[n] = Xr[e]);
  });
});
function oc(e, n, r) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : r || typeof n != "number" || n === 0 || (Xr.hasOwnProperty(e) && Xr[e])
    ? ("" + n).trim()
    : n + "px";
}
function lc(e, n) {
  e = e.style;
  for (var r in n)
    if (n.hasOwnProperty(r)) {
      var t = r.indexOf("--") === 0,
        a = oc(r, n[r], t);
      r === "float" && (r = "cssFloat"), t ? e.setProperty(r, a) : (e[r] = a);
    }
}
var lf = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oo(e, n) {
  if (n) {
    if (lf[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(R(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(R(62));
  }
}
function lo(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var so = null;
function ul(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uo = null,
  Sr = null,
  Ar = null;
function ms(e) {
  if ((e = Lt(e))) {
    if (typeof uo != "function") throw Error(R(280));
    var n = e.stateNode;
    n && ((n = qa(n)), uo(e.stateNode, e.type, n));
  }
}
function sc(e) {
  Sr ? (Ar ? Ar.push(e) : (Ar = [e])) : (Sr = e);
}
function uc() {
  if (Sr) {
    var e = Sr,
      n = Ar;
    if (((Ar = Sr = null), ms(e), n)) for (e = 0; e < n.length; e++) ms(n[e]);
  }
}
function cc(e, n) {
  return e(n);
}
function dc() {}
var Si = !1;
function mc(e, n, r) {
  if (Si) return e(n, r);
  Si = !0;
  try {
    return cc(e, n, r);
  } finally {
    (Si = !1), (Sr !== null || Ar !== null) && (dc(), uc());
  }
}
function ct(e, n) {
  var r = e.stateNode;
  if (r === null) return null;
  var t = qa(r);
  if (t === null) return null;
  r = t[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (t = !t.disabled) ||
        ((e = e.type),
        (t = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !t);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(R(231, n, typeof r));
  return r;
}
var co = !1;
if (mn)
  try {
    var Or = {};
    Object.defineProperty(Or, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", Or, Or),
      window.removeEventListener("test", Or, Or);
  } catch {
    co = !1;
  }
function sf(e, n, r, t, a, o, l, c, m) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(r, h);
  } catch (d) {
    this.onError(d);
  }
}
var et = !1,
  ga = null,
  va = !1,
  mo = null,
  uf = {
    onError: function (e) {
      (et = !0), (ga = e);
    },
  };
function cf(e, n, r, t, a, o, l, c, m) {
  (et = !1), (ga = null), sf.apply(uf, arguments);
}
function df(e, n, r, t, a, o, l, c, m) {
  if ((cf.apply(this, arguments), et)) {
    if (et) {
      var h = ga;
      (et = !1), (ga = null);
    } else throw Error(R(198));
    va || ((va = !0), (mo = h));
  }
}
function ar(e) {
  var n = e,
    r = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (r = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? r : null;
}
function fc(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function fs(e) {
  if (ar(e) !== e) throw Error(R(188));
}
function mf(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = ar(e)), n === null)) throw Error(R(188));
    return n !== e ? null : e;
  }
  for (var r = e, t = n; ; ) {
    var a = r.return;
    if (a === null) break;
    var o = a.alternate;
    if (o === null) {
      if (((t = a.return), t !== null)) {
        r = t;
        continue;
      }
      break;
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === r) return fs(a), e;
        if (o === t) return fs(a), n;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (r.return !== t.return) (r = a), (t = o);
    else {
      for (var l = !1, c = a.child; c; ) {
        if (c === r) {
          (l = !0), (r = a), (t = o);
          break;
        }
        if (c === t) {
          (l = !0), (t = a), (r = o);
          break;
        }
        c = c.sibling;
      }
      if (!l) {
        for (c = o.child; c; ) {
          if (c === r) {
            (l = !0), (r = o), (t = a);
            break;
          }
          if (c === t) {
            (l = !0), (t = o), (r = a);
            break;
          }
          c = c.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (r.alternate !== t) throw Error(R(190));
  }
  if (r.tag !== 3) throw Error(R(188));
  return r.stateNode.current === r ? e : n;
}
function hc(e) {
  return (e = mf(e)), e !== null ? pc(e) : null;
}
function pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = pc(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var gc = _e.unstable_scheduleCallback,
  hs = _e.unstable_cancelCallback,
  ff = _e.unstable_shouldYield,
  hf = _e.unstable_requestPaint,
  re = _e.unstable_now,
  pf = _e.unstable_getCurrentPriorityLevel,
  cl = _e.unstable_ImmediatePriority,
  vc = _e.unstable_UserBlockingPriority,
  ya = _e.unstable_NormalPriority,
  gf = _e.unstable_LowPriority,
  yc = _e.unstable_IdlePriority,
  Ya = null,
  tn = null;
function vf(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : bf,
  yf = Math.log,
  Cf = Math.LN2;
function bf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((yf(e) / Cf) | 0)) | 0;
}
var Ut = 64,
  Wt = 4194304;
function $r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ca(e, n) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var t = 0,
    a = e.suspendedLanes,
    o = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var c = l & ~a;
    c !== 0 ? (t = $r(c)) : ((o &= l), o !== 0 && (t = $r(o)));
  } else (l = r & ~a), l !== 0 ? (t = $r(l)) : o !== 0 && (t = $r(o));
  if (t === 0) return 0;
  if (
    n !== 0 &&
    n !== t &&
    !(n & a) &&
    ((a = t & -t), (o = n & -n), a >= o || (a === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((t & 4 && (t |= r & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= t; 0 < n; )
      (r = 31 - Qe(n)), (a = 1 << r), (t |= e[r]), (n &= ~a);
  return t;
}
function Sf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Af(e, n) {
  for (
    var r = e.suspendedLanes,
      t = e.pingedLanes,
      a = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Qe(o),
      c = 1 << l,
      m = a[l];
    m === -1
      ? (!(c & r) || c & t) && (a[l] = Sf(c, n))
      : m <= n && (e.expiredLanes |= c),
      (o &= ~c);
  }
}
function fo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cc() {
  var e = Ut;
  return (Ut <<= 1), !(Ut & 4194240) && (Ut = 64), e;
}
function Ai(e) {
  for (var n = [], r = 0; 31 > r; r++) n.push(e);
  return n;
}
function Bt(e, n, r) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Qe(n)),
    (e[n] = r);
}
function Mf(e, n) {
  var r = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var t = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var a = 31 - Qe(r),
      o = 1 << a;
    (n[a] = 0), (t[a] = -1), (e[a] = -1), (r &= ~o);
  }
}
function dl(e, n) {
  var r = (e.entangledLanes |= n);
  for (e = e.entanglements; r; ) {
    var t = 31 - Qe(r),
      a = 1 << t;
    (a & n) | (e[t] & n) && (e[t] |= n), (r &= ~a);
  }
}
var V = 0;
function bc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sc,
  ml,
  Ac,
  Mc,
  kc,
  ho = !1,
  jt = [],
  Tn = null,
  Pn = null,
  En = null,
  dt = new Map(),
  mt = new Map(),
  Sn = [],
  kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ps(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mt.delete(n.pointerId);
  }
}
function Hr(e, n, r, t, a, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: r,
        eventSystemFlags: t,
        nativeEvent: o,
        targetContainers: [a],
      }),
      n !== null && ((n = Lt(n)), n !== null && ml(n)),
      e)
    : ((e.eventSystemFlags |= t),
      (n = e.targetContainers),
      a !== null && n.indexOf(a) === -1 && n.push(a),
      e);
}
function wf(e, n, r, t, a) {
  switch (n) {
    case "focusin":
      return (Tn = Hr(Tn, e, n, r, t, a)), !0;
    case "dragenter":
      return (Pn = Hr(Pn, e, n, r, t, a)), !0;
    case "mouseover":
      return (En = Hr(En, e, n, r, t, a)), !0;
    case "pointerover":
      var o = a.pointerId;
      return dt.set(o, Hr(dt.get(o) || null, e, n, r, t, a)), !0;
    case "gotpointercapture":
      return (
        (o = a.pointerId), mt.set(o, Hr(mt.get(o) || null, e, n, r, t, a)), !0
      );
  }
  return !1;
}
function wc(e) {
  var n = Kn(e.target);
  if (n !== null) {
    var r = ar(n);
    if (r !== null) {
      if (((n = r.tag), n === 13)) {
        if (((n = fc(r)), n !== null)) {
          (e.blockedOn = n),
            kc(e.priority, function () {
              Ac(r);
            });
          return;
        }
      } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ia(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var r = po(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var t = new r.constructor(r.type, r);
      (so = t), r.target.dispatchEvent(t), (so = null);
    } else return (n = Lt(r)), n !== null && ml(n), (e.blockedOn = r), !1;
    n.shift();
  }
  return !0;
}
function gs(e, n, r) {
  ia(e) && r.delete(n);
}
function Tf() {
  (ho = !1),
    Tn !== null && ia(Tn) && (Tn = null),
    Pn !== null && ia(Pn) && (Pn = null),
    En !== null && ia(En) && (En = null),
    dt.forEach(gs),
    mt.forEach(gs);
}
function Ur(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ho ||
      ((ho = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Tf)));
}
function ft(e) {
  function n(a) {
    return Ur(a, e);
  }
  if (0 < jt.length) {
    Ur(jt[0], e);
    for (var r = 1; r < jt.length; r++) {
      var t = jt[r];
      t.blockedOn === e && (t.blockedOn = null);
    }
  }
  for (
    Tn !== null && Ur(Tn, e),
      Pn !== null && Ur(Pn, e),
      En !== null && Ur(En, e),
      dt.forEach(n),
      mt.forEach(n),
      r = 0;
    r < Sn.length;
    r++
  )
    (t = Sn[r]), t.blockedOn === e && (t.blockedOn = null);
  for (; 0 < Sn.length && ((r = Sn[0]), r.blockedOn === null); )
    wc(r), r.blockedOn === null && Sn.shift();
}
var Mr = vn.ReactCurrentBatchConfig,
  ba = !0;
function Pf(e, n, r, t) {
  var a = V,
    o = Mr.transition;
  Mr.transition = null;
  try {
    (V = 1), fl(e, n, r, t);
  } finally {
    (V = a), (Mr.transition = o);
  }
}
function Ef(e, n, r, t) {
  var a = V,
    o = Mr.transition;
  Mr.transition = null;
  try {
    (V = 4), fl(e, n, r, t);
  } finally {
    (V = a), (Mr.transition = o);
  }
}
function fl(e, n, r, t) {
  if (ba) {
    var a = po(e, n, r, t);
    if (a === null) Ri(e, n, t, Sa, r), ps(e, t);
    else if (wf(a, e, n, r, t)) t.stopPropagation();
    else if ((ps(e, t), n & 4 && -1 < kf.indexOf(e))) {
      for (; a !== null; ) {
        var o = Lt(a);
        if (
          (o !== null && Sc(o),
          (o = po(e, n, r, t)),
          o === null && Ri(e, n, t, Sa, r),
          o === a)
        )
          break;
        a = o;
      }
      a !== null && t.stopPropagation();
    } else Ri(e, n, t, null, r);
  }
}
var Sa = null;
function po(e, n, r, t) {
  if (((Sa = null), (e = ul(t)), (e = Kn(e)), e !== null))
    if (((n = ar(e)), n === null)) e = null;
    else if (((r = n.tag), r === 13)) {
      if (((e = fc(n)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Sa = e), null;
}
function Tc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pf()) {
        case cl:
          return 1;
        case vc:
          return 4;
        case ya:
        case gf:
          return 16;
        case yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null,
  hl = null,
  oa = null;
function Pc() {
  if (oa) return oa;
  var e,
    n = hl,
    r = n.length,
    t,
    a = "value" in Mn ? Mn.value : Mn.textContent,
    o = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var l = r - e;
  for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
  return (oa = a.slice(e, 1 < t ? 1 - t : void 0));
}
function la(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vt() {
  return !0;
}
function vs() {
  return !1;
}
function ze(e) {
  function n(r, t, a, o, l) {
    (this._reactName = r),
      (this._targetInst = a),
      (this.type = t),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((r = e[c]), (this[c] = r ? r(o) : o[c]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Vt
        : vs),
      (this.isPropagationStopped = vs),
      this
    );
  }
  return (
    ee(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Vt));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Vt));
      },
      persist: function () {},
      isPersistent: Vt,
    }),
    n
  );
}
var Nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pl = ze(Nr),
  Rt = ee({}, Nr, { view: 0, detail: 0 }),
  If = ze(Rt),
  Mi,
  ki,
  Wr,
  $a = ee({}, Rt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((Mi = e.screenX - Wr.screenX), (ki = e.screenY - Wr.screenY))
              : (ki = Mi = 0),
            (Wr = e)),
          Mi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ki;
    },
  }),
  ys = ze($a),
  xf = ee({}, $a, { dataTransfer: 0 }),
  Bf = ze(xf),
  Rf = ee({}, Rt, { relatedTarget: 0 }),
  wi = ze(Rf),
  Lf = ee({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = ze(Lf),
  _f = ee({}, Nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nf = ze(_f),
  Gf = ee({}, Nr, { data: 0 }),
  Cs = ze(Gf),
  Ff = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Of = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Of[e]) ? !!n[e] : !1;
}
function gl() {
  return Hf;
}
var Uf = ee({}, Rt, {
    key: function (e) {
      if (e.key) {
        var n = Ff[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = la(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gl,
    charCode: function (e) {
      return e.type === "keypress" ? la(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? la(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Wf = ze(Uf),
  jf = ee({}, $a, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bs = ze(jf),
  Vf = ee({}, Rt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gl,
  }),
  Kf = ze(Vf),
  Jf = ee({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yf = ze(Jf),
  $f = ee({}, $a, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zf = ze($f),
  Qf = [9, 13, 27, 32],
  vl = mn && "CompositionEvent" in window,
  nt = null;
mn && "documentMode" in document && (nt = document.documentMode);
var qf = mn && "TextEvent" in window && !nt,
  Ec = mn && (!vl || (nt && 8 < nt && 11 >= nt)),
  Ss = " ",
  As = !1;
function Ic(e, n) {
  switch (e) {
    case "keyup":
      return Qf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cr = !1;
function Xf(e, n) {
  switch (e) {
    case "compositionend":
      return xc(n);
    case "keypress":
      return n.which !== 32 ? null : ((As = !0), Ss);
    case "textInput":
      return (e = n.data), e === Ss && As ? null : e;
    default:
      return null;
  }
}
function eh(e, n) {
  if (cr)
    return e === "compositionend" || (!vl && Ic(e, n))
      ? ((e = Pc()), (oa = hl = Mn = null), (cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Ec && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var nh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ms(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!nh[e.type] : n === "textarea";
}
function Bc(e, n, r, t) {
  sc(t),
    (n = Aa(n, "onChange")),
    0 < n.length &&
      ((r = new pl("onChange", "change", null, r, t)),
      e.push({ event: r, listeners: n }));
}
var rt = null,
  ht = null;
function rh(e) {
  Uc(e, 0);
}
function Za(e) {
  var n = fr(e);
  if (nc(n)) return e;
}
function th(e, n) {
  if (e === "change") return n;
}
var Rc = !1;
if (mn) {
  var Ti;
  if (mn) {
    var Pi = "oninput" in document;
    if (!Pi) {
      var ks = document.createElement("div");
      ks.setAttribute("oninput", "return;"),
        (Pi = typeof ks.oninput == "function");
    }
    Ti = Pi;
  } else Ti = !1;
  Rc = Ti && (!document.documentMode || 9 < document.documentMode);
}
function ws() {
  rt && (rt.detachEvent("onpropertychange", Lc), (ht = rt = null));
}
function Lc(e) {
  if (e.propertyName === "value" && Za(ht)) {
    var n = [];
    Bc(n, ht, e, ul(e)), mc(rh, n);
  }
}
function ah(e, n, r) {
  e === "focusin"
    ? (ws(), (rt = n), (ht = r), rt.attachEvent("onpropertychange", Lc))
    : e === "focusout" && ws();
}
function ih(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Za(ht);
}
function oh(e, n) {
  if (e === "click") return Za(n);
}
function lh(e, n) {
  if (e === "input" || e === "change") return Za(n);
}
function sh(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Xe = typeof Object.is == "function" ? Object.is : sh;
function pt(e, n) {
  if (Xe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var r = Object.keys(e),
    t = Object.keys(n);
  if (r.length !== t.length) return !1;
  for (t = 0; t < r.length; t++) {
    var a = r[t];
    if (!Zi.call(n, a) || !Xe(e[a], n[a])) return !1;
  }
  return !0;
}
function Ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ps(e, n) {
  var r = Ts(e);
  e = 0;
  for (var t; r; ) {
    if (r.nodeType === 3) {
      if (((t = e + r.textContent.length), e <= n && t >= n))
        return { node: r, offset: n - e };
      e = t;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ts(r);
  }
}
function Dc(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Dc(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function _c() {
  for (var e = window, n = pa(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof n.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = n.contentWindow;
    else break;
    n = pa(e.document);
  }
  return n;
}
function yl(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function uh(e) {
  var n = _c(),
    r = e.focusedElem,
    t = e.selectionRange;
  if (
    n !== r &&
    r &&
    r.ownerDocument &&
    Dc(r.ownerDocument.documentElement, r)
  ) {
    if (t !== null && yl(r)) {
      if (
        ((n = t.start),
        (e = t.end),
        e === void 0 && (e = n),
        "selectionStart" in r)
      )
        (r.selectionStart = n), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((n = r.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = r.textContent.length,
          o = Math.min(t.start, a);
        (t = t.end === void 0 ? o : Math.min(t.end, a)),
          !e.extend && o > t && ((a = t), (t = o), (o = a)),
          (a = Ps(r, o));
        var l = Ps(r, t);
        a &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((n = n.createRange()),
          n.setStart(a.node, a.offset),
          e.removeAllRanges(),
          o > t
            ? (e.addRange(n), e.extend(l.node, l.offset))
            : (n.setEnd(l.node, l.offset), e.addRange(n)));
      }
    }
    for (n = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++)
      (e = n[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ch = mn && "documentMode" in document && 11 >= document.documentMode,
  dr = null,
  go = null,
  tt = null,
  vo = !1;
function Es(e, n, r) {
  var t = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  vo ||
    dr == null ||
    dr !== pa(t) ||
    ((t = dr),
    "selectionStart" in t && yl(t)
      ? (t = { start: t.selectionStart, end: t.selectionEnd })
      : ((t = (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (t = {
          anchorNode: t.anchorNode,
          anchorOffset: t.anchorOffset,
          focusNode: t.focusNode,
          focusOffset: t.focusOffset,
        })),
    (tt && pt(tt, t)) ||
      ((tt = t),
      (t = Aa(go, "onSelect")),
      0 < t.length &&
        ((n = new pl("onSelect", "select", null, n, r)),
        e.push({ event: n, listeners: t }),
        (n.target = dr))));
}
function Kt(e, n) {
  var r = {};
  return (
    (r[e.toLowerCase()] = n.toLowerCase()),
    (r["Webkit" + e] = "webkit" + n),
    (r["Moz" + e] = "moz" + n),
    r
  );
}
var mr = {
    animationend: Kt("Animation", "AnimationEnd"),
    animationiteration: Kt("Animation", "AnimationIteration"),
    animationstart: Kt("Animation", "AnimationStart"),
    transitionend: Kt("Transition", "TransitionEnd"),
  },
  Ei = {},
  Nc = {};
mn &&
  ((Nc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mr.animationend.animation,
    delete mr.animationiteration.animation,
    delete mr.animationstart.animation),
  "TransitionEvent" in window || delete mr.transitionend.transition);
function Qa(e) {
  if (Ei[e]) return Ei[e];
  if (!mr[e]) return e;
  var n = mr[e],
    r;
  for (r in n) if (n.hasOwnProperty(r) && r in Nc) return (Ei[e] = n[r]);
  return e;
}
var Gc = Qa("animationend"),
  Fc = Qa("animationiteration"),
  zc = Qa("animationstart"),
  Oc = Qa("transitionend"),
  Hc = new Map(),
  Is =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, n) {
  Hc.set(e, n), tr(n, [e]);
}
for (var Ii = 0; Ii < Is.length; Ii++) {
  var xi = Is[Ii],
    dh = xi.toLowerCase(),
    mh = xi[0].toUpperCase() + xi.slice(1);
  zn(dh, "on" + mh);
}
zn(Gc, "onAnimationEnd");
zn(Fc, "onAnimationIteration");
zn(zc, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Oc, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
tr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
function xs(e, n, r) {
  var t = e.type || "unknown-event";
  (e.currentTarget = r), df(t, n, void 0, e), (e.currentTarget = null);
}
function Uc(e, n) {
  n = (n & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var t = e[r],
      a = t.event;
    t = t.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var l = t.length - 1; 0 <= l; l--) {
          var c = t[l],
            m = c.instance,
            h = c.currentTarget;
          if (((c = c.listener), m !== o && a.isPropagationStopped())) break e;
          xs(a, c, h), (o = m);
        }
      else
        for (l = 0; l < t.length; l++) {
          if (
            ((c = t[l]),
            (m = c.instance),
            (h = c.currentTarget),
            (c = c.listener),
            m !== o && a.isPropagationStopped())
          )
            break e;
          xs(a, c, h), (o = m);
        }
    }
  }
  if (va) throw ((e = mo), (va = !1), (mo = null), e);
}
function Y(e, n) {
  var r = n[Ao];
  r === void 0 && (r = n[Ao] = new Set());
  var t = e + "__bubble";
  r.has(t) || (Wc(n, e, 2, !1), r.add(t));
}
function Bi(e, n, r) {
  var t = 0;
  n && (t |= 4), Wc(r, e, t, n);
}
var Jt = "_reactListening" + Math.random().toString(36).slice(2);
function gt(e) {
  if (!e[Jt]) {
    (e[Jt] = !0),
      Zu.forEach(function (r) {
        r !== "selectionchange" && (fh.has(r) || Bi(r, !1, e), Bi(r, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Jt] || ((n[Jt] = !0), Bi("selectionchange", !1, n));
  }
}
function Wc(e, n, r, t) {
  switch (Tc(n)) {
    case 1:
      var a = Pf;
      break;
    case 4:
      a = Ef;
      break;
    default:
      a = fl;
  }
  (r = a.bind(null, n, r, e)),
    (a = void 0),
    !co ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (a = !0),
    t
      ? a !== void 0
        ? e.addEventListener(n, r, { capture: !0, passive: a })
        : e.addEventListener(n, r, !0)
      : a !== void 0
      ? e.addEventListener(n, r, { passive: a })
      : e.addEventListener(n, r, !1);
}
function Ri(e, n, r, t, a) {
  var o = t;
  if (!(n & 1) && !(n & 2) && t !== null)
    e: for (;;) {
      if (t === null) return;
      var l = t.tag;
      if (l === 3 || l === 4) {
        var c = t.stateNode.containerInfo;
        if (c === a || (c.nodeType === 8 && c.parentNode === a)) break;
        if (l === 4)
          for (l = t.return; l !== null; ) {
            var m = l.tag;
            if (
              (m === 3 || m === 4) &&
              ((m = l.stateNode.containerInfo),
              m === a || (m.nodeType === 8 && m.parentNode === a))
            )
              return;
            l = l.return;
          }
        for (; c !== null; ) {
          if (((l = Kn(c)), l === null)) return;
          if (((m = l.tag), m === 5 || m === 6)) {
            t = o = l;
            continue e;
          }
          c = c.parentNode;
        }
      }
      t = t.return;
    }
  mc(function () {
    var h = o,
      d = ul(r),
      f = [];
    e: {
      var b = Hc.get(e);
      if (b !== void 0) {
        var A = pl,
          P = e;
        switch (e) {
          case "keypress":
            if (la(r) === 0) break e;
          case "keydown":
          case "keyup":
            A = Wf;
            break;
          case "focusin":
            (P = "focus"), (A = wi);
            break;
          case "focusout":
            (P = "blur"), (A = wi);
            break;
          case "beforeblur":
          case "afterblur":
            A = wi;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            A = ys;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            A = Bf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            A = Kf;
            break;
          case Gc:
          case Fc:
          case zc:
            A = Df;
            break;
          case Oc:
            A = Yf;
            break;
          case "scroll":
            A = If;
            break;
          case "wheel":
            A = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            A = Nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            A = bs;
        }
        var I = (n & 4) !== 0,
          B = !I && e === "scroll",
          y = I ? (b !== null ? b + "Capture" : null) : b;
        I = [];
        for (var p = h, v; p !== null; ) {
          v = p;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k),
              y !== null && ((k = ct(p, y)), k != null && I.push(vt(p, k, v)))),
            B)
          )
            break;
          p = p.return;
        }
        0 < I.length &&
          ((b = new A(b, P, null, r, d)), f.push({ event: b, listeners: I }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((b = e === "mouseover" || e === "pointerover"),
          (A = e === "mouseout" || e === "pointerout"),
          b &&
            r !== so &&
            (P = r.relatedTarget || r.fromElement) &&
            (Kn(P) || P[fn]))
        )
          break e;
        if (
          (A || b) &&
          ((b =
            d.window === d
              ? d
              : (b = d.ownerDocument)
              ? b.defaultView || b.parentWindow
              : window),
          A
            ? ((P = r.relatedTarget || r.toElement),
              (A = h),
              (P = P ? Kn(P) : null),
              P !== null &&
                ((B = ar(P)), P !== B || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((A = null), (P = h)),
          A !== P)
        ) {
          if (
            ((I = ys),
            (k = "onMouseLeave"),
            (y = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((I = bs),
              (k = "onPointerLeave"),
              (y = "onPointerEnter"),
              (p = "pointer")),
            (B = A == null ? b : fr(A)),
            (v = P == null ? b : fr(P)),
            (b = new I(k, p + "leave", A, r, d)),
            (b.target = B),
            (b.relatedTarget = v),
            (k = null),
            Kn(d) === h &&
              ((I = new I(y, p + "enter", P, r, d)),
              (I.target = v),
              (I.relatedTarget = B),
              (k = I)),
            (B = k),
            A && P)
          )
            n: {
              for (I = A, y = P, p = 0, v = I; v; v = lr(v)) p++;
              for (v = 0, k = y; k; k = lr(k)) v++;
              for (; 0 < p - v; ) (I = lr(I)), p--;
              for (; 0 < v - p; ) (y = lr(y)), v--;
              for (; p--; ) {
                if (I === y || (y !== null && I === y.alternate)) break n;
                (I = lr(I)), (y = lr(y));
              }
              I = null;
            }
          else I = null;
          A !== null && Bs(f, b, A, I, !1),
            P !== null && B !== null && Bs(f, B, P, I, !0);
        }
      }
      e: {
        if (
          ((b = h ? fr(h) : window),
          (A = b.nodeName && b.nodeName.toLowerCase()),
          A === "select" || (A === "input" && b.type === "file"))
        )
          var L = th;
        else if (Ms(b))
          if (Rc) L = lh;
          else {
            L = ih;
            var _ = ah;
          }
        else
          (A = b.nodeName) &&
            A.toLowerCase() === "input" &&
            (b.type === "checkbox" || b.type === "radio") &&
            (L = oh);
        if (L && (L = L(e, h))) {
          Bc(f, L, r, d);
          break e;
        }
        _ && _(e, b, h),
          e === "focusout" &&
            (_ = b._wrapperState) &&
            _.controlled &&
            b.type === "number" &&
            to(b, "number", b.value);
      }
      switch (((_ = h ? fr(h) : window), e)) {
        case "focusin":
          (Ms(_) || _.contentEditable === "true") &&
            ((dr = _), (go = h), (tt = null));
          break;
        case "focusout":
          tt = go = dr = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), Es(f, r, d);
          break;
        case "selectionchange":
          if (ch) break;
        case "keydown":
        case "keyup":
          Es(f, r, d);
      }
      var G;
      if (vl)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        cr
          ? Ic(e, r) && (N = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ec &&
          r.locale !== "ko" &&
          (cr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && cr && (G = Pc())
            : ((Mn = d),
              (hl = "value" in Mn ? Mn.value : Mn.textContent),
              (cr = !0))),
        (_ = Aa(h, N)),
        0 < _.length &&
          ((N = new Cs(N, e, null, r, d)),
          f.push({ event: N, listeners: _ }),
          G ? (N.data = G) : ((G = xc(r)), G !== null && (N.data = G)))),
        (G = qf ? Xf(e, r) : eh(e, r)) &&
          ((h = Aa(h, "onBeforeInput")),
          0 < h.length &&
            ((d = new Cs("onBeforeInput", "beforeinput", null, r, d)),
            f.push({ event: d, listeners: h }),
            (d.data = G)));
    }
    Uc(f, n);
  });
}
function vt(e, n, r) {
  return { instance: e, listener: n, currentTarget: r };
}
function Aa(e, n) {
  for (var r = n + "Capture", t = []; e !== null; ) {
    var a = e,
      o = a.stateNode;
    a.tag === 5 &&
      o !== null &&
      ((a = o),
      (o = ct(e, r)),
      o != null && t.unshift(vt(e, o, a)),
      (o = ct(e, n)),
      o != null && t.push(vt(e, o, a))),
      (e = e.return);
  }
  return t;
}
function lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bs(e, n, r, t, a) {
  for (var o = n._reactName, l = []; r !== null && r !== t; ) {
    var c = r,
      m = c.alternate,
      h = c.stateNode;
    if (m !== null && m === t) break;
    c.tag === 5 &&
      h !== null &&
      ((c = h),
      a
        ? ((m = ct(r, o)), m != null && l.unshift(vt(r, m, c)))
        : a || ((m = ct(r, o)), m != null && l.push(vt(r, m, c)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: n, listeners: l });
}
var hh = /\r\n?/g,
  ph = /\u0000|\uFFFD/g;
function Rs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hh,
      `
`
    )
    .replace(ph, "");
}
function Yt(e, n, r) {
  if (((n = Rs(n)), Rs(e) !== n && r)) throw Error(R(425));
}
function Ma() {}
var yo = null,
  Co = null;
function bo(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
  gh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ls = typeof Promise == "function" ? Promise : void 0,
  vh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ls < "u"
      ? function (e) {
          return Ls.resolve(null).then(e).catch(yh);
        }
      : So;
function yh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Li(e, n) {
  var r = n,
    t = 0;
  do {
    var a = r.nextSibling;
    if ((e.removeChild(r), a && a.nodeType === 8))
      if (((r = a.data), r === "/$")) {
        if (t === 0) {
          e.removeChild(a), ft(n);
          return;
        }
        t--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || t++;
    r = a;
  } while (r);
  ft(n);
}
function In(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Ds(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (n === 0) return e;
        n--;
      } else r === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gr = Math.random().toString(36).slice(2),
  rn = "__reactFiber$" + Gr,
  yt = "__reactProps$" + Gr,
  fn = "__reactContainer$" + Gr,
  Ao = "__reactEvents$" + Gr,
  Ch = "__reactListeners$" + Gr,
  bh = "__reactHandles$" + Gr;
function Kn(e) {
  var n = e[rn];
  if (n) return n;
  for (var r = e.parentNode; r; ) {
    if ((n = r[fn] || r[rn])) {
      if (
        ((r = n.alternate),
        n.child !== null || (r !== null && r.child !== null))
      )
        for (e = Ds(e); e !== null; ) {
          if ((r = e[rn])) return r;
          e = Ds(e);
        }
      return n;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Lt(e) {
  return (
    (e = e[rn] || e[fn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function qa(e) {
  return e[yt] || null;
}
var Mo = [],
  hr = -1;
function On(e) {
  return { current: e };
}
function $(e) {
  0 > hr || ((e.current = Mo[hr]), (Mo[hr] = null), hr--);
}
function J(e, n) {
  hr++, (Mo[hr] = e.current), (e.current = n);
}
var Nn = {},
  Ce = On(Nn),
  Te = On(!1),
  Qn = Nn;
function Pr(e, n) {
  var r = e.type.contextTypes;
  if (!r) return Nn;
  var t = e.stateNode;
  if (t && t.__reactInternalMemoizedUnmaskedChildContext === n)
    return t.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    o;
  for (o in r) a[o] = n[o];
  return (
    t &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function ka() {
  $(Te), $(Ce);
}
function _s(e, n, r) {
  if (Ce.current !== Nn) throw Error(R(168));
  J(Ce, n), J(Te, r);
}
function jc(e, n, r) {
  var t = e.stateNode;
  if (((n = n.childContextTypes), typeof t.getChildContext != "function"))
    return r;
  t = t.getChildContext();
  for (var a in t) if (!(a in n)) throw Error(R(108, tf(e) || "Unknown", a));
  return ee({}, r, t);
}
function wa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
    (Qn = Ce.current),
    J(Ce, e),
    J(Te, Te.current),
    !0
  );
}
function Ns(e, n, r) {
  var t = e.stateNode;
  if (!t) throw Error(R(169));
  r
    ? ((e = jc(e, n, Qn)),
      (t.__reactInternalMemoizedMergedChildContext = e),
      $(Te),
      $(Ce),
      J(Ce, e))
    : $(Te),
    J(Te, r);
}
var ln = null,
  Xa = !1,
  Di = !1;
function Vc(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Sh(e) {
  (Xa = !0), Vc(e);
}
function Hn() {
  if (!Di && ln !== null) {
    Di = !0;
    var e = 0,
      n = V;
    try {
      var r = ln;
      for (V = 1; e < r.length; e++) {
        var t = r[e];
        do t = t(!0);
        while (t !== null);
      }
      (ln = null), (Xa = !1);
    } catch (a) {
      throw (ln !== null && (ln = ln.slice(e + 1)), gc(cl, Hn), a);
    } finally {
      (V = n), (Di = !1);
    }
  }
  return null;
}
var pr = [],
  gr = 0,
  Ta = null,
  Pa = 0,
  Oe = [],
  He = 0,
  qn = null,
  sn = 1,
  un = "";
function Wn(e, n) {
  (pr[gr++] = Pa), (pr[gr++] = Ta), (Ta = e), (Pa = n);
}
function Kc(e, n, r) {
  (Oe[He++] = sn), (Oe[He++] = un), (Oe[He++] = qn), (qn = e);
  var t = sn;
  e = un;
  var a = 32 - Qe(t) - 1;
  (t &= ~(1 << a)), (r += 1);
  var o = 32 - Qe(n) + a;
  if (30 < o) {
    var l = a - (a % 5);
    (o = (t & ((1 << l) - 1)).toString(32)),
      (t >>= l),
      (a -= l),
      (sn = (1 << (32 - Qe(n) + a)) | (r << a) | t),
      (un = o + e);
  } else (sn = (1 << o) | (r << a) | t), (un = e);
}
function Cl(e) {
  e.return !== null && (Wn(e, 1), Kc(e, 1, 0));
}
function bl(e) {
  for (; e === Ta; )
    (Ta = pr[--gr]), (pr[gr] = null), (Pa = pr[--gr]), (pr[gr] = null);
  for (; e === qn; )
    (qn = Oe[--He]),
      (Oe[He] = null),
      (un = Oe[--He]),
      (Oe[He] = null),
      (sn = Oe[--He]),
      (Oe[He] = null);
}
var De = null,
  Re = null,
  Z = !1,
  $e = null;
function Jc(e, n) {
  var r = Ue(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = n),
    (r.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [r]), (e.flags |= 16)) : n.push(r);
}
function Gs(e, n) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (n =
          n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (De = e), (Re = In(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (De = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((r = qn !== null ? { id: sn, overflow: un } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ue(18, null, null, 0)),
            (r.stateNode = n),
            (r.return = e),
            (e.child = r),
            (De = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wo(e) {
  if (Z) {
    var n = Re;
    if (n) {
      var r = n;
      if (!Gs(e, n)) {
        if (ko(e)) throw Error(R(418));
        n = In(r.nextSibling);
        var t = De;
        n && Gs(e, n)
          ? Jc(t, r)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (De = e));
      }
    } else {
      if (ko(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (De = e);
    }
  }
}
function Fs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function $t(e) {
  if (e !== De) return !1;
  if (!Z) return Fs(e), (Z = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !bo(e.type, e.memoizedProps))),
    n && (n = Re))
  ) {
    if (ko(e)) throw (Yc(), Error(R(418)));
    for (; n; ) Jc(e, n), (n = In(n.nextSibling));
  }
  if ((Fs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (n === 0) {
              Re = In(e.nextSibling);
              break e;
            }
            n--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = De ? In(e.stateNode.nextSibling) : null;
  return !0;
}
function Yc() {
  for (var e = Re; e; ) e = In(e.nextSibling);
}
function Er() {
  (Re = De = null), (Z = !1);
}
function Sl(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Ah = vn.ReactCurrentBatchConfig;
function Je(e, n) {
  if (e && e.defaultProps) {
    (n = ee({}, n)), (e = e.defaultProps);
    for (var r in e) n[r] === void 0 && (n[r] = e[r]);
    return n;
  }
  return n;
}
var Ea = On(null),
  Ia = null,
  vr = null,
  Al = null;
function Ml() {
  Al = vr = Ia = null;
}
function kl(e) {
  var n = Ea.current;
  $(Ea), (e._currentValue = n);
}
function To(e, n, r) {
  for (; e !== null; ) {
    var t = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), t !== null && (t.childLanes |= n))
        : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n),
      e === r)
    )
      break;
    e = e.return;
  }
}
function kr(e, n) {
  (Ia = e),
    (Al = vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (we = !0), (e.firstContext = null));
}
function je(e) {
  var n = e._currentValue;
  if (Al !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), vr === null)) {
      if (Ia === null) throw Error(R(308));
      (vr = e), (Ia.dependencies = { lanes: 0, firstContext: e });
    } else vr = vr.next = e;
  return n;
}
var Jn = null;
function wl(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e);
}
function $c(e, n, r, t) {
  var a = n.interleaved;
  return (
    a === null ? ((r.next = r), wl(n)) : ((r.next = a.next), (a.next = r)),
    (n.interleaved = r),
    hn(e, t)
  );
}
function hn(e, n) {
  e.lanes |= n;
  var r = e.alternate;
  for (r !== null && (r.lanes |= n), r = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (r = e.alternate),
      r !== null && (r.childLanes |= n),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var bn = !1;
function Tl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zc(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dn(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xn(e, n, r) {
  var t = e.updateQueue;
  if (t === null) return null;
  if (((t = t.shared), j & 2)) {
    var a = t.pending;
    return (
      a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n),
      hn(e, r)
    );
  }
  return (
    (a = t.interleaved),
    a === null ? ((n.next = n), wl(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    hn(e, r)
  );
}
function sa(e, n, r) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194240) !== 0))
  ) {
    var t = n.lanes;
    (t &= e.pendingLanes), (r |= t), (n.lanes = r), dl(e, r);
  }
}
function zs(e, n) {
  var r = e.updateQueue,
    t = e.alternate;
  if (t !== null && ((t = t.updateQueue), r === t)) {
    var a = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (a = o = l) : (o = o.next = l), (r = r.next);
      } while (r !== null);
      o === null ? (a = o = n) : (o = o.next = n);
    } else a = o = n;
    (r = {
      baseState: t.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: o,
      shared: t.shared,
      effects: t.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = n) : (e.next = n),
    (r.lastBaseUpdate = n);
}
function xa(e, n, r, t) {
  var a = e.updateQueue;
  bn = !1;
  var o = a.firstBaseUpdate,
    l = a.lastBaseUpdate,
    c = a.shared.pending;
  if (c !== null) {
    a.shared.pending = null;
    var m = c,
      h = m.next;
    (m.next = null), l === null ? (o = h) : (l.next = h), (l = m);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (c = d.lastBaseUpdate),
      c !== l &&
        (c === null ? (d.firstBaseUpdate = h) : (c.next = h),
        (d.lastBaseUpdate = m)));
  }
  if (o !== null) {
    var f = a.baseState;
    (l = 0), (d = h = m = null), (c = o);
    do {
      var b = c.lane,
        A = c.eventTime;
      if ((t & b) === b) {
        d !== null &&
          (d = d.next =
            {
              eventTime: A,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var P = e,
            I = c;
          switch (((b = n), (A = r), I.tag)) {
            case 1:
              if (((P = I.payload), typeof P == "function")) {
                f = P.call(A, f, b);
                break e;
              }
              f = P;
              break e;
            case 3:
              P.flags = (P.flags & -65537) | 128;
            case 0:
              if (
                ((P = I.payload),
                (b = typeof P == "function" ? P.call(A, f, b) : P),
                b == null)
              )
                break e;
              f = ee({}, f, b);
              break e;
            case 2:
              bn = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (b = a.effects),
          b === null ? (a.effects = [c]) : b.push(c));
      } else
        (A = {
          eventTime: A,
          lane: b,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          d === null ? ((h = d = A), (m = f)) : (d = d.next = A),
          (l |= b);
      if (((c = c.next), c === null)) {
        if (((c = a.shared.pending), c === null)) break;
        (b = c),
          (c = b.next),
          (b.next = null),
          (a.lastBaseUpdate = b),
          (a.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (m = f),
      (a.baseState = m),
      (a.firstBaseUpdate = h),
      (a.lastBaseUpdate = d),
      (n = a.shared.interleaved),
      n !== null)
    ) {
      a = n;
      do (l |= a.lane), (a = a.next);
      while (a !== n);
    } else o === null && (a.shared.lanes = 0);
    (er |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Os(e, n, r) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var t = e[n],
        a = t.callback;
      if (a !== null) {
        if (((t.callback = null), (t = r), typeof a != "function"))
          throw Error(R(191, a));
        a.call(t);
      }
    }
}
var Qc = new $u.Component().refs;
function Po(e, n, r, t) {
  (n = e.memoizedState),
    (r = r(t, n)),
    (r = r == null ? n : ee({}, n, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1;
  },
  enqueueSetState: function (e, n, r) {
    e = e._reactInternals;
    var t = Se(),
      a = Rn(e),
      o = dn(t, a);
    (o.payload = n),
      r != null && (o.callback = r),
      (n = xn(e, o, a)),
      n !== null && (qe(n, e, a, t), sa(n, e, a));
  },
  enqueueReplaceState: function (e, n, r) {
    e = e._reactInternals;
    var t = Se(),
      a = Rn(e),
      o = dn(t, a);
    (o.tag = 1),
      (o.payload = n),
      r != null && (o.callback = r),
      (n = xn(e, o, a)),
      n !== null && (qe(n, e, a, t), sa(n, e, a));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var r = Se(),
      t = Rn(e),
      a = dn(r, t);
    (a.tag = 2),
      n != null && (a.callback = n),
      (n = xn(e, a, t)),
      n !== null && (qe(n, e, t, r), sa(n, e, t));
  },
};
function Hs(e, n, r, t, a, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(t, o, l)
      : n.prototype && n.prototype.isPureReactComponent
      ? !pt(r, t) || !pt(a, o)
      : !0
  );
}
function qc(e, n, r) {
  var t = !1,
    a = Nn,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = je(o))
      : ((a = Pe(n) ? Qn : Ce.current),
        (t = n.contextTypes),
        (o = (t = t != null) ? Pr(e, a) : Nn)),
    (n = new n(r, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ei),
    (e.stateNode = n),
    (n._reactInternals = e),
    t &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function Us(e, n, r, t) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(r, t),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(r, t),
    n.state !== e && ei.enqueueReplaceState(n, n.state, null);
}
function Eo(e, n, r, t) {
  var a = e.stateNode;
  (a.props = r), (a.state = e.memoizedState), (a.refs = Qc), Tl(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (a.context = je(o))
    : ((o = Pe(n) ? Qn : Ce.current), (a.context = Pr(e, o))),
    (a.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (Po(e, n, o, r), (a.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((n = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      n !== a.state && ei.enqueueReplaceState(a, a.state, null),
      xa(e, r, a, t),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function jr(e, n, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309));
        var t = r.stateNode;
      }
      if (!t) throw Error(R(147, e));
      var a = t,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (l) {
            var c = a.refs;
            c === Qc && (c = a.refs = {}),
              l === null ? delete c[o] : (c[o] = l);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!r._owner) throw Error(R(290, e));
  }
  return e;
}
function Zt(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ws(e) {
  var n = e._init;
  return n(e._payload);
}
function Xc(e) {
  function n(y, p) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [p]), (y.flags |= 16)) : v.push(p);
    }
  }
  function r(y, p) {
    if (!e) return null;
    for (; p !== null; ) n(y, p), (p = p.sibling);
    return null;
  }
  function t(y, p) {
    for (y = new Map(); p !== null; )
      p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
    return y;
  }
  function a(y, p) {
    return (y = Ln(y, p)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, p, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((y.flags |= 2), p) : v)
            : ((y.flags |= 2), p))
        : ((y.flags |= 1048576), p)
    );
  }
  function l(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function c(y, p, v, k) {
    return p === null || p.tag !== 6
      ? ((p = Hi(v, y.mode, k)), (p.return = y), p)
      : ((p = a(p, v)), (p.return = y), p);
  }
  function m(y, p, v, k) {
    var L = v.type;
    return L === ur
      ? d(y, p, v.props.children, k, v.key)
      : p !== null &&
        (p.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === Cn &&
            Ws(L) === p.type))
      ? ((k = a(p, v.props)), (k.ref = jr(y, p, v)), (k.return = y), k)
      : ((k = ha(v.type, v.key, v.props, null, y.mode, k)),
        (k.ref = jr(y, p, v)),
        (k.return = y),
        k);
  }
  function h(y, p, v, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Ui(v, y.mode, k)), (p.return = y), p)
      : ((p = a(p, v.children || [])), (p.return = y), p);
  }
  function d(y, p, v, k, L) {
    return p === null || p.tag !== 7
      ? ((p = Zn(v, y.mode, k, L)), (p.return = y), p)
      : ((p = a(p, v)), (p.return = y), p);
  }
  function f(y, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Hi("" + p, y.mode, v)), (p.return = y), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zt:
          return (
            (v = ha(p.type, p.key, p.props, null, y.mode, v)),
            (v.ref = jr(y, null, p)),
            (v.return = y),
            v
          );
        case sr:
          return (p = Ui(p, y.mode, v)), (p.return = y), p;
        case Cn:
          var k = p._init;
          return f(y, k(p._payload), v);
      }
      if (Yr(p) || zr(p))
        return (p = Zn(p, y.mode, v, null)), (p.return = y), p;
      Zt(y, p);
    }
    return null;
  }
  function b(y, p, v, k) {
    var L = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return L !== null ? null : c(y, p, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case zt:
          return v.key === L ? m(y, p, v, k) : null;
        case sr:
          return v.key === L ? h(y, p, v, k) : null;
        case Cn:
          return (L = v._init), b(y, p, L(v._payload), k);
      }
      if (Yr(v) || zr(v)) return L !== null ? null : d(y, p, v, k, null);
      Zt(y, v);
    }
    return null;
  }
  function A(y, p, v, k, L) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (y = y.get(v) || null), c(p, y, "" + k, L);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case zt:
          return (y = y.get(k.key === null ? v : k.key) || null), m(p, y, k, L);
        case sr:
          return (y = y.get(k.key === null ? v : k.key) || null), h(p, y, k, L);
        case Cn:
          var _ = k._init;
          return A(y, p, v, _(k._payload), L);
      }
      if (Yr(k) || zr(k)) return (y = y.get(v) || null), d(p, y, k, L, null);
      Zt(p, k);
    }
    return null;
  }
  function P(y, p, v, k) {
    for (
      var L = null, _ = null, G = p, N = (p = 0), K = null;
      G !== null && N < v.length;
      N++
    ) {
      G.index > N ? ((K = G), (G = null)) : (K = G.sibling);
      var O = b(y, G, v[N], k);
      if (O === null) {
        G === null && (G = K);
        break;
      }
      e && G && O.alternate === null && n(y, G),
        (p = o(O, p, N)),
        _ === null ? (L = O) : (_.sibling = O),
        (_ = O),
        (G = K);
    }
    if (N === v.length) return r(y, G), Z && Wn(y, N), L;
    if (G === null) {
      for (; N < v.length; N++)
        (G = f(y, v[N], k)),
          G !== null &&
            ((p = o(G, p, N)), _ === null ? (L = G) : (_.sibling = G), (_ = G));
      return Z && Wn(y, N), L;
    }
    for (G = t(y, G); N < v.length; N++)
      (K = A(G, y, N, v[N], k)),
        K !== null &&
          (e && K.alternate !== null && G.delete(K.key === null ? N : K.key),
          (p = o(K, p, N)),
          _ === null ? (L = K) : (_.sibling = K),
          (_ = K));
    return (
      e &&
        G.forEach(function (U) {
          return n(y, U);
        }),
      Z && Wn(y, N),
      L
    );
  }
  function I(y, p, v, k) {
    var L = zr(v);
    if (typeof L != "function") throw Error(R(150));
    if (((v = L.call(v)), v == null)) throw Error(R(151));
    for (
      var _ = (L = null), G = p, N = (p = 0), K = null, O = v.next();
      G !== null && !O.done;
      N++, O = v.next()
    ) {
      G.index > N ? ((K = G), (G = null)) : (K = G.sibling);
      var U = b(y, G, O.value, k);
      if (U === null) {
        G === null && (G = K);
        break;
      }
      e && G && U.alternate === null && n(y, G),
        (p = o(U, p, N)),
        _ === null ? (L = U) : (_.sibling = U),
        (_ = U),
        (G = K);
    }
    if (O.done) return r(y, G), Z && Wn(y, N), L;
    if (G === null) {
      for (; !O.done; N++, O = v.next())
        (O = f(y, O.value, k)),
          O !== null &&
            ((p = o(O, p, N)), _ === null ? (L = O) : (_.sibling = O), (_ = O));
      return Z && Wn(y, N), L;
    }
    for (G = t(y, G); !O.done; N++, O = v.next())
      (O = A(G, y, N, O.value, k)),
        O !== null &&
          (e && O.alternate !== null && G.delete(O.key === null ? N : O.key),
          (p = o(O, p, N)),
          _ === null ? (L = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        G.forEach(function (i) {
          return n(y, i);
        }),
      Z && Wn(y, N),
      L
    );
  }
  function B(y, p, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === ur &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case zt:
          e: {
            for (var L = v.key, _ = p; _ !== null; ) {
              if (_.key === L) {
                if (((L = v.type), L === ur)) {
                  if (_.tag === 7) {
                    r(y, _.sibling),
                      (p = a(_, v.props.children)),
                      (p.return = y),
                      (y = p);
                    break e;
                  }
                } else if (
                  _.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Cn &&
                    Ws(L) === _.type)
                ) {
                  r(y, _.sibling),
                    (p = a(_, v.props)),
                    (p.ref = jr(y, _, v)),
                    (p.return = y),
                    (y = p);
                  break e;
                }
                r(y, _);
                break;
              } else n(y, _);
              _ = _.sibling;
            }
            v.type === ur
              ? ((p = Zn(v.props.children, y.mode, k, v.key)),
                (p.return = y),
                (y = p))
              : ((k = ha(v.type, v.key, v.props, null, y.mode, k)),
                (k.ref = jr(y, p, v)),
                (k.return = y),
                (y = k));
          }
          return l(y);
        case sr:
          e: {
            for (_ = v.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  r(y, p.sibling),
                    (p = a(p, v.children || [])),
                    (p.return = y),
                    (y = p);
                  break e;
                } else {
                  r(y, p);
                  break;
                }
              else n(y, p);
              p = p.sibling;
            }
            (p = Ui(v, y.mode, k)), (p.return = y), (y = p);
          }
          return l(y);
        case Cn:
          return (_ = v._init), B(y, p, _(v._payload), k);
      }
      if (Yr(v)) return P(y, p, v, k);
      if (zr(v)) return I(y, p, v, k);
      Zt(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (r(y, p.sibling), (p = a(p, v)), (p.return = y), (y = p))
          : (r(y, p), (p = Hi(v, y.mode, k)), (p.return = y), (y = p)),
        l(y))
      : r(y, p);
  }
  return B;
}
var Ir = Xc(!0),
  ed = Xc(!1),
  Dt = {},
  an = On(Dt),
  Ct = On(Dt),
  bt = On(Dt);
function Yn(e) {
  if (e === Dt) throw Error(R(174));
  return e;
}
function Pl(e, n) {
  switch ((J(bt, n), J(Ct, e), J(an, Dt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : io(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = io(n, e));
  }
  $(an), J(an, n);
}
function xr() {
  $(an), $(Ct), $(bt);
}
function nd(e) {
  Yn(bt.current);
  var n = Yn(an.current),
    r = io(n, e.type);
  n !== r && (J(Ct, e), J(an, r));
}
function El(e) {
  Ct.current === e && ($(an), $(Ct));
}
var q = On(0);
function Ba(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var _i = [];
function Il() {
  for (var e = 0; e < _i.length; e++)
    _i[e]._workInProgressVersionPrimary = null;
  _i.length = 0;
}
var ua = vn.ReactCurrentDispatcher,
  Ni = vn.ReactCurrentBatchConfig,
  Xn = 0,
  X = null,
  oe = null,
  ue = null,
  Ra = !1,
  at = !1,
  St = 0,
  Mh = 0;
function ge() {
  throw Error(R(321));
}
function xl(e, n) {
  if (n === null) return !1;
  for (var r = 0; r < n.length && r < e.length; r++)
    if (!Xe(e[r], n[r])) return !1;
  return !0;
}
function Bl(e, n, r, t, a, o) {
  if (
    ((Xn = o),
    (X = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (ua.current = e === null || e.memoizedState === null ? Ph : Eh),
    (e = r(t, a)),
    at)
  ) {
    o = 0;
    do {
      if (((at = !1), (St = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (ue = oe = null),
        (n.updateQueue = null),
        (ua.current = Ih),
        (e = r(t, a));
    } while (at);
  }
  if (
    ((ua.current = La),
    (n = oe !== null && oe.next !== null),
    (Xn = 0),
    (ue = oe = X = null),
    (Ra = !1),
    n)
  )
    throw Error(R(300));
  return e;
}
function Rl() {
  var e = St !== 0;
  return (St = 0), e;
}
function nn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ve() {
  if (oe === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var n = ue === null ? X.memoizedState : ue.next;
  if (n !== null) (ue = n), (oe = e);
  else {
    if (e === null) throw Error(R(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function At(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Gi(e) {
  var n = Ve(),
    r = n.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var t = oe,
    a = t.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (a !== null) {
      var l = a.next;
      (a.next = o.next), (o.next = l);
    }
    (t.baseQueue = a = o), (r.pending = null);
  }
  if (a !== null) {
    (o = a.next), (t = t.baseState);
    var c = (l = null),
      m = null,
      h = o;
    do {
      var d = h.lane;
      if ((Xn & d) === d)
        m !== null &&
          (m = m.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (t = h.hasEagerState ? h.eagerState : e(t, h.action));
      else {
        var f = {
          lane: d,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        m === null ? ((c = m = f), (l = t)) : (m = m.next = f),
          (X.lanes |= d),
          (er |= d);
      }
      h = h.next;
    } while (h !== null && h !== o);
    m === null ? (l = t) : (m.next = c),
      Xe(t, n.memoizedState) || (we = !0),
      (n.memoizedState = t),
      (n.baseState = l),
      (n.baseQueue = m),
      (r.lastRenderedState = t);
  }
  if (((e = r.interleaved), e !== null)) {
    a = e;
    do (o = a.lane), (X.lanes |= o), (er |= o), (a = a.next);
    while (a !== e);
  } else a === null && (r.lanes = 0);
  return [n.memoizedState, r.dispatch];
}
function Fi(e) {
  var n = Ve(),
    r = n.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var t = r.dispatch,
    a = r.pending,
    o = n.memoizedState;
  if (a !== null) {
    r.pending = null;
    var l = (a = a.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== a);
    Xe(o, n.memoizedState) || (we = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, t];
}
function rd() {}
function td(e, n) {
  var r = X,
    t = Ve(),
    a = n(),
    o = !Xe(t.memoizedState, a);
  if (
    (o && ((t.memoizedState = a), (we = !0)),
    (t = t.queue),
    Ll(od.bind(null, r, t, e), [e]),
    t.getSnapshot !== n || o || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Mt(9, id.bind(null, r, t, a, n), void 0, null),
      ce === null)
    )
      throw Error(R(349));
    Xn & 30 || ad(r, n, a);
  }
  return a;
}
function ad(e, n, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: r }),
    (n = X.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (X.updateQueue = n),
        (n.stores = [e]))
      : ((r = n.stores), r === null ? (n.stores = [e]) : r.push(e));
}
function id(e, n, r, t) {
  (n.value = r), (n.getSnapshot = t), ld(n) && sd(e);
}
function od(e, n, r) {
  return r(function () {
    ld(n) && sd(e);
  });
}
function ld(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var r = n();
    return !Xe(e, r);
  } catch {
    return !0;
  }
}
function sd(e) {
  var n = hn(e, 1);
  n !== null && qe(n, e, 1, -1);
}
function js(e) {
  var n = nn();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: At,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Th.bind(null, X, e)),
    [n.memoizedState, e]
  );
}
function Mt(e, n, r, t) {
  return (
    (e = { tag: e, create: n, destroy: r, deps: t, next: null }),
    (n = X.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (X.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((r = n.lastEffect),
        r === null
          ? (n.lastEffect = e.next = e)
          : ((t = r.next), (r.next = e), (e.next = t), (n.lastEffect = e))),
    e
  );
}
function ud() {
  return Ve().memoizedState;
}
function ca(e, n, r, t) {
  var a = nn();
  (X.flags |= e),
    (a.memoizedState = Mt(1 | n, r, void 0, t === void 0 ? null : t));
}
function ni(e, n, r, t) {
  var a = Ve();
  t = t === void 0 ? null : t;
  var o = void 0;
  if (oe !== null) {
    var l = oe.memoizedState;
    if (((o = l.destroy), t !== null && xl(t, l.deps))) {
      a.memoizedState = Mt(n, r, o, t);
      return;
    }
  }
  (X.flags |= e), (a.memoizedState = Mt(1 | n, r, o, t));
}
function Vs(e, n) {
  return ca(8390656, 8, e, n);
}
function Ll(e, n) {
  return ni(2048, 8, e, n);
}
function cd(e, n) {
  return ni(4, 2, e, n);
}
function dd(e, n) {
  return ni(4, 4, e, n);
}
function md(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function fd(e, n, r) {
  return (
    (r = r != null ? r.concat([e]) : null), ni(4, 4, md.bind(null, n, e), r)
  );
}
function Dl() {}
function hd(e, n) {
  var r = Ve();
  n = n === void 0 ? null : n;
  var t = r.memoizedState;
  return t !== null && n !== null && xl(n, t[1])
    ? t[0]
    : ((r.memoizedState = [e, n]), e);
}
function pd(e, n) {
  var r = Ve();
  n = n === void 0 ? null : n;
  var t = r.memoizedState;
  return t !== null && n !== null && xl(n, t[1])
    ? t[0]
    : ((e = e()), (r.memoizedState = [e, n]), e);
}
function gd(e, n, r) {
  return Xn & 21
    ? (Xe(r, n) || ((r = Cc()), (X.lanes |= r), (er |= r), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = r));
}
function kh(e, n) {
  var r = V;
  (V = r !== 0 && 4 > r ? r : 4), e(!0);
  var t = Ni.transition;
  Ni.transition = {};
  try {
    e(!1), n();
  } finally {
    (V = r), (Ni.transition = t);
  }
}
function vd() {
  return Ve().memoizedState;
}
function wh(e, n, r) {
  var t = Rn(e);
  if (
    ((r = {
      lane: t,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yd(e))
  )
    Cd(n, r);
  else if (((r = $c(e, n, r, t)), r !== null)) {
    var a = Se();
    qe(r, e, t, a), bd(r, n, t);
  }
}
function Th(e, n, r) {
  var t = Rn(e),
    a = { lane: t, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (yd(e)) Cd(n, a);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var l = n.lastRenderedState,
          c = o(l, r);
        if (((a.hasEagerState = !0), (a.eagerState = c), Xe(c, l))) {
          var m = n.interleaved;
          m === null
            ? ((a.next = a), wl(n))
            : ((a.next = m.next), (m.next = a)),
            (n.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (r = $c(e, n, a, t)),
      r !== null && ((a = Se()), qe(r, e, t, a), bd(r, n, t));
  }
}
function yd(e) {
  var n = e.alternate;
  return e === X || (n !== null && n === X);
}
function Cd(e, n) {
  at = Ra = !0;
  var r = e.pending;
  r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
    (e.pending = n);
}
function bd(e, n, r) {
  if (r & 4194240) {
    var t = n.lanes;
    (t &= e.pendingLanes), (r |= t), (n.lanes = r), dl(e, r);
  }
}
var La = {
    readContext: je,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Ph = {
    readContext: je,
    useCallback: function (e, n) {
      return (nn().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: je,
    useEffect: Vs,
    useImperativeHandle: function (e, n, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ca(4194308, 4, md.bind(null, n, e), r)
      );
    },
    useLayoutEffect: function (e, n) {
      return ca(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return ca(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var r = nn();
      return (
        (n = n === void 0 ? null : n), (e = e()), (r.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, r) {
      var t = nn();
      return (
        (n = r !== void 0 ? r(n) : n),
        (t.memoizedState = t.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (t.queue = e),
        (e = e.dispatch = wh.bind(null, X, e)),
        [t.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = nn();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: js,
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      return (nn().memoizedState = e);
    },
    useTransition: function () {
      var e = js(!1),
        n = e[0];
      return (e = kh.bind(null, e[1])), (nn().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, r) {
      var t = X,
        a = nn();
      if (Z) {
        if (r === void 0) throw Error(R(407));
        r = r();
      } else {
        if (((r = n()), ce === null)) throw Error(R(349));
        Xn & 30 || ad(t, n, r);
      }
      a.memoizedState = r;
      var o = { value: r, getSnapshot: n };
      return (
        (a.queue = o),
        Vs(od.bind(null, t, o, e), [e]),
        (t.flags |= 2048),
        Mt(9, id.bind(null, t, o, r, n), void 0, null),
        r
      );
    },
    useId: function () {
      var e = nn(),
        n = ce.identifierPrefix;
      if (Z) {
        var r = un,
          t = sn;
        (r = (t & ~(1 << (32 - Qe(t) - 1))).toString(32) + r),
          (n = ":" + n + "R" + r),
          (r = St++),
          0 < r && (n += "H" + r.toString(32)),
          (n += ":");
      } else (r = Mh++), (n = ":" + n + "r" + r.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Eh = {
    readContext: je,
    useCallback: hd,
    useContext: je,
    useEffect: Ll,
    useImperativeHandle: fd,
    useInsertionEffect: cd,
    useLayoutEffect: dd,
    useMemo: pd,
    useReducer: Gi,
    useRef: ud,
    useState: function () {
      return Gi(At);
    },
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      var n = Ve();
      return gd(n, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Gi(At)[0],
        n = Ve().memoizedState;
      return [e, n];
    },
    useMutableSource: rd,
    useSyncExternalStore: td,
    useId: vd,
    unstable_isNewReconciler: !1,
  },
  Ih = {
    readContext: je,
    useCallback: hd,
    useContext: je,
    useEffect: Ll,
    useImperativeHandle: fd,
    useInsertionEffect: cd,
    useLayoutEffect: dd,
    useMemo: pd,
    useReducer: Fi,
    useRef: ud,
    useState: function () {
      return Fi(At);
    },
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      var n = Ve();
      return oe === null ? (n.memoizedState = e) : gd(n, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Fi(At)[0],
        n = Ve().memoizedState;
      return [e, n];
    },
    useMutableSource: rd,
    useSyncExternalStore: td,
    useId: vd,
    unstable_isNewReconciler: !1,
  };
function Br(e, n) {
  try {
    var r = "",
      t = n;
    do (r += rf(t)), (t = t.return);
    while (t);
    var a = r;
  } catch (o) {
    a =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: a, digest: null };
}
function zi(e, n, r) {
  return { value: e, source: null, stack: r ?? null, digest: n ?? null };
}
function Io(e, n) {
  try {
    console.error(n.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var xh = typeof WeakMap == "function" ? WeakMap : Map;
function Sd(e, n, r) {
  (r = dn(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var t = n.value;
  return (
    (r.callback = function () {
      _a || ((_a = !0), (zo = t)), Io(e, n);
    }),
    r
  );
}
function Ad(e, n, r) {
  (r = dn(-1, r)), (r.tag = 3);
  var t = e.type.getDerivedStateFromError;
  if (typeof t == "function") {
    var a = n.value;
    (r.payload = function () {
      return t(a);
    }),
      (r.callback = function () {
        Io(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        Io(e, n),
          typeof t != "function" &&
            (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
        var l = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
function Ks(e, n, r) {
  var t = e.pingCache;
  if (t === null) {
    t = e.pingCache = new xh();
    var a = new Set();
    t.set(n, a);
  } else (a = t.get(n)), a === void 0 && ((a = new Set()), t.set(n, a));
  a.has(r) || (a.add(r), (e = jh.bind(null, e, n, r)), n.then(e, e));
}
function Js(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ys(e, n, r, t, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((n = dn(-1, 1)), (n.tag = 2), xn(r, n, 1))),
          (r.lanes |= 1)),
      e);
}
var Bh = vn.ReactCurrentOwner,
  we = !1;
function be(e, n, r, t) {
  n.child = e === null ? ed(n, null, r, t) : Ir(n, e.child, r, t);
}
function $s(e, n, r, t, a) {
  r = r.render;
  var o = n.ref;
  return (
    kr(n, a),
    (t = Bl(e, n, r, t, o, a)),
    (r = Rl()),
    e !== null && !we
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~a),
        pn(e, n, a))
      : (Z && r && Cl(n), (n.flags |= 1), be(e, n, t, a), n.child)
  );
}
function Zs(e, n, r, t, a) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" &&
      !Ul(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Md(e, n, o, t, a))
      : ((e = ha(r.type, null, t, n, n.mode, a)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & a))) {
    var l = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : pt), r(l, t) && e.ref === n.ref)
    )
      return pn(e, n, a);
  }
  return (
    (n.flags |= 1),
    (e = Ln(o, t)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Md(e, n, r, t, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (pt(o, t) && e.ref === n.ref)
      if (((we = !1), (n.pendingProps = t = o), (e.lanes & a) !== 0))
        e.flags & 131072 && (we = !0);
      else return (n.lanes = e.lanes), pn(e, n, a);
  }
  return xo(e, n, r, t, a);
}
function kd(e, n, r) {
  var t = n.pendingProps,
    a = t.children,
    o = e !== null ? e.memoizedState : null;
  if (t.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(Cr, Be),
        (Be |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          J(Cr, Be),
          (Be |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (t = o !== null ? o.baseLanes : r),
        J(Cr, Be),
        (Be |= t);
    }
  else
    o !== null ? ((t = o.baseLanes | r), (n.memoizedState = null)) : (t = r),
      J(Cr, Be),
      (Be |= t);
  return be(e, n, a, r), n.child;
}
function wd(e, n) {
  var r = n.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function xo(e, n, r, t, a) {
  var o = Pe(r) ? Qn : Ce.current;
  return (
    (o = Pr(n, o)),
    kr(n, a),
    (r = Bl(e, n, r, t, o, a)),
    (t = Rl()),
    e !== null && !we
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~a),
        pn(e, n, a))
      : (Z && t && Cl(n), (n.flags |= 1), be(e, n, r, a), n.child)
  );
}
function Qs(e, n, r, t, a) {
  if (Pe(r)) {
    var o = !0;
    wa(n);
  } else o = !1;
  if ((kr(n, a), n.stateNode === null))
    da(e, n), qc(n, r, t), Eo(n, r, t, a), (t = !0);
  else if (e === null) {
    var l = n.stateNode,
      c = n.memoizedProps;
    l.props = c;
    var m = l.context,
      h = r.contextType;
    typeof h == "object" && h !== null
      ? (h = je(h))
      : ((h = Pe(r) ? Qn : Ce.current), (h = Pr(n, h)));
    var d = r.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((c !== t || m !== h) && Us(n, l, t, h)),
      (bn = !1);
    var b = n.memoizedState;
    (l.state = b),
      xa(n, t, l, a),
      (m = n.memoizedState),
      c !== t || b !== m || Te.current || bn
        ? (typeof d == "function" && (Po(n, r, d, t), (m = n.memoizedState)),
          (c = bn || Hs(n, r, c, t, b, m, h))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = t),
              (n.memoizedState = m)),
          (l.props = t),
          (l.state = m),
          (l.context = h),
          (t = c))
        : (typeof l.componentDidMount == "function" && (n.flags |= 4194308),
          (t = !1));
  } else {
    (l = n.stateNode),
      Zc(e, n),
      (c = n.memoizedProps),
      (h = n.type === n.elementType ? c : Je(n.type, c)),
      (l.props = h),
      (f = n.pendingProps),
      (b = l.context),
      (m = r.contextType),
      typeof m == "object" && m !== null
        ? (m = je(m))
        : ((m = Pe(r) ? Qn : Ce.current), (m = Pr(n, m)));
    var A = r.getDerivedStateFromProps;
    (d =
      typeof A == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((c !== f || b !== m) && Us(n, l, t, m)),
      (bn = !1),
      (b = n.memoizedState),
      (l.state = b),
      xa(n, t, l, a);
    var P = n.memoizedState;
    c !== f || b !== P || Te.current || bn
      ? (typeof A == "function" && (Po(n, r, A, t), (P = n.memoizedState)),
        (h = bn || Hs(n, r, h, t, b, P, m) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(t, P, m),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(t, P, m)),
            typeof l.componentDidUpdate == "function" && (n.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (c === e.memoizedProps && b === e.memoizedState) ||
              (n.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && b === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = t),
            (n.memoizedState = P)),
        (l.props = t),
        (l.state = P),
        (l.context = m),
        (t = h))
      : (typeof l.componentDidUpdate != "function" ||
          (c === e.memoizedProps && b === e.memoizedState) ||
          (n.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && b === e.memoizedState) ||
          (n.flags |= 1024),
        (t = !1));
  }
  return Bo(e, n, r, t, o, a);
}
function Bo(e, n, r, t, a, o) {
  wd(e, n);
  var l = (n.flags & 128) !== 0;
  if (!t && !l) return a && Ns(n, r, !1), pn(e, n, o);
  (t = n.stateNode), (Bh.current = n);
  var c =
    l && typeof r.getDerivedStateFromError != "function" ? null : t.render();
  return (
    (n.flags |= 1),
    e !== null && l
      ? ((n.child = Ir(n, e.child, null, o)), (n.child = Ir(n, null, c, o)))
      : be(e, n, c, o),
    (n.memoizedState = t.state),
    a && Ns(n, r, !0),
    n.child
  );
}
function Td(e) {
  var n = e.stateNode;
  n.pendingContext
    ? _s(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && _s(e, n.context, !1),
    Pl(e, n.containerInfo);
}
function qs(e, n, r, t, a) {
  return Er(), Sl(a), (n.flags |= 256), be(e, n, r, t), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pd(e, n, r) {
  var t = n.pendingProps,
    a = q.current,
    o = !1,
    l = (n.flags & 128) !== 0,
    c;
  if (
    ((c = l) ||
      (c = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    c
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    J(q, a & 1),
    e === null)
  )
    return (
      wo(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((l = t.children),
          (e = t.fallback),
          o
            ? ((t = n.mode),
              (o = n.child),
              (l = { mode: "hidden", children: l }),
              !(t & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = ai(l, t, 0, null)),
              (e = Zn(e, t, r, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Lo(r)),
              (n.memoizedState = Ro),
              e)
            : _l(n, l))
    );
  if (((a = e.memoizedState), a !== null && ((c = a.dehydrated), c !== null)))
    return Rh(e, n, l, t, c, a, r);
  if (o) {
    (o = t.fallback), (l = n.mode), (a = e.child), (c = a.sibling);
    var m = { mode: "hidden", children: t.children };
    return (
      !(l & 1) && n.child !== a
        ? ((t = n.child),
          (t.childLanes = 0),
          (t.pendingProps = m),
          (n.deletions = null))
        : ((t = Ln(a, m)), (t.subtreeFlags = a.subtreeFlags & 14680064)),
      c !== null ? (o = Ln(c, o)) : ((o = Zn(o, l, r, null)), (o.flags |= 2)),
      (o.return = n),
      (t.return = n),
      (t.sibling = o),
      (n.child = t),
      (t = o),
      (o = n.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Lo(r)
          : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~r),
      (n.memoizedState = Ro),
      t
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (t = Ln(o, { mode: "visible", children: t.children })),
    !(n.mode & 1) && (t.lanes = r),
    (t.return = n),
    (t.sibling = null),
    e !== null &&
      ((r = n.deletions),
      r === null ? ((n.deletions = [e]), (n.flags |= 16)) : r.push(e)),
    (n.child = t),
    (n.memoizedState = null),
    t
  );
}
function _l(e, n) {
  return (
    (n = ai({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Qt(e, n, r, t) {
  return (
    t !== null && Sl(t),
    Ir(n, e.child, null, r),
    (e = _l(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Rh(e, n, r, t, a, o, l) {
  if (r)
    return n.flags & 256
      ? ((n.flags &= -257), (t = zi(Error(R(422)))), Qt(e, n, l, t))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = t.fallback),
        (a = n.mode),
        (t = ai({ mode: "visible", children: t.children }, a, 0, null)),
        (o = Zn(o, a, l, null)),
        (o.flags |= 2),
        (t.return = n),
        (o.return = n),
        (t.sibling = o),
        (n.child = t),
        n.mode & 1 && Ir(n, e.child, null, l),
        (n.child.memoizedState = Lo(l)),
        (n.memoizedState = Ro),
        o);
  if (!(n.mode & 1)) return Qt(e, n, l, null);
  if (a.data === "$!") {
    if (((t = a.nextSibling && a.nextSibling.dataset), t)) var c = t.dgst;
    return (t = c), (o = Error(R(419))), (t = zi(o, t, void 0)), Qt(e, n, l, t);
  }
  if (((c = (l & e.childLanes) !== 0), we || c)) {
    if (((t = ce), t !== null)) {
      switch (l & -l) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (t.suspendedLanes | l) ? 0 : a),
        a !== 0 &&
          a !== o.retryLane &&
          ((o.retryLane = a), hn(e, a), qe(t, e, a, -1));
    }
    return Hl(), (t = zi(Error(R(421)))), Qt(e, n, l, t);
  }
  return a.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Vh.bind(null, e)),
      (a._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (Re = In(a.nextSibling)),
      (De = n),
      (Z = !0),
      ($e = null),
      e !== null &&
        ((Oe[He++] = sn),
        (Oe[He++] = un),
        (Oe[He++] = qn),
        (sn = e.id),
        (un = e.overflow),
        (qn = n)),
      (n = _l(n, t.children)),
      (n.flags |= 4096),
      n);
}
function Xs(e, n, r) {
  e.lanes |= n;
  var t = e.alternate;
  t !== null && (t.lanes |= n), To(e.return, n, r);
}
function Oi(e, n, r, t, a) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: t,
        tail: r,
        tailMode: a,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = t),
      (o.tail = r),
      (o.tailMode = a));
}
function Ed(e, n, r) {
  var t = n.pendingProps,
    a = t.revealOrder,
    o = t.tail;
  if ((be(e, n, t.children, r), (t = q.current), t & 2))
    (t = (t & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, r, n);
        else if (e.tag === 19) Xs(e, r, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    t &= 1;
  }
  if ((J(q, t), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (r = n.child, a = null; r !== null; )
          (e = r.alternate),
            e !== null && Ba(e) === null && (a = r),
            (r = r.sibling);
        (r = a),
          r === null
            ? ((a = n.child), (n.child = null))
            : ((a = r.sibling), (r.sibling = null)),
          Oi(n, !1, a, r, o);
        break;
      case "backwards":
        for (r = null, a = n.child, n.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Ba(e) === null)) {
            n.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = r), (r = a), (a = e);
        }
        Oi(n, !0, r, null, o);
        break;
      case "together":
        Oi(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function da(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function pn(e, n, r) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (er |= n.lanes),
    !(r & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(R(153));
  if (n.child !== null) {
    for (
      e = n.child, r = Ln(e, e.pendingProps), n.child = r, r.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Ln(e, e.pendingProps)), (r.return = n);
    r.sibling = null;
  }
  return n.child;
}
function Lh(e, n, r) {
  switch (n.tag) {
    case 3:
      Td(n), Er();
      break;
    case 5:
      nd(n);
      break;
    case 1:
      Pe(n.type) && wa(n);
      break;
    case 4:
      Pl(n, n.stateNode.containerInfo);
      break;
    case 10:
      var t = n.type._context,
        a = n.memoizedProps.value;
      J(Ea, t._currentValue), (t._currentValue = a);
      break;
    case 13:
      if (((t = n.memoizedState), t !== null))
        return t.dehydrated !== null
          ? (J(q, q.current & 1), (n.flags |= 128), null)
          : r & n.child.childLanes
          ? Pd(e, n, r)
          : (J(q, q.current & 1),
            (e = pn(e, n, r)),
            e !== null ? e.sibling : null);
      J(q, q.current & 1);
      break;
    case 19:
      if (((t = (r & n.childLanes) !== 0), e.flags & 128)) {
        if (t) return Ed(e, n, r);
        n.flags |= 128;
      }
      if (
        ((a = n.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        J(q, q.current),
        t)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), kd(e, n, r);
  }
  return pn(e, n, r);
}
var Id, Do, xd, Bd;
Id = function (e, n) {
  for (var r = n.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === n) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === n) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Do = function () {};
xd = function (e, n, r, t) {
  var a = e.memoizedProps;
  if (a !== t) {
    (e = n.stateNode), Yn(an.current);
    var o = null;
    switch (r) {
      case "input":
        (a = no(e, a)), (t = no(e, t)), (o = []);
        break;
      case "select":
        (a = ee({}, a, { value: void 0 })),
          (t = ee({}, t, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (a = ao(e, a)), (t = ao(e, t)), (o = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof t.onClick == "function" &&
          (e.onclick = Ma);
    }
    oo(r, t);
    var l;
    r = null;
    for (h in a)
      if (!t.hasOwnProperty(h) && a.hasOwnProperty(h) && a[h] != null)
        if (h === "style") {
          var c = a[h];
          for (l in c) c.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (st.hasOwnProperty(h)
              ? o || (o = [])
              : (o = o || []).push(h, null));
    for (h in t) {
      var m = t[h];
      if (
        ((c = a != null ? a[h] : void 0),
        t.hasOwnProperty(h) && m !== c && (m != null || c != null))
      )
        if (h === "style")
          if (c) {
            for (l in c)
              !c.hasOwnProperty(l) ||
                (m && m.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in m)
              m.hasOwnProperty(l) &&
                c[l] !== m[l] &&
                (r || (r = {}), (r[l] = m[l]));
          } else r || (o || (o = []), o.push(h, r)), (r = m);
        else
          h === "dangerouslySetInnerHTML"
            ? ((m = m ? m.__html : void 0),
              (c = c ? c.__html : void 0),
              m != null && c !== m && (o = o || []).push(h, m))
            : h === "children"
            ? (typeof m != "string" && typeof m != "number") ||
              (o = o || []).push(h, "" + m)
            : h !== "suppressContentEditableWarning" &&
              h !== "suppressHydrationWarning" &&
              (st.hasOwnProperty(h)
                ? (m != null && h === "onScroll" && Y("scroll", e),
                  o || c === m || (o = []))
                : (o = o || []).push(h, m));
    }
    r && (o = o || []).push("style", r);
    var h = o;
    (n.updateQueue = h) && (n.flags |= 4);
  }
};
Bd = function (e, n, r, t) {
  r !== t && (n.flags |= 4);
};
function Vr(e, n) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var t = null; r !== null; )
          r.alternate !== null && (t = r), (r = r.sibling);
        t === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (t.sibling = null);
    }
}
function ve(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    t = 0;
  if (n)
    for (var a = e.child; a !== null; )
      (r |= a.lanes | a.childLanes),
        (t |= a.subtreeFlags & 14680064),
        (t |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (r |= a.lanes | a.childLanes),
        (t |= a.subtreeFlags),
        (t |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= t), (e.childLanes = r), n;
}
function Dh(e, n, r) {
  var t = n.pendingProps;
  switch ((bl(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(n), null;
    case 1:
      return Pe(n.type) && ka(), ve(n), null;
    case 3:
      return (
        (t = n.stateNode),
        xr(),
        $(Te),
        $(Ce),
        Il(),
        t.pendingContext &&
          ((t.context = t.pendingContext), (t.pendingContext = null)),
        (e === null || e.child === null) &&
          ($t(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), $e !== null && (Uo($e), ($e = null)))),
        Do(e, n),
        ve(n),
        null
      );
    case 5:
      El(n);
      var a = Yn(bt.current);
      if (((r = n.type), e !== null && n.stateNode != null))
        xd(e, n, r, t, a),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!t) {
          if (n.stateNode === null) throw Error(R(166));
          return ve(n), null;
        }
        if (((e = Yn(an.current)), $t(n))) {
          (t = n.stateNode), (r = n.type);
          var o = n.memoizedProps;
          switch (((t[rn] = n), (t[yt] = o), (e = (n.mode & 1) !== 0), r)) {
            case "dialog":
              Y("cancel", t), Y("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", t);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Zr.length; a++) Y(Zr[a], t);
              break;
            case "source":
              Y("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", t), Y("load", t);
              break;
            case "details":
              Y("toggle", t);
              break;
            case "input":
              ss(t, o), Y("invalid", t);
              break;
            case "select":
              (t._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", t);
              break;
            case "textarea":
              cs(t, o), Y("invalid", t);
          }
          oo(r, o), (a = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var c = o[l];
              l === "children"
                ? typeof c == "string"
                  ? t.textContent !== c &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yt(t.textContent, c, e),
                    (a = ["children", c]))
                  : typeof c == "number" &&
                    t.textContent !== "" + c &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yt(t.textContent, c, e),
                    (a = ["children", "" + c]))
                : st.hasOwnProperty(l) &&
                  c != null &&
                  l === "onScroll" &&
                  Y("scroll", t);
            }
          switch (r) {
            case "input":
              Ot(t), us(t, o, !0);
              break;
            case "textarea":
              Ot(t), ds(t);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (t.onclick = Ma);
          }
          (t = a), (n.updateQueue = t), t !== null && (n.flags |= 4);
        } else {
          (l = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ac(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof t.is == "string"
                ? (e = l.createElement(r, { is: t.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    t.multiple
                      ? (l.multiple = !0)
                      : t.size && (l.size = t.size)))
              : (e = l.createElementNS(e, r)),
            (e[rn] = n),
            (e[yt] = t),
            Id(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((l = lo(r, t)), r)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (a = t);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (a = t);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Zr.length; a++) Y(Zr[a], e);
                a = t;
                break;
              case "source":
                Y("error", e), (a = t);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (a = t);
                break;
              case "details":
                Y("toggle", e), (a = t);
                break;
              case "input":
                ss(e, t), (a = no(e, t)), Y("invalid", e);
                break;
              case "option":
                a = t;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!t.multiple }),
                  (a = ee({}, t, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                cs(e, t), (a = ao(e, t)), Y("invalid", e);
                break;
              default:
                a = t;
            }
            oo(r, a), (c = a);
            for (o in c)
              if (c.hasOwnProperty(o)) {
                var m = c[o];
                o === "style"
                  ? lc(e, m)
                  : o === "dangerouslySetInnerHTML"
                  ? ((m = m ? m.__html : void 0), m != null && ic(e, m))
                  : o === "children"
                  ? typeof m == "string"
                    ? (r !== "textarea" || m !== "") && ut(e, m)
                    : typeof m == "number" && ut(e, "" + m)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (st.hasOwnProperty(o)
                      ? m != null && o === "onScroll" && Y("scroll", e)
                      : m != null && il(e, o, m, l));
              }
            switch (r) {
              case "input":
                Ot(e), us(e, t, !1);
                break;
              case "textarea":
                Ot(e), ds(e);
                break;
              case "option":
                t.value != null && e.setAttribute("value", "" + _n(t.value));
                break;
              case "select":
                (e.multiple = !!t.multiple),
                  (o = t.value),
                  o != null
                    ? br(e, !!t.multiple, o, !1)
                    : t.defaultValue != null &&
                      br(e, !!t.multiple, t.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ma);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!t.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
          }
          t && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ve(n), null;
    case 6:
      if (e && n.stateNode != null) Bd(e, n, e.memoizedProps, t);
      else {
        if (typeof t != "string" && n.stateNode === null) throw Error(R(166));
        if (((r = Yn(bt.current)), Yn(an.current), $t(n))) {
          if (
            ((t = n.stateNode),
            (r = n.memoizedProps),
            (t[rn] = n),
            (o = t.nodeValue !== r) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yt(t.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yt(t.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (t = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(t)),
            (t[rn] = n),
            (n.stateNode = t);
      }
      return ve(n), null;
    case 13:
      if (
        ($(q),
        (t = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Re !== null && n.mode & 1 && !(n.flags & 128))
          Yc(), Er(), (n.flags |= 98560), (o = !1);
        else if (((o = $t(n)), t !== null && t.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[rn] = n;
          } else
            Er(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ve(n), (o = !1);
        } else $e !== null && (Uo($e), ($e = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = r), n)
        : ((t = t !== null),
          t !== (e !== null && e.memoizedState !== null) &&
            t &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || q.current & 1 ? le === 0 && (le = 3) : Hl())),
          n.updateQueue !== null && (n.flags |= 4),
          ve(n),
          null);
    case 4:
      return (
        xr(), Do(e, n), e === null && gt(n.stateNode.containerInfo), ve(n), null
      );
    case 10:
      return kl(n.type._context), ve(n), null;
    case 17:
      return Pe(n.type) && ka(), ve(n), null;
    case 19:
      if (($(q), (o = n.memoizedState), o === null)) return ve(n), null;
      if (((t = (n.flags & 128) !== 0), (l = o.rendering), l === null))
        if (t) Vr(o, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((l = Ba(e)), l !== null)) {
                for (
                  n.flags |= 128,
                    Vr(o, !1),
                    t = l.updateQueue,
                    t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    t = r,
                    r = n.child;
                  r !== null;

                )
                  (o = r),
                    (e = t),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return J(q, (q.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            re() > Rr &&
            ((n.flags |= 128), (t = !0), Vr(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!t)
          if (((e = Ba(l)), e !== null)) {
            if (
              ((n.flags |= 128),
              (t = !0),
              (r = e.updateQueue),
              r !== null && ((n.updateQueue = r), (n.flags |= 4)),
              Vr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Z)
            )
              return ve(n), null;
          } else
            2 * re() - o.renderingStartTime > Rr &&
              r !== 1073741824 &&
              ((n.flags |= 128), (t = !0), Vr(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = n.child), (n.child = l))
          : ((r = o.last),
            r !== null ? (r.sibling = l) : (n.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = re()),
          (n.sibling = null),
          (r = q.current),
          J(q, t ? (r & 1) | 2 : r & 1),
          n)
        : (ve(n), null);
    case 22:
    case 23:
      return (
        Ol(),
        (t = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== t && (n.flags |= 8192),
        t && n.mode & 1
          ? Be & 1073741824 && (ve(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ve(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, n.tag));
}
function _h(e, n) {
  switch ((bl(n), n.tag)) {
    case 1:
      return (
        Pe(n.type) && ka(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        xr(),
        $(Te),
        $(Ce),
        Il(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return El(n), null;
    case 13:
      if (($(q), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(R(340));
        Er();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return $(q), null;
    case 4:
      return xr(), null;
    case 10:
      return kl(n.type._context), null;
    case 22:
    case 23:
      return Ol(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qt = !1,
  ye = !1,
  Nh = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function yr(e, n) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (t) {
        ne(e, n, t);
      }
    else r.current = null;
}
function _o(e, n, r) {
  try {
    r();
  } catch (t) {
    ne(e, n, t);
  }
}
var eu = !1;
function Gh(e, n) {
  if (((yo = ba), (e = _c()), yl(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var t = r.getSelection && r.getSelection();
        if (t && t.rangeCount !== 0) {
          r = t.anchorNode;
          var a = t.anchorOffset,
            o = t.focusNode;
          t = t.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            c = -1,
            m = -1,
            h = 0,
            d = 0,
            f = e,
            b = null;
          n: for (;;) {
            for (
              var A;
              f !== r || (a !== 0 && f.nodeType !== 3) || (c = l + a),
                f !== o || (t !== 0 && f.nodeType !== 3) || (m = l + t),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (A = f.firstChild) !== null;

            )
              (b = f), (f = A);
            for (;;) {
              if (f === e) break n;
              if (
                (b === r && ++h === a && (c = l),
                b === o && ++d === t && (m = l),
                (A = f.nextSibling) !== null)
              )
                break;
              (f = b), (b = f.parentNode);
            }
            f = A;
          }
          r = c === -1 || m === -1 ? null : { start: c, end: m };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Co = { focusedElem: e, selectionRange: r }, ba = !1, F = n; F !== null; )
    if (((n = F), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (F = e);
    else
      for (; F !== null; ) {
        n = F;
        try {
          var P = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var I = P.memoizedProps,
                    B = P.memoizedState,
                    y = n.stateNode,
                    p = y.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? I : Je(n.type, I),
                      B
                    );
                  y.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = n.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (k) {
          ne(n, n.return, k);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (F = e);
          break;
        }
        F = n.return;
      }
  return (P = eu), (eu = !1), P;
}
function it(e, n, r) {
  var t = n.updateQueue;
  if (((t = t !== null ? t.lastEffect : null), t !== null)) {
    var a = (t = t.next);
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        (a.destroy = void 0), o !== void 0 && _o(n, r, o);
      }
      a = a.next;
    } while (a !== t);
  }
}
function ri(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var r = (n = n.next);
    do {
      if ((r.tag & e) === e) {
        var t = r.create;
        r.destroy = t();
      }
      r = r.next;
    } while (r !== n);
  }
}
function No(e) {
  var n = e.ref;
  if (n !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Rd(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Rd(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[rn], delete n[yt], delete n[Ao], delete n[Ch], delete n[bh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ld(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function nu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ld(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, n, r) {
  var t = e.tag;
  if (t === 5 || t === 6)
    (e = e.stateNode),
      n
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, n)
          : r.insertBefore(e, n)
        : (r.nodeType === 8
            ? ((n = r.parentNode), n.insertBefore(e, r))
            : ((n = r), n.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || n.onclick !== null || (n.onclick = Ma));
  else if (t !== 4 && ((e = e.child), e !== null))
    for (Go(e, n, r), e = e.sibling; e !== null; ) Go(e, n, r), (e = e.sibling);
}
function Fo(e, n, r) {
  var t = e.tag;
  if (t === 5 || t === 6)
    (e = e.stateNode), n ? r.insertBefore(e, n) : r.appendChild(e);
  else if (t !== 4 && ((e = e.child), e !== null))
    for (Fo(e, n, r), e = e.sibling; e !== null; ) Fo(e, n, r), (e = e.sibling);
}
var fe = null,
  Ye = !1;
function yn(e, n, r) {
  for (r = r.child; r !== null; ) Dd(e, n, r), (r = r.sibling);
}
function Dd(e, n, r) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Ya, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ye || yr(r, n);
    case 6:
      var t = fe,
        a = Ye;
      (fe = null),
        yn(e, n, r),
        (fe = t),
        (Ye = a),
        fe !== null &&
          (Ye
            ? ((e = fe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : fe.removeChild(r.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ye
          ? ((e = fe),
            (r = r.stateNode),
            e.nodeType === 8
              ? Li(e.parentNode, r)
              : e.nodeType === 1 && Li(e, r),
            ft(e))
          : Li(fe, r.stateNode));
      break;
    case 4:
      (t = fe),
        (a = Ye),
        (fe = r.stateNode.containerInfo),
        (Ye = !0),
        yn(e, n, r),
        (fe = t),
        (Ye = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((t = r.updateQueue), t !== null && ((t = t.lastEffect), t !== null))
      ) {
        a = t = t.next;
        do {
          var o = a,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && _o(r, n, l),
            (a = a.next);
        } while (a !== t);
      }
      yn(e, n, r);
      break;
    case 1:
      if (
        !ye &&
        (yr(r, n),
        (t = r.stateNode),
        typeof t.componentWillUnmount == "function")
      )
        try {
          (t.props = r.memoizedProps),
            (t.state = r.memoizedState),
            t.componentWillUnmount();
        } catch (c) {
          ne(r, n, c);
        }
      yn(e, n, r);
      break;
    case 21:
      yn(e, n, r);
      break;
    case 22:
      r.mode & 1
        ? ((ye = (t = ye) || r.memoizedState !== null), yn(e, n, r), (ye = t))
        : yn(e, n, r);
      break;
    default:
      yn(e, n, r);
  }
}
function ru(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Nh()),
      n.forEach(function (t) {
        var a = Kh.bind(null, e, t);
        r.has(t) || (r.add(t), t.then(a, a));
      });
  }
}
function Ke(e, n) {
  var r = n.deletions;
  if (r !== null)
    for (var t = 0; t < r.length; t++) {
      var a = r[t];
      try {
        var o = e,
          l = n,
          c = l;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (fe = c.stateNode), (Ye = !1);
              break e;
            case 3:
              (fe = c.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (fe = c.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          c = c.return;
        }
        if (fe === null) throw Error(R(160));
        Dd(o, l, a), (fe = null), (Ye = !1);
        var m = a.alternate;
        m !== null && (m.return = null), (a.return = null);
      } catch (h) {
        ne(a, n, h);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) _d(n, e), (n = n.sibling);
}
function _d(e, n) {
  var r = e.alternate,
    t = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(n, e), en(e), t & 4)) {
        try {
          it(3, e, e.return), ri(3, e);
        } catch (I) {
          ne(e, e.return, I);
        }
        try {
          it(5, e, e.return);
        } catch (I) {
          ne(e, e.return, I);
        }
      }
      break;
    case 1:
      Ke(n, e), en(e), t & 512 && r !== null && yr(r, r.return);
      break;
    case 5:
      if (
        (Ke(n, e),
        en(e),
        t & 512 && r !== null && yr(r, r.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          ut(a, "");
        } catch (I) {
          ne(e, e.return, I);
        }
      }
      if (t & 4 && ((a = e.stateNode), a != null)) {
        var o = e.memoizedProps,
          l = r !== null ? r.memoizedProps : o,
          c = e.type,
          m = e.updateQueue;
        if (((e.updateQueue = null), m !== null))
          try {
            c === "input" && o.type === "radio" && o.name != null && rc(a, o),
              lo(c, l);
            var h = lo(c, o);
            for (l = 0; l < m.length; l += 2) {
              var d = m[l],
                f = m[l + 1];
              d === "style"
                ? lc(a, f)
                : d === "dangerouslySetInnerHTML"
                ? ic(a, f)
                : d === "children"
                ? ut(a, f)
                : il(a, d, f, h);
            }
            switch (c) {
              case "input":
                ro(a, o);
                break;
              case "textarea":
                tc(a, o);
                break;
              case "select":
                var b = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var A = o.value;
                A != null
                  ? br(a, !!o.multiple, A, !1)
                  : b !== !!o.multiple &&
                    (o.defaultValue != null
                      ? br(a, !!o.multiple, o.defaultValue, !0)
                      : br(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[yt] = o;
          } catch (I) {
            ne(e, e.return, I);
          }
      }
      break;
    case 6:
      if ((Ke(n, e), en(e), t & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (a = e.stateNode), (o = e.memoizedProps);
        try {
          a.nodeValue = o;
        } catch (I) {
          ne(e, e.return, I);
        }
      }
      break;
    case 3:
      if (
        (Ke(n, e), en(e), t & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          ft(n.containerInfo);
        } catch (I) {
          ne(e, e.return, I);
        }
      break;
    case 4:
      Ke(n, e), en(e);
      break;
    case 13:
      Ke(n, e),
        en(e),
        (a = e.child),
        a.flags & 8192 &&
          ((o = a.memoizedState !== null),
          (a.stateNode.isHidden = o),
          !o ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (Fl = re())),
        t & 4 && ru(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ye = (h = ye) || d), Ke(n, e), (ye = h)) : Ke(n, e),
        en(e),
        t & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (f = F = d; F !== null; ) {
              switch (((b = F), (A = b.child), b.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  it(4, b, b.return);
                  break;
                case 1:
                  yr(b, b.return);
                  var P = b.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    (t = b), (r = b.return);
                    try {
                      (n = t),
                        (P.props = n.memoizedProps),
                        (P.state = n.memoizedState),
                        P.componentWillUnmount();
                    } catch (I) {
                      ne(t, r, I);
                    }
                  }
                  break;
                case 5:
                  yr(b, b.return);
                  break;
                case 22:
                  if (b.memoizedState !== null) {
                    au(f);
                    continue;
                  }
              }
              A !== null ? ((A.return = b), (F = A)) : au(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (a = f.stateNode),
                  h
                    ? ((o = a.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((c = f.stateNode),
                      (m = f.memoizedProps.style),
                      (l =
                        m != null && m.hasOwnProperty("display")
                          ? m.display
                          : null),
                      (c.style.display = oc("display", l)));
              } catch (I) {
                ne(e, e.return, I);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = h ? "" : f.memoizedProps;
              } catch (I) {
                ne(e, e.return, I);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ke(n, e), en(e), t & 4 && ru(e);
      break;
    case 21:
      break;
    default:
      Ke(n, e), en(e);
  }
}
function en(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Ld(r)) {
            var t = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (t.tag) {
        case 5:
          var a = t.stateNode;
          t.flags & 32 && (ut(a, ""), (t.flags &= -33));
          var o = nu(e);
          Fo(e, o, a);
          break;
        case 3:
        case 4:
          var l = t.stateNode.containerInfo,
            c = nu(e);
          Go(e, c, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (m) {
      ne(e, e.return, m);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Fh(e, n, r) {
  (F = e), Nd(e);
}
function Nd(e, n, r) {
  for (var t = (e.mode & 1) !== 0; F !== null; ) {
    var a = F,
      o = a.child;
    if (a.tag === 22 && t) {
      var l = a.memoizedState !== null || qt;
      if (!l) {
        var c = a.alternate,
          m = (c !== null && c.memoizedState !== null) || ye;
        c = qt;
        var h = ye;
        if (((qt = l), (ye = m) && !h))
          for (F = a; F !== null; )
            (l = F),
              (m = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? iu(a)
                : m !== null
                ? ((m.return = l), (F = m))
                : iu(a);
        for (; o !== null; ) (F = o), Nd(o), (o = o.sibling);
        (F = a), (qt = c), (ye = h);
      }
      tu(e);
    } else
      a.subtreeFlags & 8772 && o !== null ? ((o.return = a), (F = o)) : tu(e);
  }
}
function tu(e) {
  for (; F !== null; ) {
    var n = F;
    if (n.flags & 8772) {
      var r = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ye || ri(5, n);
              break;
            case 1:
              var t = n.stateNode;
              if (n.flags & 4 && !ye)
                if (r === null) t.componentDidMount();
                else {
                  var a =
                    n.elementType === n.type
                      ? r.memoizedProps
                      : Je(n.type, r.memoizedProps);
                  t.componentDidUpdate(
                    a,
                    r.memoizedState,
                    t.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && Os(n, o, t);
              break;
            case 3:
              var l = n.updateQueue;
              if (l !== null) {
                if (((r = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      r = n.child.stateNode;
                      break;
                    case 1:
                      r = n.child.stateNode;
                  }
                Os(n, l, r);
              }
              break;
            case 5:
              var c = n.stateNode;
              if (r === null && n.flags & 4) {
                r = c;
                var m = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    m.autoFocus && r.focus();
                    break;
                  case "img":
                    m.src && (r.src = m.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var h = n.alternate;
                if (h !== null) {
                  var d = h.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && ft(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        ye || (n.flags & 512 && No(n));
      } catch (b) {
        ne(n, n.return, b);
      }
    }
    if (n === e) {
      F = null;
      break;
    }
    if (((r = n.sibling), r !== null)) {
      (r.return = n.return), (F = r);
      break;
    }
    F = n.return;
  }
}
function au(e) {
  for (; F !== null; ) {
    var n = F;
    if (n === e) {
      F = null;
      break;
    }
    var r = n.sibling;
    if (r !== null) {
      (r.return = n.return), (F = r);
      break;
    }
    F = n.return;
  }
}
function iu(e) {
  for (; F !== null; ) {
    var n = F;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var r = n.return;
          try {
            ri(4, n);
          } catch (m) {
            ne(n, r, m);
          }
          break;
        case 1:
          var t = n.stateNode;
          if (typeof t.componentDidMount == "function") {
            var a = n.return;
            try {
              t.componentDidMount();
            } catch (m) {
              ne(n, a, m);
            }
          }
          var o = n.return;
          try {
            No(n);
          } catch (m) {
            ne(n, o, m);
          }
          break;
        case 5:
          var l = n.return;
          try {
            No(n);
          } catch (m) {
            ne(n, l, m);
          }
      }
    } catch (m) {
      ne(n, n.return, m);
    }
    if (n === e) {
      F = null;
      break;
    }
    var c = n.sibling;
    if (c !== null) {
      (c.return = n.return), (F = c);
      break;
    }
    F = n.return;
  }
}
var zh = Math.ceil,
  Da = vn.ReactCurrentDispatcher,
  Nl = vn.ReactCurrentOwner,
  We = vn.ReactCurrentBatchConfig,
  j = 0,
  ce = null,
  ae = null,
  he = 0,
  Be = 0,
  Cr = On(0),
  le = 0,
  kt = null,
  er = 0,
  ti = 0,
  Gl = 0,
  ot = null,
  ke = null,
  Fl = 0,
  Rr = 1 / 0,
  on = null,
  _a = !1,
  zo = null,
  Bn = null,
  Xt = !1,
  kn = null,
  Na = 0,
  lt = 0,
  Oo = null,
  ma = -1,
  fa = 0;
function Se() {
  return j & 6 ? re() : ma !== -1 ? ma : (ma = re());
}
function Rn(e) {
  return e.mode & 1
    ? j & 2 && he !== 0
      ? he & -he
      : Ah.transition !== null
      ? (fa === 0 && (fa = Cc()), fa)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tc(e.type))),
        e)
    : 1;
}
function qe(e, n, r, t) {
  if (50 < lt) throw ((lt = 0), (Oo = null), Error(R(185)));
  Bt(e, r, t),
    (!(j & 2) || e !== ce) &&
      (e === ce && (!(j & 2) && (ti |= r), le === 4 && An(e, he)),
      Ee(e, t),
      r === 1 && j === 0 && !(n.mode & 1) && ((Rr = re() + 500), Xa && Hn()));
}
function Ee(e, n) {
  var r = e.callbackNode;
  Af(e, n);
  var t = Ca(e, e === ce ? he : 0);
  if (t === 0)
    r !== null && hs(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = t & -t), e.callbackPriority !== n)) {
    if ((r != null && hs(r), n === 1))
      e.tag === 0 ? Sh(ou.bind(null, e)) : Vc(ou.bind(null, e)),
        vh(function () {
          !(j & 6) && Hn();
        }),
        (r = null);
    else {
      switch (bc(t)) {
        case 1:
          r = cl;
          break;
        case 4:
          r = vc;
          break;
        case 16:
          r = ya;
          break;
        case 536870912:
          r = yc;
          break;
        default:
          r = ya;
      }
      r = jd(r, Gd.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = r);
  }
}
function Gd(e, n) {
  if (((ma = -1), (fa = 0), j & 6)) throw Error(R(327));
  var r = e.callbackNode;
  if (wr() && e.callbackNode !== r) return null;
  var t = Ca(e, e === ce ? he : 0);
  if (t === 0) return null;
  if (t & 30 || t & e.expiredLanes || n) n = Ga(e, t);
  else {
    n = t;
    var a = j;
    j |= 2;
    var o = zd();
    (ce !== e || he !== n) && ((on = null), (Rr = re() + 500), $n(e, n));
    do
      try {
        Uh();
        break;
      } catch (c) {
        Fd(e, c);
      }
    while (!0);
    Ml(),
      (Da.current = o),
      (j = a),
      ae !== null ? (n = 0) : ((ce = null), (he = 0), (n = le));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((a = fo(e)), a !== 0 && ((t = a), (n = Ho(e, a)))), n === 1)
    )
      throw ((r = kt), $n(e, 0), An(e, t), Ee(e, re()), r);
    if (n === 6) An(e, t);
    else {
      if (
        ((a = e.current.alternate),
        !(t & 30) &&
          !Oh(a) &&
          ((n = Ga(e, t)),
          n === 2 && ((o = fo(e)), o !== 0 && ((t = o), (n = Ho(e, o)))),
          n === 1))
      )
        throw ((r = kt), $n(e, 0), An(e, t), Ee(e, re()), r);
      switch (((e.finishedWork = a), (e.finishedLanes = t), n)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          jn(e, ke, on);
          break;
        case 3:
          if (
            (An(e, t), (t & 130023424) === t && ((n = Fl + 500 - re()), 10 < n))
          ) {
            if (Ca(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & t) !== t)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = So(jn.bind(null, e, ke, on), n);
            break;
          }
          jn(e, ke, on);
          break;
        case 4:
          if ((An(e, t), (t & 4194240) === t)) break;
          for (n = e.eventTimes, a = -1; 0 < t; ) {
            var l = 31 - Qe(t);
            (o = 1 << l), (l = n[l]), l > a && (a = l), (t &= ~o);
          }
          if (
            ((t = a),
            (t = re() - t),
            (t =
              (120 > t
                ? 120
                : 480 > t
                ? 480
                : 1080 > t
                ? 1080
                : 1920 > t
                ? 1920
                : 3e3 > t
                ? 3e3
                : 4320 > t
                ? 4320
                : 1960 * zh(t / 1960)) - t),
            10 < t)
          ) {
            e.timeoutHandle = So(jn.bind(null, e, ke, on), t);
            break;
          }
          jn(e, ke, on);
          break;
        case 5:
          jn(e, ke, on);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ee(e, re()), e.callbackNode === r ? Gd.bind(null, e) : null;
}
function Ho(e, n) {
  var r = ot;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, n).flags |= 256),
    (e = Ga(e, n)),
    e !== 2 && ((n = ke), (ke = r), n !== null && Uo(n)),
    e
  );
}
function Uo(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Oh(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var r = n.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var t = 0; t < r.length; t++) {
          var a = r[t],
            o = a.getSnapshot;
          a = a.value;
          try {
            if (!Xe(o(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
      (r.return = n), (n = r);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function An(e, n) {
  for (
    n &= ~Gl,
      n &= ~ti,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var r = 31 - Qe(n),
      t = 1 << r;
    (e[r] = -1), (n &= ~t);
  }
}
function ou(e) {
  if (j & 6) throw Error(R(327));
  wr();
  var n = Ca(e, 0);
  if (!(n & 1)) return Ee(e, re()), null;
  var r = Ga(e, n);
  if (e.tag !== 0 && r === 2) {
    var t = fo(e);
    t !== 0 && ((n = t), (r = Ho(e, t)));
  }
  if (r === 1) throw ((r = kt), $n(e, 0), An(e, n), Ee(e, re()), r);
  if (r === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    jn(e, ke, on),
    Ee(e, re()),
    null
  );
}
function zl(e, n) {
  var r = j;
  j |= 1;
  try {
    return e(n);
  } finally {
    (j = r), j === 0 && ((Rr = re() + 500), Xa && Hn());
  }
}
function nr(e) {
  kn !== null && kn.tag === 0 && !(j & 6) && wr();
  var n = j;
  j |= 1;
  var r = We.transition,
    t = V;
  try {
    if (((We.transition = null), (V = 1), e)) return e();
  } finally {
    (V = t), (We.transition = r), (j = n), !(j & 6) && Hn();
  }
}
function Ol() {
  (Be = Cr.current), $(Cr);
}
function $n(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), gh(r)), ae !== null))
    for (r = ae.return; r !== null; ) {
      var t = r;
      switch ((bl(t), t.tag)) {
        case 1:
          (t = t.type.childContextTypes), t != null && ka();
          break;
        case 3:
          xr(), $(Te), $(Ce), Il();
          break;
        case 5:
          El(t);
          break;
        case 4:
          xr();
          break;
        case 13:
          $(q);
          break;
        case 19:
          $(q);
          break;
        case 10:
          kl(t.type._context);
          break;
        case 22:
        case 23:
          Ol();
      }
      r = r.return;
    }
  if (
    ((ce = e),
    (ae = e = Ln(e.current, null)),
    (he = Be = n),
    (le = 0),
    (kt = null),
    (Gl = ti = er = 0),
    (ke = ot = null),
    Jn !== null)
  ) {
    for (n = 0; n < Jn.length; n++)
      if (((r = Jn[n]), (t = r.interleaved), t !== null)) {
        r.interleaved = null;
        var a = t.next,
          o = r.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = a), (t.next = l);
        }
        r.pending = t;
      }
    Jn = null;
  }
  return e;
}
function Fd(e, n) {
  do {
    var r = ae;
    try {
      if ((Ml(), (ua.current = La), Ra)) {
        for (var t = X.memoizedState; t !== null; ) {
          var a = t.queue;
          a !== null && (a.pending = null), (t = t.next);
        }
        Ra = !1;
      }
      if (
        ((Xn = 0),
        (ue = oe = X = null),
        (at = !1),
        (St = 0),
        (Nl.current = null),
        r === null || r.return === null)
      ) {
        (le = 1), (kt = n), (ae = null);
        break;
      }
      e: {
        var o = e,
          l = r.return,
          c = r,
          m = n;
        if (
          ((n = he),
          (c.flags |= 32768),
          m !== null && typeof m == "object" && typeof m.then == "function")
        ) {
          var h = m,
            d = c,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var b = d.alternate;
            b
              ? ((d.updateQueue = b.updateQueue),
                (d.memoizedState = b.memoizedState),
                (d.lanes = b.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var A = Js(l);
          if (A !== null) {
            (A.flags &= -257),
              Ys(A, l, c, o, n),
              A.mode & 1 && Ks(o, h, n),
              (n = A),
              (m = h);
            var P = n.updateQueue;
            if (P === null) {
              var I = new Set();
              I.add(m), (n.updateQueue = I);
            } else P.add(m);
            break e;
          } else {
            if (!(n & 1)) {
              Ks(o, h, n), Hl();
              break e;
            }
            m = Error(R(426));
          }
        } else if (Z && c.mode & 1) {
          var B = Js(l);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256),
              Ys(B, l, c, o, n),
              Sl(Br(m, c));
            break e;
          }
        }
        (o = m = Br(m, c)),
          le !== 4 && (le = 2),
          ot === null ? (ot = [o]) : ot.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var y = Sd(o, m, n);
              zs(o, y);
              break e;
            case 1:
              c = m;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Bn === null || !Bn.has(v))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var k = Ad(o, c, n);
                zs(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hd(r);
    } catch (L) {
      (n = L), ae === r && r !== null && (ae = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function zd() {
  var e = Da.current;
  return (Da.current = La), e === null ? La : e;
}
function Hl() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ce === null || (!(er & 268435455) && !(ti & 268435455)) || An(ce, he);
}
function Ga(e, n) {
  var r = j;
  j |= 2;
  var t = zd();
  (ce !== e || he !== n) && ((on = null), $n(e, n));
  do
    try {
      Hh();
      break;
    } catch (a) {
      Fd(e, a);
    }
  while (!0);
  if ((Ml(), (j = r), (Da.current = t), ae !== null)) throw Error(R(261));
  return (ce = null), (he = 0), le;
}
function Hh() {
  for (; ae !== null; ) Od(ae);
}
function Uh() {
  for (; ae !== null && !ff(); ) Od(ae);
}
function Od(e) {
  var n = Wd(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    n === null ? Hd(e) : (ae = n),
    (Nl.current = null);
}
function Hd(e) {
  var n = e;
  do {
    var r = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((r = _h(r, n)), r !== null)) {
        (r.flags &= 32767), (ae = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ae = null);
        return;
      }
    } else if (((r = Dh(r, n, Be)), r !== null)) {
      ae = r;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      ae = n;
      return;
    }
    ae = n = e;
  } while (n !== null);
  le === 0 && (le = 5);
}
function jn(e, n, r) {
  var t = V,
    a = We.transition;
  try {
    (We.transition = null), (V = 1), Wh(e, n, r, t);
  } finally {
    (We.transition = a), (V = t);
  }
  return null;
}
function Wh(e, n, r, t) {
  do wr();
  while (kn !== null);
  if (j & 6) throw Error(R(327));
  r = e.finishedWork;
  var a = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (Mf(e, o),
    e === ce && ((ae = ce = null), (he = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Xt ||
      ((Xt = !0),
      jd(ya, function () {
        return wr(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = We.transition), (We.transition = null);
    var l = V;
    V = 1;
    var c = j;
    (j |= 4),
      (Nl.current = null),
      Gh(e, r),
      _d(r, e),
      uh(Co),
      (ba = !!yo),
      (Co = yo = null),
      (e.current = r),
      Fh(r),
      hf(),
      (j = c),
      (V = l),
      (We.transition = o);
  } else e.current = r;
  if (
    (Xt && ((Xt = !1), (kn = e), (Na = a)),
    (o = e.pendingLanes),
    o === 0 && (Bn = null),
    vf(r.stateNode),
    Ee(e, re()),
    n !== null)
  )
    for (t = e.onRecoverableError, r = 0; r < n.length; r++)
      (a = n[r]), t(a.value, { componentStack: a.stack, digest: a.digest });
  if (_a) throw ((_a = !1), (e = zo), (zo = null), e);
  return (
    Na & 1 && e.tag !== 0 && wr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Oo ? lt++ : ((lt = 0), (Oo = e))) : (lt = 0),
    Hn(),
    null
  );
}
function wr() {
  if (kn !== null) {
    var e = bc(Na),
      n = We.transition,
      r = V;
    try {
      if (((We.transition = null), (V = 16 > e ? 16 : e), kn === null))
        var t = !1;
      else {
        if (((e = kn), (kn = null), (Na = 0), j & 6)) throw Error(R(331));
        var a = j;
        for (j |= 4, F = e.current; F !== null; ) {
          var o = F,
            l = o.child;
          if (F.flags & 16) {
            var c = o.deletions;
            if (c !== null) {
              for (var m = 0; m < c.length; m++) {
                var h = c[m];
                for (F = h; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      it(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (F = f);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var b = d.sibling,
                        A = d.return;
                      if ((Rd(d), d === h)) {
                        F = null;
                        break;
                      }
                      if (b !== null) {
                        (b.return = A), (F = b);
                        break;
                      }
                      F = A;
                    }
                }
              }
              var P = o.alternate;
              if (P !== null) {
                var I = P.child;
                if (I !== null) {
                  P.child = null;
                  do {
                    var B = I.sibling;
                    (I.sibling = null), (I = B);
                  } while (I !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    it(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (F = y);
                break e;
              }
              F = o.return;
            }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          l = F;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (F = v);
          else
            e: for (l = p; F !== null; ) {
              if (((c = F), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ri(9, c);
                  }
                } catch (L) {
                  ne(c, c.return, L);
                }
              if (c === l) {
                F = null;
                break e;
              }
              var k = c.sibling;
              if (k !== null) {
                (k.return = c.return), (F = k);
                break e;
              }
              F = c.return;
            }
        }
        if (
          ((j = a), Hn(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(Ya, e);
          } catch {}
        t = !0;
      }
      return t;
    } finally {
      (V = r), (We.transition = n);
    }
  }
  return !1;
}
function lu(e, n, r) {
  (n = Br(r, n)),
    (n = Sd(e, n, 1)),
    (e = xn(e, n, 1)),
    (n = Se()),
    e !== null && (Bt(e, 1, n), Ee(e, n));
}
function ne(e, n, r) {
  if (e.tag === 3) lu(e, e, r);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        lu(n, e, r);
        break;
      } else if (n.tag === 1) {
        var t = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof t.componentDidCatch == "function" &&
            (Bn === null || !Bn.has(t)))
        ) {
          (e = Br(r, e)),
            (e = Ad(n, e, 1)),
            (n = xn(n, e, 1)),
            (e = Se()),
            n !== null && (Bt(n, 1, e), Ee(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function jh(e, n, r) {
  var t = e.pingCache;
  t !== null && t.delete(n),
    (n = Se()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ce === e &&
      (he & r) === r &&
      (le === 4 || (le === 3 && (he & 130023424) === he && 500 > re() - Fl)
        ? $n(e, 0)
        : (Gl |= r)),
    Ee(e, n);
}
function Ud(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = Wt), (Wt <<= 1), !(Wt & 130023424) && (Wt = 4194304))
      : (n = 1));
  var r = Se();
  (e = hn(e, n)), e !== null && (Bt(e, n, r), Ee(e, r));
}
function Vh(e) {
  var n = e.memoizedState,
    r = 0;
  n !== null && (r = n.retryLane), Ud(e, r);
}
function Kh(e, n) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var t = e.stateNode,
        a = e.memoizedState;
      a !== null && (r = a.retryLane);
      break;
    case 19:
      t = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  t !== null && t.delete(n), Ud(e, r);
}
var Wd;
Wd = function (e, n, r) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || Te.current) we = !0;
    else {
      if (!(e.lanes & r) && !(n.flags & 128)) return (we = !1), Lh(e, n, r);
      we = !!(e.flags & 131072);
    }
  else (we = !1), Z && n.flags & 1048576 && Kc(n, Pa, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var t = n.type;
      da(e, n), (e = n.pendingProps);
      var a = Pr(n, Ce.current);
      kr(n, r), (a = Bl(null, n, t, e, a, r));
      var o = Rl();
      return (
        (n.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            Pe(t) ? ((o = !0), wa(n)) : (o = !1),
            (n.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            Tl(n),
            (a.updater = ei),
            (n.stateNode = a),
            (a._reactInternals = n),
            Eo(n, t, e, r),
            (n = Bo(null, n, t, !0, o, r)))
          : ((n.tag = 0), Z && o && Cl(n), be(null, n, a, r), (n = n.child)),
        n
      );
    case 16:
      t = n.elementType;
      e: {
        switch (
          (da(e, n),
          (e = n.pendingProps),
          (a = t._init),
          (t = a(t._payload)),
          (n.type = t),
          (a = n.tag = Yh(t)),
          (e = Je(t, e)),
          a)
        ) {
          case 0:
            n = xo(null, n, t, e, r);
            break e;
          case 1:
            n = Qs(null, n, t, e, r);
            break e;
          case 11:
            n = $s(null, n, t, e, r);
            break e;
          case 14:
            n = Zs(null, n, t, Je(t.type, e), r);
            break e;
        }
        throw Error(R(306, t, ""));
      }
      return n;
    case 0:
      return (
        (t = n.type),
        (a = n.pendingProps),
        (a = n.elementType === t ? a : Je(t, a)),
        xo(e, n, t, a, r)
      );
    case 1:
      return (
        (t = n.type),
        (a = n.pendingProps),
        (a = n.elementType === t ? a : Je(t, a)),
        Qs(e, n, t, a, r)
      );
    case 3:
      e: {
        if ((Td(n), e === null)) throw Error(R(387));
        (t = n.pendingProps),
          (o = n.memoizedState),
          (a = o.element),
          Zc(e, n),
          xa(n, t, null, r);
        var l = n.memoizedState;
        if (((t = l.element), o.isDehydrated))
          if (
            ((o = {
              element: t,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (a = Br(Error(R(423)), n)), (n = qs(e, n, t, r, a));
            break e;
          } else if (t !== a) {
            (a = Br(Error(R(424)), n)), (n = qs(e, n, t, r, a));
            break e;
          } else
            for (
              Re = In(n.stateNode.containerInfo.firstChild),
                De = n,
                Z = !0,
                $e = null,
                r = ed(n, null, t, r),
                n.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Er(), t === a)) {
            n = pn(e, n, r);
            break e;
          }
          be(e, n, t, r);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        nd(n),
        e === null && wo(n),
        (t = n.type),
        (a = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = a.children),
        bo(t, a) ? (l = null) : o !== null && bo(t, o) && (n.flags |= 32),
        wd(e, n),
        be(e, n, l, r),
        n.child
      );
    case 6:
      return e === null && wo(n), null;
    case 13:
      return Pd(e, n, r);
    case 4:
      return (
        Pl(n, n.stateNode.containerInfo),
        (t = n.pendingProps),
        e === null ? (n.child = Ir(n, null, t, r)) : be(e, n, t, r),
        n.child
      );
    case 11:
      return (
        (t = n.type),
        (a = n.pendingProps),
        (a = n.elementType === t ? a : Je(t, a)),
        $s(e, n, t, a, r)
      );
    case 7:
      return be(e, n, n.pendingProps, r), n.child;
    case 8:
      return be(e, n, n.pendingProps.children, r), n.child;
    case 12:
      return be(e, n, n.pendingProps.children, r), n.child;
    case 10:
      e: {
        if (
          ((t = n.type._context),
          (a = n.pendingProps),
          (o = n.memoizedProps),
          (l = a.value),
          J(Ea, t._currentValue),
          (t._currentValue = l),
          o !== null)
        )
          if (Xe(o.value, l)) {
            if (o.children === a.children && !Te.current) {
              n = pn(e, n, r);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var c = o.dependencies;
              if (c !== null) {
                l = o.child;
                for (var m = c.firstContext; m !== null; ) {
                  if (m.context === t) {
                    if (o.tag === 1) {
                      (m = dn(-1, r & -r)), (m.tag = 2);
                      var h = o.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var d = h.pending;
                        d === null
                          ? (m.next = m)
                          : ((m.next = d.next), (d.next = m)),
                          (h.pending = m);
                      }
                    }
                    (o.lanes |= r),
                      (m = o.alternate),
                      m !== null && (m.lanes |= r),
                      To(o.return, r, n),
                      (c.lanes |= r);
                    break;
                  }
                  m = m.next;
                }
              } else if (o.tag === 10) l = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(R(341));
                (l.lanes |= r),
                  (c = l.alternate),
                  c !== null && (c.lanes |= r),
                  To(l, r, n),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === n) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        be(e, n, a.children, r), (n = n.child);
      }
      return n;
    case 9:
      return (
        (a = n.type),
        (t = n.pendingProps.children),
        kr(n, r),
        (a = je(a)),
        (t = t(a)),
        (n.flags |= 1),
        be(e, n, t, r),
        n.child
      );
    case 14:
      return (
        (t = n.type),
        (a = Je(t, n.pendingProps)),
        (a = Je(t.type, a)),
        Zs(e, n, t, a, r)
      );
    case 15:
      return Md(e, n, n.type, n.pendingProps, r);
    case 17:
      return (
        (t = n.type),
        (a = n.pendingProps),
        (a = n.elementType === t ? a : Je(t, a)),
        da(e, n),
        (n.tag = 1),
        Pe(t) ? ((e = !0), wa(n)) : (e = !1),
        kr(n, r),
        qc(n, t, a),
        Eo(n, t, a, r),
        Bo(null, n, t, !0, e, r)
      );
    case 19:
      return Ed(e, n, r);
    case 22:
      return kd(e, n, r);
  }
  throw Error(R(156, n.tag));
};
function jd(e, n) {
  return gc(e, n);
}
function Jh(e, n, r, t) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = t),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, n, r, t) {
  return new Jh(e, n, r, t);
}
function Ul(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yh(e) {
  if (typeof e == "function") return Ul(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ll)) return 11;
    if (e === sl) return 14;
  }
  return 2;
}
function Ln(e, n) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ue(e.tag, n, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = n),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (r.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ha(e, n, r, t, a, o) {
  var l = 2;
  if (((t = e), typeof e == "function")) Ul(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ur:
        return Zn(r.children, a, o, n);
      case ol:
        (l = 8), (a |= 8);
        break;
      case Qi:
        return (
          (e = Ue(12, r, n, a | 2)), (e.elementType = Qi), (e.lanes = o), e
        );
      case qi:
        return (e = Ue(13, r, n, a)), (e.elementType = qi), (e.lanes = o), e;
      case Xi:
        return (e = Ue(19, r, n, a)), (e.elementType = Xi), (e.lanes = o), e;
      case Xu:
        return ai(r, a, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qu:
              l = 10;
              break e;
            case qu:
              l = 9;
              break e;
            case ll:
              l = 11;
              break e;
            case sl:
              l = 14;
              break e;
            case Cn:
              (l = 16), (t = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ue(l, r, n, a)), (n.elementType = e), (n.type = t), (n.lanes = o), n
  );
}
function Zn(e, n, r, t) {
  return (e = Ue(7, e, t, n)), (e.lanes = r), e;
}
function ai(e, n, r, t) {
  return (
    (e = Ue(22, e, t, n)),
    (e.elementType = Xu),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hi(e, n, r) {
  return (e = Ue(6, e, null, n)), (e.lanes = r), e;
}
function Ui(e, n, r) {
  return (
    (n = Ue(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = r),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function $h(e, n, r, t, a) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ai(0)),
    (this.expirationTimes = Ai(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ai(0)),
    (this.identifierPrefix = t),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Wl(e, n, r, t, a, o, l, c, m) {
  return (
    (e = new $h(e, n, r, c, m)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Ue(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: t,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tl(o),
    e
  );
}
function Zh(e, n, r) {
  var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: t == null ? null : "" + t,
    children: e,
    containerInfo: n,
    implementation: r,
  };
}
function Vd(e) {
  if (!e) return Nn;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(R(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (Pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Pe(r)) return jc(e, r, n);
  }
  return n;
}
function Kd(e, n, r, t, a, o, l, c, m) {
  return (
    (e = Wl(r, t, !0, e, a, o, l, c, m)),
    (e.context = Vd(null)),
    (r = e.current),
    (t = Se()),
    (a = Rn(r)),
    (o = dn(t, a)),
    (o.callback = n ?? null),
    xn(r, o, a),
    (e.current.lanes = a),
    Bt(e, a, t),
    Ee(e, t),
    e
  );
}
function ii(e, n, r, t) {
  var a = n.current,
    o = Se(),
    l = Rn(a);
  return (
    (r = Vd(r)),
    n.context === null ? (n.context = r) : (n.pendingContext = r),
    (n = dn(o, l)),
    (n.payload = { element: e }),
    (t = t === void 0 ? null : t),
    t !== null && (n.callback = t),
    (e = xn(a, n, l)),
    e !== null && (qe(e, a, l, o), sa(e, a, l)),
    l
  );
}
function Fa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function su(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < n ? r : n;
  }
}
function jl(e, n) {
  su(e, n), (e = e.alternate) && su(e, n);
}
function Qh() {
  return null;
}
var Jd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vl(e) {
  this._internalRoot = e;
}
oi.prototype.render = Vl.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(R(409));
  ii(e, n, null, null);
};
oi.prototype.unmount = Vl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    nr(function () {
      ii(null, e, null, null);
    }),
      (n[fn] = null);
  }
};
function oi(e) {
  this._internalRoot = e;
}
oi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Mc();
    e = { blockedOn: null, target: e, priority: n };
    for (var r = 0; r < Sn.length && n !== 0 && n < Sn[r].priority; r++);
    Sn.splice(r, 0, e), r === 0 && wc(e);
  }
};
function Kl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function li(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uu() {}
function qh(e, n, r, t, a) {
  if (a) {
    if (typeof t == "function") {
      var o = t;
      t = function () {
        var h = Fa(l);
        o.call(h);
      };
    }
    var l = Kd(n, t, e, 0, null, !1, !1, "", uu);
    return (
      (e._reactRootContainer = l),
      (e[fn] = l.current),
      gt(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      l
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof t == "function") {
    var c = t;
    t = function () {
      var h = Fa(m);
      c.call(h);
    };
  }
  var m = Wl(e, 0, !1, null, null, !1, !1, "", uu);
  return (
    (e._reactRootContainer = m),
    (e[fn] = m.current),
    gt(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      ii(n, m, r, t);
    }),
    m
  );
}
function si(e, n, r, t, a) {
  var o = r._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof a == "function") {
      var c = a;
      a = function () {
        var m = Fa(l);
        c.call(m);
      };
    }
    ii(n, l, e, a);
  } else l = qh(r, n, e, a, t);
  return Fa(l);
}
Sc = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var r = $r(n.pendingLanes);
        r !== 0 &&
          (dl(n, r | 1), Ee(n, re()), !(j & 6) && ((Rr = re() + 500), Hn()));
      }
      break;
    case 13:
      nr(function () {
        var t = hn(e, 1);
        if (t !== null) {
          var a = Se();
          qe(t, e, 1, a);
        }
      }),
        jl(e, 1);
  }
};
ml = function (e) {
  if (e.tag === 13) {
    var n = hn(e, 134217728);
    if (n !== null) {
      var r = Se();
      qe(n, e, 134217728, r);
    }
    jl(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var n = Rn(e),
      r = hn(e, n);
    if (r !== null) {
      var t = Se();
      qe(r, e, n, t);
    }
    jl(e, n);
  }
};
Mc = function () {
  return V;
};
kc = function (e, n) {
  var r = V;
  try {
    return (V = e), n();
  } finally {
    V = r;
  }
};
uo = function (e, n, r) {
  switch (n) {
    case "input":
      if ((ro(e, r), (n = r.name), r.type === "radio" && n != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < r.length;
          n++
        ) {
          var t = r[n];
          if (t !== e && t.form === e.form) {
            var a = qa(t);
            if (!a) throw Error(R(90));
            nc(t), ro(t, a);
          }
        }
      }
      break;
    case "textarea":
      tc(e, r);
      break;
    case "select":
      (n = r.value), n != null && br(e, !!r.multiple, n, !1);
  }
};
cc = zl;
dc = nr;
var Xh = { usingClientEntryPoint: !1, Events: [Lt, fr, qa, sc, uc, zl] },
  Kr = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ep = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || Qh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ea.isDisabled && ea.supportsFiber)
    try {
      (Ya = ea.inject(ep)), (tn = ea);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh;
Fe.createPortal = function (e, n) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kl(n)) throw Error(R(200));
  return Zh(e, n, null, r);
};
Fe.createRoot = function (e, n) {
  if (!Kl(e)) throw Error(R(299));
  var r = !1,
    t = "",
    a = Jd;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (t = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (n = Wl(e, 1, !1, null, null, r, !1, t, a)),
    (e[fn] = n.current),
    gt(e.nodeType === 8 ? e.parentNode : e),
    new Vl(n)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = hc(n)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return nr(e);
};
Fe.hydrate = function (e, n, r) {
  if (!li(n)) throw Error(R(200));
  return si(null, e, n, !0, r);
};
Fe.hydrateRoot = function (e, n, r) {
  if (!Kl(e)) throw Error(R(405));
  var t = (r != null && r.hydratedSources) || null,
    a = !1,
    o = "",
    l = Jd;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (a = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (n = Kd(n, null, e, 1, r ?? null, a, !1, o, l)),
    (e[fn] = n.current),
    gt(e),
    t)
  )
    for (e = 0; e < t.length; e++)
      (r = t[e]),
        (a = r._getVersion),
        (a = a(r._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [r, a])
          : n.mutableSourceEagerHydrationData.push(r, a);
  return new oi(n);
};
Fe.render = function (e, n, r) {
  if (!li(n)) throw Error(R(200));
  return si(null, e, n, !1, r);
};
Fe.unmountComponentAtNode = function (e) {
  if (!li(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (nr(function () {
        si(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fn] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = zl;
Fe.unstable_renderSubtreeIntoContainer = function (e, n, r, t) {
  if (!li(r)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return si(e, n, r, !1, t);
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function Yd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd);
    } catch (e) {
      console.error(e);
    }
}
Yd(), (Ku.exports = Fe);
var np = Ku.exports,
  cu = np;
($i.createRoot = cu.createRoot), ($i.hydrateRoot = cu.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wt() {
  return (
    (wt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r)
              Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
          }
          return e;
        }),
    wt.apply(this, arguments)
  );
}
var wn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(wn || (wn = {}));
const du = "popstate";
function rp(e) {
  e === void 0 && (e = {});
  function n(t, a) {
    let { pathname: o, search: l, hash: c } = t.location;
    return Wo(
      "",
      { pathname: o, search: l, hash: c },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function r(t, a) {
    return typeof a == "string" ? a : za(a);
  }
  return ap(n, r, null, e);
}
function ie(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
function $d(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function tp() {
  return Math.random().toString(36).substr(2, 8);
}
function mu(e, n) {
  return { usr: e.state, key: e.key, idx: n };
}
function Wo(e, n, r, t) {
  return (
    r === void 0 && (r = null),
    wt(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof n == "string" ? Fr(n) : n,
      { state: r, key: (n && n.key) || t || tp() }
    )
  );
}
function za(e) {
  let { pathname: n = "/", search: r = "", hash: t = "" } = e;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    t && t !== "#" && (n += t.charAt(0) === "#" ? t : "#" + t),
    n
  );
}
function Fr(e) {
  let n = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((n.hash = e.substr(r)), (e = e.substr(0, r)));
    let t = e.indexOf("?");
    t >= 0 && ((n.search = e.substr(t)), (e = e.substr(0, t))),
      e && (n.pathname = e);
  }
  return n;
}
function ap(e, n, r, t) {
  t === void 0 && (t = {});
  let { window: a = document.defaultView, v5Compat: o = !1 } = t,
    l = a.history,
    c = wn.Pop,
    m = null,
    h = d();
  h == null && ((h = 0), l.replaceState(wt({}, l.state, { idx: h }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    c = wn.Pop;
    let B = d(),
      y = B == null ? null : B - h;
    (h = B), m && m({ action: c, location: I.location, delta: y });
  }
  function b(B, y) {
    c = wn.Push;
    let p = Wo(I.location, B, y);
    r && r(p, B), (h = d() + 1);
    let v = mu(p, h),
      k = I.createHref(p);
    try {
      l.pushState(v, "", k);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      a.location.assign(k);
    }
    o && m && m({ action: c, location: I.location, delta: 1 });
  }
  function A(B, y) {
    c = wn.Replace;
    let p = Wo(I.location, B, y);
    r && r(p, B), (h = d());
    let v = mu(p, h),
      k = I.createHref(p);
    l.replaceState(v, "", k),
      o && m && m({ action: c, location: I.location, delta: 0 });
  }
  function P(B) {
    let y = a.location.origin !== "null" ? a.location.origin : a.location.href,
      p = typeof B == "string" ? B : za(B);
    return (
      (p = p.replace(/ $/, "%20")),
      ie(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, y)
    );
  }
  let I = {
    get action() {
      return c;
    },
    get location() {
      return e(a, l);
    },
    listen(B) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(du, f),
        (m = B),
        () => {
          a.removeEventListener(du, f), (m = null);
        }
      );
    },
    createHref(B) {
      return n(a, B);
    },
    createURL: P,
    encodeLocation(B) {
      let y = P(B);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: b,
    replace: A,
    go(B) {
      return l.go(B);
    },
  };
  return I;
}
var fu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fu || (fu = {}));
function ip(e, n, r) {
  r === void 0 && (r = "/");
  let t = typeof n == "string" ? Fr(n) : n,
    a = Jl(t.pathname || "/", r);
  if (a == null) return null;
  let o = Zd(e);
  op(o);
  let l = null;
  for (let c = 0; l == null && c < o.length; ++c) {
    let m = yp(a);
    l = pp(o[c], m);
  }
  return l;
}
function Zd(e, n, r, t) {
  n === void 0 && (n = []), r === void 0 && (r = []), t === void 0 && (t = "");
  let a = (o, l, c) => {
    let m = {
      relativePath: c === void 0 ? o.path || "" : c,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    m.relativePath.startsWith("/") &&
      (ie(
        m.relativePath.startsWith(t),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + t + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (m.relativePath = m.relativePath.slice(t.length)));
    let h = Dn([t, m.relativePath]),
      d = r.concat(m);
    o.children &&
      o.children.length > 0 &&
      (ie(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + h + '".')
      ),
      Zd(o.children, n, d, h)),
      !(o.path == null && !o.index) &&
        n.push({ path: h, score: fp(h, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var c;
      if (o.path === "" || !((c = o.path) != null && c.includes("?"))) a(o, l);
      else for (let m of Qd(o.path)) a(o, l, m);
    }),
    n
  );
}
function Qd(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [r, ...t] = n,
    a = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (t.length === 0) return a ? [o, ""] : [o];
  let l = Qd(t.join("/")),
    c = [];
  return (
    c.push(...l.map((m) => (m === "" ? o : [o, m].join("/")))),
    a && c.push(...l),
    c.map((m) => (e.startsWith("/") && m === "" ? "/" : m))
  );
}
function op(e) {
  e.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : hp(
          n.routesMeta.map((t) => t.childrenIndex),
          r.routesMeta.map((t) => t.childrenIndex)
        )
  );
}
const lp = /^:[\w-]+$/,
  sp = 3,
  up = 2,
  cp = 1,
  dp = 10,
  mp = -2,
  hu = (e) => e === "*";
function fp(e, n) {
  let r = e.split("/"),
    t = r.length;
  return (
    r.some(hu) && (t += mp),
    n && (t += up),
    r
      .filter((a) => !hu(a))
      .reduce((a, o) => a + (lp.test(o) ? sp : o === "" ? cp : dp), t)
  );
}
function hp(e, n) {
  return e.length === n.length && e.slice(0, -1).every((t, a) => t === n[a])
    ? e[e.length - 1] - n[n.length - 1]
    : 0;
}
function pp(e, n) {
  let { routesMeta: r } = e,
    t = {},
    a = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      m = l === r.length - 1,
      h = a === "/" ? n : n.slice(a.length) || "/",
      d = gp(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: m },
        h
      );
    if (!d) return null;
    Object.assign(t, d.params);
    let f = c.route;
    o.push({
      params: t,
      pathname: Dn([a, d.pathname]),
      pathnameBase: Ap(Dn([a, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (a = Dn([a, d.pathnameBase]));
  }
  return o;
}
function gp(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, t] = vp(e.path, e.caseSensitive, e.end),
    a = n.match(r);
  if (!a) return null;
  let o = a[0],
    l = o.replace(/(.)\/+$/, "$1"),
    c = a.slice(1);
  return {
    params: t.reduce((h, d, f) => {
      let { paramName: b, isOptional: A } = d;
      if (b === "*") {
        let I = c[f] || "";
        l = o.slice(0, o.length - I.length).replace(/(.)\/+$/, "$1");
      }
      const P = c[f];
      return (
        A && !P ? (h[b] = void 0) : (h[b] = (P || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function vp(e, n, r) {
  n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    $d(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let t = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, c, m) => (
            t.push({ paramName: c, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (t.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (a += "\\/*$")
      : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, n ? void 0 : "i"), t]
  );
}
function yp(e) {
  try {
    return e
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      $d(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ").")
      ),
      e
    );
  }
}
function Jl(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    t = e.charAt(r);
  return t && t !== "/" ? null : e.slice(r) || "/";
}
function Cp(e, n) {
  n === void 0 && (n = "/");
  let {
    pathname: r,
    search: t = "",
    hash: a = "",
  } = typeof e == "string" ? Fr(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : bp(r, n)) : n,
    search: Mp(t),
    hash: kp(a),
  };
}
function bp(e, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Wi(e, n, r, t) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(t) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Sp(e) {
  return e.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function qd(e, n) {
  let r = Sp(e);
  return n
    ? r.map((t, a) => (a === e.length - 1 ? t.pathname : t.pathnameBase))
    : r.map((t) => t.pathnameBase);
}
function Xd(e, n, r, t) {
  t === void 0 && (t = !1);
  let a;
  typeof e == "string"
    ? (a = Fr(e))
    : ((a = wt({}, e)),
      ie(
        !a.pathname || !a.pathname.includes("?"),
        Wi("?", "pathname", "search", a)
      ),
      ie(
        !a.pathname || !a.pathname.includes("#"),
        Wi("#", "pathname", "hash", a)
      ),
      ie(!a.search || !a.search.includes("#"), Wi("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "",
    l = o ? "/" : a.pathname,
    c;
  if (l == null) c = r;
  else {
    let f = n.length - 1;
    if (!t && l.startsWith("..")) {
      let b = l.split("/");
      for (; b[0] === ".."; ) b.shift(), (f -= 1);
      a.pathname = b.join("/");
    }
    c = f >= 0 ? n[f] : "/";
  }
  let m = Cp(a, c),
    h = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && r.endsWith("/");
  return !m.pathname.endsWith("/") && (h || d) && (m.pathname += "/"), m;
}
const Dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ap = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Mp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function wp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const em = ["post", "put", "patch", "delete"];
new Set(em);
const Tp = ["get", ...em];
new Set(Tp);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tt() {
  return (
    (Tt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r)
              Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
          }
          return e;
        }),
    Tt.apply(this, arguments)
  );
}
const Yl = z.createContext(null),
  Pp = z.createContext(null),
  ir = z.createContext(null),
  ui = z.createContext(null),
  Un = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  nm = z.createContext(null);
function Ep(e, n) {
  let { relative: r } = n === void 0 ? {} : n;
  _t() || ie(!1);
  let { basename: t, navigator: a } = z.useContext(ir),
    { hash: o, pathname: l, search: c } = tm(e, { relative: r }),
    m = l;
  return (
    t !== "/" && (m = l === "/" ? t : Dn([t, l])),
    a.createHref({ pathname: m, search: c, hash: o })
  );
}
function _t() {
  return z.useContext(ui) != null;
}
function ci() {
  return _t() || ie(!1), z.useContext(ui).location;
}
function rm(e) {
  z.useContext(ir).static || z.useLayoutEffect(e);
}
function Ip() {
  let { isDataRoute: e } = z.useContext(Un);
  return e ? Wp() : xp();
}
function xp() {
  _t() || ie(!1);
  let e = z.useContext(Yl),
    { basename: n, future: r, navigator: t } = z.useContext(ir),
    { matches: a } = z.useContext(Un),
    { pathname: o } = ci(),
    l = JSON.stringify(qd(a, r.v7_relativeSplatPath)),
    c = z.useRef(!1);
  return (
    rm(() => {
      c.current = !0;
    }),
    z.useCallback(
      function (h, d) {
        if ((d === void 0 && (d = {}), !c.current)) return;
        if (typeof h == "number") {
          t.go(h);
          return;
        }
        let f = Xd(h, JSON.parse(l), o, d.relative === "path");
        e == null &&
          n !== "/" &&
          (f.pathname = f.pathname === "/" ? n : Dn([n, f.pathname])),
          (d.replace ? t.replace : t.push)(f, d.state, d);
      },
      [n, t, l, o, e]
    )
  );
}
function Bp() {
  let { matches: e } = z.useContext(Un),
    n = e[e.length - 1];
  return n ? n.params : {};
}
function tm(e, n) {
  let { relative: r } = n === void 0 ? {} : n,
    { future: t } = z.useContext(ir),
    { matches: a } = z.useContext(Un),
    { pathname: o } = ci(),
    l = JSON.stringify(qd(a, t.v7_relativeSplatPath));
  return z.useMemo(() => Xd(e, JSON.parse(l), o, r === "path"), [e, l, o, r]);
}
function Rp(e, n) {
  return Lp(e, n);
}
function Lp(e, n, r, t) {
  _t() || ie(!1);
  let { navigator: a } = z.useContext(ir),
    { matches: o } = z.useContext(Un),
    l = o[o.length - 1],
    c = l ? l.params : {};
  l && l.pathname;
  let m = l ? l.pathnameBase : "/";
  l && l.route;
  let h = ci(),
    d;
  if (n) {
    var f;
    let B = typeof n == "string" ? Fr(n) : n;
    m === "/" || ((f = B.pathname) != null && f.startsWith(m)) || ie(!1),
      (d = B);
  } else d = h;
  let b = d.pathname || "/",
    A = b;
  if (m !== "/") {
    let B = m.replace(/^\//, "").split("/");
    A = "/" + b.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let P = ip(e, { pathname: A }),
    I = Fp(
      P &&
        P.map((B) =>
          Object.assign({}, B, {
            params: Object.assign({}, c, B.params),
            pathname: Dn([
              m,
              a.encodeLocation
                ? a.encodeLocation(B.pathname).pathname
                : B.pathname,
            ]),
            pathnameBase:
              B.pathnameBase === "/"
                ? m
                : Dn([
                    m,
                    a.encodeLocation
                      ? a.encodeLocation(B.pathnameBase).pathname
                      : B.pathnameBase,
                  ]),
          })
        ),
      o,
      r,
      t
    );
  return n && I
    ? z.createElement(
        ui.Provider,
        {
          value: {
            location: Tt(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: wn.Pop,
          },
        },
        I
      )
    : I;
}
function Dp() {
  let e = Up(),
    n = wp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return z.createElement(
    z.Fragment,
    null,
    z.createElement("h2", null, "Unexpected Application Error!"),
    z.createElement("h3", { style: { fontStyle: "italic" } }, n),
    r ? z.createElement("pre", { style: a }, r) : null,
    null
  );
}
const _p = z.createElement(Dp, null);
class Np extends z.Component {
  constructor(n) {
    super(n),
      (this.state = {
        location: n.location,
        revalidation: n.revalidation,
        error: n.error,
      });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location ||
      (r.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : r.error,
          location: r.location,
          revalidation: n.revalidation || r.revalidation,
        };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? z.createElement(
          Un.Provider,
          { value: this.props.routeContext },
          z.createElement(nm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Gp(e) {
  let { routeContext: n, match: r, children: t } = e,
    a = z.useContext(Yl);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    z.createElement(Un.Provider, { value: n }, t)
  );
}
function Fp(e, n, r, t) {
  var a;
  if (
    (n === void 0 && (n = []),
    r === void 0 && (r = null),
    t === void 0 && (t = null),
    e == null)
  ) {
    var o;
    if ((o = r) != null && o.errors) e = r.matches;
    else return null;
  }
  let l = e,
    c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let d = l.findIndex(
      (f) => f.route.id && (c == null ? void 0 : c[f.route.id])
    );
    d >= 0 || ie(!1), (l = l.slice(0, Math.min(l.length, d + 1)));
  }
  let m = !1,
    h = -1;
  if (r && t && t.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let f = l[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (h = d),
        f.route.id)
      ) {
        let { loaderData: b, errors: A } = r,
          P =
            f.route.loader &&
            b[f.route.id] === void 0 &&
            (!A || A[f.route.id] === void 0);
        if (f.route.lazy || P) {
          (m = !0), h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((d, f, b) => {
    let A,
      P = !1,
      I = null,
      B = null;
    r &&
      ((A = c && f.route.id ? c[f.route.id] : void 0),
      (I = f.route.errorElement || _p),
      m &&
        (h < 0 && b === 0
          ? (jp("route-fallback", !1), (P = !0), (B = null))
          : h === b &&
            ((P = !0), (B = f.route.hydrateFallbackElement || null))));
    let y = n.concat(l.slice(0, b + 1)),
      p = () => {
        let v;
        return (
          A
            ? (v = I)
            : P
            ? (v = B)
            : f.route.Component
            ? (v = z.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = d),
          z.createElement(Gp, {
            match: f,
            routeContext: { outlet: d, matches: y, isDataRoute: r != null },
            children: v,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || b === 0)
      ? z.createElement(Np, {
          location: r.location,
          revalidation: r.revalidation,
          component: I,
          error: A,
          children: p(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var am = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(am || {}),
  Oa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Oa || {});
function zp(e) {
  let n = z.useContext(Yl);
  return n || ie(!1), n;
}
function Op(e) {
  let n = z.useContext(Pp);
  return n || ie(!1), n;
}
function Hp(e) {
  let n = z.useContext(Un);
  return n || ie(!1), n;
}
function im(e) {
  let n = Hp(),
    r = n.matches[n.matches.length - 1];
  return r.route.id || ie(!1), r.route.id;
}
function Up() {
  var e;
  let n = z.useContext(nm),
    r = Op(Oa.UseRouteError),
    t = im(Oa.UseRouteError);
  return n !== void 0 ? n : (e = r.errors) == null ? void 0 : e[t];
}
function Wp() {
  let { router: e } = zp(am.UseNavigateStable),
    n = im(Oa.UseNavigateStable),
    r = z.useRef(!1);
  return (
    rm(() => {
      r.current = !0;
    }),
    z.useCallback(
      function (a, o) {
        o === void 0 && (o = {}),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, Tt({ fromRouteId: n }, o)));
      },
      [e, n]
    )
  );
}
const pu = {};
function jp(e, n, r) {
  !n && !pu[e] && (pu[e] = !0);
}
function Qr(e) {
  ie(!1);
}
function Vp(e) {
  let {
    basename: n = "/",
    children: r = null,
    location: t,
    navigationType: a = wn.Pop,
    navigator: o,
    static: l = !1,
    future: c,
  } = e;
  _t() && ie(!1);
  let m = n.replace(/^\/*/, "/"),
    h = z.useMemo(
      () => ({
        basename: m,
        navigator: o,
        static: l,
        future: Tt({ v7_relativeSplatPath: !1 }, c),
      }),
      [m, c, o, l]
    );
  typeof t == "string" && (t = Fr(t));
  let {
      pathname: d = "/",
      search: f = "",
      hash: b = "",
      state: A = null,
      key: P = "default",
    } = t,
    I = z.useMemo(() => {
      let B = Jl(d, m);
      return B == null
        ? null
        : {
            location: { pathname: B, search: f, hash: b, state: A, key: P },
            navigationType: a,
          };
    }, [m, d, f, b, A, P, a]);
  return I == null
    ? null
    : z.createElement(
        ir.Provider,
        { value: h },
        z.createElement(ui.Provider, { children: r, value: I })
      );
}
function Kp(e) {
  let { children: n, location: r } = e;
  return Rp(jo(n), r);
}
new Promise(() => {});
function jo(e, n) {
  n === void 0 && (n = []);
  let r = [];
  return (
    z.Children.forEach(e, (t, a) => {
      if (!z.isValidElement(t)) return;
      let o = [...n, a];
      if (t.type === z.Fragment) {
        r.push.apply(r, jo(t.props.children, o));
        return;
      }
      t.type !== Qr && ie(!1), !t.props.index || !t.props.children || ie(!1);
      let l = {
        id: t.props.id || o.join("-"),
        caseSensitive: t.props.caseSensitive,
        element: t.props.element,
        Component: t.props.Component,
        index: t.props.index,
        path: t.props.path,
        loader: t.props.loader,
        action: t.props.action,
        errorElement: t.props.errorElement,
        ErrorBoundary: t.props.ErrorBoundary,
        hasErrorBoundary:
          t.props.ErrorBoundary != null || t.props.errorElement != null,
        shouldRevalidate: t.props.shouldRevalidate,
        handle: t.props.handle,
        lazy: t.props.lazy,
      };
      t.props.children && (l.children = jo(t.props.children, o)), r.push(l);
    }),
    r
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r)
              Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function Jp(e, n) {
  if (e == null) return {};
  var r = {},
    t = Object.keys(e),
    a,
    o;
  for (o = 0; o < t.length; o++)
    (a = t[o]), !(n.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Yp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $p(e, n) {
  return e.button === 0 && (!n || n === "_self") && !Yp(e);
}
const Zp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Qp = "6";
try {
  window.__reactRouterVersion = Qp;
} catch {}
const qp = "startTransition",
  gu = Yi[qp];
function Xp(e) {
  let { basename: n, children: r, future: t, window: a } = e,
    o = z.useRef();
  o.current == null && (o.current = rp({ window: a, v5Compat: !0 }));
  let l = o.current,
    [c, m] = z.useState({ action: l.action, location: l.location }),
    { v7_startTransition: h } = t || {},
    d = z.useCallback(
      (f) => {
        h && gu ? gu(() => m(f)) : m(f);
      },
      [m, h]
    );
  return (
    z.useLayoutEffect(() => l.listen(d), [l, d]),
    z.createElement(Vp, {
      basename: n,
      children: r,
      location: c.location,
      navigationType: c.action,
      navigator: l,
      future: t,
    })
  );
}
const eg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ng = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ji = z.forwardRef(function (n, r) {
    let {
        onClick: t,
        relative: a,
        reloadDocument: o,
        replace: l,
        state: c,
        target: m,
        to: h,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = n,
      b = Jp(n, Zp),
      { basename: A } = z.useContext(ir),
      P,
      I = !1;
    if (typeof h == "string" && ng.test(h) && ((P = h), eg))
      try {
        let v = new URL(window.location.href),
          k = h.startsWith("//") ? new URL(v.protocol + h) : new URL(h),
          L = Jl(k.pathname, A);
        k.origin === v.origin && L != null
          ? (h = L + k.search + k.hash)
          : (I = !0);
      } catch {}
    let B = Ep(h, { relative: a }),
      y = rg(h, {
        replace: l,
        state: c,
        target: m,
        preventScrollReset: d,
        relative: a,
        unstable_viewTransition: f,
      });
    function p(v) {
      t && t(v), v.defaultPrevented || y(v);
    }
    return z.createElement(
      "a",
      Vo({}, b, { href: P || B, onClick: I || o ? t : p, ref: r, target: m })
    );
  });
var vu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vu || (vu = {}));
var yu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(yu || (yu = {}));
function rg(e, n) {
  let {
      target: r,
      replace: t,
      state: a,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: c,
    } = n === void 0 ? {} : n,
    m = Ip(),
    h = ci(),
    d = tm(e, { relative: l });
  return z.useCallback(
    (f) => {
      if ($p(f, r)) {
        f.preventDefault();
        let b = t !== void 0 ? t : za(h) === za(d);
        m(e, {
          replace: b,
          state: a,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: c,
        });
      }
    },
    [h, m, d, t, a, r, e, o, l, c]
  );
}
const tg = () => (
  Bp(),
  D.jsxs(D.Fragment, {
    children: [
      D.jsx("h1", { children: "Admin-Table" }),
      D.jsxs("section", {
        children: [
          D.jsx("h3", {
            children: "One Destination for Complete Web Development",
          }),
          D.jsx("nav", {
            children: D.jsxs("ul", {
              className: "menuItems",
              children: [
                D.jsxs("li", {
                  children: [D.jsx(ji, { to: "/home", children: "Home" }), " "],
                }),
                D.jsx("li", {
                  children: D.jsx(ji, { to: "contact", children: "Contacts" }),
                }),
                D.jsx("li", {
                  children: D.jsx(ji, { to: "project", children: "Projects" }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
);
var om = { exports: {} },
  lm = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nt = z;
function ag(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var ig = typeof Object.is == "function" ? Object.is : ag,
  og = Nt.useSyncExternalStore,
  lg = Nt.useRef,
  sg = Nt.useEffect,
  ug = Nt.useMemo,
  cg = Nt.useDebugValue;
lm.useSyncExternalStoreWithSelector = function (e, n, r, t, a) {
  var o = lg(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = ug(
    function () {
      function m(A) {
        if (!h) {
          if (((h = !0), (d = A), (A = t(A)), a !== void 0 && l.hasValue)) {
            var P = l.value;
            if (a(P, A)) return (f = P);
          }
          return (f = A);
        }
        if (((P = f), ig(d, A))) return P;
        var I = t(A);
        return a !== void 0 && a(P, I) ? P : ((d = A), (f = I));
      }
      var h = !1,
        d,
        f,
        b = r === void 0 ? null : r;
      return [
        function () {
          return m(n());
        },
        b === null
          ? void 0
          : function () {
              return m(b());
            },
      ];
    },
    [n, r, t, a]
  );
  var c = og(e, o[0], o[1]);
  return (
    sg(
      function () {
        (l.hasValue = !0), (l.value = c);
      },
      [c]
    ),
    cg(c),
    c
  );
};
om.exports = lm;
var dg = om.exports,
  Le = "default" in Yi ? cn : Yi,
  Cu = Symbol.for("react-redux-context"),
  bu = typeof globalThis < "u" ? globalThis : {};
function mg() {
  if (!Le.createContext) return {};
  const e = bu[Cu] ?? (bu[Cu] = new Map());
  let n = e.get(Le.createContext);
  return n || ((n = Le.createContext(null)), e.set(Le.createContext, n)), n;
}
var Gn = mg(),
  fg = () => {
    throw new Error("uSES not initialized!");
  };
function $l(e = Gn) {
  return function () {
    return Le.useContext(e);
  };
}
var sm = $l(),
  um = fg,
  hg = (e) => {
    um = e;
  },
  pg = (e, n) => e === n;
function gg(e = Gn) {
  const n = e === Gn ? sm : $l(e),
    r = (t, a = {}) => {
      const { equalityFn: o = pg, devModeChecks: l = {} } =
          typeof a == "function" ? { equalityFn: a } : a,
        {
          store: c,
          subscription: m,
          getServerState: h,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = n();
      Le.useRef(!0);
      const b = Le.useCallback(
          {
            [t.name](P) {
              return t(P);
            },
          }[t.name],
          [t, d, l.stabilityCheck]
        ),
        A = um(m.addNestedSub, c.getState, h || c.getState, b, o);
      return Le.useDebugValue(A), A;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var vg = gg();
function yg(e) {
  e();
}
function Cg() {
  let e = null,
    n = null;
  return {
    clear() {
      (e = null), (n = null);
    },
    notify() {
      yg(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let t = e;
      for (; t; ) r.push(t), (t = t.next);
      return r;
    },
    subscribe(r) {
      let t = !0;
      const a = (n = { callback: r, next: null, prev: n });
      return (
        a.prev ? (a.prev.next = a) : (e = a),
        function () {
          !t ||
            e === null ||
            ((t = !1),
            a.next ? (a.next.prev = a.prev) : (n = a.prev),
            a.prev ? (a.prev.next = a.next) : (e = a.next));
        }
      );
    },
  };
}
var Su = { notify() {}, get: () => [] };
function bg(e, n) {
  let r,
    t = Su,
    a = 0,
    o = !1;
  function l(I) {
    d();
    const B = t.subscribe(I);
    let y = !1;
    return () => {
      y || ((y = !0), B(), f());
    };
  }
  function c() {
    t.notify();
  }
  function m() {
    P.onStateChange && P.onStateChange();
  }
  function h() {
    return o;
  }
  function d() {
    a++, r || ((r = n ? n.addNestedSub(m) : e.subscribe(m)), (t = Cg()));
  }
  function f() {
    a--, r && a === 0 && (r(), (r = void 0), t.clear(), (t = Su));
  }
  function b() {
    o || ((o = !0), d());
  }
  function A() {
    o && ((o = !1), f());
  }
  const P = {
    addNestedSub: l,
    notifyNestedSubs: c,
    handleChangeWrapper: m,
    isSubscribed: h,
    trySubscribe: b,
    tryUnsubscribe: A,
    getListeners: () => t,
  };
  return P;
}
var Sg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ag = Sg ? Le.useLayoutEffect : Le.useEffect;
function Mg({
  store: e,
  context: n,
  children: r,
  serverState: t,
  stabilityCheck: a = "once",
  identityFunctionCheck: o = "once",
}) {
  const l = Le.useMemo(() => {
      const h = bg(e);
      return {
        store: e,
        subscription: h,
        getServerState: t ? () => t : void 0,
        stabilityCheck: a,
        identityFunctionCheck: o,
      };
    }, [e, t, a, o]),
    c = Le.useMemo(() => e.getState(), [e]);
  Ag(() => {
    const { subscription: h } = l;
    return (
      (h.onStateChange = h.notifyNestedSubs),
      h.trySubscribe(),
      c !== e.getState() && h.notifyNestedSubs(),
      () => {
        h.tryUnsubscribe(), (h.onStateChange = void 0);
      }
    );
  }, [l, c]);
  const m = n || Gn;
  return Le.createElement(m.Provider, { value: l }, r);
}
var kg = Mg;
function cm(e = Gn) {
  const n = e === Gn ? sm : $l(e),
    r = () => {
      const { store: t } = n();
      return t;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var wg = cm();
function Tg(e = Gn) {
  const n = e === Gn ? wg : cm(e),
    r = () => n().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Zl = Tg();
hg(dg.useSyncExternalStoreWithSelector);
function me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Pg = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Au = Pg,
  Vi = () => Math.random().toString(36).substring(7).split("").join("."),
  Eg = {
    INIT: `@@redux/INIT${Vi()}`,
    REPLACE: `@@redux/REPLACE${Vi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vi()}`,
  },
  Ha = Eg;
function Ql(e) {
  if (typeof e != "object" || e === null) return !1;
  let n = e;
  for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
}
function dm(e, n, r) {
  if (typeof e != "function") throw new Error(me(2));
  if (
    (typeof n == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(me(0));
  if (
    (typeof n == "function" && typeof r > "u" && ((r = n), (n = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(me(1));
    return r(dm)(e, n);
  }
  let t = e,
    a = n,
    o = new Map(),
    l = o,
    c = 0,
    m = !1;
  function h() {
    l === o &&
      ((l = new Map()),
      o.forEach((B, y) => {
        l.set(y, B);
      }));
  }
  function d() {
    if (m) throw new Error(me(3));
    return a;
  }
  function f(B) {
    if (typeof B != "function") throw new Error(me(4));
    if (m) throw new Error(me(5));
    let y = !0;
    h();
    const p = c++;
    return (
      l.set(p, B),
      function () {
        if (y) {
          if (m) throw new Error(me(6));
          (y = !1), h(), l.delete(p), (o = null);
        }
      }
    );
  }
  function b(B) {
    if (!Ql(B)) throw new Error(me(7));
    if (typeof B.type > "u") throw new Error(me(8));
    if (typeof B.type != "string") throw new Error(me(17));
    if (m) throw new Error(me(9));
    try {
      (m = !0), (a = t(a, B));
    } finally {
      m = !1;
    }
    return (
      (o = l).forEach((p) => {
        p();
      }),
      B
    );
  }
  function A(B) {
    if (typeof B != "function") throw new Error(me(10));
    (t = B), b({ type: Ha.REPLACE });
  }
  function P() {
    const B = f;
    return {
      subscribe(y) {
        if (typeof y != "object" || y === null) throw new Error(me(11));
        function p() {
          const k = y;
          k.next && k.next(d());
        }
        return p(), { unsubscribe: B(p) };
      },
      [Au]() {
        return this;
      },
    };
  }
  return (
    b({ type: Ha.INIT }),
    { dispatch: b, subscribe: f, getState: d, replaceReducer: A, [Au]: P }
  );
}
function Ig(e) {
  Object.keys(e).forEach((n) => {
    const r = e[n];
    if (typeof r(void 0, { type: Ha.INIT }) > "u") throw new Error(me(12));
    if (typeof r(void 0, { type: Ha.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(me(13));
  });
}
function xg(e) {
  const n = Object.keys(e),
    r = {};
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    typeof e[l] == "function" && (r[l] = e[l]);
  }
  const t = Object.keys(r);
  let a;
  try {
    Ig(r);
  } catch (o) {
    a = o;
  }
  return function (l = {}, c) {
    if (a) throw a;
    let m = !1;
    const h = {};
    for (let d = 0; d < t.length; d++) {
      const f = t[d],
        b = r[f],
        A = l[f],
        P = b(A, c);
      if (typeof P > "u") throw (c && c.type, new Error(me(14)));
      (h[f] = P), (m = m || P !== A);
    }
    return (m = m || t.length !== Object.keys(l).length), m ? h : l;
  };
}
function Ua(...e) {
  return e.length === 0
    ? (n) => n
    : e.length === 1
    ? e[0]
    : e.reduce(
        (n, r) =>
          (...t) =>
            n(r(...t))
      );
}
function Bg(...e) {
  return (n) => (r, t) => {
    const a = n(r, t);
    let o = () => {
      throw new Error(me(15));
    };
    const l = { getState: a.getState, dispatch: (m, ...h) => o(m, ...h) },
      c = e.map((m) => m(l));
    return (o = Ua(...c)(a.dispatch)), { ...a, dispatch: o };
  };
}
function Rg(e) {
  return Ql(e) && "type" in e && typeof e.type == "string";
}
var mm = Symbol.for("immer-nothing"),
  Mu = Symbol.for("immer-draftable"),
  Ne = Symbol.for("immer-state");
function Ze(e, ...n) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Lr = Object.getPrototypeOf;
function Fn(e) {
  return !!e && !!e[Ne];
}
function gn(e) {
  var n;
  return e
    ? fm(e) ||
        Array.isArray(e) ||
        !!e[Mu] ||
        !!((n = e.constructor) != null && n[Mu]) ||
        mi(e) ||
        fi(e)
    : !1;
}
var Lg = Object.prototype.constructor.toString();
function fm(e) {
  if (!e || typeof e != "object") return !1;
  const n = Lr(e);
  if (n === null) return !0;
  const r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === Lg;
}
function Pt(e, n) {
  di(e) === 0
    ? Object.entries(e).forEach(([r, t]) => {
        n(r, t, e);
      })
    : e.forEach((r, t) => n(t, r, e));
}
function di(e) {
  const n = e[Ne];
  return n ? n.type_ : Array.isArray(e) ? 1 : mi(e) ? 2 : fi(e) ? 3 : 0;
}
function Ko(e, n) {
  return di(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function hm(e, n, r) {
  const t = di(e);
  t === 2 ? e.set(n, r) : t === 3 ? e.add(r) : (e[n] = r);
}
function Dg(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function mi(e) {
  return e instanceof Map;
}
function fi(e) {
  return e instanceof Set;
}
function Vn(e) {
  return e.copy_ || e.base_;
}
function Jo(e, n) {
  if (mi(e)) return new Map(e);
  if (fi(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!n && fm(e))
    return Lr(e) ? { ...e } : Object.assign(Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Ne];
  let t = Reflect.ownKeys(r);
  for (let a = 0; a < t.length; a++) {
    const o = t[a],
      l = r[o];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (r[o] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[o],
        });
  }
  return Object.create(Lr(e), r);
}
function ql(e, n = !1) {
  return (
    hi(e) ||
      Fn(e) ||
      !gn(e) ||
      (di(e) > 1 && (e.set = e.add = e.clear = e.delete = _g),
      Object.freeze(e),
      n && Pt(e, (r, t) => ql(t, !0))),
    e
  );
}
function _g() {
  Ze(2);
}
function hi(e) {
  return Object.isFrozen(e);
}
var Ng = {};
function rr(e) {
  const n = Ng[e];
  return n || Ze(0, e), n;
}
var Et;
function pm() {
  return Et;
}
function Gg(e, n) {
  return {
    drafts_: [],
    parent_: e,
    immer_: n,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ku(e, n) {
  n &&
    (rr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = n));
}
function Yo(e) {
  $o(e), e.drafts_.forEach(Fg), (e.drafts_ = null);
}
function $o(e) {
  e === Et && (Et = e.parent_);
}
function wu(e) {
  return (Et = Gg(Et, e));
}
function Fg(e) {
  const n = e[Ne];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : (n.revoked_ = !0);
}
function Tu(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const r = n.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[Ne].modified_ && (Yo(n), Ze(4)),
        gn(e) && ((e = Wa(n, e)), n.parent_ || ja(n, e)),
        n.patches_ &&
          rr("Patches").generateReplacementPatches_(
            r[Ne].base_,
            e,
            n.patches_,
            n.inversePatches_
          ))
      : (e = Wa(n, r, [])),
    Yo(n),
    n.patches_ && n.patchListener_(n.patches_, n.inversePatches_),
    e !== mm ? e : void 0
  );
}
function Wa(e, n, r) {
  if (hi(n)) return n;
  const t = n[Ne];
  if (!t) return Pt(n, (a, o) => Pu(e, t, n, a, o, r)), n;
  if (t.scope_ !== e) return n;
  if (!t.modified_) return ja(e, t.base_, !0), t.base_;
  if (!t.finalized_) {
    (t.finalized_ = !0), t.scope_.unfinalizedDrafts_--;
    const a = t.copy_;
    let o = a,
      l = !1;
    t.type_ === 3 && ((o = new Set(a)), a.clear(), (l = !0)),
      Pt(o, (c, m) => Pu(e, t, a, c, m, r, l)),
      ja(e, a, !1),
      r &&
        e.patches_ &&
        rr("Patches").generatePatches_(t, r, e.patches_, e.inversePatches_);
  }
  return t.copy_;
}
function Pu(e, n, r, t, a, o, l) {
  if (Fn(a)) {
    const c =
        o && n && n.type_ !== 3 && !Ko(n.assigned_, t) ? o.concat(t) : void 0,
      m = Wa(e, a, c);
    if ((hm(r, t, m), Fn(m))) e.canAutoFreeze_ = !1;
    else return;
  } else l && r.add(a);
  if (gn(a) && !hi(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Wa(e, a), (!n || !n.scope_.parent_) && ja(e, a);
  }
}
function ja(e, n, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ql(n, r);
}
function zg(e, n) {
  const r = Array.isArray(e),
    t = {
      type_: r ? 1 : 0,
      scope_: n ? n.scope_ : pm(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: n,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let a = t,
    o = Xl;
  r && ((a = [t]), (o = It));
  const { revoke: l, proxy: c } = Proxy.revocable(a, o);
  return (t.draft_ = c), (t.revoke_ = l), c;
}
var Xl = {
    get(e, n) {
      if (n === Ne) return e;
      const r = Vn(e);
      if (!Ko(r, n)) return Og(e, r, n);
      const t = r[n];
      return e.finalized_ || !gn(t)
        ? t
        : t === Ki(e.base_, n)
        ? (Ji(e), (e.copy_[n] = Qo(t, e)))
        : t;
    },
    has(e, n) {
      return n in Vn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Vn(e));
    },
    set(e, n, r) {
      const t = gm(Vn(e), n);
      if (t != null && t.set) return t.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const a = Ki(Vn(e), n),
          o = a == null ? void 0 : a[Ne];
        if (o && o.base_ === r)
          return (e.copy_[n] = r), (e.assigned_[n] = !1), !0;
        if (Dg(r, a) && (r !== void 0 || Ko(e.base_, n))) return !0;
        Ji(e), Zo(e);
      }
      return (
        (e.copy_[n] === r && (r !== void 0 || n in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[n])) ||
          ((e.copy_[n] = r), (e.assigned_[n] = !0)),
        !0
      );
    },
    deleteProperty(e, n) {
      return (
        Ki(e.base_, n) !== void 0 || n in e.base_
          ? ((e.assigned_[n] = !1), Ji(e), Zo(e))
          : delete e.assigned_[n],
        e.copy_ && delete e.copy_[n],
        !0
      );
    },
    getOwnPropertyDescriptor(e, n) {
      const r = Vn(e),
        t = Reflect.getOwnPropertyDescriptor(r, n);
      return (
        t && {
          writable: !0,
          configurable: e.type_ !== 1 || n !== "length",
          enumerable: t.enumerable,
          value: r[n],
        }
      );
    },
    defineProperty() {
      Ze(11);
    },
    getPrototypeOf(e) {
      return Lr(e.base_);
    },
    setPrototypeOf() {
      Ze(12);
    },
  },
  It = {};
Pt(Xl, (e, n) => {
  It[e] = function () {
    return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
  };
});
It.deleteProperty = function (e, n) {
  return It.set.call(this, e, n, void 0);
};
It.set = function (e, n, r) {
  return Xl.set.call(this, e[0], n, r, e[0]);
};
function Ki(e, n) {
  const r = e[Ne];
  return (r ? Vn(r) : e)[n];
}
function Og(e, n, r) {
  var a;
  const t = gm(n, r);
  return t
    ? "value" in t
      ? t.value
      : (a = t.get) == null
      ? void 0
      : a.call(e.draft_)
    : void 0;
}
function gm(e, n) {
  if (!(n in e)) return;
  let r = Lr(e);
  for (; r; ) {
    const t = Object.getOwnPropertyDescriptor(r, n);
    if (t) return t;
    r = Lr(r);
  }
}
function Zo(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Zo(e.parent_));
}
function Ji(e) {
  e.copy_ || (e.copy_ = Jo(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Hg = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (n, r, t) => {
        if (typeof n == "function" && typeof r != "function") {
          const o = r;
          r = n;
          const l = this;
          return function (m = o, ...h) {
            return l.produce(m, (d) => r.call(this, d, ...h));
          };
        }
        typeof r != "function" && Ze(6),
          t !== void 0 && typeof t != "function" && Ze(7);
        let a;
        if (gn(n)) {
          const o = wu(this),
            l = Qo(n, void 0);
          let c = !0;
          try {
            (a = r(l)), (c = !1);
          } finally {
            c ? Yo(o) : $o(o);
          }
          return ku(o, t), Tu(a, o);
        } else if (!n || typeof n != "object") {
          if (
            ((a = r(n)),
            a === void 0 && (a = n),
            a === mm && (a = void 0),
            this.autoFreeze_ && ql(a, !0),
            t)
          ) {
            const o = [],
              l = [];
            rr("Patches").generateReplacementPatches_(n, a, o, l), t(o, l);
          }
          return a;
        } else Ze(1, n);
      }),
      (this.produceWithPatches = (n, r) => {
        if (typeof n == "function")
          return (l, ...c) => this.produceWithPatches(l, (m) => n(m, ...c));
        let t, a;
        return [
          this.produce(n, r, (l, c) => {
            (t = l), (a = c);
          }),
          t,
          a,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    gn(e) || Ze(8), Fn(e) && (e = vm(e));
    const n = wu(this),
      r = Qo(e, void 0);
    return (r[Ne].isManual_ = !0), $o(n), r;
  }
  finishDraft(e, n) {
    const r = e && e[Ne];
    (!r || !r.isManual_) && Ze(9);
    const { scope_: t } = r;
    return ku(t, n), Tu(void 0, t);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, n) {
    let r;
    for (r = n.length - 1; r >= 0; r--) {
      const a = n[r];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    r > -1 && (n = n.slice(r + 1));
    const t = rr("Patches").applyPatches_;
    return Fn(e) ? t(e, n) : this.produce(e, (a) => t(a, n));
  }
};
function Qo(e, n) {
  const r = mi(e)
    ? rr("MapSet").proxyMap_(e, n)
    : fi(e)
    ? rr("MapSet").proxySet_(e, n)
    : zg(e, n);
  return (n ? n.scope_ : pm()).drafts_.push(r), r;
}
function vm(e) {
  return Fn(e) || Ze(10, e), ym(e);
}
function ym(e) {
  if (!gn(e) || hi(e)) return e;
  const n = e[Ne];
  let r;
  if (n) {
    if (!n.modified_) return n.base_;
    (n.finalized_ = !0), (r = Jo(e, n.scope_.immer_.useStrictShallowCopy_));
  } else r = Jo(e, !0);
  return (
    Pt(r, (t, a) => {
      hm(r, t, ym(a));
    }),
    n && (n.finalized_ = !1),
    r
  );
}
var Ge = new Hg(),
  Cm = Ge.produce;
Ge.produceWithPatches.bind(Ge);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
function Ug(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(n);
}
function Wg(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(n);
}
function jg(
  e,
  n = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((t) =>
        typeof t == "function" ? `function ${t.name || "unnamed"}()` : typeof t
      )
      .join(", ");
    throw new TypeError(`${n}[${r}]`);
  }
}
var Eu = (e) => (Array.isArray(e) ? e : [e]);
function Vg(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return (
    jg(
      n,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    n
  );
}
function Kg(e, n) {
  const r = [],
    { length: t } = e;
  for (let a = 0; a < t; a++) r.push(e[a].apply(null, n));
  return r;
}
var Jg = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Yg = typeof WeakRef < "u" ? WeakRef : Jg,
  $g = 0,
  Iu = 1;
function na() {
  return { s: $g, v: void 0, o: null, p: null };
}
function es(e, n = {}) {
  let r = na();
  const { resultEqualityCheck: t } = n;
  let a,
    o = 0;
  function l() {
    var f;
    let c = r;
    const { length: m } = arguments;
    for (let b = 0, A = m; b < A; b++) {
      const P = arguments[b];
      if (typeof P == "function" || (typeof P == "object" && P !== null)) {
        let I = c.o;
        I === null && (c.o = I = new WeakMap());
        const B = I.get(P);
        B === void 0 ? ((c = na()), I.set(P, c)) : (c = B);
      } else {
        let I = c.p;
        I === null && (c.p = I = new Map());
        const B = I.get(P);
        B === void 0 ? ((c = na()), I.set(P, c)) : (c = B);
      }
    }
    const h = c;
    let d;
    if (
      (c.s === Iu ? (d = c.v) : ((d = e.apply(null, arguments)), o++),
      (h.s = Iu),
      t)
    ) {
      const b =
        ((f = a == null ? void 0 : a.deref) == null ? void 0 : f.call(a)) ?? a;
      b != null && t(b, d) && ((d = b), o !== 0 && o--),
        (a =
          (typeof d == "object" && d !== null) || typeof d == "function"
            ? new Yg(d)
            : d);
    }
    return (h.v = d), d;
  }
  return (
    (l.clearCache = () => {
      (r = na()), l.resetResultsCount();
    }),
    (l.resultsCount = () => o),
    (l.resetResultsCount = () => {
      o = 0;
    }),
    l
  );
}
function bm(e, ...n) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: n } : e,
    t = (...a) => {
      let o = 0,
        l = 0,
        c,
        m = {},
        h = a.pop();
      typeof h == "object" && ((m = h), (h = a.pop())),
        Ug(
          h,
          `createSelector expects an output function after the inputs, but received: [${typeof h}]`
        );
      const d = { ...r, ...m },
        {
          memoize: f,
          memoizeOptions: b = [],
          argsMemoize: A = es,
          argsMemoizeOptions: P = [],
          devModeChecks: I = {},
        } = d,
        B = Eu(b),
        y = Eu(P),
        p = Vg(a),
        v = f(function () {
          return o++, h.apply(null, arguments);
        }, ...B),
        k = A(function () {
          l++;
          const _ = Kg(p, arguments);
          return (c = v.apply(null, _)), c;
        }, ...y);
      return Object.assign(k, {
        resultFunc: h,
        memoizedResultFunc: v,
        dependencies: p,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0;
        },
        lastResult: () => c,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: f,
        argsMemoize: A,
      });
    };
  return Object.assign(t, { withTypes: () => t }), t;
}
var Zg = bm(es),
  Qg = Object.assign(
    (e, n = Zg) => {
      Wg(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        t = r.map((o) => e[o]);
      return n(t, (...o) => o.reduce((l, c, m) => ((l[r[m]] = c), l), {}));
    },
    { withTypes: () => Qg }
  );
function Sm(e) {
  return ({ dispatch: r, getState: t }) =>
    (a) =>
    (o) =>
      typeof o == "function" ? o(r, t, e) : a(o);
}
var qg = Sm(),
  Xg = Sm,
  ev = (...e) => {
    const n = bm(...e),
      r = Object.assign(
        (...t) => {
          const a = n(...t),
            o = (l, ...c) => a(Fn(l) ? vm(l) : l, ...c);
          return Object.assign(o, a), o;
        },
        { withTypes: () => r }
      );
    return r;
  };
ev(es);
var nv =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? Ua
            : Ua.apply(null, arguments);
      };
function Dr(e, n) {
  function r(...t) {
    if (n) {
      let a = n(...t);
      if (!a) throw new Error(Ie(0));
      return {
        type: e,
        payload: a.payload,
        ...("meta" in a && { meta: a.meta }),
        ...("error" in a && { error: a.error }),
      };
    }
    return { type: e, payload: t[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (t) => Rg(t) && t.type === e),
    r
  );
}
var Am = class qr extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, qr.prototype);
  }
  static get [Symbol.species]() {
    return qr;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0])
      ? new qr(...n[0].concat(this))
      : new qr(...n.concat(this));
  }
};
function xu(e) {
  return gn(e) ? Cm(e, () => {}) : e;
}
function Bu(e, n, r) {
  if (e.has(n)) {
    let a = e.get(n);
    return r.update && ((a = r.update(a, n, e)), e.set(n, a)), a;
  }
  if (!r.insert) throw new Error(Ie(10));
  const t = r.insert(n, e);
  return e.set(n, t), t;
}
function rv(e) {
  return typeof e == "boolean";
}
var tv = () =>
    function (n) {
      const {
        thunk: r = !0,
        immutableCheck: t = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: o = !0,
      } = n ?? {};
      let l = new Am();
      return r && (rv(r) ? l.push(qg) : l.push(Xg(r.extraArgument))), l;
    },
  av = "RTK_autoBatch",
  Mm = (e) => (n) => {
    setTimeout(n, e);
  },
  iv =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Mm(10),
  ov =
    (e = { type: "raf" }) =>
    (n) =>
    (...r) => {
      const t = n(...r);
      let a = !0,
        o = !1,
        l = !1;
      const c = new Set(),
        m =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? iv
            : e.type === "callback"
            ? e.queueNotification
            : Mm(e.timeout),
        h = () => {
          (l = !1), o && ((o = !1), c.forEach((d) => d()));
        };
      return Object.assign({}, t, {
        subscribe(d) {
          const f = () => a && d(),
            b = t.subscribe(f);
          return (
            c.add(d),
            () => {
              b(), c.delete(d);
            }
          );
        },
        dispatch(d) {
          var f;
          try {
            return (
              (a = !((f = d == null ? void 0 : d.meta) != null && f[av])),
              (o = !a),
              o && (l || ((l = !0), m(h))),
              t.dispatch(d)
            );
          } finally {
            a = !0;
          }
        },
      });
    },
  lv = (e) =>
    function (r) {
      const { autoBatch: t = !0 } = r ?? {};
      let a = new Am(e);
      return t && a.push(ov(typeof t == "object" ? t : void 0)), a;
    },
  sv = !0;
function uv(e) {
  const n = tv(),
    {
      reducer: r = void 0,
      middleware: t,
      devTools: a = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let c;
  if (typeof r == "function") c = r;
  else if (Ql(r)) c = xg(r);
  else throw new Error(Ie(1));
  let m;
  typeof t == "function" ? (m = t(n)) : (m = n());
  let h = Ua;
  a && (h = nv({ trace: !sv, ...(typeof a == "object" && a) }));
  const d = Bg(...m),
    f = lv(d);
  let b = typeof l == "function" ? l(f) : f();
  const A = h(...b);
  return dm(c, o, A);
}
function km(e) {
  const n = {},
    r = [];
  let t;
  const a = {
    addCase(o, l) {
      const c = typeof o == "string" ? o : o.type;
      if (!c) throw new Error(Ie(28));
      if (c in n) throw new Error(Ie(29));
      return (n[c] = l), a;
    },
    addMatcher(o, l) {
      return r.push({ matcher: o, reducer: l }), a;
    },
    addDefaultCase(o) {
      return (t = o), a;
    },
  };
  return e(a), [n, r, t];
}
function cv(e) {
  return typeof e == "function";
}
function dv(e, n) {
  let [r, t, a] = km(n),
    o;
  if (cv(e)) o = () => xu(e());
  else {
    const c = xu(e);
    o = () => c;
  }
  function l(c = o(), m) {
    let h = [
      r[m.type],
      ...t.filter(({ matcher: d }) => d(m)).map(({ reducer: d }) => d),
    ];
    return (
      h.filter((d) => !!d).length === 0 && (h = [a]),
      h.reduce((d, f) => {
        if (f)
          if (Fn(d)) {
            const A = f(d, m);
            return A === void 0 ? d : A;
          } else {
            if (gn(d)) return Cm(d, (b) => f(b, m));
            {
              const b = f(d, m);
              if (b === void 0) {
                if (d === null) return d;
                throw new Error(Ie(9));
              }
              return b;
            }
          }
        return d;
      }, c)
    );
  }
  return (l.getInitialState = o), l;
}
var mv = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  fv = (e = 21) => {
    let n = "",
      r = e;
    for (; r--; ) n += mv[(Math.random() * 64) | 0];
    return n;
  },
  hv = Symbol.for("rtk-slice-createasyncthunk");
function pv(e, n) {
  return `${e}/${n}`;
}
function gv({ creators: e } = {}) {
  var r;
  const n = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[hv];
  return function (a) {
    const { name: o, reducerPath: l = o } = a;
    if (!o) throw new Error(Ie(11));
    typeof process < "u";
    const c =
        (typeof a.reducers == "function" ? a.reducers(Cv()) : a.reducers) || {},
      m = Object.keys(c),
      h = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(v, k) {
          const L = typeof v == "string" ? v : v.type;
          if (!L) throw new Error(Ie(12));
          if (L in h.sliceCaseReducersByType) throw new Error(Ie(13));
          return (h.sliceCaseReducersByType[L] = k), d;
        },
        addMatcher(v, k) {
          return h.sliceMatchers.push({ matcher: v, reducer: k }), d;
        },
        exposeAction(v, k) {
          return (h.actionCreators[v] = k), d;
        },
        exposeCaseReducer(v, k) {
          return (h.sliceCaseReducersByName[v] = k), d;
        },
      };
    m.forEach((v) => {
      const k = c[v],
        L = {
          reducerName: v,
          type: pv(o, v),
          createNotation: typeof a.reducers == "function",
        };
      Sv(k) ? Mv(L, k, d, n) : bv(L, k, d);
    });
    function f() {
      const [v = {}, k = [], L = void 0] =
          typeof a.extraReducers == "function"
            ? km(a.extraReducers)
            : [a.extraReducers],
        _ = { ...v, ...h.sliceCaseReducersByType };
      return dv(a.initialState, (G) => {
        for (let N in _) G.addCase(N, _[N]);
        for (let N of h.sliceMatchers) G.addMatcher(N.matcher, N.reducer);
        for (let N of k) G.addMatcher(N.matcher, N.reducer);
        L && G.addDefaultCase(L);
      });
    }
    const b = (v) => v,
      A = new Map();
    let P;
    function I(v, k) {
      return P || (P = f()), P(v, k);
    }
    function B() {
      return P || (P = f()), P.getInitialState();
    }
    function y(v, k = !1) {
      function L(G) {
        let N = G[v];
        return typeof N > "u" && k && (N = B()), N;
      }
      function _(G = b) {
        const N = Bu(A, k, { insert: () => new WeakMap() });
        return Bu(N, G, {
          insert: () => {
            const K = {};
            for (const [O, U] of Object.entries(a.selectors ?? {}))
              K[O] = vv(U, G, B, k);
            return K;
          },
        });
      }
      return {
        reducerPath: v,
        getSelectors: _,
        get selectors() {
          return _(L);
        },
        selectSlice: L,
      };
    }
    const p = {
      name: o,
      reducer: I,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: B,
      ...y(l),
      injectInto(v, { reducerPath: k, ...L } = {}) {
        const _ = k ?? l;
        return (
          v.inject({ reducerPath: _, reducer: I }, L), { ...p, ...y(_, !0) }
        );
      },
    };
    return p;
  };
}
function vv(e, n, r, t) {
  function a(o, ...l) {
    let c = n(o);
    return typeof c > "u" && t && (c = r()), e(c, ...l);
  }
  return (a.unwrapped = e), a;
}
var yv = gv();
function Cv() {
  function e(n, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: n, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(n) {
        return Object.assign(
          {
            [n.name](...r) {
              return n(...r);
            },
          }[n.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(n, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: n,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function bv({ type: e, reducerName: n, createNotation: r }, t, a) {
  let o, l;
  if ("reducer" in t) {
    if (r && !Av(t)) throw new Error(Ie(17));
    (o = t.reducer), (l = t.prepare);
  } else o = t;
  a.addCase(e, o)
    .exposeCaseReducer(n, o)
    .exposeAction(n, l ? Dr(e, l) : Dr(e));
}
function Sv(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Av(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Mv({ type: e, reducerName: n }, r, t, a) {
  if (!a) throw new Error(Ie(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: c,
      rejected: m,
      settled: h,
      options: d,
    } = r,
    f = a(e, o, d);
  t.exposeAction(n, f),
    l && t.addCase(f.fulfilled, l),
    c && t.addCase(f.pending, c),
    m && t.addCase(f.rejected, m),
    h && t.addMatcher(f.settled, h),
    t.exposeCaseReducer(n, {
      fulfilled: l || ra,
      pending: c || ra,
      rejected: m || ra,
      settled: h || ra,
    });
}
function ra() {}
var kv = (e, n) => {
    if (typeof e != "function") throw new Error(Ie(32));
  },
  ns = "listenerMiddleware",
  wv = (e) => {
    let { type: n, actionCreator: r, matcher: t, predicate: a, effect: o } = e;
    if (n) a = Dr(n).match;
    else if (r) (n = r.type), (a = r.match);
    else if (t) a = t;
    else if (!a) throw new Error(Ie(21));
    return kv(o), { predicate: a, type: n, effect: o };
  },
  Tv = Object.assign(
    (e) => {
      const { type: n, predicate: r, effect: t } = wv(e);
      return {
        id: fv(),
        effect: t,
        type: n,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ie(22));
        },
      };
    },
    { withTypes: () => Tv }
  ),
  Pv = Object.assign(Dr(`${ns}/add`), { withTypes: () => Pv });
Dr(`${ns}/removeAll`);
var Ev = Object.assign(Dr(`${ns}/remove`), { withTypes: () => Ev });
function Ie(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const wm = yv({
    name: "user",
    initialState: [],
    reducers: {
      addUser(e, n) {
        e.push(n.payload);
      },
      removeUser(e, n) {
        e.splice(n.payload, 1), console.log(n.payload);
      },
      deleteUser(e, n) {
        return [];
      },
    },
  }),
  { addUser: Iv, deleteUser: xv, removeUser: Bv } = wm.actions,
  Rv = () => {
    const e = Zl(),
      n = () => {
        e(xv()), console.log("h55ello");
      };
    return D.jsx(D.Fragment, {
      children: D.jsx("button", {
        className: "btn del-btn",
        style: { marginTop: "3rem" },
        onClick: () => {
          n();
        },
        children: "DELETE - ALL",
      }),
    });
  };
var qo = { exports: {} };
(function (e, n) {
  (function () {
    var r = 9007199254740992,
      t = -r,
      a = "0123456789",
      o = "abcdefghijklmnopqrstuvwxyz",
      l = o.toUpperCase(),
      c = a + "abcdef";
    function m(i) {
      (this.name = "UnsupportedError"),
        (this.message = i || "This feature is not supported on this platform");
    }
    (m.prototype = new Error()), (m.prototype.constructor = m);
    var h = Array.prototype.slice;
    function d(i) {
      if (!(this instanceof d))
        return i || (i = null), i === null ? new d() : new d(i);
      if (typeof i == "function") return (this.random = i), this;
      arguments.length && (this.seed = 0);
      for (var s = 0; s < arguments.length; s++) {
        var u = 0;
        if (Object.prototype.toString.call(arguments[s]) === "[object String]")
          for (var g = 0; g < arguments[s].length; g++) {
            for (var S = 0, x = 0; x < arguments[s].length; x++)
              S = arguments[s].charCodeAt(x) + (S << 6) + (S << 16) - S;
            u += S;
          }
        else u = arguments[s];
        this.seed += (arguments.length - s) * u;
      }
      return (
        (this.mt = this.mersenne_twister(this.seed)),
        (this.bimd5 = this.blueimp_md5()),
        (this.random = function () {
          return this.mt.random(this.seed);
        }),
        this
      );
    }
    d.prototype.VERSION = "1.1.11";
    function f(i, s) {
      if (((i = i || {}), s))
        for (var u in s) typeof i[u] > "u" && (i[u] = s[u]);
      return i;
    }
    function b(i) {
      return Array.apply(null, Array(i)).map(function (s, u) {
        return u;
      });
    }
    function A(i, s) {
      if (i) throw new RangeError(s);
    }
    var P = function () {
      throw new Error("No Base64 encoder available.");
    };
    (function () {
      typeof btoa == "function"
        ? (P = btoa)
        : typeof Buffer == "function" &&
          (P = function (s) {
            return new Buffer(s).toString("base64");
          });
    })(),
      (d.prototype.bool = function (i) {
        return (
          (i = f(i, { likelihood: 50 })),
          A(
            i.likelihood < 0 || i.likelihood > 100,
            "Chance: Likelihood accepts values from 0 to 100."
          ),
          this.random() * 100 < i.likelihood
        );
      }),
      (d.prototype.falsy = function (i) {
        i = f(i, { pool: [!1, null, 0, NaN, "", void 0] });
        var s = i.pool,
          u = this.integer({ min: 0, max: s.length - 1 }),
          g = s[u];
        return g;
      }),
      (d.prototype.animal = function (i) {
        if (((i = f(i)), typeof i.type < "u"))
          return (
            A(
              !this.get("animals")[i.type.toLowerCase()],
              "Please pick from desert, ocean, grassland, forest, zoo, pets, farm."
            ),
            this.pick(this.get("animals")[i.type.toLowerCase()])
          );
        var s = [
          "desert",
          "forest",
          "ocean",
          "zoo",
          "farm",
          "pet",
          "grassland",
        ];
        return this.pick(this.get("animals")[this.pick(s)]);
      }),
      (d.prototype.character = function (i) {
        i = f(i);
        var s = "!@#$%^&*()[]",
          u,
          g;
        return (
          i.casing === "lower"
            ? (u = o)
            : i.casing === "upper"
            ? (u = l)
            : (u = o + l),
          i.pool
            ? (g = i.pool)
            : ((g = ""),
              i.alpha && (g += u),
              i.numeric && (g += a),
              i.symbols && (g += s),
              g || (g = u + a + s)),
          g.charAt(this.natural({ max: g.length - 1 }))
        );
      }),
      (d.prototype.floating = function (i) {
        (i = f(i, { fixed: 4 })),
          A(
            i.fixed && i.precision,
            "Chance: Cannot specify both fixed and precision."
          );
        var s,
          u = Math.pow(10, i.fixed),
          g = r / u,
          S = -g;
        A(
          i.min && i.fixed && i.min < S,
          "Chance: Min specified is out of range with fixed. Min should be, at least, " +
            S
        ),
          A(
            i.max && i.fixed && i.max > g,
            "Chance: Max specified is out of range with fixed. Max should be, at most, " +
              g
          ),
          (i = f(i, { min: S, max: g })),
          (s = this.integer({ min: i.min * u, max: i.max * u }));
        var x = (s / u).toFixed(i.fixed);
        return parseFloat(x);
      }),
      (d.prototype.integer = function (i) {
        return (
          (i = f(i, { min: t, max: r })),
          A(i.min > i.max, "Chance: Min cannot be greater than Max."),
          Math.floor(this.random() * (i.max - i.min + 1) + i.min)
        );
      }),
      (d.prototype.natural = function (i) {
        if (
          ((i = f(i, { min: 0, max: r })),
          typeof i.numerals == "number" &&
            (A(i.numerals < 1, "Chance: Numerals cannot be less than one."),
            (i.min = Math.pow(10, i.numerals - 1)),
            (i.max = Math.pow(10, i.numerals) - 1)),
          A(i.min < 0, "Chance: Min cannot be less than zero."),
          i.exclude)
        ) {
          A(!Array.isArray(i.exclude), "Chance: exclude must be an array.");
          for (var s in i.exclude)
            A(
              !Number.isInteger(i.exclude[s]),
              "Chance: exclude must be numbers."
            );
          var u =
              i.min + this.natural({ max: i.max - i.min - i.exclude.length }),
            g = i.exclude.sort();
          for (var S in g) {
            if (u < g[S]) break;
            u++;
          }
          return u;
        }
        return this.integer(i);
      }),
      (d.prototype.prime = function (i) {
        (i = f(i, { min: 0, max: 1e4 })),
          A(i.min < 0, "Chance: Min cannot be less than zero."),
          A(i.min > i.max, "Chance: Min cannot be greater than Max.");
        var s = k.primes[k.primes.length - 1];
        if (i.max > s)
          for (var u = s + 2; u <= i.max; ++u)
            this.is_prime(u) && k.primes.push(u);
        var g = k.primes.filter(function (S) {
          return S >= i.min && S <= i.max;
        });
        return this.pick(g);
      }),
      (d.prototype.is_prime = function (i) {
        if (i % 1 || i < 2) return !1;
        if (i % 2 === 0) return i === 2;
        if (i % 3 === 0) return i === 3;
        for (var s = Math.sqrt(i), u = 5; u <= s; u += 6)
          if (i % u === 0 || i % (u + 2) === 0) return !1;
        return !0;
      }),
      (d.prototype.hex = function (i) {
        (i = f(i, { min: 0, max: r, casing: "lower" })),
          A(i.min < 0, "Chance: Min cannot be less than zero.");
        var s = this.natural({ min: i.min, max: i.max });
        return i.casing === "upper"
          ? s.toString(16).toUpperCase()
          : s.toString(16);
      }),
      (d.prototype.letter = function (i) {
        i = f(i, { casing: "lower" });
        var s = "abcdefghijklmnopqrstuvwxyz",
          u = this.character({ pool: s });
        return i.casing === "upper" && (u = u.toUpperCase()), u;
      }),
      (d.prototype.string = function (i) {
        (i = f(i, { min: 5, max: 20 })),
          i.length !== 0 &&
            !i.length &&
            (i.length = this.natural({ min: i.min, max: i.max })),
          A(i.length < 0, "Chance: Length cannot be less than zero.");
        var s = i.length,
          u = this.n(this.character, s, i);
        return u.join("");
      });
    function I(i) {
      this.c = i;
    }
    I.prototype = {
      substitute: function () {
        return this.c;
      },
    };
    function B(i) {
      this.c = i;
    }
    B.prototype = {
      substitute: function () {
        if (!/[{}\\]/.test(this.c))
          throw new Error('Invalid escape sequence: "\\' + this.c + '".');
        return this.c;
      },
    };
    function y(i) {
      this.c = i;
    }
    y.prototype = {
      replacers: {
        "#": function (i) {
          return i.character({ pool: a });
        },
        A: function (i) {
          return i.character({ pool: l });
        },
        a: function (i) {
          return i.character({ pool: o });
        },
      },
      substitute: function (i) {
        var s = this.replacers[this.c];
        if (!s)
          throw new Error('Invalid replacement character: "' + this.c + '".');
        return s(i);
      },
    };
    function p(i) {
      for (var s = [], u = "identity", g = 0; g < i.length; g++) {
        var S = i[g];
        switch (u) {
          case "escape":
            s.push(new B(S)), (u = "identity");
            break;
          case "identity":
            S === "{"
              ? (u = "replace")
              : S === "\\"
              ? (u = "escape")
              : s.push(new I(S));
            break;
          case "replace":
            S === "}" ? (u = "identity") : s.push(new y(S));
            break;
        }
      }
      return s;
    }
    (d.prototype.template = function (i) {
      if (!i) throw new Error("Template string is required");
      var s = this;
      return p(i)
        .map(function (u) {
          return u.substitute(s);
        })
        .join("");
    }),
      (d.prototype.buffer = function (i) {
        if (typeof Buffer > "u")
          throw new m(
            "Sorry, the buffer() function is not supported on your platform"
          );
        (i = f(i, { length: this.natural({ min: 5, max: 20 }) })),
          A(i.length < 0, "Chance: Length cannot be less than zero.");
        var s = i.length,
          u = this.n(this.character, s, i);
        return Buffer.from(u);
      }),
      (d.prototype.capitalize = function (i) {
        return i.charAt(0).toUpperCase() + i.substr(1);
      }),
      (d.prototype.mixin = function (i) {
        for (var s in i) this[s] = i[s];
        return this;
      }),
      (d.prototype.unique = function (i, s, u) {
        A(
          typeof i != "function",
          "Chance: The first argument must be a function."
        );
        var g = function (E, Q) {
          return E.indexOf(Q) !== -1;
        };
        u && (g = u.comparator || g);
        for (
          var S = [], x = 0, w, C = s * 50, M = h.call(arguments, 2);
          S.length < s;

        ) {
          var T = JSON.parse(JSON.stringify(M));
          if (
            ((w = i.apply(this, T)), g(S, w) || (S.push(w), (x = 0)), ++x > C)
          )
            throw new RangeError(
              "Chance: num is likely too large for sample set"
            );
        }
        return S;
      }),
      (d.prototype.n = function (i, s) {
        A(
          typeof i != "function",
          "Chance: The first argument must be a function."
        ),
          typeof s > "u" && (s = 1);
        var u = s,
          g = [],
          S = h.call(arguments, 2);
        for (u = Math.max(0, u), null; u--; null) g.push(i.apply(this, S));
        return g;
      }),
      (d.prototype.pad = function (i, s, u) {
        return (
          (u = u || "0"),
          (i = i + ""),
          i.length >= s ? i : new Array(s - i.length + 1).join(u) + i
        );
      }),
      (d.prototype.pick = function (i, s) {
        if (i.length === 0)
          throw new RangeError("Chance: Cannot pick() from an empty array");
        return !s || s === 1
          ? i[this.natural({ max: i.length - 1 })]
          : this.shuffle(i).slice(0, s);
      }),
      (d.prototype.pickone = function (i) {
        if (i.length === 0)
          throw new RangeError("Chance: Cannot pickone() from an empty array");
        return i[this.natural({ max: i.length - 1 })];
      }),
      (d.prototype.pickset = function (i, s) {
        if (s === 0) return [];
        if (i.length === 0)
          throw new RangeError("Chance: Cannot pickset() from an empty array");
        if (s < 0)
          throw new RangeError("Chance: Count must be a positive number");
        if (!s || s === 1) return [this.pickone(i)];
        var u = i.slice(0),
          g = u.length;
        return this.n(function () {
          var S = this.natural({ max: --g }),
            x = u[S];
          return (u[S] = u[g]), x;
        }, Math.min(g, s));
      }),
      (d.prototype.shuffle = function (i) {
        for (
          var s = [],
            u = 0,
            g = Number(i.length),
            S = b(g),
            x = g - 1,
            w,
            C = 0;
          C < g;
          C++
        )
          (w = this.natural({ max: x })),
            (u = S[w]),
            (s[C] = i[u]),
            (S[w] = S[x]),
            (x -= 1);
        return s;
      }),
      (d.prototype.weighted = function (i, s, u) {
        if (i.length !== s.length)
          throw new RangeError(
            "Chance: Length of array and weights must match"
          );
        for (var g = 0, S, x = 0; x < s.length; ++x) {
          if (((S = s[x]), isNaN(S)))
            throw new RangeError("Chance: All weights must be numbers");
          S > 0 && (g += S);
        }
        if (g === 0)
          throw new RangeError("Chance: No valid entries in array weights");
        var w = this.random() * g,
          C = 0,
          M = -1,
          T;
        for (x = 0; x < s.length; ++x) {
          if (((S = s[x]), (C += S), S > 0)) {
            if (w <= C) {
              T = x;
              break;
            }
            M = x;
          }
          x === s.length - 1 && (T = M);
        }
        var E = i[T];
        return (
          (u = typeof u > "u" ? !1 : u),
          u && (i.splice(T, 1), s.splice(T, 1)),
          E
        );
      }),
      (d.prototype.paragraph = function (i) {
        i = f(i);
        var s = i.sentences || this.natural({ min: 3, max: 7 }),
          u = this.n(this.sentence, s),
          g =
            i.linebreak === !0
              ? `
`
              : " ";
        return u.join(g);
      }),
      (d.prototype.sentence = function (i) {
        i = f(i);
        var s = i.words || this.natural({ min: 12, max: 18 }),
          u = i.punctuation,
          g,
          S = this.n(this.word, s);
        return (
          (g = S.join(" ")),
          (g = this.capitalize(g)),
          u !== !1 && !/^[.?;!:]$/.test(u) && (u = "."),
          u && (g += u),
          g
        );
      }),
      (d.prototype.syllable = function (i) {
        i = f(i);
        for (
          var s = i.length || this.natural({ min: 2, max: 3 }),
            u = "bcdfghjklmnprstvwz",
            g = "aeiou",
            S = u + g,
            x = "",
            w,
            C = 0;
          C < s;
          C++
        )
          C === 0
            ? (w = this.character({ pool: S }))
            : u.indexOf(w) === -1
            ? (w = this.character({ pool: u }))
            : (w = this.character({ pool: g })),
            (x += w);
        return i.capitalize && (x = this.capitalize(x)), x;
      }),
      (d.prototype.word = function (i) {
        (i = f(i)),
          A(
            i.syllables && i.length,
            "Chance: Cannot specify both syllables AND length."
          );
        var s = i.syllables || this.natural({ min: 1, max: 3 }),
          u = "";
        if (i.length) {
          do u += this.syllable();
          while (u.length < i.length);
          u = u.substring(0, i.length);
        } else for (var g = 0; g < s; g++) u += this.syllable();
        return i.capitalize && (u = this.capitalize(u)), u;
      }),
      (d.prototype.age = function (i) {
        i = f(i);
        var s;
        switch (i.type) {
          case "child":
            s = { min: 0, max: 12 };
            break;
          case "teen":
            s = { min: 13, max: 19 };
            break;
          case "adult":
            s = { min: 18, max: 65 };
            break;
          case "senior":
            s = { min: 65, max: 100 };
            break;
          case "all":
            s = { min: 0, max: 100 };
            break;
          default:
            s = { min: 18, max: 65 };
            break;
        }
        return this.natural(s);
      }),
      (d.prototype.birthday = function (i) {
        var s = this.age(i),
          u = new Date(),
          g = u.getFullYear();
        if (i && i.type) {
          var S = new Date(),
            x = new Date();
          S.setFullYear(g - s - 1),
            x.setFullYear(g - s),
            (i = f(i, { min: S, max: x }));
        } else if (i && (i.minAge !== void 0 || i.maxAge !== void 0)) {
          A(i.minAge < 0, "Chance: MinAge cannot be less than zero."),
            A(
              i.minAge > i.maxAge,
              "Chance: MinAge cannot be greater than MaxAge."
            );
          var w = i.minAge !== void 0 ? i.minAge : 0,
            C = i.maxAge !== void 0 ? i.maxAge : 100,
            M = new Date(g - C - 1, u.getMonth(), u.getDate()),
            T = new Date(g - w, u.getMonth(), u.getDate());
          M.setDate(M.getDate() + 1),
            T.setDate(T.getDate() + 1),
            T.setMilliseconds(T.getMilliseconds() - 1),
            (i = f(i, { min: M, max: T }));
        } else i = f(i, { year: g - s });
        return this.date(i);
      }),
      (d.prototype.cpf = function (i) {
        i = f(i, { formatted: !0 });
        var s = this.n(this.natural, 9, { max: 9 }),
          u =
            s[8] * 2 +
            s[7] * 3 +
            s[6] * 4 +
            s[5] * 5 +
            s[4] * 6 +
            s[3] * 7 +
            s[2] * 8 +
            s[1] * 9 +
            s[0] * 10;
        (u = 11 - (u % 11)), u >= 10 && (u = 0);
        var g =
          u * 2 +
          s[8] * 3 +
          s[7] * 4 +
          s[6] * 5 +
          s[5] * 6 +
          s[4] * 7 +
          s[3] * 8 +
          s[2] * 9 +
          s[1] * 10 +
          s[0] * 11;
        (g = 11 - (g % 11)), g >= 10 && (g = 0);
        var S =
          "" +
          s[0] +
          s[1] +
          s[2] +
          "." +
          s[3] +
          s[4] +
          s[5] +
          "." +
          s[6] +
          s[7] +
          s[8] +
          "-" +
          u +
          g;
        return i.formatted ? S : S.replace(/\D/g, "");
      }),
      (d.prototype.cnpj = function (i) {
        i = f(i, { formatted: !0 });
        var s = this.n(this.natural, 12, { max: 12 }),
          u =
            s[11] * 2 +
            s[10] * 3 +
            s[9] * 4 +
            s[8] * 5 +
            s[7] * 6 +
            s[6] * 7 +
            s[5] * 8 +
            s[4] * 9 +
            s[3] * 2 +
            s[2] * 3 +
            s[1] * 4 +
            s[0] * 5;
        (u = 11 - (u % 11)), u < 2 && (u = 0);
        var g =
          u * 2 +
          s[11] * 3 +
          s[10] * 4 +
          s[9] * 5 +
          s[8] * 6 +
          s[7] * 7 +
          s[6] * 8 +
          s[5] * 9 +
          s[4] * 2 +
          s[3] * 3 +
          s[2] * 4 +
          s[1] * 5 +
          s[0] * 6;
        (g = 11 - (g % 11)), g < 2 && (g = 0);
        var S =
          "" +
          s[0] +
          s[1] +
          "." +
          s[2] +
          s[3] +
          s[4] +
          "." +
          s[5] +
          s[6] +
          s[7] +
          "/" +
          s[8] +
          s[9] +
          s[10] +
          s[11] +
          "-" +
          u +
          g;
        return i.formatted ? S : S.replace(/\D/g, "");
      }),
      (d.prototype.first = function (i) {
        return (
          (i = f(i, { gender: this.gender(), nationality: "en" })),
          this.pick(
            this.get("firstNames")[i.gender.toLowerCase()][
              i.nationality.toLowerCase()
            ]
          )
        );
      }),
      (d.prototype.profession = function (i) {
        return (
          (i = f(i)),
          i.rank
            ? this.pick(["Apprentice ", "Junior ", "Senior ", "Lead "]) +
              this.pick(this.get("profession"))
            : this.pick(this.get("profession"))
        );
      }),
      (d.prototype.company = function () {
        return this.pick(this.get("company"));
      }),
      (d.prototype.gender = function (i) {
        return (
          (i = f(i, { extraGenders: [] })),
          this.pick(["Male", "Female"].concat(i.extraGenders))
        );
      }),
      (d.prototype.last = function (i) {
        if (((i = f(i, { nationality: "*" })), i.nationality === "*")) {
          var s = [],
            u = this.get("lastNames");
          return (
            Object.keys(u).forEach(function (g) {
              s = s.concat(u[g]);
            }),
            this.pick(s)
          );
        } else
          return this.pick(this.get("lastNames")[i.nationality.toLowerCase()]);
      }),
      (d.prototype.israelId = function () {
        for (
          var i = this.string({ pool: "0123456789", length: 8 }), s = 0, u = 0;
          u < i.length;
          u++
        ) {
          var g = i[u] * (u / 2 === parseInt(u / 2) ? 1 : 2);
          (g = this.pad(g, 2).toString()),
            (g = parseInt(g[0]) + parseInt(g[1])),
            (s = s + g);
        }
        return (
          (i =
            i + (10 - parseInt(s.toString().slice(-1))).toString().slice(-1)),
          i
        );
      }),
      (d.prototype.mrz = function (i) {
        var s = function (S) {
            var x = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""),
              w = [7, 3, 1],
              C = 0;
            return (
              typeof S != "string" && (S = S.toString()),
              S.split("").forEach(function (M, T) {
                var E = x.indexOf(M);
                E !== -1 ? (M = E === 0 ? 0 : E + 9) : (M = parseInt(M, 10)),
                  (M *= w[T % w.length]),
                  (C += M);
              }),
              C % 10
            );
          },
          u = function (S) {
            var x = function (C) {
                return new Array(C + 1).join("<");
              },
              w = [
                "P<",
                S.issuer,
                S.last.toUpperCase(),
                "<<",
                S.first.toUpperCase(),
                x(39 - (S.last.length + S.first.length + 2)),
                S.passportNumber,
                s(S.passportNumber),
                S.nationality,
                S.dob,
                s(S.dob),
                S.gender,
                S.expiry,
                s(S.expiry),
                x(14),
                s(x(14)),
              ].join("");
            return w + s(w.substr(44, 10) + w.substr(57, 7) + w.substr(65, 7));
          },
          g = this;
        return (
          (i = f(i, {
            first: this.first(),
            last: this.last(),
            passportNumber: this.integer({ min: 1e8, max: 999999999 }),
            dob: (function () {
              var S = g.birthday({ type: "adult" });
              return [
                S.getFullYear().toString().substr(2),
                g.pad(S.getMonth() + 1, 2),
                g.pad(S.getDate(), 2),
              ].join("");
            })(),
            expiry: (function () {
              var S = new Date();
              return [
                (S.getFullYear() + 5).toString().substr(2),
                g.pad(S.getMonth() + 1, 2),
                g.pad(S.getDate(), 2),
              ].join("");
            })(),
            gender: this.gender() === "Female" ? "F" : "M",
            issuer: "GBR",
            nationality: "GBR",
          })),
          u(i)
        );
      }),
      (d.prototype.name = function (i) {
        i = f(i);
        var s = this.first(i),
          u = this.last(i),
          g;
        return (
          i.middle
            ? (g = s + " " + this.first(i) + " " + u)
            : i.middle_initial
            ? (g =
                s +
                " " +
                this.character({ alpha: !0, casing: "upper" }) +
                ". " +
                u)
            : (g = s + " " + u),
          i.prefix && (g = this.prefix(i) + " " + g),
          i.suffix && (g = g + " " + this.suffix(i)),
          g
        );
      }),
      (d.prototype.name_prefixes = function (i) {
        (i = i || "all"), (i = i.toLowerCase());
        var s = [{ name: "Doctor", abbreviation: "Dr." }];
        return (
          (i === "male" || i === "all") &&
            s.push({ name: "Mister", abbreviation: "Mr." }),
          (i === "female" || i === "all") &&
            (s.push({ name: "Miss", abbreviation: "Miss" }),
            s.push({ name: "Misses", abbreviation: "Mrs." })),
          s
        );
      }),
      (d.prototype.prefix = function (i) {
        return this.name_prefix(i);
      }),
      (d.prototype.name_prefix = function (i) {
        return (
          (i = f(i, { gender: "all" })),
          i.full
            ? this.pick(this.name_prefixes(i.gender)).name
            : this.pick(this.name_prefixes(i.gender)).abbreviation
        );
      }),
      (d.prototype.HIDN = function () {
        var i = "0123456789",
          s = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ",
          u = "";
        return (
          (u += this.string({ pool: i, length: 6 })),
          (u += this.string({ pool: s, length: 2 })),
          u
        );
      }),
      (d.prototype.ssn = function (i) {
        i = f(i, { ssnFour: !1, dashes: !0 });
        var s = "1234567890",
          u,
          g = i.dashes ? "-" : "";
        return (
          i.ssnFour
            ? (u = this.string({ pool: s, length: 4 }))
            : (u =
                this.string({ pool: s, length: 3 }) +
                g +
                this.string({ pool: s, length: 2 }) +
                g +
                this.string({ pool: s, length: 4 })),
          u
        );
      }),
      (d.prototype.aadhar = function (i) {
        i = f(i, { onlyLastFour: !1, separatedByWhiteSpace: !0 });
        var s = "1234567890",
          u,
          g = i.separatedByWhiteSpace ? " " : "";
        return (
          i.onlyLastFour
            ? (u = this.string({ pool: s, length: 4 }))
            : (u =
                this.string({ pool: s, length: 4 }) +
                g +
                this.string({ pool: s, length: 4 }) +
                g +
                this.string({ pool: s, length: 4 })),
          u
        );
      }),
      (d.prototype.name_suffixes = function () {
        var i = [
          { name: "Doctor of Osteopathic Medicine", abbreviation: "D.O." },
          { name: "Doctor of Philosophy", abbreviation: "Ph.D." },
          { name: "Esquire", abbreviation: "Esq." },
          { name: "Junior", abbreviation: "Jr." },
          { name: "Juris Doctor", abbreviation: "J.D." },
          { name: "Master of Arts", abbreviation: "M.A." },
          { name: "Master of Business Administration", abbreviation: "M.B.A." },
          { name: "Master of Science", abbreviation: "M.S." },
          { name: "Medical Doctor", abbreviation: "M.D." },
          { name: "Senior", abbreviation: "Sr." },
          { name: "The Third", abbreviation: "III" },
          { name: "The Fourth", abbreviation: "IV" },
          { name: "Bachelor of Engineering", abbreviation: "B.E" },
          { name: "Bachelor of Technology", abbreviation: "B.TECH" },
        ];
        return i;
      }),
      (d.prototype.suffix = function (i) {
        return this.name_suffix(i);
      }),
      (d.prototype.name_suffix = function (i) {
        return (
          (i = f(i)),
          i.full
            ? this.pick(this.name_suffixes()).name
            : this.pick(this.name_suffixes()).abbreviation
        );
      }),
      (d.prototype.nationalities = function () {
        return this.get("nationalities");
      }),
      (d.prototype.nationality = function () {
        var i = this.pick(this.nationalities());
        return i.name;
      }),
      (d.prototype.zodiac = function () {
        const i = [
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn",
          "Aquarius",
          "Pisces",
        ];
        return this.pickone(i);
      }),
      (d.prototype.android_id = function () {
        return (
          "APA91" +
          this.string({
            pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
            length: 178,
          })
        );
      }),
      (d.prototype.apple_token = function () {
        return this.string({ pool: "abcdef1234567890", length: 64 });
      }),
      (d.prototype.wp8_anid2 = function () {
        return P(this.hash({ length: 32 }));
      }),
      (d.prototype.wp7_anid = function () {
        return (
          "A=" +
          this.guid().replace(/-/g, "").toUpperCase() +
          "&E=" +
          this.hash({ length: 3 }) +
          "&W=" +
          this.integer({ min: 0, max: 9 })
        );
      }),
      (d.prototype.bb_pin = function () {
        return this.hash({ length: 8 });
      }),
      (d.prototype.avatar = function (i) {
        var s = null,
          u = "//www.gravatar.com/avatar/",
          g = { http: "http", https: "https" },
          S = { bmp: "bmp", gif: "gif", jpg: "jpg", png: "png" },
          x = {
            404: "404",
            mm: "mm",
            identicon: "identicon",
            monsterid: "monsterid",
            wavatar: "wavatar",
            retro: "retro",
            blank: "blank",
          },
          w = { g: "g", pg: "pg", r: "r", x: "x" },
          C = {
            protocol: null,
            email: null,
            fileExtension: null,
            size: null,
            fallback: null,
            rating: null,
          };
        if (!i) (C.email = this.email()), (i = {});
        else if (typeof i == "string") (C.email = i), (i = {});
        else {
          if (typeof i != "object") return null;
          if (i.constructor === "Array") return null;
        }
        return (
          (C = f(i, C)),
          C.email || (C.email = this.email()),
          (C.protocol = g[C.protocol] ? C.protocol + ":" : ""),
          (C.size = parseInt(C.size, 0) ? C.size : ""),
          (C.rating = w[C.rating] ? C.rating : ""),
          (C.fallback = x[C.fallback] ? C.fallback : ""),
          (C.fileExtension = S[C.fileExtension] ? C.fileExtension : ""),
          (s =
            C.protocol +
            u +
            this.bimd5.md5(C.email) +
            (C.fileExtension ? "." + C.fileExtension : "") +
            (C.size || C.rating || C.fallback ? "?" : "") +
            (C.size ? "&s=" + C.size.toString() : "") +
            (C.rating ? "&r=" + C.rating : "") +
            (C.fallback ? "&d=" + C.fallback : "")),
          s
        );
      }),
      (d.prototype.color = function (i) {
        function s(xe, Gt) {
          return [xe, xe, xe].join(Gt || "");
        }
        function u(xe) {
          var Gt = xe ? "rgba" : "rgb",
            pi = xe ? "," + this.floating({ min: te, max: se }) : "",
            gi = S
              ? s(this.natural({ min: x, max: w }), ",")
              : this.natural({ min: T, max: E }) +
                "," +
                this.natural({ min: Q, max: W }) +
                "," +
                this.natural({ max: 255 });
          return Gt + "(" + gi + pi + ")";
        }
        function g(xe, Gt, pi) {
          var gi = pi ? "#" : "",
            or = "";
          return (
            S
              ? ((or = s(this.pad(this.hex({ min: x, max: w }), 2))),
                i.format === "shorthex" &&
                  (or = s(this.hex({ min: 0, max: 15 }))))
              : i.format === "shorthex"
              ? (or =
                  this.pad(
                    this.hex({
                      min: Math.floor(C / 16),
                      max: Math.floor(M / 16),
                    }),
                    1
                  ) +
                  this.pad(
                    this.hex({
                      min: Math.floor(T / 16),
                      max: Math.floor(E / 16),
                    }),
                    1
                  ) +
                  this.pad(
                    this.hex({
                      min: Math.floor(Q / 16),
                      max: Math.floor(W / 16),
                    }),
                    1
                  ))
              : C !== void 0 ||
                M !== void 0 ||
                T !== void 0 ||
                E !== void 0 ||
                Q !== void 0 ||
                W !== void 0
              ? (or =
                  this.pad(this.hex({ min: C, max: M }), 2) +
                  this.pad(this.hex({ min: T, max: E }), 2) +
                  this.pad(this.hex({ min: Q, max: W }), 2))
              : (or =
                  this.pad(this.hex({ min: x, max: w }), 2) +
                  this.pad(this.hex({ min: x, max: w }), 2) +
                  this.pad(this.hex({ min: x, max: w }), 2)),
            gi + or
          );
        }
        i = f(i, {
          format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]),
          grayscale: !1,
          casing: "lower",
          min: 0,
          max: 255,
          min_red: void 0,
          max_red: void 0,
          min_green: void 0,
          max_green: void 0,
          min_blue: void 0,
          max_blue: void 0,
          min_alpha: 0,
          max_alpha: 1,
        });
        var S = i.grayscale,
          x = i.min,
          w = i.max,
          C = i.min_red,
          M = i.max_red,
          T = i.min_green,
          E = i.max_green,
          Q = i.min_blue,
          W = i.max_blue,
          te = i.min_alpha,
          se = i.max_alpha;
        i.min_red === void 0 && (C = x),
          i.max_red === void 0 && (M = w),
          i.min_green === void 0 && (T = x),
          i.max_green === void 0 && (E = w),
          i.min_blue === void 0 && (Q = x),
          i.max_blue === void 0 && (W = w),
          i.min_alpha === void 0 && (te = 0),
          i.max_alpha === void 0 && (se = 1),
          S &&
            x === 0 &&
            w === 255 &&
            C !== void 0 &&
            M !== void 0 &&
            ((x = (C + T + Q) / 3), (w = (M + E + W) / 3));
        var de;
        if (i.format === "hex") de = g.call(this, 2, 6, !0);
        else if (i.format === "shorthex") de = g.call(this, 1, 3, !0);
        else if (i.format === "rgb") de = u.call(this, !1);
        else if (i.format === "rgba") de = u.call(this, !0);
        else if (i.format === "0x") de = "0x" + g.call(this, 2, 6);
        else {
          if (i.format === "name") return this.pick(this.get("colorNames"));
          throw new RangeError(
            'Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".'
          );
        }
        return i.casing === "upper" && (de = de.toUpperCase()), de;
      }),
      (d.prototype.domain = function (i) {
        return (i = f(i)), this.word() + "." + (i.tld || this.tld());
      }),
      (d.prototype.email = function (i) {
        return (
          (i = f(i)),
          this.word({ length: i.length }) + "@" + (i.domain || this.domain())
        );
      }),
      (d.prototype.fbid = function () {
        return "10000" + this.string({ pool: "1234567890", length: 11 });
      }),
      (d.prototype.google_analytics = function () {
        var i = this.pad(this.natural({ max: 999999 }), 6),
          s = this.pad(this.natural({ max: 99 }), 2);
        return "UA-" + i + "-" + s;
      }),
      (d.prototype.hashtag = function () {
        return "#" + this.word();
      }),
      (d.prototype.ip = function () {
        return (
          this.natural({ min: 1, max: 254 }) +
          "." +
          this.natural({ max: 255 }) +
          "." +
          this.natural({ max: 255 }) +
          "." +
          this.natural({ min: 1, max: 254 })
        );
      }),
      (d.prototype.ipv6 = function () {
        var i = this.n(this.hash, 8, { length: 4 });
        return i.join(":");
      }),
      (d.prototype.klout = function () {
        return this.natural({ min: 1, max: 99 });
      }),
      (d.prototype.mac = function (i) {
        return (
          (i = f(i, { delimiter: ":" })),
          this.pad(this.natural({ max: 255 }).toString(16), 2) +
            i.delimiter +
            this.pad(this.natural({ max: 255 }).toString(16), 2) +
            i.delimiter +
            this.pad(this.natural({ max: 255 }).toString(16), 2) +
            i.delimiter +
            this.pad(this.natural({ max: 255 }).toString(16), 2) +
            i.delimiter +
            this.pad(this.natural({ max: 255 }).toString(16), 2) +
            i.delimiter +
            this.pad(this.natural({ max: 255 }).toString(16), 2)
        );
      }),
      (d.prototype.semver = function (i) {
        i = f(i, { include_prerelease: !0 });
        var s = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
        i.range && (s = i.range);
        var u = "";
        return (
          i.include_prerelease &&
            (u = this.weighted(
              ["", "-dev", "-beta", "-alpha"],
              [50, 10, 5, 1]
            )),
          s + this.rpg("3d10").join(".") + u
        );
      }),
      (d.prototype.tlds = function () {
        return [
          "com",
          "org",
          "edu",
          "gov",
          "co.uk",
          "net",
          "io",
          "ac",
          "ad",
          "ae",
          "af",
          "ag",
          "ai",
          "al",
          "am",
          "ao",
          "aq",
          "ar",
          "as",
          "at",
          "au",
          "aw",
          "ax",
          "az",
          "ba",
          "bb",
          "bd",
          "be",
          "bf",
          "bg",
          "bh",
          "bi",
          "bj",
          "bm",
          "bn",
          "bo",
          "br",
          "bs",
          "bt",
          "bv",
          "bw",
          "by",
          "bz",
          "ca",
          "cc",
          "cd",
          "cf",
          "cg",
          "ch",
          "ci",
          "ck",
          "cl",
          "cm",
          "cn",
          "co",
          "cr",
          "cu",
          "cv",
          "cw",
          "cx",
          "cy",
          "cz",
          "de",
          "dj",
          "dk",
          "dm",
          "do",
          "dz",
          "ec",
          "ee",
          "eg",
          "eh",
          "er",
          "es",
          "et",
          "eu",
          "fi",
          "fj",
          "fk",
          "fm",
          "fo",
          "fr",
          "ga",
          "gb",
          "gd",
          "ge",
          "gf",
          "gg",
          "gh",
          "gi",
          "gl",
          "gm",
          "gn",
          "gp",
          "gq",
          "gr",
          "gs",
          "gt",
          "gu",
          "gw",
          "gy",
          "hk",
          "hm",
          "hn",
          "hr",
          "ht",
          "hu",
          "id",
          "ie",
          "il",
          "im",
          "in",
          "io",
          "iq",
          "ir",
          "is",
          "it",
          "je",
          "jm",
          "jo",
          "jp",
          "ke",
          "kg",
          "kh",
          "ki",
          "km",
          "kn",
          "kp",
          "kr",
          "kw",
          "ky",
          "kz",
          "la",
          "lb",
          "lc",
          "li",
          "lk",
          "lr",
          "ls",
          "lt",
          "lu",
          "lv",
          "ly",
          "ma",
          "mc",
          "md",
          "me",
          "mg",
          "mh",
          "mk",
          "ml",
          "mm",
          "mn",
          "mo",
          "mp",
          "mq",
          "mr",
          "ms",
          "mt",
          "mu",
          "mv",
          "mw",
          "mx",
          "my",
          "mz",
          "na",
          "nc",
          "ne",
          "nf",
          "ng",
          "ni",
          "nl",
          "no",
          "np",
          "nr",
          "nu",
          "nz",
          "om",
          "pa",
          "pe",
          "pf",
          "pg",
          "ph",
          "pk",
          "pl",
          "pm",
          "pn",
          "pr",
          "ps",
          "pt",
          "pw",
          "py",
          "qa",
          "re",
          "ro",
          "rs",
          "ru",
          "rw",
          "sa",
          "sb",
          "sc",
          "sd",
          "se",
          "sg",
          "sh",
          "si",
          "sj",
          "sk",
          "sl",
          "sm",
          "sn",
          "so",
          "sr",
          "ss",
          "st",
          "su",
          "sv",
          "sx",
          "sy",
          "sz",
          "tc",
          "td",
          "tf",
          "tg",
          "th",
          "tj",
          "tk",
          "tl",
          "tm",
          "tn",
          "to",
          "tp",
          "tr",
          "tt",
          "tv",
          "tw",
          "tz",
          "ua",
          "ug",
          "uk",
          "us",
          "uy",
          "uz",
          "va",
          "vc",
          "ve",
          "vg",
          "vi",
          "vn",
          "vu",
          "wf",
          "ws",
          "ye",
          "yt",
          "za",
          "zm",
          "zw",
        ];
      }),
      (d.prototype.tld = function () {
        return this.pick(this.tlds());
      }),
      (d.prototype.twitter = function () {
        return "@" + this.word();
      }),
      (d.prototype.url = function (i) {
        i = f(i, {
          protocol: "http",
          domain: this.domain(i),
          domain_prefix: "",
          path: this.word(),
          extensions: [],
        });
        var s = i.extensions.length > 0 ? "." + this.pick(i.extensions) : "",
          u = i.domain_prefix ? i.domain_prefix + "." + i.domain : i.domain;
        return i.protocol + "://" + u + "/" + i.path + s;
      }),
      (d.prototype.port = function () {
        return this.integer({ min: 0, max: 65535 });
      }),
      (d.prototype.locale = function (i) {
        return (
          (i = f(i)),
          i.region
            ? this.pick(this.get("locale_regions"))
            : this.pick(this.get("locale_languages"))
        );
      }),
      (d.prototype.locales = function (i) {
        return (
          (i = f(i)),
          i.region ? this.get("locale_regions") : this.get("locale_languages")
        );
      }),
      (d.prototype.loremPicsum = function (i) {
        i = f(i, { width: 500, height: 500, greyscale: !1, blurred: !1 });
        var s = i.greyscale ? "g/" : "",
          u = i.blurred ? "/?blur" : "/?random";
        return "https://picsum.photos/" + s + i.width + "/" + i.height + u;
      }),
      (d.prototype.address = function (i) {
        return (
          (i = f(i)), this.natural({ min: 5, max: 2e3 }) + " " + this.street(i)
        );
      }),
      (d.prototype.altitude = function (i) {
        return (
          (i = f(i, { fixed: 5, min: 0, max: 8848 })),
          this.floating({ min: i.min, max: i.max, fixed: i.fixed })
        );
      }),
      (d.prototype.areacode = function (i) {
        i = f(i, { parens: !0 });
        var s = i.exampleNumber
          ? "555"
          : this.natural({ min: 2, max: 9 }).toString() +
            this.natural({ min: 0, max: 8 }).toString() +
            this.natural({ min: 0, max: 9 }).toString();
        return i.parens ? "(" + s + ")" : s;
      }),
      (d.prototype.city = function () {
        return this.capitalize(this.word({ syllables: 3 }));
      }),
      (d.prototype.coordinates = function (i) {
        return this.latitude(i) + ", " + this.longitude(i);
      }),
      (d.prototype.countries = function () {
        return this.get("countries");
      }),
      (d.prototype.country = function (i) {
        i = f(i);
        var s = this.pick(this.countries());
        return i.raw ? s : i.full ? s.name : s.abbreviation;
      }),
      (d.prototype.depth = function (i) {
        return (
          (i = f(i, { fixed: 5, min: -10994, max: 0 })),
          this.floating({ min: i.min, max: i.max, fixed: i.fixed })
        );
      }),
      (d.prototype.geohash = function (i) {
        return (
          (i = f(i, { length: 7 })),
          this.string({
            length: i.length,
            pool: "0123456789bcdefghjkmnpqrstuvwxyz",
          })
        );
      }),
      (d.prototype.geojson = function (i) {
        return (
          this.latitude(i) + ", " + this.longitude(i) + ", " + this.altitude(i)
        );
      }),
      (d.prototype.latitude = function (i) {
        var [s, u, g] = ["ddm", "dms", "dd"];
        i = f(
          i,
          i && i.format && [s, u].includes(i.format.toLowerCase())
            ? { min: 0, max: 89, fixed: 4 }
            : { fixed: 5, min: -90, max: 90, format: g }
        );
        var S = i.format.toLowerCase();
        switch (
          ((S === s || S === u) &&
            (A(
              i.min < 0 || i.min > 89,
              "Chance: Min specified is out of range. Should be between 0 - 89"
            ),
            A(
              i.max < 0 || i.max > 89,
              "Chance: Max specified is out of range. Should be between 0 - 89"
            ),
            A(
              i.fixed > 4,
              "Chance: Fixed specified should be below or equal to 4"
            )),
          S)
        ) {
          case s:
            return (
              this.integer({ min: i.min, max: i.max }) +
              "°" +
              this.floating({ min: 0, max: 59, fixed: i.fixed })
            );
          case u:
            return (
              this.integer({ min: i.min, max: i.max }) +
              "°" +
              this.integer({ min: 0, max: 59 }) +
              "’" +
              this.floating({ min: 0, max: 59, fixed: i.fixed }) +
              "”"
            );
          case g:
          default:
            return this.floating({ min: i.min, max: i.max, fixed: i.fixed });
        }
      }),
      (d.prototype.longitude = function (i) {
        var [s, u, g] = ["ddm", "dms", "dd"];
        i = f(
          i,
          i && i.format && [s, u].includes(i.format.toLowerCase())
            ? { min: 0, max: 179, fixed: 4 }
            : { fixed: 5, min: -180, max: 180, format: g }
        );
        var S = i.format.toLowerCase();
        switch (
          ((S === s || S === u) &&
            (A(
              i.min < 0 || i.min > 179,
              "Chance: Min specified is out of range. Should be between 0 - 179"
            ),
            A(
              i.max < 0 || i.max > 179,
              "Chance: Max specified is out of range. Should be between 0 - 179"
            ),
            A(
              i.fixed > 4,
              "Chance: Fixed specified should be below or equal to 4"
            )),
          S)
        ) {
          case s:
            return (
              this.integer({ min: i.min, max: i.max }) +
              "°" +
              this.floating({ min: 0, max: 59.9999, fixed: i.fixed })
            );
          case u:
            return (
              this.integer({ min: i.min, max: i.max }) +
              "°" +
              this.integer({ min: 0, max: 59 }) +
              "’" +
              this.floating({ min: 0, max: 59.9999, fixed: i.fixed }) +
              "”"
            );
          case g:
          default:
            return this.floating({ min: i.min, max: i.max, fixed: i.fixed });
        }
      }),
      (d.prototype.phone = function (i) {
        var s = this,
          u,
          g = function (Q) {
            var W = [];
            return (
              Q.sections.forEach(function (te) {
                W.push(s.string({ pool: "0123456789", length: te }));
              }),
              Q.area + W.join(" ")
            );
          };
        (i = f(i, {
          formatted: !0,
          country: "us",
          mobile: !1,
          exampleNumber: !1,
        })),
          i.formatted || (i.parens = !1);
        var S;
        switch (i.country) {
          case "fr":
            i.mobile
              ? ((u =
                  this.pick(["06", "07"]) +
                  s.string({ pool: "0123456789", length: 8 })),
                (S = i.formatted ? u.match(/../g).join(" ") : u))
              : ((u = this.pick([
                  "01" +
                    this.pick([
                      "30",
                      "34",
                      "39",
                      "40",
                      "41",
                      "42",
                      "43",
                      "44",
                      "45",
                      "46",
                      "47",
                      "48",
                      "49",
                      "53",
                      "55",
                      "56",
                      "58",
                      "60",
                      "64",
                      "69",
                      "70",
                      "72",
                      "73",
                      "74",
                      "75",
                      "76",
                      "77",
                      "78",
                      "79",
                      "80",
                      "81",
                      "82",
                      "83",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "02" +
                    this.pick([
                      "14",
                      "18",
                      "22",
                      "23",
                      "28",
                      "29",
                      "30",
                      "31",
                      "32",
                      "33",
                      "34",
                      "35",
                      "36",
                      "37",
                      "38",
                      "40",
                      "41",
                      "43",
                      "44",
                      "45",
                      "46",
                      "47",
                      "48",
                      "49",
                      "50",
                      "51",
                      "52",
                      "53",
                      "54",
                      "56",
                      "57",
                      "61",
                      "62",
                      "69",
                      "72",
                      "76",
                      "77",
                      "78",
                      "85",
                      "90",
                      "96",
                      "97",
                      "98",
                      "99",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "03" +
                    this.pick([
                      "10",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "39",
                      "44",
                      "45",
                      "51",
                      "52",
                      "54",
                      "55",
                      "57",
                      "58",
                      "59",
                      "60",
                      "61",
                      "62",
                      "63",
                      "64",
                      "65",
                      "66",
                      "67",
                      "68",
                      "69",
                      "70",
                      "71",
                      "72",
                      "73",
                      "80",
                      "81",
                      "82",
                      "83",
                      "84",
                      "85",
                      "86",
                      "87",
                      "88",
                      "89",
                      "90",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "04" +
                    this.pick([
                      "11",
                      "13",
                      "15",
                      "20",
                      "22",
                      "26",
                      "27",
                      "30",
                      "32",
                      "34",
                      "37",
                      "42",
                      "43",
                      "44",
                      "50",
                      "56",
                      "57",
                      "63",
                      "66",
                      "67",
                      "68",
                      "69",
                      "70",
                      "71",
                      "72",
                      "73",
                      "74",
                      "75",
                      "76",
                      "77",
                      "78",
                      "79",
                      "80",
                      "81",
                      "82",
                      "83",
                      "84",
                      "85",
                      "86",
                      "88",
                      "89",
                      "90",
                      "91",
                      "92",
                      "93",
                      "94",
                      "95",
                      "97",
                      "98",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "05" +
                    this.pick([
                      "08",
                      "16",
                      "17",
                      "19",
                      "24",
                      "31",
                      "32",
                      "33",
                      "34",
                      "35",
                      "40",
                      "45",
                      "46",
                      "47",
                      "49",
                      "53",
                      "55",
                      "56",
                      "57",
                      "58",
                      "59",
                      "61",
                      "62",
                      "63",
                      "64",
                      "65",
                      "67",
                      "79",
                      "81",
                      "82",
                      "86",
                      "87",
                      "90",
                      "94",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "09" + s.string({ pool: "0123456789", length: 8 }),
                ])),
                (S = i.formatted ? u.match(/../g).join(" ") : u));
            break;
          case "uk":
            i.mobile
              ? ((u = this.pick([
                  {
                    area: "07" + this.pick(["4", "5", "7", "8", "9"]),
                    sections: [2, 6],
                  },
                  { area: "07624 ", sections: [6] },
                ])),
                (S = i.formatted ? g(u) : g(u).replace(" ", "")))
              : ((u = this.pick([
                  {
                    area: "01" + this.character({ pool: "234569" }) + "1 ",
                    sections: [3, 4],
                  },
                  {
                    area: "020 " + this.character({ pool: "378" }),
                    sections: [3, 4],
                  },
                  {
                    area: "023 " + this.character({ pool: "89" }),
                    sections: [3, 4],
                  },
                  { area: "024 7", sections: [3, 4] },
                  {
                    area:
                      "028 " +
                      this.pick([
                        "25",
                        "28",
                        "37",
                        "71",
                        "82",
                        "90",
                        "92",
                        "95",
                      ]),
                    sections: [2, 4],
                  },
                  {
                    area:
                      "012" +
                      this.pick(["04", "08", "54", "76", "97", "98"]) +
                      " ",
                    sections: [6],
                  },
                  {
                    area: "013" + this.pick(["63", "64", "84", "86"]) + " ",
                    sections: [6],
                  },
                  {
                    area:
                      "014" +
                      this.pick(["04", "20", "60", "61", "80", "88"]) +
                      " ",
                    sections: [6],
                  },
                  {
                    area: "015" + this.pick(["24", "27", "62", "66"]) + " ",
                    sections: [6],
                  },
                  {
                    area:
                      "016" +
                      this.pick(["06", "29", "35", "47", "59", "95"]) +
                      " ",
                    sections: [6],
                  },
                  {
                    area: "017" + this.pick(["26", "44", "50", "68"]) + " ",
                    sections: [6],
                  },
                  {
                    area: "018" + this.pick(["27", "37", "84", "97"]) + " ",
                    sections: [6],
                  },
                  {
                    area:
                      "019" +
                      this.pick(["00", "05", "35", "46", "49", "63", "95"]) +
                      " ",
                    sections: [6],
                  },
                ])),
                (S = i.formatted ? g(u) : g(u).replace(" ", "", "g")));
            break;
          case "za":
            i.mobile
              ? ((u = this.pick([
                  "060" +
                    this.pick(["3", "4", "5", "6", "7", "8", "9"]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "061" +
                    this.pick(["0", "1", "2", "3", "4", "5", "8"]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "06" + s.string({ pool: "0123456789", length: 7 }),
                  "071" +
                    this.pick([
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                    ]) +
                    s.string({ pool: "0123456789", length: 6 }),
                  "07" +
                    this.pick(["2", "3", "4", "6", "7", "8", "9"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                  "08" +
                    this.pick(["0", "1", "2", "3", "4", "5"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                ])),
                (S = i.formatted || u))
              : ((u = this.pick([
                  "01" +
                    this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                  "02" +
                    this.pick(["1", "2", "3", "4", "7", "8"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                  "03" +
                    this.pick(["1", "2", "3", "5", "6", "9"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                  "04" +
                    this.pick(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                  "05" +
                    this.pick(["1", "3", "4", "6", "7", "8"]) +
                    s.string({ pool: "0123456789", length: 7 }),
                ])),
                (S = i.formatted || u));
            break;
          case "us":
            var x = this.areacode(i).toString(),
              w =
                this.natural({ min: 2, max: 9 }).toString() +
                this.natural({ min: 0, max: 9 }).toString() +
                this.natural({ min: 0, max: 9 }).toString(),
              C = this.natural({ min: 1e3, max: 9999 }).toString();
            S = i.formatted ? x + " " + w + "-" + C : x + w + C;
            break;
          case "br":
            var M = this.pick([
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "21",
                "22",
                "24",
                "27",
                "28",
                "31",
                "32",
                "33",
                "34",
                "35",
                "37",
                "38",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "51",
                "53",
                "54",
                "55",
                "61",
                "62",
                "63",
                "64",
                "65",
                "66",
                "67",
                "68",
                "69",
                "71",
                "73",
                "74",
                "75",
                "77",
                "79",
                "81",
                "82",
                "83",
                "84",
                "85",
                "86",
                "87",
                "88",
                "89",
                "91",
                "92",
                "93",
                "94",
                "95",
                "96",
                "97",
                "98",
                "99",
              ]),
              T;
            i.mobile
              ? (T = "9" + s.string({ pool: "0123456789", length: 4 }))
              : (T = this.natural({ min: 2e3, max: 5999 }).toString());
            var E = s.string({ pool: "0123456789", length: 4 });
            S = i.formatted ? "(" + M + ") " + T + "-" + E : M + T + E;
            break;
        }
        return S;
      }),
      (d.prototype.postal = function () {
        var i = this.character({ pool: "XVTSRPNKLMHJGECBA" }),
          s =
            i +
            this.natural({ max: 9 }) +
            this.character({ alpha: !0, casing: "upper" }),
          u =
            this.natural({ max: 9 }) +
            this.character({ alpha: !0, casing: "upper" }) +
            this.natural({ max: 9 });
        return s + " " + u;
      }),
      (d.prototype.postcode = function () {
        var i = this.pick(this.get("postcodeAreas")).code,
          s = this.natural({ max: 9 }),
          u = this.bool() ? this.character({ alpha: !0, casing: "upper" }) : "",
          g = i + s + u,
          S = this.natural({ max: 9 }),
          x =
            this.character({ alpha: !0, casing: "upper" }) +
            this.character({ alpha: !0, casing: "upper" }),
          w = S + x;
        return g + " " + w;
      }),
      (d.prototype.counties = function (i) {
        return (
          (i = f(i, { country: "uk" })),
          this.get("counties")[i.country.toLowerCase()]
        );
      }),
      (d.prototype.county = function (i) {
        return this.pick(this.counties(i)).name;
      }),
      (d.prototype.provinces = function (i) {
        return (
          (i = f(i, { country: "ca" })),
          this.get("provinces")[i.country.toLowerCase()]
        );
      }),
      (d.prototype.province = function (i) {
        return i && i.full
          ? this.pick(this.provinces(i)).name
          : this.pick(this.provinces(i)).abbreviation;
      }),
      (d.prototype.state = function (i) {
        return i && i.full
          ? this.pick(this.states(i)).name
          : this.pick(this.states(i)).abbreviation;
      }),
      (d.prototype.states = function (i) {
        i = f(i, { country: "us", us_states_and_dc: !0 });
        var s;
        switch (i.country.toLowerCase()) {
          case "us":
            var u = this.get("us_states_and_dc"),
              g = this.get("territories"),
              S = this.get("armed_forces");
            (s = []),
              i.us_states_and_dc && (s = s.concat(u)),
              i.territories && (s = s.concat(g)),
              i.armed_forces && (s = s.concat(S));
            break;
          case "it":
          case "mx":
            s = this.get("country_regions")[i.country.toLowerCase()];
            break;
          case "uk":
            s = this.get("counties")[i.country.toLowerCase()];
            break;
        }
        return s;
      }),
      (d.prototype.street = function (i) {
        i = f(i, { country: "us", syllables: 2 });
        var s;
        switch (i.country.toLowerCase()) {
          case "us":
            (s = this.word({ syllables: i.syllables })),
              (s = this.capitalize(s)),
              (s += " "),
              (s += i.short_suffix
                ? this.street_suffix(i).abbreviation
                : this.street_suffix(i).name);
            break;
          case "it":
            (s = this.word({ syllables: i.syllables })),
              (s = this.capitalize(s)),
              (s =
                (i.short_suffix
                  ? this.street_suffix(i).abbreviation
                  : this.street_suffix(i).name) +
                " " +
                s);
            break;
        }
        return s;
      }),
      (d.prototype.street_suffix = function (i) {
        return (
          (i = f(i, { country: "us" })), this.pick(this.street_suffixes(i))
        );
      }),
      (d.prototype.street_suffixes = function (i) {
        return (
          (i = f(i, { country: "us" })),
          this.get("street_suffixes")[i.country.toLowerCase()]
        );
      }),
      (d.prototype.zip = function (i) {
        var s = this.n(this.natural, 5, { max: 9 });
        return (
          i &&
            i.plusfour === !0 &&
            (s.push("-"), (s = s.concat(this.n(this.natural, 4, { max: 9 })))),
          s.join("")
        );
      }),
      (d.prototype.ampm = function () {
        return this.bool() ? "am" : "pm";
      }),
      (d.prototype.date = function (i) {
        var s, u;
        if (i && (i.min || i.max)) {
          i = f(i, { american: !0, string: !1 });
          var g = typeof i.min < "u" ? i.min.getTime() : 1,
            S = typeof i.max < "u" ? i.max.getTime() : 864e13;
          u = new Date(this.integer({ min: g, max: S }));
        } else {
          var x = this.month({ raw: !0 }),
            w = x.days;
          i &&
            i.month &&
            (w = this.get("months")[((i.month % 12) + 12) % 12].days),
            (i = f(i, {
              year: parseInt(this.year(), 10),
              month: x.numeric - 1,
              day: this.natural({ min: 1, max: w }),
              hour: this.hour({ twentyfour: !0 }),
              minute: this.minute(),
              second: this.second(),
              millisecond: this.millisecond(),
              american: !0,
              string: !1,
            })),
            (u = new Date(
              i.year,
              i.month,
              i.day,
              i.hour,
              i.minute,
              i.second,
              i.millisecond
            ));
        }
        return (
          i.american
            ? (s = u.getMonth() + 1 + "/" + u.getDate() + "/" + u.getFullYear())
            : (s =
                u.getDate() + "/" + (u.getMonth() + 1) + "/" + u.getFullYear()),
          i.string ? s : u
        );
      }),
      (d.prototype.hammertime = function (i) {
        return this.date(i).getTime();
      }),
      (d.prototype.hour = function (i) {
        return (
          (i = f(i, {
            min: i && i.twentyfour ? 0 : 1,
            max: i && i.twentyfour ? 23 : 12,
          })),
          A(i.min < 0, "Chance: Min cannot be less than 0."),
          A(
            i.twentyfour && i.max > 23,
            "Chance: Max cannot be greater than 23 for twentyfour option."
          ),
          A(
            !i.twentyfour && i.max > 12,
            "Chance: Max cannot be greater than 12."
          ),
          A(i.min > i.max, "Chance: Min cannot be greater than Max."),
          this.natural({ min: i.min, max: i.max })
        );
      }),
      (d.prototype.millisecond = function () {
        return this.natural({ max: 999 });
      }),
      (d.prototype.minute = d.prototype.second =
        function (i) {
          return (
            (i = f(i, { min: 0, max: 59 })),
            A(i.min < 0, "Chance: Min cannot be less than 0."),
            A(i.max > 59, "Chance: Max cannot be greater than 59."),
            A(i.min > i.max, "Chance: Min cannot be greater than Max."),
            this.natural({ min: i.min, max: i.max })
          );
        }),
      (d.prototype.month = function (i) {
        (i = f(i, { min: 1, max: 12 })),
          A(i.min < 1, "Chance: Min cannot be less than 1."),
          A(i.max > 12, "Chance: Max cannot be greater than 12."),
          A(i.min > i.max, "Chance: Min cannot be greater than Max.");
        var s = this.pick(this.months().slice(i.min - 1, i.max));
        return i.raw ? s : s.name;
      }),
      (d.prototype.months = function () {
        return this.get("months");
      }),
      (d.prototype.second = function () {
        return this.natural({ max: 59 });
      }),
      (d.prototype.timestamp = function () {
        return this.natural({
          min: 1,
          max: parseInt(new Date().getTime() / 1e3, 10),
        });
      }),
      (d.prototype.weekday = function (i) {
        i = f(i, { weekday_only: !1 });
        var s = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return (
          i.weekday_only || (s.push("Saturday"), s.push("Sunday")),
          this.pickone(s)
        );
      }),
      (d.prototype.year = function (i) {
        return (
          (i = f(i, { min: new Date().getFullYear() })),
          (i.max = typeof i.max < "u" ? i.max : i.min + 100),
          this.natural(i).toString()
        );
      }),
      (d.prototype.cc = function (i) {
        i = f(i);
        var s, u, g;
        return (
          (s = i.type
            ? this.cc_type({ name: i.type, raw: !0 })
            : this.cc_type({ raw: !0 })),
          (u = s.prefix.split("")),
          (g = s.length - s.prefix.length - 1),
          (u = u.concat(this.n(this.integer, g, { min: 0, max: 9 }))),
          u.push(this.luhn_calculate(u.join(""))),
          u.join("")
        );
      }),
      (d.prototype.cc_types = function () {
        return this.get("cc_types");
      }),
      (d.prototype.cc_type = function (i) {
        i = f(i);
        var s = this.cc_types(),
          u = null;
        if (i.name) {
          for (var g = 0; g < s.length; g++)
            if (s[g].name === i.name || s[g].short_name === i.name) {
              u = s[g];
              break;
            }
          if (u === null)
            throw new RangeError(
              "Chance: Credit card type '" + i.name + "' is not supported"
            );
        } else u = this.pick(s);
        return i.raw ? u : u.name;
      }),
      (d.prototype.currency_types = function () {
        return this.get("currency_types");
      }),
      (d.prototype.currency = function () {
        return this.pick(this.currency_types());
      }),
      (d.prototype.timezones = function () {
        return this.get("timezones");
      }),
      (d.prototype.timezone = function () {
        return this.pick(this.timezones());
      }),
      (d.prototype.currency_pair = function (i) {
        var s = this.unique(this.currency, 2, {
          comparator: function (u, g) {
            return u.reduce(function (S, x) {
              return S || x.code === g.code;
            }, !1);
          },
        });
        return i ? s[0].code + "/" + s[1].code : s;
      }),
      (d.prototype.dollar = function (i) {
        i = f(i, { max: 1e4, min: 0 });
        var s = this.floating({ min: i.min, max: i.max, fixed: 2 }).toString(),
          u = s.split(".")[1];
        return (
          u === void 0 ? (s += ".00") : u.length < 2 && (s = s + "0"),
          s < 0 ? "-$" + s.replace("-", "") : "$" + s
        );
      }),
      (d.prototype.euro = function (i) {
        return Number(this.dollar(i).replace("$", "")).toLocaleString() + "€";
      }),
      (d.prototype.exp = function (i) {
        i = f(i);
        var s = {};
        return (
          (s.year = this.exp_year()),
          s.year === new Date().getFullYear().toString()
            ? (s.month = this.exp_month({ future: !0 }))
            : (s.month = this.exp_month()),
          i.raw ? s : s.month + "/" + s.year
        );
      }),
      (d.prototype.exp_month = function (i) {
        i = f(i);
        var s,
          u,
          g = new Date().getMonth() + 1;
        if (i.future && g !== 12)
          do (s = this.month({ raw: !0 }).numeric), (u = parseInt(s, 10));
          while (u <= g);
        else s = this.month({ raw: !0 }).numeric;
        return s;
      }),
      (d.prototype.exp_year = function () {
        var i = new Date().getMonth() + 1,
          s = new Date().getFullYear();
        return this.year({ min: i === 12 ? s + 1 : s, max: s + 10 });
      }),
      (d.prototype.vat = function (i) {
        switch (((i = f(i, { country: "it" })), i.country.toLowerCase())) {
          case "it":
            return this.it_vat();
        }
      }),
      (d.prototype.iban = function () {
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          s = i + "0123456789",
          u =
            this.string({ length: 2, pool: i }) +
            this.pad(this.integer({ min: 0, max: 99 }), 2) +
            this.string({ length: 4, pool: s }) +
            this.pad(this.natural(), this.natural({ min: 6, max: 26 }));
        return u;
      }),
      (d.prototype.it_vat = function () {
        var i = this.natural({ min: 1, max: 18e5 });
        return (
          (i =
            this.pad(i, 7) +
            this.pad(this.pick(this.provinces({ country: "it" })).code, 3)),
          i + this.luhn_calculate(i)
        );
      }),
      (d.prototype.cf = function (i) {
        i = i || {};
        var s = i.gender ? i.gender : this.gender(),
          u = i.first ? i.first : this.first({ gender: s, nationality: "it" }),
          g = i.last ? i.last : this.last({ nationality: "it" }),
          S = i.birthday ? i.birthday : this.birthday(),
          x = i.city
            ? i.city
            : this.pickone([
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "L",
                "M",
                "Z",
              ]) + this.pad(this.natural({ max: 999 }), 3),
          w = [],
          C = function (E, Q) {
            var W,
              te = [];
            return (
              E.length < 3
                ? (te = E.split("").concat("XXX".split("")).splice(0, 3))
                : ((W = E.toUpperCase()
                    .split("")
                    .map(function (se) {
                      return "BCDFGHJKLMNPRSTVWZ".indexOf(se) !== -1
                        ? se
                        : void 0;
                    })
                    .join("")),
                  W.length > 3 &&
                    (Q ? (W = W.substr(0, 3)) : (W = W[0] + W.substr(2, 2))),
                  W.length < 3 &&
                    ((te = W),
                    (W = E.toUpperCase()
                      .split("")
                      .map(function (se) {
                        return "AEIOU".indexOf(se) !== -1 ? se : void 0;
                      })
                      .join("")
                      .substr(0, 3 - te.length))),
                  (te = te + W)),
              te
            );
          },
          M = function (E, Q, W) {
            var te = [
              "A",
              "B",
              "C",
              "D",
              "E",
              "H",
              "L",
              "M",
              "P",
              "R",
              "S",
              "T",
            ];
            return (
              E.getFullYear().toString().substr(2) +
              te[E.getMonth()] +
              W.pad(E.getDate() + (Q.toLowerCase() === "female" ? 40 : 0), 2)
            );
          },
          T = function (E) {
            for (
              var Q = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                W = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",
                te = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                se = "BAKPLCQDREVOSFTGUHMINJWZYX",
                de = 0,
                xe = 0;
              xe < 15;
              xe++
            )
              xe % 2 !== 0
                ? (de += te.indexOf(W[Q.indexOf(E[xe])]))
                : (de += se.indexOf(W[Q.indexOf(E[xe])]));
            return te[de % 26];
          };
        return (
          (w = w
            .concat(C(g, !0), C(u), M(S, s, this), x.toUpperCase().split(""))
            .join("")),
          (w += T(w.toUpperCase())),
          w.toUpperCase()
        );
      }),
      (d.prototype.pl_pesel = function () {
        for (
          var i = this.natural({ min: 1, max: 9999999999 }),
            s = this.pad(i, 10).split(""),
            u = 0;
          u < s.length;
          u++
        )
          s[u] = parseInt(s[u]);
        var g =
          (1 * s[0] +
            3 * s[1] +
            7 * s[2] +
            9 * s[3] +
            1 * s[4] +
            3 * s[5] +
            7 * s[6] +
            9 * s[7] +
            1 * s[8] +
            3 * s[9]) %
          10;
        return g !== 0 && (g = 10 - g), s.join("") + g;
      }),
      (d.prototype.pl_nip = function () {
        for (
          var i = this.natural({ min: 1, max: 999999999 }),
            s = this.pad(i, 9).split(""),
            u = 0;
          u < s.length;
          u++
        )
          s[u] = parseInt(s[u]);
        var g =
          (6 * s[0] +
            5 * s[1] +
            7 * s[2] +
            2 * s[3] +
            3 * s[4] +
            4 * s[5] +
            5 * s[6] +
            6 * s[7] +
            7 * s[8]) %
          11;
        return g === 10 ? this.pl_nip() : s.join("") + g;
      }),
      (d.prototype.pl_regon = function () {
        for (
          var i = this.natural({ min: 1, max: 99999999 }),
            s = this.pad(i, 8).split(""),
            u = 0;
          u < s.length;
          u++
        )
          s[u] = parseInt(s[u]);
        var g =
          (8 * s[0] +
            9 * s[1] +
            2 * s[2] +
            3 * s[3] +
            4 * s[4] +
            5 * s[5] +
            6 * s[6] +
            7 * s[7]) %
          11;
        return g === 10 && (g = 0), s.join("") + g;
      }),
      (d.prototype.note = function (i) {
        i = f(i, { notes: "flatKey" });
        var s = {
          naturals: ["C", "D", "E", "F", "G", "A", "B"],
          flats: ["D♭", "E♭", "G♭", "A♭", "B♭"],
          sharps: ["C♯", "D♯", "F♯", "G♯", "A♯"],
        };
        return (
          (s.all = s.naturals.concat(s.flats.concat(s.sharps))),
          (s.flatKey = s.naturals.concat(s.flats)),
          (s.sharpKey = s.naturals.concat(s.sharps)),
          this.pickone(s[i.notes])
        );
      }),
      (d.prototype.midi_note = function (i) {
        var s = 0,
          u = 127;
        return (
          (i = f(i, { min: s, max: u })),
          this.integer({ min: i.min, max: i.max })
        );
      }),
      (d.prototype.chord_quality = function (i) {
        i = f(i, { jazz: !0 });
        var s = ["maj", "min", "aug", "dim"];
        return (
          i.jazz && (s = ["maj7", "min7", "7", "sus", "dim", "ø"]),
          this.pickone(s)
        );
      }),
      (d.prototype.chord = function (i) {
        return (i = f(i)), this.note(i) + this.chord_quality(i);
      }),
      (d.prototype.tempo = function (i) {
        var s = 40,
          u = 320;
        return (
          (i = f(i, { min: s, max: u })),
          this.integer({ min: i.min, max: i.max })
        );
      }),
      (d.prototype.coin = function () {
        return this.bool() ? "heads" : "tails";
      });
    function v(i) {
      return function () {
        return this.natural(i);
      };
    }
    (d.prototype.d4 = v({ min: 1, max: 4 })),
      (d.prototype.d6 = v({ min: 1, max: 6 })),
      (d.prototype.d8 = v({ min: 1, max: 8 })),
      (d.prototype.d10 = v({ min: 1, max: 10 })),
      (d.prototype.d12 = v({ min: 1, max: 12 })),
      (d.prototype.d20 = v({ min: 1, max: 20 })),
      (d.prototype.d30 = v({ min: 1, max: 30 })),
      (d.prototype.d100 = v({ min: 1, max: 100 })),
      (d.prototype.rpg = function (i, s) {
        if (((s = f(s)), i)) {
          var u = i.toLowerCase().split("d"),
            g = [];
          if (u.length !== 2 || !parseInt(u[0], 10) || !parseInt(u[1], 10))
            throw new Error(
              "Chance: Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die"
            );
          for (var S = u[0]; S > 0; S--)
            g[S - 1] = this.natural({ min: 1, max: u[1] });
          return typeof s.sum < "u" && s.sum
            ? g.reduce(function (x, w) {
                return x + w;
              })
            : g;
        } else
          throw new RangeError("Chance: A type of die roll must be included");
      }),
      (d.prototype.guid = function (i) {
        i = f(i, { version: 5 });
        var s = "abcdef1234567890",
          u = "ab89",
          g =
            this.string({ pool: s, length: 8 }) +
            "-" +
            this.string({ pool: s, length: 4 }) +
            "-" +
            i.version +
            this.string({ pool: s, length: 3 }) +
            "-" +
            this.string({ pool: u, length: 1 }) +
            this.string({ pool: s, length: 3 }) +
            "-" +
            this.string({ pool: s, length: 12 });
        return g;
      }),
      (d.prototype.hash = function (i) {
        i = f(i, { length: 40, casing: "lower" });
        var s = i.casing === "upper" ? c.toUpperCase() : c;
        return this.string({ pool: s, length: i.length });
      }),
      (d.prototype.luhn_check = function (i) {
        var s = i.toString(),
          u = +s.substring(s.length - 1);
        return u === this.luhn_calculate(+s.substring(0, s.length - 1));
      }),
      (d.prototype.luhn_calculate = function (i) {
        for (
          var s = i.toString().split("").reverse(),
            u = 0,
            g,
            S = 0,
            x = s.length;
          x > S;
          ++S
        )
          (g = +s[S]), S % 2 === 0 && ((g *= 2), g > 9 && (g -= 9)), (u += g);
        return (u * 9) % 10;
      }),
      (d.prototype.md5 = function (i) {
        var s = { str: "", key: null, raw: !1 };
        if (!i) (s.str = this.string()), (i = {});
        else if (typeof i == "string") (s.str = i), (i = {});
        else {
          if (typeof i != "object") return null;
          if (i.constructor === "Array") return null;
        }
        if (((s = f(i, s)), !s.str))
          throw new Error("A parameter is required to return an md5 hash.");
        return this.bimd5.md5(s.str, s.key, s.raw);
      }),
      (d.prototype.file = function (i) {
        var s = i || {},
          u = "fileExtension",
          g = Object.keys(this.get("fileExtension")),
          S,
          x;
        if (((S = this.word({ length: s.length })), s.extension))
          return (x = s.extension), S + "." + x;
        if (s.extensions) {
          if (Array.isArray(s.extensions))
            return (x = this.pickone(s.extensions)), S + "." + x;
          if (s.extensions.constructor === Object) {
            var w = s.extensions,
              C = Object.keys(w);
            return (x = this.pickone(w[this.pickone(C)])), S + "." + x;
          }
          throw new Error("Chance: Extensions must be an Array or Object");
        }
        if (s.fileType) {
          var M = s.fileType;
          if (g.indexOf(M) !== -1)
            return (x = this.pickone(this.get(u)[M])), S + "." + x;
          throw new RangeError(
            "Chance: Expect file type value to be 'raster', 'vector', '3d' or 'document'"
          );
        }
        return (x = this.pickone(this.get(u)[this.pickone(g)])), S + "." + x;
      }),
      (d.prototype.fileWithContent = function (i) {
        var s = i || {},
          u = "fileName" in s ? s.fileName : this.file().split(".")[0];
        if (
          ((u +=
            "." +
            ("fileExtension" in s
              ? s.fileExtension
              : this.file().split(".")[1])),
          typeof s.fileSize != "number")
        )
          throw new Error("File size must be an integer");
        var g = { fileData: this.buffer({ length: s.fileSize }), fileName: u };
        return g;
      });
    var k = {
        firstNames: {
          male: {
            en: [
              "James",
              "John",
              "Robert",
              "Michael",
              "William",
              "David",
              "Richard",
              "Joseph",
              "Charles",
              "Thomas",
              "Christopher",
              "Daniel",
              "Matthew",
              "George",
              "Donald",
              "Anthony",
              "Paul",
              "Mark",
              "Edward",
              "Steven",
              "Kenneth",
              "Andrew",
              "Brian",
              "Joshua",
              "Kevin",
              "Ronald",
              "Timothy",
              "Jason",
              "Jeffrey",
              "Frank",
              "Gary",
              "Ryan",
              "Nicholas",
              "Eric",
              "Stephen",
              "Jacob",
              "Larry",
              "Jonathan",
              "Scott",
              "Raymond",
              "Justin",
              "Brandon",
              "Gregory",
              "Samuel",
              "Benjamin",
              "Patrick",
              "Jack",
              "Henry",
              "Walter",
              "Dennis",
              "Jerry",
              "Alexander",
              "Peter",
              "Tyler",
              "Douglas",
              "Harold",
              "Aaron",
              "Jose",
              "Adam",
              "Arthur",
              "Zachary",
              "Carl",
              "Nathan",
              "Albert",
              "Kyle",
              "Lawrence",
              "Joe",
              "Willie",
              "Gerald",
              "Roger",
              "Keith",
              "Jeremy",
              "Terry",
              "Harry",
              "Ralph",
              "Sean",
              "Jesse",
              "Roy",
              "Louis",
              "Billy",
              "Austin",
              "Bruce",
              "Eugene",
              "Christian",
              "Bryan",
              "Wayne",
              "Russell",
              "Howard",
              "Fred",
              "Ethan",
              "Jordan",
              "Philip",
              "Alan",
              "Juan",
              "Randy",
              "Vincent",
              "Bobby",
              "Dylan",
              "Johnny",
              "Phillip",
              "Victor",
              "Clarence",
              "Ernest",
              "Martin",
              "Craig",
              "Stanley",
              "Shawn",
              "Travis",
              "Bradley",
              "Leonard",
              "Earl",
              "Gabriel",
              "Jimmy",
              "Francis",
              "Todd",
              "Noah",
              "Danny",
              "Dale",
              "Cody",
              "Carlos",
              "Allen",
              "Frederick",
              "Logan",
              "Curtis",
              "Alex",
              "Joel",
              "Luis",
              "Norman",
              "Marvin",
              "Glenn",
              "Tony",
              "Nathaniel",
              "Rodney",
              "Melvin",
              "Alfred",
              "Steve",
              "Cameron",
              "Chad",
              "Edwin",
              "Caleb",
              "Evan",
              "Antonio",
              "Lee",
              "Herbert",
              "Jeffery",
              "Isaac",
              "Derek",
              "Ricky",
              "Marcus",
              "Theodore",
              "Elijah",
              "Luke",
              "Jesus",
              "Eddie",
              "Troy",
              "Mike",
              "Dustin",
              "Ray",
              "Adrian",
              "Bernard",
              "Leroy",
              "Angel",
              "Randall",
              "Wesley",
              "Ian",
              "Jared",
              "Mason",
              "Hunter",
              "Calvin",
              "Oscar",
              "Clifford",
              "Jay",
              "Shane",
              "Ronnie",
              "Barry",
              "Lucas",
              "Corey",
              "Manuel",
              "Leo",
              "Tommy",
              "Warren",
              "Jackson",
              "Isaiah",
              "Connor",
              "Don",
              "Dean",
              "Jon",
              "Julian",
              "Miguel",
              "Bill",
              "Lloyd",
              "Charlie",
              "Mitchell",
              "Leon",
              "Jerome",
              "Darrell",
              "Jeremiah",
              "Alvin",
              "Brett",
              "Seth",
              "Floyd",
              "Jim",
              "Blake",
              "Micheal",
              "Gordon",
              "Trevor",
              "Lewis",
              "Erik",
              "Edgar",
              "Vernon",
              "Devin",
              "Gavin",
              "Jayden",
              "Chris",
              "Clyde",
              "Tom",
              "Derrick",
              "Mario",
              "Brent",
              "Marc",
              "Herman",
              "Chase",
              "Dominic",
              "Ricardo",
              "Franklin",
              "Maurice",
              "Max",
              "Aiden",
              "Owen",
              "Lester",
              "Gilbert",
              "Elmer",
              "Gene",
              "Francisco",
              "Glen",
              "Cory",
              "Garrett",
              "Clayton",
              "Sam",
              "Jorge",
              "Chester",
              "Alejandro",
              "Jeff",
              "Harvey",
              "Milton",
              "Cole",
              "Ivan",
              "Andre",
              "Duane",
              "Landon",
            ],
            it: [
              "Adolfo",
              "Alberto",
              "Aldo",
              "Alessandro",
              "Alessio",
              "Alfredo",
              "Alvaro",
              "Andrea",
              "Angelo",
              "Angiolo",
              "Antonino",
              "Antonio",
              "Attilio",
              "Benito",
              "Bernardo",
              "Bruno",
              "Carlo",
              "Cesare",
              "Christian",
              "Claudio",
              "Corrado",
              "Cosimo",
              "Cristian",
              "Cristiano",
              "Daniele",
              "Dario",
              "David",
              "Davide",
              "Diego",
              "Dino",
              "Domenico",
              "Duccio",
              "Edoardo",
              "Elia",
              "Elio",
              "Emanuele",
              "Emiliano",
              "Emilio",
              "Enrico",
              "Enzo",
              "Ettore",
              "Fabio",
              "Fabrizio",
              "Federico",
              "Ferdinando",
              "Fernando",
              "Filippo",
              "Francesco",
              "Franco",
              "Gabriele",
              "Giacomo",
              "Giampaolo",
              "Giampiero",
              "Giancarlo",
              "Gianfranco",
              "Gianluca",
              "Gianmarco",
              "Gianni",
              "Gino",
              "Giorgio",
              "Giovanni",
              "Giuliano",
              "Giulio",
              "Giuseppe",
              "Graziano",
              "Gregorio",
              "Guido",
              "Iacopo",
              "Jacopo",
              "Lapo",
              "Leonardo",
              "Lorenzo",
              "Luca",
              "Luciano",
              "Luigi",
              "Manuel",
              "Marcello",
              "Marco",
              "Marino",
              "Mario",
              "Massimiliano",
              "Massimo",
              "Matteo",
              "Mattia",
              "Maurizio",
              "Mauro",
              "Michele",
              "Mirko",
              "Mohamed",
              "Nello",
              "Neri",
              "Niccolò",
              "Nicola",
              "Osvaldo",
              "Otello",
              "Paolo",
              "Pier Luigi",
              "Piero",
              "Pietro",
              "Raffaele",
              "Remo",
              "Renato",
              "Renzo",
              "Riccardo",
              "Roberto",
              "Rolando",
              "Romano",
              "Salvatore",
              "Samuele",
              "Sandro",
              "Sergio",
              "Silvano",
              "Simone",
              "Stefano",
              "Thomas",
              "Tommaso",
              "Ubaldo",
              "Ugo",
              "Umberto",
              "Valerio",
              "Valter",
              "Vasco",
              "Vincenzo",
              "Vittorio",
            ],
            nl: [
              "Aaron",
              "Abel",
              "Adam",
              "Adriaan",
              "Albert",
              "Alexander",
              "Ali",
              "Arjen",
              "Arno",
              "Bart",
              "Bas",
              "Bastiaan",
              "Benjamin",
              "Bob",
              "Boris",
              "Bram",
              "Brent",
              "Cas",
              "Casper",
              "Chris",
              "Christiaan",
              "Cornelis",
              "Daan",
              "Daley",
              "Damian",
              "Dani",
              "Daniel",
              "Daniël",
              "David",
              "Dean",
              "Dirk",
              "Dylan",
              "Egbert",
              "Elijah",
              "Erik",
              "Erwin",
              "Evert",
              "Ezra",
              "Fabian",
              "Fedde",
              "Finn",
              "Florian",
              "Floris",
              "Frank",
              "Frans",
              "Frederik",
              "Freek",
              "Geert",
              "Gerard",
              "Gerben",
              "Gerrit",
              "Gijs",
              "Guus",
              "Hans",
              "Hendrik",
              "Henk",
              "Herman",
              "Hidde",
              "Hugo",
              "Jaap",
              "Jan Jaap",
              "Jan-Willem",
              "Jack",
              "Jacob",
              "Jan",
              "Jason",
              "Jasper",
              "Jayden",
              "Jelle",
              "Jelte",
              "Jens",
              "Jeroen",
              "Jesse",
              "Jim",
              "Job",
              "Joep",
              "Johannes",
              "John",
              "Jonathan",
              "Joris",
              "Joshua",
              "Joël",
              "Julian",
              "Kees",
              "Kevin",
              "Koen",
              "Lars",
              "Laurens",
              "Leendert",
              "Lennard",
              "Lodewijk",
              "Luc",
              "Luca",
              "Lucas",
              "Lukas",
              "Luuk",
              "Maarten",
              "Marcus",
              "Martijn",
              "Martin",
              "Matthijs",
              "Maurits",
              "Max",
              "Mees",
              "Melle",
              "Mick",
              "Mika",
              "Milan",
              "Mohamed",
              "Mohammed",
              "Morris",
              "Muhammed",
              "Nathan",
              "Nick",
              "Nico",
              "Niek",
              "Niels",
              "Noah",
              "Noud",
              "Olivier",
              "Oscar",
              "Owen",
              "Paul",
              "Pepijn",
              "Peter",
              "Pieter",
              "Pim",
              "Quinten",
              "Reinier",
              "Rens",
              "Robin",
              "Ruben",
              "Sam",
              "Samuel",
              "Sander",
              "Sebastiaan",
              "Sem",
              "Sep",
              "Sepp",
              "Siem",
              "Simon",
              "Stan",
              "Stef",
              "Steven",
              "Stijn",
              "Sven",
              "Teun",
              "Thijmen",
              "Thijs",
              "Thomas",
              "Tijn",
              "Tim",
              "Timo",
              "Tobias",
              "Tom",
              "Victor",
              "Vince",
              "Willem",
              "Wim",
              "Wouter",
              "Yusuf",
            ],
            fr: [
              "Aaron",
              "Abdon",
              "Abel",
              "Abélard",
              "Abelin",
              "Abondance",
              "Abraham",
              "Absalon",
              "Acace",
              "Achaire",
              "Achille",
              "Adalard",
              "Adalbald",
              "Adalbéron",
              "Adalbert",
              "Adalric",
              "Adam",
              "Adegrin",
              "Adel",
              "Adelin",
              "Andelin",
              "Adelphe",
              "Adam",
              "Adéodat",
              "Adhémar",
              "Adjutor",
              "Adolphe",
              "Adonis",
              "Adon",
              "Adrien",
              "Agapet",
              "Agathange",
              "Agathon",
              "Agilbert",
              "Agénor",
              "Agnan",
              "Aignan",
              "Agrippin",
              "Aimable",
              "Aimé",
              "Alain",
              "Alban",
              "Albin",
              "Aubin",
              "Albéric",
              "Albert",
              "Albertet",
              "Alcibiade",
              "Alcide",
              "Alcée",
              "Alcime",
              "Aldonce",
              "Aldric",
              "Aldéric",
              "Aleaume",
              "Alexandre",
              "Alexis",
              "Alix",
              "Alliaume",
              "Aleaume",
              "Almine",
              "Almire",
              "Aloïs",
              "Alphée",
              "Alphonse",
              "Alpinien",
              "Alverède",
              "Amalric",
              "Amaury",
              "Amandin",
              "Amant",
              "Ambroise",
              "Amédée",
              "Amélien",
              "Amiel",
              "Amour",
              "Anaël",
              "Anastase",
              "Anatole",
              "Ancelin",
              "Andéol",
              "Andoche",
              "André",
              "Andoche",
              "Ange",
              "Angelin",
              "Angilbe",
              "Anglebert",
              "Angoustan",
              "Anicet",
              "Anne",
              "Annibal",
              "Ansbert",
              "Anselme",
              "Anthelme",
              "Antheaume",
              "Anthime",
              "Antide",
              "Antoine",
              "Antonius",
              "Antonin",
              "Apollinaire",
              "Apollon",
              "Aquilin",
              "Arcade",
              "Archambaud",
              "Archambeau",
              "Archange",
              "Archibald",
              "Arian",
              "Ariel",
              "Ariste",
              "Aristide",
              "Armand",
              "Armel",
              "Armin",
              "Arnould",
              "Arnaud",
              "Arolde",
              "Arsène",
              "Arsinoé",
              "Arthaud",
              "Arthème",
              "Arthur",
              "Ascelin",
              "Athanase",
              "Aubry",
              "Audebert",
              "Audouin",
              "Audran",
              "Audric",
              "Auguste",
              "Augustin",
              "Aurèle",
              "Aurélien",
              "Aurian",
              "Auxence",
              "Axel",
              "Aymard",
              "Aymeric",
              "Aymon",
              "Aymond",
              "Balthazar",
              "Baptiste",
              "Barnabé",
              "Barthélemy",
              "Bartimée",
              "Basile",
              "Bastien",
              "Baudouin",
              "Bénigne",
              "Benjamin",
              "Benoît",
              "Bérenger",
              "Bérard",
              "Bernard",
              "Bertrand",
              "Blaise",
              "Bon",
              "Boniface",
              "Bouchard",
              "Brice",
              "Brieuc",
              "Bruno",
              "Brunon",
              "Calixte",
              "Calliste",
              "Camélien",
              "Camille",
              "Camillien",
              "Candide",
              "Caribert",
              "Carloman",
              "Cassandre",
              "Cassien",
              "Cédric",
              "Céleste",
              "Célestin",
              "Célien",
              "Césaire",
              "César",
              "Charles",
              "Charlemagne",
              "Childebert",
              "Chilpéric",
              "Chrétien",
              "Christian",
              "Christodule",
              "Christophe",
              "Chrysostome",
              "Clarence",
              "Claude",
              "Claudien",
              "Cléandre",
              "Clément",
              "Clotaire",
              "Côme",
              "Constance",
              "Constant",
              "Constantin",
              "Corentin",
              "Cyprien",
              "Cyriaque",
              "Cyrille",
              "Cyril",
              "Damien",
              "Daniel",
              "David",
              "Delphin",
              "Denis",
              "Désiré",
              "Didier",
              "Dieudonné",
              "Dimitri",
              "Dominique",
              "Dorian",
              "Dorothée",
              "Edgard",
              "Edmond",
              "Édouard",
              "Éleuthère",
              "Élie",
              "Élisée",
              "Émeric",
              "Émile",
              "Émilien",
              "Emmanuel",
              "Enguerrand",
              "Épiphane",
              "Éric",
              "Esprit",
              "Ernest",
              "Étienne",
              "Eubert",
              "Eudes",
              "Eudoxe",
              "Eugène",
              "Eusèbe",
              "Eustache",
              "Évariste",
              "Évrard",
              "Fabien",
              "Fabrice",
              "Falba",
              "Félicité",
              "Félix",
              "Ferdinand",
              "Fiacre",
              "Fidèle",
              "Firmin",
              "Flavien",
              "Flodoard",
              "Florent",
              "Florentin",
              "Florestan",
              "Florian",
              "Fortuné",
              "Foulques",
              "Francisque",
              "François",
              "Français",
              "Franciscus",
              "Francs",
              "Frédéric",
              "Fulbert",
              "Fulcran",
              "Fulgence",
              "Gabin",
              "Gabriel",
              "Gaël",
              "Garnier",
              "Gaston",
              "Gaspard",
              "Gatien",
              "Gaud",
              "Gautier",
              "Gédéon",
              "Geoffroy",
              "Georges",
              "Géraud",
              "Gérard",
              "Gerbert",
              "Germain",
              "Gervais",
              "Ghislain",
              "Gilbert",
              "Gilles",
              "Girart",
              "Gislebert",
              "Gondebaud",
              "Gonthier",
              "Gontran",
              "Gonzague",
              "Grégoire",
              "Guérin",
              "Gui",
              "Guillaume",
              "Gustave",
              "Guy",
              "Guyot",
              "Hardouin",
              "Hector",
              "Hédelin",
              "Hélier",
              "Henri",
              "Herbert",
              "Herluin",
              "Hervé",
              "Hilaire",
              "Hildebert",
              "Hincmar",
              "Hippolyte",
              "Honoré",
              "Hubert",
              "Hugues",
              "Innocent",
              "Isabeau",
              "Isidore",
              "Jacques",
              "Japhet",
              "Jason",
              "Jean",
              "Jeannel",
              "Jeannot",
              "Jérémie",
              "Jérôme",
              "Joachim",
              "Joanny",
              "Job",
              "Jocelyn",
              "Joël",
              "Johan",
              "Jonas",
              "Jonathan",
              "Joseph",
              "Josse",
              "Josselin",
              "Jourdain",
              "Jude",
              "Judicaël",
              "Jules",
              "Julien",
              "Juste",
              "Justin",
              "Lambert",
              "Landry",
              "Laurent",
              "Lazare",
              "Léandre",
              "Léon",
              "Léonard",
              "Léopold",
              "Leu",
              "Loup",
              "Leufroy",
              "Libère",
              "Liétald",
              "Lionel",
              "Loïc",
              "Longin",
              "Lorrain",
              "Lorraine",
              "Lothaire",
              "Louis",
              "Loup",
              "Luc",
              "Lucas",
              "Lucien",
              "Ludolphe",
              "Ludovic",
              "Macaire",
              "Malo",
              "Mamert",
              "Manassé",
              "Marc",
              "Marceau",
              "Marcel",
              "Marcelin",
              "Marius",
              "Marseille",
              "Martial",
              "Martin",
              "Mathurin",
              "Matthias",
              "Mathias",
              "Matthieu",
              "Maugis",
              "Maurice",
              "Mauricet",
              "Maxence",
              "Maxime",
              "Maximilien",
              "Mayeul",
              "Médéric",
              "Melchior",
              "Mence",
              "Merlin",
              "Mérovée",
              "Michaël",
              "Michel",
              "Moïse",
              "Morgan",
              "Nathan",
              "Nathanaël",
              "Narcisse",
              "Néhémie",
              "Nestor",
              "Nestor",
              "Nicéphore",
              "Nicolas",
              "Noé",
              "Noël",
              "Norbert",
              "Normand",
              "Normands",
              "Octave",
              "Odilon",
              "Odon",
              "Oger",
              "Olivier",
              "Oury",
              "Pacôme",
              "Palémon",
              "Parfait",
              "Pascal",
              "Paterne",
              "Patrice",
              "Paul",
              "Pépin",
              "Perceval",
              "Philémon",
              "Philibert",
              "Philippe",
              "Philothée",
              "Pie",
              "Pierre",
              "Pierrick",
              "Prosper",
              "Quentin",
              "Raoul",
              "Raphaël",
              "Raymond",
              "Régis",
              "Réjean",
              "Rémi",
              "Renaud",
              "René",
              "Reybaud",
              "Richard",
              "Robert",
              "Roch",
              "Rodolphe",
              "Rodrigue",
              "Roger",
              "Roland",
              "Romain",
              "Romuald",
              "Roméo",
              "Rome",
              "Ronan",
              "Roselin",
              "Salomon",
              "Samuel",
              "Savin",
              "Savinien",
              "Scholastique",
              "Sébastien",
              "Séraphin",
              "Serge",
              "Séverin",
              "Sidoine",
              "Sigebert",
              "Sigismond",
              "Silvère",
              "Simon",
              "Siméon",
              "Sixte",
              "Stanislas",
              "Stéphane",
              "Stephan",
              "Sylvain",
              "Sylvestre",
              "Tancrède",
              "Tanguy",
              "Taurin",
              "Théodore",
              "Théodose",
              "Théophile",
              "Théophraste",
              "Thibault",
              "Thibert",
              "Thierry",
              "Thomas",
              "Timoléon",
              "Timothée",
              "Titien",
              "Tonnin",
              "Toussaint",
              "Trajan",
              "Tristan",
              "Turold",
              "Tim",
              "Ulysse",
              "Urbain",
              "Valentin",
              "Valère",
              "Valéry",
              "Venance",
              "Venant",
              "Venceslas",
              "Vianney",
              "Victor",
              "Victorien",
              "Victorin",
              "Vigile",
              "Vincent",
              "Vital",
              "Vitalien",
              "Vivien",
              "Waleran",
              "Wandrille",
              "Xavier",
              "Xénophon",
              "Yves",
              "Zacharie",
              "Zaché",
              "Zéphirin",
            ],
          },
          female: {
            en: [
              "Mary",
              "Emma",
              "Elizabeth",
              "Minnie",
              "Margaret",
              "Ida",
              "Alice",
              "Bertha",
              "Sarah",
              "Annie",
              "Clara",
              "Ella",
              "Florence",
              "Cora",
              "Martha",
              "Laura",
              "Nellie",
              "Grace",
              "Carrie",
              "Maude",
              "Mabel",
              "Bessie",
              "Jennie",
              "Gertrude",
              "Julia",
              "Hattie",
              "Edith",
              "Mattie",
              "Rose",
              "Catherine",
              "Lillian",
              "Ada",
              "Lillie",
              "Helen",
              "Jessie",
              "Louise",
              "Ethel",
              "Lula",
              "Myrtle",
              "Eva",
              "Frances",
              "Lena",
              "Lucy",
              "Edna",
              "Maggie",
              "Pearl",
              "Daisy",
              "Fannie",
              "Josephine",
              "Dora",
              "Rosa",
              "Katherine",
              "Agnes",
              "Marie",
              "Nora",
              "May",
              "Mamie",
              "Blanche",
              "Stella",
              "Ellen",
              "Nancy",
              "Effie",
              "Sallie",
              "Nettie",
              "Della",
              "Lizzie",
              "Flora",
              "Susie",
              "Maud",
              "Mae",
              "Etta",
              "Harriet",
              "Sadie",
              "Caroline",
              "Katie",
              "Lydia",
              "Elsie",
              "Kate",
              "Susan",
              "Mollie",
              "Alma",
              "Addie",
              "Georgia",
              "Eliza",
              "Lulu",
              "Nannie",
              "Lottie",
              "Amanda",
              "Belle",
              "Charlotte",
              "Rebecca",
              "Ruth",
              "Viola",
              "Olive",
              "Amelia",
              "Hannah",
              "Jane",
              "Virginia",
              "Emily",
              "Matilda",
              "Irene",
              "Kathryn",
              "Esther",
              "Willie",
              "Henrietta",
              "Ollie",
              "Amy",
              "Rachel",
              "Sara",
              "Estella",
              "Theresa",
              "Augusta",
              "Ora",
              "Pauline",
              "Josie",
              "Lola",
              "Sophia",
              "Leona",
              "Anne",
              "Mildred",
              "Ann",
              "Beulah",
              "Callie",
              "Lou",
              "Delia",
              "Eleanor",
              "Barbara",
              "Iva",
              "Louisa",
              "Maria",
              "Mayme",
              "Evelyn",
              "Estelle",
              "Nina",
              "Betty",
              "Marion",
              "Bettie",
              "Dorothy",
              "Luella",
              "Inez",
              "Lela",
              "Rosie",
              "Allie",
              "Millie",
              "Janie",
              "Cornelia",
              "Victoria",
              "Ruby",
              "Winifred",
              "Alta",
              "Celia",
              "Christine",
              "Beatrice",
              "Birdie",
              "Harriett",
              "Mable",
              "Myra",
              "Sophie",
              "Tillie",
              "Isabel",
              "Sylvia",
              "Carolyn",
              "Isabelle",
              "Leila",
              "Sally",
              "Ina",
              "Essie",
              "Bertie",
              "Nell",
              "Alberta",
              "Katharine",
              "Lora",
              "Rena",
              "Mina",
              "Rhoda",
              "Mathilda",
              "Abbie",
              "Eula",
              "Dollie",
              "Hettie",
              "Eunice",
              "Fanny",
              "Ola",
              "Lenora",
              "Adelaide",
              "Christina",
              "Lelia",
              "Nelle",
              "Sue",
              "Johanna",
              "Lilly",
              "Lucinda",
              "Minerva",
              "Lettie",
              "Roxie",
              "Cynthia",
              "Helena",
              "Hilda",
              "Hulda",
              "Bernice",
              "Genevieve",
              "Jean",
              "Cordelia",
              "Marian",
              "Francis",
              "Jeanette",
              "Adeline",
              "Gussie",
              "Leah",
              "Lois",
              "Lura",
              "Mittie",
              "Hallie",
              "Isabella",
              "Olga",
              "Phoebe",
              "Teresa",
              "Hester",
              "Lida",
              "Lina",
              "Winnie",
              "Claudia",
              "Marguerite",
              "Vera",
              "Cecelia",
              "Bess",
              "Emilie",
              "Rosetta",
              "Verna",
              "Myrtie",
              "Cecilia",
              "Elva",
              "Olivia",
              "Ophelia",
              "Georgie",
              "Elnora",
              "Violet",
              "Adele",
              "Lily",
              "Linnie",
              "Loretta",
              "Madge",
              "Polly",
              "Virgie",
              "Eugenia",
              "Lucile",
              "Lucille",
              "Mabelle",
              "Rosalie",
            ],
            it: [
              "Ada",
              "Adriana",
              "Alessandra",
              "Alessia",
              "Alice",
              "Angela",
              "Anna",
              "Anna Maria",
              "Annalisa",
              "Annita",
              "Annunziata",
              "Antonella",
              "Arianna",
              "Asia",
              "Assunta",
              "Aurora",
              "Barbara",
              "Beatrice",
              "Benedetta",
              "Bianca",
              "Bruna",
              "Camilla",
              "Carla",
              "Carlotta",
              "Carmela",
              "Carolina",
              "Caterina",
              "Catia",
              "Cecilia",
              "Chiara",
              "Cinzia",
              "Clara",
              "Claudia",
              "Costanza",
              "Cristina",
              "Daniela",
              "Debora",
              "Diletta",
              "Dina",
              "Donatella",
              "Elena",
              "Eleonora",
              "Elisa",
              "Elisabetta",
              "Emanuela",
              "Emma",
              "Eva",
              "Federica",
              "Fernanda",
              "Fiorella",
              "Fiorenza",
              "Flora",
              "Franca",
              "Francesca",
              "Gabriella",
              "Gaia",
              "Gemma",
              "Giada",
              "Gianna",
              "Gina",
              "Ginevra",
              "Giorgia",
              "Giovanna",
              "Giulia",
              "Giuliana",
              "Giuseppa",
              "Giuseppina",
              "Grazia",
              "Graziella",
              "Greta",
              "Ida",
              "Ilaria",
              "Ines",
              "Iolanda",
              "Irene",
              "Irma",
              "Isabella",
              "Jessica",
              "Laura",
              "Lea",
              "Letizia",
              "Licia",
              "Lidia",
              "Liliana",
              "Lina",
              "Linda",
              "Lisa",
              "Livia",
              "Loretta",
              "Luana",
              "Lucia",
              "Luciana",
              "Lucrezia",
              "Luisa",
              "Manuela",
              "Mara",
              "Marcella",
              "Margherita",
              "Maria",
              "Maria Cristina",
              "Maria Grazia",
              "Maria Luisa",
              "Maria Pia",
              "Maria Teresa",
              "Marina",
              "Marisa",
              "Marta",
              "Martina",
              "Marzia",
              "Matilde",
              "Melissa",
              "Michela",
              "Milena",
              "Mirella",
              "Monica",
              "Natalina",
              "Nella",
              "Nicoletta",
              "Noemi",
              "Olga",
              "Paola",
              "Patrizia",
              "Piera",
              "Pierina",
              "Raffaella",
              "Rebecca",
              "Renata",
              "Rina",
              "Rita",
              "Roberta",
              "Rosa",
              "Rosanna",
              "Rossana",
              "Rossella",
              "Sabrina",
              "Sandra",
              "Sara",
              "Serena",
              "Silvana",
              "Silvia",
              "Simona",
              "Simonetta",
              "Sofia",
              "Sonia",
              "Stefania",
              "Susanna",
              "Teresa",
              "Tina",
              "Tiziana",
              "Tosca",
              "Valentina",
              "Valeria",
              "Vanda",
              "Vanessa",
              "Vanna",
              "Vera",
              "Veronica",
              "Vilma",
              "Viola",
              "Virginia",
              "Vittoria",
            ],
            nl: [
              "Ada",
              "Arianne",
              "Afke",
              "Amanda",
              "Amber",
              "Amy",
              "Aniek",
              "Anita",
              "Anja",
              "Anna",
              "Anne",
              "Annelies",
              "Annemarie",
              "Annette",
              "Anouk",
              "Astrid",
              "Aukje",
              "Barbara",
              "Bianca",
              "Carla",
              "Carlijn",
              "Carolien",
              "Chantal",
              "Charlotte",
              "Claudia",
              "Daniëlle",
              "Debora",
              "Diane",
              "Dora",
              "Eline",
              "Elise",
              "Ella",
              "Ellen",
              "Emma",
              "Esmee",
              "Evelien",
              "Esther",
              "Erica",
              "Eva",
              "Femke",
              "Fleur",
              "Floor",
              "Froukje",
              "Gea",
              "Gerda",
              "Hanna",
              "Hanneke",
              "Heleen",
              "Hilde",
              "Ilona",
              "Ina",
              "Inge",
              "Ingrid",
              "Iris",
              "Isabel",
              "Isabelle",
              "Janneke",
              "Jasmijn",
              "Jeanine",
              "Jennifer",
              "Jessica",
              "Johanna",
              "Joke",
              "Julia",
              "Julie",
              "Karen",
              "Karin",
              "Katja",
              "Kim",
              "Lara",
              "Laura",
              "Lena",
              "Lianne",
              "Lieke",
              "Lilian",
              "Linda",
              "Lisa",
              "Lisanne",
              "Lotte",
              "Louise",
              "Maaike",
              "Manon",
              "Marga",
              "Maria",
              "Marissa",
              "Marit",
              "Marjolein",
              "Martine",
              "Marleen",
              "Melissa",
              "Merel",
              "Miranda",
              "Michelle",
              "Mirjam",
              "Mirthe",
              "Naomi",
              "Natalie",
              "Nienke",
              "Nina",
              "Noortje",
              "Olivia",
              "Patricia",
              "Paula",
              "Paulien",
              "Ramona",
              "Ria",
              "Rianne",
              "Roos",
              "Rosanne",
              "Ruth",
              "Sabrina",
              "Sandra",
              "Sanne",
              "Sara",
              "Saskia",
              "Silvia",
              "Sofia",
              "Sophie",
              "Sonja",
              "Suzanne",
              "Tamara",
              "Tess",
              "Tessa",
              "Tineke",
              "Valerie",
              "Vanessa",
              "Veerle",
              "Vera",
              "Victoria",
              "Wendy",
              "Willeke",
              "Yvonne",
              "Zoë",
            ],
            fr: [
              "Abdon",
              "Abel",
              "Abigaëlle",
              "Abigaïl",
              "Acacius",
              "Acanthe",
              "Adalbert",
              "Adalsinde",
              "Adegrine",
              "Adélaïde",
              "Adèle",
              "Adélie",
              "Adeline",
              "Adeltrude",
              "Adolphe",
              "Adonis",
              "Adrastée",
              "Adrehilde",
              "Adrienne",
              "Agathe",
              "Agilbert",
              "Aglaé",
              "Aignan",
              "Agneflète",
              "Agnès",
              "Agrippine",
              "Aimé",
              "Alaine",
              "Alaïs",
              "Albane",
              "Albérade",
              "Alberte",
              "Alcide",
              "Alcine",
              "Alcyone",
              "Aldegonde",
              "Aleth",
              "Alexandrine",
              "Alexine",
              "Alice",
              "Aliénor",
              "Aliette",
              "Aline",
              "Alix",
              "Alizé",
              "Aloïse",
              "Aloyse",
              "Alphonsine",
              "Althée",
              "Amaliane",
              "Amalthée",
              "Amande",
              "Amandine",
              "Amant",
              "Amarande",
              "Amaranthe",
              "Amaryllis",
              "Ambre",
              "Ambroisie",
              "Amélie",
              "Améthyste",
              "Aminte",
              "Anaël",
              "Anaïs",
              "Anastasie",
              "Anatole",
              "Ancelin",
              "Andrée",
              "Anémone",
              "Angadrême",
              "Angèle",
              "Angeline",
              "Angélique",
              "Angilbert",
              "Anicet",
              "Annabelle",
              "Anne",
              "Annette",
              "Annick",
              "Annie",
              "Annonciade",
              "Ansbert",
              "Anstrudie",
              "Anthelme",
              "Antigone",
              "Antoinette",
              "Antonine",
              "Aphélie",
              "Apolline",
              "Apollonie",
              "Aquiline",
              "Arabelle",
              "Arcadie",
              "Archange",
              "Argine",
              "Ariane",
              "Aricie",
              "Ariel",
              "Arielle",
              "Arlette",
              "Armance",
              "Armande",
              "Armandine",
              "Armelle",
              "Armide",
              "Armelle",
              "Armin",
              "Arnaud",
              "Arsène",
              "Arsinoé",
              "Artémis",
              "Arthur",
              "Ascelin",
              "Ascension",
              "Assomption",
              "Astarté",
              "Astérie",
              "Astrée",
              "Astrid",
              "Athalie",
              "Athanasie",
              "Athina",
              "Aube",
              "Albert",
              "Aude",
              "Audrey",
              "Augustine",
              "Aure",
              "Aurélie",
              "Aurélien",
              "Aurèle",
              "Aurore",
              "Auxence",
              "Aveline",
              "Abigaëlle",
              "Avoye",
              "Axelle",
              "Aymard",
              "Azalée",
              "Adèle",
              "Adeline",
              "Barbe",
              "Basilisse",
              "Bathilde",
              "Béatrice",
              "Béatrix",
              "Bénédicte",
              "Bérengère",
              "Bernadette",
              "Berthe",
              "Bertille",
              "Beuve",
              "Blanche",
              "Blanc",
              "Blandine",
              "Brigitte",
              "Brune",
              "Brunehilde",
              "Callista",
              "Camille",
              "Capucine",
              "Carine",
              "Caroline",
              "Cassandre",
              "Catherine",
              "Cécile",
              "Céleste",
              "Célestine",
              "Céline",
              "Chantal",
              "Charlène",
              "Charline",
              "Charlotte",
              "Chloé",
              "Christelle",
              "Christiane",
              "Christine",
              "Claire",
              "Clara",
              "Claude",
              "Claudine",
              "Clarisse",
              "Clémence",
              "Clémentine",
              "Cléo",
              "Clio",
              "Clotilde",
              "Coline",
              "Conception",
              "Constance",
              "Coralie",
              "Coraline",
              "Corentine",
              "Corinne",
              "Cyrielle",
              "Daniel",
              "Daniel",
              "Daphné",
              "Débora",
              "Delphine",
              "Denise",
              "Diane",
              "Dieudonné",
              "Dominique",
              "Doriane",
              "Dorothée",
              "Douce",
              "Édith",
              "Edmée",
              "Éléonore",
              "Éliane",
              "Élia",
              "Éliette",
              "Élisabeth",
              "Élise",
              "Ella",
              "Élodie",
              "Éloïse",
              "Elsa",
              "Émeline",
              "Émérance",
              "Émérentienne",
              "Émérencie",
              "Émilie",
              "Emma",
              "Emmanuelle",
              "Emmelie",
              "Ernestine",
              "Esther",
              "Estelle",
              "Eudoxie",
              "Eugénie",
              "Eulalie",
              "Euphrasie",
              "Eusébie",
              "Évangéline",
              "Eva",
              "Ève",
              "Évelyne",
              "Fanny",
              "Fantine",
              "Faustine",
              "Félicie",
              "Fernande",
              "Flavie",
              "Fleur",
              "Flore",
              "Florence",
              "Florie",
              "Fortuné",
              "France",
              "Francia",
              "Françoise",
              "Francine",
              "Gabrielle",
              "Gaëlle",
              "Garance",
              "Geneviève",
              "Georgette",
              "Gerberge",
              "Germaine",
              "Gertrude",
              "Gisèle",
              "Guenièvre",
              "Guilhemine",
              "Guillemette",
              "Gustave",
              "Gwenael",
              "Hélène",
              "Héloïse",
              "Henriette",
              "Hermine",
              "Hermione",
              "Hippolyte",
              "Honorine",
              "Hortense",
              "Huguette",
              "Ines",
              "Irène",
              "Irina",
              "Iris",
              "Isabeau",
              "Isabelle",
              "Iseult",
              "Isolde",
              "Ismérie",
              "Jacinthe",
              "Jacqueline",
              "Jade",
              "Janine",
              "Jeanne",
              "Jocelyne",
              "Joëlle",
              "Joséphine",
              "Judith",
              "Julia",
              "Julie",
              "Jules",
              "Juliette",
              "Justine",
              "Katy",
              "Kathy",
              "Katie",
              "Laura",
              "Laure",
              "Laureline",
              "Laurence",
              "Laurene",
              "Lauriane",
              "Laurianne",
              "Laurine",
              "Léa",
              "Léna",
              "Léonie",
              "Léon",
              "Léontine",
              "Lorraine",
              "Lucie",
              "Lucienne",
              "Lucille",
              "Ludivine",
              "Lydie",
              "Lydie",
              "Megane",
              "Madeleine",
              "Magali",
              "Maguelone",
              "Mallaury",
              "Manon",
              "Marceline",
              "Margot",
              "Marguerite",
              "Marianne",
              "Marie",
              "Myriam",
              "Marie",
              "Marine",
              "Marion",
              "Marlène",
              "Marthe",
              "Martine",
              "Mathilde",
              "Maud",
              "Maureen",
              "Mauricette",
              "Maxime",
              "Mélanie",
              "Melissa",
              "Mélissandre",
              "Mélisande",
              "Mélodie",
              "Michel",
              "Micheline",
              "Mireille",
              "Miriam",
              "Moïse",
              "Monique",
              "Morgane",
              "Muriel",
              "Mylène",
              "Nadège",
              "Nadine",
              "Nathalie",
              "Nicole",
              "Nicolette",
              "Nine",
              "Noël",
              "Noémie",
              "Océane",
              "Odette",
              "Odile",
              "Olive",
              "Olivia",
              "Olympe",
              "Ombline",
              "Ombeline",
              "Ophélie",
              "Oriande",
              "Oriane",
              "Ozanne",
              "Pascale",
              "Pascaline",
              "Paule",
              "Paulette",
              "Pauline",
              "Priscille",
              "Prisca",
              "Prisque",
              "Pécine",
              "Pélagie",
              "Pénélope",
              "Perrine",
              "Pétronille",
              "Philippine",
              "Philomène",
              "Philothée",
              "Primerose",
              "Prudence",
              "Pulchérie",
              "Quentine",
              "Quiéta",
              "Quintia",
              "Quintilla",
              "Rachel",
              "Raphaëlle",
              "Raymonde",
              "Rebecca",
              "Régine",
              "Réjeanne",
              "René",
              "Rita",
              "Rita",
              "Rolande",
              "Romane",
              "Rosalie",
              "Rose",
              "Roseline",
              "Sabine",
              "Salomé",
              "Sandra",
              "Sandrine",
              "Sarah",
              "Ségolène",
              "Séverine",
              "Sibylle",
              "Simone",
              "Sixt",
              "Solange",
              "Soline",
              "Solène",
              "Sophie",
              "Stéphanie",
              "Suzanne",
              "Sylvain",
              "Sylvie",
              "Tatiana",
              "Thaïs",
              "Théodora",
              "Thérèse",
              "Tiphaine",
              "Ursule",
              "Valentine",
              "Valérie",
              "Véronique",
              "Victoire",
              "Victorine",
              "Vinciane",
              "Violette",
              "Virginie",
              "Viviane",
              "Xavière",
              "Yolande",
              "Ysaline",
              "Yvette",
              "Yvonne",
              "Zélie",
              "Zita",
              "Zoé",
            ],
          },
        },
        lastNames: {
          en: [
            "Smith",
            "Johnson",
            "Williams",
            "Jones",
            "Brown",
            "Davis",
            "Miller",
            "Wilson",
            "Moore",
            "Taylor",
            "Anderson",
            "Thomas",
            "Jackson",
            "White",
            "Harris",
            "Martin",
            "Thompson",
            "Garcia",
            "Martinez",
            "Robinson",
            "Clark",
            "Rodriguez",
            "Lewis",
            "Lee",
            "Walker",
            "Hall",
            "Allen",
            "Young",
            "Hernandez",
            "King",
            "Wright",
            "Lopez",
            "Hill",
            "Scott",
            "Green",
            "Adams",
            "Baker",
            "Gonzalez",
            "Nelson",
            "Carter",
            "Mitchell",
            "Perez",
            "Roberts",
            "Turner",
            "Phillips",
            "Campbell",
            "Parker",
            "Evans",
            "Edwards",
            "Collins",
            "Stewart",
            "Sanchez",
            "Morris",
            "Rogers",
            "Reed",
            "Cook",
            "Morgan",
            "Bell",
            "Murphy",
            "Bailey",
            "Rivera",
            "Cooper",
            "Richardson",
            "Cox",
            "Howard",
            "Ward",
            "Torres",
            "Peterson",
            "Gray",
            "Ramirez",
            "James",
            "Watson",
            "Brooks",
            "Kelly",
            "Sanders",
            "Price",
            "Bennett",
            "Wood",
            "Barnes",
            "Ross",
            "Henderson",
            "Coleman",
            "Jenkins",
            "Perry",
            "Powell",
            "Long",
            "Patterson",
            "Hughes",
            "Flores",
            "Washington",
            "Butler",
            "Simmons",
            "Foster",
            "Gonzales",
            "Bryant",
            "Alexander",
            "Russell",
            "Griffin",
            "Diaz",
            "Hayes",
            "Myers",
            "Ford",
            "Hamilton",
            "Graham",
            "Sullivan",
            "Wallace",
            "Woods",
            "Cole",
            "West",
            "Jordan",
            "Owens",
            "Reynolds",
            "Fisher",
            "Ellis",
            "Harrison",
            "Gibson",
            "McDonald",
            "Cruz",
            "Marshall",
            "Ortiz",
            "Gomez",
            "Murray",
            "Freeman",
            "Wells",
            "Webb",
            "Simpson",
            "Stevens",
            "Tucker",
            "Porter",
            "Hunter",
            "Hicks",
            "Crawford",
            "Henry",
            "Boyd",
            "Mason",
            "Morales",
            "Kennedy",
            "Warren",
            "Dixon",
            "Ramos",
            "Reyes",
            "Burns",
            "Gordon",
            "Shaw",
            "Holmes",
            "Rice",
            "Robertson",
            "Hunt",
            "Black",
            "Daniels",
            "Palmer",
            "Mills",
            "Nichols",
            "Grant",
            "Knight",
            "Ferguson",
            "Rose",
            "Stone",
            "Hawkins",
            "Dunn",
            "Perkins",
            "Hudson",
            "Spencer",
            "Gardner",
            "Stephens",
            "Payne",
            "Pierce",
            "Berry",
            "Matthews",
            "Arnold",
            "Wagner",
            "Willis",
            "Ray",
            "Watkins",
            "Olson",
            "Carroll",
            "Duncan",
            "Snyder",
            "Hart",
            "Cunningham",
            "Bradley",
            "Lane",
            "Andrews",
            "Ruiz",
            "Harper",
            "Fox",
            "Riley",
            "Armstrong",
            "Carpenter",
            "Weaver",
            "Greene",
            "Lawrence",
            "Elliott",
            "Chavez",
            "Sims",
            "Austin",
            "Peters",
            "Kelley",
            "Franklin",
            "Lawson",
            "Fields",
            "Gutierrez",
            "Ryan",
            "Schmidt",
            "Carr",
            "Vasquez",
            "Castillo",
            "Wheeler",
            "Chapman",
            "Oliver",
            "Montgomery",
            "Richards",
            "Williamson",
            "Johnston",
            "Banks",
            "Meyer",
            "Bishop",
            "McCoy",
            "Howell",
            "Alvarez",
            "Morrison",
            "Hansen",
            "Fernandez",
            "Garza",
            "Harvey",
            "Little",
            "Burton",
            "Stanley",
            "Nguyen",
            "George",
            "Jacobs",
            "Reid",
            "Kim",
            "Fuller",
            "Lynch",
            "Dean",
            "Gilbert",
            "Garrett",
            "Romero",
            "Welch",
            "Larson",
            "Frazier",
            "Burke",
            "Hanson",
            "Day",
            "Mendoza",
            "Moreno",
            "Bowman",
            "Medina",
            "Fowler",
            "Brewer",
            "Hoffman",
            "Carlson",
            "Silva",
            "Pearson",
            "Holland",
            "Douglas",
            "Fleming",
            "Jensen",
            "Vargas",
            "Byrd",
            "Davidson",
            "Hopkins",
            "May",
            "Terry",
            "Herrera",
            "Wade",
            "Soto",
            "Walters",
            "Curtis",
            "Neal",
            "Caldwell",
            "Lowe",
            "Jennings",
            "Barnett",
            "Graves",
            "Jimenez",
            "Horton",
            "Shelton",
            "Barrett",
            "Obrien",
            "Castro",
            "Sutton",
            "Gregory",
            "McKinney",
            "Lucas",
            "Miles",
            "Craig",
            "Rodriquez",
            "Chambers",
            "Holt",
            "Lambert",
            "Fletcher",
            "Watts",
            "Bates",
            "Hale",
            "Rhodes",
            "Pena",
            "Beck",
            "Newman",
            "Haynes",
            "McDaniel",
            "Mendez",
            "Bush",
            "Vaughn",
            "Parks",
            "Dawson",
            "Santiago",
            "Norris",
            "Hardy",
            "Love",
            "Steele",
            "Curry",
            "Powers",
            "Schultz",
            "Barker",
            "Guzman",
            "Page",
            "Munoz",
            "Ball",
            "Keller",
            "Chandler",
            "Weber",
            "Leonard",
            "Walsh",
            "Lyons",
            "Ramsey",
            "Wolfe",
            "Schneider",
            "Mullins",
            "Benson",
            "Sharp",
            "Bowen",
            "Daniel",
            "Barber",
            "Cummings",
            "Hines",
            "Baldwin",
            "Griffith",
            "Valdez",
            "Hubbard",
            "Salazar",
            "Reeves",
            "Warner",
            "Stevenson",
            "Burgess",
            "Santos",
            "Tate",
            "Cross",
            "Garner",
            "Mann",
            "Mack",
            "Moss",
            "Thornton",
            "Dennis",
            "McGee",
            "Farmer",
            "Delgado",
            "Aguilar",
            "Vega",
            "Glover",
            "Manning",
            "Cohen",
            "Harmon",
            "Rodgers",
            "Robbins",
            "Newton",
            "Todd",
            "Blair",
            "Higgins",
            "Ingram",
            "Reese",
            "Cannon",
            "Strickland",
            "Townsend",
            "Potter",
            "Goodwin",
            "Walton",
            "Rowe",
            "Hampton",
            "Ortega",
            "Patton",
            "Swanson",
            "Joseph",
            "Francis",
            "Goodman",
            "Maldonado",
            "Yates",
            "Becker",
            "Erickson",
            "Hodges",
            "Rios",
            "Conner",
            "Adkins",
            "Webster",
            "Norman",
            "Malone",
            "Hammond",
            "Flowers",
            "Cobb",
            "Moody",
            "Quinn",
            "Blake",
            "Maxwell",
            "Pope",
            "Floyd",
            "Osborne",
            "Paul",
            "McCarthy",
            "Guerrero",
            "Lindsey",
            "Estrada",
            "Sandoval",
            "Gibbs",
            "Tyler",
            "Gross",
            "Fitzgerald",
            "Stokes",
            "Doyle",
            "Sherman",
            "Saunders",
            "Wise",
            "Colon",
            "Gill",
            "Alvarado",
            "Greer",
            "Padilla",
            "Simon",
            "Waters",
            "Nunez",
            "Ballard",
            "Schwartz",
            "McBride",
            "Houston",
            "Christensen",
            "Klein",
            "Pratt",
            "Briggs",
            "Parsons",
            "McLaughlin",
            "Zimmerman",
            "French",
            "Buchanan",
            "Moran",
            "Copeland",
            "Roy",
            "Pittman",
            "Brady",
            "McCormick",
            "Holloway",
            "Brock",
            "Poole",
            "Frank",
            "Logan",
            "Owen",
            "Bass",
            "Marsh",
            "Drake",
            "Wong",
            "Jefferson",
            "Park",
            "Morton",
            "Abbott",
            "Sparks",
            "Patrick",
            "Norton",
            "Huff",
            "Clayton",
            "Massey",
            "Lloyd",
            "Figueroa",
            "Carson",
            "Bowers",
            "Roberson",
            "Barton",
            "Tran",
            "Lamb",
            "Harrington",
            "Casey",
            "Boone",
            "Cortez",
            "Clarke",
            "Mathis",
            "Singleton",
            "Wilkins",
            "Cain",
            "Bryan",
            "Underwood",
            "Hogan",
            "McKenzie",
            "Collier",
            "Luna",
            "Phelps",
            "McGuire",
            "Allison",
            "Bridges",
            "Wilkerson",
            "Nash",
            "Summers",
            "Atkins",
          ],
          it: [
            "Acciai",
            "Aglietti",
            "Agostini",
            "Agresti",
            "Ahmed",
            "Aiazzi",
            "Albanese",
            "Alberti",
            "Alessi",
            "Alfani",
            "Alinari",
            "Alterini",
            "Amato",
            "Ammannati",
            "Ancillotti",
            "Andrei",
            "Andreini",
            "Andreoni",
            "Angeli",
            "Anichini",
            "Antonelli",
            "Antonini",
            "Arena",
            "Ariani",
            "Arnetoli",
            "Arrighi",
            "Baccani",
            "Baccetti",
            "Bacci",
            "Bacherini",
            "Badii",
            "Baggiani",
            "Baglioni",
            "Bagni",
            "Bagnoli",
            "Baldassini",
            "Baldi",
            "Baldini",
            "Ballerini",
            "Balli",
            "Ballini",
            "Balloni",
            "Bambi",
            "Banchi",
            "Bandinelli",
            "Bandini",
            "Bani",
            "Barbetti",
            "Barbieri",
            "Barchielli",
            "Bardazzi",
            "Bardelli",
            "Bardi",
            "Barducci",
            "Bargellini",
            "Bargiacchi",
            "Barni",
            "Baroncelli",
            "Baroncini",
            "Barone",
            "Baroni",
            "Baronti",
            "Bartalesi",
            "Bartoletti",
            "Bartoli",
            "Bartolini",
            "Bartoloni",
            "Bartolozzi",
            "Basagni",
            "Basile",
            "Bassi",
            "Batacchi",
            "Battaglia",
            "Battaglini",
            "Bausi",
            "Becagli",
            "Becattini",
            "Becchi",
            "Becucci",
            "Bellandi",
            "Bellesi",
            "Belli",
            "Bellini",
            "Bellucci",
            "Bencini",
            "Benedetti",
            "Benelli",
            "Beni",
            "Benini",
            "Bensi",
            "Benucci",
            "Benvenuti",
            "Berlincioni",
            "Bernacchioni",
            "Bernardi",
            "Bernardini",
            "Berni",
            "Bernini",
            "Bertelli",
            "Berti",
            "Bertini",
            "Bessi",
            "Betti",
            "Bettini",
            "Biagi",
            "Biagini",
            "Biagioni",
            "Biagiotti",
            "Biancalani",
            "Bianchi",
            "Bianchini",
            "Bianco",
            "Biffoli",
            "Bigazzi",
            "Bigi",
            "Biliotti",
            "Billi",
            "Binazzi",
            "Bindi",
            "Bini",
            "Biondi",
            "Bizzarri",
            "Bocci",
            "Bogani",
            "Bolognesi",
            "Bonaiuti",
            "Bonanni",
            "Bonciani",
            "Boncinelli",
            "Bondi",
            "Bonechi",
            "Bongini",
            "Boni",
            "Bonini",
            "Borchi",
            "Boretti",
            "Borghi",
            "Borghini",
            "Borgioli",
            "Borri",
            "Borselli",
            "Boschi",
            "Bottai",
            "Bracci",
            "Braccini",
            "Brandi",
            "Braschi",
            "Bravi",
            "Brazzini",
            "Breschi",
            "Brilli",
            "Brizzi",
            "Brogelli",
            "Brogi",
            "Brogioni",
            "Brunelli",
            "Brunetti",
            "Bruni",
            "Bruno",
            "Brunori",
            "Bruschi",
            "Bucci",
            "Bucciarelli",
            "Buccioni",
            "Bucelli",
            "Bulli",
            "Burberi",
            "Burchi",
            "Burgassi",
            "Burroni",
            "Bussotti",
            "Buti",
            "Caciolli",
            "Caiani",
            "Calabrese",
            "Calamai",
            "Calamandrei",
            "Caldini",
            "Calo'",
            "Calonaci",
            "Calosi",
            "Calvelli",
            "Cambi",
            "Camiciottoli",
            "Cammelli",
            "Cammilli",
            "Campolmi",
            "Cantini",
            "Capanni",
            "Capecchi",
            "Caponi",
            "Cappelletti",
            "Cappelli",
            "Cappellini",
            "Cappugi",
            "Capretti",
            "Caputo",
            "Carbone",
            "Carboni",
            "Cardini",
            "Carlesi",
            "Carletti",
            "Carli",
            "Caroti",
            "Carotti",
            "Carrai",
            "Carraresi",
            "Carta",
            "Caruso",
            "Casalini",
            "Casati",
            "Caselli",
            "Casini",
            "Castagnoli",
            "Castellani",
            "Castelli",
            "Castellucci",
            "Catalano",
            "Catarzi",
            "Catelani",
            "Cavaciocchi",
            "Cavallaro",
            "Cavallini",
            "Cavicchi",
            "Cavini",
            "Ceccarelli",
            "Ceccatelli",
            "Ceccherelli",
            "Ceccherini",
            "Cecchi",
            "Cecchini",
            "Cecconi",
            "Cei",
            "Cellai",
            "Celli",
            "Cellini",
            "Cencetti",
            "Ceni",
            "Cenni",
            "Cerbai",
            "Cesari",
            "Ceseri",
            "Checcacci",
            "Checchi",
            "Checcucci",
            "Cheli",
            "Chellini",
            "Chen",
            "Cheng",
            "Cherici",
            "Cherubini",
            "Chiaramonti",
            "Chiarantini",
            "Chiarelli",
            "Chiari",
            "Chiarini",
            "Chiarugi",
            "Chiavacci",
            "Chiesi",
            "Chimenti",
            "Chini",
            "Chirici",
            "Chiti",
            "Ciabatti",
            "Ciampi",
            "Cianchi",
            "Cianfanelli",
            "Cianferoni",
            "Ciani",
            "Ciapetti",
            "Ciappi",
            "Ciardi",
            "Ciatti",
            "Cicali",
            "Ciccone",
            "Cinelli",
            "Cini",
            "Ciobanu",
            "Ciolli",
            "Cioni",
            "Cipriani",
            "Cirillo",
            "Cirri",
            "Ciucchi",
            "Ciuffi",
            "Ciulli",
            "Ciullini",
            "Clemente",
            "Cocchi",
            "Cognome",
            "Coli",
            "Collini",
            "Colombo",
            "Colzi",
            "Comparini",
            "Conforti",
            "Consigli",
            "Conte",
            "Conti",
            "Contini",
            "Coppini",
            "Coppola",
            "Corsi",
            "Corsini",
            "Corti",
            "Cortini",
            "Cosi",
            "Costa",
            "Costantini",
            "Costantino",
            "Cozzi",
            "Cresci",
            "Crescioli",
            "Cresti",
            "Crini",
            "Curradi",
            "D'Agostino",
            "D'Alessandro",
            "D'Amico",
            "D'Angelo",
            "Daddi",
            "Dainelli",
            "Dallai",
            "Danti",
            "Davitti",
            "De Angelis",
            "De Luca",
            "De Marco",
            "De Rosa",
            "De Santis",
            "De Simone",
            "De Vita",
            "Degl'Innocenti",
            "Degli Innocenti",
            "Dei",
            "Del Lungo",
            "Del Re",
            "Di Marco",
            "Di Stefano",
            "Dini",
            "Diop",
            "Dobre",
            "Dolfi",
            "Donati",
            "Dondoli",
            "Dong",
            "Donnini",
            "Ducci",
            "Dumitru",
            "Ermini",
            "Esposito",
            "Evangelisti",
            "Fabbri",
            "Fabbrini",
            "Fabbrizzi",
            "Fabbroni",
            "Fabbrucci",
            "Fabiani",
            "Facchini",
            "Faggi",
            "Fagioli",
            "Failli",
            "Faini",
            "Falciani",
            "Falcini",
            "Falcone",
            "Fallani",
            "Falorni",
            "Falsini",
            "Falugiani",
            "Fancelli",
            "Fanelli",
            "Fanetti",
            "Fanfani",
            "Fani",
            "Fantappie'",
            "Fantechi",
            "Fanti",
            "Fantini",
            "Fantoni",
            "Farina",
            "Fattori",
            "Favilli",
            "Fedi",
            "Fei",
            "Ferrante",
            "Ferrara",
            "Ferrari",
            "Ferraro",
            "Ferretti",
            "Ferri",
            "Ferrini",
            "Ferroni",
            "Fiaschi",
            "Fibbi",
            "Fiesoli",
            "Filippi",
            "Filippini",
            "Fini",
            "Fioravanti",
            "Fiore",
            "Fiorentini",
            "Fiorini",
            "Fissi",
            "Focardi",
            "Foggi",
            "Fontana",
            "Fontanelli",
            "Fontani",
            "Forconi",
            "Formigli",
            "Forte",
            "Forti",
            "Fortini",
            "Fossati",
            "Fossi",
            "Francalanci",
            "Franceschi",
            "Franceschini",
            "Franchi",
            "Franchini",
            "Franci",
            "Francini",
            "Francioni",
            "Franco",
            "Frassineti",
            "Frati",
            "Fratini",
            "Frilli",
            "Frizzi",
            "Frosali",
            "Frosini",
            "Frullini",
            "Fusco",
            "Fusi",
            "Gabbrielli",
            "Gabellini",
            "Gagliardi",
            "Galanti",
            "Galardi",
            "Galeotti",
            "Galletti",
            "Galli",
            "Gallo",
            "Gallori",
            "Gambacciani",
            "Gargani",
            "Garofalo",
            "Garuglieri",
            "Gashi",
            "Gasperini",
            "Gatti",
            "Gelli",
            "Gensini",
            "Gentile",
            "Gentili",
            "Geri",
            "Gerini",
            "Gheri",
            "Ghini",
            "Giachetti",
            "Giachi",
            "Giacomelli",
            "Gianassi",
            "Giani",
            "Giannelli",
            "Giannetti",
            "Gianni",
            "Giannini",
            "Giannoni",
            "Giannotti",
            "Giannozzi",
            "Gigli",
            "Giordano",
            "Giorgetti",
            "Giorgi",
            "Giovacchini",
            "Giovannelli",
            "Giovannetti",
            "Giovannini",
            "Giovannoni",
            "Giuliani",
            "Giunti",
            "Giuntini",
            "Giusti",
            "Gonnelli",
            "Goretti",
            "Gori",
            "Gradi",
            "Gramigni",
            "Grassi",
            "Grasso",
            "Graziani",
            "Grazzini",
            "Greco",
            "Grifoni",
            "Grillo",
            "Grimaldi",
            "Grossi",
            "Gualtieri",
            "Guarducci",
            "Guarino",
            "Guarnieri",
            "Guasti",
            "Guerra",
            "Guerri",
            "Guerrini",
            "Guidi",
            "Guidotti",
            "He",
            "Hoxha",
            "Hu",
            "Huang",
            "Iandelli",
            "Ignesti",
            "Innocenti",
            "Jin",
            "La Rosa",
            "Lai",
            "Landi",
            "Landini",
            "Lanini",
            "Lapi",
            "Lapini",
            "Lari",
            "Lascialfari",
            "Lastrucci",
            "Latini",
            "Lazzeri",
            "Lazzerini",
            "Lelli",
            "Lenzi",
            "Leonardi",
            "Leoncini",
            "Leone",
            "Leoni",
            "Lepri",
            "Li",
            "Liao",
            "Lin",
            "Linari",
            "Lippi",
            "Lisi",
            "Livi",
            "Lombardi",
            "Lombardini",
            "Lombardo",
            "Longo",
            "Lopez",
            "Lorenzi",
            "Lorenzini",
            "Lorini",
            "Lotti",
            "Lu",
            "Lucchesi",
            "Lucherini",
            "Lunghi",
            "Lupi",
            "Madiai",
            "Maestrini",
            "Maffei",
            "Maggi",
            "Maggini",
            "Magherini",
            "Magini",
            "Magnani",
            "Magnelli",
            "Magni",
            "Magnolfi",
            "Magrini",
            "Malavolti",
            "Malevolti",
            "Manca",
            "Mancini",
            "Manetti",
            "Manfredi",
            "Mangani",
            "Mannelli",
            "Manni",
            "Mannini",
            "Mannucci",
            "Manuelli",
            "Manzini",
            "Marcelli",
            "Marchese",
            "Marchetti",
            "Marchi",
            "Marchiani",
            "Marchionni",
            "Marconi",
            "Marcucci",
            "Margheri",
            "Mari",
            "Mariani",
            "Marilli",
            "Marinai",
            "Marinari",
            "Marinelli",
            "Marini",
            "Marino",
            "Mariotti",
            "Marsili",
            "Martelli",
            "Martinelli",
            "Martini",
            "Martino",
            "Marzi",
            "Masi",
            "Masini",
            "Masoni",
            "Massai",
            "Materassi",
            "Mattei",
            "Matteini",
            "Matteucci",
            "Matteuzzi",
            "Mattioli",
            "Mattolini",
            "Matucci",
            "Mauro",
            "Mazzanti",
            "Mazzei",
            "Mazzetti",
            "Mazzi",
            "Mazzini",
            "Mazzocchi",
            "Mazzoli",
            "Mazzoni",
            "Mazzuoli",
            "Meacci",
            "Mecocci",
            "Meini",
            "Melani",
            "Mele",
            "Meli",
            "Mengoni",
            "Menichetti",
            "Meoni",
            "Merlini",
            "Messeri",
            "Messina",
            "Meucci",
            "Miccinesi",
            "Miceli",
            "Micheli",
            "Michelini",
            "Michelozzi",
            "Migliori",
            "Migliorini",
            "Milani",
            "Miniati",
            "Misuri",
            "Monaco",
            "Montagnani",
            "Montagni",
            "Montanari",
            "Montelatici",
            "Monti",
            "Montigiani",
            "Montini",
            "Morandi",
            "Morandini",
            "Morelli",
            "Moretti",
            "Morganti",
            "Mori",
            "Morini",
            "Moroni",
            "Morozzi",
            "Mugnai",
            "Mugnaini",
            "Mustafa",
            "Naldi",
            "Naldini",
            "Nannelli",
            "Nanni",
            "Nannini",
            "Nannucci",
            "Nardi",
            "Nardini",
            "Nardoni",
            "Natali",
            "Ndiaye",
            "Nencetti",
            "Nencini",
            "Nencioni",
            "Neri",
            "Nesi",
            "Nesti",
            "Niccolai",
            "Niccoli",
            "Niccolini",
            "Nigi",
            "Nistri",
            "Nocentini",
            "Noferini",
            "Novelli",
            "Nucci",
            "Nuti",
            "Nutini",
            "Oliva",
            "Olivieri",
            "Olmi",
            "Orlandi",
            "Orlandini",
            "Orlando",
            "Orsini",
            "Ortolani",
            "Ottanelli",
            "Pacciani",
            "Pace",
            "Paci",
            "Pacini",
            "Pagani",
            "Pagano",
            "Paggetti",
            "Pagliai",
            "Pagni",
            "Pagnini",
            "Paladini",
            "Palagi",
            "Palchetti",
            "Palloni",
            "Palmieri",
            "Palumbo",
            "Pampaloni",
            "Pancani",
            "Pandolfi",
            "Pandolfini",
            "Panerai",
            "Panichi",
            "Paoletti",
            "Paoli",
            "Paolini",
            "Papi",
            "Papini",
            "Papucci",
            "Parenti",
            "Parigi",
            "Parisi",
            "Parri",
            "Parrini",
            "Pasquini",
            "Passeri",
            "Pecchioli",
            "Pecorini",
            "Pellegrini",
            "Pepi",
            "Perini",
            "Perrone",
            "Peruzzi",
            "Pesci",
            "Pestelli",
            "Petri",
            "Petrini",
            "Petrucci",
            "Pettini",
            "Pezzati",
            "Pezzatini",
            "Piani",
            "Piazza",
            "Piazzesi",
            "Piazzini",
            "Piccardi",
            "Picchi",
            "Piccini",
            "Piccioli",
            "Pieraccini",
            "Pieraccioni",
            "Pieralli",
            "Pierattini",
            "Pieri",
            "Pierini",
            "Pieroni",
            "Pietrini",
            "Pini",
            "Pinna",
            "Pinto",
            "Pinzani",
            "Pinzauti",
            "Piras",
            "Pisani",
            "Pistolesi",
            "Poggesi",
            "Poggi",
            "Poggiali",
            "Poggiolini",
            "Poli",
            "Pollastri",
            "Porciani",
            "Pozzi",
            "Pratellesi",
            "Pratesi",
            "Prosperi",
            "Pruneti",
            "Pucci",
            "Puccini",
            "Puccioni",
            "Pugi",
            "Pugliese",
            "Puliti",
            "Querci",
            "Quercioli",
            "Raddi",
            "Radu",
            "Raffaelli",
            "Ragazzini",
            "Ranfagni",
            "Ranieri",
            "Rastrelli",
            "Raugei",
            "Raveggi",
            "Renai",
            "Renzi",
            "Rettori",
            "Ricci",
            "Ricciardi",
            "Ridi",
            "Ridolfi",
            "Rigacci",
            "Righi",
            "Righini",
            "Rinaldi",
            "Risaliti",
            "Ristori",
            "Rizzo",
            "Rocchi",
            "Rocchini",
            "Rogai",
            "Romagnoli",
            "Romanelli",
            "Romani",
            "Romano",
            "Romei",
            "Romeo",
            "Romiti",
            "Romoli",
            "Romolini",
            "Rontini",
            "Rosati",
            "Roselli",
            "Rosi",
            "Rossetti",
            "Rossi",
            "Rossini",
            "Rovai",
            "Ruggeri",
            "Ruggiero",
            "Russo",
            "Sabatini",
            "Saccardi",
            "Sacchetti",
            "Sacchi",
            "Sacco",
            "Salerno",
            "Salimbeni",
            "Salucci",
            "Salvadori",
            "Salvestrini",
            "Salvi",
            "Salvini",
            "Sanesi",
            "Sani",
            "Sanna",
            "Santi",
            "Santini",
            "Santoni",
            "Santoro",
            "Santucci",
            "Sardi",
            "Sarri",
            "Sarti",
            "Sassi",
            "Sbolci",
            "Scali",
            "Scarpelli",
            "Scarselli",
            "Scopetani",
            "Secci",
            "Selvi",
            "Senatori",
            "Senesi",
            "Serafini",
            "Sereni",
            "Serra",
            "Sestini",
            "Sguanci",
            "Sieni",
            "Signorini",
            "Silvestri",
            "Simoncini",
            "Simonetti",
            "Simoni",
            "Singh",
            "Sodi",
            "Soldi",
            "Somigli",
            "Sorbi",
            "Sorelli",
            "Sorrentino",
            "Sottili",
            "Spina",
            "Spinelli",
            "Staccioli",
            "Staderini",
            "Stefanelli",
            "Stefani",
            "Stefanini",
            "Stella",
            "Susini",
            "Tacchi",
            "Tacconi",
            "Taddei",
            "Tagliaferri",
            "Tamburini",
            "Tanganelli",
            "Tani",
            "Tanini",
            "Tapinassi",
            "Tarchi",
            "Tarchiani",
            "Targioni",
            "Tassi",
            "Tassini",
            "Tempesti",
            "Terzani",
            "Tesi",
            "Testa",
            "Testi",
            "Tilli",
            "Tinti",
            "Tirinnanzi",
            "Toccafondi",
            "Tofanari",
            "Tofani",
            "Tognaccini",
            "Tonelli",
            "Tonini",
            "Torelli",
            "Torrini",
            "Tosi",
            "Toti",
            "Tozzi",
            "Trambusti",
            "Trapani",
            "Tucci",
            "Turchi",
            "Ugolini",
            "Ulivi",
            "Valente",
            "Valenti",
            "Valentini",
            "Vangelisti",
            "Vanni",
            "Vannini",
            "Vannoni",
            "Vannozzi",
            "Vannucchi",
            "Vannucci",
            "Ventura",
            "Venturi",
            "Venturini",
            "Vestri",
            "Vettori",
            "Vichi",
            "Viciani",
            "Vieri",
            "Vigiani",
            "Vignoli",
            "Vignolini",
            "Vignozzi",
            "Villani",
            "Vinci",
            "Visani",
            "Vitale",
            "Vitali",
            "Viti",
            "Viviani",
            "Vivoli",
            "Volpe",
            "Volpi",
            "Wang",
            "Wu",
            "Xu",
            "Yang",
            "Ye",
            "Zagli",
            "Zani",
            "Zanieri",
            "Zanobini",
            "Zecchi",
            "Zetti",
            "Zhang",
            "Zheng",
            "Zhou",
            "Zhu",
            "Zingoni",
            "Zini",
            "Zoppi",
          ],
          nl: [
            "Albers",
            "Alblas",
            "Appelman",
            "Baars",
            "Baas",
            "Bakker",
            "Blank",
            "Bleeker",
            "Blok",
            "Blom",
            "Boer",
            "Boers",
            "Boldewijn",
            "Boon",
            "Boot",
            "Bos",
            "Bosch",
            "Bosma",
            "Bosman",
            "Bouma",
            "Bouman",
            "Bouwman",
            "Brands",
            "Brouwer",
            "Burger",
            "Buijs",
            "Buitenhuis",
            "Ceder",
            "Cohen",
            "Dekker",
            "Dekkers",
            "Dijkman",
            "Dijkstra",
            "Driessen",
            "Drost",
            "Engel",
            "Evers",
            "Faber",
            "Franke",
            "Gerritsen",
            "Goedhart",
            "Goossens",
            "Groen",
            "Groenenberg",
            "Groot",
            "Haan",
            "Hart",
            "Heemskerk",
            "Hendriks",
            "Hermans",
            "Hoekstra",
            "Hofman",
            "Hopman",
            "Huisman",
            "Jacobs",
            "Jansen",
            "Janssen",
            "Jonker",
            "Jaspers",
            "Keijzer",
            "Klaassen",
            "Klein",
            "Koek",
            "Koenders",
            "Kok",
            "Kool",
            "Koopman",
            "Koopmans",
            "Koning",
            "Koster",
            "Kramer",
            "Kroon",
            "Kuijpers",
            "Kuiper",
            "Kuipers",
            "Kurt",
            "Koster",
            "Kwakman",
            "Los",
            "Lubbers",
            "Maas",
            "Markus",
            "Martens",
            "Meijer",
            "Mol",
            "Molenaar",
            "Mulder",
            "Nieuwenhuis",
            "Peeters",
            "Peters",
            "Pengel",
            "Pieters",
            "Pool",
            "Post",
            "Postma",
            "Prins",
            "Pronk",
            "Reijnders",
            "Rietveld",
            "Roest",
            "Roos",
            "Sanders",
            "Schaap",
            "Scheffer",
            "Schenk",
            "Schilder",
            "Schipper",
            "Schmidt",
            "Scholten",
            "Schouten",
            "Schut",
            "Schutte",
            "Schuurman",
            "Simons",
            "Smeets",
            "Smit",
            "Smits",
            "Snel",
            "Swinkels",
            "Tas",
            "Terpstra",
            "Timmermans",
            "Tol",
            "Tromp",
            "Troost",
            "Valk",
            "Veenstra",
            "Veldkamp",
            "Verbeek",
            "Verheul",
            "Verhoeven",
            "Vermeer",
            "Vermeulen",
            "Verweij",
            "Vink",
            "Visser",
            "Voorn",
            "Vos",
            "Wagenaar",
            "Wiersema",
            "Willems",
            "Willemsen",
            "Witteveen",
            "Wolff",
            "Wolters",
            "Zijlstra",
            "Zwart",
            "de Beer",
            "de Boer",
            "de Bruijn",
            "de Bruin",
            "de Graaf",
            "de Groot",
            "de Haan",
            "de Haas",
            "de Jager",
            "de Jong",
            "de Jonge",
            "de Koning",
            "de Lange",
            "de Leeuw",
            "de Ridder",
            "de Rooij",
            "de Ruiter",
            "de Vos",
            "de Vries",
            "de Waal",
            "de Wit",
            "de Zwart",
            "van Beek",
            "van Boven",
            "van Dam",
            "van Dijk",
            "van Dongen",
            "van Doorn",
            "van Egmond",
            "van Eijk",
            "van Es",
            "van Gelder",
            "van Gelderen",
            "van Houten",
            "van Hulst",
            "van Kempen",
            "van Kesteren",
            "van Leeuwen",
            "van Loon",
            "van Mill",
            "van Noord",
            "van Ommen",
            "van Ommeren",
            "van Oosten",
            "van Oostveen",
            "van Rijn",
            "van Schaik",
            "van Veen",
            "van Vliet",
            "van Wijk",
            "van Wijngaarden",
            "van den Poel",
            "van de Pol",
            "van den Ploeg",
            "van de Ven",
            "van den Berg",
            "van den Bosch",
            "van den Brink",
            "van den Broek",
            "van den Heuvel",
            "van der Heijden",
            "van der Horst",
            "van der Hulst",
            "van der Kroon",
            "van der Laan",
            "van der Linden",
            "van der Meer",
            "van der Meij",
            "van der Meulen",
            "van der Molen",
            "van der Sluis",
            "van der Spek",
            "van der Veen",
            "van der Velde",
            "van der Velden",
            "van der Vliet",
            "van der Wal",
          ],
          uk: [
            "Smith",
            "Jones",
            "Williams",
            "Taylor",
            "Brown",
            "Davies",
            "Evans",
            "Wilson",
            "Thomas",
            "Johnson",
            "Roberts",
            "Robinson",
            "Thompson",
            "Wright",
            "Walker",
            "White",
            "Edwards",
            "Hughes",
            "Green",
            "Hall",
            "Lewis",
            "Harris",
            "Clarke",
            "Patel",
            "Jackson",
            "Wood",
            "Turner",
            "Martin",
            "Cooper",
            "Hill",
            "Ward",
            "Morris",
            "Moore",
            "Clark",
            "Lee",
            "King",
            "Baker",
            "Harrison",
            "Morgan",
            "Allen",
            "James",
            "Scott",
            "Phillips",
            "Watson",
            "Davis",
            "Parker",
            "Price",
            "Bennett",
            "Young",
            "Griffiths",
            "Mitchell",
            "Kelly",
            "Cook",
            "Carter",
            "Richardson",
            "Bailey",
            "Collins",
            "Bell",
            "Shaw",
            "Murphy",
            "Miller",
            "Cox",
            "Richards",
            "Khan",
            "Marshall",
            "Anderson",
            "Simpson",
            "Ellis",
            "Adams",
            "Singh",
            "Begum",
            "Wilkinson",
            "Foster",
            "Chapman",
            "Powell",
            "Webb",
            "Rogers",
            "Gray",
            "Mason",
            "Ali",
            "Hunt",
            "Hussain",
            "Campbell",
            "Matthews",
            "Owen",
            "Palmer",
            "Holmes",
            "Mills",
            "Barnes",
            "Knight",
            "Lloyd",
            "Butler",
            "Russell",
            "Barker",
            "Fisher",
            "Stevens",
            "Jenkins",
            "Murray",
            "Dixon",
            "Harvey",
            "Graham",
            "Pearson",
            "Ahmed",
            "Fletcher",
            "Walsh",
            "Kaur",
            "Gibson",
            "Howard",
            "Andrews",
            "Stewart",
            "Elliott",
            "Reynolds",
            "Saunders",
            "Payne",
            "Fox",
            "Ford",
            "Pearce",
            "Day",
            "Brooks",
            "West",
            "Lawrence",
            "Cole",
            "Atkinson",
            "Bradley",
            "Spencer",
            "Gill",
            "Dawson",
            "Ball",
            "Burton",
            "O'brien",
            "Watts",
            "Rose",
            "Booth",
            "Perry",
            "Ryan",
            "Grant",
            "Wells",
            "Armstrong",
            "Francis",
            "Rees",
            "Hayes",
            "Hart",
            "Hudson",
            "Newman",
            "Barrett",
            "Webster",
            "Hunter",
            "Gregory",
            "Carr",
            "Lowe",
            "Page",
            "Marsh",
            "Riley",
            "Dunn",
            "Woods",
            "Parsons",
            "Berry",
            "Stone",
            "Reid",
            "Holland",
            "Hawkins",
            "Harding",
            "Porter",
            "Robertson",
            "Newton",
            "Oliver",
            "Reed",
            "Kennedy",
            "Williamson",
            "Bird",
            "Gardner",
            "Shah",
            "Dean",
            "Lane",
            "Cooke",
            "Bates",
            "Henderson",
            "Parry",
            "Burgess",
            "Bishop",
            "Walton",
            "Burns",
            "Nicholson",
            "Shepherd",
            "Ross",
            "Cross",
            "Long",
            "Freeman",
            "Warren",
            "Nicholls",
            "Hamilton",
            "Byrne",
            "Sutton",
            "Mcdonald",
            "Yates",
            "Hodgson",
            "Robson",
            "Curtis",
            "Hopkins",
            "O'connor",
            "Harper",
            "Coleman",
            "Watkins",
            "Moss",
            "Mccarthy",
            "Chambers",
            "O'neill",
            "Griffin",
            "Sharp",
            "Hardy",
            "Wheeler",
            "Potter",
            "Osborne",
            "Johnston",
            "Gordon",
            "Doyle",
            "Wallace",
            "George",
            "Jordan",
            "Hutchinson",
            "Rowe",
            "Burke",
            "May",
            "Pritchard",
            "Gilbert",
            "Willis",
            "Higgins",
            "Read",
            "Miles",
            "Stevenson",
            "Stephenson",
            "Hammond",
            "Arnold",
            "Buckley",
            "Walters",
            "Hewitt",
            "Barber",
            "Nelson",
            "Slater",
            "Austin",
            "Sullivan",
            "Whitehead",
            "Mann",
            "Frost",
            "Lambert",
            "Stephens",
            "Blake",
            "Akhtar",
            "Lynch",
            "Goodwin",
            "Barton",
            "Woodward",
            "Thomson",
            "Cunningham",
            "Quinn",
            "Barnett",
            "Baxter",
            "Bibi",
            "Clayton",
            "Nash",
            "Greenwood",
            "Jennings",
            "Holt",
            "Kemp",
            "Poole",
            "Gallagher",
            "Bond",
            "Stokes",
            "Tucker",
            "Davidson",
            "Fowler",
            "Heath",
            "Norman",
            "Middleton",
            "Lawson",
            "Banks",
            "French",
            "Stanley",
            "Jarvis",
            "Gibbs",
            "Ferguson",
            "Hayward",
            "Carroll",
            "Douglas",
            "Dickinson",
            "Todd",
            "Barlow",
            "Peters",
            "Lucas",
            "Knowles",
            "Hartley",
            "Miah",
            "Simmons",
            "Morton",
            "Alexander",
            "Field",
            "Morrison",
            "Norris",
            "Townsend",
            "Preston",
            "Hancock",
            "Thornton",
            "Baldwin",
            "Burrows",
            "Briggs",
            "Parkinson",
            "Reeves",
            "Macdonald",
            "Lamb",
            "Black",
            "Abbott",
            "Sanders",
            "Thorpe",
            "Holden",
            "Tomlinson",
            "Perkins",
            "Ashton",
            "Rhodes",
            "Fuller",
            "Howe",
            "Bryant",
            "Vaughan",
            "Dale",
            "Davey",
            "Weston",
            "Bartlett",
            "Whittaker",
            "Davison",
            "Kent",
            "Skinner",
            "Birch",
            "Morley",
            "Daniels",
            "Glover",
            "Howell",
            "Cartwright",
            "Pugh",
            "Humphreys",
            "Goddard",
            "Brennan",
            "Wall",
            "Kirby",
            "Bowen",
            "Savage",
            "Bull",
            "Wong",
            "Dobson",
            "Smart",
            "Wilkins",
            "Kirk",
            "Fraser",
            "Duffy",
            "Hicks",
            "Patterson",
            "Bradshaw",
            "Little",
            "Archer",
            "Warner",
            "Waters",
            "O'sullivan",
            "Farrell",
            "Brookes",
            "Atkins",
            "Kay",
            "Dodd",
            "Bentley",
            "Flynn",
            "John",
            "Schofield",
            "Short",
            "Haynes",
            "Wade",
            "Butcher",
            "Henry",
            "Sanderson",
            "Crawford",
            "Sheppard",
            "Bolton",
            "Coates",
            "Giles",
            "Gould",
            "Houghton",
            "Gibbons",
            "Pratt",
            "Manning",
            "Law",
            "Hooper",
            "Noble",
            "Dyer",
            "Rahman",
            "Clements",
            "Moran",
            "Sykes",
            "Chan",
            "Doherty",
            "Connolly",
            "Joyce",
            "Franklin",
            "Hobbs",
            "Coles",
            "Herbert",
            "Steele",
            "Kerr",
            "Leach",
            "Winter",
            "Owens",
            "Duncan",
            "Naylor",
            "Fleming",
            "Horton",
            "Finch",
            "Fitzgerald",
            "Randall",
            "Carpenter",
            "Marsden",
            "Browne",
            "Garner",
            "Pickering",
            "Hale",
            "Dennis",
            "Vincent",
            "Chadwick",
            "Chandler",
            "Sharpe",
            "Nolan",
            "Lyons",
            "Hurst",
            "Collier",
            "Peacock",
            "Howarth",
            "Faulkner",
            "Rice",
            "Pollard",
            "Welch",
            "Norton",
            "Gough",
            "Sinclair",
            "Blackburn",
            "Bryan",
            "Conway",
            "Power",
            "Cameron",
            "Daly",
            "Allan",
            "Hanson",
            "Gardiner",
            "Boyle",
            "Myers",
            "Turnbull",
            "Wallis",
            "Mahmood",
            "Sims",
            "Swift",
            "Iqbal",
            "Pope",
            "Brady",
            "Chamberlain",
            "Rowley",
            "Tyler",
            "Farmer",
            "Metcalfe",
            "Hilton",
            "Godfrey",
            "Holloway",
            "Parkin",
            "Bray",
            "Talbot",
            "Donnelly",
            "Nixon",
            "Charlton",
            "Benson",
            "Whitehouse",
            "Barry",
            "Hope",
            "Lord",
            "North",
            "Storey",
            "Connor",
            "Potts",
            "Bevan",
            "Hargreaves",
            "Mclean",
            "Mistry",
            "Bruce",
            "Howells",
            "Hyde",
            "Parkes",
            "Wyatt",
            "Fry",
            "Lees",
            "O'donnell",
            "Craig",
            "Forster",
            "Mckenzie",
            "Humphries",
            "Mellor",
            "Carey",
            "Ingram",
            "Summers",
            "Leonard",
          ],
          de: [
            "Müller",
            "Schmidt",
            "Schneider",
            "Fischer",
            "Weber",
            "Meyer",
            "Wagner",
            "Becker",
            "Schulz",
            "Hoffmann",
            "Schäfer",
            "Koch",
            "Bauer",
            "Richter",
            "Klein",
            "Wolf",
            "Schröder",
            "Neumann",
            "Schwarz",
            "Zimmermann",
            "Braun",
            "Krüger",
            "Hofmann",
            "Hartmann",
            "Lange",
            "Schmitt",
            "Werner",
            "Schmitz",
            "Krause",
            "Meier",
            "Lehmann",
            "Schmid",
            "Schulze",
            "Maier",
            "Köhler",
            "Herrmann",
            "König",
            "Walter",
            "Mayer",
            "Huber",
            "Kaiser",
            "Fuchs",
            "Peters",
            "Lang",
            "Scholz",
            "Möller",
            "Weiß",
            "Jung",
            "Hahn",
            "Schubert",
            "Vogel",
            "Friedrich",
            "Keller",
            "Günther",
            "Frank",
            "Berger",
            "Winkler",
            "Roth",
            "Beck",
            "Lorenz",
            "Baumann",
            "Franke",
            "Albrecht",
            "Schuster",
            "Simon",
            "Ludwig",
            "Böhm",
            "Winter",
            "Kraus",
            "Martin",
            "Schumacher",
            "Krämer",
            "Vogt",
            "Stein",
            "Jäger",
            "Otto",
            "Sommer",
            "Groß",
            "Seidel",
            "Heinrich",
            "Brandt",
            "Haas",
            "Schreiber",
            "Graf",
            "Schulte",
            "Dietrich",
            "Ziegler",
            "Kuhn",
            "Kühn",
            "Pohl",
            "Engel",
            "Horn",
            "Busch",
            "Bergmann",
            "Thomas",
            "Voigt",
            "Sauer",
            "Arnold",
            "Wolff",
            "Pfeiffer",
          ],
          jp: [
            "Sato",
            "Suzuki",
            "Takahashi",
            "Tanaka",
            "Watanabe",
            "Ito",
            "Yamamoto",
            "Nakamura",
            "Kobayashi",
            "Kato",
            "Yoshida",
            "Yamada",
            "Sasaki",
            "Yamaguchi",
            "Saito",
            "Matsumoto",
            "Inoue",
            "Kimura",
            "Hayashi",
            "Shimizu",
            "Yamazaki",
            "Mori",
            "Abe",
            "Ikeda",
            "Hashimoto",
            "Yamashita",
            "Ishikawa",
            "Nakajima",
            "Maeda",
            "Fujita",
            "Ogawa",
            "Goto",
            "Okada",
            "Hasegawa",
            "Murakami",
            "Kondo",
            "Ishii",
            "Saito",
            "Sakamoto",
            "Endo",
            "Aoki",
            "Fujii",
            "Nishimura",
            "Fukuda",
            "Ota",
            "Miura",
            "Fujiwara",
            "Okamoto",
            "Matsuda",
            "Nakagawa",
            "Nakano",
            "Harada",
            "Ono",
            "Tamura",
            "Takeuchi",
            "Kaneko",
            "Wada",
            "Nakayama",
            "Ishida",
            "Ueda",
            "Morita",
            "Hara",
            "Shibata",
            "Sakai",
            "Kudo",
            "Yokoyama",
            "Miyazaki",
            "Miyamoto",
            "Uchida",
            "Takagi",
            "Ando",
            "Taniguchi",
            "Ohno",
            "Maruyama",
            "Imai",
            "Takada",
            "Fujimoto",
            "Takeda",
            "Murata",
            "Ueno",
            "Sugiyama",
            "Masuda",
            "Sugawara",
            "Hirano",
            "Kojima",
            "Otsuka",
            "Chiba",
            "Kubo",
            "Matsui",
            "Iwasaki",
            "Sakurai",
            "Kinoshita",
            "Noguchi",
            "Matsuo",
            "Nomura",
            "Kikuchi",
            "Sano",
            "Onishi",
            "Sugimoto",
            "Arai",
          ],
          es: [
            "Garcia",
            "Fernandez",
            "Lopez",
            "Martinez",
            "Gonzalez",
            "Rodriguez",
            "Sanchez",
            "Perez",
            "Martin",
            "Gomez",
            "Ruiz",
            "Diaz",
            "Hernandez",
            "Alvarez",
            "Jimenez",
            "Moreno",
            "Munoz",
            "Alonso",
            "Romero",
            "Navarro",
            "Gutierrez",
            "Torres",
            "Dominguez",
            "Gil",
            "Vazquez",
            "Blanco",
            "Serrano",
            "Ramos",
            "Castro",
            "Suarez",
            "Sanz",
            "Rubio",
            "Ortega",
            "Molina",
            "Delgado",
            "Ortiz",
            "Morales",
            "Ramirez",
            "Marin",
            "Iglesias",
            "Santos",
            "Castillo",
            "Garrido",
            "Calvo",
            "Pena",
            "Cruz",
            "Cano",
            "Nunez",
            "Prieto",
            "Diez",
            "Lozano",
            "Vidal",
            "Pascual",
            "Ferrer",
            "Medina",
            "Vega",
            "Leon",
            "Herrero",
            "Vicente",
            "Mendez",
            "Guerrero",
            "Fuentes",
            "Campos",
            "Nieto",
            "Cortes",
            "Caballero",
            "Ibanez",
            "Lorenzo",
            "Pastor",
            "Gimenez",
            "Saez",
            "Soler",
            "Marquez",
            "Carrasco",
            "Herrera",
            "Montero",
            "Arias",
            "Crespo",
            "Flores",
            "Andres",
            "Aguilar",
            "Hidalgo",
            "Cabrera",
            "Mora",
            "Duran",
            "Velasco",
            "Rey",
            "Pardo",
            "Roman",
            "Vila",
            "Bravo",
            "Merino",
            "Moya",
            "Soto",
            "Izquierdo",
            "Reyes",
            "Redondo",
            "Marcos",
            "Carmona",
            "Menendez",
          ],
          fr: [
            "Martin",
            "Bernard",
            "Thomas",
            "Petit",
            "Robert",
            "Richard",
            "Durand",
            "Dubois",
            "Moreau",
            "Laurent",
            "Simon",
            "Michel",
            "Lefèvre",
            "Leroy",
            "Roux",
            "David",
            "Bertrand",
            "Morel",
            "Fournier",
            "Girard",
            "Bonnet",
            "Dupont",
            "Lambert",
            "Fontaine",
            "Rousseau",
            "Vincent",
            "Müller",
            "Lefèvre",
            "Faure",
            "André",
            "Mercier",
            "Blanc",
            "Guérin",
            "Boyer",
            "Garnier",
            "Chevalier",
            "François",
            "Legrand",
            "Gauthier",
            "Garcia",
            "Perrin",
            "Robin",
            "Clément",
            "Morin",
            "Nicolas",
            "Henry",
            "Roussel",
            "Matthieu",
            "Gautier",
            "Masson",
            "Marchand",
            "Duval",
            "Denis",
            "Dumont",
            "Marie",
            "Lemaire",
            "Noël",
            "Meyer",
            "Dufour",
            "Meunier",
            "Brun",
            "Blanchard",
            "Giraud",
            "Joly",
            "Rivière",
            "Lucas",
            "Brunet",
            "Gaillard",
            "Barbier",
            "Arnaud",
            "Martínez",
            "Gérard",
            "Roche",
            "Renard",
            "Schmitt",
            "Roy",
            "Leroux",
            "Colin",
            "Vidal",
            "Caron",
            "Picard",
            "Roger",
            "Fabre",
            "Aubert",
            "Lemoine",
            "Renaud",
            "Dumas",
            "Lacroix",
            "Olivier",
            "Philippe",
            "Bourgeois",
            "Pierre",
            "Benoît",
            "Rey",
            "Leclerc",
            "Payet",
            "Rolland",
            "Leclercq",
            "Guillaume",
            "Lecomte",
            "López",
            "Jean",
            "Dupuy",
            "Guillot",
            "Hubert",
            "Berger",
            "Carpentier",
            "Sánchez",
            "Dupuis",
            "Moulin",
            "Louis",
            "Deschamps",
            "Huet",
            "Vasseur",
            "Perez",
            "Boucher",
            "Fleury",
            "Royer",
            "Klein",
            "Jacquet",
            "Adam",
            "Paris",
            "Poirier",
            "Marty",
            "Aubry",
            "Guyot",
            "Carré",
            "Charles",
            "Renault",
            "Charpentier",
            "Ménard",
            "Maillard",
            "Baron",
            "Bertin",
            "Bailly",
            "Hervé",
            "Schneider",
            "Fernández",
            "Le GallGall",
            "Collet",
            "Léger",
            "Bouvier",
            "Julien",
            "Prévost",
            "Millet",
            "Perrot",
            "Daniel",
            "Le RouxRoux",
            "Cousin",
            "Germain",
            "Breton",
            "Besson",
            "Langlois",
            "Rémi",
            "Le GoffGoff",
            "Pelletier",
            "Lévêque",
            "Perrier",
            "Leblanc",
            "Barré",
            "Lebrun",
            "Marchal",
            "Weber",
            "Mallet",
            "Hamon",
            "Boulanger",
            "Jacob",
            "Monnier",
            "Michaud",
            "Rodríguez",
            "Guichard",
            "Gillet",
            "Étienne",
            "Grondin",
            "Poulain",
            "Tessier",
            "Chevallier",
            "Collin",
            "Chauvin",
            "Da SilvaSilva",
            "Bouchet",
            "Gay",
            "Lemaître",
            "Bénard",
            "Maréchal",
            "Humbert",
            "Reynaud",
            "Antoine",
            "Hoarau",
            "Perret",
            "Barthélemy",
            "Cordier",
            "Pichon",
            "Lejeune",
            "Gilbert",
            "Lamy",
            "Delaunay",
            "Pasquier",
            "Carlier",
            "LaporteLaporte",
          ],
        },
        postcodeAreas: [
          { code: "AB" },
          { code: "AL" },
          { code: "B" },
          { code: "BA" },
          { code: "BB" },
          { code: "BD" },
          { code: "BH" },
          { code: "BL" },
          { code: "BN" },
          { code: "BR" },
          { code: "BS" },
          { code: "BT" },
          { code: "CA" },
          { code: "CB" },
          { code: "CF" },
          { code: "CH" },
          { code: "CM" },
          { code: "CO" },
          { code: "CR" },
          { code: "CT" },
          { code: "CV" },
          { code: "CW" },
          { code: "DA" },
          { code: "DD" },
          { code: "DE" },
          { code: "DG" },
          { code: "DH" },
          { code: "DL" },
          { code: "DN" },
          { code: "DT" },
          { code: "DY" },
          { code: "E" },
          { code: "EC" },
          { code: "EH" },
          { code: "EN" },
          { code: "EX" },
          { code: "FK" },
          { code: "FY" },
          { code: "G" },
          { code: "GL" },
          { code: "GU" },
          { code: "GY" },
          { code: "HA" },
          { code: "HD" },
          { code: "HG" },
          { code: "HP" },
          { code: "HR" },
          { code: "HS" },
          { code: "HU" },
          { code: "HX" },
          { code: "IG" },
          { code: "IM" },
          { code: "IP" },
          { code: "IV" },
          { code: "JE" },
          { code: "KA" },
          { code: "KT" },
          { code: "KW" },
          { code: "KY" },
          { code: "L" },
          { code: "LA" },
          { code: "LD" },
          { code: "LE" },
          { code: "LL" },
          { code: "LN" },
          { code: "LS" },
          { code: "LU" },
          { code: "M" },
          { code: "ME" },
          { code: "MK" },
          { code: "ML" },
          { code: "N" },
          { code: "NE" },
          { code: "NG" },
          { code: "NN" },
          { code: "NP" },
          { code: "NR" },
          { code: "NW" },
          { code: "OL" },
          { code: "OX" },
          { code: "PA" },
          { code: "PE" },
          { code: "PH" },
          { code: "PL" },
          { code: "PO" },
          { code: "PR" },
          { code: "RG" },
          { code: "RH" },
          { code: "RM" },
          { code: "S" },
          { code: "SA" },
          { code: "SE" },
          { code: "SG" },
          { code: "SK" },
          { code: "SL" },
          { code: "SM" },
          { code: "SN" },
          { code: "SO" },
          { code: "SP" },
          { code: "SR" },
          { code: "SS" },
          { code: "ST" },
          { code: "SW" },
          { code: "SY" },
          { code: "TA" },
          { code: "TD" },
          { code: "TF" },
          { code: "TN" },
          { code: "TQ" },
          { code: "TR" },
          { code: "TS" },
          { code: "TW" },
          { code: "UB" },
          { code: "W" },
          { code: "WA" },
          { code: "WC" },
          { code: "WD" },
          { code: "WF" },
          { code: "WN" },
          { code: "WR" },
          { code: "WS" },
          { code: "WV" },
          { code: "YO" },
          { code: "ZE" },
        ],
        countries: [
          { name: "Afghanistan", abbreviation: "AF" },
          { name: "Åland Islands", abbreviation: "AX" },
          { name: "Albania", abbreviation: "AL" },
          { name: "Algeria", abbreviation: "DZ" },
          { name: "American Samoa", abbreviation: "AS" },
          { name: "Andorra", abbreviation: "AD" },
          { name: "Angola", abbreviation: "AO" },
          { name: "Anguilla", abbreviation: "AI" },
          { name: "Antarctica", abbreviation: "AQ" },
          { name: "Antigua & Barbuda", abbreviation: "AG" },
          { name: "Argentina", abbreviation: "AR" },
          { name: "Armenia", abbreviation: "AM" },
          { name: "Aruba", abbreviation: "AW" },
          { name: "Ascension Island", abbreviation: "AC" },
          { name: "Australia", abbreviation: "AU" },
          { name: "Austria", abbreviation: "AT" },
          { name: "Azerbaijan", abbreviation: "AZ" },
          { name: "Bahamas", abbreviation: "BS" },
          { name: "Bahrain", abbreviation: "BH" },
          { name: "Bangladesh", abbreviation: "BD" },
          { name: "Barbados", abbreviation: "BB" },
          { name: "Belarus", abbreviation: "BY" },
          { name: "Belgium", abbreviation: "BE" },
          { name: "Belize", abbreviation: "BZ" },
          { name: "Benin", abbreviation: "BJ" },
          { name: "Bermuda", abbreviation: "BM" },
          { name: "Bhutan", abbreviation: "BT" },
          { name: "Bolivia", abbreviation: "BO" },
          { name: "Bosnia & Herzegovina", abbreviation: "BA" },
          { name: "Botswana", abbreviation: "BW" },
          { name: "Brazil", abbreviation: "BR" },
          { name: "British Indian Ocean Territory", abbreviation: "IO" },
          { name: "British Virgin Islands", abbreviation: "VG" },
          { name: "Brunei", abbreviation: "BN" },
          { name: "Bulgaria", abbreviation: "BG" },
          { name: "Burkina Faso", abbreviation: "BF" },
          { name: "Burundi", abbreviation: "BI" },
          { name: "Cambodia", abbreviation: "KH" },
          { name: "Cameroon", abbreviation: "CM" },
          { name: "Canada", abbreviation: "CA" },
          { name: "Canary Islands", abbreviation: "IC" },
          { name: "Cape Verde", abbreviation: "CV" },
          { name: "Caribbean Netherlands", abbreviation: "BQ" },
          { name: "Cayman Islands", abbreviation: "KY" },
          { name: "Central African Republic", abbreviation: "CF" },
          { name: "Ceuta & Melilla", abbreviation: "EA" },
          { name: "Chad", abbreviation: "TD" },
          { name: "Chile", abbreviation: "CL" },
          { name: "China", abbreviation: "CN" },
          { name: "Christmas Island", abbreviation: "CX" },
          { name: "Cocos (Keeling) Islands", abbreviation: "CC" },
          { name: "Colombia", abbreviation: "CO" },
          { name: "Comoros", abbreviation: "KM" },
          { name: "Congo - Brazzaville", abbreviation: "CG" },
          { name: "Congo - Kinshasa", abbreviation: "CD" },
          { name: "Cook Islands", abbreviation: "CK" },
          { name: "Costa Rica", abbreviation: "CR" },
          { name: "Côte d'Ivoire", abbreviation: "CI" },
          { name: "Croatia", abbreviation: "HR" },
          { name: "Cuba", abbreviation: "CU" },
          { name: "Curaçao", abbreviation: "CW" },
          { name: "Cyprus", abbreviation: "CY" },
          { name: "Czech Republic", abbreviation: "CZ" },
          { name: "Denmark", abbreviation: "DK" },
          { name: "Diego Garcia", abbreviation: "DG" },
          { name: "Djibouti", abbreviation: "DJ" },
          { name: "Dominica", abbreviation: "DM" },
          { name: "Dominican Republic", abbreviation: "DO" },
          { name: "Ecuador", abbreviation: "EC" },
          { name: "Egypt", abbreviation: "EG" },
          { name: "El Salvador", abbreviation: "SV" },
          { name: "Equatorial Guinea", abbreviation: "GQ" },
          { name: "Eritrea", abbreviation: "ER" },
          { name: "Estonia", abbreviation: "EE" },
          { name: "Ethiopia", abbreviation: "ET" },
          { name: "Falkland Islands", abbreviation: "FK" },
          { name: "Faroe Islands", abbreviation: "FO" },
          { name: "Fiji", abbreviation: "FJ" },
          { name: "Finland", abbreviation: "FI" },
          { name: "France", abbreviation: "FR" },
          { name: "French Guiana", abbreviation: "GF" },
          { name: "French Polynesia", abbreviation: "PF" },
          { name: "French Southern Territories", abbreviation: "TF" },
          { name: "Gabon", abbreviation: "GA" },
          { name: "Gambia", abbreviation: "GM" },
          { name: "Georgia", abbreviation: "GE" },
          { name: "Germany", abbreviation: "DE" },
          { name: "Ghana", abbreviation: "GH" },
          { name: "Gibraltar", abbreviation: "GI" },
          { name: "Greece", abbreviation: "GR" },
          { name: "Greenland", abbreviation: "GL" },
          { name: "Grenada", abbreviation: "GD" },
          { name: "Guadeloupe", abbreviation: "GP" },
          { name: "Guam", abbreviation: "GU" },
          { name: "Guatemala", abbreviation: "GT" },
          { name: "Guernsey", abbreviation: "GG" },
          { name: "Guinea", abbreviation: "GN" },
          { name: "Guinea-Bissau", abbreviation: "GW" },
          { name: "Guyana", abbreviation: "GY" },
          { name: "Haiti", abbreviation: "HT" },
          { name: "Honduras", abbreviation: "HN" },
          { name: "Hong Kong SAR China", abbreviation: "HK" },
          { name: "Hungary", abbreviation: "HU" },
          { name: "Iceland", abbreviation: "IS" },
          { name: "India", abbreviation: "IN" },
          { name: "Indonesia", abbreviation: "ID" },
          { name: "Iran", abbreviation: "IR" },
          { name: "Iraq", abbreviation: "IQ" },
          { name: "Ireland", abbreviation: "IE" },
          { name: "Isle of Man", abbreviation: "IM" },
          { name: "Israel", abbreviation: "IL" },
          { name: "Italy", abbreviation: "IT" },
          { name: "Jamaica", abbreviation: "JM" },
          { name: "Japan", abbreviation: "JP" },
          { name: "Jersey", abbreviation: "JE" },
          { name: "Jordan", abbreviation: "JO" },
          { name: "Kazakhstan", abbreviation: "KZ" },
          { name: "Kenya", abbreviation: "KE" },
          { name: "Kiribati", abbreviation: "KI" },
          { name: "Kosovo", abbreviation: "XK" },
          { name: "Kuwait", abbreviation: "KW" },
          { name: "Kyrgyzstan", abbreviation: "KG" },
          { name: "Laos", abbreviation: "LA" },
          { name: "Latvia", abbreviation: "LV" },
          { name: "Lebanon", abbreviation: "LB" },
          { name: "Lesotho", abbreviation: "LS" },
          { name: "Liberia", abbreviation: "LR" },
          { name: "Libya", abbreviation: "LY" },
          { name: "Liechtenstein", abbreviation: "LI" },
          { name: "Lithuania", abbreviation: "LT" },
          { name: "Luxembourg", abbreviation: "LU" },
          { name: "Macau SAR China", abbreviation: "MO" },
          { name: "Macedonia", abbreviation: "MK" },
          { name: "Madagascar", abbreviation: "MG" },
          { name: "Malawi", abbreviation: "MW" },
          { name: "Malaysia", abbreviation: "MY" },
          { name: "Maldives", abbreviation: "MV" },
          { name: "Mali", abbreviation: "ML" },
          { name: "Malta", abbreviation: "MT" },
          { name: "Marshall Islands", abbreviation: "MH" },
          { name: "Martinique", abbreviation: "MQ" },
          { name: "Mauritania", abbreviation: "MR" },
          { name: "Mauritius", abbreviation: "MU" },
          { name: "Mayotte", abbreviation: "YT" },
          { name: "Mexico", abbreviation: "MX" },
          { name: "Micronesia", abbreviation: "FM" },
          { name: "Moldova", abbreviation: "MD" },
          { name: "Monaco", abbreviation: "MC" },
          { name: "Mongolia", abbreviation: "MN" },
          { name: "Montenegro", abbreviation: "ME" },
          { name: "Montserrat", abbreviation: "MS" },
          { name: "Morocco", abbreviation: "MA" },
          { name: "Mozambique", abbreviation: "MZ" },
          { name: "Myanmar (Burma)", abbreviation: "MM" },
          { name: "Namibia", abbreviation: "NA" },
          { name: "Nauru", abbreviation: "NR" },
          { name: "Nepal", abbreviation: "NP" },
          { name: "Netherlands", abbreviation: "NL" },
          { name: "New Caledonia", abbreviation: "NC" },
          { name: "New Zealand", abbreviation: "NZ" },
          { name: "Nicaragua", abbreviation: "NI" },
          { name: "Niger", abbreviation: "NE" },
          { name: "Nigeria", abbreviation: "NG" },
          { name: "Niue", abbreviation: "NU" },
          { name: "Norfolk Island", abbreviation: "NF" },
          { name: "North Korea", abbreviation: "KP" },
          { name: "Northern Mariana Islands", abbreviation: "MP" },
          { name: "Norway", abbreviation: "NO" },
          { name: "Oman", abbreviation: "OM" },
          { name: "Pakistan", abbreviation: "PK" },
          { name: "Palau", abbreviation: "PW" },
          { name: "Palestinian Territories", abbreviation: "PS" },
          { name: "Panama", abbreviation: "PA" },
          { name: "Papua New Guinea", abbreviation: "PG" },
          { name: "Paraguay", abbreviation: "PY" },
          { name: "Peru", abbreviation: "PE" },
          { name: "Philippines", abbreviation: "PH" },
          { name: "Pitcairn Islands", abbreviation: "PN" },
          { name: "Poland", abbreviation: "PL" },
          { name: "Portugal", abbreviation: "PT" },
          { name: "Puerto Rico", abbreviation: "PR" },
          { name: "Qatar", abbreviation: "QA" },
          { name: "Réunion", abbreviation: "RE" },
          { name: "Romania", abbreviation: "RO" },
          { name: "Russia", abbreviation: "RU" },
          { name: "Rwanda", abbreviation: "RW" },
          { name: "Samoa", abbreviation: "WS" },
          { name: "San Marino", abbreviation: "SM" },
          { name: "São Tomé and Príncipe", abbreviation: "ST" },
          { name: "Saudi Arabia", abbreviation: "SA" },
          { name: "Senegal", abbreviation: "SN" },
          { name: "Serbia", abbreviation: "RS" },
          { name: "Seychelles", abbreviation: "SC" },
          { name: "Sierra Leone", abbreviation: "SL" },
          { name: "Singapore", abbreviation: "SG" },
          { name: "Sint Maarten", abbreviation: "SX" },
          { name: "Slovakia", abbreviation: "SK" },
          { name: "Slovenia", abbreviation: "SI" },
          { name: "Solomon Islands", abbreviation: "SB" },
          { name: "Somalia", abbreviation: "SO" },
          { name: "South Africa", abbreviation: "ZA" },
          {
            name: "South Georgia & South Sandwich Islands",
            abbreviation: "GS",
          },
          { name: "South Korea", abbreviation: "KR" },
          { name: "South Sudan", abbreviation: "SS" },
          { name: "Spain", abbreviation: "ES" },
          { name: "Sri Lanka", abbreviation: "LK" },
          { name: "St. Barthélemy", abbreviation: "BL" },
          { name: "St. Helena", abbreviation: "SH" },
          { name: "St. Kitts & Nevis", abbreviation: "KN" },
          { name: "St. Lucia", abbreviation: "LC" },
          { name: "St. Martin", abbreviation: "MF" },
          { name: "St. Pierre & Miquelon", abbreviation: "PM" },
          { name: "St. Vincent & Grenadines", abbreviation: "VC" },
          { name: "Sudan", abbreviation: "SD" },
          { name: "Suriname", abbreviation: "SR" },
          { name: "Svalbard & Jan Mayen", abbreviation: "SJ" },
          { name: "Swaziland", abbreviation: "SZ" },
          { name: "Sweden", abbreviation: "SE" },
          { name: "Switzerland", abbreviation: "CH" },
          { name: "Syria", abbreviation: "SY" },
          { name: "Taiwan", abbreviation: "TW" },
          { name: "Tajikistan", abbreviation: "TJ" },
          { name: "Tanzania", abbreviation: "TZ" },
          { name: "Thailand", abbreviation: "TH" },
          { name: "Timor-Leste", abbreviation: "TL" },
          { name: "Togo", abbreviation: "TG" },
          { name: "Tokelau", abbreviation: "TK" },
          { name: "Tonga", abbreviation: "TO" },
          { name: "Trinidad & Tobago", abbreviation: "TT" },
          { name: "Tristan da Cunha", abbreviation: "TA" },
          { name: "Tunisia", abbreviation: "TN" },
          { name: "Turkey", abbreviation: "TR" },
          { name: "Turkmenistan", abbreviation: "TM" },
          { name: "Turks & Caicos Islands", abbreviation: "TC" },
          { name: "Tuvalu", abbreviation: "TV" },
          { name: "U.S. Outlying Islands", abbreviation: "UM" },
          { name: "U.S. Virgin Islands", abbreviation: "VI" },
          { name: "Uganda", abbreviation: "UG" },
          { name: "Ukraine", abbreviation: "UA" },
          { name: "United Arab Emirates", abbreviation: "AE" },
          { name: "United Kingdom", abbreviation: "GB" },
          { name: "United States", abbreviation: "US" },
          { name: "Uruguay", abbreviation: "UY" },
          { name: "Uzbekistan", abbreviation: "UZ" },
          { name: "Vanuatu", abbreviation: "VU" },
          { name: "Vatican City", abbreviation: "VA" },
          { name: "Venezuela", abbreviation: "VE" },
          { name: "Vietnam", abbreviation: "VN" },
          { name: "Wallis & Futuna", abbreviation: "WF" },
          { name: "Western Sahara", abbreviation: "EH" },
          { name: "Yemen", abbreviation: "YE" },
          { name: "Zambia", abbreviation: "ZM" },
          { name: "Zimbabwe", abbreviation: "ZW" },
        ],
        counties: {
          uk: [
            { name: "Bath and North East Somerset" },
            { name: "Aberdeenshire" },
            { name: "Anglesey" },
            { name: "Angus" },
            { name: "Bedford" },
            { name: "Blackburn with Darwen" },
            { name: "Blackpool" },
            { name: "Bournemouth" },
            { name: "Bracknell Forest" },
            { name: "Brighton & Hove" },
            { name: "Bristol" },
            { name: "Buckinghamshire" },
            { name: "Cambridgeshire" },
            { name: "Carmarthenshire" },
            { name: "Central Bedfordshire" },
            { name: "Ceredigion" },
            { name: "Cheshire East" },
            { name: "Cheshire West and Chester" },
            { name: "Clackmannanshire" },
            { name: "Conwy" },
            { name: "Cornwall" },
            { name: "County Antrim" },
            { name: "County Armagh" },
            { name: "County Down" },
            { name: "County Durham" },
            { name: "County Fermanagh" },
            { name: "County Londonderry" },
            { name: "County Tyrone" },
            { name: "Cumbria" },
            { name: "Darlington" },
            { name: "Denbighshire" },
            { name: "Derby" },
            { name: "Derbyshire" },
            { name: "Devon" },
            { name: "Dorset" },
            { name: "Dumfries and Galloway" },
            { name: "Dundee" },
            { name: "East Lothian" },
            { name: "East Riding of Yorkshire" },
            { name: "East Sussex" },
            { name: "Edinburgh?" },
            { name: "Essex" },
            { name: "Falkirk" },
            { name: "Fife" },
            { name: "Flintshire" },
            { name: "Gloucestershire" },
            { name: "Greater London" },
            { name: "Greater Manchester" },
            { name: "Gwent" },
            { name: "Gwynedd" },
            { name: "Halton" },
            { name: "Hampshire" },
            { name: "Hartlepool" },
            { name: "Herefordshire" },
            { name: "Hertfordshire" },
            { name: "Highlands" },
            { name: "Hull" },
            { name: "Isle of Wight" },
            { name: "Isles of Scilly" },
            { name: "Kent" },
            { name: "Lancashire" },
            { name: "Leicester" },
            { name: "Leicestershire" },
            { name: "Lincolnshire" },
            { name: "Lothian" },
            { name: "Luton" },
            { name: "Medway" },
            { name: "Merseyside" },
            { name: "Mid Glamorgan" },
            { name: "Middlesbrough" },
            { name: "Milton Keynes" },
            { name: "Monmouthshire" },
            { name: "Moray" },
            { name: "Norfolk" },
            { name: "North East Lincolnshire" },
            { name: "North Lincolnshire" },
            { name: "North Somerset" },
            { name: "North Yorkshire" },
            { name: "Northamptonshire" },
            { name: "Northumberland" },
            { name: "Nottingham" },
            { name: "Nottinghamshire" },
            { name: "Oxfordshire" },
            { name: "Pembrokeshire" },
            { name: "Perth and Kinross" },
            { name: "Peterborough" },
            { name: "Plymouth" },
            { name: "Poole" },
            { name: "Portsmouth" },
            { name: "Powys" },
            { name: "Reading" },
            { name: "Redcar and Cleveland" },
            { name: "Rutland" },
            { name: "Scottish Borders" },
            { name: "Shropshire" },
            { name: "Slough" },
            { name: "Somerset" },
            { name: "South Glamorgan" },
            { name: "South Gloucestershire" },
            { name: "South Yorkshire" },
            { name: "Southampton" },
            { name: "Southend-on-Sea" },
            { name: "Staffordshire" },
            { name: "Stirlingshire" },
            { name: "Stockton-on-Tees" },
            { name: "Stoke-on-Trent" },
            { name: "Strathclyde" },
            { name: "Suffolk" },
            { name: "Surrey" },
            { name: "Swindon" },
            { name: "Telford and Wrekin" },
            { name: "Thurrock" },
            { name: "Torbay" },
            { name: "Tyne and Wear" },
            { name: "Warrington" },
            { name: "Warwickshire" },
            { name: "West Berkshire" },
            { name: "West Glamorgan" },
            { name: "West Lothian" },
            { name: "West Midlands" },
            { name: "West Sussex" },
            { name: "West Yorkshire" },
            { name: "Western Isles" },
            { name: "Wiltshire" },
            { name: "Windsor and Maidenhead" },
            { name: "Wokingham" },
            { name: "Worcestershire" },
            { name: "Wrexham" },
            { name: "York" },
          ],
        },
        provinces: {
          ca: [
            { name: "Alberta", abbreviation: "AB" },
            { name: "British Columbia", abbreviation: "BC" },
            { name: "Manitoba", abbreviation: "MB" },
            { name: "New Brunswick", abbreviation: "NB" },
            { name: "Newfoundland and Labrador", abbreviation: "NL" },
            { name: "Nova Scotia", abbreviation: "NS" },
            { name: "Ontario", abbreviation: "ON" },
            { name: "Prince Edward Island", abbreviation: "PE" },
            { name: "Quebec", abbreviation: "QC" },
            { name: "Saskatchewan", abbreviation: "SK" },
            { name: "Northwest Territories", abbreviation: "NT" },
            { name: "Nunavut", abbreviation: "NU" },
            { name: "Yukon", abbreviation: "YT" },
          ],
          it: [
            { name: "Agrigento", abbreviation: "AG", code: 84 },
            { name: "Alessandria", abbreviation: "AL", code: 6 },
            { name: "Ancona", abbreviation: "AN", code: 42 },
            { name: "Aosta", abbreviation: "AO", code: 7 },
            { name: "L'Aquila", abbreviation: "AQ", code: 66 },
            { name: "Arezzo", abbreviation: "AR", code: 51 },
            { name: "Ascoli-Piceno", abbreviation: "AP", code: 44 },
            { name: "Asti", abbreviation: "AT", code: 5 },
            { name: "Avellino", abbreviation: "AV", code: 64 },
            { name: "Bari", abbreviation: "BA", code: 72 },
            { name: "Barletta-Andria-Trani", abbreviation: "BT", code: 72 },
            { name: "Belluno", abbreviation: "BL", code: 25 },
            { name: "Benevento", abbreviation: "BN", code: 62 },
            { name: "Bergamo", abbreviation: "BG", code: 16 },
            { name: "Biella", abbreviation: "BI", code: 96 },
            { name: "Bologna", abbreviation: "BO", code: 37 },
            { name: "Bolzano", abbreviation: "BZ", code: 21 },
            { name: "Brescia", abbreviation: "BS", code: 17 },
            { name: "Brindisi", abbreviation: "BR", code: 74 },
            { name: "Cagliari", abbreviation: "CA", code: 92 },
            { name: "Caltanissetta", abbreviation: "CL", code: 85 },
            { name: "Campobasso", abbreviation: "CB", code: 70 },
            { name: "Carbonia Iglesias", abbreviation: "CI", code: 70 },
            { name: "Caserta", abbreviation: "CE", code: 61 },
            { name: "Catania", abbreviation: "CT", code: 87 },
            { name: "Catanzaro", abbreviation: "CZ", code: 79 },
            { name: "Chieti", abbreviation: "CH", code: 69 },
            { name: "Como", abbreviation: "CO", code: 13 },
            { name: "Cosenza", abbreviation: "CS", code: 78 },
            { name: "Cremona", abbreviation: "CR", code: 19 },
            { name: "Crotone", abbreviation: "KR", code: 101 },
            { name: "Cuneo", abbreviation: "CN", code: 4 },
            { name: "Enna", abbreviation: "EN", code: 86 },
            { name: "Fermo", abbreviation: "FM", code: 86 },
            { name: "Ferrara", abbreviation: "FE", code: 38 },
            { name: "Firenze", abbreviation: "FI", code: 48 },
            { name: "Foggia", abbreviation: "FG", code: 71 },
            { name: "Forli-Cesena", abbreviation: "FC", code: 71 },
            { name: "Frosinone", abbreviation: "FR", code: 60 },
            { name: "Genova", abbreviation: "GE", code: 10 },
            { name: "Gorizia", abbreviation: "GO", code: 31 },
            { name: "Grosseto", abbreviation: "GR", code: 53 },
            { name: "Imperia", abbreviation: "IM", code: 8 },
            { name: "Isernia", abbreviation: "IS", code: 94 },
            { name: "La-Spezia", abbreviation: "SP", code: 66 },
            { name: "Latina", abbreviation: "LT", code: 59 },
            { name: "Lecce", abbreviation: "LE", code: 75 },
            { name: "Lecco", abbreviation: "LC", code: 97 },
            { name: "Livorno", abbreviation: "LI", code: 49 },
            { name: "Lodi", abbreviation: "LO", code: 98 },
            { name: "Lucca", abbreviation: "LU", code: 46 },
            { name: "Macerata", abbreviation: "MC", code: 43 },
            { name: "Mantova", abbreviation: "MN", code: 20 },
            { name: "Massa-Carrara", abbreviation: "MS", code: 45 },
            { name: "Matera", abbreviation: "MT", code: 77 },
            { name: "Medio Campidano", abbreviation: "VS", code: 77 },
            { name: "Messina", abbreviation: "ME", code: 83 },
            { name: "Milano", abbreviation: "MI", code: 15 },
            { name: "Modena", abbreviation: "MO", code: 36 },
            { name: "Monza-Brianza", abbreviation: "MB", code: 36 },
            { name: "Napoli", abbreviation: "NA", code: 63 },
            { name: "Novara", abbreviation: "NO", code: 3 },
            { name: "Nuoro", abbreviation: "NU", code: 91 },
            { name: "Ogliastra", abbreviation: "OG", code: 91 },
            { name: "Olbia Tempio", abbreviation: "OT", code: 91 },
            { name: "Oristano", abbreviation: "OR", code: 95 },
            { name: "Padova", abbreviation: "PD", code: 28 },
            { name: "Palermo", abbreviation: "PA", code: 82 },
            { name: "Parma", abbreviation: "PR", code: 34 },
            { name: "Pavia", abbreviation: "PV", code: 18 },
            { name: "Perugia", abbreviation: "PG", code: 54 },
            { name: "Pesaro-Urbino", abbreviation: "PU", code: 41 },
            { name: "Pescara", abbreviation: "PE", code: 68 },
            { name: "Piacenza", abbreviation: "PC", code: 33 },
            { name: "Pisa", abbreviation: "PI", code: 50 },
            { name: "Pistoia", abbreviation: "PT", code: 47 },
            { name: "Pordenone", abbreviation: "PN", code: 93 },
            { name: "Potenza", abbreviation: "PZ", code: 76 },
            { name: "Prato", abbreviation: "PO", code: 100 },
            { name: "Ragusa", abbreviation: "RG", code: 88 },
            { name: "Ravenna", abbreviation: "RA", code: 39 },
            { name: "Reggio-Calabria", abbreviation: "RC", code: 35 },
            { name: "Reggio-Emilia", abbreviation: "RE", code: 35 },
            { name: "Rieti", abbreviation: "RI", code: 57 },
            { name: "Rimini", abbreviation: "RN", code: 99 },
            { name: "Roma", abbreviation: "Roma", code: 58 },
            { name: "Rovigo", abbreviation: "RO", code: 29 },
            { name: "Salerno", abbreviation: "SA", code: 65 },
            { name: "Sassari", abbreviation: "SS", code: 90 },
            { name: "Savona", abbreviation: "SV", code: 9 },
            { name: "Siena", abbreviation: "SI", code: 52 },
            { name: "Siracusa", abbreviation: "SR", code: 89 },
            { name: "Sondrio", abbreviation: "SO", code: 14 },
            { name: "Taranto", abbreviation: "TA", code: 73 },
            { name: "Teramo", abbreviation: "TE", code: 67 },
            { name: "Terni", abbreviation: "TR", code: 55 },
            { name: "Torino", abbreviation: "TO", code: 1 },
            { name: "Trapani", abbreviation: "TP", code: 81 },
            { name: "Trento", abbreviation: "TN", code: 22 },
            { name: "Treviso", abbreviation: "TV", code: 26 },
            { name: "Trieste", abbreviation: "TS", code: 32 },
            { name: "Udine", abbreviation: "UD", code: 30 },
            { name: "Varese", abbreviation: "VA", code: 12 },
            { name: "Venezia", abbreviation: "VE", code: 27 },
            { name: "Verbania", abbreviation: "VB", code: 27 },
            { name: "Vercelli", abbreviation: "VC", code: 2 },
            { name: "Verona", abbreviation: "VR", code: 23 },
            { name: "Vibo-Valentia", abbreviation: "VV", code: 102 },
            { name: "Vicenza", abbreviation: "VI", code: 24 },
            { name: "Viterbo", abbreviation: "VT", code: 56 },
          ],
        },
        nationalities: [
          { name: "Afghan" },
          { name: "Albanian" },
          { name: "Algerian" },
          { name: "American" },
          { name: "Andorran" },
          { name: "Angolan" },
          { name: "Antiguans" },
          { name: "Argentinean" },
          { name: "Armenian" },
          { name: "Australian" },
          { name: "Austrian" },
          { name: "Azerbaijani" },
          { name: "Bahami" },
          { name: "Bahraini" },
          { name: "Bangladeshi" },
          { name: "Barbadian" },
          { name: "Barbudans" },
          { name: "Batswana" },
          { name: "Belarusian" },
          { name: "Belgian" },
          { name: "Belizean" },
          { name: "Beninese" },
          { name: "Bhutanese" },
          { name: "Bolivian" },
          { name: "Bosnian" },
          { name: "Brazilian" },
          { name: "British" },
          { name: "Bruneian" },
          { name: "Bulgarian" },
          { name: "Burkinabe" },
          { name: "Burmese" },
          { name: "Burundian" },
          { name: "Cambodian" },
          { name: "Cameroonian" },
          { name: "Canadian" },
          { name: "Cape Verdean" },
          { name: "Central African" },
          { name: "Chadian" },
          { name: "Chilean" },
          { name: "Chinese" },
          { name: "Colombian" },
          { name: "Comoran" },
          { name: "Congolese" },
          { name: "Costa Rican" },
          { name: "Croatian" },
          { name: "Cuban" },
          { name: "Cypriot" },
          { name: "Czech" },
          { name: "Danish" },
          { name: "Djibouti" },
          { name: "Dominican" },
          { name: "Dutch" },
          { name: "East Timorese" },
          { name: "Ecuadorean" },
          { name: "Egyptian" },
          { name: "Emirian" },
          { name: "Equatorial Guinean" },
          { name: "Eritrean" },
          { name: "Estonian" },
          { name: "Ethiopian" },
          { name: "Fijian" },
          { name: "Filipino" },
          { name: "Finnish" },
          { name: "French" },
          { name: "Gabonese" },
          { name: "Gambian" },
          { name: "Georgian" },
          { name: "German" },
          { name: "Ghanaian" },
          { name: "Greek" },
          { name: "Grenadian" },
          { name: "Guatemalan" },
          { name: "Guinea-Bissauan" },
          { name: "Guinean" },
          { name: "Guyanese" },
          { name: "Haitian" },
          { name: "Herzegovinian" },
          { name: "Honduran" },
          { name: "Hungarian" },
          { name: "I-Kiribati" },
          { name: "Icelander" },
          { name: "Indian" },
          { name: "Indonesian" },
          { name: "Iranian" },
          { name: "Iraqi" },
          { name: "Irish" },
          { name: "Israeli" },
          { name: "Italian" },
          { name: "Ivorian" },
          { name: "Jamaican" },
          { name: "Japanese" },
          { name: "Jordanian" },
          { name: "Kazakhstani" },
          { name: "Kenyan" },
          { name: "Kittian and Nevisian" },
          { name: "Kuwaiti" },
          { name: "Kyrgyz" },
          { name: "Laotian" },
          { name: "Latvian" },
          { name: "Lebanese" },
          { name: "Liberian" },
          { name: "Libyan" },
          { name: "Liechtensteiner" },
          { name: "Lithuanian" },
          { name: "Luxembourger" },
          { name: "Macedonian" },
          { name: "Malagasy" },
          { name: "Malawian" },
          { name: "Malaysian" },
          { name: "Maldivan" },
          { name: "Malian" },
          { name: "Maltese" },
          { name: "Marshallese" },
          { name: "Mauritanian" },
          { name: "Mauritian" },
          { name: "Mexican" },
          { name: "Micronesian" },
          { name: "Moldovan" },
          { name: "Monacan" },
          { name: "Mongolian" },
          { name: "Moroccan" },
          { name: "Mosotho" },
          { name: "Motswana" },
          { name: "Mozambican" },
          { name: "Namibian" },
          { name: "Nauruan" },
          { name: "Nepalese" },
          { name: "New Zealander" },
          { name: "Nicaraguan" },
          { name: "Nigerian" },
          { name: "Nigerien" },
          { name: "North Korean" },
          { name: "Northern Irish" },
          { name: "Norwegian" },
          { name: "Omani" },
          { name: "Pakistani" },
          { name: "Palauan" },
          { name: "Panamanian" },
          { name: "Papua New Guinean" },
          { name: "Paraguayan" },
          { name: "Peruvian" },
          { name: "Polish" },
          { name: "Portuguese" },
          { name: "Qatari" },
          { name: "Romani" },
          { name: "Russian" },
          { name: "Rwandan" },
          { name: "Saint Lucian" },
          { name: "Salvadoran" },
          { name: "Samoan" },
          { name: "San Marinese" },
          { name: "Sao Tomean" },
          { name: "Saudi" },
          { name: "Scottish" },
          { name: "Senegalese" },
          { name: "Serbian" },
          { name: "Seychellois" },
          { name: "Sierra Leonean" },
          { name: "Singaporean" },
          { name: "Slovakian" },
          { name: "Slovenian" },
          { name: "Solomon Islander" },
          { name: "Somali" },
          { name: "South African" },
          { name: "South Korean" },
          { name: "Spanish" },
          { name: "Sri Lankan" },
          { name: "Sudanese" },
          { name: "Surinamer" },
          { name: "Swazi" },
          { name: "Swedish" },
          { name: "Swiss" },
          { name: "Syrian" },
          { name: "Taiwanese" },
          { name: "Tajik" },
          { name: "Tanzanian" },
          { name: "Thai" },
          { name: "Togolese" },
          { name: "Tongan" },
          { name: "Trinidadian or Tobagonian" },
          { name: "Tunisian" },
          { name: "Turkish" },
          { name: "Tuvaluan" },
          { name: "Ugandan" },
          { name: "Ukrainian" },
          { name: "Uruguaya" },
          { name: "Uzbekistani" },
          { name: "Venezuela" },
          { name: "Vietnamese" },
          { name: "Wels" },
          { name: "Yemenit" },
          { name: "Zambia" },
          { name: "Zimbabwe" },
        ],
        locale_languages: [
          "aa",
          "ab",
          "ae",
          "af",
          "ak",
          "am",
          "an",
          "ar",
          "as",
          "av",
          "ay",
          "az",
          "ba",
          "be",
          "bg",
          "bh",
          "bi",
          "bm",
          "bn",
          "bo",
          "br",
          "bs",
          "ca",
          "ce",
          "ch",
          "co",
          "cr",
          "cs",
          "cu",
          "cv",
          "cy",
          "da",
          "de",
          "dv",
          "dz",
          "ee",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fa",
          "ff",
          "fi",
          "fj",
          "fo",
          "fr",
          "fy",
          "ga",
          "gd",
          "gl",
          "gn",
          "gu",
          "gv",
          "ha",
          "he",
          "hi",
          "ho",
          "hr",
          "ht",
          "hu",
          "hy",
          "hz",
          "ia",
          "id",
          "ie",
          "ig",
          "ii",
          "ik",
          "io",
          "is",
          "it",
          "iu",
          "ja",
          "jv",
          "ka",
          "kg",
          "ki",
          "kj",
          "kk",
          "kl",
          "km",
          "kn",
          "ko",
          "kr",
          "ks",
          "ku",
          "kv",
          "kw",
          "ky",
          "la",
          "lb",
          "lg",
          "li",
          "ln",
          "lo",
          "lt",
          "lu",
          "lv",
          "mg",
          "mh",
          "mi",
          "mk",
          "ml",
          "mn",
          "mr",
          "ms",
          "mt",
          "my",
          "na",
          "nb",
          "nd",
          "ne",
          "ng",
          "nl",
          "nn",
          "no",
          "nr",
          "nv",
          "ny",
          "oc",
          "oj",
          "om",
          "or",
          "os",
          "pa",
          "pi",
          "pl",
          "ps",
          "pt",
          "qu",
          "rm",
          "rn",
          "ro",
          "ru",
          "rw",
          "sa",
          "sc",
          "sd",
          "se",
          "sg",
          "si",
          "sk",
          "sl",
          "sm",
          "sn",
          "so",
          "sq",
          "sr",
          "ss",
          "st",
          "su",
          "sv",
          "sw",
          "ta",
          "te",
          "tg",
          "th",
          "ti",
          "tk",
          "tl",
          "tn",
          "to",
          "tr",
          "ts",
          "tt",
          "tw",
          "ty",
          "ug",
          "uk",
          "ur",
          "uz",
          "ve",
          "vi",
          "vo",
          "wa",
          "wo",
          "xh",
          "yi",
          "yo",
          "za",
          "zh",
          "zu",
        ],
        locale_regions: [
          "agq-CM",
          "asa-TZ",
          "ast-ES",
          "bas-CM",
          "bem-ZM",
          "bez-TZ",
          "brx-IN",
          "cgg-UG",
          "chr-US",
          "dav-KE",
          "dje-NE",
          "dsb-DE",
          "dua-CM",
          "dyo-SN",
          "ebu-KE",
          "ewo-CM",
          "fil-PH",
          "fur-IT",
          "gsw-CH",
          "gsw-FR",
          "gsw-LI",
          "guz-KE",
          "haw-US",
          "hsb-DE",
          "jgo-CM",
          "jmc-TZ",
          "kab-DZ",
          "kam-KE",
          "kde-TZ",
          "kea-CV",
          "khq-ML",
          "kkj-CM",
          "kln-KE",
          "kok-IN",
          "ksb-TZ",
          "ksf-CM",
          "ksh-DE",
          "lag-TZ",
          "lkt-US",
          "luo-KE",
          "luy-KE",
          "mas-KE",
          "mas-TZ",
          "mer-KE",
          "mfe-MU",
          "mgh-MZ",
          "mgo-CM",
          "mua-CM",
          "naq-NA",
          "nmg-CM",
          "nnh-CM",
          "nus-SD",
          "nyn-UG",
          "rof-TZ",
          "rwk-TZ",
          "sah-RU",
          "saq-KE",
          "sbp-TZ",
          "seh-MZ",
          "ses-ML",
          "shi-Latn",
          "shi-Latn-MA",
          "shi-Tfng",
          "shi-Tfng-MA",
          "smn-FI",
          "teo-KE",
          "teo-UG",
          "twq-NE",
          "tzm-Latn",
          "tzm-Latn-MA",
          "vai-Latn",
          "vai-Latn-LR",
          "vai-Vaii",
          "vai-Vaii-LR",
          "vun-TZ",
          "wae-CH",
          "xog-UG",
          "yav-CM",
          "zgh-MA",
          "af-NA",
          "af-ZA",
          "ak-GH",
          "am-ET",
          "ar-001",
          "ar-AE",
          "ar-BH",
          "ar-DJ",
          "ar-DZ",
          "ar-EG",
          "ar-EH",
          "ar-ER",
          "ar-IL",
          "ar-IQ",
          "ar-JO",
          "ar-KM",
          "ar-KW",
          "ar-LB",
          "ar-LY",
          "ar-MA",
          "ar-MR",
          "ar-OM",
          "ar-PS",
          "ar-QA",
          "ar-SA",
          "ar-SD",
          "ar-SO",
          "ar-SS",
          "ar-SY",
          "ar-TD",
          "ar-TN",
          "ar-YE",
          "as-IN",
          "az-Cyrl",
          "az-Cyrl-AZ",
          "az-Latn",
          "az-Latn-AZ",
          "be-BY",
          "bg-BG",
          "bm-Latn",
          "bm-Latn-ML",
          "bn-BD",
          "bn-IN",
          "bo-CN",
          "bo-IN",
          "br-FR",
          "bs-Cyrl",
          "bs-Cyrl-BA",
          "bs-Latn",
          "bs-Latn-BA",
          "ca-AD",
          "ca-ES",
          "ca-ES-VALENCIA",
          "ca-FR",
          "ca-IT",
          "cs-CZ",
          "cy-GB",
          "da-DK",
          "da-GL",
          "de-AT",
          "de-BE",
          "de-CH",
          "de-DE",
          "de-LI",
          "de-LU",
          "dz-BT",
          "ee-GH",
          "ee-TG",
          "el-CY",
          "el-GR",
          "en-001",
          "en-150",
          "en-AG",
          "en-AI",
          "en-AS",
          "en-AU",
          "en-BB",
          "en-BE",
          "en-BM",
          "en-BS",
          "en-BW",
          "en-BZ",
          "en-CA",
          "en-CC",
          "en-CK",
          "en-CM",
          "en-CX",
          "en-DG",
          "en-DM",
          "en-ER",
          "en-FJ",
          "en-FK",
          "en-FM",
          "en-GB",
          "en-GD",
          "en-GG",
          "en-GH",
          "en-GI",
          "en-GM",
          "en-GU",
          "en-GY",
          "en-HK",
          "en-IE",
          "en-IM",
          "en-IN",
          "en-IO",
          "en-JE",
          "en-JM",
          "en-KE",
          "en-KI",
          "en-KN",
          "en-KY",
          "en-LC",
          "en-LR",
          "en-LS",
          "en-MG",
          "en-MH",
          "en-MO",
          "en-MP",
          "en-MS",
          "en-MT",
          "en-MU",
          "en-MW",
          "en-MY",
          "en-NA",
          "en-NF",
          "en-NG",
          "en-NR",
          "en-NU",
          "en-NZ",
          "en-PG",
          "en-PH",
          "en-PK",
          "en-PN",
          "en-PR",
          "en-PW",
          "en-RW",
          "en-SB",
          "en-SC",
          "en-SD",
          "en-SG",
          "en-SH",
          "en-SL",
          "en-SS",
          "en-SX",
          "en-SZ",
          "en-TC",
          "en-TK",
          "en-TO",
          "en-TT",
          "en-TV",
          "en-TZ",
          "en-UG",
          "en-UM",
          "en-US",
          "en-US-POSIX",
          "en-VC",
          "en-VG",
          "en-VI",
          "en-VU",
          "en-WS",
          "en-ZA",
          "en-ZM",
          "en-ZW",
          "eo-001",
          "es-419",
          "es-AR",
          "es-BO",
          "es-CL",
          "es-CO",
          "es-CR",
          "es-CU",
          "es-DO",
          "es-EA",
          "es-EC",
          "es-ES",
          "es-GQ",
          "es-GT",
          "es-HN",
          "es-IC",
          "es-MX",
          "es-NI",
          "es-PA",
          "es-PE",
          "es-PH",
          "es-PR",
          "es-PY",
          "es-SV",
          "es-US",
          "es-UY",
          "es-VE",
          "et-EE",
          "eu-ES",
          "fa-AF",
          "fa-IR",
          "ff-CM",
          "ff-GN",
          "ff-MR",
          "ff-SN",
          "fi-FI",
          "fo-FO",
          "fr-BE",
          "fr-BF",
          "fr-BI",
          "fr-BJ",
          "fr-BL",
          "fr-CA",
          "fr-CD",
          "fr-CF",
          "fr-CG",
          "fr-CH",
          "fr-CI",
          "fr-CM",
          "fr-DJ",
          "fr-DZ",
          "fr-FR",
          "fr-GA",
          "fr-GF",
          "fr-GN",
          "fr-GP",
          "fr-GQ",
          "fr-HT",
          "fr-KM",
          "fr-LU",
          "fr-MA",
          "fr-MC",
          "fr-MF",
          "fr-MG",
          "fr-ML",
          "fr-MQ",
          "fr-MR",
          "fr-MU",
          "fr-NC",
          "fr-NE",
          "fr-PF",
          "fr-PM",
          "fr-RE",
          "fr-RW",
          "fr-SC",
          "fr-SN",
          "fr-SY",
          "fr-TD",
          "fr-TG",
          "fr-TN",
          "fr-VU",
          "fr-WF",
          "fr-YT",
          "fy-NL",
          "ga-IE",
          "gd-GB",
          "gl-ES",
          "gu-IN",
          "gv-IM",
          "ha-Latn",
          "ha-Latn-GH",
          "ha-Latn-NE",
          "ha-Latn-NG",
          "he-IL",
          "hi-IN",
          "hr-BA",
          "hr-HR",
          "hu-HU",
          "hy-AM",
          "id-ID",
          "ig-NG",
          "ii-CN",
          "is-IS",
          "it-CH",
          "it-IT",
          "it-SM",
          "ja-JP",
          "ka-GE",
          "ki-KE",
          "kk-Cyrl",
          "kk-Cyrl-KZ",
          "kl-GL",
          "km-KH",
          "kn-IN",
          "ko-KP",
          "ko-KR",
          "ks-Arab",
          "ks-Arab-IN",
          "kw-GB",
          "ky-Cyrl",
          "ky-Cyrl-KG",
          "lb-LU",
          "lg-UG",
          "ln-AO",
          "ln-CD",
          "ln-CF",
          "ln-CG",
          "lo-LA",
          "lt-LT",
          "lu-CD",
          "lv-LV",
          "mg-MG",
          "mk-MK",
          "ml-IN",
          "mn-Cyrl",
          "mn-Cyrl-MN",
          "mr-IN",
          "ms-Latn",
          "ms-Latn-BN",
          "ms-Latn-MY",
          "ms-Latn-SG",
          "mt-MT",
          "my-MM",
          "nb-NO",
          "nb-SJ",
          "nd-ZW",
          "ne-IN",
          "ne-NP",
          "nl-AW",
          "nl-BE",
          "nl-BQ",
          "nl-CW",
          "nl-NL",
          "nl-SR",
          "nl-SX",
          "nn-NO",
          "om-ET",
          "om-KE",
          "or-IN",
          "os-GE",
          "os-RU",
          "pa-Arab",
          "pa-Arab-PK",
          "pa-Guru",
          "pa-Guru-IN",
          "pl-PL",
          "ps-AF",
          "pt-AO",
          "pt-BR",
          "pt-CV",
          "pt-GW",
          "pt-MO",
          "pt-MZ",
          "pt-PT",
          "pt-ST",
          "pt-TL",
          "qu-BO",
          "qu-EC",
          "qu-PE",
          "rm-CH",
          "rn-BI",
          "ro-MD",
          "ro-RO",
          "ru-BY",
          "ru-KG",
          "ru-KZ",
          "ru-MD",
          "ru-RU",
          "ru-UA",
          "rw-RW",
          "se-FI",
          "se-NO",
          "se-SE",
          "sg-CF",
          "si-LK",
          "sk-SK",
          "sl-SI",
          "sn-ZW",
          "so-DJ",
          "so-ET",
          "so-KE",
          "so-SO",
          "sq-AL",
          "sq-MK",
          "sq-XK",
          "sr-Cyrl",
          "sr-Cyrl-BA",
          "sr-Cyrl-ME",
          "sr-Cyrl-RS",
          "sr-Cyrl-XK",
          "sr-Latn",
          "sr-Latn-BA",
          "sr-Latn-ME",
          "sr-Latn-RS",
          "sr-Latn-XK",
          "sv-AX",
          "sv-FI",
          "sv-SE",
          "sw-CD",
          "sw-KE",
          "sw-TZ",
          "sw-UG",
          "ta-IN",
          "ta-LK",
          "ta-MY",
          "ta-SG",
          "te-IN",
          "th-TH",
          "ti-ER",
          "ti-ET",
          "to-TO",
          "tr-CY",
          "tr-TR",
          "ug-Arab",
          "ug-Arab-CN",
          "uk-UA",
          "ur-IN",
          "ur-PK",
          "uz-Arab",
          "uz-Arab-AF",
          "uz-Cyrl",
          "uz-Cyrl-UZ",
          "uz-Latn",
          "uz-Latn-UZ",
          "vi-VN",
          "yi-001",
          "yo-BJ",
          "yo-NG",
          "zh-Hans",
          "zh-Hans-CN",
          "zh-Hans-HK",
          "zh-Hans-MO",
          "zh-Hans-SG",
          "zh-Hant",
          "zh-Hant-HK",
          "zh-Hant-MO",
          "zh-Hant-TW",
          "zu-ZA",
        ],
        us_states_and_dc: [
          { name: "Alabama", abbreviation: "AL" },
          { name: "Alaska", abbreviation: "AK" },
          { name: "Arizona", abbreviation: "AZ" },
          { name: "Arkansas", abbreviation: "AR" },
          { name: "California", abbreviation: "CA" },
          { name: "Colorado", abbreviation: "CO" },
          { name: "Connecticut", abbreviation: "CT" },
          { name: "Delaware", abbreviation: "DE" },
          { name: "District of Columbia", abbreviation: "DC" },
          { name: "Florida", abbreviation: "FL" },
          { name: "Georgia", abbreviation: "GA" },
          { name: "Hawaii", abbreviation: "HI" },
          { name: "Idaho", abbreviation: "ID" },
          { name: "Illinois", abbreviation: "IL" },
          { name: "Indiana", abbreviation: "IN" },
          { name: "Iowa", abbreviation: "IA" },
          { name: "Kansas", abbreviation: "KS" },
          { name: "Kentucky", abbreviation: "KY" },
          { name: "Louisiana", abbreviation: "LA" },
          { name: "Maine", abbreviation: "ME" },
          { name: "Maryland", abbreviation: "MD" },
          { name: "Massachusetts", abbreviation: "MA" },
          { name: "Michigan", abbreviation: "MI" },
          { name: "Minnesota", abbreviation: "MN" },
          { name: "Mississippi", abbreviation: "MS" },
          { name: "Missouri", abbreviation: "MO" },
          { name: "Montana", abbreviation: "MT" },
          { name: "Nebraska", abbreviation: "NE" },
          { name: "Nevada", abbreviation: "NV" },
          { name: "New Hampshire", abbreviation: "NH" },
          { name: "New Jersey", abbreviation: "NJ" },
          { name: "New Mexico", abbreviation: "NM" },
          { name: "New York", abbreviation: "NY" },
          { name: "North Carolina", abbreviation: "NC" },
          { name: "North Dakota", abbreviation: "ND" },
          { name: "Ohio", abbreviation: "OH" },
          { name: "Oklahoma", abbreviation: "OK" },
          { name: "Oregon", abbreviation: "OR" },
          { name: "Pennsylvania", abbreviation: "PA" },
          { name: "Rhode Island", abbreviation: "RI" },
          { name: "South Carolina", abbreviation: "SC" },
          { name: "South Dakota", abbreviation: "SD" },
          { name: "Tennessee", abbreviation: "TN" },
          { name: "Texas", abbreviation: "TX" },
          { name: "Utah", abbreviation: "UT" },
          { name: "Vermont", abbreviation: "VT" },
          { name: "Virginia", abbreviation: "VA" },
          { name: "Washington", abbreviation: "WA" },
          { name: "West Virginia", abbreviation: "WV" },
          { name: "Wisconsin", abbreviation: "WI" },
          { name: "Wyoming", abbreviation: "WY" },
        ],
        territories: [
          { name: "American Samoa", abbreviation: "AS" },
          { name: "Federated States of Micronesia", abbreviation: "FM" },
          { name: "Guam", abbreviation: "GU" },
          { name: "Marshall Islands", abbreviation: "MH" },
          { name: "Northern Mariana Islands", abbreviation: "MP" },
          { name: "Puerto Rico", abbreviation: "PR" },
          { name: "Virgin Islands, U.S.", abbreviation: "VI" },
        ],
        armed_forces: [
          { name: "Armed Forces Europe", abbreviation: "AE" },
          { name: "Armed Forces Pacific", abbreviation: "AP" },
          { name: "Armed Forces the Americas", abbreviation: "AA" },
        ],
        country_regions: {
          it: [
            { name: "Valle d'Aosta", abbreviation: "VDA" },
            { name: "Piemonte", abbreviation: "PIE" },
            { name: "Lombardia", abbreviation: "LOM" },
            { name: "Veneto", abbreviation: "VEN" },
            { name: "Trentino Alto Adige", abbreviation: "TAA" },
            { name: "Friuli Venezia Giulia", abbreviation: "FVG" },
            { name: "Liguria", abbreviation: "LIG" },
            { name: "Emilia Romagna", abbreviation: "EMR" },
            { name: "Toscana", abbreviation: "TOS" },
            { name: "Umbria", abbreviation: "UMB" },
            { name: "Marche", abbreviation: "MAR" },
            { name: "Abruzzo", abbreviation: "ABR" },
            { name: "Lazio", abbreviation: "LAZ" },
            { name: "Campania", abbreviation: "CAM" },
            { name: "Puglia", abbreviation: "PUG" },
            { name: "Basilicata", abbreviation: "BAS" },
            { name: "Molise", abbreviation: "MOL" },
            { name: "Calabria", abbreviation: "CAL" },
            { name: "Sicilia", abbreviation: "SIC" },
            { name: "Sardegna", abbreviation: "SAR" },
          ],
          mx: [
            { name: "Aguascalientes", abbreviation: "AGU" },
            { name: "Baja California", abbreviation: "BCN" },
            { name: "Baja California Sur", abbreviation: "BCS" },
            { name: "Campeche", abbreviation: "CAM" },
            { name: "Chiapas", abbreviation: "CHP" },
            { name: "Chihuahua", abbreviation: "CHH" },
            { name: "Ciudad de México", abbreviation: "DIF" },
            { name: "Coahuila", abbreviation: "COA" },
            { name: "Colima", abbreviation: "COL" },
            { name: "Durango", abbreviation: "DUR" },
            { name: "Guanajuato", abbreviation: "GUA" },
            { name: "Guerrero", abbreviation: "GRO" },
            { name: "Hidalgo", abbreviation: "HID" },
            { name: "Jalisco", abbreviation: "JAL" },
            { name: "México", abbreviation: "MEX" },
            { name: "Michoacán", abbreviation: "MIC" },
            { name: "Morelos", abbreviation: "MOR" },
            { name: "Nayarit", abbreviation: "NAY" },
            { name: "Nuevo León", abbreviation: "NLE" },
            { name: "Oaxaca", abbreviation: "OAX" },
            { name: "Puebla", abbreviation: "PUE" },
            { name: "Querétaro", abbreviation: "QUE" },
            { name: "Quintana Roo", abbreviation: "ROO" },
            { name: "San Luis Potosí", abbreviation: "SLP" },
            { name: "Sinaloa", abbreviation: "SIN" },
            { name: "Sonora", abbreviation: "SON" },
            { name: "Tabasco", abbreviation: "TAB" },
            { name: "Tamaulipas", abbreviation: "TAM" },
            { name: "Tlaxcala", abbreviation: "TLA" },
            { name: "Veracruz", abbreviation: "VER" },
            { name: "Yucatán", abbreviation: "YUC" },
            { name: "Zacatecas", abbreviation: "ZAC" },
          ],
        },
        street_suffixes: {
          us: [
            { name: "Avenue", abbreviation: "Ave" },
            { name: "Boulevard", abbreviation: "Blvd" },
            { name: "Center", abbreviation: "Ctr" },
            { name: "Circle", abbreviation: "Cir" },
            { name: "Court", abbreviation: "Ct" },
            { name: "Drive", abbreviation: "Dr" },
            { name: "Extension", abbreviation: "Ext" },
            { name: "Glen", abbreviation: "Gln" },
            { name: "Grove", abbreviation: "Grv" },
            { name: "Heights", abbreviation: "Hts" },
            { name: "Highway", abbreviation: "Hwy" },
            { name: "Junction", abbreviation: "Jct" },
            { name: "Key", abbreviation: "Key" },
            { name: "Lane", abbreviation: "Ln" },
            { name: "Loop", abbreviation: "Loop" },
            { name: "Manor", abbreviation: "Mnr" },
            { name: "Mill", abbreviation: "Mill" },
            { name: "Park", abbreviation: "Park" },
            { name: "Parkway", abbreviation: "Pkwy" },
            { name: "Pass", abbreviation: "Pass" },
            { name: "Path", abbreviation: "Path" },
            { name: "Pike", abbreviation: "Pike" },
            { name: "Place", abbreviation: "Pl" },
            { name: "Plaza", abbreviation: "Plz" },
            { name: "Point", abbreviation: "Pt" },
            { name: "Ridge", abbreviation: "Rdg" },
            { name: "River", abbreviation: "Riv" },
            { name: "Road", abbreviation: "Rd" },
            { name: "Square", abbreviation: "Sq" },
            { name: "Street", abbreviation: "St" },
            { name: "Terrace", abbreviation: "Ter" },
            { name: "Trail", abbreviation: "Trl" },
            { name: "Turnpike", abbreviation: "Tpke" },
            { name: "View", abbreviation: "Vw" },
            { name: "Way", abbreviation: "Way" },
          ],
          it: [
            { name: "Accesso", abbreviation: "Acc." },
            { name: "Alzaia", abbreviation: "Alz." },
            { name: "Arco", abbreviation: "Arco" },
            { name: "Archivolto", abbreviation: "Acv." },
            { name: "Arena", abbreviation: "Arena" },
            { name: "Argine", abbreviation: "Argine" },
            { name: "Bacino", abbreviation: "Bacino" },
            { name: "Banchi", abbreviation: "Banchi" },
            { name: "Banchina", abbreviation: "Ban." },
            { name: "Bastioni", abbreviation: "Bas." },
            { name: "Belvedere", abbreviation: "Belv." },
            { name: "Borgata", abbreviation: "B.ta" },
            { name: "Borgo", abbreviation: "B.go" },
            { name: "Calata", abbreviation: "Cal." },
            { name: "Calle", abbreviation: "Calle" },
            { name: "Campiello", abbreviation: "Cam." },
            { name: "Campo", abbreviation: "Cam." },
            { name: "Canale", abbreviation: "Can." },
            { name: "Carraia", abbreviation: "Carr." },
            { name: "Cascina", abbreviation: "Cascina" },
            { name: "Case sparse", abbreviation: "c.s." },
            { name: "Cavalcavia", abbreviation: "Cv." },
            { name: "Circonvallazione", abbreviation: "Cv." },
            { name: "Complanare", abbreviation: "C.re" },
            { name: "Contrada", abbreviation: "C.da" },
            { name: "Corso", abbreviation: "C.so" },
            { name: "Corte", abbreviation: "C.te" },
            { name: "Cortile", abbreviation: "C.le" },
            { name: "Diramazione", abbreviation: "Dir." },
            { name: "Fondaco", abbreviation: "F.co" },
            { name: "Fondamenta", abbreviation: "F.ta" },
            { name: "Fondo", abbreviation: "F.do" },
            { name: "Frazione", abbreviation: "Fr." },
            { name: "Isola", abbreviation: "Is." },
            { name: "Largo", abbreviation: "L.go" },
            { name: "Litoranea", abbreviation: "Lit." },
            { name: "Lungolago", abbreviation: "L.go lago" },
            { name: "Lungo Po", abbreviation: "l.go Po" },
            { name: "Molo", abbreviation: "Molo" },
            { name: "Mura", abbreviation: "Mura" },
            { name: "Passaggio privato", abbreviation: "pass. priv." },
            { name: "Passeggiata", abbreviation: "Pass." },
            { name: "Piazza", abbreviation: "P.zza" },
            { name: "Piazzale", abbreviation: "P.le" },
            { name: "Ponte", abbreviation: "P.te" },
            { name: "Portico", abbreviation: "P.co" },
            { name: "Rampa", abbreviation: "Rampa" },
            { name: "Regione", abbreviation: "Reg." },
            { name: "Rione", abbreviation: "R.ne" },
            { name: "Rio", abbreviation: "Rio" },
            { name: "Ripa", abbreviation: "Ripa" },
            { name: "Riva", abbreviation: "Riva" },
            { name: "Rondò", abbreviation: "Rondò" },
            { name: "Rotonda", abbreviation: "Rot." },
            { name: "Sagrato", abbreviation: "Sagr." },
            { name: "Salita", abbreviation: "Sal." },
            { name: "Scalinata", abbreviation: "Scal." },
            { name: "Scalone", abbreviation: "Scal." },
            { name: "Slargo", abbreviation: "Sl." },
            { name: "Sottoportico", abbreviation: "Sott." },
            { name: "Strada", abbreviation: "Str." },
            { name: "Stradale", abbreviation: "Str.le" },
            { name: "Strettoia", abbreviation: "Strett." },
            { name: "Traversa", abbreviation: "Trav." },
            { name: "Via", abbreviation: "V." },
            { name: "Viale", abbreviation: "V.le" },
            { name: "Vicinale", abbreviation: "Vic.le" },
            { name: "Vicolo", abbreviation: "Vic." },
          ],
          uk: [
            { name: "Avenue", abbreviation: "Ave" },
            { name: "Close", abbreviation: "Cl" },
            { name: "Court", abbreviation: "Ct" },
            { name: "Crescent", abbreviation: "Cr" },
            { name: "Drive", abbreviation: "Dr" },
            { name: "Garden", abbreviation: "Gdn" },
            { name: "Gardens", abbreviation: "Gdns" },
            { name: "Green", abbreviation: "Gn" },
            { name: "Grove", abbreviation: "Gr" },
            { name: "Lane", abbreviation: "Ln" },
            { name: "Mount", abbreviation: "Mt" },
            { name: "Place", abbreviation: "Pl" },
            { name: "Park", abbreviation: "Pk" },
            { name: "Ridge", abbreviation: "Rdg" },
            { name: "Road", abbreviation: "Rd" },
            { name: "Square", abbreviation: "Sq" },
            { name: "Street", abbreviation: "St" },
            { name: "Terrace", abbreviation: "Ter" },
            { name: "Valley", abbreviation: "Val" },
          ],
        },
        months: [
          { name: "January", short_name: "Jan", numeric: "01", days: 31 },
          { name: "February", short_name: "Feb", numeric: "02", days: 28 },
          { name: "March", short_name: "Mar", numeric: "03", days: 31 },
          { name: "April", short_name: "Apr", numeric: "04", days: 30 },
          { name: "May", short_name: "May", numeric: "05", days: 31 },
          { name: "June", short_name: "Jun", numeric: "06", days: 30 },
          { name: "July", short_name: "Jul", numeric: "07", days: 31 },
          { name: "August", short_name: "Aug", numeric: "08", days: 31 },
          { name: "September", short_name: "Sep", numeric: "09", days: 30 },
          { name: "October", short_name: "Oct", numeric: "10", days: 31 },
          { name: "November", short_name: "Nov", numeric: "11", days: 30 },
          { name: "December", short_name: "Dec", numeric: "12", days: 31 },
        ],
        cc_types: [
          {
            name: "American Express",
            short_name: "amex",
            prefix: "34",
            length: 15,
          },
          {
            name: "Bankcard",
            short_name: "bankcard",
            prefix: "5610",
            length: 16,
          },
          {
            name: "China UnionPay",
            short_name: "chinaunion",
            prefix: "62",
            length: 16,
          },
          {
            name: "Diners Club Carte Blanche",
            short_name: "dccarte",
            prefix: "300",
            length: 14,
          },
          {
            name: "Diners Club enRoute",
            short_name: "dcenroute",
            prefix: "2014",
            length: 15,
          },
          {
            name: "Diners Club International",
            short_name: "dcintl",
            prefix: "36",
            length: 14,
          },
          {
            name: "Diners Club United States & Canada",
            short_name: "dcusc",
            prefix: "54",
            length: 16,
          },
          {
            name: "Discover Card",
            short_name: "discover",
            prefix: "6011",
            length: 16,
          },
          {
            name: "InstaPayment",
            short_name: "instapay",
            prefix: "637",
            length: 16,
          },
          { name: "JCB", short_name: "jcb", prefix: "3528", length: 16 },
          { name: "Laser", short_name: "laser", prefix: "6304", length: 16 },
          {
            name: "Maestro",
            short_name: "maestro",
            prefix: "5018",
            length: 16,
          },
          { name: "Mastercard", short_name: "mc", prefix: "51", length: 16 },
          { name: "Solo", short_name: "solo", prefix: "6334", length: 16 },
          { name: "Switch", short_name: "switch", prefix: "4903", length: 16 },
          { name: "Visa", short_name: "visa", prefix: "4", length: 16 },
          {
            name: "Visa Electron",
            short_name: "electron",
            prefix: "4026",
            length: 16,
          },
        ],
        currency_types: [
          { code: "AED", name: "United Arab Emirates Dirham" },
          { code: "AFN", name: "Afghanistan Afghani" },
          { code: "ALL", name: "Albania Lek" },
          { code: "AMD", name: "Armenia Dram" },
          { code: "ANG", name: "Netherlands Antilles Guilder" },
          { code: "AOA", name: "Angola Kwanza" },
          { code: "ARS", name: "Argentina Peso" },
          { code: "AUD", name: "Australia Dollar" },
          { code: "AWG", name: "Aruba Guilder" },
          { code: "AZN", name: "Azerbaijan New Manat" },
          { code: "BAM", name: "Bosnia and Herzegovina Convertible Marka" },
          { code: "BBD", name: "Barbados Dollar" },
          { code: "BDT", name: "Bangladesh Taka" },
          { code: "BGN", name: "Bulgaria Lev" },
          { code: "BHD", name: "Bahrain Dinar" },
          { code: "BIF", name: "Burundi Franc" },
          { code: "BMD", name: "Bermuda Dollar" },
          { code: "BND", name: "Brunei Darussalam Dollar" },
          { code: "BOB", name: "Bolivia Boliviano" },
          { code: "BRL", name: "Brazil Real" },
          { code: "BSD", name: "Bahamas Dollar" },
          { code: "BTN", name: "Bhutan Ngultrum" },
          { code: "BWP", name: "Botswana Pula" },
          { code: "BYR", name: "Belarus Ruble" },
          { code: "BZD", name: "Belize Dollar" },
          { code: "CAD", name: "Canada Dollar" },
          { code: "CDF", name: "Congo/Kinshasa Franc" },
          { code: "CHF", name: "Switzerland Franc" },
          { code: "CLP", name: "Chile Peso" },
          { code: "CNY", name: "China Yuan Renminbi" },
          { code: "COP", name: "Colombia Peso" },
          { code: "CRC", name: "Costa Rica Colon" },
          { code: "CUC", name: "Cuba Convertible Peso" },
          { code: "CUP", name: "Cuba Peso" },
          { code: "CVE", name: "Cape Verde Escudo" },
          { code: "CZK", name: "Czech Republic Koruna" },
          { code: "DJF", name: "Djibouti Franc" },
          { code: "DKK", name: "Denmark Krone" },
          { code: "DOP", name: "Dominican Republic Peso" },
          { code: "DZD", name: "Algeria Dinar" },
          { code: "EGP", name: "Egypt Pound" },
          { code: "ERN", name: "Eritrea Nakfa" },
          { code: "ETB", name: "Ethiopia Birr" },
          { code: "EUR", name: "Euro Member Countries" },
          { code: "FJD", name: "Fiji Dollar" },
          { code: "FKP", name: "Falkland Islands (Malvinas) Pound" },
          { code: "GBP", name: "United Kingdom Pound" },
          { code: "GEL", name: "Georgia Lari" },
          { code: "GGP", name: "Guernsey Pound" },
          { code: "GHS", name: "Ghana Cedi" },
          { code: "GIP", name: "Gibraltar Pound" },
          { code: "GMD", name: "Gambia Dalasi" },
          { code: "GNF", name: "Guinea Franc" },
          { code: "GTQ", name: "Guatemala Quetzal" },
          { code: "GYD", name: "Guyana Dollar" },
          { code: "HKD", name: "Hong Kong Dollar" },
          { code: "HNL", name: "Honduras Lempira" },
          { code: "HRK", name: "Croatia Kuna" },
          { code: "HTG", name: "Haiti Gourde" },
          { code: "HUF", name: "Hungary Forint" },
          { code: "IDR", name: "Indonesia Rupiah" },
          { code: "ILS", name: "Israel Shekel" },
          { code: "IMP", name: "Isle of Man Pound" },
          { code: "INR", name: "India Rupee" },
          { code: "IQD", name: "Iraq Dinar" },
          { code: "IRR", name: "Iran Rial" },
          { code: "ISK", name: "Iceland Krona" },
          { code: "JEP", name: "Jersey Pound" },
          { code: "JMD", name: "Jamaica Dollar" },
          { code: "JOD", name: "Jordan Dinar" },
          { code: "JPY", name: "Japan Yen" },
          { code: "KES", name: "Kenya Shilling" },
          { code: "KGS", name: "Kyrgyzstan Som" },
          { code: "KHR", name: "Cambodia Riel" },
          { code: "KMF", name: "Comoros Franc" },
          { code: "KPW", name: "Korea (North) Won" },
          { code: "KRW", name: "Korea (South) Won" },
          { code: "KWD", name: "Kuwait Dinar" },
          { code: "KYD", name: "Cayman Islands Dollar" },
          { code: "KZT", name: "Kazakhstan Tenge" },
          { code: "LAK", name: "Laos Kip" },
          { code: "LBP", name: "Lebanon Pound" },
          { code: "LKR", name: "Sri Lanka Rupee" },
          { code: "LRD", name: "Liberia Dollar" },
          { code: "LSL", name: "Lesotho Loti" },
          { code: "LTL", name: "Lithuania Litas" },
          { code: "LYD", name: "Libya Dinar" },
          { code: "MAD", name: "Morocco Dirham" },
          { code: "MDL", name: "Moldova Leu" },
          { code: "MGA", name: "Madagascar Ariary" },
          { code: "MKD", name: "Macedonia Denar" },
          { code: "MMK", name: "Myanmar (Burma) Kyat" },
          { code: "MNT", name: "Mongolia Tughrik" },
          { code: "MOP", name: "Macau Pataca" },
          { code: "MRO", name: "Mauritania Ouguiya" },
          { code: "MUR", name: "Mauritius Rupee" },
          { code: "MVR", name: "Maldives (Maldive Islands) Rufiyaa" },
          { code: "MWK", name: "Malawi Kwacha" },
          { code: "MXN", name: "Mexico Peso" },
          { code: "MYR", name: "Malaysia Ringgit" },
          { code: "MZN", name: "Mozambique Metical" },
          { code: "NAD", name: "Namibia Dollar" },
          { code: "NGN", name: "Nigeria Naira" },
          { code: "NIO", name: "Nicaragua Cordoba" },
          { code: "NOK", name: "Norway Krone" },
          { code: "NPR", name: "Nepal Rupee" },
          { code: "NZD", name: "New Zealand Dollar" },
          { code: "OMR", name: "Oman Rial" },
          { code: "PAB", name: "Panama Balboa" },
          { code: "PEN", name: "Peru Nuevo Sol" },
          { code: "PGK", name: "Papua New Guinea Kina" },
          { code: "PHP", name: "Philippines Peso" },
          { code: "PKR", name: "Pakistan Rupee" },
          { code: "PLN", name: "Poland Zloty" },
          { code: "PYG", name: "Paraguay Guarani" },
          { code: "QAR", name: "Qatar Riyal" },
          { code: "RON", name: "Romania New Leu" },
          { code: "RSD", name: "Serbia Dinar" },
          { code: "RUB", name: "Russia Ruble" },
          { code: "RWF", name: "Rwanda Franc" },
          { code: "SAR", name: "Saudi Arabia Riyal" },
          { code: "SBD", name: "Solomon Islands Dollar" },
          { code: "SCR", name: "Seychelles Rupee" },
          { code: "SDG", name: "Sudan Pound" },
          { code: "SEK", name: "Sweden Krona" },
          { code: "SGD", name: "Singapore Dollar" },
          { code: "SHP", name: "Saint Helena Pound" },
          { code: "SLL", name: "Sierra Leone Leone" },
          { code: "SOS", name: "Somalia Shilling" },
          { code: "SPL", name: "Seborga Luigino" },
          { code: "SRD", name: "Suriname Dollar" },
          { code: "STD", name: "São Tomé and Príncipe Dobra" },
          { code: "SVC", name: "El Salvador Colon" },
          { code: "SYP", name: "Syria Pound" },
          { code: "SZL", name: "Swaziland Lilangeni" },
          { code: "THB", name: "Thailand Baht" },
          { code: "TJS", name: "Tajikistan Somoni" },
          { code: "TMT", name: "Turkmenistan Manat" },
          { code: "TND", name: "Tunisia Dinar" },
          { code: "TOP", name: "Tonga Pa'anga" },
          { code: "TRY", name: "Turkey Lira" },
          { code: "TTD", name: "Trinidad and Tobago Dollar" },
          { code: "TVD", name: "Tuvalu Dollar" },
          { code: "TWD", name: "Taiwan New Dollar" },
          { code: "TZS", name: "Tanzania Shilling" },
          { code: "UAH", name: "Ukraine Hryvnia" },
          { code: "UGX", name: "Uganda Shilling" },
          { code: "USD", name: "United States Dollar" },
          { code: "UYU", name: "Uruguay Peso" },
          { code: "UZS", name: "Uzbekistan Som" },
          { code: "VEF", name: "Venezuela Bolivar" },
          { code: "VND", name: "Viet Nam Dong" },
          { code: "VUV", name: "Vanuatu Vatu" },
          { code: "WST", name: "Samoa Tala" },
          {
            code: "XAF",
            name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC",
          },
          { code: "XCD", name: "East Caribbean Dollar" },
          {
            code: "XDR",
            name: "International Monetary Fund (IMF) Special Drawing Rights",
          },
          {
            code: "XOF",
            name: "Communauté Financière Africaine (BCEAO) Franc",
          },
          { code: "XPF", name: "Comptoirs Français du Pacifique (CFP) Franc" },
          { code: "YER", name: "Yemen Rial" },
          { code: "ZAR", name: "South Africa Rand" },
          { code: "ZMW", name: "Zambia Kwacha" },
          { code: "ZWD", name: "Zimbabwe Dollar" },
        ],
        colorNames: [
          "AliceBlue",
          "Black",
          "Navy",
          "DarkBlue",
          "MediumBlue",
          "Blue",
          "DarkGreen",
          "Green",
          "Teal",
          "DarkCyan",
          "DeepSkyBlue",
          "DarkTurquoise",
          "MediumSpringGreen",
          "Lime",
          "SpringGreen",
          "Aqua",
          "Cyan",
          "MidnightBlue",
          "DodgerBlue",
          "LightSeaGreen",
          "ForestGreen",
          "SeaGreen",
          "DarkSlateGray",
          "LimeGreen",
          "MediumSeaGreen",
          "Turquoise",
          "RoyalBlue",
          "SteelBlue",
          "DarkSlateBlue",
          "MediumTurquoise",
          "Indigo",
          "DarkOliveGreen",
          "CadetBlue",
          "CornflowerBlue",
          "RebeccaPurple",
          "MediumAquaMarine",
          "DimGray",
          "SlateBlue",
          "OliveDrab",
          "SlateGray",
          "LightSlateGray",
          "MediumSlateBlue",
          "LawnGreen",
          "Chartreuse",
          "Aquamarine",
          "Maroon",
          "Purple",
          "Olive",
          "Gray",
          "SkyBlue",
          "LightSkyBlue",
          "BlueViolet",
          "DarkRed",
          "DarkMagenta",
          "SaddleBrown",
          "Ivory",
          "White",
          "DarkSeaGreen",
          "LightGreen",
          "MediumPurple",
          "DarkViolet",
          "PaleGreen",
          "DarkOrchid",
          "YellowGreen",
          "Sienna",
          "Brown",
          "DarkGray",
          "LightBlue",
          "GreenYellow",
          "PaleTurquoise",
          "LightSteelBlue",
          "PowderBlue",
          "FireBrick",
          "DarkGoldenRod",
          "MediumOrchid",
          "RosyBrown",
          "DarkKhaki",
          "Silver",
          "MediumVioletRed",
          "IndianRed",
          "Peru",
          "Chocolate",
          "Tan",
          "LightGray",
          "Thistle",
          "Orchid",
          "GoldenRod",
          "PaleVioletRed",
          "Crimson",
          "Gainsboro",
          "Plum",
          "BurlyWood",
          "LightCyan",
          "Lavender",
          "DarkSalmon",
          "Violet",
          "PaleGoldenRod",
          "LightCoral",
          "Khaki",
          "AliceBlue",
          "HoneyDew",
          "Azure",
          "SandyBrown",
          "Wheat",
          "Beige",
          "WhiteSmoke",
          "MintCream",
          "GhostWhite",
          "Salmon",
          "AntiqueWhite",
          "Linen",
          "LightGoldenRodYellow",
          "OldLace",
          "Red",
          "Fuchsia",
          "Magenta",
          "DeepPink",
          "OrangeRed",
          "Tomato",
          "HotPink",
          "Coral",
          "DarkOrange",
          "LightSalmon",
          "Orange",
          "LightPink",
          "Pink",
          "Gold",
          "PeachPuff",
          "NavajoWhite",
          "Moccasin",
          "Bisque",
          "MistyRose",
          "BlanchedAlmond",
          "PapayaWhip",
          "LavenderBlush",
          "SeaShell",
          "Cornsilk",
          "LemonChiffon",
          "FloralWhite",
          "Snow",
          "Yellow",
          "LightYellow",
        ],
        company: [
          "3Com Corp",
          "3M Company",
          "A.G. Edwards Inc.",
          "Abbott Laboratories",
          "Abercrombie & Fitch Co.",
          "ABM Industries Incorporated",
          "Ace Hardware Corporation",
          "ACT Manufacturing Inc.",
          "Acterna Corp.",
          "Adams Resources & Energy, Inc.",
          "ADC Telecommunications, Inc.",
          "Adelphia Communications Corporation",
          "Administaff, Inc.",
          "Adobe Systems Incorporated",
          "Adolph Coors Company",
          "Advance Auto Parts, Inc.",
          "Advanced Micro Devices, Inc.",
          "AdvancePCS, Inc.",
          "Advantica Restaurant Group, Inc.",
          "The AES Corporation",
          "Aetna Inc.",
          "Affiliated Computer Services, Inc.",
          "AFLAC Incorporated",
          "AGCO Corporation",
          "Agilent Technologies, Inc.",
          "Agway Inc.",
          "Apartment Investment and Management Company",
          "Air Products and Chemicals, Inc.",
          "Airborne, Inc.",
          "Airgas, Inc.",
          "AK Steel Holding Corporation",
          "Alaska Air Group, Inc.",
          "Alberto-Culver Company",
          "Albertson's, Inc.",
          "Alcoa Inc.",
          "Alleghany Corporation",
          "Allegheny Energy, Inc.",
          "Allegheny Technologies Incorporated",
          "Allergan, Inc.",
          "ALLETE, Inc.",
          "Alliant Energy Corporation",
          "Allied Waste Industries, Inc.",
          "Allmerica Financial Corporation",
          "The Allstate Corporation",
          "ALLTEL Corporation",
          "The Alpine Group, Inc.",
          "Amazon.com, Inc.",
          "AMC Entertainment Inc.",
          "American Power Conversion Corporation",
          "Amerada Hess Corporation",
          "AMERCO",
          "Ameren Corporation",
          "America West Holdings Corporation",
          "American Axle & Manufacturing Holdings, Inc.",
          "American Eagle Outfitters, Inc.",
          "American Electric Power Company, Inc.",
          "American Express Company",
          "American Financial Group, Inc.",
          "American Greetings Corporation",
          "American International Group, Inc.",
          "American Standard Companies Inc.",
          "American Water Works Company, Inc.",
          "AmerisourceBergen Corporation",
          "Ames Department Stores, Inc.",
          "Amgen Inc.",
          "Amkor Technology, Inc.",
          "AMR Corporation",
          "AmSouth Bancorp.",
          "Amtran, Inc.",
          "Anadarko Petroleum Corporation",
          "Analog Devices, Inc.",
          "Anheuser-Busch Companies, Inc.",
          "Anixter International Inc.",
          "AnnTaylor Inc.",
          "Anthem, Inc.",
          "AOL Time Warner Inc.",
          "Aon Corporation",
          "Apache Corporation",
          "Apple Computer, Inc.",
          "Applera Corporation",
          "Applied Industrial Technologies, Inc.",
          "Applied Materials, Inc.",
          "Aquila, Inc.",
          "ARAMARK Corporation",
          "Arch Coal, Inc.",
          "Archer Daniels Midland Company",
          "Arkansas Best Corporation",
          "Armstrong Holdings, Inc.",
          "Arrow Electronics, Inc.",
          "ArvinMeritor, Inc.",
          "Ashland Inc.",
          "Astoria Financial Corporation",
          "AT&T Corp.",
          "Atmel Corporation",
          "Atmos Energy Corporation",
          "Audiovox Corporation",
          "Autoliv, Inc.",
          "Automatic Data Processing, Inc.",
          "AutoNation, Inc.",
          "AutoZone, Inc.",
          "Avaya Inc.",
          "Avery Dennison Corporation",
          "Avista Corporation",
          "Avnet, Inc.",
          "Avon Products, Inc.",
          "Baker Hughes Incorporated",
          "Ball Corporation",
          "Bank of America Corporation",
          "The Bank of New York Company, Inc.",
          "Bank One Corporation",
          "Banknorth Group, Inc.",
          "Banta Corporation",
          "Barnes & Noble, Inc.",
          "Bausch & Lomb Incorporated",
          "Baxter International Inc.",
          "BB&T Corporation",
          "The Bear Stearns Companies Inc.",
          "Beazer Homes USA, Inc.",
          "Beckman Coulter, Inc.",
          "Becton, Dickinson and Company",
          "Bed Bath & Beyond Inc.",
          "Belk, Inc.",
          "Bell Microproducts Inc.",
          "BellSouth Corporation",
          "Belo Corp.",
          "Bemis Company, Inc.",
          "Benchmark Electronics, Inc.",
          "Berkshire Hathaway Inc.",
          "Best Buy Co., Inc.",
          "Bethlehem Steel Corporation",
          "Beverly Enterprises, Inc.",
          "Big Lots, Inc.",
          "BJ Services Company",
          "BJ's Wholesale Club, Inc.",
          "The Black & Decker Corporation",
          "Black Hills Corporation",
          "BMC Software, Inc.",
          "The Boeing Company",
          "Boise Cascade Corporation",
          "Borders Group, Inc.",
          "BorgWarner Inc.",
          "Boston Scientific Corporation",
          "Bowater Incorporated",
          "Briggs & Stratton Corporation",
          "Brightpoint, Inc.",
          "Brinker International, Inc.",
          "Bristol-Myers Squibb Company",
          "Broadwing, Inc.",
          "Brown Shoe Company, Inc.",
          "Brown-Forman Corporation",
          "Brunswick Corporation",
          "Budget Group, Inc.",
          "Burlington Coat Factory Warehouse Corporation",
          "Burlington Industries, Inc.",
          "Burlington Northern Santa Fe Corporation",
          "Burlington Resources Inc.",
          "C. H. Robinson Worldwide Inc.",
          "Cablevision Systems Corp",
          "Cabot Corp",
          "Cadence Design Systems, Inc.",
          "Calpine Corp.",
          "Campbell Soup Co.",
          "Capital One Financial Corp.",
          "Cardinal Health Inc.",
          "Caremark Rx Inc.",
          "Carlisle Cos. Inc.",
          "Carpenter Technology Corp.",
          "Casey's General Stores Inc.",
          "Caterpillar Inc.",
          "CBRL Group Inc.",
          "CDI Corp.",
          "CDW Computer Centers Inc.",
          "CellStar Corp.",
          "Cendant Corp",
          "Cenex Harvest States Cooperatives",
          "Centex Corp.",
          "CenturyTel Inc.",
          "Ceridian Corp.",
          "CH2M Hill Cos. Ltd.",
          "Champion Enterprises Inc.",
          "Charles Schwab Corp.",
          "Charming Shoppes Inc.",
          "Charter Communications Inc.",
          "Charter One Financial Inc.",
          "ChevronTexaco Corp.",
          "Chiquita Brands International Inc.",
          "Chubb Corp",
          "Ciena Corp.",
          "Cigna Corp",
          "Cincinnati Financial Corp.",
          "Cinergy Corp.",
          "Cintas Corp.",
          "Circuit City Stores Inc.",
          "Cisco Systems Inc.",
          "Citigroup, Inc",
          "Citizens Communications Co.",
          "CKE Restaurants Inc.",
          "Clear Channel Communications Inc.",
          "The Clorox Co.",
          "CMGI Inc.",
          "CMS Energy Corp.",
          "CNF Inc.",
          "Coca-Cola Co.",
          "Coca-Cola Enterprises Inc.",
          "Colgate-Palmolive Co.",
          "Collins & Aikman Corp.",
          "Comcast Corp.",
          "Comdisco Inc.",
          "Comerica Inc.",
          "Comfort Systems USA Inc.",
          "Commercial Metals Co.",
          "Community Health Systems Inc.",
          "Compass Bancshares Inc",
          "Computer Associates International Inc.",
          "Computer Sciences Corp.",
          "Compuware Corp.",
          "Comverse Technology Inc.",
          "ConAgra Foods Inc.",
          "Concord EFS Inc.",
          "Conectiv, Inc",
          "Conoco Inc",
          "Conseco Inc.",
          "Consolidated Freightways Corp.",
          "Consolidated Edison Inc.",
          "Constellation Brands Inc.",
          "Constellation Emergy Group Inc.",
          "Continental Airlines Inc.",
          "Convergys Corp.",
          "Cooper Cameron Corp.",
          "Cooper Industries Ltd.",
          "Cooper Tire & Rubber Co.",
          "Corn Products International Inc.",
          "Corning Inc.",
          "Costco Wholesale Corp.",
          "Countrywide Credit Industries Inc.",
          "Coventry Health Care Inc.",
          "Cox Communications Inc.",
          "Crane Co.",
          "Crompton Corp.",
          "Crown Cork & Seal Co. Inc.",
          "CSK Auto Corp.",
          "CSX Corp.",
          "Cummins Inc.",
          "CVS Corp.",
          "Cytec Industries Inc.",
          "D&K Healthcare Resources, Inc.",
          "D.R. Horton Inc.",
          "Dana Corporation",
          "Danaher Corporation",
          "Darden Restaurants Inc.",
          "DaVita Inc.",
          "Dean Foods Company",
          "Deere & Company",
          "Del Monte Foods Co",
          "Dell Computer Corporation",
          "Delphi Corp.",
          "Delta Air Lines Inc.",
          "Deluxe Corporation",
          "Devon Energy Corporation",
          "Di Giorgio Corporation",
          "Dial Corporation",
          "Diebold Incorporated",
          "Dillard's Inc.",
          "DIMON Incorporated",
          "Dole Food Company, Inc.",
          "Dollar General Corporation",
          "Dollar Tree Stores, Inc.",
          "Dominion Resources, Inc.",
          "Domino's Pizza LLC",
          "Dover Corporation, Inc.",
          "Dow Chemical Company",
          "Dow Jones & Company, Inc.",
          "DPL Inc.",
          "DQE Inc.",
          "Dreyer's Grand Ice Cream, Inc.",
          "DST Systems, Inc.",
          "DTE Energy Co.",
          "E.I. Du Pont de Nemours and Company",
          "Duke Energy Corp",
          "Dun & Bradstreet Inc.",
          "DURA Automotive Systems Inc.",
          "DynCorp",
          "Dynegy Inc.",
          "E*Trade Group, Inc.",
          "E.W. Scripps Company",
          "Earthlink, Inc.",
          "Eastman Chemical Company",
          "Eastman Kodak Company",
          "Eaton Corporation",
          "Echostar Communications Corporation",
          "Ecolab Inc.",
          "Edison International",
          "EGL Inc.",
          "El Paso Corporation",
          "Electronic Arts Inc.",
          "Electronic Data Systems Corp.",
          "Eli Lilly and Company",
          "EMC Corporation",
          "Emcor Group Inc.",
          "Emerson Electric Co.",
          "Encompass Services Corporation",
          "Energizer Holdings Inc.",
          "Energy East Corporation",
          "Engelhard Corporation",
          "Enron Corp.",
          "Entergy Corporation",
          "Enterprise Products Partners L.P.",
          "EOG Resources, Inc.",
          "Equifax Inc.",
          "Equitable Resources Inc.",
          "Equity Office Properties Trust",
          "Equity Residential Properties Trust",
          "Estee Lauder Companies Inc.",
          "Exelon Corporation",
          "Exide Technologies",
          "Expeditors International of Washington Inc.",
          "Express Scripts Inc.",
          "ExxonMobil Corporation",
          "Fairchild Semiconductor International Inc.",
          "Family Dollar Stores Inc.",
          "Farmland Industries Inc.",
          "Federal Mogul Corp.",
          "Federated Department Stores Inc.",
          "Federal Express Corp.",
          "Felcor Lodging Trust Inc.",
          "Ferro Corp.",
          "Fidelity National Financial Inc.",
          "Fifth Third Bancorp",
          "First American Financial Corp.",
          "First Data Corp.",
          "First National of Nebraska Inc.",
          "First Tennessee National Corp.",
          "FirstEnergy Corp.",
          "Fiserv Inc.",
          "Fisher Scientific International Inc.",
          "FleetBoston Financial Co.",
          "Fleetwood Enterprises Inc.",
          "Fleming Companies Inc.",
          "Flowers Foods Inc.",
          "Flowserv Corp",
          "Fluor Corp",
          "FMC Corp",
          "Foamex International Inc",
          "Foot Locker Inc",
          "Footstar Inc.",
          "Ford Motor Co",
          "Forest Laboratories Inc.",
          "Fortune Brands Inc.",
          "Foster Wheeler Ltd.",
          "FPL Group Inc.",
          "Franklin Resources Inc.",
          "Freeport McMoran Copper & Gold Inc.",
          "Frontier Oil Corp",
          "Furniture Brands International Inc.",
          "Gannett Co., Inc.",
          "Gap Inc.",
          "Gateway Inc.",
          "GATX Corporation",
          "Gemstar-TV Guide International Inc.",
          "GenCorp Inc.",
          "General Cable Corporation",
          "General Dynamics Corporation",
          "General Electric Company",
          "General Mills Inc",
          "General Motors Corporation",
          "Genesis Health Ventures Inc.",
          "Gentek Inc.",
          "Gentiva Health Services Inc.",
          "Genuine Parts Company",
          "Genuity Inc.",
          "Genzyme Corporation",
          "Georgia Gulf Corporation",
          "Georgia-Pacific Corporation",
          "Gillette Company",
          "Gold Kist Inc.",
          "Golden State Bancorp Inc.",
          "Golden West Financial Corporation",
          "Goldman Sachs Group Inc.",
          "Goodrich Corporation",
          "The Goodyear Tire & Rubber Company",
          "Granite Construction Incorporated",
          "Graybar Electric Company Inc.",
          "Great Lakes Chemical Corporation",
          "Great Plains Energy Inc.",
          "GreenPoint Financial Corp.",
          "Greif Bros. Corporation",
          "Grey Global Group Inc.",
          "Group 1 Automotive Inc.",
          "Guidant Corporation",
          "H&R Block Inc.",
          "H.B. Fuller Company",
          "H.J. Heinz Company",
          "Halliburton Co.",
          "Harley-Davidson Inc.",
          "Harman International Industries Inc.",
          "Harrah's Entertainment Inc.",
          "Harris Corp.",
          "Harsco Corp.",
          "Hartford Financial Services Group Inc.",
          "Hasbro Inc.",
          "Hawaiian Electric Industries Inc.",
          "HCA Inc.",
          "Health Management Associates Inc.",
          "Health Net Inc.",
          "Healthsouth Corp",
          "Henry Schein Inc.",
          "Hercules Inc.",
          "Herman Miller Inc.",
          "Hershey Foods Corp.",
          "Hewlett-Packard Company",
          "Hibernia Corp.",
          "Hillenbrand Industries Inc.",
          "Hilton Hotels Corp.",
          "Hollywood Entertainment Corp.",
          "Home Depot Inc.",
          "Hon Industries Inc.",
          "Honeywell International Inc.",
          "Hormel Foods Corp.",
          "Host Marriott Corp.",
          "Household International Corp.",
          "Hovnanian Enterprises Inc.",
          "Hub Group Inc.",
          "Hubbell Inc.",
          "Hughes Supply Inc.",
          "Humana Inc.",
          "Huntington Bancshares Inc.",
          "Idacorp Inc.",
          "IDT Corporation",
          "IKON Office Solutions Inc.",
          "Illinois Tool Works Inc.",
          "IMC Global Inc.",
          "Imperial Sugar Company",
          "IMS Health Inc.",
          "Ingles Market Inc",
          "Ingram Micro Inc.",
          "Insight Enterprises Inc.",
          "Integrated Electrical Services Inc.",
          "Intel Corporation",
          "International Paper Co.",
          "Interpublic Group of Companies Inc.",
          "Interstate Bakeries Corporation",
          "International Business Machines Corp.",
          "International Flavors & Fragrances Inc.",
          "International Multifoods Corporation",
          "Intuit Inc.",
          "IT Group Inc.",
          "ITT Industries Inc.",
          "Ivax Corp.",
          "J.B. Hunt Transport Services Inc.",
          "J.C. Penny Co.",
          "J.P. Morgan Chase & Co.",
          "Jabil Circuit Inc.",
          "Jack In The Box Inc.",
          "Jacobs Engineering Group Inc.",
          "JDS Uniphase Corp.",
          "Jefferson-Pilot Co.",
          "John Hancock Financial Services Inc.",
          "Johnson & Johnson",
          "Johnson Controls Inc.",
          "Jones Apparel Group Inc.",
          "KB Home",
          "Kellogg Company",
          "Kellwood Company",
          "Kelly Services Inc.",
          "Kemet Corp.",
          "Kennametal Inc.",
          "Kerr-McGee Corporation",
          "KeyCorp",
          "KeySpan Corp.",
          "Kimball International Inc.",
          "Kimberly-Clark Corporation",
          "Kindred Healthcare Inc.",
          "KLA-Tencor Corporation",
          "K-Mart Corp.",
          "Knight-Ridder Inc.",
          "Kohl's Corp.",
          "KPMG Consulting Inc.",
          "Kroger Co.",
          "L-3 Communications Holdings Inc.",
          "Laboratory Corporation of America Holdings",
          "Lam Research Corporation",
          "LandAmerica Financial Group Inc.",
          "Lands' End Inc.",
          "Landstar System Inc.",
          "La-Z-Boy Inc.",
          "Lear Corporation",
          "Legg Mason Inc.",
          "Leggett & Platt Inc.",
          "Lehman Brothers Holdings Inc.",
          "Lennar Corporation",
          "Lennox International Inc.",
          "Level 3 Communications Inc.",
          "Levi Strauss & Co.",
          "Lexmark International Inc.",
          "Limited Inc.",
          "Lincoln National Corporation",
          "Linens 'n Things Inc.",
          "Lithia Motors Inc.",
          "Liz Claiborne Inc.",
          "Lockheed Martin Corporation",
          "Loews Corporation",
          "Longs Drug Stores Corporation",
          "Louisiana-Pacific Corporation",
          "Lowe's Companies Inc.",
          "LSI Logic Corporation",
          "The LTV Corporation",
          "The Lubrizol Corporation",
          "Lucent Technologies Inc.",
          "Lyondell Chemical Company",
          "M & T Bank Corporation",
          "Magellan Health Services Inc.",
          "Mail-Well Inc.",
          "Mandalay Resort Group",
          "Manor Care Inc.",
          "Manpower Inc.",
          "Marathon Oil Corporation",
          "Mariner Health Care Inc.",
          "Markel Corporation",
          "Marriott International Inc.",
          "Marsh & McLennan Companies Inc.",
          "Marsh Supermarkets Inc.",
          "Marshall & Ilsley Corporation",
          "Martin Marietta Materials Inc.",
          "Masco Corporation",
          "Massey Energy Company",
          "MasTec Inc.",
          "Mattel Inc.",
          "Maxim Integrated Products Inc.",
          "Maxtor Corporation",
          "Maxxam Inc.",
          "The May Department Stores Company",
          "Maytag Corporation",
          "MBNA Corporation",
          "McCormick & Company Incorporated",
          "McDonald's Corporation",
          "The McGraw-Hill Companies Inc.",
          "McKesson Corporation",
          "McLeodUSA Incorporated",
          "M.D.C. Holdings Inc.",
          "MDU Resources Group Inc.",
          "MeadWestvaco Corporation",
          "Medtronic Inc.",
          "Mellon Financial Corporation",
          "The Men's Wearhouse Inc.",
          "Merck & Co., Inc.",
          "Mercury General Corporation",
          "Merrill Lynch & Co. Inc.",
          "Metaldyne Corporation",
          "Metals USA Inc.",
          "MetLife Inc.",
          "Metris Companies Inc",
          "MGIC Investment Corporation",
          "MGM Mirage",
          "Michaels Stores Inc.",
          "Micron Technology Inc.",
          "Microsoft Corporation",
          "Milacron Inc.",
          "Millennium Chemicals Inc.",
          "Mirant Corporation",
          "Mohawk Industries Inc.",
          "Molex Incorporated",
          "The MONY Group Inc.",
          "Morgan Stanley Dean Witter & Co.",
          "Motorola Inc.",
          "MPS Group Inc.",
          "Murphy Oil Corporation",
          "Nabors Industries Inc",
          "Nacco Industries Inc",
          "Nash Finch Company",
          "National City Corp.",
          "National Commerce Financial Corporation",
          "National Fuel Gas Company",
          "National Oilwell Inc",
          "National Rural Utilities Cooperative Finance Corporation",
          "National Semiconductor Corporation",
          "National Service Industries Inc",
          "Navistar International Corporation",
          "NCR Corporation",
          "The Neiman Marcus Group Inc.",
          "New Jersey Resources Corporation",
          "New York Times Company",
          "Newell Rubbermaid Inc",
          "Newmont Mining Corporation",
          "Nextel Communications Inc",
          "Nicor Inc",
          "Nike Inc",
          "NiSource Inc",
          "Noble Energy Inc",
          "Nordstrom Inc",
          "Norfolk Southern Corporation",
          "Nortek Inc",
          "North Fork Bancorporation Inc",
          "Northeast Utilities System",
          "Northern Trust Corporation",
          "Northrop Grumman Corporation",
          "NorthWestern Corporation",
          "Novellus Systems Inc",
          "NSTAR",
          "NTL Incorporated",
          "Nucor Corp",
          "Nvidia Corp",
          "NVR Inc",
          "Northwest Airlines Corp",
          "Occidental Petroleum Corp",
          "Ocean Energy Inc",
          "Office Depot Inc.",
          "OfficeMax Inc",
          "OGE Energy Corp",
          "Oglethorpe Power Corp.",
          "Ohio Casualty Corp.",
          "Old Republic International Corp.",
          "Olin Corp.",
          "OM Group Inc",
          "Omnicare Inc",
          "Omnicom Group",
          "On Semiconductor Corp",
          "ONEOK Inc",
          "Oracle Corp",
          "Oshkosh Truck Corp",
          "Outback Steakhouse Inc.",
          "Owens & Minor Inc.",
          "Owens Corning",
          "Owens-Illinois Inc",
          "Oxford Health Plans Inc",
          "Paccar Inc",
          "PacifiCare Health Systems Inc",
          "Packaging Corp. of America",
          "Pactiv Corp",
          "Pall Corp",
          "Pantry Inc",
          "Park Place Entertainment Corp",
          "Parker Hannifin Corp.",
          "Pathmark Stores Inc.",
          "Paychex Inc",
          "Payless Shoesource Inc",
          "Penn Traffic Co.",
          "Pennzoil-Quaker State Company",
          "Pentair Inc",
          "Peoples Energy Corp.",
          "PeopleSoft Inc",
          "Pep Boys Manny, Moe & Jack",
          "Potomac Electric Power Co.",
          "Pepsi Bottling Group Inc.",
          "PepsiAmericas Inc.",
          "PepsiCo Inc.",
          "Performance Food Group Co.",
          "Perini Corp",
          "PerkinElmer Inc",
          "Perot Systems Corp",
          "Petco Animal Supplies Inc.",
          "Peter Kiewit Sons', Inc.",
          "PETsMART Inc",
          "Pfizer Inc",
          "Pacific Gas & Electric Corp.",
          "Pharmacia Corp",
          "Phar Mor Inc.",
          "Phelps Dodge Corp.",
          "Philip Morris Companies Inc.",
          "Phillips Petroleum Co",
          "Phillips Van Heusen Corp.",
          "Phoenix Companies Inc",
          "Pier 1 Imports Inc.",
          "Pilgrim's Pride Corporation",
          "Pinnacle West Capital Corp",
          "Pioneer-Standard Electronics Inc.",
          "Pitney Bowes Inc.",
          "Pittston Brinks Group",
          "Plains All American Pipeline LP",
          "PNC Financial Services Group Inc.",
          "PNM Resources Inc",
          "Polaris Industries Inc.",
          "Polo Ralph Lauren Corp",
          "PolyOne Corp",
          "Popular Inc",
          "Potlatch Corp",
          "PPG Industries Inc",
          "PPL Corp",
          "Praxair Inc",
          "Precision Castparts Corp",
          "Premcor Inc.",
          "Pride International Inc",
          "Primedia Inc",
          "Principal Financial Group Inc.",
          "Procter & Gamble Co.",
          "Pro-Fac Cooperative Inc.",
          "Progress Energy Inc",
          "Progressive Corporation",
          "Protective Life Corp",
          "Provident Financial Group",
          "Providian Financial Corp.",
          "Prudential Financial Inc.",
          "PSS World Medical Inc",
          "Public Service Enterprise Group Inc.",
          "Publix Super Markets Inc.",
          "Puget Energy Inc.",
          "Pulte Homes Inc",
          "Qualcomm Inc",
          "Quanta Services Inc.",
          "Quantum Corp",
          "Quest Diagnostics Inc.",
          "Questar Corp",
          "Quintiles Transnational",
          "Qwest Communications Intl Inc",
          "R.J. Reynolds Tobacco Company",
          "R.R. Donnelley & Sons Company",
          "Radio Shack Corporation",
          "Raymond James Financial Inc.",
          "Raytheon Company",
          "Reader's Digest Association Inc.",
          "Reebok International Ltd.",
          "Regions Financial Corp.",
          "Regis Corporation",
          "Reliance Steel & Aluminum Co.",
          "Reliant Energy Inc.",
          "Rent A Center Inc",
          "Republic Services Inc",
          "Revlon Inc",
          "RGS Energy Group Inc",
          "Rite Aid Corp",
          "Riverwood Holding Inc.",
          "RoadwayCorp",
          "Robert Half International Inc.",
          "Rock-Tenn Co",
          "Rockwell Automation Inc",
          "Rockwell Collins Inc",
          "Rohm & Haas Co.",
          "Ross Stores Inc",
          "RPM Inc.",
          "Ruddick Corp",
          "Ryder System Inc",
          "Ryerson Tull Inc",
          "Ryland Group Inc.",
          "Sabre Holdings Corp",
          "Safeco Corp",
          "Safeguard Scientifics Inc.",
          "Safeway Inc",
          "Saks Inc",
          "Sanmina-SCI Inc",
          "Sara Lee Corp",
          "SBC Communications Inc",
          "Scana Corp.",
          "Schering-Plough Corp",
          "Scholastic Corp",
          "SCI Systems Onc.",
          "Science Applications Intl. Inc.",
          "Scientific-Atlanta Inc",
          "Scotts Company",
          "Seaboard Corp",
          "Sealed Air Corp",
          "Sears Roebuck & Co",
          "Sempra Energy",
          "Sequa Corp",
          "Service Corp. International",
          "ServiceMaster Co",
          "Shaw Group Inc",
          "Sherwin-Williams Company",
          "Shopko Stores Inc",
          "Siebel Systems Inc",
          "Sierra Health Services Inc",
          "Sierra Pacific Resources",
          "Silgan Holdings Inc.",
          "Silicon Graphics Inc",
          "Simon Property Group Inc",
          "SLM Corporation",
          "Smith International Inc",
          "Smithfield Foods Inc",
          "Smurfit-Stone Container Corp",
          "Snap-On Inc",
          "Solectron Corp",
          "Solutia Inc",
          "Sonic Automotive Inc.",
          "Sonoco Products Co.",
          "Southern Company",
          "Southern Union Company",
          "SouthTrust Corp.",
          "Southwest Airlines Co",
          "Southwest Gas Corp",
          "Sovereign Bancorp Inc.",
          "Spartan Stores Inc",
          "Spherion Corp",
          "Sports Authority Inc",
          "Sprint Corp.",
          "SPX Corp",
          "St. Jude Medical Inc",
          "St. Paul Cos.",
          "Staff Leasing Inc.",
          "StanCorp Financial Group Inc",
          "Standard Pacific Corp.",
          "Stanley Works",
          "Staples Inc",
          "Starbucks Corp",
          "Starwood Hotels & Resorts Worldwide Inc",
          "State Street Corp.",
          "Stater Bros. Holdings Inc.",
          "Steelcase Inc",
          "Stein Mart Inc",
          "Stewart & Stevenson Services Inc",
          "Stewart Information Services Corp",
          "Stilwell Financial Inc",
          "Storage Technology Corporation",
          "Stryker Corp",
          "Sun Healthcare Group Inc.",
          "Sun Microsystems Inc.",
          "SunGard Data Systems Inc.",
          "Sunoco Inc.",
          "SunTrust Banks Inc",
          "Supervalu Inc",
          "Swift Transportation, Co., Inc",
          "Symbol Technologies Inc",
          "Synovus Financial Corp.",
          "Sysco Corp",
          "Systemax Inc.",
          "Target Corp.",
          "Tech Data Corporation",
          "TECO Energy Inc",
          "Tecumseh Products Company",
          "Tektronix Inc",
          "Teleflex Incorporated",
          "Telephone & Data Systems Inc",
          "Tellabs Inc.",
          "Temple-Inland Inc",
          "Tenet Healthcare Corporation",
          "Tenneco Automotive Inc.",
          "Teradyne Inc",
          "Terex Corp",
          "Tesoro Petroleum Corp.",
          "Texas Industries Inc.",
          "Texas Instruments Incorporated",
          "Textron Inc",
          "Thermo Electron Corporation",
          "Thomas & Betts Corporation",
          "Tiffany & Co",
          "Timken Company",
          "TJX Companies Inc",
          "TMP Worldwide Inc",
          "Toll Brothers Inc",
          "Torchmark Corporation",
          "Toro Company",
          "Tower Automotive Inc.",
          "Toys 'R' Us Inc",
          "Trans World Entertainment Corp.",
          "TransMontaigne Inc",
          "Transocean Inc",
          "TravelCenters of America Inc.",
          "Triad Hospitals Inc",
          "Tribune Company",
          "Trigon Healthcare Inc.",
          "Trinity Industries Inc",
          "Trump Hotels & Casino Resorts Inc.",
          "TruServ Corporation",
          "TRW Inc",
          "TXU Corp",
          "Tyson Foods Inc",
          "U.S. Bancorp",
          "U.S. Industries Inc.",
          "UAL Corporation",
          "UGI Corporation",
          "Unified Western Grocers Inc",
          "Union Pacific Corporation",
          "Union Planters Corp",
          "Unisource Energy Corp",
          "Unisys Corporation",
          "United Auto Group Inc",
          "United Defense Industries Inc.",
          "United Parcel Service Inc",
          "United Rentals Inc",
          "United Stationers Inc",
          "United Technologies Corporation",
          "UnitedHealth Group Incorporated",
          "Unitrin Inc",
          "Universal Corporation",
          "Universal Forest Products Inc",
          "Universal Health Services Inc",
          "Unocal Corporation",
          "Unova Inc",
          "UnumProvident Corporation",
          "URS Corporation",
          "US Airways Group Inc",
          "US Oncology Inc",
          "USA Interactive",
          "USFreighways Corporation",
          "USG Corporation",
          "UST Inc",
          "Valero Energy Corporation",
          "Valspar Corporation",
          "Value City Department Stores Inc",
          "Varco International Inc",
          "Vectren Corporation",
          "Veritas Software Corporation",
          "Verizon Communications Inc",
          "VF Corporation",
          "Viacom Inc",
          "Viad Corp",
          "Viasystems Group Inc",
          "Vishay Intertechnology Inc",
          "Visteon Corporation",
          "Volt Information Sciences Inc",
          "Vulcan Materials Company",
          "W.R. Berkley Corporation",
          "W.R. Grace & Co",
          "W.W. Grainger Inc",
          "Wachovia Corporation",
          "Wakenhut Corporation",
          "Walgreen Co",
          "Wallace Computer Services Inc",
          "Wal-Mart Stores Inc",
          "Walt Disney Co",
          "Walter Industries Inc",
          "Washington Mutual Inc",
          "Washington Post Co.",
          "Waste Management Inc",
          "Watsco Inc",
          "Weatherford International Inc",
          "Weis Markets Inc.",
          "Wellpoint Health Networks Inc",
          "Wells Fargo & Company",
          "Wendy's International Inc",
          "Werner Enterprises Inc",
          "WESCO International Inc",
          "Western Digital Inc",
          "Western Gas Resources Inc",
          "WestPoint Stevens Inc",
          "Weyerhauser Company",
          "WGL Holdings Inc",
          "Whirlpool Corporation",
          "Whole Foods Market Inc",
          "Willamette Industries Inc.",
          "Williams Companies Inc",
          "Williams Sonoma Inc",
          "Winn Dixie Stores Inc",
          "Wisconsin Energy Corporation",
          "Wm Wrigley Jr Company",
          "World Fuel Services Corporation",
          "WorldCom Inc",
          "Worthington Industries Inc",
          "WPS Resources Corporation",
          "Wyeth",
          "Wyndham International Inc",
          "Xcel Energy Inc",
          "Xerox Corp",
          "Xilinx Inc",
          "XO Communications Inc",
          "Yellow Corporation",
          "York International Corp",
          "Yum Brands Inc.",
          "Zale Corporation",
          "Zions Bancorporation",
        ],
        fileExtension: {
          raster: [
            "bmp",
            "gif",
            "gpl",
            "ico",
            "jpeg",
            "psd",
            "png",
            "psp",
            "raw",
            "tiff",
          ],
          vector: [
            "3dv",
            "amf",
            "awg",
            "ai",
            "cgm",
            "cdr",
            "cmx",
            "dxf",
            "e2d",
            "egt",
            "eps",
            "fs",
            "odg",
            "svg",
            "xar",
          ],
          "3d": [
            "3dmf",
            "3dm",
            "3mf",
            "3ds",
            "an8",
            "aoi",
            "blend",
            "cal3d",
            "cob",
            "ctm",
            "iob",
            "jas",
            "max",
            "mb",
            "mdx",
            "obj",
            "x",
            "x3d",
          ],
          document: [
            "doc",
            "docx",
            "dot",
            "html",
            "xml",
            "odt",
            "odm",
            "ott",
            "csv",
            "rtf",
            "tex",
            "xhtml",
            "xps",
          ],
        },
        timezones: [
          {
            name: "Dateline Standard Time",
            abbr: "DST",
            offset: -12,
            isdst: !1,
            text: "(UTC-12:00) International Date Line West",
            utc: ["Etc/GMT+12"],
          },
          {
            name: "UTC-11",
            abbr: "U",
            offset: -11,
            isdst: !1,
            text: "(UTC-11:00) Coordinated Universal Time-11",
            utc: [
              "Etc/GMT+11",
              "Pacific/Midway",
              "Pacific/Niue",
              "Pacific/Pago_Pago",
            ],
          },
          {
            name: "Hawaiian Standard Time",
            abbr: "HST",
            offset: -10,
            isdst: !1,
            text: "(UTC-10:00) Hawaii",
            utc: [
              "Etc/GMT+10",
              "Pacific/Honolulu",
              "Pacific/Johnston",
              "Pacific/Rarotonga",
              "Pacific/Tahiti",
            ],
          },
          {
            name: "Alaskan Standard Time",
            abbr: "AKDT",
            offset: -8,
            isdst: !0,
            text: "(UTC-09:00) Alaska",
            utc: [
              "America/Anchorage",
              "America/Juneau",
              "America/Nome",
              "America/Sitka",
              "America/Yakutat",
            ],
          },
          {
            name: "Pacific Standard Time (Mexico)",
            abbr: "PDT",
            offset: -7,
            isdst: !0,
            text: "(UTC-08:00) Baja California",
            utc: ["America/Santa_Isabel"],
          },
          {
            name: "Pacific Daylight Time",
            abbr: "PDT",
            offset: -7,
            isdst: !0,
            text: "(UTC-07:00) Pacific Time (US & Canada)",
            utc: [
              "America/Dawson",
              "America/Los_Angeles",
              "America/Tijuana",
              "America/Vancouver",
              "America/Whitehorse",
            ],
          },
          {
            name: "Pacific Standard Time",
            abbr: "PST",
            offset: -8,
            isdst: !1,
            text: "(UTC-08:00) Pacific Time (US & Canada)",
            utc: [
              "America/Dawson",
              "America/Los_Angeles",
              "America/Tijuana",
              "America/Vancouver",
              "America/Whitehorse",
              "PST8PDT",
            ],
          },
          {
            name: "US Mountain Standard Time",
            abbr: "UMST",
            offset: -7,
            isdst: !1,
            text: "(UTC-07:00) Arizona",
            utc: [
              "America/Creston",
              "America/Dawson_Creek",
              "America/Hermosillo",
              "America/Phoenix",
              "Etc/GMT+7",
            ],
          },
          {
            name: "Mountain Standard Time (Mexico)",
            abbr: "MDT",
            offset: -6,
            isdst: !0,
            text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
            utc: ["America/Chihuahua", "America/Mazatlan"],
          },
          {
            name: "Mountain Standard Time",
            abbr: "MDT",
            offset: -6,
            isdst: !0,
            text: "(UTC-07:00) Mountain Time (US & Canada)",
            utc: [
              "America/Boise",
              "America/Cambridge_Bay",
              "America/Denver",
              "America/Edmonton",
              "America/Inuvik",
              "America/Ojinaga",
              "America/Yellowknife",
              "MST7MDT",
            ],
          },
          {
            name: "Central America Standard Time",
            abbr: "CAST",
            offset: -6,
            isdst: !1,
            text: "(UTC-06:00) Central America",
            utc: [
              "America/Belize",
              "America/Costa_Rica",
              "America/El_Salvador",
              "America/Guatemala",
              "America/Managua",
              "America/Tegucigalpa",
              "Etc/GMT+6",
              "Pacific/Galapagos",
            ],
          },
          {
            name: "Central Standard Time",
            abbr: "CDT",
            offset: -5,
            isdst: !0,
            text: "(UTC-06:00) Central Time (US & Canada)",
            utc: [
              "America/Chicago",
              "America/Indiana/Knox",
              "America/Indiana/Tell_City",
              "America/Matamoros",
              "America/Menominee",
              "America/North_Dakota/Beulah",
              "America/North_Dakota/Center",
              "America/North_Dakota/New_Salem",
              "America/Rainy_River",
              "America/Rankin_Inlet",
              "America/Resolute",
              "America/Winnipeg",
              "CST6CDT",
            ],
          },
          {
            name: "Central Standard Time (Mexico)",
            abbr: "CDT",
            offset: -5,
            isdst: !0,
            text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
            utc: [
              "America/Bahia_Banderas",
              "America/Cancun",
              "America/Merida",
              "America/Mexico_City",
              "America/Monterrey",
            ],
          },
          {
            name: "Canada Central Standard Time",
            abbr: "CCST",
            offset: -6,
            isdst: !1,
            text: "(UTC-06:00) Saskatchewan",
            utc: ["America/Regina", "America/Swift_Current"],
          },
          {
            name: "SA Pacific Standard Time",
            abbr: "SPST",
            offset: -5,
            isdst: !1,
            text: "(UTC-05:00) Bogota, Lima, Quito",
            utc: [
              "America/Bogota",
              "America/Cayman",
              "America/Coral_Harbour",
              "America/Eirunepe",
              "America/Guayaquil",
              "America/Jamaica",
              "America/Lima",
              "America/Panama",
              "America/Rio_Branco",
              "Etc/GMT+5",
            ],
          },
          {
            name: "Eastern Standard Time",
            abbr: "EDT",
            offset: -4,
            isdst: !0,
            text: "(UTC-05:00) Eastern Time (US & Canada)",
            utc: [
              "America/Detroit",
              "America/Havana",
              "America/Indiana/Petersburg",
              "America/Indiana/Vincennes",
              "America/Indiana/Winamac",
              "America/Iqaluit",
              "America/Kentucky/Monticello",
              "America/Louisville",
              "America/Montreal",
              "America/Nassau",
              "America/New_York",
              "America/Nipigon",
              "America/Pangnirtung",
              "America/Port-au-Prince",
              "America/Thunder_Bay",
              "America/Toronto",
              "EST5EDT",
            ],
          },
          {
            name: "US Eastern Standard Time",
            abbr: "UEDT",
            offset: -4,
            isdst: !0,
            text: "(UTC-05:00) Indiana (East)",
            utc: [
              "America/Indiana/Marengo",
              "America/Indiana/Vevay",
              "America/Indianapolis",
            ],
          },
          {
            name: "Venezuela Standard Time",
            abbr: "VST",
            offset: -4.5,
            isdst: !1,
            text: "(UTC-04:30) Caracas",
            utc: ["America/Caracas"],
          },
          {
            name: "Paraguay Standard Time",
            abbr: "PYT",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Asuncion",
            utc: ["America/Asuncion"],
          },
          {
            name: "Atlantic Standard Time",
            abbr: "ADT",
            offset: -3,
            isdst: !0,
            text: "(UTC-04:00) Atlantic Time (Canada)",
            utc: [
              "America/Glace_Bay",
              "America/Goose_Bay",
              "America/Halifax",
              "America/Moncton",
              "America/Thule",
              "Atlantic/Bermuda",
            ],
          },
          {
            name: "Central Brazilian Standard Time",
            abbr: "CBST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Cuiaba",
            utc: ["America/Campo_Grande", "America/Cuiaba"],
          },
          {
            name: "SA Western Standard Time",
            abbr: "SWST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
            utc: [
              "America/Anguilla",
              "America/Antigua",
              "America/Aruba",
              "America/Barbados",
              "America/Blanc-Sablon",
              "America/Boa_Vista",
              "America/Curacao",
              "America/Dominica",
              "America/Grand_Turk",
              "America/Grenada",
              "America/Guadeloupe",
              "America/Guyana",
              "America/Kralendijk",
              "America/La_Paz",
              "America/Lower_Princes",
              "America/Manaus",
              "America/Marigot",
              "America/Martinique",
              "America/Montserrat",
              "America/Port_of_Spain",
              "America/Porto_Velho",
              "America/Puerto_Rico",
              "America/Santo_Domingo",
              "America/St_Barthelemy",
              "America/St_Kitts",
              "America/St_Lucia",
              "America/St_Thomas",
              "America/St_Vincent",
              "America/Tortola",
              "Etc/GMT+4",
            ],
          },
          {
            name: "Pacific SA Standard Time",
            abbr: "PSST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Santiago",
            utc: ["America/Santiago", "Antarctica/Palmer"],
          },
          {
            name: "Newfoundland Standard Time",
            abbr: "NDT",
            offset: -2.5,
            isdst: !0,
            text: "(UTC-03:30) Newfoundland",
            utc: ["America/St_Johns"],
          },
          {
            name: "E. South America Standard Time",
            abbr: "ESAST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Brasilia",
            utc: ["America/Sao_Paulo"],
          },
          {
            name: "Argentina Standard Time",
            abbr: "AST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Buenos Aires",
            utc: [
              "America/Argentina/La_Rioja",
              "America/Argentina/Rio_Gallegos",
              "America/Argentina/Salta",
              "America/Argentina/San_Juan",
              "America/Argentina/San_Luis",
              "America/Argentina/Tucuman",
              "America/Argentina/Ushuaia",
              "America/Buenos_Aires",
              "America/Catamarca",
              "America/Cordoba",
              "America/Jujuy",
              "America/Mendoza",
            ],
          },
          {
            name: "SA Eastern Standard Time",
            abbr: "SEST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Cayenne, Fortaleza",
            utc: [
              "America/Araguaina",
              "America/Belem",
              "America/Cayenne",
              "America/Fortaleza",
              "America/Maceio",
              "America/Paramaribo",
              "America/Recife",
              "America/Santarem",
              "Antarctica/Rothera",
              "Atlantic/Stanley",
              "Etc/GMT+3",
            ],
          },
          {
            name: "Greenland Standard Time",
            abbr: "GDT",
            offset: -3,
            isdst: !0,
            text: "(UTC-03:00) Greenland",
            utc: ["America/Godthab"],
          },
          {
            name: "Montevideo Standard Time",
            abbr: "MST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Montevideo",
            utc: ["America/Montevideo"],
          },
          {
            name: "Bahia Standard Time",
            abbr: "BST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Salvador",
            utc: ["America/Bahia"],
          },
          {
            name: "UTC-02",
            abbr: "U",
            offset: -2,
            isdst: !1,
            text: "(UTC-02:00) Coordinated Universal Time-02",
            utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"],
          },
          {
            name: "Mid-Atlantic Standard Time",
            abbr: "MDT",
            offset: -1,
            isdst: !0,
            text: "(UTC-02:00) Mid-Atlantic - Old",
            utc: [],
          },
          {
            name: "Azores Standard Time",
            abbr: "ADT",
            offset: 0,
            isdst: !0,
            text: "(UTC-01:00) Azores",
            utc: ["America/Scoresbysund", "Atlantic/Azores"],
          },
          {
            name: "Cape Verde Standard Time",
            abbr: "CVST",
            offset: -1,
            isdst: !1,
            text: "(UTC-01:00) Cape Verde Is.",
            utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"],
          },
          {
            name: "Morocco Standard Time",
            abbr: "MDT",
            offset: 1,
            isdst: !0,
            text: "(UTC) Casablanca",
            utc: ["Africa/Casablanca", "Africa/El_Aaiun"],
          },
          {
            name: "UTC",
            abbr: "UTC",
            offset: 0,
            isdst: !1,
            text: "(UTC) Coordinated Universal Time",
            utc: ["America/Danmarkshavn", "Etc/GMT"],
          },
          {
            name: "GMT Standard Time",
            abbr: "GMT",
            offset: 0,
            isdst: !1,
            text: "(UTC) Edinburgh, London",
            utc: [
              "Europe/Isle_of_Man",
              "Europe/Guernsey",
              "Europe/Jersey",
              "Europe/London",
            ],
          },
          {
            name: "British Summer Time",
            abbr: "BST",
            offset: 1,
            isdst: !0,
            text: "(UTC+01:00) Edinburgh, London",
            utc: [
              "Europe/Isle_of_Man",
              "Europe/Guernsey",
              "Europe/Jersey",
              "Europe/London",
            ],
          },
          {
            name: "GMT Standard Time",
            abbr: "GDT",
            offset: 1,
            isdst: !0,
            text: "(UTC) Dublin, Lisbon",
            utc: [
              "Atlantic/Canary",
              "Atlantic/Faeroe",
              "Atlantic/Madeira",
              "Europe/Dublin",
              "Europe/Lisbon",
            ],
          },
          {
            name: "Greenwich Standard Time",
            abbr: "GST",
            offset: 0,
            isdst: !1,
            text: "(UTC) Monrovia, Reykjavik",
            utc: [
              "Africa/Abidjan",
              "Africa/Accra",
              "Africa/Bamako",
              "Africa/Banjul",
              "Africa/Bissau",
              "Africa/Conakry",
              "Africa/Dakar",
              "Africa/Freetown",
              "Africa/Lome",
              "Africa/Monrovia",
              "Africa/Nouakchott",
              "Africa/Ouagadougou",
              "Africa/Sao_Tome",
              "Atlantic/Reykjavik",
              "Atlantic/St_Helena",
            ],
          },
          {
            name: "W. Europe Standard Time",
            abbr: "WEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
            utc: [
              "Arctic/Longyearbyen",
              "Europe/Amsterdam",
              "Europe/Andorra",
              "Europe/Berlin",
              "Europe/Busingen",
              "Europe/Gibraltar",
              "Europe/Luxembourg",
              "Europe/Malta",
              "Europe/Monaco",
              "Europe/Oslo",
              "Europe/Rome",
              "Europe/San_Marino",
              "Europe/Stockholm",
              "Europe/Vaduz",
              "Europe/Vatican",
              "Europe/Vienna",
              "Europe/Zurich",
            ],
          },
          {
            name: "Central Europe Standard Time",
            abbr: "CEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
            utc: [
              "Europe/Belgrade",
              "Europe/Bratislava",
              "Europe/Budapest",
              "Europe/Ljubljana",
              "Europe/Podgorica",
              "Europe/Prague",
              "Europe/Tirane",
            ],
          },
          {
            name: "Romance Standard Time",
            abbr: "RDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
            utc: [
              "Africa/Ceuta",
              "Europe/Brussels",
              "Europe/Copenhagen",
              "Europe/Madrid",
              "Europe/Paris",
            ],
          },
          {
            name: "Central European Standard Time",
            abbr: "CEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
            utc: [
              "Europe/Sarajevo",
              "Europe/Skopje",
              "Europe/Warsaw",
              "Europe/Zagreb",
            ],
          },
          {
            name: "W. Central Africa Standard Time",
            abbr: "WCAST",
            offset: 1,
            isdst: !1,
            text: "(UTC+01:00) West Central Africa",
            utc: [
              "Africa/Algiers",
              "Africa/Bangui",
              "Africa/Brazzaville",
              "Africa/Douala",
              "Africa/Kinshasa",
              "Africa/Lagos",
              "Africa/Libreville",
              "Africa/Luanda",
              "Africa/Malabo",
              "Africa/Ndjamena",
              "Africa/Niamey",
              "Africa/Porto-Novo",
              "Africa/Tunis",
              "Etc/GMT-1",
            ],
          },
          {
            name: "Namibia Standard Time",
            abbr: "NST",
            offset: 1,
            isdst: !1,
            text: "(UTC+01:00) Windhoek",
            utc: ["Africa/Windhoek"],
          },
          {
            name: "GTB Standard Time",
            abbr: "GDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Athens, Bucharest",
            utc: [
              "Asia/Nicosia",
              "Europe/Athens",
              "Europe/Bucharest",
              "Europe/Chisinau",
            ],
          },
          {
            name: "Middle East Standard Time",
            abbr: "MEDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Beirut",
            utc: ["Asia/Beirut"],
          },
          {
            name: "Egypt Standard Time",
            abbr: "EST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Cairo",
            utc: ["Africa/Cairo"],
          },
          {
            name: "Syria Standard Time",
            abbr: "SDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Damascus",
            utc: ["Asia/Damascus"],
          },
          {
            name: "E. Europe Standard Time",
            abbr: "EEDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) E. Europe",
            utc: [
              "Asia/Nicosia",
              "Europe/Athens",
              "Europe/Bucharest",
              "Europe/Chisinau",
              "Europe/Helsinki",
              "Europe/Kiev",
              "Europe/Mariehamn",
              "Europe/Nicosia",
              "Europe/Riga",
              "Europe/Sofia",
              "Europe/Tallinn",
              "Europe/Uzhgorod",
              "Europe/Vilnius",
              "Europe/Zaporozhye",
            ],
          },
          {
            name: "South Africa Standard Time",
            abbr: "SAST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Harare, Pretoria",
            utc: [
              "Africa/Blantyre",
              "Africa/Bujumbura",
              "Africa/Gaborone",
              "Africa/Harare",
              "Africa/Johannesburg",
              "Africa/Kigali",
              "Africa/Lubumbashi",
              "Africa/Lusaka",
              "Africa/Maputo",
              "Africa/Maseru",
              "Africa/Mbabane",
              "Etc/GMT-2",
            ],
          },
          {
            name: "FLE Standard Time",
            abbr: "FDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
            utc: [
              "Europe/Helsinki",
              "Europe/Kiev",
              "Europe/Mariehamn",
              "Europe/Riga",
              "Europe/Sofia",
              "Europe/Tallinn",
              "Europe/Uzhgorod",
              "Europe/Vilnius",
              "Europe/Zaporozhye",
            ],
          },
          {
            name: "Turkey Standard Time",
            abbr: "TDT",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Istanbul",
            utc: ["Europe/Istanbul"],
          },
          {
            name: "Israel Standard Time",
            abbr: "JDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Jerusalem",
            utc: ["Asia/Jerusalem"],
          },
          {
            name: "Libya Standard Time",
            abbr: "LST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Tripoli",
            utc: ["Africa/Tripoli"],
          },
          {
            name: "Jordan Standard Time",
            abbr: "JST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Amman",
            utc: ["Asia/Amman"],
          },
          {
            name: "Arabic Standard Time",
            abbr: "AST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Baghdad",
            utc: ["Asia/Baghdad"],
          },
          {
            name: "Kaliningrad Standard Time",
            abbr: "KST",
            offset: 3,
            isdst: !1,
            text: "(UTC+02:00) Kaliningrad",
            utc: ["Europe/Kaliningrad"],
          },
          {
            name: "Arab Standard Time",
            abbr: "AST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Kuwait, Riyadh",
            utc: [
              "Asia/Aden",
              "Asia/Bahrain",
              "Asia/Kuwait",
              "Asia/Qatar",
              "Asia/Riyadh",
            ],
          },
          {
            name: "E. Africa Standard Time",
            abbr: "EAST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Nairobi",
            utc: [
              "Africa/Addis_Ababa",
              "Africa/Asmera",
              "Africa/Dar_es_Salaam",
              "Africa/Djibouti",
              "Africa/Juba",
              "Africa/Kampala",
              "Africa/Khartoum",
              "Africa/Mogadishu",
              "Africa/Nairobi",
              "Antarctica/Syowa",
              "Etc/GMT-3",
              "Indian/Antananarivo",
              "Indian/Comoro",
              "Indian/Mayotte",
            ],
          },
          {
            name: "Moscow Standard Time",
            abbr: "MSK",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
            utc: [
              "Europe/Kirov",
              "Europe/Moscow",
              "Europe/Simferopol",
              "Europe/Volgograd",
              "Europe/Minsk",
            ],
          },
          {
            name: "Samara Time",
            abbr: "SAMT",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
            utc: ["Europe/Astrakhan", "Europe/Samara", "Europe/Ulyanovsk"],
          },
          {
            name: "Iran Standard Time",
            abbr: "IDT",
            offset: 4.5,
            isdst: !0,
            text: "(UTC+03:30) Tehran",
            utc: ["Asia/Tehran"],
          },
          {
            name: "Arabian Standard Time",
            abbr: "AST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Abu Dhabi, Muscat",
            utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"],
          },
          {
            name: "Azerbaijan Standard Time",
            abbr: "ADT",
            offset: 5,
            isdst: !0,
            text: "(UTC+04:00) Baku",
            utc: ["Asia/Baku"],
          },
          {
            name: "Mauritius Standard Time",
            abbr: "MST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Port Louis",
            utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"],
          },
          {
            name: "Georgian Standard Time",
            abbr: "GET",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Tbilisi",
            utc: ["Asia/Tbilisi"],
          },
          {
            name: "Caucasus Standard Time",
            abbr: "CST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Yerevan",
            utc: ["Asia/Yerevan"],
          },
          {
            name: "Afghanistan Standard Time",
            abbr: "AST",
            offset: 4.5,
            isdst: !1,
            text: "(UTC+04:30) Kabul",
            utc: ["Asia/Kabul"],
          },
          {
            name: "West Asia Standard Time",
            abbr: "WAST",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Ashgabat, Tashkent",
            utc: [
              "Antarctica/Mawson",
              "Asia/Aqtau",
              "Asia/Aqtobe",
              "Asia/Ashgabat",
              "Asia/Dushanbe",
              "Asia/Oral",
              "Asia/Samarkand",
              "Asia/Tashkent",
              "Etc/GMT-5",
              "Indian/Kerguelen",
              "Indian/Maldives",
            ],
          },
          {
            name: "Yekaterinburg Time",
            abbr: "YEKT",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Yekaterinburg",
            utc: ["Asia/Yekaterinburg"],
          },
          {
            name: "Pakistan Standard Time",
            abbr: "PKT",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Islamabad, Karachi",
            utc: ["Asia/Karachi"],
          },
          {
            name: "India Standard Time",
            abbr: "IST",
            offset: 5.5,
            isdst: !1,
            text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
            utc: ["Asia/Kolkata"],
          },
          {
            name: "Sri Lanka Standard Time",
            abbr: "SLST",
            offset: 5.5,
            isdst: !1,
            text: "(UTC+05:30) Sri Jayawardenepura",
            utc: ["Asia/Colombo"],
          },
          {
            name: "Nepal Standard Time",
            abbr: "NST",
            offset: 5.75,
            isdst: !1,
            text: "(UTC+05:45) Kathmandu",
            utc: ["Asia/Kathmandu"],
          },
          {
            name: "Central Asia Standard Time",
            abbr: "CAST",
            offset: 6,
            isdst: !1,
            text: "(UTC+06:00) Nur-Sultan (Astana)",
            utc: [
              "Antarctica/Vostok",
              "Asia/Almaty",
              "Asia/Bishkek",
              "Asia/Qyzylorda",
              "Asia/Urumqi",
              "Etc/GMT-6",
              "Indian/Chagos",
            ],
          },
          {
            name: "Bangladesh Standard Time",
            abbr: "BST",
            offset: 6,
            isdst: !1,
            text: "(UTC+06:00) Dhaka",
            utc: ["Asia/Dhaka", "Asia/Thimphu"],
          },
          {
            name: "Myanmar Standard Time",
            abbr: "MST",
            offset: 6.5,
            isdst: !1,
            text: "(UTC+06:30) Yangon (Rangoon)",
            utc: ["Asia/Rangoon", "Indian/Cocos"],
          },
          {
            name: "SE Asia Standard Time",
            abbr: "SAST",
            offset: 7,
            isdst: !1,
            text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
            utc: [
              "Antarctica/Davis",
              "Asia/Bangkok",
              "Asia/Hovd",
              "Asia/Jakarta",
              "Asia/Phnom_Penh",
              "Asia/Pontianak",
              "Asia/Saigon",
              "Asia/Vientiane",
              "Etc/GMT-7",
              "Indian/Christmas",
            ],
          },
          {
            name: "N. Central Asia Standard Time",
            abbr: "NCAST",
            offset: 7,
            isdst: !1,
            text: "(UTC+07:00) Novosibirsk",
            utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"],
          },
          {
            name: "China Standard Time",
            abbr: "CST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
            utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"],
          },
          {
            name: "North Asia Standard Time",
            abbr: "NAST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Krasnoyarsk",
            utc: ["Asia/Krasnoyarsk"],
          },
          {
            name: "Singapore Standard Time",
            abbr: "MPST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Kuala Lumpur, Singapore",
            utc: [
              "Asia/Brunei",
              "Asia/Kuala_Lumpur",
              "Asia/Kuching",
              "Asia/Makassar",
              "Asia/Manila",
              "Asia/Singapore",
              "Etc/GMT-8",
            ],
          },
          {
            name: "W. Australia Standard Time",
            abbr: "WAST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Perth",
            utc: ["Antarctica/Casey", "Australia/Perth"],
          },
          {
            name: "Taipei Standard Time",
            abbr: "TST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Taipei",
            utc: ["Asia/Taipei"],
          },
          {
            name: "Ulaanbaatar Standard Time",
            abbr: "UST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Ulaanbaatar",
            utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"],
          },
          {
            name: "North Asia East Standard Time",
            abbr: "NAEST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Irkutsk",
            utc: ["Asia/Irkutsk"],
          },
          {
            name: "Japan Standard Time",
            abbr: "JST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
            utc: [
              "Asia/Dili",
              "Asia/Jayapura",
              "Asia/Tokyo",
              "Etc/GMT-9",
              "Pacific/Palau",
            ],
          },
          {
            name: "Korea Standard Time",
            abbr: "KST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Seoul",
            utc: ["Asia/Pyongyang", "Asia/Seoul"],
          },
          {
            name: "Cen. Australia Standard Time",
            abbr: "CAST",
            offset: 9.5,
            isdst: !1,
            text: "(UTC+09:30) Adelaide",
            utc: ["Australia/Adelaide", "Australia/Broken_Hill"],
          },
          {
            name: "AUS Central Standard Time",
            abbr: "ACST",
            offset: 9.5,
            isdst: !1,
            text: "(UTC+09:30) Darwin",
            utc: ["Australia/Darwin"],
          },
          {
            name: "E. Australia Standard Time",
            abbr: "EAST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Brisbane",
            utc: ["Australia/Brisbane", "Australia/Lindeman"],
          },
          {
            name: "AUS Eastern Standard Time",
            abbr: "AEST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Canberra, Melbourne, Sydney",
            utc: ["Australia/Melbourne", "Australia/Sydney"],
          },
          {
            name: "West Pacific Standard Time",
            abbr: "WPST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Guam, Port Moresby",
            utc: [
              "Antarctica/DumontDUrville",
              "Etc/GMT-10",
              "Pacific/Guam",
              "Pacific/Port_Moresby",
              "Pacific/Saipan",
              "Pacific/Truk",
            ],
          },
          {
            name: "Tasmania Standard Time",
            abbr: "TST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Hobart",
            utc: ["Australia/Currie", "Australia/Hobart"],
          },
          {
            name: "Yakutsk Standard Time",
            abbr: "YST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Yakutsk",
            utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"],
          },
          {
            name: "Central Pacific Standard Time",
            abbr: "CPST",
            offset: 11,
            isdst: !1,
            text: "(UTC+11:00) Solomon Is., New Caledonia",
            utc: [
              "Antarctica/Macquarie",
              "Etc/GMT-11",
              "Pacific/Efate",
              "Pacific/Guadalcanal",
              "Pacific/Kosrae",
              "Pacific/Noumea",
              "Pacific/Ponape",
            ],
          },
          {
            name: "Vladivostok Standard Time",
            abbr: "VST",
            offset: 11,
            isdst: !1,
            text: "(UTC+11:00) Vladivostok",
            utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"],
          },
          {
            name: "New Zealand Standard Time",
            abbr: "NZST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Auckland, Wellington",
            utc: ["Antarctica/McMurdo", "Pacific/Auckland"],
          },
          {
            name: "UTC+12",
            abbr: "U",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Coordinated Universal Time+12",
            utc: [
              "Etc/GMT-12",
              "Pacific/Funafuti",
              "Pacific/Kwajalein",
              "Pacific/Majuro",
              "Pacific/Nauru",
              "Pacific/Tarawa",
              "Pacific/Wake",
              "Pacific/Wallis",
            ],
          },
          {
            name: "Fiji Standard Time",
            abbr: "FST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Fiji",
            utc: ["Pacific/Fiji"],
          },
          {
            name: "Magadan Standard Time",
            abbr: "MST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Magadan",
            utc: [
              "Asia/Anadyr",
              "Asia/Kamchatka",
              "Asia/Magadan",
              "Asia/Srednekolymsk",
            ],
          },
          {
            name: "Kamchatka Standard Time",
            abbr: "KDT",
            offset: 13,
            isdst: !0,
            text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
            utc: ["Asia/Kamchatka"],
          },
          {
            name: "Tonga Standard Time",
            abbr: "TST",
            offset: 13,
            isdst: !1,
            text: "(UTC+13:00) Nuku'alofa",
            utc: [
              "Etc/GMT-13",
              "Pacific/Enderbury",
              "Pacific/Fakaofo",
              "Pacific/Tongatapu",
            ],
          },
          {
            name: "Samoa Standard Time",
            abbr: "SST",
            offset: 13,
            isdst: !1,
            text: "(UTC+13:00) Samoa",
            utc: ["Pacific/Apia"],
          },
        ],
        profession: [
          "Airline Pilot",
          "Academic Team",
          "Accountant",
          "Account Executive",
          "Actor",
          "Actuary",
          "Acquisition Analyst",
          "Administrative Asst.",
          "Administrative Analyst",
          "Administrator",
          "Advertising Director",
          "Aerospace Engineer",
          "Agent",
          "Agricultural Inspector",
          "Agricultural Scientist",
          "Air Traffic Controller",
          "Animal Trainer",
          "Anthropologist",
          "Appraiser",
          "Architect",
          "Art Director",
          "Artist",
          "Astronomer",
          "Athletic Coach",
          "Auditor",
          "Author",
          "Baker",
          "Banker",
          "Bankruptcy Attorney",
          "Benefits Manager",
          "Biologist",
          "Bio-feedback Specialist",
          "Biomedical Engineer",
          "Biotechnical Researcher",
          "Broadcaster",
          "Broker",
          "Building Manager",
          "Building Contractor",
          "Building Inspector",
          "Business Analyst",
          "Business Planner",
          "Business Manager",
          "Buyer",
          "Call Center Manager",
          "Career Counselor",
          "Cash Manager",
          "Ceramic Engineer",
          "Chief Executive Officer",
          "Chief Operation Officer",
          "Chef",
          "Chemical Engineer",
          "Chemist",
          "Child Care Manager",
          "Chief Medical Officer",
          "Chiropractor",
          "Cinematographer",
          "City Housing Manager",
          "City Manager",
          "Civil Engineer",
          "Claims Manager",
          "Clinical Research Assistant",
          "Collections Manager",
          "Compliance Manager",
          "Comptroller",
          "Computer Manager",
          "Commercial Artist",
          "Communications Affairs Director",
          "Communications Director",
          "Communications Engineer",
          "Compensation Analyst",
          "Computer Programmer",
          "Computer Ops. Manager",
          "Computer Engineer",
          "Computer Operator",
          "Computer Graphics Specialist",
          "Construction Engineer",
          "Construction Manager",
          "Consultant",
          "Consumer Relations Manager",
          "Contract Administrator",
          "Copyright Attorney",
          "Copywriter",
          "Corporate Planner",
          "Corrections Officer",
          "Cosmetologist",
          "Credit Analyst",
          "Cruise Director",
          "Chief Information Officer",
          "Chief Technology Officer",
          "Customer Service Manager",
          "Cryptologist",
          "Dancer",
          "Data Security Manager",
          "Database Manager",
          "Day Care Instructor",
          "Dentist",
          "Designer",
          "Design Engineer",
          "Desktop Publisher",
          "Developer",
          "Development Officer",
          "Diamond Merchant",
          "Dietitian",
          "Direct Marketer",
          "Director",
          "Distribution Manager",
          "Diversity Manager",
          "Economist",
          "EEO Compliance Manager",
          "Editor",
          "Education Adminator",
          "Electrical Engineer",
          "Electro Optical Engineer",
          "Electronics Engineer",
          "Embassy Management",
          "Employment Agent",
          "Engineer Technician",
          "Entrepreneur",
          "Environmental Analyst",
          "Environmental Attorney",
          "Environmental Engineer",
          "Environmental Specialist",
          "Escrow Officer",
          "Estimator",
          "Executive Assistant",
          "Executive Director",
          "Executive Recruiter",
          "Facilities Manager",
          "Family Counselor",
          "Fashion Events Manager",
          "Fashion Merchandiser",
          "Fast Food Manager",
          "Film Producer",
          "Film Production Assistant",
          "Financial Analyst",
          "Financial Planner",
          "Financier",
          "Fine Artist",
          "Wildlife Specialist",
          "Fitness Consultant",
          "Flight Attendant",
          "Flight Engineer",
          "Floral Designer",
          "Food & Beverage Director",
          "Food Service Manager",
          "Forestry Technician",
          "Franchise Management",
          "Franchise Sales",
          "Fraud Investigator",
          "Freelance Writer",
          "Fund Raiser",
          "General Manager",
          "Geologist",
          "General Counsel",
          "Geriatric Specialist",
          "Gerontologist",
          "Glamour Photographer",
          "Golf Club Manager",
          "Gourmet Chef",
          "Graphic Designer",
          "Grounds Keeper",
          "Hazardous Waste Manager",
          "Health Care Manager",
          "Health Therapist",
          "Health Service Administrator",
          "Hearing Officer",
          "Home Economist",
          "Horticulturist",
          "Hospital Administrator",
          "Hotel Manager",
          "Human Resources Manager",
          "Importer",
          "Industrial Designer",
          "Industrial Engineer",
          "Information Director",
          "Inside Sales",
          "Insurance Adjuster",
          "Interior Decorator",
          "Internal Controls Director",
          "International Acct.",
          "International Courier",
          "International Lawyer",
          "Interpreter",
          "Investigator",
          "Investment Banker",
          "Investment Manager",
          "IT Architect",
          "IT Project Manager",
          "IT Systems Analyst",
          "Jeweler",
          "Joint Venture Manager",
          "Journalist",
          "Labor Negotiator",
          "Labor Organizer",
          "Labor Relations Manager",
          "Lab Services Director",
          "Lab Technician",
          "Land Developer",
          "Landscape Architect",
          "Law Enforcement Officer",
          "Lawyer",
          "Lead Software Engineer",
          "Lead Software Test Engineer",
          "Leasing Manager",
          "Legal Secretary",
          "Library Manager",
          "Litigation Attorney",
          "Loan Officer",
          "Lobbyist",
          "Logistics Manager",
          "Maintenance Manager",
          "Management Consultant",
          "Managed Care Director",
          "Managing Partner",
          "Manufacturing Director",
          "Manpower Planner",
          "Marine Biologist",
          "Market Res. Analyst",
          "Marketing Director",
          "Materials Manager",
          "Mathematician",
          "Membership Chairman",
          "Mechanic",
          "Mechanical Engineer",
          "Media Buyer",
          "Medical Investor",
          "Medical Secretary",
          "Medical Technician",
          "Mental Health Counselor",
          "Merchandiser",
          "Metallurgical Engineering",
          "Meteorologist",
          "Microbiologist",
          "MIS Manager",
          "Motion Picture Director",
          "Multimedia Director",
          "Musician",
          "Network Administrator",
          "Network Specialist",
          "Network Operator",
          "New Product Manager",
          "Novelist",
          "Nuclear Engineer",
          "Nuclear Specialist",
          "Nutritionist",
          "Nursing Administrator",
          "Occupational Therapist",
          "Oceanographer",
          "Office Manager",
          "Operations Manager",
          "Operations Research Director",
          "Optical Technician",
          "Optometrist",
          "Organizational Development Manager",
          "Outplacement Specialist",
          "Paralegal",
          "Park Ranger",
          "Patent Attorney",
          "Payroll Specialist",
          "Personnel Specialist",
          "Petroleum Engineer",
          "Pharmacist",
          "Photographer",
          "Physical Therapist",
          "Physician",
          "Physician Assistant",
          "Physicist",
          "Planning Director",
          "Podiatrist",
          "Political Analyst",
          "Political Scientist",
          "Politician",
          "Portfolio Manager",
          "Preschool Management",
          "Preschool Teacher",
          "Principal",
          "Private Banker",
          "Private Investigator",
          "Probation Officer",
          "Process Engineer",
          "Producer",
          "Product Manager",
          "Product Engineer",
          "Production Engineer",
          "Production Planner",
          "Professional Athlete",
          "Professional Coach",
          "Professor",
          "Project Engineer",
          "Project Manager",
          "Program Manager",
          "Property Manager",
          "Public Administrator",
          "Public Safety Director",
          "PR Specialist",
          "Publisher",
          "Purchasing Agent",
          "Publishing Director",
          "Quality Assurance Specialist",
          "Quality Control Engineer",
          "Quality Control Inspector",
          "Radiology Manager",
          "Railroad Engineer",
          "Real Estate Broker",
          "Recreational Director",
          "Recruiter",
          "Redevelopment Specialist",
          "Regulatory Affairs Manager",
          "Registered Nurse",
          "Rehabilitation Counselor",
          "Relocation Manager",
          "Reporter",
          "Research Specialist",
          "Restaurant Manager",
          "Retail Store Manager",
          "Risk Analyst",
          "Safety Engineer",
          "Sales Engineer",
          "Sales Trainer",
          "Sales Promotion Manager",
          "Sales Representative",
          "Sales Manager",
          "Service Manager",
          "Sanitation Engineer",
          "Scientific Programmer",
          "Scientific Writer",
          "Securities Analyst",
          "Security Consultant",
          "Security Director",
          "Seminar Presenter",
          "Ship's Officer",
          "Singer",
          "Social Director",
          "Social Program Planner",
          "Social Research",
          "Social Scientist",
          "Social Worker",
          "Sociologist",
          "Software Developer",
          "Software Engineer",
          "Software Test Engineer",
          "Soil Scientist",
          "Special Events Manager",
          "Special Education Teacher",
          "Special Projects Director",
          "Speech Pathologist",
          "Speech Writer",
          "Sports Event Manager",
          "Statistician",
          "Store Manager",
          "Strategic Alliance Director",
          "Strategic Planning Director",
          "Stress Reduction Specialist",
          "Stockbroker",
          "Surveyor",
          "Structural Engineer",
          "Superintendent",
          "Supply Chain Director",
          "System Engineer",
          "Systems Analyst",
          "Systems Programmer",
          "System Administrator",
          "Tax Specialist",
          "Teacher",
          "Technical Support Specialist",
          "Technical Illustrator",
          "Technical Writer",
          "Technology Director",
          "Telecom Analyst",
          "Telemarketer",
          "Theatrical Director",
          "Title Examiner",
          "Tour Escort",
          "Tour Guide Director",
          "Traffic Manager",
          "Trainer Translator",
          "Transportation Manager",
          "Travel Agent",
          "Treasurer",
          "TV Programmer",
          "Underwriter",
          "Union Representative",
          "University Administrator",
          "University Dean",
          "Urban Planner",
          "Veterinarian",
          "Vendor Relations Director",
          "Viticulturist",
          "Warehouse Manager",
        ],
        animals: {
          ocean: [
            "Acantharea",
            "Anemone",
            "Angelfish King",
            "Ahi Tuna",
            "Albacore",
            "American Oyster",
            "Anchovy",
            "Armored Snail",
            "Arctic Char",
            "Atlantic Bluefin Tuna",
            "Atlantic Cod",
            "Atlantic Goliath Grouper",
            "Atlantic Trumpetfish",
            "Atlantic Wolffish",
            "Baleen Whale",
            "Banded Butterflyfish",
            "Banded Coral Shrimp",
            "Banded Sea Krait",
            "Barnacle",
            "Barndoor Skate",
            "Barracuda",
            "Basking Shark",
            "Bass",
            "Beluga Whale",
            "Bluebanded Goby",
            "Bluehead Wrasse",
            "Bluefish",
            "Bluestreak Cleaner-Wrasse",
            "Blue Marlin",
            "Blue Shark",
            "Blue Spiny Lobster",
            "Blue Tang",
            "Blue Whale",
            "Broadclub Cuttlefish",
            "Bull Shark",
            "Chambered Nautilus",
            "Chilean Basket Star",
            "Chilean Jack Mackerel",
            "Chinook Salmon",
            "Christmas Tree Worm",
            "Clam",
            "Clown Anemonefish",
            "Clown Triggerfish",
            "Cod",
            "Coelacanth",
            "Cockscomb Cup Coral",
            "Common Fangtooth",
            "Conch",
            "Cookiecutter Shark",
            "Copepod",
            "Coral",
            "Corydoras",
            "Cownose Ray",
            "Crab",
            "Crown-of-Thorns Starfish",
            "Cushion Star",
            "Cuttlefish",
            "California Sea Otters",
            "Dolphin",
            "Dolphinfish",
            "Dory",
            "Devil Fish",
            "Dugong",
            "Dumbo Octopus",
            "Dungeness Crab",
            "Eccentric Sand Dollar",
            "Edible Sea Cucumber",
            "Eel",
            "Elephant Seal",
            "Elkhorn Coral",
            "Emperor Shrimp",
            "Estuarine Crocodile",
            "Fathead Sculpin",
            "Fiddler Crab",
            "Fin Whale",
            "Flameback",
            "Flamingo Tongue Snail",
            "Flashlight Fish",
            "Flatback Turtle",
            "Flatfish",
            "Flying Fish",
            "Flounder",
            "Fluke",
            "French Angelfish",
            "Frilled Shark",
            "Fugu (also called Pufferfish)",
            "Gar",
            "Geoduck",
            "Giant Barrel Sponge",
            "Giant Caribbean Sea Anemone",
            "Giant Clam",
            "Giant Isopod",
            "Giant Kingfish",
            "Giant Oarfish",
            "Giant Pacific Octopus",
            "Giant Pyrosome",
            "Giant Sea Star",
            "Giant Squid",
            "Glowing Sucker Octopus",
            "Giant Tube Worm",
            "Goblin Shark",
            "Goosefish",
            "Great White Shark",
            "Greenland Shark",
            "Grey Atlantic Seal",
            "Grouper",
            "Grunion",
            "Guineafowl Puffer",
            "Haddock",
            "Hake",
            "Halibut",
            "Hammerhead Shark",
            "Hapuka",
            "Harbor Porpoise",
            "Harbor Seal",
            "Hatchetfish",
            "Hawaiian Monk Seal",
            "Hawksbill Turtle",
            "Hector's Dolphin",
            "Hermit Crab",
            "Herring",
            "Hoki",
            "Horn Shark",
            "Horseshoe Crab",
            "Humpback Anglerfish",
            "Humpback Whale",
            "Icefish",
            "Imperator Angelfish",
            "Irukandji Jellyfish",
            "Isopod",
            "Ivory Bush Coral",
            "Japanese Spider Crab",
            "Jellyfish",
            "John Dory",
            "Juan Fernandez Fur Seal",
            "Killer Whale",
            "Kiwa Hirsuta",
            "Krill",
            "Lagoon Triggerfish",
            "Lamprey",
            "Leafy Seadragon",
            "Leopard Seal",
            "Limpet",
            "Ling",
            "Lionfish",
            "Lions Mane Jellyfish",
            "Lobe Coral",
            "Lobster",
            "Loggerhead Turtle",
            "Longnose Sawshark",
            "Longsnout Seahorse",
            "Lophelia Coral",
            "Marrus Orthocanna",
            "Manatee",
            "Manta Ray",
            "Marlin",
            "Megamouth Shark",
            "Mexican Lookdown",
            "Mimic Octopus",
            "Moon Jelly",
            "Mollusk",
            "Monkfish",
            "Moray Eel",
            "Mullet",
            "Mussel",
            "Megaladon",
            "Napoleon Wrasse",
            "Nassau Grouper",
            "Narwhal",
            "Nautilus",
            "Needlefish",
            "Northern Seahorse",
            "North Atlantic Right Whale",
            "Northern Red Snapper",
            "Norway Lobster",
            "Nudibranch",
            "Nurse Shark",
            "Oarfish",
            "Ocean Sunfish",
            "Oceanic Whitetip Shark",
            "Octopus",
            "Olive Sea Snake",
            "Orange Roughy",
            "Ostracod",
            "Otter",
            "Oyster",
            "Pacific Angelshark",
            "Pacific Blackdragon",
            "Pacific Halibut",
            "Pacific Sardine",
            "Pacific Sea Nettle Jellyfish",
            "Pacific White Sided Dolphin",
            "Pantropical Spotted Dolphin",
            "Patagonian Toothfish",
            "Peacock Mantis Shrimp",
            "Pelagic Thresher Shark",
            "Penguin",
            "Peruvian Anchoveta",
            "Pilchard",
            "Pink Salmon",
            "Pinniped",
            "Plankton",
            "Porpoise",
            "Polar Bear",
            "Portuguese Man o' War",
            "Pycnogonid Sea Spider",
            "Quahog",
            "Queen Angelfish",
            "Queen Conch",
            "Queen Parrotfish",
            "Queensland Grouper",
            "Ragfish",
            "Ratfish",
            "Rattail Fish",
            "Ray",
            "Red Drum",
            "Red King Crab",
            "Ringed Seal",
            "Risso's Dolphin",
            "Ross Seals",
            "Sablefish",
            "Salmon",
            "Sand Dollar",
            "Sandbar Shark",
            "Sawfish",
            "Sarcastic Fringehead",
            "Scalloped Hammerhead Shark",
            "Seahorse",
            "Sea Cucumber",
            "Sea Lion",
            "Sea Urchin",
            "Seal",
            "Shark",
            "Shortfin Mako Shark",
            "Shovelnose Guitarfish",
            "Shrimp",
            "Silverside Fish",
            "Skipjack Tuna",
            "Slender Snipe Eel",
            "Smalltooth Sawfish",
            "Smelts",
            "Sockeye Salmon",
            "Southern Stingray",
            "Sponge",
            "Spotted Porcupinefish",
            "Spotted Dolphin",
            "Spotted Eagle Ray",
            "Spotted Moray",
            "Squid",
            "Squidworm",
            "Starfish",
            "Stickleback",
            "Stonefish",
            "Stoplight Loosejaw",
            "Sturgeon",
            "Swordfish",
            "Tan Bristlemouth",
            "Tasseled Wobbegong",
            "Terrible Claw Lobster",
            "Threespot Damselfish",
            "Tiger Prawn",
            "Tiger Shark",
            "Tilefish",
            "Toadfish",
            "Tropical Two-Wing Flyfish",
            "Tuna",
            "Umbrella Squid",
            "Velvet Crab",
            "Venus Flytrap Sea Anemone",
            "Vigtorniella Worm",
            "Viperfish",
            "Vampire Squid",
            "Vaquita",
            "Wahoo",
            "Walrus",
            "West Indian Manatee",
            "Whale",
            "Whale Shark",
            "Whiptail Gulper",
            "White-Beaked Dolphin",
            "White-Ring Garden Eel",
            "White Shrimp",
            "Wobbegong",
            "Wrasse",
            "Wreckfish",
            "Xiphosura",
            "Yellowtail Damselfish",
            "Yelloweye Rockfish",
            "Yellow Cup Black Coral",
            "Yellow Tube Sponge",
            "Yellowfin Tuna",
            "Zebrashark",
            "Zooplankton",
          ],
          desert: [
            "Aardwolf",
            "Addax",
            "African Wild Ass",
            "Ant",
            "Antelope",
            "Armadillo",
            "Baboon",
            "Badger",
            "Bat",
            "Bearded Dragon",
            "Beetle",
            "Bird",
            "Black-footed Cat",
            "Boa",
            "Brown Bear",
            "Bustard",
            "Butterfly",
            "Camel",
            "Caracal",
            "Caracara",
            "Caterpillar",
            "Centipede",
            "Cheetah",
            "Chipmunk",
            "Chuckwalla",
            "Climbing Mouse",
            "Coati",
            "Cobra",
            "Cotton Rat",
            "Cougar",
            "Courser",
            "Crane Fly",
            "Crow",
            "Dassie Rat",
            "Dove",
            "Dunnart",
            "Eagle",
            "Echidna",
            "Elephant",
            "Emu",
            "Falcon",
            "Fly",
            "Fox",
            "Frogmouth",
            "Gecko",
            "Geoffroy's Cat",
            "Gerbil",
            "Grasshopper",
            "Guanaco",
            "Gundi",
            "Hamster",
            "Hawk",
            "Hedgehog",
            "Hyena",
            "Hyrax",
            "Jackal",
            "Kangaroo",
            "Kangaroo Rat",
            "Kestrel",
            "Kowari",
            "Kultarr",
            "Leopard",
            "Lion",
            "Macaw",
            "Meerkat",
            "Mouse",
            "Oryx",
            "Ostrich",
            "Owl",
            "Pronghorn",
            "Python",
            "Rabbit",
            "Raccoon",
            "Rattlesnake",
            "Rhinoceros",
            "Sand Cat",
            "Spectacled Bear",
            "Spiny Mouse",
            "Starling",
            "Stick Bug",
            "Tarantula",
            "Tit",
            "Toad",
            "Tortoise",
            "Tyrant Flycatcher",
            "Viper",
            "Vulture",
            "Waxwing",
            "Xerus",
            "Zebra",
          ],
          grassland: [
            "Aardvark",
            "Aardwolf",
            "Accentor",
            "African Buffalo",
            "African Wild Dog",
            "Alpaca",
            "Anaconda",
            "Ant",
            "Anteater",
            "Antelope",
            "Armadillo",
            "Baboon",
            "Badger",
            "Bandicoot",
            "Barbet",
            "Bat",
            "Bee",
            "Bee-eater",
            "Beetle",
            "Bird",
            "Bison",
            "Black-footed Cat",
            "Black-footed Ferret",
            "Bluebird",
            "Boa",
            "Bowerbird",
            "Brown Bear",
            "Bush Dog",
            "Bushshrike",
            "Bustard",
            "Butterfly",
            "Buzzard",
            "Caracal",
            "Caracara",
            "Cardinal",
            "Caterpillar",
            "Cheetah",
            "Chipmunk",
            "Civet",
            "Climbing Mouse",
            "Clouded Leopard",
            "Coati",
            "Cobra",
            "Cockatoo",
            "Cockroach",
            "Common Genet",
            "Cotton Rat",
            "Cougar",
            "Courser",
            "Coyote",
            "Crane",
            "Crane Fly",
            "Cricket",
            "Crow",
            "Culpeo",
            "Death Adder",
            "Deer",
            "Deer Mouse",
            "Dingo",
            "Dinosaur",
            "Dove",
            "Drongo",
            "Duck",
            "Duiker",
            "Dunnart",
            "Eagle",
            "Echidna",
            "Elephant",
            "Elk",
            "Emu",
            "Falcon",
            "Finch",
            "Flea",
            "Fly",
            "Flying Frog",
            "Fox",
            "Frog",
            "Frogmouth",
            "Garter Snake",
            "Gazelle",
            "Gecko",
            "Geoffroy's Cat",
            "Gerbil",
            "Giant Tortoise",
            "Giraffe",
            "Grasshopper",
            "Grison",
            "Groundhog",
            "Grouse",
            "Guanaco",
            "Guinea Pig",
            "Hamster",
            "Harrier",
            "Hartebeest",
            "Hawk",
            "Hedgehog",
            "Helmetshrike",
            "Hippopotamus",
            "Hornbill",
            "Hyena",
            "Hyrax",
            "Impala",
            "Jackal",
            "Jaguar",
            "Jaguarundi",
            "Kangaroo",
            "Kangaroo Rat",
            "Kestrel",
            "Kultarr",
            "Ladybug",
            "Leopard",
            "Lion",
            "Macaw",
            "Meerkat",
            "Mouse",
            "Newt",
            "Oryx",
            "Ostrich",
            "Owl",
            "Pangolin",
            "Pheasant",
            "Prairie Dog",
            "Pronghorn",
            "Przewalski's Horse",
            "Python",
            "Quoll",
            "Rabbit",
            "Raven",
            "Rhinoceros",
            "Shelduck",
            "Sloth Bear",
            "Spectacled Bear",
            "Squirrel",
            "Starling",
            "Stick Bug",
            "Tamandua",
            "Tasmanian Devil",
            "Thornbill",
            "Thrush",
            "Toad",
            "Tortoise",
          ],
          forest: [
            "Agouti",
            "Anaconda",
            "Anoa",
            "Ant",
            "Anteater",
            "Antelope",
            "Armadillo",
            "Asian Black Bear",
            "Aye-aye",
            "Babirusa",
            "Baboon",
            "Badger",
            "Bandicoot",
            "Banteng",
            "Barbet",
            "Basilisk",
            "Bat",
            "Bearded Dragon",
            "Bee",
            "Bee-eater",
            "Beetle",
            "Bettong",
            "Binturong",
            "Bird-of-paradise",
            "Bongo",
            "Bowerbird",
            "Bulbul",
            "Bush Dog",
            "Bushbaby",
            "Bushshrike",
            "Butterfly",
            "Buzzard",
            "Caecilian",
            "Cardinal",
            "Cassowary",
            "Caterpillar",
            "Centipede",
            "Chameleon",
            "Chimpanzee",
            "Cicada",
            "Civet",
            "Clouded Leopard",
            "Coati",
            "Cobra",
            "Cockatoo",
            "Cockroach",
            "Colugo",
            "Cotinga",
            "Cotton Rat",
            "Cougar",
            "Crane Fly",
            "Cricket",
            "Crocodile",
            "Crow",
            "Cuckoo",
            "Cuscus",
            "Death Adder",
            "Deer",
            "Dhole",
            "Dingo",
            "Dinosaur",
            "Drongo",
            "Duck",
            "Duiker",
            "Eagle",
            "Echidna",
            "Elephant",
            "Finch",
            "Flat-headed Cat",
            "Flea",
            "Flowerpecker",
            "Fly",
            "Flying Frog",
            "Fossa",
            "Frog",
            "Frogmouth",
            "Gaur",
            "Gecko",
            "Gorilla",
            "Grison",
            "Hawaiian Honeycreeper",
            "Hawk",
            "Hedgehog",
            "Helmetshrike",
            "Hornbill",
            "Hyrax",
            "Iguana",
            "Jackal",
            "Jaguar",
            "Jaguarundi",
            "Kestrel",
            "Ladybug",
            "Lemur",
            "Leopard",
            "Lion",
            "Macaw",
            "Mandrill",
            "Margay",
            "Monkey",
            "Mouse",
            "Mouse Deer",
            "Newt",
            "Okapi",
            "Old World Flycatcher",
            "Orangutan",
            "Owl",
            "Pangolin",
            "Peafowl",
            "Pheasant",
            "Possum",
            "Python",
            "Quokka",
            "Rabbit",
            "Raccoon",
            "Red Panda",
            "Red River Hog",
            "Rhinoceros",
            "Sloth Bear",
            "Spectacled Bear",
            "Squirrel",
            "Starling",
            "Stick Bug",
            "Sun Bear",
            "Tamandua",
            "Tamarin",
            "Tapir",
            "Tarantula",
            "Thrush",
            "Tiger",
            "Tit",
            "Toad",
            "Tortoise",
            "Toucan",
            "Trogon",
            "Trumpeter",
            "Turaco",
            "Turtle",
            "Tyrant Flycatcher",
            "Viper",
            "Vulture",
            "Wallaby",
            "Warbler",
            "Wasp",
            "Waxwing",
            "Weaver",
            "Weaver-finch",
            "Whistler",
            "White-eye",
            "Whydah",
            "Woodswallow",
            "Worm",
            "Wren",
            "Xenops",
            "Yellowjacket",
            "Accentor",
            "African Buffalo",
            "American Black Bear",
            "Anole",
            "Bird",
            "Bison",
            "Boa",
            "Brown Bear",
            "Chipmunk",
            "Common Genet",
            "Copperhead",
            "Coyote",
            "Deer Mouse",
            "Dormouse",
            "Elk",
            "Emu",
            "Fisher",
            "Fox",
            "Garter Snake",
            "Giant Panda",
            "Giant Tortoise",
            "Groundhog",
            "Grouse",
            "Guanaco",
            "Himalayan Tahr",
            "Kangaroo",
            "Koala",
            "Numbat",
            "Quoll",
            "Raccoon dog",
            "Tasmanian Devil",
            "Thornbill",
            "Turkey",
            "Vole",
            "Weasel",
            "Wildcat",
            "Wolf",
            "Wombat",
            "Woodchuck",
            "Woodpecker",
          ],
          farm: [
            "Alpaca",
            "Buffalo",
            "Banteng",
            "Cow",
            "Cat",
            "Chicken",
            "Carp",
            "Camel",
            "Donkey",
            "Dog",
            "Duck",
            "Emu",
            "Goat",
            "Gayal",
            "Guinea",
            "Goose",
            "Horse",
            "Honey",
            "Llama",
            "Pig",
            "Pigeon",
            "Rhea",
            "Rabbit",
            "Sheep",
            "Silkworm",
            "Turkey",
            "Yak",
            "Zebu",
          ],
          pet: [
            "Bearded Dragon",
            "Birds",
            "Burro",
            "Cats",
            "Chameleons",
            "Chickens",
            "Chinchillas",
            "Chinese Water Dragon",
            "Cows",
            "Dogs",
            "Donkey",
            "Ducks",
            "Ferrets",
            "Fish",
            "Geckos",
            "Geese",
            "Gerbils",
            "Goats",
            "Guinea Fowl",
            "Guinea Pigs",
            "Hamsters",
            "Hedgehogs",
            "Horses",
            "Iguanas",
            "Llamas",
            "Lizards",
            "Mice",
            "Mule",
            "Peafowl",
            "Pigs and Hogs",
            "Pigeons",
            "Ponies",
            "Pot Bellied Pig",
            "Rabbits",
            "Rats",
            "Sheep",
            "Skinks",
            "Snakes",
            "Stick Insects",
            "Sugar Gliders",
            "Tarantula",
            "Turkeys",
            "Turtles",
          ],
          zoo: [
            "Aardvark",
            "African Wild Dog",
            "Aldabra Tortoise",
            "American Alligator",
            "American Bison",
            "Amur Tiger",
            "Anaconda",
            "Andean Condor",
            "Asian Elephant",
            "Baby Doll Sheep",
            "Bald Eagle",
            "Barred Owl",
            "Blue Iguana",
            "Boer Goat",
            "California Sea Lion",
            "Caribbean Flamingo",
            "Chinchilla",
            "Collared Lemur",
            "Coquerel's Sifaka",
            "Cuban Amazon Parrot",
            "Ebony Langur",
            "Fennec Fox",
            "Fossa",
            "Gelada",
            "Giant Anteater",
            "Giraffe",
            "Gorilla",
            "Grizzly Bear",
            "Henkel's Leaf-tailed Gecko",
            "Indian Gharial",
            "Indian Rhinoceros",
            "King Cobra",
            "King Vulture",
            "Komodo Dragon",
            "Linne's Two-toed Sloth",
            "Lion",
            "Little Penguin",
            "Madagascar Tree Boa",
            "Magellanic Penguin",
            "Malayan Tapir",
            "Malayan Tiger",
            "Matschies Tree Kangaroo",
            "Mini Donkey",
            "Monarch Butterfly",
            "Nile crocodile",
            "North American Porcupine",
            "Nubian Ibex",
            "Okapi",
            "Poison Dart Frog",
            "Polar Bear",
            "Pygmy Marmoset",
            "Radiated Tortoise",
            "Red Panda",
            "Red Ruffed Lemur",
            "Ring-tailed Lemur",
            "Ring-tailed Mongoose",
            "Rock Hyrax",
            "Small Clawed Asian Otter",
            "Snow Leopard",
            "Snowy Owl",
            "Southern White-faced Owl",
            "Southern White Rhinocerous",
            "Squirrel Monkey",
            "Tufted Puffin",
            "White Cheeked Gibbon",
            "White-throated Bee Eater",
            "Zebra",
          ],
        },
        primes: [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021,
          1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093,
          1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181,
          1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259,
          1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321,
          1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433,
          1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493,
          1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579,
          1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657,
          1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741,
          1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831,
          1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913,
          1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003,
          2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087,
          2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161,
          2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269,
          2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347,
          2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417,
          2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531,
          2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621,
          2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693,
          2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767,
          2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851,
          2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953,
          2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041,
          3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163,
          3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251,
          3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329,
          3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413,
          3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517,
          3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583,
          3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673,
          3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767,
          3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853,
          3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931,
          3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027,
          4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129,
          4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229,
          4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297,
          4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421,
          4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513,
          4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603,
          4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691,
          4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793,
          4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909,
          4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987,
          4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077,
          5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171,
          5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279,
          5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393,
          5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471,
          5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557,
          5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653,
          5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741,
          5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839,
          5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903,
          5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043,
          6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131,
          6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221,
          6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311,
          6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379,
          6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521,
          6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607,
          6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703,
          6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803,
          6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899,
          6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983,
          6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079,
          7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207,
          7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307,
          7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433,
          7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523,
          7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589,
          7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687,
          7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789,
          7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883,
          7901, 7907, 7919, 7927, 7933, 7937, 7949, 7951, 7963, 7993, 8009,
          8011, 8017, 8039, 8053, 8059, 8069, 8081, 8087, 8089, 8093, 8101,
          8111, 8117, 8123, 8147, 8161, 8167, 8171, 8179, 8191, 8209, 8219,
          8221, 8231, 8233, 8237, 8243, 8263, 8269, 8273, 8287, 8291, 8293,
          8297, 8311, 8317, 8329, 8353, 8363, 8369, 8377, 8387, 8389, 8419,
          8423, 8429, 8431, 8443, 8447, 8461, 8467, 8501, 8513, 8521, 8527,
          8537, 8539, 8543, 8563, 8573, 8581, 8597, 8599, 8609, 8623, 8627,
          8629, 8641, 8647, 8663, 8669, 8677, 8681, 8689, 8693, 8699, 8707,
          8713, 8719, 8731, 8737, 8741, 8747, 8753, 8761, 8779, 8783, 8803,
          8807, 8819, 8821, 8831, 8837, 8839, 8849, 8861, 8863, 8867, 8887,
          8893, 8923, 8929, 8933, 8941, 8951, 8963, 8969, 8971, 8999, 9001,
          9007, 9011, 9013, 9029, 9041, 9043, 9049, 9059, 9067, 9091, 9103,
          9109, 9127, 9133, 9137, 9151, 9157, 9161, 9173, 9181, 9187, 9199,
          9203, 9209, 9221, 9227, 9239, 9241, 9257, 9277, 9281, 9283, 9293,
          9311, 9319, 9323, 9337, 9341, 9343, 9349, 9371, 9377, 9391, 9397,
          9403, 9413, 9419, 9421, 9431, 9433, 9437, 9439, 9461, 9463, 9467,
          9473, 9479, 9491, 9497, 9511, 9521, 9533, 9539, 9547, 9551, 9587,
          9601, 9613, 9619, 9623, 9629, 9631, 9643, 9649, 9661, 9677, 9679,
          9689, 9697, 9719, 9721, 9733, 9739, 9743, 9749, 9767, 9769, 9781,
          9787, 9791, 9803, 9811, 9817, 9829, 9833, 9839, 9851, 9857, 9859,
          9871, 9883, 9887, 9901, 9907, 9923, 9929, 9931, 9941, 9949, 9967,
          9973, 10007,
        ],
        emotions: ["love", "joy", "surprise", "anger", "sadness", "fear"],
      },
      L = Object.prototype.hasOwnProperty,
      _ =
        Object.keys ||
        function (i) {
          var s = [];
          for (var u in i) L.call(i, u) && s.push(u);
          return s;
        };
    function G(i, s) {
      for (var u = _(i), g, S = 0, x = u.length; S < x; S++)
        (g = u[S]), (s[g] = i[g] || s[g]);
    }
    function N(i, s) {
      for (var u = 0, g = i.length; u < g; u++) s[u] = i[u];
    }
    function K(i, s) {
      var u = Array.isArray(i),
        g = s || (u ? new Array(i.length) : {});
      return u ? N(i, g) : G(i, g), g;
    }
    (d.prototype.get = function (i) {
      return K(k[i]);
    }),
      (d.prototype.mac_address = function (i) {
        (i = f(i)), i.separator || (i.separator = i.networkVersion ? "." : ":");
        var s = "ABCDEF1234567890",
          u = "";
        return (
          i.networkVersion
            ? (u = this.n(this.string, 3, { pool: s, length: 4 }).join(
                i.separator
              ))
            : (u = this.n(this.string, 6, { pool: s, length: 2 }).join(
                i.separator
              )),
          u
        );
      }),
      (d.prototype.normal = function (i) {
        if (
          ((i = f(i, { mean: 0, dev: 1, pool: [] })),
          A(
            i.pool.constructor !== Array,
            "Chance: The pool option must be a valid array."
          ),
          A(typeof i.mean != "number", "Chance: Mean (mean) must be a number"),
          A(
            typeof i.dev != "number",
            "Chance: Standard deviation (dev) must be a number"
          ),
          i.pool.length > 0)
        )
          return this.normal_pool(i);
        var s,
          u,
          g,
          S,
          x = i.mean,
          w = i.dev;
        do
          (u = this.random() * 2 - 1),
            (g = this.random() * 2 - 1),
            (s = u * u + g * g);
        while (s >= 1);
        return (S = u * Math.sqrt((-2 * Math.log(s)) / s)), w * S + x;
      }),
      (d.prototype.normal_pool = function (i) {
        var s = 0;
        do {
          var u = Math.round(this.normal({ mean: i.mean, dev: i.dev }));
          if (u < i.pool.length && u >= 0) return i.pool[u];
          s++;
        } while (s < 100);
        throw new RangeError(
          "Chance: Your pool is too small for the given mean and standard deviation. Please adjust."
        );
      }),
      (d.prototype.radio = function (i) {
        i = f(i, { side: "?" });
        var s = "";
        switch (i.side.toLowerCase()) {
          case "east":
          case "e":
            s = "W";
            break;
          case "west":
          case "w":
            s = "K";
            break;
          default:
            s = this.character({ pool: "KW" });
            break;
        }
        return (
          s +
          this.character({ alpha: !0, casing: "upper" }) +
          this.character({ alpha: !0, casing: "upper" }) +
          this.character({ alpha: !0, casing: "upper" })
        );
      }),
      (d.prototype.set = function (i, s) {
        typeof i == "string" ? (k[i] = s) : (k = K(i, k));
      }),
      (d.prototype.tv = function (i) {
        return this.radio(i);
      }),
      (d.prototype.cnpj = function () {
        var i = this.n(this.natural, 8, { max: 9 }),
          s =
            2 +
            i[7] * 6 +
            i[6] * 7 +
            i[5] * 8 +
            i[4] * 9 +
            i[3] * 2 +
            i[2] * 3 +
            i[1] * 4 +
            i[0] * 5;
        (s = 11 - (s % 11)), s >= 10 && (s = 0);
        var u =
          s * 2 +
          3 +
          i[7] * 7 +
          i[6] * 8 +
          i[5] * 9 +
          i[4] * 2 +
          i[3] * 3 +
          i[2] * 4 +
          i[1] * 5 +
          i[0] * 6;
        return (
          (u = 11 - (u % 11)),
          u >= 10 && (u = 0),
          "" +
            i[0] +
            i[1] +
            "." +
            i[2] +
            i[3] +
            i[4] +
            "." +
            i[5] +
            i[6] +
            i[7] +
            "/0001-" +
            s +
            u
        );
      }),
      (d.prototype.emotion = function () {
        return this.pick(this.get("emotions"));
      }),
      (d.prototype.mersenne_twister = function (i) {
        return new O(i);
      }),
      (d.prototype.blueimp_md5 = function () {
        return new U();
      });
    var O = function (i) {
      i === void 0 && (i = Math.floor(Math.random() * Math.pow(10, 13))),
        (this.N = 624),
        (this.M = 397),
        (this.MATRIX_A = 2567483615),
        (this.UPPER_MASK = 2147483648),
        (this.LOWER_MASK = 2147483647),
        (this.mt = new Array(this.N)),
        (this.mti = this.N + 1),
        this.init_genrand(i);
    };
    (O.prototype.init_genrand = function (i) {
      for (this.mt[0] = i >>> 0, this.mti = 1; this.mti < this.N; this.mti++)
        (i = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)),
          (this.mt[this.mti] =
            ((((i & 4294901760) >>> 16) * 1812433253) << 16) +
            (i & 65535) * 1812433253 +
            this.mti),
          (this.mt[this.mti] >>>= 0);
    }),
      (O.prototype.init_by_array = function (i, s) {
        var u = 1,
          g = 0,
          S,
          x;
        for (this.init_genrand(19650218), S = this.N > s ? this.N : s; S; S--)
          (x = this.mt[u - 1] ^ (this.mt[u - 1] >>> 30)),
            (this.mt[u] =
              (this.mt[u] ^
                (((((x & 4294901760) >>> 16) * 1664525) << 16) +
                  (x & 65535) * 1664525)) +
              i[g] +
              g),
            (this.mt[u] >>>= 0),
            u++,
            g++,
            u >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (u = 1)),
            g >= s && (g = 0);
        for (S = this.N - 1; S; S--)
          (x = this.mt[u - 1] ^ (this.mt[u - 1] >>> 30)),
            (this.mt[u] =
              (this.mt[u] ^
                (((((x & 4294901760) >>> 16) * 1566083941) << 16) +
                  (x & 65535) * 1566083941)) -
              u),
            (this.mt[u] >>>= 0),
            u++,
            u >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (u = 1));
        this.mt[0] = 2147483648;
      }),
      (O.prototype.genrand_int32 = function () {
        var i,
          s = new Array(0, this.MATRIX_A);
        if (this.mti >= this.N) {
          var u;
          for (
            this.mti === this.N + 1 && this.init_genrand(5489), u = 0;
            u < this.N - this.M;
            u++
          )
            (i =
              (this.mt[u] & this.UPPER_MASK) |
              (this.mt[u + 1] & this.LOWER_MASK)),
              (this.mt[u] = this.mt[u + this.M] ^ (i >>> 1) ^ s[i & 1]);
          for (; u < this.N - 1; u++)
            (i =
              (this.mt[u] & this.UPPER_MASK) |
              (this.mt[u + 1] & this.LOWER_MASK)),
              (this.mt[u] =
                this.mt[u + (this.M - this.N)] ^ (i >>> 1) ^ s[i & 1]);
          (i =
            (this.mt[this.N - 1] & this.UPPER_MASK) |
            (this.mt[0] & this.LOWER_MASK)),
            (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (i >>> 1) ^ s[i & 1]),
            (this.mti = 0);
        }
        return (
          (i = this.mt[this.mti++]),
          (i ^= i >>> 11),
          (i ^= (i << 7) & 2636928640),
          (i ^= (i << 15) & 4022730752),
          (i ^= i >>> 18),
          i >>> 0
        );
      }),
      (O.prototype.genrand_int31 = function () {
        return this.genrand_int32() >>> 1;
      }),
      (O.prototype.genrand_real1 = function () {
        return this.genrand_int32() * (1 / 4294967295);
      }),
      (O.prototype.random = function () {
        return this.genrand_int32() * (1 / 4294967296);
      }),
      (O.prototype.genrand_real3 = function () {
        return (this.genrand_int32() + 0.5) * (1 / 4294967296);
      }),
      (O.prototype.genrand_res53 = function () {
        var i = this.genrand_int32() >>> 5,
          s = this.genrand_int32() >>> 6;
        return (i * 67108864 + s) * (1 / 9007199254740992);
      });
    var U = function () {};
    (U.prototype.VERSION = "1.0.1"),
      (U.prototype.safe_add = function (s, u) {
        var g = (s & 65535) + (u & 65535),
          S = (s >> 16) + (u >> 16) + (g >> 16);
        return (S << 16) | (g & 65535);
      }),
      (U.prototype.bit_roll = function (i, s) {
        return (i << s) | (i >>> (32 - s));
      }),
      (U.prototype.md5_cmn = function (i, s, u, g, S, x) {
        return this.safe_add(
          this.bit_roll(
            this.safe_add(this.safe_add(s, i), this.safe_add(g, x)),
            S
          ),
          u
        );
      }),
      (U.prototype.md5_ff = function (i, s, u, g, S, x, w) {
        return this.md5_cmn((s & u) | (~s & g), i, s, S, x, w);
      }),
      (U.prototype.md5_gg = function (i, s, u, g, S, x, w) {
        return this.md5_cmn((s & g) | (u & ~g), i, s, S, x, w);
      }),
      (U.prototype.md5_hh = function (i, s, u, g, S, x, w) {
        return this.md5_cmn(s ^ u ^ g, i, s, S, x, w);
      }),
      (U.prototype.md5_ii = function (i, s, u, g, S, x, w) {
        return this.md5_cmn(u ^ (s | ~g), i, s, S, x, w);
      }),
      (U.prototype.binl_md5 = function (i, s) {
        (i[s >> 5] |= 128 << s % 32), (i[(((s + 64) >>> 9) << 4) + 14] = s);
        var u,
          g,
          S,
          x,
          w,
          C = 1732584193,
          M = -271733879,
          T = -1732584194,
          E = 271733878;
        for (u = 0; u < i.length; u += 16)
          (g = C),
            (S = M),
            (x = T),
            (w = E),
            (C = this.md5_ff(C, M, T, E, i[u], 7, -680876936)),
            (E = this.md5_ff(E, C, M, T, i[u + 1], 12, -389564586)),
            (T = this.md5_ff(T, E, C, M, i[u + 2], 17, 606105819)),
            (M = this.md5_ff(M, T, E, C, i[u + 3], 22, -1044525330)),
            (C = this.md5_ff(C, M, T, E, i[u + 4], 7, -176418897)),
            (E = this.md5_ff(E, C, M, T, i[u + 5], 12, 1200080426)),
            (T = this.md5_ff(T, E, C, M, i[u + 6], 17, -1473231341)),
            (M = this.md5_ff(M, T, E, C, i[u + 7], 22, -45705983)),
            (C = this.md5_ff(C, M, T, E, i[u + 8], 7, 1770035416)),
            (E = this.md5_ff(E, C, M, T, i[u + 9], 12, -1958414417)),
            (T = this.md5_ff(T, E, C, M, i[u + 10], 17, -42063)),
            (M = this.md5_ff(M, T, E, C, i[u + 11], 22, -1990404162)),
            (C = this.md5_ff(C, M, T, E, i[u + 12], 7, 1804603682)),
            (E = this.md5_ff(E, C, M, T, i[u + 13], 12, -40341101)),
            (T = this.md5_ff(T, E, C, M, i[u + 14], 17, -1502002290)),
            (M = this.md5_ff(M, T, E, C, i[u + 15], 22, 1236535329)),
            (C = this.md5_gg(C, M, T, E, i[u + 1], 5, -165796510)),
            (E = this.md5_gg(E, C, M, T, i[u + 6], 9, -1069501632)),
            (T = this.md5_gg(T, E, C, M, i[u + 11], 14, 643717713)),
            (M = this.md5_gg(M, T, E, C, i[u], 20, -373897302)),
            (C = this.md5_gg(C, M, T, E, i[u + 5], 5, -701558691)),
            (E = this.md5_gg(E, C, M, T, i[u + 10], 9, 38016083)),
            (T = this.md5_gg(T, E, C, M, i[u + 15], 14, -660478335)),
            (M = this.md5_gg(M, T, E, C, i[u + 4], 20, -405537848)),
            (C = this.md5_gg(C, M, T, E, i[u + 9], 5, 568446438)),
            (E = this.md5_gg(E, C, M, T, i[u + 14], 9, -1019803690)),
            (T = this.md5_gg(T, E, C, M, i[u + 3], 14, -187363961)),
            (M = this.md5_gg(M, T, E, C, i[u + 8], 20, 1163531501)),
            (C = this.md5_gg(C, M, T, E, i[u + 13], 5, -1444681467)),
            (E = this.md5_gg(E, C, M, T, i[u + 2], 9, -51403784)),
            (T = this.md5_gg(T, E, C, M, i[u + 7], 14, 1735328473)),
            (M = this.md5_gg(M, T, E, C, i[u + 12], 20, -1926607734)),
            (C = this.md5_hh(C, M, T, E, i[u + 5], 4, -378558)),
            (E = this.md5_hh(E, C, M, T, i[u + 8], 11, -2022574463)),
            (T = this.md5_hh(T, E, C, M, i[u + 11], 16, 1839030562)),
            (M = this.md5_hh(M, T, E, C, i[u + 14], 23, -35309556)),
            (C = this.md5_hh(C, M, T, E, i[u + 1], 4, -1530992060)),
            (E = this.md5_hh(E, C, M, T, i[u + 4], 11, 1272893353)),
            (T = this.md5_hh(T, E, C, M, i[u + 7], 16, -155497632)),
            (M = this.md5_hh(M, T, E, C, i[u + 10], 23, -1094730640)),
            (C = this.md5_hh(C, M, T, E, i[u + 13], 4, 681279174)),
            (E = this.md5_hh(E, C, M, T, i[u], 11, -358537222)),
            (T = this.md5_hh(T, E, C, M, i[u + 3], 16, -722521979)),
            (M = this.md5_hh(M, T, E, C, i[u + 6], 23, 76029189)),
            (C = this.md5_hh(C, M, T, E, i[u + 9], 4, -640364487)),
            (E = this.md5_hh(E, C, M, T, i[u + 12], 11, -421815835)),
            (T = this.md5_hh(T, E, C, M, i[u + 15], 16, 530742520)),
            (M = this.md5_hh(M, T, E, C, i[u + 2], 23, -995338651)),
            (C = this.md5_ii(C, M, T, E, i[u], 6, -198630844)),
            (E = this.md5_ii(E, C, M, T, i[u + 7], 10, 1126891415)),
            (T = this.md5_ii(T, E, C, M, i[u + 14], 15, -1416354905)),
            (M = this.md5_ii(M, T, E, C, i[u + 5], 21, -57434055)),
            (C = this.md5_ii(C, M, T, E, i[u + 12], 6, 1700485571)),
            (E = this.md5_ii(E, C, M, T, i[u + 3], 10, -1894986606)),
            (T = this.md5_ii(T, E, C, M, i[u + 10], 15, -1051523)),
            (M = this.md5_ii(M, T, E, C, i[u + 1], 21, -2054922799)),
            (C = this.md5_ii(C, M, T, E, i[u + 8], 6, 1873313359)),
            (E = this.md5_ii(E, C, M, T, i[u + 15], 10, -30611744)),
            (T = this.md5_ii(T, E, C, M, i[u + 6], 15, -1560198380)),
            (M = this.md5_ii(M, T, E, C, i[u + 13], 21, 1309151649)),
            (C = this.md5_ii(C, M, T, E, i[u + 4], 6, -145523070)),
            (E = this.md5_ii(E, C, M, T, i[u + 11], 10, -1120210379)),
            (T = this.md5_ii(T, E, C, M, i[u + 2], 15, 718787259)),
            (M = this.md5_ii(M, T, E, C, i[u + 9], 21, -343485551)),
            (C = this.safe_add(C, g)),
            (M = this.safe_add(M, S)),
            (T = this.safe_add(T, x)),
            (E = this.safe_add(E, w));
        return [C, M, T, E];
      }),
      (U.prototype.binl2rstr = function (i) {
        var s,
          u = "";
        for (s = 0; s < i.length * 32; s += 8)
          u += String.fromCharCode((i[s >> 5] >>> s % 32) & 255);
        return u;
      }),
      (U.prototype.rstr2binl = function (i) {
        var s,
          u = [];
        for (u[(i.length >> 2) - 1] = void 0, s = 0; s < u.length; s += 1)
          u[s] = 0;
        for (s = 0; s < i.length * 8; s += 8)
          u[s >> 5] |= (i.charCodeAt(s / 8) & 255) << s % 32;
        return u;
      }),
      (U.prototype.rstr_md5 = function (i) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(i), i.length * 8));
      }),
      (U.prototype.rstr_hmac_md5 = function (i, s) {
        var u,
          g = this.rstr2binl(i),
          S = [],
          x = [],
          w;
        for (
          S[15] = x[15] = void 0,
            g.length > 16 && (g = this.binl_md5(g, i.length * 8)),
            u = 0;
          u < 16;
          u += 1
        )
          (S[u] = g[u] ^ 909522486), (x[u] = g[u] ^ 1549556828);
        return (
          (w = this.binl_md5(S.concat(this.rstr2binl(s)), 512 + s.length * 8)),
          this.binl2rstr(this.binl_md5(x.concat(w), 640))
        );
      }),
      (U.prototype.rstr2hex = function (i) {
        var s = "0123456789abcdef",
          u = "",
          g,
          S;
        for (S = 0; S < i.length; S += 1)
          (g = i.charCodeAt(S)),
            (u += s.charAt((g >>> 4) & 15) + s.charAt(g & 15));
        return u;
      }),
      (U.prototype.str2rstr_utf8 = function (i) {
        return unescape(encodeURIComponent(i));
      }),
      (U.prototype.raw_md5 = function (i) {
        return this.rstr_md5(this.str2rstr_utf8(i));
      }),
      (U.prototype.hex_md5 = function (i) {
        return this.rstr2hex(this.raw_md5(i));
      }),
      (U.prototype.raw_hmac_md5 = function (i, s) {
        return this.rstr_hmac_md5(this.str2rstr_utf8(i), this.str2rstr_utf8(s));
      }),
      (U.prototype.hex_hmac_md5 = function (i, s) {
        return this.rstr2hex(this.raw_hmac_md5(i, s));
      }),
      (U.prototype.md5 = function (i, s, u) {
        return s
          ? u
            ? this.raw_hmac_md5(s, i)
            : this.hex_hmac_md5(s, i)
          : u
          ? this.raw_md5(i)
          : this.hex_md5(i);
      }),
      e.exports && (n = e.exports = d),
      (n.Chance = d),
      typeof importScripts < "u" && ((chance = new d()), (self.Chance = d)),
      typeof window == "object" &&
        typeof window.document == "object" &&
        ((window.Chance = d), (window.chance = new d()));
  })();
})(qo, qo.exports);
var Lv = qo.exports;
const Dv = _u(Lv),
  Ru = Dv(),
  Tm = () => (console.log(Ru.name({ middle: !0 })), Ru.name({ middle: !0 }));
Tm();
var Pm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Lu = cn.createContext && cn.createContext(Pm),
  _v = ["attr", "size", "title"];
function Nv(e, n) {
  if (e == null) return {};
  var r = Gv(e, n),
    t,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      (t = o[a]),
        !(n.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (r[t] = e[t]);
  }
  return r;
}
function Gv(e, n) {
  if (e == null) return {};
  var r = {},
    t = Object.keys(e),
    a,
    o;
  for (o = 0; o < t.length; o++)
    (a = t[o]), !(n.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Va() {
  return (
    (Va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r)
              Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
          }
          return e;
        }),
    Va.apply(this, arguments)
  );
}
function Du(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, t);
  }
  return r;
}
function Ka(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Du(Object(r), !0).forEach(function (t) {
          Fv(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Du(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function Fv(e, n, r) {
  return (
    (n = zv(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = r),
    e
  );
}
function zv(e) {
  var n = Ov(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
function Ov(e, n) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, n || "default");
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Em(e) {
  return (
    e &&
    e.map((n, r) =>
      cn.createElement(n.tag, Ka({ key: r }, n.attr), Em(n.child))
    )
  );
}
function Hv(e) {
  return (n) =>
    cn.createElement(Uv, Va({ attr: Ka({}, e.attr) }, n), Em(e.child));
}
function Uv(e) {
  var n = (r) => {
    var { attr: t, size: a, title: o } = e,
      l = Nv(e, _v),
      c = a || r.size || "1em",
      m;
    return (
      r.className && (m = r.className),
      e.className && (m = (m ? m + " " : "") + e.className),
      cn.createElement(
        "svg",
        Va(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          t,
          l,
          {
            className: m,
            style: Ka(Ka({ color: e.color || r.color }, r.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && cn.createElement("title", null, o),
        e.children
      )
    );
  };
  return Lu !== void 0
    ? cn.createElement(Lu.Consumer, null, (r) => n(r))
    : n(Pm);
}
function Wv(e) {
  return Hv({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(e);
}
const jv = () => {
    const e = Zl(),
      n = vg((t) => t.users);
    console.log(n, "[]");
    const r = (t) => {
      e(Bv(t));
    };
    return D.jsx(D.Fragment, {
      children:
        n == null
          ? void 0
          : n.map((t, a) =>
              D.jsx("div", {
                className: "user-details",
                children: D.jsxs(
                  "li",
                  {
                    children: [
                      D.jsxs("h3", { children: [" ", t, " "] }),
                      D.jsx("button", {
                        className: "btn btn-delete",
                        onClick: () => r(a),
                        children: D.jsx(Wv, { className: "delete-icon" }),
                      }),
                    ],
                  },
                  a
                ),
              })
            ),
    });
  },
  Vv = () => {
    const e = Zl(),
      n = (r) => {
        e(Iv(r));
      };
    return D.jsx(D.Fragment, {
      children: D.jsxs("div", {
        className: "content",
        children: [
          D.jsxs("div", {
            className: "admin-table",
            children: [
              D.jsx("div", {
                className: "admin-subtitle",
                children: "List of User Details",
              }),
              D.jsx("button", {
                className: "btn add-btn",
                onClick: () => n(Tm()),
                children: "Add New User",
              }),
            ],
          }),
          D.jsx("ul", { children: D.jsx(jv, {}) }),
          D.jsx("hr", {}),
          D.jsx(Rv, {}),
        ],
      }),
    });
  },
  Kv = () =>
    D.jsxs("div", {
      className: "container",
      children: [
        D.jsx("h1", { children: "Home" }),
        D.jsxs("div", {
          className: "card",
          children: [
            D.jsx("img", {
              src: "https://lh3.googleusercontent.com/pw/AP1GczM4Imp3i6eP5QuM9OLeXJYoFijci_JmGycp9wMiXAEtHApNrKApnj2tHZjXKdAvmvjzIt-lY0JpvWgqO31F30-hE30fdOGmP6bzgFD5CL5CkmlLaN3VLxZ1hVSduxB43buhN6OWelVUzpbhb-spbMhmJwnG7CkZ6FNeWp6DDEbXb_x6zrwl8-Haf-JkGG3WCPUVFU1RjHH3d4i7w6mRSqb3eIzpSW60fEGMNVz3c5P51V9JUx1sfUVngwS5lMrum1MBOm38K2SHCEFtwDlbhPxCiXPVf9nh8aHkBa8HgOLgg8wYthblXiaxykw_E2QtDPGFAGmz-TqWrCxbsSbZcYi8z6u5vEE4ZBZkjU32m5M2snVMbd3uOICCZ2h-hXmTjlSv-crEjCMGridWsqPoylfjWmmzjDOKjGxX9eyLWJ2FAHzOYRWZd4OKptqrNfL9vhIwJCJnHXH5msTFCAUaWY3-aLV3dwhd9SbToT_MgXbbqMPsXQJYqtM-unvWab372TMpfPDcxSiXAR5wAaRUrUvKQ4jDd8dWp5B8bIr4JEJjVYy0JQAoSHBaCoCuYQqOHJOC61OCUJD2dmenbcdiDA1wiS03sbZ04ujeh1dDTy6Fv-FNORwYQ4q2oVv7Pkmcem4t6Uwdomu8D3yIjdbDAfZLggOrbmdp7jtujC1ghHErqj4YO8pm5VoffZsdW_gb7aL49mSFztZDo3pCgpsOIJSyXhtA4PO3W_X3h5mxhor8n2wwnY2SmsHd8fvEAd2Df2KI9A4SGWw3tBx1S_X4cXkW_nD7Ett1TGH0skCHlUo579O5YPVwuIfbsY2XKTLJjIvGz3oC2k5r8eRRSum5jNiOcFIUuZsllg_b6iwwOVouKg0CT_qapVm-7QKOM_MTciuzZ79To1JKetIT5-xER4VPPdg=w844-h633-s-no-gm?authuser=0",
              alt: "Hamed",
            }),
            D.jsx("h1", { children: "Hamedullah Syed" }),
            D.jsx("p", {
              className: "title",
              children: "Certified Full-Stack Developer",
            }),
            D.jsx("p", { children: "Coding in Color Graduate" }),
            D.jsx("a", {
              href: "#",
              children: D.jsx("i", { className: "fa fa-dribbble" }),
            }),
            D.jsx("a", {
              href: "#",
              children: D.jsx("i", { className: "fa fa-twitter" }),
            }),
            D.jsx("a", {
              href: "#",
              children: D.jsx("i", { className: "fa fa-linkedin" }),
            }),
            D.jsx("a", {
              href: "#",
              children: D.jsx("i", { className: "fa fa-facebook" }),
            }),
            D.jsxs("a", {
              href: "/contact",
              children: [
                "   ",
                D.jsx("p", {
                  children: D.jsx("button", { children: "Contact" }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Jv = () =>
    D.jsx(D.Fragment, {
      children: D.jsxs("form", {
        action: "",
        children: [
          D.jsx("input", {
            type: "text",
            name: "NAME",
            id: "",
            placeholder: "Enter your Name",
          }),
          D.jsx("input", {
            type: "text",
            name: "PHONE",
            id: "",
            placeholder: "Enter your Phone-no",
          }),
          D.jsx("input", {
            type: "text",
            name: "EMAIL",
            id: "",
            placeholder: "Enter your EMAIL",
          }),
          D.jsx("button", { children: "Submit" }),
        ],
      }),
    }),
  Yv = () =>
    D.jsxs(D.Fragment, {
      children: [
        D.jsx(tg, {}),
        D.jsxs(Kp, {
          children: [
            D.jsx(Qr, { path: "/project", element: D.jsx(Vv, {}) }),
            D.jsx(Qr, { path: "/home", element: D.jsx(Kv, {}) }),
            D.jsx(Qr, { path: "/contact", element: D.jsx(Jv, {}) }),
            D.jsx(Qr, {}),
          ],
        }),
      ],
    }),
  $v = uv({ reducer: { users: wm.reducer } });
$i.createRoot(document.getElementById("root")).render(
  D.jsx(kg, { store: $v, children: D.jsx(Xp, { children: D.jsx(Yv, {}) }) })
);
