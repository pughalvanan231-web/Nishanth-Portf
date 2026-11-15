(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var m0=Object.defineProperty,g0=(t,e,r)=>e in t?m0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_e=(t,e,r)=>g0(t,typeof e!="symbol"?e+"":e,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function v0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pm={exports:{}},Tl={},mm={exports:{}},ke={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Rs=Symbol.for("react.element"),x0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),A0=Symbol.for("react.lazy"),ef=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,xm={};function Ra(t,e,r){this.props=t,this.context=e,this.refs=xm,this.updater=r||gm}Ra.prototype.isReactComponent={};Ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _m(){}_m.prototype=Ra.prototype;function Id(t,e,r){this.props=t,this.context=e,this.refs=xm,this.updater=r||gm}var kd=Id.prototype=new _m;kd.constructor=Id;vm(kd,Ra.prototype);kd.isPureReactComponent=!0;var tf=Array.isArray,ym=Object.prototype.hasOwnProperty,Od={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Sm(t,e,r){var i,n={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)ym.call(e,i)&&!bm.hasOwnProperty(i)&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:Rs,type:t,key:a,ref:s,props:n,_owner:Od.current}}function C0(t,e){return{$$typeof:Rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rs}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var rf=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function No(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Rs:case x0:s=!0}}if(s)return s=t,n=n(s),t=i===""?"."+$l(s,0):i,tf(n)?(r="",t!=null&&(r=t.replace(rf,"$&/")+"/"),No(n,e,r,"",function(c){return c})):n!=null&&(Fd(n)&&(n=C0(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(rf,"$&/")+"/")+t)),e.push(n)),1;if(s=0,i=i===""?".":i+":",tf(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+$l(a,o);s+=No(a,e,r,l,n)}else if(l=R0(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+$l(a,o++),s+=No(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Hs(t,e,r){if(t==null)return t;var i=[],n=0;return No(t,i,"","",function(a){return e.call(r,a,n++)}),i}function P0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Po={transition:null},L0={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Po,ReactCurrentOwner:Od};function Mm(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Hs,forEach:function(t,e,r){Hs(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Hs(t,function(){e++}),e},toArray:function(t){return Hs(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ra;ke.Fragment=_0;ke.Profiler=b0;ke.PureComponent=Id;ke.StrictMode=y0;ke.Suspense=E0;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;ke.act=Mm;ke.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vm({},t.props),n=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Od.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ym.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Rs,type:t.type,key:n,ref:a,props:i,_owner:s}};ke.createContext=function(t){return t={$$typeof:M0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S0,_context:t},t.Consumer=t};ke.createElement=Sm;ke.createFactory=function(t){var e=Sm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:w0,render:t}};ke.isValidElement=Fd;ke.lazy=function(t){return{$$typeof:A0,_payload:{_status:-1,_result:t},_init:P0}};ke.memo=function(t,e){return{$$typeof:T0,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Po.transition;Po.transition={};try{t()}finally{Po.transition=e}};ke.unstable_act=Mm;ke.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ke.useContext=function(t){return Wt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ke.useId=function(){return Wt.current.useId()};ke.useImperativeHandle=function(t,e,r){return Wt.current.useImperativeHandle(t,e,r)};ke.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ke.useReducer=function(t,e,r){return Wt.current.useReducer(t,e,r)};ke.useRef=function(t){return Wt.current.useRef(t)};ke.useState=function(t){return Wt.current.useState(t)};ke.useSyncExternalStore=function(t,e,r){return Wt.current.useSyncExternalStore(t,e,r)};ke.useTransition=function(){return Wt.current.useTransition()};ke.version="18.3.1";mm.exports=ke;var ft=mm.exports;const D0=v0(ft);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var U0=ft,I0=Symbol.for("react.element"),k0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,F0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z0={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,r){var i,n={},a=null,s=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)O0.call(e,i)&&!z0.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:I0,type:t,key:a,ref:s,props:n,_owner:F0.current}}Tl.Fragment=k0;Tl.jsx=wm;Tl.jsxs=wm;pm.exports=Tl;var y=pm.exports,eu={},Em={exports:{}},pr={},Tm={exports:{}},Am={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(L,q){var Q=L.length;L.push(q);e:for(;0<Q;){var oe=Q-1>>>1,be=L[oe];if(0<n(be,q))L[oe]=q,L[Q]=be,Q=oe;else break e}}function r(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],Q=L.pop();if(Q!==q){L[0]=Q;e:for(var oe=0,be=L.length,Oe=be>>>1;oe<Oe;){var X=2*(oe+1)-1,Z=L[X],ue=X+1,le=L[ue];if(0>n(Z,Q))ue<be&&0>n(le,Z)?(L[oe]=le,L[ue]=Q,oe=ue):(L[oe]=Z,L[X]=Q,oe=X);else if(ue<be&&0>n(le,Q))L[oe]=le,L[ue]=Q,oe=ue;else break e}}return q}function n(L,q){var Q=L.sortIndex-q.sortIndex;return Q!==0?Q:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,f=null,d=3,p=!1,x=!1,b=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var q=r(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=r(c)}}function S(L){if(b=!1,v(L),!x)if(r(l)!==null)x=!0,G(C);else{var q=r(c);q!==null&&ee(S,q.startTime-L)}}function C(L,q){x=!1,b&&(b=!1,u(N),N=-1),p=!0;var Q=d;try{for(v(q),f=r(l);f!==null&&(!(f.expirationTime>q)||L&&!M());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var be=oe(f.expirationTime<=q);q=t.unstable_now(),typeof be=="function"?f.callback=be:f===r(l)&&i(l),v(q)}else i(l);f=r(l)}if(f!==null)var Oe=!0;else{var X=r(c);X!==null&&ee(S,X.startTime-q),Oe=!1}return Oe}finally{f=null,d=Q,p=!1}}var A=!1,T=null,N=-1,W=5,_=-1;function M(){return!(t.unstable_now()-_<W)}function k(){if(T!==null){var L=t.unstable_now();_=L;var q=!0;try{q=T(!0,L)}finally{q?B():(A=!1,T=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(k)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,K=O.port2;O.port1.onmessage=k,B=function(){K.postMessage(null)}}else B=function(){m(k,0)};function G(L){T=L,A||(A=!0,B())}function ee(L,q){N=m(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,G(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return L()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=d;d=L;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(L,q,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Q+be,L={id:h++,callback:q,priorityLevel:L,startTime:Q,expirationTime:be,sortIndex:-1},Q>oe?(L.sortIndex=Q,e(c,L),r(l)===null&&L===r(c)&&(b?(u(N),N=-1):b=!0,ee(S,Q-oe))):(L.sortIndex=be,e(l,L),x||p||(x=!0,G(C))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var q=d;return function(){var Q=d;d=q;try{return L.apply(this,arguments)}finally{d=Q}}}})(Am);Tm.exports=Am;var B0=Tm.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var H0=ft,fr=B0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm=new Set,us={};function An(t,e){ma(t,e),ma(t+"Capture",e)}function ma(t,e){for(us[t]=e,t=0;t<e.length;t++)Rm.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nf={},af={};function G0(t){return tu.call(af,t)?!0:tu.call(nf,t)?!1:V0.test(t)?af[t]=!0:(nf[t]=!0,!1)}function j0(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W0(t,e,r,i){if(e===null||typeof e>"u"||j0(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,r,i,n,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,Bd);Dt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,Bd);Dt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,Bd);Dt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,r,i){var n=Dt.hasOwnProperty(e)?Dt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W0(e,r,n,i)&&(r=null),i||n===null?G0(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var gi=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),sf=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=sf&&t[sf]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Zl;function Ka(t){if(Zl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var Ql=!1;function Jl(t,e){if(!t||Ql)return"";Ql=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ql=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ka(t):""}function X0(t){switch(t.tag){case 5:return Ka(t.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qn:return"Fragment";case Xn:return"Portal";case ru:return"Profiler";case Vd:return"StrictMode";case iu:return"Suspense";case nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nm:return(t.displayName||"Context")+".Consumer";case Cm:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y0(t){var e=Lm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=Y0(t))}function Dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Lm(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function su(t,e){var r=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function of(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=ji(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Um(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function ou(t,e){Um(t,e);var r=ji(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,r):e.hasOwnProperty("defaultValue")&&lu(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lf(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function lu(t,e,r){(e!=="number"||Ko(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var $a=Array.isArray;function sa(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+ji(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cf(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(te(92));if($a(r)){if(1<r.length)throw Error(te(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:ji(r)}}function Im(t,e){var r=ji(e.value),i=ji(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var js,Om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(t){K0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),es[e]=es[t]})});function Fm(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||es.hasOwnProperty(t)&&es[t]?(""+e).trim():e+"px"}function zm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=Fm(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var $0=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(t,e){if(e){if($0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,oa=null,la=null;function df(t){if(t=Ps(t)){if(typeof pu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Pl(e),pu(t.stateNode,t.type,e))}}function Bm(t){oa?la?la.push(t):la=[t]:oa=t}function Hm(){if(oa){var t=oa,e=la;if(la=oa=null,df(t),e)for(t=0;t<e.length;t++)df(e[t])}}function Vm(t,e){return t(e)}function Gm(){}var ec=!1;function jm(t,e,r){if(ec)return t(e,r);ec=!0;try{return Vm(t,e,r)}finally{ec=!1,(oa!==null||la!==null)&&(Gm(),Hm())}}function hs(t,e){var r=t.stateNode;if(r===null)return null;var i=Pl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(te(231,e,typeof r));return r}var mu=!1;if(ui)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{mu=!1}function Z0(t,e,r,i,n,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(h){this.onError(h)}}var ts=!1,$o=null,Zo=!1,gu=null,Q0={onError:function(t){ts=!0,$o=t}};function J0(t,e,r,i,n,a,s,o,l){ts=!1,$o=null,Z0.apply(Q0,arguments)}function ex(t,e,r,i,n,a,s,o,l){if(J0.apply(this,arguments),ts){if(ts){var c=$o;ts=!1,$o=null}else throw Error(te(198));Zo||(Zo=!0,gu=c)}}function Rn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Wm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hf(t){if(Rn(t)!==t)throw Error(te(188))}function tx(t){var e=t.alternate;if(!e){if(e=Rn(t),e===null)throw Error(te(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return hf(n),t;if(a===i)return hf(n),e;a=a.sibling}throw Error(te(188))}if(r.return!==i.return)r=n,i=a;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,i=a;break}if(o===i){s=!0,i=n,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,i=n;break}if(o===i){s=!0,i=a,r=n;break}o=o.sibling}if(!s)throw Error(te(189))}}if(r.alternate!==i)throw Error(te(190))}if(r.tag!==3)throw Error(te(188));return r.stateNode.current===r?t:e}function Xm(t){return t=tx(t),t!==null?qm(t):null}function qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qm(t);if(e!==null)return e;t=t.sibling}return null}var Ym=fr.unstable_scheduleCallback,ff=fr.unstable_cancelCallback,rx=fr.unstable_shouldYield,ix=fr.unstable_requestPaint,vt=fr.unstable_now,nx=fr.unstable_getCurrentPriorityLevel,Xd=fr.unstable_ImmediatePriority,Km=fr.unstable_UserBlockingPriority,Qo=fr.unstable_NormalPriority,ax=fr.unstable_LowPriority,$m=fr.unstable_IdlePriority,Al=null,Yr=null;function sx(t){if(Yr&&typeof Yr.onCommitFiberRoot=="function")try{Yr.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var zr=Math.clz32?Math.clz32:cx,ox=Math.log,lx=Math.LN2;function cx(t){return t>>>=0,t===0?32:31-(ox(t)/lx|0)|0}var Ws=64,Xs=4194304;function Za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?i=Za(o):(a&=s,a!==0&&(i=Za(a)))}else s=r&~n,s!==0?i=Za(s):a!==0&&(i=Za(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-zr(e),n=1<<r,i|=t[r],e&=~n;return i}function ux(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-zr(a),o=1<<s,l=n[s];l===-1?(!(o&r)||o&i)&&(n[s]=ux(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function tc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Cs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zr(e),t[e]=r}function hx(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-zr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function qd(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-zr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ke=0;function Qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jm,Yd,eg,tg,rg,xu=!1,qs=[],Di=null,Ui=null,Ii=null,fs=new Map,ps=new Map,Ri=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function ka(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=Ps(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function px(t,e,r,i,n){switch(e){case"focusin":return Di=ka(Di,t,e,r,i,n),!0;case"dragenter":return Ui=ka(Ui,t,e,r,i,n),!0;case"mouseover":return Ii=ka(Ii,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return fs.set(a,ka(fs.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,ps.set(a,ka(ps.get(a)||null,t,e,r,i,n)),!0}return!1}function ig(t){var e=fn(t.target);if(e!==null){var r=Rn(e);if(r!==null){if(e=r.tag,e===13){if(e=Wm(r),e!==null){t.blockedOn=e,rg(t.priority,function(){eg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);fu=i,r.target.dispatchEvent(i),fu=null}else return e=Ps(r),e!==null&&Yd(e),t.blockedOn=r,!1;e.shift()}return!0}function mf(t,e,r){Lo(t)&&r.delete(e)}function mx(){xu=!1,Di!==null&&Lo(Di)&&(Di=null),Ui!==null&&Lo(Ui)&&(Ui=null),Ii!==null&&Lo(Ii)&&(Ii=null),fs.forEach(mf),ps.forEach(mf)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,xu||(xu=!0,fr.unstable_scheduleCallback(fr.unstable_NormalPriority,mx)))}function ms(t){function e(n){return Oa(n,t)}if(0<qs.length){Oa(qs[0],t);for(var r=1;r<qs.length;r++){var i=qs[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Oa(Di,t),Ui!==null&&Oa(Ui,t),Ii!==null&&Oa(Ii,t),fs.forEach(e),ps.forEach(e),r=0;r<Ri.length;r++)i=Ri[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(r=Ri[0],r.blockedOn===null);)ig(r),r.blockedOn===null&&Ri.shift()}var ca=gi.ReactCurrentBatchConfig,el=!0;function gx(t,e,r,i){var n=Ke,a=ca.transition;ca.transition=null;try{Ke=1,Kd(t,e,r,i)}finally{Ke=n,ca.transition=a}}function vx(t,e,r,i){var n=Ke,a=ca.transition;ca.transition=null;try{Ke=4,Kd(t,e,r,i)}finally{Ke=n,ca.transition=a}}function Kd(t,e,r,i){if(el){var n=_u(t,e,r,i);if(n===null)dc(t,e,i,tl,r),pf(t,i);else if(px(n,t,e,r,i))i.stopPropagation();else if(pf(t,i),e&4&&-1<fx.indexOf(t)){for(;n!==null;){var a=Ps(n);if(a!==null&&Jm(a),a=_u(t,e,r,i),a===null&&dc(t,e,i,tl,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else dc(t,e,i,null,r)}}var tl=null;function _u(t,e,r,i){if(tl=null,t=Wd(i),t=fn(t),t!==null)if(e=Rn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Wm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nx()){case Xd:return 1;case Km:return 4;case Qo:case ax:return 16;case $m:return 536870912;default:return 16}default:return 16}}var Pi=null,$d=null,Do=null;function ag(){if(Do)return Do;var t,e=$d,r=e.length,i,n="value"in Pi?Pi.value:Pi.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var s=r-t;for(i=1;i<=s&&e[r-i]===n[a-i];i++);return Do=n.slice(t,1<i?1-i:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function gf(){return!1}function mr(t){function e(r,i,n,a,s){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ys:gf,this.isPropagationStopped=gf,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=mr(Ca),Ns=dt({},Ca,{view:0,detail:0}),xx=mr(Ns),rc,ic,Fa,Rl=dt({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(rc=t.screenX-Fa.screenX,ic=t.screenY-Fa.screenY):ic=rc=0,Fa=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),vf=mr(Rl),_x=dt({},Rl,{dataTransfer:0}),yx=mr(_x),bx=dt({},Ns,{relatedTarget:0}),nc=mr(bx),Sx=dt({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=mr(Sx),wx=dt({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ex=mr(wx),Tx=dt({},Ca,{data:0}),xf=mr(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cx[t])?!!e[t]:!1}function Qd(){return Nx}var Px=dt({},Ns,{key:function(t){if(t.key){var e=Ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=mr(Px),Dx=dt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=mr(Dx),Ux=dt({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),Ix=mr(Ux),kx=dt({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=mr(kx),Fx=dt({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=mr(Fx),Bx=[9,13,27,32],Jd=ui&&"CompositionEvent"in window,rs=null;ui&&"documentMode"in document&&(rs=document.documentMode);var Hx=ui&&"TextEvent"in window&&!rs,sg=ui&&(!Jd||rs&&8<rs&&11>=rs),yf=" ",bf=!1;function og(t,e){switch(t){case"keyup":return Bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yn=!1;function Vx(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(bf=!0,yf);case"textInput":return t=e.data,t===yf&&bf?null:t;default:return null}}function Gx(t,e){if(Yn)return t==="compositionend"||!Jd&&og(t,e)?(t=ag(),Do=$d=Pi=null,Yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jx[t.type]:e==="textarea"}function cg(t,e,r,i){Bm(i),e=rl(e,"onChange"),0<e.length&&(r=new Zd("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var is=null,gs=null;function Wx(t){yg(t,0)}function Cl(t){var e=Zn(t);if(Dm(e))return t}function Xx(t,e){if(t==="change")return e}var ug=!1;if(ui){var ac;if(ui){var sc="oninput"in document;if(!sc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),sc=typeof Mf.oninput=="function"}ac=sc}else ac=!1;ug=ac&&(!document.documentMode||9<document.documentMode)}function wf(){is&&(is.detachEvent("onpropertychange",dg),gs=is=null)}function dg(t){if(t.propertyName==="value"&&Cl(gs)){var e=[];cg(e,gs,t,Wd(t)),jm(Wx,e)}}function qx(t,e,r){t==="focusin"?(wf(),is=e,gs=r,is.attachEvent("onpropertychange",dg)):t==="focusout"&&wf()}function Yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(gs)}function Kx(t,e){if(t==="click")return Cl(e)}function $x(t,e){if(t==="input"||t==="change")return Cl(e)}function Zx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hr=typeof Object.is=="function"?Object.is:Zx;function vs(t,e){if(Hr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!tu.call(e,n)||!Hr(t[n],e[n]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,e){var r=Ef(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ef(r)}}function hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ko(t.document)}return e}function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qx(t){var e=fg(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&hg(r.ownerDocument.documentElement,r)){if(i!==null&&eh(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=Tf(r,a);var s=Tf(r,i);n&&s&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jx=ui&&"documentMode"in document&&11>=document.documentMode,Kn=null,yu=null,ns=null,bu=!1;function Af(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;bu||Kn==null||Kn!==Ko(i)||(i=Kn,"selectionStart"in i&&eh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ns&&vs(ns,i)||(ns=i,i=rl(yu,"onSelect"),0<i.length&&(e=new Zd("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Kn)))}function Ks(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var $n={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},oc={},pg={};ui&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Nl(t){if(oc[t])return oc[t];if(!$n[t])return t;var e=$n[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in pg)return oc[t]=e[r];return t}var mg=Nl("animationend"),gg=Nl("animationiteration"),vg=Nl("animationstart"),xg=Nl("transitionend"),_g=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){_g.set(t,e),An(e,[t])}for(var lc=0;lc<Rf.length;lc++){var cc=Rf[lc],e_=cc.toLowerCase(),t_=cc[0].toUpperCase()+cc.slice(1);Yi(e_,"on"+t_)}Yi(mg,"onAnimationEnd");Yi(gg,"onAnimationIteration");Yi(vg,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(xg,"onTransitionEnd");ma("onMouseEnter",["mouseout","mouseover"]);ma("onMouseLeave",["mouseout","mouseover"]);ma("onPointerEnter",["pointerout","pointerover"]);ma("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Cf(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,ex(i,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;Cf(n,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;Cf(n,o,c),a=l}}}if(Zo)throw t=gu,Zo=!1,gu=null,t}function it(t,e){var r=e[Tu];r===void 0&&(r=e[Tu]=new Set);var i=t+"__bubble";r.has(i)||(bg(e,t,2,!1),r.add(i))}function uc(t,e,r){var i=0;e&&(i|=4),bg(r,t,i,e)}var $s="_reactListening"+Math.random().toString(36).slice(2);function xs(t){if(!t[$s]){t[$s]=!0,Rm.forEach(function(r){r!=="selectionchange"&&(r_.has(r)||uc(r,!1,t),uc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$s]||(e[$s]=!0,uc("selectionchange",!1,e))}}function bg(t,e,r,i){switch(ng(e)){case 1:var n=gx;break;case 4:n=vx;break;default:n=Kd}r=n.bind(null,e,r,t),n=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function dc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=fn(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}jm(function(){var c=a,h=Wd(r),f=[];e:{var d=_g.get(t);if(d!==void 0){var p=Zd,x=t;switch(t){case"keypress":if(Uo(r)===0)break e;case"keydown":case"keyup":p=Lx;break;case"focusin":x="focus",p=nc;break;case"focusout":x="blur",p=nc;break;case"beforeblur":case"afterblur":p=nc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ix;break;case mg:case gg:case vg:p=Mx;break;case xg:p=Ox;break;case"scroll":p=xx;break;case"wheel":p=zx;break;case"copy":case"cut":case"paste":p=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_f}var b=(e&4)!==0,m=!b&&t==="scroll",u=b?d!==null?d+"Capture":null:d;b=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=hs(g,u),S!=null&&b.push(_s(g,S,v)))),m)break;g=g.return}0<b.length&&(d=new p(d,x,null,r,h),f.push({event:d,listeners:b}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&r!==fu&&(x=r.relatedTarget||r.fromElement)&&(fn(x)||x[di]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=r.relatedTarget||r.toElement,p=c,x=x?fn(x):null,x!==null&&(m=Rn(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(b=vf,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(b=_f,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:Zn(p),v=x==null?d:Zn(x),d=new b(S,g+"leave",p,r,h),d.target=m,d.relatedTarget=v,S=null,fn(h)===c&&(b=new b(u,g+"enter",x,r,h),b.target=v,b.relatedTarget=m,S=b),m=S,p&&x)t:{for(b=p,u=x,g=0,v=b;v;v=Nn(v))g++;for(v=0,S=u;S;S=Nn(S))v++;for(;0<g-v;)b=Nn(b),g--;for(;0<v-g;)u=Nn(u),v--;for(;g--;){if(b===u||u!==null&&b===u.alternate)break t;b=Nn(b),u=Nn(u)}b=null}else b=null;p!==null&&Nf(f,d,p,b,!1),x!==null&&m!==null&&Nf(f,m,x,b,!0)}}e:{if(d=c?Zn(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=Xx;else if(Sf(d))if(ug)C=$x;else{C=Yx;var A=qx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Kx);if(C&&(C=C(t,c))){cg(f,C,r,h);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&lu(d,"number",d.value)}switch(A=c?Zn(c):window,t){case"focusin":(Sf(A)||A.contentEditable==="true")&&(Kn=A,yu=c,ns=null);break;case"focusout":ns=yu=Kn=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Af(f,r,h);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Af(f,r,h)}var T;if(Jd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Yn?og(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(sg&&r.locale!=="ko"&&(Yn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Yn&&(T=ag()):(Pi=h,$d="value"in Pi?Pi.value:Pi.textContent,Yn=!0)),A=rl(c,N),0<A.length&&(N=new xf(N,t,null,r,h),f.push({event:N,listeners:A}),T?N.data=T:(T=lg(r),T!==null&&(N.data=T)))),(T=Hx?Vx(t,r):Gx(t,r))&&(c=rl(c,"onBeforeInput"),0<c.length&&(h=new xf("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:c}),h.data=T))}yg(f,e)})}function _s(t,e,r){return{instance:t,listener:e,currentTarget:r}}function rl(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=hs(t,r),a!=null&&i.unshift(_s(t,a,n)),a=hs(t,e),a!=null&&i.push(_s(t,a,n))),t=t.return}return i}function Nn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nf(t,e,r,i,n){for(var a=e._reactName,s=[];r!==null&&r!==i;){var o=r,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,n?(l=hs(r,a),l!=null&&s.unshift(_s(r,l,o))):n||(l=hs(r,a),l!=null&&s.push(_s(r,l,o)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var i_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function Pf(t){return(typeof t=="string"?t:""+t).replace(i_,`
`).replace(n_,"")}function Zs(t,e,r){if(e=Pf(e),Pf(t)!==e&&r)throw Error(te(425))}function il(){}var Su=null,Mu=null;function wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,a_=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(t){return Lf.resolve(null).then(t).catch(o_)}:Eu;function o_(t){setTimeout(function(){throw t})}function hc(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),ms(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);ms(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Xr="__reactFiber$"+Na,ys="__reactProps$"+Na,di="__reactContainer$"+Na,Tu="__reactEvents$"+Na,l_="__reactListeners$"+Na,c_="__reactHandles$"+Na;function fn(t){var e=t[Xr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[di]||r[Xr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Df(t);t!==null;){if(r=t[Xr])return r;t=Df(t)}return e}t=r,r=t.parentNode}return null}function Ps(t){return t=t[Xr]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Pl(t){return t[ys]||null}var Au=[],Qn=-1;function Ki(t){return{current:t}}function at(t){0>Qn||(t.current=Au[Qn],Au[Qn]=null,Qn--)}function tt(t,e){Qn++,Au[Qn]=t.current,t.current=e}var Wi={},zt=Ki(Wi),Jt=Ki(!1),yn=Wi;function ga(t,e){var r=t.type.contextTypes;if(!r)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function er(t){return t=t.childContextTypes,t!=null}function nl(){at(Jt),at(zt)}function Uf(t,e,r){if(zt.current!==Wi)throw Error(te(168));tt(zt,e),tt(Jt,r)}function Sg(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(te(108,q0(t)||"Unknown",n));return dt({},r,i)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,yn=zt.current,tt(zt,t),tt(Jt,Jt.current),!0}function If(t,e,r){var i=t.stateNode;if(!i)throw Error(te(169));r?(t=Sg(t,e,yn),i.__reactInternalMemoizedMergedChildContext=t,at(Jt),at(zt),tt(zt,t)):at(Jt),tt(Jt,r)}var ni=null,Ll=!1,fc=!1;function Mg(t){ni===null?ni=[t]:ni.push(t)}function u_(t){Ll=!0,Mg(t)}function $i(){if(!fc&&ni!==null){fc=!0;var t=0,e=Ke;try{var r=ni;for(Ke=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}ni=null,Ll=!1}catch(n){throw ni!==null&&(ni=ni.slice(t+1)),Ym(Xd,$i),n}finally{Ke=e,fc=!1}}return null}var Jn=[],ea=0,sl=null,ol=0,xr=[],_r=0,bn=null,ai=1,si="";function on(t,e){Jn[ea++]=ol,Jn[ea++]=sl,sl=t,ol=e}function wg(t,e,r){xr[_r++]=ai,xr[_r++]=si,xr[_r++]=bn,bn=t;var i=ai;t=si;var n=32-zr(i)-1;i&=~(1<<n),r+=1;var a=32-zr(e)+n;if(30<a){var s=n-n%5;a=(i&(1<<s)-1).toString(32),i>>=s,n-=s,ai=1<<32-zr(e)+n|r<<n|i,si=a+t}else ai=1<<a|r<<n|i,si=t}function th(t){t.return!==null&&(on(t,1),wg(t,1,0))}function rh(t){for(;t===sl;)sl=Jn[--ea],Jn[ea]=null,ol=Jn[--ea],Jn[ea]=null;for(;t===bn;)bn=xr[--_r],xr[_r]=null,si=xr[--_r],xr[_r]=null,ai=xr[--_r],xr[_r]=null}var hr=null,dr=null,ot=!1,Ir=null;function Eg(t,e){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function kf(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hr=t,dr=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hr=t,dr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=bn!==null?{id:ai,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,hr=t,dr=null,!0):!1;default:return!1}}function Ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(ot){var e=dr;if(e){var r=e;if(!kf(t,e)){if(Ru(t))throw Error(te(418));e=ki(r.nextSibling);var i=hr;e&&kf(t,e)?Eg(i,r):(t.flags=t.flags&-4097|2,ot=!1,hr=t)}}else{if(Ru(t))throw Error(te(418));t.flags=t.flags&-4097|2,ot=!1,hr=t}}}function Of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hr=t}function Qs(t){if(t!==hr)return!1;if(!ot)return Of(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wu(t.type,t.memoizedProps)),e&&(e=dr)){if(Ru(t))throw Tg(),Error(te(418));for(;e;)Eg(t,e),e=ki(e.nextSibling)}if(Of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){dr=ki(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}dr=null}}else dr=hr?ki(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=dr;t;)t=ki(t.nextSibling)}function va(){dr=hr=null,ot=!1}function ih(t){Ir===null?Ir=[t]:Ir.push(t)}var d_=gi.ReactCurrentBatchConfig;function za(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(te(309));var i=r.stateNode}if(!i)throw Error(te(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(te(284));if(!r._owner)throw Error(te(290,t))}return t}function Js(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ff(t){var e=t._init;return e(t._payload)}function Ag(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function r(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function n(u,g){return u=Bi(u,g),u.index=0,u.sibling=null,u}function a(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,S){return g===null||g.tag!==6?(g=yc(v,u.mode,S),g.return=u,g):(g=n(g,v),g.return=u,g)}function l(u,g,v,S){var C=v.type;return C===qn?h(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&Ff(C)===g.type)?(S=n(g,v.props),S.ref=za(u,g,v),S.return=u,S):(S=Ho(v.type,v.key,v.props,null,u.mode,S),S.ref=za(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=bc(v,u.mode,S),g.return=u,g):(g=n(g,v.children||[]),g.return=u,g)}function h(u,g,v,S,C){return g===null||g.tag!==7?(g=_n(v,u.mode,S,C),g.return=u,g):(g=n(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=yc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vs:return v=Ho(g.type,g.key,g.props,null,u.mode,v),v.ref=za(u,null,g),v.return=u,v;case Xn:return g=bc(g,u.mode,v),g.return=u,g;case Ti:var S=g._init;return f(u,S(g._payload),v)}if($a(g)||Ua(g))return g=_n(g,u.mode,v,null),g.return=u,g;Js(u,g)}return null}function d(u,g,v,S){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vs:return v.key===C?l(u,g,v,S):null;case Xn:return v.key===C?c(u,g,v,S):null;case Ti:return C=v._init,d(u,g,C(v._payload),S)}if($a(v)||Ua(v))return C!==null?null:h(u,g,v,S,null);Js(u,v)}return null}function p(u,g,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,o(g,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vs:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,C);case Xn:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,C);case Ti:var A=S._init;return p(u,g,v,A(S._payload),C)}if($a(S)||Ua(S))return u=u.get(v)||null,h(g,u,S,C,null);Js(g,S)}return null}function x(u,g,v,S){for(var C=null,A=null,T=g,N=g=0,W=null;T!==null&&N<v.length;N++){T.index>N?(W=T,T=null):W=T.sibling;var _=d(u,T,v[N],S);if(_===null){T===null&&(T=W);break}t&&T&&_.alternate===null&&e(u,T),g=a(_,g,N),A===null?C=_:A.sibling=_,A=_,T=W}if(N===v.length)return r(u,T),ot&&on(u,N),C;if(T===null){for(;N<v.length;N++)T=f(u,v[N],S),T!==null&&(g=a(T,g,N),A===null?C=T:A.sibling=T,A=T);return ot&&on(u,N),C}for(T=i(u,T);N<v.length;N++)W=p(T,u,N,v[N],S),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?N:W.key),g=a(W,g,N),A===null?C=W:A.sibling=W,A=W);return t&&T.forEach(function(M){return e(u,M)}),ot&&on(u,N),C}function b(u,g,v,S){var C=Ua(v);if(typeof C!="function")throw Error(te(150));if(v=C.call(v),v==null)throw Error(te(151));for(var A=C=null,T=g,N=g=0,W=null,_=v.next();T!==null&&!_.done;N++,_=v.next()){T.index>N?(W=T,T=null):W=T.sibling;var M=d(u,T,_.value,S);if(M===null){T===null&&(T=W);break}t&&T&&M.alternate===null&&e(u,T),g=a(M,g,N),A===null?C=M:A.sibling=M,A=M,T=W}if(_.done)return r(u,T),ot&&on(u,N),C;if(T===null){for(;!_.done;N++,_=v.next())_=f(u,_.value,S),_!==null&&(g=a(_,g,N),A===null?C=_:A.sibling=_,A=_);return ot&&on(u,N),C}for(T=i(u,T);!_.done;N++,_=v.next())_=p(T,u,N,_.value,S),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?N:_.key),g=a(_,g,N),A===null?C=_:A.sibling=_,A=_);return t&&T.forEach(function(k){return e(u,k)}),ot&&on(u,N),C}function m(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===qn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vs:e:{for(var C=v.key,A=g;A!==null;){if(A.key===C){if(C=v.type,C===qn){if(A.tag===7){r(u,A.sibling),g=n(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ti&&Ff(C)===A.type){r(u,A.sibling),g=n(A,v.props),g.ref=za(u,A,v),g.return=u,u=g;break e}r(u,A);break}else e(u,A);A=A.sibling}v.type===qn?(g=_n(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=Ho(v.type,v.key,v.props,null,u.mode,S),S.ref=za(u,g,v),S.return=u,u=S)}return s(u);case Xn:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){r(u,g.sibling),g=n(g,v.children||[]),g.return=u,u=g;break e}else{r(u,g);break}else e(u,g);g=g.sibling}g=bc(v,u.mode,S),g.return=u,u=g}return s(u);case Ti:return A=v._init,m(u,g,A(v._payload),S)}if($a(v))return x(u,g,v,S);if(Ua(v))return b(u,g,v,S);Js(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(r(u,g.sibling),g=n(g,v),g.return=u,u=g):(r(u,g),g=yc(v,u.mode,S),g.return=u,u=g),s(u)):r(u,g)}return m}var xa=Ag(!0),Rg=Ag(!1),ll=Ki(null),cl=null,ta=null,nh=null;function ah(){nh=ta=cl=null}function sh(t){var e=ll.current;at(ll),t._currentValue=e}function Nu(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function ua(t,e){cl=t,nh=ta=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Tr(t){var e=t._currentValue;if(nh!==t)if(t={context:t,memoizedValue:e,next:null},ta===null){if(cl===null)throw Error(te(308));ta=t,cl.dependencies={lanes:0,firstContext:t}}else ta=ta.next=t;return e}var pn=null;function oh(t){pn===null?pn=[t]:pn.push(t)}function Cg(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,oh(e)):(r.next=n.next,n.next=r),e.interleaved=r,hi(t,i)}function hi(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ai=!1;function lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,hi(t,r)}return n=i.interleaved,n===null?(e.next=e,oh(i)):(e.next=n.next,n.next=e),i.interleaved=e,hi(t,r)}function Io(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,qd(t,r)}}function zf(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ul(t,e,r,i){var n=t.updateQueue;Ai=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;s=0,h=c=l=null,o=a;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,b=o;switch(d=e,p=r,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(p,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,d=typeof x=="function"?x.call(p,f,d):x,d==null)break e;f=dt({},f,d);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=n.effects,d===null?n.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,s|=d;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;d=o,o=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);if(h===null&&(l=f),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=h,e=n.shared.interleaved,e!==null){n=e;do s|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);Mn|=s,t.lanes=s,t.memoizedState=f}}function Bf(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(te(191,n));n.call(i)}}}var Ls={},Kr=Ki(Ls),bs=Ki(Ls),Ss=Ki(Ls);function mn(t){if(t===Ls)throw Error(te(174));return t}function ch(t,e){switch(tt(Ss,e),tt(bs,t),tt(Kr,Ls),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}at(Kr),tt(Kr,e)}function _a(){at(Kr),at(bs),at(Ss)}function Pg(t){mn(Ss.current);var e=mn(Kr.current),r=uu(e,t.type);e!==r&&(tt(bs,t),tt(Kr,r))}function uh(t){bs.current===t&&(at(Kr),at(bs))}var ct=Ki(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function dh(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var ko=gi.ReactCurrentDispatcher,mc=gi.ReactCurrentBatchConfig,Sn=0,ut=null,wt=null,Ct=null,hl=!1,as=!1,Ms=0,h_=0;function Ut(){throw Error(te(321))}function hh(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Hr(t[r],e[r]))return!1;return!0}function fh(t,e,r,i,n,a){if(Sn=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?g_:v_,t=r(i,n),as){a=0;do{if(as=!1,Ms=0,25<=a)throw Error(te(301));a+=1,Ct=wt=null,e.updateQueue=null,ko.current=x_,t=r(i,n)}while(as)}if(ko.current=fl,e=wt!==null&&wt.next!==null,Sn=0,Ct=wt=ut=null,hl=!1,e)throw Error(te(300));return t}function ph(){var t=Ms!==0;return Ms=0,t}function Gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ut.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Ar(){if(wt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Ct===null?ut.memoizedState:Ct.next;if(e!==null)Ct=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?ut.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function ws(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Ar(),r=e.queue;if(r===null)throw Error(te(311));r.lastRenderedReducer=t;var i=wt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var o=s=null,l=null,c=a;do{var h=c.lane;if((Sn&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ut.lanes|=h,Mn|=h}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,Hr(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,ut.lanes|=a,Mn|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function vc(t){var e=Ar(),r=e.queue;if(r===null)throw Error(te(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=t(a,s.action),s=s.next;while(s!==n);Hr(a,e.memoizedState)||(Qt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Lg(){}function Dg(t,e){var r=ut,i=Ar(),n=e(),a=!Hr(i.memoizedState,n);if(a&&(i.memoizedState=n,Qt=!0),i=i.queue,mh(kg.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Ct!==null&&Ct.memoizedState.tag&1){if(r.flags|=2048,Es(9,Ig.bind(null,r,i,n,e),void 0,null),Nt===null)throw Error(te(349));Sn&30||Ug(r,e,n)}return n}function Ug(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Ig(t,e,r,i){e.value=r,e.getSnapshot=i,Og(e)&&Fg(t)}function kg(t,e,r){return r(function(){Og(e)&&Fg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Hr(t,r)}catch{return!0}}function Fg(t){var e=hi(t,1);e!==null&&Br(e,t,1,-1)}function Hf(t){var e=Gr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},e.queue=t,t=t.dispatch=m_.bind(null,ut,t),[e.memoizedState,t]}function Es(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function zg(){return Ar().memoizedState}function Oo(t,e,r,i){var n=Gr();ut.flags|=t,n.memoizedState=Es(1|e,r,void 0,i===void 0?null:i)}function Dl(t,e,r,i){var n=Ar();i=i===void 0?null:i;var a=void 0;if(wt!==null){var s=wt.memoizedState;if(a=s.destroy,i!==null&&hh(i,s.deps)){n.memoizedState=Es(e,r,a,i);return}}ut.flags|=t,n.memoizedState=Es(1|e,r,a,i)}function Vf(t,e){return Oo(8390656,8,t,e)}function mh(t,e){return Dl(2048,8,t,e)}function Bg(t,e){return Dl(4,2,t,e)}function Hg(t,e){return Dl(4,4,t,e)}function Vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gg(t,e,r){return r=r!=null?r.concat([t]):null,Dl(4,4,Vg.bind(null,e,t),r)}function gh(){}function jg(t,e){var r=Ar();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function Wg(t,e){var r=Ar();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function Xg(t,e,r){return Sn&21?(Hr(r,e)||(r=Zm(),ut.lanes|=r,Mn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=r)}function f_(t,e){var r=Ke;Ke=r!==0&&4>r?r:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{Ke=r,mc.transition=i}}function qg(){return Ar().memoizedState}function p_(t,e,r){var i=zi(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Yg(t))Kg(e,r);else if(r=Cg(t,e,r,i),r!==null){var n=Gt();Br(r,t,i,n),$g(r,e,i)}}function m_(t,e,r){var i=zi(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))Kg(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,r);if(n.hasEagerState=!0,n.eagerState=o,Hr(o,s)){var l=e.interleaved;l===null?(n.next=n,oh(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Cg(t,e,n,i),r!==null&&(n=Gt(),Br(r,t,i,n),$g(r,e,i))}}function Yg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Kg(t,e){as=hl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function $g(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,qd(t,r)}}var fl={readContext:Tr,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},g_={readContext:Tr,useCallback:function(t,e){return Gr().memoizedState=[t,e===void 0?null:e],t},useContext:Tr,useEffect:Vf,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Oo(4194308,4,Vg.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var r=Gr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Gr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=p_.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Gr();return t={current:t},e.memoizedState=t},useState:Hf,useDebugValue:gh,useDeferredValue:function(t){return Gr().memoizedState=t},useTransition:function(){var t=Hf(!1),e=t[0];return t=f_.bind(null,t[1]),Gr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ut,n=Gr();if(ot){if(r===void 0)throw Error(te(407));r=r()}else{if(r=e(),Nt===null)throw Error(te(349));Sn&30||Ug(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,Vf(kg.bind(null,i,a,t),[t]),i.flags|=2048,Es(9,Ig.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Gr(),e=Nt.identifierPrefix;if(ot){var r=si,i=ai;r=(i&~(1<<32-zr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=Ms++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=h_++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v_={readContext:Tr,useCallback:jg,useContext:Tr,useEffect:mh,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Hg,useMemo:Wg,useReducer:gc,useRef:zg,useState:function(){return gc(ws)},useDebugValue:gh,useDeferredValue:function(t){var e=Ar();return Xg(e,wt.memoizedState,t)},useTransition:function(){var t=gc(ws)[0],e=Ar().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:qg,unstable_isNewReconciler:!1},x_={readContext:Tr,useCallback:jg,useContext:Tr,useEffect:mh,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Hg,useMemo:Wg,useReducer:vc,useRef:zg,useState:function(){return vc(ws)},useDebugValue:gh,useDeferredValue:function(t){var e=Ar();return wt===null?e.memoizedState=t:Xg(e,wt.memoizedState,t)},useTransition:function(){var t=vc(ws)[0],e=Ar().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:qg,unstable_isNewReconciler:!1};function Dr(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Pu(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:dt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Rn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Gt(),n=zi(t),a=ci(i,n);a.payload=e,r!=null&&(a.callback=r),e=Oi(t,a,n),e!==null&&(Br(e,t,n,i),Io(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Gt(),n=zi(t),a=ci(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Oi(t,a,n),e!==null&&(Br(e,t,n,i),Io(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Gt(),i=zi(t),n=ci(r,i);n.tag=2,e!=null&&(n.callback=e),e=Oi(t,n,i),e!==null&&(Br(e,t,i,r),Io(e,t,i))}};function Gf(t,e,r,i,n,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!vs(r,i)||!vs(n,a):!0}function Zg(t,e,r){var i=!1,n=Wi,a=e.contextType;return typeof a=="object"&&a!==null?a=Tr(a):(n=er(e)?yn:zt.current,i=e.contextTypes,a=(i=i!=null)?ga(t,n):Wi),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function jf(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function Lu(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},lh(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=Tr(a):(a=er(e)?yn:zt.current,n.context=ga(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Pu(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Ul.enqueueReplaceState(n,n.state,null),ul(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e){try{var r="",i=e;do r+=X0(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function xc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var __=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,r){r=ci(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){ml||(ml=!0,Vu=i),Du(t,e)},r}function Jg(t,e,r){r=ci(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){Du(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Du(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Wf(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new __;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=D_.bind(null,t,e,r),e.then(t,t))}function Xf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qf(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ci(-1,1),e.tag=2,Oi(r,e,1))),r.lanes|=1),t)}var y_=gi.ReactCurrentOwner,Qt=!1;function Vt(t,e,r,i){e.child=t===null?Rg(e,null,r,i):xa(e,t.child,r,i)}function Yf(t,e,r,i,n){r=r.render;var a=e.ref;return ua(e,n),i=fh(t,e,r,i,a,n),r=ph(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(ot&&r&&th(e),e.flags|=1,Vt(t,e,i,n),e.child)}function Kf(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!wh(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,ev(t,e,a,i,n)):(t=Ho(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:vs,r(s,i)&&t.ref===e.ref)return fi(t,e,n)}return e.flags|=1,t=Bi(a,i),t.ref=e.ref,t.return=e,e.child=t}function ev(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(vs(a,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,fi(t,e,n)}return Uu(t,e,r,i,n)}function tv(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ia,ur),ur|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ia,ur),ur|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,tt(ia,ur),ur|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,tt(ia,ur),ur|=i;return Vt(t,e,n,r),e.child}function rv(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,r,i,n){var a=er(r)?yn:zt.current;return a=ga(e,a),ua(e,n),r=fh(t,e,r,i,a,n),i=ph(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(ot&&i&&th(e),e.flags|=1,Vt(t,e,r,n),e.child)}function $f(t,e,r,i,n){if(er(r)){var a=!0;al(e)}else a=!1;if(ua(e,n),e.stateNode===null)Fo(t,e),Zg(e,r,i),Lu(e,r,i,n),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=Tr(c):(c=er(r)?yn:zt.current,c=ga(e,c));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&jf(e,s,i,c),Ai=!1;var d=e.memoizedState;s.state=d,ul(e,i,s,n),l=e.memoizedState,o!==i||d!==l||Jt.current||Ai?(typeof h=="function"&&(Pu(e,r,h,i),l=e.memoizedState),(o=Ai||Gf(e,r,o,i,d,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Ng(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Dr(e.type,o),s.props=c,f=e.pendingProps,d=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Tr(l):(l=er(r)?yn:zt.current,l=ga(e,l));var p=r.getDerivedStateFromProps;(h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||d!==l)&&jf(e,s,i,l),Ai=!1,d=e.memoizedState,s.state=d,ul(e,i,s,n);var x=e.memoizedState;o!==f||d!==x||Jt.current||Ai?(typeof p=="function"&&(Pu(e,r,p,i),x=e.memoizedState),(c=Ai||Gf(e,r,c,i,d,x,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,r,i,a,n)}function Iu(t,e,r,i,n,a){rv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return n&&If(e,r,!1),fi(t,e,a);i=e.stateNode,y_.current=e;var o=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=xa(e,t.child,null,a),e.child=xa(e,null,o,a)):Vt(t,e,o,a),e.memoizedState=i.state,n&&If(e,r,!0),e.child}function iv(t){var e=t.stateNode;e.pendingContext?Uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uf(t,e.context,!1),ch(t,e.containerInfo)}function Zf(t,e,r,i,n){return va(),ih(n),e.flags|=256,Vt(t,e,r,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function nv(t,e,r){var i=e.pendingProps,n=ct.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(n&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),tt(ct,n&1),t===null)return Cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ol(s,i,0,null),t=_n(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Ou(r),e.memoizedState=ku,t):vh(e,s));if(n=t.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return b_(t,e,s,i,o,n,r);if(a){a=i.fallback,s=e.mode,n=t.child,o=n.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(n,l),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=Bi(o,a):(a=_n(a,s,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?Ou(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~r,e.memoizedState=ku,i}return a=t.child,t=a.sibling,i=Bi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function vh(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eo(t,e,r,i){return i!==null&&ih(i),xa(e,t.child,null,r),t=vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b_(t,e,r,i,n,a,s){if(r)return e.flags&256?(e.flags&=-257,i=xc(Error(te(422))),eo(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Ol({mode:"visible",children:i.children},n,0,null),a=_n(a,n,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&xa(e,t.child,null,s),e.child.memoizedState=Ou(s),e.memoizedState=ku,a);if(!(e.mode&1))return eo(t,e,s,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(te(419)),i=xc(a,i,void 0),eo(t,e,s,i)}if(o=(s&t.childLanes)!==0,Qt||o){if(i=Nt,i!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|s)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,hi(t,n),Br(i,t,n,-1))}return Mh(),i=xc(Error(te(421))),eo(t,e,s,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=U_.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,dr=ki(n.nextSibling),hr=e,ot=!0,Ir=null,t!==null&&(xr[_r++]=ai,xr[_r++]=si,xr[_r++]=bn,ai=t.id,si=t.overflow,bn=e),e=vh(e,i.children),e.flags|=4096,e)}function Qf(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,r)}function _c(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function av(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Vt(t,e,i.children,r),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,r,e);else if(t.tag===19)Qf(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&dl(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),_c(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&dl(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}_c(e,!0,r,null,a);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,r=Bi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Bi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function S_(t,e,r){switch(e.tag){case 3:iv(e),va();break;case 5:Pg(e);break;case 1:er(e.type)&&al(e);break;case 4:ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;tt(ll,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ct,ct.current&1),e.flags|=128,null):r&e.child.childLanes?nv(t,e,r):(tt(ct,ct.current&1),t=fi(t,e,r),t!==null?t.sibling:null);tt(ct,ct.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return av(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,tv(t,e,r)}return fi(t,e,r)}var sv,Fu,ov,lv;sv=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Fu=function(){};ov=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,mn(Kr.current);var a=null;switch(r){case"input":n=su(t,n),i=su(t,i),a=[];break;case"select":n=dt({},n,{value:void 0}),i=dt({},i,{value:void 0}),a=[];break;case"textarea":n=cu(t,n),i=cu(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=il)}du(r,i);var s;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var o=n[c];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(us.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=n!=null?n[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(us.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};lv=function(t,e,r,i){r!==i&&(e.flags|=4)};function Ba(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function M_(t,e,r){var i=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return er(e.type)&&nl(),It(e),null;case 3:return i=e.stateNode,_a(),at(Jt),at(zt),dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ir!==null&&(Wu(Ir),Ir=null))),Fu(t,e),It(e),null;case 5:uh(e);var n=mn(Ss.current);if(r=e.type,t!==null&&e.stateNode!=null)ov(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(t=mn(Kr.current),Qs(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Xr]=e,i[ys]=a,t=(e.mode&1)!==0,r){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(n=0;n<Qa.length;n++)it(Qa[n],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":of(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":cf(i,a),it("invalid",i)}du(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&Zs(i.textContent,o,t),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Zs(i.textContent,o,t),n=["children",""+o]):us.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&it("scroll",i)}switch(r){case"input":Gs(i),lf(i,a,!0);break;case"textarea":Gs(i),uf(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=il)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=km(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(r,{is:i.is}):(t=s.createElement(r),r==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,r),t[Xr]=e,t[ys]=i,sv(t,e,!1,!1),e.stateNode=t;e:{switch(s=hu(r,i),r){case"dialog":it("cancel",t),it("close",t),n=i;break;case"iframe":case"object":case"embed":it("load",t),n=i;break;case"video":case"audio":for(n=0;n<Qa.length;n++)it(Qa[n],t);n=i;break;case"source":it("error",t),n=i;break;case"img":case"image":case"link":it("error",t),it("load",t),n=i;break;case"details":it("toggle",t),n=i;break;case"input":of(t,i),n=su(t,i),it("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=dt({},i,{value:void 0}),it("invalid",t);break;case"textarea":cf(t,i),n=cu(t,i),it("invalid",t);break;default:n=i}du(r,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?zm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Om(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ds(t,l):typeof l=="number"&&ds(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(us.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&Hd(t,a,l,s))}switch(r){case"input":Gs(t),lf(t,i,!1);break;case"textarea":Gs(t),uf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?sa(t,!!i.multiple,a,!1):i.defaultValue!=null&&sa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=il)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(r=mn(Ss.current),mn(Kr.current),Qs(e)){if(i=e.stateNode,r=e.memoizedProps,i[Xr]=e,(a=i.nodeValue!==r)&&(t=hr,t!==null))switch(t.tag){case 3:Zs(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zs(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Xr]=e,e.stateNode=i}return It(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&dr!==null&&e.mode&1&&!(e.flags&128))Tg(),va(),e.flags|=98560,a=!1;else if(a=Qs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[Xr]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),a=!1}else Ir!==null&&(Wu(Ir),Ir=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Et===0&&(Et=3):Mh())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return _a(),Fu(t,e),t===null&&xs(e.stateNode.containerInfo),It(e),null;case 10:return sh(e.type._context),It(e),null;case 17:return er(e.type)&&nl(),It(e),null;case 19:if(at(ct),a=e.memoizedState,a===null)return It(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Ba(a,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=dl(t),s!==null){for(e.flags|=128,Ba(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return tt(ct,ct.current&1|2),e.child}t=t.sibling}a.tail!==null&&vt()>ba&&(e.flags|=128,i=!0,Ba(a,!1),e.lanes=4194304)}else{if(!i)if(t=dl(s),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ba(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ot)return It(e),null}else 2*vt()-a.renderingStartTime>ba&&r!==1073741824&&(e.flags|=128,i=!0,Ba(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(r=a.last,r!==null?r.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=vt(),e.sibling=null,r=ct.current,tt(ct,i?r&1|2:r&1),e):(It(e),null);case 22:case 23:return Sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ur&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function w_(t,e){switch(rh(e),e.tag){case 1:return er(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _a(),at(Jt),at(zt),dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uh(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return _a(),null;case 10:return sh(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var to=!1,Ft=!1,E_=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ra(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ht(t,e,i)}else r.current=null}function cv(t,e,r){try{r()}catch(i){ht(t,e,i)}}var Jf=!1;function T_(t,e){if(Su=el,t=fg(),eh(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==r||n!==0&&f.nodeType!==3||(o=s+n),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===r&&++c===n&&(o=s),d===a&&++h===i&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Mu={focusedElem:t,selectionRange:r},el=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,m=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?b:Dr(e.type,b),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return x=Jf,Jf=!1,x}function ss(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&cv(e,r,a)}n=n.next}while(n!==i)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function zu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xr],delete e[ys],delete e[Tu],delete e[l_],delete e[c_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,r),t=t.sibling;t!==null;)Bu(t,e,r),t=t.sibling}function Hu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,r),t=t.sibling;t!==null;)Hu(t,e,r),t=t.sibling}var Pt=null,Ur=!1;function xi(t,e,r){for(r=r.child;r!==null;)hv(t,e,r),r=r.sibling}function hv(t,e,r){if(Yr&&typeof Yr.onCommitFiberUnmount=="function")try{Yr.onCommitFiberUnmount(Al,r)}catch{}switch(r.tag){case 5:Ft||ra(r,e);case 6:var i=Pt,n=Ur;Pt=null,xi(t,e,r),Pt=i,Ur=n,Pt!==null&&(Ur?(t=Pt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Pt.removeChild(r.stateNode));break;case 18:Pt!==null&&(Ur?(t=Pt,r=r.stateNode,t.nodeType===8?hc(t.parentNode,r):t.nodeType===1&&hc(t,r),ms(t)):hc(Pt,r.stateNode));break;case 4:i=Pt,n=Ur,Pt=r.stateNode.containerInfo,Ur=!0,xi(t,e,r),Pt=i,Ur=n;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&cv(r,e,s),n=n.next}while(n!==i)}xi(t,e,r);break;case 1:if(!Ft&&(ra(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(o){ht(r,e,o)}xi(t,e,r);break;case 21:xi(t,e,r);break;case 22:r.mode&1?(Ft=(i=Ft)||r.memoizedState!==null,xi(t,e,r),Ft=i):xi(t,e,r);break;default:xi(t,e,r)}}function tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new E_),e.forEach(function(i){var n=I_.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Cr(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Ur=!1;break e;case 3:Pt=o.stateNode.containerInfo,Ur=!0;break e;case 4:Pt=o.stateNode.containerInfo,Ur=!0;break e}o=o.return}if(Pt===null)throw Error(te(160));hv(a,s,n),Pt=null,Ur=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){ht(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cr(e,t),Vr(t),i&4){try{ss(3,t,t.return),Il(3,t)}catch(b){ht(t,t.return,b)}try{ss(5,t,t.return)}catch(b){ht(t,t.return,b)}}break;case 1:Cr(e,t),Vr(t),i&512&&r!==null&&ra(r,r.return);break;case 5:if(Cr(e,t),Vr(t),i&512&&r!==null&&ra(r,r.return),t.flags&32){var n=t.stateNode;try{ds(n,"")}catch(b){ht(t,t.return,b)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,s=r!==null?r.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Um(n,a),hu(o,s);var c=hu(o,a);for(s=0;s<l.length;s+=2){var h=l[s],f=l[s+1];h==="style"?zm(n,f):h==="dangerouslySetInnerHTML"?Om(n,f):h==="children"?ds(n,f):Hd(n,h,f,c)}switch(o){case"input":ou(n,a);break;case"textarea":Im(n,a);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?sa(n,!!a.multiple,p,!1):d!==!!a.multiple&&(a.defaultValue!=null?sa(n,!!a.multiple,a.defaultValue,!0):sa(n,!!a.multiple,a.multiple?[]:"",!1))}n[ys]=a}catch(b){ht(t,t.return,b)}}break;case 6:if(Cr(e,t),Vr(t),i&4){if(t.stateNode===null)throw Error(te(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(b){ht(t,t.return,b)}}break;case 3:if(Cr(e,t),Vr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ms(e.containerInfo)}catch(b){ht(t,t.return,b)}break;case 4:Cr(e,t),Vr(t);break;case 13:Cr(e,t),Vr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(yh=vt())),i&4&&tp(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||h,Cr(e,t),Ft=c):Cr(e,t),Vr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(fe=t,h=t.child;h!==null;){for(f=fe=h;fe!==null;){switch(d=fe,p=d.child,d.tag){case 0:case 11:case 14:case 15:ss(4,d,d.return);break;case 1:ra(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,r=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(b){ht(i,r,b)}}break;case 5:ra(d,d.return);break;case 22:if(d.memoizedState!==null){ip(f);continue}}p!==null?(p.return=d,fe=p):ip(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{n=f.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Fm("display",s))}catch(b){ht(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){ht(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cr(e,t),Vr(t),i&4&&tp(t);break;case 21:break;default:Cr(e,t),Vr(t)}}function Vr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(dv(r)){var i=r;break e}r=r.return}throw Error(te(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(ds(n,""),i.flags&=-33);var a=ep(t);Hu(t,a,n);break;case 3:case 4:var s=i.stateNode.containerInfo,o=ep(t);Bu(t,o,s);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A_(t,e,r){fe=t,pv(t)}function pv(t,e,r){for(var i=(t.mode&1)!==0;fe!==null;){var n=fe,a=n.child;if(n.tag===22&&i){var s=n.memoizedState!==null||to;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||Ft;o=to;var c=Ft;if(to=s,(Ft=l)&&!c)for(fe=n;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?np(n):l!==null?(l.return=s,fe=l):np(n);for(;a!==null;)fe=a,pv(a),a=a.sibling;fe=n,to=o,Ft=c}rp(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,fe=a):rp(t)}}function rp(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||Il(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Dr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Bf(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Bf(e,s,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ft||e.flags&512&&zu(e)}catch(d){ht(e,e.return,d)}}if(e===t){fe=null;break}if(r=e.sibling,r!==null){r.return=e.return,fe=r;break}fe=e.return}}function ip(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var r=e.sibling;if(r!==null){r.return=e.return,fe=r;break}fe=e.return}}function np(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Il(4,e)}catch(l){ht(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){ht(e,n,l)}}var a=e.return;try{zu(e)}catch(l){ht(e,a,l)}break;case 5:var s=e.return;try{zu(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){fe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,fe=o;break}fe=e.return}}var R_=Math.ceil,pl=gi.ReactCurrentDispatcher,xh=gi.ReactCurrentOwner,wr=gi.ReactCurrentBatchConfig,je=0,Nt=null,bt=null,Lt=0,ur=0,ia=Ki(0),Et=0,Ts=null,Mn=0,kl=0,_h=0,os=null,$t=null,yh=0,ba=1/0,ii=null,ml=!1,Vu=null,Fi=null,ro=!1,Li=null,gl=0,ls=0,Gu=null,zo=-1,Bo=0;function Gt(){return je&6?vt():zo!==-1?zo:zo=vt()}function zi(t){return t.mode&1?je&2&&Lt!==0?Lt&-Lt:d_.transition!==null?(Bo===0&&(Bo=Zm()),Bo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function Br(t,e,r,i){if(50<ls)throw ls=0,Gu=null,Error(te(185));Cs(t,r,i),(!(je&2)||t!==Nt)&&(t===Nt&&(!(je&2)&&(kl|=r),Et===4&&Ci(t,Lt)),tr(t,i),r===1&&je===0&&!(e.mode&1)&&(ba=vt()+500,Ll&&$i()))}function tr(t,e){var r=t.callbackNode;dx(t,e);var i=Jo(t,t===Nt?Lt:0);if(i===0)r!==null&&ff(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&ff(r),e===1)t.tag===0?u_(ap.bind(null,t)):Mg(ap.bind(null,t)),s_(function(){!(je&6)&&$i()}),r=null;else{switch(Qm(i)){case 1:r=Xd;break;case 4:r=Km;break;case 16:r=Qo;break;case 536870912:r=$m;break;default:r=Qo}r=Sv(r,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function mv(t,e){if(zo=-1,Bo=0,je&6)throw Error(te(327));var r=t.callbackNode;if(da()&&t.callbackNode!==r)return null;var i=Jo(t,t===Nt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vl(t,i);else{e=i;var n=je;je|=2;var a=vv();(Nt!==t||Lt!==e)&&(ii=null,ba=vt()+500,xn(t,e));do try{P_();break}catch(o){gv(t,o)}while(!0);ah(),pl.current=a,je=n,bt!==null?e=0:(Nt=null,Lt=0,e=Et)}if(e!==0){if(e===2&&(n=vu(t),n!==0&&(i=n,e=ju(t,n))),e===1)throw r=Ts,xn(t,0),Ci(t,i),tr(t,vt()),r;if(e===6)Ci(t,i);else{if(n=t.current.alternate,!(i&30)&&!C_(n)&&(e=vl(t,i),e===2&&(a=vu(t),a!==0&&(i=a,e=ju(t,a))),e===1))throw r=Ts,xn(t,0),Ci(t,i),tr(t,vt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ln(t,$t,ii);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=yh+500-vt(),10<e)){if(Jo(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=Eu(ln.bind(null,t,$t,ii),e);break}ln(t,$t,ii);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var s=31-zr(i);a=1<<s,s=e[s],s>n&&(n=s),i&=~a}if(i=n,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*R_(i/1960))-i,10<i){t.timeoutHandle=Eu(ln.bind(null,t,$t,ii),i);break}ln(t,$t,ii);break;case 5:ln(t,$t,ii);break;default:throw Error(te(329))}}}return tr(t,vt()),t.callbackNode===r?mv.bind(null,t):null}function ju(t,e){var r=os;return t.current.memoizedState.isDehydrated&&(xn(t,e).flags|=256),t=vl(t,e),t!==2&&(e=$t,$t=r,e!==null&&Wu(e)),t}function Wu(t){$t===null?$t=t:$t.push.apply($t,t)}function C_(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!Hr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~_h,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-zr(e),i=1<<r;t[r]=-1,e&=~i}}function ap(t){if(je&6)throw Error(te(327));da();var e=Jo(t,0);if(!(e&1))return tr(t,vt()),null;var r=vl(t,e);if(t.tag!==0&&r===2){var i=vu(t);i!==0&&(e=i,r=ju(t,i))}if(r===1)throw r=Ts,xn(t,0),Ci(t,e),tr(t,vt()),r;if(r===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ln(t,$t,ii),tr(t,vt()),null}function bh(t,e){var r=je;je|=1;try{return t(e)}finally{je=r,je===0&&(ba=vt()+500,Ll&&$i())}}function wn(t){Li!==null&&Li.tag===0&&!(je&6)&&da();var e=je;je|=1;var r=wr.transition,i=Ke;try{if(wr.transition=null,Ke=1,t)return t()}finally{Ke=i,wr.transition=r,je=e,!(je&6)&&$i()}}function Sh(){ur=ia.current,at(ia)}function xn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,a_(r)),bt!==null)for(r=bt.return;r!==null;){var i=r;switch(rh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nl();break;case 3:_a(),at(Jt),at(zt),dh();break;case 5:uh(i);break;case 4:_a();break;case 13:at(ct);break;case 19:at(ct);break;case 10:sh(i.type._context);break;case 22:case 23:Sh()}r=r.return}if(Nt=t,bt=t=Bi(t.current,null),Lt=ur=e,Et=0,Ts=null,_h=kl=Mn=0,$t=os=null,pn!==null){for(e=0;e<pn.length;e++)if(r=pn[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,i.next=s}r.pending=i}pn=null}return t}function gv(t,e){do{var r=bt;try{if(ah(),ko.current=fl,hl){for(var i=ut.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}hl=!1}if(Sn=0,Ct=wt=ut=null,as=!1,Ms=0,xh.current=null,r===null||r.return===null){Et=1,Ts=e,bt=null;break}e:{var a=t,s=r.return,o=r,l=e;if(e=Lt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Xf(s);if(p!==null){p.flags&=-257,qf(p,s,o,a,e),p.mode&1&&Wf(a,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var b=new Set;b.add(l),e.updateQueue=b}else x.add(l);break e}else{if(!(e&1)){Wf(a,c,e),Mh();break e}l=Error(te(426))}}else if(ot&&o.mode&1){var m=Xf(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qf(m,s,o,a,e),ih(ya(l,o));break e}}a=l=ya(l,o),Et!==4&&(Et=2),os===null?os=[a]:os.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=Qg(a,l,e);zf(a,u);break e;case 1:o=l;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=Jg(a,o,e);zf(a,S);break e}}a=a.return}while(a!==null)}_v(r)}catch(C){e=C,bt===r&&r!==null&&(bt=r=r.return);continue}break}while(!0)}function vv(){var t=pl.current;return pl.current=fl,t===null?fl:t}function Mh(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||!(Mn&268435455)&&!(kl&268435455)||Ci(Nt,Lt)}function vl(t,e){var r=je;je|=2;var i=vv();(Nt!==t||Lt!==e)&&(ii=null,xn(t,e));do try{N_();break}catch(n){gv(t,n)}while(!0);if(ah(),je=r,pl.current=i,bt!==null)throw Error(te(261));return Nt=null,Lt=0,Et}function N_(){for(;bt!==null;)xv(bt)}function P_(){for(;bt!==null&&!rx();)xv(bt)}function xv(t){var e=bv(t.alternate,t,ur);t.memoizedProps=t.pendingProps,e===null?_v(t):bt=e,xh.current=null}function _v(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=w_(r,e),r!==null){r.flags&=32767,bt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,bt=null;return}}else if(r=M_(r,e,ur),r!==null){bt=r;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Et===0&&(Et=5)}function ln(t,e,r){var i=Ke,n=wr.transition;try{wr.transition=null,Ke=1,L_(t,e,r,i)}finally{wr.transition=n,Ke=i}return null}function L_(t,e,r,i){do da();while(Li!==null);if(je&6)throw Error(te(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(hx(t,a),t===Nt&&(bt=Nt=null,Lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ro||(ro=!0,Sv(Qo,function(){return da(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=wr.transition,wr.transition=null;var s=Ke;Ke=1;var o=je;je|=4,xh.current=null,T_(t,r),fv(r,t),Qx(Mu),el=!!Su,Mu=Su=null,t.current=r,A_(r),ix(),je=o,Ke=s,wr.transition=a}else t.current=r;if(ro&&(ro=!1,Li=t,gl=n),a=t.pendingLanes,a===0&&(Fi=null),sx(r.stateNode),tr(t,vt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(ml)throw ml=!1,t=Vu,Vu=null,t;return gl&1&&t.tag!==0&&da(),a=t.pendingLanes,a&1?t===Gu?ls++:(ls=0,Gu=t):ls=0,$i(),null}function da(){if(Li!==null){var t=Qm(gl),e=wr.transition,r=Ke;try{if(wr.transition=null,Ke=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,gl=0,je&6)throw Error(te(331));var n=je;for(je|=4,fe=t.current;fe!==null;){var a=fe,s=a.child;if(fe.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(fe=c;fe!==null;){var h=fe;switch(h.tag){case 0:case 11:case 15:ss(8,h,a)}var f=h.child;if(f!==null)f.return=h,fe=f;else for(;fe!==null;){h=fe;var d=h.sibling,p=h.return;if(uv(h),h===c){fe=null;break}if(d!==null){d.return=p,fe=d;break}fe=p}}}var x=a.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var m=b.sibling;b.sibling=null,b=m}while(b!==null)}}fe=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,fe=s;else e:for(;fe!==null;){if(a=fe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ss(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,fe=u;break e}fe=a.return}}var g=t.current;for(fe=g;fe!==null;){s=fe;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,fe=v;else e:for(s=g;fe!==null;){if(o=fe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Il(9,o)}}catch(C){ht(o,o.return,C)}if(o===s){fe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,fe=S;break e}fe=o.return}}if(je=n,$i(),Yr&&typeof Yr.onPostCommitFiberRoot=="function")try{Yr.onPostCommitFiberRoot(Al,t)}catch{}i=!0}return i}finally{Ke=r,wr.transition=e}}return!1}function sp(t,e,r){e=ya(r,e),e=Qg(t,e,1),t=Oi(t,e,1),e=Gt(),t!==null&&(Cs(t,1,e),tr(t,e))}function ht(t,e,r){if(t.tag===3)sp(t,t,r);else for(;e!==null;){if(e.tag===3){sp(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=ya(r,t),t=Jg(e,t,1),e=Oi(e,t,1),t=Gt(),e!==null&&(Cs(e,1,t),tr(e,t));break}}e=e.return}}function D_(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&r,Nt===t&&(Lt&r)===r&&(Et===4||Et===3&&(Lt&130023424)===Lt&&500>vt()-yh?xn(t,0):_h|=r),tr(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):e=1);var r=Gt();t=hi(t,e),t!==null&&(Cs(t,e,r),tr(t,r))}function U_(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),yv(t,r)}function I_(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),yv(t,r)}var bv;bv=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Qt=!1,S_(t,e,r);Qt=!!(t.flags&131072)}else Qt=!1,ot&&e.flags&1048576&&wg(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fo(t,e),t=e.pendingProps;var n=ga(e,zt.current);ua(e,r),n=fh(null,e,i,t,n,r);var a=ph();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,er(i)?(a=!0,al(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,lh(e),n.updater=Ul,e.stateNode=n,n._reactInternals=e,Lu(e,i,t,r),e=Iu(null,e,i,!0,a,r)):(e.tag=0,ot&&a&&th(e),Vt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=O_(i),t=Dr(i,t),n){case 0:e=Uu(null,e,i,t,r);break e;case 1:e=$f(null,e,i,t,r);break e;case 11:e=Yf(null,e,i,t,r);break e;case 14:e=Kf(null,e,i,Dr(i.type,t),r);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),Uu(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),$f(t,e,i,n,r);case 3:e:{if(iv(e),t===null)throw Error(te(387));i=e.pendingProps,a=e.memoizedState,n=a.element,Ng(t,e),ul(e,i,null,r);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=ya(Error(te(423)),e),e=Zf(t,e,i,r,n);break e}else if(i!==n){n=ya(Error(te(424)),e),e=Zf(t,e,i,r,n);break e}else for(dr=ki(e.stateNode.containerInfo.firstChild),hr=e,ot=!0,Ir=null,r=Rg(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(va(),i===n){e=fi(t,e,r);break e}Vt(t,e,i,r)}e=e.child}return e;case 5:return Pg(e),t===null&&Cu(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,s=n.children,wu(i,n)?s=null:a!==null&&wu(i,a)&&(e.flags|=32),rv(t,e),Vt(t,e,s,r),e.child;case 6:return t===null&&Cu(e),null;case 13:return nv(t,e,r);case 4:return ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xa(e,null,i,r):Vt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),Yf(t,e,i,n,r);case 7:return Vt(t,e,e.pendingProps,r),e.child;case 8:return Vt(t,e,e.pendingProps.children,r),e.child;case 12:return Vt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,s=n.value,tt(ll,i._currentValue),i._currentValue=s,a!==null)if(Hr(a.value,s)){if(a.children===n.children&&!Jt.current){e=fi(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ci(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Nu(a.return,r,e),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(te(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Nu(s,r,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Vt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,ua(e,r),n=Tr(n),i=i(n),e.flags|=1,Vt(t,e,i,r),e.child;case 14:return i=e.type,n=Dr(i,e.pendingProps),n=Dr(i.type,n),Kf(t,e,i,n,r);case 15:return ev(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),Fo(t,e),e.tag=1,er(i)?(t=!0,al(e)):t=!1,ua(e,r),Zg(e,i,n),Lu(e,i,n,r),Iu(null,e,i,!0,t,r);case 19:return av(t,e,r);case 22:return tv(t,e,r)}throw Error(te(156,e.tag))};function Sv(t,e){return Ym(t,e)}function k_(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,e,r,i){return new k_(t,e,r,i)}function wh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O_(t){if(typeof t=="function")return wh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===jd)return 14}return 2}function Bi(t,e){var r=t.alternate;return r===null?(r=br(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ho(t,e,r,i,n,a){var s=2;if(i=t,typeof t=="function")wh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case qn:return _n(r.children,n,a,e);case Vd:s=8,n|=8;break;case ru:return t=br(12,r,e,n|2),t.elementType=ru,t.lanes=a,t;case iu:return t=br(13,r,e,n),t.elementType=iu,t.lanes=a,t;case nu:return t=br(19,r,e,n),t.elementType=nu,t.lanes=a,t;case Pm:return Ol(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cm:s=10;break e;case Nm:s=9;break e;case Gd:s=11;break e;case jd:s=14;break e;case Ti:s=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=br(s,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function _n(t,e,r,i){return t=br(7,t,i,e),t.lanes=r,t}function Ol(t,e,r,i){return t=br(22,t,i,e),t.elementType=Pm,t.lanes=r,t.stateNode={isHidden:!1},t}function yc(t,e,r){return t=br(6,t,null,e),t.lanes=r,t}function bc(t,e,r){return e=br(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F_(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Eh(t,e,r,i,n,a,s,o,l){return t=new F_(t,e,r,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=br(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(a),t}function z_(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Mv(t){if(!t)return Wi;t=t._reactInternals;e:{if(Rn(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(er(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var r=t.type;if(er(r))return Sg(t,r,e)}return e}function wv(t,e,r,i,n,a,s,o,l){return t=Eh(r,i,!0,t,n,a,s,o,l),t.context=Mv(null),r=t.current,i=Gt(),n=zi(r),a=ci(i,n),a.callback=e??null,Oi(r,a,n),t.current.lanes=n,Cs(t,n,i),tr(t,i),t}function Fl(t,e,r,i){var n=e.current,a=Gt(),s=zi(n);return r=Mv(r),e.context===null?e.context=r:e.pendingContext=r,e=ci(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(n,e,s),t!==null&&(Br(t,n,s,a),Io(t,n,s)),s}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Th(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function B_(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ah(t){this._internalRoot=t}zl.prototype.render=Ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Fl(t,e,null,null)};zl.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wn(function(){Fl(null,t,null,null)}),e[di]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=tg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Ri.length&&e!==0&&e<Ri[r].priority;r++);Ri.splice(r,0,t),r===0&&ig(t)}};function Rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lp(){}function H_(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=xl(s);a.call(c)}}var s=wv(e,i,t,0,null,!1,!1,"",lp);return t._reactRootContainer=s,t[di]=s.current,xs(t.nodeType===8?t.parentNode:t),wn(),s}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var o=i;i=function(){var c=xl(l);o.call(c)}}var l=Eh(t,0,!1,null,null,!1,!1,"",lp);return t._reactRootContainer=l,t[di]=l.current,xs(t.nodeType===8?t.parentNode:t),wn(function(){Fl(e,l,r,i)}),l}function Hl(t,e,r,i,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=xl(s);o.call(l)}}Fl(e,s,t,n)}else s=H_(r,e,t,n,i);return xl(s)}Jm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Za(e.pendingLanes);r!==0&&(qd(e,r|1),tr(e,vt()),!(je&6)&&(ba=vt()+500,$i()))}break;case 13:wn(function(){var i=hi(t,1);if(i!==null){var n=Gt();Br(i,t,1,n)}}),Th(t,1)}};Yd=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var r=Gt();Br(e,t,134217728,r)}Th(t,134217728)}};eg=function(t){if(t.tag===13){var e=zi(t),r=hi(t,e);if(r!==null){var i=Gt();Br(r,t,e,i)}Th(t,e)}};tg=function(){return Ke};rg=function(t,e){var r=Ke;try{return Ke=t,e()}finally{Ke=r}};pu=function(t,e,r){switch(e){case"input":if(ou(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=Pl(i);if(!n)throw Error(te(90));Dm(i),ou(i,n)}}}break;case"textarea":Im(t,r);break;case"select":e=r.value,e!=null&&sa(t,!!r.multiple,e,!1)}};Vm=bh;Gm=wn;var V_={usingClientEntryPoint:!1,Events:[Ps,Zn,Pl,Bm,Hm,bh]},Ha={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||B_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Al=io.inject(G_),Yr=io}catch{}}pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_;pr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rh(e))throw Error(te(200));return z_(t,e,null,r)};pr.createRoot=function(t,e){if(!Rh(t))throw Error(te(299));var r=!1,i="",n=Ev;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Eh(t,1,!1,null,null,r,!1,i,n),t[di]=e.current,xs(t.nodeType===8?t.parentNode:t),new Ah(e)};pr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Xm(e),t=t===null?null:t.stateNode,t};pr.flushSync=function(t){return wn(t)};pr.hydrate=function(t,e,r){if(!Bl(e))throw Error(te(200));return Hl(null,t,e,!0,r)};pr.hydrateRoot=function(t,e,r){if(!Rh(t))throw Error(te(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",s=Ev;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=wv(e,null,t,1,r??null,n,!1,a,s),t[di]=e.current,xs(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new zl(e)};pr.render=function(t,e,r){if(!Bl(e))throw Error(te(200));return Hl(null,t,e,!1,r)};pr.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(te(40));return t._reactRootContainer?(wn(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};pr.unstable_batchedUpdates=bh;pr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Bl(r))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Hl(t,e,r,!1,i)};pr.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(t){console.error(t)}}Tv(),Em.exports=pr;var j_=Em.exports,cp=j_;eu.createRoot=cp.createRoot,eu.hydrateRoot=cp.hydrateRoot;var up="1.3.27";function Av(t,e,r){return Math.max(t,Math.min(e,r))}function W_(t,e,r){return(1-r)*t+r*e}function X_(t,e,r,i){return W_(t,e,1-Math.exp(-r*i))}function q_(t,e){return(t%e+e)%e}var Y_=class{constructor(){_e(this,"isRunning",!1),_e(this,"value",0),_e(this,"from",0),_e(this,"to",0),_e(this,"currentTime",0),_e(this,"lerp"),_e(this,"duration"),_e(this,"easing"),_e(this,"onUpdate")}advance(t){var e;if(!this.isRunning)return;let r=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=Av(0,this.currentTime/this.duration,1);r=i>=1;const n=r?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=X_(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,r=!0)):(this.value=this.to,r=!0);r&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,r)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:r,duration:i,easing:n,onStart:a,onUpdate:s}){this.from=this.value=t,this.to=e,this.lerp=r,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=s}};function K_(t,e){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,t.apply(this,i)},e)}}var $_=class{constructor(t,e,{autoResize:r=!0,debounce:i=250}={}){_e(this,"width",0),_e(this,"height",0),_e(this,"scrollHeight",0),_e(this,"scrollWidth",0),_e(this,"debouncedResize"),_e(this,"wrapperResizeObserver"),_e(this,"contentResizeObserver"),_e(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()}),_e(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)}),_e(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)}),this.wrapper=t,this.content=e,r&&(this.debouncedResize=K_(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Rv=class{constructor(){_e(this,"events",{})}emit(t,...e){var r;const i=this.events[t]||[];for(let n=0,a=i.length;n<a;n++)(r=i[n])==null||r.call(i,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(i=>e!==i)}}off(t,e){var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(i=>e!==i)}destroy(){this.events={}}};const Z_=100/6,_i={passive:!1};function dp(t,e){return t===1?Z_:t===2?e:1}var Q_=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){_e(this,"touchStart",{x:0,y:0}),_e(this,"lastDelta",{x:0,y:0}),_e(this,"window",{width:0,height:0}),_e(this,"emitter",new Rv),_e(this,"onTouchStart",r=>{const{clientX:i,clientY:n}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=i,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})}),_e(this,"onTouchMove",r=>{const{clientX:i,clientY:n}=r.targetTouches?r.targetTouches[0]:r,a=-(i-this.touchStart.x)*this.options.touchMultiplier,s=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=n,this.lastDelta={x:a,y:s},this.emitter.emit("scroll",{deltaX:a,deltaY:s,event:r})}),_e(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})}),_e(this,"onWheel",r=>{let{deltaX:i,deltaY:n,deltaMode:a}=r;const s=dp(a,this.window.width),o=dp(a,this.window.height);i*=s,n*=o,i*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})}),_e(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}}),this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}};const hp=t=>Math.min(1,1.001-2**(-10*t));var J_=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:r=t,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:a=.075,touchInertiaExponent:s=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:x=1,autoResize:b=!0,prevent:m,virtualScroll:u,overscroll:g=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:C=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:N=T,stopInertiaOnNavigate:W=!1,respectReducedMotion:_=!0}={}){_e(this,"_isScrolling",!1),_e(this,"_isStopped",!1),_e(this,"_isLocked",!1),_e(this,"_preventNextNativeScrollEvent",!1),_e(this,"_resetVelocityTimeout",null),_e(this,"_rafId",null),_e(this,"_isDraggingSelection",!1),_e(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)")),_e(this,"isTouching"),_e(this,"isIos"),_e(this,"time",0),_e(this,"userData",{}),_e(this,"lastVelocity",0),_e(this,"velocity",0),_e(this,"direction",0),_e(this,"options"),_e(this,"targetScroll"),_e(this,"animatedScroll"),_e(this,"animate",new Y_),_e(this,"emitter",new Rv),_e(this,"dimensions"),_e(this,"virtualScroll"),_e(this,"onScrollEnd",M=>{M instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&M.stopPropagation()}),_e(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))}),_e(this,"onTransitionEnd",M=>{var k;(k=M.propertyName)!=null&&k.includes("overflow")&&M.target===this.rootElement&&this.checkOverflow()}),_e(this,"onClick",M=>{const k=M.composedPath().filter(O=>O instanceof HTMLAnchorElement&&O.href).map(O=>new URL(O.href)),B=new URL(window.location.href);if(this.options.anchors){const O=k.find(K=>B.host===K.host&&B.pathname===K.pathname&&K.hash);if(O){const K=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,G=decodeURIComponent(O.hash);this.scrollTo(G,K);return}}if(this.options.stopInertiaOnNavigate&&k.some(O=>B.host===O.host&&B.pathname!==O.pathname)){this.reset();return}}),_e(this,"onPointerDown",M=>{M.button===1&&this.reset()}),_e(this,"onVirtualScroll",M=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(M)===!1)return;const{deltaX:k,deltaY:B,event:O}=M;if(this.emitter.emit("virtual-scroll",{deltaX:k,deltaY:B,event:O}),O.ctrlKey||O.lenisStopPropagation)return;const K=O.type.includes("touch"),G=O.type.includes("wheel");if(K&&this.isIos&&(O.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(O)),this._isDraggingSelection)){O.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=O.type==="touchstart"||O.type==="touchmove";const ee=k===0&&B===0;if(this.options.syncTouch&&K&&O.type==="touchstart"&&ee&&!this.isStopped&&!this.isLocked){this.reset();return}const L=this.options.gestureOrientation==="vertical"&&B===0||this.options.gestureOrientation==="horizontal"&&k===0;if(ee||L)return;let q=O.composedPath();q=q.slice(0,q.indexOf(this.rootElement));const Q=this.options.prevent,oe=Math.abs(k)>=Math.abs(B)?"horizontal":"vertical";if(q.find(Z=>{var ue,le,Re,we,Fe;return Z instanceof HTMLElement&&(typeof Q=="function"&&(Q==null?void 0:Q(Z))||((ue=Z.hasAttribute)==null?void 0:ue.call(Z,"data-lenis-prevent"))||oe==="vertical"&&((le=Z.hasAttribute)==null?void 0:le.call(Z,"data-lenis-prevent-vertical"))||oe==="horizontal"&&((Re=Z.hasAttribute)==null?void 0:Re.call(Z,"data-lenis-prevent-horizontal"))||K&&((we=Z.hasAttribute)==null?void 0:we.call(Z,"data-lenis-prevent-touch"))||G&&((Fe=Z.hasAttribute)==null?void 0:Fe.call(Z,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(Z,{deltaX:k,deltaY:B}))}))return;if(this.isStopped||this.isLocked){O.cancelable&&O.preventDefault();return}if(!(this.options.syncTouch&&K||this.options.smoothWheel&&G)){this.isScrolling="native",this.animate.stop(),O.lenisStopPropagation=!0;return}let be=B;this.options.gestureOrientation==="both"?be=Math.abs(B)>Math.abs(k)?B:k:this.options.gestureOrientation==="horizontal"&&(be=k),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&B>0||this.animatedScroll===this.limit&&B<0))&&(O.lenisStopPropagation=!0),O.cancelable&&O.preventDefault();const Oe=K&&this.options.syncTouch,X=K&&O.type==="touchend";X&&(be=Math.sign(be)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+be,{programmatic:!1,...Oe?{lerp:X?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})}),_e(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const M=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-M,this.direction=Math.sign(this.animatedScroll-M),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}}),_e(this,"raf",M=>{const k=M-(this.time||M);this.time=M,this.animate.advance(k*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}),window.lenisVersion=up,window.lenis||(window.lenis={}),window.lenis.version=up,f==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=hp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:r,smoothWheel:i,syncTouch:n,syncTouchLerp:a,touchInertiaExponent:s,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:x,autoResize:b,prevent:m,virtualScroll:u,overscroll:g,autoRaf:v,anchors:S,autoToggle:C,allowNestedScroll:A,naiveDimensions:N,stopInertiaOnNavigate:W,respectReducedMotion:_},this.dimensions=new $_(t,e,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Q_(r,{touchMultiplier:p,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const r=t.targetTouches[0]??t.changedTouches[0];if(!r)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const n=i[0],a=i[i.length-1],s=40,o=Math.hypot(r.clientX-n.left,r.clientY-n.top)<=s,l=Math.hypot(r.clientX-a.right,r.clientY-a.bottom)<=s;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:r=!1,lock:i=!1,programmatic:n=!0,lerp:a=n?this.options.lerp:void 0,duration:s=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(n?r=!0:(a=1,s=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=t,p=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let x=null;if(typeof d=="string"?(x=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),x||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(x=d),x){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const b=x.getBoundingClientRect(),m=getComputedStyle(x),u=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),g=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(g.scrollPaddingLeft):Number.parseFloat(g.scrollPaddingTop);d=(this.isHorizontal?b.left:b.top)+this.animatedScroll-(Number.isNaN(u)?0:u)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=p,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const x=d-this.animatedScroll;x>this.limit/2?d-=this.limit:x<-this.limit/2&&(d+=this.limit)}}else d=Av(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},r){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=d),typeof s=="number"&&typeof o!="function"?o=hp:typeof o=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,d,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(x,b)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),n&&(this.targetScroll=x),b||this.emit(),b&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:r}){const i=Date.now();t._lenis||(t._lenis={});const n=t._lenis;let a,s,o,l,c,h,f,d,p,x;if(i-(n.time??0)>2e3){n.time=Date.now();const A=window.getComputedStyle(t);if(n.computedStyle=A,a=["auto","overlay","scroll"].includes(A.overflowX),s=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),n.hasOverflowX=a,n.hasOverflowY=s,!(a||s))return!1;f=t.scrollWidth,d=t.scrollHeight,p=t.clientWidth,x=t.clientHeight,o=f>p,l=d>x,n.isScrollableX=o,n.isScrollableY=l,n.scrollWidth=f,n.scrollHeight=d,n.clientWidth=p,n.clientHeight=x,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else o=n.isScrollableX,l=n.isScrollableY,a=n.hasOverflowX,s=n.hasOverflowY,f=n.scrollWidth,d=n.scrollHeight,p=n.clientWidth,x=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(a&&o||s&&l))return!1;const b=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";let m,u,g,v,S,C;if(b==="horizontal")m=Math.round(t.scrollLeft),u=f-p,g=e,v=a,S=o,C=c;else if(b==="vertical")m=Math.round(t.scrollTop),u=d-x,g=r,v=s,S=l,C=h;else return!1;return!C&&(m>=u||m<=0)?!0:(g>0?m<u:m>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?q_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ey=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cv=(...t)=>t.filter((e,r,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===r).join(" ").trim();/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var ty={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ry=ft.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:n="",children:a,iconNode:s,...o},l)=>ft.createElement("svg",{ref:l,...ty,width:e,height:e,stroke:t,strokeWidth:i?Number(r)*24/Number(e):r,className:Cv("lucide",n),...o},[...s.map(([c,h])=>ft.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $e=(t,e)=>{const r=ft.forwardRef(({className:i,...n},a)=>ft.createElement(ry,{ref:a,iconNode:e,className:Cv(`lucide-${ey(t)}`,i),...n}));return r.displayName=`${t}`,r};/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iy=$e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ch=$e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hi=$e("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ny=$e("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ay=$e("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sy=$e("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oy=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ly=$e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cy=$e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nv=$e("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uy=$e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dy=$e("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nh=$e("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hy=$e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fy=$e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const py=$e("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const my=$e("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gy=$e("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vy=$e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xy=$e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pv=$e("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _y=$e("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yy=$e("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const by=$e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sy=$e("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const My=$e("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wy=$e("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ey=$e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.454.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ty=$e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Ay(){const[t,e]=ft.useState(!1),r=[{label:"Hall of Fame",href:"#hall-of-fame",icon:dy},{label:"Monetization",href:"#steps",icon:Nh},{label:"Stories",href:"#stories",icon:py},{label:"FAQ",href:"#faq",icon:Nv},{label:"Careers",href:"https://joinautopilot.com/careers",icon:ay,external:!0},{label:"Contact",href:"mailto:support@joinautopilot.com",icon:hy}];return y.jsxs(y.Fragment,{children:[y.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4",children:[y.jsxs("a",{href:"/",className:"group flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-border bg-black/40 hover:bg-black/60 transition-all duration-300","aria-label":"Autopilot Home",children:[y.jsx("div",{className:"w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-black text-xs tracking-tighter",children:"▲"}),y.jsx("span",{className:"font-semibold text-sm tracking-tight text-white pr-1",children:"Autopilot"}),y.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-white/10 text-white/70",children:"Pilot"})]}),y.jsxs("nav",{className:"hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-border bg-black/40 text-xs font-medium text-white/80",children:[y.jsx("a",{href:"#steps",className:"px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all",children:"How it works"}),y.jsx("a",{href:"#proof",className:"px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all",children:"Track Record"}),y.jsx("a",{href:"#stories",className:"px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all",children:"Pilot Stories"}),y.jsx("a",{href:"#hall-of-fame",className:"px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all",children:"Hall of Fame"}),y.jsx("a",{href:"#faq",className:"px-3 py-1 rounded-full hover:text-white hover:bg-white/10 transition-all",children:"FAQ"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("button",{onClick:()=>e(!t),className:"flex items-center gap-2 px-3 py-2 rounded-full glass-border bg-black/40 hover:bg-white/10 transition-colors text-xs font-medium text-white/80","aria-label":"Toggle Navigation Drawer",children:[t?y.jsx(Ey,{size:16}):y.jsx(fy,{size:16}),y.jsx("span",{className:"hidden sm:inline",children:t?"Close":"Menu"})]}),y.jsxs("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-black bg-[#f1f2f3] hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] transform hover:-translate-y-0.5",children:[y.jsx("span",{children:"Launch a Fund"}),y.jsx(Hi,{size:14,className:"opacity-80"})]})]})]}),t&&y.jsxs("div",{className:"fixed inset-0 z-40 bg-black/85 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-14 animate-in fade-in duration-300",children:[y.jsxs("div",{className:"pt-16 max-w-xl mx-auto w-full",children:[y.jsx("p",{className:"text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold",children:"Explore Autopilot"}),y.jsx("div",{className:"space-y-4",children:r.map(i=>{const n=i.icon;return y.jsxs("a",{href:i.href,onClick:()=>e(!1),target:i.external?"_blank":void 0,rel:i.external?"noopener noreferrer":void 0,className:"flex items-center justify-between py-3 border-b border-white/10 group hover:border-white/30 transition-all",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-colors",children:y.jsx(n,{size:16})}),y.jsx("span",{className:"text-xl sm:text-2xl font-medium text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all",children:i.label})]}),y.jsx(Hi,{size:18,className:"text-white/40 group-hover:text-white transition-colors"})]},i.label)})})]}),y.jsxs("div",{className:"max-w-xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 border-t border-white/10",children:[y.jsx("span",{children:"© 2026 Autopilot Holdings Corporation"}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("a",{href:"https://twitter.com/joinautopilot",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"X / Twitter"}),y.jsx("a",{href:"https://joinautopilot.com/legal",className:"hover:text-white transition-colors",children:"Legal"}),y.jsx("a",{href:"mailto:support@joinautopilot.com",className:"hover:text-white transition-colors",children:"Support"})]})]})]})]})}/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ph="169",Ry=0,fp=1,Cy=2,Lv=1,Ny=2,ri=3,Xi=0,rr=1,qr=2,Vi=0,ha=1,Xu=2,pp=3,mp=4,Py=5,dn=100,Ly=101,Dy=102,Uy=103,Iy=104,ky=200,Oy=201,Fy=202,zy=203,qu=204,Yu=205,By=206,Hy=207,Vy=208,Gy=209,jy=210,Wy=211,Xy=212,qy=213,Yy=214,Ku=0,$u=1,Zu=2,Sa=3,Qu=4,Ju=5,ed=6,td=7,Dv=0,Ky=1,$y=2,Gi=0,Zy=1,Qy=2,Jy=3,eb=4,tb=5,rb=6,ib=7,Uv=300,Ma=301,wa=302,rd=303,id=304,Vl=306,nd=1e3,gn=1001,ad=1002,Sr=1003,nb=1004,no=1005,kr=1006,Sc=1007,vn=1008,pi=1009,Iv=1010,kv=1011,As=1012,Lh=1013,En=1014,oi=1015,Ds=1016,Dh=1017,Uh=1018,Ea=1020,Ov=35902,Fv=1021,zv=1022,Fr=1023,Bv=1024,Hv=1025,fa=1026,Ta=1027,Vv=1028,Ih=1029,Gv=1030,kh=1031,Oh=1033,Vo=33776,Go=33777,jo=33778,Wo=33779,sd=35840,od=35841,ld=35842,cd=35843,ud=36196,dd=37492,hd=37496,fd=37808,pd=37809,md=37810,gd=37811,vd=37812,xd=37813,_d=37814,yd=37815,bd=37816,Sd=37817,Md=37818,wd=37819,Ed=37820,Td=37821,Xo=36492,Ad=36494,Rd=36495,jv=36283,Cd=36284,Nd=36285,Pd=36286,ab=3200,sb=3201,ob=0,lb=1,Ni="",jr="srgb",Zi="srgb-linear",Fh="display-p3",Gl="display-p3-linear",_l="linear",nt="srgb",yl="rec709",bl="p3",Pn=7680,gp=519,cb=512,ub=513,db=514,Wv=515,hb=516,fb=517,pb=518,mb=519,vp=35044,xp="300 es",li=2e3,Sl=2001;class Pa{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Ld=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[r&63|128]+kt[r>>8&255]+"-"+kt[r>>16&255]+kt[r>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Zt(t,e,r){return Math.max(e,Math.min(r,t))}function gb(t,e){return(t%e+e)%e}function wc(t,e,r){return(1-r)*t+r*e}function Va(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,r=0){qe.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,r,i,n,a,s,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,c)}set(e,r,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=r,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],x=i[8],b=n[0],m=n[3],u=n[6],g=n[1],v=n[4],S=n[7],C=n[2],A=n[5],T=n[8];return a[0]=s*b+o*g+l*C,a[3]=s*m+o*v+l*A,a[6]=s*u+o*S+l*T,a[1]=c*b+h*g+f*C,a[4]=c*m+h*v+f*A,a[7]=c*u+h*S+f*T,a[2]=d*b+p*g+x*C,a[5]=d*m+p*v+x*A,a[8]=d*u+p*S+x*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return r*s*h-r*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*s-o*c,d=o*l-h*a,p=c*a-s*l,x=r*f+i*d+n*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=f*b,e[1]=(n*c-h*i)*b,e[2]=(o*i-n*s)*b,e[3]=d*b,e[4]=(h*r-n*l)*b,e[5]=(n*a-o*r)*b,e[6]=p*b,e[7]=(i*l-c*r)*b,e[8]=(s*r-i*a)*b,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+r,0,0,1),this}scale(e,r){return this.premultiply(Ec.makeScale(e,r)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,r){return this.premultiply(Ec.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new Ie;function Xv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vb(){const t=Ml("canvas");return t.style.display="block",t}const _p={};function qo(t){t in _p||(_p[t]=!0,console.warn(t))}function xb(t,e,r){return new Promise(function(i,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function _b(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yp=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[Zi]:{transfer:_l,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jr]:{transfer:nt,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gl]:{transfer:_l,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(bp),fromReference:t=>t.applyMatrix3(yp)},[Fh]:{transfer:nt,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(bp),fromReference:t=>t.applyMatrix3(yp).convertLinearToSRGB()}},bb=new Set([Zi,Gl]),Ye={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=Ga[e].toReference,n=Ga[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===Ni?_l:Ga[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ga[e].luminanceCoefficients)}};function pa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ln;class Sb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ln===void 0&&(Ln=Ml("canvas")),Ln.width=e.width,Ln.height=e.height;const i=Ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Ln}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Ml("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=pa(a[s]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(pa(r[i]/255)*255):r[i]=pa(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mb=0;class qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Ac(n[s].image)):a.push(Ac(n[s]))}else a=Ac(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function Ac(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wb=0;class ir extends Pa{constructor(e=ir.DEFAULT_IMAGE,r=ir.DEFAULT_MAPPING,i=gn,n=gn,a=kr,s=vn,o=Fr,l=pi,c=ir.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Us(),this.name="",this.source=new qv(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ir.DEFAULT_IMAGE=null;ir.DEFAULT_MAPPING=Uv;ir.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,r=0,i=0,n=1){xt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*r+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*r+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*r+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*r+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],f=s[5],d=s[9],p=s[2],x=s[6],b=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+x)<.1&&Math.abs(o+f+b-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const u=(o+1)/2,g=(f+1)/2,v=(b+1)/2,S=(l+h)/4,C=(c+p)/4,A=(d+x)/4;return u>g&&u>v?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=S/i,a=C/i):g>v?g<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(g),i=S/n,a=A/n):v<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(v),i=C/a,n=A/a),this.set(i,n,a,r),this}let m=Math.sqrt((x-d)*(x-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(x-d)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+f+b-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eb extends Pa{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new xt(0,0,e,r),this.scissorTest=!1,this.viewport=new xt(0,0,e,r);const n={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ir(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new qv(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Eb{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Yv extends ir{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Sr,this.minFilter=Sr,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tb extends ir{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Sr,this.minFilter=Sr,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3];const d=a[s+0],p=a[s+1],x=a[s+2],b=a[s+3];if(o===0){e[r+0]=l,e[r+1]=c,e[r+2]=h,e[r+3]=f;return}if(o===1){e[r+0]=d,e[r+1]=p,e[r+2]=x,e[r+3]=b;return}if(f!==b||l!==d||c!==p||h!==x){let m=1-o;const u=l*d+c*p+h*x+f*b,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,u*g);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const S=o*g;if(l=l*m+d*S,c=c*m+p*S,h=h*m+x*S,f=f*m+b*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[r]=l,e[r+1]=c,e[r+2]=h,e[r+3]=f}static multiplyQuaternionsFlat(e,r,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=a[s],d=a[s+1],p=a[s+2],x=a[s+3];return e[r]=o*x+h*f+l*p-c*d,e[r+1]=l*x+h*d+c*f-o*p,e[r+2]=c*x+h*p+o*d-l*f,e[r+3]=h*x-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),f=o(a/2),d=l(i/2),p=l(n/2),x=l(a/2);switch(s){case"XYZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"YZX":this._x=d*h*f+c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f-d*p*x;break;case"XZY":this._x=d*h*f-c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],s=r[1],o=r[5],l=r[9],c=r[2],h=r[6],f=r[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,s=e._w,o=r._x,l=r._y,c=r._z,h=r._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-r;return this._w=p*s+r*this._w,this._x=p*i+r*this._x,this._y=p*n+r*this._y,this._z=p*a+r*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-r)*h)/c,d=Math.sin(r*h)/c;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=n*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,r=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Sp.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*r-a*n),f=2*(a*i-s*r);return this.x=r+l*c+s*f-o*h,this.y=i+l*h+o*c-a*f,this.z=n+l*f+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,s=r.x,o=r.y,l=r.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new F,Sp=new Is;class ks{constructor(e=new F(1/0,1/0,1/0),r=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Nr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Nr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Nr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Nr):Nr.fromBufferAttribute(a,s),Nr.applyMatrix4(e.matrixWorld),this.expandByPoint(Nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nr),Nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),so.subVectors(this.max,ja),Dn.subVectors(e.a,ja),Un.subVectors(e.b,ja),In.subVectors(e.c,ja),yi.subVectors(Un,Dn),bi.subVectors(In,Un),en.subVectors(Dn,In);let r=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-en.z,en.y,yi.z,0,-yi.x,bi.z,0,-bi.x,en.z,0,-en.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-en.y,en.x,0];return!Cc(r,Dn,Un,In,so)||(r=[1,0,0,0,1,0,0,0,1],!Cc(r,Dn,Un,In,so))?!1:(oo.crossVectors(yi,bi),r=[oo.x,oo.y,oo.z],Cc(r,Dn,Un,In,so))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zr=[new F,new F,new F,new F,new F,new F,new F,new F],Nr=new F,ao=new ks,Dn=new F,Un=new F,In=new F,yi=new F,bi=new F,en=new F,ja=new F,so=new F,oo=new F,tn=new F;function Cc(t,e,r,i,n){for(let a=0,s=t.length-3;a<=s;a+=3){tn.fromArray(t,a);const o=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),l=e.dot(tn),c=r.dot(tn),h=i.dot(tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ab=new ks,Wa=new F,Nc=new F;class Os{constructor(e=new F,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):Ab.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const r=Wa.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(Wa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Nc)),this.expandByPoint(Wa.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qr=new F,Pc=new F,lo=new F,Si=new F,Lc=new F,co=new F,Dc=new F;class zh{constructor(e=new F,r=new F(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Qr.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,r),Qr.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){Pc.copy(e).add(r).multiplyScalar(.5),lo.copy(r).sub(e).normalize(),Si.copy(this.origin).sub(Pc);const a=e.distanceTo(r)*.5,s=-this.direction.dot(lo),o=Si.dot(this.direction),l=-Si.dot(lo),c=Si.lengthSq(),h=Math.abs(1-s*s);let f,d,p,x;if(h>0)if(f=s*l-o,d=s*o-l,x=a*h,f>=0)if(d>=-x)if(d<=x){const b=1/h;f*=b,d*=b,p=f*(f+s*d+2*o)+d*(s*f+d+2*l)+c}else d=a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Pc).addScaledVector(lo,d),p}intersectSphere(e,r){Qr.subVectors(e.center,this.origin);const i=Qr.dot(this.direction),n=Qr.dot(Qr)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,r):this.at(o,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,r,i,n,a){Lc.subVectors(r,e),co.subVectors(i,e),Dc.crossVectors(Lc,co);let s=this.direction.dot(Dc),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(co.crossVectors(Si,co));if(l<0)return null;const c=o*this.direction.dot(Lc.cross(Si));if(c<0||l+c>s)return null;const h=-o*Si.dot(Dc);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,r,i,n,a,s,o,l,c,h,f,d,p,x,b,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,c,h,f,d,p,x,b,m)}set(e,r,i,n,a,s,o,l,c,h,f,d,p,x,b,m){const u=this.elements;return u[0]=e,u[4]=r,u[8]=i,u[12]=n,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=x,u[11]=b,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/kn.setFromMatrixColumn(e,0).length(),a=1/kn.setFromMatrixColumn(e,1).length(),s=1/kn.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*h,p=s*f,x=o*h,b=o*f;r[0]=l*h,r[4]=-l*f,r[8]=c,r[1]=p+x*c,r[5]=d-b*c,r[9]=-o*l,r[2]=b-d*c,r[6]=x+p*c,r[10]=s*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,x=c*h,b=c*f;r[0]=d+b*o,r[4]=x*o-p,r[8]=s*c,r[1]=s*f,r[5]=s*h,r[9]=-o,r[2]=p*o-x,r[6]=b+d*o,r[10]=s*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,x=c*h,b=c*f;r[0]=d-b*o,r[4]=-s*f,r[8]=x+p*o,r[1]=p+x*o,r[5]=s*h,r[9]=b-d*o,r[2]=-s*c,r[6]=o,r[10]=s*l}else if(e.order==="ZYX"){const d=s*h,p=s*f,x=o*h,b=o*f;r[0]=l*h,r[4]=x*c-p,r[8]=d*c+b,r[1]=l*f,r[5]=b*c+d,r[9]=p*c-x,r[2]=-c,r[6]=o*l,r[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,x=o*l,b=o*c;r[0]=l*h,r[4]=b-d*f,r[8]=x*f+p,r[1]=f,r[5]=s*h,r[9]=-o*h,r[2]=-c*h,r[6]=p*f+x,r[10]=d-b*f}else if(e.order==="XZY"){const d=s*l,p=s*c,x=o*l,b=o*c;r[0]=l*h,r[4]=-f,r[8]=c*h,r[1]=d*f+b,r[5]=s*h,r[9]=p*f-x,r[2]=x*f-p,r[6]=o*h,r[10]=b*f+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rb,e,Cb)}lookAt(e,r,i){const n=this.elements;return or.subVectors(e,r),or.lengthSq()===0&&(or.z=1),or.normalize(),Mi.crossVectors(i,or),Mi.lengthSq()===0&&(Math.abs(i.z)===1?or.x+=1e-4:or.z+=1e-4,or.normalize(),Mi.crossVectors(i,or)),Mi.normalize(),uo.crossVectors(or,Mi),n[0]=Mi.x,n[4]=uo.x,n[8]=or.x,n[1]=Mi.y,n[5]=uo.y,n[9]=or.y,n[2]=Mi.z,n[6]=uo.z,n[10]=or.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],x=i[2],b=i[6],m=i[10],u=i[14],g=i[3],v=i[7],S=i[11],C=i[15],A=n[0],T=n[4],N=n[8],W=n[12],_=n[1],M=n[5],k=n[9],B=n[13],O=n[2],K=n[6],G=n[10],ee=n[14],L=n[3],q=n[7],Q=n[11],oe=n[15];return a[0]=s*A+o*_+l*O+c*L,a[4]=s*T+o*M+l*K+c*q,a[8]=s*N+o*k+l*G+c*Q,a[12]=s*W+o*B+l*ee+c*oe,a[1]=h*A+f*_+d*O+p*L,a[5]=h*T+f*M+d*K+p*q,a[9]=h*N+f*k+d*G+p*Q,a[13]=h*W+f*B+d*ee+p*oe,a[2]=x*A+b*_+m*O+u*L,a[6]=x*T+b*M+m*K+u*q,a[10]=x*N+b*k+m*G+u*Q,a[14]=x*W+b*B+m*ee+u*oe,a[3]=g*A+v*_+S*O+C*L,a[7]=g*T+v*M+S*K+C*q,a[11]=g*N+v*k+S*G+C*Q,a[15]=g*W+v*B+S*ee+C*oe,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],b=e[7],m=e[11],u=e[15];return x*(+a*l*f-n*c*f-a*o*d+i*c*d+n*o*p-i*l*p)+b*(+r*l*p-r*c*d+a*s*d-n*s*p+n*c*h-a*l*h)+m*(+r*c*f-r*o*p-a*s*f+i*s*p+a*o*h-i*c*h)+u*(-n*o*h-r*l*f+r*o*d+n*s*f-i*s*d+i*l*h)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],b=e[13],m=e[14],u=e[15],g=f*m*c-b*d*c+b*l*p-o*m*p-f*l*u+o*d*u,v=x*d*c-h*m*c-x*l*p+s*m*p+h*l*u-s*d*u,S=h*b*c-x*f*c+x*o*p-s*b*p-h*o*u+s*f*u,C=x*f*l-h*b*l-x*o*d+s*b*d+h*o*m-s*f*m,A=r*g+i*v+n*S+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(b*d*a-f*m*a-b*n*p+i*m*p+f*n*u-i*d*u)*T,e[2]=(o*m*a-b*l*a+b*n*c-i*m*c-o*n*u+i*l*u)*T,e[3]=(f*l*a-o*d*a-f*n*c+i*d*c+o*n*p-i*l*p)*T,e[4]=v*T,e[5]=(h*m*a-x*d*a+x*n*p-r*m*p-h*n*u+r*d*u)*T,e[6]=(x*l*a-s*m*a-x*n*c+r*m*c+s*n*u-r*l*u)*T,e[7]=(s*d*a-h*l*a+h*n*c-r*d*c-s*n*p+r*l*p)*T,e[8]=S*T,e[9]=(x*f*a-h*b*a-x*i*p+r*b*p+h*i*u-r*f*u)*T,e[10]=(s*b*a-x*o*a+x*i*c-r*b*c-s*i*u+r*o*u)*T,e[11]=(h*o*a-s*f*a-h*i*c+r*f*c+s*i*p-r*o*p)*T,e[12]=C*T,e[13]=(h*b*n-x*f*n+x*i*d-r*b*d-h*i*m+r*f*m)*T,e[14]=(x*o*n-s*b*n-x*i*l+r*b*l+s*i*m-r*o*m)*T,e[15]=(s*f*n-h*o*n+h*i*l-r*f*l-s*i*d+r*o*d)*T,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,c=a+a,h=s+s,f=o+o,d=a*c,p=a*h,x=a*f,b=s*h,m=s*f,u=o*f,g=l*c,v=l*h,S=l*f,C=i.x,A=i.y,T=i.z;return n[0]=(1-(b+u))*C,n[1]=(p+S)*C,n[2]=(x-v)*C,n[3]=0,n[4]=(p-S)*A,n[5]=(1-(d+u))*A,n[6]=(m+g)*A,n[7]=0,n[8]=(x+v)*T,n[9]=(m-g)*T,n[10]=(1-(d+b))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=kn.set(n[0],n[1],n[2]).length();const s=kn.set(n[4],n[5],n[6]).length(),o=kn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Pr.copy(this);const l=1/a,c=1/s,h=1/o;return Pr.elements[0]*=l,Pr.elements[1]*=l,Pr.elements[2]*=l,Pr.elements[4]*=c,Pr.elements[5]*=c,Pr.elements[6]*=c,Pr.elements[8]*=h,Pr.elements[9]*=h,Pr.elements[10]*=h,r.setFromRotationMatrix(Pr),i.x=a,i.y=s,i.z=o,this}makePerspective(e,r,i,n,a,s,o=li){const l=this.elements,c=2*a/(r-e),h=2*a/(i-n),f=(r+e)/(r-e),d=(i+n)/(i-n);let p,x;if(o===li)p=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Sl)p=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,s,o=li){const l=this.elements,c=1/(r-e),h=1/(i-n),f=1/(s-a),d=(r+e)*c,p=(i+n)*h;let x,b;if(o===li)x=(s+a)*f,b=-2*f;else if(o===Sl)x=a*f,b=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const kn=new F,Pr=new pt,Rb=new F(0,0,0),Cb=new F(1,1,1),Mi=new F,uo=new F,or=new F,Mp=new pt,wp=new Is;class mi{constructor(e=0,r=0,i=0,n=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],p=n[10];switch(r){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nb=0;const Ep=new F,On=new Is,Jr=new pt,ho=new F,Xa=new F,Pb=new F,Lb=new Is,Tp=new F(1,0,0),Ap=new F(0,1,0),Rp=new F(0,0,1),Cp={type:"added"},Db={type:"removed"},Fn={type:"childadded",child:null},Uc={type:"childremoved",child:null};class jt extends Pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,r=new mi,i=new Is,n=new F(1,1,1);function a(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ie}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return On.setFromAxisAngle(e,r),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,r){return On.setFromAxisAngle(e,r),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,r){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jr.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?ho.copy(e):ho.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jr.lookAt(Xa,ho,this.up):Jr.lookAt(ho,Xa,this.up),this.quaternion.setFromRotationMatrix(Jr),n&&(Jr.extractRotation(n.matrixWorld),On.setFromRotationMatrix(Jr),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cp),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Db),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cp),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,Lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(r){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lr=new F,ei=new F,Ic=new F,ti=new F,zn=new F,Bn=new F,Np=new F,kc=new F,Oc=new F,Fc=new F,zc=new xt,Bc=new xt,Hc=new xt;class Or{constructor(e=new F,r=new F,i=new F){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),Lr.subVectors(e,r),n.cross(Lr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){Lr.subVectors(n,r),ei.subVectors(i,r),Ic.subVectors(e,r);const s=Lr.dot(Lr),o=Lr.dot(ei),l=Lr.dot(Ic),c=ei.dot(ei),h=ei.dot(Ic),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,x=(s*h-o*l)*d;return a.set(1-p-x,x,p)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,r,i,n,a,s,o,l){return this.getBarycoord(e,r,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,r,i,n,a,s){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(zc,a.x),s.addScaledVector(Bc,a.y),s.addScaledVector(Hc,a.z),s}static isFrontFacing(e,r,i,n){return Lr.subVectors(i,r),ei.subVectors(e,r),Lr.cross(ei).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Lr.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Or.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return Or.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let s,o;zn.subVectors(n,i),Bn.subVectors(a,i),kc.subVectors(e,i);const l=zn.dot(kc),c=Bn.dot(kc);if(l<=0&&c<=0)return r.copy(i);Oc.subVectors(e,n);const h=zn.dot(Oc),f=Bn.dot(Oc);if(h>=0&&f<=h)return r.copy(n);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),r.copy(i).addScaledVector(zn,s);Fc.subVectors(e,a);const p=zn.dot(Fc),x=Bn.dot(Fc);if(x>=0&&p<=x)return r.copy(a);const b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),r.copy(i).addScaledVector(Bn,o);const m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return Np.subVectors(a,n),o=(f-h)/(f-h+(p-x)),r.copy(n).addScaledVector(Np,o);const u=1/(m+b+d);return s=b*u,o=d*u,r.copy(i).addScaledVector(zn,s).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Vc(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ge{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=jr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=Ye.workingColorSpace){return this.r=e,this.g=r,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=Ye.workingColorSpace){if(e=gb(e,1),r=Zt(r,0,1),i=Zt(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,s=2*i-a;this.r=Vc(s,a,e+1/3),this.g=Vc(s,a,e),this.b=Vc(s,a,e-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,r=jr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(s===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=jr){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jr){return Ye.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Zt(Ot.r*255,0,255))*65536+Math.round(Zt(Ot.g*255,0,255))*256+Math.round(Zt(Ot.b*255,0,255))}getHexString(e=jr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Ot.copy(this),r);const i=Ot.r,n=Ot.g,a=Ot.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=h<=.5?f/(s+o):f/(2-s-o),s){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,r=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Ot.copy(this),r),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=jr){Ye.fromWorkingColorSpace(Ot.copy(this),e);const r=Ot.r,i=Ot.g,n=Ot.b;return e!==jr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+r,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(wi),e.getHSL(fo);const i=wc(wi.h,fo.h,r),n=wc(wi.s,fo.s,r),a=wc(wi.l,fo.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ge;Ge.NAMES=$v;let Ub=0;class La extends Pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ha,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Yu,this.blendEquation=dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pn,this.stencilZFail=Pn,this.stencilZPass=Pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Yu&&(i.blendDst=this.blendDst),this.blendEquation!==dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(r){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cs extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,po=new qe;class Er{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=vp,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)po.fromBufferAttribute(this,r),po.applyMatrix3(e),this.setXY(r,po.x,po.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyMatrix3(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyMatrix4(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyNormalMatrix(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.transformDirection(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Va(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Va(r,this.array)),r}setX(e,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Va(r,this.array)),r}setY(e,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Va(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Va(r,this.array)),r}setW(e,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Kt(r,this.array),i=Kt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=Kt(r,this.array),i=Kt(i,this.array),n=Kt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=Kt(r,this.array),i=Kt(i,this.array),n=Kt(n,this.array),a=Kt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class Zv extends Er{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class Qv extends Er{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class St extends Er{constructor(e,r,i){super(new Float32Array(e),r,i)}}let Ib=0;const vr=new pt,Gc=new jt,Hn=new F,lr=new ks,qa=new ks,Rt=new F;class nr extends Pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Qv:Zv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ie().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,r,i){return vr.makeTranslation(e,r,i),this.applyMatrix4(vr),this}scale(e,r,i){return vr.makeScale(e,r,i),this.applyMatrix4(vr),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new St(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,lr.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,lr.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(lr.min),this.boundingBox.expandByPoint(lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(lr.setFromBufferAttribute(e),r)for(let a=0,s=r.length;a<s;a++){const o=r[a];qa.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(lr.min,qa.min),lr.expandByPoint(Rt),Rt.addVectors(lr.max,qa.max),lr.expandByPoint(Rt)):(lr.expandByPoint(qa.min),lr.expandByPoint(qa.max))}lr.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Rt));if(r)for(let a=0,s=r.length;a<s;a++){const o=r[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(Hn.fromBufferAttribute(e,c),Rt.add(Hn)),n=Math.max(n,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new F,l[N]=new F;const c=new F,h=new F,f=new F,d=new qe,p=new qe,x=new qe,b=new F,m=new F;function u(N,W,_){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,W),f.fromBufferAttribute(i,_),d.fromBufferAttribute(a,N),p.fromBufferAttribute(a,W),x.fromBufferAttribute(a,_),h.sub(c),f.sub(c),p.sub(d),x.sub(d);const M=1/(p.x*x.y-x.x*p.y);isFinite(M)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(M),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(M),o[N].add(b),o[W].add(b),o[_].add(b),l[N].add(m),l[W].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,W=g.length;N<W;++N){const _=g[N],M=_.start,k=_.count;for(let B=M,O=M+k;B<O;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new F,S=new F,C=new F,A=new F;function T(N){C.fromBufferAttribute(n,N),A.copy(C);const W=o[N];v.copy(W),v.sub(C.multiplyScalar(C.dot(W))).normalize(),S.crossVectors(A,W);const _=S.dot(l[N])<0?-1:1;s.setXYZW(N,v.x,v.y,v.z,_)}for(let N=0,W=g.length;N<W;++N){const _=g[N],M=_.start,k=_.count;for(let B=M,O=M+k;B<O;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Er(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new F,a=new F,s=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(r,x),a.fromBufferAttribute(r,b),s.fromBufferAttribute(r,m),h.subVectors(s,a),f.subVectors(n,a),h.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=r.count;d<p;d+=3)n.fromBufferAttribute(r,d+0),a.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),h.subVectors(s,a),f.subVectors(n,a),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Rt.fromBufferAttribute(e,r),Rt.normalize(),e.setXYZ(r,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let u=0;u<h;u++)d[x++]=c[p++]}return new Er(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new nr,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);r.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(r))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(r));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new pt,rn=new zh,mo=new Os,Lp=new F,go=new F,vo=new F,xo=new F,jc=new F,_o=new F,Dp=new F,yo=new F;class Mr extends jt{constructor(e=new nr,r=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){_o.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&(jc.fromBufferAttribute(f,e),s?_o.addScaledVector(jc,h):_o.addScaledVector(jc.sub(r),h))}r.add(_o)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(a),rn.copy(e.ray).recast(e.near),!(mo.containsPoint(rn.origin)===!1&&(rn.intersectSphere(mo,Lp)===null||rn.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Pp.copy(a).invert(),rn.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,rn)))}_computeIntersections(e,r,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,b=d.length;x<b;x++){const m=d[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=v;S<C;S+=3){const A=o.getX(S),T=o.getX(S+1),N=o.getX(S+2);n=bo(this,u,e,i,c,h,f,A,T,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=x,u=b;m<u;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);n=bo(this,s,e,i,c,h,f,g,v,S),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,b=d.length;x<b;x++){const m=d[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=v;S<C;S+=3){const A=S,T=S+1,N=S+2;n=bo(this,u,e,i,c,h,f,A,T,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,u=b;m<u;m+=3){const g=m,v=m+1,S=m+2;n=bo(this,s,e,i,c,h,f,g,v,S),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}}}function kb(t,e,r,i,n,a,s,o){let l;if(e.side===rr?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Xi,o),l===null)return null;yo.copy(o),yo.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(yo);return c<r.near||c>r.far?null:{distance:c,point:yo.clone(),object:t}}function bo(t,e,r,i,n,a,s,o,l,c){t.getVertexPosition(o,go),t.getVertexPosition(l,vo),t.getVertexPosition(c,xo);const h=kb(t,e,r,i,go,vo,xo,Dp);if(h){const f=new F;Or.getBarycoord(Dp,go,vo,xo,f),n&&(h.uv=Or.getInterpolatedAttribute(n,o,l,c,f,new qe)),a&&(h.uv1=Or.getInterpolatedAttribute(a,o,l,c,f,new qe)),s&&(h.normal=Or.getInterpolatedAttribute(s,o,l,c,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Or.getNormal(go,vo,xo,d.normal),h.face=d,h.barycoord=f}return h}class Fs extends nr{constructor(e=1,r=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,r,e,s,a,0),x("z","y","x",1,-1,i,r,-e,s,a,1),x("x","z","y",1,1,e,i,r,n,s,2),x("x","z","y",1,-1,e,i,-r,n,s,3),x("x","y","z",1,-1,e,r,i,n,a,4),x("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function x(b,m,u,g,v,S,C,A,T,N,W){const _=S/T,M=C/N,k=S/2,B=C/2,O=A/2,K=T+1,G=N+1;let ee=0,L=0;const q=new F;for(let Q=0;Q<G;Q++){const oe=Q*M-B;for(let be=0;be<K;be++){const Oe=be*_-k;q[b]=Oe*g,q[m]=oe*v,q[u]=O,c.push(q.x,q.y,q.z),q[b]=0,q[m]=0,q[u]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(be/T),f.push(1-Q/N),ee+=1}}for(let Q=0;Q<N;Q++)for(let oe=0;oe<T;oe++){const be=d+oe+K*Q,Oe=d+oe+K*(Q+1),X=d+(oe+1)+K*(Q+1),Z=d+(oe+1)+K*Q;l.push(be,Oe,Z),l.push(Oe,X,Z),L+=6}o.addGroup(p,L,W),p+=L,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function Ht(t){const e={};for(let r=0;r<t.length;r++){const i=Aa(t[r]);for(const n in i)e[n]=i[n]}return e}function Ob(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function Jv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Fb={clone:Aa,merge:Ht};var zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=Ob(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class e0 extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=li}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new F,Up=new qe,Ip=new qe;class yr extends e0{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,r){return this.getViewBounds(e,Up,Ip),r.subVectors(Ip,Up)}setViewOffset(e,r,i,n,a,s){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Mc*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,r-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Vn=-90,Gn=1;class Hb extends jt{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new yr(Vn,Gn,e,r);n.layers=this.layers,this.add(n);const a=new yr(Vn,Gn,e,r);a.layers=this.layers,this.add(a);const s=new yr(Vn,Gn,e,r);s.layers=this.layers,this.add(s);const o=new yr(Vn,Gn,e,r);o.layers=this.layers,this.add(o);const l=new yr(Vn,Gn,e,r);l.layers=this.layers,this.add(l);const c=new yr(Vn,Gn,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,s,o,l]=r;for(const c of r)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,s),e.setRenderTarget(i,2,n),e.render(r,o),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,n),e.render(r,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class t0 extends ir{constructor(e,r,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],r=r!==void 0?r:Ma,super(e,r,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends Tn{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new t0(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:kr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fs(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rr,blending:Vi});a.uniforms.tEquirect.value=r;const s=new Mr(n,a),o=r.minFilter;return r.minFilter===vn&&(r.minFilter=kr),new Hb(1,10,this).update(e,s),r.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(r,i,n);e.setRenderTarget(a)}}const Wc=new F,Gb=new F,jb=new Ie;class cn{constructor(e=new F(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Wc.subVectors(i,r).cross(Gb.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Wc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||jb.getNormalMatrix(e),n=this.coplanarPoint(Wc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nn=new Os,So=new F;class r0{constructor(e=new cn,r=new cn,i=new cn,n=new cn,a=new cn,s=new cn){this.planes=[e,r,i,n,a,s]}set(e,r,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(r),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=li){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],f=n[6],d=n[7],p=n[8],x=n[9],b=n[10],m=n[11],u=n[12],g=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-a,d-c,m-p,S-u).normalize(),i[1].setComponents(l+a,d+c,m+p,S+u).normalize(),i[2].setComponents(l+s,d+h,m+x,S+g).normalize(),i[3].setComponents(l-s,d-h,m-x,S-g).normalize(),i[4].setComponents(l-o,d-f,m-b,S-v).normalize(),r===li)i[5].setComponents(l+o,d+f,m+b,S+v).normalize();else if(r===Sl)i[5].setComponents(o,f,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),nn.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nn)}intersectsSprite(e){return nn.center.set(0,0,0),nn.radius=.7071067811865476,nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(nn)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(So.x=n.normal.x>0?e.max.x:e.min.x,So.y=n.normal.y>0?e.max.y:e.min.y,So.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let t=null,e=!1,r=null,i=null;function n(a,s){r(a,s),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function Wb(t){const e=new WeakMap;function r(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,f[d]=b)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const b=f[p];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,r(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class jl extends nr{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,s=r/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,f=e/o,d=r/l,p=[],x=[],b=[],m=[];for(let u=0;u<h;u++){const g=u*d-s;for(let v=0;v<c;v++){const S=v*f-a;x.push(S,-g,0),b.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,S=g+c*(u+1),C=g+1+c*(u+1),A=g+1+c*u;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
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
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aS=`#ifdef USE_IRIDESCENCE
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
#endif`,sS=`#ifdef USE_BUMPMAP
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
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vS=`vec3 transformedNormal = objectNormal;
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
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SS="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
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
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
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
#endif`,FS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t1=`#if defined( USE_POINTS_UV )
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
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
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
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,N1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,Q1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J1=`#define DISTANCE
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
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#define LAMBERT
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
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,dM=`#define NORMAL
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
}`,hM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
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
}`,pM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vM=`#define TOON
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
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_M=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,MM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Xb,alphahash_pars_fragment:qb,alphamap_fragment:Yb,alphamap_pars_fragment:Kb,alphatest_fragment:$b,alphatest_pars_fragment:Zb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:rS,beginnormal_vertex:iS,bsdfs:nS,iridescence_fragment:aS,bumpmap_pars_fragment:sS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:uS,color_fragment:dS,color_pars_fragment:hS,color_pars_vertex:fS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:vS,displacementmap_pars_vertex:xS,displacementmap_vertex:_S,emissivemap_fragment:yS,emissivemap_pars_fragment:bS,colorspace_fragment:SS,colorspace_pars_fragment:MS,envmap_fragment:wS,envmap_common_pars_fragment:ES,envmap_pars_fragment:TS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:FS,envmap_vertex:RS,fog_vertex:CS,fog_pars_vertex:NS,fog_fragment:PS,fog_pars_fragment:LS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:US,lights_lambert_fragment:IS,lights_lambert_pars_fragment:kS,lights_pars_begin:OS,lights_toon_fragment:zS,lights_toon_pars_fragment:BS,lights_phong_fragment:HS,lights_phong_pars_fragment:VS,lights_physical_fragment:GS,lights_physical_pars_fragment:jS,lights_fragment_begin:WS,lights_fragment_maps:XS,lights_fragment_end:qS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:ZS,map_fragment:QS,map_pars_fragment:JS,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:i1,morphinstance_vertex:n1,morphcolor_vertex:a1,morphnormal_vertex:s1,morphtarget_pars_vertex:o1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:u1,normal_pars_fragment:d1,normal_pars_vertex:h1,normal_vertex:f1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:x1,opaque_fragment:_1,packing:y1,premultiplied_alpha_fragment:b1,project_vertex:S1,dithering_fragment:M1,dithering_pars_fragment:w1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:R1,shadowmap_vertex:C1,shadowmask_pars_fragment:N1,skinbase_vertex:P1,skinning_pars_vertex:L1,skinning_vertex:D1,skinnormal_vertex:U1,specularmap_fragment:I1,specularmap_pars_fragment:k1,tonemapping_fragment:O1,tonemapping_pars_fragment:F1,transmission_fragment:z1,transmission_pars_fragment:B1,uv_pars_fragment:H1,uv_pars_vertex:V1,uv_vertex:G1,worldpos_vertex:j1,background_vert:W1,background_frag:X1,backgroundCube_vert:q1,backgroundCube_frag:Y1,cube_vert:K1,cube_frag:$1,depth_vert:Z1,depth_frag:Q1,distanceRGBA_vert:J1,distanceRGBA_frag:eM,equirect_vert:tM,equirect_frag:rM,linedashed_vert:iM,linedashed_frag:nM,meshbasic_vert:aM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:dM,meshnormal_frag:hM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:_M,points_frag:yM,shadow_vert:bM,shadow_frag:SM,sprite_vert:MM,sprite_frag:wM},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Wr={basic:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ht([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ht([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ht([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ht([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ht([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Wr.physical={uniforms:Ht([Wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Mo={r:0,b:0,g:0},an=new mi,EM=new pt;function TM(t,e,r,i,n,a,s){const o=new Ge(0);let l=a===!0?0:1,c,h,f=null,d=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?r:e).get(v)),v}function b(g){let v=!1;const S=x(g);S===null?u(o,l):S&&S.isColor&&(u(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=x(v);S&&(S.isCubeTexture||S.mapping===Vl)?(h===void 0&&(h=new Mr(new Fs(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Aa(Wr.backgroundCube.uniforms),vertexShader:Wr.backgroundCube.vertexShader,fragmentShader:Wr.backgroundCube.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),an.copy(v.backgroundRotation),an.x*=-1,an.y*=-1,an.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(an)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,(f!==S||d!==S.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Mr(new jl(2,2),new qi({name:"BackgroundMaterial",uniforms:Aa(Wr.background.uniforms),vertexShader:Wr.background.vertexShader,fragmentShader:Wr.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Mo,Jv(t)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:b,addToRenderList:m}}function AM(t,e){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,s=!1;function o(_,M,k,B,O){let K=!1;const G=f(B,k,M);a!==G&&(a=G,c(a.object)),K=p(_,B,k,O),K&&x(_,B,k,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,S(_,M,k,B),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function h(_){return t.deleteVertexArray(_)}function f(_,M,k){const B=k.wireframe===!0;let O=i[_.id];O===void 0&&(O={},i[_.id]=O);let K=O[M.id];K===void 0&&(K={},O[M.id]=K);let G=K[B];return G===void 0&&(G=d(l()),K[B]=G),G}function d(_){const M=[],k=[],B=[];for(let O=0;O<r;O++)M[O]=0,k[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,M,k,B){const O=a.attributes,K=M.attributes;let G=0;const ee=k.getAttributes();for(const L in ee)if(ee[L].location>=0){const q=O[L];let Q=K[L];if(Q===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;G++}return a.attributesNum!==G||a.index!==B}function x(_,M,k,B){const O={},K=M.attributes;let G=0;const ee=k.getAttributes();for(const L in ee)if(ee[L].location>=0){let q=K[L];q===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(q=_.instanceColor));const Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),O[L]=Q,G++}a.attributes=O,a.attributesNum=G,a.index=B}function b(){const _=a.newAttributes;for(let M=0,k=_.length;M<k;M++)_[M]=0}function m(_){u(_,0)}function u(_,M){const k=a.newAttributes,B=a.enabledAttributes,O=a.attributeDivisors;k[_]=1,B[_]===0&&(t.enableVertexAttribArray(_),B[_]=1),O[_]!==M&&(t.vertexAttribDivisor(_,M),O[_]=M)}function g(){const _=a.newAttributes,M=a.enabledAttributes;for(let k=0,B=M.length;k<B;k++)M[k]!==_[k]&&(t.disableVertexAttribArray(k),M[k]=0)}function v(_,M,k,B,O,K,G){G===!0?t.vertexAttribIPointer(_,M,k,O,K):t.vertexAttribPointer(_,M,k,B,O,K)}function S(_,M,k,B){b();const O=B.attributes,K=k.getAttributes(),G=M.defaultAttributeValues;for(const ee in K){const L=K[ee];if(L.location>=0){let q=O[ee];if(q===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const Q=q.normalized,oe=q.itemSize,be=e.get(q);if(be===void 0)continue;const Oe=be.buffer,X=be.type,Z=be.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===Lh;if(q.isInterleavedBufferAttribute){const le=q.data,Re=le.stride,we=q.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)u(L.location+Fe,le.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)m(L.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<L.locationSize;Fe++)v(L.location+Fe,oe/L.locationSize,X,Q,Re*Z,(we+oe/L.locationSize*Fe)*Z,ue)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)u(L.location+le,q.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<L.locationSize;le++)m(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let le=0;le<L.locationSize;le++)v(L.location+le,oe/L.locationSize,X,Q,oe*Z,oe/L.locationSize*le*Z,ue)}}else if(G!==void 0){const Q=G[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}g()}function C(){N();for(const _ in i){const M=i[_];for(const k in M){const B=M[k];for(const O in B)h(B[O].object),delete B[O];delete M[k]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const M=i[_.id];for(const k in M){const B=M[k];for(const O in B)h(B[O].object),delete B[O];delete M[k]}delete i[_.id]}function T(_){for(const M in i){const k=i[M];if(k[_.id]===void 0)continue;const B=k[_.id];for(const O in B)h(B[O].object),delete B[O];delete k[_.id]}}function N(){W(),s=!0,a!==n&&(a=n,c(a.object))}function W(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function RM(t,e,r){let i;function n(c){i=c}function a(c,h){t.drawArrays(i,c,h),r.update(h,i,1)}function s(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),r.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let p=0;p<f;p++)d+=h[p];r.update(d,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let x=0;for(let b=0;b<f;b++)x+=h[b];for(let b=0;b<d.length;b++)r.update(x,i,d[b])}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CM(t,e,r,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==Fr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const N=T===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==pi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==oi&&!N)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function NM(t){const e=this;let r=null,i=0,n=!1,a=!1;const s=new cn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||n;return n=d,i=f.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){r=h(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!n||x===null||x.length===0||a&&!m)a?h(null):c();else{const g=a?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=h(x,d,v,p);for(let C=0;C!==v;++C)S[C]=r[C];u.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,x){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,x!==!0||m===null){const u=p+b*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=p;v!==b;++v,S+=4)s.copy(f[v]).applyMatrix4(g,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function PM(t){let e=new WeakMap;function r(s,o){return o===rd?s.mapping=Ma:o===id&&(s.mapping=wa),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===rd||o===id)if(e.has(s)){const l=e.get(s).texture;return r(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Vb(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",n),r(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class LM extends e0{constructor(e=-1,r=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const na=4,kp=[.125,.215,.35,.446,.526,.582],hn=20,Xc=new LM,Op=new Ge;let qc=null,Yc=0,Kc=0,$c=!1;const un=(1+Math.sqrt(5))/2,jn=1/un,Fp=[new F(-un,jn,0),new F(un,jn,0),new F(-jn,0,un),new F(jn,0,un),new F(0,un,-jn),new F(0,un,jn),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Kc),this._renderer.xr.enabled=$c,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ma||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:kr,minFilter:kr,generateMipmaps:!1,type:Ds,format:Fr,colorSpace:Zi,depthBuffer:!1},n=Bp(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(a)),this._blurMaterial=UM(a,e,r)}return n}_compileMaterial(e){const r=new Mr(this._lodPlanes[0],e);this._renderer.compile(r,Xc)}_sceneToCubeUV(e,r,i,n){const a=new yr(90,1,r,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Op),l.toneMapping=Gi,l.autoClear=!1;const f=new cs({name:"PMREM.Background",side:rr,depthWrite:!1,depthTest:!1}),d=new Mr(new Fs,f);let p=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,p=!0):(f.color.copy(Op),p=!0);for(let b=0;b<6;b++){const m=b%3;m===0?(a.up.set(0,s[b],0),a.lookAt(o[b],0,0)):m===1?(a.up.set(0,0,s[b]),a.lookAt(0,o[b],0)):(a.up.set(0,s[b],0),a.lookAt(0,0,o[b]));const u=this._cubeSize;wo(n,m*u,b>2?u:0,u,u),l.setRenderTarget(n),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=x}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===Ma||e.mapping===wa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Mr(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;wo(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(s,Xc)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Fp[(n-a-1)%Fp.length];this._blur(e,a-1,a,s,o)}r.autoClear=i}_blur(e,r,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,r,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Mr(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*hn-1),b=a/x,m=isFinite(a)?1+Math.floor(h*b):hn;m>hn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hn}`);const u=[];let g=0;for(let T=0;T<hn;++T){const N=T/b,W=Math.exp(-N*N/2);u.push(W),T===0?g+=W:T<m&&(g+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const S=this._sizeLods[n],C=3*S*(n>v-na?n-v+na:0),A=4*(this._cubeSize-S);wo(r,C,A,3*S,2*S),l.setRenderTarget(r),l.render(f,Xc)}}function DM(t){const e=[],r=[],i=[];let n=t;const a=t-na+1+kp.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);r.push(o);let l=1/o;s>t-na?l=kp[s-t+na-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,b=3,m=2,u=1,g=new Float32Array(b*x*p),v=new Float32Array(m*x*p),S=new Float32Array(u*x*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,N=A>2?0:-1,W=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];g.set(W,b*x*A),v.set(d,m*x*A);const _=[A,A,A,A,A,A];S.set(_,u*x*A)}const C=new nr;C.setAttribute("position",new Er(g,b)),C.setAttribute("uv",new Er(v,m)),C.setAttribute("faceIndex",new Er(S,u)),e.push(C),n>na&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function Bp(t,e,r){const i=new Tn(t,e,r);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function UM(t,e,r){const i=new Float32Array(hn),n=new F(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Hp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function IM(t){let e=new WeakMap,r=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===rd||l===id,h=l===Ma||l===wa;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new zp(t)),f=c?r.fromEquirectangular(o,f):r.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(r===null&&(r=new zp(t)),f=c?r.fromEquirectangular(o):r.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function kM(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const n=r(i);return n===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function OM(t,e,r,i){const n={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const b=d.morphAttributes[x];for(let m=0,u=b.length;m<u;m++)e.remove(b[m])}d.removeEventListener("dispose",s),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(f,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,r.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const b=p[x];for(let m=0,u=b.length;m<u;m++)e.update(b[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,x=f.attributes.position;let b=0;if(p!==null){const g=p.array;b=p.version;for(let v=0,S=g.length;v<S;v+=3){const C=g[v+0],A=g[v+1],T=g[v+2];d.push(C,A,A,T,T,C)}}else if(x!==void 0){const g=x.array;b=x.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;d.push(C,A,A,T,T,C)}}else return;const m=new(Xv(d)?Qv:Zv)(d,1);m.version=b;const u=a.get(f);u&&e.remove(u),a.set(f,m)}function h(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function FM(t,e,r){let i;function n(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,a,d*s),r.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,a,d*s,x),r.update(p,i,x))}function h(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,x);let b=0;for(let m=0;m<x;m++)b+=p[m];r.update(b,i,1)}function f(d,p,x,b){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/s,p[u],b[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,b,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g];for(let g=0;g<b.length;g++)r.update(u,i,b[g])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zM(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(r.calls++,s){case t.TRIANGLES:r.triangles+=o*(a/3);break;case t.LINES:r.lines+=o*(a/2);break;case t.LINE_STRIP:r.lines+=o*(a-1);break;case t.LINE_LOOP:r.lines+=o*a;break;case t.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function BM(t,e,r){const i=new WeakMap,n=new xt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let p=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let C=o.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),N=new Yv(T,C,A,f);N.type=oi,N.needsUpdate=!0;const W=S*4;for(let _=0;_<f;_++){const M=u[_],k=g[_],B=v[_],O=C*A*4*_;for(let K=0;K<M.count;K++){const G=K*W;x===!0&&(n.fromBufferAttribute(M,K),T[O+G+0]=n.x,T[O+G+1]=n.y,T[O+G+2]=n.z,T[O+G+3]=0),b===!0&&(n.fromBufferAttribute(k,K),T[O+G+4]=n.x,T[O+G+5]=n.y,T[O+G+6]=n.z,T[O+G+7]=0),m===!0&&(n.fromBufferAttribute(B,K),T[O+G+8]=n.x,T[O+G+9]=n.y,T[O+G+10]=n.z,T[O+G+11]=B.itemSize===4?n.w:1)}}d={count:f,texture:N,size:new qe(C,A)},i.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,r);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:a}}function HM(t,e,r,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:a,dispose:s}}class n0 extends ir{constructor(e,r,i,n,a,s,o,l,c,h=fa){if(h!==fa&&h!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fa&&(i=En),i===void 0&&h===Ta&&(i=Ea),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=o!==void 0?o:Sr,this.minFilter=l!==void 0?l:Sr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const a0=new ir,Gp=new n0(1,1),s0=new Yv,o0=new Tb,l0=new t0,jp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Da(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=jp[n];if(a===void 0&&(a=new Float32Array(n),jp[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=r,t[s].toArray(a,o)}return a}function Tt(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function At(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function Wl(t,e){let r=Wp[e];r===void 0&&(r=new Int32Array(e),Wp[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function VM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function GM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Tt(r,e))return;t.uniform2fv(this.addr,e),At(r,e)}}function jM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Tt(r,e))return;t.uniform3fv(this.addr,e),At(r,e)}}function WM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Tt(r,e))return;t.uniform4fv(this.addr,e),At(r,e)}}function XM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Tt(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(r,e)}else{if(Tt(r,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),At(r,i)}}function qM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Tt(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(r,e)}else{if(Tt(r,i))return;qp.set(i),t.uniformMatrix3fv(this.addr,!1,qp),At(r,i)}}function YM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Tt(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(r,e)}else{if(Tt(r,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),At(r,i)}}function KM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function $M(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Tt(r,e))return;t.uniform2iv(this.addr,e),At(r,e)}}function ZM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Tt(r,e))return;t.uniform3iv(this.addr,e),At(r,e)}}function QM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Tt(r,e))return;t.uniform4iv(this.addr,e),At(r,e)}}function JM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function ew(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Tt(r,e))return;t.uniform2uiv(this.addr,e),At(r,e)}}function tw(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Tt(r,e))return;t.uniform3uiv(this.addr,e),At(r,e)}}function rw(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Tt(r,e))return;t.uniform4uiv(this.addr,e),At(r,e)}}function iw(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(Gp.compareFunction=Wv,a=Gp):a=a0,r.setTexture2D(e||a,n)}function nw(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||o0,n)}function aw(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||l0,n)}function sw(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||s0,n)}function ow(t){switch(t){case 5126:return VM;case 35664:return GM;case 35665:return jM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return $M;case 35668:case 35672:return ZM;case 35669:case 35673:return QM;case 5125:return JM;case 36294:return ew;case 36295:return tw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return sw}}function lw(t,e){t.uniform1fv(this.addr,e)}function cw(t,e){const r=Da(e,this.size,2);t.uniform2fv(this.addr,r)}function uw(t,e){const r=Da(e,this.size,3);t.uniform3fv(this.addr,r)}function dw(t,e){const r=Da(e,this.size,4);t.uniform4fv(this.addr,r)}function hw(t,e){const r=Da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function fw(t,e){const r=Da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function pw(t,e){const r=Da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function mw(t,e){t.uniform1iv(this.addr,e)}function gw(t,e){t.uniform2iv(this.addr,e)}function vw(t,e){t.uniform3iv(this.addr,e)}function xw(t,e){t.uniform4iv(this.addr,e)}function _w(t,e){t.uniform1uiv(this.addr,e)}function yw(t,e){t.uniform2uiv(this.addr,e)}function bw(t,e){t.uniform3uiv(this.addr,e)}function Sw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);Tt(i,a)||(t.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==n;++s)r.setTexture2D(e[s]||a0,a[s])}function ww(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);Tt(i,a)||(t.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==n;++s)r.setTexture3D(e[s]||o0,a[s])}function Ew(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);Tt(i,a)||(t.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==n;++s)r.setTextureCube(e[s]||l0,a[s])}function Tw(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);Tt(i,a)||(t.uniform1iv(this.addr,a),At(i,a));for(let s=0;s!==n;++s)r.setTexture2DArray(e[s]||s0,a[s])}function Aw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return hw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return _w;case 36294:return yw;case 36295:return bw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Rw{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=ow(r.type)}}class Cw{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=Aw(r.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,r[o.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function Kp(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,r){const i=t.name,n=i.length;for(Zc.lastIndex=0;;){const a=Zc.exec(i),s=Zc.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Kp(r,c===void 0?new Rw(o,t,e):new Cw(o,t,e));break}else{let h=r.map[o];h===void 0&&(h=new Nw(o),Kp(r,h)),r=h}}}class Yo{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),s=e.getUniformLocation(r,a.name);Pw(a,s,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,s=r.length;a!==s;++a){const o=r[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in r&&i.push(s)}return i}}function $p(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const Lw=37297;let Dw=0;function Uw(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}function Iw(t){const e=Ye.getPrimaries(Ye.workingColorSpace),r=Ye.getPrimaries(t);let i;switch(e===r?i="":e===bl&&r===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&r===bl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Gl:return[i,"LinearTransferOETF"];case jr:case Fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zp(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+Uw(t.getShaderSource(e),s)}else return n}function kw(t,e){const r=Iw(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function Ow(t,e){let r;switch(e){case Zy:r="Linear";break;case Qy:r="Reinhard";break;case Jy:r="Cineon";break;case eb:r="ACESFilmic";break;case rb:r="AgX";break;case ib:r="Neutral";break;case tb:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Eo=new F;function Fw(){Ye.getLuminanceCoefficients(Eo);const t=Eo.x.toFixed(4),e=Eo.y.toFixed(4),r=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function Bw(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function Hw(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return r}function Ja(t){return t!==""}function Qp(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(t){return t.replace(Vw,jw)}const Gw=new Map;function jw(t,e){let r=Ue[e];if(r===void 0){const i=Gw.get(e);if(i!==void 0)r=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dd(r)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(t){return t.replace(Ww,Xw)}function Xw(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function tm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Yw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ma:case wa:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dv:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case $y:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function Qw(t,e,r,i){const n=t.getContext(),a=r.defines;let s=r.vertexShader,o=r.fragmentShader;const l=qw(r),c=Yw(r),h=Kw(r),f=$w(r),d=Zw(r),p=zw(r),x=Bw(a),b=n.createProgram();let m,u,g=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Ja).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Ja).join(`
`),u.length>0&&(u+=`
`)):(m=[tm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+h:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),u=[tm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+h:"",r.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Gi?"#define TONE_MAPPING":"",r.toneMapping!==Gi?Ue.tonemapping_pars_fragment:"",r.toneMapping!==Gi?Ow("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,kw("linearToOutputTexel",r.outputColorSpace),Fw(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ja).join(`
`)),s=Dd(s),s=Qp(s,r),s=Jp(s,r),o=Dd(o),o=Qp(o,r),o=Jp(o,r),s=em(s),o=em(o),r.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",r.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+s,S=g+u+o,C=$p(n,n.VERTEX_SHADER,v),A=$p(n,n.FRAGMENT_SHADER,S);n.attachShader(b,C),n.attachShader(b,A),r.index0AttributeName!==void 0?n.bindAttribLocation(b,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function T(M){if(t.debug.checkShaderErrors){const k=n.getProgramInfoLog(b).trim(),B=n.getShaderInfoLog(C).trim(),O=n.getShaderInfoLog(A).trim();let K=!0,G=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,b,C,A);else{const ee=Zp(n,C,"vertex"),L=Zp(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+ee+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||O==="")&&(G=!1);G&&(M.diagnostics={runnable:K,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:u}})}n.deleteShader(C),n.deleteShader(A),N=new Yo(n,b),W=Hw(n,b)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let _=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(b,Lw)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=A,this}let Jw=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new tE(e),r.set(e,i)),i}}class tE{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function rE(t,e,r,i,n,a,s){const o=new Kv,l=new eE,c=new Set,h=[],f=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,p=n.vertexTextures;let x=n.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,M,k,B,O){const K=B.fog,G=O.geometry,ee=_.isMeshStandardMaterial?B.environment:null,L=(_.isMeshStandardMaterial?r:e).get(_.envMap||ee),q=L&&L.mapping===Vl?L.image.height:null,Q=b[_.type];_.precision!==null&&(x=n.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=oe!==void 0?oe.length:0;let Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let X,Z,ue,le;if(Q){const Yt=Wr[Q];X=Yt.vertexShader,Z=Yt.fragmentShader}else X=_.vertexShader,Z=_.fragmentShader,l.update(_),ue=l.getVertexShaderID(_),le=l.getFragmentShaderID(_);const Re=t.getRenderTarget(),we=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,Ze=!!_.map,Ve=!!_.matcap,P=!!L,ar=!!_.aoMap,ze=!!_.lightMap,We=!!_.bumpMap,Ce=!!_.normalMap,rt=!!_.displacementMap,Le=!!_.emissiveMap,R=!!_.metalnessMap,w=!!_.roughnessMap,z=_.anisotropy>0,$=_.clearcoat>0,re=_.dispersion>0,Y=_.iridescence>0,Se=_.sheen>0,ce=_.transmission>0,ge=z&&!!_.anisotropyMap,Be=$&&!!_.clearcoatMap,ne=$&&!!_.clearcoatNormalMap,xe=$&&!!_.clearcoatRoughnessMap,Ne=Y&&!!_.iridescenceMap,Pe=Y&&!!_.iridescenceThicknessMap,me=Se&&!!_.sheenColorMap,He=Se&&!!_.sheenRoughnessMap,De=!!_.specularMap,Je=!!_.specularColorMap,D=!!_.specularIntensityMap,he=ce&&!!_.transmissionMap,j=ce&&!!_.thicknessMap,J=!!_.gradientMap,de=!!_.alphaMap,se=_.alphaTest>0,et=!!_.alphaHash,_t=!!_.extensions;let qt=Gi;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(qt=t.toneMapping);const Xe={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Z,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Zi,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:Ve,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:q,aoMap:ar,lightMap:ze,bumpMap:We,normalMap:Ce,displacementMap:p&&rt,emissiveMap:Le,normalMapObjectSpace:Ce&&_.normalMapType===lb,normalMapTangentSpace:Ce&&_.normalMapType===ob,metalnessMap:R,roughnessMap:w,anisotropy:z,anisotropyMap:ge,clearcoat:$,clearcoatMap:Be,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:re,iridescence:Y,iridescenceMap:Ne,iridescenceThicknessMap:Pe,sheen:Se,sheenColorMap:me,sheenRoughnessMap:He,specularMap:De,specularColorMap:Je,specularIntensityMap:D,transmission:ce,transmissionMap:he,thicknessMap:j,gradientMap:J,opaque:_.transparent===!1&&_.blending===ha&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:se,alphaHash:et,combine:_.combine,mapUv:Ze&&m(_.map.channel),aoMapUv:ar&&m(_.aoMap.channel),lightMapUv:ze&&m(_.lightMap.channel),bumpMapUv:We&&m(_.bumpMap.channel),normalMapUv:Ce&&m(_.normalMap.channel),displacementMapUv:rt&&m(_.displacementMap.channel),emissiveMapUv:Le&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:w&&m(_.roughnessMap.channel),anisotropyMapUv:ge&&m(_.anisotropyMap.channel),clearcoatMapUv:Be&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(_.sheenRoughnessMap.channel),specularMapUv:De&&m(_.specularMap.channel),specularColorMapUv:Je&&m(_.specularColorMap.channel),specularIntensityMapUv:D&&m(_.specularIntensityMap.channel),transmissionMapUv:he&&m(_.transmissionMap.channel),thicknessMapUv:j&&m(_.thicknessMap.channel),alphaMapUv:de&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ze||de),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:qt,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qr,flipSided:_.side===rr,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_t&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&_.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function g(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)M.push(k),M.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(M,_),S(M,_),M.push(t.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const M=b[_.type];let k;if(M){const B=Wr[M];k=Fb.clone(B.uniforms)}else k=_.uniforms;return k}function A(_,M){let k;for(let B=0,O=h.length;B<O;B++){const K=h[B];if(K.cacheKey===M){k=K,++k.usedTimes;break}}return k===void 0&&(k=new Qw(t,M,_,a),h.push(k)),k}function T(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function N(_){l.remove(_)}function W(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:h,dispose:W}}function iE(){let t=new WeakMap;function e(s){return t.has(s)}function r(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function n(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:r,remove:i,update:n,dispose:a}}function nE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function im(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function s(f,d,p,x,b,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:b,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=b,u.group=m),e++,u}function o(f,d,p,x,b,m){const u=s(f,d,p,x,b,m);p.transmission>0?i.push(u):p.transparent===!0?n.push(u):r.push(u)}function l(f,d,p,x,b,m){const u=s(f,d,p,x,b,m);p.transmission>0?i.unshift(u):p.transparent===!0?n.unshift(u):r.unshift(u)}function c(f,d){r.length>1&&r.sort(f||nE),i.length>1&&i.sort(d||rm),n.length>1&&n.sort(d||rm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function aE(){let t=new WeakMap;function e(i,n){const a=t.get(i);let s;return a===void 0?(s=new im,t.set(i,[s])):n>=a.length?(s=new im,a.push(s)):s=a[n],s}function r(){t=new WeakMap}return{get:e,dispose:r}}function sE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new F,color:new Ge};break;case"SpotLight":r={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":r={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":r={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=r,r}}}function oE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let lE=0;function cE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uE(t){const e=new sE,r=oE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const n=new F,a=new pt,s=new pt;function o(c){let h=0,f=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,x=0,b=0,m=0,u=0,g=0,v=0,S=0,C=0,A=0,T=0;c.sort(cE);for(let W=0,_=c.length;W<_;W++){const M=c[W],k=M.color,B=M.intensity,O=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*B,f+=k.g*B,d+=k.b*B;else if(M.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(M.sh.coefficients[G],B);T++}else if(M.isDirectionalLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const ee=M.shadow,L=r.get(M);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=M.shadow.matrix,g++}i.directional[p]=G,p++}else if(M.isSpotLight){const G=e.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,i.spot[b]=G;const ee=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,ee.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[b]=ee.matrix,M.castShadow){const L=r.get(M);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[b]=L,i.spotShadowMap[b]=K,S++}b++}else if(M.isRectAreaLight){const G=e.get(M);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=G,m++}else if(M.isPointLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const ee=M.shadow,L=r.get(M);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=M.shadow.matrix,v++}i.point[x]=G,x++}else if(M.isHemisphereLight){const G=e.get(M);G.skyColor.copy(M.color).multiplyScalar(B),G.groundColor.copy(M.groundColor).multiplyScalar(B),i.hemi[u]=G,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==b||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==v||N.numSpotShadows!==S||N.numSpotMaps!==C||N.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,N.directionalLength=p,N.pointLength=x,N.spotLength=b,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=v,N.numSpotShadows=S,N.numSpotMaps=C,N.numLightProbes=T,i.version=lE++)}function l(c,h){let f=0,d=0,p=0,x=0,b=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),s.identity(),a.copy(v.matrixWorld),a.premultiply(m),s.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function nm(t){const e=new uE(t),r=[],i=[];function n(h){c.camera=h,r.length=0,i.length=0}function a(h){r.push(h)}function s(h){i.push(h)}function o(){e.setup(r)}function l(h){e.setupView(r,h)}const c={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function dE(t){let e=new WeakMap;function r(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new nm(t),e.set(n,[o])):a>=s.length?(o=new nm(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:r,dispose:i}}class hE extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gE(t,e,r){let i=new r0;const n=new qe,a=new qe,s=new xt,o=new hE({depthPacking:sb}),l=new fE,c={},h=r.maxTextureSize,f={[Xi]:rr,[rr]:Xi,[qr]:qr},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new nr;x.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Mr(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lv;let u=this.type;this.render=function(A,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const W=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Vi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=u!==ri&&this.type===ri,O=u===ri&&this.type!==ri;for(let K=0,G=A.length;K<G;K++){const ee=A[K],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);const q=L.getFrameExtents();if(n.multiply(q),a.copy(L.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/q.x),n.x=a.x*q.x,L.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/q.y),n.y=a.y*q.y,L.mapSize.y=a.y)),L.map===null||B===!0||O===!0){const oe=this.type!==ri?{minFilter:Sr,magFilter:Sr}:{};L.map!==null&&L.map.dispose(),L.map=new Tn(n.x,n.y,oe),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let oe=0;oe<Q;oe++){const be=L.getViewport(oe);s.set(a.x*be.x,a.y*be.y,a.x*be.z,a.y*be.w),k.viewport(s),L.updateMatrices(ee,oe),i=L.getFrustum(),S(T,N,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===ri&&g(L,N),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(W,_,M)};function g(A,T){const N=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tn(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,N,d,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,N,p,b,null)}function v(A,T,N,W){let _=null;const M=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=_.uuid,B=T.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let K=O[B];K===void 0&&(K=_.clone(),O[B]=K,T.addEventListener("dispose",C)),_=K}if(_.visible=T.visible,_.wireframe=T.wireframe,W===ri?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=t.properties.get(_);k.light=N}return _}function S(A,T,N,W,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const k=e.update(A),B=A.material;if(Array.isArray(B)){const O=k.groups;for(let K=0,G=O.length;K<G;K++){const ee=O[K],L=B[ee.materialIndex];if(L&&L.visible){const q=v(A,L,W,_);A.onBeforeShadow(t,A,T,N,k,q,ee),t.renderBufferDirect(N,null,k,q,A,ee),A.onAfterShadow(t,A,T,N,k,q,ee)}}}else if(B.visible){const O=v(A,B,W,_);A.onBeforeShadow(t,A,T,N,k,O,null),t.renderBufferDirect(N,null,k,O,A,null),A.onAfterShadow(t,A,T,N,k,O,null)}}const M=A.children;for(let k=0,B=M.length;k<B;k++)S(M[k],T,N,W,_)}function C(A){A.target.removeEventListener("dispose",C);for(const T in c){const N=c[T],W=A.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}const vE={[Ku]:$u,[Zu]:ed,[Qu]:td,[Sa]:Ju,[$u]:Ku,[ed]:Zu,[td]:Qu,[Ju]:Sa};function xE(t){function e(){let D=!1;const he=new xt;let j=null;const J=new xt(0,0,0,0);return{setMask:function(de){j!==de&&!D&&(t.colorMask(de,de,de,de),j=de)},setLocked:function(de){D=de},setClear:function(de,se,et,_t,qt){qt===!0&&(de*=_t,se*=_t,et*=_t),he.set(de,se,et,_t),J.equals(he)===!1&&(t.clearColor(de,se,et,_t),J.copy(he))},reset:function(){D=!1,j=null,J.set(-1,0,0,0)}}}function r(){let D=!1,he=!1,j=null,J=null,de=null;return{setReversed:function(se){he=se},setTest:function(se){se?ue(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(se){j!==se&&!D&&(t.depthMask(se),j=se)},setFunc:function(se){if(he&&(se=vE[se]),J!==se){switch(se){case Ku:t.depthFunc(t.NEVER);break;case $u:t.depthFunc(t.ALWAYS);break;case Zu:t.depthFunc(t.LESS);break;case Sa:t.depthFunc(t.LEQUAL);break;case Qu:t.depthFunc(t.EQUAL);break;case Ju:t.depthFunc(t.GEQUAL);break;case ed:t.depthFunc(t.GREATER);break;case td:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=se}},setLocked:function(se){D=se},setClear:function(se){de!==se&&(t.clearDepth(se),de=se)},reset:function(){D=!1,j=null,J=null,de=null}}}function i(){let D=!1,he=null,j=null,J=null,de=null,se=null,et=null,_t=null,qt=null;return{setTest:function(Xe){D||(Xe?ue(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!D&&(t.stencilMask(Xe),he=Xe)},setFunc:function(Xe,Yt,$r){(j!==Xe||J!==Yt||de!==$r)&&(t.stencilFunc(Xe,Yt,$r),j=Xe,J=Yt,de=$r)},setOp:function(Xe,Yt,$r){(se!==Xe||et!==Yt||_t!==$r)&&(t.stencilOp(Xe,Yt,$r),se=Xe,et=Yt,_t=$r)},setLocked:function(Xe){D=Xe},setClear:function(Xe){qt!==Xe&&(t.clearStencil(Xe),qt=Xe)},reset:function(){D=!1,he=null,j=null,J=null,de=null,se=null,et=null,_t=null,qt=null}}}const n=new e,a=new r,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,x=!1,b=null,m=null,u=null,g=null,v=null,S=null,C=null,A=new Ge(0,0,0),T=0,N=!1,W=null,_=null,M=null,k=null,B=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=G>=2);let L=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),be=new xt().fromArray(Q),Oe=new xt().fromArray(oe);function X(D,he,j,J){const de=new Uint8Array(4),se=t.createTexture();t.bindTexture(D,se),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<j;et++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(he+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return se}const Z={};Z[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ue(t.DEPTH_TEST),a.setFunc(Sa),ze(!1),We(fp),ue(t.CULL_FACE),P(Vi);function ue(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function le(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Re(D,he){return h[D]!==he?(t.bindFramebuffer(D,he),h[D]=he,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function we(D,he){let j=d,J=!1;if(D){j=f.get(he),j===void 0&&(j=[],f.set(he,j));const de=D.textures;if(j.length!==de.length||j[0]!==t.COLOR_ATTACHMENT0){for(let se=0,et=de.length;se<et;se++)j[se]=t.COLOR_ATTACHMENT0+se;j.length=de.length,J=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,J=!0);J&&t.drawBuffers(j)}function Fe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Ze={[dn]:t.FUNC_ADD,[Ly]:t.FUNC_SUBTRACT,[Dy]:t.FUNC_REVERSE_SUBTRACT};Ze[Uy]=t.MIN,Ze[Iy]=t.MAX;const Ve={[ky]:t.ZERO,[Oy]:t.ONE,[Fy]:t.SRC_COLOR,[qu]:t.SRC_ALPHA,[jy]:t.SRC_ALPHA_SATURATE,[Vy]:t.DST_COLOR,[By]:t.DST_ALPHA,[zy]:t.ONE_MINUS_SRC_COLOR,[Yu]:t.ONE_MINUS_SRC_ALPHA,[Gy]:t.ONE_MINUS_DST_COLOR,[Hy]:t.ONE_MINUS_DST_ALPHA,[Wy]:t.CONSTANT_COLOR,[Xy]:t.ONE_MINUS_CONSTANT_COLOR,[qy]:t.CONSTANT_ALPHA,[Yy]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,j,J,de,se,et,_t,qt,Xe){if(D===Vi){x===!0&&(le(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),D!==Py){if(D!==b||Xe!==N){if((m!==dn||v!==dn)&&(t.blendEquation(t.FUNC_ADD),m=dn,v=dn),Xe)switch(D){case ha:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFunc(t.ONE,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ha:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,g=null,S=null,C=null,A.set(0,0,0),T=0,b=D,N=Xe}return}de=de||he,se=se||j,et=et||J,(he!==m||de!==v)&&(t.blendEquationSeparate(Ze[he],Ze[de]),m=he,v=de),(j!==u||J!==g||se!==S||et!==C)&&(t.blendFuncSeparate(Ve[j],Ve[J],Ve[se],Ve[et]),u=j,g=J,S=se,C=et),(_t.equals(A)===!1||qt!==T)&&(t.blendColor(_t.r,_t.g,_t.b,qt),A.copy(_t),T=qt),b=D,N=!1}function ar(D,he){D.side===qr?le(t.CULL_FACE):ue(t.CULL_FACE);let j=D.side===rr;he&&(j=!j),ze(j),D.blending===ha&&D.transparent===!1?P(Vi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);const J=D.stencilWrite;s.setTest(J),J&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){W!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),W=D)}function We(D){D!==Ry?(ue(t.CULL_FACE),D!==_&&(D===fp?t.cullFace(t.BACK):D===Cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),_=D}function Ce(D){D!==M&&(K&&t.lineWidth(D),M=D)}function rt(D,he,j){D?(ue(t.POLYGON_OFFSET_FILL),(k!==he||B!==j)&&(t.polygonOffset(he,j),k=he,B=j)):le(t.POLYGON_OFFSET_FILL)}function Le(D){D?ue(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+O-1),L!==D&&(t.activeTexture(D),L=D)}function w(D,he,j){j===void 0&&(L===null?j=t.TEXTURE0+O-1:j=L);let J=q[j];J===void 0&&(J={type:void 0,texture:void 0},q[j]=J),(J.type!==D||J.texture!==he)&&(L!==j&&(t.activeTexture(j),L=j),t.bindTexture(D,he||Z[D]),J.type=D,J.texture=he)}function z(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){be.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function me(D){Oe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function He(D,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let J=j.get(D);J===void 0&&(J=t.getUniformBlockIndex(he,D.name),j.set(D,J))}function De(D,he){const j=l.get(he).get(D);o.get(he)!==j&&(t.uniformBlockBinding(he,j,D.__bindingPointIndex),o.set(he,j))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,q={},h={},f=new WeakMap,d=[],p=null,x=!1,b=null,m=null,u=null,g=null,v=null,S=null,C=null,A=new Ge(0,0,0),T=0,N=!1,W=null,_=null,M=null,k=null,B=null,be.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:ue,disable:le,bindFramebuffer:Re,drawBuffers:we,useProgram:Fe,setBlending:P,setMaterial:ar,setFlipSided:ze,setCullFace:We,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Le,activeTexture:R,bindTexture:w,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:re,texImage2D:xe,texImage3D:Ne,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Be,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Pe,viewport:me,reset:Je}}function am(t,e,r,i){const n=_E(i);switch(r){case Fv:return t*e;case Bv:return t*e;case Hv:return t*e*2;case Vv:return t*e/n.components*n.byteLength;case Ih:return t*e/n.components*n.byteLength;case Gv:return t*e*2/n.components*n.byteLength;case kh:return t*e*2/n.components*n.byteLength;case zv:return t*e*3/n.components*n.byteLength;case Fr:return t*e*4/n.components*n.byteLength;case Oh:return t*e*4/n.components*n.byteLength;case Vo:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jo:case Wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case od:case cd:return Math.max(t,16)*Math.max(e,8)/4;case sd:case ld:return Math.max(t,8)*Math.max(e,8)/2;case ud:case dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xo:case Ad:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jv:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nd:case Pd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function _E(t){switch(t){case pi:case Iv:return{byteLength:1,components:1};case As:case kv:case Ds:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case En:case Lh:case oi:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function yE(t,e,r,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return p?new OffscreenCanvas(R,w):Ml("canvas")}function b(R,w,z){let $=1;const re=Le(R);if((re.width>z||re.height>z)&&($=z/Math.max(re.width,re.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor($*re.width),Se=Math.floor($*re.height);f===void 0&&(f=x(Y,Se));const ce=w?x(Y,Se):f;return ce.width=Y,ce.height=Se,ce.getContext("2d").drawImage(R,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Y+"x"+Se+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Sr&&R.minFilter!==kr}function u(R){t.generateMipmap(R)}function g(R,w,z,$,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=w;if(w===t.RED&&(z===t.FLOAT&&(Y=t.R32F),z===t.HALF_FLOAT&&(Y=t.R16F),z===t.UNSIGNED_BYTE&&(Y=t.R8)),w===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.R8UI),z===t.UNSIGNED_SHORT&&(Y=t.R16UI),z===t.UNSIGNED_INT&&(Y=t.R32UI),z===t.BYTE&&(Y=t.R8I),z===t.SHORT&&(Y=t.R16I),z===t.INT&&(Y=t.R32I)),w===t.RG&&(z===t.FLOAT&&(Y=t.RG32F),z===t.HALF_FLOAT&&(Y=t.RG16F),z===t.UNSIGNED_BYTE&&(Y=t.RG8)),w===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RG8UI),z===t.UNSIGNED_SHORT&&(Y=t.RG16UI),z===t.UNSIGNED_INT&&(Y=t.RG32UI),z===t.BYTE&&(Y=t.RG8I),z===t.SHORT&&(Y=t.RG16I),z===t.INT&&(Y=t.RG32I)),w===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),z===t.UNSIGNED_INT&&(Y=t.RGB32UI),z===t.BYTE&&(Y=t.RGB8I),z===t.SHORT&&(Y=t.RGB16I),z===t.INT&&(Y=t.RGB32I)),w===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),z===t.UNSIGNED_INT&&(Y=t.RGBA32UI),z===t.BYTE&&(Y=t.RGBA8I),z===t.SHORT&&(Y=t.RGBA16I),z===t.INT&&(Y=t.RGBA32I)),w===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),w===t.RGBA){const Se=re?_l:Ye.getTransfer($);z===t.FLOAT&&(Y=t.RGBA32F),z===t.HALF_FLOAT&&(Y=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Y=Se===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,w){let z;return R?w===null||w===En||w===Ea?z=t.DEPTH24_STENCIL8:w===oi?z=t.DEPTH32F_STENCIL8:w===As&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===En||w===Ea?z=t.DEPTH_COMPONENT24:w===oi?z=t.DEPTH_COMPONENT32F:w===As&&(z=t.DEPTH_COMPONENT16),z}function S(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sr&&R.minFilter!==kr?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&h.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),W(w)}function T(R){const w=i.get(R);if(w.__webglInit===void 0)return;const z=R.source,$=d.get(z);if($){const re=$[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(R),Object.keys($).length===0&&d.delete(z)}i.remove(R)}function N(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const z=R.source,$=d.get(z);delete $[w.__cacheKey],s.memory.textures--}function W(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let re=0;re<w.__webglFramebuffer[$].length;re++)t.deleteFramebuffer(w.__webglFramebuffer[$][re]);else t.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)t.deleteFramebuffer(w.__webglFramebuffer[$]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=R.textures;for(let $=0,re=z.length;$<re;$++){const Y=i.get(z[$]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(z[$])}i.remove(R)}let _=0;function M(){_=0}function k(){const R=_;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),_+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function O(R,w){const z=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(z,R,w);return}}r.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+w)}function K(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Oe(z,R,w);return}r.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+w)}function G(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Oe(z,R,w);return}r.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+w)}function ee(R,w){const z=i.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,w);return}r.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+w)}const L={[nd]:t.REPEAT,[gn]:t.CLAMP_TO_EDGE,[ad]:t.MIRRORED_REPEAT},q={[Sr]:t.NEAREST,[nb]:t.NEAREST_MIPMAP_NEAREST,[no]:t.NEAREST_MIPMAP_LINEAR,[kr]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[vn]:t.LINEAR_MIPMAP_LINEAR},Q={[cb]:t.NEVER,[mb]:t.ALWAYS,[ub]:t.LESS,[Wv]:t.LEQUAL,[db]:t.EQUAL,[pb]:t.GEQUAL,[hb]:t.GREATER,[fb]:t.NOTEQUAL};function oe(R,w){if(w.type===oi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kr||w.magFilter===Sc||w.magFilter===no||w.magFilter===vn||w.minFilter===kr||w.minFilter===Sc||w.minFilter===no||w.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sr||w.minFilter!==no&&w.minFilter!==vn||w.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function be(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const $=w.source;let re=d.get($);re===void 0&&(re={},d.set($,re));const Y=B(w);if(Y!==R.__cacheKey){re[Y]===void 0&&(re[Y]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),re[Y].usedTimes++;const Se=re[R.__cacheKey];Se!==void 0&&(re[R.__cacheKey].usedTimes--,Se.usedTimes===0&&N(w)),R.__cacheKey=Y,R.__webglTexture=re[Y].texture}return z}function Oe(R,w,z){let $=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=t.TEXTURE_3D);const re=be(R,w),Y=w.source;r.bindTexture($,R.__webglTexture,t.TEXTURE0+z);const Se=i.get(Y);if(Y.version!==Se.__version||re===!0){r.activeTexture(t.TEXTURE0+z);const ce=Ye.getPrimaries(Ye.workingColorSpace),ge=w.colorSpace===Ni?null:Ye.getPrimaries(w.colorSpace),Be=w.colorSpace===Ni||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ne=b(w.image,!1,n.maxTextureSize);ne=rt(w,ne);const xe=a.convert(w.format,w.colorSpace),Ne=a.convert(w.type);let Pe=g(w.internalFormat,xe,Ne,w.colorSpace,w.isVideoTexture);oe($,w);let me;const He=w.mipmaps,De=w.isVideoTexture!==!0,Je=Se.__version===void 0||re===!0,D=Y.dataReady,he=S(w,ne);if(w.isDepthTexture)Pe=v(w.format===Ta,w.type),Je&&(De?r.texStorage2D(t.TEXTURE_2D,1,Pe,ne.width,ne.height):r.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,xe,Ne,null));else if(w.isDataTexture)if(He.length>0){De&&Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)me=He[j],De?D&&r.texSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,xe,Ne,me.data):r.texImage2D(t.TEXTURE_2D,j,Pe,me.width,me.height,0,xe,Ne,me.data);w.generateMipmaps=!1}else De?(Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,ne.width,ne.height),D&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,xe,Ne,ne.data)):r.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,xe,Ne,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,He[0].width,He[0].height,ne.depth);for(let j=0,J=He.length;j<J;j++)if(me=He[j],w.format!==Fr)if(xe!==null)if(De){if(D)if(w.layerUpdates.size>0){const de=am(me.width,me.height,w.format,w.type);for(const se of w.layerUpdates){const et=me.data.subarray(se*de/me.data.BYTES_PER_ELEMENT,(se+1)*de/me.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,se,me.width,me.height,1,xe,et,0,0)}w.clearLayerUpdates()}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ne.depth,xe,me.data,0,0)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Pe,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ne.depth,xe,Ne,me.data):r.texImage3D(t.TEXTURE_2D_ARRAY,j,Pe,me.width,me.height,ne.depth,0,xe,Ne,me.data)}else{De&&Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,He[0].width,He[0].height);for(let j=0,J=He.length;j<J;j++)me=He[j],w.format!==Fr?xe!==null?De?D&&r.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,xe,me.data):r.compressedTexImage2D(t.TEXTURE_2D,j,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&r.texSubImage2D(t.TEXTURE_2D,j,0,0,me.width,me.height,xe,Ne,me.data):r.texImage2D(t.TEXTURE_2D,j,Pe,me.width,me.height,0,xe,Ne,me.data)}else if(w.isDataArrayTexture)if(De){if(Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,ne.width,ne.height,ne.depth),D)if(w.layerUpdates.size>0){const j=am(ne.width,ne.height,w.format,w.type);for(const J of w.layerUpdates){const de=ne.data.subarray(J*j/ne.data.BYTES_PER_ELEMENT,(J+1)*j/ne.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,xe,Ne,de)}w.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ne,ne.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,xe,Ne,ne.data);else if(w.isData3DTexture)De?(Je&&r.texStorage3D(t.TEXTURE_3D,he,Pe,ne.width,ne.height,ne.depth),D&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ne,ne.data)):r.texImage3D(t.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,xe,Ne,ne.data);else if(w.isFramebufferTexture){if(Je)if(De)r.texStorage2D(t.TEXTURE_2D,he,Pe,ne.width,ne.height);else{let j=ne.width,J=ne.height;for(let de=0;de<he;de++)r.texImage2D(t.TEXTURE_2D,de,Pe,j,J,0,xe,Ne,null),j>>=1,J>>=1}}else if(He.length>0){if(De&&Je){const j=Le(He[0]);r.texStorage2D(t.TEXTURE_2D,he,Pe,j.width,j.height)}for(let j=0,J=He.length;j<J;j++)me=He[j],De?D&&r.texSubImage2D(t.TEXTURE_2D,j,0,0,xe,Ne,me):r.texImage2D(t.TEXTURE_2D,j,Pe,xe,Ne,me);w.generateMipmaps=!1}else if(De){if(Je){const j=Le(ne);r.texStorage2D(t.TEXTURE_2D,he,Pe,j.width,j.height)}D&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ne,ne)}else r.texImage2D(t.TEXTURE_2D,0,Pe,xe,Ne,ne);m(w)&&u($),Se.__version=Y.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,z){if(w.image.length!==6)return;const $=be(R,w),re=w.source;r.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Y=i.get(re);if(re.version!==Y.__version||$===!0){r.activeTexture(t.TEXTURE0+z);const Se=Ye.getPrimaries(Ye.workingColorSpace),ce=w.colorSpace===Ni?null:Ye.getPrimaries(w.colorSpace),ge=w.colorSpace===Ni||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!Be&&!ne?xe[J]=b(w.image[J],!0,n.maxCubemapSize):xe[J]=ne?w.image[J].image:w.image[J],xe[J]=rt(w,xe[J]);const Ne=xe[0],Pe=a.convert(w.format,w.colorSpace),me=a.convert(w.type),He=g(w.internalFormat,Pe,me,w.colorSpace),De=w.isVideoTexture!==!0,Je=Y.__version===void 0||$===!0,D=re.dataReady;let he=S(w,Ne);oe(t.TEXTURE_CUBE_MAP,w);let j;if(Be){De&&Je&&r.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,Ne.width,Ne.height);for(let J=0;J<6;J++){j=xe[J].mipmaps;for(let de=0;de<j.length;de++){const se=j[de];w.format!==Fr?Pe!==null?De?D&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,se.width,se.height,Pe,se.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,se.width,se.height,Pe,me,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,se.width,se.height,0,Pe,me,se.data)}}}else{if(j=w.mipmaps,De&&Je){j.length>0&&he++;const J=Le(xe[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,J.width,J.height)}for(let J=0;J<6;J++)if(ne){De?D&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Pe,me,xe[J].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,xe[J].width,xe[J].height,0,Pe,me,xe[J].data);for(let de=0;de<j.length;de++){const se=j[de].image[J].image;De?D&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,se.width,se.height,Pe,me,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,se.width,se.height,0,Pe,me,se.data)}}else{De?D&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,me,xe[J]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Pe,me,xe[J]);for(let de=0;de<j.length;de++){const se=j[de];De?D&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Pe,me,se.image[J]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,Pe,me,se.image[J])}}}m(w)&&u(t.TEXTURE_CUBE_MAP),Y.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Z(R,w,z,$,re,Y){const Se=a.convert(z.format,z.colorSpace),ce=a.convert(z.type),ge=g(z.internalFormat,Se,ce,z.colorSpace);if(!i.get(w).__hasExternalTextures){const Be=Math.max(1,w.width>>Y),ne=Math.max(1,w.height>>Y);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?r.texImage3D(re,Y,ge,Be,ne,w.depth,0,Se,ce,null):r.texImage2D(re,Y,ge,Be,ne,0,Se,ce,null)}r.bindFramebuffer(t.FRAMEBUFFER,R),We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,re,i.get(z).__webglTexture,0,ze(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,re,i.get(z).__webglTexture,Y),r.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,w,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const $=w.depthTexture,re=$&&$.isDepthTexture?$.type:null,Y=v(w.stencilBuffer,re),Se=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=ze(w);We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Y,w.width,w.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Y,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const $=w.textures;for(let re=0;re<$.length;re++){const Y=$[re],Se=a.convert(Y.format,Y.colorSpace),ce=a.convert(Y.type),ge=g(Y.internalFormat,Se,ce,Y.colorSpace),Be=ze(w);z&&We(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ge,w.width,w.height):We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const z=i.get(w.depthTexture).__webglTexture,$=ze(w);if(w.depthTexture.format===fa)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,z,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,z,0);else if(w.depthTexture.format===Ta)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,z,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Re(R){const w=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",re)};$.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=$}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(r.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[$],R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,Y)}}else if(r.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,re)}r.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,w,z){const $=i.get(R);w!==void 0&&Z($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Re(R)}function Fe(R){const w=R.texture,z=i.get(R),$=i.get(w);R.addEventListener("dispose",A);const re=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Se=re.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=w.version,s.memory.textures++),Y){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else z.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)z.__webglFramebuffer[ce]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,ge=re.length;ce<ge;ce++){const Be=i.get(re[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&We(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const ge=re[ce];z.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Be=a.convert(ge.format,ge.colorSpace),ne=a.convert(ge.type),xe=g(ge.internalFormat,Be,ne,ge.colorSpace,R.isXRRenderTarget===!0),Ne=ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,R,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){r.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),oe(t.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Z(z.__webglFramebuffer[ce][ge],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Z(z.__webglFramebuffer[ce],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(w)&&u(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Se){for(let ce=0,ge=re.length;ce<ge;ce++){const Be=re[ce],ne=i.get(Be);r.bindTexture(t.TEXTURE_2D,ne.__webglTexture),oe(t.TEXTURE_2D,Be),Z(z.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Be)&&u(t.TEXTURE_2D)}r.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(ce,$.__webglTexture),oe(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Z(z.__webglFramebuffer[ge],R,w,t.COLOR_ATTACHMENT0,ce,ge);else Z(z.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,ce,0);m(w)&&u(ce),r.unbindTexture()}R.depthBuffer&&Re(R)}function Ze(R){const w=R.textures;for(let z=0,$=w.length;z<$;z++){const re=w[z];if(m(re)){const Y=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(re).__webglTexture;r.bindTexture(Y,Se),u(Y),r.unbindTexture()}}}const Ve=[],P=[];function ar(R){if(R.samples>0){if(We(R)===!1){const w=R.textures,z=R.width,$=R.height;let re=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ce=w.length>1;if(ce)for(let ge=0;ge<w.length;ge++)r.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Be=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,z,$,0,0,z,$,re,t.NEAREST),l===!0&&(Ve.length=0,P.length=0,Ve.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(Y),P.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<w.length;ge++){r.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Be=i.get(w[ge]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Be,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ze(R){return Math.min(n.maxSamples,R.samples)}function We(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(R){const w=s.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function rt(R,w){const z=R.colorSpace,$=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Zi&&z!==Ni&&(Ye.getTransfer(z)===nt?($!==Fr||re!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=we,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ar,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=We}function bE(t,e){function r(i,n=Ni){let a;const s=Ye.getTransfer(n);if(i===pi)return t.UNSIGNED_BYTE;if(i===Dh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Iv)return t.BYTE;if(i===kv)return t.SHORT;if(i===As)return t.UNSIGNED_SHORT;if(i===Lh)return t.INT;if(i===En)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Ds)return t.HALF_FLOAT;if(i===Fv)return t.ALPHA;if(i===zv)return t.RGB;if(i===Fr)return t.RGBA;if(i===Bv)return t.LUMINANCE;if(i===Hv)return t.LUMINANCE_ALPHA;if(i===fa)return t.DEPTH_COMPONENT;if(i===Ta)return t.DEPTH_STENCIL;if(i===Vv)return t.RED;if(i===Ih)return t.RED_INTEGER;if(i===Gv)return t.RG;if(i===kh)return t.RG_INTEGER;if(i===Oh)return t.RGBA_INTEGER;if(i===Vo||i===Go||i===jo||i===Wo)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Vo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Vo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sd||i===od||i===ld||i===cd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===od)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ud||i===dd||i===hd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ud||i===dd)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===hd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fd||i===pd||i===md||i===gd||i===vd||i===xd||i===_d||i===yd||i===bd||i===Sd||i===Md||i===wd||i===Ed||i===Td)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===fd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===md)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_d)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wd)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===Ad||i===Rd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Xo)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ad)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jv||i===Cd||i===Nd||i===Pd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}class SE extends yr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ME={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const m=r.getJointPose(b,i),u=this._getHandJoint(c,b);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ME)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const n=new ir,a=e.properties.get(n);a.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new qi({vertexShader:wE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Mr(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Pa{constructor(e,r){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,x=null;const b=new TE,m=r.getContextAttributes();let u=null,g=null;const v=[],S=[],C=new qe;let A=null;const T=new yr;T.layers.enable(1),T.viewport=new xt;const N=new yr;N.layers.enable(2),N.viewport=new xt;const W=[T,N],_=new SE;_.layers.enable(1),_.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=v[X];return Z===void 0&&(Z=new Qc,v[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=v[X];return Z===void 0&&(Z=new Qc,v[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=v[X];return Z===void 0&&(Z=new Qc,v[X]=Z),Z.getHandSpace()};function B(X){const Z=S.indexOf(X.inputSource);if(Z===-1)return;const ue=v[Z];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||s),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",K);for(let X=0;X<v.length;X++){const Z=S[X];Z!==null&&(S[X]=null,v[X].disconnect(Z))}M=null,k=null,b.reset(),e.setRenderTarget(u),p=null,d=null,f=null,n=null,g=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",O),n.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await r.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,r,Z),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Fr,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ue=null,le=null;m.depth&&(le=m.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,Z=m.stencil?Ta:fa,ue=m.stencil?Ea:En);const Re={colorFormat:r.RGBA8,depthFormat:le,scaleFactor:a};f=new XRWebGLBinding(n,r),d=f.createProjectionLayer(Re),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Tn(d.textureWidth,d.textureHeight,{format:Fr,type:pi,depthTexture:new n0(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Oe.setContext(n),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function K(X){for(let Z=0;Z<X.removed.length;Z++){const ue=X.removed[Z],le=S.indexOf(ue);le>=0&&(S[le]=null,v[le].disconnect(ue))}for(let Z=0;Z<X.added.length;Z++){const ue=X.added[Z];let le=S.indexOf(ue);if(le===-1){for(let we=0;we<v.length;we++)if(we>=S.length){S.push(ue),le=we;break}else if(S[we]===null){S[we]=ue,le=we;break}if(le===-1)break}const Re=v[le];Re&&Re.connect(ue)}}const G=new F,ee=new F;function L(X,Z,ue){G.setFromMatrixPosition(Z.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);const le=G.distanceTo(ee),Re=Z.projectionMatrix.elements,we=ue.projectionMatrix.elements,Fe=Re[14]/(Re[10]-1),Ze=Re[14]/(Re[10]+1),Ve=(Re[9]+1)/Re[5],P=(Re[9]-1)/Re[5],ar=(Re[8]-1)/Re[0],ze=(we[8]+1)/we[0],We=Fe*ar,Ce=Fe*ze,rt=le/(-ar+ze),Le=rt*-ar;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Re[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const R=Fe+rt,w=Ze+rt,z=We-Le,$=Ce+(le-Le),re=Ve*Ze/w*R,Y=P*Ze/w*R;X.projectionMatrix.makePerspective(z,$,re,Y,R,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Z=X.near,ue=X.far;b.texture!==null&&(b.depthNear>0&&(Z=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),_.near=N.near=T.near=Z,_.far=N.far=T.far=ue,(M!==_.near||k!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,k=_.far);const le=X.parent,Re=_.cameras;q(_,le);for(let we=0;we<Re.length;we++)q(Re[we],le);Re.length===2?L(_,T,N):_.projectionMatrix.copy(T.projectionMatrix),Q(X,_,le)};function Q(X,Z,ue){ue===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ld*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(_)};let oe=null;function be(X,Z){if(h=Z.getViewerPose(c||s),x=Z,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,le=!0);for(let we=0;we<ue.length;we++){const Fe=ue[we];let Ze=null;if(p!==null)Ze=p.getViewport(Fe);else{const P=f.getViewSubImage(d,Fe);Ze=P.viewport,we===0&&(e.setRenderTargetTextures(g,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(g))}let Ve=W[we];Ve===void 0&&(Ve=new yr,Ve.layers.enable(we),Ve.viewport=new xt,W[we]=Ve),Ve.matrix.fromArray(Fe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Fe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(_.matrix.copy(Ve.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),le===!0&&_.cameras.push(Ve)}const Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const we=f.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&b.init(e,we,n.renderState)}}for(let ue=0;ue<v.length;ue++){const le=S[ue],Re=v[ue];le!==null&&Re!==void 0&&Re.update(le,Z,c||s)}oe&&oe(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Oe=new i0;Oe.setAnimationLoop(be),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const sn=new mi,RE=new pt;function CE(t,e){function r(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Jv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function n(m,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),f(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(a(m,u),x(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),b(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,r(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rr&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,r(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rr&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,r(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,r(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,r(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,sn.copy(S),sn.x*=-1,sn.y*=-1,sn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),m.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(sn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,r(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,r(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,r(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,r(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,r(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,r(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,r(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,r(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,r(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,r(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rr&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,r(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,r(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,r(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,r(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,r(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,r(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,r(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function b(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function NE(t,e,r,i){let n={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=n[g.id];S===void 0&&(x(g),S=h(g),n[g.id]=S,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const A=e.render.frame;a[g.id]!==A&&(d(g),a[g.id]=A)}function h(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=n[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let W=0,_=N.length;W<_;W++){const M=N[W];if(p(M,A,W,C)===!0){const k=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let O=0;for(let K=0;K<B.length;K++){const G=B[K],ee=b(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,k+O,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,C){const A=g.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const N=C[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function x(g){const v=g.uniforms;let S=0;const C=16;for(let T=0,N=v.length;T<N;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,M=W.length;_<M;_++){const k=W[_],B=Array.isArray(k.value)?k.value:[k.value];for(let O=0,K=B.length;O<K;O++){const G=B[O],ee=b(G),L=S%C,q=L%ee.boundary,Q=L+q;S+=q,Q!==0&&C-Q<ee.storage&&(S+=C-Q),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=ee.storage}}}const A=S%C;return A>0&&(S+=C-A),g.__size=S,g.__cache={},this}function b(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function u(){for(const g in n)t.deleteBuffer(n[g]);s=[],n={},a={}}return{bind:l,update:c,dispose:u}}class PE{constructor(e={}){const{canvas:r=vb(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),x=new Int32Array(4);let b=null,m=null;const u=[],g=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jr,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,N=-1,W=null;const _=new xt,M=new xt;let k=null;const B=new Ge(0);let O=0,K=r.width,G=r.height,ee=1,L=null,q=null;const Q=new xt(0,0,K,G),oe=new xt(0,0,K,G);let be=!1;const Oe=new r0;let X=!1,Z=!1;const ue=new pt,le=new pt,Re=new F,we=new xt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ve(){return T===null?ee:1}let P=i;function ar(E,I){return r.getContext(E,I)}try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Ph}`),r.addEventListener("webglcontextlost",J,!1),r.addEventListener("webglcontextrestored",de,!1),r.addEventListener("webglcontextcreationerror",se,!1),P===null){const I="webgl2";if(P=ar(I,E),P===null)throw ar(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,We,Ce,rt,Le,R,w,z,$,re,Y,Se,ce,ge,Be,ne,xe,Ne,Pe,me,He,De,Je,D;function he(){ze=new kM(P),ze.init(),De=new bE(P,ze),We=new CM(P,ze,e,De),Ce=new xE(P),We.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new zM(P),Le=new iE,R=new yE(P,ze,Ce,Le,We,De,rt),w=new PM(v),z=new IM(v),$=new Wb(P),Je=new AM(P,$),re=new OM(P,$,rt,Je),Y=new HM(P,re,$,rt),Pe=new BM(P,We,R),ne=new NM(Le),Se=new rE(v,w,z,ze,We,Je,ne),ce=new CE(v,Le),ge=new aE,Be=new dE(ze),Ne=new TM(v,w,z,Ce,Y,d,l),xe=new gE(v,Y,We),D=new NE(P,rt,We,Ce),me=new RM(P,ze,rt),He=new FM(P,ze,rt),rt.programs=Se.programs,v.capabilities=We,v.extensions=ze,v.properties=Le,v.renderLists=ge,v.shadowMap=xe,v.state=Ce,v.info=rt}he();const j=new AE(v,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(K,G,!1))},this.getSize=function(E){return E.set(K,G)},this.setSize=function(E,I,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,G=I,r.width=Math.floor(E*ee),r.height=Math.floor(I*ee),H===!0&&(r.style.width=E+"px",r.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(K*ee,G*ee).floor()},this.setDrawingBufferSize=function(E,I,H){K=E,G=I,ee=H,r.width=Math.floor(E*H),r.height=Math.floor(I*H),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,I,H,V){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,I,H,V),Ce.viewport(_.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,I,H,V){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,I,H,V),Ce.scissor(M.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(E){Ce.setScissorTest(be=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,I=!0,H=!0){let V=0;if(E){let U=!1;if(T!==null){const ie=T.texture.format;U=ie===Oh||ie===kh||ie===Ih}if(U){const ie=T.texture.type,pe=ie===pi||ie===En||ie===As||ie===Ea||ie===Dh||ie===Uh,ve=Ne.getClearColor(),ye=Ne.getClearAlpha(),Ae=ve.r,Te=ve.g,Ee=ve.b;pe?(p[0]=Ae,p[1]=Te,p[2]=Ee,p[3]=ye,P.clearBufferuiv(P.COLOR,0,p)):(x[0]=Ae,x[1]=Te,x[2]=Ee,x[3]=ye,P.clearBufferiv(P.COLOR,0,x))}else V|=P.COLOR_BUFFER_BIT}I&&(V|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",J,!1),r.removeEventListener("webglcontextrestored",de,!1),r.removeEventListener("webglcontextcreationerror",se,!1),ge.dispose(),Be.dispose(),Le.dispose(),w.dispose(),z.dispose(),Y.dispose(),Je.dispose(),D.dispose(),Se.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xh),j.removeEventListener("sessionend",qh),Qi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=rt.autoReset,I=xe.enabled,H=xe.autoUpdate,V=xe.needsUpdate,U=xe.type;he(),rt.autoReset=E,xe.enabled=I,xe.autoUpdate=H,xe.needsUpdate=V,xe.type=U}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const I=E.target;I.removeEventListener("dispose",et),_t(I)}function _t(E){qt(E),Le.remove(E)}function qt(E){const I=Le.get(E).programs;I!==void 0&&(I.forEach(function(H){Se.releaseProgram(H)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,H,V,U,ie){I===null&&(I=Fe);const pe=U.isMesh&&U.matrixWorld.determinant()<0,ve=d0(E,I,H,V,U);Ce.setMaterial(V,pe);let ye=H.index,Ae=1;if(V.wireframe===!0){if(ye=re.getWireframeAttribute(H),ye===void 0)return;Ae=2}const Te=H.drawRange,Ee=H.attributes.position;let Qe=Te.start*Ae,lt=(Te.start+Te.count)*Ae;ie!==null&&(Qe=Math.max(Qe,ie.start*Ae),lt=Math.min(lt,(ie.start+ie.count)*Ae)),ye!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,ye.count)):Ee!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Ee.count));const mt=lt-Qe;if(mt<0||mt===1/0)return;Je.setup(U,V,ve,H,ye);let Mt,st=me;if(ye!==null&&(Mt=$.get(ye),st=He,st.setIndex(Mt)),U.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Ve()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(U.isLine){let Me=V.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*Ve()),U.isLineSegments?st.setMode(P.LINES):U.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else U.isPoints?st.setMode(P.POINTS):U.isSprite&&st.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)st.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))st.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Bt=U._multiDrawCounts,Ji=U._multiDrawCount,Rr=ye?$.get(ye).bytesPerElement:1,Cn=Le.get(V).currentProgram.getUniforms();for(let sr=0;sr<Ji;sr++)Cn.setValue(P,"_gl_DrawID",sr),st.render(Me[sr]/Rr,Bt[sr])}else if(U.isInstancedMesh)st.renderInstances(Qe,mt,U.count);else if(H.isInstancedBufferGeometry){const Me=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Bt=Math.min(H.instanceCount,Me);st.renderInstances(Qe,mt,Bt)}else st.render(Qe,mt)};function Xe(E,I,H){E.transparent===!0&&E.side===qr&&E.forceSinglePass===!1?(E.side=rr,E.needsUpdate=!0,Bs(E,I,H),E.side=Xi,E.needsUpdate=!0,Bs(E,I,H),E.side=qr):Bs(E,I,H)}this.compile=function(E,I,H=null){H===null&&(H=E),m=Be.get(H),m.init(I),g.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==H&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const V=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const ve=ie[pe];Xe(ve,H,U),V.add(ve)}else Xe(ie,H,U),V.add(ie)}),g.pop(),m=null,V},this.compileAsync=function(E,I,H=null){const V=this.compile(E,I,H);return new Promise(U=>{function ie(){if(V.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){U(E);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Yt=null;function $r(E){Yt&&Yt(E)}function Xh(){Qi.stop()}function qh(){Qi.start()}const Qi=new i0;Qi.setAnimationLoop($r),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(E){Yt=E,j.setAnimationLoop(E),E===null?Qi.stop():Qi.start()},j.addEventListener("sessionstart",Xh),j.addEventListener("sessionend",qh),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,T),m=Be.get(E,g.length),m.init(I),g.push(m),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Oe.setFromProjectionMatrix(le),Z=this.localClippingEnabled,X=ne.init(this.clippingPlanes,Z),b=ge.get(E,u.length),b.init(),u.push(b),j.enabled===!0&&j.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Xl(ie,I,-1/0,v.sortObjects)}Xl(E,I,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(L,q),Ze=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ze&&Ne.addToRenderList(b,E),this.info.render.frame++,X===!0&&ne.beginShadows();const H=m.state.shadowsArray;xe.render(H,E,I),X===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=b.opaque,U=b.transmissive;if(m.setupLights(),I.isArrayCamera){const ie=I.cameras;if(U.length>0)for(let pe=0,ve=ie.length;pe<ve;pe++){const ye=ie[pe];Kh(V,U,E,ye)}Ze&&Ne.render(E);for(let pe=0,ve=ie.length;pe<ve;pe++){const ye=ie[pe];Yh(b,E,ye,ye.viewport)}}else U.length>0&&Kh(V,U,E,I),Ze&&Ne.render(E),Yh(b,E,I);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,I),Je.resetDefaultState(),N=-1,W=null,g.pop(),g.length>0?(m=g[g.length-1],X===!0&&ne.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?b=u[u.length-1]:b=null};function Xl(E,I,H,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Oe.intersectsSprite(E)){V&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const ie=Y.update(E),pe=E.material;pe.visible&&b.push(E,ie,pe,H,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Oe.intersectsObject(E))){const ie=Y.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),we.copy(ie.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(pe)){const ve=ie.groups;for(let ye=0,Ae=ve.length;ye<Ae;ye++){const Te=ve[ye],Ee=pe[Te.materialIndex];Ee&&Ee.visible&&b.push(E,ie,Ee,H,we.z,Te)}}else pe.visible&&b.push(E,ie,pe,H,we.z,null)}}const U=E.children;for(let ie=0,pe=U.length;ie<pe;ie++)Xl(U[ie],I,H,V)}function Yh(E,I,H,V){const U=E.opaque,ie=E.transmissive,pe=E.transparent;m.setupLightsView(H),X===!0&&ne.setGlobalState(v.clippingPlanes,H),V&&Ce.viewport(_.copy(V)),U.length>0&&zs(U,I,H),ie.length>0&&zs(ie,I,H),pe.length>0&&zs(pe,I,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Kh(E,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Tn(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Ds:pi,minFilter:vn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const U=m.state.transmissionRenderTarget[V.id],ie=V.viewport||_;U.setSize(ie.z,ie.w);const pe=v.getRenderTarget();v.setRenderTarget(U),v.getClearColor(B),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Ne.render(H);const ve=v.toneMapping;v.toneMapping=Gi;const ye=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),X===!0&&ne.setGlobalState(v.clippingPlanes,V),zs(E,H,V),R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Te=0,Ee=I.length;Te<Ee;Te++){const Qe=I[Te],lt=Qe.object,mt=Qe.geometry,Mt=Qe.material,st=Qe.group;if(Mt.side===qr&&lt.layers.test(V.layers)){const Me=Mt.side;Mt.side=rr,Mt.needsUpdate=!0,$h(lt,H,V,mt,Mt,st),Mt.side=Me,Mt.needsUpdate=!0,Ae=!0}}Ae===!0&&(R.updateMultisampleRenderTarget(U),R.updateRenderTargetMipmap(U))}v.setRenderTarget(pe),v.setClearColor(B,O),ye!==void 0&&(V.viewport=ye),v.toneMapping=ve}function zs(E,I,H){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){const pe=E[U],ve=pe.object,ye=pe.geometry,Ae=V===null?pe.material:V,Te=pe.group;ve.layers.test(H.layers)&&$h(ve,I,H,ye,Ae,Te)}}function $h(E,I,H,V,U,ie){E.onBeforeRender(v,I,H,V,U,ie),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,I,H,V,E,ie),U.transparent===!0&&U.side===qr&&U.forceSinglePass===!1?(U.side=rr,U.needsUpdate=!0,v.renderBufferDirect(H,I,V,U,E,ie),U.side=Xi,U.needsUpdate=!0,v.renderBufferDirect(H,I,V,U,E,ie),U.side=qr):v.renderBufferDirect(H,I,V,U,E,ie),E.onAfterRender(v,I,H,V,U,ie)}function Bs(E,I,H){I.isScene!==!0&&(I=Fe);const V=Le.get(E),U=m.state.lights,ie=m.state.shadowsArray,pe=U.state.version,ve=Se.getParameters(E,U.state,ie,I,H),ye=Se.getProgramCacheKey(ve);let Ae=V.programs;V.environment=E.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(E.isMeshStandardMaterial?z:w).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",et),Ae=new Map,V.programs=Ae);let Te=Ae.get(ye);if(Te!==void 0){if(V.currentProgram===Te&&V.lightsStateVersion===pe)return Qh(E,ve),Te}else ve.uniforms=Se.getUniforms(E),E.onBeforeCompile(ve,v),Te=Se.acquireProgram(ve,ye),Ae.set(ye,Te),V.uniforms=ve.uniforms;const Ee=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Qh(E,ve),V.needsLights=f0(E),V.lightsStateVersion=pe,V.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Te,V.uniformsList=null,Te}function Zh(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Yo.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Qh(E,I){const H=Le.get(E);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function d0(E,I,H,V,U){I.isScene!==!0&&(I=Fe),R.resetTextureUnits();const ie=I.fog,pe=V.isMeshStandardMaterial?I.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zi,ye=(V.isMeshStandardMaterial?z:w).get(V.envMap||pe),Ae=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Te=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let mt=Gi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=v.toneMapping);const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Mt!==void 0?Mt.length:0,Me=Le.get(V),Bt=m.state.lights;if(X===!0&&(Z===!0||E!==W)){const gr=E===W&&V.id===N;ne.setState(V,E,gr)}let Ji=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==ve||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ye||V.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ne.numPlanes||Me.numIntersection!==ne.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Te||Me.morphTargets!==Ee||Me.morphNormals!==Qe||Me.morphColors!==lt||Me.toneMapping!==mt||Me.morphTargetsCount!==st)&&(Ji=!0):(Ji=!0,Me.__version=V.version);let Rr=Me.currentProgram;Ji===!0&&(Rr=Bs(V,I,U));let Cn=!1,sr=!1,ql=!1;const gt=Rr.getUniforms(),vi=Me.uniforms;if(Ce.useProgram(Rr.program)&&(Cn=!0,sr=!0,ql=!0),V.id!==N&&(N=V.id,sr=!0),Cn||W!==E){We.reverseDepthBuffer?(ue.copy(E.projectionMatrix),_b(ue),yb(ue),gt.setValue(P,"projectionMatrix",ue)):gt.setValue(P,"projectionMatrix",E.projectionMatrix),gt.setValue(P,"viewMatrix",E.matrixWorldInverse);const gr=gt.map.cameraPosition;gr!==void 0&&gr.setValue(P,Re.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,sr=!0,ql=!0)}if(U.isSkinnedMesh){gt.setOptional(P,U,"bindMatrix"),gt.setOptional(P,U,"bindMatrixInverse");const gr=U.skeleton;gr&&(gr.boneTexture===null&&gr.computeBoneTexture(),gt.setValue(P,"boneTexture",gr.boneTexture,R))}U.isBatchedMesh&&(gt.setOptional(P,U,"batchingTexture"),gt.setValue(P,"batchingTexture",U._matricesTexture,R),gt.setOptional(P,U,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",U._indirectTexture,R),gt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",U._colorsTexture,R));const Yl=H.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&Pe.update(U,H,Rr),(sr||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,gt.setValue(P,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(vi.envMap.value=ye,vi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(vi.envMapIntensity.value=I.environmentIntensity),sr&&(gt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&h0(vi,ql),ie&&V.fog===!0&&ce.refreshFogUniforms(vi,ie),ce.refreshMaterialUniforms(vi,V,ee,G,m.state.transmissionRenderTarget[E.id]),Yo.upload(P,Zh(Me),vi,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yo.upload(P,Zh(Me),vi,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(P,"center",U.center),gt.setValue(P,"modelViewMatrix",U.modelViewMatrix),gt.setValue(P,"normalMatrix",U.normalMatrix),gt.setValue(P,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gr=V.uniformsGroups;for(let Kl=0,p0=gr.length;Kl<p0;Kl++){const Jh=gr[Kl];D.update(Jh,Rr),D.bind(Jh,Rr)}}return Rr}function h0(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function f0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,H){Le.get(E.texture).__webglTexture=I,Le.get(E.depthTexture).__webglTexture=H;const V=Le.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const H=Le.get(E);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,H=0){T=E,C=I,A=H;let V=!0,U=null,ie=!1,pe=!1;if(E){const ve=Le.get(E);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ve.__hasExternalTextures)R.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(ve.__boundDepthTexture!==Te){if(Te!==null&&Le.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const ye=E.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const Ae=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?U=Ae[I][H]:U=Ae[I],ie=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?U=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[H]:U=Ae,_.copy(E.viewport),M.copy(E.scissor),k=E.scissorTest}else _.copy(Q).multiplyScalar(ee).floor(),M.copy(oe).multiplyScalar(ee).floor(),k=be;if(Ce.bindFramebuffer(P.FRAMEBUFFER,U)&&V&&Ce.drawBuffers(E,U),Ce.viewport(_),Ce.scissor(M),Ce.setScissorTest(k),ie){const ve=Le.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,H)}else if(pe){const ve=Le.get(E.texture),ye=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.__webglTexture,H||0,ye)}N=-1},this.readRenderTargetPixels=function(E,I,H,V,U,ie,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){Ce.bindFramebuffer(P.FRAMEBUFFER,ve);try{const ye=E.texture,Ae=ye.format,Te=ye.type;if(!We.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&H>=0&&H<=E.height-U&&P.readPixels(I,H,V,U,De.convert(Ae),De.convert(Te),ie)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,I,H,V,U,ie,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){const ye=E.texture,Ae=ye.format,Te=ye.type;if(!We.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-V&&H>=0&&H<=E.height-U){Ce.bindFramebuffer(P.FRAMEBUFFER,ve);const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(I,H,V,U,De.convert(Ae),De.convert(Te),0);const Qe=T!==null?Le.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,Qe);const lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xb(P,lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Ee),P.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,H=0){E.isTexture!==!0&&(qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(E.image.width*V),ie=Math.floor(E.image.height*V),pe=I!==null?I.x:0,ve=I!==null?I.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,pe,ve,U,ie),Ce.unbindTexture()},this.copyTextureToTexture=function(E,I,H=null,V=null,U=0){E.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,H=null);let ie,pe,ve,ye,Ae,Te;H!==null?(ie=H.max.x-H.min.x,pe=H.max.y-H.min.y,ve=H.min.x,ye=H.min.y):(ie=E.image.width,pe=E.image.height,ve=0,ye=0),V!==null?(Ae=V.x,Te=V.y):(Ae=0,Te=0);const Ee=De.convert(I.format),Qe=De.convert(I.type);R.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const lt=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mt=P.getParameter(P.UNPACK_SKIP_PIXELS),st=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,ye),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ae,Te,ie,pe,Ee,Qe,Bt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ae,Te,Bt.width,Bt.height,Ee,Bt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ae,Te,ie,pe,Ee,Qe,Bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,st),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,I,H=null,V=null,U=0){E.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let ie,pe,ve,ye,Ae,Te,Ee,Qe,lt;const mt=E.isCompressedTexture?E.mipmaps[U]:E.image;H!==null?(ie=H.max.x-H.min.x,pe=H.max.y-H.min.y,ve=H.max.z-H.min.z,ye=H.min.x,Ae=H.min.y,Te=H.min.z):(ie=mt.width,pe=mt.height,ve=mt.depth,ye=0,Ae=0,Te=0),V!==null?(Ee=V.x,Qe=V.y,lt=V.z):(Ee=0,Qe=0,lt=0);const Mt=De.convert(I.format),st=De.convert(I.type);let Me;if(I.isData3DTexture)R.setTexture3D(I,0),Me=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Bt=P.getParameter(P.UNPACK_ROW_LENGTH),Ji=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rr=P.getParameter(P.UNPACK_SKIP_PIXELS),Cn=P.getParameter(P.UNPACK_SKIP_ROWS),sr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Me,U,Ee,Qe,lt,ie,pe,ve,Mt,st,mt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,U,Ee,Qe,lt,ie,pe,ve,Mt,mt.data):P.texSubImage3D(Me,U,Ee,Qe,lt,ie,pe,ve,Mt,st,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ji),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sr),U===0&&I.generateMipmaps&&P.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Ce.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===Fh?"display-p3":"srgb",r.unpackColorSpace=Ye.workingColorSpace===Gl?"display-p3":"srgb"}}class Hh{constructor(e,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=r}clone(){return new Hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class LE extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class c0 extends La{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wl=new F,El=new F,sm=new pt,Ya=new zh,To=new Os,Jc=new F,om=new F;class DE extends jt{constructor(e=new nr,r=new c0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[0];for(let n=1,a=r.count;n<a;n++)wl.fromBufferAttribute(r,n-1),El.fromBufferAttribute(r,n),i[n]=i[n-1],i[n]+=wl.distanceTo(El);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(n),To.radius+=a,e.ray.intersectsSphere(To)===!1)return;sm.copy(n).invert(),Ya.copy(e.ray).applyMatrix4(sm);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=d,b=p-1;x<b;x+=c){const m=h.getX(x),u=h.getX(x+1),g=Ao(this,e,Ya,l,m,u);g&&r.push(g)}if(this.isLineLoop){const x=h.getX(p-1),b=h.getX(d),m=Ao(this,e,Ya,l,x,b);m&&r.push(m)}}else{const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let x=d,b=p-1;x<b;x+=c){const m=Ao(this,e,Ya,l,x,x+1);m&&r.push(m)}if(this.isLineLoop){const x=Ao(this,e,Ya,l,p-1,d);x&&r.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Ao(t,e,r,i,n,a){const s=t.geometry.attributes.position;if(wl.fromBufferAttribute(s,n),El.fromBufferAttribute(s,a),r.distanceSqToSegment(wl,El,Jc,om)>i)return;Jc.applyMatrix4(t.matrixWorld);const o=e.ray.origin.distanceTo(Jc);if(!(o<e.near||o>e.far))return{distance:o,point:om.clone().applyMatrix4(t.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:t}}const lm=new F,cm=new F;class UE extends DE{constructor(e,r){super(e,r),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,i=[];for(let n=0,a=r.count;n<a;n+=2)lm.fromBufferAttribute(r,n),cm.fromBufferAttribute(r,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+lm.distanceTo(cm);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u0 extends La{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new pt,Ud=new zh,Ro=new Os,Co=new F;class IE extends jt{constructor(e=new nr,r=new u0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(n),Ro.radius+=a,e.ray.intersectsSphere(Ro)===!1)return;um.copy(n).invert(),Ud.copy(e.ray).applyMatrix4(um);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,x=d;p<x;p++){const b=c.getX(p);Co.fromBufferAttribute(h,b),dm(Co,b,l,n,e,r,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=f,x=d;p<x;p++)Co.fromBufferAttribute(h,p),dm(Co,p,l,n,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function dm(t,e,r,i,n,a,s){const o=Ud.distanceSqToPoint(t);if(o<r){const l=new F;Ud.closestPointToPoint(t,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Vh extends nr{constructor(e=[],r=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:r,radius:i,detail:n};const a=[],s=[];o(n),c(i),h(),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(a.slice(),3)),this.setAttribute("uv",new St(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new F,S=new F,C=new F;for(let A=0;A<r.length;A+=3)p(r[A+0],v),p(r[A+1],S),p(r[A+2],C),l(v,S,C,g)}function l(g,v,S,C){const A=C+1,T=[];for(let N=0;N<=A;N++){T[N]=[];const W=g.clone().lerp(S,N/A),_=v.clone().lerp(S,N/A),M=A-N;for(let k=0;k<=M;k++)k===0&&N===A?T[N][k]=W:T[N][k]=W.clone().lerp(_,k/M)}for(let N=0;N<A;N++)for(let W=0;W<2*(A-N)-1;W++){const _=Math.floor(W/2);W%2===0?(d(T[N][_+1]),d(T[N+1][_]),d(T[N][_])):(d(T[N][_+1]),d(T[N+1][_+1]),d(T[N+1][_]))}}function c(g){const v=new F;for(let S=0;S<a.length;S+=3)v.x=a[S+0],v.y=a[S+1],v.z=a[S+2],v.normalize().multiplyScalar(g),a[S+0]=v.x,a[S+1]=v.y,a[S+2]=v.z}function h(){const g=new F;for(let v=0;v<a.length;v+=3){g.x=a[v+0],g.y=a[v+1],g.z=a[v+2];const S=m(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;s.push(S,1-C)}x(),f()}function f(){for(let g=0;g<s.length;g+=6){const v=s[g+0],S=s[g+2],C=s[g+4],A=Math.max(v,S,C),T=Math.min(v,S,C);A>.9&&T<.1&&(v<.2&&(s[g+0]+=1),S<.2&&(s[g+2]+=1),C<.2&&(s[g+4]+=1))}}function d(g){a.push(g.x,g.y,g.z)}function p(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const g=new F,v=new F,S=new F,C=new F,A=new qe,T=new qe,N=new qe;for(let W=0,_=0;W<a.length;W+=9,_+=6){g.set(a[W+0],a[W+1],a[W+2]),v.set(a[W+3],a[W+4],a[W+5]),S.set(a[W+6],a[W+7],a[W+8]),A.set(s[_+0],s[_+1]),T.set(s[_+2],s[_+3]),N.set(s[_+4],s[_+5]),C.copy(g).add(v).add(S).divideScalar(3);const M=m(C);b(A,_+0,g,M),b(T,_+2,v,M),b(N,_+4,S,M)}}function b(g,v,S,C){C<0&&g.x===1&&(s[v]=g.x-1),S.x===0&&S.z===0&&(s[v]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.vertices,e.indices,e.radius,e.details)}}class Gh extends Vh{constructor(e=1,r=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,r),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:r}}static fromJSON(e){return new Gh(e.radius,e.detail)}}class jh extends nr{constructor(e=.5,r=1,i=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:r,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let f=e;const d=(r-e)/n,p=new F,x=new qe;for(let b=0;b<=n;b++){for(let m=0;m<=i;m++){const u=a+m/i*s;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/r+1)/2,x.y=(p.y/r+1)/2,h.push(x.x,x.y)}f+=d}for(let b=0;b<n;b++){const m=b*(i+1);for(let u=0;u<i;u++){const g=u+m,v=g,S=g+i+1,C=g+i+2,A=g+1;o.push(v,S,A),o.push(S,C,A)}}this.setIndex(o),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wh extends nr{constructor(e=1,r=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],f=new F,d=new F,p=[],x=[],b=[],m=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&s===0?S=.5/r:u===i&&l===Math.PI&&(S=-.5/r);for(let C=0;C<=r;C++){const A=C/r;f.x=-e*Math.cos(n+A*a)*Math.sin(s+v*o),f.y=e*Math.cos(s+v*o),f.z=e*Math.sin(n+A*a)*Math.sin(s+v*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),b.push(d.x,d.y,d.z),m.push(A+S,1-v),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<r;g++){const v=h[u][g+1],S=h[u][g],C=h[u+1][g],A=h[u+1][g+1];(u!==0||s>0)&&p.push(v,S,A),(u!==i-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const r=hm();e=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=e}return e}}function hm(){return performance.now()}class OE extends UE{constructor(e=10,r=10,i=4473924,n=8947848){i=new Ge(i),n=new Ge(n);const a=r/2,s=e/r,o=e/2,l=[],c=[];for(let d=0,p=0,x=-o;d<=r;d++,x+=s){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const b=d===a?i:n;b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3}const h=new nr;h.setAttribute("position",new St(l,3)),h.setAttribute("color",new St(c,3));const f=new c0({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function FE(){const t=ft.useRef(null);return ft.useEffect(()=>{const e=t.current;if(!e)return;const r=new LE;r.fog=new Hh(328965,.035);const i=new yr(45,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=18;const n=new PE({alpha:!0,antialias:!0,powerPreference:"high-performance"});n.setSize(e.clientWidth,e.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);const a=1200,s=new nr,o=new Float32Array(a*3),l=new Float32Array(a*3);for(let M=0;M<a*3;M+=3){o[M]=(Math.random()-.5)*60,o[M+1]=(Math.random()-.5)*60,o[M+2]=(Math.random()-.5)*60;const k=Math.random();k>.8?(l[M]=0,l[M+1]=.9,l[M+2]=1):k>.6?(l[M]=.4,l[M+1]=.6,l[M+2]=1):(l[M]=.85,l[M+1]=.85,l[M+2]=.85)}s.setAttribute("position",new Er(o,3)),s.setAttribute("color",new Er(l,3));const c=new u0({size:.08,vertexColors:!0,transparent:!0,opacity:.65,blending:Xu}),h=new IE(s,c);r.add(h);const f=new aa;[3.2,4.4,5.8,7.5].forEach((M,k)=>{const B=new jh(M,M+.02,64),O=new cs({color:k%2===0?58879:2450411,side:qr,transparent:!0,opacity:.12-k*.02}),K=new Mr(B,O);K.rotation.x=Math.PI/2.3,K.rotation.y=k*Math.PI/8,f.add(K)});const d=new Gh(2.4,1),p=new cs({color:16777215,wireframe:!0,transparent:!0,opacity:.15}),x=new Mr(d,p);f.add(x);const b=18,m=new aa;for(let M=0;M<b;M++){const k=new Wh(.06,8,8),B=new cs({color:61695}),O=new Mr(k,B),K=M/b*Math.PI*2,G=4.2;O.position.set(Math.cos(K)*G,Math.sin(M*1.5)*.8,Math.sin(K)*G),m.add(O)}f.add(m),f.position.set(0,-1.5,-2),r.add(f);const u=new OE(60,40,3355443,1118481);u.position.y=-6,r.add(u);let g=0,v=0,S=0,C=0;const A=M=>{const k=e.getBoundingClientRect(),B=(M.clientX-k.left)/k.width,O=(M.clientY-k.top)/k.height;S=(B-.5)*2,C=(O-.5)*2};window.addEventListener("mousemove",A);const T=()=>{e&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),n.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",T);let N,W=new kE;const _=()=>{N=requestAnimationFrame(_);const M=W.getElapsedTime();g+=(S-g)*.05,v+=(C-v)*.05,f.rotation.y=M*.08+g*.5,f.rotation.x=v*.25,x.rotation.y=-M*.12,x.rotation.z=M*.05,h.rotation.y=M*.015,h.rotation.x=g*.05,i.position.x=g*1.5,i.position.y=-v*1,i.lookAt(0,0,0),n.render(r,i)};return _(),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("resize",T),cancelAnimationFrame(N),e.contains(n.domElement)&&e.removeChild(n.domElement),n.dispose(),s.dispose(),c.dispose(),d.dispose(),p.dispose()}},[]),y.jsx("div",{ref:t,className:"absolute inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})}const fm=[{symbol:"NVDA",price:"$145.89",change:"+4.12%"},{symbol:"AAPL",price:"$228.45",change:"+1.24%"},{symbol:"GOOG",price:"$182.10",change:"+0.85%"},{symbol:"AMZN",price:"$206.78",change:"+2.31%"},{symbol:"TSLA",price:"$342.15",change:"+7.45%"},{symbol:"META",price:"$591.20",change:"+3.10%"},{symbol:"MSFT",price:"$428.60",change:"+0.95%"},{symbol:"PLTR",price:"$65.20",change:"+5.80%"},{symbol:"COIN",price:"$310.40",change:"+8.90%"}],zE={totalAssetsConnected:"$12.3B",totalPayouts:"$10.1M",amountInvested:"$1.8B",updatedAt:"Updated Live"},Wn=[{id:"molly",name:"Molly Cantillon",bio:"Startup founder. Ex-Stanford, OpenAI, Microsoft",avatar:"https://storage.googleapis.com/iris-main-prod/teams%2F4296%2Fmarketing%2F7b72ba06-a2d5-428f-9767-6895987612d0.webp",playbackId:"aCHDE44E2Zmn1ERhz01sFZKSineVqF02DGvPySRARFN01w",thumbnail:"https://image.mux.com/aCHDE44E2Zmn1ERhz01sFZKSineVqF02DGvPySRARFN01w/thumbnail.jpg",aum:"$16.9K",subscribers:6,portfolios:1,since:"Jul 2026",badge:"Tech & Frontier AI"},{id:"lopez",name:"Dr. Lopez Lira",bio:"AI Finance from the Wharton School",avatar:"https://storage.googleapis.com/iris-main-prod/teams%2F5%2Fmarketing%2F20f0d5e8-19a9-43e0-8068-96bb05a369ed.webp",playbackId:"Y6uX1g010296VeNQLMCLzwNkA01ErkW01dW4y01l8xs1c8dk",thumbnail:"https://image.mux.com/Y6uX1g010296VeNQLMCLzwNkA01ErkW01dW4y01l8xs1c8dk/thumbnail.jpg",aum:"$280.3M",subscribers:39141,portfolios:9,since:"Oct 2025",badge:"Quant & LLM Alpha"},{id:"brooker",name:"Brooker Belcourt",bio:"Ex-citadel, Perplexity",avatar:"https://storage.googleapis.com/iris-main-prod/teams%2F3149%2Fmarketing%2Fd1afe07e-59e0-4e02-b7e5-46c81552ba3d.webp",playbackId:"U1d3YJV3I7DanLUrbhyEGAnw5J44Q3Cx4Swk8EdfZBk",thumbnail:"https://image.mux.com/U1d3YJV3I7DanLUrbhyEGAnw5J44Q3Cx4Swk8EdfZBk/thumbnail.jpg",aum:"$5.6M",subscribers:1173,portfolios:3,since:"Nov 2025",badge:"Market Neutral Long/Short"},{id:"whales",name:"Unusual Whales",bio:"4.7M followers finance account on X",avatar:"https://storage.googleapis.com/iris-main-prod/teams%2F1011%2Fmarketing%2Ff10dedf3-47d1-4bae-a769-c33d83d70224.webp",playbackId:"3027XF5Hwkf3NsH00hzIgVYpdG18xUo872XKz51XOd6qI",thumbnail:"https://image.mux.com/3027XF5Hwkf3NsH00hzIgVYpdG18xUo872XKz51XOd6qI/thumbnail.jpg",aum:"$11.6M",subscribers:1848,portfolios:13,since:"Oct 2025",badge:"Options Flow & Congressional"},{id:"glenn",name:"Glenn Turner",bio:"Portfolio Manager, Ex-Bank of America",avatar:"https://storage.googleapis.com/iris-main-prod/teams%2F4231%2Fmarketing%2F3492477c-421e-4139-9eea-fb1bdbd39fd4.webp",playbackId:"pvXI3F9glJHBcAVwuYs01bEhXVzFQpo4doV027fBzuhpU",thumbnail:"https://image.mux.com/pvXI3F9glJHBcAVwuYs01bEhXVzFQpo4doV027fBzuhpU/thumbnail.jpg",aum:"$310.1K",subscribers:17,portfolios:1,since:"Apr 2026",badge:"Macro Dividend Growth"}],BE=[{name:"Warren Buffett",title:"Oracle of Omaha",firm:"Berkshire Hathaway",period:"1965 – Present",squircle:"https://cdn.prod.website-files.com/6a0efaf7aa7c11173bccc22d/6a203e2b9ccc71274331838a_squircle-WarrenBuffet.webp",quote:"Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1.",cagr:"+19.8% CAGR"},{name:"Ken Griffin",title:"Founder & CEO",firm:"Citadel",period:"1990 – Present",squircle:"https://cdn.prod.website-files.com/6a0efaf7aa7c11173bccc22d/6a203e3ca2a7f9a05ddab203_squircle-KenGriffin.webp",quote:"The only constant in financial markets is relentless adaptation.",cagr:"+19.6% CAGR"},{name:"Jim Simons",title:"Pioneer of Quantitative Investing",firm:"Renaissance Technologies",period:"1988 – 2024",squircle:"https://cdn.prod.website-files.com/6a0efaf7aa7c11173bccc22d/6a203e46d5d3c443c9cff602_squircle-JimSimons.webp",quote:"Past performance is the best predictor of success in mathematical modeling.",cagr:"+66.1% Gross CAGR"},{name:"Benjamin Graham",title:"Father of Value Investing",firm:"Graham-Newman Corp",period:"1926 – 1956",squircle:"https://cdn.prod.website-files.com/6a0efaf7aa7c11173bccc22d/6a203e502e52e36a2c8d3730_squircle-BenjaminGraham.webp",quote:"In the short run, the market is a voting machine, but in the long run, it is a weighing machine.",cagr:"+17.0% CAGR"},{name:"John Neff",title:"Legendary Value Contrarion",firm:"Vanguard Windsor Fund",period:"1964 – 1995",squircle:"https://cdn.prod.website-files.com/6a0efaf7aa7c11173bccc22d/6a203e59d6a5778fa22a647a_squircle-JohnNeff.webp",quote:"It's not always easy to do what's not popular, but that's where you make your money.",cagr:"+13.7% CAGR"}],HE=[{question:"Which brokerages does Autopilot support?",answer:"Support varies over time and by account type. Connect from the app to see currently available brokerages for your account. Popular retail brokerages have been supported (for example Robinhood, Webull, Public, and others depending on current availability)."},{question:"What is a Pilot?",answer:"A Pilot is a third-party investor who builds a model portfolio and licenses it to Autopilot in exchange for compensation. You choose which Pilot to follow and how much of your brokerage buying power Autopilot may use to mirror that model."},{question:"Why doesn’t my Autopilot value match my brokerage balance?",answer:"Autopilot shows the market value of positions it’s managing plus unused buying power you’ve allocated to that Pilot. It does not include stocks you hold outside Autopilot. Small gaps can also appear if Autopilot couldn’t use 100% of an allocation (for example, leftover dollars after buying shares). Large mismatches: email support@joinautopilot.com."},{question:"Where does my money go when I add it to Autopilot?",answer:"Nowhere else. Allocating money only tells Autopilot how much of your brokerage buying power it’s allowed to trade. Funds stay with your brokerage custodian. Autopilot does not hold your cash or stocks, and no bank transfer is required to “fund” Autopilot."},{question:"When will Autopilot start making trades?",answer:"If you set up outside market hours, trades typically start at the next open (9:30 a.m. Eastern). During market hours (9:30 a.m.–4:00 p.m. Eastern), trades can take up to about 15 minutes. If nothing has been placed after that, contact support@joinautopilot.com."}],cr=[{step:"01",tag:"Select Portfolio",title:"Pick your stocks.",description:"Your investing strategy sells your fund. Draw investors in with skill or story.",items:[{name:"NVIDIA Corp (NVDA)",weight:"35%",type:"AI Hardware"},{name:"Palantir Tech (PLTR)",weight:"25%",type:"Enterprise AI"},{name:"Amazon.com (AMZN)",weight:"20%",type:"Cloud & Commerce"},{name:"Alphabet (GOOGL)",weight:"20%",type:"Infrastructure"}]},{step:"02",tag:"Distribute Fund",title:"Launch your fund.",description:"Draw investors into your strategy. Share your real-time verified trades, thesis, and portfolio updates directly to your followers.",stats:{subscribers:"1,420+",followersGrowth:"+248% this month",averageAllocation:"$8,500"}},{step:"03",tag:"Monetize",title:"Monetize your strategy.",eyebrow:"This is where it gets fun.",description:"Users pay to automatically follow your future trades. You earn monthly recurring revenue from every active subscriber mirroring your moves.",highlight:"It’s your time to take off.",cta:"Become a Pilot today"}];function VE(){return y.jsxs("section",{className:"relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 overflow-hidden",children:[y.jsx(FE,{}),y.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.035] -z-10",children:y.jsx("span",{className:"text-[18vw] font-black tracking-tighter leading-none text-white whitespace-nowrap",children:"AUTOPILOT"})}),y.jsx("div",{className:"relative z-10 w-full overflow-hidden py-3",children:y.jsx("div",{className:"flex gap-3 whitespace-nowrap animate-ticker hover:[animation-play-state:paused] w-max",children:[...fm,...fm].map((t,e)=>y.jsxs("div",{className:"flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-border bg-white/[0.03] text-xs font-mono text-white/80",children:[y.jsx("span",{className:"font-semibold text-white tracking-wider",children:t.symbol}),y.jsx("span",{className:"text-white/60",children:t.price}),y.jsxs("span",{className:"text-emerald-400 font-medium flex items-center gap-0.5",children:[y.jsx(_y,{size:11}),t.change]})]},`${t.symbol}-${e}`))})}),y.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center my-auto px-4 py-8",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-border bg-white/[0.04] mb-8 text-xs font-medium text-white/70",children:[y.jsx(Pv,{size:13,className:"text-cyan-400 animate-pulse"}),y.jsx("span",{children:"Next Generation Autonomous Fund Infrastructure"})]}),y.jsx("h1",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.02] mb-6",children:"Instant access to the world’s capital."}),y.jsx("p",{className:"max-w-2xl mx-auto text-base sm:text-xl text-white/60 font-normal leading-relaxed mb-10",children:"Become a Pilot and launch your first fund in minutes. Users pay to automatically follow your verified trades."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[y.jsxs("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f1f2f3] hover:bg-white text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5",children:[y.jsx("span",{children:"Launch"}),y.jsx(Ch,{size:16})]}),y.jsx("a",{href:"#steps",className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-border bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all duration-200",children:y.jsx("span",{children:"See how it works"})})]})]}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center text-xs text-white/40 gap-2 pt-6",children:[y.jsx("span",{children:"Scroll to explore the flight deck"}),y.jsx("div",{className:"w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1",children:y.jsx("div",{className:"w-1 h-2 bg-white/60 rounded-full animate-bounce"})})]})]})}function GE(){const[t,e]=ft.useState(0);return y.jsxs("section",{id:"steps",className:"relative py-24 px-6 md:px-12 bg-black/60 border-t border-white/[0.06]",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full"}),y.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[y.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[y.jsx("p",{className:"text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3",children:"Autonomous Fund Engine"}),y.jsx("h2",{className:"text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4",children:"Become a Pilot in three steps."}),y.jsx("p",{className:"text-sm sm:text-base text-white/60",children:"From algorithmic models to thesis-driven portfolios, Autopilot handles custody, compliance, execution, and billing."})]}),y.jsx("div",{className:"flex justify-center mb-12",children:y.jsx("div",{className:"inline-flex p-1.5 rounded-full glass-border bg-black/50 gap-1 sm:gap-2",children:cr.map((r,i)=>y.jsxs("button",{onClick:()=>e(i),className:`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${t===i?"bg-white text-black font-semibold shadow-lg":"text-white/60 hover:text-white hover:bg-white/5"}`,children:[y.jsx("span",{className:"font-mono text-[10px] opacity-70",children:r.step}),y.jsx("span",{children:r.tag})]},r.step))})}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[y.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold",children:[y.jsxs("span",{children:["Step ",cr[t].step]}),cr[t].eyebrow&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"opacity-40",children:"•"}),y.jsx("span",{children:cr[t].eyebrow})]})]}),y.jsx("h3",{className:"text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight",children:cr[t].title}),y.jsx("p",{className:"text-base text-white/70 leading-relaxed",children:cr[t].description}),cr[t].highlight&&y.jsx("p",{className:"text-lg font-medium text-cyan-300 pt-2",children:cr[t].highlight}),y.jsx("div",{className:"pt-4",children:y.jsxs("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black font-semibold text-sm transition-all shadow-md group",children:[y.jsx("span",{children:cr[t].cta||"Continue to Next Step"}),y.jsx(Ch,{size:15,className:"group-hover:translate-x-1 transition-transform"})]})})]}),y.jsx("div",{className:"lg:col-span-7",children:y.jsxs("div",{className:"rounded-3xl glass-border bg-zinc-950/80 p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"}),t===0&&y.jsxs("div",{className:"space-y-4 animate-in fade-in duration-300",children:[y.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-400 animate-ping"}),y.jsx("span",{className:"text-xs font-mono uppercase text-white/80",children:"Active Model Weights"})]}),y.jsx("span",{className:"text-xs text-white/50",children:"4 Holdings Allocated"})]}),y.jsx("div",{className:"space-y-2.5",children:cr[0].items.map((r,i)=>y.jsxs("div",{className:"flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/[0.04]",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono font-bold text-xs text-white",children:r.name.split(" ")[0][0]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-sm font-semibold text-white",children:r.name}),y.jsx("div",{className:"text-xs text-white/40",children:r.type})]})]}),y.jsx("div",{className:"text-right",children:y.jsx("span",{className:"inline-block px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold",children:r.weight})})]},r.name))}),y.jsxs("div",{className:"pt-2 text-xs text-white/40 flex items-center gap-2",children:[y.jsx(vy,{size:14,className:"text-emerald-400"}),y.jsx("span",{children:"Real-time webhook synchronization enabled"})]})]}),t===1&&y.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[y.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[y.jsx("span",{className:"text-xs font-mono uppercase text-white/80",children:"Live Subscriber Funnel"}),y.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium",children:"Public Status: Active"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsxs("div",{className:"text-xs text-white/50 mb-1 flex items-center gap-1.5",children:[y.jsx(by,{size:14,className:"text-cyan-400"}),y.jsx("span",{children:"Copiers"})]}),y.jsx("div",{className:"text-2xl font-bold text-white font-mono",children:cr[1].stats.subscribers}),y.jsx("div",{className:"text-[11px] text-emerald-400 mt-1",children:cr[1].stats.followersGrowth})]}),y.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsxs("div",{className:"text-xs text-white/50 mb-1 flex items-center gap-1.5",children:[y.jsx(Nh,{size:14,className:"text-cyan-400"}),y.jsx("span",{children:"Avg Brokerage Allocation"})]}),y.jsx("div",{className:"text-2xl font-bold text-white font-mono",children:cr[1].stats.averageAllocation}),y.jsx("div",{className:"text-[11px] text-white/40 mt-1",children:"Direct via Robinhood & Webull"})]})]}),y.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-cyan-950/30 border border-cyan-500/20 flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:y.jsx(sy,{size:20})}),y.jsx("div",{className:"text-xs text-white/80 leading-relaxed",children:"Instant execution order routing mirrors your trades with sub-second latencies across thousands of retail brokerages."})]})]}),t===2&&y.jsxs("div",{className:"space-y-6 animate-in fade-in duration-300",children:[y.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[y.jsx("span",{className:"text-xs font-mono uppercase text-white/80",children:"Creator Economics Simulator"}),y.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Monthly Recurring Revenue"})]}),y.jsxs("div",{className:"p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 text-center",children:[y.jsx("div",{className:"text-xs text-white/50 uppercase tracking-widest mb-1",children:"Estimated Monthly Payout"}),y.jsxs("div",{className:"text-4xl sm:text-5xl font-black text-white font-mono tracking-tight my-2",children:["$24,500",y.jsx("span",{className:"text-lg text-white/50",children:"/mo"})]}),y.jsx("div",{className:"text-xs text-emerald-400",children:"Based on 1,000 active copiers ($29.99/mo subscription)"})]}),y.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center text-xs",children:[y.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]",children:[y.jsx("div",{className:"text-white/40",children:"Payout Speed"}),y.jsx("div",{className:"text-white font-semibold mt-1",children:"Instant ACH / Wire"})]}),y.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]",children:[y.jsx("div",{className:"text-white/40",children:"Custody Headaches"}),y.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Zero (0%)"})]}),y.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]",children:[y.jsx("div",{className:"text-white/40",children:"SEC Reporting"}),y.jsx("div",{className:"text-white font-semibold mt-1",children:"Automated"})]})]})]})]})})]})]})]})}function jE(){return y.jsxs("section",{id:"proof",className:"relative py-20 px-6 sm:px-12 border-t border-b border-white/[0.06] bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"}),y.jsxs("div",{className:"max-w-5xl mx-auto relative z-10 text-center",children:[y.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-border bg-white/[0.03] text-xs font-mono uppercase tracking-wider text-white/50 mb-10",children:"A Paradigm Shift in Capital Formation"}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8",children:[y.jsxs("div",{className:"rounded-3xl p-8 sm:p-10 glass-border bg-zinc-950/60 border border-white/5 flex flex-col justify-between text-left",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 text-white/40 text-xs font-mono uppercase mb-4",children:[y.jsx(uy,{size:14}),y.jsx("span",{children:"Traditional Hedge Fund Incubation"})]}),y.jsxs("h3",{className:"text-2xl sm:text-3xl font-bold text-white/70 leading-snug",children:["Bill Ackman took ",y.jsx("span",{className:"text-white",children:"10 years"})," to raise ",y.jsx("span",{className:"text-white font-mono",children:"$56M"}),"."]})]}),y.jsx("p",{className:"text-xs text-white/40 pt-6 border-t border-white/5 mt-6",children:"Bound by roadshows, prime brokers, minimum checks, and gatekeepers."})]}),y.jsxs("div",{className:"rounded-3xl p-8 sm:p-10 glass-border bg-gradient-to-br from-cyan-950/30 via-zinc-950/90 to-blue-950/30 border border-cyan-500/30 flex flex-col justify-between text-left relative overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.07)]",children:[y.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full"}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-4",children:[y.jsx(Ty,{size:14}),y.jsx("span",{children:"The Autopilot Era"})]}),y.jsxs("h3",{className:"text-2xl sm:text-3xl font-bold text-white leading-snug",children:["Users allocated ",y.jsx("span",{className:"text-cyan-300 font-mono underline decoration-cyan-400/50 decoration-2 underline-offset-4",children:"$1B"})," to our Pilots in ",y.jsx("span",{className:"text-cyan-300",children:"less than a year"}),"."]})]}),y.jsx("p",{className:"text-xs text-cyan-400/80 pt-6 border-t border-cyan-500/20 mt-6 flex items-center justify-between",children:y.jsx("span",{children:"Instant brokerage synchronization for millions of retail investors."})})]})]}),y.jsxs("div",{className:"space-y-1 text-center",children:[y.jsx("p",{className:"text-[11px] text-white/35 font-normal",children:"*Based on internal pilot data. Results may not be representative of all users or future outcomes."}),y.jsx("p",{className:"text-[10px] text-white/25",children:"Visuals are illustrative only."})]})]})]})}function WE(){const[t,e]=ft.useState(0),[r,i]=ft.useState(!1),[n,a]=ft.useState(!0),s=ft.useRef(null),o=Wn[t],l=()=>{i(!1),e(d=>(d+1)%Wn.length)},c=()=>{i(!1),e(d=>(d-1+Wn.length)%Wn.length)},h=()=>{s.current&&(r?(s.current.pause(),i(!1)):(s.current.play().catch(()=>{}),i(!0)))},f=()=>{s.current&&(s.current.muted=!n,a(!n))};return y.jsxs("section",{id:"stories",className:"py-24 px-6 md:px-12 relative overflow-hidden bg-black",children:[y.jsx("div",{className:"absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full"}),y.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 mb-3",children:[y.jsx(ny,{size:13,className:"text-cyan-400"}),y.jsx("span",{children:"Pilot Stories"})]}),y.jsxs("h2",{className:"text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight",children:["The next Warren Buffett ",y.jsx("br",{className:"hidden sm:inline"}),"will be found on Autopilot."]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("button",{onClick:c,"aria-label":"Previous Pilot Story",className:"w-11 h-11 rounded-full glass-border bg-white/[0.04] hover:bg-white/10 flex items-center justify-center text-white transition-colors",children:y.jsx(ly,{size:20})}),y.jsxs("span",{className:"text-xs font-mono text-white/40",children:[t+1," / ",Wn.length]}),y.jsx("button",{onClick:l,"aria-label":"Next Pilot Story",className:"w-11 h-11 rounded-full glass-border bg-white/[0.04] hover:bg-white/10 flex items-center justify-center text-white transition-colors",children:y.jsx(cy,{size:20})})]})]}),y.jsx("div",{className:"rounded-3xl glass-border bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden",children:y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[y.jsx("div",{className:"lg:col-span-7",children:y.jsxs("div",{className:"relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 group",children:[y.jsx("video",{ref:s,poster:o.thumbnail,src:`https://stream.mux.com/${o.playbackId}/high.mp4`,loop:!0,playsInline:!0,muted:n,className:"w-full h-full object-cover",onEnded:()=>i(!1)}),y.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-4 sm:p-6 transition-opacity",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white/90 border border-white/10",children:o.badge}),y.jsx("button",{onClick:f,className:"w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white border border-white/10 transition-colors","aria-label":"Toggle Mute",children:n?y.jsx(My,{size:15}):y.jsx(Sy,{size:15})})]}),y.jsx("div",{className:"flex items-center justify-center",children:y.jsx("button",{onClick:h,className:"w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-all","aria-label":r?"Pause Video":"Play Video",children:r?y.jsx(my,{size:24}):y.jsx(gy,{size:24,className:"translate-x-0.5"})})}),y.jsxs("div",{className:"flex items-center justify-between text-xs text-white/70",children:[y.jsx("span",{children:"Mux Verified Stream"}),y.jsx("span",{className:"font-mono",children:"4K / 60 FPS"})]})]})]})}),y.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-6",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[y.jsx("img",{src:o.avatar,alt:o.name,className:"w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-md",onError:d=>{d.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}}),y.jsxs("div",{children:[y.jsxs("h3",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[y.jsx("span",{children:o.name}),y.jsx(xy,{size:16,className:"text-cyan-400"})]}),y.jsx("p",{className:"text-xs text-white/50",children:o.bio})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-3 my-6",children:[y.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsx("div",{className:"text-[11px] uppercase tracking-wider text-white/40",children:"Assets Mirrored"}),y.jsx("div",{className:"text-xl font-bold font-mono text-cyan-300 mt-0.5",children:o.aum})]}),y.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsx("div",{className:"text-[11px] uppercase tracking-wider text-white/40",children:"Subscribers"}),y.jsx("div",{className:"text-xl font-bold font-mono text-white mt-0.5",children:o.subscribers.toLocaleString()})]}),y.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsx("div",{className:"text-[11px] uppercase tracking-wider text-white/40",children:"Model Portfolios"}),y.jsx("div",{className:"text-xl font-bold font-mono text-white mt-0.5",children:o.portfolios})]}),y.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05]",children:[y.jsx("div",{className:"text-[11px] uppercase tracking-wider text-white/40",children:"Piloting Since"}),y.jsx("div",{className:"text-xl font-bold font-mono text-white/80 mt-0.5",children:o.since})]})]})]}),y.jsx("div",{className:"pt-2 border-t border-white/10",children:y.jsxs("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg",children:[y.jsx("span",{children:"Become a Pilot"}),y.jsx(Hi,{size:16})]})})]})]})}),y.jsx("div",{className:"flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-none",children:Wn.map((d,p)=>y.jsxs("button",{onClick:()=>{i(!1),e(p)},className:`flex items-center gap-3 p-2 pr-4 rounded-xl border transition-all shrink-0 ${t===p?"border-cyan-400 bg-white/10 shadow-[0_0_15px_rgba(0,229,255,0.15)]":"border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"}`,children:[y.jsx("img",{src:d.avatar,alt:d.name,className:"w-8 h-8 rounded-lg object-cover",onError:x=>{x.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}}),y.jsxs("div",{className:"text-left",children:[y.jsx("div",{className:"text-xs font-semibold text-white",children:d.name}),y.jsxs("div",{className:"text-[10px] text-cyan-400 font-mono",children:[d.aum," AUM"]})]})]},d.id))})]})]})}function XE(){const[t,e]=ft.useState(zE),[r,i]=ft.useState("Live Real-time");return ft.useEffect(()=>{fetch("https://autopilot-hazel.vercel.app/api/platform-stats").then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()}).then(n=>{if(n&&n.stats){const a=o=>`$${(o/1e9).toFixed(1)}B`,s=o=>`$${(o/1e6).toFixed(1)}M`;if(e({totalAssetsConnected:a(n.stats.totalAssetsConnected||12333324345),totalPayouts:s(n.stats.totalPayouts||10127545),amountInvested:a(n.stats.amountInvested||1785825504)}),n.stats.updatedAt){const o=new Date(n.stats.updatedAt);i(`as of ${o.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}`)}}}).catch(()=>{i("as of today")})},[]),y.jsx("section",{className:"py-20 px-6 sm:px-12 border-b border-white/[0.06] bg-black relative",children:y.jsxs("div",{className:"max-w-6xl mx-auto",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-white/40 mb-1",children:"Verified Network Activity"}),y.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"Scale you can build a career on."})]}),y.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),y.jsx("span",{children:r})]})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[y.jsxs("div",{className:"p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-all rounded-full"}),y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 mb-6",children:y.jsx(wy,{size:20})}),y.jsx("div",{className:"text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2",children:t.totalAssetsConnected}),y.jsx("div",{className:"text-sm font-medium text-white/70",children:"Total assets connected on Autopilot"}),y.jsx("div",{className:"text-xs text-white/40 mt-4 pt-4 border-t border-white/5",children:"Custodied across premier retail brokerages"})]}),y.jsxs("div",{className:"p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/10 transition-all rounded-full"}),y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 mb-6",children:y.jsx(Nh,{size:20})}),y.jsx("div",{className:"text-4xl sm:text-5xl font-black font-mono tracking-tight text-emerald-400 mb-2",children:t.totalPayouts}),y.jsx("div",{className:"text-sm font-medium text-white/70",children:"Total payouts to Pilots (so far)"}),y.jsx("div",{className:"text-xs text-white/40 mt-4 pt-4 border-t border-white/5",children:"Direct monthly recurring compensation"})]}),y.jsxs("div",{className:"p-8 rounded-3xl glass-border bg-zinc-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all rounded-full"}),y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-blue-400 mb-6",children:y.jsx(iy,{size:20})}),y.jsx("div",{className:"text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2",children:t.amountInvested}),y.jsx("div",{className:"text-sm font-medium text-white/70",children:"Amount invested on Autopilot"}),y.jsx("div",{className:"text-xs text-white/40 mt-4 pt-4 border-t border-white/5",children:"Active buying power allocated to model trades"})]})]})]})})}function qE(){const[t,e]=ft.useState(null);return y.jsxs("section",{id:"hall-of-fame",className:"py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden border-b border-white/[0.06]",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full"}),y.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[y.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3",children:[y.jsx(yy,{size:13}),y.jsx("span",{children:"Investing Legends"})]}),y.jsx("h2",{className:"text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4",children:"Investor Hall of Fame."}),y.jsx("p",{className:"text-sm sm:text-base text-white/60 leading-relaxed",children:"We want to honor legendary investors and take the world of investing to new heights."})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12",children:BE.map((r,i)=>y.jsxs("div",{onMouseEnter:()=>e(i),onMouseLeave:()=>e(null),className:`p-6 rounded-3xl glass-border transition-all duration-300 flex flex-col justify-between relative group cursor-pointer ${t===i?"bg-gradient-to-b from-amber-950/40 via-zinc-900 to-black border-amber-400/40 transform -translate-y-2 shadow-[0_15px_30px_rgba(245,158,11,0.1)]":"bg-zinc-900/60 border-white/5 hover:border-white/20"}`,children:[y.jsxs("div",{children:[y.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/50 transition-colors shadow-lg",children:[y.jsx("img",{src:r.squircle,alt:r.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:n=>{n.target.src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"}}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"})]}),y.jsxs("div",{className:"text-center",children:[y.jsx("h4",{className:"text-base font-bold text-white group-hover:text-amber-200 transition-colors",children:r.name}),y.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r.title}),y.jsx("div",{className:"text-[11px] font-mono text-white/40",children:r.firm})]})]}),y.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 text-center",children:[y.jsx("span",{className:"inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-mono text-xs font-bold mb-2",children:r.cagr}),y.jsxs("p",{className:"text-[11px] text-white/50 italic line-clamp-3",children:['"',r.quote,'"']}),y.jsx("div",{className:"text-[10px] text-white/30 font-mono mt-2",children:r.period})]})]},r.name))}),y.jsx("div",{className:"text-center",children:y.jsxs("a",{href:"https://launch.joinautopilot.com/hall-of-fame",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 rounded-full glass-border bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm transition-all",children:[y.jsx("span",{children:"Explore investor Hall of Fame"}),y.jsx(Hi,{size:15})]})})]})]})}function YE(){const[t,e]=ft.useState(null),r=i=>{e(t===i?null:i)};return y.jsx("section",{id:"faq",className:"py-24 px-6 md:px-12 bg-black relative",children:y.jsxs("div",{className:"max-w-4xl mx-auto",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 mb-3",children:[y.jsx(Nv,{size:13,className:"text-cyan-400"}),y.jsx("span",{children:"Questions & Answers"})]}),y.jsx("h2",{className:"text-3xl sm:text-5xl font-bold tracking-tight text-white",children:"Most Asked Questions."})]}),y.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[y.jsx("span",{className:"text-white/40",children:"Showing 5 out of 20 items"}),y.jsxs("a",{href:"https://launch.joinautopilot.com/faq",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors",children:[y.jsx("span",{children:"View all"}),y.jsx(Hi,{size:13})]})]})]}),y.jsx("div",{className:"space-y-3",children:HE.map((i,n)=>{const a=t===n;return y.jsxs("div",{className:"rounded-2xl glass-border bg-zinc-950/70 border border-white/5 overflow-hidden transition-all duration-200",children:[y.jsxs("button",{onClick:()=>r(n),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors","aria-expanded":a,children:[y.jsx("span",{className:"text-base sm:text-lg font-semibold text-white/90",children:i.question}),y.jsx("div",{className:`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 transition-transform duration-300 ${a?"rotate-180 bg-white/15 text-white":""}`,children:y.jsx(oy,{size:18})})]}),a&&y.jsx("div",{className:"px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-white/60 leading-relaxed border-t border-white/5 animate-in fade-in duration-200",children:y.jsx("p",{children:i.answer})})]},n)})})]})})}function KE(){return y.jsxs("section",{className:"relative py-28 sm:py-36 px-6 text-center overflow-hidden bg-black border-t border-white/[0.06]",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-cyan-600/20 via-blue-600/25 to-indigo-600/15 blur-[160px] pointer-events-none rounded-full","aria-hidden":"true"}),y.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-border bg-white/[0.04] mb-8 text-xs font-medium text-white/80",children:[y.jsx(Pv,{size:13,className:"text-cyan-400"}),y.jsx("span",{children:"Start in Under 5 Minutes"})]}),y.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]",children:"Access the world’s capital with a tap."}),y.jsx("p",{className:"text-base sm:text-xl text-white/60 mb-10 max-w-xl mx-auto font-normal",children:"Join leading fund managers, algorithmic traders, and market forecasters distributing on Autopilot."}),y.jsx("div",{children:y.jsxs("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#f1f2f3] hover:bg-white text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transform hover:-translate-y-0.5",children:[y.jsx("span",{children:"Launch your fund"}),y.jsx(Ch,{size:18})]})})]})]})}function $E(){return y.jsx("footer",{className:"border-t border-white/[0.08] bg-[#030303] text-white/60 text-xs pt-16 pb-12 px-6 md:px-12",children:y.jsxs("div",{className:"max-w-6xl mx-auto",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]",children:[y.jsxs("div",{className:"md:col-span-5 space-y-4",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-black text-xs",children:"▲"}),y.jsx("span",{className:"font-bold text-white text-base tracking-tight",children:"Autopilot"})]}),y.jsx("p",{className:"text-white/50 text-xs max-w-sm leading-relaxed",children:"Autonomous social fund infrastructure. Mirroring strategies, empowering independent pilots, and bringing institutional transparency to modern retail investing."}),y.jsx("div",{className:"pt-2",children:y.jsxs("a",{href:"https://www.itsoffbrand.com/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors",children:[y.jsx("span",{children:"Site by OFF+BRAND"}),y.jsx(Hi,{size:12})]})})]}),y.jsxs("div",{className:"md:col-span-3 space-y-3",children:[y.jsx("h4",{className:"text-white font-semibold text-xs uppercase tracking-wider",children:"Company"}),y.jsxs("ul",{className:"space-y-2 text-xs",children:[y.jsx("li",{children:y.jsx("a",{href:"#faq",className:"hover:text-white transition-colors",children:"FAQ"})}),y.jsx("li",{children:y.jsx("a",{href:"#steps",className:"hover:text-white transition-colors",children:"Monetization"})}),y.jsx("li",{children:y.jsx("a",{href:"#hall-of-fame",className:"hover:text-white transition-colors",children:"Hall of Fame"})}),y.jsx("li",{children:y.jsx("a",{href:"https://joinautopilot.com/news",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"News & Press"})})]})]}),y.jsxs("div",{className:"md:col-span-4 space-y-3",children:[y.jsx("h4",{className:"text-white font-semibold text-xs uppercase tracking-wider",children:"Get In Touch"}),y.jsxs("ul",{className:"space-y-2 text-xs",children:[y.jsx("li",{children:y.jsxs("a",{href:"https://twitter.com/joinautopilot",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors flex items-center gap-1",children:[y.jsx("span",{children:"X / Twitter"}),y.jsx(Hi,{size:11})]})}),y.jsx("li",{children:y.jsx("a",{href:"mailto:support@joinautopilot.com",className:"hover:text-white transition-colors",children:"Contact Support"})}),y.jsx("li",{children:y.jsx("a",{href:"https://joinautopilot.com/careers",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"Careers (We're Hiring)"})}),y.jsx("li",{children:y.jsx("a",{href:"https://joinautopilot.com/app",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:text-cyan-300 transition-colors font-medium",children:"Become a Pilot"})})]})]})]}),y.jsxs("div",{className:"pt-10 space-y-4 text-[11px] leading-relaxed text-white/40",children:[y.jsxs("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 font-medium",children:[y.jsx("span",{children:"© Autopilot Holdings Corporation 2026 — All rights reserved."}),y.jsx("a",{href:"https://joinautopilot.com/privacy",className:"hover:text-white transition-colors",children:"Privacy Policy"}),y.jsx("a",{href:"https://joinautopilot.com/terms",className:"hover:text-white transition-colors",children:"Terms of Service"}),y.jsx("a",{href:"https://joinautopilot.com/adv",className:"hover:text-white transition-colors",children:"Form ADV Part 2A"}),y.jsxs("a",{href:"https://adviserinfo.sec.gov/firm/summary/331749",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors flex items-center gap-1",children:[y.jsx("span",{children:"SEC BrokerCheck / CRS (CRD #331749)"}),y.jsx(Hi,{size:10})]})]}),y.jsx("p",{children:'"Autopilot" refers to Autopilot Holdings Corporation and its wholly-owned, and separately managed subsidiaries, including Autopilot Advisers, LLC, an SEC-registered investment adviser. Registration with the SEC does not imply a certain level of skill or training.'}),y.jsx("p",{children:"All investing is subject to investment risks, including possible loss of the principal invested, and past performance is not indicative of future results. Visuals are illustrative only."}),y.jsx("p",{children:"Pilots are not employees or agents of, or supervised by Autopilot. Third-Party Pilots are not investment advisers or regulated or licensed by the SEC or other regulators, owe you no fiduciary duty, and do not provide personalized recommendations or investment advice or ensure suitability for your circumstances. Third-Party Pilots may trade the same securities they publish and could buy or sell before or after you act, may trade for their own accounts in ways that are adverse to or inconsistent with an investment in their Portfolios and receive a percentage of your subscription fees as compensation from Autopilot, creating potential conflicts of interest. Autopilot does not provide tax or legal advice and you are encouraged to consult with professionals before making investment decisions."})]})]})})}function ZE(){return ft.useEffect(()=>{const t=new J_({duration:1.2,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2});function e(i){t.raf(i),requestAnimationFrame(e)}const r=requestAnimationFrame(e);return()=>{cancelAnimationFrame(r),t.destroy()}},[]),y.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#f1f2f3] relative overflow-x-hidden selection:bg-[#f1f2f3] selection:text-black",children:[y.jsx("div",{className:"fixed inset-0 pointer-events-none opacity-20 z-0 dot-grid","aria-hidden":"true"}),y.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[y.jsx(Ay,{}),y.jsxs("main",{className:"flex-grow",children:[y.jsx(VE,{}),y.jsx(GE,{}),y.jsx(jE,{}),y.jsx(WE,{}),y.jsx(XE,{}),y.jsx(qE,{}),y.jsx(YE,{}),y.jsx(KE,{})]}),y.jsx($E,{})]})]})}eu.createRoot(document.getElementById("root")).render(y.jsx(D0.StrictMode,{children:y.jsx(ZE,{})}));
