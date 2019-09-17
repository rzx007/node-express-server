
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
            this.load3dSence()
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
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("�����1");
                                    }
                                    if (e.data == 'st2' || e.data == '170' || e.data == '176') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("�����2");
                                    }
                                    if (e.data == 'st3' || e.data == '166' || e.data == '167') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("�����3");
                                    }
                                    if (e.data == 'st4' || e.data == '178' || e.data == '179') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("�����4");
                                    }
                                    if (e.data._displayName == '��·2' || e.data._id == '172') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("��·2");
                                    }
                                    if (e.data._displayName == '��·1' || e.data._id == '171') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("��·1");
                                    }
                                    if (e.data._displayName == '������·' || e.data._displayName == '��·') {
                                        var parentNode =  $('#wrap')
                                        $("#content").empty()
                                        $("#content").append(renderHtml(e.data))
                                        parentNode.css({"display":"block"})
                                        console.log("������·");
                                    }
                                }
                                else if(e.kind === 'doubleClickData'){
                                    console.log(e.data + '��˫��');
                                }
                                else if(e.kind === 'clickBackground'){
                                    console.log('��������');
                                }
                                else if(e.kind === 'doubleClickBackground'){
                                    console.log('˫������');
                                }
                                else if(e.kind === 'beginRectSelect'){
                                    console.log('��ʼ��ѡͼԪ');
                                }
                                else if(e.kind === 'betweenRectSelect'){
                                    console.log('���ڿ�ѡͼԪ');
                                }
                                else if(e.kind === 'endRectSelect'){
                                    console.log('������ѡͼԪ');
                                }
                                else if(e.kind === 'beginMove'){
                                    console.log('��ʼ�ƶ�ͼԪ');
                                }
                                else if(e.kind === 'betweenMove'){
                                    console.log('�����ƶ�ͼԪ');
                                }
                                else if(e.kind === 'endMove'){
                                    console.log('�����ƶ�ͼԪ');
                                }
                                else if(e.kind === 'beginPan'){
                                    console.log('��ʼ��ץͼƽ��');
                                }
                                else if(e.kind === 'betweenPan'){
                                    console.log('������ץͼƽ��');
                                }
                                else if(e.kind === 'endPan'){
                                    console.log('������ץͼƽ��');
                                }
                                else if(e.kind === 'beginEditRect'){
                                    console.log('��ʼ�༭ͼԪ��С��λ��');
                                }
                                else if(e.kind === 'betweenEditRect'){
                                    console.log('���ڱ༭ͼԪ��С��λ��');
                                }
                                else if(e.kind === 'endEditRect'){
                                    console.log('�����༭ͼԪ��С��λ��');
                                }
                                else if(e.kind === 'beginEditPoint'){
                                    console.log('��ʼ�༭�����Shape����Edge�ľ����');
                                }
                                else if(e.kind === 'betweenEditPoint'){
                                    console.log('���ڱ༭�����Shape����Edge�ľ����');
                                }
                                else if(e.kind === 'endEditPoint'){
                                    console.log('�����༭�����Shape����Edge�ľ����');
                                }
                                else if(e.kind === 'beginEditRotation'){
                                    console.log('��ʼ��תͼԪ');
                                }
                                else if(e.kind === 'betweenEditRotation'){
                                    console.log('������תͼԪ');
                                }
                                else if(e.kind === 'endEditRotation'){
                                    console.log('������תͼԪ');
                                }
                                else if(e.kind === 'moveLeft'){
                                    console.log('���������ͼԪһ������');
                                }
                                else if(e.kind === 'moveRight'){
                                    console.log('�ҷ��������ͼԪһ������');
                                }
                                else if(e.kind === 'moveUp'){
                                    console.log('�Ϸ��������ͼԪһ������');
                                }
                                else if(e.kind === 'moveDown'){
                                    console.log('�·��������ͼԪһ������');
                                }
                                else if(e.kind === 'toggleNote'){
                                    console.log('�л�note��ע��չ���ϲ�');
                                }
                                else if(e.kind === 'toggleNote2'){
                                    console.log('�л�note2��ע��չ���ϲ�');
                                }
                                else if(e.kind === 'beginEditPoints'){
                                    console.log('��ʼ�������ߵĵ�༭״̬');
                                }
                                else if(e.kind === 'endEditPoints'){
                                    console.log('�������ߵĵ�༭״̬');
                                }
                                else if(e.kind === 'hover'){
                                    console.log('���ͣ��');
                                }
                                else if(e.kind === 'onClick'){
                                    console.log('����ͼԪ');
                                }
                                else if(e.kind === 'onDoubleClick'){
                                    console.log('˫��ͼԪ');
                                }
                                else if(e.kind === 'onContextMenu'){
                                    console.log('�һ�ͼԪ');
                                }
                                else if(e.kind === 'onDown'){
                                    console.log('��ͼԪ������');
                                }
                                else if(e.kind === 'onUp'){
                                    console.log('��ͼԪ���ſ�');
                                }
                                else if(e.kind === 'onMove'){
                                    console.log('�����ͼԪ���ƶ�');
                                }
                                else if(e.kind === 'onEnter'){
                                    console.log('������ͼԪ');
                                }
                                else if(e.kind === 'onHover'){
                                    console.log('�����ͼԪ����ͣ');
                                }
                                else if(e.kind === 'onLeave'){
                                    console.log('����뿪ͼԪ');
                                }
                                else if(e.kind === 'onBeginDrag'){
                                    console.log('ͼԪ��ʼ��ק');
                                }
                                else if(e.kind === 'onDrag'){
                                    console.log('ͼԪ��ק');
                                }
                                else if(e.kind === 'onEndDrag'){
                                    console.log('ͼԪ������ק');
                                }
                                else if(e.kind === 'onScroll'){
                                    console.log('���ͼԪ�Ϲ���');
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
                }
            ]),
        e
    }
    ();
    return (window.main = new e).addToDOM(), {}
    function renderHtml(obj){
        var tpl =`
        <div class="react_item">
        <div class="react_con">
            <ul class="tmtimeline">
                <li>
                    <div class="tmicon"></div>
                    <div class="cbp_tmlabel cbp_tmlabel1" style="left: 10%">
                        <p>厂站信息：<span>华中电网/湖北电网</span></p>
                        
                    </div>
                </li>
                <li>
                    <div class="tmicon"></div>
                    <div class="cbp_tmlabel cbp_tmlabel2" style="padding: 4px;">
                        <h4>厂站视图</h4>
                        <img src="./assets/img/sub.png" alt="">
                    </div>
                </li>
                <li>
                    <div class="tmicon"></div>
                    <div class="cbp_tmlabel cbp_tmlabel1">
                        <h4>母线平衡率</h4>
                        <p>220kV：<span>0.03%</span></p>
                        <p>110kV：<span>0.05%</span></p>
                        <p>35kV：<span>0.13%</span></p>
                    </div>
                </li>
                <li>
                    <div class="tmicon"></div>
                    <div class="cbp_tmlabel cbp_tmlabel2">
                        <h4>厂站设备</h4>
                        <p>母线：<span>7</span>条</p>
                        <p>变压器：<span>6</span>条</p>
                        <p>断路器：<span>27</span>条</p>
                        <p>电容/电抗：<span>15</span>条</p>
                    </div>
                </li>
                <li>
                    <div class="tmicon"></div>
                    <div class="cbp_tmlabel cbp_tmlabel1">
                        <h4>变压器损耗</h4>
                        <p>1#主变：<span>0.02% </span></p>
                        <p>2#主变：<span>0.05%</span></p>
                        <p>3#主变：<span>0.13%</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

        `
        return tpl
    }
}
();
