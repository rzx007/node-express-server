
var town = function () {
    "use strict";
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
    }
    var e = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            (this, e),
            this.g3d = new ht.graph3d.Graph3dView,
            this.g3dDm = this.g3d.getDataModel(),
            this.reverse = !1,
            this.load3dSence(),
            this.clearBg()
        };
        return function (e, t, n) {
            t && a(e.prototype, t),
            n && a(e, n)
        }
        (e, [{
                    key: "load3dSence",
                    value: function () {
                        var i = this,
                        s = this.g3d;
                        this.g3dDm.clear(),
                        ht.Default.xhrLoad("data/vizCity.json", function (e) {
                            e && s.deserialize(e, function (e, t, n, a) {
                                var o = e.scene;
                                s.setEye(o.eye),
                                s.setFar(o.far),
                                s.setNear(o.near),
                                s.setCenter(o.center),
                                i.heatNode = i.getNodeFromDm("heat"),
                                i.waterNode = i.getNodeFromDm("water"),
                                i.energyNode = i.getNodeFromDm("energy"),
                                i.stationNode = i.getNodeFromDm("station"),
                                i.fanNodes = [];
                                for (var r = 1; r <= 8; r++)
                                    i.fanNodes.push(i.getNodeFromDm("fan" + r));
                                i.startAnimation()
                            })
                        }),
                        this.g3d.addInteractorListener(function (e) {
                                if(e.kind === 'clickData'){
                                    console.log(e);
                                    if (e.data == 'st1' || e.data == '173' || e.data == '174') {
                                        var query = {
                                            name: e.data._attrObject.name
                                        }
                                        window.open("./mmi/index.html?name=" + query.name);
                                    }
                                    if (e.data == 'st2' || e.data == '170' || e.data == '176') {
                                        var query = {
                                            name: e.data._attrObject.name
                                        }
                                        window.open("./mmi/index.html?name=" + query.name);
                                    }
                                    if (e.data == 'st3' || e.data == '166' || e.data == '167') {
                                        var query = {
                                            name: e.data._attrObject.name
                                        }
                                        window.open("./mmi/index.html?name=" + query.name);
                                    }
                                    if (e.data == 'st4' || e.data == '178' || e.data == '179') {
                                        var query = {
                                            name: e.data._attrObject.name
                                        }
                                        window.open("./mmi/index.html?name=" + query.name);
                                    }
                                    if (e.data._displayName == '��·2' || e.data._id == '172') {
                                        window.open("./lineQuery/svg/10kV栗马线栗16.html");
                                    }
                                    if (e.data._displayName == '��·1' || e.data._id == '171') {
                                        window.open("./lineQuery/svg/10kV栗马线栗16.html");
                                    }
                                    if (e.data._displayName == '������·' || e.data._displayName == '��·') {
                                        window.open("./lineQuery/svg/10kV栗马线栗16.html");
                                    }
                                }
                                else if(e.kind === 'doubleClickData'){
                                    console.log(e.data + '被双击');
                                }            
                                else if(e.kind === 'clickBackground'){
                                    console.log('单击背景');
                                }  
                                else if(e.kind === 'doubleClickBackground'){
                                    console.log('双击背景');
                                }     
                                else if(e.kind === 'beginRectSelect'){
                                    console.log('开始框选图元');
                                }              
                                else if(e.kind === 'betweenRectSelect'){
                                    console.log('正在框选图元');
                                }             
                                else if(e.kind === 'endRectSelect'){
                                    console.log('结束框选图元');
                                }           
                                else if(e.kind === 'beginMove'){
                                    console.log('开始移动图元');
                                }              
                                else if(e.kind === 'betweenMove'){
                                    console.log('正在移动图元');
                                }             
                                else if(e.kind === 'endMove'){
                                    console.log('结束移动图元');
                                } 
                                else if(e.kind === 'beginPan'){
                                    console.log('开始手抓图平移');
                                }              
                                else if(e.kind === 'betweenPan'){
                                    console.log('正在手抓图平移');
                                }             
                                else if(e.kind === 'endPan'){
                                    console.log('结束手抓图平移');
                                }     
                                else if(e.kind === 'beginEditRect'){
                                    console.log('开始编辑图元大小和位置');
                                }              
                                else if(e.kind === 'betweenEditRect'){
                                    console.log('正在编辑图元大小和位置');
                                }             
                                else if(e.kind === 'endEditRect'){
                                    console.log('结束编辑图元大小和位置');
                                } 
                                else if(e.kind === 'beginEditPoint'){
                                    console.log('开始编辑多边形Shape或多点Edge的具体点');
                                }              
                                else if(e.kind === 'betweenEditPoint'){
                                    console.log('正在编辑多边形Shape或多点Edge的具体点');
                                }             
                                else if(e.kind === 'endEditPoint'){
                                    console.log('结束编辑多边形Shape或多点Edge的具体点');
                                } 
                                else if(e.kind === 'beginEditRotation'){
                                    console.log('开始旋转图元');
                                }              
                                else if(e.kind === 'betweenEditRotation'){
                                    console.log('正在旋转图元');
                                }             
                                else if(e.kind === 'endEditRotation'){
                                    console.log('结束旋转图元');
                                }               
                                else if(e.kind === 'moveLeft'){
                                    console.log('左方向键左移图元一个像素');
                                }       
                                else if(e.kind === 'moveRight'){
                                    console.log('右方向键右移图元一个像素');
                                } 
                                else if(e.kind === 'moveUp'){
                                    console.log('上方向键上移图元一个像素');
                                } 
                                else if(e.kind === 'moveDown'){
                                    console.log('下方向键下移图元一个像素');
                                } 
                                else if(e.kind === 'toggleNote'){
                                    console.log('切换note标注的展开合并');
                                }             
                                else if(e.kind === 'toggleNote2'){
                                    console.log('切换note2标注的展开合并');
                                }
                                else if(e.kind === 'beginEditPoints'){
                                    console.log('开始进入曲线的点编辑状态');
                                }
                                else if(e.kind === 'endEditPoints'){
                                    console.log('结束曲线的点编辑状态');
                                } 
                                else if(e.kind === 'hover'){
                                    console.log('鼠标停留');
                                } 
                                else if(e.kind === 'onClick'){
                                    console.log('单击图元');
                                } 
                                else if(e.kind === 'onDoubleClick'){
                                    console.log('双击图元');
                                } 
                                else if(e.kind === 'onContextMenu'){
                                    console.log('右击图元');
                                } 
                                else if(e.kind === 'onDown'){
                                    console.log('在图元处按下');
                                } 
                                else if(e.kind === 'onUp'){
                                    console.log('在图元处放开');
                                } 
                                else if(e.kind === 'onMove'){
                                    console.log('鼠标在图元上移动');
                                } 
                                else if(e.kind === 'onEnter'){
                                    console.log('鼠标进入图元');
                                } 
                                else if(e.kind === 'onHover'){
                                    console.log('鼠标在图元上悬停');
                                } 
                                else if(e.kind === 'onLeave'){
                                    console.log('鼠标离开图元');
                                } 
                                else if(e.kind === 'onBeginDrag'){
                                    console.log('图元开始拖拽');
                                } 
                                else if(e.kind === 'onDrag'){
                                    console.log('图元拖拽');
                                } 
                                else if(e.kind === 'onEndDrag'){
                                    console.log('图元结束拖拽');
                                } 
                                else if(e.kind === 'onScroll'){
                                    console.log('鼠标图元上滚动');
                                } 
                            })
                    }
                }, {
                    key: "startAnimation",
                    value: function () {
                        var n = this;
                        ht.Default.startAnim({
                            frames: 20,
                            interval: 100,
                            easing: function (e) {
                                return e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2
                            },
                            repeat: !0,
                            finishFunc: function () {
                                n.reverse = !n.reverse,
                                n.startAnimation()
                            },
                            action: function (e, t) {
                                n.energyNode.setElevation(100 + 30 * (n.reverse ? 1 - e : e)),
                                n.waterNode.setRotationY(n.waterNode.getRotationY() + .1),
                                n.heatNode.setRotationY(n.heatNode.getRotationY() + .04 + .12 * Math.random()),
                                n.stationNode.setElevation(100 + 30 * (n.reverse ? 1 - e : e)),
                                n.fanNodes.forEach(function (e) {
                                    e.setRotationZ(e.getRotationZ() + .06 + .08 * Math.random())
                                })
                            }
                        })
                    }
                }, {
                    key: "getNodeFromDm",
                    value: function (e) {
                        return this.g3dDm.getDataByTag(e)
                    }
                }, {
                    key: "addToDOM",
                    value: function () {
                        this.g3d.addToDOM()
                    }
                },  {
                     key: "clearBg",
                     value: function () {
                         window.setTimeout(function () {
                             var lastDiv  = $("canvas").parent();
                             var pane = lastDiv[1];
                             if (pane && pane.tabIndex == '-1') {
                                 pane.style.display = "none";
                             }
                         }, 1000);
                     }
                }
            ]),
        e
    }
    ();
    return (window.main = new e).addToDOM(), {}
}
();

