!function(D,P,o){"use strict";var V="ht",w=D[V],h=null,f=Math,p=f.abs,L=f.max,b=Number.MAX_VALUE,K=w.Default,v=K.getInternal(),X=K.clone,N=v.vec3TransformMat4,S=v.appendArray,c=function(){function l(s,Q,q,b){if(s){var d=s[b];if(d){q.ignoreColor||(Q.color=d.kd),!q.ignoreTransparent&&d.d>0&&d.d<1&&(Q.transparent=!0,Q.opacity=d.d);var o;if(!q.ignoreImage&&(o=d.map_kd)){o=o.split(" ");for(var i=-1,f=0;f<o.length;f++)"-o"===o[f]?(Q.uvOffset=[parseFloat(o[f+1]),parseFloat(o[f+2])],f+=3,i=f):"-s"===o[f]&&(Q.uvScale=[parseFloat(o[f+1]),parseFloat(o[f+2])],f+=3,i=f);Q.image=(q.prefix||"")+o.splice(i+1).join(" ")}}}}var Z=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,r=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,J=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,$=/^[og]\s*(.+)?/,j=function(r,u){return u=parseInt(u),u>=0?r[u-1]:r[u+r.length]},C=function(b,P,D,m,i){if(b.lvs){var M=j(P,m),c=j(P,i),r=D.matrix,A=b.lvs;r?(S(A,N(X(M),r)),S(A,N(X(c),r))):(S(A,M),S(A,c))}},Q=function(T,$,O,E,P,R){if(T.vs){var x=j($,E),M=j($,P),_=j($,R),D=O.matrix,a=T.vs;if(O.flipFace){var e=M;M=_,_=e}D?(S(a,N(X(x),D)),S(a,N(X(M),D)),S(a,N(X(_),D))):(S(a,x),S(a,M),S(a,_))}},x=function(Y,t,C,q,e,_){if(Y.vs){var F=j(t,q),X=j(t,e),r=j(t,_),S=C.flipY;if(C.flipFace){var x=X;X=r,r=x}Y.uv.push(F[0],S?1-F[1]:F[1],X[0],S?1-X[1]:X[1],r[0],S?1-r[1]:r[1])}},e=function(L,e,c,U,E,Z){if(L.vs){var O=j(e,U),u=j(e,E),C=j(e,Z),y=c.normalMatrix,g=L.ns;if(c.flipFace){var Y=u;u=C,C=Y}y?(S(g,N(X(O),y)),S(g,N(X(u),y)),S(g,N(X(C),y))):(S(g,O),S(g,u),S(g,C))}},E=function(e,Y,p,x){for(var c=x.length-1,R=0;c>R;++R)C(e,Y,p,x[R],x[R+1]);C(e,Y,p,x[c],x[0])},B=function(z,c,b,n,M,K,u,E){var D=n&&n.length&&E;K[3]===o?(Q(z,c,M,K[0],K[1],K[2]),u&&x(z,b,M,u[0],u[1],u[2]),D&&e(z,n,M,E[0],E[1],E[2])):(Q(z,c,M,K[0],K[1],K[3]),Q(z,c,M,K[1],K[2],K[3]),u&&(x(z,b,M,u[0],u[1],u[3]),x(z,b,M,u[1],u[2],u[3])),D&&(e(z,n,M,E[0],E[1],E[3]),e(z,n,M,E[1],E[2],E[3])))},M=function(h,T,N,H){var X,n,e,j,Z,x,d,y,l=b,t=b,u=b,P=-b,v=-b,U=-b;for(X in h)for(x=h[X].vs,y=x.length,n=0;y>n;n+=3)e=x[n+0],j=x[n+1],Z=x[n+2],l>e&&(l=e),t>j&&(t=j),u>Z&&(u=Z),e>P&&(P=e),j>v&&(v=j),Z>U&&(U=Z);if(N){var M=l+(P-l)/2,G=t+(v-t)/2,R=u+(U-u)/2;for(X in h){for(x=h[X].vs,y=x.length,n=0;y>n;n+=3)x[n+0]-=M,x[n+1]-=G,x[n+2]-=R;if(d=h[X].lvs)for(y=d.length,n=0;y>n;n+=3)d[n+0]-=M,d[n+1]-=G,d[n+2]-=R}}var $,C,m;N?($=P-l,C=v-t,m=U-u):($=2*L(p(l),p(P)),C=2*L(p(t),p(v)),m=2*L(p(u),p(U))),0===$&&($=Math.min(C,m)/1e3||.001),0===C&&(C=Math.min($,m)/1e3||.001),0===m&&(m=Math.min($,C)/1e3||.001),H.rawS3=[$,C,m];for(X in h){if(x=h[X].vs,d=h[X].lvs,T){for(y=x.length,n=0;y>n;n+=3)$&&(x[n+0]/=$),C&&(x[n+1]/=C),m&&(x[n+2]/=m);if(d)for(y=d.length,n=0;y>n;n+=3)$&&(d[n+0]/=$),C&&(d[n+1]/=C),m&&(d[n+2]/=m)}h[X].rawS3=H.rawS3}};return function(P,C,F){if(!P)return h;(v.isString(C)||C instanceof ArrayBuffer)&&(C=k(C)),F||(F={}),F.flipY==h&&(F.flipY=!0),(F.s3||F.r3||F.t3||F.mat)&&(F.matrix=v.createWorldMatrix(F.mat,F.s3,F.r3,F.rotationMode,F.t3));var t,N,D,c,Y,n=w.Style["wf.loadQuadWireframe"],d=[],U=[],g=F.ignoreNormal?h:[],L=F.reverseFlipMtls,j={vs:[],uv:[],ns:g?[]:h},i={htdefault:j},T=new s(P),W={},G="";for(g&&F.matrix&&(F.normalMatrix=v.createNormalMatrix(F.matrix));null!=(N=T.stepNext());)if(N=N.trim(),0!==N.length&&"#"!==N.charAt(0))if(N.indexOf("\\")!==N.length-1)if(G&&(N=G+N,G=""),N.indexOf("#QNAN0")>=0&&(N=N.replace(/#QNAN0/gi,"0")),D=Z.exec(N))d.push([parseFloat(D[1]),parseFloat(D[2]),parseFloat(D[3])]);else if(D=r.exec(N))U.push([parseFloat(D[1]),parseFloat(D[2])]);else if(g&&(D=J.exec(N)))F.flipFace?g.push([parseFloat(-D[1]),parseFloat(-D[2]),parseFloat(-D[3])]):g.push([parseFloat(D[1]),parseFloat(D[2]),parseFloat(D[3])]);else if("f"===N[0]){var q=N.split(/\s+/);if(q.length<4)continue;var p,t,_,A=[],x=[],z=[];for(t=1,_=q.length;_>t;t++)p=q[t].split("/"),A.push(parseInt(p[0],10)),p.length>1&&p[1].length>0&&z.push(parseInt(p[1],10)),p.length>2&&p[2].length>0&&x.push(parseInt(p[2],10));for(t=0,_=A.length-2;_>t;t++)B(j,d,U,g,F,[A[0],A[t+1],A[t+2]],z.length?[z[0],z[t+1],z[t+2]]:h,x.length?[x[0],x[t+1],x[t+2]]:h);n&&E(j,d,F,A)}else if(F.part&&null!==(D=$.exec(N))){j.vs&&0!==j.vs.length||(delete i[j.name],W[j.name]--);var c=(" "+D[0].substr(1).trim()).substr(1),m=W[c]||0;W[c]=m+1,Y=c+(m?m:""),j=i[Y]={name:Y,vs:[],uv:[],ns:g?[]:h,lvs:n?[]:h}}else/^usemtl /.test(N)&&(c=N.substring(7).trim(),F.part?l(C,j,F,c):(j=i[c])||(j=i[c]={name:c,vs:[],uv:[],ns:g?[]:h,lvs:n?[]:h},F.ignoreMtls&&F.ignoreMtls.indexOf(c)>=0&&delete j.vs,(F.reverseFlip||"*"===L||L&&L.indexOf(c)>=0)&&(j.reverseFlip=!0),l(C,j,F,c)));else G+=N.substring(0,N.length-1);var R=[];for(var y in i){var u=i[y].vs;u&&0!==u.length||R.push(y)}R.forEach(function(w){delete i[w]}),M(i,F.cube,F.center,F);var Q=F.shape3d;if(Q){var o=[];for(var c in i){var j=i[c];o.rawS3=j.rawS3,o.push(j)}K.setShape3dModel(Q,o)}return i}}(),k=function(x){var f={};if(x)for(var g,j,W,U,P,D,M=new s(x),p=/\s+/;null!=(j=M.stepNext());)j=j.trim(),0!==j.length&&"#"!==j.charAt(0)&&(W=j.indexOf(" "),U=(W?j.substring(0,W):j).toLowerCase(),P=(W?j.substring(W+1):"").trim(),"newmtl"===U?f[P]=g={name:P}:g&&("ka"===U||"kd"===U||"ks"===U?(D=P.split(p,3),g[U]=[parseFloat(D[0]),parseFloat(D[1]),parseFloat(D[2]),1]):g[U]="ns"===U||"d"===U?parseFloat(P):P));return f},s=function(K){var B=this;if(K instanceof ArrayBuffer){B.isBuffer=!0;var j=0,E=new Uint8Array(K),G=E.length,l=E.length;B.stepNext=function(){for(var i,t,p=j;G>j;)if(i=E[j],t=i>>4,12===t||13==t)j+=2;else if(14===t)j+=3;else if(j++,10===i)return String.fromCharCode.apply(null,E.subarray(p,j));return j>p?String.fromCharCode.apply(null,E.subarray(p,j)):null}}else{B.isBuffer=!1;var Y=K.split("\n"),V=0,l=Y.length;B.stepNext=function(){return l>V?Y[V++]:null}}};s.prototype={},s.prototype.constructor=s,v.addMethod(K,{loadObj:function(v,B,x){x=x||{};var l=!1;/(MSIE |Trident\/|Edge\/)/.test(D.navigator.userAgent)&&(l=!0);var U=function($){var O,R=x.finishFunc,g=x.shape3d,B=$?c($[0],$[1],x):null;if(B){if(g)O=K.getShape3dModel(g);else{O=[];for(var U in B){var V=B[U];O.rawS3=V.rawS3,O.push(V)}}R&&R(B,O,O.rawS3)}else R&&R(null)};if(l){var i=function(H){x.responseType="arraybuffer",K.xhrLoad(v,function(X){U([X,H])},x)};B?K.xhrLoad(B,function(E){i(E)},x):i()}else K.xhrLoad(B?[v,B]:[v],U,x)},parseObj:function(n,Y,A){return c(n,Y,A)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);