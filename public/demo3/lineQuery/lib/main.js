(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, (function () {
    'use strict';

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
    console.log(ht);
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
            console.log("lineLaod");
        });
        ee.on('click_nav', handleClickNav);
        setInterval(function () {
            // 更新数据
            for (var key in gasDatas) {
                gasDatas[key] = Math.round(Math.random() * 100) / 100;
            }

            // update datas
            graphView$1.dm().each(function (data) {
                var dataBindings = data.getDataBindings();
                if (dataBindings) {
                    // update attrs
                    for (var name in dataBindings.a) {
                        var db = dataBindings.a[name];
                        var value = gasDatas[db.id];
                        if (db.func) {
                            value = db.func(value);
                        }
                        data.a(name, value);
                    }
                    // update styles
                    for (var name in dataBindings.s) {
                        var db = dataBindings.s[name];
                        var value = gasDatas[db.id];
                        if (db.func) {
                            value = db.func(value);
                        }
                        data.s(name, value);
                    }
                    // update properties
                    for (var name in dataBindings.p) {
                        var db = dataBindings.p[name];
                        var value = gasDatas[db.id];
                        if (db.func) {
                            value = db.func(value);
                        }
                        data[ht.Default.setter(name)](value);
                    }
                }
            });
        }, 3000);
    };

    function handleClickNav(e) {
        var data = e.data;
        console.log(data);
         $("#ifram_wrap").css({'display':'block '})
        // if (data) {
        //     var flag = data.a('flag');
        //     graphView.dm().clear();
        //     if (flag === 'negative') {
        //         graphView.dm().deserialize(topo1);
        //         graphView.fitContent();
        //     }
        //     else {
        //         graphView.dm().deserialize(topo2);
        //         graphView.fitContent();
        //     }
        // }
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
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#22",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#23",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type":"line"
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
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#2",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#3",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type":"line"
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
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#12",
                    "labelColor": "#ffcccc",
                    "flag": "groundFloor",
                    "type":"line"
                },
                {
                    "name": "城网10kV线路#13",
                    "labelColor": "#ffcccc",
                    "flag": "secondFloor",
                    "type":"line"
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
                    "type":"line"
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

    function controller(view) {
        navTree$1 = view.findViewById('navTree', true);
        feedbackButton = view.findViewById('feedbackButton', true);

        navTree$1.getView().addEventListener('click', event => ee.trigger('click_nav', [{
            source: navTree$1,
            data: navTree$1.getDataAt(event)
        }]));

        // 填充 navTree 的数据
        for (var i = 0; i < json.length; i++) {
            var row = json[i];
            var data = new ht.Data();
            data.setIcon(row.icon);
            data.setName(row.name);
            data.s('labelColor', row.labelColor);
            data.setIcon(row.icon);
            data.a('maintenance', row.maintenance);
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

        // // 调用邮件
        // feedbackButton.addViewListener(e => {
        //     if (e.kind === 'click') {
        //         window.location.href = "mailto:service@www.hightopo.com";
        //     }
        // });
    }

    let vBoxLayout = new ht.ui.VBoxLayout();
    vBoxLayout.setBackground('#17191a');

    // // 顶部 logo
    // let topLabel = new ht.ui.Label(); 
    // topLabel.setAlign('center');
    // topLabel.setText(' ');
    // topLabel.setIconWidth(41);
    // topLabel.setIconHeight(37);
    // topLabel.setTextFont('18px arial, sans-serif');
    // topLabel.setTextColor('#fff');
    // topLabel.setPreferredSize(1, 64);
    // topLabel.setBackgroundDrawable(new LogoBackgroundDrawable('#2de3d7', 'imgs/header_background.json'));
    // vBoxLayout.addView(topLabel, {
    //     width: 'match_parent'
    // });

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

    // // 管理组
    // let managerGroup = new ht.ui.Label(); 
    // managerGroup.setText('管理组：12345678901');
    // managerGroup.setIcon('imgs/tel.json');
    // managerGroup.setTextColor('#fff');
    // managerGroup.setIconWidth(16);
    // managerGroup.setIconHeight(16);
    // managerGroup.setIconTextGap(10);
    // managerGroup.setAlign('left');
    // vBoxLayout.addView(managerGroup, {
    //     width: 'match_parent',
    //     marginLeft: 20
    // });

    // // 问题反馈按钮
    // let feedbackButton = new ht.ui.Button();
    // feedbackButton.setId('feedbackButton');
    // feedbackButton.setBorder(null);
    // feedbackButton.setText('问题反馈：service@hightopo.com');
    // feedbackButton.setIcon('imgs/em.json');
    // feedbackButton.setTextColor('#fff');
    // feedbackButton.setHoverTextColor(navTree.getHoverLabelColor());
    // feedbackButton.setActiveTextColor(feedbackButton.getHoverTextColor());
    // feedbackButton.setIconWidth(16);
    // feedbackButton.setIconHeight(16);
    // feedbackButton.setIconTextGap(10);
    // feedbackButton.setAlign('left');
    // feedbackButton.setBackground(null);
    // feedbackButton.setPadding(0);
    // feedbackButton.setHoverBackground(null);
    // feedbackButton.setActiveBackground(null);
    // vBoxLayout.addView(feedbackButton, {
    //     width: 'match_parent',
    //     marginTop: 5,
    //     marginBottom: 10,
    //     marginLeft: 20
    // });

    // 注册控制器
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

    var chartPane = new Pane();

    var view1 = new ht.ui.View();
    view1.setBackgroundDrawable(new ht.ui.drawable.ImageDrawable('imgs/线图.json', 'fill'));

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

    // import header from './header.js';
    // 根层容器
    let borderLayout = new BorderLayout();
    borderLayout.setLeftWidth(240);
    borderLayout.addView(vBoxLayout, {
        region: 'left',
        width: 'match_parent'
    });

    // 右侧根容器
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
    // 注册控制器
    indexController(borderLayout);
    graphView.addInteractorListener(function (e) {
        if (e.kind == 'clickData') {
            console.log(e.data);
            if (e.data._id == '68' || e.data._id == '69' || e.data._id == '70' || e.data._id == '71' || e.data._id == '72') {
                console.log('click line');
            } else if (e.data._displayName == 'g') {
                console.log('click round');
                // $("#iframe").attr({src:"../powertransformer/index.html"})
                // $("#ifram_wrap").css({'display':'block '})
                window.open("../powertransformer/index.html");
                // parent.location.reload()
            }
        }


    })

})));
//# sourceMappingURL=main.js.map
