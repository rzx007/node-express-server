(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, (function () {
    'use strict';
    // 获取参数
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    /**
     * 定制的最外层容器
     */
    let BorderLayout = function () {
        BorderLayout.superClass.constructor.call(this);
        this.setContinuous(true);
        this.setSplitterSize(0);
    };

    ht.Default.def(BorderLayout, ht.ui.BorderLayout, {
        /**
         * splitter 宽度都为 0，为了能正常交互，重写此函数将 splitterRect 的宽度修改为 10
         * @override
         */
        getSplitterAt: function (event) {
            var leftRect = this._leftSplitterRect, lp;
            if (leftRect) {
                leftRect = ht.Default.clone(leftRect);
                leftRect.width = 10;
                leftRect.x -= 5;
                if (event instanceof Event)
                    lp = this.lp(event);
                else
                    lp = event;
                if (ht.Default.containsPoint(leftRect, lp)) return 'left';
            }
            return BorderLayout.superClass.getSplitterAt.call(this, event);
        },
        /**
         * 调整左侧 splitterCanvas 的尺寸，以便挡住子组件
         * @override
         */
        layoutSplitterCanvas: function (canvas, x, y, width, height, region) {
            if (region === 'left') {
                canvas.style.pointerEvents = '';
                canvas.style.display = 'block';
                ht.Default.setCanvas(canvas, 10, height);
                canvas.style.left = this.getContentLeft() + this.tx() + x - 5 + 'px';
                canvas.style.top = this.getContentTop() + this.ty() + y + 'px';
            }
            else {
                BorderLayout.superClass.layoutSplitterCanvas.call(this, canvas, x, y, width, height, region);
            }
        }
    });

    // 事件总线；界面中不同区域的组件之间通过事件派发进行交互
    let ee = new EventEmitter();
    var gasDatas = {
        '1jin': 0,
        '1chu': 0,
        '2jin': 0,
        '2chu': 0,
        '2shun': 0,
        '3jin': 0,
        '3chu': 0,
        '4jin': 0,
        '4chu': 0,
        '4shun': 0,
        '5jin': 0,
        '5chu': 0,
        '5shun': 0,
        '6jin': 0,
        '6chu': 0,
        '6shun': 0,
        '7jin': 0,
        '7chu': 0
    };
    // import gasJSON from '../model/燃气.json';
    let rootView;
    let graphView$1;
    let graphViewWrapper;
    let relativeLayout$1;
    var indexController = function (view) {
        rootView = view;
        relativeLayout$1 = view.findViewById('contentRelative', true);
        graphViewWrapper = view.findViewById('contentHTView', true);
        graphView$1 = graphViewWrapper.getContent();
        graphView$1.setMovableFunc(data => false);
        //graphView.dm().deserialize(gasJSON);
        graphView$1.deserialize('displays/燃气.json', function () {
            updatas()

        });
        // updatesData
        function updatas() {
            $.get("http://10.172.246.148:9090/lineMonitor/getPowertransformerByLineId", {
                lineId: '530C24CD-1CFC-478B-B287-35FDEF7BFDE6-64950',
                ti: 1
            }, function (res) {
                var dataJson = res.data;
                for (var key in gasDatas) {
                    gasDatas[key] = Math.round(Math.random() * 100) / 100;
                }
                // update datas
                graphView$1.dm().each(function (data) {
                    if (data.getDisplayName() == 'g') {
                        data.setImage('')
                    }
                });
                dataJson.forEach(function (item) {
                    var x = randoms(50, 700);
                    var y = randoms(200, 500)
                    var vol = '电压(kV)  ' + item.volAt;
                    var cec = '电流(An) ' + item.cecAt;
                    var pow = '功率(kW) ' + item.powAt;
                    creatNode(x, y, item.pwSbid);
                    creatText(item, x, y, 60);
                    creatText1(item.localName, x, y, 95.27658, 16.9293, 84)
                    creatText1(vol, x, y, 95.27658, 16.9293, 60)
                    creatText1(cec, x, y, 95.27658, 16.9293, 43)
                    creatText1(pow, x, y, 95.27658, 16.9293, 26)
                })
            });
        }
        // 创造节点类型
        function creatNode(x, y, data) {
            var node = new ht.Node();
            node.setDisplayName('g');
            node.setImage("./symbols/map/red.json");
            node.setPosition(x, y);
            node.setAttr("lineId", data)
            graphView$1.dm().add(node);
        }
        function creatText(data, x, y, dvalue) {
            var text = new ht.Text();
            text.setDisplayName('l');
            text.setImage("./symbols/map/1.json");
            text.setSize(100, 100)
            text.setPosition(x, y - dvalue);
            graphView$1.dm().add(text);
        }
        function creatText1(data, x, y, width, height, dvalue) {
            var text = new ht.Text();
            text.setSize(width, height)
            text.setPosition(x, y - dvalue);
            text.setStyle('text', data);
            text.setStyle("text.color", "rgb(255,255,255)")
            text.setStyle("text.align", "center")
            graphView$1.dm().add(text);
        }
        // 随机数
        function randoms(min, max) {
            return (Math.random() * (max - min) + min)
        }
        // graphViewWrapper.getView().addEventListener('click', event => ee.trigger('click_content', [{
        //     source: graphViewWrapper,
        //     data: event
        // }]));

        // ee.on('click_content', function(e){
        //     console.log(e);
        // });
    };

    function handleClickNav(e) {
        var data = e.data;
        if (!data._attrObject.parent) {
            $("#ifram_wrap").find("iframe").attr({ src: './svg/' + data._name + '.svg' })
            $("#ifram_wrap").css({ 'display': 'block ' })
        }
    }
    let TreeHoverBackgroundDrawable = function (color, width) {
        TreeHoverBackgroundDrawable.superClass.constructor.call(this);
        this.setColor(color);
        this.setWidth(width);
    };
    ht.Default.def(TreeHoverBackgroundDrawable, ht.ui.drawable.Drawable, {
        ms_ac: ['color', 'width'],
        draw: function (x, y, width, height, data, view, dom) {
            var self = this,
                g = view.getRootContext(dom),
                color = self.getColor();

            g.beginPath();
            g.fillStyle = color;
            g.rect(x, y, self.getWidth(), height);
            g.fill();
        },
        getSerializableProperties: function () {
            var parentProperties = TreeHoverBackgroundDrawable.superClass.getSerializableProperties.call(this);
            return addMethod(parentProperties, {
                color: 1, width: 1
            });
        }
    });

    let LogoBackgroundDrawable = function (color, image) {
        LogoBackgroundDrawable.superClass.constructor.call(this);
        this.setColor(color);
        this.setImage(image);
    };
    ht.Default.def(LogoBackgroundDrawable, ht.ui.drawable.Drawable, {
        ms_ac: ['color', 'image'],
        draw: function (x, y, width, height, data, view, dom) {
            var self = this,
                g = view.getRootContext(dom),
                color = self.getColor();
            g.beginPath();
            g.fillStyle = color;
            g.rect(x, y, width, height);
            g.fill();

            ht.Default.drawImage(g, ht.Default.getImage(self.getImage()), x, y, width, height, data, view);
        },
        getSerializableProperties: function () {
            var parentProperties = LogoBackgroundDrawable.superClass.getSerializableProperties.call(this);
            return addMethod(parentProperties, {
                color: 1, image: 1
            });
        }
    });

    var json = [
        {
            "name": "沙洋",
            "labelColor": "#00ff99",
            "icon": "imgs/4.json",
            "maintenance": true,
            "children": [
                {
                    "name": "沙洋10kV丁岗线（石桥18）",
                    "labelColor": "#ffcccc",
                    "flag": "negative",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#22",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#23",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type": "line"
                }
            ]
        },
        {
            "name": "城区",
            "icon": "imgs/1.json",
            "labelColor": "rgb(255,232,102)",
            "children": [
                {
                    "name": "城网10kV线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "negative",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#2",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#3",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type": "line"
                }
            ]
        },
        {
            "name": "京山",
            "icon": "imgs/2.json",
            "labelColor": "rgb(255,168,102)",
            "children": [
                {
                    "name": "城网10kV线路#11",
                    "labelColor": "#ffcccc",
                    "flag": "negative",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#12",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#13",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type": "line"
                }
            ]
        },
        {
            "name": "钟祥",
            "labelColor": "#ffcccc",
            "icon": "imgs/3.json",
            "children": [
                {
                    "name": "城网10kV线路#21",
                    "labelColor": "#ffcccc",
                    "flag": "negative",
                    "type": "line"
                },
                {
                    "name": "城网10kV线路#22",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor"
                },
                {
                    "name": "城网10kV线路#23",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                }
            ]
        },

        {
            "name": "掇刀",
            "icon": "imgs/1.json",
            "labelColor": "rgb(255,232,102)",
            "children": [
                {
                    "name": "农网10kV线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "negative"
                },
                {
                    "name": "农网10kV线路#2",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor"
                },
                {
                    "name": "农网10kV线路#3",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                }
            ]
        },
        {
            "name": "东宝",
            "icon": "imgs/2.json",
            "labelColor": "rgb(255,168,102)",
            "children": [
                {
                    "name": "农网10kV线路#11",
                    "labelColor": "#ffcccc",
                    "flag": "negative"
                },
                {
                    "name": "农网10kV线路#12",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor"
                },
                {
                    "name": "农网10kV线路#13",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                }
            ]
        },
        {
            "name": "专线",
            "icon": "imgs/1.json",
            "labelColor": "rgb(255,232,102)",
            "children": [
                {
                    "name": "10kV工业线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "negative"
                },
                {
                    "name": "10kV工业线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor"
                },
                {
                    "name": "10kV工业线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                },
                {
                    "name": "10kV工业线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                },
                {
                    "name": "10kV工业线路#1",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor"
                }
            ]
        }

    ];

    let navTree$1;
    let feedbackButton;

    // 填充数据，树结构业务逻辑主要区域
    function controller(view) {
        navTree$1 = view.findViewById('navTree', true);
        navTree$1.getView().addEventListener('click', event => ee.trigger('click_nav', [{
            source: navTree$1,
            data: navTree$1.getDataAt(event)
        }]));
        $.get("http://10.172.246.148:9090/lineMonitor/getLineList", function (res) {
            // 填充 navTree 的数据            
            var json = res.data;
            for (var i = 0; i < json.length; i++) {
                var row = json[i];
                var data = new ht.Data();
                data.setIcon(row.icon);
                data.setName(row.name);
                data.s('labelColor', row.labelColor);
                data.setIcon(row.icon);
                data.a('maintenance', true);
                data.a('parent', true)
                if (row.flag) {
                    data.a('flag', row.flag);
                }
                navTree$1.dm().add(data);
                var children = row.children;
                if (children) {
                    for (var j = 0; j < children.length; j++) {
                        var child = children[j];
                        var childData = new ht.Data();
                        childData.setName(child.name);
                        childData.setIcon(child.icon);
                        childData.s('labelColor', child.labelColor);
                        childData.setParent(data);
                        if (child.flag) {
                            childData.a('flag', child.flag);
                        }
                        navTree$1.dm().add(childData);
                    }
                }
            }
            navTree$1.expandAll();
            ee.on('click_nav', handleClickNav);
        });
    }
    // 树结构 start
    let vBoxLayout = new ht.ui.VBoxLayout();
    vBoxLayout.setBackground('#17191a');

    // 搜索框
    let searchField = new ht.ui.TextField();
    searchField.setBorder(new ht.ui.border.LineBorder(1, '#d8d8d8'));
    searchField.setBorderRadius(12);
    searchField.setBackground(null);
    searchField.setIcon('imgs/search.json');
    searchField.setIconPosition('left');
    searchField.setPadding([2, 20, 2, 20]);
    searchField.setColor('#d8d8d8');
    searchField.setPlaceholder('Find everything...');
    searchField.getView().className = 'search';
    vBoxLayout.addView(searchField, {
        width: 'match_parent',
        height: 24,
        marginTop: 20,
        marginBottom: 16,
        marginLeft: 20,
        marginRight: 20
    });

    // 导航树
    var navTree = new ht.ui.TreeView();
    navTree.setBackground(null);
    navTree.setRowIndent(20);
    navTree.setRowLineVisible(true);
    navTree.setRowLineColor('#666666');
    navTree.setLabelColor('rgb(255, 204, 204)');
    navTree.setSelectLabelColor('rgb(255, 255, 255)');
    navTree.setHoverBackgroundDrawable(new TreeHoverBackgroundDrawable('#1ceddf', 2));
    navTree.setSelectBackgroundDrawable(new TreeHoverBackgroundDrawable('#1ceddf', 2));
    navTree.setExpandIcon('imgs/expand.json');
    navTree.setCollapseIcon('imgs/collapse.json');
    navTree.getLabelColor = data => data.s('labelColor') || navTree.getPropertyValue('labelColor');
    navTree.setId('navTree');
    navTree.drawRowLine = (g, color, x, y, w, h, data) => {
        var rows = navTree.getRowDatas();
        if (rows.indexOf(data) === rows.size() - 1 || navTree.getLevel(data) > 0) { }
        else {
            g.beginPath();
            x += navTree.getRowIndent();
            w -= navTree.getRowIndent() * 2;
            g.fillStyle = color;
            g.rect(x, y, w, h);
            g.fill();
        }
    };
    navTree.getIcon = data => data.a('maintenance') ? 'imgs/维修.json' : data.getIcon();
    var oldDrawLabel = navTree.drawLabel;
    navTree.drawLabel = (g, data, x, y, height) => {
        oldDrawLabel.call(navTree, g, data, x, y, height);
        if (data.a('maintenance')) {
            g.beginPath();
            ht.Default.drawText(g, '', navTree.getLabelFont(data), 'rgb(255,204,0)', x, y, navTree.getContentWidth() - x - navTree.getRowIndent() - 5, height, 'right');
        }
    };

    vBoxLayout.addView(navTree, {
        width: 'match_parent',
        height: 'match_parent'
    });
    // 树结构end

    // 注册控制器，将navTree视图
    controller(vBoxLayout);

    /**
     * 内容区域的面板组件
     */
    class Pane extends ht.ui.TabLayout {
        constructor() {
            super();

            this.setBorder(new ht.ui.border.LineBorder(1, 'rgb(150,150,150)'));
            this.setTabHeaderBackground(null);
            this.setHoverTabBackground(null);
            this.setActiveTabBackground(null);
            this.setTitleColor('rgb(184,184,184)');
            this.setActiveTitleColor('rgb(255,255,255)');
            this.setTabHeaderLineSize(0);
            this.setMovable(false);
            this.setTabHeaderBackground('#1c258c');
            this.setTabGap(0);
        }
        getTabWidth(child) {
            const children = this.getChildren(),
                size = children.size();
            if (size === 0) {
                return this.getContentWidth();
            }
            else {
                return this.getContentWidth() / size;
            }
        }
        drawTab(g, child, x, y, w, h) {
            const children = this.getChildren(),
                size = children.size(),
                color = this.getCurrentTitleColor(child),
                font = this.getTitleFont(child),
                title = this.getTitle(child);
            if (size === 1) {
                ht.Default.drawText(g, title, font, color, x, y, w, h, 'left');
            }
            else {
                ht.Default.drawText(g, title, font, color, x, y, w, h, 'center');
            }

            if (children.indexOf(child) < size - 1) {
                g.beginPath();
                g.rect(x + w - 1, y + 4, 1, h - 8);
                g.fillStyle = 'rgb(150,150,150)';
                g.fill();
            }
        }
    }

    //右下角折线图
    var chartPane = new Pane();

    var view1 = new ht.ui.View();
    view1.setBackgroundDrawable(new ht.ui.drawable.ImageDrawable('imgs/线图蓝.json', 'fill'));

    var view2 = new ht.ui.View();
    view2.setBackgroundDrawable(new ht.ui.drawable.ImageDrawable('imgs/线图蓝.json', 'fill'));

    chartPane.getView().style.background = 'rgba(18,28,64,0.60)';

    chartPane.addView(view1, {
        title: '其他图表'
    });

    chartPane.addView(view2, {
        title: '线路负荷'
    });

    chartPane.setActiveView(view2);
    // //右下角折线图end

    // import header from './header.js';
    // 根层容器,设置左边树导航根容器
    let borderLayout = new BorderLayout();
    borderLayout.setLeftWidth(240);
    // 将上文设置的vBoxLayout，添加到根容器
    borderLayout.addView(vBoxLayout, {
        region: 'left',
        width: 'match_parent'
    });

    // 右侧根容器,header布局
    // -- header(first)
    // -- relativeLayout(second)
    // ---- htView
    // ------ graphView
    let splitLayout = new ht.ui.SplitLayout();
    splitLayout.setSplitterVisible(false);
    splitLayout.setPositionType('absoluteFirst');
    splitLayout.setOrientation('v');
    // splitLayout.addView(header, {
    //     region: 'first'
    // });

    // 线路根容器，布局
    let relativeLayout = new ht.ui.RelativeLayout();
    relativeLayout.setId('contentRelative');
    relativeLayout.setBackground('#060811');

    let graphView = new ht.graph.GraphView();
    graphView.getView().style.backgroundColor = 'rgba(0,0,0,0.6)';
    graphView.fitContent(true);

    var htView = new ht.ui.HTView(graphView);
    htView.getView().style.background = 'url("./imgs/bg.jpg") center top';
    htView.getView().style.backgroundSize = 'cover';
    htView.setId('contentHTView');
    relativeLayout.addView(htView, {
        width: 'match_parent',
        height: 'match_parent'
    });

    //右下角折线图
    relativeLayout.addView(chartPane, {
        width: 220,
        height: 200,
        align: 'right',
        vAlign: 'bottom',
        marginRight: 30,
        marginBottom: 30
    });

    splitLayout.addView(relativeLayout, {
        region: 'second'
    });

    borderLayout.addView(splitLayout, {
        region: 'center'
    });

    borderLayout.addToDOM();
    // 注册控制器，理解为注册根容器
    indexController(borderLayout);
   //默认显示接线图
   $("#ifram_wrap").find("iframe").attr({ src: './svg/' +getQueryVariable("name") + '.svg' })
   $("#ifram_wrap").css({ 'display': 'block ' })
    graphView.addInteractorListener(function (e) {
        if (e.kind == 'clickData') {
            // console.log(e.data);
            if (e.data._id == '68' || e.data._id == '69' || e.data._id == '70' || e.data._id == '71' || e.data._id == '72') {
                console.log('click line');
            } else if (e.data._displayName == 'g') {
                var querys = { name: e.data._name }
                window.open("../powertransformer/index.html?name=" + querys.name);
                parent.location.reload()
            }
        }


    })

})));
