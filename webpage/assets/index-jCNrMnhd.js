(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function M1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var wd={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function b1(){if(_x)return Sl;_x=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return Sl.Fragment=t,Sl.jsx=n,Sl.jsxs=n,Sl}var xx;function E1(){return xx||(xx=1,wd.exports=b1()),wd.exports}var H=E1(),Dd={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function T1(){if(yx)return re;yx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function y(B,Q,yt){this.props=B,this.context=Q,this.refs=S,this.updater=yt||b}y.prototype.isReactComponent={},y.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=y.prototype;function C(B,Q,yt){this.props=B,this.context=Q,this.refs=S,this.updater=yt||b}var N=C.prototype=new A;N.constructor=C,R(N,y.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function P(B,Q,yt){var At=yt.ref;return{$$typeof:i,type:B,key:Q,ref:At!==void 0?At:null,props:yt}}function V(B,Q){return P(B.type,Q,B.props)}function z(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function Y(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(yt){return Q[yt]})}var ct=/\/+/g;function ht(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?Y(""+B.key):Q.toString(36)}function W(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(Q){B.status==="pending"&&(B.status="fulfilled",B.value=Q)},function(Q){B.status==="pending"&&(B.status="rejected",B.reason=Q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function O(B,Q,yt,At,Dt){var ot=typeof B;(ot==="undefined"||ot==="boolean")&&(B=null);var St=!1;if(B===null)St=!0;else switch(ot){case"bigint":case"string":case"number":St=!0;break;case"object":switch(B.$$typeof){case i:case t:St=!0;break;case g:return St=B._init,O(St(B._payload),Q,yt,At,Dt)}}if(St)return Dt=Dt(B),St=At===""?"."+ht(B,0):At,F(Dt)?(yt="",St!=null&&(yt=St.replace(ct,"$&/")+"/"),O(Dt,Q,yt,"",function(ee){return ee})):Dt!=null&&(z(Dt)&&(Dt=V(Dt,yt+(Dt.key==null||B&&B.key===Dt.key?"":(""+Dt.key).replace(ct,"$&/")+"/")+St)),Q.push(Dt)),1;St=0;var Et=At===""?".":At+":";if(F(B))for(var Ht=0;Ht<B.length;Ht++)At=B[Ht],ot=Et+ht(At,Ht),St+=O(At,Q,yt,ot,Dt);else if(Ht=x(B),typeof Ht=="function")for(B=Ht.call(B),Ht=0;!(At=B.next()).done;)At=At.value,ot=Et+ht(At,Ht++),St+=O(At,Q,yt,ot,Dt);else if(ot==="object"){if(typeof B.then=="function")return O(W(B),Q,yt,At,Dt);throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function G(B,Q,yt){if(B==null)return B;var At=[],Dt=0;return O(B,At,"","",function(ot){return Q.call(yt,ot,Dt++)}),At}function $(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(yt){(B._status===0||B._status===-1)&&(B._status=1,B._result=yt)},function(yt){(B._status===0||B._status===-1)&&(B._status=2,B._result=yt)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var ft=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xt={map:G,forEach:function(B,Q,yt){G(B,function(){Q.apply(this,arguments)},yt)},count:function(B){var Q=0;return G(B,function(){Q++}),Q},toArray:function(B){return G(B,function(Q){return Q})||[]},only:function(B){if(!z(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return re.Activity=_,re.Children=xt,re.Component=y,re.Fragment=n,re.Profiler=o,re.PureComponent=C,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},re.cache=function(B){return function(){return B.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(B,Q,yt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var At=R({},B.props),Dt=B.key;if(Q!=null)for(ot in Q.key!==void 0&&(Dt=""+Q.key),Q)!E.call(Q,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&Q.ref===void 0||(At[ot]=Q[ot]);var ot=arguments.length-2;if(ot===1)At.children=yt;else if(1<ot){for(var St=Array(ot),Et=0;Et<ot;Et++)St[Et]=arguments[Et+2];At.children=St}return P(B.type,Dt,At)},re.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},re.createElement=function(B,Q,yt){var At,Dt={},ot=null;if(Q!=null)for(At in Q.key!==void 0&&(ot=""+Q.key),Q)E.call(Q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=Q[At]);var St=arguments.length-2;if(St===1)Dt.children=yt;else if(1<St){for(var Et=Array(St),Ht=0;Ht<St;Ht++)Et[Ht]=arguments[Ht+2];Dt.children=Et}if(B&&B.defaultProps)for(At in St=B.defaultProps,St)Dt[At]===void 0&&(Dt[At]=St[At]);return P(B,ot,Dt)},re.createRef=function(){return{current:null}},re.forwardRef=function(B){return{$$typeof:h,render:B}},re.isValidElement=z,re.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:$}},re.memo=function(B,Q){return{$$typeof:d,type:B,compare:Q===void 0?null:Q}},re.startTransition=function(B){var Q=I.T,yt={};I.T=yt;try{var At=B(),Dt=I.S;Dt!==null&&Dt(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(L,ft)}catch(ot){ft(ot)}finally{Q!==null&&yt.types!==null&&(Q.types=yt.types),I.T=Q}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(B){return I.H.use(B)},re.useActionState=function(B,Q,yt){return I.H.useActionState(B,Q,yt)},re.useCallback=function(B,Q){return I.H.useCallback(B,Q)},re.useContext=function(B){return I.H.useContext(B)},re.useDebugValue=function(){},re.useDeferredValue=function(B,Q){return I.H.useDeferredValue(B,Q)},re.useEffect=function(B,Q){return I.H.useEffect(B,Q)},re.useEffectEvent=function(B){return I.H.useEffectEvent(B)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(B,Q,yt){return I.H.useImperativeHandle(B,Q,yt)},re.useInsertionEffect=function(B,Q){return I.H.useInsertionEffect(B,Q)},re.useLayoutEffect=function(B,Q){return I.H.useLayoutEffect(B,Q)},re.useMemo=function(B,Q){return I.H.useMemo(B,Q)},re.useOptimistic=function(B,Q){return I.H.useOptimistic(B,Q)},re.useReducer=function(B,Q,yt){return I.H.useReducer(B,Q,yt)},re.useRef=function(B){return I.H.useRef(B)},re.useState=function(B){return I.H.useState(B)},re.useSyncExternalStore=function(B,Q,yt){return I.H.useSyncExternalStore(B,Q,yt)},re.useTransition=function(){return I.H.useTransition()},re.version="19.2.5",re}var Sx;function Wm(){return Sx||(Sx=1,Dd.exports=T1()),Dd.exports}var Bt=Wm();const mo=M1(Bt);var Nd={exports:{}},Ml={},Ud={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx;function A1(){return Mx||(Mx=1,(function(i){function t(O,G){var $=O.length;O.push(G);t:for(;0<$;){var ft=$-1>>>1,xt=O[ft];if(0<o(xt,G))O[ft]=G,O[$]=xt,$=ft;else break t}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var G=O[0],$=O.pop();if($!==G){O[0]=$;t:for(var ft=0,xt=O.length,B=xt>>>1;ft<B;){var Q=2*(ft+1)-1,yt=O[Q],At=Q+1,Dt=O[At];if(0>o(yt,$))At<xt&&0>o(Dt,yt)?(O[ft]=Dt,O[At]=$,ft=At):(O[ft]=yt,O[Q]=$,ft=Q);else if(At<xt&&0>o(Dt,$))O[ft]=Dt,O[At]=$,ft=At;else break t}}return G}function o(O,G){var $=O.sortIndex-G.sortIndex;return $!==0?$:O.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,b=!1,R=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var G=n(d);G!==null;){if(G.callback===null)s(d);else if(G.startTime<=O)s(d),G.sortIndex=G.expirationTime,t(m,G);else break;G=n(d)}}function F(O){if(R=!1,N(O),!b)if(n(m)!==null)b=!0,L||(L=!0,Y());else{var G=n(d);G!==null&&W(F,G.startTime-O)}}var L=!1,I=-1,E=5,P=-1;function V(){return S?!0:!(i.unstable_now()-P<E)}function z(){if(S=!1,L){var O=i.unstable_now();P=O;var G=!0;try{t:{b=!1,R&&(R=!1,A(I),I=-1),x=!0;var $=v;try{e:{for(N(O),_=n(m);_!==null&&!(_.expirationTime>O&&V());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var xt=ft(_.expirationTime<=O);if(O=i.unstable_now(),typeof xt=="function"){_.callback=xt,N(O),G=!0;break e}_===n(m)&&s(m),N(O)}else s(m);_=n(m)}if(_!==null)G=!0;else{var B=n(d);B!==null&&W(F,B.startTime-O),G=!1}}break t}finally{_=null,v=$,x=!1}G=void 0}}finally{G?Y():L=!1}}}var Y;if(typeof C=="function")Y=function(){C(z)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ht=ct.port2;ct.port1.onmessage=z,Y=function(){ht.postMessage(null)}}else Y=function(){y(z,0)};function W(O,G){I=y(function(){O(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_next=function(O){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var $=v;v=G;try{return O()}finally{v=$}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=v;v=O;try{return G()}finally{v=$}},i.unstable_scheduleCallback=function(O,G,$){var ft=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ft+$:ft):$=ft,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=$+xt,O={id:g++,callback:G,priorityLevel:O,startTime:$,expirationTime:xt,sortIndex:-1},$>ft?(O.sortIndex=$,t(d,O),n(m)===null&&O===n(d)&&(R?(A(I),I=-1):R=!0,W(F,$-ft))):(O.sortIndex=xt,t(m,O),b||x||(b=!0,L||(L=!0,Y()))),O},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(O){var G=v;return function(){var $=v;v=G;try{return O.apply(this,arguments)}finally{v=$}}}})(Ld)),Ld}var bx;function R1(){return bx||(bx=1,Ud.exports=A1()),Ud.exports}var Pd={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function C1(){if(Ex)return Hn;Ex=1;var i=Wm();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Hn.flushSync=function(m){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=d,s.p=g,s.d.f()}},Hn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Hn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,d){return m(d)},Hn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.5",Hn}var Tx;function w1(){if(Tx)return Pd.exports;Tx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Pd.exports=C1(),Pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function D1(){if(Ax)return Ml;Ax=1;var i=R1(),t=Wm(),n=w1();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var f=r.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===r)return m(f),e;if(p===l)return m(f),a;p=p.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=p;else{for(var M=!1,D=f.child;D;){if(D===r){M=!0,r=f,l=p;break}if(D===l){M=!0,l=f,r=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===r){M=!0,r=p,l=f;break}if(D===l){M=!0,l=p,r=f;break}D=D.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case C:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case N:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return a=e.displayName||null,a!==null?a:ht(e.type)||"Memo";case E:a=e._payload,e=e._init;try{return ht(e(a))}catch{}}return null}var W=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ft=[],xt=-1;function B(e){return{current:e}}function Q(e){0>xt||(e.current=ft[xt],ft[xt]=null,xt--)}function yt(e,a){xt++,ft[xt]=e.current,e.current=a}var At=B(null),Dt=B(null),ot=B(null),St=B(null);function Et(e,a){switch(yt(ot,a),yt(Dt,e),yt(At,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?H_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=H_(a),e=G_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(At),yt(At,e)}function Ht(){Q(At),Q(Dt),Q(ot)}function ee(e){e.memoizedState!==null&&yt(St,e);var a=At.current,r=G_(a,e.type);a!==r&&(yt(Dt,e),yt(At,r))}function $t(e){Dt.current===e&&(Q(At),Q(Dt)),St.current===e&&(Q(St),vl._currentValue=$)}var je,de;function xe(e){if(je===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);je=a&&a[1]||"",de=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+de}var Le=!1;function ue(e,a){if(!e||Le)return"";Le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var rt=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){rt=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],D=p[1];if(M&&D){var k=M.split(`
`),nt=D.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<nt.length&&!nt[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===nt.length)for(l=k.length-1,f=nt.length-1;1<=l&&0<=f&&k[l]!==nt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==nt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==nt[f]){var pt=`
`+k[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{Le=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?xe(r):""}function cn(e,a){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==a&&a!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return xe("Activity");default:return""}}function Ke(e){try{var a="",r=null;do a+=cn(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Dn=Object.prototype.hasOwnProperty,q=i.unstable_scheduleCallback,an=i.unstable_cancelCallback,pe=i.unstable_shouldYield,He=i.unstable_requestPaint,Rt=i.unstable_now,$e=i.unstable_getCurrentPriorityLevel,U=i.unstable_ImmediatePriority,T=i.unstable_UserBlockingPriority,J=i.unstable_NormalPriority,vt=i.unstable_LowPriority,bt=i.unstable_IdlePriority,Ct=i.log,Lt=i.unstable_setDisableYieldValue,ut=null,dt=null;function Pt(e){if(typeof Ct=="function"&&Lt(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var Ot=Math.clz32?Math.clz32:ae,Nt=Math.log,wt=Math.LN2;function ae(e){return e>>>=0,e===0?32:31-(Nt(e)/wt|0)|0}var se=256,me=262144,X=4194304;function Tt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var D=l&134217727;return D!==0?(l=D&~p,l!==0?f=Tt(l):(M&=D,M!==0?f=Tt(M):r||(r=D&~e,r!==0&&(f=Tt(r))))):(D=l&~p,D!==0?f=Tt(D):M!==0?f=Tt(M):r||(r=l&~e,r!==0&&(f=Tt(r)))),f===0?0:a!==0&&a!==f&&(a&p)===0&&(p=f&-f,r=a&-a,p>=r||p===32&&(r&4194048)!==0)?a:f}function zt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ut(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function Yt(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function ne(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,a,r,l,f,p){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var D=e.entanglements,k=e.expirationTimes,nt=e.hiddenUpdates;for(r=M&~r;0<r;){var pt=31-Ot(r),_t=1<<pt;D[pt]=0,k[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var lt=rt[pt];lt!==null&&(lt.lane&=-536870913)}r&=~_t}l!==0&&we(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(M&~a))}function we(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Ot(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function xi(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Ot(r),f=1<<l;f&a|e[l]&a&&(e[l]|=a),r&=~f}}function si(e,a){var r=a&-a;return r=(r&42)!==0?1:Ps(r),(r&(e.suspendedLanes|a))!==0?0:r}function Ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Do(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:fx(e.type))}function No(e,a){var r=G.p;try{return G.p=e,a()}finally{G.p=r}}var zn=Math.random().toString(36).slice(2),un="__reactFiber$"+zn,Nn="__reactProps$"+zn,ma="__reactContainer$"+zn,Xa="__reactEvents$"+zn,Jl="__reactListeners$"+zn,_r="__reactHandles$"+zn,Uo="__reactResources$"+zn,ja="__reactMarker$"+zn;function Lo(e){delete e[un],delete e[Nn],delete e[Xa],delete e[Jl],delete e[_r]}function Wa(e){var a=e[un];if(a)return a;for(var r=e.parentNode;r;){if(a=r[ma]||r[un]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=K_(e);e!==null;){if(r=e[un])return r;e=K_(e)}return a}e=r,r=e.parentNode}return null}function qa(e){if(e=e[un]||e[ma]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Os(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function Ya(e){var a=e[Uo];return a||(a=e[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function pn(e){e[ja]=!0}var $l=new Set,w={};function K(e,a){st(e,a),st(e+"Capture",a)}function st(e,a){for(w[e]=a,e=0;e<a.length;e++)$l.add(a[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Ft={};function kt(e){return Dn.call(Ft,e)?!0:Dn.call(at,e)?!1:it.test(e)?Ft[e]=!0:(at[e]=!0,!1)}function It(e,a,r){if(kt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function jt(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Xt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Zt(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,p.call(this,M)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ae(e){if(!e._valueTracker){var a=le(e)?"checked":"value";e._valueTracker=Zt(e,a,""+e[a])}}function tn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=le(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function Oe(e){return e.replace(Pe,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Gt(e,a,r,l,f,p,M,D){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Qt(a)):e.value!==""+Qt(a)&&(e.value=""+Qt(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?ge(e,M,Qt(a)):r!=null?ge(e,M,Qt(r)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+Qt(D):e.removeAttribute("name")}function Vn(e,a,r,l,f,p,M,D){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),a!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||a!=null)){Ae(e);return}r=r!=null?""+Qt(r):"",a=a!=null?""+Qt(a):r,D||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=D?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ae(e)}function ge(e,a,r){a==="number"&&We(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function bn(e,a,r,l){if(e=e.options,a){a={};for(var f=0;f<r.length;f++)a["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=a.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Qt(r),a=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function ri(e,a,r){if(a!=null&&(a=""+Qt(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+Qt(r):""}function Oi(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(W(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=Qt(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ae(e)}function oi(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var Ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||Ie.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function Ii(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&r[f]!==l&&en(e,f,l)}else for(var p in a)a.hasOwnProperty(p)&&en(e,p,a[p])}function Ue(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(e){return Ka.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ga(){}var Af=null;function Rf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,yr=null;function Vg(e){var a=qa(e);if(a&&(e=a.stateNode)){var r=e[Nn]||null;t:switch(e=a.stateNode,a.type){case"input":if(Gt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Oe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var f=l[Nn]||null;if(!f)throw Error(s(90));Gt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&tn(l)}break t;case"textarea":ri(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&bn(e,!!r.multiple,a,!1)}}}var Cf=!1;function Hg(e,a,r){if(Cf)return e(a,r);Cf=!0;try{var l=e(a);return l}finally{if(Cf=!1,(xr!==null||yr!==null)&&(Vc(),xr&&(a=xr,e=yr,yr=xr=null,Vg(a),e)))for(a=0;a<e.length;a++)Vg(e[a])}}function Po(e,a){var r=e.stateNode;if(r===null)return null;var l=r[Nn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=!1;if(va)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){wf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{wf=!1}var Za=null,Df=null,tc=null;function Gg(){if(tc)return tc;var e,a=Df,r=a.length,l,f="value"in Za?Za.value:Za.textContent,p=f.length;for(e=0;e<r&&a[e]===f[e];e++);var M=r-e;for(l=1;l<=M&&a[r-l]===f[p-l];l++);return tc=f.slice(e,1<l?1-l:void 0)}function ec(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function nc(){return!0}function kg(){return!1}function Zn(e){function a(r,l,f,p,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(r=e[D],this[D]=r?r(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?nc:kg,this.isPropagationStopped=kg,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),a}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Zn(Bs),Io=_({},Bs,{view:0,detail:0}),yE=Zn(Io),Nf,Uf,Bo,ac=_({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Nf=e.screenX-Bo.screenX,Uf=e.screenY-Bo.screenY):Uf=Nf=0,Bo=e),Nf)},movementY:function(e){return"movementY"in e?e.movementY:Uf}}),Xg=Zn(ac),SE=_({},ac,{dataTransfer:0}),ME=Zn(SE),bE=_({},Io,{relatedTarget:0}),Lf=Zn(bE),EE=_({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=Zn(EE),AE=_({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RE=Zn(AE),CE=_({},Bs,{data:0}),jg=Zn(CE),wE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=NE[e])?!!a[e]:!1}function Pf(){return UE}var LE=_({},Io,{key:function(e){if(e.key){var a=wE[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),PE=Zn(LE),OE=_({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Zn(OE),IE=_({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),BE=Zn(IE),FE=_({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zE=Zn(FE),VE=_({},ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),HE=Zn(VE),GE=_({},Bs,{newState:0,oldState:0}),kE=Zn(GE),XE=[9,13,27,32],Of=va&&"CompositionEvent"in window,Fo=null;va&&"documentMode"in document&&(Fo=document.documentMode);var jE=va&&"TextEvent"in window&&!Fo,qg=va&&(!Of||Fo&&8<Fo&&11>=Fo),Yg=" ",Kg=!1;function Zg(e,a){switch(e){case"keyup":return XE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function WE(e,a){switch(e){case"compositionend":return Qg(a);case"keypress":return a.which!==32?null:(Kg=!0,Yg);case"textInput":return e=a.data,e===Yg&&Kg?null:e;default:return null}}function qE(e,a){if(Sr)return e==="compositionend"||!Of&&Zg(e,a)?(e=Gg(),tc=Df=Za=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return qg&&a.locale!=="ko"?null:a.data;default:return null}}var YE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!YE[e.type]:a==="textarea"}function $g(e,a,r,l){xr?yr?yr.push(l):yr=[l]:xr=l,a=qc(a,"onChange"),0<a.length&&(r=new ic("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var zo=null,Vo=null;function KE(e){O_(e,0)}function sc(e){var a=Os(e);if(tn(a))return e}function t0(e,a){if(e==="change")return a}var e0=!1;if(va){var If;if(va){var Bf="oninput"in document;if(!Bf){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),Bf=typeof n0.oninput=="function"}If=Bf}else If=!1;e0=If&&(!document.documentMode||9<document.documentMode)}function i0(){zo&&(zo.detachEvent("onpropertychange",a0),Vo=zo=null)}function a0(e){if(e.propertyName==="value"&&sc(Vo)){var a=[];$g(a,Vo,e,Rf(e)),Hg(KE,a)}}function ZE(e,a,r){e==="focusin"?(i0(),zo=a,Vo=r,zo.attachEvent("onpropertychange",a0)):e==="focusout"&&i0()}function QE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sc(Vo)}function JE(e,a){if(e==="click")return sc(a)}function $E(e,a){if(e==="input"||e==="change")return sc(a)}function tT(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var li=typeof Object.is=="function"?Object.is:tT;function Ho(e,a){if(li(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Dn.call(a,f)||!li(e[f],a[f]))return!1}return!0}function s0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r0(e,a){var r=s0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=s0(r)}}function o0(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?o0(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function l0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=We(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=We(e.document)}return a}function Ff(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var eT=va&&"documentMode"in document&&11>=document.documentMode,Mr=null,zf=null,Go=null,Vf=!1;function c0(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vf||Mr==null||Mr!==We(l)||(l=Mr,"selectionStart"in l&&Ff(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=qc(zf,"onSelect"),0<l.length&&(a=new ic("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=Mr)))}function Fs(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var br={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},Hf={},u0={};va&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function zs(e){if(Hf[e])return Hf[e];if(!br[e])return e;var a=br[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in u0)return Hf[e]=a[r];return e}var f0=zs("animationend"),h0=zs("animationiteration"),d0=zs("animationstart"),nT=zs("transitionrun"),iT=zs("transitionstart"),aT=zs("transitioncancel"),p0=zs("transitionend"),m0=new Map,Gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gf.push("scrollEnd");function Bi(e,a){m0.set(e,a),K(a,[e])}var rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],Er=0,kf=0;function oc(){for(var e=Er,a=kf=Er=0;a<e;){var r=yi[a];yi[a++]=null;var l=yi[a];yi[a++]=null;var f=yi[a];yi[a++]=null;var p=yi[a];if(yi[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&g0(r,f,p)}}function lc(e,a,r,l){yi[Er++]=e,yi[Er++]=a,yi[Er++]=r,yi[Er++]=l,kf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xf(e,a,r,l){return lc(e,a,r,l),cc(e)}function Vs(e,a){return lc(e,null,null,a),cc(e)}function g0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,p=e.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&a!==null&&(f=31-Ot(r),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=r|536870912),p):null}function cc(e){if(50<ul)throw ul=0,$h=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Tr={};function sT(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,a,r,l){return new sT(e,a,r,l)}function jf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,a){var r=e.alternate;return r===null?(r=ci(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function v0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function uc(e,a,r,l,f,p){var M=0;if(l=e,typeof e=="function")jf(e)&&(M=1);else if(typeof e=="string")M=u1(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=ci(31,r,a,f),e.elementType=P,e.lanes=p,e;case R:return Hs(r.children,f,p,a);case S:M=8,f|=24;break;case y:return e=ci(12,r,a,f|2),e.elementType=y,e.lanes=p,e;case F:return e=ci(13,r,a,f),e.elementType=F,e.lanes=p,e;case L:return e=ci(19,r,a,f),e.elementType=L,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:M=10;break t;case A:M=9;break t;case N:M=11;break t;case I:M=14;break t;case E:M=16,l=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=ci(M,r,a,f),a.elementType=e,a.type=l,a.lanes=p,a}function Hs(e,a,r,l){return e=ci(7,e,l,a),e.lanes=r,e}function Wf(e,a,r){return e=ci(6,e,null,a),e.lanes=r,e}function _0(e){var a=ci(18,null,null,0);return a.stateNode=e,a}function qf(e,a,r){return a=ci(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var x0=new WeakMap;function Si(e,a){if(typeof e=="object"&&e!==null){var r=x0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:Ke(a)},x0.set(e,a),a)}return{value:e,source:a,stack:Ke(a)}}var Ar=[],Rr=0,fc=null,ko=0,Mi=[],bi=0,Qa=null,Zi=1,Qi="";function xa(e,a){Ar[Rr++]=ko,Ar[Rr++]=fc,fc=e,ko=a}function y0(e,a,r){Mi[bi++]=Zi,Mi[bi++]=Qi,Mi[bi++]=Qa,Qa=e;var l=Zi;e=Qi;var f=32-Ot(l)-1;l&=~(1<<f),r+=1;var p=32-Ot(a)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Zi=1<<32-Ot(a)+f|r<<f|l,Qi=p+e}else Zi=1<<p|r<<f|l,Qi=e}function Yf(e){e.return!==null&&(xa(e,1),y0(e,1,0))}function Kf(e){for(;e===fc;)fc=Ar[--Rr],Ar[Rr]=null,ko=Ar[--Rr],Ar[Rr]=null;for(;e===Qa;)Qa=Mi[--bi],Mi[bi]=null,Qi=Mi[--bi],Mi[bi]=null,Zi=Mi[--bi],Mi[bi]=null}function S0(e,a){Mi[bi++]=Zi,Mi[bi++]=Qi,Mi[bi++]=Qa,Zi=a.id,Qi=a.overflow,Qa=e}var Un=null,Ze=null,Me=!1,Ja=null,Ei=!1,Zf=Error(s(519));function $a(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Si(a,e)),Zf}function M0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[un]=e,a[Nn]=l,r){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(r=0;r<hl.length;r++)_e(hl[r],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":_e("invalid",a),Vn(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_e("invalid",a);break;case"textarea":_e("invalid",a),Oi(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||z_(a.textContent,r)?(l.popover!=null&&(_e("beforetoggle",a),_e("toggle",a)),l.onScroll!=null&&_e("scroll",a),l.onScrollEnd!=null&&_e("scrollend",a),l.onClick!=null&&(a.onclick=ga),a=!0):a=!1,a||$a(e,!0)}function b0(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Un=Un.return}}function Cr(e){if(e!==Un)return!1;if(!Me)return b0(e),Me=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||pd(e.type,e.memoizedProps)),r=!r),r&&Ze&&$a(e),b0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Y_(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Y_(e)}else a===27?(a=Ze,ds(e.type)?(e=xd,xd=null,Ze=e):Ze=a):Ze=Un?Ai(e.stateNode.nextSibling):null;return!0}function Gs(){Ze=Un=null,Me=!1}function Qf(){var e=Ja;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ja=null),e}function Xo(e){Ja===null?Ja=[e]:Ja.push(e)}var Jf=B(null),ks=null,ya=null;function ts(e,a,r){yt(Jf,a._currentValue),a._currentValue=r}function Sa(e){e._currentValue=Jf.current,Q(Jf)}function $f(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function th(e,a,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;t:for(;p!==null;){var D=p;p=f;for(var k=0;k<a.length;k++)if(D.context===a[k]){p.lanes|=r,D=p.alternate,D!==null&&(D.lanes|=r),$f(p.return,r,e),l||(M=null);break t}p=D.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=r,p=M.alternate,p!==null&&(p.lanes|=r),$f(M,r,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function wr(e,a,r,l){e=null;for(var f=a,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var D=f.type;li(f.pendingProps.value,M.value)||(e!==null?e.push(D):e=[D])}}else if(f===St.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(vl):e=[vl])}f=f.return}e!==null&&th(a,e,r,l),a.flags|=262144}function hc(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xs(e){ks=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return E0(ks,e)}function dc(e,a){return ks===null&&Xs(e),E0(e,a)}function E0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ya===null){if(e===null)throw Error(s(308));ya=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ya=ya.next=a;return r}var rT=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},oT=i.unstable_scheduleCallback,lT=i.unstable_NormalPriority,mn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eh(){return{controller:new rT,data:new Map,refCount:0}}function jo(e){e.refCount--,e.refCount===0&&oT(lT,function(){e.controller.abort()})}var Wo=null,nh=0,Dr=0,Nr=null;function cT(e,a){if(Wo===null){var r=Wo=[];nh=0,Dr=sd(),Nr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return nh++,a.then(T0,T0),a}function T0(){if(--nh===0&&Wo!==null){Nr!==null&&(Nr.status="fulfilled");var e=Wo;Wo=null,Dr=0,Nr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function uT(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<r.length;f++)(0,r[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var A0=O.S;O.S=function(e,a){c_=Rt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&cT(e,a),A0!==null&&A0(e,a)};var js=B(null);function ih(){var e=js.current;return e!==null?e:qe.pooledCache}function pc(e,a){a===null?yt(js,js.current):yt(js,a.pool)}function R0(){var e=ih();return e===null?null:{parent:mn._currentValue,pool:e}}var Ur=Error(s(460)),ah=Error(s(474)),mc=Error(s(542)),gc={then:function(){}};function C0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function w0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(ga,ga),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,N0(e),e;default:if(typeof a.status=="string")a.then(ga,ga);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,N0(e),e}throw qs=a,Ur}}function Ws(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(qs=r,Ur):r}}var qs=null;function D0(){if(qs===null)throw Error(s(459));var e=qs;return qs=null,e}function N0(e){if(e===Ur||e===mc)throw Error(s(483))}var Lr=null,qo=0;function vc(e){var a=qo;return qo+=1,Lr===null&&(Lr=[]),w0(Lr,e,a)}function Yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function _c(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function U0(e){function a(Z,j){if(e){var et=Z.deletions;et===null?(Z.deletions=[j],Z.flags|=16):et.push(j)}}function r(Z,j){if(!e)return null;for(;j!==null;)a(Z,j),j=j.sibling;return null}function l(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function f(Z,j){return Z=_a(Z,j),Z.index=0,Z.sibling=null,Z}function p(Z,j,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<j?(Z.flags|=67108866,j):et):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function D(Z,j,et,gt){return j===null||j.tag!==6?(j=Wf(et,Z.mode,gt),j.return=Z,j):(j=f(j,et),j.return=Z,j)}function k(Z,j,et,gt){var Jt=et.type;return Jt===R?pt(Z,j,et.props.children,gt,et.key):j!==null&&(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===E&&Ws(Jt)===j.type)?(j=f(j,et.props),Yo(j,et),j.return=Z,j):(j=uc(et.type,et.key,et.props,null,Z.mode,gt),Yo(j,et),j.return=Z,j)}function nt(Z,j,et,gt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=qf(et,Z.mode,gt),j.return=Z,j):(j=f(j,et.children||[]),j.return=Z,j)}function pt(Z,j,et,gt,Jt){return j===null||j.tag!==7?(j=Hs(et,Z.mode,gt,Jt),j.return=Z,j):(j=f(j,et),j.return=Z,j)}function _t(Z,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Wf(""+j,Z.mode,et),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return et=uc(j.type,j.key,j.props,null,Z.mode,et),Yo(et,j),et.return=Z,et;case b:return j=qf(j,Z.mode,et),j.return=Z,j;case E:return j=Ws(j),_t(Z,j,et)}if(W(j)||Y(j))return j=Hs(j,Z.mode,et,null),j.return=Z,j;if(typeof j.then=="function")return _t(Z,vc(j),et);if(j.$$typeof===C)return _t(Z,dc(Z,j),et);_c(Z,j)}return null}function rt(Z,j,et,gt){var Jt=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:D(Z,j,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===Jt?k(Z,j,et,gt):null;case b:return et.key===Jt?nt(Z,j,et,gt):null;case E:return et=Ws(et),rt(Z,j,et,gt)}if(W(et)||Y(et))return Jt!==null?null:pt(Z,j,et,gt,null);if(typeof et.then=="function")return rt(Z,j,vc(et),gt);if(et.$$typeof===C)return rt(Z,j,dc(Z,et),gt);_c(Z,et)}return null}function lt(Z,j,et,gt,Jt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(et)||null,D(j,Z,""+gt,Jt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case x:return Z=Z.get(gt.key===null?et:gt.key)||null,k(j,Z,gt,Jt);case b:return Z=Z.get(gt.key===null?et:gt.key)||null,nt(j,Z,gt,Jt);case E:return gt=Ws(gt),lt(Z,j,et,gt,Jt)}if(W(gt)||Y(gt))return Z=Z.get(et)||null,pt(j,Z,gt,Jt,null);if(typeof gt.then=="function")return lt(Z,j,et,vc(gt),Jt);if(gt.$$typeof===C)return lt(Z,j,et,dc(j,gt),Jt);_c(j,gt)}return null}function Wt(Z,j,et,gt){for(var Jt=null,Re=null,Kt=j,fe=j=0,Se=null;Kt!==null&&fe<et.length;fe++){Kt.index>fe?(Se=Kt,Kt=null):Se=Kt.sibling;var Ce=rt(Z,Kt,et[fe],gt);if(Ce===null){Kt===null&&(Kt=Se);break}e&&Kt&&Ce.alternate===null&&a(Z,Kt),j=p(Ce,j,fe),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce,Kt=Se}if(fe===et.length)return r(Z,Kt),Me&&xa(Z,fe),Jt;if(Kt===null){for(;fe<et.length;fe++)Kt=_t(Z,et[fe],gt),Kt!==null&&(j=p(Kt,j,fe),Re===null?Jt=Kt:Re.sibling=Kt,Re=Kt);return Me&&xa(Z,fe),Jt}for(Kt=l(Kt);fe<et.length;fe++)Se=lt(Kt,Z,fe,et[fe],gt),Se!==null&&(e&&Se.alternate!==null&&Kt.delete(Se.key===null?fe:Se.key),j=p(Se,j,fe),Re===null?Jt=Se:Re.sibling=Se,Re=Se);return e&&Kt.forEach(function(_s){return a(Z,_s)}),Me&&xa(Z,fe),Jt}function te(Z,j,et,gt){if(et==null)throw Error(s(151));for(var Jt=null,Re=null,Kt=j,fe=j=0,Se=null,Ce=et.next();Kt!==null&&!Ce.done;fe++,Ce=et.next()){Kt.index>fe?(Se=Kt,Kt=null):Se=Kt.sibling;var _s=rt(Z,Kt,Ce.value,gt);if(_s===null){Kt===null&&(Kt=Se);break}e&&Kt&&_s.alternate===null&&a(Z,Kt),j=p(_s,j,fe),Re===null?Jt=_s:Re.sibling=_s,Re=_s,Kt=Se}if(Ce.done)return r(Z,Kt),Me&&xa(Z,fe),Jt;if(Kt===null){for(;!Ce.done;fe++,Ce=et.next())Ce=_t(Z,Ce.value,gt),Ce!==null&&(j=p(Ce,j,fe),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return Me&&xa(Z,fe),Jt}for(Kt=l(Kt);!Ce.done;fe++,Ce=et.next())Ce=lt(Kt,Z,fe,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&Kt.delete(Ce.key===null?fe:Ce.key),j=p(Ce,j,fe),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return e&&Kt.forEach(function(S1){return a(Z,S1)}),Me&&xa(Z,fe),Jt}function Xe(Z,j,et,gt){if(typeof et=="object"&&et!==null&&et.type===R&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var Jt=et.key;j!==null;){if(j.key===Jt){if(Jt=et.type,Jt===R){if(j.tag===7){r(Z,j.sibling),gt=f(j,et.props.children),gt.return=Z,Z=gt;break t}}else if(j.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===E&&Ws(Jt)===j.type){r(Z,j.sibling),gt=f(j,et.props),Yo(gt,et),gt.return=Z,Z=gt;break t}r(Z,j);break}else a(Z,j);j=j.sibling}et.type===R?(gt=Hs(et.props.children,Z.mode,gt,et.key),gt.return=Z,Z=gt):(gt=uc(et.type,et.key,et.props,null,Z.mode,gt),Yo(gt,et),gt.return=Z,Z=gt)}return M(Z);case b:t:{for(Jt=et.key;j!==null;){if(j.key===Jt)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){r(Z,j.sibling),gt=f(j,et.children||[]),gt.return=Z,Z=gt;break t}else{r(Z,j);break}else a(Z,j);j=j.sibling}gt=qf(et,Z.mode,gt),gt.return=Z,Z=gt}return M(Z);case E:return et=Ws(et),Xe(Z,j,et,gt)}if(W(et))return Wt(Z,j,et,gt);if(Y(et)){if(Jt=Y(et),typeof Jt!="function")throw Error(s(150));return et=Jt.call(et),te(Z,j,et,gt)}if(typeof et.then=="function")return Xe(Z,j,vc(et),gt);if(et.$$typeof===C)return Xe(Z,j,dc(Z,et),gt);_c(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(r(Z,j.sibling),gt=f(j,et),gt.return=Z,Z=gt):(r(Z,j),gt=Wf(et,Z.mode,gt),gt.return=Z,Z=gt),M(Z)):r(Z,j)}return function(Z,j,et,gt){try{qo=0;var Jt=Xe(Z,j,et,gt);return Lr=null,Jt}catch(Kt){if(Kt===Ur||Kt===mc)throw Kt;var Re=ci(29,Kt,null,Z.mode);return Re.lanes=gt,Re.return=Z,Re}finally{}}}var Ys=U0(!0),L0=U0(!1),es=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function is(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(De&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=cc(e),g0(e,null,r),a}return lc(e,l,a,r),cc(e)}function Ko(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,xi(e,r)}}function oh(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,r=r.next}while(r!==null);p===null?f=p=a:p=p.next=a}else f=p=a;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var lh=!1;function Zo(){if(lh){var e=Nr;if(e!==null)throw e}}function Qo(e,a,r,l){lh=!1;var f=e.updateQueue;es=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var k=D,nt=k.next;k.next=null,M===null?p=nt:M.next=nt,M=k;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,D=pt.lastBaseUpdate,D!==M&&(D===null?pt.firstBaseUpdate=nt:D.next=nt,pt.lastBaseUpdate=k))}if(p!==null){var _t=f.baseState;M=0,pt=nt=k=null,D=p;do{var rt=D.lane&-536870913,lt=rt!==D.lane;if(lt?(ye&rt)===rt:(l&rt)===rt){rt!==0&&rt===Dr&&(lh=!0),pt!==null&&(pt=pt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Wt=e,te=D;rt=a;var Xe=r;switch(te.tag){case 1:if(Wt=te.payload,typeof Wt=="function"){_t=Wt.call(Xe,_t,rt);break t}_t=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=te.payload,rt=typeof Wt=="function"?Wt.call(Xe,_t,rt):Wt,rt==null)break t;_t=_({},_t,rt);break t;case 2:es=!0}}rt=D.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},pt===null?(nt=pt=lt,k=_t):pt=pt.next=lt,M|=rt;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;lt=D,D=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);pt===null&&(k=_t),f.baseState=k,f.firstBaseUpdate=nt,f.lastBaseUpdate=pt,p===null&&(f.shared.lanes=0),ls|=M,e.lanes=M,e.memoizedState=_t}}function P0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function O0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)P0(r[e],a)}var Pr=B(null),xc=B(0);function I0(e,a){e=Da,yt(xc,e),yt(Pr,a),Da=e|a.baseLanes}function ch(){yt(xc,Da),yt(Pr,Pr.current)}function uh(){Da=xc.current,Q(Pr),Q(xc)}var ui=B(null),Ti=null;function as(e){var a=e.alternate;yt(fn,fn.current&1),yt(ui,e),Ti===null&&(a===null||Pr.current!==null||a.memoizedState!==null)&&(Ti=e)}function fh(e){yt(fn,fn.current),yt(ui,e),Ti===null&&(Ti=e)}function B0(e){e.tag===22?(yt(fn,fn.current),yt(ui,e),Ti===null&&(Ti=e)):ss()}function ss(){yt(fn,fn.current),yt(ui,ui.current)}function fi(e){Q(ui),Ti===e&&(Ti=null),Q(fn)}var fn=B(0);function yc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||vd(r)||_d(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ma=0,ce=null,Ge=null,gn=null,Sc=!1,Or=!1,Ks=!1,Mc=0,Jo=0,Ir=null,fT=0;function rn(){throw Error(s(321))}function hh(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!li(e[r],a[r]))return!1;return!0}function dh(e,a,r,l,f,p){return Ma=p,ce=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=e===null||e.memoizedState===null?yv:Ch,Ks=!1,p=r(l,f),Ks=!1,Or&&(p=z0(a,r,l,f)),F0(e),p}function F0(e){O.H=el;var a=Ge!==null&&Ge.next!==null;if(Ma=0,gn=Ge=ce=null,Sc=!1,Jo=0,Ir=null,a)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&hc(e)&&(vn=!0))}function z0(e,a,r,l){ce=e;var f=0;do{if(Or&&(Ir=null),Jo=0,Or=!1,25<=f)throw Error(s(301));if(f+=1,gn=Ge=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}O.H=Sv,p=a(r,l)}while(Or);return p}function hT(){var e=O.H,a=e.useState()[0];return a=typeof a.then=="function"?$o(a):a,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),a}function ph(){var e=Mc!==0;return Mc=0,e}function mh(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function gh(e){if(Sc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Sc=!1}Ma=0,gn=Ge=ce=null,Or=!1,Jo=Mc=0,Ir=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ce.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var a=gn===null?ce.memoizedState:gn.next;if(a!==null)gn=a,Ge=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gn===null?ce.memoizedState=gn=e:gn=gn.next=e}return gn}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var a=Jo;return Jo+=1,Ir===null&&(Ir=[]),e=w0(Ir,e,a),a=ce,(gn===null?a.memoizedState:gn.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?yv:Ch),e}function Ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===C)return Ln(e)}throw Error(s(438,String(e)))}function vh(e){var a=null,r=ce.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=bc(),ce.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=V;return a.index++,r}function ba(e,a){return typeof a=="function"?a(e):a}function Tc(e){var a=hn();return _h(a,Ge,e)}function _h(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}a.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{a=f.next;var D=M=null,k=null,nt=a,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(ye&_t)===_t:(Ma&_t)===_t){var rt=nt.revertLane;if(rt===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Dr&&(pt=!0);else if((Ma&rt)===rt){nt=nt.next,rt===Dr&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(D=k=_t,M=p):k=k.next=_t,ce.lanes|=rt,ls|=rt;_t=nt.action,Ks&&r(p,_t),p=nt.hasEagerState?nt.eagerState:r(p,_t)}else rt={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(D=k=rt,M=p):k=k.next=rt,ce.lanes|=_t,ls|=_t;nt=nt.next}while(nt!==null&&nt!==a);if(k===null?M=p:k.next=D,!li(p,e.memoizedState)&&(vn=!0,pt&&(r=Nr,r!==null)))throw r;e.memoizedState=p,e.baseState=M,e.baseQueue=k,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xh(e){var a=hn(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,p=a.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do p=e(p,M.action),M=M.next;while(M!==f);li(p,a.memoizedState)||(vn=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),r.lastRenderedState=p}return[p,l]}function V0(e,a,r){var l=ce,f=hn(),p=Me;if(p){if(r===void 0)throw Error(s(407));r=r()}else r=a();var M=!li((Ge||f).memoizedState,r);if(M&&(f.memoizedState=r,vn=!0),f=f.queue,Mh(k0.bind(null,l,f,e),[e]),f.getSnapshot!==a||M||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Br(9,{destroy:void 0},G0.bind(null,l,f,r,a),null),qe===null)throw Error(s(349));p||(Ma&127)!==0||H0(l,a,r)}return r}function H0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ce.updateQueue,a===null?(a=bc(),ce.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function G0(e,a,r,l){a.value=r,a.getSnapshot=l,X0(a)&&j0(e)}function k0(e,a,r){return r(function(){X0(a)&&j0(e)})}function X0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!li(e,r)}catch{return!0}}function j0(e){var a=Vs(e,2);a!==null&&ei(a,e,2)}function yh(e){var a=jn();if(typeof e=="function"){var r=e;if(e=r(),Ks){Pt(!0);try{r()}finally{Pt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},a}function W0(e,a,r,l){return e.baseState=r,_h(e,Ge,typeof l=="function"?l:ba)}function dT(e,a,r,l,f){if(Cc(e))throw Error(s(485));if(e=a.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};O.T!==null?r(!0):p.isTransition=!1,l(p),r=a.pending,r===null?(p.next=a.pending=p,q0(a,p)):(p.next=r.next,a.pending=r.next=p)}}function q0(e,a){var r=a.action,l=a.payload,f=e.state;if(a.isTransition){var p=O.T,M={};O.T=M;try{var D=r(f,l),k=O.S;k!==null&&k(M,D),Y0(e,a,D)}catch(nt){Sh(e,a,nt)}finally{p!==null&&M.types!==null&&(p.types=M.types),O.T=p}}else try{p=r(f,l),Y0(e,a,p)}catch(nt){Sh(e,a,nt)}}function Y0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){K0(e,a,l)},function(l){return Sh(e,a,l)}):K0(e,a,r)}function K0(e,a,r){a.status="fulfilled",a.value=r,Z0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,q0(e,r)))}function Sh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,Z0(a),a=a.next;while(a!==l)}e.action=null}function Z0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Q0(e,a){return a}function J0(e,a){if(Me){var r=qe.formState;if(r!==null){t:{var l=ce;if(Me){if(Ze){e:{for(var f=Ze,p=Ei;f.nodeType!==8;){if(!p){f=null;break e}if(f=Ai(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Ze=Ai(f.nextSibling),l=f.data==="F!";break t}}$a(l)}l=!1}l&&(a=r[0])}}return r=jn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:a},r.queue=l,r=vv.bind(null,ce,l),l.dispatch=r,l=yh(!1),p=Rh.bind(null,ce,!1,l.queue),l=jn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,r=dT.bind(null,ce,f,p,r),f.dispatch=r,l.memoizedState=e,[a,r,!1]}function $0(e){var a=hn();return tv(a,Ge,e)}function tv(e,a,r){if(a=_h(e,a,Q0)[0],e=Tc(ba)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=$o(a)}catch(M){throw M===Ur?mc:M}else l=a;a=hn();var f=a.queue,p=f.dispatch;return r!==a.memoizedState&&(ce.flags|=2048,Br(9,{destroy:void 0},pT.bind(null,f,r),null)),[l,p,e]}function pT(e,a){e.action=a}function ev(e){var a=hn(),r=Ge;if(r!==null)return tv(a,r,e);hn(),a=a.memoizedState,r=hn();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Br(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ce.updateQueue,a===null&&(a=bc(),ce.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function nv(){return hn().memoizedState}function Ac(e,a,r,l){var f=jn();ce.flags|=e,f.memoizedState=Br(1|a,{destroy:void 0},r,l===void 0?null:l)}function Rc(e,a,r,l){var f=hn();l=l===void 0?null:l;var p=f.memoizedState.inst;Ge!==null&&l!==null&&hh(l,Ge.memoizedState.deps)?f.memoizedState=Br(a,p,r,l):(ce.flags|=e,f.memoizedState=Br(1|a,p,r,l))}function iv(e,a){Ac(8390656,8,e,a)}function Mh(e,a){Rc(2048,8,e,a)}function mT(e){ce.flags|=4;var a=ce.updateQueue;if(a===null)a=bc(),ce.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function av(e){var a=hn().memoizedState;return mT({ref:a,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function sv(e,a){return Rc(4,2,e,a)}function rv(e,a){return Rc(4,4,e,a)}function ov(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function lv(e,a,r){r=r!=null?r.concat([e]):null,Rc(4,4,ov.bind(null,a,e),r)}function bh(){}function cv(e,a){var r=hn();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&hh(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function uv(e,a){var r=hn();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&hh(a,l[1]))return l[0];if(l=e(),Ks){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,a],l}function Eh(e,a,r){return r===void 0||(Ma&1073741824)!==0&&(ye&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=f_(),ce.lanes|=e,ls|=e,r)}function fv(e,a,r,l){return li(r,a)?r:Pr.current!==null?(e=Eh(e,r,l),li(e,a)||(vn=!0),e):(Ma&42)===0||(Ma&1073741824)!==0&&(ye&261930)===0?(vn=!0,e.memoizedState=r):(e=f_(),ce.lanes|=e,ls|=e,a)}function hv(e,a,r,l,f){var p=G.p;G.p=p!==0&&8>p?p:8;var M=O.T,D={};O.T=D,Rh(e,!1,a,r);try{var k=f(),nt=O.S;if(nt!==null&&nt(D,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var pt=uT(k,l);tl(e,a,pt,pi(e))}else tl(e,a,l,pi(e))}catch(_t){tl(e,a,{then:function(){},status:"rejected",reason:_t},pi())}finally{G.p=p,M!==null&&D.types!==null&&(M.types=D.types),O.T=M}}function gT(){}function Th(e,a,r,l){if(e.tag!==5)throw Error(s(476));var f=dv(e).queue;hv(e,f,a,$,r===null?gT:function(){return pv(e),r(l)})}function dv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:$},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function pv(e){var a=dv(e);a.next===null&&(a=e.alternate.memoizedState),tl(e,a.next.queue,{},pi())}function Ah(){return Ln(vl)}function mv(){return hn().memoizedState}function gv(){return hn().memoizedState}function vT(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=pi();e=ns(r);var l=is(a,e,r);l!==null&&(ei(l,a,r),Ko(l,a,r)),a={cache:eh()},e.payload=a;return}a=a.return}}function _T(e,a,r){var l=pi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cc(e)?_v(a,r):(r=Xf(e,a,r,l),r!==null&&(ei(r,e,l),xv(r,a,l)))}function vv(e,a,r){var l=pi();tl(e,a,r,l)}function tl(e,a,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cc(e))_v(a,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var M=a.lastRenderedState,D=p(M,r);if(f.hasEagerState=!0,f.eagerState=D,li(D,M))return lc(e,a,f,0),qe===null&&oc(),!1}catch{}finally{}if(r=Xf(e,a,f,l),r!==null)return ei(r,e,l),xv(r,a,l),!0}return!1}function Rh(e,a,r,l){if(l={lane:2,revertLane:sd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Cc(e)){if(a)throw Error(s(479))}else a=Xf(e,r,l,2),a!==null&&ei(a,e,2)}function Cc(e){var a=e.alternate;return e===ce||a!==null&&a===ce}function _v(e,a){Or=Sc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function xv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,xi(e,r)}}var el={readContext:Ln,use:Ec,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};el.useEffectEvent=rn;var yv={readContext:Ln,use:Ec,useCallback:function(e,a){return jn().memoizedState=[e,a===void 0?null:a],e},useContext:Ln,useEffect:iv,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Ac(4194308,4,ov.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Ac(4194308,4,e,a)},useInsertionEffect:function(e,a){Ac(4,2,e,a)},useMemo:function(e,a){var r=jn();a=a===void 0?null:a;var l=e();if(Ks){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=jn();if(r!==void 0){var f=r(a);if(Ks){Pt(!0);try{r(a)}finally{Pt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=_T.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var a=jn();return e={current:e},a.memoizedState=e},useState:function(e){e=yh(e);var a=e.queue,r=vv.bind(null,ce,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:bh,useDeferredValue:function(e,a){var r=jn();return Eh(r,e,a)},useTransition:function(){var e=yh(!1);return e=hv.bind(null,ce,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ce,f=jn();if(Me){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),qe===null)throw Error(s(349));(ye&127)!==0||H0(l,a,r)}f.memoizedState=r;var p={value:r,getSnapshot:a};return f.queue=p,iv(k0.bind(null,l,p,e),[e]),l.flags|=2048,Br(9,{destroy:void 0},G0.bind(null,l,p,r,a),null),r},useId:function(){var e=jn(),a=qe.identifierPrefix;if(Me){var r=Qi,l=Zi;r=(l&~(1<<32-Ot(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Mc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=fT++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Ah,useFormState:J0,useActionState:J0,useOptimistic:function(e){var a=jn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Rh.bind(null,ce,!0,r),r.dispatch=a,[e,a]},useMemoCache:vh,useCacheRefresh:function(){return jn().memoizedState=vT.bind(null,ce)},useEffectEvent:function(e){var a=jn(),r={impl:e};return a.memoizedState=r,function(){if((De&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Ch={readContext:Ln,use:Ec,useCallback:cv,useContext:Ln,useEffect:Mh,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:rv,useMemo:uv,useReducer:Tc,useRef:nv,useState:function(){return Tc(ba)},useDebugValue:bh,useDeferredValue:function(e,a){var r=hn();return fv(r,Ge.memoizedState,e,a)},useTransition:function(){var e=Tc(ba)[0],a=hn().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:V0,useId:mv,useHostTransitionStatus:Ah,useFormState:$0,useActionState:$0,useOptimistic:function(e,a){var r=hn();return W0(r,Ge,e,a)},useMemoCache:vh,useCacheRefresh:gv};Ch.useEffectEvent=av;var Sv={readContext:Ln,use:Ec,useCallback:cv,useContext:Ln,useEffect:Mh,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:rv,useMemo:uv,useReducer:xh,useRef:nv,useState:function(){return xh(ba)},useDebugValue:bh,useDeferredValue:function(e,a){var r=hn();return Ge===null?Eh(r,e,a):fv(r,Ge.memoizedState,e,a)},useTransition:function(){var e=xh(ba)[0],a=hn().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:V0,useId:mv,useHostTransitionStatus:Ah,useFormState:ev,useActionState:ev,useOptimistic:function(e,a){var r=hn();return Ge!==null?W0(r,Ge,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:vh,useCacheRefresh:gv};Sv.useEffectEvent=av;function wh(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:_({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Dh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=pi(),f=ns(l);f.payload=a,r!=null&&(f.callback=r),a=is(e,f,l),a!==null&&(ei(a,e,l),Ko(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=pi(),f=ns(l);f.tag=1,f.payload=a,r!=null&&(f.callback=r),a=is(e,f,l),a!==null&&(ei(a,e,l),Ko(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=pi(),l=ns(r);l.tag=2,a!=null&&(l.callback=a),a=is(e,l,r),a!==null&&(ei(a,e,r),Ko(a,e,r))}};function Mv(e,a,r,l,f,p,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,M):a.prototype&&a.prototype.isPureReactComponent?!Ho(r,l)||!Ho(f,p):!0}function bv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Dh.enqueueReplaceState(a,a.state,null)}function Zs(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Ev(e){rc(e)}function Tv(e){console.error(e)}function Av(e){rc(e)}function wc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Rv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Nh(e,a,r){return r=ns(r),r.tag=3,r.payload={element:null},r.callback=function(){wc(e,a)},r}function Cv(e){return e=ns(e),e.tag=3,e}function wv(e,a,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){Rv(a,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Rv(a,r,l),typeof f!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function xT(e,a,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&wr(a,r,f,!0),r=ui.current,r!==null){switch(r.tag){case 31:case 13:return Ti===null?Hc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===gc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),nd(e,l,f)),!1;case 22:return r.flags|=65536,l===gc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),nd(e,l,f)),!1}throw Error(s(435,r.tag))}return nd(e,l,f),Hc(),!1}if(Me)return a=ui.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Zf&&(e=Error(s(422),{cause:l}),Xo(Si(e,r)))):(l!==Zf&&(a=Error(s(423),{cause:l}),Xo(Si(a,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Si(l,r),f=Nh(e.stateNode,l,f),oh(e,f),on!==4&&(on=2)),!1;var p=Error(s(520),{cause:l});if(p=Si(p,r),cl===null?cl=[p]:cl.push(p),on!==4&&(on=2),a===null)return!0;l=Si(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Nh(r.stateNode,l,e),oh(r,e),!1;case 1:if(a=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(cs===null||!cs.has(p))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Cv(f),wv(f,e,r,l),oh(r,f),!1}r=r.return}while(r!==null);return!1}var Uh=Error(s(461)),vn=!1;function Pn(e,a,r,l){a.child=e===null?L0(a,null,r,l):Ys(a,e.child,r,l)}function Dv(e,a,r,l,f){r=r.render;var p=a.ref;if("ref"in l){var M={};for(var D in l)D!=="ref"&&(M[D]=l[D])}else M=l;return Xs(a),l=dh(e,a,r,M,p,f),D=ph(),e!==null&&!vn?(mh(e,a,f),Ea(e,a,f)):(Me&&D&&Yf(a),a.flags|=1,Pn(e,a,l,f),a.child)}function Nv(e,a,r,l,f){if(e===null){var p=r.type;return typeof p=="function"&&!jf(p)&&p.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=p,Uv(e,a,p,l,f)):(e=uc(r.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(p=e.child,!Vh(e,f)){var M=p.memoizedProps;if(r=r.compare,r=r!==null?r:Ho,r(M,l)&&e.ref===a.ref)return Ea(e,a,f)}return a.flags|=1,e=_a(p,l),e.ref=a.ref,e.return=a,a.child=e}function Uv(e,a,r,l,f){if(e!==null){var p=e.memoizedProps;if(Ho(p,l)&&e.ref===a.ref)if(vn=!1,a.pendingProps=l=p,Vh(e,f))(e.flags&131072)!==0&&(vn=!0);else return a.lanes=e.lanes,Ea(e,a,f)}return Lh(e,a,r,l,f)}function Lv(e,a,r,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,e!==null){for(l=a.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,a.child=null;return Pv(e,a,p,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&pc(a,p!==null?p.cachePool:null),p!==null?I0(a,p):ch(),B0(a);else return l=a.lanes=536870912,Pv(e,a,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(pc(a,p.cachePool),I0(a,p),ss(),a.memoizedState=null):(e!==null&&pc(a,null),ch(),ss());return Pn(e,a,f,r),a.child}function nl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Pv(e,a,r,l,f){var p=ih();return p=p===null?null:{parent:mn._currentValue,pool:p},a.memoizedState={baseLanes:r,cachePool:p},e!==null&&pc(a,null),ch(),B0(a),e!==null&&wr(e,a,l,!0),a.childLanes=f,null}function Dc(e,a){return a=Uc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Ov(e,a,r){return Ys(a,e.child,null,r),e=Dc(a,a.pendingProps),e.flags|=2,fi(a),a.memoizedState=null,e}function yT(e,a,r){var l=a.pendingProps,f=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Me){if(l.mode==="hidden")return e=Dc(a,l),a.lanes=536870912,nl(null,e);if(fh(a),(e=Ze)?(e=q_(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},r=_0(e),r.return=a,a.child=r,Un=a,Ze=null)):e=null,e===null)throw $a(a);return a.lanes=536870912,null}return Dc(a,l)}var p=e.memoizedState;if(p!==null){var M=p.dehydrated;if(fh(a),f)if(a.flags&256)a.flags&=-257,a=Ov(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(vn||wr(e,a,r,!1),f=(r&e.childLanes)!==0,vn||f){if(l=qe,l!==null&&(M=si(l,r),M!==0&&M!==p.retryLane))throw p.retryLane=M,Vs(e,M),ei(l,e,M),Uh;Hc(),a=Ov(e,a,r)}else e=p.treeContext,Ze=Ai(M.nextSibling),Un=a,Me=!0,Ja=null,Ei=!1,e!==null&&S0(a,e),a=Dc(a,l),a.flags|=4096;return a}return e=_a(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Nc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Lh(e,a,r,l,f){return Xs(a),r=dh(e,a,r,l,void 0,f),l=ph(),e!==null&&!vn?(mh(e,a,f),Ea(e,a,f)):(Me&&l&&Yf(a),a.flags|=1,Pn(e,a,r,f),a.child)}function Iv(e,a,r,l,f,p){return Xs(a),a.updateQueue=null,r=z0(a,l,r,f),F0(e),l=ph(),e!==null&&!vn?(mh(e,a,p),Ea(e,a,p)):(Me&&l&&Yf(a),a.flags|=1,Pn(e,a,r,p),a.child)}function Bv(e,a,r,l,f){if(Xs(a),a.stateNode===null){var p=Tr,M=r.contextType;typeof M=="object"&&M!==null&&(p=Ln(M)),p=new r(l,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Dh,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=l,p.state=a.memoizedState,p.refs={},sh(a),M=r.contextType,p.context=typeof M=="object"&&M!==null?Ln(M):Tr,p.state=a.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(wh(a,r,M,l),p.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Dh.enqueueReplaceState(p,p.state,null),Qo(a,l,p,f),Zo(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){p=a.stateNode;var D=a.memoizedProps,k=Zs(r,D);p.props=k;var nt=p.context,pt=r.contextType;M=Tr,typeof pt=="object"&&pt!==null&&(M=Ln(pt));var _t=r.getDerivedStateFromProps;pt=typeof _t=="function"||typeof p.getSnapshotBeforeUpdate=="function",D=a.pendingProps!==D,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(D||nt!==M)&&bv(a,p,l,M),es=!1;var rt=a.memoizedState;p.state=rt,Qo(a,l,p,f),Zo(),nt=a.memoizedState,D||rt!==nt||es?(typeof _t=="function"&&(wh(a,r,_t,l),nt=a.memoizedState),(k=es||Mv(a,r,k,l,rt,nt,M))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=nt),p.props=l,p.state=nt,p.context=M,l=k):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{p=a.stateNode,rh(e,a),M=a.memoizedProps,pt=Zs(r,M),p.props=pt,_t=a.pendingProps,rt=p.context,nt=r.contextType,k=Tr,typeof nt=="object"&&nt!==null&&(k=Ln(nt)),D=r.getDerivedStateFromProps,(nt=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==_t||rt!==k)&&bv(a,p,l,k),es=!1,rt=a.memoizedState,p.state=rt,Qo(a,l,p,f),Zo();var lt=a.memoizedState;M!==_t||rt!==lt||es||e!==null&&e.dependencies!==null&&hc(e.dependencies)?(typeof D=="function"&&(wh(a,r,D,l),lt=a.memoizedState),(pt=es||Mv(a,r,pt,l,rt,lt,k)||e!==null&&e.dependencies!==null&&hc(e.dependencies))?(nt||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,lt,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,lt,k)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),p.props=l,p.state=lt,p.context=k,l=pt):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),l=!1)}return p=l,Nc(e,a),l=(a.flags&128)!==0,p||l?(p=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,e!==null&&l?(a.child=Ys(a,e.child,null,f),a.child=Ys(a,null,r,f)):Pn(e,a,r,f),a.memoizedState=p.state,e=a.child):e=Ea(e,a,f),e}function Fv(e,a,r,l){return Gs(),a.flags|=256,Pn(e,a,r,l),a.child}var Ph={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oh(e){return{baseLanes:e,cachePool:R0()}}function Ih(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=di),e}function zv(e,a,r){var l=a.pendingProps,f=!1,p=(a.flags&128)!==0,M;if((M=p)||(M=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Me){if(f?as(a):ss(),(e=Ze)?(e=q_(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},r=_0(e),r.return=a,a.child=r,Un=a,Ze=null)):e=null,e===null)throw $a(a);return _d(e)?a.lanes=32:a.lanes=536870912,null}var D=l.children;return l=l.fallback,f?(ss(),f=a.mode,D=Uc({mode:"hidden",children:D},f),l=Hs(l,f,r,null),D.return=a,l.return=a,D.sibling=l,a.child=D,l=a.child,l.memoizedState=Oh(r),l.childLanes=Ih(e,M,r),a.memoizedState=Ph,nl(null,l)):(as(a),Bh(a,D))}var k=e.memoizedState;if(k!==null&&(D=k.dehydrated,D!==null)){if(p)a.flags&256?(as(a),a.flags&=-257,a=Fh(e,a,r)):a.memoizedState!==null?(ss(),a.child=e.child,a.flags|=128,a=null):(ss(),D=l.fallback,f=a.mode,l=Uc({mode:"visible",children:l.children},f),D=Hs(D,f,r,null),D.flags|=2,l.return=a,D.return=a,l.sibling=D,a.child=l,Ys(a,e.child,null,r),l=a.child,l.memoizedState=Oh(r),l.childLanes=Ih(e,M,r),a.memoizedState=Ph,a=nl(null,l));else if(as(a),_d(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var nt=M.dgst;M=nt,l=Error(s(419)),l.stack="",l.digest=M,Xo({value:l,source:null,stack:null}),a=Fh(e,a,r)}else if(vn||wr(e,a,r,!1),M=(r&e.childLanes)!==0,vn||M){if(M=qe,M!==null&&(l=si(M,r),l!==0&&l!==k.retryLane))throw k.retryLane=l,Vs(e,l),ei(M,e,l),Uh;vd(D)||Hc(),a=Fh(e,a,r)}else vd(D)?(a.flags|=192,a.child=e.child,a=null):(e=k.treeContext,Ze=Ai(D.nextSibling),Un=a,Me=!0,Ja=null,Ei=!1,e!==null&&S0(a,e),a=Bh(a,l.children),a.flags|=4096);return a}return f?(ss(),D=l.fallback,f=a.mode,k=e.child,nt=k.sibling,l=_a(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,nt!==null?D=_a(nt,D):(D=Hs(D,f,r,null),D.flags|=2),D.return=a,l.return=a,l.sibling=D,a.child=l,nl(null,l),l=a.child,D=e.child.memoizedState,D===null?D=Oh(r):(f=D.cachePool,f!==null?(k=mn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=R0(),D={baseLanes:D.baseLanes|r,cachePool:f}),l.memoizedState=D,l.childLanes=Ih(e,M,r),a.memoizedState=Ph,nl(e.child,l)):(as(a),r=e.child,e=r.sibling,r=_a(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=r,a.memoizedState=null,r)}function Bh(e,a){return a=Uc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Uc(e,a){return e=ci(22,e,null,a),e.lanes=0,e}function Fh(e,a,r){return Ys(a,e.child,null,r),e=Bh(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Vv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),$f(e.return,a,r)}function zh(e,a,r,l,f,p){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:p}:(M.isBackwards=a,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=f,M.treeForkCount=p)}function Hv(e,a,r){var l=a.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=fn.current,D=(M&2)!==0;if(D?(M=M&1|2,a.flags|=128):M&=1,yt(fn,M),Pn(e,a,l,r),l=Me?ko:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vv(e,r,a);else if(e.tag===19)Vv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=a.child,f=null;r!==null;)e=r.alternate,e!==null&&yc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=a.child,a.child=null):(f=r.sibling,r.sibling=null),zh(a,!1,f,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&yc(e)===null){a.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}zh(a,!0,r,null,p,l);break;case"together":zh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Ea(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),ls|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(wr(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=_a(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=_a(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Vh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&hc(e)))}function ST(e,a,r){switch(a.tag){case 3:Et(a,a.stateNode.containerInfo),ts(a,mn,e.memoizedState.cache),Gs();break;case 27:case 5:ee(a);break;case 4:Et(a,a.stateNode.containerInfo);break;case 10:ts(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,fh(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(as(a),a.flags|=128,null):(r&a.child.childLanes)!==0?zv(e,a,r):(as(a),e=Ea(e,a,r),e!==null?e.sibling:null);as(a);break;case 19:var f=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(wr(e,a,r,!1),l=(r&a.childLanes)!==0),f){if(l)return Hv(e,a,r);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),yt(fn,fn.current),l)break;return null;case 22:return a.lanes=0,Lv(e,a,r,a.pendingProps);case 24:ts(a,mn,e.memoizedState.cache)}return Ea(e,a,r)}function Gv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)vn=!0;else{if(!Vh(e,r)&&(a.flags&128)===0)return vn=!1,ST(e,a,r);vn=(e.flags&131072)!==0}else vn=!1,Me&&(a.flags&1048576)!==0&&y0(a,ko,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Ws(a.elementType),a.type=e,typeof e=="function")jf(e)?(l=Zs(e,l),a.tag=1,a=Bv(null,a,e,l,r)):(a.tag=0,a=Lh(null,a,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===N){a.tag=11,a=Dv(null,a,e,l,r);break t}else if(f===I){a.tag=14,a=Nv(null,a,e,l,r);break t}}throw a=ht(e)||e,Error(s(306,a,""))}}return a;case 0:return Lh(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,f=Zs(l,a.pendingProps),Bv(e,a,l,f,r);case 3:t:{if(Et(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var p=a.memoizedState;f=p.element,rh(e,a),Qo(a,l,null,r);var M=a.memoizedState;if(l=M.cache,ts(a,mn,l),l!==p.cache&&th(a,[mn],r,!0),Zo(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=Fv(e,a,l,r);break t}else if(l!==f){f=Si(Error(s(424)),a),Xo(f),a=Fv(e,a,l,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Ai(e.firstChild),Un=a,Me=!0,Ja=null,Ei=!0,r=L0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Gs(),l===f){a=Ea(e,a,r);break t}Pn(e,a,l,r)}a=a.child}return a;case 26:return Nc(e,a),e===null?(r=$_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Me||(r=a.type,e=a.pendingProps,l=Yc(ot.current).createElement(r),l[un]=a,l[Nn]=e,On(l,r,e),pn(l),a.stateNode=l):a.memoizedState=$_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return ee(a),e===null&&Me&&(l=a.stateNode=Z_(a.type,a.pendingProps,ot.current),Un=a,Ei=!0,f=Ze,ds(a.type)?(xd=f,Ze=Ai(l.firstChild)):Ze=f),Pn(e,a,a.pendingProps.children,r),Nc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Me&&((f=l=Ze)&&(l=QT(l,a.type,a.pendingProps,Ei),l!==null?(a.stateNode=l,Un=a,Ze=Ai(l.firstChild),Ei=!1,f=!0):f=!1),f||$a(a)),ee(a),f=a.type,p=a.pendingProps,M=e!==null?e.memoizedProps:null,l=p.children,pd(f,p)?l=null:M!==null&&pd(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=dh(e,a,hT,null,null,r),vl._currentValue=f),Nc(e,a),Pn(e,a,l,r),a.child;case 6:return e===null&&Me&&((e=r=Ze)&&(r=JT(r,a.pendingProps,Ei),r!==null?(a.stateNode=r,Un=a,Ze=null,e=!0):e=!1),e||$a(a)),null;case 13:return zv(e,a,r);case 4:return Et(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Ys(a,null,l,r):Pn(e,a,l,r),a.child;case 11:return Dv(e,a,a.type,a.pendingProps,r);case 7:return Pn(e,a,a.pendingProps,r),a.child;case 8:return Pn(e,a,a.pendingProps.children,r),a.child;case 12:return Pn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,ts(a,a.type,l.value),Pn(e,a,l.children,r),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Xs(a),f=Ln(f),l=l(f),a.flags|=1,Pn(e,a,l,r),a.child;case 14:return Nv(e,a,a.type,a.pendingProps,r);case 15:return Uv(e,a,a.type,a.pendingProps,r);case 19:return Hv(e,a,r);case 31:return yT(e,a,r);case 22:return Lv(e,a,r,a.pendingProps);case 24:return Xs(a),l=Ln(mn),e===null?(f=ih(),f===null&&(f=qe,p=eh(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=r),f=p),a.memoizedState={parent:l,cache:f},sh(a),ts(a,mn,f)):((e.lanes&r)!==0&&(rh(e,a),Qo(a,null,null,r),Zo()),f=e.memoizedState,p=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),ts(a,mn,l)):(l=p.cache,ts(a,mn,l),l!==f.cache&&th(a,[mn],r,!0))),Pn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Ta(e){e.flags|=4}function Hh(e,a,r,l,f){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(m_())e.flags|=8192;else throw qs=gc,ah}else e.flags&=-16777217}function kv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ax(a))if(m_())e.flags|=8192;else throw qs=gc,ah}function Lc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Mt():536870912,e.lanes|=a,Hr|=a)}function il(e,a){if(!Me)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function MT(e,a,r){var l=a.pendingProps;switch(Kf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(a),null;case 1:return Qe(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Sa(mn),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(a)?Ta(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Qf())),Qe(a),null;case 26:var f=a.type,p=a.memoizedState;return e===null?(Ta(a),p!==null?(Qe(a),kv(a,p)):(Qe(a),Hh(a,f,null,l,r))):p?p!==e.memoizedState?(Ta(a),Qe(a),kv(a,p)):(Qe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ta(a),Qe(a),Hh(a,f,e,l,r)),null;case 27:if($t(a),r=ot.current,f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Qe(a),null}e=At.current,Cr(a)?M0(a):(e=Z_(f,l,r),a.stateNode=e,Ta(a))}return Qe(a),null;case 5:if($t(a),f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Qe(a),null}if(p=At.current,Cr(a))M0(a);else{var M=Yc(ot.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[un]=a,p[Nn]=l;t:for(M=a.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===a)break t;for(;M.sibling===null;){if(M.return===null||M.return===a)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}a.stateNode=p;t:switch(On(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ta(a)}}return Qe(a),Hh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=ot.current,Cr(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,f=Un,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[un]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||z_(e.nodeValue,r)),e||$a(a,!0)}else e=Yc(e).createTextNode(l),e[un]=a,a.stateNode=e}return Qe(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Cr(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=a}else Gs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),e=!1}else r=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(fi(a),a):(fi(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Qe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Cr(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[un]=a}else Gs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),f=!1}else f=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(fi(a),a):(fi(a),null)}return fi(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Lc(a,a.updateQueue),Qe(a),null);case 4:return Ht(),e===null&&cd(a.stateNode.containerInfo),Qe(a),null;case 10:return Sa(a.type),Qe(a),null;case 19:if(Q(fn),l=a.memoizedState,l===null)return Qe(a),null;if(f=(a.flags&128)!==0,p=l.rendering,p===null)if(f)il(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(p=yc(e),p!==null){for(a.flags|=128,il(l,!1),e=p.updateQueue,a.updateQueue=e,Lc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)v0(r,e),r=r.sibling;return yt(fn,fn.current&1|2),Me&&xa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Rt()>Fc&&(a.flags|=128,f=!0,il(l,!1),a.lanes=4194304)}else{if(!f)if(e=yc(p),e!==null){if(a.flags|=128,f=!0,e=e.updateQueue,a.updateQueue=e,Lc(a,e),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Me)return Qe(a),null}else 2*Rt()-l.renderingStartTime>Fc&&r!==536870912&&(a.flags|=128,f=!0,il(l,!1),a.lanes=4194304);l.isBackwards?(p.sibling=a.child,a.child=p):(e=l.last,e!==null?e.sibling=p:a.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Rt(),e.sibling=null,r=fn.current,yt(fn,f?r&1|2:r&1),Me&&xa(a,l.treeForkCount),e):(Qe(a),null);case 22:case 23:return fi(a),uh(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Qe(a),a.subtreeFlags&6&&(a.flags|=8192)):Qe(a),r=a.updateQueue,r!==null&&Lc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&Q(js),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Sa(mn),Qe(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function bT(e,a){switch(Kf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Sa(mn),Ht(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return $t(a),null;case 31:if(a.memoizedState!==null){if(fi(a),a.alternate===null)throw Error(s(340));Gs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fi(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Gs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Q(fn),null;case 4:return Ht(),null;case 10:return Sa(a.type),null;case 22:case 23:return fi(a),uh(),e!==null&&Q(js),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Sa(mn),null;case 25:return null;default:return null}}function Xv(e,a){switch(Kf(a),a.tag){case 3:Sa(mn),Ht();break;case 26:case 27:case 5:$t(a);break;case 4:Ht();break;case 31:a.memoizedState!==null&&fi(a);break;case 13:fi(a);break;case 19:Q(fn);break;case 10:Sa(a.type);break;case 22:case 23:fi(a),uh(),e!==null&&Q(js);break;case 24:Sa(mn)}}function al(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var p=r.create,M=r.inst;l=p(),M.destroy=l}r=r.next}while(r!==f)}}catch(D){Fe(a,a.return,D)}}function rs(e,a,r){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var M=l.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,f=a;var k=r,nt=D;try{nt()}catch(pt){Fe(f,k,pt)}}}l=l.next}while(l!==p)}}catch(pt){Fe(a,a.return,pt)}}function jv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{O0(a,r)}catch(l){Fe(e,e.return,l)}}}function Wv(e,a,r){r.props=Zs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Fe(e,a,l)}}function sl(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Fe(e,a,f)}}function Ji(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Fe(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Fe(e,a,f)}else r.current=null}function qv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Fe(e,e.return,f)}}function Gh(e,a,r){try{var l=e.stateNode;jT(l,e.type,r,a),l[Nn]=a}catch(f){Fe(e,e.return,f)}}function Yv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ds(e.type)||e.tag===4}function kh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ds(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=ga));else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Xh(e,a,r),e=e.sibling;e!==null;)Xh(e,a,r),e=e.sibling}function Pc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Pc(e,a,r),e=e.sibling;e!==null;)Pc(e,a,r),e=e.sibling}function Kv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);On(a,l,r),a[un]=e,a[Nn]=r}catch(p){Fe(e,e.return,p)}}var Aa=!1,_n=!1,jh=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function ET(e,a){if(e=e.containerInfo,hd=eu,e=l0(e),Ff(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var M=0,D=-1,k=-1,nt=0,pt=0,_t=e,rt=null;e:for(;;){for(var lt;_t!==r||f!==0&&_t.nodeType!==3||(D=M+f),_t!==p||l!==0&&_t.nodeType!==3||(k=M+l),_t.nodeType===3&&(M+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)rt=_t,_t=lt;for(;;){if(_t===e)break e;if(rt===r&&++nt===f&&(D=M),rt===p&&++pt===l&&(k=M),(lt=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=lt}r=D===-1||k===-1?null:{start:D,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(dd={focusedElem:e,selectionRange:r},eu=!1,Cn=a;Cn!==null;)if(a=Cn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Cn=e;else for(;Cn!==null;){switch(a=Cn,p=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=a,f=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var Wt=Zs(r.type,f);e=l.getSnapshotBeforeUpdate(Wt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)gd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Cn=e;break}Cn=a.return}}function Qv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(e,r),l&4&&al(5,r);break;case 1:if(Ca(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(M){Fe(r,r.return,M)}else{var f=Zs(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(r,r.return,M)}}l&64&&jv(r),l&512&&sl(r,r.return);break;case 3:if(Ca(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{O0(e,a)}catch(M){Fe(r,r.return,M)}}break;case 27:a===null&&l&4&&Kv(r);case 26:case 5:Ca(e,r),a===null&&l&4&&qv(r),l&512&&sl(r,r.return);break;case 12:Ca(e,r);break;case 31:Ca(e,r),l&4&&t_(e,r);break;case 13:Ca(e,r),l&4&&e_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=LT.bind(null,r),$T(e,r))));break;case 22:if(l=r.memoizedState!==null||Aa,!l){a=a!==null&&a.memoizedState!==null||_n,f=Aa;var p=_n;Aa=l,(_n=a)&&!p?wa(e,r,(r.subtreeFlags&8772)!==0):Ca(e,r),Aa=f,_n=p}break;case 30:break;default:Ca(e,r)}}function Jv(e){var a=e.alternate;a!==null&&(e.alternate=null,Jv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Lo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Qn=!1;function Ra(e,a,r){for(r=r.child;r!==null;)$v(e,a,r),r=r.sibling}function $v(e,a,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,r)}catch{}switch(r.tag){case 26:_n||Ji(r,a),Ra(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:_n||Ji(r,a);var l=nn,f=Qn;ds(r.type)&&(nn=r.stateNode,Qn=!1),Ra(e,a,r),pl(r.stateNode),nn=l,Qn=f;break;case 5:_n||Ji(r,a);case 6:if(l=nn,f=Qn,nn=null,Ra(e,a,r),nn=l,Qn=f,nn!==null)if(Qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(r.stateNode)}catch(p){Fe(r,a,p)}else try{nn.removeChild(r.stateNode)}catch(p){Fe(r,a,p)}break;case 18:nn!==null&&(Qn?(e=nn,j_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Kr(e)):j_(nn,r.stateNode));break;case 4:l=nn,f=Qn,nn=r.stateNode.containerInfo,Qn=!0,Ra(e,a,r),nn=l,Qn=f;break;case 0:case 11:case 14:case 15:rs(2,r,a),_n||rs(4,r,a),Ra(e,a,r);break;case 1:_n||(Ji(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Wv(r,a,l)),Ra(e,a,r);break;case 21:Ra(e,a,r);break;case 22:_n=(l=_n)||r.memoizedState!==null,Ra(e,a,r),_n=l;break;default:Ra(e,a,r)}}function t_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(r){Fe(a,a.return,r)}}}function e_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(r){Fe(a,a.return,r)}}function TT(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Zv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Zv),a;default:throw Error(s(435,e.tag))}}function Oc(e,a){var r=TT(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var f=PT.bind(null,e,l);l.then(f,f)}})}function Jn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],p=e,M=a,D=M;t:for(;D!==null;){switch(D.tag){case 27:if(ds(D.type)){nn=D.stateNode,Qn=!1;break t}break;case 5:nn=D.stateNode,Qn=!1;break t;case 3:case 4:nn=D.stateNode.containerInfo,Qn=!0;break t}D=D.return}if(nn===null)throw Error(s(160));$v(p,M,f),nn=null,Qn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)n_(a,e),a=a.sibling}var Fi=null;function n_(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(a,e),$n(e),l&4&&(rs(3,e,e.return),al(3,e),rs(5,e,e.return));break;case 1:Jn(a,e),$n(e),l&512&&(_n||r===null||Ji(r,r.return)),l&64&&Aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Fi;if(Jn(a,e),$n(e),l&512&&(_n||r===null||Ji(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ja]||p[un]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),On(p,l,r),p[un]=e,pn(p),l=p;break t;case"link":var M=nx("link","href",f).get(l+(r.href||""));if(M){for(var D=0;D<M.length;D++)if(p=M[D],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(D,1);break e}}p=f.createElement(l),On(p,l,r),f.head.appendChild(p);break;case"meta":if(M=nx("meta","content",f).get(l+(r.content||""))){for(D=0;D<M.length;D++)if(p=M[D],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(D,1);break e}}p=f.createElement(l),On(p,l,r),f.head.appendChild(p);break;default:throw Error(s(468,l))}p[un]=e,pn(p),l=p}e.stateNode=l}else ix(f,e.type,e.stateNode);else e.stateNode=ex(f,l,e.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?ix(f,e.type,e.stateNode):ex(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Jn(a,e),$n(e),l&512&&(_n||r===null||Ji(r,r.return)),r!==null&&l&4&&Gh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Jn(a,e),$n(e),l&512&&(_n||r===null||Ji(r,r.return)),e.flags&32){f=e.stateNode;try{oi(f,"")}catch(Wt){Fe(e,e.return,Wt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Gh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(jh=!0);break;case 6:if(Jn(a,e),$n(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Wt){Fe(e,e.return,Wt)}}break;case 3:if(Qc=null,f=Fi,Fi=Kc(a.containerInfo),Jn(a,e),Fi=f,$n(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Kr(a.containerInfo)}catch(Wt){Fe(e,e.return,Wt)}jh&&(jh=!1,i_(e));break;case 4:l=Fi,Fi=Kc(e.stateNode.containerInfo),Jn(a,e),$n(e),Fi=l;break;case 12:Jn(a,e),$n(e);break;case 31:Jn(a,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 13:Jn(a,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bc=Rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 22:f=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,nt=Aa,pt=_n;if(Aa=nt||f,_n=pt||k,Jn(a,e),_n=pt,Aa=nt,$n(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(r===null||k||Aa||_n||Qs(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){k=r=a;try{if(p=k.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=k.stateNode;var _t=k.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;D.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Fe(k,k.return,Wt)}}}else if(a.tag===6){if(r===null){k=a;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Wt){Fe(k,k.return,Wt)}}}else if(a.tag===18){if(r===null){k=a;try{var lt=k.stateNode;f?W_(lt,!0):W_(k.stateNode,!1)}catch(Wt){Fe(k,k.return,Wt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Oc(e,r))));break;case 19:Jn(a,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 30:break;case 21:break;default:Jn(a,e),$n(e)}}function $n(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(Yv(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,p=kh(e);Pc(e,p,f);break;case 5:var M=r.stateNode;r.flags&32&&(oi(M,""),r.flags&=-33);var D=kh(e);Pc(e,D,M);break;case 3:case 4:var k=r.stateNode.containerInfo,nt=kh(e);Xh(e,nt,k);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function i_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;i_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ca(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Qv(e,a.alternate,a),a=a.sibling}function Qs(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:rs(4,a,a.return),Qs(a);break;case 1:Ji(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Wv(a,a.return,r),Qs(a);break;case 27:pl(a.stateNode);case 26:case 5:Ji(a,a.return),Qs(a);break;case 22:a.memoizedState===null&&Qs(a);break;case 30:Qs(a);break;default:Qs(a)}e=e.sibling}}function wa(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,p=a,M=p.flags;switch(p.tag){case 0:case 11:case 15:wa(f,p,r),al(4,p);break;case 1:if(wa(f,p,r),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(nt){Fe(l,l.return,nt)}if(l=p,f=l.updateQueue,f!==null){var D=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)P0(k[f],D)}catch(nt){Fe(l,l.return,nt)}}r&&M&64&&jv(p),sl(p,p.return);break;case 27:Kv(p);case 26:case 5:wa(f,p,r),r&&l===null&&M&4&&qv(p),sl(p,p.return);break;case 12:wa(f,p,r);break;case 31:wa(f,p,r),r&&M&4&&t_(f,p);break;case 13:wa(f,p,r),r&&M&4&&e_(f,p);break;case 22:p.memoizedState===null&&wa(f,p,r),sl(p,p.return);break;case 30:break;default:wa(f,p,r)}a=a.sibling}}function Wh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&jo(r))}function qh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jo(e))}function zi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)a_(e,a,r,l),a=a.sibling}function a_(e,a,r,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a,r,l),f&2048&&al(9,a);break;case 1:zi(e,a,r,l);break;case 3:zi(e,a,r,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&jo(e)));break;case 12:if(f&2048){zi(e,a,r,l),e=a.stateNode;try{var p=a.memoizedProps,M=p.id,D=p.onPostCommit;typeof D=="function"&&D(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Fe(a,a.return,k)}}else zi(e,a,r,l);break;case 31:zi(e,a,r,l);break;case 13:zi(e,a,r,l);break;case 23:break;case 22:p=a.stateNode,M=a.alternate,a.memoizedState!==null?p._visibility&2?zi(e,a,r,l):rl(e,a):p._visibility&2?zi(e,a,r,l):(p._visibility|=2,Fr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),f&2048&&Wh(M,a);break;case 24:zi(e,a,r,l),f&2048&&qh(a.alternate,a);break;default:zi(e,a,r,l)}}function Fr(e,a,r,l,f){for(f=f&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var p=e,M=a,D=r,k=l,nt=M.flags;switch(M.tag){case 0:case 11:case 15:Fr(p,M,D,k,f),al(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?Fr(p,M,D,k,f):rl(p,M):(pt._visibility|=2,Fr(p,M,D,k,f)),f&&nt&2048&&Wh(M.alternate,M);break;case 24:Fr(p,M,D,k,f),f&&nt&2048&&qh(M.alternate,M);break;default:Fr(p,M,D,k,f)}a=a.sibling}}function rl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,f=l.flags;switch(l.tag){case 22:rl(r,l),f&2048&&Wh(l.alternate,l);break;case 24:rl(r,l),f&2048&&qh(l.alternate,l);break;default:rl(r,l)}a=a.sibling}}var ol=8192;function zr(e,a,r){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)s_(e,a,r),e=e.sibling}function s_(e,a,r){switch(e.tag){case 26:zr(e,a,r),e.flags&ol&&e.memoizedState!==null&&f1(r,Fi,e.memoizedState,e.memoizedProps);break;case 5:zr(e,a,r);break;case 3:case 4:var l=Fi;Fi=Kc(e.stateNode.containerInfo),zr(e,a,r),Fi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ol,ol=16777216,zr(e,a,r),ol=l):zr(e,a,r));break;default:zr(e,a,r)}}function r_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ll(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Cn=l,l_(l,e)}r_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o_(e),e=e.sibling}function o_(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&rs(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ic(e)):ll(e);break;default:ll(e)}}function Ic(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Cn=l,l_(l,e)}r_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:rs(8,a,a.return),Ic(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Ic(a));break;default:Ic(a)}e=e.sibling}}function l_(e,a){for(;Cn!==null;){var r=Cn;switch(r.tag){case 0:case 11:case 15:rs(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Cn=l;else t:for(r=e;Cn!==null;){l=Cn;var f=l.sibling,p=l.return;if(Jv(l),l===r){Cn=null;break t}if(f!==null){f.return=p,Cn=f;break t}Cn=p}}}var AT={getCacheForType:function(e){var a=Ln(mn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Ln(mn).controller.signal}},RT=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,ve=null,ye=0,Be=0,hi=null,os=!1,Vr=!1,Yh=!1,Da=0,on=0,ls=0,Js=0,Kh=0,di=0,Hr=0,cl=null,ti=null,Zh=!1,Bc=0,c_=0,Fc=1/0,zc=null,cs=null,En=0,us=null,Gr=null,Na=0,Qh=0,Jh=null,u_=null,ul=0,$h=null;function pi(){return(De&2)!==0&&ye!==0?ye&-ye:O.T!==null?sd():Do()}function f_(){if(di===0)if((ye&536870912)===0||Me){var e=me;me<<=1,(me&3932160)===0&&(me=262144),di=e}else di=536870912;return e=ui.current,e!==null&&(e.flags|=32),di}function ei(e,a,r){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(kr(e,0),fs(e,ye,di,!1)),ne(e,r),((De&2)===0||e!==qe)&&(e===qe&&((De&2)===0&&(Js|=r),on===4&&fs(e,ye,di,!1)),$i(e))}function h_(e,a,r){if((De&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||zt(e,a),f=l?DT(e,a):ed(e,a,!0),p=l;do{if(f===0){Vr&&!l&&fs(e,a,0,!1);break}else{if(r=e.current.alternate,p&&!CT(r)){f=ed(e,a,!1),p=!1;continue}if(f===2){if(p=a,e.errorRecoveryDisabledLanes&p)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var D=e;f=cl;var k=D.current.memoizedState.isDehydrated;if(k&&(kr(D,M).flags|=256),M=ed(D,M,!1),M!==2){if(Yh&&!k){D.errorRecoveryDisabledLanes|=p,Js|=p,f=4;break t}p=ti,ti=f,p!==null&&(ti===null?ti=p:ti.push.apply(ti,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){kr(e,0),fs(e,a,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:fs(l,a,di,!os);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(f=Bc+300-Rt(),10<f)){if(fs(l,a,di,!os),mt(l,0,!0)!==0)break t;Na=a,l.timeoutHandle=k_(d_.bind(null,l,r,ti,zc,Zh,a,di,Js,Hr,os,p,"Throttled",-0,0),f);break t}d_(l,r,ti,zc,Zh,a,di,Js,Hr,os,p,null,-0,0)}}break}while(!0);$i(e)}function d_(e,a,r,l,f,p,M,D,k,nt,pt,_t,rt,lt){if(e.timeoutHandle=-1,_t=a.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},s_(a,p,_t);var Wt=(p&62914560)===p?Bc-Rt():(p&4194048)===p?c_-Rt():0;if(Wt=h1(_t,Wt),Wt!==null){Na=p,e.cancelPendingCommit=Wt(S_.bind(null,e,a,p,r,l,f,M,D,k,pt,_t,null,rt,lt)),fs(e,p,M,!nt);return}}S_(e,a,p,r,l,f,M,D,k)}function CT(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],p=f.getSnapshot;f=f.value;try{if(!li(p(),f))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fs(e,a,r,l){a&=~Kh,a&=~Js,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var p=31-Ot(f),M=1<<p;l[p]=-1,f&=~M}r!==0&&we(e,r,a)}function Vc(){return(De&6)===0?(fl(0),!1):!0}function td(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,ya=ks=null,gh(e),Lr=null,qo=0,e=ve;for(;e!==null;)Xv(e.alternate,e),e=e.return;ve=null}}function kr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,YT(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Na=0,td(),qe=e,ve=r=_a(e.current,null),ye=a,Be=0,hi=null,os=!1,Vr=zt(e,a),Yh=!1,Hr=di=Kh=Js=ls=on=0,ti=cl=null,Zh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Ot(l),p=1<<f;a|=e[f],l&=~p}return Da=a,oc(),r}function p_(e,a){ce=null,O.H=el,a===Ur||a===mc?(a=D0(),Be=3):a===ah?(a=D0(),Be=4):Be=a===Uh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,hi=a,ve===null&&(on=1,wc(e,Si(a,e.current)))}function m_(){var e=ui.current;return e===null?!0:(ye&4194048)===ye?Ti===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Ti:!1}function g_(){var e=O.H;return O.H=el,e===null?el:e}function v_(){var e=O.A;return O.A=AT,e}function Hc(){on=4,os||(ye&4194048)!==ye&&ui.current!==null||(Vr=!0),(ls&134217727)===0&&(Js&134217727)===0||qe===null||fs(qe,ye,di,!1)}function ed(e,a,r){var l=De;De|=2;var f=g_(),p=v_();(qe!==e||ye!==a)&&(zc=null,kr(e,a)),a=!1;var M=on;t:do try{if(Be!==0&&ve!==null){var D=ve,k=hi;switch(Be){case 8:td(),M=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(a=!0);var nt=Be;if(Be=0,hi=null,Xr(e,D,k,nt),r&&Vr){M=0;break t}break;default:nt=Be,Be=0,hi=null,Xr(e,D,k,nt)}}wT(),M=on;break}catch(pt){p_(e,pt)}while(!0);return a&&e.shellSuspendCounter++,ya=ks=null,De=l,O.H=f,O.A=p,ve===null&&(qe=null,ye=0,oc()),M}function wT(){for(;ve!==null;)__(ve)}function DT(e,a){var r=De;De|=2;var l=g_(),f=v_();qe!==e||ye!==a?(zc=null,Fc=Rt()+500,kr(e,a)):Vr=zt(e,a);t:do try{if(Be!==0&&ve!==null){a=ve;var p=hi;e:switch(Be){case 1:Be=0,hi=null,Xr(e,a,p,1);break;case 2:case 9:if(C0(p)){Be=0,hi=null,x_(a);break}a=function(){Be!==2&&Be!==9||qe!==e||(Be=7),$i(e)},p.then(a,a);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:C0(p)?(Be=0,hi=null,x_(a)):(Be=0,hi=null,Xr(e,a,p,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var D=ve;if(M?ax(M):D.stateNode.complete){Be=0,hi=null;var k=D.sibling;if(k!==null)ve=k;else{var nt=D.return;nt!==null?(ve=nt,Gc(nt)):ve=null}break e}}Be=0,hi=null,Xr(e,a,p,5);break;case 6:Be=0,hi=null,Xr(e,a,p,6);break;case 8:td(),on=6;break t;default:throw Error(s(462))}}NT();break}catch(pt){p_(e,pt)}while(!0);return ya=ks=null,O.H=l,O.A=f,De=r,ve!==null?0:(qe=null,ye=0,oc(),on)}function NT(){for(;ve!==null&&!pe();)__(ve)}function __(e){var a=Gv(e.alternate,e,Da);e.memoizedProps=e.pendingProps,a===null?Gc(e):ve=a}function x_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Iv(r,a,a.pendingProps,a.type,void 0,ye);break;case 11:a=Iv(r,a,a.pendingProps,a.type.render,a.ref,ye);break;case 5:gh(a);default:Xv(r,a),a=ve=v0(a,Da),a=Gv(r,a,Da)}e.memoizedProps=e.pendingProps,a===null?Gc(e):ve=a}function Xr(e,a,r,l){ya=ks=null,gh(a),Lr=null,qo=0;var f=a.return;try{if(xT(e,f,a,r,ye)){on=1,wc(e,Si(r,e.current)),ve=null;return}}catch(p){if(f!==null)throw ve=f,p;on=1,wc(e,Si(r,e.current)),ve=null;return}a.flags&32768?(Me||l===1?e=!0:Vr||(ye&536870912)!==0?e=!1:(os=e=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),y_(a,e)):Gc(a)}function Gc(e){var a=e;do{if((a.flags&32768)!==0){y_(a,os);return}e=a.return;var r=MT(a.alternate,a,Da);if(r!==null){ve=r;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);on===0&&(on=5)}function y_(e,a){do{var r=bT(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);on=6,ve=null}function S_(e,a,r,l,f,p,M,D,k){e.cancelPendingCommit=null;do kc();while(En!==0);if((De&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(p=a.lanes|a.childLanes,p|=kf,sn(e,r,p,M,D,k),e===qe&&(ve=qe=null,ye=0),Gr=a,us=e,Na=r,Qh=p,Jh=f,u_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,OT(J,function(){return A_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=G.p,G.p=2,M=De,De|=4;try{ET(e,a,r)}finally{De=M,G.p=f,O.T=l}}En=1,M_(),b_(),E_()}}function M_(){if(En===1){En=0;var e=us,a=Gr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=G.p;G.p=2;var f=De;De|=4;try{n_(a,e);var p=dd,M=l0(e.containerInfo),D=p.focusedElem,k=p.selectionRange;if(M!==D&&D&&D.ownerDocument&&o0(D.ownerDocument.documentElement,D)){if(k!==null&&Ff(D)){var nt=k.start,pt=k.end;if(pt===void 0&&(pt=nt),"selectionStart"in D)D.selectionStart=nt,D.selectionEnd=Math.min(pt,D.value.length);else{var _t=D.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Wt=D.textContent.length,te=Math.min(k.start,Wt),Xe=k.end===void 0?te:Math.min(k.end,Wt);!lt.extend&&te>Xe&&(M=Xe,Xe=te,te=M);var Z=r0(D,te),j=r0(D,Xe);if(Z&&j&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var et=_t.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),te>Xe?(lt.addRange(et),lt.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),lt.addRange(et))}}}}for(_t=[],lt=D;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<_t.length;D++){var gt=_t[D];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}eu=!!hd,dd=hd=null}finally{De=f,G.p=l,O.T=r}}e.current=a,En=2}}function b_(){if(En===2){En=0;var e=us,a=Gr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=G.p;G.p=2;var f=De;De|=4;try{Qv(e,a.alternate,a)}finally{De=f,G.p=l,O.T=r}}En=3}}function E_(){if(En===4||En===3){En=0,He();var e=us,a=Gr,r=Na,l=u_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?En=5:(En=0,Gr=us=null,T_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(cs=null),wo(r),a=a.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=O.T,f=G.p,G.p=2,O.T=null;try{for(var p=e.onRecoverableError,M=0;M<l.length;M++){var D=l[M];p(D.value,{componentStack:D.stack})}}finally{O.T=a,G.p=f}}(Na&3)!==0&&kc(),$i(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===$h?ul++:(ul=0,$h=e):ul=0,fl(0)}}function T_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,jo(a)))}function kc(){return M_(),b_(),E_(),A_()}function A_(){if(En!==5)return!1;var e=us,a=Qh;Qh=0;var r=wo(Na),l=O.T,f=G.p;try{G.p=32>r?32:r,O.T=null,r=Jh,Jh=null;var p=us,M=Na;if(En=0,Gr=us=null,Na=0,(De&6)!==0)throw Error(s(331));var D=De;if(De|=4,o_(p.current),a_(p,p.current,M,r),De=D,fl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,p)}catch{}return!0}finally{G.p=f,O.T=l,T_(e,a)}}function R_(e,a,r){a=Si(r,a),a=Nh(e.stateNode,a,2),e=is(e,a,2),e!==null&&(ne(e,2),$i(e))}function Fe(e,a,r){if(e.tag===3)R_(e,e,r);else for(;a!==null;){if(a.tag===3){R_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cs===null||!cs.has(l))){e=Si(r,e),r=Cv(2),l=is(a,r,2),l!==null&&(wv(r,l,a,e),ne(l,2),$i(l));break}}a=a.return}}function nd(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new RT;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(r)||(Yh=!0,f.add(r),e=UT.bind(null,e,a,r),a.then(e,e))}function UT(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(ye&r)===r&&(on===4||on===3&&(ye&62914560)===ye&&300>Rt()-Bc?(De&2)===0&&kr(e,0):Kh|=r,Hr===ye&&(Hr=0)),$i(e)}function C_(e,a){a===0&&(a=Mt()),e=Vs(e,a),e!==null&&(ne(e,a),$i(e))}function LT(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),C_(e,r)}function PT(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),C_(e,r)}function OT(e,a){return q(e,a)}var Xc=null,jr=null,id=!1,jc=!1,ad=!1,hs=0;function $i(e){e!==jr&&e.next===null&&(jr===null?Xc=jr=e:jr=jr.next=e),jc=!0,id||(id=!0,BT())}function fl(e,a){if(!ad&&jc){ad=!0;do for(var r=!1,l=Xc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,D=l.pingedLanes;p=(1<<31-Ot(42|e)+1)-1,p&=f&~(M&~D),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,U_(l,p))}else p=ye,p=mt(l,l===qe?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||zt(l,p)||(r=!0,U_(l,p));l=l.next}while(r);ad=!1}}function IT(){w_()}function w_(){jc=id=!1;var e=0;hs!==0&&qT()&&(e=hs);for(var a=Rt(),r=null,l=Xc;l!==null;){var f=l.next,p=D_(l,a);p===0?(l.next=null,r===null?Xc=f:r.next=f,f===null&&(jr=r)):(r=l,(e!==0||(p&3)!==0)&&(jc=!0)),l=f}En!==0&&En!==5||fl(e),hs!==0&&(hs=0)}function D_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var M=31-Ot(p),D=1<<M,k=f[M];k===-1?((D&r)===0||(D&l)!==0)&&(f[M]=Ut(D,a)):k<=a&&(e.expiredLanes|=D),p&=~D}if(a=qe,r=ye,r=mt(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&an(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||zt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&an(l),wo(r)){case 2:case 8:r=T;break;case 32:r=J;break;case 268435456:r=bt;break;default:r=J}return l=N_.bind(null,e),r=q(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&an(l),e.callbackPriority=2,e.callbackNode=null,2}function N_(e,a){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var l=ye;return l=mt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(h_(e,l,a),D_(e,Rt()),e.callbackNode!=null&&e.callbackNode===r?N_.bind(null,e):null)}function U_(e,a){if(kc())return null;h_(e,a,!0)}function BT(){KT(function(){(De&6)!==0?q(U,IT):w_()})}function sd(){if(hs===0){var e=Dr;e===0&&(e=se,se<<=1,(se&261888)===0&&(se=256)),hs=e}return hs}function L_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Is(""+e)}function P_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function FT(e,a,r,l,f){if(a==="submit"&&r&&r.stateNode===f){var p=L_((f[Nn]||null).action),M=l.submitter;M&&(a=(a=M[Nn]||null)?L_(a.formAction):M.getAttribute("formAction"),a!==null&&(p=a,M=null));var D=new ic("action","action",null,l,f);e.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hs!==0){var k=M?P_(f,M):new FormData(f);Th(r,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(D.preventDefault(),k=M?P_(f,M):new FormData(f),Th(r,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var rd=0;rd<Gf.length;rd++){var od=Gf[rd],zT=od.toLowerCase(),VT=od[0].toUpperCase()+od.slice(1);Bi(zT,"on"+VT)}Bi(f0,"onAnimationEnd"),Bi(h0,"onAnimationIteration"),Bi(d0,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(nT,"onTransitionRun"),Bi(iT,"onTransitionStart"),Bi(aT,"onTransitionCancel"),Bi(p0,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function O_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var p=void 0;if(a)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,nt=D.currentTarget;if(D=D.listener,k!==p&&f.isPropagationStopped())break t;p=D,f.currentTarget=nt;try{p(f)}catch(pt){rc(pt)}f.currentTarget=null,p=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,nt=D.currentTarget,D=D.listener,k!==p&&f.isPropagationStopped())break t;p=D,f.currentTarget=nt;try{p(f)}catch(pt){rc(pt)}f.currentTarget=null,p=k}}}}function _e(e,a){var r=a[Xa];r===void 0&&(r=a[Xa]=new Set);var l=e+"__bubble";r.has(l)||(I_(a,e,2,!1),r.add(l))}function ld(e,a,r){var l=0;a&&(l|=4),I_(r,e,l,a)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[Wc]){e[Wc]=!0,$l.forEach(function(r){r!=="selectionchange"&&(HT.has(r)||ld(r,!1,e),ld(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Wc]||(a[Wc]=!0,ld("selectionchange",!1,a))}}function I_(e,a,r,l){switch(fx(a)){case 2:var f=m1;break;case 8:f=g1;break;default:f=Ed}r=f.bind(null,a,r,e),f=void 0,!wf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,r,{capture:!0,passive:f}):e.addEventListener(a,r,!0):f!==void 0?e.addEventListener(a,r,{passive:f}):e.addEventListener(a,r,!1)}function ud(e,a,r,l,f){var p=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;D!==null;){if(M=Wa(D),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){l=p=M;continue t}D=D.parentNode}}l=l.return}Hg(function(){var nt=p,pt=Rf(r),_t=[];t:{var rt=m0.get(e);if(rt!==void 0){var lt=ic,Wt=e;switch(e){case"keypress":if(ec(r)===0)break t;case"keydown":case"keyup":lt=PE;break;case"focusin":Wt="focus",lt=Lf;break;case"focusout":Wt="blur",lt=Lf;break;case"beforeblur":case"afterblur":lt=Lf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=BE;break;case f0:case h0:case d0:lt=TE;break;case p0:lt=zE;break;case"scroll":case"scrollend":lt=yE;break;case"wheel":lt=HE;break;case"copy":case"cut":case"paste":lt=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Wg;break;case"toggle":case"beforetoggle":lt=kE}var te=(a&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),Z=te?rt!==null?rt+"Capture":null:rt;te=[];for(var j=nt,et;j!==null;){var gt=j;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Z===null||(gt=Po(j,Z),gt!=null&&te.push(dl(j,gt,et))),Xe)break;j=j.return}0<te.length&&(rt=new lt(rt,Wt,null,r,pt),_t.push({event:rt,listeners:te}))}}if((a&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&r!==Af&&(Wt=r.relatedTarget||r.fromElement)&&(Wa(Wt)||Wt[ma]))break t;if((lt||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Wt=r.relatedTarget||r.toElement,lt=nt,Wt=Wt?Wa(Wt):null,Wt!==null&&(Xe=c(Wt),te=Wt.tag,Wt!==Xe||te!==5&&te!==27&&te!==6)&&(Wt=null)):(lt=null,Wt=nt),lt!==Wt)){if(te=Xg,gt="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(te=Wg,gt="onPointerLeave",Z="onPointerEnter",j="pointer"),Xe=lt==null?rt:Os(lt),et=Wt==null?rt:Os(Wt),rt=new te(gt,j+"leave",lt,r,pt),rt.target=Xe,rt.relatedTarget=et,gt=null,Wa(pt)===nt&&(te=new te(Z,j+"enter",Wt,r,pt),te.target=et,te.relatedTarget=Xe,gt=te),Xe=gt,lt&&Wt)e:{for(te=GT,Z=lt,j=Wt,et=0,gt=Z;gt;gt=te(gt))et++;gt=0;for(var Jt=j;Jt;Jt=te(Jt))gt++;for(;0<et-gt;)Z=te(Z),et--;for(;0<gt-et;)j=te(j),gt--;for(;et--;){if(Z===j||j!==null&&Z===j.alternate){te=Z;break e}Z=te(Z),j=te(j)}te=null}else te=null;lt!==null&&B_(_t,rt,lt,te,!1),Wt!==null&&Xe!==null&&B_(_t,Xe,Wt,te,!0)}}t:{if(rt=nt?Os(nt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Re=t0;else if(Jg(rt))if(e0)Re=$E;else{Re=QE;var Kt=ZE}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ue(nt.elementType)&&(Re=t0):Re=JE;if(Re&&(Re=Re(e,nt))){$g(_t,Re,r,pt);break t}Kt&&Kt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&ge(rt,"number",rt.value)}switch(Kt=nt?Os(nt):window,e){case"focusin":(Jg(Kt)||Kt.contentEditable==="true")&&(Mr=Kt,zf=nt,Go=null);break;case"focusout":Go=zf=Mr=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,c0(_t,r,pt);break;case"selectionchange":if(eT)break;case"keydown":case"keyup":c0(_t,r,pt)}var fe;if(Of)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Sr?Zg(e,r)&&(Se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Se="onCompositionStart");Se&&(qg&&r.locale!=="ko"&&(Sr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Sr&&(fe=Gg()):(Za=pt,Df="value"in Za?Za.value:Za.textContent,Sr=!0)),Kt=qc(nt,Se),0<Kt.length&&(Se=new jg(Se,e,null,r,pt),_t.push({event:Se,listeners:Kt}),fe?Se.data=fe:(fe=Qg(r),fe!==null&&(Se.data=fe)))),(fe=jE?WE(e,r):qE(e,r))&&(Se=qc(nt,"onBeforeInput"),0<Se.length&&(Kt=new jg("onBeforeInput","beforeinput",null,r,pt),_t.push({event:Kt,listeners:Se}),Kt.data=fe)),FT(_t,e,nt,r,pt)}O_(_t,a)})}function dl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function qc(e,a){for(var r=a+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Po(e,r),f!=null&&l.unshift(dl(e,f,p)),f=Po(e,a),f!=null&&l.push(dl(e,f,p))),e.tag===3)return l;e=e.return}return[]}function GT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B_(e,a,r,l,f){for(var p=a._reactName,M=[];r!==null&&r!==l;){var D=r,k=D.alternate,nt=D.stateNode;if(D=D.tag,k!==null&&k===l)break;D!==5&&D!==26&&D!==27||nt===null||(k=nt,f?(nt=Po(r,p),nt!=null&&M.unshift(dl(r,nt,k))):f||(nt=Po(r,p),nt!=null&&M.push(dl(r,nt,k)))),r=r.return}M.length!==0&&e.push({event:a,listeners:M})}var kT=/\r\n?/g,XT=/\u0000|\uFFFD/g;function F_(e){return(typeof e=="string"?e:""+e).replace(kT,`
`).replace(XT,"")}function z_(e,a){return a=F_(a),F_(e)===a}function ke(e,a,r,l,f,p){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||oi(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&oi(e,""+l);break;case"className":jt(e,"class",l);break;case"tabIndex":jt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,r,l);break;case"style":Ii(e,l,p);break;case"data":if(a!=="object"){jt(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Is(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(a!=="input"&&ke(e,a,"name",f.name,f,null),ke(e,a,"formEncType",f.formEncType,f,null),ke(e,a,"formMethod",f.formMethod,f,null),ke(e,a,"formTarget",f.formTarget,f,null)):(ke(e,a,"encType",f.encType,f,null),ke(e,a,"method",f.method,f,null),ke(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Is(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ga);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Is(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),It(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":It(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ki.get(r)||r,It(e,r,l))}}function fd(e,a,r,l,f,p){switch(r){case"style":Ii(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?oi(e,l):(typeof l=="number"||typeof l=="bigint")&&oi(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),a=r.slice(2,f?r.length-7:void 0),p=e[Nn]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(a,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):It(e,r,l)}}}function On(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,f=!1,p;for(p in r)if(r.hasOwnProperty(p)){var M=r[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,p,M,r,null)}}f&&ke(e,a,"srcSet",r.srcSet,r,null),l&&ke(e,a,"src",r.src,r,null);return;case"input":_e("invalid",e);var D=p=M=f=null,k=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":M=pt;break;case"checked":k=pt;break;case"defaultChecked":nt=pt;break;case"value":p=pt;break;case"defaultValue":D=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,a));break;default:ke(e,a,l,pt,r,null)}}Vn(e,p,D,k,nt,M,f,!1);return;case"select":_e("invalid",e),l=M=p=null;for(f in r)if(r.hasOwnProperty(f)&&(D=r[f],D!=null))switch(f){case"value":p=D;break;case"defaultValue":M=D;break;case"multiple":l=D;default:ke(e,a,f,D,r,null)}a=p,r=M,e.multiple=!!l,a!=null?bn(e,!!l,a,!1):r!=null&&bn(e,!!l,r,!0);return;case"textarea":_e("invalid",e),p=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(D=r[M],D!=null))switch(M){case"value":l=D;break;case"defaultValue":f=D;break;case"children":p=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:ke(e,a,M,D,r,null)}Oi(e,l,f,p);return;case"option":for(k in r)if(r.hasOwnProperty(k)&&(l=r[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,a,k,l,r,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)_e(hl[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,nt,l,r,null)}return;default:if(Ue(a)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&fd(e,a,pt,l,r,void 0));return}}for(D in r)r.hasOwnProperty(D)&&(l=r[D],l!=null&&ke(e,a,D,l,r,null))}function jT(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,D=null,k=null,nt=null,pt=null;for(lt in r){var _t=r[lt];if(r.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":k=_t;default:l.hasOwnProperty(lt)||ke(e,a,lt,null,l,_t)}}for(var rt in l){var lt=l[rt];if(_t=r[rt],l.hasOwnProperty(rt)&&(lt!=null||_t!=null))switch(rt){case"type":p=lt;break;case"name":f=lt;break;case"checked":nt=lt;break;case"defaultChecked":pt=lt;break;case"value":M=lt;break;case"defaultValue":D=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,a));break;default:lt!==_t&&ke(e,a,rt,lt,l,_t)}}Gt(e,M,D,k,nt,pt,p,f);return;case"select":lt=M=D=rt=null;for(p in r)if(k=r[p],r.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":lt=k;default:l.hasOwnProperty(p)||ke(e,a,p,null,l,k)}for(f in l)if(p=l[f],k=r[f],l.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":rt=p;break;case"defaultValue":D=p;break;case"multiple":M=p;default:p!==k&&ke(e,a,f,p,l,k)}a=D,r=M,l=lt,rt!=null?bn(e,!!r,rt,!1):!!l!=!!r&&(a!=null?bn(e,!!r,a,!0):bn(e,!!r,r?[]:"",!1));return;case"textarea":lt=rt=null;for(D in r)if(f=r[D],r.hasOwnProperty(D)&&f!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:ke(e,a,D,null,l,f)}for(M in l)if(f=l[M],p=r[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":rt=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&ke(e,a,M,f,l,p)}ri(e,rt,lt);return;case"option":for(var Wt in r)if(rt=r[Wt],r.hasOwnProperty(Wt)&&rt!=null&&!l.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:ke(e,a,Wt,null,l,rt)}for(k in l)if(rt=l[k],lt=r[k],l.hasOwnProperty(k)&&rt!==lt&&(rt!=null||lt!=null))switch(k){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:ke(e,a,k,rt,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!l.hasOwnProperty(te)&&ke(e,a,te,null,l,rt);for(nt in l)if(rt=l[nt],lt=r[nt],l.hasOwnProperty(nt)&&rt!==lt&&(rt!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,a));break;default:ke(e,a,nt,rt,l,lt)}return;default:if(Ue(a)){for(var Xe in r)rt=r[Xe],r.hasOwnProperty(Xe)&&rt!==void 0&&!l.hasOwnProperty(Xe)&&fd(e,a,Xe,void 0,l,rt);for(pt in l)rt=l[pt],lt=r[pt],!l.hasOwnProperty(pt)||rt===lt||rt===void 0&&lt===void 0||fd(e,a,pt,rt,l,lt);return}}for(var Z in r)rt=r[Z],r.hasOwnProperty(Z)&&rt!=null&&!l.hasOwnProperty(Z)&&ke(e,a,Z,null,l,rt);for(_t in l)rt=l[_t],lt=r[_t],!l.hasOwnProperty(_t)||rt===lt||rt==null&&lt==null||ke(e,a,_t,rt,l,lt)}function V_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],p=f.transferSize,M=f.initiatorType,D=f.duration;if(p&&D&&V_(M)){for(M=0,D=f.responseEnd,l+=1;l<r.length;l++){var k=r[l],nt=k.startTime;if(nt>D)break;var pt=k.transferSize,_t=k.initiatorType;pt&&V_(_t)&&(k=k.responseEnd,M+=pt*(k<D?1:(D-nt)/(k-nt)))}if(--l,a+=8*(p+M)/(f.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hd=null,dd=null;function Yc(e){return e.nodeType===9?e:e.ownerDocument}function H_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function pd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var md=null;function qT(){var e=window.event;return e&&e.type==="popstate"?e===md?!1:(md=e,!0):(md=null,!1)}var k_=typeof setTimeout=="function"?setTimeout:void 0,YT=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,KT=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(e){return X_.resolve(null).then(e).catch(ZT)}:k_;function ZT(e){setTimeout(function(){throw e})}function ds(e){return e==="head"}function j_(e,a){var r=a,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),Kr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")pl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,pl(r);for(var p=r.firstChild;p;){var M=p.nextSibling,D=p.nodeName;p[ja]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=M}}else r==="body"&&pl(e.ownerDocument.body);r=f}while(r);Kr(a)}function W_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function gd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":gd(r),Lo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function QT(e,a,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ja])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function JT(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ai(e.nextSibling),e===null))return null;return e}function q_(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$?"||e.data==="$~"}function _d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $T(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ai(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var xd=null;function Y_(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return Ai(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function K_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function Z_(e,a,r){switch(a=Yc(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Lo(e)}var Ri=new Map,Q_=new Set;function Kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ua=G.d;G.d={f:t1,r:e1,D:n1,C:i1,L:a1,m:s1,X:o1,S:r1,M:l1};function t1(){var e=Ua.f(),a=Vc();return e||a}function e1(e){var a=qa(e);a!==null&&a.tag===5&&a.type==="form"?pv(a):Ua.r(e)}var Wr=typeof document>"u"?null:document;function J_(e,a,r){var l=Wr;if(l&&typeof a=="string"&&a){var f=Oe(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Q_.has(f)||(Q_.add(f),e={rel:e,crossOrigin:r,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),On(a,"link",e),pn(a),l.head.appendChild(a)))}}function n1(e){Ua.D(e),J_("dns-prefetch",e,null)}function i1(e,a){Ua.C(e,a),J_("preconnect",e,a)}function a1(e,a,r){Ua.L(e,a,r);var l=Wr;if(l&&e&&a){var f='link[rel="preload"][as="'+Oe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Oe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Oe(r.imageSizes)+'"]')):f+='[href="'+Oe(e)+'"]';var p=f;switch(a){case"style":p=qr(e);break;case"script":p=Yr(e)}Ri.has(p)||(e=_({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Ri.set(p,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(ml(p))||a==="script"&&l.querySelector(gl(p))||(a=l.createElement("link"),On(a,"link",e),pn(a),l.head.appendChild(a)))}}function s1(e,a){Ua.m(e,a);var r=Wr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+Oe(l)+'"][href="'+Oe(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Yr(e)}if(!Ri.has(p)&&(e=_({rel:"modulepreload",href:e},a),Ri.set(p,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(gl(p)))return}l=r.createElement("link"),On(l,"link",e),pn(l),r.head.appendChild(l)}}}function r1(e,a,r){Ua.S(e,a,r);var l=Wr;if(l&&e){var f=Ya(l).hoistableStyles,p=qr(e);a=a||"default";var M=f.get(p);if(!M){var D={loading:0,preload:null};if(M=l.querySelector(ml(p)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Ri.get(p))&&yd(e,r);var k=M=l.createElement("link");pn(k),On(k,"link",e),k._p=new Promise(function(nt,pt){k.onload=nt,k.onerror=pt}),k.addEventListener("load",function(){D.loading|=1}),k.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Zc(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:D},f.set(p,M)}}}function o1(e,a){Ua.X(e,a);var r=Wr;if(r&&e){var l=Ya(r).hoistableScripts,f=Yr(e),p=l.get(f);p||(p=r.querySelector(gl(f)),p||(e=_({src:e,async:!0},a),(a=Ri.get(f))&&Sd(e,a),p=r.createElement("script"),pn(p),On(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function l1(e,a){Ua.M(e,a);var r=Wr;if(r&&e){var l=Ya(r).hoistableScripts,f=Yr(e),p=l.get(f);p||(p=r.querySelector(gl(f)),p||(e=_({src:e,async:!0,type:"module"},a),(a=Ri.get(f))&&Sd(e,a),p=r.createElement("script"),pn(p),On(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function $_(e,a,r,l){var f=(f=ot.current)?Kc(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=qr(r.href),r=Ya(f).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=qr(r.href);var p=Ya(f).hoistableStyles,M=p.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,M),(p=f.querySelector(ml(e)))&&!p._p&&(M.instance=p,M.state.loading=5),Ri.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ri.set(e,r),p||c1(f,e,r,M.state))),a&&l===null)throw Error(s(528,""));return M}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Yr(r),r=Ya(f).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+Oe(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function tx(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function c1(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),On(a,"link",r),pn(a),e.head.appendChild(a))}function Yr(e){return'[src="'+Oe(e)+'"]'}function gl(e){return"script[async]"+e}function ex(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Oe(r.href)+'"]');if(l)return a.instance=l,pn(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),pn(l),On(l,"style",f),Zc(l,r.precedence,e),a.instance=l;case"stylesheet":f=qr(r.href);var p=e.querySelector(ml(f));if(p)return a.state.loading|=4,a.instance=p,pn(p),p;l=tx(r),(f=Ri.get(f))&&yd(l,f),p=(e.ownerDocument||e).createElement("link"),pn(p);var M=p;return M._p=new Promise(function(D,k){M.onload=D,M.onerror=k}),On(p,"link",l),a.state.loading|=4,Zc(p,r.precedence,e),a.instance=p;case"script":return p=Yr(r.src),(f=e.querySelector(gl(p)))?(a.instance=f,pn(f),f):(l=r,(f=Ri.get(p))&&(l=_({},r),Sd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),pn(f),On(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Zc(l,r.precedence,e));return a.instance}function Zc(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var D=l[M];if(D.dataset.precedence===a)p=D;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function yd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Sd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Qc=null;function nx(e,a,r){if(Qc===null){var l=new Map,f=Qc=new Map;f.set(r,l)}else f=Qc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var p=r[f];if(!(p[ja]||p[un]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(a)||"";M=e+M;var D=l.get(M);D?D.push(p):l.set(M,[p])}}return l}function ix(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function u1(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ax(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function f1(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=qr(l.href),p=a.querySelector(ml(f));if(p){a=p._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Jc.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=p,pn(p);return}p=a.ownerDocument||a,l=tx(l),(f=Ri.get(f))&&yd(l,f),p=p.createElement("link"),pn(p);var M=p;M._p=new Promise(function(D,k){M.onload=D,M.onerror=k}),On(p,"link",l),r.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Jc.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var Md=0;function h1(e,a){return e.stylesheets&&e.count===0&&tu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+a);0<e.imgBytes&&Md===0&&(Md=62500*WT());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>Md?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $c=null;function tu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$c=new Map,a.forEach(d1,e),$c=null,Jc.call(e))}function d1(e,a){if(!(a.state.loading&4)){var r=$c.get(e);if(r)var l=r.get(null);else{r=new Map,$c.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),p=r.get(M)||l,p===l&&r.set(null,f),r.set(M,f),this.count++,l=Jc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var vl={$$typeof:C,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function p1(e,a,r,l,f,p,M,D,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function sx(e,a,r,l,f,p,M,D,k,nt,pt,_t){return e=new p1(e,a,r,M,k,nt,pt,_t,D),a=1,p===!0&&(a|=24),p=ci(3,null,null,a),e.current=p,p.stateNode=e,a=eh(),a.refCount++,e.pooledCache=a,a.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:a},sh(p),e}function rx(e){return e?(e=Tr,e):Tr}function ox(e,a,r,l,f,p){f=rx(f),l.context===null?l.context=f:l.pendingContext=f,l=ns(a),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=is(e,l,a),r!==null&&(ei(r,e,a),Ko(r,e,a))}function lx(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function bd(e,a){lx(e,a),(e=e.alternate)&&lx(e,a)}function cx(e){if(e.tag===13||e.tag===31){var a=Vs(e,67108864);a!==null&&ei(a,e,67108864),bd(e,67108864)}}function ux(e){if(e.tag===13||e.tag===31){var a=pi();a=Ps(a);var r=Vs(e,a);r!==null&&ei(r,e,a),bd(e,a)}}var eu=!0;function m1(e,a,r,l){var f=O.T;O.T=null;var p=G.p;try{G.p=2,Ed(e,a,r,l)}finally{G.p=p,O.T=f}}function g1(e,a,r,l){var f=O.T;O.T=null;var p=G.p;try{G.p=8,Ed(e,a,r,l)}finally{G.p=p,O.T=f}}function Ed(e,a,r,l){if(eu){var f=Td(l);if(f===null)ud(e,a,l,nu,r),hx(e,l);else if(_1(f,e,a,r,l))l.stopPropagation();else if(hx(e,l),a&4&&-1<v1.indexOf(e)){for(;f!==null;){var p=qa(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Tt(p.pendingLanes);if(M!==0){var D=p;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var k=1<<31-Ot(M);D.entanglements[1]|=k,M&=~k}$i(p),(De&6)===0&&(Fc=Rt()+500,fl(0))}}break;case 31:case 13:D=Vs(p,2),D!==null&&ei(D,p,2),Vc(),bd(p,2)}if(p=Td(l),p===null&&ud(e,a,l,nu,r),p===f)break;f=p}f!==null&&l.stopPropagation()}else ud(e,a,l,null,r)}}function Td(e){return e=Rf(e),Ad(e)}var nu=null;function Ad(e){if(nu=null,e=Wa(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=h(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return nu=e,null}function fx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($e()){case U:return 2;case T:return 8;case J:case vt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var Rd=!1,ps=null,ms=null,gs=null,_l=new Map,xl=new Map,vs=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hx(e,a){switch(e){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":_l.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(a.pointerId)}}function yl(e,a,r,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},a!==null&&(a=qa(a),a!==null&&cx(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function _1(e,a,r,l,f){switch(a){case"focusin":return ps=yl(ps,e,a,r,l,f),!0;case"dragenter":return ms=yl(ms,e,a,r,l,f),!0;case"mouseover":return gs=yl(gs,e,a,r,l,f),!0;case"pointerover":var p=f.pointerId;return _l.set(p,yl(_l.get(p)||null,e,a,r,l,f)),!0;case"gotpointercapture":return p=f.pointerId,xl.set(p,yl(xl.get(p)||null,e,a,r,l,f)),!0}return!1}function dx(e){var a=Wa(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,No(e.priority,function(){ux(r)});return}}else if(a===31){if(a=h(r),a!==null){e.blockedOn=a,No(e.priority,function(){ux(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Td(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Af=l,r.target.dispatchEvent(l),Af=null}else return a=qa(r),a!==null&&cx(a),e.blockedOn=r,!1;a.shift()}return!0}function px(e,a,r){iu(e)&&r.delete(a)}function x1(){Rd=!1,ps!==null&&iu(ps)&&(ps=null),ms!==null&&iu(ms)&&(ms=null),gs!==null&&iu(gs)&&(gs=null),_l.forEach(px),xl.forEach(px)}function au(e,a){e.blockedOn===a&&(e.blockedOn=null,Rd||(Rd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,x1)))}var su=null;function mx(e){su!==e&&(su=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){su===e&&(su=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(Ad(l||r)===null)continue;break}var p=qa(r);p!==null&&(e.splice(a,3),a-=3,Th(p,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Kr(e){function a(k){return au(k,e)}ps!==null&&au(ps,e),ms!==null&&au(ms,e),gs!==null&&au(gs,e),_l.forEach(a),xl.forEach(a);for(var r=0;r<vs.length;r++){var l=vs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<vs.length&&(r=vs[0],r.blockedOn===null);)dx(r),r.blockedOn===null&&vs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],p=r[l+1],M=f[Nn]||null;if(typeof p=="function")M||mx(r);else if(M){var D=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Nn]||null)D=M.formAction;else if(Ad(f)!==null)continue}else D=M.action;typeof D=="function"?r[l+1]=D:(r.splice(l,3),l-=3),mx(r)}}}function gx(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function a(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),f!==null&&(f(),f=null)}}}function Cd(e){this._internalRoot=e}ru.prototype.render=Cd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=pi();ox(r,l,e,a,null,null)},ru.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ox(e.current,2,null,e,null,null),Vc(),a[ma]=null}};function ru(e){this._internalRoot=e}ru.prototype.unstable_scheduleHydration=function(e){if(e){var a=Do();e={blockedOn:null,target:e,priority:a};for(var r=0;r<vs.length&&a!==0&&a<vs[r].priority;r++);vs.splice(r,0,e),r===0&&dx(e)}};var vx=t.version;if(vx!=="19.2.5")throw Error(s(527,vx,"19.2.5"));G.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var y1={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{ut=ou.inject(y1),dt=ou}catch{}}return Ml.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",f=Ev,p=Tv,M=Av;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),a=sx(e,1,!1,null,null,r,l,null,f,p,M,gx),e[ma]=a.current,cd(e),new Cd(a)},Ml.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,f="",p=Ev,M=Tv,D=Av,k=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(D=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),a=sx(e,1,!0,a,r??null,l,f,k,p,M,D,gx),a.context=rx(null),r=a.current,l=pi(),l=Ps(l),f=ns(l),f.callback=null,is(r,f,l),r=l,a.current.lanes=r,ne(a,r),$i(a),e[ma]=a.current,cd(e),new ru(a)},Ml.version="19.2.5",Ml}var Rx;function N1(){if(Rx)return Nd.exports;Rx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Nd.exports=D1(),Nd.exports}var U1=N1();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="184",L1=0,Cx=1,P1=2,Fu=1,O1=2,Nl=3,Ds=0,ii=1,Fa=2,Va=0,go=1,wx=2,Dx=3,Nx=4,I1=5,rr=100,B1=101,F1=102,z1=103,V1=104,H1=200,G1=201,k1=202,X1=203,Dp=204,Np=205,j1=206,W1=207,q1=208,Y1=209,K1=210,Z1=211,Q1=212,J1=213,$1=214,Up=0,Lp=1,Pp=2,_o=3,Op=4,Ip=5,Bp=6,Fp=7,YS=0,tA=1,eA=2,oa=0,KS=1,ZS=2,QS=3,JS=4,$S=5,tM=6,eM=7,nM=300,pr=301,xo=302,Od=303,Id=304,gf=306,zp=1e3,za=1001,Vp=1002,Bn=1003,nA=1004,lu=1005,Xn=1006,Bd=1007,lr=1008,Ni=1009,iM=1010,aM=1011,Fl=1012,Ym=1013,fa=1014,sa=1015,Ga=1016,Km=1017,Zm=1018,zl=1020,sM=35902,rM=35899,oM=1021,lM=1022,Wi=1023,ka=1026,cr=1027,cM=1028,Qm=1029,mr=1030,Jm=1031,$m=1033,zu=33776,Vu=33777,Hu=33778,Gu=33779,Hp=35840,Gp=35841,kp=35842,Xp=35843,jp=36196,Wp=37492,qp=37496,Yp=37488,Kp=37489,Ju=37490,Zp=37491,Qp=37808,Jp=37809,$p=37810,tm=37811,em=37812,nm=37813,im=37814,am=37815,sm=37816,rm=37817,om=37818,lm=37819,cm=37820,um=37821,fm=36492,hm=36494,dm=36495,pm=36283,mm=36284,$u=36285,gm=36286,iA=3200,Ux=0,aA=1,Rs="",wi="srgb",tf="srgb-linear",ef="linear",ze="srgb",Zr=7680,Lx=519,sA=512,rA=513,oA=514,tg=515,lA=516,cA=517,eg=518,uA=519,Px=35044,Ox="300 es",ra=2e3,nf=2001;function fA(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function af(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hA(){const i=af("canvas");return i.style.display="block",i}const Ix={};function Bx(...i){const t="THREE."+i.shift();console.log(t,...i)}function uM(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=i[1];n&&n.isStackTrace?i[0]+=" "+n.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=uM(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...i)}}function Te(...i){i=uM(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...i)}}function vm(...i){const t=i.join(" ");t in Ix||(Ix[t]=!0,ie(...i))}function dA(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const pA={[Up]:Lp,[Pp]:Bp,[Op]:Fp,[_o]:Ip,[Lp]:Up,[Bp]:Pp,[Fp]:Op,[Ip]:_o};class vr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=Math.PI/180,_m=180/Math.PI;function Xl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ee(i,t,n){return Math.max(t,Math.min(n,i))}function mA(i,t){return(i%t+t)%t}function zd(i,t,n){return(1-n)*i+n*t}function bl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Og=class Og{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Og.prototype.isVector2=!0;let Ne=Og;class Eo{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,h){let m=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3],v=c[u+0],x=c[u+1],b=c[u+2],R=c[u+3];if(_!==R||m!==v||d!==x||g!==b){let S=m*v+d*x+g*b+_*R;S<0&&(v=-v,x=-x,b=-b,R=-R,S=-S);let y=1-h;if(S<.9995){const A=Math.acos(S),C=Math.sin(A);y=Math.sin(y*A)/C,h=Math.sin(h*A)/C,m=m*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+R*h}else{m=m*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+R*h;const A=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=A,d*=A,g*=A,_*=A}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,o,c,u){const h=s[o],m=s[o+1],d=s[o+2],g=s[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return t[n]=h*b+g*_+m*x-d*v,t[n+1]=m*b+g*v+d*_-h*x,t[n+2]=d*b+g*x+h*v-m*_,t[n+3]=g*b-h*_-m*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,d=h(s/2),g=h(o/2),_=h(c/2),v=m(s/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],v=s+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(s>h&&s>_){const x=2*Math.sqrt(1+s-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-s-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-s-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=s*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-s*d,this._z=c*g+u*d+s*m-o*h,this._w=u*g-s*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){let s=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(s=-s,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ig=class Ig{constructor(t=0,n=0,s=0){this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,d=2*(u*o-h*s),g=2*(h*n-c*o),_=2*(c*s-u*n);return this.x=n+m*d+u*_-h*g,this.y=s+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-s*m,this.z=s*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Vd.copy(this).projectOnVector(t),this.sub(Vd)}reflect(t){return this.sub(Vd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ig.prototype.isVector3=!0;let tt=Ig;const Vd=new tt,Fx=new Eo,Bg=class Bg{constructor(t,n,s,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d)}set(t,n,s,o,c,u,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[3],m=s[6],d=s[1],g=s[4],_=s[7],v=s[2],x=s[5],b=s[8],R=o[0],S=o[3],y=o[6],A=o[1],C=o[4],N=o[7],F=o[2],L=o[5],I=o[8];return c[0]=u*R+h*A+m*F,c[3]=u*S+h*C+m*L,c[6]=u*y+h*N+m*I,c[1]=d*R+g*A+_*F,c[4]=d*S+g*C+_*L,c[7]=d*y+g*N+_*I,c[2]=v*R+x*A+b*F,c[5]=v*S+x*C+b*L,c[8]=v*y+x*N+b*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-s*c*g+s*h*m+o*c*d-o*u*m}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,b=n*_+s*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(o*d-g*s)*R,t[2]=(h*s-o*u)*R,t[3]=v*R,t[4]=(g*n-o*m)*R,t[5]=(o*c-h*n)*R,t[6]=x*R,t[7]=(s*m-d*n)*R,t[8]=(u*n-s*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*u+d*h)+u+t,-o*d,o*m,-o*(-d*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Hd.makeScale(t,n)),this}rotate(t){return this.premultiply(Hd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Hd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bg.prototype.isMatrix3=!0;let oe=Bg;const Hd=new oe,zx=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vx=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gA(){const i={enabled:!0,workingColorSpace:tf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rs?ef:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return vm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return vm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[tf]:{primaries:t,whitePoint:s,transfer:ef,toXYZ:zx,fromXYZ:Vx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:zx,fromXYZ:Vx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),i}const be=gA();function Ha(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qr;class vA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Qr===void 0&&(Qr=af("canvas")),Qr.width=t.width,Qr.height=t.height;const o=Qr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Qr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=af("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ha(n[s]/255)*255):n[s]=Ha(n[s]);return{data:n,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _A=0;class ng{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Gd(o[u].image)):c.push(Gd(o[u]))}else c=Gd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Gd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let xA=0;const kd=new tt;class Kn extends vr{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,s=za,o=za,c=Xn,u=lr,h=Wi,m=Ni,d=Kn.DEFAULT_ANISOTROPY,g=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Xl(),this.name="",this.source=new ng(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ie(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nM)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zp:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case Vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zp:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case Vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=nM;Kn.DEFAULT_ANISOTROPY=1;const Fg=class Fg{constructor(t=0,n=0,s=0,o=1){this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],R=m[2],S=m[6],y=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(d+1)/2,N=(x+1)/2,F=(y+1)/2,L=(g+v)/4,I=(_+R)/4,E=(b+S)/4;return C>N&&C>F?C<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(C),o=L/s,c=I/s):N>F?N<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),s=L/o,c=E/o):F<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),s=I/c,o=E/c),this.set(s,o,c,n),this}let A=Math.sqrt((S-b)*(S-b)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(A)<.001&&(A=1),this.x=(S-b)/A,this.y=(_-R)/A,this.z=(v-g)/A,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fg.prototype.isVector4=!0;let dn=Fg;class yA extends vr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:s.depth},c=new Kn(o),u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new ng(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends yA{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class fM extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SA extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mf=class mf{constructor(t,n,s,o,c,u,h,m,d,g,_,v,x,b,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d,g,_,v,x,b,R,S)}set(t,n,s,o,c,u,h,m,d,g,_,v,x,b,R,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=s,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mf().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Jr.setFromMatrixColumn(t,0).length(),c=1/Jr.setFromMatrixColumn(t,1).length(),u=1/Jr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=x+b*d,n[5]=v-R*d,n[9]=-h*m,n[2]=R-v*d,n[6]=b+x*d,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,b=d*g,R=d*_;n[0]=v+R*h,n[4]=b*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=R+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,b=d*g,R=d*_;n[0]=v-R*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=R-v*h,n[2]=-u*d,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=m*g,n[4]=b*d-x,n[8]=v*d+R,n[1]=m*_,n[5]=R*d+v,n[9]=x*d-b,n[2]=-d,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,x=u*d,b=h*m,R=h*d;n[0]=m*g,n[4]=R-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+b,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*m,x=u*d,b=h*m,R=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=v*_+R,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MA,t,bA)}lookAt(t,n,s){const o=this.elements;return mi.subVectors(t,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),xs.crossVectors(s,mi),xs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),xs.crossVectors(s,mi)),xs.normalize(),cu.crossVectors(mi,xs),o[0]=xs.x,o[4]=cu.x,o[8]=mi.x,o[1]=xs.y,o[5]=cu.y,o[9]=mi.y,o[2]=xs.z,o[6]=cu.z,o[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[4],m=s[8],d=s[12],g=s[1],_=s[5],v=s[9],x=s[13],b=s[2],R=s[6],S=s[10],y=s[14],A=s[3],C=s[7],N=s[11],F=s[15],L=o[0],I=o[4],E=o[8],P=o[12],V=o[1],z=o[5],Y=o[9],ct=o[13],ht=o[2],W=o[6],O=o[10],G=o[14],$=o[3],ft=o[7],xt=o[11],B=o[15];return c[0]=u*L+h*V+m*ht+d*$,c[4]=u*I+h*z+m*W+d*ft,c[8]=u*E+h*Y+m*O+d*xt,c[12]=u*P+h*ct+m*G+d*B,c[1]=g*L+_*V+v*ht+x*$,c[5]=g*I+_*z+v*W+x*ft,c[9]=g*E+_*Y+v*O+x*xt,c[13]=g*P+_*ct+v*G+x*B,c[2]=b*L+R*V+S*ht+y*$,c[6]=b*I+R*z+S*W+y*ft,c[10]=b*E+R*Y+S*O+y*xt,c[14]=b*P+R*ct+S*G+y*B,c[3]=A*L+C*V+N*ht+F*$,c[7]=A*I+C*z+N*W+F*ft,c[11]=A*E+C*Y+N*O+F*xt,c[15]=A*P+C*ct+N*G+F*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],x=t[14],b=t[3],R=t[7],S=t[11],y=t[15],A=m*x-d*v,C=h*x-d*_,N=h*v-m*_,F=u*x-d*g,L=u*v-m*g,I=u*_-h*g;return n*(R*A-S*C+y*N)-s*(b*A-S*F+y*L)+o*(b*C-R*F+y*I)-c*(b*N-R*L+S*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],x=t[11],b=t[12],R=t[13],S=t[14],y=t[15],A=n*h-s*u,C=n*m-o*u,N=n*d-c*u,F=s*m-o*h,L=s*d-c*h,I=o*d-c*m,E=g*R-_*b,P=g*S-v*b,V=g*y-x*b,z=_*S-v*R,Y=_*y-x*R,ct=v*y-x*S,ht=A*ct-C*Y+N*z+F*V-L*P+I*E;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ht;return t[0]=(h*ct-m*Y+d*z)*W,t[1]=(o*Y-s*ct-c*z)*W,t[2]=(R*I-S*L+y*F)*W,t[3]=(v*L-_*I-x*F)*W,t[4]=(m*V-u*ct-d*P)*W,t[5]=(n*ct-o*V+c*P)*W,t[6]=(S*N-b*I-y*C)*W,t[7]=(g*I-v*N+x*C)*W,t[8]=(u*Y-h*V+d*E)*W,t[9]=(s*V-n*Y-c*E)*W,t[10]=(b*L-R*N+y*A)*W,t[11]=(_*N-g*L-x*A)*W,t[12]=(h*P-u*z-m*E)*W,t[13]=(n*z-s*P+o*E)*W,t[14]=(R*C-b*F-S*A)*W,t[15]=(g*F-_*C+v*A)*W,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,h=t.y,m=t.z,d=c*u,g=c*h;return this.set(d*u+s,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+s,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,R=u*g,S=u*_,y=h*_,A=m*d,C=m*g,N=m*_,F=s.x,L=s.y,I=s.z;return o[0]=(1-(R+y))*F,o[1]=(x+N)*F,o[2]=(b-C)*F,o[3]=0,o[4]=(x-N)*L,o[5]=(1-(v+y))*L,o[6]=(S+A)*L,o[7]=0,o[8]=(b+C)*I,o[9]=(S-A)*I,o[10]=(1-(v+R))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let u=Jr.set(o[0],o[1],o[2]).length();const h=Jr.set(o[4],o[5],o[6]).length(),m=Jr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Vi.copy(this);const d=1/u,g=1/h,_=1/m;return Vi.elements[0]*=d,Vi.elements[1]*=d,Vi.elements[2]*=d,Vi.elements[4]*=g,Vi.elements[5]*=g,Vi.elements[6]*=g,Vi.elements[8]*=_,Vi.elements[9]*=_,Vi.elements[10]*=_,n.setFromRotationMatrix(Vi),s.x=u,s.y=h,s.z=m,this}makePerspective(t,n,s,o,c,u,h=ra,m=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(s-o),v=(n+t)/(n-t),x=(s+o)/(s-o);let b,R;if(m)b=c/(u-c),R=u*c/(u-c);else if(h===ra)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===nf)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,h=ra,m=!1){const d=this.elements,g=2/(n-t),_=2/(s-o),v=-(n+t)/(n-t),x=-(s+o)/(s-o);let b,R;if(m)b=1/(u-c),R=u/(u-c);else if(h===ra)b=-2/(u-c),R=-(u+c)/(u-c);else if(h===nf)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}};mf.prototype.isMatrix4=!0;let Sn=mf;const Jr=new tt,Vi=new Sn,MA=new tt(0,0,0),bA=new tt(1,1,1),xs=new tt,cu=new tt,mi=new tt,Hx=new Sn,Gx=new Eo;class gr{constructor(t=0,n=0,s=0,o=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Hx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hx,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Gx.setFromEuler(this),this.setFromQuaternion(Gx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";let hM=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},EA=0;const kx=new tt,$r=new Eo,La=new Sn,uu=new tt,El=new tt,TA=new tt,AA=new Eo,Xx=new tt(1,0,0),jx=new tt(0,1,0),Wx=new tt(0,0,1),qx={type:"added"},RA={type:"removed"},to={type:"childadded",child:null},Xd={type:"childremoved",child:null};class ai extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const t=new tt,n=new gr,s=new Eo,o=new tt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sn},normalMatrix:{value:new oe}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $r.setFromAxisAngle(t,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,n){return $r.setFromAxisAngle(t,n),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Xx,t)}rotateY(t){return this.rotateOnAxis(jx,t)}rotateZ(t){return this.rotateOnAxis(Wx,t)}translateOnAxis(t,n){return kx.copy(t).applyQuaternion(this.quaternion),this.position.add(kx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Xx,t)}translateY(t){return this.translateOnAxis(jx,t)}translateZ(t){return this.translateOnAxis(Wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?uu.copy(t):uu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(El,uu,this.up):La.lookAt(uu,El,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),$r.setFromRotationMatrix(La),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qx),to.child=t,this.dispatchEvent(to),to.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(RA),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qx),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,TA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,AA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*o,c[13]+=s-c[1]*n-c[5]*s-c[9]*o,c[14]+=o-c[2]*n-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),b=u(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),x.length>0&&(s.animations=x),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}ai.DEFAULT_UP=new tt(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const R of t.hand.values()){const S=n.getJointPose(R,s),y=this._getHandJoint(d,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new fu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const dM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Wd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class Ve{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=be.workingColorSpace){return this.r=t,this.g=n,this.b=s,be.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=be.workingColorSpace){if(t=mA(t,1),n=Ee(n,0,1),s=Ee(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Wd(u,c,t+1/3),this.g=Wd(u,c,t),this.b=Wd(u,c,t-1/3)}return be.colorSpaceToWorking(this,o),this}setStyle(t,n=wi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ie("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wi){const s=dM[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return be.workingToColorSpace(kn.copy(this),t),Math.round(Ee(kn.r*255,0,255))*65536+Math.round(Ee(kn.g*255,0,255))*256+Math.round(Ee(kn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.workingToColorSpace(kn.copy(this),n);const s=kn.r,o=kn.g,c=kn.b,u=Math.max(s,o,c),h=Math.min(s,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case s:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-s)/_+2;break;case c:m=(s-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=be.workingColorSpace){return be.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=wi){be.workingToColorSpace(kn.copy(this),t);const n=kn.r,s=kn.g,o=kn.b;return t!==wi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+n,ys.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(ys),t.getHSL(hu);const s=zd(ys.h,hu.h,n),o=zd(ys.s,hu.s,n),c=zd(ys.l,hu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ve;Ve.NAMES=dM;class wA extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hi=new tt,Pa=new tt,qd=new tt,Oa=new tt,eo=new tt,no=new tt,Yx=new tt,Yd=new tt,Kd=new tt,Zd=new tt,Qd=new dn,Jd=new dn,$d=new dn;class ji{constructor(t=new tt,n=new tt,s=new tt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Hi.subVectors(t,n),o.cross(Hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Hi.subVectors(o,n),Pa.subVectors(s,n),qd.subVectors(t,n);const u=Hi.dot(Hi),h=Hi.dot(Pa),m=Hi.dot(qd),d=Pa.dot(Pa),g=Pa.dot(qd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(t,n,s,o,c,u,h,m){return this.getBarycoord(t,n,s,o,Oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Oa.x),m.addScaledVector(u,Oa.y),m.addScaledVector(h,Oa.z),m)}static getInterpolatedAttribute(t,n,s,o,c,u){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(t,n),Jd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Qd,c.x),u.addScaledVector(Jd,c.y),u.addScaledVector($d,c.z),u}static isFrontFacing(t,n,s,o){return Hi.subVectors(s,n),Pa.subVectors(t,n),Hi.cross(Pa).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Hi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return ji.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,h;eo.subVectors(o,s),no.subVectors(c,s),Yd.subVectors(t,s);const m=eo.dot(Yd),d=no.dot(Yd);if(m<=0&&d<=0)return n.copy(s);Kd.subVectors(t,o);const g=eo.dot(Kd),_=no.dot(Kd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(s).addScaledVector(eo,u);Zd.subVectors(t,c);const x=eo.dot(Zd),b=no.dot(Zd);if(b>=0&&x<=b)return n.copy(c);const R=x*d-m*b;if(R<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(s).addScaledVector(no,h);const S=g*b-x*_;if(S<=0&&_-g>=0&&x-b>=0)return Yx.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(Yx,h);const y=1/(S+R+v);return u=R*y,h=v*y,n.copy(s).addScaledVector(eo,u).addScaledVector(no,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jl{constructor(t=new tt(1/0,1/0,1/0),n=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Gi):Gi.fromBufferAttribute(c,u),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),du.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),du.copy(s.boundingBox)),du.applyMatrix4(t.matrixWorld),this.union(du)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),pu.subVectors(this.max,Tl),io.subVectors(t.a,Tl),ao.subVectors(t.b,Tl),so.subVectors(t.c,Tl),Ss.subVectors(ao,io),Ms.subVectors(so,ao),$s.subVectors(io,so);let n=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-$s.z,$s.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,$s.z,0,-$s.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-$s.y,$s.x,0];return!tp(n,io,ao,so,pu)||(n=[1,0,0,0,1,0,0,0,1],!tp(n,io,ao,so,pu))?!1:(mu.crossVectors(Ss,Ms),n=[mu.x,mu.y,mu.z],tp(n,io,ao,so,pu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ia=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Gi=new tt,du=new jl,io=new tt,ao=new tt,so=new tt,Ss=new tt,Ms=new tt,$s=new tt,Tl=new tt,pu=new tt,mu=new tt,tr=new tt;function tp(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){tr.fromArray(i,c);const h=o.x*Math.abs(tr.x)+o.y*Math.abs(tr.y)+o.z*Math.abs(tr.z),m=t.dot(tr),d=n.dot(tr),g=s.dot(tr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const xn=new tt,gu=new Ne;let DA=0;class ca extends vr{constructor(t,n,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Px,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)gu.fromBufferAttribute(this,n),gu.applyMatrix3(t),this.setXY(n,gu.x,gu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=bl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ni(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=bl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=bl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=bl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=bl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array),o=ni(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Px&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class pM extends ca{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class mM extends ca{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Li extends ca{constructor(t,n,s){super(new Float32Array(t),n,s)}}const NA=new jl,Al=new tt,ep=new tt;class vf{constructor(t=new tt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):NA.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Al.subVectors(t,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Al,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Al.copy(t.center).add(ep)),this.expandByPoint(Al.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let UA=0;const Ci=new Sn,np=new ai,ro=new tt,gi=new jl,Rl=new jl,wn=new tt;class Yi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fA(t)?mM:pM)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,n,s){return Ci.makeTranslation(t,n,s),this.applyMatrix4(Ci),this}scale(t,n,s){return Ci.makeScale(t,n,s),this.applyMatrix4(Ci),this}lookAt(t){return np.lookAt(t),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Li(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Rl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(gi.min,Rl.min),gi.expandByPoint(wn),wn.addVectors(gi.max,Rl.max),gi.expandByPoint(wn)):(gi.expandByPoint(Rl.min),gi.expandByPoint(Rl.max))}gi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)wn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(wn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)wn.fromBufferAttribute(h,d),m&&(ro.fromBufferAttribute(t,d),wn.add(ro)),o=Math.max(o,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ca(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let E=0;E<s.count;E++)h[E]=new tt,m[E]=new tt;const d=new tt,g=new tt,_=new tt,v=new Ne,x=new Ne,b=new Ne,R=new tt,S=new tt;function y(E,P,V){d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,P),_.fromBufferAttribute(s,V),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,P),b.fromBufferAttribute(c,V),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const z=1/(x.x*b.y-b.x*x.y);isFinite(z)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(z),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(z),h[E].add(R),h[P].add(R),h[V].add(R),m[E].add(S),m[P].add(S),m[V].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,P=A.length;E<P;++E){const V=A[E],z=V.start,Y=V.count;for(let ct=z,ht=z+Y;ct<ht;ct+=3)y(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const C=new tt,N=new tt,F=new tt,L=new tt;function I(E){F.fromBufferAttribute(o,E),L.copy(F);const P=h[E];C.copy(P),C.sub(F.multiplyScalar(F.dot(P))).normalize(),N.crossVectors(L,P);const z=N.dot(m[E])<0?-1:1;u.setXYZW(E,C.x,C.y,C.z,z)}for(let E=0,P=A.length;E<P;++E){const V=A[E],z=V.start,Y=V.count;for(let ct=z,ht=z+Y;ct<ht;ct+=3)I(t.getX(ct+0)),I(t.getX(ct+1)),I(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ca(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,x=s.count;v<x;v++)s.setXYZ(v,0,0,0);const o=new tt,c=new tt,u=new tt,h=new tt,m=new tt,d=new tt,g=new tt,_=new tt;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),R=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),h.add(g),m.add(g),d.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,b=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?x=m[R]*h.data.stride+h.offset:x=m[R]*g;for(let y=0;y<g;y++)v[b++]=d[x++]}return new ca(v,g,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,s);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=t(v,s);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LA=0;class Wl extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=go,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dp,this.blendDst=Np,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ie(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(s.blending=this.blending),this.side!==Ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dp&&(s.blendSrc=this.blendSrc),this.blendDst!==Np&&(s.blendDst=this.blendDst),this.blendEquation!==rr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new tt,ip=new tt,vu=new tt,bs=new tt,ap=new tt,_u=new tt,sp=new tt;class gM{constructor(t=new tt,n=new tt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ba.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,n),Ba.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){ip.copy(t).add(n).multiplyScalar(.5),vu.copy(n).sub(t).normalize(),bs.copy(this.origin).sub(ip);const c=t.distanceTo(n)*.5,u=-this.direction.dot(vu),h=bs.dot(this.direction),m=-bs.dot(vu),d=bs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const R=1/g;_*=R,v*=R,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ip).addScaledVector(vu,v),x}intersectSphere(t,n){Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),o=Ba.dot(Ba)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=s-u,m=s+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(s=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,n,s,o,c){ap.subVectors(n,t),_u.subVectors(s,t),sp.crossVectors(ap,_u);let u=this.direction.dot(sp),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;bs.subVectors(this.origin,t);const m=h*this.direction.dot(_u.crossVectors(bs,_u));if(m<0)return null;const d=h*this.direction.dot(ap.cross(bs));if(d<0||m+d>u)return null;const g=-h*bs.dot(sp);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ig extends Wl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=YS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kx=new Sn,er=new gM,xu=new vf,Zx=new tt,yu=new tt,Su=new tt,Mu=new tt,rp=new tt,bu=new tt,Qx=new tt,Eu=new tt;class ha extends ai{constructor(t=new Yi,n=new ig){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){bu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(rp.fromBufferAttribute(_,t),u?bu.addScaledVector(rp,g):bu.addScaledVector(rp.sub(n),g))}n.add(bu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xu.copy(s.boundingSphere),xu.applyMatrix4(c),er.copy(t.ray).recast(t.near),!(xu.containsPoint(er.origin)===!1&&(er.intersectSphere(xu,Zx)===null||er.origin.distanceToSquared(Zx)>(t.far-t.near)**2))&&(Kx.copy(c).invert(),er.copy(t.ray).applyMatrix4(Kx),!(s.boundingBox!==null&&er.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,er)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const S=v[b],y=u[S.materialIndex],A=Math.max(S.start,x.start),C=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let N=A,F=C;N<F;N+=3){const L=h.getX(N),I=h.getX(N+1),E=h.getX(N+2);o=Tu(this,y,t,s,d,g,_,L,I,E),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let S=b,y=R;S<y;S+=3){const A=h.getX(S),C=h.getX(S+1),N=h.getX(S+2);o=Tu(this,u,t,s,d,g,_,A,C,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const S=v[b],y=u[S.materialIndex],A=Math.max(S.start,x.start),C=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let N=A,F=C;N<F;N+=3){const L=N,I=N+1,E=N+2;o=Tu(this,y,t,s,d,g,_,L,I,E),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let S=b,y=R;S<y;S+=3){const A=S,C=S+1,N=S+2;o=Tu(this,u,t,s,d,g,_,A,C,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function PA(i,t,n,s,o,c,u,h){let m;if(t.side===ii?m=s.intersectTriangle(u,c,o,!0,h):m=s.intersectTriangle(o,c,u,t.side===Ds,h),m===null)return null;Eu.copy(h),Eu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(Eu);return d<n.near||d>n.far?null:{distance:d,point:Eu.clone(),object:i}}function Tu(i,t,n,s,o,c,u,h,m,d){i.getVertexPosition(h,yu),i.getVertexPosition(m,Su),i.getVertexPosition(d,Mu);const g=PA(i,t,n,s,yu,Su,Mu,Qx);if(g){const _=new tt;ji.getBarycoord(Qx,yu,Su,Mu,_),o&&(g.uv=ji.getInterpolatedAttribute(o,h,m,d,_,new Ne)),c&&(g.uv1=ji.getInterpolatedAttribute(c,h,m,d,_,new Ne)),u&&(g.normal=ji.getInterpolatedAttribute(u,h,m,d,_,new tt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new tt,materialIndex:0};ji.getNormal(yu,Su,Mu,v.normal),g.face=v,g.barycoord=_}return g}class OA extends Kn{constructor(t=null,n=1,s=1,o,c,u,h,m,d=Bn,g=Bn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const op=new tt,IA=new tt,BA=new oe;class ar{constructor(t=new tt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=op.subVectors(s,n).cross(IA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,s=!0){const o=t.delta(op),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||BA.getNormalMatrix(t),o=this.coplanarPoint(op).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new vf,FA=new Ne(.5,.5),Au=new tt;class vM{constructor(t=new ar,n=new ar,s=new ar,o=new ar,c=new ar,u=new ar){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ra,s=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],R=c[9],S=c[10],y=c[11],A=c[12],C=c[13],N=c[14],F=c[15];if(o[0].setComponents(d-u,x-g,y-b,F-A).normalize(),o[1].setComponents(d+u,x+g,y+b,F+A).normalize(),o[2].setComponents(d+h,x+_,y+R,F+C).normalize(),o[3].setComponents(d-h,x-_,y-R,F-C).normalize(),s)o[4].setComponents(m,v,S,N).normalize(),o[5].setComponents(d-m,x-v,y-S,F-N).normalize();else if(o[4].setComponents(d-m,x-v,y-S,F-N).normalize(),n===ra)o[5].setComponents(d+m,x+v,y+S,F+N).normalize();else if(n===nf)o[5].setComponents(m,v,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);const n=FA.distanceTo(t.center);return nr.radius=.7071067811865476+n,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Au.x=o.normal.x>0?t.max.x:t.min.x,Au.y=o.normal.y>0?t.max.y:t.min.y,Au.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Au)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _M extends Wl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jx=new Sn,xm=new gM,Ru=new vf,Cu=new tt;class zA extends ai{constructor(t=new Yi,n=new _M){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ru.copy(s.boundingSphere),Ru.applyMatrix4(o),Ru.radius+=c,t.ray.intersectsSphere(Ru)===!1)return;Jx.copy(o).invert(),xm.copy(t.ray).applyMatrix4(Jx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=s.index,_=s.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let b=v,R=x;b<R;b++){const S=d.getX(b);Cu.fromBufferAttribute(_,S),$x(Cu,S,m,o,t,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,R=x;b<R;b++)Cu.fromBufferAttribute(_,b),$x(Cu,b,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function $x(i,t,n,s,o,c,u){const h=xm.distanceSqToPoint(i);if(h<n){const m=new tt;xm.closestPointToPoint(i,m),m.applyMatrix4(s);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class xM extends Kn{constructor(t=[],n=pr,s,o,c,u,h,m,d,g){super(t,n,s,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yo extends Kn{constructor(t,n,s=fa,o,c,u,h=Bn,m=Bn,d,g=ka,_=1){if(g!==ka&&g!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ng(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class VA extends yo{constructor(t,n=fa,s=pr,o,c,u=Bn,h=Bn,m,d=ka){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yM extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ql extends Yi{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,o,u,2),b("x","z","y",1,-1,t,s,-n,o,u,3),b("x","y","z",1,-1,t,n,s,o,c,4),b("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(m),this.setAttribute("position",new Li(d,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(_,2));function b(R,S,y,A,C,N,F,L,I,E,P){const V=N/I,z=F/E,Y=N/2,ct=F/2,ht=L/2,W=I+1,O=E+1;let G=0,$=0;const ft=new tt;for(let xt=0;xt<O;xt++){const B=xt*z-ct;for(let Q=0;Q<W;Q++){const yt=Q*V-Y;ft[R]=yt*A,ft[S]=B*C,ft[y]=ht,d.push(ft.x,ft.y,ft.z),ft[R]=0,ft[S]=0,ft[y]=L>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(Q/I),_.push(1-xt/E),G+=1}}for(let xt=0;xt<E;xt++)for(let B=0;B<I;B++){const Q=v+B+W*xt,yt=v+B+W*(xt+1),At=v+(B+1)+W*(xt+1),Dt=v+(B+1)+W*xt;m.push(Q,yt,Dt),m.push(yt,At,Dt),$+=6}h.addGroup(x,$,P),x+=$,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ag extends Yi{constructor(t=[],n=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:s,detail:o};const c=[],u=[];h(o),d(s),g(),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(c.slice(),3)),this.setAttribute("uv",new Li(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(A){const C=new tt,N=new tt,F=new tt;for(let L=0;L<n.length;L+=3)x(n[L+0],C),x(n[L+1],N),x(n[L+2],F),m(C,N,F,A)}function m(A,C,N,F){const L=F+1,I=[];for(let E=0;E<=L;E++){I[E]=[];const P=A.clone().lerp(N,E/L),V=C.clone().lerp(N,E/L),z=L-E;for(let Y=0;Y<=z;Y++)Y===0&&E===L?I[E][Y]=P:I[E][Y]=P.clone().lerp(V,Y/z)}for(let E=0;E<L;E++)for(let P=0;P<2*(L-E)-1;P++){const V=Math.floor(P/2);P%2===0?(v(I[E][V+1]),v(I[E+1][V]),v(I[E][V])):(v(I[E][V+1]),v(I[E+1][V+1]),v(I[E+1][V]))}}function d(A){const C=new tt;for(let N=0;N<c.length;N+=3)C.x=c[N+0],C.y=c[N+1],C.z=c[N+2],C.normalize().multiplyScalar(A),c[N+0]=C.x,c[N+1]=C.y,c[N+2]=C.z}function g(){const A=new tt;for(let C=0;C<c.length;C+=3){A.x=c[C+0],A.y=c[C+1],A.z=c[C+2];const N=S(A)/2/Math.PI+.5,F=y(A)/Math.PI+.5;u.push(N,1-F)}b(),_()}function _(){for(let A=0;A<u.length;A+=6){const C=u[A+0],N=u[A+2],F=u[A+4],L=Math.max(C,N,F),I=Math.min(C,N,F);L>.9&&I<.1&&(C<.2&&(u[A+0]+=1),N<.2&&(u[A+2]+=1),F<.2&&(u[A+4]+=1))}}function v(A){c.push(A.x,A.y,A.z)}function x(A,C){const N=A*3;C.x=t[N+0],C.y=t[N+1],C.z=t[N+2]}function b(){const A=new tt,C=new tt,N=new tt,F=new tt,L=new Ne,I=new Ne,E=new Ne;for(let P=0,V=0;P<c.length;P+=9,V+=6){A.set(c[P+0],c[P+1],c[P+2]),C.set(c[P+3],c[P+4],c[P+5]),N.set(c[P+6],c[P+7],c[P+8]),L.set(u[V+0],u[V+1]),I.set(u[V+2],u[V+3]),E.set(u[V+4],u[V+5]),F.copy(A).add(C).add(N).divideScalar(3);const z=S(F);R(L,V+0,A,z),R(I,V+2,C,z),R(E,V+4,N,z)}}function R(A,C,N,F){F<0&&A.x===1&&(u[C]=A.x-1),N.x===0&&N.z===0&&(u[C]=F/2/Math.PI+.5)}function S(A){return Math.atan2(A.z,-A.x)}function y(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ag(t.vertices,t.indices,t.radius,t.detail)}}class sf extends ag{constructor(t=1,n=0){const s=(1+Math.sqrt(5))/2,o=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new sf(t.radius,t.detail)}}class _f extends Yi{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(s),m=Math.floor(o),d=h+1,g=m+1,_=t/h,v=n/m,x=[],b=[],R=[],S=[];for(let y=0;y<g;y++){const A=y*v-u;for(let C=0;C<d;C++){const N=C*_-c;b.push(N,-A,0),R.push(0,0,1),S.push(C/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let A=0;A<h;A++){const C=A+d*y,N=A+d*(y+1),F=A+1+d*(y+1),L=A+1+d*y;x.push(C,N,L),x.push(N,F,L)}this.setIndex(x),this.setAttribute("position",new Li(b,3)),this.setAttribute("normal",new Li(R,3)),this.setAttribute("uv",new Li(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _f(t.width,t.height,t.widthSegments,t.heightSegments)}}function So(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];if(ty(o))o.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone();else if(Array.isArray(o))if(ty(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();t[n][s]=c}else t[n][s]=o.slice();else t[n][s]=o}}return t}function Wn(i){const t={};for(let n=0;n<i.length;n++){const s=So(i[n]);for(const o in s)t[o]=s[o]}return t}function ty(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function HA(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function SM(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const GA={clone:So,merge:Wn};var kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Wl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=XA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=HA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class jA extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WA extends Wl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qA extends Wl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wu=new tt,Du=new Eo,ta=new tt;class MM extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wu,Du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Du,ta.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(wu,Du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Du,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new tt,ey=new Ne,ny=new Ne;class Di extends MM{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=_m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _m*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,ey,ny),n.subVectors(ny,ey)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Fd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*s/d,o*=u.width/m,s*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class bM extends MM{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const oo=-90,lo=1;class YA extends ai{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Di(oo,lo,t,n);o.layers=this.layers,this.add(o);const c=new Di(oo,lo,t,n);c.layers=this.layers,this.add(c);const u=new Di(oo,lo,t,n);u.layers=this.layers,this.add(u);const h=new Di(oo,lo,t,n);h.layers=this.layers,this.add(h);const m=new Di(oo,lo,t,n);m.layers=this.layers,this.add(m);const d=new Di(oo,lo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,h,m]=n;for(const d of n)this.remove(d);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(s,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(s,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(s,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class KA extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zg=class zg{constructor(t,n,s,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let s=0;s<4;s++)this.elements[s]=t[s+n];return this}set(t,n,s,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=s,c[3]=o,this}};zg.prototype.isMatrix2=!0;let iy=zg;function ay(i,t,n,s){const o=ZA(s);switch(n){case oM:return i*t;case cM:return i*t/o.components*o.byteLength;case Qm:return i*t/o.components*o.byteLength;case mr:return i*t*2/o.components*o.byteLength;case Jm:return i*t*2/o.components*o.byteLength;case lM:return i*t*3/o.components*o.byteLength;case Wi:return i*t*4/o.components*o.byteLength;case $m:return i*t*4/o.components*o.byteLength;case zu:case Vu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hu:case Gu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gp:case Xp:return Math.max(i,16)*Math.max(t,8)/4;case Hp:case kp:return Math.max(i,8)*Math.max(t,8)/2;case jp:case Wp:case Yp:case Kp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qp:case Ju:case Zp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $p:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tm:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case em:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nm:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case im:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case am:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case om:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case um:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fm:case hm:case dm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pm:case mm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $u:case gm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZA(i){switch(i){case Ni:case iM:return{byteLength:1,components:1};case Fl:case aM:case Ga:return{byteLength:2,components:1};case Km:case Zm:return{byteLength:2,components:4};case fa:case Ym:case sa:return{byteLength:4,components:1};case sM:case rM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function EM(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&i!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function QA(i){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(m,v),i.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,d){const g=m.array,_=m.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],R=_[x];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const R=_[x];i.bufferSubData(d,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(i.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var JA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$A=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ER=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CR="gl_FragColor = linearToOutputTexel( gl_FragColor );",wR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$R=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$C=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:JA,alphahash_pars_fragment:$A,alphamap_fragment:tR,alphamap_pars_fragment:eR,alphatest_fragment:nR,alphatest_pars_fragment:iR,aomap_fragment:aR,aomap_pars_fragment:sR,batching_pars_vertex:rR,batching_vertex:oR,begin_vertex:lR,beginnormal_vertex:cR,bsdfs:uR,iridescence_fragment:fR,bumpmap_pars_fragment:hR,clipping_planes_fragment:dR,clipping_planes_pars_fragment:pR,clipping_planes_pars_vertex:mR,clipping_planes_vertex:gR,color_fragment:vR,color_pars_fragment:_R,color_pars_vertex:xR,color_vertex:yR,common:SR,cube_uv_reflection_fragment:MR,defaultnormal_vertex:bR,displacementmap_pars_vertex:ER,displacementmap_vertex:TR,emissivemap_fragment:AR,emissivemap_pars_fragment:RR,colorspace_fragment:CR,colorspace_pars_fragment:wR,envmap_fragment:DR,envmap_common_pars_fragment:NR,envmap_pars_fragment:UR,envmap_pars_vertex:LR,envmap_physical_pars_fragment:XR,envmap_vertex:PR,fog_vertex:OR,fog_pars_vertex:IR,fog_fragment:BR,fog_pars_fragment:FR,gradientmap_pars_fragment:zR,lightmap_pars_fragment:VR,lights_lambert_fragment:HR,lights_lambert_pars_fragment:GR,lights_pars_begin:kR,lights_toon_fragment:jR,lights_toon_pars_fragment:WR,lights_phong_fragment:qR,lights_phong_pars_fragment:YR,lights_physical_fragment:KR,lights_physical_pars_fragment:ZR,lights_fragment_begin:QR,lights_fragment_maps:JR,lights_fragment_end:$R,lightprobes_pars_fragment:tC,logdepthbuf_fragment:eC,logdepthbuf_pars_fragment:nC,logdepthbuf_pars_vertex:iC,logdepthbuf_vertex:aC,map_fragment:sC,map_pars_fragment:rC,map_particle_fragment:oC,map_particle_pars_fragment:lC,metalnessmap_fragment:cC,metalnessmap_pars_fragment:uC,morphinstance_vertex:fC,morphcolor_vertex:hC,morphnormal_vertex:dC,morphtarget_pars_vertex:pC,morphtarget_vertex:mC,normal_fragment_begin:gC,normal_fragment_maps:vC,normal_pars_fragment:_C,normal_pars_vertex:xC,normal_vertex:yC,normalmap_pars_fragment:SC,clearcoat_normal_fragment_begin:MC,clearcoat_normal_fragment_maps:bC,clearcoat_pars_fragment:EC,iridescence_pars_fragment:TC,opaque_fragment:AC,packing:RC,premultiplied_alpha_fragment:CC,project_vertex:wC,dithering_fragment:DC,dithering_pars_fragment:NC,roughnessmap_fragment:UC,roughnessmap_pars_fragment:LC,shadowmap_pars_fragment:PC,shadowmap_pars_vertex:OC,shadowmap_vertex:IC,shadowmask_pars_fragment:BC,skinbase_vertex:FC,skinning_pars_vertex:zC,skinning_vertex:VC,skinnormal_vertex:HC,specularmap_fragment:GC,specularmap_pars_fragment:kC,tonemapping_fragment:XC,tonemapping_pars_fragment:jC,transmission_fragment:WC,transmission_pars_fragment:qC,uv_pars_fragment:YC,uv_pars_vertex:KC,uv_vertex:ZC,worldpos_vertex:QC,background_vert:JC,background_frag:$C,backgroundCube_vert:t2,backgroundCube_frag:e2,cube_vert:n2,cube_frag:i2,depth_vert:a2,depth_frag:s2,distance_vert:r2,distance_frag:o2,equirect_vert:l2,equirect_frag:c2,linedashed_vert:u2,linedashed_frag:f2,meshbasic_vert:h2,meshbasic_frag:d2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:v2,meshnormal_vert:_2,meshnormal_frag:x2,meshphong_vert:y2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:b2,meshtoon_vert:E2,meshtoon_frag:T2,points_vert:A2,points_frag:R2,shadow_vert:C2,shadow_frag:w2,sprite_vert:D2,sprite_frag:N2},Vt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new tt},probesMax:{value:new tt},probesResolution:{value:new tt}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},ia={basic:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Wn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Wn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Wn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Wn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Wn([Vt.points,Vt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Wn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Wn([Vt.common,Vt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Wn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Wn([Vt.sprite,Vt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Wn([Vt.common,Vt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Wn([Vt.lights,Vt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ia.physical={uniforms:Wn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Nu={r:0,b:0,g:0},U2=new Sn,TM=new oe;TM.set(-1,0,0,0,1,0,0,0,1);function L2(i,t,n,s,o,c){const u=new Ve(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const N=A.backgroundBlurriness>0;C=t.get(C,N)}return C}function b(A){let C=!1;const N=x(A);N===null?S(u,h):N&&N.isColor&&(S(N,1),C=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(A,C){const N=x(C);N&&(N.isCubeTexture||N.mapping===gf)?(d===void 0&&(d=new ha(new ql(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:So(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=N,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(U2.makeRotationFromEuler(C.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(TM),d.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,(g!==N||_!==N.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,g=N,_=N.version,v=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ha(new _f(2,2),new da({name:"BackgroundMaterial",uniforms:So(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||_!==N.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,g=N,_=N.version,v=i.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function S(A,C){A.getRGB(Nu,SM(i)),n.buffers.color.setClear(Nu.r,Nu.g,Nu.b,C,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,C=1){u.set(A),h=C,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,S(u,h)},render:b,addToRenderList:R,dispose:y}}function P2(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=v(null);let c=o,u=!1;function h(z,Y,ct,ht,W){let O=!1;const G=_(z,ht,ct,Y);c!==G&&(c=G,d(c.object)),O=x(z,ht,ct,W),O&&b(z,ht,ct,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,N(z,Y,ct,ht),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return i.createVertexArray()}function d(z){return i.bindVertexArray(z)}function g(z){return i.deleteVertexArray(z)}function _(z,Y,ct,ht){const W=ht.wireframe===!0;let O=s[Y.id];O===void 0&&(O={},s[Y.id]=O);const G=z.isInstancedMesh===!0?z.id:0;let $=O[G];$===void 0&&($={},O[G]=$);let ft=$[ct.id];ft===void 0&&(ft={},$[ct.id]=ft);let xt=ft[W];return xt===void 0&&(xt=v(m()),ft[W]=xt),xt}function v(z){const Y=[],ct=[],ht=[];for(let W=0;W<n;W++)Y[W]=0,ct[W]=0,ht[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ct,attributeDivisors:ht,object:z,attributes:{},index:null}}function x(z,Y,ct,ht){const W=c.attributes,O=Y.attributes;let G=0;const $=ct.getAttributes();for(const ft in $)if($[ft].location>=0){const B=W[ft];let Q=O[ft];if(Q===void 0&&(ft==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),ft==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==ht}function b(z,Y,ct,ht){const W={},O=Y.attributes;let G=0;const $=ct.getAttributes();for(const ft in $)if($[ft].location>=0){let B=O[ft];B===void 0&&(ft==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),ft==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),W[ft]=Q,G++}c.attributes=W,c.attributesNum=G,c.index=ht}function R(){const z=c.newAttributes;for(let Y=0,ct=z.length;Y<ct;Y++)z[Y]=0}function S(z){y(z,0)}function y(z,Y){const ct=c.newAttributes,ht=c.enabledAttributes,W=c.attributeDivisors;ct[z]=1,ht[z]===0&&(i.enableVertexAttribArray(z),ht[z]=1),W[z]!==Y&&(i.vertexAttribDivisor(z,Y),W[z]=Y)}function A(){const z=c.newAttributes,Y=c.enabledAttributes;for(let ct=0,ht=Y.length;ct<ht;ct++)Y[ct]!==z[ct]&&(i.disableVertexAttribArray(ct),Y[ct]=0)}function C(z,Y,ct,ht,W,O,G){G===!0?i.vertexAttribIPointer(z,Y,ct,W,O):i.vertexAttribPointer(z,Y,ct,ht,W,O)}function N(z,Y,ct,ht){R();const W=ht.attributes,O=ct.getAttributes(),G=Y.defaultAttributeValues;for(const $ in O){const ft=O[$];if(ft.location>=0){let xt=W[$];if(xt===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(xt=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(xt=z.instanceColor)),xt!==void 0){const B=xt.normalized,Q=xt.itemSize,yt=t.get(xt);if(yt===void 0)continue;const At=yt.buffer,Dt=yt.type,ot=yt.bytesPerElement,St=Dt===i.INT||Dt===i.UNSIGNED_INT||xt.gpuType===Ym;if(xt.isInterleavedBufferAttribute){const Et=xt.data,Ht=Et.stride,ee=xt.offset;if(Et.isInstancedInterleavedBuffer){for(let $t=0;$t<ft.locationSize;$t++)y(ft.location+$t,Et.meshPerAttribute);z.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let $t=0;$t<ft.locationSize;$t++)S(ft.location+$t);i.bindBuffer(i.ARRAY_BUFFER,At);for(let $t=0;$t<ft.locationSize;$t++)C(ft.location+$t,Q/ft.locationSize,Dt,B,Ht*ot,(ee+Q/ft.locationSize*$t)*ot,St)}else{if(xt.isInstancedBufferAttribute){for(let Et=0;Et<ft.locationSize;Et++)y(ft.location+Et,xt.meshPerAttribute);z.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Et=0;Et<ft.locationSize;Et++)S(ft.location+Et);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Et=0;Et<ft.locationSize;Et++)C(ft.location+Et,Q/ft.locationSize,Dt,B,Q*ot,Q/ft.locationSize*Et*ot,St)}}else if(G!==void 0){const B=G[$];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ft.location,B);break;case 3:i.vertexAttrib3fv(ft.location,B);break;case 4:i.vertexAttrib4fv(ft.location,B);break;default:i.vertexAttrib1fv(ft.location,B)}}}}A()}function F(){P();for(const z in s){const Y=s[z];for(const ct in Y){const ht=Y[ct];for(const W in ht){const O=ht[W];for(const G in O)g(O[G].object),delete O[G];delete ht[W]}}delete s[z]}}function L(z){if(s[z.id]===void 0)return;const Y=s[z.id];for(const ct in Y){const ht=Y[ct];for(const W in ht){const O=ht[W];for(const G in O)g(O[G].object),delete O[G];delete ht[W]}}delete s[z.id]}function I(z){for(const Y in s){const ct=s[Y];for(const ht in ct){const W=ct[ht];if(W[z.id]===void 0)continue;const O=W[z.id];for(const G in O)g(O[G].object),delete O[G];delete W[z.id]}}}function E(z){for(const Y in s){const ct=s[Y],ht=z.isInstancedMesh===!0?z.id:0,W=ct[ht];if(W!==void 0){for(const O in W){const G=W[O];for(const $ in G)g(G[$].object),delete G[$];delete W[O]}delete ct[ht],Object.keys(ct).length===0&&delete s[Y]}}}function P(){V(),u=!0,c!==o&&(c=o,d(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:V,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:S,disableUnusedAttributes:A}}function O2(i,t,n){let s;function o(m){s=m}function c(m,d){i.drawArrays(s,m,d),n.update(d,s,1)}function u(m,d,g){g!==0&&(i.drawArraysInstanced(s,m,d,g),n.update(d,s,g))}function h(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,s,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function I2(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Wi&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===Ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ni&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sa&&!E)}function m(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(ie("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:N,maxSamples:F,samples:L}}function B2(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new ar,h=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||s!==0||o;return o=v,s=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,y=i.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):d();else{const A=c?0:s,C=A*4;let N=y.clippingState||null;m.value=N,N=g(b,v,C,x);for(let F=0;F!==C;++F)N[F]=n[F];y.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,x,b){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const y=x+R*4,A=v.matrixWorldInverse;h.getNormalMatrix(A),(S===null||S.length<y)&&(S=new Float32Array(y));for(let C=0,N=x;C!==R;++C,N+=4)u.copy(_[C]).applyMatrix4(A,h),u.normal.toArray(S,N),S[N+3]=u.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}const Cs=4,sy=[.125,.215,.35,.446,.526,.582],or=20,F2=256,Cl=new bM,ry=new Ve;let lp=null,cp=0,up=0,fp=!1;const z2=new tt;class oy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:h=z2}=c;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=fp,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===pr||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ga,format:Wi,colorSpace:tf,depthBuffer:!1},o=ly(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ly(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V2(c)),this._blurMaterial=G2(c,t,n),this._ggxMaterial=H2(c,t,n)}return o}_compileMaterial(t){const n=new ha(new Yi,t);this._renderer.compile(n,Cl)}_sceneToCubeUV(t,n,s,o,c){const m=new Di(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(ry),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ha(new ql,new ig({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let y=!1;const A=t.background;A?A.isColor&&(S.color.copy(A),t.background=null,y=!0):(S.color.copy(ry),y=!0);for(let C=0;C<6;C++){const N=C%3;N===0?(m.up.set(0,d[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):N===1?(m.up.set(0,0,d[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,d[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const F=this._cubeSize;co(o,N*F,C>2?F:0,F,F),_.setRenderTarget(o),y&&_.render(R,m),_.render(t,m)}_.toneMapping=x,_.autoClear=v,t.background=A}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===pr||t.mapping===xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=uy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cy());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;co(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,Cl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const m=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,R=this._sizeLods[s],S=3*R*(s>b-Cs?s-b+Cs:0),y=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=b-n,co(c,S,y,3*R,2*R),o.setRenderTarget(c),o.render(h,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,co(t,S,y,3*R,2*R),o.setRenderTarget(t),o.render(h,Cl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*or-1),R=c/b,S=isFinite(c)?1+Math.floor(g*R):or;S>or&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${or}`);const y=[];let A=0;for(let I=0;I<or;++I){const E=I/R,P=Math.exp(-E*E/2);y.push(P),I===0?A+=P:I<S&&(A+=2*P)}for(let I=0;I<y.length;I++)y[I]=y[I]/A;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:C}=this;v.dTheta.value=b,v.mipInt.value=C-s;const N=this._sizeLods[o],F=3*N*(o>C-Cs?o-C+Cs:0),L=4*(this._cubeSize-N);co(n,F,L,3*N,2*N),m.setRenderTarget(n),m.render(_,Cl)}}function V2(i){const t=[],n=[],s=[];let o=i;const c=i-Cs+1+sy.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>i-Cs?m=sy[u-i+Cs-1]:u===0&&(m=0),n.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,R=3,S=2,y=1,A=new Float32Array(R*b*x),C=new Float32Array(S*b*x),N=new Float32Array(y*b*x);for(let L=0;L<x;L++){const I=L%3*2/3-1,E=L>2?0:-1,P=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];A.set(P,R*b*L),C.set(v,S*b*L);const V=[L,L,L,L,L,L];N.set(V,y*b*L)}const F=new Yi;F.setAttribute("position",new ca(A,R)),F.setAttribute("uv",new ca(C,S)),F.setAttribute("faceIndex",new ca(N,y)),s.push(new ha(F,null)),o>Cs&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function ly(i,t,n){const s=new la(i,t,n);return s.texture.mapping=gf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function co(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function H2(i,t,n){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function G2(i,t,n){const s=new Float32Array(or),o=new tt(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function cy(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function uy(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class AM extends la{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new xM(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ql(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:So(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Va});c.uniforms.tEquirect.value=n;const u=new ha(o,c),h=n.minFilter;return n.minFilter===lr&&(n.minFilter=Xn),new YA(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}function k2(i){let t=new WeakMap,n=new WeakMap,s=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Od||x===Id)if(t.has(v)){const b=t.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const R=new AM(b.height);return R.fromEquirectangularTexture(i,v),t.set(v,R),v.addEventListener("dispose",d),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===Od||x===Id,R=x===pr||x===xo;if(b||R){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new oy(i)),S=b?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const A=v.image;return b&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new oy(i)),S=b?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function h(v,x){return x===Od?v.mapping=pr:x===Id&&(v.mapping=xo),v}function m(v){let x=0;const b=6;for(let R=0;R<b;R++)v[R]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function X2(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&vm("WebGLRenderer: "+s+" extension not supported."),o}}}function j2(i,t,n,s){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)t.update(v[x],i.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let R=0;if(b===void 0)return;if(x!==null){const A=x.array;R=x.version;for(let C=0,N=A.length;C<N;C+=3){const F=A[C+0],L=A[C+1],I=A[C+2];v.push(F,L,L,I,I,F)}}else{const A=b.array;R=b.version;for(let C=0,N=A.length/3-1;C<N;C+=3){const F=C+0,L=C+1,I=C+2;v.push(F,L,L,I,I,F)}}const S=new(b.count>=65535?mM:pM)(v,1);S.version=R;const y=c.get(_);y&&t.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function W2(i,t,n){let s;function o(_){s=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){i.drawElements(s,v,c,_*u),n.update(v,s,1)}function d(_,v,x){x!==0&&(i.drawElementsInstanced(s,v,c,_*u,x),n.update(v,s,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,_,0,x);let R=0;for(let S=0;S<x;S++)R+=v[S];n.update(R,s,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function q2(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=h*(c/3);break;case i.LINES:n.lines+=h*(c/2);break;case i.LINE_STRIP:n.lines+=h*(c-1);break;case i.LINE_LOOP:n.lines+=h*c;break;case i.POINTS:n.points+=h*c;break;default:Te("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function Y2(i,t,n){const s=new WeakMap,o=new dn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let V=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var x=V;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),S===!0&&(N=3);let F=h.attributes.position.count*N,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*L*4*_),E=new fM(I,F,L,_);E.type=sa,E.needsUpdate=!0;const P=N*4;for(let z=0;z<_;z++){const Y=y[z],ct=A[z],ht=C[z],W=F*L*4*z;for(let O=0;O<Y.count;O++){const G=O*P;b===!0&&(o.fromBufferAttribute(Y,O),I[W+G+0]=o.x,I[W+G+1]=o.y,I[W+G+2]=o.z,I[W+G+3]=0),R===!0&&(o.fromBufferAttribute(ct,O),I[W+G+4]=o.x,I[W+G+5]=o.y,I[W+G+6]=o.z,I[W+G+7]=0),S===!0&&(o.fromBufferAttribute(ht,O),I[W+G+8]=o.x,I[W+G+9]=o.y,I[W+G+10]=o.z,I[W+G+11]=ht.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Ne(F,L)},s.set(h,v),h.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(i,"morphTargetBaseInfluence",R),m.getUniforms().setValue(i,"morphTargetInfluences",d)}m.getUniforms().setValue(i,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:c}}function K2(i,t,n,s,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(n.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,i.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const Z2={[KS]:"LINEAR_TONE_MAPPING",[ZS]:"REINHARD_TONE_MAPPING",[QS]:"CINEON_TONE_MAPPING",[JS]:"ACES_FILMIC_TONE_MAPPING",[tM]:"AGX_TONE_MAPPING",[eM]:"NEUTRAL_TONE_MAPPING",[$S]:"CUSTOM_TONE_MAPPING"};function Q2(i,t,n,s,o){const c=new la(t,n,{type:i,depthBuffer:s,stencilBuffer:o,depthTexture:s?new yo(t,n):void 0}),u=new la(t,n,{type:Ga,depthBuffer:!1,stencilBuffer:!1}),h=new Yi;h.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Li([0,2,0,0,2,0],2));const m=new jA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ha(h,m),g=new bM(-1,1,1,-1,0,1);let _=null,v=null,x=!1,b,R=null,S=[],y=!1;this.setSize=function(A,C){c.setSize(A,C),u.setSize(A,C);for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(A,C)}},this.setEffects=function(A){S=A,y=S.length>0&&S[0].isRenderPass===!0;const C=c.width,N=c.height;for(let F=0;F<S.length;F++){const L=S[F];L.setSize&&L.setSize(C,N)}},this.begin=function(A,C){if(x||A.toneMapping===oa&&S.length===0)return!1;if(R=C,C!==null){const N=C.width,F=C.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return y===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=oa,!0},this.hasRenderPass=function(){return y},this.end=function(A,C){A.toneMapping=b,x=!0;let N=c,F=u;for(let L=0;L<S.length;L++){const I=S[L];if(I.enabled!==!1&&(I.render(A,F,N,C),I.needsSwap!==!1)){const E=N;N=F,F=E}}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,m.defines={},be.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const L=Z2[v];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(R),A.render(d,g),R=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const RM=new Kn,ym=new yo(1,1),CM=new fM,wM=new SA,DM=new xM,fy=[],hy=[],dy=new Float32Array(16),py=new Float32Array(9),my=new Float32Array(4);function To(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=fy[o];if(c===void 0&&(c=new Float32Array(o),fy[o]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,i[u].toArray(c,h)}return c}function An(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function Rn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function yf(i,t){let n=hy[t];n===void 0&&(n=new Int32Array(t),hy[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function J2(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function $2(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2fv(this.addr,t),Rn(n,t)}}function tw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;i.uniform3fv(this.addr,t),Rn(n,t)}}function ew(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4fv(this.addr,t),Rn(n,t)}}function nw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,s))return;my.set(s),i.uniformMatrix2fv(this.addr,!1,my),Rn(n,s)}}function iw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,s))return;py.set(s),i.uniformMatrix3fv(this.addr,!1,py),Rn(n,s)}}function aw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,s))return;dy.set(s),i.uniformMatrix4fv(this.addr,!1,dy),Rn(n,s)}}function sw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function rw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2iv(this.addr,t),Rn(n,t)}}function ow(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;i.uniform3iv(this.addr,t),Rn(n,t)}}function lw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4iv(this.addr,t),Rn(n,t)}}function cw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function uw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2uiv(this.addr,t),Rn(n,t)}}function fw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;i.uniform3uiv(this.addr,t),Rn(n,t)}}function hw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4uiv(this.addr,t),Rn(n,t)}}function dw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(ym.compareFunction=n.isReversedDepthBuffer()?eg:tg,c=ym):c=RM,n.setTexture2D(t||c,o)}function pw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||wM,o)}function mw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||DM,o)}function gw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||CM,o)}function vw(i){switch(i){case 5126:return J2;case 35664:return $2;case 35665:return tw;case 35666:return ew;case 35674:return nw;case 35675:return iw;case 35676:return aw;case 5124:case 35670:return sw;case 35667:case 35671:return rw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return fw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function _w(i,t){i.uniform1fv(this.addr,t)}function xw(i,t){const n=To(t,this.size,2);i.uniform2fv(this.addr,n)}function yw(i,t){const n=To(t,this.size,3);i.uniform3fv(this.addr,n)}function Sw(i,t){const n=To(t,this.size,4);i.uniform4fv(this.addr,n)}function Mw(i,t){const n=To(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function bw(i,t){const n=To(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function Ew(i,t){const n=To(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function Tw(i,t){i.uniform1iv(this.addr,t)}function Aw(i,t){i.uniform2iv(this.addr,t)}function Rw(i,t){i.uniform3iv(this.addr,t)}function Cw(i,t){i.uniform4iv(this.addr,t)}function ww(i,t){i.uniform1uiv(this.addr,t)}function Dw(i,t){i.uniform2uiv(this.addr,t)}function Nw(i,t){i.uniform3uiv(this.addr,t)}function Uw(i,t){i.uniform4uiv(this.addr,t)}function Lw(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),Rn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=ym:u=RM;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function Pw(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),Rn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||wM,c[u])}function Ow(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),Rn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||DM,c[u])}function Iw(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),Rn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||CM,c[u])}function Bw(i){switch(i){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return bw;case 35676:return Ew;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Rw;case 35669:case 35673:return Cw;case 5125:return ww;case 36294:return Dw;case 36295:return Nw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Iw}}class Fw{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=vw(n.type)}}class zw{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Bw(n.type)}}class Vw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const hp=/(\w+)(\])?(\[|\.)?/g;function gy(i,t){i.seq.push(t),i.map[t.id]=t}function Hw(i,t,n){const s=i.name,o=s.length;for(hp.lastIndex=0;;){const c=hp.exec(s),u=hp.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){gy(n,d===void 0?new Fw(h,i,t):new zw(h,i,t));break}else{let _=n.map[h];_===void 0&&(_=new Vw(h),gy(n,_)),n=_}}}class ku{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);Hw(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function vy(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const Gw=37297;let kw=0;function Xw(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}const _y=new oe;function jw(i){be._getMatrix(_y,be.workingColorSpace,i);const t=`mat3( ${_y.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(i)){case ef:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xy(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Xw(i.getShaderSource(t),h)}else return c}function Ww(i,t){const n=jw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qw={[KS]:"Linear",[ZS]:"Reinhard",[QS]:"Cineon",[JS]:"ACESFilmic",[tM]:"AgX",[eM]:"Neutral",[$S]:"Custom"};function Yw(i,t){const n=qw[t];return n===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uu=new tt;function Kw(){be.getLuminanceCoefficients(Uu);const i=Uu.x.toFixed(4),t=Uu.y.toFixed(4),n=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function Qw(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function Jw(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:h}}return n}function Ul(i){return i!==""}function yy(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sy(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sm(i){return i.replace($w,e3)}const t3=new Map;function e3(i,t){let n=he[t];if(n===void 0){const s=t3.get(t);if(s!==void 0)n=he[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Sm(n)}const n3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function My(i){return i.replace(n3,i3)}function i3(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function by(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const a3={[Fu]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function s3(i){return a3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r3={[pr]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[gf]:"ENVMAP_TYPE_CUBE_UV"};function o3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const l3={[xo]:"ENVMAP_MODE_REFRACTION"};function c3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":l3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u3={[YS]:"ENVMAP_BLENDING_MULTIPLY",[tA]:"ENVMAP_BLENDING_MIX",[eA]:"ENVMAP_BLENDING_ADD"};function f3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u3[i.combine]||"ENVMAP_BLENDING_NONE"}function h3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function d3(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=s3(n),d=o3(n),g=c3(n),_=f3(n),v=h3(n),x=Zw(n),b=Qw(c),R=o.createProgram();let S,y,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ul).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ul).join(`
`),y.length>0&&(y+=`
`)):(S=[by(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),y=[by(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?he.tonemapping_pars_fragment:"",n.toneMapping!==oa?Yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Ww("linearToOutputTexel",n.outputColorSpace),Kw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ul).join(`
`)),u=Sm(u),u=yy(u,n),u=Sy(u,n),h=Sm(h),h=yy(h,n),h=Sy(h,n),u=My(u),h=My(h),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=A+S+u,N=A+y+h,F=vy(o,o.VERTEX_SHADER,C),L=vy(o,o.FRAGMENT_SHADER,N);o.attachShader(R,F),o.attachShader(R,L),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function I(z){if(i.debug.checkShaderErrors){const Y=o.getProgramInfoLog(R)||"",ct=o.getShaderInfoLog(F)||"",ht=o.getShaderInfoLog(L)||"",W=Y.trim(),O=ct.trim(),G=ht.trim();let $=!0,ft=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,F,L);else{const xt=xy(o,F,"vertex"),B=xy(o,L,"fragment");Te("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+xt+`
`+B)}else W!==""?ie("WebGLProgram: Program Info Log:",W):(O===""||G==="")&&(ft=!1);ft&&(z.diagnostics={runnable:$,programLog:W,vertexShader:{log:O,prefix:S},fragmentShader:{log:G,prefix:y}})}o.deleteShader(F),o.deleteShader(L),E=new ku(o,R),P=Jw(o,R)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(R,Gw)),V},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kw++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=L,this}let p3=0;class m3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new g3(t),n.set(t,s)),s}}class g3{constructor(t){this.id=p3++,this.code=t,this.usedTimes=0}}function v3(i){return i===mr||i===Ju||i===$u}function _3(i,t,n,s,o,c){const u=new hM,h=new m3,m=new Set,d=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,P,V,z,Y,ct){const ht=z.fog,W=Y.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=t.get(E.envMap||O,G),ft=$&&$.mapping===gf?$.image.height:null,xt=x[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&ie("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=B!==void 0?B.length:0;let yt=0;W.morphAttributes.position!==void 0&&(yt=1),W.morphAttributes.normal!==void 0&&(yt=2),W.morphAttributes.color!==void 0&&(yt=3);let At,Dt,ot,St;if(xt){const ne=ia[xt];At=ne.vertexShader,Dt=ne.fragmentShader}else At=E.vertexShader,Dt=E.fragmentShader,h.update(E),ot=h.getVertexShaderID(E),St=h.getFragmentShaderID(E);const Et=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),ee=Y.isInstancedMesh===!0,$t=Y.isBatchedMesh===!0,je=!!E.map,de=!!E.matcap,xe=!!$,Le=!!E.aoMap,ue=!!E.lightMap,cn=!!E.bumpMap,Ke=!!E.normalMap,Dn=!!E.displacementMap,q=!!E.emissiveMap,an=!!E.metalnessMap,pe=!!E.roughnessMap,He=E.anisotropy>0,Rt=E.clearcoat>0,$e=E.dispersion>0,U=E.iridescence>0,T=E.sheen>0,J=E.transmission>0,vt=He&&!!E.anisotropyMap,bt=Rt&&!!E.clearcoatMap,Ct=Rt&&!!E.clearcoatNormalMap,Lt=Rt&&!!E.clearcoatRoughnessMap,ut=U&&!!E.iridescenceMap,dt=U&&!!E.iridescenceThicknessMap,Pt=T&&!!E.sheenColorMap,Ot=T&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,wt=!!E.specularColorMap,ae=!!E.specularIntensityMap,se=J&&!!E.transmissionMap,me=J&&!!E.thicknessMap,X=!!E.gradientMap,Tt=!!E.alphaMap,mt=E.alphaTest>0,zt=!!E.alphaHash,Ut=!!E.extensions;let Mt=oa;E.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Yt={shaderID:xt,shaderType:E.type,shaderName:E.name,vertexShader:At,fragmentShader:Dt,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:$t,batchingColor:$t&&Y._colorsTexture!==null,instancing:ee,instancingColor:ee&&Y.instanceColor!==null,instancingMorph:ee&&Y.morphTexture!==null,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:je,matcap:de,envMap:xe,envMapMode:xe&&$.mapping,envMapCubeUVHeight:ft,aoMap:Le,lightMap:ue,bumpMap:cn,normalMap:Ke,displacementMap:Dn,emissiveMap:q,normalMapObjectSpace:Ke&&E.normalMapType===aA,normalMapTangentSpace:Ke&&E.normalMapType===Ux,packedNormalMap:Ke&&E.normalMapType===Ux&&v3(E.normalMap.format),metalnessMap:an,roughnessMap:pe,anisotropy:He,anisotropyMap:vt,clearcoat:Rt,clearcoatMap:bt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Lt,dispersion:$e,iridescence:U,iridescenceMap:ut,iridescenceThicknessMap:dt,sheen:T,sheenColorMap:Pt,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:wt,specularIntensityMap:ae,transmission:J,transmissionMap:se,thicknessMap:me,gradientMap:X,opaque:E.transparent===!1&&E.blending===go&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:mt,alphaHash:zt,combine:E.combine,mapUv:je&&b(E.map.channel),aoMapUv:Le&&b(E.aoMap.channel),lightMapUv:ue&&b(E.lightMap.channel),bumpMapUv:cn&&b(E.bumpMap.channel),normalMapUv:Ke&&b(E.normalMap.channel),displacementMapUv:Dn&&b(E.displacementMap.channel),emissiveMapUv:q&&b(E.emissiveMap.channel),metalnessMapUv:an&&b(E.metalnessMap.channel),roughnessMapUv:pe&&b(E.roughnessMap.channel),anisotropyMapUv:vt&&b(E.anisotropyMap.channel),clearcoatMapUv:bt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(E.sheenRoughnessMap.channel),specularMapUv:Nt&&b(E.specularMap.channel),specularColorMapUv:wt&&b(E.specularColorMap.channel),specularIntensityMapUv:ae&&b(E.specularIntensityMap.channel),transmissionMapUv:se&&b(E.transmissionMap.channel),thicknessMapUv:me&&b(E.thicknessMap.channel),alphaMapUv:Tt&&b(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ke||He),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(je||Tt),fog:!!ht,useFog:E.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Ke===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ht,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:yt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&be.getTransfer(E.map.colorSpace)===ze,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&be.getTransfer(E.emissiveMap.colorSpace)===ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fa,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function S(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)P.push(V),P.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(y(P,E),A(P,E),P.push(i.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function y(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function A(E,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),E.push(u.mask)}function C(E){const P=x[E.type];let V;if(P){const z=ia[P];V=GA.clone(z.uniforms)}else V=E.uniforms;return V}function N(E,P){let V=g.get(P);return V!==void 0?++V.usedTimes:(V=new d3(i,P,E,o),d.push(V),g.set(P,V)),V}function F(E){if(--E.usedTimes===0){const P=d.indexOf(E);d[P]=d[d.length-1],d.pop(),g.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function I(){h.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:C,acquireProgram:N,releaseProgram:F,releaseShaderCache:L,programs:d,dispose:I}}function x3(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function o(u,h,m){i.get(u)[h]=m}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function y3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ty(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,R,S,y){let A=i[t];return A===void 0?(A={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:S,group:y},i[t]=A):(A.id=v.id,A.object=v,A.geometry=x,A.material=b,A.materialVariant=u(v),A.groupOrder=R,A.renderOrder=v.renderOrder,A.z=S,A.group=y),t++,A}function m(v,x,b,R,S,y){const A=h(v,x,b,R,S,y);b.transmission>0?s.push(A):b.transparent===!0?o.push(A):n.push(A)}function d(v,x,b,R,S,y){const A=h(v,x,b,R,S,y);b.transmission>0?s.unshift(A):b.transparent===!0?o.unshift(A):n.unshift(A)}function g(v,x){n.length>1&&n.sort(v||y3),s.length>1&&s.sort(x||Ey),o.length>1&&o.sort(x||Ey)}function _(){for(let v=t,x=i.length;v<x;v++){const b=i[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function S3(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new Ty,i.set(s,[u])):o>=c.length?(u=new Ty,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function M3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new tt,color:new Ve};break;case"SpotLight":n={position:new tt,direction:new tt,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new tt,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new tt,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=n,n}}}function b3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let E3=0;function T3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A3(i){const t=new M3,n=b3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new tt);const o=new tt,c=new Sn,u=new Sn;function h(d){let g=0,_=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let x=0,b=0,R=0,S=0,y=0,A=0,C=0,N=0,F=0,L=0,I=0;d.sort(T3);for(let P=0,V=d.length;P<V;P++){const z=d[P],Y=z.color,ct=z.intensity,ht=z.distance;let W=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===mr?W=z.shadow.map.texture:W=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=Y.r*ct,_+=Y.g*ct,v+=Y.b*ct;else if(z.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(z.sh.coefficients[O],ct);I++}else if(z.isDirectionalLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const G=z.shadow,$=n.get(z);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.directionalShadow[x]=$,s.directionalShadowMap[x]=W,s.directionalShadowMatrix[x]=z.shadow.matrix,A++}s.directional[x]=O,x++}else if(z.isSpotLight){const O=t.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(Y).multiplyScalar(ct),O.distance=ht,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,s.spot[R]=O;const G=z.shadow;if(z.map&&(s.spotLightMap[F]=z.map,F++,G.updateMatrices(z),z.castShadow&&L++),s.spotLightMatrix[R]=G.matrix,z.castShadow){const $=n.get(z);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.spotShadow[R]=$,s.spotShadowMap[R]=W,N++}R++}else if(z.isRectAreaLight){const O=t.get(z);O.color.copy(Y).multiplyScalar(ct),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=O,S++}else if(z.isPointLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const G=z.shadow,$=n.get(z);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,s.pointShadow[b]=$,s.pointShadowMap[b]=W,s.pointShadowMatrix[b]=z.shadow.matrix,C++}s.point[b]=O,b++}else if(z.isHemisphereLight){const O=t.get(z);O.skyColor.copy(z.color).multiplyScalar(ct),O.groundColor.copy(z.groundColor).multiplyScalar(ct),s.hemi[y]=O,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==x||E.pointLength!==b||E.spotLength!==R||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==A||E.numPointShadows!==C||E.numSpotShadows!==N||E.numSpotMaps!==F||E.numLightProbes!==I)&&(s.directional.length=x,s.spot.length=R,s.rectArea.length=S,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=N+F-L,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=I,E.directionalLength=x,E.pointLength=b,E.spotLength=R,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=A,E.numPointShadows=C,E.numSpotShadows=N,E.numSpotMaps=F,E.numLightProbes=I,s.version=E3++)}function m(d,g){let _=0,v=0,x=0,b=0,R=0;const S=g.matrixWorldInverse;for(let y=0,A=d.length;y<A;y++){const C=d[y];if(C.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),_++}else if(C.isSpotLight){const N=s.spot[x];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),x++}else if(C.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),u.identity(),c.copy(C.matrixWorld),c.premultiply(S),u.extractRotation(c),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),b++}else if(C.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:s}}function Ay(i){const t=new A3(i),n=[],s=[],o=[];function c(v){_.camera=v,n.length=0,s.length=0,o.length=0}function u(v){n.push(v)}function h(v){s.push(v)}function m(v){o.push(v)}function d(){t.setup(n)}function g(v){t.setupView(n,v)}const _={lightsArray:n,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function R3(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Ay(i),t.set(o,[h])):c>=u.length?(h=new Ay(i),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const C3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D3=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],N3=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],Ry=new Sn,wl=new tt,dp=new tt;function U3(i,t,n){let s=new vM;const o=new Ne,c=new Ne,u=new dn,h=new WA,m=new qA,d={},g=n.maxTextureSize,_={[Ds]:ii,[ii]:Ds,[Fa]:Fa},v=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:C3,fragmentShader:w3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Yi;b.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ha(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let y=this.type;this.render=function(L,I,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===O1&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fu);const P=i.getRenderTarget(),V=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Va),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ct=y!==this.type;ct&&I.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(W=>W.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,W=L.length;ht<W;ht++){const O=L[ht],G=O.shadow;if(G===void 0){ie("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const $=G.getFrameExtents();o.multiply($),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,G.mapSize.y=c.y));const ft=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ft,G.map===null||ct===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Nl){if(O.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new la(o.x,o.y,{format:mr,type:Ga,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new yo(o.x,o.y,sa),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=ka,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn}else O.isPointLight?(G.map=new AM(o.x),G.map.depthTexture=new VA(o.x,fa)):(G.map=new la(o.x,o.y),G.map.depthTexture=new yo(o.x,o.y,fa)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=ka,this.type===Fu?(G.map.depthTexture.compareFunction=ft?eg:tg,G.map.depthTexture.minFilter=Xn,G.map.depthTexture.magFilter=Xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn);G.camera.updateProjectionMatrix()}const xt=G.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<xt;B++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,B),i.clear();else{B===0&&(i.setRenderTarget(G.map),i.clear());const Q=G.getViewport(B);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Y.viewport(u)}if(O.isPointLight){const Q=G.camera,yt=G.matrix,At=O.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),wl.setFromMatrixPosition(O.matrixWorld),Q.position.copy(wl),dp.copy(Q.position),dp.add(D3[B]),Q.up.copy(N3[B]),Q.lookAt(dp),Q.updateMatrixWorld(),yt.makeTranslation(-wl.x,-wl.y,-wl.z),Ry.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ry,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(O);s=G.getFrustum(),N(I,E,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Nl&&A(G,E),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(P,V,z)};function A(L,I){const E=t.update(R);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new la(o.x,o.y,{format:mr,type:Ga})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(I,null,E,v,R,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(I,null,E,x,R,null)}function C(L,I,E,P){let V=null;const z=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)V=z;else if(V=E.isPointLight===!0?m:h,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=V.uuid,ct=I.uuid;let ht=d[Y];ht===void 0&&(ht={},d[Y]=ht);let W=ht[ct];W===void 0&&(W=V.clone(),ht[ct]=W,I.addEventListener("dispose",F)),V=W}if(V.visible=I.visible,V.wireframe=I.wireframe,P===Nl?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:_[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Y=i.properties.get(V);Y.light=E}return V}function N(L,I,E,P,V){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Nl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ct=t.update(L),ht=L.material;if(Array.isArray(ht)){const W=ct.groups;for(let O=0,G=W.length;O<G;O++){const $=W[O],ft=ht[$.materialIndex];if(ft&&ft.visible){const xt=C(L,ft,P,V);L.onBeforeShadow(i,L,I,E,ct,xt,$),i.renderBufferDirect(E,null,ct,xt,L,$),L.onAfterShadow(i,L,I,E,ct,xt,$)}}}else if(ht.visible){const W=C(L,ht,P,V);L.onBeforeShadow(i,L,I,E,ct,W,null),i.renderBufferDirect(E,null,ct,W,L,null),L.onAfterShadow(i,L,I,E,ct,W,null)}}const Y=L.children;for(let ct=0,ht=Y.length;ct<ht;ct++)N(Y[ct],I,E,P,V)}function F(L){L.target.removeEventListener("dispose",F);for(const E in d){const P=d[E],V=L.target.uuid;V in P&&(P[V].dispose(),delete P[V])}}}function L3(i,t){function n(){let X=!1;const Tt=new dn;let mt=null;const zt=new dn(0,0,0,0);return{setMask:function(Ut){mt!==Ut&&!X&&(i.colorMask(Ut,Ut,Ut,Ut),mt=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,Mt,Yt,ne,sn){sn===!0&&(Ut*=ne,Mt*=ne,Yt*=ne),Tt.set(Ut,Mt,Yt,ne),zt.equals(Tt)===!1&&(i.clearColor(Ut,Mt,Yt,ne),zt.copy(Tt))},reset:function(){X=!1,mt=null,zt.set(-1,0,0,0)}}}function s(){let X=!1,Tt=!1,mt=null,zt=null,Ut=null;return{setReversed:function(Mt){if(Tt!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Tt=Mt;const ne=Ut;Ut=null,this.setClear(ne)}},getReversed:function(){return Tt},setTest:function(Mt){Mt?Et(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(Mt){mt!==Mt&&!X&&(i.depthMask(Mt),mt=Mt)},setFunc:function(Mt){if(Tt&&(Mt=pA[Mt]),zt!==Mt){switch(Mt){case Up:i.depthFunc(i.NEVER);break;case Lp:i.depthFunc(i.ALWAYS);break;case Pp:i.depthFunc(i.LESS);break;case _o:i.depthFunc(i.LEQUAL);break;case Op:i.depthFunc(i.EQUAL);break;case Ip:i.depthFunc(i.GEQUAL);break;case Bp:i.depthFunc(i.GREATER);break;case Fp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=Mt}},setLocked:function(Mt){X=Mt},setClear:function(Mt){Ut!==Mt&&(Ut=Mt,Tt&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){X=!1,mt=null,zt=null,Ut=null,Tt=!1}}}function o(){let X=!1,Tt=null,mt=null,zt=null,Ut=null,Mt=null,Yt=null,ne=null,sn=null;return{setTest:function(we){X||(we?Et(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(we){Tt!==we&&!X&&(i.stencilMask(we),Tt=we)},setFunc:function(we,xi,si){(mt!==we||zt!==xi||Ut!==si)&&(i.stencilFunc(we,xi,si),mt=we,zt=xi,Ut=si)},setOp:function(we,xi,si){(Mt!==we||Yt!==xi||ne!==si)&&(i.stencilOp(we,xi,si),Mt=we,Yt=xi,ne=si)},setLocked:function(we){X=we},setClear:function(we){sn!==we&&(i.clearStencil(we),sn=we)},reset:function(){X=!1,Tt=null,mt=null,zt=null,Ut=null,Mt=null,Yt=null,ne=null,sn=null}}}const c=new n,u=new s,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],R=null,S=!1,y=null,A=null,C=null,N=null,F=null,L=null,I=null,E=new Ve(0,0,0),P=0,V=!1,z=null,Y=null,ct=null,ht=null,W=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const ft=i.getParameter(i.VERSION);ft.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ft)[1]),G=$>=1):ft.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),G=$>=2);let xt=null,B={};const Q=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),At=new dn().fromArray(Q),Dt=new dn().fromArray(yt);function ot(X,Tt,mt,zt){const Ut=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(X,Mt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<mt;Yt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Tt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return Mt}const St={};St[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Et(i.DEPTH_TEST),u.setFunc(_o),cn(!1),Ke(Cx),Et(i.CULL_FACE),Le(Va);function Et(X){g[X]!==!0&&(i.enable(X),g[X]=!0)}function Ht(X){g[X]!==!1&&(i.disable(X),g[X]=!1)}function ee(X,Tt){return v[X]!==Tt?(i.bindFramebuffer(X,Tt),v[X]=Tt,X===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Tt),X===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function $t(X,Tt){let mt=b,zt=!1;if(X){mt=x.get(Tt),mt===void 0&&(mt=[],x.set(Tt,mt));const Ut=X.textures;if(mt.length!==Ut.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Yt=Ut.length;Mt<Yt;Mt++)mt[Mt]=i.COLOR_ATTACHMENT0+Mt;mt.length=Ut.length,zt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(mt)}function je(X){return R!==X?(i.useProgram(X),R=X,!0):!1}const de={[rr]:i.FUNC_ADD,[B1]:i.FUNC_SUBTRACT,[F1]:i.FUNC_REVERSE_SUBTRACT};de[z1]=i.MIN,de[V1]=i.MAX;const xe={[H1]:i.ZERO,[G1]:i.ONE,[k1]:i.SRC_COLOR,[Dp]:i.SRC_ALPHA,[K1]:i.SRC_ALPHA_SATURATE,[q1]:i.DST_COLOR,[j1]:i.DST_ALPHA,[X1]:i.ONE_MINUS_SRC_COLOR,[Np]:i.ONE_MINUS_SRC_ALPHA,[Y1]:i.ONE_MINUS_DST_COLOR,[W1]:i.ONE_MINUS_DST_ALPHA,[Z1]:i.CONSTANT_COLOR,[Q1]:i.ONE_MINUS_CONSTANT_COLOR,[J1]:i.CONSTANT_ALPHA,[$1]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(X,Tt,mt,zt,Ut,Mt,Yt,ne,sn,we){if(X===Va){S===!0&&(Ht(i.BLEND),S=!1);return}if(S===!1&&(Et(i.BLEND),S=!0),X!==I1){if(X!==y||we!==V){if((A!==rr||F!==rr)&&(i.blendEquation(i.FUNC_ADD),A=rr,F=rr),we)switch(X){case go:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFunc(i.ONE,i.ONE);break;case Dx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Te("WebGLState: Invalid blending: ",X);break}else switch(X){case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dx:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nx:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",X);break}C=null,N=null,L=null,I=null,E.set(0,0,0),P=0,y=X,V=we}return}Ut=Ut||Tt,Mt=Mt||mt,Yt=Yt||zt,(Tt!==A||Ut!==F)&&(i.blendEquationSeparate(de[Tt],de[Ut]),A=Tt,F=Ut),(mt!==C||zt!==N||Mt!==L||Yt!==I)&&(i.blendFuncSeparate(xe[mt],xe[zt],xe[Mt],xe[Yt]),C=mt,N=zt,L=Mt,I=Yt),(ne.equals(E)===!1||sn!==P)&&(i.blendColor(ne.r,ne.g,ne.b,sn),E.copy(ne),P=sn),y=X,V=!1}function ue(X,Tt){X.side===Fa?Ht(i.CULL_FACE):Et(i.CULL_FACE);let mt=X.side===ii;Tt&&(mt=!mt),cn(mt),X.blending===go&&X.transparent===!1?Le(Va):Le(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;h.setTest(zt),zt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function cn(X){z!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),z=X)}function Ke(X){X!==L1?(Et(i.CULL_FACE),X!==Y&&(X===Cx?i.cullFace(i.BACK):X===P1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),Y=X}function Dn(X){X!==ct&&(G&&i.lineWidth(X),ct=X)}function q(X,Tt,mt){X?(Et(i.POLYGON_OFFSET_FILL),(ht!==Tt||W!==mt)&&(ht=Tt,W=mt,u.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,mt))):Ht(i.POLYGON_OFFSET_FILL)}function an(X){X?Et(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function pe(X){X===void 0&&(X=i.TEXTURE0+O-1),xt!==X&&(i.activeTexture(X),xt=X)}function He(X,Tt,mt){mt===void 0&&(xt===null?mt=i.TEXTURE0+O-1:mt=xt);let zt=B[mt];zt===void 0&&(zt={type:void 0,texture:void 0},B[mt]=zt),(zt.type!==X||zt.texture!==Tt)&&(xt!==mt&&(i.activeTexture(mt),xt=mt),i.bindTexture(X,Tt||St[X]),zt.type=X,zt.texture=Tt)}function Rt(){const X=B[xt];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function T(){try{i.texSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function J(){try{i.texSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function Ct(){try{i.texStorage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function Lt(){try{i.texStorage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function ut(){try{i.texImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function dt(){try{i.texImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function Pt(X){return _[X]!==void 0?_[X]:i.getParameter(X)}function Ot(X,Tt){_[X]!==Tt&&(i.pixelStorei(X,Tt),_[X]=Tt)}function Nt(X){At.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),At.copy(X))}function wt(X){Dt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Dt.copy(X))}function ae(X,Tt){let mt=d.get(Tt);mt===void 0&&(mt=new WeakMap,d.set(Tt,mt));let zt=mt.get(X);zt===void 0&&(zt=i.getUniformBlockIndex(Tt,X.name),mt.set(X,zt))}function se(X,Tt){const zt=d.get(Tt).get(X);m.get(Tt)!==zt&&(i.uniformBlockBinding(Tt,zt,X.__bindingPointIndex),m.set(Tt,zt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},_={},xt=null,B={},v={},x=new WeakMap,b=[],R=null,S=!1,y=null,A=null,C=null,N=null,F=null,L=null,I=null,E=new Ve(0,0,0),P=0,V=!1,z=null,Y=null,ct=null,ht=null,W=null,At.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Et,disable:Ht,bindFramebuffer:ee,drawBuffers:$t,useProgram:je,setBlending:Le,setMaterial:ue,setFlipSided:cn,setCullFace:Ke,setLineWidth:Dn,setPolygonOffset:q,setScissorTest:an,activeTexture:pe,bindTexture:He,unbindTexture:Rt,compressedTexImage2D:$e,compressedTexImage3D:U,texImage2D:ut,texImage3D:dt,pixelStorei:Ot,getParameter:Pt,updateUBOMapping:ae,uniformBlockBinding:se,texStorage2D:Ct,texStorage3D:Lt,texSubImage2D:T,texSubImage3D:J,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Nt,viewport:wt,reset:me}}function P3(i,t,n,s,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ne,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,T){return b?new OffscreenCanvas(U,T):af("canvas")}function S(U,T,J){let vt=1;const bt=$e(U);if((bt.width>J||bt.height>J)&&(vt=J/Math.max(bt.width,bt.height)),vt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ct=Math.floor(vt*bt.width),Lt=Math.floor(vt*bt.height);v===void 0&&(v=R(Ct,Lt));const ut=T?R(Ct,Lt):v;return ut.width=Ct,ut.height=Lt,ut.getContext("2d").drawImage(U,0,0,Ct,Lt),ie("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Ct+"x"+Lt+")."),ut}else return"data"in U&&ie("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),U;return U}function y(U){return U.generateMipmaps}function A(U){i.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(U,T,J,vt,bt,Ct=!1){if(U!==null){if(i[U]!==void 0)return i[U];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Lt;vt&&(Lt=t.get("EXT_texture_norm16"),Lt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=T;if(T===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8),J===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.R16_EXT),J===i.SHORT&&Lt&&(ut=Lt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.R8UI),J===i.UNSIGNED_SHORT&&(ut=i.R16UI),J===i.UNSIGNED_INT&&(ut=i.R32UI),J===i.BYTE&&(ut=i.R8I),J===i.SHORT&&(ut=i.R16I),J===i.INT&&(ut=i.R32I)),T===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8),J===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RG16_EXT),J===i.SHORT&&Lt&&(ut=Lt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RG8UI),J===i.UNSIGNED_SHORT&&(ut=i.RG16UI),J===i.UNSIGNED_INT&&(ut=i.RG32UI),J===i.BYTE&&(ut=i.RG8I),J===i.SHORT&&(ut=i.RG16I),J===i.INT&&(ut=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),J===i.UNSIGNED_INT&&(ut=i.RGB32UI),J===i.BYTE&&(ut=i.RGB8I),J===i.SHORT&&(ut=i.RGB16I),J===i.INT&&(ut=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),J===i.UNSIGNED_INT&&(ut=i.RGBA32UI),J===i.BYTE&&(ut=i.RGBA8I),J===i.SHORT&&(ut=i.RGBA16I),J===i.INT&&(ut=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGB16_EXT),J===i.SHORT&&Lt&&(ut=Lt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),T===i.RGBA){const dt=Ct?ef:be.getTransfer(bt);J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=dt===ze?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGBA16_EXT),J===i.SHORT&&Lt&&(ut=Lt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function F(U,T){let J;return U?T===null||T===fa||T===zl?J=i.DEPTH24_STENCIL8:T===sa?J=i.DEPTH32F_STENCIL8:T===Fl&&(J=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fa||T===zl?J=i.DEPTH_COMPONENT24:T===sa?J=i.DEPTH_COMPONENT32F:T===Fl&&(J=i.DEPTH_COMPONENT16),J}function L(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Bn&&U.minFilter!==Xn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function I(U){const T=U.target;T.removeEventListener("dispose",I),P(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(U){const T=U.target;T.removeEventListener("dispose",E),z(T)}function P(U){const T=s.get(U);if(T.__webglInit===void 0)return;const J=U.source,vt=x.get(J);if(vt){const bt=vt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&V(U),Object.keys(vt).length===0&&x.delete(J)}s.remove(U)}function V(U){const T=s.get(U);i.deleteTexture(T.__webglTexture);const J=U.source,vt=x.get(J);delete vt[T.__cacheKey],u.memory.textures--}function z(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let bt=0;bt<T.__webglFramebuffer[vt].length;bt++)i.deleteFramebuffer(T.__webglFramebuffer[vt][bt]);else i.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)i.deleteFramebuffer(T.__webglFramebuffer[vt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=U.textures;for(let vt=0,bt=J.length;vt<bt;vt++){const Ct=s.get(J[vt]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),u.memory.textures--),s.remove(J[vt])}s.remove(U)}let Y=0;function ct(){Y=0}function ht(){return Y}function W(U){Y=U}function O(){const U=Y;return U>=o.maxTextures&&ie("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Y+=1,U}function G(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $(U,T){const J=s.get(U);if(U.isVideoTexture&&He(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const vt=U.image;if(vt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,U,T);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function ft(U,T){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ht(J,U,T);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function xt(U,T){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ht(J,U,T);return}n.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function B(U,T){const J=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){ee(J,U,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const Q={[zp]:i.REPEAT,[za]:i.CLAMP_TO_EDGE,[Vp]:i.MIRRORED_REPEAT},yt={[Bn]:i.NEAREST,[nA]:i.NEAREST_MIPMAP_NEAREST,[lu]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[Bd]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},At={[sA]:i.NEVER,[uA]:i.ALWAYS,[rA]:i.LESS,[tg]:i.LEQUAL,[oA]:i.EQUAL,[eg]:i.GEQUAL,[lA]:i.GREATER,[cA]:i.NOTEQUAL};function Dt(U,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xn||T.magFilter===Bd||T.magFilter===lu||T.magFilter===lr||T.minFilter===Xn||T.minFilter===Bd||T.minFilter===lu||T.minFilter===lr)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Q[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Q[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Q[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,yt[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,At[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bn||T.minFilter!==lu&&T.minFilter!==lr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ot(U,T){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",I));const vt=T.source;let bt=x.get(vt);bt===void 0&&(bt={},x.set(vt,bt));const Ct=G(T);if(Ct!==U.__cacheKey){bt[Ct]===void 0&&(bt[Ct]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,J=!0),bt[Ct].usedTimes++;const Lt=bt[U.__cacheKey];Lt!==void 0&&(bt[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&V(T)),U.__cacheKey=Ct,U.__webglTexture=bt[Ct].texture}return J}function St(U,T,J){return Math.floor(Math.floor(U/J)/T)}function Et(U,T,J,vt){const Ct=U.updateRanges;if(Ct.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,vt,T.data);else{Ct.sort((Ot,Nt)=>Ot.start-Nt.start);let Lt=0;for(let Ot=1;Ot<Ct.length;Ot++){const Nt=Ct[Lt],wt=Ct[Ot],ae=Nt.start+Nt.count,se=St(wt.start,T.width,4),me=St(Nt.start,T.width,4);wt.start<=ae+1&&se===me&&St(wt.start+wt.count-1,T.width,4)===se?Nt.count=Math.max(Nt.count,wt.start+wt.count-Nt.start):(++Lt,Ct[Lt]=wt)}Ct.length=Lt+1;const ut=n.getParameter(i.UNPACK_ROW_LENGTH),dt=n.getParameter(i.UNPACK_SKIP_PIXELS),Pt=n.getParameter(i.UNPACK_SKIP_ROWS);n.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ot=0,Nt=Ct.length;Ot<Nt;Ot++){const wt=Ct[Ot],ae=Math.floor(wt.start/4),se=Math.ceil(wt.count/4),me=ae%T.width,X=Math.floor(ae/T.width),Tt=se,mt=1;n.pixelStorei(i.UNPACK_SKIP_PIXELS,me),n.pixelStorei(i.UNPACK_SKIP_ROWS,X),n.texSubImage2D(i.TEXTURE_2D,0,me,X,Tt,mt,J,vt,T.data)}U.clearUpdateRanges(),n.pixelStorei(i.UNPACK_ROW_LENGTH,ut),n.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Ht(U,T,J){let vt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=i.TEXTURE_3D);const bt=ot(U,T),Ct=T.source;n.bindTexture(vt,U.__webglTexture,i.TEXTURE0+J);const Lt=s.get(Ct);if(Ct.version!==Lt.__version||bt===!0){if(n.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const mt=be.getPrimaries(be.workingColorSpace),zt=T.colorSpace===Rs?null:be.getPrimaries(T.colorSpace),Ut=T.colorSpace===Rs||mt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;n.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}n.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let dt=S(T.image,!1,o.maxTextureSize);dt=Rt(T,dt);const Pt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type);let Nt=N(T.internalFormat,Pt,Ot,T.normalized,T.colorSpace,T.isVideoTexture);Dt(vt,T);let wt;const ae=T.mipmaps,se=T.isVideoTexture!==!0,me=Lt.__version===void 0||bt===!0,X=Ct.dataReady,Tt=L(T,dt);if(T.isDepthTexture)Nt=F(T.format===cr,T.type),me&&(se?n.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):n.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Ot,null));else if(T.isDataTexture)if(ae.length>0){se&&me&&n.texStorage2D(i.TEXTURE_2D,Tt,Nt,ae[0].width,ae[0].height);for(let mt=0,zt=ae.length;mt<zt;mt++)wt=ae[mt],se?X&&n.texSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Pt,Ot,wt.data):n.texImage2D(i.TEXTURE_2D,mt,Nt,wt.width,wt.height,0,Pt,Ot,wt.data);T.generateMipmaps=!1}else se?(me&&n.texStorage2D(i.TEXTURE_2D,Tt,Nt,dt.width,dt.height),X&&Et(T,dt,Pt,Ot)):n.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Ot,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&me&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,ae[0].width,ae[0].height,dt.depth);for(let mt=0,zt=ae.length;mt<zt;mt++)if(wt=ae[mt],T.format!==Wi)if(Pt!==null)if(se){if(X)if(T.layerUpdates.size>0){const Ut=ay(wt.width,wt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Yt=wt.data.subarray(Mt*Ut/wt.data.BYTES_PER_ELEMENT,(Mt+1)*Ut/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Mt,wt.width,wt.height,1,Pt,Yt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,wt.width,wt.height,dt.depth,Pt,wt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?X&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,wt.width,wt.height,dt.depth,Pt,Ot,wt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,wt.width,wt.height,dt.depth,0,Pt,Ot,wt.data)}else{se&&me&&n.texStorage2D(i.TEXTURE_2D,Tt,Nt,ae[0].width,ae[0].height);for(let mt=0,zt=ae.length;mt<zt;mt++)wt=ae[mt],T.format!==Wi?Pt!==null?se?X&&n.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Pt,wt.data):n.compressedTexImage2D(i.TEXTURE_2D,mt,Nt,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?X&&n.texSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Pt,Ot,wt.data):n.texImage2D(i.TEXTURE_2D,mt,Nt,wt.width,wt.height,0,Pt,Ot,wt.data)}else if(T.isDataArrayTexture)if(se){if(me&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,dt.width,dt.height,dt.depth),X)if(T.layerUpdates.size>0){const mt=ay(dt.width,dt.height,T.format,T.type);for(const zt of T.layerUpdates){const Ut=dt.data.subarray(zt*mt/dt.data.BYTES_PER_ELEMENT,(zt+1)*mt/dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,dt.width,dt.height,1,Pt,Ot,Ut)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Ot,dt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Ot,dt.data);else if(T.isData3DTexture)se?(me&&n.texStorage3D(i.TEXTURE_3D,Tt,Nt,dt.width,dt.height,dt.depth),X&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Ot,dt.data)):n.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Ot,dt.data);else if(T.isFramebufferTexture){if(me)if(se)n.texStorage2D(i.TEXTURE_2D,Tt,Nt,dt.width,dt.height);else{let mt=dt.width,zt=dt.height;for(let Ut=0;Ut<Tt;Ut++)n.texImage2D(i.TEXTURE_2D,Ut,Nt,mt,zt,0,Pt,Ot,null),mt>>=1,zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),dt.parentNode!==mt){mt.appendChild(dt),_.add(T),mt.onpaint=ne=>{const sn=ne.changedElements;for(const we of _)sn.includes(we.image)&&(we.needsUpdate=!0)},mt.requestPaint();return}const zt=0,Ut=i.RGBA,Mt=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,zt,Ut,Mt,Yt,dt),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(se&&me){const mt=$e(ae[0]);n.texStorage2D(i.TEXTURE_2D,Tt,Nt,mt.width,mt.height)}for(let mt=0,zt=ae.length;mt<zt;mt++)wt=ae[mt],se?X&&n.texSubImage2D(i.TEXTURE_2D,mt,0,0,Pt,Ot,wt):n.texImage2D(i.TEXTURE_2D,mt,Nt,Pt,Ot,wt);T.generateMipmaps=!1}else if(se){if(me){const mt=$e(dt);n.texStorage2D(i.TEXTURE_2D,Tt,Nt,mt.width,mt.height)}X&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Ot,dt)}else n.texImage2D(i.TEXTURE_2D,0,Nt,Pt,Ot,dt);y(T)&&A(vt),Lt.__version=Ct.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ee(U,T,J){if(T.image.length!==6)return;const vt=ot(U,T),bt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+J);const Ct=s.get(bt);if(bt.version!==Ct.__version||vt===!0){n.activeTexture(i.TEXTURE0+J);const Lt=be.getPrimaries(be.workingColorSpace),ut=T.colorSpace===Rs?null:be.getPrimaries(T.colorSpace),dt=T.colorSpace===Rs||Lt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;n.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let Mt=0;Mt<6;Mt++)!Pt&&!Ot?Nt[Mt]=S(T.image[Mt],!0,o.maxCubemapSize):Nt[Mt]=Ot?T.image[Mt].image:T.image[Mt],Nt[Mt]=Rt(T,Nt[Mt]);const wt=Nt[0],ae=c.convert(T.format,T.colorSpace),se=c.convert(T.type),me=N(T.internalFormat,ae,se,T.normalized,T.colorSpace),X=T.isVideoTexture!==!0,Tt=Ct.__version===void 0||vt===!0,mt=bt.dataReady;let zt=L(T,wt);Dt(i.TEXTURE_CUBE_MAP,T);let Ut;if(Pt){X&&Tt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,me,wt.width,wt.height);for(let Mt=0;Mt<6;Mt++){Ut=Nt[Mt].mipmaps;for(let Yt=0;Yt<Ut.length;Yt++){const ne=Ut[Yt];T.format!==Wi?ae!==null?X?mt&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ne.width,ne.height,ae,ne.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,me,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?mt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ne.width,ne.height,ae,se,ne.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,me,ne.width,ne.height,0,ae,se,ne.data)}}}else{if(Ut=T.mipmaps,X&&Tt){Ut.length>0&&zt++;const Mt=$e(Nt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,me,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Ot){X?mt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Nt[Mt].width,Nt[Mt].height,ae,se,Nt[Mt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,me,Nt[Mt].width,Nt[Mt].height,0,ae,se,Nt[Mt].data);for(let Yt=0;Yt<Ut.length;Yt++){const sn=Ut[Yt].image[Mt].image;X?mt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,sn.width,sn.height,ae,se,sn.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,me,sn.width,sn.height,0,ae,se,sn.data)}}else{X?mt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ae,se,Nt[Mt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,me,ae,se,Nt[Mt]);for(let Yt=0;Yt<Ut.length;Yt++){const ne=Ut[Yt];X?mt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,ae,se,ne.image[Mt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,me,ae,se,ne.image[Mt])}}}y(T)&&A(i.TEXTURE_CUBE_MAP),Ct.__version=bt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function $t(U,T,J,vt,bt,Ct){const Lt=c.convert(J.format,J.colorSpace),ut=c.convert(J.type),dt=N(J.internalFormat,Lt,ut,J.normalized,J.colorSpace),Pt=s.get(T),Ot=s.get(J);if(Ot.__renderTarget=T,!Pt.__hasExternalTextures){const Nt=Math.max(1,T.width>>Ct),wt=Math.max(1,T.height>>Ct);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?n.texImage3D(bt,Ct,dt,Nt,wt,T.depth,0,Lt,ut,null):n.texImage2D(bt,Ct,dt,Nt,wt,0,Lt,ut,null)}n.bindFramebuffer(i.FRAMEBUFFER,U),pe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,bt,Ot.__webglTexture,0,an(T)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,bt,Ot.__webglTexture,Ct),n.bindFramebuffer(i.FRAMEBUFFER,null)}function je(U,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const vt=T.depthTexture,bt=vt&&vt.isDepthTexture?vt.type:null,Ct=F(T.stencilBuffer,bt),Lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,an(T),Ct,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,an(T),Ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,U)}else{const vt=T.textures;for(let bt=0;bt<vt.length;bt++){const Ct=vt[bt],Lt=c.convert(Ct.format,Ct.colorSpace),ut=c.convert(Ct.type),dt=N(Ct.internalFormat,Lt,ut,Ct.normalized,Ct.colorSpace);pe(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,an(T),dt,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,an(T),dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(U,T,J){const vt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(T.depthTexture);if(bt.__renderTarget=T,(!bt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),bt.__webglTexture===void 0){bt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,bt.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,T.depthTexture);const Pt=c.convert(T.depthTexture.format),Ot=c.convert(T.depthTexture.type);let Nt;T.depthTexture.format===ka?Nt=i.DEPTH_COMPONENT24:T.depthTexture.format===cr&&(Nt=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Nt,T.width,T.height,0,Pt,Ot,null)}}else $(T.depthTexture,0);const Ct=bt.__webglTexture,Lt=an(T),ut=vt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,dt=T.depthTexture.format===cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ka)pe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ut,Ct,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ut,Ct,0);else if(T.depthTexture.format===cr)pe(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ut,Ct,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ut,Ct,0);else throw new Error("Unknown depthTexture format")}function xe(U){const T=s.get(U),J=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const vt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",bt)};vt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=vt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let vt=0;vt<6;vt++)de(T.__webglFramebuffer[vt],U,vt);else{const vt=U.texture.mipmaps;vt&&vt.length>0?de(T.__webglFramebuffer[0],U,0):de(T.__webglFramebuffer,U,0)}else if(J){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=i.createRenderbuffer(),je(T.__webglDepthbuffer[vt],U,!1);else{const bt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer[vt];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,Ct)}}else{const vt=U.texture.mipmaps;if(vt&&vt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),je(T.__webglDepthbuffer,U,!1);else{const bt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,Ct)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(U,T,J){const vt=s.get(U);T!==void 0&&$t(vt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&xe(U)}function ue(U){const T=U.texture,J=s.get(U),vt=s.get(T);U.addEventListener("dispose",E);const bt=U.textures,Ct=U.isWebGLCubeRenderTarget===!0,Lt=bt.length>1;if(Lt||(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=T.version,u.memory.textures++),Ct){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let dt=0;dt<T.mipmaps.length;dt++)J.__webglFramebuffer[ut][dt]=i.createFramebuffer()}else J.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<T.mipmaps.length;ut++)J.__webglFramebuffer[ut]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let ut=0,dt=bt.length;ut<dt;ut++){const Pt=s.get(bt[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),u.memory.textures++)}if(U.samples>0&&pe(U)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<bt.length;ut++){const dt=bt[ut];J.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Pt=c.convert(dt.format,dt.colorSpace),Ot=c.convert(dt.type),Nt=N(dt.internalFormat,Pt,Ot,dt.normalized,dt.colorSpace,U.isXRRenderTarget===!0),wt=an(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Nt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),je(J.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){n.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,T);for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)$t(J.__webglFramebuffer[ut][dt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else $t(J.__webglFramebuffer[ut],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(T)&&A(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Lt){for(let ut=0,dt=bt.length;ut<dt;ut++){const Pt=bt[ut],Ot=s.get(Pt);let Nt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Ot.__webglTexture),Dt(Nt,Pt),$t(J.__webglFramebuffer,U,Pt,i.COLOR_ATTACHMENT0+ut,Nt,0),y(Pt)&&A(Nt)}n.unbindTexture()}else{let ut=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ut=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(ut,vt.__webglTexture),Dt(ut,T),T.mipmaps&&T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)$t(J.__webglFramebuffer[dt],U,T,i.COLOR_ATTACHMENT0,ut,dt);else $t(J.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,ut,0);y(T)&&A(ut),n.unbindTexture()}U.depthBuffer&&xe(U)}function cn(U){const T=U.textures;for(let J=0,vt=T.length;J<vt;J++){const bt=T[J];if(y(bt)){const Ct=C(U),Lt=s.get(bt).__webglTexture;n.bindTexture(Ct,Lt),A(Ct),n.unbindTexture()}}}const Ke=[],Dn=[];function q(U){if(U.samples>0){if(pe(U)===!1){const T=U.textures,J=U.width,vt=U.height;let bt=i.COLOR_BUFFER_BIT;const Ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=s.get(U),ut=T.length>1;if(ut)for(let Pt=0;Pt<T.length;Pt++)n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const dt=U.texture.mipmaps;dt&&dt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const Ot=s.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,J,vt,0,0,J,vt,bt,i.NEAREST),m===!0&&(Ke.length=0,Dn.length=0,Ke.push(i.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ke.push(Ct),Dn.push(Ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<T.length;Pt++){n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const Ot=s.get(T[Pt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Ot,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function an(U){return Math.min(o.maxSamples,U.samples)}function pe(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(U){const T=u.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function Rt(U,T){const J=U.colorSpace,vt=U.format,bt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==tf&&J!==Rs&&(be.getTransfer(J)===ze?(vt!==Wi||bt!==Ni)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",J)),T}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=ct,this.getTextureUnits=ht,this.setTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=ft,this.setTexture3D=xt,this.setTextureCube=B,this.rebindTextures=Le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function O3(i,t){function n(s,o=Rs){let c;const u=be.getTransfer(o);if(s===Ni)return i.UNSIGNED_BYTE;if(s===Km)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Zm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===sM)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===rM)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===iM)return i.BYTE;if(s===aM)return i.SHORT;if(s===Fl)return i.UNSIGNED_SHORT;if(s===Ym)return i.INT;if(s===fa)return i.UNSIGNED_INT;if(s===sa)return i.FLOAT;if(s===Ga)return i.HALF_FLOAT;if(s===oM)return i.ALPHA;if(s===lM)return i.RGB;if(s===Wi)return i.RGBA;if(s===ka)return i.DEPTH_COMPONENT;if(s===cr)return i.DEPTH_STENCIL;if(s===cM)return i.RED;if(s===Qm)return i.RED_INTEGER;if(s===mr)return i.RG;if(s===Jm)return i.RG_INTEGER;if(s===$m)return i.RGBA_INTEGER;if(s===zu||s===Vu||s===Hu||s===Gu)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hp||s===Gp||s===kp||s===Xp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jp||s===Wp||s===qp||s===Yp||s===Kp||s===Ju||s===Zp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===jp||s===Wp)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yp)return c.COMPRESSED_R11_EAC;if(s===Kp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ju)return c.COMPRESSED_RG11_EAC;if(s===Zp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Qp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$p)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===em)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===im)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===am)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===om)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===um)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fm||s===hm||s===dm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===fm)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pm||s===mm||s===$u||s===gm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===pm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===mm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$u)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new yM(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new da({vertexShader:I3,fragmentShader:B3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ha(new _f(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z3 extends vr{constructor(t,n){super();const s=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,b=null;const R=typeof XRWebGLBinding<"u",S=new F3,y={},A=n.getContextAttributes();let C=null,N=null;const F=[],L=[],I=new Ne;let E=null;const P=new Di;P.viewport=new dn;const V=new Di;V.viewport=new dn;const z=[P,V],Y=new KA;let ct=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let St=F[ot];return St===void 0&&(St=new jd,F[ot]=St),St.getTargetRaySpace()},this.getControllerGrip=function(ot){let St=F[ot];return St===void 0&&(St=new jd,F[ot]=St),St.getGripSpace()},this.getHand=function(ot){let St=F[ot];return St===void 0&&(St=new jd,F[ot]=St),St.getHandSpace()};function W(ot){const St=L.indexOf(ot.inputSource);if(St===-1)return;const Et=F[St];Et!==void 0&&(Et.update(ot.inputSource,ot.frame,d||u),Et.dispatchEvent({type:ot.type,data:ot.inputSource}))}function O(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",G);for(let ot=0;ot<F.length;ot++){const St=L[ot];St!==null&&(L[ot]=null,F[ot].disconnect(St))}ct=null,ht=null,S.reset();for(const ot in y)delete y[ot];t.setRenderTarget(C),x=null,v=null,_=null,o=null,N=null,Dt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){c=ot,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){h=ot,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ot){d=ot},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ot){if(o=ot,o!==null){if(C=t.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",O),o.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ht=null,ee=null;A.depth&&(ee=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=A.stencil?cr:ka,Ht=A.stencil?zl:fa);const $t={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($t),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new la(v.textureWidth,v.textureHeight,{format:Wi,type:Ni,depthTexture:new yo(v.textureWidth,v.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Et),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new la(x.framebufferWidth,x.framebufferHeight,{format:Wi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Dt.setContext(o),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(ot){for(let St=0;St<ot.removed.length;St++){const Et=ot.removed[St],Ht=L.indexOf(Et);Ht>=0&&(L[Ht]=null,F[Ht].disconnect(Et))}for(let St=0;St<ot.added.length;St++){const Et=ot.added[St];let Ht=L.indexOf(Et);if(Ht===-1){for(let $t=0;$t<F.length;$t++)if($t>=L.length){L.push(Et),Ht=$t;break}else if(L[$t]===null){L[$t]=Et,Ht=$t;break}if(Ht===-1)break}const ee=F[Ht];ee&&ee.connect(Et)}}const $=new tt,ft=new tt;function xt(ot,St,Et){$.setFromMatrixPosition(St.matrixWorld),ft.setFromMatrixPosition(Et.matrixWorld);const Ht=$.distanceTo(ft),ee=St.projectionMatrix.elements,$t=Et.projectionMatrix.elements,je=ee[14]/(ee[10]-1),de=ee[14]/(ee[10]+1),xe=(ee[9]+1)/ee[5],Le=(ee[9]-1)/ee[5],ue=(ee[8]-1)/ee[0],cn=($t[8]+1)/$t[0],Ke=je*ue,Dn=je*cn,q=Ht/(-ue+cn),an=q*-ue;if(St.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(an),ot.translateZ(q),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),ee[10]===-1)ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const pe=je+q,He=de+q,Rt=Ke-an,$e=Dn+(Ht-an),U=xe*de/He*pe,T=Le*de/He*pe;ot.projectionMatrix.makePerspective(Rt,$e,U,T,pe,He),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function B(ot,St){St===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(St.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(o===null)return;let St=ot.near,Et=ot.far;S.texture!==null&&(S.depthNear>0&&(St=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),Y.near=V.near=P.near=St,Y.far=V.far=P.far=Et,(ct!==Y.near||ht!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ct=Y.near,ht=Y.far),Y.layers.mask=ot.layers.mask|6,P.layers.mask=Y.layers.mask&-5,V.layers.mask=Y.layers.mask&-3;const Ht=ot.parent,ee=Y.cameras;B(Y,Ht);for(let $t=0;$t<ee.length;$t++)B(ee[$t],Ht);ee.length===2?xt(Y,P,V):Y.projectionMatrix.copy(P.projectionMatrix),Q(ot,Y,Ht)};function Q(ot,St,Et){Et===null?ot.matrix.copy(St.matrixWorld):(ot.matrix.copy(Et.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(St.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=_m*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ot){m=ot,v!==null&&(v.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ot){return y[ot]};let yt=null;function At(ot,St){if(g=St.getViewerPose(d||u),b=St,g!==null){const Et=g.views;x!==null&&(t.setRenderTargetFramebuffer(N,x.framebuffer),t.setRenderTarget(N));let Ht=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let de=0;de<Et.length;de++){const xe=Et[de];let Le=null;if(x!==null)Le=x.getViewport(xe);else{const cn=_.getViewSubImage(v,xe);Le=cn.viewport,de===0&&(t.setRenderTargetTextures(N,cn.colorTexture,cn.depthStencilTexture),t.setRenderTarget(N))}let ue=z[de];ue===void 0&&(ue=new Di,ue.layers.enable(de),ue.viewport=new dn,z[de]=ue),ue.matrix.fromArray(xe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(xe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),de===0&&(Y.matrix.copy(ue.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(ue)}const ee=o.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const de=_.getDepthInformation(Et[0]);de&&de.isValid&&de.texture&&S.init(de,o.renderState)}if(ee&&ee.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let de=0;de<Et.length;de++){const xe=Et[de].camera;if(xe){let Le=y[xe];Le||(Le=new yM,y[xe]=Le);const ue=_.getCameraImage(xe);Le.sourceTexture=ue}}}}for(let Et=0;Et<F.length;Et++){const Ht=L[Et],ee=F[Et];Ht!==null&&ee!==void 0&&ee.update(Ht,St,d||u)}yt&&yt(ot,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const Dt=new EM;Dt.setAnimationLoop(At),this.setAnimationLoop=function(ot){yt=ot},this.dispose=function(){}}}const V3=new Sn,NM=new oe;NM.set(-1,0,0,0,1,0,0,0,1);function H3(i,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,SM(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,A,C,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,N)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),R(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,A,C):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ii&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ii&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const A=t.get(y),C=A.envMap,N=A.envMapRotation;C&&(S.envMap.value=C,S.envMapRotation.value.setFromMatrix4(V3.makeRotationFromEuler(N)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(NM),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,A,C){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*A,S.scale.value=C*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,A){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){const A=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function G3(i,t,n,s){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,C){const N=C.program;s.uniformBlockBinding(A,N)}function d(A,C){let N=o[A.id];N===void 0&&(b(A),N=g(A),o[A.id]=N,A.addEventListener("dispose",S));const F=C.program;s.updateUBOMapping(A,F);const L=t.render.frame;c[A.id]!==L&&(v(A),c[A.id]=L)}function g(A){const C=_();A.__bindingPointIndex=C;const N=i.createBuffer(),F=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,F,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,N),N}function _(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const C=o[A.id],N=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let L=0,I=N.length;L<I;L++){const E=Array.isArray(N[L])?N[L]:[N[L]];for(let P=0,V=E.length;P<V;P++){const z=E[P];if(x(z,L,P,F)===!0){const Y=z.__offset,ct=Array.isArray(z.value)?z.value:[z.value];let ht=0;for(let W=0;W<ct.length;W++){const O=ct[W],G=R(O);typeof O=="number"||typeof O=="boolean"?(z.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,Y+ht,z.__data)):O.isMatrix3?(z.__data[0]=O.elements[0],z.__data[1]=O.elements[1],z.__data[2]=O.elements[2],z.__data[3]=0,z.__data[4]=O.elements[3],z.__data[5]=O.elements[4],z.__data[6]=O.elements[5],z.__data[7]=0,z.__data[8]=O.elements[6],z.__data[9]=O.elements[7],z.__data[10]=O.elements[8],z.__data[11]=0):ArrayBuffer.isView(O)?z.__data.set(new O.constructor(O.buffer,O.byteOffset,z.__data.length)):(O.toArray(z.__data,ht),ht+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(A,C,N,F){const L=A.value,I=C+"_"+N;if(F[I]===void 0)return typeof L=="number"||typeof L=="boolean"?F[I]=L:ArrayBuffer.isView(L)?F[I]=L.slice():F[I]=L.clone(),!0;{const E=F[I];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return F[I]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function b(A){const C=A.uniforms;let N=0;const F=16;for(let I=0,E=C.length;I<E;I++){const P=Array.isArray(C[I])?C[I]:[C[I]];for(let V=0,z=P.length;V<z;V++){const Y=P[V],ct=Array.isArray(Y.value)?Y.value:[Y.value];for(let ht=0,W=ct.length;ht<W;ht++){const O=ct[ht],G=R(O),$=N%F,ft=$%G.boundary,xt=$+ft;N+=ft,xt!==0&&F-xt<G.storage&&(N+=F-xt),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=N,N+=G.storage}}}const L=N%F;return L>0&&(N+=F-L),A.__size=N,A.__cache={},this}function R(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",A),C}function S(A){const C=A.target;C.removeEventListener("dispose",S);const N=u.indexOf(C.__bindingPointIndex);u.splice(N,1),i.deleteBuffer(o[C.id]),delete o[C.id],delete c[C.id]}function y(){for(const A in o)i.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:d,dispose:y}}const k3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function X3(){return ea===null&&(ea=new OA(k3,16,16,mr,Ga),ea.name="DFG_LUT",ea.minFilter=Xn,ea.magFilter=Xn,ea.wrapS=za,ea.wrapT=za,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class j3{constructor(t={}){const{canvas:n=hA(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ni}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const R=x,S=new Set([$m,Jm,Qm]),y=new Set([Ni,fa,Fl,zl,Km,Zm]),A=new Uint32Array(4),C=new Int32Array(4),N=new tt;let F=null,L=null;const I=[],E=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,Y=null;this._outputColorSpace=wi;let ct=0,ht=0,W=null,O=-1,G=null;const $=new dn,ft=new dn;let xt=null;const B=new Ve(0);let Q=0,yt=n.width,At=n.height,Dt=1,ot=null,St=null;const Et=new dn(0,0,yt,At),Ht=new dn(0,0,yt,At);let ee=!1;const $t=new vM;let je=!1,de=!1;const xe=new Sn,Le=new tt,ue=new dn,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Dn(){return W===null?Dt:1}let q=s;function an(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",Yt,!1),n.addEventListener("webglcontextcreationerror",ne,!1),q===null){const K="webgl2";if(q=an(K,w),q===null)throw an(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Te("WebGLRenderer: "+w.message),w}let pe,He,Rt,$e,U,T,J,vt,bt,Ct,Lt,ut,dt,Pt,Ot,Nt,wt,ae,se,me,X,Tt,mt;function zt(){pe=new X2(q),pe.init(),X=new O3(q,pe),He=new I2(q,pe,t,X),Rt=new L3(q,pe),He.reversedDepthBuffer&&v&&Rt.buffers.depth.setReversed(!0),$e=new q2(q),U=new x3,T=new P3(q,pe,Rt,U,He,X,$e),J=new k2(V),vt=new QA(q),Tt=new P2(q,vt),bt=new j2(q,vt,$e,Tt),Ct=new K2(q,bt,vt,Tt,$e),ae=new Y2(q,He,T),Ot=new B2(U),Lt=new _3(V,J,pe,He,Tt,Ot),ut=new H3(V,U),dt=new S3,Pt=new R3(pe),wt=new L2(V,J,Rt,Ct,b,m),Nt=new U3(V,Ct,He),mt=new G3(q,$e,He,Rt),se=new O2(q,pe,$e),me=new W2(q,pe,$e),$e.programs=Lt.programs,V.capabilities=He,V.extensions=pe,V.properties=U,V.renderLists=dt,V.shadowMap=Nt,V.state=Rt,V.info=$e}zt(),R!==Ni&&(P=new Q2(R,n.width,n.height,o,c));const Ut=new z3(V,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(w){w!==void 0&&(Dt=w,this.setSize(yt,At,!1))},this.getSize=function(w){return w.set(yt,At)},this.setSize=function(w,K,st=!0){if(Ut.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,At=K,n.width=Math.floor(w*Dt),n.height=Math.floor(K*Dt),st===!0&&(n.style.width=w+"px",n.style.height=K+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(yt*Dt,At*Dt).floor()},this.setDrawingBufferSize=function(w,K,st){yt=w,At=K,Dt=st,n.width=Math.floor(w*st),n.height=Math.floor(K*st),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(R===Ni){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){ie("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy($)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,K,st,it){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,K,st,it),Rt.viewport($.copy(Et).multiplyScalar(Dt).round())},this.getScissor=function(w){return w.copy(Ht)},this.setScissor=function(w,K,st,it){w.isVector4?Ht.set(w.x,w.y,w.z,w.w):Ht.set(w,K,st,it),Rt.scissor(ft.copy(Ht).multiplyScalar(Dt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){Rt.setScissorTest(ee=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){St=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,st=!0){let it=0;if(w){let at=!1;if(W!==null){const Ft=W.texture.format;at=S.has(Ft)}if(at){const Ft=W.texture.type,kt=y.has(Ft),It=wt.getClearColor(),jt=wt.getClearAlpha(),Xt=It.r,Qt=It.g,le=It.b;kt?(A[0]=Xt,A[1]=Qt,A[2]=le,A[3]=jt,q.clearBufferuiv(q.COLOR,0,A)):(C[0]=Xt,C[1]=Qt,C[2]=le,C[3]=jt,q.clearBufferiv(q.COLOR,0,C))}else it|=q.COLOR_BUFFER_BIT}K&&(it|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",Yt,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),wt.dispose(),dt.dispose(),Pt.dispose(),U.dispose(),J.dispose(),Ct.dispose(),Tt.dispose(),mt.dispose(),Lt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Do),Ut.removeEventListener("sessionend",No),zn.stop()};function Mt(w){w.preventDefault(),Bx("WebGLRenderer: Context Lost."),z=!0}function Yt(){Bx("WebGLRenderer: Context Restored."),z=!1;const w=$e.autoReset,K=Nt.enabled,st=Nt.autoUpdate,it=Nt.needsUpdate,at=Nt.type;zt(),$e.autoReset=w,Nt.enabled=K,Nt.autoUpdate=st,Nt.needsUpdate=it,Nt.type=at}function ne(w){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function sn(w){const K=w.target;K.removeEventListener("dispose",sn),we(K)}function we(w){xi(w),U.remove(w)}function xi(w){const K=U.get(w).programs;K!==void 0&&(K.forEach(function(st){Lt.releaseProgram(st)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,st,it,at,Ft){K===null&&(K=cn);const kt=at.isMesh&&at.matrixWorld.determinant()<0,It=Wa(w,K,st,it,at);Rt.setMaterial(it,kt);let jt=st.index,Xt=1;if(it.wireframe===!0){if(jt=bt.getWireframeAttribute(st),jt===void 0)return;Xt=2}const Qt=st.drawRange,le=st.attributes.position;let Zt=Qt.start*Xt,Ae=(Qt.start+Qt.count)*Xt;Ft!==null&&(Zt=Math.max(Zt,Ft.start*Xt),Ae=Math.min(Ae,(Ft.start+Ft.count)*Xt)),jt!==null?(Zt=Math.max(Zt,0),Ae=Math.min(Ae,jt.count)):le!=null&&(Zt=Math.max(Zt,0),Ae=Math.min(Ae,le.count));const tn=Ae-Zt;if(tn<0||tn===1/0)return;Tt.setup(at,it,It,st,jt);let We,Pe=se;if(jt!==null&&(We=vt.get(jt),Pe=me,Pe.setIndex(We)),at.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*Dn()),Pe.setMode(q.LINES)):Pe.setMode(q.TRIANGLES);else if(at.isLine){let Oe=it.linewidth;Oe===void 0&&(Oe=1),Rt.setLineWidth(Oe*Dn()),at.isLineSegments?Pe.setMode(q.LINES):at.isLineLoop?Pe.setMode(q.LINE_LOOP):Pe.setMode(q.LINE_STRIP)}else at.isPoints?Pe.setMode(q.POINTS):at.isSprite&&Pe.setMode(q.TRIANGLES);if(at.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Oe=at._multiDrawStarts,Gt=at._multiDrawCounts,Vn=at._multiDrawCount,ge=jt?vt.get(jt).bytesPerElement:1,bn=U.get(it).currentProgram.getUniforms();for(let ri=0;ri<Vn;ri++)bn.setValue(q,"_gl_DrawID",ri),Pe.render(Oe[ri]/ge,Gt[ri])}else if(at.isInstancedMesh)Pe.renderInstances(Zt,tn,at.count);else if(st.isInstancedBufferGeometry){const Oe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,Oe);Pe.renderInstances(Zt,tn,Gt)}else Pe.render(Zt,tn)};function si(w,K,st){w.transparent===!0&&w.side===Fa&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,_r(w,K,st),w.side=Ds,w.needsUpdate=!0,_r(w,K,st),w.side=Fa):_r(w,K,st)}this.compile=function(w,K,st=null){st===null&&(st=w),L=Pt.get(st),L.init(K),E.push(L),st.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),w!==st&&w.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),L.setupLights();const it=new Set;return w.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ft=at.material;if(Ft)if(Array.isArray(Ft))for(let kt=0;kt<Ft.length;kt++){const It=Ft[kt];si(It,st,at),it.add(It)}else si(Ft,st,at),it.add(Ft)}),L=E.pop(),it},this.compileAsync=function(w,K,st=null){const it=this.compile(w,K,st);return new Promise(at=>{function Ft(){if(it.forEach(function(kt){U.get(kt).currentProgram.isReady()&&it.delete(kt)}),it.size===0){at(w);return}setTimeout(Ft,10)}pe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ps=null;function wo(w){Ps&&Ps(w)}function Do(){zn.stop()}function No(){zn.start()}const zn=new EM;zn.setAnimationLoop(wo),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Ps=w,Ut.setAnimationLoop(w),w===null?zn.stop():zn.start()},Ut.addEventListener("sessionstart",Do),Ut.addEventListener("sessionend",No),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(w,K);const st=Ut.enabled===!0&&Ut.isPresenting===!0,it=P!==null&&(W===null||st)&&P.begin(V,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(K),K=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,K,W),L=Pt.get(w,E.length),L.init(K),L.state.textureUnits=T.getTextureUnits(),E.push(L),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),$t.setFromProjectionMatrix(xe,ra,K.reversedDepth),de=this.localClippingEnabled,je=Ot.init(this.clippingPlanes,de),F=dt.get(w,I.length),F.init(),I.push(F),Ut.enabled===!0&&Ut.isPresenting===!0){const kt=V.xr.getDepthSensingMesh();kt!==null&&un(kt,K,-1/0,V.sortObjects)}un(w,K,0,V.sortObjects),F.finish(),V.sortObjects===!0&&F.sort(ot,St),Ke=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Ke&&wt.addToRenderList(F,w),this.info.render.frame++,je===!0&&Ot.beginShadows();const at=L.state.shadowsArray;if(Nt.render(at,w,K),je===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&P.hasRenderPass())===!1){const kt=F.opaque,It=F.transmissive;if(L.setupLights(),K.isArrayCamera){const jt=K.cameras;if(It.length>0)for(let Xt=0,Qt=jt.length;Xt<Qt;Xt++){const le=jt[Xt];ma(kt,It,w,le)}Ke&&wt.render(w);for(let Xt=0,Qt=jt.length;Xt<Qt;Xt++){const le=jt[Xt];Nn(F,w,le,le.viewport)}}else It.length>0&&ma(kt,It,w,K),Ke&&wt.render(w),Nn(F,w,K)}W!==null&&ht===0&&(T.updateMultisampleRenderTarget(W),T.updateRenderTargetMipmap(W)),it&&P.end(V),w.isScene===!0&&w.onAfterRender(V,w,K),Tt.resetDefaultState(),O=-1,G=null,E.pop(),E.length>0?(L=E[E.length-1],T.setTextureUnits(L.state.textureUnits),je===!0&&Ot.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?F=I[I.length-1]:F=null,Y!==null&&Y.renderEnd()};function un(w,K,st,it){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$t.intersectsSprite(w)){it&&ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const kt=Ct.update(w),It=w.material;It.visible&&F.push(w,kt,It,st,ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$t.intersectsObject(w))){const kt=Ct.update(w),It=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ue.copy(w.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ue.copy(kt.boundingSphere.center)),ue.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(It)){const jt=kt.groups;for(let Xt=0,Qt=jt.length;Xt<Qt;Xt++){const le=jt[Xt],Zt=It[le.materialIndex];Zt&&Zt.visible&&F.push(w,kt,Zt,st,ue.z,le)}}else It.visible&&F.push(w,kt,It,st,ue.z,null)}}const Ft=w.children;for(let kt=0,It=Ft.length;kt<It;kt++)un(Ft[kt],K,st,it)}function Nn(w,K,st,it){const{opaque:at,transmissive:Ft,transparent:kt}=w;L.setupLightsView(st),je===!0&&Ot.setGlobalState(V.clippingPlanes,st),it&&Rt.viewport($.copy(it)),at.length>0&&Xa(at,K,st),Ft.length>0&&Xa(Ft,K,st),kt.length>0&&Xa(kt,K,st),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ma(w,K,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[it.id]===void 0){const Zt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[it.id]=new la(1,1,{generateMipmaps:!0,type:Zt?Ga:Ni,minFilter:lr,samples:Math.max(4,He.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Ft=L.state.transmissionRenderTarget[it.id],kt=it.viewport||$;Ft.setSize(kt.z*V.transmissionResolutionScale,kt.w*V.transmissionResolutionScale);const It=V.getRenderTarget(),jt=V.getActiveCubeFace(),Xt=V.getActiveMipmapLevel();V.setRenderTarget(Ft),V.getClearColor(B),Q=V.getClearAlpha(),Q<1&&V.setClearColor(16777215,.5),V.clear(),Ke&&wt.render(st);const Qt=V.toneMapping;V.toneMapping=oa;const le=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),L.setupLightsView(it),je===!0&&Ot.setGlobalState(V.clippingPlanes,it),Xa(w,st,it),T.updateMultisampleRenderTarget(Ft),T.updateRenderTargetMipmap(Ft),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ae=0,tn=K.length;Ae<tn;Ae++){const We=K[Ae],{object:Pe,geometry:Oe,material:Gt,group:Vn}=We;if(Gt.side===Fa&&Pe.layers.test(it.layers)){const ge=Gt.side;Gt.side=ii,Gt.needsUpdate=!0,Jl(Pe,st,it,Oe,Gt,Vn),Gt.side=ge,Gt.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(Ft),T.updateRenderTargetMipmap(Ft))}V.setRenderTarget(It,jt,Xt),V.setClearColor(B,Q),le!==void 0&&(it.viewport=le),V.toneMapping=Qt}function Xa(w,K,st){const it=K.isScene===!0?K.overrideMaterial:null;for(let at=0,Ft=w.length;at<Ft;at++){const kt=w[at],{object:It,geometry:jt,group:Xt}=kt;let Qt=kt.material;Qt.allowOverride===!0&&it!==null&&(Qt=it),It.layers.test(st.layers)&&Jl(It,K,st,jt,Qt,Xt)}}function Jl(w,K,st,it,at,Ft){w.onBeforeRender(V,K,st,it,at,Ft),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(V,K,st,it,w,Ft),at.transparent===!0&&at.side===Fa&&at.forceSinglePass===!1?(at.side=ii,at.needsUpdate=!0,V.renderBufferDirect(st,K,it,at,w,Ft),at.side=Ds,at.needsUpdate=!0,V.renderBufferDirect(st,K,it,at,w,Ft),at.side=Fa):V.renderBufferDirect(st,K,it,at,w,Ft),w.onAfterRender(V,K,st,it,at,Ft)}function _r(w,K,st){K.isScene!==!0&&(K=cn);const it=U.get(w),at=L.state.lights,Ft=L.state.shadowsArray,kt=at.state.version,It=Lt.getParameters(w,at.state,Ft,K,st,L.state.lightProbeGridArray),jt=Lt.getProgramCacheKey(It);let Xt=it.programs;it.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,it.fog=K.fog;const Qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;it.envMap=J.get(w.envMap||it.environment,Qt),it.envMapRotation=it.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",sn),Xt=new Map,it.programs=Xt);let le=Xt.get(jt);if(le!==void 0){if(it.currentProgram===le&&it.lightsStateVersion===kt)return ja(w,It),le}else It.uniforms=Lt.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,st,It),w.onBeforeCompile(It,V),le=Lt.acquireProgram(It,jt),Xt.set(jt,le),it.uniforms=It.uniforms;const Zt=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Ot.uniform),ja(w,It),it.needsLights=Os(w),it.lightsStateVersion=kt,it.needsLights&&(Zt.ambientLightColor.value=at.state.ambient,Zt.lightProbe.value=at.state.probe,Zt.directionalLights.value=at.state.directional,Zt.directionalLightShadows.value=at.state.directionalShadow,Zt.spotLights.value=at.state.spot,Zt.spotLightShadows.value=at.state.spotShadow,Zt.rectAreaLights.value=at.state.rectArea,Zt.ltc_1.value=at.state.rectAreaLTC1,Zt.ltc_2.value=at.state.rectAreaLTC2,Zt.pointLights.value=at.state.point,Zt.pointLightShadows.value=at.state.pointShadow,Zt.hemisphereLights.value=at.state.hemi,Zt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Zt.spotLightMatrix.value=at.state.spotLightMatrix,Zt.spotLightMap.value=at.state.spotLightMap,Zt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=L.state.lightProbeGridArray.length>0,it.currentProgram=le,it.uniformsList=null,le}function Uo(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=ku.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function ja(w,K){const st=U.get(w);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function Lo(w,K){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(K.matrixWorld);for(let st=0,it=w.length;st<it;st++){const at=w[st];if(at.texture!==null&&at.boundingBox.containsPoint(N))return at}return null}function Wa(w,K,st,it,at){K.isScene!==!0&&(K=cn),T.resetTextureUnits();const Ft=K.fog,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?K.environment:null,It=W===null?V.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:be.workingColorSpace,jt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Xt=J.get(it.envMap||kt,jt),Qt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,le=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Zt=!!st.morphAttributes.position,Ae=!!st.morphAttributes.normal,tn=!!st.morphAttributes.color;let We=oa;it.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=V.toneMapping);const Pe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=Pe!==void 0?Pe.length:0,Gt=U.get(it),Vn=L.state.lights;if(je===!0&&(de===!0||w!==G)){const Ue=w===G&&it.id===O;Ot.setState(it,w,Ue)}let ge=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Vn.state.version||Gt.outputColorSpace!==It||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==Xt||it.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==Qt||Gt.vertexTangents!==le||Gt.morphTargets!==Zt||Gt.morphNormals!==Ae||Gt.morphColors!==tn||Gt.toneMapping!==We||Gt.morphTargetsCount!==Oe||!!Gt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Gt.__version=it.version);let bn=Gt.currentProgram;ge===!0&&(bn=_r(it,K,at),Y&&it.isNodeMaterial&&Y.onUpdateProgram(it,bn,Gt));let ri=!1,Oi=!1,oi=!1;const Ie=bn.getUniforms(),en=Gt.uniforms;if(Rt.useProgram(bn.program)&&(ri=!0,Oi=!0,oi=!0),it.id!==O&&(O=it.id,Oi=!0),Gt.needsLights){const Ue=Lo(L.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,Oi=!0)}if(ri||G!==w){Rt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(q,"projectionMatrix",w.projectionMatrix),Ie.setValue(q,"viewMatrix",w.matrixWorldInverse);const Ki=Ie.map.cameraPosition;Ki!==void 0&&Ki.setValue(q,Le.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&Ie.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,Oi=!0,oi=!0)}if(Gt.needsLights&&(Vn.state.directionalShadowMap.length>0&&Ie.setValue(q,"directionalShadowMap",Vn.state.directionalShadowMap,T),Vn.state.spotShadowMap.length>0&&Ie.setValue(q,"spotShadowMap",Vn.state.spotShadowMap,T),Vn.state.pointShadowMap.length>0&&Ie.setValue(q,"pointShadowMap",Vn.state.pointShadowMap,T)),at.isSkinnedMesh){Ie.setOptional(q,at,"bindMatrix"),Ie.setOptional(q,at,"bindMatrixInverse");const Ue=at.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ie.setValue(q,"boneTexture",Ue.boneTexture,T))}at.isBatchedMesh&&(Ie.setOptional(q,at,"batchingTexture"),Ie.setValue(q,"batchingTexture",at._matricesTexture,T),Ie.setOptional(q,at,"batchingIdTexture"),Ie.setValue(q,"batchingIdTexture",at._indirectTexture,T),Ie.setOptional(q,at,"batchingColorTexture"),at._colorsTexture!==null&&Ie.setValue(q,"batchingColorTexture",at._colorsTexture,T));const Ii=st.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ae.update(at,st,bn),(Oi||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Ie.setValue(q,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&K.environment!==null&&(en.envMapIntensity.value=K.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=X3()),Oi){if(Ie.setValue(q,"toneMappingExposure",V.toneMappingExposure),Gt.needsLights&&qa(en,oi),Ft&&it.fog===!0&&ut.refreshFogUniforms(en,Ft),ut.refreshMaterialUniforms(en,it,Dt,At,L.state.transmissionRenderTarget[w.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;en.probesSH.value=Ue.texture,en.probesMin.value.copy(Ue.boundingBox.min),en.probesMax.value.copy(Ue.boundingBox.max),en.probesResolution.value.copy(Ue.resolution)}ku.upload(q,Uo(Gt),en,T)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ku.upload(q,Uo(Gt),en,T),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(q,"center",at.center),Ie.setValue(q,"modelViewMatrix",at.modelViewMatrix),Ie.setValue(q,"normalMatrix",at.normalMatrix),Ie.setValue(q,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Ue=it.uniformsGroups;for(let Ki=0,Ka=Ue.length;Ki<Ka;Ki++){const Is=Ue[Ki];mt.update(Is,bn),mt.bind(Is,bn)}}return bn}function qa(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Os(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,K,st){const it=U.get(w);it.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),U.get(w.texture).__webglTexture=K,U.get(w.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:st,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const st=U.get(w);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const Ya=q.createFramebuffer();this.setRenderTarget=function(w,K=0,st=0){W=w,ct=K,ht=st;let it=null,at=!1,Ft=!1;if(w){const It=U.get(w);if(It.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),$.copy(w.viewport),ft.copy(w.scissor),xt=w.scissorTest,Rt.viewport($),Rt.scissor(ft),Rt.setScissorTest(xt),O=-1;return}else if(It.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(It.__hasExternalTextures)T.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qt=w.depthTexture;if(It.__boundDepthTexture!==Qt){if(Qt!==null&&U.has(Qt)&&(w.width!==Qt.image.width||w.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ft=!0);const Xt=U.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[K])?it=Xt[K][st]:it=Xt[K],at=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?it=U.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?it=Xt[st]:it=Xt,$.copy(w.viewport),ft.copy(w.scissor),xt=w.scissorTest}else $.copy(Et).multiplyScalar(Dt).floor(),ft.copy(Ht).multiplyScalar(Dt).floor(),xt=ee;if(st!==0&&(it=Ya),Rt.bindFramebuffer(q.FRAMEBUFFER,it)&&Rt.drawBuffers(w,it),Rt.viewport($),Rt.scissor(ft),Rt.setScissorTest(xt),at){const It=U.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,It.__webglTexture,st)}else if(Ft){const It=K;for(let jt=0;jt<w.textures.length;jt++){const Xt=U.get(w.textures[jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+jt,Xt.__webglTexture,st,It)}}else if(w!==null&&st!==0){const It=U.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,st)}O=-1},this.readRenderTargetPixels=function(w,K,st,it,at,Ft,kt,It=0){if(!(w&&w.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){Rt.bindFramebuffer(q.FRAMEBUFFER,jt);try{const Xt=w.textures[It],Qt=Xt.format,le=Xt.type;if(w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Qt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(le)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-it&&st>=0&&st<=w.height-at&&q.readPixels(K,st,it,at,X.convert(Qt),X.convert(le),Ft)}finally{const Xt=W!==null?U.get(W).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,K,st,it,at,Ft,kt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt)if(K>=0&&K<=w.width-it&&st>=0&&st<=w.height-at){Rt.bindFramebuffer(q.FRAMEBUFFER,jt);const Xt=w.textures[It],Qt=Xt.format,le=Xt.type;if(w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Zt),q.bufferData(q.PIXEL_PACK_BUFFER,Ft.byteLength,q.STREAM_READ),q.readPixels(K,st,it,at,X.convert(Qt),X.convert(le),0);const Ae=W!==null?U.get(W).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,Ae);const tn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await dA(q,tn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Zt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ft),q.deleteBuffer(Zt),q.deleteSync(tn),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,st=0){const it=Math.pow(2,-st),at=Math.floor(w.image.width*it),Ft=Math.floor(w.image.height*it),kt=K!==null?K.x:0,It=K!==null?K.y:0;T.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,st,0,0,kt,It,at,Ft),Rt.unbindTexture()};const pn=q.createFramebuffer(),$l=q.createFramebuffer();this.copyTextureToTexture=function(w,K,st=null,it=null,at=0,Ft=0){let kt,It,jt,Xt,Qt,le,Zt,Ae,tn;const We=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(st!==null)kt=st.max.x-st.min.x,It=st.max.y-st.min.y,jt=st.isBox3?st.max.z-st.min.z:1,Xt=st.min.x,Qt=st.min.y,le=st.isBox3?st.min.z:0;else{const en=Math.pow(2,-at);kt=Math.floor(We.width*en),It=Math.floor(We.height*en),w.isDataArrayTexture?jt=We.depth:w.isData3DTexture?jt=Math.floor(We.depth*en):jt=1,Xt=0,Qt=0,le=0}it!==null?(Zt=it.x,Ae=it.y,tn=it.z):(Zt=0,Ae=0,tn=0);const Pe=X.convert(K.format),Oe=X.convert(K.type);let Gt;K.isData3DTexture?(T.setTexture3D(K,0),Gt=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(T.setTexture2DArray(K,0),Gt=q.TEXTURE_2D_ARRAY):(T.setTexture2D(K,0),Gt=q.TEXTURE_2D),Rt.activeTexture(q.TEXTURE0),Rt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),Rt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Rt.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const Vn=Rt.getParameter(q.UNPACK_ROW_LENGTH),ge=Rt.getParameter(q.UNPACK_IMAGE_HEIGHT),bn=Rt.getParameter(q.UNPACK_SKIP_PIXELS),ri=Rt.getParameter(q.UNPACK_SKIP_ROWS),Oi=Rt.getParameter(q.UNPACK_SKIP_IMAGES);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,We.width),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,We.height),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,Xt),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,Qt),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,le);const oi=w.isDataArrayTexture||w.isData3DTexture,Ie=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const en=U.get(w),Ii=U.get(K),Ue=U.get(en.__renderTarget),Ki=U.get(Ii.__renderTarget);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ka=0;Ka<jt;Ka++)oi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(w).__webglTexture,at,le+Ka),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,U.get(K).__webglTexture,Ft,tn+Ka)),q.blitFramebuffer(Xt,Qt,kt,It,Zt,Ae,kt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(at!==0||w.isRenderTargetTexture||U.has(w)){const en=U.get(w),Ii=U.get(K);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,pn),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,$l);for(let Ue=0;Ue<jt;Ue++)oi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,en.__webglTexture,at,le+Ue):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,en.__webglTexture,at),Ie?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ii.__webglTexture,Ft,tn+Ue):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ii.__webglTexture,Ft),at!==0?q.blitFramebuffer(Xt,Qt,kt,It,Zt,Ae,kt,It,q.COLOR_BUFFER_BIT,q.NEAREST):Ie?q.copyTexSubImage3D(Gt,Ft,Zt,Ae,tn+Ue,Xt,Qt,kt,It):q.copyTexSubImage2D(Gt,Ft,Zt,Ae,Xt,Qt,kt,It);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ie?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Gt,Ft,Zt,Ae,tn,kt,It,jt,Pe,Oe,We.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Gt,Ft,Zt,Ae,tn,kt,It,jt,Pe,We.data):q.texSubImage3D(Gt,Ft,Zt,Ae,tn,kt,It,jt,Pe,Oe,We):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ft,Zt,Ae,kt,It,Pe,Oe,We.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ft,Zt,Ae,We.width,We.height,Pe,We.data):q.texSubImage2D(q.TEXTURE_2D,Ft,Zt,Ae,kt,It,Pe,Oe,We);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,Vn),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ge),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,bn),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,ri),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,Oi),Ft===0&&K.generateMipmaps&&q.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(w){U.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){ct=0,ht=0,W=null,Rt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}const W3=()=>{const i=Bt.useRef(null),t=Bt.useRef(null),n=Bt.useRef(null),s=Bt.useRef({x:0,y:0});return Bt.useEffect(()=>{if(!i.current)return;const o=new wA,c=new Di(75,window.innerWidth/window.innerHeight,.1,1e3),u=new j3({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(u.domElement);const h=new sf(2,1),m=new ig({color:16096779,wireframe:!0,transparent:!0,opacity:.2}),d=new ha(h,m);o.add(d),t.current=d;const g=new sf(2.05,1),_=new _M({color:14251782,size:.03,transparent:!0,opacity:.4}),v=new zA(g,_);o.add(v),n.current=v,c.position.z=5;const x=S=>{s.current={x:(S.clientX-window.innerWidth/2)/100,y:(S.clientY-window.innerHeight/2)/100}};window.addEventListener("mousemove",x);const b=()=>{var S,y;requestAnimationFrame(b),t.current&&(t.current.rotation.x+=.001,t.current.rotation.y+=.0015,t.current.position.x+=(s.current.x-t.current.position.x)*.02,t.current.position.y+=(-s.current.y-t.current.position.y)*.02),n.current&&(n.current.rotation.x+=.001,n.current.rotation.y+=.0015,n.current.position.x=((S=t.current)==null?void 0:S.position.x)||0,n.current.position.y=((y=t.current)==null?void 0:y.position.y)||0),u.render(o,c)};b();const R=new ResizeObserver(S=>{for(const y of S){const{width:A,height:C}=y.contentRect;u.setSize(A,C),c.aspect=A/C,c.updateProjectionMatrix()}});return R.observe(i.current),()=>{window.removeEventListener("mousemove",x),R.disconnect(),i.current&&i.current.removeChild(u.domElement)}},[]),H.jsx("div",{ref:i,className:"fixed inset-0 -z-10 opacity-40 pointer-events-none",id:"canvas-container"})},sg=Bt.createContext({});function rg(i){const t=Bt.useRef(null);return t.current===null&&(t.current=i()),t.current}const q3=typeof window<"u",UM=q3?Bt.useLayoutEffect:Bt.useEffect,Sf=Bt.createContext(null);function og(i,t){i.indexOf(t)===-1&&i.push(t)}function rf(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const pa=(i,t,n)=>n>t?t:n<i?i:n;let lg=()=>{};const Ns={},LM=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function PM(i){return typeof i=="object"&&i!==null}const OM=i=>/^0[^.\s]+$/u.test(i);function IM(i){let t;return()=>(t===void 0&&(t=i()),t)}const Pi=i=>i,Y3=(i,t)=>n=>t(i(n)),Yl=(...i)=>i.reduce(Y3),Vl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class cg{constructor(){this.subscriptions=[]}add(t){return og(this.subscriptions,t),()=>rf(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _i=i=>i*1e3,Ui=i=>i/1e3;function BM(i,t){return t?i*(1e3/t):0}const FM=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,K3=1e-7,Z3=12;function Q3(i,t,n,s,o){let c,u,h=0;do u=t+(n-t)/2,c=FM(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>K3&&++h<Z3);return u}function Kl(i,t,n,s){if(i===t&&n===s)return Pi;const o=c=>Q3(c,0,1,i,n);return c=>c===0||c===1?c:FM(o(c),t,s)}const zM=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,VM=i=>t=>1-i(1-t),HM=Kl(.33,1.53,.69,.99),ug=VM(HM),GM=zM(ug),kM=i=>i>=1?1:(i*=2)<1?.5*ug(i):.5*(2-Math.pow(2,-10*(i-1))),fg=i=>1-Math.sin(Math.acos(i)),XM=VM(fg),jM=zM(fg),J3=Kl(.42,0,1,1),$3=Kl(0,0,.58,1),WM=Kl(.42,0,.58,1),tD=i=>Array.isArray(i)&&typeof i[0]!="number",qM=i=>Array.isArray(i)&&typeof i[0]=="number",eD={linear:Pi,easeIn:J3,easeInOut:WM,easeOut:$3,circIn:fg,circInOut:jM,circOut:XM,backIn:ug,backInOut:GM,backOut:HM,anticipate:kM},nD=i=>typeof i=="string",Cy=i=>{if(qM(i)){lg(i.length===4);const[t,n,s,o]=i;return Kl(t,n,s,o)}else if(nD(i))return eD[i];return i},Lu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iD(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(g){u.has(g)&&(d.schedule(g),i()),g(h)}const d={schedule:(g,_=!1,v=!1)=>{const b=v&&o?n:s;return _&&u.add(g),b.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(h=g,o){c=!0;return}o=!0;const _=n;n=s,s=_,n.forEach(m),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const aD=40;function YM(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=Lu.reduce((C,N)=>(C[N]=iD(c),C),{}),{setup:h,read:m,resolveKeyframes:d,preUpdate:g,update:_,preRender:v,render:x,postRender:b}=u,R=()=>{const C=Ns.useManualTiming,N=C?o.timestamp:performance.now();n=!1,C||(o.delta=s?1e3/60:Math.max(Math.min(N-o.timestamp,aD),1)),o.timestamp=N,o.isProcessing=!0,h.process(o),m.process(o),d.process(o),g.process(o),_.process(o),v.process(o),x.process(o),b.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(R))},S=()=>{n=!0,s=!0,o.isProcessing||i(R)};return{schedule:Lu.reduce((C,N)=>{const F=u[N];return C[N]=(L,I=!1,E=!1)=>(n||S(),F.schedule(L,I,E)),C},{}),cancel:C=>{for(let N=0;N<Lu.length;N++)u[Lu[N]].cancel(C)},state:o,steps:u}}const{schedule:Ye,cancel:Us,state:In,steps:pp}=YM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pi,!0);let Xu;function sD(){Xu=void 0}const qn={now:()=>(Xu===void 0&&qn.set(In.isProcessing||Ns.useManualTiming?In.timestamp:performance.now()),Xu),set:i=>{Xu=i,queueMicrotask(sD)}},KM=i=>t=>typeof t=="string"&&t.startsWith(i),ZM=KM("--"),rD=KM("var(--"),hg=i=>rD(i)?oD.test(i.split("/*")[0].trim()):!1,oD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wy(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Ao={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Hl={...Ao,transform:i=>pa(0,1,i)},Pu={...Ao,default:1},Pl=i=>Math.round(i*1e5)/1e5,dg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lD(i){return i==null}const cD=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pg=(i,t)=>n=>!!(typeof n=="string"&&cD.test(n)&&n.startsWith(i)||t&&!lD(n)&&Object.prototype.hasOwnProperty.call(n,t)),QM=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,h]=s.match(dg);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},uD=i=>pa(0,255,i),mp={...Ao,transform:i=>Math.round(uD(i))},ur={test:pg("rgb","red"),parse:QM("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+mp.transform(i)+", "+mp.transform(t)+", "+mp.transform(n)+", "+Pl(Hl.transform(s))+")"};function fD(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Mm={test:pg("#"),parse:fD,transform:ur.transform},Zl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Ts=Zl("deg"),ua=Zl("%"),qt=Zl("px"),hD=Zl("vh"),dD=Zl("vw"),Dy={...ua,parse:i=>ua.parse(i)/100,transform:i=>ua.transform(i*100)},fo={test:pg("hsl","hue"),parse:QM("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+ua.transform(Pl(t))+", "+ua.transform(Pl(n))+", "+Pl(Hl.transform(s))+")"},yn={test:i=>ur.test(i)||Mm.test(i)||fo.test(i),parse:i=>ur.test(i)?ur.parse(i):fo.test(i)?fo.parse(i):Mm.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?ur.transform(i):fo.transform(i),getAnimatableNone:i=>{const t=yn.parse(i);return t.alpha=0,yn.transform(t)}},pD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mD(i){var t,n;return isNaN(i)&&typeof i=="string"&&(((t=i.match(dg))==null?void 0:t.length)||0)+(((n=i.match(pD))==null?void 0:n.length)||0)>0}const JM="number",$M="color",gD="var",vD="var(",Ny="${}",_D=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Mo(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const h=t.replace(_D,m=>(yn.test(m)?(s.color.push(c),o.push($M),n.push(yn.parse(m))):m.startsWith(vD)?(s.var.push(c),o.push(gD),n.push(m)):(s.number.push(c),o.push(JM),n.push(parseFloat(m))),++c,Ny)).split(Ny);return{values:n,split:h,indexes:s,types:o}}function xD(i){return Mo(i).values}function tb({split:i,types:t}){const n=i.length;return s=>{let o="";for(let c=0;c<n;c++)if(o+=i[c],s[c]!==void 0){const u=t[c];u===JM?o+=Pl(s[c]):u===$M?o+=yn.transform(s[c]):o+=s[c]}return o}}function yD(i){return tb(Mo(i))}const SD=i=>typeof i=="number"?0:yn.test(i)?yn.getAnimatableNone(i):i,MD=(i,t)=>typeof i=="number"?t!=null&&t.trim().endsWith("/")?i:0:SD(i);function bD(i){const t=Mo(i);return tb(t)(t.values.map((s,o)=>MD(s,t.split[o])))}const qi={test:mD,parse:xD,createTransformer:yD,getAnimatableNone:bD};function gp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function ED({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const h=n<.5?n*(1+t):n+t-n*t,m=2*n-h;o=gp(m,h,i+1/3),c=gp(m,h,i),u=gp(m,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function of(i,t){return n=>n>0?t:i}const Je=(i,t,n)=>i+(t-i)*n,vp=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},TD=[Mm,ur,fo],AD=i=>TD.find(t=>t.test(i));function Uy(i){const t=AD(i);if(!t)return!1;let n=t.parse(i);return t===fo&&(n=ED(n)),n}const Ly=(i,t)=>{const n=Uy(i),s=Uy(t);if(!n||!s)return of(i,t);const o={...n};return c=>(o.red=vp(n.red,s.red,c),o.green=vp(n.green,s.green,c),o.blue=vp(n.blue,s.blue,c),o.alpha=Je(n.alpha,s.alpha,c),ur.transform(o))},bm=new Set(["none","hidden"]);function RD(i,t){return bm.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function CD(i,t){return n=>Je(i,t,n)}function mg(i){return typeof i=="number"?CD:typeof i=="string"?hg(i)?of:yn.test(i)?Ly:ND:Array.isArray(i)?eb:typeof i=="object"?yn.test(i)?Ly:wD:of}function eb(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>mg(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function wD(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=mg(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function DD(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],h=i.values[u]??0;n[o]=h,s[c]++}return n}const ND=(i,t)=>{const n=qi.createTransformer(t),s=Mo(i),o=Mo(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?bm.has(i)&&!o.values.length||bm.has(t)&&!s.values.length?RD(i,t):Yl(eb(DD(s,o),o.values),n):of(i,t)};function nb(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?Je(i,t,n):mg(i)(i,t)}const UD=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Ye.update(t,n),stop:()=>Us(t),now:()=>In.isProcessing?In.timestamp:qn.now()}},ib=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},lf=2e4;function gg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<lf;)t+=n,s=i.next(t);return t>=lf?1/0:t}function LD(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(gg(s),lf);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ui(o)}}const ln={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Em(i,t){return i*Math.sqrt(1-t*t)}const PD=12;function OD(i,t,n){let s=n;for(let o=1;o<PD;o++)s=s-i(s)/t(s);return s}const _p=.001;function ID({duration:i=ln.duration,bounce:t=ln.bounce,velocity:n=ln.velocity,mass:s=ln.mass}){let o,c,u=1-t;u=pa(ln.minDamping,ln.maxDamping,u),i=pa(ln.minDuration,ln.maxDuration,Ui(i)),u<1?(o=d=>{const g=d*u,_=g*i,v=g-n,x=Em(d,u),b=Math.exp(-_);return _p-v/x*b},c=d=>{const _=d*u*i,v=_*n+n,x=Math.pow(u,2)*Math.pow(d,2)*i,b=Math.exp(-_),R=Em(Math.pow(d,2),u);return(-o(d)+_p>0?-1:1)*((v-x)*b)/R}):(o=d=>{const g=Math.exp(-d*i),_=(d-n)*i+1;return-_p+g*_},c=d=>{const g=Math.exp(-d*i),_=(n-d)*(i*i);return g*_});const h=5/i,m=OD(o,c,h);if(i=_i(i),isNaN(m))return{stiffness:ln.stiffness,damping:ln.damping,duration:i};{const d=Math.pow(m,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const BD=["duration","bounce"],FD=["stiffness","damping","mass"];function Py(i,t){return t.some(n=>i[n]!==void 0)}function zD(i){let t={velocity:ln.velocity,stiffness:ln.stiffness,damping:ln.damping,mass:ln.mass,isResolvedFromDuration:!1,...i};if(!Py(i,FD)&&Py(i,BD))if(t.velocity=0,i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*pa(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:ln.mass,stiffness:o,damping:c}}else{const n=ID({...i,velocity:0});t={...t,...n,mass:ln.mass},t.isResolvedFromDuration=!0}return t}function cf(i=ln.visualDuration,t=ln.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],h={done:!1,value:c},{stiffness:m,damping:d,mass:g,duration:_,velocity:v,isResolvedFromDuration:x}=zD({...n,velocity:-Ui(n.velocity||0)}),b=v||0,R=d/(2*Math.sqrt(m*g)),S=u-c,y=Ui(Math.sqrt(m/g)),A=Math.abs(S)<5;s||(s=A?ln.restSpeed.granular:ln.restSpeed.default),o||(o=A?ln.restDelta.granular:ln.restDelta.default);let C,N,F,L,I,E;if(R<1)F=Em(y,R),L=(b+R*y*S)/F,C=V=>{const z=Math.exp(-R*y*V);return u-z*(L*Math.sin(F*V)+S*Math.cos(F*V))},I=R*y*L+S*F,E=R*y*S-L*F,N=V=>Math.exp(-R*y*V)*(I*Math.sin(F*V)+E*Math.cos(F*V));else if(R===1){C=z=>u-Math.exp(-y*z)*(S+(b+y*S)*z);const V=b+y*S;N=z=>Math.exp(-y*z)*(y*V*z-b)}else{const V=y*Math.sqrt(R*R-1);C=ht=>{const W=Math.exp(-R*y*ht),O=Math.min(V*ht,300);return u-W*((b+R*y*S)*Math.sinh(O)+V*S*Math.cosh(O))/V};const z=(b+R*y*S)/V,Y=R*y*z-S*V,ct=R*y*S-z*V;N=ht=>{const W=Math.exp(-R*y*ht),O=Math.min(V*ht,300);return W*(Y*Math.sinh(O)+ct*Math.cosh(O))}}const P={calculatedDuration:x&&_||null,velocity:V=>_i(N(V)),next:V=>{if(!x&&R<1){const Y=Math.exp(-R*y*V),ct=Math.sin(F*V),ht=Math.cos(F*V),W=u-Y*(L*ct+S*ht),O=_i(Y*(I*ct+E*ht));return h.done=Math.abs(O)<=s&&Math.abs(u-W)<=o,h.value=h.done?u:W,h}const z=C(V);if(x)h.done=V>=_;else{const Y=_i(N(V));h.done=Math.abs(Y)<=s&&Math.abs(u-z)<=o}return h.value=h.done?u:z,h},toString:()=>{const V=Math.min(gg(P),lf),z=ib(Y=>P.next(V*Y).value,V,30);return V+"ms "+z},toTransition:()=>{}};return P}cf.applyToOptions=i=>{const t=LD(i,100,cf);return i.ease=t.ease,i.duration=_i(t.duration),i.type="keyframes",i};const VD=5;function ab(i,t,n){const s=Math.max(t-VD,0);return BM(n-i(s),t-s)}function Tm({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:h,max:m,restDelta:d=.5,restSpeed:g}){const _=i[0],v={done:!1,value:_},x=E=>h!==void 0&&E<h||m!==void 0&&E>m,b=E=>h===void 0?m:m===void 0||Math.abs(h-E)<Math.abs(m-E)?h:m;let R=n*t;const S=_+R,y=u===void 0?S:u(S);y!==S&&(R=y-_);const A=E=>-R*Math.exp(-E/s),C=E=>y+A(E),N=E=>{const P=A(E),V=C(E);v.done=Math.abs(P)<=d,v.value=v.done?y:V};let F,L;const I=E=>{x(v.value)&&(F=E,L=cf({keyframes:[v.value,b(v.value)],velocity:ab(C,E,v.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return I(0),{calculatedDuration:null,next:E=>{let P=!1;return!L&&F===void 0&&(P=!0,N(E),I(E)),F!==void 0&&E>=F?L.next(E-F):(!P&&N(E),v)}}}function HD(i,t,n){const s=[],o=n||Ns.mix||nb,c=i.length-1;for(let u=0;u<c;u++){let h=o(i[u],i[u+1]);if(t){const m=Array.isArray(t)?t[u]||Pi:t;h=Yl(m,h)}s.push(h)}return s}function GD(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(lg(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=HD(t,s,o),m=h.length,d=g=>{if(u&&g<i[0])return t[0];let _=0;if(m>1)for(;_<i.length-2&&!(g<i[_+1]);_++);const v=Vl(i[_],i[_+1],g);return h[_](v)};return n?g=>d(pa(i[0],i[c-1],g)):d}function kD(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Vl(0,t,s);i.push(Je(n,1,o))}}function XD(i){const t=[0];return kD(t,i.length-1),t}function jD(i,t){return i.map(n=>n*t)}function WD(i,t){return i.map(()=>t||WM).splice(0,i.length-1)}function Ol({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=tD(s)?s.map(Cy):Cy(s),c={done:!1,value:t[0]},u=jD(n&&n.length===t.length?n:XD(t),i),h=GD(u,t,{ease:Array.isArray(o)?o:WD(t,o)});return{calculatedDuration:i,next:m=>(c.value=h(m),c.done=m>=i,c)}}const qD=i=>i!==null;function Mf(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(qD),h=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!h||s===void 0?c[h]:s}const YD={decay:Tm,inertia:Tm,tween:Ol,keyframes:Ol,spring:cf};function sb(i){typeof i.type=="string"&&(i.type=YD[i.type])}class vg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const KD=i=>i/100;class uf extends vg{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,o;const{motionValue:n}=this.options;n&&n.updatedAt!==qn.now()&&this.tick(qn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(s=this.options).onStop)==null||o.call(s))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;sb(t);const{type:n=Ol,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:h}=t;const m=n||Ol;m!==Ol&&typeof h[0]!="number"&&(this.mixKeyframes=Yl(KD,nb(h[0],h[1])),h=[0,100]);const d=m({...t,keyframes:h});c==="mirror"&&(this.mirroredGenerator=m({...t,keyframes:[...h].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=gg(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:_,repeatType:v,repeatDelay:x,type:b,onUpdate:R,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),A=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,N=s;if(_){const E=Math.min(this.currentTime,o)/h;let P=Math.floor(E),V=E%1;!V&&E>=1&&(V=1),V===1&&P--,P=Math.min(P,_+1),!!(P%2)&&(v==="reverse"?(V=1-V,x&&(V-=x/h)):v==="mirror"&&(N=u)),C=pa(0,1,V)*h}let F;A?(this.delayState.value=g[0],F=this.delayState):F=N.next(C),c&&!A&&(F.value=c(F.value));let{done:L}=F;!A&&m!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return I&&b!==Tm&&(F.value=Mf(g,this.options,S,this.speed)),R&&R(F.value),I&&this.finish(),F}then(t,n){return this.finished.then(t,n)}get duration(){return Ui(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ui(t)}get time(){return Ui(this.currentTime)}set time(t){t=_i(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return ab(s=>this.generator.next(s).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(qn.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Ui(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=UD,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function ZD(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const fr=i=>i*180/Math.PI,Am=i=>{const t=fr(Math.atan2(i[1],i[0]));return Rm(t)},QD={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Am,rotateZ:Am,skewX:i=>fr(Math.atan(i[1])),skewY:i=>fr(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Rm=i=>(i=i%360,i<0&&(i+=360),i),Oy=Am,Iy=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),By=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),JD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Iy,scaleY:By,scale:i=>(Iy(i)+By(i))/2,rotateX:i=>Rm(fr(Math.atan2(i[6],i[5]))),rotateY:i=>Rm(fr(Math.atan2(-i[2],i[0]))),rotateZ:Oy,rotate:Oy,skewX:i=>fr(Math.atan(i[4])),skewY:i=>fr(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Cm(i){return i.includes("scale")?1:0}function wm(i,t){if(!i||i==="none")return Cm(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=JD,o=n;else{const h=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=QD,o=h}if(!o)return Cm(t);const c=s[t],u=o[1].split(",").map(tN);return typeof c=="function"?c(u):u[c]}const $D=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return wm(n,t)};function tN(i){return parseFloat(i.trim())}const Ro=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Co=new Set(Ro),Fy=i=>i===Ao||i===qt,eN=new Set(["x","y","z"]),nN=Ro.filter(i=>!eN.has(i));function iN(i){const t=[];return nN.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const ws={width:({x:i},{paddingLeft:t="0",paddingRight:n="0",boxSizing:s})=>{const o=i.max-i.min;return s==="border-box"?o:o-parseFloat(t)-parseFloat(n)},height:({y:i},{paddingTop:t="0",paddingBottom:n="0",boxSizing:s})=>{const o=i.max-i.min;return s==="border-box"?o:o-parseFloat(t)-parseFloat(n)},top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>wm(t,"x"),y:(i,{transform:t})=>wm(t,"y")};ws.translateX=ws.x;ws.translateY=ws.y;const hr=new Set;let Dm=!1,Nm=!1,Um=!1;function rb(){if(Nm){const i=Array.from(hr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=iN(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{var h;(h=s.getValue(c))==null||h.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Nm=!1,Dm=!1,hr.forEach(i=>i.complete(Um)),hr.clear()}function ob(){hr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Nm=!0)})}function aN(){Um=!0,ob(),rb(),Um=!1}class _g{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(hr.add(this),Dm||(Dm=!0,Ye.read(ob),Ye.resolveKeyframes(rb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const h=s.readValue(n,u);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}ZD(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),hr.delete(this)}cancel(){this.state==="scheduled"&&(hr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sN=i=>i.startsWith("--");function lb(i,t,n){sN(t)?i.style.setProperty(t,n):i.style[t]=n}const rN={};function cb(i,t){const n=IM(i);return()=>rN[t]??n()}const oN=cb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ub=cb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ll=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,zy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ll([0,.65,.55,1]),circOut:Ll([.55,0,1,.45]),backIn:Ll([.31,.01,.66,-.59]),backOut:Ll([.33,1.53,.69,.99])};function fb(i,t){if(i)return typeof i=="function"?ub()?ib(i,t):"ease-out":qM(i)?Ll(i):Array.isArray(i)?i.map(n=>fb(n,t)||zy.easeOut):zy[i]}function lN(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:m}={},d=void 0){const g={[t]:n};m&&(g.offset=m);const _=fb(h,o);Array.isArray(_)&&(g.easing=_);const v={delay:s,duration:o,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(v.pseudoElement=d),i.animate(g,v)}function hb(i){return typeof i=="function"&&"applyToOptions"in i}function cN({type:i,...t}){return hb(i)&&ub()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class db extends vg{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:m}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,lg(typeof t.type!="string");const d=cN(t);this.animation=lN(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=Mf(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(g),lb(n,s,g),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,o;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((o=(s=this.animation).commitStyles)==null||o.call(s))}get duration(){var n,s;const t=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ui(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ui(t)}get time(){return Ui(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=_i(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:s,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&oN()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Pi):o(this)}}const pb={anticipate:kM,backInOut:GM,circInOut:jM};function uN(i){return i in pb}function fN(i){typeof i.ease=="string"&&uN(i.ease)&&(i.ease=pb[i.ease])}const xp=10;class hN extends db{constructor(t){fN(t),sb(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new uf({...u,autoplay:!1}),m=Math.max(xp,qn.now()-this.startTime),d=pa(0,xp,m-xp),g=h.sample(m).value,{name:_}=this.options;c&&_&&lb(c,_,g),n.setWithVelocity(h.sample(Math.max(0,m-d)).value,g,d),h.stop()}}const Vy=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(qi.test(i)||i==="0")&&!i.startsWith("url("));function dN(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function pN(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=Vy(o,t),h=Vy(c,t);return!u||!h?!1:dN(i)||(n==="spring"||hb(n))&&s}function Lm(i){i.duration=0,i.type="keyframes"}const mb=new Set(["opacity","clipPath","filter","transform"]),mN=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function gN(i){for(let t=0;t<i.length;t++)if(typeof i[t]=="string"&&mN.test(i[t]))return!0;return!1}const vN=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),_N=IM(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xN(i){var _;const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u,keyframes:h}=i;if(!(((_=t==null?void 0:t.owner)==null?void 0:_.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:g}=t.owner.getProps();return _N()&&n&&(mb.has(n)||vN.has(n)&&gN(h))&&(n!=="transform"||!g)&&!d&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const yN=40;class SN extends vg{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:h,name:m,motionValue:d,element:g,..._}){var b;super(),this.stop=()=>{var R,S;this._animation&&(this._animation.stop(),(R=this.stopTimeline)==null||R.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=qn.now();const v={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:d,element:g,..._},x=(g==null?void 0:g.KeyframeResolver)||_g;this.keyframeResolver=new x(h,(R,S,y)=>this.onKeyframesResolved(R,S,v,!y),m,d,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,s,o){var y,A;this.keyframeResolver=void 0;const{name:c,type:u,velocity:h,delay:m,isHandoff:d,onUpdate:g}=s;this.resolvedAt=qn.now();let _=!0;pN(t,c,u,h)||(_=!1,(Ns.instantAnimations||!m)&&(g==null||g(Mf(t,s,n))),t[0]=t[t.length-1],Lm(s),s.repeat=0);const x={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>yN?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},b=_&&!d&&xN(x),R=(A=(y=x.motionValue)==null?void 0:y.owner)==null?void 0:A.current;let S;if(b)try{S=new hN({...x,element:R})}catch{S=new uf(x)}else S=new uf(x);S.finished.then(()=>{this.notifyFinished()}).catch(Pi),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),aN()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function gb(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,h=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:h-c*s}const MN=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bN(i){const t=MN.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function vb(i,t,n=1){const[s,o]=bN(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return LM(u)?parseFloat(u):u}return hg(o)?vb(o,t,n+1):o}const EN={type:"spring",stiffness:500,damping:25,restSpeed:10},TN=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),AN={type:"keyframes",duration:.8},RN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CN=(i,{keyframes:t})=>t.length>2?AN:Co.has(i)?i.startsWith("scale")?TN(t[1]):EN:RN;function _b(i,t){if(i!=null&&i.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function xg(i,t){const n=(i==null?void 0:i[t])??(i==null?void 0:i.default)??i;return n!==i?_b(n,i):n}const wN=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function DN(i){for(const t in i)if(!wN.has(t))return!0;return!1}const yg=(i,t,n,s={},o,c)=>u=>{const h=xg(s,i)||{},m=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-_i(m);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-d,onUpdate:v=>{t.set(v),h.onUpdate&&h.onUpdate(v)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:c?void 0:o};DN(h)||Object.assign(g,CN(i,g)),g.duration&&(g.duration=_i(g.duration)),g.repeatDelay&&(g.repeatDelay=_i(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let _=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Lm(g),g.delay===0&&(_=!0)),(Ns.instantAnimations||Ns.skipAnimations||o!=null&&o.shouldSkipAnimations)&&(_=!0,Lm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,_&&!c&&t.get()!==void 0){const v=Mf(g.keyframes,h);if(v!==void 0){Ye.update(()=>{g.onUpdate(v),g.onComplete()});return}}return h.isSync?new uf(g):new SN(g)};function Hy(i){const t=[{},{}];return i==null||i.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function Sg(i,t,n,s){if(typeof t=="function"){const[o,c]=Hy(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=Hy(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function dr(i,t,n){const s=i.getProps();return Sg(s,t,n!==void 0?n:s.custom,i)}const xb=new Set(["width","height","top","left","right","bottom",...Ro]),Gy=30,NN=i=>!isNaN(parseFloat(i));class UN{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var c;const o=qn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=qn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=NN(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new cg);const s=this.events[t].add(n);return t==="change"?()=>{s(),Ye.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=qn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Gy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Gy);return BM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bo(i,t){return new UN(i,t)}const Pm=i=>Array.isArray(i);function LN(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,bo(n))}function PN(i){return Pm(i)?i[i.length-1]||0:i}function ON(i,t){const n=dr(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const h=PN(c[u]);LN(i,u,h)}}const Fn=i=>!!(i&&i.getVelocity);function IN(i){return!!(Fn(i)&&i.add)}function Om(i,t){const n=i.getValue("willChange");if(IN(n))return n.add(t);if(!n&&Ns.WillChange){const s=new Ns.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function Mg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const BN="framerAppearId",yb="data-"+Mg(BN);function Sb(i){return i.props[yb]}function FN({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function Mb(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...h}=t;const m=i.getDefaultTransition();c=c?_b(c,m):m;const d=c==null?void 0:c.reduceMotion;s&&(c=s);const g=[],_=o&&i.animationState&&i.animationState.getState()[o];for(const v in h){const x=i.getValue(v,i.latestValues[v]??null),b=h[v];if(b===void 0||_&&FN(_,v))continue;const R={delay:n,...xg(c||{},v)},S=x.get();if(S!==void 0&&!x.isAnimating()&&!Array.isArray(b)&&b===S&&!R.velocity){Ye.update(()=>x.set(b));continue}let y=!1;if(window.MotionHandoffAnimation){const N=Sb(i);if(N){const F=window.MotionHandoffAnimation(N,v,Ye);F!==null&&(R.startTime=F,y=!0)}}Om(i,v);const A=d??i.shouldReduceMotion;x.start(yg(v,x,b,A&&xb.has(v)?{type:!1}:R,i,y));const C=x.animation;C&&g.push(C)}if(u){const v=()=>Ye.update(()=>{u&&ON(i,u)});g.length?Promise.all(g).then(v):v()}return g}function Im(i,t,n={}){var m;const s=dr(i,t,n.type==="exit"?(m=i.presenceContext)==null?void 0:m.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(Mb(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(d=0)=>{const{delayChildren:g=0,staggerChildren:_,staggerDirection:v}=o;return zN(i,t,d,g,_,v,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[d,g]=h==="beforeChildren"?[c,u]:[u,c];return d().then(()=>g())}else return Promise.all([c(),u(n.delay)])}function zN(i,t,n=0,s=0,o=0,c=1,u){const h=[];for(const m of i.variantChildren)m.notify("AnimationStart",t),h.push(Im(m,t,{...u,delay:n+(typeof s=="function"?0:s)+gb(i.variantChildren,m,s,o,c)}).then(()=>m.notify("AnimationComplete",t)));return Promise.all(h)}function VN(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Im(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Im(i,t,n);else{const o=typeof t=="function"?dr(i,t,n.custom):t;s=Promise.all(Mb(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const HN={test:i=>i==="auto",parse:i=>i},bb=i=>t=>t.test(i),Eb=[Ao,qt,ua,Ts,dD,hD,HN],ky=i=>Eb.find(bb(i));function GN(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||OM(i):!0}const kN=new Set(["brightness","contrast","saturate","opacity"]);function XN(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(dg)||[];if(!s)return i;const o=n.replace(s,"");let c=kN.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const jN=/\b([a-z-]*)\(.*?\)/gu,Bm={...qi,getAnimatableNone:i=>{const t=i.match(jN);return t?t.map(XN).join(" "):i}},Fm={...qi,getAnimatableNone:i=>{const t=qi.parse(i);return qi.createTransformer(i)(t.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Xy={...Ao,transform:Math.round},WN={rotate:Ts,rotateX:Ts,rotateY:Ts,rotateZ:Ts,scale:Pu,scaleX:Pu,scaleY:Pu,scaleZ:Pu,skew:Ts,skewX:Ts,skewY:Ts,distance:qt,translateX:qt,translateY:qt,translateZ:qt,x:qt,y:qt,z:qt,perspective:qt,transformPerspective:qt,opacity:Hl,originX:Dy,originY:Dy,originZ:qt},bg={borderWidth:qt,borderTopWidth:qt,borderRightWidth:qt,borderBottomWidth:qt,borderLeftWidth:qt,borderRadius:qt,borderTopLeftRadius:qt,borderTopRightRadius:qt,borderBottomRightRadius:qt,borderBottomLeftRadius:qt,width:qt,maxWidth:qt,height:qt,maxHeight:qt,top:qt,right:qt,bottom:qt,left:qt,inset:qt,insetBlock:qt,insetBlockStart:qt,insetBlockEnd:qt,insetInline:qt,insetInlineStart:qt,insetInlineEnd:qt,padding:qt,paddingTop:qt,paddingRight:qt,paddingBottom:qt,paddingLeft:qt,paddingBlock:qt,paddingBlockStart:qt,paddingBlockEnd:qt,paddingInline:qt,paddingInlineStart:qt,paddingInlineEnd:qt,margin:qt,marginTop:qt,marginRight:qt,marginBottom:qt,marginLeft:qt,marginBlock:qt,marginBlockStart:qt,marginBlockEnd:qt,marginInline:qt,marginInlineStart:qt,marginInlineEnd:qt,fontSize:qt,backgroundPositionX:qt,backgroundPositionY:qt,...WN,zIndex:Xy,fillOpacity:Hl,strokeOpacity:Hl,numOctaves:Xy},qN={...bg,color:yn,backgroundColor:yn,outlineColor:yn,fill:yn,stroke:yn,borderColor:yn,borderTopColor:yn,borderRightColor:yn,borderBottomColor:yn,borderLeftColor:yn,filter:Bm,WebkitFilter:Bm,mask:Fm,WebkitMask:Fm},Tb=i=>qN[i],YN=new Set([Bm,Fm]);function Ab(i,t){let n=Tb(i);return YN.has(n)||(n=qi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const KN=new Set(["auto","none","0"]);function ZN(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!KN.has(c)&&Mo(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=Ab(n,o)}class QN extends _g{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let _=t[g];if(typeof _=="string"&&(_=_.trim(),hg(_))){const v=vb(_,n.current);v!==void 0&&(t[g]=v),g===t.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!xb.has(s)||t.length!==2)return;const[o,c]=t,u=ky(o),h=ky(c),m=wy(o),d=wy(c);if(m!==d&&ws[s]){this.needsMeasurement=!0;return}if(u!==h)if(Fy(u)&&Fy(h))for(let g=0;g<t.length;g++){const _=t[g];typeof _=="string"&&(t[g]=parseFloat(_))}else ws[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||GN(t[o]))&&s.push(o);s.length&&ZN(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ws[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){var h;const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=ws[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([m,d])=>{t.getValue(m).set(d)}),this.resolveNoneKeyframes()}}function Rb(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=(n==null?void 0:n[i])??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const Cb=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function ju(i){return PM(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)}const{schedule:Eg}=YM(queueMicrotask,!1),Xi={x:!1,y:!1};function wb(){return Xi.x||Xi.y}function JN(i){return i==="x"||i==="y"?Xi[i]?null:(Xi[i]=!0,()=>{Xi[i]=!1}):Xi.x||Xi.y?null:(Xi.x=Xi.y=!0,()=>{Xi.x=Xi.y=!1})}function Db(i,t){const n=Rb(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function $N(i){return!(i.pointerType==="touch"||wb())}function tU(i,t,n={}){const[s,o,c]=Db(i,n);return s.forEach(u=>{let h=!1,m=!1,d;const g=()=>{u.removeEventListener("pointerleave",b)},_=S=>{d&&(d(S),d=void 0),g()},v=S=>{h=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),m&&(m=!1,_(S))},x=()=>{h=!0,window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",v,o)},b=S=>{if(S.pointerType!=="touch"){if(h){m=!0;return}_(S)}},R=S=>{if(!$N(S))return;m=!1;const y=t(u,S);typeof y=="function"&&(d=y,u.addEventListener("pointerleave",b,o))};u.addEventListener("pointerenter",R,o),u.addEventListener("pointerdown",x,o)}),c}const Nb=(i,t)=>t?i===t?!0:Nb(i,t.parentElement):!1,Tg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,eU=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function nU(i){return eU.has(i.tagName)||i.isContentEditable===!0}const iU=new Set(["INPUT","SELECT","TEXTAREA"]);function aU(i){return iU.has(i.tagName)||i.isContentEditable===!0}const Wu=new WeakSet;function jy(i){return t=>{t.key==="Enter"&&i(t)}}function yp(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const sU=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=jy(()=>{if(Wu.has(n))return;yp(n,"down");const o=jy(()=>{yp(n,"up")}),c=()=>yp(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Wy(i){return Tg(i)&&!wb()}const qy=new WeakSet;function rU(i,t,n={}){const[s,o,c]=Db(i,n),u=h=>{const m=h.currentTarget;if(!Wy(h)||qy.has(h))return;Wu.add(m),n.stopPropagation&&qy.add(h);const d=t(m,h),g=(x,b)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",v),Wu.has(m)&&Wu.delete(m),Wy(x)&&typeof d=="function"&&d(x,{success:b})},_=x=>{g(x,m===window||m===document||n.useGlobalTarget||Nb(m,x.target))},v=x=>{g(x,!1)};window.addEventListener("pointerup",_,o),window.addEventListener("pointercancel",v,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",u,o),ju(h)&&(h.addEventListener("focus",d=>sU(d,o)),!nU(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function Ag(i){return PM(i)&&"ownerSVGElement"in i}const qu=new WeakMap;let As;const Ub=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:Ag(s)&&"getBBox"in s?s.getBBox()[t]:s[n],oU=Ub("inline","width","offsetWidth"),lU=Ub("block","height","offsetHeight");function cU({target:i,borderBoxSize:t}){var n;(n=qu.get(i))==null||n.forEach(s=>{s(i,{get width(){return oU(i,t)},get height(){return lU(i,t)}})})}function uU(i){i.forEach(cU)}function fU(){typeof ResizeObserver>"u"||(As=new ResizeObserver(uU))}function hU(i,t){As||fU();const n=Rb(i);return n.forEach(s=>{let o=qu.get(s);o||(o=new Set,qu.set(s,o)),o.add(t),As==null||As.observe(s)}),()=>{n.forEach(s=>{const o=qu.get(s);o==null||o.delete(t),o!=null&&o.size||As==null||As.unobserve(s)})}}const Yu=new Set;let ho;function dU(){ho=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};Yu.forEach(t=>t(i))},window.addEventListener("resize",ho)}function pU(i){return Yu.add(i),ho||dU(),()=>{Yu.delete(i),!Yu.size&&typeof ho=="function"&&(window.removeEventListener("resize",ho),ho=void 0)}}function Yy(i,t){return typeof i=="function"?pU(i):hU(i,t)}function mU(i){return Ag(i)&&i.tagName==="svg"}const gU=[...Eb,yn,qi],vU=i=>gU.find(bb(i)),Ky=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:Ky(),y:Ky()}),Zy=()=>({min:0,max:0}),Tn=()=>({x:Zy(),y:Zy()}),_U=new WeakMap;function bf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Gl(i){return typeof i=="string"||Array.isArray(i)}const Rg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cg=["initial",...Rg];function Ef(i){return bf(i.animate)||Cg.some(t=>Gl(i[t]))}function Lb(i){return!!(Ef(i)||i.variants)}function xU(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Fn(o))i.addValue(s,o);else if(Fn(c))i.addValue(s,bo(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,bo(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const zm={current:null},Pb={current:!1},yU=typeof window<"u";function SU(){if(Pb.current=!0,!!yU)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>zm.current=i.matches;i.addEventListener("change",t),t()}else zm.current=!1}const Qy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ff={};function Ob(i){ff=i}function MU(){return ff}class bU{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=_g,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=qn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Ye.render(this.render,!1,!0))};const{latestValues:d,renderState:g}=h;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=Ef(n),this.isVariantNode=Lb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:_,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in v){const b=v[x];d[x]!==void 0&&Fn(b)&&b.set(d[x])}}mount(t){var n,s;if(this.hasBeenMounted)for(const o in this.initialValues)(n=this.values.get(o))==null||n.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=t,_U.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Pb.current||SU(),this.shouldReduceMotion=zm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Us(this.notifyUpdate),Us(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&mb.has(t)&&this.current instanceof HTMLElement){const{factory:u,keyframes:h,times:m,ease:d,duration:g}=n.accelerate,_=new db({element:this.current,name:t,keyframes:h,times:m,ease:d,duration:_i(g)}),v=u(_);this.valueSubscriptions.set(t,()=>{v(),_.cancel()});return}const s=Co.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ye.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ff){const n=ff[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Tn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Qy.length;s++){const o=Qy[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=xU(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=bo(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(LM(s)||OM(s))?s=parseFloat(s):!vU(s)&&qi.test(n)&&(s=Ab(t,n)),this.setBaseTarget(t,Fn(s)?s.get():s)),Fn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var c;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=Sg(this.props,n,(c=this.presenceContext)==null?void 0:c.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Fn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new cg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Eg.render(this.render)}}class Ib extends bU{constructor(){super(...arguments),this.KeyframeResolver=QN}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Fn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ls{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Bb({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function EU({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function TU(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Sp(i){return i===void 0||i===1}function Vm({scale:i,scaleX:t,scaleY:n}){return!Sp(i)||!Sp(t)||!Sp(n)}function sr(i){return Vm(i)||Fb(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function Fb(i){return Jy(i.x)||Jy(i.y)}function Jy(i){return i&&i!=="0%"}function hf(i,t,n){const s=i-n,o=t*s;return n+o}function $y(i,t,n,s,o){return o!==void 0&&(i=hf(i,o,s)),hf(i,n,s)+t}function Hm(i,t=0,n=1,s,o){i.min=$y(i.min,t,n,s,o),i.max=$y(i.max,t,n,s,o)}function zb(i,{x:t,y:n}){Hm(i.x,t.translate,t.scale,t.originPoint),Hm(i.y,n.translate,n.scale,n.originPoint)}const tS=.999999999999,eS=1.0000000000001;function AU(i,t,n,s=!1){var h;const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let m=0;m<o;m++){c=n[m],u=c.projectionDelta;const{visualElement:d}=c.options;d&&d.props.style&&d.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(aa(i.x,-c.scroll.offset.x),aa(i.y,-c.scroll.offset.y)),u&&(t.x*=u.x.scale,t.y*=u.y.scale,zb(i,u)),s&&sr(c.latestValues)&&Ku(i,c.latestValues,(h=c.layout)==null?void 0:h.layoutBox))}t.x<eS&&t.x>tS&&(t.x=1),t.y<eS&&t.y>tS&&(t.y=1)}function aa(i,t){i.min+=t,i.max+=t}function nS(i,t,n,s,o=.5){const c=Je(i.min,i.max,o);Hm(i,t,n,c,s)}function iS(i,t){return typeof i=="string"?parseFloat(i)/100*(t.max-t.min):i}function Ku(i,t,n){const s=n??i;nS(i.x,iS(t.x,s.x),t.scaleX,t.scale,t.originX),nS(i.y,iS(t.y,s.y),t.scaleY,t.scale,t.originY)}function Vb(i,t){return Bb(TU(i.getBoundingClientRect(),t))}function RU(i,t,n){const s=Vb(i,n),{scroll:o}=t;return o&&(aa(s.x,o.offset.x),aa(s.y,o.offset.y)),s}const CU={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wU=Ro.length;function DU(i,t,n){let s="",o=!0;for(let c=0;c<wU;c++){const u=Ro[c],h=i[u];if(h===void 0)continue;let m=!0;if(typeof h=="number")m=h===(u.startsWith("scale")?1:0);else{const d=parseFloat(h);m=u.startsWith("scale")?d===1:d===0}if(!m||n){const d=Cb(h,bg[u]);if(!m){o=!1;const g=CU[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function wg(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,h=!1;for(const m in t){const d=t[m];if(Co.has(m)){u=!0;continue}else if(ZM(m)){o[m]=d;continue}else{const g=Cb(d,bg[m]);m.startsWith("origin")?(h=!0,c[m]=g):s[m]=g}}if(t.transform||(u||n?s.transform=DU(t,i.transform,n):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${m} ${d} ${g}`}}function Hb(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o==null||o.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function aS(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Dl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(qt.test(i))i=parseFloat(i);else return i;const n=aS(i,t.target.x),s=aS(i,t.target.y);return`${n}% ${s}%`}},NU={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=qi.parse(i);if(o.length>5)return s;const c=qi.createTransformer(i),u=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,m=n.y.scale*t.y;o[0+u]/=h,o[1+u]/=m;const d=Je(h,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},Gm={borderRadius:{...Dl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Dl,borderTopRightRadius:Dl,borderBottomLeftRadius:Dl,borderBottomRightRadius:Dl,boxShadow:NU};function Gb(i,{layout:t,layoutId:n}){return Co.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!Gm[i]||i==="opacity")}function Dg(i,t,n){var u;const s=i.style,o=t==null?void 0:t.style,c={};if(!s)return c;for(const h in s)(Fn(s[h])||o&&Fn(o[h])||Gb(h,i)||((u=n==null?void 0:n.getValue(h))==null?void 0:u.liveStyle)!==void 0)&&(c[h]=s[h]);return c}function UU(i){return window.getComputedStyle(i)}class LU extends Ib{constructor(){super(...arguments),this.type="html",this.renderInstance=Hb}readValueFromInstance(t,n){var s;if(Co.has(n))return(s=this.projection)!=null&&s.isProjecting?Cm(n):$D(t,n);{const o=UU(t),c=(ZM(n)?o.getPropertyValue(n):o[n])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Vb(t,n)}build(t,n,s){wg(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Dg(t,n,s)}}const PU={offset:"stroke-dashoffset",array:"stroke-dasharray"},OU={offset:"strokeDashoffset",array:"strokeDasharray"};function IU(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?PU:OU;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const BU=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function kb(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...h},m,d,g){if(wg(i,h,d),m){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:_,style:v}=i;_.transform&&(v.transform=_.transform,delete _.transform),(v.transform||_.transformOrigin)&&(v.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),v.transform&&(v.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete _.transformBox);for(const x of BU)_[x]!==void 0&&(v[x]=_[x],delete _[x]);t!==void 0&&(_.x=t),n!==void 0&&(_.y=n),s!==void 0&&(_.scale=s),o!==void 0&&IU(_,o,c,u,!1)}const Xb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),jb=i=>typeof i=="string"&&i.toLowerCase()==="svg";function FU(i,t,n,s){Hb(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(Xb.has(o)?o:Mg(o),t.attrs[o])}function Wb(i,t,n){const s=Dg(i,t,n);for(const o in i)if(Fn(i[o])||Fn(t[o])){const c=Ro.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class zU extends Ib{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Tn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Co.has(n)){const s=Tb(n);return s&&s.default||0}return n=Xb.has(n)?n:Mg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return Wb(t,n,s)}build(t,n,s){kb(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){FU(t,n,s,o)}mount(t){this.isSVGTag=jb(t.tagName),super.mount(t)}}const VU=Cg.length;function qb(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?qb(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<VU;n++){const s=Cg[n],o=i.props[s];(Gl(o)||o===!1)&&(t[s]=o)}return t}function Yb(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const HU=[...Rg].reverse(),GU=Rg.length;function kU(i){return t=>Promise.all(t.map(({animation:n,options:s})=>VN(i,n,s)))}function XU(i){let t=kU(i),n=sS(),s=!0,o=!1;const c=d=>(g,_)=>{var x;const v=dr(i,_,d==="exit"?(x=i.presenceContext)==null?void 0:x.custom:void 0);if(v){const{transition:b,transitionEnd:R,...S}=v;g={...g,...S,...R}}return g};function u(d){t=d(i)}function h(d){const{props:g}=i,_=qb(i.parent)||{},v=[],x=new Set;let b={},R=1/0;for(let y=0;y<GU;y++){const A=HU[y],C=n[A],N=g[A]!==void 0?g[A]:_[A],F=Gl(N),L=A===d?C.isActive:null;L===!1&&(R=y);let I=N===_[A]&&N!==g[A]&&F;if(I&&(s||o)&&i.manuallyAnimateOnMount&&(I=!1),C.protectedKeys={...b},!C.isActive&&L===null||!N&&!C.prevProp||bf(N)||typeof N=="boolean")continue;if(A==="exit"&&C.isActive&&L!==!0){C.prevResolvedValues&&(b={...b,...C.prevResolvedValues});continue}const E=jU(C.prevProp,N);let P=E||A===d&&C.isActive&&!I&&F||y>R&&F,V=!1;const z=Array.isArray(N)?N:[N];let Y=z.reduce(c(A),{});L===!1&&(Y={});const{prevResolvedValues:ct={}}=C,ht={...ct,...Y},W=$=>{P=!0,x.has($)&&(V=!0,x.delete($)),C.needsAnimating[$]=!0;const ft=i.getValue($);ft&&(ft.liveStyle=!1)};for(const $ in ht){const ft=Y[$],xt=ct[$];if(b.hasOwnProperty($))continue;let B=!1;Pm(ft)&&Pm(xt)?B=!Yb(ft,xt):B=ft!==xt,B?ft!=null?W($):x.add($):ft!==void 0&&x.has($)?W($):C.protectedKeys[$]=!0}C.prevProp=N,C.prevResolvedValues=Y,C.isActive&&(b={...b,...Y}),(s||o)&&i.blockInitialAnimation&&(P=!1);const O=I&&E;P&&(!O||V)&&v.push(...z.map($=>{const ft={type:A};if(typeof $=="string"&&(s||o)&&!O&&i.manuallyAnimateOnMount&&i.parent){const{parent:xt}=i,B=dr(xt,$);if(xt.enteringChildren&&B){const{delayChildren:Q}=B.transition||{};ft.delay=gb(xt.enteringChildren,i,Q)}}return{animation:$,options:ft}}))}if(x.size){const y={};if(typeof g.initial!="boolean"){const A=dr(i,Array.isArray(g.initial)?g.initial[0]:g.initial);A&&A.transition&&(y.transition=A.transition)}x.forEach(A=>{const C=i.getBaseTarget(A),N=i.getValue(A);N&&(N.liveStyle=!0),y[A]=C??null}),v.push({animation:y})}let S=!!v.length;return s&&(g.initial===!1||g.initial===g.animate)&&!i.manuallyAnimateOnMount&&(S=!1),s=!1,o=!1,S?t(v):Promise.resolve()}function m(d,g){var v;if(n[d].isActive===g)return Promise.resolve();(v=i.variantChildren)==null||v.forEach(x=>{var b;return(b=x.animationState)==null?void 0:b.setActive(d,g)}),n[d].isActive=g;const _=h(d);for(const x in n)n[x].protectedKeys={};return _}return{animateChanges:h,setActive:m,setAnimateFunction:u,getState:()=>n,reset:()=>{n=sS(),o=!0}}}function jU(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!Yb(t,i):!1}function ir(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function sS(){return{animate:ir(!0),whileInView:ir(),whileHover:ir(),whileTap:ir(),whileDrag:ir(),whileFocus:ir(),exit:ir()}}function km(i,t){i.min=t.min,i.max=t.max}function ki(i,t){km(i.x,t.x),km(i.y,t.y)}function rS(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const Kb=1e-4,WU=1-Kb,qU=1+Kb,Zb=.01,YU=0-Zb,KU=0+Zb;function Yn(i){return i.max-i.min}function ZU(i,t,n){return Math.abs(i-t)<=n}function oS(i,t,n,s=.5){i.origin=s,i.originPoint=Je(t.min,t.max,i.origin),i.scale=Yn(n)/Yn(t),i.translate=Je(n.min,n.max,i.origin)-i.originPoint,(i.scale>=WU&&i.scale<=qU||isNaN(i.scale))&&(i.scale=1),(i.translate>=YU&&i.translate<=KU||isNaN(i.translate))&&(i.translate=0)}function Il(i,t,n,s){oS(i.x,t.x,n.x,s?s.originX:void 0),oS(i.y,t.y,n.y,s?s.originY:void 0)}function lS(i,t,n,s=0){const o=s?Je(n.min,n.max,s):n.min;i.min=o+t.min,i.max=i.min+Yn(t)}function QU(i,t,n,s){lS(i.x,t.x,n.x,s==null?void 0:s.x),lS(i.y,t.y,n.y,s==null?void 0:s.y)}function cS(i,t,n,s=0){const o=s?Je(n.min,n.max,s):n.min;i.min=t.min-o,i.max=i.min+Yn(t)}function df(i,t,n,s){cS(i.x,t.x,n.x,s==null?void 0:s.x),cS(i.y,t.y,n.y,s==null?void 0:s.y)}function uS(i,t,n,s,o){return i-=t,i=hf(i,1/n,s),o!==void 0&&(i=hf(i,1/o,s)),i}function JU(i,t=0,n=1,s=.5,o,c=i,u=i){if(ua.test(t)&&(t=parseFloat(t),t=Je(u.min,u.max,t/100)-u.min),typeof t!="number")return;let h=Je(c.min,c.max,s);i===c&&(h-=t),i.min=uS(i.min,t,n,h,o),i.max=uS(i.max,t,n,h,o)}function fS(i,t,[n,s,o],c,u){JU(i,t[n],t[s],t[o],t.scale,c,u)}const $U=["x","scaleX","originX"],tL=["y","scaleY","originY"];function hS(i,t,n,s){fS(i.x,t,$U,n?n.x:void 0,s?s.x:void 0),fS(i.y,t,tL,n?n.y:void 0,s?s.y:void 0)}function dS(i){return i.translate===0&&i.scale===1}function Qb(i){return dS(i.x)&&dS(i.y)}function pS(i,t){return i.min===t.min&&i.max===t.max}function eL(i,t){return pS(i.x,t.x)&&pS(i.y,t.y)}function mS(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function Jb(i,t){return mS(i.x,t.x)&&mS(i.y,t.y)}function gS(i){return Yn(i.x)/Yn(i.y)}function vS(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function na(i){return[i("x"),i("y")]}function nL(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:_,rotateY:v,skewX:x,skewY:b}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),_&&(s+=`rotateX(${_}deg) `),v&&(s+=`rotateY(${v}deg) `),x&&(s+=`skewX(${x}deg) `),b&&(s+=`skewY(${b}deg) `)}const h=i.x.scale*t.x,m=i.y.scale*t.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const $b=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],iL=$b.length,_S=i=>typeof i=="string"?parseFloat(i):i,xS=i=>typeof i=="number"||qt.test(i);function aL(i,t,n,s,o,c){o?(i.opacity=Je(0,n.opacity??1,sL(s)),i.opacityExit=Je(t.opacity??1,0,rL(s))):c&&(i.opacity=Je(t.opacity??1,n.opacity??1,s));for(let u=0;u<iL;u++){const h=$b[u];let m=yS(t,h),d=yS(n,h);if(m===void 0&&d===void 0)continue;m||(m=0),d||(d=0),m===0||d===0||xS(m)===xS(d)?(i[h]=Math.max(Je(_S(m),_S(d),s),0),(ua.test(d)||ua.test(m))&&(i[h]+="%")):i[h]=d}(t.rotate||n.rotate)&&(i.rotate=Je(t.rotate||0,n.rotate||0,s))}function yS(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const sL=tE(0,.5,XM),rL=tE(.5,.95,Pi);function tE(i,t,n){return s=>s<i?0:s>t?1:n(Vl(i,t,s))}function oL(i,t,n){const s=Fn(i)?i:bo(i);return s.start(yg("",s,t,n)),s.animation}function kl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const lL=(i,t)=>i.depth-t.depth;class cL{constructor(){this.children=[],this.isDirty=!1}add(t){og(this.children,t),this.isDirty=!0}remove(t){rf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(lL),this.isDirty=!1,this.children.forEach(t)}}function uL(i,t){const n=qn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(Us(s),i(c-t))};return Ye.setup(s,!0),()=>Us(s)}function Zu(i){return Fn(i)?i.get():i}class fL{constructor(){this.members=[]}add(t){og(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;(!o||o.isConnected===!1)&&!s.snapshot&&(rf(this.members,s),s.unmount())}t.scheduleRender()}remove(t){if(rf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let s=this.members.indexOf(t)-1;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1&&((n=o.instance)==null?void 0:n.isConnected)!==!1)return this.promote(o),!0}return!1}promote(t,n){var o;const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.updateSnapshot(),t.scheduleRender();const{layoutDependency:c}=s.options,{layoutDependency:u}=t.options;(c===void 0||c!==u)&&(t.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),(o=t.root)!=null&&o.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,s,o,c,u;(s=(n=t.options).onExitComplete)==null||s.call(n),(u=(o=t.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||u.call(c)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Qu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Mp=["","X","Y","Z"],hL=1e3;let dL=0;function bp(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function eE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=Sb(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Ye,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&eE(s)}function nE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},h=t==null?void 0:t()){this.id=dL++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gL),this.nodes.forEach(ML),this.nodes.forEach(bL),this.nodes.forEach(vL)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new cL)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new cg),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const m=this.eventHandlers.get(u);m&&m.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Ag(u)&&!mU(u),this.instance=u;const{layoutId:h,layout:m,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),i){let g,_=0;const v=()=>this.root.updateBlockedByResize=!1;Ye.read(()=>{_=window.innerWidth}),i(u,()=>{const x=window.innerWidth;x!==_&&(_=x,this.root.updateBlockedByResize=!0,g&&g(),g=uL(v,250),Qu.hasAnimatedSinceResize&&(Qu.hasAnimatedSinceResize=!1,this.nodes.forEach(bS)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&d&&(h||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||CL,{onLayoutAnimationStart:R,onLayoutAnimationComplete:S}=d.getProps(),y=!this.targetLayout||!Jb(this.targetLayout,x),A=!_&&v;if(this.options.layoutRoot||this.resumeFrom||A||_&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...xg(b,"layout"),onPlay:R,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(g,A)}else _||bS(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Us(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(EL),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const _=this.path[g];_.shouldResetTransform=!0,(typeof _.latestValues.x=="string"||typeof _.latestValues.y=="string")&&(_.isLayoutDirty=!0),_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(xL),this.nodes.forEach(SS);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(MS);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yL),this.nodes.forEach(SL),this.nodes.forEach(pL),this.nodes.forEach(mL)):this.nodes.forEach(MS),this.clearAllSnapshots();const h=qn.now();In.delta=pa(0,1e3/60,h-In.timestamp),In.timestamp=h,In.isProcessing=!0,pp.update.process(In),pp.preRender.process(In),pp.render.process(In),In.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Eg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_L),this.sharedNodes.forEach(TL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yn(this.snapshot.measuredBox.x)&&!Yn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Tn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Qb(this.projectionDelta),m=this.getTransformTemplate(),d=m?m(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(h||sr(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return u&&(m=this.removeTransform(m)),wL(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:u}=this.options;if(!u)return Tn();const h=u.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(DL))){const{scroll:g}=this.root;g&&(aa(h.x,g.offset.x),aa(h.y,g.offset.y))}return h}removeElementScroll(u){var m;const h=Tn();if(ki(h,u),(m=this.scroll)!=null&&m.wasRoot)return h;for(let d=0;d<this.path.length;d++){const g=this.path[d],{scroll:_,options:v}=g;g!==this.root&&_&&v.layoutScroll&&(_.wasRoot&&ki(h,u),aa(h.x,_.offset.x),aa(h.y,_.offset.y))}return h}applyTransform(u,h=!1,m){var g,_;const d=m||Tn();ki(d,u);for(let v=0;v<this.path.length;v++){const x=this.path[v];!h&&x.options.layoutScroll&&x.scroll&&x!==x.root&&(aa(d.x,-x.scroll.offset.x),aa(d.y,-x.scroll.offset.y)),sr(x.latestValues)&&Ku(d,x.latestValues,(g=x.layout)==null?void 0:g.layoutBox)}return sr(this.latestValues)&&Ku(d,this.latestValues,(_=this.layout)==null?void 0:_.layoutBox),d}removeTransform(u){var m;const h=Tn();ki(h,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];if(!sr(g.latestValues))continue;let _;g.instance&&(Vm(g.latestValues)&&g.updateSnapshot(),_=Tn(),ki(_,g.measurePageBox())),hS(h,g.latestValues,(m=g.snapshot)==null?void 0:m.layoutBox,_)}return sr(this.latestValues)&&hS(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==In.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var x;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!this.layout||!(g||_))return;this.resolvedRelativeTargetAt=In.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Tn(),this.targetWithTransforms=Tn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QU(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ki(this.target,this.layout.layoutBox),zb(this.target,this.targetDelta)):ki(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Vm(this.parent.latestValues)||Fb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,h,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tn(),this.relativeTargetOrigin=Tn(),df(this.relativeTargetOrigin,h,m,this.options.layoutAnchor||void 0),ki(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const u=this.getLead(),h=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===In.timestamp&&(m=!1),m)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;ki(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,v=this.treeScale.y;AU(this.layoutCorrected,this.treeScale,this.path,h),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Tn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rS(this.prevProjectionDelta.x,this.projectionDelta.x),rS(this.prevProjectionDelta.y,this.projectionDelta.y)),Il(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==v||!vS(this.projectionDelta.x,this.prevProjectionDelta.x)||!vS(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(u,h=!1){const m=this.snapshot,d=m?m.latestValues:{},g={...this.latestValues},_=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=Tn(),x=m?m.source:void 0,b=this.layout?this.layout.source:void 0,R=x!==b,S=this.getStack(),y=!S||S.members.length<=1,A=!!(R&&!y&&this.options.crossfade===!0&&!this.path.some(RL));this.animationProgress=0;let C;this.mixTargetDelta=N=>{const F=N/1e3;ES(_.x,u.x,F),ES(_.y,u.y,F),this.setTargetDelta(_),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(df(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),AL(this.relativeTarget,this.relativeTargetOrigin,v,F),C&&eL(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Tn()),ki(C,this.relativeTarget)),R&&(this.animationValues=g,aL(g,d,this.latestValues,F,A,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var h,m,d;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(d=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||d.stop(),this.pendingAnimation&&(Us(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ye.update(()=>{Qu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=bo(0)),this.motionValue.jump(0,!1),this.currentAnimation=oL(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:m,layout:d,latestValues:g}=u;if(!(!h||!m||!d)){if(this!==u&&this.layout&&d&&iE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){m=this.target||Tn();const _=Yn(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+_;const v=Yn(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+v}ki(h,m),Ku(h,g),Il(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new fL),this.sharedNodes.get(u).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var h;const{layoutId:u}=this.options;return u?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:u}=this.options;return u?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:m}={}){const d=this.getStack();d&&d.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const d={};m.z&&bp("z",u,d,this.animationValues);for(let g=0;g<Mp.length;g++)bp(`rotate${Mp[g]}`,u,d,this.animationValues),bp(`skew${Mp[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Zu(h==null?void 0:h.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Zu(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let _=nL(this.projectionDeltaWithTransform,this.treeScale,g);m&&(_=m(g,_)),u.transform=_;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in Gm){if(g[b]===void 0)continue;const{correct:R,applyTo:S,isCSSVariable:y}=Gm[b],A=_==="none"?g[b]:R(g[b],d);if(S){const C=S.length;for(let N=0;N<C;N++)u[S[N]]=A}else y?this.options.visualElement.renderState.vars[b]=A:u[b]=A}this.options.layoutId&&(u.pointerEvents=d===this?Zu(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var h;return(h=u.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(SS),this.root.sharedNodes.clear()}}}function pL(i){i.updateLayout()}function mL(i){var n;const t=((n=i.resumeFrom)==null?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=i.layout,{animationType:c}=i.options,u=t.source!==i.layout.source;if(c==="size")na(_=>{const v=u?t.measuredBox[_]:t.layoutBox[_],x=Yn(v);v.min=s[_].min,v.max=v.min+x});else if(c==="x"||c==="y"){const _=c==="x"?"y":"x";km(u?t.measuredBox[_]:t.layoutBox[_],s[_])}else iE(c,t.layoutBox,s)&&na(_=>{const v=u?t.measuredBox[_]:t.layoutBox[_],x=Yn(s[_]);v.max=v.min+x,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[_].max=i.relativeTarget[_].min+x)});const h=po();Il(h,s,t.layoutBox);const m=po();u?Il(m,i.applyTransform(o,!0),t.measuredBox):Il(m,s,t.layoutBox);const d=!Qb(h);let g=!1;if(!i.resumeFrom){const _=i.getClosestProjectingParent();if(_&&!_.resumeFrom){const{snapshot:v,layout:x}=_;if(v&&x){const b=i.options.layoutAnchor||void 0,R=Tn();df(R,t.layoutBox,v.layoutBox,b);const S=Tn();df(S,s,x.layoutBox,b),Jb(R,S)||(g=!0),_.options.layoutRoot&&(i.relativeTarget=S,i.relativeTargetOrigin=R,i.relativeParent=_)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:m,layoutDelta:h,hasLayoutChanged:d,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function gL(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function vL(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function _L(i){i.clearSnapshot()}function SS(i){i.clearMeasurements()}function xL(i){i.isLayoutDirty=!0,i.updateLayout()}function MS(i){i.isLayoutDirty=!1}function yL(i){i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)}function SL(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function bS(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function ML(i){i.resolveTargetDelta()}function bL(i){i.calcProjection()}function EL(i){i.resetSkewAndRotation()}function TL(i){i.removeLeadSnapshot()}function ES(i,t,n){i.translate=Je(t.translate,0,n),i.scale=Je(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function TS(i,t,n,s){i.min=Je(t.min,n.min,s),i.max=Je(t.max,n.max,s)}function AL(i,t,n,s){TS(i.x,t.x,n.x,s),TS(i.y,t.y,n.y,s)}function RL(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const CL={duration:.45,ease:[.4,0,.1,1]},AS=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),RS=AS("applewebkit/")&&!AS("chrome/")?Math.round:Pi;function CS(i){i.min=RS(i.min),i.max=RS(i.max)}function wL(i){CS(i.x),CS(i.y)}function iE(i,t,n){return i==="position"||i==="preserve-aspect"&&!ZU(gS(t),gS(n),.2)}function DL(i){var t;return i!==i.root&&((t=i.scroll)==null?void 0:t.wasRoot)}const NL=nE({attachResizeListener:(i,t)=>kl(i,"resize",t),measureScroll:()=>{var i,t;return{x:document.documentElement.scrollLeft||((i=document.body)==null?void 0:i.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ep={current:void 0},aE=nE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Ep.current){const i=new NL({});i.mount(window),i.setOptions({layoutScroll:!0}),Ep.current=i}return Ep.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),Ng=Bt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function wS(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function UL(...i){return t=>{let n=!1;const s=i.map(o=>{const c=wS(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<s.length;o++){const c=s[o];typeof c=="function"?c():wS(i[o],null)}}}}function LL(...i){return Bt.useCallback(UL(...i),i)}class PL extends Bt.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(ju(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=ju(s)&&s.offsetWidth||0,c=ju(s)&&s.offsetHeight||0,u=getComputedStyle(n),h=this.props.sizeRef.current;h.height=parseFloat(u.height),h.width=parseFloat(u.width),h.top=n.offsetTop,h.left=n.offsetLeft,h.right=o-h.width-h.left,h.bottom=c-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function OL({children:i,isPresent:t,anchorX:n,anchorY:s,root:o,pop:c}){var v;const u=Bt.useId(),h=Bt.useRef(null),m=Bt.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:d}=Bt.useContext(Ng),g=((v=i.props)==null?void 0:v.ref)??(i==null?void 0:i.ref),_=LL(h,g);return Bt.useInsertionEffect(()=>{const{width:x,height:b,top:R,left:S,right:y,bottom:A}=m.current;if(t||c===!1||!h.current||!x||!b)return;const C=n==="left"?`left: ${S}`:`right: ${y}`,N=s==="bottom"?`bottom: ${A}`:`top: ${R}`;h.current.dataset.motionPopId=u;const F=document.createElement("style");d&&(F.nonce=d);const L=o??document.head;return L.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${b}px !important;
            ${C}px !important;
            ${N}px !important;
          }
        `),()=>{var I;(I=h.current)==null||I.removeAttribute("data-motion-pop-id"),L.contains(F)&&L.removeChild(F)}},[t]),H.jsx(PL,{isPresent:t,childRef:h,sizeRef:m,pop:c,children:c===!1?i:Bt.cloneElement(i,{ref:_})})}const IL=({children:i,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u,anchorX:h,anchorY:m,root:d})=>{const g=rg(BL),_=Bt.useId();let v=!0,x=Bt.useMemo(()=>(v=!1,{id:_,initial:t,isPresent:n,custom:o,onExitComplete:b=>{g.set(b,!0);for(const R of g.values())if(!R)return;s&&s()},register:b=>(g.set(b,!1),()=>g.delete(b))}),[n,g,s]);return c&&v&&(x={...x}),Bt.useMemo(()=>{g.forEach((b,R)=>g.set(R,!1))},[n]),Bt.useEffect(()=>{!n&&!g.size&&s&&s()},[n]),i=H.jsx(OL,{pop:u==="popLayout",isPresent:n,anchorX:h,anchorY:m,root:d,children:i}),H.jsx(Sf.Provider,{value:x,children:i})};function BL(){return new Map}function sE(i=!0){const t=Bt.useContext(Sf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Bt.useId();Bt.useEffect(()=>{if(i)return o(c)},[i]);const u=Bt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const Ou=i=>i.key||"";function DS(i){const t=[];return Bt.Children.forEach(i,n=>{Bt.isValidElement(n)&&t.push(n)}),t}const FL=({children:i,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:h="left",anchorY:m="top",root:d})=>{const[g,_]=sE(u),v=Bt.useMemo(()=>DS(i),[i]),x=u&&!g?[]:v.map(Ou),b=Bt.useRef(!0),R=Bt.useRef(v),S=rg(()=>new Map),y=Bt.useRef(new Set),[A,C]=Bt.useState(v),[N,F]=Bt.useState(v);UM(()=>{b.current=!1,R.current=v;for(let E=0;E<N.length;E++){const P=Ou(N[E]);x.includes(P)?(S.delete(P),y.current.delete(P)):S.get(P)!==!0&&S.set(P,!1)}},[N,x.length,x.join("-")]);const L=[];if(v!==A){let E=[...v];for(let P=0;P<N.length;P++){const V=N[P],z=Ou(V);x.includes(z)||(E.splice(P,0,V),L.push(V))}return c==="wait"&&L.length&&(E=L),F(DS(E)),C(v),null}const{forceRender:I}=Bt.useContext(sg);return H.jsx(H.Fragment,{children:N.map(E=>{const P=Ou(E),V=u&&!g?!1:v===N||x.includes(P),z=()=>{if(y.current.has(P))return;if(S.has(P))y.current.add(P),S.set(P,!0);else return;let Y=!0;S.forEach(ct=>{ct||(Y=!1)}),Y&&(I==null||I(),F(R.current),u&&(_==null||_()),s&&s())};return H.jsx(IL,{isPresent:V,initial:!b.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:d,onExitComplete:V?void 0:z,anchorX:h,anchorY:m,children:E},P)})})},rE=Bt.createContext({strict:!1}),NS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let US=!1;function zL(){if(US)return;const i={};for(const t in NS)i[t]={isEnabled:n=>NS[t].some(s=>!!n[s])};Ob(i),US=!0}function oE(){return zL(),MU()}function VL(i){const t=oE();for(const n in i)t[n]={...t[n],...i[n]};Ob(t)}const HL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function pf(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||HL.has(i)}let lE=i=>!pf(i);function GL(i){typeof i=="function"&&(lE=t=>t.startsWith("on")?!pf(t):i(t))}try{GL(require("@emotion/is-prop-valid").default)}catch{}function kL(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||Fn(i[o])||(lE(o)||n===!0&&pf(o)||!t&&!pf(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const Tf=Bt.createContext({});function XL(i,t){if(Ef(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Gl(n)?n:void 0,animate:Gl(s)?s:void 0}}return i.inherit!==!1?t:{}}function jL(i){const{initial:t,animate:n}=XL(i,Bt.useContext(Tf));return Bt.useMemo(()=>({initial:t,animate:n}),[LS(t),LS(n)])}function LS(i){return Array.isArray(i)?i.join(" "):i}const Ug=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cE(i,t,n){for(const s in t)!Fn(t[s])&&!Gb(s,n)&&(i[s]=t[s])}function WL({transformTemplate:i},t){return Bt.useMemo(()=>{const n=Ug();return wg(n,t,i),Object.assign({},n.vars,n.style)},[t])}function qL(i,t){const n=i.style||{},s={};return cE(s,n,i),Object.assign(s,WL(i,t)),s}function YL(i,t){const n={},s=qL(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const uE=()=>({...Ug(),attrs:{}});function KL(i,t,n,s){const o=Bt.useMemo(()=>{const c=uE();return kb(c,t,jb(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};cE(c,i.style,i),o.style={...c,...o.style}}return o}const ZL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lg(i){return typeof i!="string"||i.includes("-")?!1:!!(ZL.indexOf(i)>-1||/[A-Z]/u.test(i))}function QL(i,t,n,{latestValues:s},o,c=!1,u){const m=(u??Lg(i)?KL:YL)(t,s,o,i),d=kL(t,typeof i=="string",c),g=i!==Bt.Fragment?{...d,...m,ref:n}:{},{children:_}=t,v=Bt.useMemo(()=>Fn(_)?_.get():_,[_]);return Bt.createElement(i,{...g,children:v})}function JL({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:$L(n,s,o,i),renderState:t()}}function $L(i,t,n,s){const o={},c=s(i,{});for(const v in c)o[v]=Zu(c[v]);let{initial:u,animate:h}=i;const m=Ef(i),d=Lb(i);t&&d&&!m&&i.inherit!==!1&&(u===void 0&&(u=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const _=g?h:u;if(_&&typeof _!="boolean"&&!bf(_)){const v=Array.isArray(_)?_:[_];for(let x=0;x<v.length;x++){const b=Sg(i,v[x]);if(b){const{transitionEnd:R,transition:S,...y}=b;for(const A in y){let C=y[A];if(Array.isArray(C)){const N=g?C.length-1:0;C=C[N]}C!==null&&(o[A]=C)}for(const A in R)o[A]=R[A]}}}return o}const fE=i=>(t,n)=>{const s=Bt.useContext(Tf),o=Bt.useContext(Sf),c=()=>JL(i,t,s,o);return n?c():rg(c)},tP=fE({scrapeMotionValuesFromProps:Dg,createRenderState:Ug}),eP=fE({scrapeMotionValuesFromProps:Wb,createRenderState:uE}),nP=Symbol.for("motionComponentSymbol");function iP(i,t,n){const s=Bt.useRef(n);Bt.useInsertionEffect(()=>{s.current=n});const o=Bt.useRef(null);return Bt.useCallback(c=>{var h;c&&((h=i.onMount)==null||h.call(i,c));const u=s.current;if(typeof u=="function")if(c){const m=u(c);typeof m=="function"&&(o.current=m)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c);t&&(c?t.mount(c):t.unmount())},[t])}const hE=Bt.createContext({});function uo(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function aP(i,t,n,s,o,c){var C,N;const{visualElement:u}=Bt.useContext(Tf),h=Bt.useContext(rE),m=Bt.useContext(Sf),d=Bt.useContext(Ng),g=d.reducedMotion,_=d.skipAnimations,v=Bt.useRef(null),x=Bt.useRef(!1);s=s||h.renderer,!v.current&&s&&(v.current=s(i,{visualState:t,parent:u,props:n,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,skipAnimations:_,isSVG:c}),x.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const b=v.current,R=Bt.useContext(hE);b&&!b.projection&&o&&(b.type==="html"||b.type==="svg")&&sP(v.current,n,o,R);const S=Bt.useRef(!1);Bt.useInsertionEffect(()=>{b&&S.current&&b.update(n,m)});const y=n[yb],A=Bt.useRef(!!y&&typeof window<"u"&&!((C=window.MotionHandoffIsComplete)!=null&&C.call(window,y))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,y)));return UM(()=>{x.current=!0,b&&(S.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),A.current&&b.animationState&&b.animationState.animateChanges())}),Bt.useEffect(()=>{b&&(!A.current&&b.animationState&&b.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)==null||F.call(window,y)}),A.current=!1),b.enteringChildren=void 0)}),b}function sP(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:h,layoutScroll:m,layoutRoot:d,layoutAnchor:g,layoutCrossfade:_}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:dE(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||h&&uo(h),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:_,layoutScroll:m,layoutRoot:d,layoutAnchor:g})}function dE(i){if(i)return i.options.allowProjection!==!1?i.projection:dE(i.parent)}function Tp(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&VL(s);const c=n?n==="svg":Lg(i),u=c?eP:tP;function h(d,g){let _;const v={...Bt.useContext(Ng),...d,layoutId:rP(d)},{isStatic:x}=v,b=jL(d),R=u(d,x);if(!x&&typeof window<"u"){oP();const S=lP(v);_=S.MeasureLayout,b.visualElement=aP(i,R,v,o,S.ProjectionNode,c)}return H.jsxs(Tf.Provider,{value:b,children:[_&&b.visualElement?H.jsx(_,{visualElement:b.visualElement,...v}):null,QL(i,d,iP(R,b.visualElement,g),R,x,t,c)]})}h.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const m=Bt.forwardRef(h);return m[nP]=i,m}function rP({layoutId:i}){const t=Bt.useContext(sg).id;return t&&i!==void 0?t+"-"+i:i}function oP(i,t){Bt.useContext(rE).strict}function lP(i){const t=oE(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(i)||s!=null&&s.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function cP(i,t){if(typeof Proxy>"u")return Tp;const n=new Map,s=(c,u)=>Tp(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,Tp(u,void 0,i,t)),n.get(u))})}const uP=(i,t)=>t.isSVG??Lg(i)?new zU(t):new LU(t,{allowProjection:i!==Bt.Fragment});class fP extends Ls{constructor(t){super(t),t.animationState||(t.animationState=XU(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();bf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let hP=0;class dP extends Ls{constructor(){super(...arguments),this.id=hP++,this.isExitComplete=!1}update(){var c;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;if(t&&s===!1){if(this.isExitComplete){const{initial:u,custom:h}=this.node.getProps();if(typeof u=="string"){const m=dr(this.node,u,h);if(m){const{transition:d,transitionEnd:g,..._}=m;for(const v in _)(c=this.node.getValue(v))==null||c.jump(_[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const pP={animation:{Feature:fP},exit:{Feature:dP}};function Ql(i){return{point:{x:i.pageX,y:i.pageY}}}const mP=i=>t=>Tg(t)&&i(t,Ql(t));function Bl(i,t,n,s){return kl(i,t,mP(n),s)}const pE=({current:i})=>i?i.ownerDocument.defaultView:null,PS=(i,t)=>Math.abs(i-t);function gP(i,t){const n=PS(i.x,t.x),s=PS(i.y,t.y);return Math.sqrt(n**2+s**2)}const OS=new Set(["auto","scroll"]);class mE{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Iu(this.lastRawMoveEventInfo,this.transformPagePoint));const x=Ap(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,R=gP(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!R)return;const{point:S}=x,{timestamp:y}=In;this.history.push({...S,timestamp:y});const{onStart:A,onMove:C}=this.handlers;b||(A&&A(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,x)},this.handlePointerMove=(x,b)=>{this.lastMoveEvent=x,this.lastRawMoveEventInfo=b,this.lastMoveEventInfo=Iu(b,this.transformPagePoint),Ye.update(this.updatePoint,!0)},this.handlePointerUp=(x,b)=>{this.end();const{onEnd:R,onSessionEnd:S,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=Ap(x.type==="pointercancel"?this.lastMoveEventInfo:Iu(b,this.transformPagePoint),this.history);this.startEvent&&R&&R(x,A),S&&S(x,A)},!Tg(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const m=Ql(t),d=Iu(m,this.transformPagePoint),{point:g}=d,{timestamp:_}=In;this.history=[{...g,timestamp:_}];const{onSessionStart:v}=n;v&&v(t,Ap(d,this.history)),this.removeListeners=Yl(Bl(this.contextWindow,"pointermove",this.handlePointerMove),Bl(this.contextWindow,"pointerup",this.handlePointerUp),Bl(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(OS.has(s.overflowX)||OS.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Ye.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Us(this.updatePoint)}}function Iu(i,t){return t?{point:t(i.point)}:i}function IS(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Ap({point:i},t){return{point:i,delta:IS(i,gE(t)),offset:IS(i,vP(t)),velocity:_P(t,.1)}}function vP(i){return i[0]}function gE(i){return i[i.length-1]}function _P(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=gE(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>_i(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>_i(t)*2&&(s=i[1]);const c=Ui(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function xP(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?Je(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?Je(n,i,s.max):Math.min(i,n)),i}function BS(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function yP(i,{top:t,left:n,bottom:s,right:o}){return{x:BS(i.x,n,o),y:BS(i.y,t,s)}}function FS(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function SP(i,t){return{x:FS(i.x,t.x),y:FS(i.y,t.y)}}function MP(i,t){let n=.5;const s=Yn(i),o=Yn(t);return o>s?n=Vl(t.min,t.max-s,i.min):s>o&&(n=Vl(i.min,i.max-o,t.min)),pa(0,1,n)}function bP(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Xm=.35;function EP(i=Xm){return i===!1?i=0:i===!0&&(i=Xm),{x:zS(i,"left","right"),y:zS(i,"top","bottom")}}function zS(i,t,n){return{min:VS(i,t),max:VS(i,n)}}function VS(i,t){return typeof i=="number"?i:i[t]||0}const TP=new WeakMap;class AP{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Tn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=_=>{n&&this.snapToCursor(Ql(_).point),this.stopAnimation()},u=(_,v)=>{const{drag:x,dragPropagation:b,onDragStart:R}=this.getProps();if(x&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=JN(x),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(y=>{let A=this.getAxisMotionValue(y).get()||0;if(ua.test(A)){const{projection:C}=this.visualElement;if(C&&C.layout){const N=C.layout.layoutBox[y];N&&(A=Yn(N)*(parseFloat(A)/100))}}this.originPoint[y]=A}),R&&Ye.update(()=>R(_,v),!1,!0),Om(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},h=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:R,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(b&&this.currentDirection===null){this.currentDirection=CP(y),this.currentDirection!==null&&R&&R(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&Ye.update(()=>S(_,v),!1,!0)},m=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v,this.stop(_,v),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:_}=this.getProps();(_||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new mE(t,{onSessionStart:c,onStart:u,onMove:h,onSessionEnd:m,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:pE(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Ye.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Bu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=xP(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&uo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=yP(s.layoutBox,t):this.constraints=!1,this.elastic=EP(n),o!==this.constraints&&!uo(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&na(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=bP(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!uo(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=RU(s,o.root,this.visualElement.getTransformPagePoint());let u=SP(o.layout.layoutBox,c);if(n){const h=n(EU(u));this.hasMutatedConstraints=!!h,h&&(u=Bb(h))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},d=na(g=>{if(!Bu(g,n,this.currentDirection))return;let _=m&&m[g]||{};(u===!0||u===g)&&(_={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,b={type:"inertia",velocity:s?t[g]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...c,..._};return this.startAxisValueAnimation(g,b)});return Promise.all(d).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Om(this.visualElement,t),s.start(yg(t,s,0,n,this.visualElement,!1))}stopAnimation(){na(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){na(n=>{const{drag:s}=this.getProps();if(!Bu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:h}=o.layout.layoutBox[n],m=c.get()||0;c.set(t[n]-Je(u,h,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!uo(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};na(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const m=h.get();o[u]=MP({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(u=>{if(!Bu(u,t,null))return;const h=this.getAxisMotionValue(u),{min:m,max:d}=this.constraints[u];h.set(Je(m,d,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;TP.set(this.visualElement,this);const t=this.visualElement.current,n=Bl(t,"pointerdown",d=>{const{drag:g,dragListener:_=!0}=this.getProps(),v=d.target,x=v!==t&&aU(v);g&&_&&!x&&this.start(d)});let s;const o=()=>{const{dragConstraints:d}=this.getProps();uo(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),s||(s=RP(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ye.read(o);const h=kl(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:g})=>{this.isDragging&&g&&(na(_=>{const v=this.getAxisMotionValue(_);v&&(this.originPoint[_]+=d[_].translate,v.set(v.get()+d[_].translate))}),this.visualElement.render())}));return()=>{h(),n(),u(),m&&m(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Xm,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:h}}}function HS(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function RP(i,t,n){const s=Yy(i,HS(n)),o=Yy(t,HS(n));return()=>{s(),o()}}function Bu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function CP(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class wP extends Ls{constructor(t){super(t),this.removeGroupControls=Pi,this.removeListeners=Pi,this.controls=new AP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pi}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Rp=i=>(t,n)=>{i&&Ye.update(()=>i(t,n),!1,!0)};class DP extends Ls{constructor(){super(...arguments),this.removePointerDownListener=Pi}onPointerDown(t){this.session=new mE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Rp(t),onStart:Rp(n),onMove:Rp(s),onEnd:(c,u)=>{delete this.session,o&&Ye.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Bl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Cp=!1;class NP extends Bt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),Cp&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),Cp=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Ye.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:s}=t;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Eg.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Cp=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function vE(i){const[t,n]=sE(),s=Bt.useContext(sg);return H.jsx(NP,{...i,layoutGroup:s,switchLayoutGroup:Bt.useContext(hE),isPresent:t,safeToRemove:n})}const UP={pan:{Feature:DP},drag:{Feature:wP,ProjectionNode:aE,MeasureLayout:vE}};function GS(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Ye.postRender(()=>c(t,Ql(t)))}class LP extends Ls{mount(){const{current:t}=this.node;t&&(this.unmount=tU(t,(n,s)=>(GS(this.node,s,"Start"),o=>GS(this.node,o,"End"))))}unmount(){}}class PP extends Ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yl(kl(this.node.current,"focus",()=>this.onFocus()),kl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kS(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Ye.postRender(()=>c(t,Ql(t)))}class OP extends Ls{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=rU(t,(o,c)=>(kS(this.node,c,"Start"),(u,{success:h})=>kS(this.node,u,h?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const jm=new WeakMap,wp=new WeakMap,IP=i=>{const t=jm.get(i.target);t&&t(i)},BP=i=>{i.forEach(IP)};function FP({root:i,...t}){const n=i||document;wp.has(n)||wp.set(n,{});const s=wp.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(BP,{root:i,...t})),s[o]}function zP(i,t,n){const s=FP(t);return jm.set(i,n),s.observe(i),()=>{jm.delete(i),s.unobserve(i)}}const VP={some:0,all:1};class HP extends Ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var m;(m=this.stopObserver)==null||m.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:VP[o]},h=d=>{const{isIntersecting:g}=d;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:_,onViewportLeave:v}=this.node.getProps(),x=g?_:v;x&&x(d)};this.stopObserver=zP(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(GP(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function GP({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const kP={inView:{Feature:HP},tap:{Feature:OP},focus:{Feature:PP},hover:{Feature:LP}},XP={layout:{ProjectionNode:aE,MeasureLayout:vE}},jP={...pP,...kP,...UP,...XP},vi=cP(jP,uP),WP=({onDeployClick:i})=>H.jsxs(vi.nav,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},className:"flex justify-between items-center px-12 py-8 max-w-7xl mx-auto relative z-50",children:[H.jsxs("div",{className:"flex items-center gap-4 group cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[H.jsx("div",{className:"w-10 h-10 border-2 border-amber-500 flex items-center justify-center font-bold text-xl text-amber-500 bg-amber-500/5",children:"P"}),H.jsxs("div",{className:"flex flex-col",children:[H.jsx("span",{className:"font-bold tracking-widest text-lg text-white",children:"PRIMEWAVE"}),H.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-tighter font-mono",children:"Spatial Reasoning Systems"})]})]}),H.jsxs("nav",{className:"hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-neutral-500",children:[H.jsx("a",{href:"#security",className:"hover:text-amber-500 transition-colors",children:"Security Protocol"}),H.jsx("a",{href:"#capabilities",className:"hover:text-amber-500 transition-colors",children:"Capabilities"}),H.jsx("a",{href:"#architecture",className:"hover:text-amber-500 transition-colors",children:"Architecture"}),H.jsx("a",{href:"#contact",className:"hover:text-amber-500 transition-colors",children:"Contact"})]})]}),qP=({onDeployClick:i})=>H.jsx("section",{className:"relative px-12 py-24 flex items-center min-h-[70vh]",children:H.jsxs("div",{className:"max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10",children:[H.jsxs("div",{className:"w-full md:w-3/5",children:[H.jsx(vi.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"tag mb-8 inline-block",children:"On-Premises Multi-Modal LLM"}),H.jsxs(vi.h1,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.8},className:"text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]",children:["THE FUTURE OF DESIGN, ",H.jsx("br",{}),H.jsx("span",{className:"text-gradient",children:"HOSTED BEHIND YOUR FIREWALL."})]}),H.jsx(vi.p,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4,duration:.8},className:"text-lg text-neutral-400 mb-12 leading-relaxed max-w-xl",children:"Unlock a multi-modal LLM engineered to understand the language of geometry. Reason over proprietary 3D models and BIM data without ever sending a single coordinate to the cloud."}),H.jsxs(vi.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6,duration:.8},className:"flex gap-8 mb-12",children:[H.jsxs("div",{className:"flex flex-col border-l-2 border-amber-500 pl-4",children:[H.jsx("span",{className:"text-3xl font-mono font-bold text-white",children:"0.0ms"}),H.jsx("span",{className:"text-[10px] uppercase text-neutral-500 font-bold tracking-widest mt-1",children:"Network Latency"})]}),H.jsxs("div",{className:"flex flex-col border-l-2 border-amber-800 pl-4",children:[H.jsx("span",{className:"text-3xl font-mono font-bold text-white",children:"100%"}),H.jsx("span",{className:"text-[10px] uppercase text-neutral-500 font-bold tracking-widest mt-1",children:"IP Retention"})]})]}),H.jsxs(vi.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"flex flex-wrap gap-4",children:[H.jsx("button",{onClick:i,className:"px-8 py-3 bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-amber-500 transition-colors",children:"Initialize Deployment"}),H.jsx("a",{href:"#architecture",className:"px-8 py-3 border border-white/10 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/5 transition-colors inline-block text-center",children:"Access Documentation"})]})]}),H.jsxs("div",{className:"hidden lg:block w-2/5 aspect-square relative pointer-events-none",children:[H.jsx("div",{className:"absolute inset-0 border border-white/5 bg-white/[0.01]"}),H.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/50"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/50"})]})]})});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),XS=i=>{const t=KP(i);return t.charAt(0).toUpperCase()+t.slice(1)},_E=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),ZP=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=Bt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...h},m)=>Bt.createElement("svg",{ref:m,...QP,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:_E("lucide",o),...!c&&!ZP(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>Bt.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=(i,t)=>{const n=Bt.forwardRef(({className:s,...o},c)=>Bt.createElement(JP,{ref:c,iconNode:t,className:_E(`lucide-${YP(XS(i))}`,`lucide-${i}`,s),...o}));return n.displayName=XS(i),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],tO=Mn("box",$P);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],jS=Mn("building",eO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],iO=Mn("chevron-right",nO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sO=Mn("circle-check",aO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Pg=Mn("cpu",rO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],xE=Mn("database",oO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cO=Mn("globe",lO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],fO=Mn("hard-drive",uO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],dO=Mn("layers",hO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],mO=Mn("lock",pO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],WS=Mn("mail",gO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],_O=Mn("message-square",vO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],yO=Mn("network",xO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],MO=Mn("send",SO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],EO=Mn("server",bO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],AO=Mn("shield-alert",TO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qS=Mn("shield-check",RO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],wO=Mn("terminal",CO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],NO=Mn("user",DO);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],LO=Mn("x",UO),PO=()=>{const i=[{title:"Vector-to-Vision Reasoning",description:"Direct analysis of 3D mesh data, point clouds, and technical drawings. Go beyond pixels to true spatial understanding.",icon:H.jsx(tO,{size:20}),className:"md:col-span-1",delay:.1,accent:"text-amber-500"},{title:"Air-Gapped IP Protection",description:"Engineered for aerospace and defense. Your sensitive prototypes stay on local servers, never hitting the open web.",icon:H.jsx(AO,{size:20}),className:"md:col-span-1",delay:.2,accent:"text-amber-700"},{title:"Design-Aware Logic",description:"Reason about scale, materials, and structural constraints locally. Native integration with existing BIM workflows.",icon:H.jsx(Pg,{size:20}),className:"md:col-span-1",delay:.3,accent:"text-amber-500"}];return H.jsxs("section",{id:"capabilities",className:"max-w-7xl mx-auto px-12 py-20 relative",children:[H.jsxs("div",{className:"mb-12",children:[H.jsx("h2",{className:"text-3xl font-bold mb-4 tracking-tight",children:"Technical Capabilities"}),H.jsx("p",{className:"text-neutral-500 max-w-xl text-sm",children:"Engineered for the most demanding technical workflows, Primewave brings powerful inference directly to your infrastructure."})]}),H.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map((t,n)=>H.jsxs(vi.div,{initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{delay:t.delay,duration:.6},className:"glass p-8 rounded-xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col",children:[H.jsx("div",{className:`w-10 h-10 mb-6 flex items-center justify-center ${t.accent} bg-neutral-900 border border-white/5`,children:t.icon}),H.jsx("h3",{className:"font-bold mb-3 uppercase tracking-wider text-xs text-white",children:t.title}),H.jsx("p",{className:"text-[12px] text-neutral-500 leading-relaxed",children:t.description}),H.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-full group-hover:translate-y-0"})]},n))}),H.jsxs("div",{className:"mt-16 flex flex-wrap justify-between items-center border-t border-white/5 pt-8 gap-8",children:[H.jsxs("div",{className:"flex gap-12",children:[H.jsxs("div",{className:"flex flex-col gap-1",children:[H.jsx("span",{className:"text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]",children:"Core Protocol"}),H.jsx("span",{className:"text-xs font-mono text-amber-500/70",children:"GEOM-CORE-V2"})]}),H.jsxs("div",{className:"flex flex-col gap-1",children:[H.jsx("span",{className:"text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]",children:"Model Weights"}),H.jsx("span",{className:"text-xs font-mono text-amber-700/70",children:"D-SPATIAL-LLM-80B"})]}),H.jsxs("div",{className:"flex flex-col gap-1",children:[H.jsx("span",{className:"text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em]",children:"Compute Target"}),H.jsx("span",{className:"text-xs font-mono text-white/40",children:"ON-PREM-NVIDIA"})]})]}),H.jsxs("div",{className:"flex items-center gap-4 text-neutral-700",children:[H.jsx(xE,{size:16}),H.jsx(yO,{size:16}),H.jsx(dO,{size:16})]})]})]})},OO=()=>{const i=[{title:"Encrypted at Rest",desc:"All model weights and inference data are encrypted using hardware-level AES-256.",icon:H.jsx(mO,{size:18})},{title:"Zero External Access",desc:"No telemetry, no phone-home, no cloud heartbeats. 100% network isolation guaranteed.",icon:H.jsx(qS,{size:18})},{title:"Dedicated Compliance",desc:"FIPS 140-2 and SOC2 Type II compatible on-premises deployments.",icon:H.jsx(fO,{size:18})}];return H.jsx("section",{id:"security",className:"max-w-7xl mx-auto px-12 py-32 border-t border-white/5",children:H.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-20 items-center",children:[H.jsxs("div",{children:[H.jsx("span",{className:"tag mb-6 inline-block",children:"Security Protocol"}),H.jsxs("h2",{className:"text-4xl font-bold mb-6 tracking-tight",children:["Designed for ",H.jsx("br",{}),H.jsx("span",{className:"text-amber-500",children:"Extreme Privacy."})]}),H.jsx("p",{className:"text-neutral-500 leading-relaxed mb-10",children:`Primewave was built from the ground up to solve the "Privacy Paradox" of modern AI. We don't just provide security; we provide physical sovereignty over your intelligence infrastructure.`}),H.jsx("div",{className:"space-y-6",children:i.map((t,n)=>H.jsxs("div",{className:"flex gap-4",children:[H.jsx("div",{className:"mt-1 text-amber-500",children:t.icon}),H.jsxs("div",{children:[H.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider mb-1",children:t.title}),H.jsx("p",{className:"text-xs text-neutral-500",children:t.desc})]})]},n))})]}),H.jsx("div",{className:"relative",children:H.jsxs("div",{className:"aspect-square bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group",children:[H.jsx("div",{className:"absolute inset-0 grid-bg opacity-20"}),H.jsx(vi.div,{animate:{scale:[1,1.05,1]},transition:{duration:4,repeat:1/0},className:"w-48 h-48 border-2 border-amber-500/30 rounded-full flex items-center justify-center",children:H.jsx("div",{className:"w-32 h-32 border border-amber-500/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)]",children:H.jsx(qS,{size:48,className:"text-amber-500"})})}),H.jsxs("div",{className:"absolute bottom-10 left-10 right-10 p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg",children:[H.jsxs("div",{className:"flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2",children:[H.jsx("span",{children:"Node Status"}),H.jsx("span",{className:"text-amber-500",children:"Active"})]}),H.jsx("div",{className:"w-full h-1 bg-white/10 rounded-full overflow-hidden",children:H.jsx(vi.div,{animate:{x:["-100%","100%"]},transition:{duration:2,repeat:1/0,ease:"linear"},className:"w-1/3 h-full bg-amber-500"})})]})]})})]})})},IO=()=>H.jsxs("section",{id:"architecture",className:"max-w-7xl mx-auto px-12 py-32 border-t border-white/5",children:[H.jsxs("div",{className:"text-center mb-20",children:[H.jsx("span",{className:"tag mb-6 inline-block",children:"Architecture"}),H.jsxs("h2",{className:"text-4xl font-bold tracking-tight",children:["The Primewave ",H.jsx("br",{}),H.jsx("span",{className:"text-amber-600",children:"Hardware Interface."})]})]}),H.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-1",children:[H.jsxs("div",{className:"glass p-12 flex flex-col items-center text-center",children:[H.jsx(EO,{className:"text-neutral-500 mb-6"}),H.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.2em] text-white mb-4",children:"Host Node"}),H.jsx("p",{className:"text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider",children:"Optimized for local cluster management and API brokering."})]}),H.jsxs("div",{className:"glass p-12 flex flex-col items-center text-center",children:[H.jsx(Pg,{className:"text-amber-500 mb-6"}),H.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.2em] text-white mb-4",children:"Inference Engine"}),H.jsx("p",{className:"text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider",children:"Tensor-optimized spatial reasoning at zero latency."})]}),H.jsxs("div",{className:"glass p-12 flex flex-col items-center text-center",children:[H.jsx(xE,{className:"text-neutral-500 mb-6"}),H.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.2em] text-white mb-4",children:"Geometry Store"}),H.jsx("p",{className:"text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider",children:"Secure vault for proprietary meshes and point clouds."})]}),H.jsxs("div",{className:"glass p-12 flex flex-col items-center text-center",children:[H.jsx(cO,{className:"text-amber-800 mb-6"}),H.jsx("h3",{className:"text-xs font-bold uppercase tracking-[0.2em] text-white mb-4",children:"Integration Bus"}),H.jsx("p",{className:"text-[10px] text-neutral-500 leading-relaxed uppercase tracking-wider",children:"Seamless BIM/CAD handshake without cloud transit."})]})]})]}),BO=()=>{const[i,t]=mo.useState({name:"",email:"",company:"",message:""}),[n,s]=mo.useState(!1),o=c=>{c.preventDefault(),s(!0),setTimeout(()=>s(!1),5e3)};return H.jsx("section",{id:"contact",className:"max-w-7xl mx-auto px-12 py-32 border-t border-white/5 relative overflow-hidden",children:H.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-20",children:[H.jsxs("div",{children:[H.jsx("span",{className:"tag mb-6 inline-block text-amber-500",children:"Inquiry Protocol"}),H.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white",children:["Secure your ",H.jsx("br",{}),H.jsx("span",{className:"text-amber-500",children:"Sovereign Instance."})]}),H.jsx("p",{className:"text-neutral-500 leading-relaxed max-w-md mb-12",children:"Speak with our engineering team about deploying Primewave on your infrastructure. We support air-gapped data centers, private clouds, and specialized hardware clusters."}),H.jsxs("div",{className:"space-y-8",children:[H.jsxs("div",{className:"flex gap-6 items-start",children:[H.jsx("div",{className:"w-10 h-10 rounded border border-white/10 flex items-center justify-center text-amber-500/50",children:H.jsx(WS,{size:18})}),H.jsxs("div",{children:[H.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-600 block mb-1",children:"Direct Channel"}),H.jsx("span",{className:"text-sm font-mono text-neutral-300",children:"info@primewave-tech.com"})]})]}),H.jsxs("div",{className:"flex gap-6 items-start",children:[H.jsx("div",{className:"w-10 h-10 rounded border border-white/10 flex items-center justify-center text-amber-500/50",children:H.jsx(jS,{size:18})}),H.jsxs("div",{children:[H.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-600 block mb-1",children:"Global HQ"}),H.jsx("span",{className:"text-sm font-mono text-neutral-300",children:"Palo Alto, CA"})]})]})]})]}),H.jsx("div",{className:"relative",children:H.jsx("div",{className:"glass p-1 rounded-xl",children:H.jsxs("form",{onSubmit:o,className:"bg-[#050505] p-8 md:p-12 rounded-lg space-y-6",children:[H.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[H.jsxs("div",{className:"space-y-2",children:[H.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1",children:"Full Name"}),H.jsxs("div",{className:"relative",children:[H.jsx(NO,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600",size:16}),H.jsx("input",{required:!0,type:"text",placeholder:"John Doe",className:"w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"})]})]}),H.jsxs("div",{className:"space-y-2",children:[H.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1",children:"Work Email"}),H.jsxs("div",{className:"relative",children:[H.jsx(WS,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600",size:16}),H.jsx("input",{required:!0,type:"email",placeholder:"name@company.com",className:"w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"})]})]})]}),H.jsxs("div",{className:"space-y-2",children:[H.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1",children:"Organization"}),H.jsxs("div",{className:"relative",children:[H.jsx(jS,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600",size:16}),H.jsx("input",{type:"text",placeholder:"Engineering Corp",className:"w-full bg-neutral-900/50 border border-white/5 rounded-lg py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all"})]})]}),H.jsxs("div",{className:"space-y-2",children:[H.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold text-neutral-500 ml-1",children:"Project Details"}),H.jsxs("div",{className:"relative",children:[H.jsx(_O,{className:"absolute left-4 top-4 text-neutral-600",size:16}),H.jsx("textarea",{rows:4,placeholder:"Describe your spatial AI requirements...",className:"w-full bg-neutral-900/50 border border-white/5 rounded-lg py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all resize-none"})]})]}),H.jsx("button",{disabled:n,className:"w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed group",children:n?H.jsxs(H.Fragment,{children:["Transmission Received ",H.jsx(MO,{size:14,className:"animate-pulse"})]}):H.jsxs(H.Fragment,{children:["Initialize Contact Sequence ",H.jsx(iO,{size:14,className:"group-hover:translate-x-1 transition-transform"})]})}),H.jsx("div",{className:"text-center",children:H.jsx("span",{className:"text-[9px] text-neutral-600 font-mono",children:"ENCRYPTED INPUT CHANNEL: SEC_WAVE_256"})})]})})})]})})},FO=()=>H.jsx("footer",{className:"mt-8 px-12 pb-12",children:H.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 border-t border-white/5 pt-8 z-10 w-full",children:[H.jsxs("div",{className:"flex gap-6 font-mono mb-4 md:mb-0",children:[H.jsx("span",{children:"v4.2.1-STABLE"}),H.jsx("span",{className:"hidden sm:inline",children:"BUILD: HEX-009A2"})]}),H.jsx("div",{className:"uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4 md:mb-0 text-center",children:"© 2024 PRIMEWAVE — SOVEREIGN SPATIAL INTELLIGENCE"}),H.jsxs("div",{className:"flex gap-4 items-center font-mono",children:[H.jsxs("span",{children:["SYSTEM STATUS: ",H.jsx("span",{className:"text-amber-500/70",children:"OPTIMAL"})]}),H.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse"})]})]})}),zO=({isOpen:i,onClose:t})=>{const[n,s]=mo.useState([]),[o,c]=mo.useState(0);return mo.useEffect(()=>{if(i){s(["Establishing secure tunnel...","Authenticating air-gapped node..."]);const u=["Checking hardware integrity...","Loading geometry kernel v4.2.1...","Initializing local vector database...","Allocating GPU memory (80GB reserved)...","Booting Primewave Spatial Engine...","System ready. Sovereign deployment optimized."];let h=0;const m=setInterval(()=>{h<u.length?(s(d=>[...d,u[h]]),c((h+1)/u.length*100),h++):clearInterval(m)},800);return()=>clearInterval(m)}else s([]),c(0)},[i]),H.jsx(FL,{children:i&&H.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6",children:[H.jsx(vi.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,className:"absolute inset-0 bg-black/80 backdrop-blur-md"}),H.jsxs(vi.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},className:"w-full max-w-2xl bg-[#0a0a0a] border border-amber-500/20 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)] relative z-10",children:[H.jsxs("div",{className:"bg-neutral-900 px-6 py-4 border-b border-white/5 flex justify-between items-center",children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx(wO,{size:18,className:"text-amber-500"}),H.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.2em] text-white",children:"Secure Deployment Console"})]}),H.jsx("button",{onClick:t,className:"text-neutral-500 hover:text-white transition-colors",children:H.jsx(LO,{size:20})})]}),H.jsxs("div",{className:"p-8",children:[H.jsxs("div",{className:"mb-8 flex items-center gap-6",children:[H.jsx("div",{className:"w-16 h-16 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center",children:H.jsx(Pg,{size:32,className:"text-amber-500"})}),H.jsxs("div",{className:"flex-1",children:[H.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:"Primewave Node 01"}),H.jsx("p",{className:"text-xs text-neutral-500 font-mono",children:"ENCRYPTED SERRVER: LOCAL_SECURE_TRUST_V2"})]}),H.jsx("div",{className:"text-right",children:H.jsxs("span",{className:"text-xs font-mono text-amber-500",children:[Math.round(o),"%"]})})]}),H.jsx("div",{className:"w-full h-1 bg-white/5 rounded-full overflow-hidden mb-8",children:H.jsx(vi.div,{initial:{width:0},animate:{width:`${o}%`},className:"h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"})}),H.jsxs("div",{className:"bg-black p-4 rounded-lg font-mono text-[10px] text-neutral-400 h-48 overflow-y-auto space-y-1 border border-white/5",children:[n.map((u,h)=>H.jsxs("div",{className:"flex gap-2",children:[H.jsxs("span",{className:"text-neutral-600",children:["[",new Date().toLocaleTimeString(),"]"]}),H.jsx("span",{className:h===n.length-1?"text-amber-500":"",children:u})]},h)),o===100&&H.jsxs(vi.div,{initial:{opacity:0},animate:{opacity:1},className:"flex items-center gap-2 text-green-500 mt-4",children:[H.jsx(sO,{size:12}),H.jsx("span",{children:"SYSTEM ONLINE"})]})]}),H.jsx("div",{className:"mt-8 flex justify-end",children:H.jsx("button",{onClick:t,className:"px-6 py-2 bg-amber-500 text-black font-bold uppercase text-[10px] tracking-widest hover:bg-amber-400 transition-colors",children:o===100?"Access Control Panel":"Abort Mission"})})]})]})]})})};function VO(){const[i,t]=mo.useState(!1);return H.jsxs("div",{className:"min-h-screen overflow-x-hidden relative grid-bg",children:[H.jsx("div",{className:"scanline"}),H.jsx(W3,{}),H.jsx(WP,{onDeployClick:()=>t(!0)}),H.jsxs("main",{className:"relative z-10",children:[H.jsx(qP,{onDeployClick:()=>t(!0)}),H.jsx(PO,{}),H.jsx(OO,{}),H.jsx(IO,{}),H.jsx(BO,{})]}),H.jsx(FO,{}),H.jsx(zO,{isOpen:i,onClose:()=>t(!1)})]})}U1.createRoot(document.getElementById("root")).render(H.jsx(Bt.StrictMode,{children:H.jsx(VO,{})}));
