!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.gx = e()
}
(this, function () {
    "use strict";
    var t,
    e,
    a,
    n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    }
     : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    o = (function () {
        function h(t) {
            this.value = t
        }
        function t(i) {
            var s,
            o;
            function r(t, e) {
                try {
                    var a = i[t](e),
                    n = a.value;
                    n instanceof h ? Promise.resolve(n.value).then(function (t) {
                        r("next", t)
                    }, function (t) {
                        r("throw", t)
                    }) : u(a.done ? "return" : "normal", a.value)
                } catch (t) {
                    u("throw", t)
                }
            }
            function u(t, e) {
                switch (t) {
                case "return":
                    s.resolve({
                        value: e,
                        done: !0
                    });
                    break;
                case "throw":
                    s.reject(e);
                    break;
                default:
                    s.resolve({
                        value: e,
                        done: !1
                    })
                }
                (s = s.next) ? r(s.key, s.arg) : o = null
            }
            this._invoke = function (n, i) {
                return new Promise(function (t, e) {
                    var a = {
                        key: n,
                        arg: i,
                        resolve: t,
                        reject: e,
                        next: null
                    };
                    o ? o = o.next = a : (s = o = a, r(n, i))
                })
            },
            "function" != typeof i.return && (this.return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function () {
            return this
        }),
        t.prototype.next = function (t) {
            return this._invoke("next", t)
        },
        t.prototype.throw = function (t) {
            return this._invoke("throw", t)
        },
        t.prototype.return = function (t) {
            return this._invoke("return", t)
        }
    }
        (), function (t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }),
    i = function () {
        function n(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function (t, e, a) {
            return e && n(t.prototype, e),
            a && n(t, a),
            t
        }
    }
    (),
    r = function (t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    },
    u = function (t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    },
    h = function () {
        function n(t, e) {
            o(this, n);
            var a = t.dm();
            this.gv = t,
            this.content = a.getDataByTag(e)
        }
        return i(n, [{
                    key: "hide",
                    value: function () {
                        this.content.getChildren().each(function (t) {
                            t.s("2d.visible", !1)
                        }),
                        this.onHide()
                    }
                }, {
                    key: "show",
                    value: function () {
                        this.content.getChildren().each(function (t) {
                            t.s("2d.visible", !0)
                        }),
                        this.onShow()
                    }
                }, {
                    key: "onShow",
                    value: function () {}
                }, {
                    key: "onHide",
                    value: function () {
                        this.timer && (clearInterval(this.timer), this.timer = null)
                    }
                }
            ]),
        n
    }
    (),
    l = function (t, e) {
        var a = e;
        a = (a = a.replace(/yyyy|YYYY/, t.getFullYear())).replace(/yy|YY/, 9 < t.getYear() % 100 ? (t.getYear() % 100).toString() : "0" + t.getYear() % 100);
        var n = t.getMonth() + 1;
        return a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/MM/, 9 < n ? n.toString() : "0" + n)).replace(/M/g, n)).replace(/w|W/g, ["日", "一", "二", "三", "四", "五", "六"][t.getDay()])).replace(/dd|DD/, 9 < t.getDate() ? t.getDate().toString() : "0" + t.getDate())).replace(/d|D/g, t.getDate())).replace(/hh|HH/, 9 < t.getHours() ? t.getHours().toString() : "0" + t.getHours())).replace(/h|H/g, t.getHours())).replace(/mm/, 9 < t.getMinutes() ? t.getMinutes().toString() : "0" + t.getMinutes())).replace(/m/g, t.getMinutes())).replace(/ss|SS/, 9 < t.getSeconds() ? t.getSeconds().toString() : "0" + t.getSeconds())).replace(/s|S/g, t.getSeconds())
    },
    f = function (t, e) {
        void 0 === e && (e = t, t = 0);
        var a = e - t;
        return Math.floor(Math.random() * a) + t
    },
    v = function (t, s) {
        t.each(function (t) {
            var e = t.getDataBindings();
            if (e) {
                for (var a in e.a) {
                    var n = e.a[a];
                    (i = s[n.id]) && (n.func && (i = n.func(i)), t.a(a, i))
                }
                for (var a in e.s) {
                    n = e.s[a];
                    (i = s[n.id]) && (n.func && (i = n.func(i)), t.s(a, i))
                }
                for (var a in e.p) {
                    var i;
                    n = e.p[a];
                    (i = s[n.id]) && (n.func && (i = n.func(i)), t[ht.Default.setter(a)](i))
                }
            }
        })
    },
    s = (t = 11131949.077777777, e = 3503549.843016676, a = 20037508.34, function (n, i, t, s) {
        var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "a",
        r = void 0,
        u = (t *= 1) - (r = "a" === o ? n.a(i) : "s" === o ? n.s(i) : n[ht.Default.getter(i)]());
        ht.Default.startAnim({
            frames: 32,
            interval: 10,
            easing: function (t) {
                return 1 - --t * t * t * t
            },
            action: function (t, e) {
                var a = r + u * t;
                s && (a = s(a)),
                "a" === o ? n.a(i, a) : "s" === o ? n.s(i, a) : n[ht.Default.setter(i)](a)
            }
        })
    }),
    c = function (t) {
        function n(t) {
            o(this, n);
            var e = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, "tabContent1")),
            a = t.dm();
            return e.alarmPast24 = a.getDataByTag("alarmPast24"),
            e.chart = a.getDataByTag("tab1Chart"),
            e.table = a.getDataByTag("tab1Table"),
            e.table.a("ht.onSelectRow", e.handleTableSelect.bind(e)),
            e.initChart(),
            e
        }
        return r(n, h),
        i(n, [{
                    key: "handleTableSelect",
                    value: function (t, e, a) {
                        var n = this;
                        a.getDataUI(this.chart)._htmlInfo.cache.htmlChart.clear(),
                        setTimeout(function () {
                            n.chart.iv()
                        }, 200),
                        v(this.gv.dm(), {
                            tab1No: t.no,
                            tab1Desc: t.desc
                        })
                    }
                }, {
                    key: "initChart",
                    value: function () {
                        for (var t = this.chart, e = Date.now(), a = e - 6e4, n = [], i = []; a < e; a += 2e3)
                            n.push(l(new Date(a), "mm:ss")), i.push(f(260, 320));
                        t.a({
                            xAxisData: n,
                            dataset: i
                        })
                    }
                }, {
                    key: "onShow",
                    value: function () {
                        var n = this,
                        i = this.chart;
                        this.timer = setInterval(function () {
                                var t = 1 * (n.alarmPast24.a("ht.value") || 0);
                                s(n.alarmPast24, "ht.value", t + f(5, 10), function (t) {
                                    return parseInt(t)
                                });
                                var e = i.a("xAxisData"),
                                a = i.a("dataset");
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                a.push(f(260, 320)),
                                i.a({
                                    xAxisData: e,
                                    dataset: a
                                }),
                                i.iv()
                            }, 2e3)
                    }
                }
            ]),
        n
    }
    (),
    d = function (t) {
        function e(t) {
            return o(this, e),
            u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "tabContent2"))
        }
        return r(e, h),
        e
    }
    (),
    g = function (t) {
        function s(t) {
            o(this, s);
            var e = u(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, "tabContent3")),
            a = e.gv.dm(),
            n = a.getDataByTag("alarmPast7Day"),
            i = a.getDataByTag("alarmPast13Week");
            return n.a("dataset", [0, 0, 0, 0, 0, 0, 0].map(function () {
                    return f(0, 100)
                })),
            i.a("dataset", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function () {
                    return f(0, 100)
                })),
            e
        }
        return r(s, h),
        i(s, [{
                    key: "onShow",
                    value: function () {
                        var t = this.gv.dm(),
                        e = 0;
                        this.timer = setInterval(function () {
                                e += f(1, 5),
                                v(t, {
                                    alarmLevel: f(1, 6),
                                    alarmTimes: e,
                                    alarmAvg: f(34, 51) + "%",
                                    alarmMax: f(12, 24) + "%",
                                    alarmTurbulence: f(18, 33) / 10 + "%"
                                })
                            }, 2e3)
                    }
                }
            ]),
        s
    }
    (),
    p = function (t) {
        function a(t) {
            o(this, a);
            var e = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t, "tabContent4"));
            return e.init(),
            e
        }
        return r(a, h),
        i(a, [{
                    key: "init",
                    value: function () {
                        for (var t = this.gv.dm(), e = this.chart1 = t.getDataByTag("tab4Chart1"), a = this.chart2 = t.getDataByTag("tab4Chart2"), n = this.chart3 = t.getDataByTag("tab4Chart3"), i = this.chart4 = t.getDataByTag("tab4Chart4"), s = this.chart5 = t.getDataByTag("tab4Chart5"), o = Date.now(), r = o - 6e4, u = [], h = [], c = []; r < o; r += 2e3)
                            u.push(l(new Date(r), "mm:ss")), h.push(f(260, 320)), c.push(f(260, 320));
                        for (e.a({
                                xAxisData: u,
                                dataset1: h,
                                dataset2: c
                            }), h = [], r = o - 6e4; r < o; r += 2e3)
                            h.push(f(260, 320));
                        for (a.a({
                                xAxisData: u,
                                dataset: h
                            }), h = [], r = o - 6e4; r < o; r += 2e3)
                            h.push(f(260, 320));
                        for (n.a({
                                xAxisData: u,
                                dataset: h
                            }), h = [], c = [], r = o - 6e4; r < o; r += 2e3)
                            h.push(f(20, 30) / 10), c.push(f(20, 30) / 10);
                        for (i.a({
                                xAxisData: u,
                                dataset1: h,
                                dataset2: c
                            }), h = [], c = [], r = o - 6e4; r < o; r += 2e3)
                            h.push(f(30, 36) / 10), c.push(f(30, 36) / 10);
                        s.a({
                            xAxisData: u,
                            dataset1: h,
                            dataset2: c
                        })
                    }
                }, {
                    key: "onShow",
                    value: function () {
                        var t = this.gv.dm(),
                        e = void 0,
                        a = void 0,
                        n = void 0,
                        i = void 0,
                        s = void 0,
                        o = this.chart1,
                        r = this.chart2,
                        u = this.chart3,
                        h = this.chart4,
                        c = this.chart5;
                        this.timer = setInterval(function () {
                                e = o.a("xAxisData"),
                                a = o.a("dataset1"),
                                n = o.a("dataset2"),
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                a.push(f(260, 320)),
                                n.shift(),
                                n.push(f(260, 320)),
                                o.a({
                                    xAxisData: e,
                                    dataset1: a,
                                    dataset2: n
                                }),
                                o.iv(),
                                e = r.a("xAxisData"),
                                a = r.a("dataset"),
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                a.push(f(260, 320)),
                                r.a({
                                    xAxisData: e,
                                    dataset: a
                                }),
                                r.iv(),
                                e = u.a("xAxisData"),
                                a = u.a("dataset"),
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                a.push(f(260, 320)),
                                u.a({
                                    xAxisData: e,
                                    dataset: a
                                }),
                                u.iv(),
                                e = h.a("xAxisData"),
                                a = h.a("dataset1"),
                                n = h.a("dataset2"),
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                i = f(20, 30) / 10,
                                a.push(i),
                                n.shift(),
                                n.push(f(20, 30) / 10),
                                h.a({
                                    xAxisData: e,
                                    dataset1: a,
                                    dataset2: n
                                }),
                                h.iv(),
                                e = c.a("xAxisData"),
                                a = c.a("dataset1"),
                                n = c.a("dataset2"),
                                e.shift(),
                                e.push(l(new Date, "mm:ss")),
                                a.shift(),
                                s = f(30, 36) / 10,
                                a.push(s),
                                n.shift(),
                                n.push(f(30, 36) / 10),
                                c.a({
                                    xAxisData: e,
                                    dataset1: a,
                                    dataset2: n
                                }),
                                c.iv(),
                                v(t, {
                                    numTI231: f(320, 361),
                                    alarmEstimate: f(6, 11),
                                    alarmCredible: f(60, 91),
                                    PI231: i + "",
                                    PI344: s + ""
                                })
                            }, 2e3)
                    }
                }
            ]),
        a
    }
    (),
    y = function () {
        function e(t) {
            o(this, e),
            this.gv = t,
            this.init()
        }
        return i(e, [{
                    key: "init",
                    value: function () {
                        var t = this.gv,
                        e = t.dm();
                        t.enableFlow(10);
                        var a = this.host = e.getDataByTag("alarmPoints"),
                        n = this.imgHost = e.getDataByTag("imgHost");
                        this.points = a.getAttaches(),
                        this.linkImages = n.getAttaches(),
                        this.active = e.getDataByTag("alarmActive"),
                        t.mi(this.handleInteractor, this);
                        var i = {
                            interval: 24,
                            action: function (t) {
                                if (!(t instanceof ht.Node && "symbols/闪烁.json" !== t.getImage())) {
                                    var e = t.a("isUp"),
                                    a = t.a("num") || 200;
                                    e ? a += 4 : a -= 4,
                                    t.s("body.color", "rgb(255, " + a + ", " + a + ")"),
                                    t.a("num", a),
                                    40 === a ? t.a("isUp", !0) : 140 === a && t.a("isUp", !1)
                                }
                            }
                        };
                        e.addScheduleTask(i)
                    }
                }, {
                    key: "handleInteractor",
                    value: function (t) {
                        if ("clickData" === t.kind && t.data.getHost() === this.host) {
                            var e = this.points.indexOf(t.data);
                            this.active.setY(t.data.p().y),
                            this.selectLinkImage(this.linkImages.get(e))
                        }
                    }
                }, {
                    key: "selectLinkImage",
                    value: function (t) {
                        this.hideAll(),
                        t.s("2d.visible", !0),
                        t.getChildren().each(function (t) {
                            t instanceof ht.Shape && t.s({
                                flow: !0,
                                "flow.element.background": "rgb(50,181,217)"
                            })
                        })
                    }
                }, {
                    key: "selectFirst",
                    value: function () {
                        this.selectLinkImage(this.linkImages.get(0))
                    }
                }, {
                    key: "hideAll",
                    value: function () {
                        this.linkImages.each(function (t) {
                            t.s("2d.visible", !1)
                        })
                    }
                }
            ]),
        e
    }
    (),
    b = function (t) {
        function a(t) {
            o(this, a);
            var e = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t, "tabContent5"));
            return e.alarm = new y(t),
            e
        }
        return r(a, h),
        i(a, [{
                    key: "onShow",
                    value: function () {
                        this.alarm.selectFirst()
                    }
                }, {
                    key: "onHide",
                    value: function () {
                        (function t(e, a, n) {
                            null === e && (e = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(e, a);
                            if (void 0 === i) {
                                var s = Object.getPrototypeOf(e);
                                return null === s ? void 0 : t(s, a, n)
                            }
                            if ("value" in i)
                                return i.value;
                            var o = i.get;
                            return void 0 !== o ? o.call(n) : void 0
                        })(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "onHide", this).call(this),
                        this.alarm.hideAll()
                    }
                }
            ]),
        a
    }
    (),
    m = function () {
        function e(t) {
            o(this, e),
            this.gv = t,
            this.init()
        }
        return i(e, [{
                    key: "init",
                    value: function () {
                        var e = this,
                        t = this.gv,
                        a = t.dm(),
                        n = this.tabs = [],
                        i = this.contents = [];
                        this.tabActive = a.getDataByTag("tabActive"),
                        n.push(a.getDataByTag("tab1")),
                        n.push(a.getDataByTag("tab2")),
                        n.push(a.getDataByTag("tab3")),
                        n.push(a.getDataByTag("tab4")),
                        n.push(a.getDataByTag("tab5")),
                        i.push(new c(t)),
                        i.push(new d(t)),
                        i.push(new g(t)),
                        i.push(new p(t)),
                        i.push(new b(t)),
                        t.mi(function (t) {
                            "clickData" === t.kind && e.selectTab(t.data)
                        }),
                        this.selectTab(0)
                    }
                }, {
                    key: "selectTab",
                    value: function (t) {
                        var e = t;
                        "object" === (void 0 === t ? "undefined" : n(t)) && (e = this.tabs.indexOf(t)),
                        e < 0 || (this.clear(), this.tabs[e].s({
                                "text.color": "rgb(51,153,255)"
                            }), this.tabActive.setX(this.tabs[e].getX()), this.contents[e].show())
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.tabs.forEach(function (t) {
                            t.s({
                                "text.color": "rgb(124,145,155)"
                            })
                        }),
                        this.contents.forEach(function (t) {
                            t.hide()
                        })
                    }
                }
            ]),
        e
    }
    (),
    D = function () {
        function e(t) {
            o(this, e),
            this.gv = t,
            this.init()
        }
        return i(e, [{
                    key: "init",
                    value: function () {
                        var e = this,
                        t = this.gv,
                        a = t.dm(),
                        n = this.tabs = [];
                        this.tabActive = a.getDataByTag("evalActive"),
                        n.push(a.getDataByTag("evalTab1")),
                        n.push(a.getDataByTag("evalTab2")),
                        n.push(a.getDataByTag("evalTab3")),
                        n.push(a.getDataByTag("evalTab4")),
                        n.push(a.getDataByTag("evalTab5")),
                        t.mi(function (t) {
                            "clickData" === t.kind && e.selectTab(t.data)
                        }),
                        this.selectTab(0)
                    }
                }, {
                    key: "selectTab",
                    value: function (t) {
                        var e = t;
                        "object" === (void 0 === t ? "undefined" : n(t)) && (e = this.tabs.indexOf(t)),
                        e < 0 || this.tabActive.p(this.tabs[e].p())
                    }
                }
            ]),
        e
    }
    (),
    T = function () {
        function e(t) {
            o(this, e),
            this.gv = t,
            this.init()
        }
        return i(e, [{
                    key: "init",
                    value: function () {
                        var e = this,
                        t = this.gv,
                        a = t.dm(),
                        n = this.tabs = [];
                        this.tabActive = a.getDataByTag("tdTabActive"),
                        n.push(a.getDataByTag("tdTab1")),
                        n.push(a.getDataByTag("tdTab2")),
                        n.push(a.getDataByTag("tdTab3")),
                        t.mi(function (t) {
                            "clickData" === t.kind && e.selectTab(t.data)
                        }),
                        this.selectTab(0)
                    }
                }, {
                    key: "selectTab",
                    value: function (t) {
                        var e = t;
                        if ("object" === (void 0 === t ? "undefined" : n(t)) && (e = this.tabs.indexOf(t)), !(e < 0)) {
                            this.clear();
                            var a = this.tabs[e];
                            a.s({
                                "text.color": "rgb(51,153,255)"
                            }),
                            this.tabActive.setWidth(a.getWidth()),
                            this.tabActive.setX(a.getX())
                        }
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.tabs.forEach(function (t) {
                            t.s({
                                "text.color": "rgb(124,145,155)"
                            })
                        })
                    }
                }
            ]),
        e
    }
    (),
    x = new(function () {
            function t() {
                o(this, t),
                this.init()
            }
            return i(t, [{
                        key: "init",
                        value: function () {
                            var a = this,
                            n = this.dm = new ht.DataModel,
                            i = this.gv = new ht.graph.GraphView(n);
                            i.getSelectWidth = function () {
                                return 0
                            },
                            i.setMovableFunc(function (t) {
                                return !1
                            }),
                            i.setPannable(!1),
                            i.setRectSelectable(!1),
                            i.setScrollBarVisible(!1),
                            i.handleScroll = function () {
                                return !1
                            },
                            i.addToDOM(),
                            ht.Default.xhrLoad("data/报警管理平台-合并.json", function (t) {
                                var e = ht.Default.parse(t);
                                n.deserialize(e),
                                i.fitContent(!1, 0),
                                a.onLoad()
                            }),
                            window.addEventListener("resize", function (t) {
                                i.fitContent(!1, 0)
                            })
                        }
                    }, {
                        key: "onLoad",
                        value: function () {
                            var t = this.gv;
                            this.subs = {
                                tab: new m(t),
                                evalTab: new D(t),
                                trendDetailTab: new T(t)
                            },
                            this.startClock()
                        }
                    }, {
                        key: "startClock",
                        value: function () {
                            var t = this.gv.dm(),
                            e = t.getDataByTag("date"),
                            a = t.getDataByTag("time"),
                            n = t.getDataByTag("week");
                            setInterval(function () {
                                var t = new Date;
                                e.s("text", l(t, "YYYY-MM-DD")),
                                a.s("text", l(t, "hh:mm:ss")),
                                n.s("text", "星期" + l(t, "w"))
                            }, 500)
                        }
                    }
                ]),
            t
        }
            ());
    return function (t, e) {
        void 0 === e && (e = {});
        var a = e.insertAt;
        if (t && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
            i.type = "text/css",
            "top" === a && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
            i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
        }
    }
    ("body{background:#071232}", {}),
    x
});
