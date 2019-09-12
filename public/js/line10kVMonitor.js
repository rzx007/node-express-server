(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    const G = {};

    G.getDate = function () {
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    };

    G.getDateTime = function () {
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes();
    };

    G.getWeekDay = function () {
        var day = new Date().getDay();
        var x = "";
        switch (day) {
            case 0:
                x = "星期日";
                break;
            case 1:
                x = "星期一";
                break;
            case 2:
                x = "星期二";
                break;
            case 3:
                x = "星期三";
                break;
            case 4:
                x = "星期四";
                break;
            case 5:
                x = "星期五";
                break;
            case 6:
                x = "星期六";
                break;
        }
        return x;
    };

    G.emptyFunc = function () { };

    G.windowInnerHeight = function () {
        return window.innerHeight;
    };

    G.windowInnerWidth = function () {
        return window.innerWidth;
    };

    G.moveTo = function (g3d, center, eye, anim, finishFunc) {
        if (!anim) {
            g3d.setCenter(center);
            g3d.setEye(eye);
        } else {
            var curCenter = g3d.getCenter(),
                curEye = g3d.getEye();

            var curCenterX = curCenter[0], curCenterY = curCenter[1], curCenterZ = curCenter[2];

            var cx = center[0] - curCenterX,
                cy = center[1] - curCenterY,
                cz = center[2] - curCenterZ;

            var curEyeX = curEye[0], curEyeY = curEye[1], curEyeZ = curEye[2];
            var ex = eye[0] - curEyeX,
                ey = eye[1] - curEyeY,
                ez = eye[2] - curEyeZ;

            if (!finishFunc || typeof finishFunc !== 'function') finishFunc = this.emptyFunc;

            ht.Default.startAnim({
                frames: 30,
                finishFunc: finishFunc,
                action: function (v, t) {
                    g3d.setCenter([curCenterX + cx * v, curCenterY + cy * v, curCenterZ + cz * v]);
                    g3d.setEye([curEyeX + ex * v, curEyeY + ey * v, curEyeZ + ez * v]);
                }
            });
        }
    };

    G.toThousands = function (num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    };

    class Main {
        constructor() {
            this.g3d = window.g3d = new ht.graph3d.Graph3dView();   
            this.dm = this.g3d.getDataModel();

            this.g3d.getHighlightHelper().mode = 0;

            this.init();
            this.initEvent();
        }

        initEvent() {
            this.g3d.mi(e => {
                if (e.kind === 'clickData') {
                    this.g3d.flyTo(e.data, {
                        animation: true,
                        ratio: 0.7
                    });
                }
            });
        }

        init() {
            
            ht.Default.xhrLoad('scenes/111精选/光能电力.json', (json) => {
                this.dm.deserialize(json);

                let skyBox = this.dm.getDataByTag('skybox');
                this.g3d.setSkyBox(skyBox);

                this.g3d.setEye([-1336, 1925, 2671]);
                this.g3d.setCenter([-321, -550, -747]);
                this.g3d.setNear(10);
                this.g3d.setFar(1000000);

                this.initAnim();
            });
        }

        initAnim() {
            let fan = this.dm.getDataByTag('fan');
            let flowPath = this.dm.getDataByTag('flowpath');
            let flowPath2 = this.dm.getDataByTag('flowpath2');
            let flowPath3 = this.dm.getDataByTag('flowpath3');
            let battery = this.dm.getDataByTag('battery');
            let charge = this.dm.getDataByTag('charge');
            let offset = 0;

            this.dm.addScheduleTask({
                interval: 100,
                action: function(data) {
                    if (data === flowPath || data === flowPath2 || data === flowPath3) {
                        data.s('top.uv.offset', [offset, 0]);
                        offset += 0.02;
                    } 
                    else if (data === fan) {
                        const rotation = data.getRotationZ();
                        data.setRotationZ(rotation + Math.PI/12);
                    }
                    else if (data === battery) {
                        let value = data.a('temp.value') || 0;
                        value += 0.02;
                        
                        if (value > 1) {
                            value = -1;
                        }
                        
                        data.a('value', Math.abs(value));
                        data.a('temp.value', value);
                    }
                    else if (data === charge) {
                        let transparent = data.a('temp.transparent') || 1;
                        transparent += 0.1;
                        
                        if (transparent > 1) {
                            transparent = -1;
                        }

                        data.a('transparent', Math.abs(transparent));
                        data.a('temp.transparent', transparent);

                    }
                    
                }
            });

            // return;
            this.dm.addScheduleTask({
                interval: 2000,
                action: function(data) {
                    let displayName = data.getDisplayName();
                    if (displayName && displayName === '面板') {
                        data.a('value1', G.toThousands((Math.random() * 1000).toFixed(3)));
                        data.a('value2', G.toThousands((Math.random() * 1000).toFixed(3)));
                        data.a('value3', G.toThousands((Math.random() * 1000).toFixed(3)));

                        // self.g3d.invalidateShape3dCachedImage(data)
                    }
                }
            });
        }

        addToDOM() {
            this.g3d.addToDOM();
        }
    }

    let main = new Main();
    main.addToDOM();

})));
