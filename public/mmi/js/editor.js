/**
 * HT simple-2d-editor
 * index.js - 0.0.1
 * Compiled 7/28/2019, 9:31:16 PM
 */

var hteditor = function () {
    "use strict";
    function _classCallCheck(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function _defineProperties(e, t) {
        for (var a = 0; a < t.length; a++) {
            var o = t[a];
            o.enumerable = o.enumerable || !1,
                o.configurable = !0,
            "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
    }
    function _createClass(e, t, a) {
        return t && _defineProperties(e.prototype, t),
        a && _defineProperties(e, a),
            e
    }
    var serializerDialog = null,
        serializerInput = document.createElement("textarea");
    serializerInput.style.resize = "none";
    var initSerializerDialog = function () {
            (serializerDialog = new ht.widget.Dialog).setConfig({
                title: "序列化结果",
                content: serializerInput,
                closable: !0,
                width: 320,
                height: 340,
                buttons: [{
                    label: "Close",
                    action: function (e, t) {
                        serializerDialog.hide()
                    }
                }
                ],
                buttonsAlign: "right"
            })
        },
        showSerializerDialog = function (e) {
            serializerDialog || initSerializerDialog(),
                serializerInput.innerHTML = e,
                serializerDialog.show()
        },
        CreateEdgeInteractor = function e(t, a) {
            e.superClass.constructor.call(this, t),
                this._type = a
        };
    ht.Default.def(CreateEdgeInteractor, ht.graph.Interactor, {
        setUp: function () {
            CreateEdgeInteractor.superClass.setUp.call(this),
                this._autoMakeVisible = this._graphView.isAutoMakeVisible(),
                this._graphView.setAutoMakeVisible(!1),
                this._graphView.sm().cs(),
                this._graphView.addTopPainter(this)
        },
        tearDown: function () {
            CreateEdgeInteractor.superClass.tearDown.call(this),
                this._graphView.setAutoMakeVisible(this._autoMakeVisible),
                this.clear(),
                this._graphView.removeTopPainter(this)
        },
        clear: function () {
            this._target = null,
                this._source = null,
                this._logicalPoint = null
        },
        getDataAt: function (e) {
            if (ht.Default.isLeftButton(e) && 1 === ht.Default.getTouchCount(e)) {
                var t = this._graphView.getDataAt(e);
                if (t instanceof ht.Node)
                    return t
            }
            return null
        },
        handle_mousedown: function (e) {
            this.handle_touchstart(e)
        },
        handle_touchstart: function (e) {
            ht.Default.preventDefault(e),
                this.clear(),
                this._source = this.getDataAt(e),
            this._source && (this.startDragging(e), this._graphView.getSelectionModel().setSelection(this._source))
        },
        handleWindowMouseMove: function (e) {
            this.handleWindowTouchMove(e)
        },
        handleWindowTouchMove: function (e) {
            this.autoScroll(e),
                this.redraw();
            var t = this._graphView;
            this._logicalPoint = t.getLogicalPoint(e);
            var a = [this._source];
            (this._target = this.getDataAt(e)) && a.push(this._target),
                t.sm().ss(a),
                this.redraw()
        },
        handleWindowMouseUp: function (e) {
            this.handleWindowTouchEnd(e)
        },
        handleWindowTouchEnd: function (e) {
            var t = this._graphView;
            if (this._target) {
                var a = new ht.Edge(this._source, this._target);
                a.s("edge.type", this._type),
                    a.setParent(t.getCurrentSubGraph()),
                    t.dm().add(a),
                    t.sm().ss(a)
            }
            console.log(this),
                console.log(arguments),
                this.gv.editor.resetDefault()
        },
        getSourcePosition: function () {
            if (!this._source)
                return null;
            if (this._source instanceof ht.Node)
                return this._source.getPosition();
            var e = this._graphView.getDataUIBounds(this._source);
            return {
                x: e.x + e.width / 2,
                y: e.y + e.height / 2
            }
        },
        redraw: function () {
            var e = this.getSourcePosition(),
                t = this._logicalPoint;
            if (e && t) {
                var a = ht.Default.unionPoint(e, t);
                ht.Default.grow(a, 1),
                    this._graphView.redraw(a)
            }
        },
        draw: function (e) {
            var t = this.getSourcePosition(),
                a = this._logicalPoint;
            t && a && (e.save(), e.lineWidth = 1, e.strokeStyle = "#1ABC9C", e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(a.x, a.y), e.stroke(), e.restore())
        }
    });
    var CreateShapeInteractor = function e(t, a) {
        e.superClass.constructor.call(this, t),
            this._points = new ht.List,
            this._type = a
    };
    ht.Default.def(CreateShapeInteractor, ht.graph.Interactor, {
        setUp: function () {
            CreateShapeInteractor.superClass.setUp.call(this),
                this._graphView.addTopPainter(this),
                this._onBackgroundDoubleClicked = this._graphView.onBackgroundDoubleClicked,
                this._graphView.onBackgroundDoubleClicked = function () {},
                this._graphView.sm().cs()
        },
        tearDown: function () {
            CreateShapeInteractor.superClass.tearDown.call(this),
                this._graphView.removeTopPainter(this),
                this._graphView.onBackgroundDoubleClicked = this._onBackgroundDoubleClicked,
                this.clear()
        },
        clear: function () {
            this._points.clear(),
                this._downPoint = null,
                this._movePoint = null,
                this._isLeftClick = !1
        },
        handle_mousedown: function (e) {
            this.handle_touchstart(e)
        },
        handle_touchstart: function (e) {
            this._isLeftClick = ht.Default.isLeftButton(e) && 1 === ht.Default.getTouchCount(e);
            var t = this._graphView;
            this._downPoint = this._movePoint = t.lp(e),
                this.startDragging(e)
        },
        handleWindowMouseMove: function (e) {
            this.handle_mousemove(e)
        },
        handle_mousemove: function (e) {
            if (this.redraw(), this._movePoint = this._graphView.getLogicalPoint(e), this._isLeftClick) {
                var t = this._graphView,
                    a = t.getZoom(),
                    o = this._movePoint.x - this._downPoint.x;
                t.tx(t.tx() + o * a);
                var s = this._movePoint.y - this._downPoint.y;
                t.ty(t.ty() + s * a)
            }
            this.redraw()
        },
        handleWindowMouseUp: function (e) {},
        handle_mouseup: function (e) {
            this.handle_touchend(e)
        },
        handle_touchend: function (e) {
            if (this._isLeftClick && this._downPoint === this._movePoint)
                if (ht.Default.isDoubleClick(e)) {
                    if (1 < this._points.size()) {
                        var t = new this._type;
                        t.s({
                            "shape.background": null,
                            "shape.border.width": 2
                        }),
                            t.setPoints(this._points.toArray());
                        var a = this._graphView;
                        return t.setParent(a.getCurrentSubGraph()),
                            a.dm().add(t),
                            a.sm().ss(t),
                            void this.gv.editor.resetDefault()
                    }
                } else
                    this._points.add(this._downPoint);
            this.redraw(),
                this._isLeftClick = !1
        },
        handle_mousewheel: function (e) {
            this._graphView.handleScroll(e, e.wheelDelta)
        },
        handle_DOMMouseScroll: function (e) {
            2 === e.axis && this._graphView.handleScroll(e, -e.detail)
        },
        redraw: function () {
            var e = this._points.toList();
            if (0 !== e.size()) {
                this._movePoint && e.add(this._movePoint);
                var t = ht.Default.unionPoint(e);
                t && (ht.Default.grow(t, 5), this._graphView.redraw(t))
            }
        },
        draw: function (e) {
            var t = this._points.size();
            if (0 !== t) {
                var a = this._points.get(0);
                e.lineWidth = 1,
                    e.strokeStyle = "#1ABC9C",
                    e.beginPath(),
                    e.moveTo(a.x, a.y);
                for (var o = 1; o < t; o++)
                    a = this._points.get(o), e.lineTo(a.x, a.y);
                for (this._movePoint && e.lineTo(this._movePoint.x, this._movePoint.y), e.stroke(), o = 0; o < t; o++)
                    a = this._points.get(o), e.fillStyle = "white", e.strokeStyle = "#34495E", e.lineWidth = 1, e.beginPath(), e.arc(a.x, a.y, 4, 0, 2 * Math.PI, !0), e.fill(), e.stroke()
            }
        }
    });
    var colorObject = {
            func: function (e) {
                return e.selected ? "#1E90FF" : "#000"
            }
        },
        toolbar_config_left = [{
            id: "edit",
            unfocusable: !0,
            toolTip: "编辑",
            groupId: "bar",
            icon: {
                width: 16,
                height: 16,
                comps: [{
                    type: "image",
                    name: "symbols/toolbarIcon/select.json",
                    color: colorObject
                }
                ]
            },
            action: function (e, t) {
                t.editor.g2d.setEditable(!0)
            }
        }, {
            id: "edge",
            unfocusable: !0,
            toolTip: "连线",
            groupId: "bar",
            icon: {
                width: 16,
                height: 16,
                comps: [{
                    type: "image",
                    name: "symbols/toolbarIcon/edge.json",
                    color: colorObject
                }
                ]
            },
            action: function (e, t) {
                var a = t.editor.g2d,
                    o = new CreateEdgeInteractor(a);
                a.setInteractors([o]),
                    a.sm().cs()
            }
        }, {
            id: "rightAngle",
            unfocusable: !0,
            toolTip: "直角连线",
            groupId: "bar",
            icon: {
                width: 16,
                height: 16,
                comps: [{
                    type: "image",
                    name: "symbols/toolbarIcon/right-angle.json",
                    color: colorObject
                }
                ]
            },
            action: function (e, t) {
                var a = t.editor.g2d,
                    o = new CreateEdgeInteractor(a, "v.h");
                a.setInteractors([o]),
                    a.sm().cs()
            }
        }, {
            id: "polyline",
            unfocusable: !0,
            toolTip: "多边形",
            groupId: "bar",
            icon: {
                width: 16,
                height: 16,
                comps: [{
                    type: "image",
                    name: "symbols/toolbarIcon/polygon.json",
                    color: colorObject
                }
                ]
            },
            action: function (e, t) {
                var a = t.editor.g2d,
                    o = new CreateShapeInteractor(a, ht.Shape);
                a.setInteractors([o]),
                    a.sm().cs()
            }
        }
        ],
        toolbar_config_right = [{
            id: "rulerframe",
            icon: {
                width: 16,
                height: 16,
                comps: [{
                    type: "image",
                    name: "symbols/toolbarIcon/rulerframe.json",
                    color: colorObject
                }
                ]
            },
            toolTip: "刻度尺",
            type: "toggle",
            selected: !0,
            action: function (e, t) {
                var a = t.editor.rulerFrame;
                a.getTopRulerConfig().visible = this.selected,
                    a.getLeftRulerConfig().visible = this.selected,
                    a.validateImpl()
            }
        }, {
            icon: "symbols/toolbarIcon/zoom-in.json",
            toolTip: "放大",
            action: function (e, t) {
                t.editor.g2d.zoomIn(!0)
            }
        }, {
            icon: "symbols/toolbarIcon/zoom-out.json",
            toolTip: "缩小",
            action: function (e, t) {
                t.editor.g2d.zoomOut(!0)
            }
        }, {
            icon: "symbols/toolbarIcon/export.json",
            toolTip: "序列化场景",
            action: function (e, t) {
                var a = t.editor.dm;
                showSerializerDialog(a.serialize())
            }
        }
        ],
        toolbarConfig = {
            toolbar_config_left: toolbar_config_left,
            toolbar_config_right: toolbar_config_right
        },
        palette_config = {
            scene: {
                name: "电力",
                items: [{
                    name: "文字",
                    image: "__text__",
                    type: ht.Text
                }, {
                    name: "箭头",
                    image: "symbols/电力/arrow.json"
                }, {
                    name: "地线",
                    image: "symbols/电力/earthwire.json"
                }, {
                    name: "闪烁灯",
                    image: "symbols/电力/light.json"
                }, {
                    name: "闪烁灯2",
                    image: "symbols/电力/xLight.json"
                }, {
                    name: "红灯",
                    image: "symbols/隧道用图标/交通灯/灯/灯-红.json"
                }, {
                    name: "绿灯",
                    image: "symbols/隧道用图标/交通灯/灯/灯-绿.json"
                }, {
                    name: "T接线",
                    image: "symbols/电力/T接线.json"
                }, {
                    name: "避雷器",
                    image: "symbols/电力/避雷器.json"
                }, {
                    name: "带单触头高压跌落式熔断器的手车变压",
                    image: "symbols/电力/带单触头高压跌落式熔断器的手车变压.json"
                }, {
                    name: "带有载调压俩圈自耦变压器",
                    image: "symbols/电力/带有载调压俩圈自耦变压器.json"
                }, {
                    name: "刀闸",
                    image: "symbols/电力/刀闸.json",
                    type: ht.Switch
                }, {
                    name: "电抗",
                    image: "symbols/电力/电抗.json"
                }, {
                    name: "电力电感器",
                    image: "symbols/电力/电力电感器.json"
                }, {
                    name: "电流互感器",
                    image: "symbols/电力/电流互感器.json"
                }, {
                    name: "电容式电压互感器",
                    image: "symbols/电力/电容式电压互感器.json"
                }, {
                    name: "电压互感器1",
                    image: "symbols/电力/电压互感器1.json"
                }, {
                    name: "电压互感器2",
                    image: "symbols/电力/电压互感器2.json"
                }, {
                    name: "电压互感器3",
                    image: "symbols/电力/电压互感器3.json"
                }, {
                    name: "电阻",
                    image: "symbols/电力/电阻.json"
                }, {
                    name: "放电间隙",
                    image: "symbols/电力/放电间隙.json"
                }, {
                    name: "分裂电抗",
                    image: "symbols/电力/分裂电抗.json"
                }, {
                    name: "高压熔断器",
                    image: "symbols/电力/高压熔断器.json"
                }, {
                    name: "接地",
                    image: "symbols/电力/接地.json"
                }, {
                    name: "禁止操作",
                    image: "symbols/电力/禁止操作.json"
                }, {
                    name: "禁止分闸",
                    image: "symbols/电力/禁止分闸.json"
                }, {
                    name: "禁止合闸",
                    image: "symbols/电力/禁止合闸.json"
                }, {
                    name: "禁止合闸线路有人工作",
                    image: "symbols/电力/禁止合闸线路有人工作.json"
                }, {
                    name: "禁止合闸有人工作",
                    image: "symbols/电力/禁止合闸有人工作.json"
                }, {
                    name: "静止无功补偿器",
                    image: "symbols/电力/静止无功补偿器.json"
                }, {
                    name: "开关",
                    image: "symbols/电力/开关.json"
                }, {
                    name: "其它遥测",
                    image: "symbols/电力/其它遥测.json"
                }, {
                    name: "熔断开关",
                    image: "symbols/电力/熔断开关.json"
                }, {
                    name: "设备在检修",
                    image: "symbols/电力/设备在检修.json"
                }, {
                    name: "手车刀闸",
                    image: "symbols/电力/手车刀闸.json"
                }, {
                    name: "停电",
                    image: "symbols/电力/停电.json"
                }, {
                    name: "无功遥测",
                    image: "symbols/电力/无功遥测.json"
                }, {
                    name: "消弧线圈",
                    image: "symbols/电力/消弧线圈.json"
                }, {
                    name: "已接地",
                    image: "symbols/电力/已接地.json"
                }, {
                    name: "有功遥测",
                    image: "symbols/电力/有功遥测.json"
                }, {
                    name: "在此工作",
                    image: "symbols/电力/在此工作.json"
                }, {
                    name: "站用变",
                    image: "symbols/电力/站用变.json"
                }, {
                    name: "阻波器",
                    image: "symbols/电力/阻波器.json"
                }
                ]
            }
        },
        text_properties = [{
            categoryName: "文本",
            name: "text",
            displayName: "文本内容",
            accessType: "style",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.align",
            displayName: "水平对齐",
            accessType: "style",
            editable: !0,
            enum: {
                values: ["left", "center", "right"]
            }
        }, {
            categoryName: "文本",
            name: "text.vAlign",
            displayName: "垂直对齐",
            accessType: "style",
            editable: !0,
            enum: {
                values: ["top", "middle", "bottom"]
            }
        }, {
            categoryName: "文本",
            name: "text.color",
            displayName: "颜色",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.font",
            displayName: "字体",
            accessType: "style",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.shadow",
            displayName: "阴影",
            accessType: "style",
            valueType: "boolean",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.shadow.color",
            displayName: "阴影颜色",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.shadow.blur",
            displayName: "阴影模糊",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.shadow.offset.x",
            displayName: "阴影横偏移",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "文本",
            name: "text.shadow.offset.y",
            displayName: "阴影纵偏移",
            accessType: "style",
            valueType: "number",
            editable: !0
        }
        ],
        data_properties = [{
            name: "id"
        }, {
            name: "name",
            displayName: "名称",
            editable: !0
        }, {
            name: "tag",
            displayName: "标签",
            editable: !0
        }, {
            name: "parent",
            displayName: "父亲节点"
        }, {
            name: "2d.editable",
            accessType: "style",
            displayName: "可编辑",
            valueType: "boolean",
            editable: !0
        }, {
            name: "2d.movable",
            displayName: "可移动",
            accessType: "style",
            valueType: "boolean",
            editable: !0
        }, {
            name: "2d.selectable",
            displayName: "可选中",
            accessType: "style",
            valueType: "boolean",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "内容",
            name: "label.color",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "背景",
            name: "label.background",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "字体",
            name: "label.font",
            accessType: "style",
            editable: !0,
            formatValue: function (e) {
                return e || ht.Default.labelFont
            }
        }, {
            categoryName: "文本",
            displayName: "位置",
            name: "label.position",
            accessType: "style",
            editable: !0,
            slider: {
                min: 1,
                max: 55,
                step: 1
            }
        }, {
            categoryName: "文本",
            displayName: "横偏移",
            name: "label.offset.x",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "纵偏移",
            name: "label.offset.y",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "角度",
            name: "label.rotation",
            accessType: "style",
            editable: !0,
            slider: {
                min: 0,
                max: 2 * Math.PI,
                step: Math.PI / 180 * 5,
                getToolTip: function () {
                    return Math.round(this.getValue() / Math.PI * 180) + "°"
                }
            }
        }, {
            categoryName: "文本",
            displayName: "最大长度",
            name: "label.max",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "固定",
            name: "label.position.fixed",
            accessType: "style",
            valueType: "boolean",
            editable: !0
        }, {
            categoryName: "文本",
            displayName: "透明度",
            name: "label.opacity",
            accessType: "style",
            editable: !0,
            slider: {
                min: 0,
                max: 1,
                step: .1
            }
        }, {
            categoryName: "选中",
            displayName: "颜色",
            name: "select.color",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "选中",
            displayName: "宽度",
            name: "select.width",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "选中",
            displayName: "边距",
            name: "select.padding",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "选中",
            displayName: "类型",
            name: "select.type",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["rect", "circle", "oval", "roundRect"]
            }
        }
        ],
        node_properties = [{
            categoryName: "Node 节点",
            displayName: "吸附",
            name: "host"
        }, {
            categoryName: "Node 节点",
            displayName: "图片",
            name: "image",
            editable: !0
        }, {
            categoryName: "Node 节点",
            displayName: "位置",
            name: "position",
            getValue: function (e) {
                var t = e.getPosition();
                return "x: " + parseInt(t.x) + ", y: " + parseInt(t.y)
            }
        }, {
            categoryName: "Node 节点",
            displayName: "宽度",
            name: "width",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "Node 节点",
            displayName: "高度",
            name: "height",
            valueType: "number",
            editable: !0
        }, {
            categoryName: "Node 节点",
            displayName: "拉伸",
            name: "image.stretch",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["fill", "uniform", "centerUniform"]
            }
        }, {
            categoryName: "Node 节点",
            displayName: "角度",
            name: "rotation",
            valueType: "number",
            editable: !0,
            slider: {
                min: 0,
                max: 2 * Math.PI,
                getToolTip: function () {
                    return Math.round(this.getValue() / Math.PI * 180) + "°"
                }
            }
        }
        ],
        group_properties = [{
            categoryName: "组",
            displayName: "展开",
            name: "expanded",
            editable: !0
        }, {
            categoryName: "组",
            displayName: "类型",
            name: "group.type",
            editable: !0,
            accessType: "style",
            enum: {
                values: [null, "oval", "circle", "rect", "roundRect"]
            }
        }, {
            categoryName: "组",
            displayName: "图片",
            name: "group.image",
            accessType: "style",
            editable: !0
        }, {
            categoryName: "组",
            displayName: "拉伸",
            name: "group.image.stretch",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["fill", "uniform", "centerUniform"]
            }
        }, {
            categoryName: "组",
            displayName: "边距",
            name: "group.padding",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "顶边距",
            name: "group.padding.top",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "底边距",
            name: "group.padding.bottom",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "左边距",
            name: "group.padding.left",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "右边距",
            name: "group.padding.right",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "深度",
            name: "group.depth",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "图案",
            name: "group.border.pattern",
            editable: !0,
            accessType: "style",
            setValue: function setValue(data, property, value, view) {
                data.s("group.border.pattern", eval(value))
            },
            formatValue: function (e) {
                return "[" + (e || "") + "]"
            }
        }, {
            categoryName: "组",
            displayName: "边框宽度",
            name: "group.border.width",
            editable: !0,
            accessType: "style",
            valueType: "number"
        }, {
            categoryName: "组",
            displayName: "线帽样式",
            name: "group.border.cap",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["butt", "round", "square"]
            }
        }, {
            categoryName: "组",
            displayName: "交汇样式",
            name: "group.border.join",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["bevel", "round", "miter"]
            }
        }, {
            categoryName: "组",
            displayName: "背景",
            name: "group.background",
            editable: !0,
            accessType: "style",
            valueType: "color"
        }, {
            categoryName: "组",
            displayName: "渐进",
            name: "group.gradient",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["linear.southwest", "linear.southeast", "linear.northwest", "linear.northeast", "linear.north", "linear.south", "linear.west", "linear.east", "radial.center", "radial.southwest", "radial.southeast", "radial.northwest", "radial.northeast", "radial.north", "radial.south", "radial.west", "radial.east", "spread.horizontal", "spread.vertical", "spread.diagonal", "spread.antidiagonal", "spread.north", "spread.south", "spread.west", "spread.east"]
            }
        }, {
            categoryName: "组",
            displayName: "渐进色   ",
            name: "group.gradient.color",
            editable: !0,
            accessType: "style",
            valueType: "color"
        }, {
            categoryName: "组",
            displayName: "标题对齐",
            name: "group.title.align",
            editable: !0,
            accessType: "style",
            enum: {
                values: ["left", "center", "right"]
            }
        }, {
            categoryName: "组",
            displayName: "标题颜色",
            name: "group.title.color",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "组",
            displayName: "标题背景",
            name: "group.title.background",
            accessType: "style",
            valueType: "color",
            editable: !0
        }, {
            categoryName: "组",
            displayName: "标题字体",
            name: "group.title.font",
            accessType: "style",
            editable: !0,
            formatValue: function (e) {
                return e || ht.Default.labelFont
            }
        }
        ],
        edge_properties = [{
            name: "edge.width",
            displayName: "宽度",
            accessType: "style",
            valueType: "number",
            editable: !0
        }, {
            name: "edge.color",
            displayName: "颜色",
            accessType: "style",
            valueType: "color",
            editable: !0
        }
        ],
        properties_config = {
            text_properties: text_properties,
            data_properties: data_properties,
            node_properties: node_properties,
            group_properties: group_properties,
            edge_properties: edge_properties
        },
        Editor = function () {
            function e() {
                _classCallCheck(this, e),
                    this.dm = new ht.DataModel,
                    this.g2d = new ht.graph.GraphView(this.dm),
                    (this.g2d.editor = this).createTooltipDiv(),
                    this.initUI()
            }
            return _createClass(e, [{
                key: "createTooltipDiv",
                value: function () {
                    this.tooltipDiv = ht.Default.getToolTipDiv(),
                        this.tooltipDiv.style.borderRadius = "5px",
                        this.tooltipDiv.style.border = "1px solid #eee"
                }
            }, {
                key: "display",
                value: function (e) {
                    this.dm.deserialize(e)
                }
            }, {
                key: "initUI",
                value: function () {
                    var e = this.palette = new ht.widget.Palette,
                        t = this.leftToolbar = new ht.widget.Toolbar(toolbarConfig.toolbar_config_left);
                    t.editor = this,
                        t.getSelectBackground = function () {
                            return "rgb(240,239,238)"
                        },
                        t.enableToolTip();
                    var a = this.rightToolbar = new ht.widget.Toolbar(toolbarConfig.toolbar_config_right);
                    a.editor = this,
                        a.getSelectBackground = function () {
                            return "rgb(240,239,238)"
                        },
                        a.enableToolTip(),
                        a.setStickToRight(!0);
                    var o = new ht.widget.SplitView(t, a, "h", .5);
                    o.setDividerSize(0);
                    var s = this.rulerFrame = new ht.widget.RulerFrame(this.g2d),
                        i = this.borderPane = new ht.widget.BorderPane;
                    i.setTopView(o),
                        i.setTopHeight(25),
                        i.setCenterView(s);
                    var n = this.leftSplit = new ht.widget.SplitView(e, i, "h", 260),
                        r = this.treeView = new ht.widget.TreeView(this.dm),
                        l = this.propertyPane = new ht.widget.PropertyPane(this.dm),
                        m = this.rightSplit = new ht.widget.SplitView(l, r, "v", .4);
                    this.mainSplit = new ht.widget.SplitView(n, m, "h", -260);
                    this.initPalette(),
                        this.initGraphView(),
                        this.initTreeView(),
                        this.initPropertyView(),
                        this.resetDefault(),
                        this.g2d.fitContent()
                }
            }, {
                key: "initPalette",
                value: function () {
                    var a = this.palette.dm();
                    for (var e in palette_config) {
                        var t = palette_config[e],
                            o = new ht.Group;
                        o.setName(t.name),
                            a.add(o),
                        "scene" === e && o.setExpanded(!0),
                            t.items.forEach(function (e) {
                                var t = new ht.Node;
                                t.setName(e.name),
                                    t.setImage(e.image),
                                    t.item = e,
                                    t.s({
                                        "image.stretch": e.stretch || "centerUniform",
                                        draggable: void 0 === e.draggable || e.draggable
                                    }),
                                e.type === ht.Text && t.s({
                                    text: "Text",
                                    "text.align": "center",
                                    "text.vAlign": "middle",
                                    "text.font": "32px Arial"
                                }),
                                    o.addChild(t),
                                    a.add(t)
                            })
                    }
                }
            }, {
                key: "initGraphView",
                value: function () {
                    var a,
                        o = this;
                    ht.Default.isTouchable ? this.palette.handleDragAndDrop = function (e, t) {
                            ht.Default.containedInView(e, g2d) && ("between" === t ? e.preventDefault() : "end" === t && o.handleDrop(e))
                        }
                        : (this.g2d.getView().addEventListener("dragover", function (e) {
                            e.dataTransfer.dropEffect = "copy",
                                e.preventDefault();
                            var t = o.g2d.getDataAt(e);
                            t instanceof ht.Group || t && t.getParent()instanceof ht.Group ? (a = t.getParent()instanceof ht.Group ? t.getParent() : t).s({
                                "border.color": "rgb(26,189,156)",
                                "border.width": 1
                            }) : a && a.s("border.width", 0)
                        }), this.g2d.getView().addEventListener("drop", function (e) {
                            o.handleDrop(e)
                        }))
                }
            }, {
                key: "initTreeView",
                value: function () {
                    var e = this.treeView;
                    e.getLabel = function (e) {
                        return e instanceof ht.Text ? e.s("text") : e instanceof ht.Shape ? e.getName() || "不规则图形" : e.getName() || "节点"
                    };
                    var a = e.getIcon;
                    e.getIcon = function (e) {
                        if (e instanceof ht.Text)
                            return "symbols/text.json";
                        if (e instanceof ht.Edge)
                            return "symbols/dash.json";
                        var t = e.getImage();
                        return t || a.apply(this, arguments)
                    }
                }
            }, {
                key: "initPropertyView",
                value: function () {
                    var a = this,
                        e = this.propertyPane;
                    e.setHeaderLabels(["属性", "值"]);
                    var o = e.getPropertyView();
                    this.g2d.sm().ms(function (e) {
                        o.setProperties(null);
                        var t = a.dm.sm().ld();
                        t instanceof ht.Text ? o.addProperties(properties_config.text_properties) : (t instanceof ht.Data && o.addProperties(properties_config.data_properties), t instanceof ht.Node && o.addProperties(properties_config.node_properties), t instanceof ht.Group && o.addProperties(properties_config.group_properties), t instanceof ht.Edge && o.addProperties(properties_config.edge_properties))
                    })
                }
            }, {
                key: "resetDefault",
                value: function () {
                    this.leftToolbar.handleClick(this.leftToolbar.getItemById("edit"))
                }
            }, {
                key: "mount",
                value: function (e) {
                    this.mainSplit.addToDOM(e)
                }
            }, {
                key: "handleDrop",
                value: function (e) {
                    e.preventDefault();
                    var t = this.palette.sm().ld();
                    if (t) {
                        var a = t.item,
                            o = a.image,
                            s = (this.g2d.getDataAt(e, null, 5), new(a.type || ht.Node));
                        s.setImage(o),
                            s.setName(a.name),
                            s.p(this.g2d.lp(e)),
                            s.s("label", ""),
                            this.g2d.dm().add(s),
                            this.g2d.sm().ss(s)
                    }
                }
            }
            ]),
                e
        }
        (),
        G = {
            createEditor: function (e) {
                return new Editor
            }
        };
    return G
}
();
