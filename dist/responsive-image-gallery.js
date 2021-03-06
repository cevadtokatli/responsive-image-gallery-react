/*!
 *   Responsive Image Gallery React
 *   version: 1.0.0
 *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
 *   website: http://cevadtokatli.com
 *    github: https://github.com/cevadtokatli/responsive-image-gallery-react
 *   license: MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ResponsiveImageGallery = {}));
}(this, function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  var n = "function" === typeof Symbol && Symbol.for,
      p = n ? Symbol.for("react.element") : 60103,
      q = n ? Symbol.for("react.portal") : 60106,
      r = n ? Symbol.for("react.fragment") : 60107,
      t = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      v = n ? Symbol.for("react.provider") : 60109,
      w = n ? Symbol.for("react.context") : 60110,
      x = n ? Symbol.for("react.concurrent_mode") : 60111,
      y = n ? Symbol.for("react.forward_ref") : 60112,
      z = n ? Symbol.for("react.suspense") : 60113,
      A = n ? Symbol.for("react.memo") : 60115,
      B = n ? Symbol.for("react.lazy") : 60116,
      C = "function" === typeof Symbol && Symbol.iterator;

  function aa(a, b, e, c, d, g, h, f) {
    if (!a) {
      a = void 0;
      if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var l = [e, c, d, g, h, f],
            m = 0;
        a = Error(b.replace(/%s/g, function () {
          return l[m++];
        }));
        a.name = "Invariant Violation";
      }
      a.framesToPop = 1;
      throw a;
    }
  }

  function D(a) {
    for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
      e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
    }

    aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
  }

  var E = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
      F = {};

  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = F;
    this.updater = e || E;
  }

  G.prototype.isReactComponent = {};

  G.prototype.setState = function (a, b) {
    "object" !== _typeof(a) && "function" !== typeof a && null != a ? D("85") : void 0;
    this.updater.enqueueSetState(this, a, b, "setState");
  };

  G.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };

  function H() {}

  H.prototype = G.prototype;

  function I(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = F;
    this.updater = e || E;
  }

  var J = I.prototype = new H();
  J.constructor = I;
  objectAssign(J, G.prototype);
  J.isPureReactComponent = !0;
  var K = {
    current: null,
    currentDispatcher: null
  },
      L = Object.prototype.hasOwnProperty,
      M = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

  function N(a, b, e) {
    var c = void 0,
        d = {},
        g = null,
        h = null;
    if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
      L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;else if (1 < f) {
      for (var l = Array(f), m = 0; m < f; m++) {
        l[m] = arguments[m + 2];
      }

      d.children = l;
    }
    if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
      void 0 === d[c] && (d[c] = f[c]);
    }
    return {
      $$typeof: p,
      type: a,
      key: g,
      ref: h,
      props: d,
      _owner: K.current
    };
  }

  function ba(a, b) {
    return {
      $$typeof: p,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }

  function O(a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === p;
  }

  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a];
    });
  }

  var P = /\/+/g,
      Q = [];

  function R(a, b, e, c) {
    if (Q.length) {
      var d = Q.pop();
      d.result = a;
      d.keyPrefix = b;
      d.func = e;
      d.context = c;
      d.count = 0;
      return d;
    }

    return {
      result: a,
      keyPrefix: b,
      func: e,
      context: c,
      count: 0
    };
  }

  function S(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > Q.length && Q.push(a);
  }

  function T(a, b, e, c) {
    var d = _typeof(a);

    if ("undefined" === d || "boolean" === d) a = null;
    var g = !1;
    if (null === a) g = !0;else switch (d) {
      case "string":
      case "number":
        g = !0;
        break;

      case "object":
        switch (a.$$typeof) {
          case p:
          case q:
            g = !0;
        }

    }
    if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;
    g = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
      d = a[h];
      var f = b + U(d, h);
      g += T(d, f, e, c);
    } else if (null === a || "object" !== _typeof(a) ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
      d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
    } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
    return g;
  }

  function V(a, b, e) {
    return null == a ? 0 : T(a, "", b, e);
  }

  function U(a, b) {
    return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
  }

  function ca(a, b) {
    a.func.call(a.context, b, a.count++);
  }

  function da(a, b, e) {
    var c = a.result,
        d = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? W(a, c, e, function (a) {
      return a;
    }) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
  }

  function W(a, b, e, c, d) {
    var g = "";
    null != e && (g = ("" + e).replace(P, "$&/") + "/");
    b = R(b, g, c, d);
    V(a, da, b);
    S(b);
  }

  var X = {
    Children: {
      map: function map(a, b, e) {
        if (null == a) return a;
        var c = [];
        W(a, c, null, b, e);
        return c;
      },
      forEach: function forEach(a, b, e) {
        if (null == a) return a;
        b = R(null, null, b, e);
        V(a, ca, b);
        S(b);
      },
      count: function count(a) {
        return V(a, function () {
          return null;
        }, null);
      },
      toArray: function toArray(a) {
        var b = [];
        W(a, b, null, function (a) {
          return a;
        });
        return b;
      },
      only: function only(a) {
        O(a) ? void 0 : D("143");
        return a;
      }
    },
    createRef: function createRef() {
      return {
        current: null
      };
    },
    Component: G,
    PureComponent: I,
    createContext: function createContext(a, b) {
      void 0 === b && (b = null);
      a = {
        $$typeof: w,
        _calculateChangedBits: b,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      a.Provider = {
        $$typeof: v,
        _context: a
      };
      return a.Consumer = a;
    },
    forwardRef: function forwardRef(a) {
      return {
        $$typeof: y,
        render: a
      };
    },
    lazy: function lazy(a) {
      return {
        $$typeof: B,
        _ctor: a,
        _status: -1,
        _result: null
      };
    },
    memo: function memo(a, b) {
      return {
        $$typeof: A,
        type: a,
        compare: void 0 === b ? null : b
      };
    },
    Fragment: r,
    StrictMode: t,
    Suspense: z,
    createElement: N,
    cloneElement: function cloneElement(a, b, e) {
      null === a || void 0 === a ? D("267", a) : void 0;
      var c = void 0,
          d = objectAssign({}, a.props),
          g = a.key,
          h = a.ref,
          f = a._owner;

      if (null != b) {
        void 0 !== b.ref && (h = b.ref, f = K.current);
        void 0 !== b.key && (g = "" + b.key);
        var l = void 0;
        a.type && a.type.defaultProps && (l = a.type.defaultProps);

        for (c in b) {
          L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
        }
      }

      c = arguments.length - 2;
      if (1 === c) d.children = e;else if (1 < c) {
        l = Array(c);

        for (var m = 0; m < c; m++) {
          l[m] = arguments[m + 2];
        }

        d.children = l;
      }
      return {
        $$typeof: p,
        type: a.type,
        key: g,
        ref: h,
        props: d,
        _owner: f
      };
    },
    createFactory: function createFactory(a) {
      var b = N.bind(null, a);
      b.type = a;
      return b;
    },
    isValidElement: O,
    version: "16.7.0",
    unstable_ConcurrentMode: x,
    unstable_Profiler: u,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
      ReactCurrentOwner: K,
      assign: objectAssign
    }
  },
      Y = {
    default: X
  },
      Z = Y && X || Y;
  var react_production_min = Z.default || Z;

  var react = createCommonjsModule(function (module) {

    {
      module.exports = react_production_min;
    }
  });
  var react_1 = react.Children;
  var react_2 = react.Component;
  var react_3 = react.PropTypes;
  var react_4 = react.createElement;
  var react_5 = react.cloneElement;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };
    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  /*!
   *   Responsive Image Gallery
   *   version: 1.0.1
   *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
   *   website: http://cevadtokatli.com
   *    github: https://github.com/cevadtokatli/responsive-image-gallery
   *   license: MIT
   */
  var defaultOptions = {
    active: '*',
    timing: 'ease',
    duration: 500,
    minWidth: 250,
    maxWidth: 500,
    height: 80,
    horizontalSpace: 10,
    verticalSpace: 10,
    overflow: false,
    grid: true
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Util;

  var Util$1 = Util = function () {
    var Util = function () {
      function Util() {
        classCallCheck(this, Util);
      }

      createClass(Util, null, [{
        key: 'getElement',
        // Returns the given element.
        // @params {HTMLElement|String} el
        // @returns {HTMLElement}
        value: function getElement(el) {
          if (typeof el === 'string') {
            return document.querySelector(el);
          }

          return el;
        } // Attaches the events to the element.
        // @params {HTMLElement} el
        // @params {String[]} events
        // @params {EventListener} callback

      }, {
        key: 'addMultiEventListener',
        value: function addMultiEventListener(el, events, callback) {
          var i, j, len, results;
          results = [];

          for (j = 0, len = events.length; j < len; j++) {
            i = events[j];
            results.push(el.addEventListener(i, callback, true));
          }

          return results;
        } // Removes the events from the element.
        // @params {HTMLElement} el
        // @params {String[]} events
        // @params {EventListener} callback

      }, {
        key: 'removeMultiEventListener',
        value: function removeMultiEventListener(el, events, callback) {
          var i, j, len, results;
          results = [];

          for (j = 0, len = events.length; j < len; j++) {
            i = events[j];
            results.push(el.removeEventListener(i, callback, true));
          }

          return results;
        } // Attaches the events to the element for once.
        // @params {HTMLElement} el
        // @params {String[]} events
        // @params {EventListener} callback

      }, {
        key: 'addMultiEventListenerOnce',
        value: function addMultiEventListenerOnce(el, events, callback) {
          var _this = this;

          var _cb;

          _cb = function cb(e) {
            _this.removeMultiEventListener(el, events, _cb);

            return callback(e);
          };

          return this.addMultiEventListener(el, events, _cb);
        }
      }]);
      return Util;
    }();

    Util.transitionEndEvents = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd'];
    return Util;
  }.call(undefined);

  var ResponsiveImageGallery;

  var responsiveImageGallery = ResponsiveImageGallery = function () {
    // @params {Object} o
    function ResponsiveImageGallery() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
      classCallCheck(this, ResponsiveImageGallery);
      var activeEl, c, categories, i, j, len, len1, ref;
      this.extractAttributes(o);

      if (!(this.el = Util$1.getElement(o.el))) {
        throw new Error('Element could not be found');
      }

      this.el.style.position = 'relative';
      this.el.style.overflow = 'hidden';

      if (this.bar = Util$1.getElement(o.bar)) {
        if (activeEl = this.bar.querySelector('*[category=\'' + this.active + '\']')) {
          activeEl.classList.add('rig-active');
        }

        categories = this.bar.querySelectorAll('*[category]');
        this.setCategory = this.setCategory.bind(this);

        for (i = 0, len = categories.length; i < len; i++) {
          c = categories[i];
          c.addEventListener('click', this.setCategory, true);
        }
      }

      this.elements = [];
      ref = this.el.children;

      for (j = 0, len1 = ref.length; j < len1; j++) {
        c = ref[j];
        c.style.position = 'absolute';
        this.elements.push({
          el: c,
          category: c.getAttribute('category'),
          active: true
        });
      }

      this.resize = this.resize.bind(this);
      window.addEventListener('resize', this.resize, true);
      this.resize();
    } // Extracts attributes from default options.
    // @params {Object} o


    createClass(ResponsiveImageGallery, [{
      key: 'extractAttributes',
      value: function extractAttributes(o) {
        var key, results, value;

        for (key in defaultOptions) {
          value = defaultOptions[key];

          if (o[key] == null) {
            o[key] = value;
          }
        }

        results = [];

        for (key in o) {
          value = o[key];

          if (value != null) {
            results.push(this[key] = value);
          } else {
            results.push(void 0);
          }
        }

        return results;
      } // @params {Event} e

    }, {
      key: 'setCategory',
      value: function setCategory(e) {
        return this.set(e.target.getAttribute('category'));
      } // Returns the active category.
      // @returns {String}

    }, {
      key: 'get',
      value: function get$$1() {
        return this.active;
      } // Sets the new category and animates.
      // @params {String} active
      // @params {Boolean} animate

    }, {
      key: 'set',
      value: function set$$1(active) {
        var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var e;

        if (!this.processing && (!animate || active !== this.active)) {
          this.processing = true;
          this.active = active;

          if (this.bar) {
            if (e = this.bar.querySelector('.rig-active')) {
              e.classList.remove('rig-active');
            }

            if (e = this.bar.querySelector('*[category=\'' + this.active + '\']')) {
              e.classList.add('rig-active');
            }
          }

          return this.animate(animate);
        }
      } // @returns {String}

    }, {
      key: 'getTiming',
      value: function getTiming() {
        return this.timing;
      } // @params {String} timing

    }, {
      key: 'setTiming',
      value: function setTiming(timing) {
        this.timing = timing;
      } // @returns {Number}

    }, {
      key: 'getDuration',
      value: function getDuration() {
        return this.duration;
      } // @params {Number} duration

    }, {
      key: 'setDuration',
      value: function setDuration(duration) {
        this.duration = duration;
      } // Destroys the gallery.

    }, {
      key: 'destroy',
      value: function destroy() {
        var c, categories, i, len;
        window.removeEventListener('resize', this.resize, true);

        if (this.bar) {
          categories = this.bar.querySelectorAll('*[category]');

          for (i = 0, len = categories.length; i < len; i++) {
            c = categories[i];
            c.removeEventListener('click', this.setCategory, true);
          }
        }

        return this.el.innerHTML = '';
      } // Resizes elements.

    }, {
      key: 'resize',
      value: function resize() {
        var area, count, status, w;

        if (!this.processing) {
          this.processing = true;
          w = this.el.offsetWidth;
          count = Math.floor(w / this.minWidth) + 1;

          while (true) {
            count -= 1;
            area = this.minWidth * count + this.horizontalSpace * (count - 1);

            if (w >= area || count < 2) {
              break;
            }
          }

          if (count < 2) {
            count = 1;
            this.width = this.overflow ? this.minWidth : w;
          } else {
            this.width = (w - this.horizontalSpace * (count - 1)) / count;
          }

          if (this.width > this.maxWidth) {
            this.width = this.maxWidth;
          }

          status = count !== this.count && this.count != null;
          this.count = count;
          return this.animate(status);
        } else {
          if (this.processingTimeout) {
            clearTimeout(this.processingTimeout);
          }

          return this.processingTimeout = setTimeout(this.resize, 500);
        }
      } // Sets the width and position of gallery elements.
      // @params {Boolean} animation

    }, {
      key: 'animate',
      value: function animate() {
        var _this = this;

        var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var columnHeight, elHeight, g, h, height, i, j, len, nColumnHeight, oLeft, oTop, r, ref, ref1, row, rowHeight, style, t, transform, unactive;
        row = -1;
        rowHeight = [];
        columnHeight = 0;
        nColumnHeight = 0;

        if (this.height) {
          height = this.width * this.height / 100;
        }

        this.completed = 0;
        ref = this.elements;

        for (i = 0, len = ref.length; i < len; i++) {
          g = ref[i];

          if (g.category === this.active || this.active === '*') {
            if (!g.active) {
              unactive = true;
              g.active = true;
              g.el.setAttribute('style', (g.el.getAttribute('style') || '').replace(/height[^;]+;?/g, ''));
              g.el.style.visibility = 'visible';
            }

            g.el.style.width = this.width + 'px';

            if (height) {
              g.el.style.height = height + 'px';
            }

            oLeft = g.left;
            oTop = g.top;
            h = g.el.offsetHeight + this.verticalSpace;

            if (this.grid) {
              if (!((row += 1) < this.count)) {
                row = 0;
                columnHeight += nColumnHeight;
                nColumnHeight = 0;
              }

              g.top = columnHeight;

              if (h > nColumnHeight) {
                nColumnHeight = h;
              }
            } else {
              for (r = j = 0, ref1 = this.count - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; r = 0 <= ref1 ? ++j : --j) {
                if (rowHeight[r] == null) {
                  rowHeight[r] = 0;
                }

                if (rowHeight[r] < rowHeight[row] || rowHeight[row] == null) {
                  row = r;
                }
              }

              g.top = rowHeight[row];
              rowHeight[row] += h;
            }

            g.left = this.width * row + this.horizontalSpace * row;
            style = g.el.getAttribute('style').replace(/(-webkit-transition|-ms-transition|transition)[^;]+;?/g, '');

            if (animation) {
              t = this.duration + 'ms 0s ' + this.timing;
              style += '-webkit-transition: -webkit-transform ' + t + ';\n-ms-transition: -ms-transform ' + t + ';\ntransition: transform ' + t + ';';
            }

            g.el.setAttribute('style', style);
            g.el.style.opacity = 1;
            transform = 'translate(' + g.left + 'px, ' + g.top + 'px) scale(1)';
            g.el.style.webkitTransform = transform;
            g.el.style.msTransform = transform;
            g.el.style.transform = transform;

            if (animation && (oLeft !== g.left || oTop !== g.top || unactive != null)) {
              Util$1.addMultiEventListenerOnce(g.el, Util$1.transitionEndEvents, this.completeProcess.bind(this));
            } else {
              this.completed += 1;
            }
          } else {
            if (!g.active) {
              this.completed += 1;
            } else {
              if (!animation) {
                this.completed += 1;
                g.active = false;
                g.el.setAttribute('style', 'position:absolute;visibility:hidden;width:0;height:0;-webkit-transform:scale(.75);-ms-transform:scale(.75);transform:scale(.75)');
                g.left = 0;
                g.top = 0;
              } else {
                style = (g.el.getAttribute('style') || '').replace(/(-webkit-transition|-ms-transition|transition|-webkit-transform|-ms-transform|transform)[^;]+;?/g, '');
                t = this.duration + 'ms 0s ' + this.timing + ', opacity ' + this.duration + 'ms 0s ' + this.timing + ', visibility 0s ' + (this.duration + 1) + 'ms ' + this.timing;
                transform = 'translate(' + g.left + 'px, ' + g.top + 'px) scale(.75)';
                style += '-webkit-transition: -webkit-transform ' + t + ';\n-ms-transition: -ms-transform ' + t + ';\ntransition: transform ' + t + ';\n-webkit-transform: ' + transform + ';\n-ms-transform: ' + transform + ';\ntransform: ' + transform + ';\nopacity: 0;\nvisibility: hidden;';
                g.el.setAttribute('style', style);

                (function (g) {
                  return Util$1.addMultiEventListenerOnce(g.el, Util$1.transitionEndEvents, function () {
                    g.active = false;
                    g.el.setAttribute('style', 'position:absolute;visibility:hidden;-webkit-transform:scale(.75);-ms-transform:scale(.75);transform:scale(.75);width:0;height:0;opacity:0;');
                    g.left = 0;
                    g.top = 0;
                    return _this.completeProcess();
                  });
                })(g);
              }
            }
          }
        }

        elHeight = this.elHeight;

        if (this.grid) {
          this.elHeight = nColumnHeight + columnHeight - this.verticalSpace;
        } else {
          h = rowHeight.reduce(function (a, b) {
            if (a > b) {
              return a;
            } else {
              return b;
            }
          }, 0);
          this.elHeight = h - this.verticalSpace;
        }

        if (elHeight !== this.elHeight) {
          style = (this.el.getAttribute('style') || '').replace(/(-webkit-transition|-ms-transition|transition)[^;]+;?/g, '');

          if (animation) {
            t = 'height ' + this.duration + 'ms 0s ' + this.timing;
            style += '-webkit-transition: ' + t + ';\n-ms-transition: ' + t + ';\ntransition: ' + t + ';';
          }

          style += 'height:' + this.elHeight + 'px;';
          this.el.setAttribute('style', style);
          this.resize();
        }

        if (this.completed === this.elements.length) {
          return this.processing = false;
        }
      }
    }, {
      key: 'completeProcess',
      value: function completeProcess() {
        if ((this.completed += 1) === this.elements.length) {
          return this.processing = false;
        }
      }
    }]);
    return ResponsiveImageGallery;
  }();

  var Gallery;
  var Gallery$1 = Gallery =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Gallery, _React$Component);

    function Gallery(props) {
      var _this;

      _classCallCheck(this, Gallery);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));
      _this.add = _this.add.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.remove = _this.remove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Gallery, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        return this.gallery = new responsiveImageGallery({
          el: this.el,
          bar: this.props.bar,
          active: this.props.active,
          timing: this.props.timing,
          duration: this.props.duration,
          minWidth: this.props.minWidth,
          maxWidth: this.props.maxWidth,
          height: this.props.height,
          horizontalSpace: this.props.horizontalSpace,
          verticalSpace: this.props.horizontalSpace,
          overflow: this.props.overflow,
          grid: this.props.grid
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(np) {
        if (np.timing !== this.props.timing) {
          this.setTiming(np.timing);
        }

        if (np.duration !== this.props.duration) {
          return this.setDuration(np.duration);
        }
      }
    }, {
      key: "add",
      value: function add(index, el, category) {
        if (this.gallery) {
          this.gallery.elements.splice(index, 0, {
            el: el,
            category: category,
            active: true
          });
          return this.gallery.resize();
        }
      }
    }, {
      key: "remove",
      value: function remove(index) {
        this.gallery.elements.splice(index, 1);
        return this.gallery.resize();
      } // RIG methods

    }, {
      key: "get",
      value: function get() {
        return this.gallery.get();
      }
    }, {
      key: "set",
      value: function set(category, animate) {
        return this.gallery.set(category, animate);
      }
    }, {
      key: "getTiming",
      value: function getTiming() {
        return this.gallery.getTiming();
      }
    }, {
      key: "setTiming",
      value: function setTiming(timing) {
        return this.gallery.setTiming(timing);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.gallery.getDuration();
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        return this.gallery.setDuration(duration);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        return this.gallery.destroy();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return react.createElement("div", {
          ref: function ref(node) {
            return _this2.el = node;
          }
        }, react.Children.map(this.props.children, function (child, index) {
          return react.cloneElement(child, {
            index: index,
            add: _this2.add,
            remove: _this2.remove
          });
        }));
      }
    }]);

    return Gallery;
  }(react.Component);
  Gallery.propTypes = {
    bar: propTypes.oneOfType([typeof window !== 'undefined' ? propTypes.instanceOf(Element) : void 0, propTypes.string]).isRequired,
    active: propTypes.string,
    timing: propTypes.string,
    duration: propTypes.number,
    minWidth: propTypes.number,
    maxWidth: propTypes.number,
    height: propTypes.number,
    horizontalSpace: propTypes.number,
    verticalSpace: propTypes.number,
    overflow: propTypes.bool,
    grid: propTypes.bool
  };
  Gallery.defaultProps = {
    active: '*',
    timing: 'ease',
    duration: 500,
    minWidth: 250,
    maxWidth: 500,
    height: 80,
    horizontalSpace: 10,
    verticalSpace: 10,
    overflow: false,
    grid: true
  };

  var Element$1;
  var Element$2 = Element$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element() {
      _classCallCheck(this, Element);

      return _possibleConstructorReturn(this, _getPrototypeOf(Element).apply(this, arguments));
    }

    _createClass(Element, [{
      key: "componentDidMount",
      value: function componentDidMount() {} //@props.add @props.index, @el, @props.category

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        return this.props.remove(this.props.index);
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        return react.createElement("div", {
          style: {
            position: 'absolute'
          },
          category: this.props.category,
          ref: function ref(node) {
            return _this.el = node;
          }
        }, this.props.children);
      }
    }]);

    return Element;
  }(react.Component);
  Element$1.propTypes = {
    category: propTypes.string.isRequired,
    index: propTypes.number,
    add: propTypes.func,
    remove: propTypes.func
  };

  exports.Gallery = Gallery$1;
  exports.Element = Element$2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
