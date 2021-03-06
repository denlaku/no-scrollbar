!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define([ "react" ], t) : "object" == typeof exports ? exports.NoScrollbar = t(require("react")) : e.NoScrollbar = t(e.React);
}(this, function(e) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e;
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 1);
    }([ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), a = n(7), f = r(a), s = n(5), l = (r(s), function(e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.mount = !1, n.state = {
                    width: 0
                }, n.handleResize = n.handleResize.bind(n), n;
            }
            return u(t, e), c(t, [ {
                key: "componentDidMount",
                value: function() {
                    this.mount = !0, this.handleResize();
                }
            }, {
                key: "handleResize",
                value: function() {
                    this.mount && this.node && this.setState({
                        width: this.node.offsetWidth
                    });
                }
            }, {
                key: "handleRef",
                value: function(e) {
                    this.node = e;
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = this.props, n = t.scrollWidth, r = t.overflowX, o = t.children, i = {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }, u = {
                        width: "calc(100% + " + n + ")",
                        height: "100%",
                        overflowX: r,
                        overflowY: "auto"
                    }, c = {
                        width: this.state.width + "px"
                    };
                    return f.default.createElement("div", {
                        ref: function(t) {
                            return e.handleRef(t);
                        },
                        style: i
                    }, f.default.createElement("div", {
                        style: u
                    }, f.default.createElement("div", {
                        style: c
                    }, this.mount ? o : null)));
                }
            } ]), t;
        }(a.Component));
        l.defaultProps = {
            scrollWidth: "25px",
            overflowX: "hidden"
        }, t.default = l;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = o.default;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return function() {
                return e;
            };
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), 
        o.thatReturnsThis = function() {
            return this;
        }, o.thatReturnsArgument = function(e) {
            return e;
        }, e.exports = o;
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n, r, i, u, c, a) {
            if (o(t), !e) {
                var f;
                if (void 0 === t) f = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var s = [ n, r, i, u, c, a ], l = 0;
                    f = new Error(t.replace(/%s/g, function() {
                        return s[l++];
                    })), f.name = "Invariant Violation";
                }
                throw f.framesToPop = 1, f;
            }
        }
        var o = function(e) {};
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), o = n(3), i = n(6);
        e.exports = function() {
            function e(e, t, n, r, u, c) {
                c !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            }
            function t() {
                return e;
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n;
        };
    }, function(e, t, n) {
        e.exports = n(4)();
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(t, n) {
        t.exports = e;
    } ]);
});
//# sourceMappingURL=no-scrollbar.js.map