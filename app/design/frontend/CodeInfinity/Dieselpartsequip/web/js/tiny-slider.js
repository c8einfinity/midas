document.addEventListener('DOMContentLoaded', function () {
    var tns=function(){var t=window,Ti=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Ei=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function ki(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ni(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Bi(t,e,n,i){return i&&t.setItem(e,n),n}function Li(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Di(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ii(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Oi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Si(t){return("insertRule"in t?t.cssRules:t.rules).length}function Hi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ri=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Pi=i?function(t,e){Ri(t,e)||t.classList.add(e)}:function(t,e){Ri(t,e)||(t.className+=" "+e)},Wi=i?function(t,e){Ri(t,e)&&t.classList.remove(e)}:function(t,e){Ri(t,e)&&(t.className=t.className.replace(e,""))};function zi(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function qi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function ji(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Fi(t){zi(t,"hidden")||qi(t,{hidden:""})}function Qi(t){zi(t,"hidden")&&ji(t,"hidden")}function Vi(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Xi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Yi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Ki(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Ui(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Gi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Ji=function(h){h=ki({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["<i class=\"fa-solid fa-circle-chevron-left\"></i>","<i class=\"fa-solid fa-circle-chevron-right\"></i>"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var L=document,p=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,m=38,g=39,y=40,e={},n=h.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=p.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Ni(e.tC):Bi(e,"tC",function(){var t=document,e=Li(),n=Di(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ii(e,n):i.remove(),a}(),n),A=e.tPL?Ni(e.tPL):Bi(e,"tPL",function(){var t,e=document,n=Li(),i=Di(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ii(n,i):a.remove(),t}(),n),D=e.tMQ?Ni(e.tMQ):Bi(e,"tMQ",(r=document,o=Li(),x=Di(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Ii(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Ni(e.tTf):Bi(e,"tTf",Xi("transform"),n),E=e.t3D?Ni(e.t3D):Bi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Li(),a=Di(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ii(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),k=e.tTDu?Ni(e.tTDu):Bi(e,"tTDu",Xi("transitionDuration"),n),N=e.tTDe?Ni(e.tTDe):Bi(e,"tTDe",Xi("transitionDelay"),n),B=e.tADu?Ni(e.tADu):Bi(e,"tADu",Xi("animationDuration"),n),I=e.tADe?Ni(e.tADe):Bi(e,"tADe",Xi("animationDelay"),n),O=e.tTE?Ni(e.tTE):Bi(e,"tTE",Yi(k,"Transition"),n),S=e.tAE?Ni(e.tAE):Bi(e,"tAE",Yi(B,"Animation"),n),H=p.console&&"function"==typeof p.console.warn,R=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],P={},W=R.length;W--;){var z=R[W];if("string"==typeof h[z]){var q=h[z],j=L.querySelector(q);if(P[z]=q,!j||!j.nodeName)return void(H&&console.warn("Can't find",h[z]));h[z]=j}}if(!(h.container.children.length<1)){var F=h.responsive,Q=h.nested,V="carousel"===h.mode;if(F){0 in F&&(h=ki(h,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(h),!V){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var U=h.animateIn,G=h.animateOut,J=h.animateDelay,_=h.animateNormal}var Z,$,tt="horizontal"===h.axis,et=L.createElement("div"),nt=L.createElement("div"),it=h.container,at=it.parentNode,rt=it.outerHTML,ot=it.children,st=ot.length,ut=vn();F&&Ln();var lt,ct,ft,dt,vt,ht,pt,mt=h.autoWidth,gt=mn("fixedWidth"),yt=mn("edgePadding"),xt=mn("gutter"),bt=hn(),wt=mt?1:Math.floor(mn("items")),Ct=mn("slideBy"),Mt=h.viewportMax||h.fixedWidthViewportWidth,At=mn("arrowKeys"),Tt=mn("speed"),Et=h.rewind,kt=!Et&&h.loop,Nt=mn("autoHeight"),Bt=mn("controls"),Lt=mn("controlsText"),Dt=mn("nav"),It=mn("touch"),Ot=mn("mouseDrag"),St=mn("autoplay"),Ht=mn("autoplayTimeout"),Rt=mn("autoplayText"),Pt=mn("autoplayHoverPause"),Wt=mn("autoplayResetOnVisibility"),zt=(pt=document.createElement("style"),ht&&pt.setAttribute("media",ht),document.querySelector("head").appendChild(pt),pt.sheet?pt.sheet:pt.styleSheet),qt=h.lazyload,jt=[],Ft=kt?(dt=function(){{if(mt||gt&&!Mt)return st-1;var t=gt?"fixedWidth":"items",e=[];if((gt||h[t]<st)&&e.push(h[t]),F)for(var n in F){var i=F[n][t];i&&(gt||i<st)&&e.push(i)}return e.length||e.push(0),Math.ceil(gt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-st)/2):4*dt-st,vt=Math.max(dt,vt),pn("edgePadding")?vt+1:vt):0,Qt=V?st+2*Ft:st+Ft,Vt=!(!gt&&!mt||kt),Xt=gt?_n():null,Yt=!V||!kt,Kt=tt?"left":"top",Ut="",Gt="",Jt=gt?function(){return Math.floor(-Xt/(gt+xt))+1}:mt?function(){for(var t=Qt,e=t-1;t--;)lt[t]>-Xt&&(e=t);return e}:function(){return kt||V?Math.max(0,Qt-Math.ceil(wt)):Qt-1},_t=fn(mn("startIndex")),Zt=_t,$t=0,te=mt?null:Jt(),ee=h.swipeAngle,ne=!ee||"?",ie=!1,ae=h.onInit,re=new Gi,oe=" tns-slider tns-"+h.mode,se=it.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),ue=mn("disable"),le=!1,ce=h.freezable,fe=!(!ce||mt)&&Bn(),de=!1,ve={click:oi,keydown:function(t){switch((t=hi(t)).keyCode){case v:case m:case l:Oe.disabled||oi(t,-1);break;case g:case y:case c:Se.disabled||oi(t,1);break;case d:ri("first",t);break;case f:ri("last",t)}}},he={click:function(t){ie&&ai();var e=(t=hi(t)).target||t.srcElement;for(;e!==We&&!zi(e,"data-nav");)e=e.parentNode;zi(e,"data-nav")&&ri(Fe=[].indexOf.call(Pe,e),t)},keydown:function(t){var e=L.activeElement;if(!zi(e,"data-nav"))return;var n=(t=hi(t)).keyCode,i=[].indexOf.call(Pe,e),a=qe.length,r=qe.indexOf(i);h.navContainer&&(a=st,r=i);function o(t){return h.navContainer?t:qe[t]}switch(n){case v:case l:0<r&&vi(Pe[o(r-1)]);break;case m:case d:0<r&&vi(Pe[o(0)]);break;case g:case c:r<a-1&&vi(Pe[o(r+1)]);break;case y:case f:r<a-1&&vi(Pe[o(a-1)]);break;case s:case u:ri(Fe=i,t)}}},pe={mouseover:function(){Ke&&(ui(),Ue=!0)},mouseout:function(){Ue&&(si(),Ue=!1)}},me={visibilitychange:function(){L.hidden?Ke&&(ui(),Je=!0):Je&&(si(),Je=!1)}},ge={keydown:function(t){switch((t=hi(t)).keyCode){case v:oi(t,-1);break;case g:oi(t,1)}}},ye={touchstart:yi,touchmove:xi,touchend:wi,touchcancel:wi},xe={mousedown:yi,mousemove:xi,mouseup:wi,mouseleave:wi},be=pn("controls"),we=pn("nav"),Ce=!!mt||h.navAsThumbnails,Me=pn("autoplay"),Ae=pn("touch"),Te=pn("mouseDrag"),Ee="tns-slide-active",ke="tns-complete",Ne={load:Rn,error:Rn};if(be)var Be,Le,De=h.controlsContainer,Ie=h.controlsContainer?h.controlsContainer.outerHTML:"",Oe=h.prevButton,Se=h.nextButton,He=h.prevButton?h.prevButton.outerHTML:"",Re=h.nextButton?h.nextButton.outerHTML:"";if(we)var Pe,We=h.navContainer,ze=h.navContainer?h.navContainer.outerHTML:"",qe=[],je=qe,Fe=-1,Qe=dn(),Ve=Qe,Xe="tns-nav-active";if(Me)var Ye,Ke,Ue,Ge,Je,_e="forward"===h.autoplayDirection?1:-1,Ze=h.autoplayButton,$e=h.autoplayButton?h.autoplayButton.outerHTML:"",tn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ae||Te)var en,nn={},an={},rn=!1,on=0,sn=tt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};mt||cn(ue||fe),T&&(Kt=T,Ut="translate",E?(Ut+=tt?"3d(":"3d(0px, ",Gt=tt?", 0px, 0px)":", 0px)"):(Ut+=tt?"X(":"Y(",Gt=")")),function(){F&&Ln();!function(){pn("gutter");et.className="tns-outer",nt.className="tns-inner",et.id=se+"-ow",nt.id=se+"-iw",Nt&&(nt.className+=" tns-ah");""===it.id&&(it.id=se);oe+=A||mt?" tns-subpixel":" tns-no-subpixel",oe+=M?" tns-calc":" tns-no-calc",V&&(oe+=" tns-"+h.axis);if(it.className+=oe,V){var t=L.createElement("div");t.className="tns-ovh",et.appendChild(t),t.appendChild(nt)}else et.appendChild(nt);at.insertBefore(et,it),nt.appendChild(it)}();for(var t=0;t<st;t++){var e=ot[t];e.id||(e.id=se+"-item"+t),Pi(e,"tns-item"),!V&&_&&Pi(e,_),qi(e,{"aria-hidden":"true",tabindex:"-1"})}if(Ft){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=Ft;a--;){var r=a%st,o=ot[r].cloneNode(!0);if(ji(o,"id"),i.insertBefore(o,i.firstChild),V){var s=ot[st-1-r].cloneNode(!0);ji(s,"id"),n.appendChild(s)}}it.insertBefore(n,it.firstChild),it.appendChild(i),ot=it.children}(function(){for(var t=_t,e=_t+Math.min(st,wt);t<e;t++){var n=ot[t];qi(n,{"aria-hidden":"false"}),ji(n,["tabindex"]),Pi(n,Ee),V||(n.style.left=100*(t-_t)/wt+"%",Pi(n,U),Wi(n,_))}if(V&&tt&&(A||mt?(Oi(zt,"#"+se+" > .tns-item","font-size:"+p.getComputedStyle(ot[0]).fontSize+";",Si(zt)),Oi(zt,"#"+se,"font-size:0;",Si(zt))):Hi(ot,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Qt+")":100*n/Qt+"%")})),D){var i=gn(h.edgePadding,h.gutter,h.fixedWidth,h.speed);Oi(zt,"#"+se+"-iw",i,Si(zt)),V&&(i=tt&&!mt?"width:"+yn(h.fixedWidth,h.gutter,h.items)+";":"",k&&(i+=Cn(Tt)),Oi(zt,"#"+se,i,Si(zt))),i=tt&&!mt?xn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=bn(h.gutter)),V||(k&&(i+=Cn(Tt)),B&&(i+=Mn(Tt))),i&&Oi(zt,"#"+se+" > .tns-item",i,Si(zt))}else{nt.style.cssText=gn(yt,xt,gt),V&&tt&&!mt&&(it.style.width=yn(gt,xt,wt));var i=tt&&!mt?xn(gt,xt,wt):"";xt&&(i+=bn(xt)),i&&Oi(zt,"#"+se+" > .tns-item",i,Si(zt))}if(F&&D)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=mt?null:mn("items",a),c=mn("fixedWidth",a),f=mn("speed",a),d=mn("edgePadding",a),v=mn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+se+"-iw{"+gn(d,v,c,f)+"}"),V&&tt&&!mt&&("fixedWidth"in r||"items"in r||gt&&"gutter"in r)&&(s="width:"+yn(c,v,l)+";"),k&&"speed"in r&&(s+=Cn(f)),s&&(s="#"+se+"{"+s+"}"),("fixedWidth"in r||gt&&"gutter"in r||!V&&"items"in r)&&(u+=xn(c,v,l)),"gutter"in r&&(u+=bn(v)),!V&&"speed"in r&&(k&&(u+=Cn(f)),B&&(u+=Mn(f))),u&&(u="#"+se+" > .tns-item{"+u+"}"),(i=o+s+u)&&zt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",zt.cssRules.length)}})(),An(),mt||(Tn(),En())}();var un=kt?V?function(){var t=$t,e=te;t+=Ct,e-=Ct,yt?(t+=1,e-=1):gt&&bt%(gt+xt)&&(e-=1),Ft&&(e<_t?_t-=st:_t<t&&(_t+=st))}:function(){if(te<_t)for(;$t+st<=_t;)_t-=st;else if(_t<$t)for(;_t<=te-st;)_t+=st}:function(){_t=Math.max($t,Math.min(te,_t))},ln=V?function(){var e,n,i,a,t,r,o,s,u,l,c;Gn(it,""),k||!Tt?(ti(),Tt&&Vi(it)||ai()):(e=it,n=Kt,i=Ut,a=Gt,t=Zn(),r=Tt,o=ai,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),tt||Ci()}:function(){jt=[];var t={};t[O]=t[S]=ai,Ui(ot[Zt],t),Ki(ot[_t],t),ei(Zt,U,G,!0),ei(_t,_,U),O&&S&&Tt&&Vi(it)||ai()};return{version:"2.8.5",getInfo:Ai,events:re,goTo:ri,play:function(){St&&!Ke&&(ci(),Ge=!1)},pause:function(){Ke&&(fi(),Ge=!0)},isOn:$,updateSliderHeight:Fn,refresh:An,destroy:function(){if(zt.disabled=!0,zt.ownerNode&&zt.ownerNode.remove(),Ui(p,{resize:kn}),At&&Ui(L,ge),De&&Ui(De,ve),We&&Ui(We,he),Ui(it,pe),Ui(it,me),Ze&&Ui(Ze,{click:di}),St&&clearInterval(Ye),V&&O){var t={};t[O]=ai,Ui(it,t)}It&&Ui(it,ye),Ot&&Ui(it,xe);var a=[rt,Ie,He,Re,ze,$e];R.forEach(function(t,e){var n="container"===t?et:h[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling;n.outerHTML=a[e],h[t]=i?i.nextElementSibling:n.parentNode.firstElementChild}}),R=U=G=J=_=tt=et=nt=it=at=rt=ot=st=Z=ut=mt=gt=yt=xt=bt=wt=Ct=Mt=At=Tt=Et=kt=Nt=zt=qt=lt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=he=pe=me=ge=ye=xe=be=we=Ce=Me=Ae=Te=Ee=ke=Ne=ct=Bt=Lt=De=Ie=Oe=Se=Be=Le=Dt=We=ze=Pe=qe=je=Fe=Qe=Ve=Xe=St=Ht=_e=Rt=Pt=Ze=$e=Wt=tn=Ye=Ke=Ue=Ge=Je=nn=an=en=rn=on=sn=It=Ot=null,this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=$=!1},rebuild:function(){return Ji(ki(h,P))}}}function cn(t){t&&(Bt=Dt=It=Ot=At=St=Pt=Wt=!1)}function fn(t){return t=t?Math.max(0,Math.min(kt?st-1:st-wt,t)):0,V?t+Ft:t}function dn(t){for(null==t&&(t=_t),V&&(t-=Ft);t<0;)t+=st;return Math.floor(t%st)}function vn(){return p.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function hn(){return function t(e){return e.clientWidth||t(e.parentNode)}(at)-(2*yt-xt)}function pn(t){if(h[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function mn(t,e){if(null==e&&(e=ut),"items"===t&&gt)return Math.floor(bt/(gt+xt))||1;var n=h[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=mn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function gn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=tt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(tt?o+" 0 0":"0 "+o+" 0")+";"}return k&&i&&(a+=Cn(i)),a}function yn(t,e,n){return t?(t+e)*Qt+"px":M?M+"("+100*Qt+"% / "+n+")":100*Qt/n+"%"}function xn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Qt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function bn(t){var e="";!1!==t&&(e=(tt?"padding-":"margin-")+(tt?"right":"bottom")+": "+t+"px;");return e}function wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Cn(t){return wn(k,18)+"transition-duration:"+t/1e3+"s;"}function Mn(t){return wn(B,17)+"animation-duration:"+t/1e3+"s;"}function An(){if(pn("autoHeight")||mt||!tt){var t=it.querySelectorAll("img");Hi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(Ki(t,Ne),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Pi(t,ke)}),Ti(function(){zn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){if(ct=!0,mt){var e=kt?_t:st-1;!function t(){ot[e-1].getBoundingClientRect().right.toFixed(2)===ot[e].getBoundingClientRect().left.toFixed(2)?n():setTimeout(function(){t()},16)}()}else n();function n(){tt&&!mt||(Qn(),mt?(Xt=_n(),ce&&(fe=Bn()),te=Jt(),cn(ue||fe)):Ci()),V&&$n(),Tn(),En()}})})}else V&&$n()}function Tn(){if(Me){var t=St?"stop":"start";Ze?qi(Ze,{"data-action":t}):h.autoplayButtonOutput&&(et.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+tn[0]+t+tn[1]+Rt[0]+"</button>"),Ze=et.querySelector("[data-action]")),Ze&&Ki(Ze,{click:di}),St&&(ci(),Pt&&Ki(it,pe),Wt&&Ki(it,me))}if(we){var e=V?Ft:0;if(We){qi(We,{"aria-label":"Carousel Pagination"}),Pe=We.children;for(var n=0;n<st;n++){var i=Pe[n];i&&qi(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":ot[e+n].id})}}else{var a="",r=Ce?"":"hidden";for(n=0;n<st;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+ot[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",et.insertAdjacentHTML("afterbegin",a),We=et.querySelector(".tns-nav"),Pe=We.children}if(Mi(),k){var o=k.substring(0,k.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),Oi(zt,"[aria-controls^="+se+"-item]",s,Si(zt))}qi(Pe[Qe],{tabindex:"0","aria-selected":"true"}),Pi(Pe[Qe],Xe),Ki(We,he)}be&&(De||Oe&&Se?(De&&(Oe=De.children[0],Se=De.children[1],qi(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),qi(De.children,{"aria-controls":se,tabindex:"-1"})),qi(Oe,{"data-controls":"prev"}),qi(Se,{"data-controls":"next"})):(et.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+se+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+se+'" type="button">'+Lt[1]+"</button></div>"),De=et.querySelector(".tns-controls"),Oe=De.children[0],Se=De.children[1]),Be=Xn(Oe),Le=Xn(Se),Un(),De?Ki(De,ve):(Ki(Oe,ve),Ki(Se,ve))),Dn()}function En(){if(V&&O){var t={};t[O]=ai,Ki(it,t)}It&&Ki(it,ye),Ot&&Ki(it,xe),At&&Ki(L,ge),"inner"===Q?re.on("outerResized",function(){Nn(),re.emit("innerLoaded",Ai())}):(F||gt||mt||!tt)&&Ki(p,{resize:kn}),"outer"===Q?re.on("innerLoaded",Wn):!Nt&&V||ue||Wn(),Hn(),ue?Sn():fe&&On(),re.on("indexChanged",qn),"function"==typeof ae&&ae(Ai()),"inner"===Q&&re.emit("innerLoaded",Ai()),$=!0}function kn(t){Ti(function(){Nn(hi(t))})}function Nn(t){if($){"outer"===Q&&re.emit("outerResized",Ai(t)),ut=vn();var e,n=Z,i=!1;F&&(Ln(),(e=n!==Z)&&re.emit("newBreakpointStart",Ai(t)));var a,r,o,s,u=wt,l=ue,c=fe,f=At,d=Bt,v=Dt,h=It,p=Ot,m=St,g=Pt,y=Wt,x=_t;if(e){var b=gt,w=Nt,C=Lt,M=Rt;if(!D)var A=xt,T=yt}if(At=mn("arrowKeys"),Bt=mn("controls"),Dt=mn("nav"),It=mn("touch"),Ot=mn("mouseDrag"),St=mn("autoplay"),Pt=mn("autoplayHoverPause"),Wt=mn("autoplayResetOnVisibility"),e&&(ue=mn("disable"),gt=mn("fixedWidth"),Tt=mn("speed"),Nt=mn("autoHeight"),Lt=mn("controlsText"),Rt=mn("autoplayText"),Ht=mn("autoplayTimeout"),D||(yt=mn("edgePadding"),xt=mn("gutter"))),cn(ue),bt=hn(),tt&&!mt||ue||(Qn(),tt||(Ci(),i=!0)),(gt||mt)&&(Xt=_n(),te=Jt()),(e||gt)&&(wt=mn("items"),Ct=mn("slideBy"),(r=wt!==u)&&(gt||mt||(te=Jt()),un())),e&&ue!==l&&(ue?Sn():function(){if(!le)return;if(zt.disabled=!1,it.className+=oe,$n(),kt)for(var t=Ft;t--;)V&&Qi(ot[t]),Qi(ot[Qt-t-1]);if(!V)for(var e=_t,n=_t+st;e<n;e++){var i=ot[e],a=e<_t+wt?U:_;i.style.left=100*(e-_t)/wt+"%",Pi(i,a)}In(),le=!1}()),ce&&(e||gt||mt)&&(fe=Bn())!==c&&(fe?(ti(Zn(fn(0))),On()):(!function(){if(!de)return;yt&&D&&(nt.style.margin="");if(Ft)for(var t="tns-transparent",e=Ft;e--;)V&&Wi(ot[e],t),Wi(ot[Qt-e-1],t);In(),de=!1}(),i=!0)),cn(ue||fe),St||(Pt=Wt=!1),At!==f&&(At?Ki(L,ge):Ui(L,ge)),Bt!==d&&(Bt?Qi(De):Fi(De)),Dt!==v&&(Dt?(Qi(We),Mi()):Fi(We)),It!==h&&(It?Ki(it,ye):Ui(it,ye)),Ot!==p&&(Ot?Ki(it,xe):Ui(it,xe)),St!==m&&(St?(Ze&&Qi(Ze),Ke||Ge||ci()):(Ze&&Fi(Ze),Ke&&fi())),Pt!==g&&(Pt?Ki(it,pe):Ui(it,pe)),Wt!==y&&(Wt?Ki(L,me):Ui(L,me)),e&&(gt!==b&&(i=!0),Nt!==w&&(Nt||(nt.style.height="")),Bt&&Lt!==C&&(Oe.innerHTML=Lt[0],Se.innerHTML=Lt[1]),Ze&&Rt!==M)){var E=St?1:0,k=Ze.innerHTML,N=k.length-M[E].length;k.substring(N)===M[E]&&(Ze.innerHTML=k.substring(0,N)+Rt[E])}if((a=_t!==x)&&(re.emit("indexChanged",Ai()),i=!0),r&&(a||qn(),V||function(){for(var t=_t+Math.min(st,wt),e=Qt;e--;){var n=ot[e];_t<=e&&e<t?(Pi(n,"tns-moving"),n.style.left=100*(e-_t)/wt+"%",Pi(n,U),Wi(n,_)):n.style.left&&(n.style.left="",Pi(n,_),Wi(n,U)),Wi(n,G)}setTimeout(function(){Hi(ot,function(t){Wi(t,"tns-moving")})},300)}()),!ue&&!fe){if(e&&!D&&(yt===T&&xt===A||(nt.style.cssText=gn(yt,xt,gt)),tt)){V&&(it.style.width=yn(gt,xt,wt));var B=xn(gt,xt,wt)+bn(xt);s=Si(o=zt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),Oi(zt,"#"+se+" > .tns-item",B,Si(zt))}!Nt&&V||Wn(),i&&($n(),Zt=_t)}e&&re.emit("newBreakpointEnd",Ai(t))}}function Bn(){return gt||mt?gt?(gt+xt)*st<=bt+2*yt:(kt?lt[st]:Jn())<=bt+2*yt:st<=wt}function Ln(){for(var t in Z=0,F)(t=parseInt(t))<=ut&&(Z=t)}function Dn(){!St&&Ze&&Fi(Ze),!Dt&&We&&Fi(We),!Bt&&De&&Fi(De)}function In(){St&&Ze&&Qi(Ze),Dt&&We&&Qi(We),Bt&&De&&Qi(De)}function On(){if(!de){if(yt&&(nt.style.margin="0px"),Ft)for(var t="tns-transparent",e=Ft;e--;)V&&Pi(ot[e],t),Pi(ot[Qt-e-1],t);Dn(),de=!0}}function Sn(){if(!le){if(zt.disabled=!0,it.className=it.className.replace(oe.substring(1),""),ji(it,["style"]),kt)for(var t=Ft;t--;)V&&Fi(ot[t]),Fi(ot[Qt-t-1]);if(tt&&V||ji(nt,["style"]),!V)for(var e=_t,n=_t+st;e<n;e++){var i=ot[e];ji(i,["style"]),Wi(i,U),Wi(i,_)}Dn(),le=!0}}function Hn(){if(qt&&!ue){var t=_t;if(mt)for(var e=_t+1,n=e,i=lt[_t]+bt+yt-xt;lt[e]<i;)n=++e;else n=_t+wt;for(yt&&(t-=1,mt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Qt));t<n;t++)Hi(ot[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[O]=function(t){t.stopPropagation()},Ki(t,n),Ri(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Pi(t,"loaded"))})}}function Rn(t){var e=pi(t);Pi(e,ke),Ui(e,Ne)}function Pn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)Hi(ot[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Wn(){var t=Nt?Pn(_t,wt):Pn(Ft,st);Ti(function(){zn(t,Fn)})}function zn(n,t){return ct?t():(n.forEach(function(t,e){Ri(t,ke)&&n.splice(e,1)}),n.length?void Ti(function(){zn(n,t)}):t())}function qn(){Hn(),function(){for(var t=_t+Math.min(st,wt),e=Qt;e--;){var n=ot[e];_t<=e&&e<t?zi(n,"tabindex")&&(qi(n,{"aria-hidden":"false"}),ji(n,["tabindex"]),Pi(n,Ee)):(zi(n,"tabindex")||qi(n,{"aria-hidden":"true",tabindex:"-1"}),Ri(n,Ee)&&Wi(n,Ee))}}(),Un(),Mi(),function(){if(Dt&&(Qe=-1!==Fe?Fe:dn(),Fe=-1,Qe!==Ve)){var t=Pe[Ve],e=Pe[Qe];qi(t,{tabindex:"-1","aria-selected":"false"}),qi(e,{tabindex:"0","aria-selected":"true"}),Wi(t,Xe),Pi(e,Xe),Ve=Qe}}()}function jn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)n.push(ot[i].offsetHeight);return Math.max.apply(null,n)}function Fn(){var t=Nt?jn(_t,wt):jn(Ft,st);nt.style.height!==t&&(nt.style.height=t+"px")}function Qn(){lt=[0];for(var t,e=tt?"left":"top",n=ot[0].getBoundingClientRect()[e],i=1;i<Qt;i++)t=ot[i].getBoundingClientRect()[e],lt.push(t-n)}function Vn(t){return t.nodeName.toLowerCase()}function Xn(t){return"button"===Vn(t)}function Yn(t){return"true"===t.getAttribute("aria-disabled")}function Kn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Un(){if(Bt&&!Et&&!kt){var t=Be?Oe.disabled:Yn(Oe),e=Le?Se.disabled:Yn(Se),n=_t<=$t,i=!Et&&te<=_t;n&&!t&&Kn(Be,Oe,!0),!n&&t&&Kn(Be,Oe,!1),i&&!e&&Kn(Le,Se,!0),!i&&e&&Kn(Le,Se,!1)}}function Gn(t,e){k&&(t.style[k]=e)}function Jn(){return gt?(gt+xt)*Qt:lt[Qt-1]+ot[Qt-1].getBoundingClientRect().width}function _n(){var t=bt-(Jn()-xt);return yt&&(t+=yt-xt),0<t&&(t=0),t}function Zn(t){var e;(null==t&&(t=_t),tt&&!mt)?e=gt?-(gt+xt)*t:100*-t/(T?Qt:wt):e=-lt[t];return Vt&&(e=Math.max(e,Xt)),e+=!tt||mt||gt?"px":"%"}function $n(t){Gn(it,"0s"),ti(t)}function ti(t){null==t&&(t=Zn()),it.style[Kt]=Ut+t+Gt}function ei(t,e,n,i){var a=t+wt;kt||(a=Math.min(a,Qt));for(var r=t;r<a;r++){var o=ot[r];i||(o.style.left=100*(r-_t)/wt+"%"),J&&N&&(o.style[N]=o.style[I]=J*(r-t)/1e3+"s"),Wi(o,e),Pi(o,n),i&&jt.push(o)}}function ni(t,e){Yt&&un(),(_t!==Zt||e)&&(re.emit("indexChanged",Ai()),re.emit("transitionStart",Ai()),Nt&&Wn(),Ke&&t&&0<=["click","keydown"].indexOf(t.type)&&fi(),ie=!0,ln())}function ii(t){return t.toLowerCase().replace(/-/g,"")}function ai(t){if(V||ie){if(re.emit("transitionEnd",Ai(t)),!V&&0<jt.length)for(var e=0;e<jt.length;e++){var n=jt[e];n.style.left="",I&&N&&(n.style[I]="",n.style[N]=""),Wi(n,G),Pi(n,_)}if(!t||!V&&t.target.parentNode===it||t.target===it&&ii(t.propertyName)===ii(Kt)){if(!Yt){var i=_t;un(),_t!==i&&(re.emit("indexChanged",Ai()),$n())}"inner"===Q&&re.emit("innerLoaded",Ai()),ie=!1,Zt=_t}}}function ri(t,e){if(!fe)if("prev"===t)oi(e,-1);else if("next"===t)oi(e,1);else{ie&&ai();var n=dn(),i=0;if("first"===t?i=-n:"last"===t?i=V?st-wt-n:st-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(st-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=$t<=_t+i-st?st*a:2*st*a*-1}_t+=i,V&&kt&&(_t<$t&&(_t+=st),te<_t&&(_t-=st)),dn(_t)!==dn(Zt)&&ni(e)}}function oi(t,e){var n;if(ie&&ai(),!e){for(var i=(t=hi(t)).target||t.srcElement;i!==De&&[Oe,Se].indexOf(i)<0;)i=i.parentNode;var a=[Oe,Se].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Et){if(_t===$t&&-1===e)return void ri("last",t);if(_t===te&&1===e)return void ri("first",t)}e&&(_t+=Ct*e,mt&&(_t=Math.floor(_t)),ni(n||t&&"keydown"===t.type?t:null))}function si(){Ye=setInterval(function(){oi(null,_e)},Ht),Ke=!0}function ui(){clearInterval(Ye),Ke=!1}function li(t,e){qi(Ze,{"data-action":t}),Ze.innerHTML=tn[0]+t+tn[1]+e}function ci(){si(),Ze&&li("stop",Rt[1])}function fi(){ui(),Ze&&li("start",Rt[0])}function di(){Ke?(fi(),Ge=!0):(ci(),Ge=!1)}function vi(t){t.focus()}function hi(t){return mi(t=t||p.event)?t.changedTouches[0]:t}function pi(t){return t.target||p.event.srcElement}function mi(t){return 0<=t.type.indexOf("touch")}function gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function yi(t){ie&&ai(),rn=!0,V&&(Ei(on),on=0);var e=hi(t);re.emit(mi(t)?"touchStart":"dragStart",Ai(t)),!mi(t)&&0<=["img","a"].indexOf(Vn(pi(t)))&&gi(t),an.x=nn.x=parseInt(e.clientX),an.y=nn.y=parseInt(e.clientY),V&&(en=parseFloat(it.style[Kt].replace(Ut,"").replace(Gt,"")),Gn(it,"0s"))}function xi(t){if(rn){var e=hi(t);an.x=parseInt(e.clientX),an.y=parseInt(e.clientY),V&&!on&&(on=Ti(function(){!function t(e){if(!ne)return void(rn=!1);Ei(on);rn&&(on=Ti(function(){t(e)}));bi();if(ne){try{e.type&&re.emit(mi(e)?"touchMove":"dragMove",Ai(e))}catch(t){}var n=en,i=sn(an,nn);if(!tt||gt||mt)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Qt):100*i/bt;n+=a,n+="%"}it.style[Kt]=Ut+n+Gt}}(t)}))}}function bi(){var t,e,n,i,a,r;"?"===ne&&an.x!==nn.x&&an.y!==nn.y&&(a=an.y-nn.y,r=an.x-nn.x,t=Math.atan2(a,r)*(180/Math.PI),e=ee,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ne=n===h.axis)}function wi(i){if(rn){V&&(Ei(on),Gn(it,"")),rn=!1;var t=hi(i);an.x=parseInt(t.clientX),an.y=parseInt(t.clientY);var a=sn(an,nn);if(5<=Math.abs(a)){if(!mi(i)){var n=pi(i);Ki(n,{click:function t(e){gi(e),Ui(n,{click:t})}})}V?on=Ti(function(){if(tt&&!mt){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),_t+=t}else{var e=-(en+a);if(e<=0)_t=$t;else if(e>=lt[lt.length-1])_t=te;else for(var n=0;n<Qt&&e>=lt[n];)e>lt[_t=n]&&a<0&&(_t+=1),n++}ni(i,a),re.emit(mi(i)?"touchEnd":"dragEnd",Ai(i))}):(bi(),ne&&oi(i,0<a?-1:1))}}ee&&(ne="?")}function Ci(){nt.style.height=lt[_t+wt]-lt[_t]+"px"}function Mi(){Dt&&!Ce&&(!function(){qe=[];for(var t=dn()%wt;t<st;)V&&!kt&&st<t+wt&&(t=st-wt),qe.push(t),t+=wt;(kt&&qe.length*wt<st||!kt&&0<qe[0])&&qe.unshift(0)}(),qe!==je&&(Hi(Pe,function(t,e){qe.indexOf(e)<0?Fi(t):Qi(t)}),je=qe))}function Ai(t){return{container:it,slideItems:ot,navContainer:We,navItems:Pe,controlsContainer:De,hasControls:be,prevButton:Oe,nextButton:Se,items:wt,slideBy:Ct,cloneCount:Ft,slideCount:st,slideCountNew:Qt,index:_t,indexCached:Zt,navCurrentIndex:Qe,navCurrentIndexCached:Ve,visibleNavIndexes:qe,visibleNavIndexesCached:je,sheet:zt,event:t||{}}}H&&console.warn("No slides found in",h.container)};return Ji}();

    var slider = tns({
        container: ".logo-slider",
        items: 2,
        slideBy: "page",
        speed: 400,
        gutter: 15,
        controls: true,
        mouseDrag: true,
        responsive: {
            500: {
                items: 3,
            },
            900: {
                items: 5
            }
        },
    });

}, false);

