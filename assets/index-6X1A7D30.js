function RS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function PS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var h0={exports:{}},pc={},p0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),bS=Symbol.for("react.portal"),LS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),US=Symbol.for("react.profiler"),NS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),OS=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),kS=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),rm=Symbol.iterator;function BS(n){return n===null||typeof n!="object"?null:(n=rm&&n[rm]||n["@@iterator"],typeof n=="function"?n:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,g0={};function qo(n,e,t){this.props=n,this.context=e,this.refs=g0,this.updater=t||m0}qo.prototype.isReactComponent={};qo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};qo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function v0(){}v0.prototype=qo.prototype;function Lh(n,e,t){this.props=n,this.context=e,this.refs=g0,this.updater=t||m0}var Dh=Lh.prototype=new v0;Dh.constructor=Lh;_0(Dh,qo.prototype);Dh.isPureReactComponent=!0;var sm=Array.isArray,x0=Object.prototype.hasOwnProperty,Uh={current:null},y0={key:!0,ref:!0,__self:!0,__source:!0};function S0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x0.call(e,i)&&!y0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:dl,type:n,key:s,ref:o,props:r,_owner:Uh.current}}function HS(n,e){return{$$typeof:dl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Nh(n){return typeof n=="object"&&n!==null&&n.$$typeof===dl}function VS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var om=/\/+/g;function jc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?VS(""+n.key):e.toString(36)}function hu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case dl:case bS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+jc(o,0):i,sm(r)?(t="",n!=null&&(t=n.replace(om,"$&/")+"/"),hu(r,e,t,"",function(u){return u})):r!=null&&(Nh(r)&&(r=HS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(om,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+jc(s,a);o+=hu(s,e,t,l,r)}else if(l=BS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+jc(s,a++),o+=hu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(n,e,t){if(n==null)return n;var i=[],r=0;return hu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function GS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var pn={current:null},pu={transition:null},WS={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:pu,ReactCurrentOwner:Uh};$e.Children={map:El,forEach:function(n,e,t){El(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return El(n,function(){e++}),e},toArray:function(n){return El(n,function(e){return e})||[]},only:function(n){if(!Nh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=qo;$e.Fragment=LS;$e.Profiler=US;$e.PureComponent=Lh;$e.StrictMode=DS;$e.Suspense=FS;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=_0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)x0.call(e,l)&&!y0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:dl,type:n.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(n){return n={$$typeof:IS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:NS,_context:n},n.Consumer=n};$e.createElement=S0;$e.createFactory=function(n){var e=S0.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:OS,render:n}};$e.isValidElement=Nh;$e.lazy=function(n){return{$$typeof:zS,_payload:{_status:-1,_result:n},_init:GS}};$e.memo=function(n,e){return{$$typeof:kS,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=pu.transition;pu.transition={};try{n()}finally{pu.transition=e}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(n,e){return pn.current.useCallback(n,e)};$e.useContext=function(n){return pn.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return pn.current.useDeferredValue(n)};$e.useEffect=function(n,e){return pn.current.useEffect(n,e)};$e.useId=function(){return pn.current.useId()};$e.useImperativeHandle=function(n,e,t){return pn.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return pn.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return pn.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return pn.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return pn.current.useReducer(n,e,t)};$e.useRef=function(n){return pn.current.useRef(n)};$e.useState=function(n){return pn.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return pn.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return pn.current.useTransition()};$e.version="18.2.0";p0.exports=$e;var ye=p0.exports;const M0=PS(ye),XS=RS({__proto__:null,default:M0},[ye]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=ye,YS=Symbol.for("react.element"),qS=Symbol.for("react.fragment"),$S=Object.prototype.hasOwnProperty,KS=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function E0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$S.call(e,i)&&!ZS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:YS,type:n,key:s,ref:o,props:r,_owner:KS.current}}pc.Fragment=qS;pc.jsx=E0;pc.jsxs=E0;h0.exports=pc;var fe=h0.exports,ad={},T0={exports:{}},Bn={},w0={exports:{}},A0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,k){var B=U.length;U.push(k);e:for(;0<B;){var Z=B-1>>>1,Q=U[Z];if(0<r(Q,k))U[Z]=k,U[B]=Q,B=Z;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],B=U.pop();if(B!==k){U[0]=B;e:for(var Z=0,Q=U.length,j=Q>>>1;Z<j;){var K=2*(Z+1)-1,ae=U[K],ge=K+1,ve=U[ge];if(0>r(ae,B))ge<Q&&0>r(ve,ae)?(U[Z]=ve,U[ge]=B,Z=ge):(U[Z]=ae,U[K]=B,Z=K);else if(ge<Q&&0>r(ve,B))U[Z]=ve,U[ge]=B,Z=ge;else break e}}return k}function r(U,k){var B=U.sortIndex-k.sortIndex;return B!==0?B:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,g=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=U)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(U){if(_=!1,x(U),!g)if(t(l)!==null)g=!0,z(T);else{var k=t(u);k!==null&&q(y,k.startTime-U)}}function T(U,k){g=!1,_&&(_=!1,d(b),b=-1),m=!0;var B=h;try{for(x(k),f=t(l);f!==null&&(!(f.expirationTime>k)||U&&!I());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var Q=Z(f.expirationTime<=k);k=n.unstable_now(),typeof Q=="function"?f.callback=Q:f===t(l)&&i(l),x(k)}else i(l);f=t(l)}if(f!==null)var j=!0;else{var K=t(u);K!==null&&q(y,K.startTime-k),j=!1}return j}finally{f=null,h=B,m=!1}}var w=!1,M=null,b=-1,S=5,A=-1;function I(){return!(n.unstable_now()-A<S)}function G(){if(M!==null){var U=n.unstable_now();A=U;var k=!0;try{k=M(!0,U)}finally{k?$():(w=!1,M=null)}}else w=!1}var $;if(typeof v=="function")$=function(){v(G)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,O=D.port2;D.port1.onmessage=G,$=function(){O.postMessage(null)}}else $=function(){p(G,0)};function z(U){M=U,w||(w=!0,$())}function q(U,k){b=p(function(){U(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||m||(g=!0,z(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var B=h;h=k;try{return U()}finally{h=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=h;h=U;try{return k()}finally{h=B}},n.unstable_scheduleCallback=function(U,k,B){var Z=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,U={id:c++,callback:k,priorityLevel:U,startTime:B,expirationTime:Q,sortIndex:-1},B>Z?(U.sortIndex=B,e(u,U),t(l)===null&&U===t(u)&&(_?(d(b),b=-1):_=!0,q(y,B-Z))):(U.sortIndex=Q,e(l,U),g||m||(g=!0,z(T))),U},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(U){var k=h;return function(){var B=h;h=k;try{return U.apply(this,arguments)}finally{h=B}}}})(A0);w0.exports=A0;var QS=w0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=ye,kn=QS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,Fa={};function Ds(n,e){Do(n,e),Do(n+"Capture",e)}function Do(n,e){for(Fa[n]=e,n=0;n<e.length;n++)R0.add(e[n])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am={},lm={};function eM(n){return ld.call(lm,n)?!0:ld.call(am,n)?!1:JS.test(n)?lm[n]=!0:(am[n]=!0,!1)}function tM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function nM(n,e,t,i){if(e===null||typeof e>"u"||tM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ih=/[\-:]([a-z])/g;function Oh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ih,Oh);qt[e]=new mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ih,Oh);qt[e]=new mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ih,Oh);qt[e]=new mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new mn(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Fh(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nM(e,t,r,i)&&(t=null),i||r===null?eM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),um=Symbol.iterator;function ia(n){return n===null||typeof n!="object"?null:(n=um&&n[um]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,Yc;function _a(n){if(Yc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+n}var qc=!1;function $c(n,e){if(!n||qc)return"";qc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{qc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_a(n):""}function iM(n){switch(n.tag){case 5:return _a(n.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return n=$c(n.type,!1),n;case 11:return n=$c(n.type.render,!1),n;case 1:return n=$c(n.type,!0),n;default:return""}}function dd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ro:return"Fragment";case io:return"Portal";case ud:return"Profiler";case kh:return"StrictMode";case cd:return"Suspense";case fd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b0:return(n.displayName||"Context")+".Consumer";case P0:return(n._context.displayName||"Context")+".Provider";case zh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Bh:return e=n.displayName||null,e!==null?e:dd(n.type)||"Memo";case cr:e=n._payload,n=n._init;try{return dd(n(e))}catch{}}return null}function rM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function D0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sM(n){var e=D0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wl(n){n._valueTracker||(n._valueTracker=sM(n))}function U0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=D0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Pu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function hd(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function cm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=kr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(n,e){e=e.checked,e!=null&&Fh(n,"checked",e,!1)}function pd(n,e){N0(n,e);var t=kr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?md(n,e.type,t):e.hasOwnProperty("defaultValue")&&md(n,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function fm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function md(n,e,t){(e!=="number"||Pu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ga=Array.isArray;function yo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+kr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function _d(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function dm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(ga(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:kr(t)}}function I0(n,e){var t=kr(e.value),i=kr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function hm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function O0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?O0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Al,F0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ka(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oM=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(n){oM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ma[e]=Ma[n]})});function k0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ma.hasOwnProperty(n)&&Ma[n]?(""+e).trim():e+"px"}function z0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=k0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var aM=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(n,e){if(e){if(aM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function xd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function Hh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sd=null,So=null,Mo=null;function pm(n){if(n=ml(n)){if(typeof Sd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=xc(e),Sd(n.stateNode,n.type,e))}}function B0(n){So?Mo?Mo.push(n):Mo=[n]:So=n}function H0(){if(So){var n=So,e=Mo;if(Mo=So=null,pm(n),e)for(n=0;n<e.length;n++)pm(e[n])}}function V0(n,e){return n(e)}function G0(){}var Kc=!1;function W0(n,e,t){if(Kc)return n(e,t);Kc=!0;try{return V0(n,e,t)}finally{Kc=!1,(So!==null||Mo!==null)&&(G0(),H0())}}function za(n,e){var t=n.stateNode;if(t===null)return null;var i=xc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Md=!1;if($i)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Md=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Md=!1}function lM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ea=!1,bu=null,Lu=!1,Ed=null,uM={onError:function(n){Ea=!0,bu=n}};function cM(n,e,t,i,r,s,o,a,l){Ea=!1,bu=null,lM.apply(uM,arguments)}function fM(n,e,t,i,r,s,o,a,l){if(cM.apply(this,arguments),Ea){if(Ea){var u=bu;Ea=!1,bu=null}else throw Error(ne(198));Lu||(Lu=!0,Ed=u)}}function Us(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function X0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function mm(n){if(Us(n)!==n)throw Error(ne(188))}function dM(n){var e=n.alternate;if(!e){if(e=Us(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return mm(r),n;if(s===i)return mm(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function j0(n){return n=dM(n),n!==null?Y0(n):null}function Y0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Y0(n);if(e!==null)return e;n=n.sibling}return null}var q0=kn.unstable_scheduleCallback,_m=kn.unstable_cancelCallback,hM=kn.unstable_shouldYield,pM=kn.unstable_requestPaint,wt=kn.unstable_now,mM=kn.unstable_getCurrentPriorityLevel,Vh=kn.unstable_ImmediatePriority,$0=kn.unstable_UserBlockingPriority,Du=kn.unstable_NormalPriority,_M=kn.unstable_LowPriority,K0=kn.unstable_IdlePriority,mc=null,Ri=null;function gM(n){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(mc,n,void 0,(n.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:yM,vM=Math.log,xM=Math.LN2;function yM(n){return n>>>=0,n===0?32:31-(vM(n)/xM|0)|0}var Cl=64,Rl=4194304;function va(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Uu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=va(a):(s&=o,s!==0&&(i=va(s)))}else o=t&~r,o!==0?i=va(o):s!==0&&(i=va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-pi(e),r=1<<t,i|=n[t],e&=~r;return i}function SM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=SM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Td(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Z0(){var n=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),n}function Zc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function hl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pi(e),n[e]=t}function EM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-pi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Gh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-pi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function Q0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var J0,Wh,ev,tv,nv,wd=!1,Pl=[],Tr=null,wr=null,Ar=null,Ba=new Map,Ha=new Map,hr=[],TM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(n,e){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function sa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ml(e),e!==null&&Wh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function wM(n,e,t,i,r){switch(e){case"focusin":return Tr=sa(Tr,n,e,t,i,r),!0;case"dragenter":return wr=sa(wr,n,e,t,i,r),!0;case"mouseover":return Ar=sa(Ar,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,sa(Ba.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,sa(Ha.get(s)||null,n,e,t,i,r)),!0}return!1}function iv(n){var e=as(n.target);if(e!==null){var t=Us(e);if(t!==null){if(e=t.tag,e===13){if(e=X0(t),e!==null){n.blockedOn=e,nv(n.priority,function(){ev(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ad(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);yd=i,t.target.dispatchEvent(i),yd=null}else return e=ml(t),e!==null&&Wh(e),n.blockedOn=t,!1;e.shift()}return!0}function vm(n,e,t){mu(n)&&t.delete(e)}function AM(){wd=!1,Tr!==null&&mu(Tr)&&(Tr=null),wr!==null&&mu(wr)&&(wr=null),Ar!==null&&mu(Ar)&&(Ar=null),Ba.forEach(vm),Ha.forEach(vm)}function oa(n,e){n.blockedOn===e&&(n.blockedOn=null,wd||(wd=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,AM)))}function Va(n){function e(r){return oa(r,n)}if(0<Pl.length){oa(Pl[0],n);for(var t=1;t<Pl.length;t++){var i=Pl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Tr!==null&&oa(Tr,n),wr!==null&&oa(wr,n),Ar!==null&&oa(Ar,n),Ba.forEach(e),Ha.forEach(e),t=0;t<hr.length;t++)i=hr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hr.length&&(t=hr[0],t.blockedOn===null);)iv(t),t.blockedOn===null&&hr.shift()}var Eo=nr.ReactCurrentBatchConfig,Nu=!0;function CM(n,e,t,i){var r=tt,s=Eo.transition;Eo.transition=null;try{tt=1,Xh(n,e,t,i)}finally{tt=r,Eo.transition=s}}function RM(n,e,t,i){var r=tt,s=Eo.transition;Eo.transition=null;try{tt=4,Xh(n,e,t,i)}finally{tt=r,Eo.transition=s}}function Xh(n,e,t,i){if(Nu){var r=Ad(n,e,t,i);if(r===null)lf(n,e,i,Iu,t),gm(n,i);else if(wM(r,n,e,t,i))i.stopPropagation();else if(gm(n,i),e&4&&-1<TM.indexOf(n)){for(;r!==null;){var s=ml(r);if(s!==null&&J0(s),s=Ad(n,e,t,i),s===null&&lf(n,e,i,Iu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else lf(n,e,i,null,t)}}var Iu=null;function Ad(n,e,t,i){if(Iu=null,n=Hh(i),n=as(n),n!==null)if(e=Us(n),e===null)n=null;else if(t=e.tag,t===13){if(n=X0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Iu=n,null}function rv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mM()){case Vh:return 1;case $0:return 4;case Du:case _M:return 16;case K0:return 536870912;default:return 16}default:return 16}}var mr=null,jh=null,_u=null;function sv(){if(_u)return _u;var n,e=jh,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return _u=r.slice(n,1<i?1-i:void 0)}function gu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bl(){return!0}function xm(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:xm,this.isPropagationStopped=xm,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=Hn($o),pl=gt({},$o,{view:0,detail:0}),PM=Hn(pl),Qc,Jc,aa,_c=gt({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==aa&&(aa&&n.type==="mousemove"?(Qc=n.screenX-aa.screenX,Jc=n.screenY-aa.screenY):Jc=Qc=0,aa=n),Qc)},movementY:function(n){return"movementY"in n?n.movementY:Jc}}),ym=Hn(_c),bM=gt({},_c,{dataTransfer:0}),LM=Hn(bM),DM=gt({},pl,{relatedTarget:0}),ef=Hn(DM),UM=gt({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Hn(UM),IM=gt({},$o,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),OM=Hn(IM),FM=gt({},$o,{data:0}),Sm=Hn(FM),kM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=BM[n])?!!e[n]:!1}function qh(){return HM}var VM=gt({},pl,{key:function(n){if(n.key){var e=kM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(n){return n.type==="keypress"?gu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),GM=Hn(VM),WM=gt({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Hn(WM),XM=gt({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),jM=Hn(XM),YM=gt({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=Hn(YM),$M=gt({},_c,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),KM=Hn($M),ZM=[9,13,27,32],$h=$i&&"CompositionEvent"in window,Ta=null;$i&&"documentMode"in document&&(Ta=document.documentMode);var QM=$i&&"TextEvent"in window&&!Ta,ov=$i&&(!$h||Ta&&8<Ta&&11>=Ta),Em=" ",Tm=!1;function av(n,e){switch(n){case"keyup":return ZM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function JM(n,e){switch(n){case"compositionend":return lv(e);case"keypress":return e.which!==32?null:(Tm=!0,Em);case"textInput":return n=e.data,n===Em&&Tm?null:n;default:return null}}function eE(n,e){if(so)return n==="compositionend"||!$h&&av(n,e)?(n=sv(),_u=jh=mr=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ov&&e.locale!=="ko"?null:e.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!tE[n.type]:e==="textarea"}function uv(n,e,t,i){B0(i),e=Ou(e,"onChange"),0<e.length&&(t=new Yh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var wa=null,Ga=null;function nE(n){yv(n,0)}function gc(n){var e=lo(n);if(U0(e))return n}function iE(n,e){if(n==="change")return e}var cv=!1;if($i){var tf;if($i){var nf="oninput"in document;if(!nf){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),nf=typeof Am.oninput=="function"}tf=nf}else tf=!1;cv=tf&&(!document.documentMode||9<document.documentMode)}function Cm(){wa&&(wa.detachEvent("onpropertychange",fv),Ga=wa=null)}function fv(n){if(n.propertyName==="value"&&gc(Ga)){var e=[];uv(e,Ga,n,Hh(n)),W0(nE,e)}}function rE(n,e,t){n==="focusin"?(Cm(),wa=e,Ga=t,wa.attachEvent("onpropertychange",fv)):n==="focusout"&&Cm()}function sE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(Ga)}function oE(n,e){if(n==="click")return gc(e)}function aE(n,e){if(n==="input"||n==="change")return gc(e)}function lE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gi=typeof Object.is=="function"?Object.is:lE;function Wa(n,e){if(gi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ld.call(e,r)||!gi(n[r],e[r]))return!1}return!0}function Rm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pm(n,e){var t=Rm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Rm(t)}}function dv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?dv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var n=window,e=Pu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pu(n.document)}return e}function Kh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function uE(n){var e=hv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&dv(t.ownerDocument.documentElement,t)){if(i!==null&&Kh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Pm(t,s);var o=Pm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cE=$i&&"documentMode"in document&&11>=document.documentMode,oo=null,Cd=null,Aa=null,Rd=!1;function bm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rd||oo==null||oo!==Pu(i)||(i=oo,"selectionStart"in i&&Kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Wa(Aa,i)||(Aa=i,i=Ou(Cd,"onSelect"),0<i.length&&(e=new Yh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=oo)))}function Ll(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ao={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},rf={},pv={};$i&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function vc(n){if(rf[n])return rf[n];if(!ao[n])return n;var e=ao[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in pv)return rf[n]=e[t];return n}var mv=vc("animationend"),_v=vc("animationiteration"),gv=vc("animationstart"),vv=vc("transitionend"),xv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,e){xv.set(n,e),Ds(e,[n])}for(var sf=0;sf<Lm.length;sf++){var of=Lm[sf],fE=of.toLowerCase(),dE=of[0].toUpperCase()+of.slice(1);Gr(fE,"on"+dE)}Gr(mv,"onAnimationEnd");Gr(_v,"onAnimationIteration");Gr(gv,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(vv,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Dm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,fM(i,e,void 0,n),n.currentTarget=null}function yv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dm(r,a,u),s=l}}}if(Lu)throw n=Ed,Lu=!1,Ed=null,n}function at(n,e){var t=e[Ud];t===void 0&&(t=e[Ud]=new Set);var i=n+"__bubble";t.has(i)||(Sv(e,n,2,!1),t.add(i))}function af(n,e,t){var i=0;e&&(i|=4),Sv(t,n,i,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Xa(n){if(!n[Dl]){n[Dl]=!0,R0.forEach(function(t){t!=="selectionchange"&&(hE.has(t)||af(t,!1,n),af(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,af("selectionchange",!1,e))}}function Sv(n,e,t,i){switch(rv(e)){case 1:var r=CM;break;case 4:r=RM;break;default:r=Xh}t=r.bind(null,e,t,n),r=void 0,!Md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function lf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=as(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}W0(function(){var u=s,c=Hh(t),f=[];e:{var h=xv.get(n);if(h!==void 0){var m=Yh,g=n;switch(n){case"keypress":if(gu(t)===0)break e;case"keydown":case"keyup":m=GM;break;case"focusin":g="focus",m=ef;break;case"focusout":g="blur",m=ef;break;case"beforeblur":case"afterblur":m=ef;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jM;break;case mv:case _v:case gv:m=NM;break;case vv:m=qM;break;case"scroll":m=PM;break;case"wheel":m=KM;break;case"copy":case"cut":case"paste":m=OM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mm}var _=(e&4)!==0,p=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=za(v,d),y!=null&&_.push(ja(v,y,x)))),p)break;v=v.return}0<_.length&&(h=new m(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==yd&&(g=t.relatedTarget||t.fromElement)&&(as(g)||g[Ki]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=t.relatedTarget||t.toElement,m=u,g=g?as(g):null,g!==null&&(p=Us(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(_=ym,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Mm,y="onPointerLeave",d="onPointerEnter",v="pointer"),p=m==null?h:lo(m),x=g==null?h:lo(g),h=new _(y,v+"leave",m,t,c),h.target=p,h.relatedTarget=x,y=null,as(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=p,y=_),p=y,m&&g)t:{for(_=m,d=g,v=0,x=_;x;x=Os(x))v++;for(x=0,y=d;y;y=Os(y))x++;for(;0<v-x;)_=Os(_),v--;for(;0<x-v;)d=Os(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Os(_),d=Os(d)}_=null}else _=null;m!==null&&Um(f,h,m,_,!1),g!==null&&p!==null&&Um(f,p,g,_,!0)}}e:{if(h=u?lo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=iE;else if(wm(h))if(cv)T=aE;else{T=sE;var w=rE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=oE);if(T&&(T=T(n,u))){uv(f,T,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&md(h,"number",h.value)}switch(w=u?lo(u):window,n){case"focusin":(wm(w)||w.contentEditable==="true")&&(oo=w,Cd=u,Aa=null);break;case"focusout":Aa=Cd=oo=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,bm(f,t,c);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":bm(f,t,c)}var M;if($h)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else so?av(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(ov&&t.locale!=="ko"&&(so||b!=="onCompositionStart"?b==="onCompositionEnd"&&so&&(M=sv()):(mr=c,jh="value"in mr?mr.value:mr.textContent,so=!0)),w=Ou(u,b),0<w.length&&(b=new Sm(b,n,null,t,c),f.push({event:b,listeners:w}),M?b.data=M:(M=lv(t),M!==null&&(b.data=M)))),(M=QM?JM(n,t):eE(n,t))&&(u=Ou(u,"onBeforeInput"),0<u.length&&(c=new Sm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}yv(f,e)})}function ja(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ou(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(n,t),s!=null&&i.unshift(ja(n,s,r)),s=za(n,e),s!=null&&i.push(ja(n,s,r))),n=n.return}return i}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Um(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=za(t,s),l!=null&&o.unshift(ja(t,l,a))):r||(l=za(t,s),l!=null&&o.push(ja(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function Nm(n){return(typeof n=="string"?n:""+n).replace(pE,`
`).replace(mE,"")}function Ul(n,e,t){if(e=Nm(e),Nm(n)!==e&&t)throw Error(ne(425))}function Fu(){}var Pd=null,bd=null;function Ld(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(n){return Im.resolve(null).then(n).catch(vE)}:Dd;function vE(n){setTimeout(function(){throw n})}function uf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Va(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Va(e)}function Cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Om(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ko,Ya="__reactProps$"+Ko,Ki="__reactContainer$"+Ko,Ud="__reactEvents$"+Ko,xE="__reactListeners$"+Ko,yE="__reactHandles$"+Ko;function as(n){var e=n[Ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ki]||t[Ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Om(n);n!==null;){if(t=n[Ei])return t;n=Om(n)}return e}n=t,t=n.parentNode}return null}function ml(n){return n=n[Ei]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function xc(n){return n[Ya]||null}var Nd=[],uo=-1;function Wr(n){return{current:n}}function ut(n){0>uo||(n.current=Nd[uo],Nd[uo]=null,uo--)}function st(n,e){uo++,Nd[uo]=n.current,n.current=e}var zr={},an=Wr(zr),vn=Wr(!1),Ss=zr;function Uo(n,e){var t=n.type.contextTypes;if(!t)return zr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function ku(){ut(vn),ut(an)}function Fm(n,e,t){if(an.current!==zr)throw Error(ne(168));st(an,e),st(vn,t)}function Mv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,rM(n)||"Unknown",r));return gt({},t,i)}function zu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Ss=an.current,st(an,n),st(vn,vn.current),!0}function km(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Mv(n,e,Ss),i.__reactInternalMemoizedMergedChildContext=n,ut(vn),ut(an),st(an,n)):ut(vn),st(vn,t)}var Hi=null,yc=!1,cf=!1;function Ev(n){Hi===null?Hi=[n]:Hi.push(n)}function SE(n){yc=!0,Ev(n)}function Xr(){if(!cf&&Hi!==null){cf=!0;var n=0,e=tt;try{var t=Hi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,yc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),q0(Vh,Xr),r}finally{tt=e,cf=!1}}return null}var co=[],fo=0,Bu=null,Hu=0,jn=[],Yn=0,Ms=null,Gi=1,Wi="";function ts(n,e){co[fo++]=Hu,co[fo++]=Bu,Bu=n,Hu=e}function Tv(n,e,t){jn[Yn++]=Gi,jn[Yn++]=Wi,jn[Yn++]=Ms,Ms=n;var i=Gi;n=Wi;var r=32-pi(i)-1;i&=~(1<<r),t+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-pi(e)+r|t<<r|i,Wi=s+n}else Gi=1<<s|t<<r|i,Wi=n}function Zh(n){n.return!==null&&(ts(n,1),Tv(n,1,0))}function Qh(n){for(;n===Bu;)Bu=co[--fo],co[fo]=null,Hu=co[--fo],co[fo]=null;for(;n===Ms;)Ms=jn[--Yn],jn[Yn]=null,Wi=jn[--Yn],jn[Yn]=null,Gi=jn[--Yn],jn[Yn]=null}var In=null,Un=null,ct=!1,ci=null;function wv(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function zm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,In=n,Un=Cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,In=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ms!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,In=n,Un=null,!0):!1;default:return!1}}function Id(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Od(n){if(ct){var e=Un;if(e){var t=e;if(!zm(n,e)){if(Id(n))throw Error(ne(418));e=Cr(t.nextSibling);var i=In;e&&zm(n,e)?wv(i,t):(n.flags=n.flags&-4097|2,ct=!1,In=n)}}else{if(Id(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ct=!1,In=n}}}function Bm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function Nl(n){if(n!==In)return!1;if(!ct)return Bm(n),ct=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ld(n.type,n.memoizedProps)),e&&(e=Un)){if(Id(n))throw Av(),Error(ne(418));for(;e;)wv(n,e),e=Cr(e.nextSibling)}if(Bm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=Cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=In?Cr(n.stateNode.nextSibling):null;return!0}function Av(){for(var n=Un;n;)n=Cr(n.nextSibling)}function No(){Un=In=null,ct=!1}function Jh(n){ci===null?ci=[n]:ci.push(n)}var ME=nr.ReactCurrentBatchConfig;function li(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Vu=Wr(null),Gu=null,ho=null,ep=null;function tp(){ep=ho=Gu=null}function np(n){var e=Vu.current;ut(Vu),n._currentValue=e}function Fd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function To(n,e){Gu=n,ep=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function ti(n){var e=n._currentValue;if(ep!==n)if(n={context:n,memoizedValue:e,next:null},ho===null){if(Gu===null)throw Error(ne(308));ho=n,Gu.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return e}var ls=null;function ip(n){ls===null?ls=[n]:ls.push(n)}function Cv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ip(e)):(t.next=r.next,r.next=t),e.interleaved=t,Zi(n,i)}function Zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fr=!1;function rp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(n,t)}return r=i.interleaved,r===null?(e.next=e,ip(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(n,t)}function vu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gh(n,t)}}function Hm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Wu(n,e,t,i){var r=n.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,m=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(m,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break e;f=gt({},f,h);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ts|=o,n.lanes=o,n.memoizedState=f}}function Vm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Pv=new C0.Component().refs;function kd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sc={isMounted:function(n){return(n=n._reactInternals)?Us(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=br(n),s=Yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(mi(e,n,r,i),vu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=br(n),s=Yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(mi(e,n,r,i),vu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=br(n),r=Yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(n,r,i),e!==null&&(mi(e,n,i,t),vu(e,n,i))}};function Gm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(t,i)||!Wa(r,s):!0}function bv(n,e,t){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=xn(e)?Ss:an.current,i=e.contextTypes,s=(i=i!=null)?Uo(n,r):zr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sc.enqueueReplaceState(e,e.state,null)}function zd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Pv,rp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=xn(e)?Ss:an.current,r.context=Uo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),Wu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function la(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Pv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Il(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xm(n){var e=n._init;return e(n._payload)}function Lv(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Lr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=gf(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var T=x.type;return T===ro?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cr&&Xm(T)===v.type)?(y=r(v,x.props),y.ref=la(d,v,x),y.return=d,y):(y=Tu(x.type,x.key,x.props,null,d.mode,y),y.ref=la(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=vf(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,T){return v===null||v.tag!==7?(v=ds(x,d.mode,y,T),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gf(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tl:return x=Tu(v.type,v.key,v.props,null,d.mode,x),x.ref=la(d,null,v),x.return=d,x;case io:return v=vf(v,d.mode,x),v.return=d,v;case cr:var y=v._init;return f(d,y(v._payload),x)}if(ga(v)||ia(v))return v=ds(v,d.mode,x,null),v.return=d,v;Il(d,v)}return null}function h(d,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return x.key===T?l(d,v,x,y):null;case io:return x.key===T?u(d,v,x,y):null;case cr:return T=x._init,h(d,v,T(x._payload),y)}if(ga(x)||ia(x))return T!==null?null:c(d,v,x,y,null);Il(d,x)}return null}function m(d,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tl:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,T);case io:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,T);case cr:var w=y._init;return m(d,v,x,w(y._payload),T)}if(ga(y)||ia(y))return d=d.get(x)||null,c(v,d,y,T,null);Il(v,y)}return null}function g(d,v,x,y){for(var T=null,w=null,M=v,b=v=0,S=null;M!==null&&b<x.length;b++){M.index>b?(S=M,M=null):S=M.sibling;var A=h(d,M,x[b],y);if(A===null){M===null&&(M=S);break}n&&M&&A.alternate===null&&e(d,M),v=s(A,v,b),w===null?T=A:w.sibling=A,w=A,M=S}if(b===x.length)return t(d,M),ct&&ts(d,b),T;if(M===null){for(;b<x.length;b++)M=f(d,x[b],y),M!==null&&(v=s(M,v,b),w===null?T=M:w.sibling=M,w=M);return ct&&ts(d,b),T}for(M=i(d,M);b<x.length;b++)S=m(M,d,b,x[b],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?b:S.key),v=s(S,v,b),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(I){return e(d,I)}),ct&&ts(d,b),T}function _(d,v,x,y){var T=ia(x);if(typeof T!="function")throw Error(ne(150));if(x=T.call(x),x==null)throw Error(ne(151));for(var w=T=null,M=v,b=v=0,S=null,A=x.next();M!==null&&!A.done;b++,A=x.next()){M.index>b?(S=M,M=null):S=M.sibling;var I=h(d,M,A.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(d,M),v=s(I,v,b),w===null?T=I:w.sibling=I,w=I,M=S}if(A.done)return t(d,M),ct&&ts(d,b),T;if(M===null){for(;!A.done;b++,A=x.next())A=f(d,A.value,y),A!==null&&(v=s(A,v,b),w===null?T=A:w.sibling=A,w=A);return ct&&ts(d,b),T}for(M=i(d,M);!A.done;b++,A=x.next())A=m(M,d,b,A.value,y),A!==null&&(n&&A.alternate!==null&&M.delete(A.key===null?b:A.key),v=s(A,v,b),w===null?T=A:w.sibling=A,w=A);return n&&M.forEach(function(G){return e(d,G)}),ct&&ts(d,b),T}function p(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ro&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===ro){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cr&&Xm(T)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=la(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===ro?(v=ds(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Tu(x.type,x.key,x.props,null,d.mode,y),y.ref=la(d,v,x),y.return=d,d=y)}return o(d);case io:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=vf(x,d.mode,y),v.return=d,d=v}return o(d);case cr:return w=x._init,p(d,v,w(x._payload),y)}if(ga(x))return g(d,v,x,y);if(ia(x))return _(d,v,x,y);Il(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=gf(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return p}var Io=Lv(!0),Dv=Lv(!1),_l={},Pi=Wr(_l),qa=Wr(_l),$a=Wr(_l);function us(n){if(n===_l)throw Error(ne(174));return n}function sp(n,e){switch(st($a,e),st(qa,n),st(Pi,_l),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gd(e,n)}ut(Pi),st(Pi,e)}function Oo(){ut(Pi),ut(qa),ut($a)}function Uv(n){us($a.current);var e=us(Pi.current),t=gd(e,n.type);e!==t&&(st(qa,n),st(Pi,t))}function op(n){qa.current===n&&(ut(Pi),ut(qa))}var ht=Wr(0);function Xu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ff=[];function ap(){for(var n=0;n<ff.length;n++)ff[n]._workInProgressVersionPrimary=null;ff.length=0}var xu=nr.ReactCurrentDispatcher,df=nr.ReactCurrentBatchConfig,Es=0,_t=null,Lt=null,kt=null,ju=!1,Ca=!1,Ka=0,EE=0;function Kt(){throw Error(ne(321))}function lp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gi(n[t],e[t]))return!1;return!0}function up(n,e,t,i,r,s){if(Es=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xu.current=n===null||n.memoizedState===null?CE:RE,n=t(i,r),Ca){s=0;do{if(Ca=!1,Ka=0,25<=s)throw Error(ne(301));s+=1,kt=Lt=null,e.updateQueue=null,xu.current=PE,n=t(i,r)}while(Ca)}if(xu.current=Yu,e=Lt!==null&&Lt.next!==null,Es=0,kt=Lt=_t=null,ju=!1,e)throw Error(ne(300));return n}function cp(){var n=Ka!==0;return Ka=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?_t.memoizedState=kt=n:kt=kt.next=n,kt}function ni(){if(Lt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=kt===null?_t.memoizedState:kt.next;if(e!==null)kt=e,Lt=n;else{if(n===null)throw Error(ne(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?_t.memoizedState=kt=n:kt=kt.next=n}return kt}function Za(n,e){return typeof e=="function"?e(n):e}function hf(n){var e=ni(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=c,Ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,Ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pf(n){var e=ni(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Nv(){}function Iv(n,e){var t=_t,i=ni(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,fp(kv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(t.flags|=2048,Qa(9,Fv.bind(null,t,i,r,e),void 0,null),Ht===null)throw Error(ne(349));Es&30||Ov(t,e,r)}return r}function Ov(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Fv(n,e,t,i){e.value=t,e.getSnapshot=i,zv(e)&&Bv(n)}function kv(n,e,t){return t(function(){zv(e)&&Bv(n)})}function zv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gi(n,t)}catch{return!0}}function Bv(n){var e=Zi(n,1);e!==null&&mi(e,n,1,-1)}function jm(n){var e=yi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},e.queue=n,n=n.dispatch=AE.bind(null,_t,n),[e.memoizedState,n]}function Qa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Hv(){return ni().memoizedState}function yu(n,e,t,i){var r=yi();_t.flags|=n,r.memoizedState=Qa(1|e,t,void 0,i===void 0?null:i)}function Mc(n,e,t,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&lp(i,o.deps)){r.memoizedState=Qa(e,t,s,i);return}}_t.flags|=n,r.memoizedState=Qa(1|e,t,s,i)}function Ym(n,e){return yu(8390656,8,n,e)}function fp(n,e){return Mc(2048,8,n,e)}function Vv(n,e){return Mc(4,2,n,e)}function Gv(n,e){return Mc(4,4,n,e)}function Wv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xv(n,e,t){return t=t!=null?t.concat([n]):null,Mc(4,4,Wv.bind(null,e,n),t)}function dp(){}function jv(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Yv(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&lp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function qv(n,e,t){return Es&21?(gi(t,e)||(t=Z0(),_t.lanes|=t,Ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function TE(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=df.transition;df.transition={};try{n(!1),e()}finally{tt=t,df.transition=i}}function $v(){return ni().memoizedState}function wE(n,e,t){var i=br(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Kv(n))Zv(e,t);else if(t=Cv(n,e,t,i),t!==null){var r=hn();mi(t,n,i,r),Qv(t,e,i)}}function AE(n,e,t){var i=br(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kv(n))Zv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,ip(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Cv(n,e,r,i),t!==null&&(r=hn(),mi(t,n,i,r),Qv(t,e,i))}}function Kv(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function Zv(n,e){Ca=ju=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Qv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gh(n,t)}}var Yu={readContext:ti,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},CE={readContext:ti,useCallback:function(n,e){return yi().memoizedState=[n,e===void 0?null:e],n},useContext:ti,useEffect:Ym,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,yu(4194308,4,Wv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return yu(4194308,4,n,e)},useInsertionEffect:function(n,e){return yu(4,2,n,e)},useMemo:function(n,e){var t=yi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=yi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=wE.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=yi();return n={current:n},e.memoizedState=n},useState:jm,useDebugValue:dp,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=jm(!1),e=n[0];return n=TE.bind(null,n[1]),yi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=yi();if(ct){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Ht===null)throw Error(ne(349));Es&30||Ov(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ym(kv.bind(null,i,s,n),[n]),i.flags|=2048,Qa(9,Fv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=yi(),e=Ht.identifierPrefix;if(ct){var t=Wi,i=Gi;t=(i&~(1<<32-pi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ka++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=EE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},RE={readContext:ti,useCallback:jv,useContext:ti,useEffect:fp,useImperativeHandle:Xv,useInsertionEffect:Vv,useLayoutEffect:Gv,useMemo:Yv,useReducer:hf,useRef:Hv,useState:function(){return hf(Za)},useDebugValue:dp,useDeferredValue:function(n){var e=ni();return qv(e,Lt.memoizedState,n)},useTransition:function(){var n=hf(Za)[0],e=ni().memoizedState;return[n,e]},useMutableSource:Nv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1},PE={readContext:ti,useCallback:jv,useContext:ti,useEffect:fp,useImperativeHandle:Xv,useInsertionEffect:Vv,useLayoutEffect:Gv,useMemo:Yv,useReducer:pf,useRef:Hv,useState:function(){return pf(Za)},useDebugValue:dp,useDeferredValue:function(n){var e=ni();return Lt===null?e.memoizedState=n:qv(e,Lt.memoizedState,n)},useTransition:function(){var n=pf(Za)[0],e=ni().memoizedState;return[n,e]},useMutableSource:Nv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1};function Fo(n,e){try{var t="",i=e;do t+=iM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function mf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bE=typeof WeakMap=="function"?WeakMap:Map;function Jv(n,e,t){t=Yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$u||($u=!0,Kd=i),Bd(n,e)},t}function ex(n,e,t){t=Yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bd(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function qm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=WE.bind(null,n,e,t),e.then(n,n))}function $m(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Km(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yi(-1,1),e.tag=2,Rr(t,e,1))),t.lanes|=1),n)}var LE=nr.ReactCurrentOwner,gn=!1;function cn(n,e,t,i){e.child=n===null?Dv(e,null,t,i):Io(e,n.child,t,i)}function Zm(n,e,t,i,r){t=t.render;var s=e.ref;return To(e,r),i=up(n,e,t,i,s,r),t=cp(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qi(n,e,r)):(ct&&t&&Zh(e),e.flags|=1,cn(n,e,i,r),e.child)}function Qm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!yp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,tx(n,e,s,i,r)):(n=Tu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Wa,t(o,i)&&n.ref===e.ref)return Qi(n,e,r)}return e.flags|=1,n=Lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function tx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Wa(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,Qi(n,e,r)}return Hd(n,e,t,i,r)}function nx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(mo,bn),bn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(mo,bn),bn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(mo,bn),bn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(mo,bn),bn|=i;return cn(n,e,r,t),e.child}function ix(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hd(n,e,t,i,r){var s=xn(t)?Ss:an.current;return s=Uo(e,s),To(e,r),t=up(n,e,t,i,s,r),i=cp(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qi(n,e,r)):(ct&&i&&Zh(e),e.flags|=1,cn(n,e,t,r),e.child)}function Jm(n,e,t,i,r){if(xn(t)){var s=!0;zu(e)}else s=!1;if(To(e,r),e.stateNode===null)Su(n,e),bv(e,t,i),zd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ti(u):(u=xn(t)?Ss:an.current,u=Uo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Wm(e,o,i,u),fr=!1;var h=e.memoizedState;o.state=h,Wu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||fr?(typeof c=="function"&&(kd(e,t,c,i),l=e.memoizedState),(a=fr||Gm(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:li(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=xn(t)?Ss:an.current,l=Uo(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Wm(e,o,i,l),fr=!1,h=e.memoizedState,o.state=h,Wu(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||vn.current||fr?(typeof m=="function"&&(kd(e,t,m,i),g=e.memoizedState),(u=fr||Gm(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Vd(n,e,t,i,s,r)}function Vd(n,e,t,i,r,s){ix(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&km(e,t,!1),Qi(n,e,s);i=e.stateNode,LE.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Io(e,n.child,null,s),e.child=Io(e,null,a,s)):cn(n,e,a,s),e.memoizedState=i.state,r&&km(e,t,!0),e.child}function rx(n){var e=n.stateNode;e.pendingContext?Fm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(n,e.context,!1),sp(n,e.containerInfo)}function e_(n,e,t,i,r){return No(),Jh(r),e.flags|=256,cn(n,e,t,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Wd(n){return{baseLanes:n,cachePool:null,transitions:null}}function sx(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(ht,r&1),n===null)return Od(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,i,0,null),n=ds(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wd(t),e.memoizedState=Gd,n):hp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return DE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=ds(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Wd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Gd,i}return s=n.child,n=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function hp(n,e){return e=wc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ol(n,e,t,i){return i!==null&&Jh(i),Io(e,n.child,null,t),n=hp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function DE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=mf(Error(ne(422))),Ol(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Io(e,n.child,null,o),e.child.memoizedState=Wd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return Ol(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=mf(s,i,void 0),Ol(n,e,o,i)}if(a=(o&n.childLanes)!==0,gn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(n,r),mi(i,n,r,-1))}return xp(),i=mf(Error(ne(421))),Ol(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=XE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=Cr(r.nextSibling),In=e,ct=!0,ci=null,n!==null&&(jn[Yn++]=Gi,jn[Yn++]=Wi,jn[Yn++]=Ms,Gi=n.id,Wi=n.overflow,Ms=e),e=hp(e,i.children),e.flags|=4096,e)}function t_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fd(n.return,e,t)}function _f(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ox(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&t_(n,t,e);else if(n.tag===19)t_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Xu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),_f(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Xu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}_f(e,!0,t,null,s);break;case"together":_f(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Su(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function UE(n,e,t){switch(e.tag){case 3:rx(e),No();break;case 5:Uv(e);break;case 1:xn(e.type)&&zu(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Vu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?sx(n,e,t):(st(ht,ht.current&1),n=Qi(n,e,t),n!==null?n.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ox(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(n,e,t)}return Qi(n,e,t)}var ax,Xd,lx,ux;ax=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xd=function(){};lx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,us(Pi.current);var s=null;switch(t){case"input":r=hd(n,r),i=hd(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=_d(n,r),i=_d(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Fu)}vd(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ux=function(n,e,t,i){t!==i&&(e.flags|=4)};function ua(n,e){if(!ct)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function NE(n,e,t){var i=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return xn(e.type)&&ku(),Zt(e),null;case 3:return i=e.stateNode,Oo(),ut(vn),ut(an),ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Nl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Jd(ci),ci=null))),Xd(n,e),Zt(e),null;case 5:op(e);var r=us($a.current);if(t=e.type,n!==null&&e.stateNode!=null)lx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Zt(e),null}if(n=us(Pi.current),Nl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ya]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)at(xa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":cm(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":dm(i,s),at("invalid",i)}vd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,n),r=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":wl(i),fm(i,s,!0);break;case"textarea":wl(i),hm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=O0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ei]=e,n[Ya]=i,ax(n,e,!1,!1),e.stateNode=n;e:{switch(o=xd(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)at(xa[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":cm(n,i),r=hd(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",n);break;case"textarea":dm(n,i),r=_d(n,i),at("invalid",n);break;default:r=i}vd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?z0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&F0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ka(n,l):typeof l=="number"&&ka(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&Fh(n,s,l,o))}switch(t){case"input":wl(n),fm(n,i,!1);break;case"textarea":wl(n),hm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+kr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?yo(n,!!i.multiple,s,!1):i.defaultValue!=null&&yo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Fu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(n&&e.stateNode!=null)ux(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=us($a.current),us(Pi.current),Nl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==t)&&(n=In,n!==null))switch(n.tag){case 3:Ul(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ul(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return Zt(e),null;case 13:if(ut(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ct&&Un!==null&&e.mode&1&&!(e.flags&128))Av(),No(),e.flags|=98560,s=!1;else if(s=Nl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Ei]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ci!==null&&(Jd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Dt===0&&(Dt=3):xp())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Oo(),Xd(n,e),n===null&&Xa(e.stateNode.containerInfo),Zt(e),null;case 10:return np(e.type._context),Zt(e),null;case 17:return xn(e.type)&&ku(),Zt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Dt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Xu(n),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>ko&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(n=Xu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Zt(e),null}else 2*wt()-s.renderingStartTime>ko&&t!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=ht.current,st(ht,i?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return vp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function IE(n,e){switch(Qh(e),e.tag){case 1:return xn(e.type)&&ku(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Oo(),ut(vn),ut(an),ap(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return op(e),null;case 13:if(ut(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));No()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ut(ht),null;case 4:return Oo(),null;case 10:return np(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var Fl=!1,en=!1,OE=typeof WeakSet=="function"?WeakSet:Set,pe=null;function po(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function jd(n,e,t){try{t()}catch(i){yt(n,e,i)}}var n_=!1;function FE(n,e){if(Pd=Nu,n=hv(),Kh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bd={focusedElem:n,selectionRange:t},Nu=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,p=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:li(e.type,_),p);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=n_,n_=!1,g}function Ra(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,t,s)}r=r.next}while(r!==i)}}function Ec(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function cx(n){var e=n.alternate;e!==null&&(n.alternate=null,cx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ei],delete e[Ya],delete e[Ud],delete e[xE],delete e[yE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fx(n){return n.tag===5||n.tag===3||n.tag===4}function i_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Fu));else if(i!==4&&(n=n.child,n!==null))for(qd(n,e,t),n=n.sibling;n!==null;)qd(n,e,t),n=n.sibling}function $d(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for($d(n,e,t),n=n.sibling;n!==null;)$d(n,e,t),n=n.sibling}var Wt=null,ui=!1;function rr(n,e,t){for(t=t.child;t!==null;)dx(n,e,t),t=t.sibling}function dx(n,e,t){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(mc,t)}catch{}switch(t.tag){case 5:en||po(t,e);case 6:var i=Wt,r=ui;Wt=null,rr(n,e,t),Wt=i,ui=r,Wt!==null&&(ui?(n=Wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Wt.removeChild(t.stateNode));break;case 18:Wt!==null&&(ui?(n=Wt,t=t.stateNode,n.nodeType===8?uf(n.parentNode,t):n.nodeType===1&&uf(n,t),Va(n)):uf(Wt,t.stateNode));break;case 4:i=Wt,r=ui,Wt=t.stateNode.containerInfo,ui=!0,rr(n,e,t),Wt=i,ui=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(t,e,o),r=r.next}while(r!==i)}rr(n,e,t);break;case 1:if(!en&&(po(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}rr(n,e,t);break;case 21:rr(n,e,t);break;case 22:t.mode&1?(en=(i=en)||t.memoizedState!==null,rr(n,e,t),en=i):rr(n,e,t);break;default:rr(n,e,t)}}function r_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new OE),e.forEach(function(i){var r=jE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ri(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ui=!1;break e;case 3:Wt=a.stateNode.containerInfo,ui=!0;break e;case 4:Wt=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(Wt===null)throw Error(ne(160));dx(s,o,r),Wt=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hx(e,n),e=e.sibling}function hx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(e,n),xi(n),i&4){try{Ra(3,n,n.return),Ec(3,n)}catch(_){yt(n,n.return,_)}try{Ra(5,n,n.return)}catch(_){yt(n,n.return,_)}}break;case 1:ri(e,n),xi(n),i&512&&t!==null&&po(t,t.return);break;case 5:if(ri(e,n),xi(n),i&512&&t!==null&&po(t,t.return),n.flags&32){var r=n.stateNode;try{ka(r,"")}catch(_){yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N0(r,s),xd(a,o);var u=xd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?z0(r,f):c==="dangerouslySetInnerHTML"?F0(r,f):c==="children"?ka(r,f):Fh(r,c,f,u)}switch(a){case"input":pd(r,s);break;case"textarea":I0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?yo(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?yo(r,!!s.multiple,s.defaultValue,!0):yo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(_){yt(n,n.return,_)}}break;case 6:if(ri(e,n),xi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){yt(n,n.return,_)}}break;case 3:if(ri(e,n),xi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(_){yt(n,n.return,_)}break;case 4:ri(e,n),xi(n);break;case 13:ri(e,n),xi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_p=wt())),i&4&&r_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(en=(u=en)||c,ri(e,n),en=u):ri(e,n),xi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(pe=n,c=n.child;c!==null;){for(f=pe=c;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ra(4,h,h.return);break;case 1:po(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){yt(i,t,_)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){o_(f);continue}}m!==null?(m.return=h,pe=m):o_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=k0("display",o))}catch(_){yt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){yt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ri(e,n),xi(n),i&4&&r_(n);break;case 21:break;default:ri(e,n),xi(n)}}function xi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(fx(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=i_(n);$d(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=i_(n);qd(n,a,o);break;default:throw Error(ne(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function kE(n,e,t){pe=n,px(n)}function px(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Fl;var u=en;if(Fl=o,(en=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?a_(r):l!==null?(l.return=o,pe=l):a_(r);for(;s!==null;)pe=s,px(s),s=s.sibling;pe=r,Fl=a,en=u}s_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):s_(n)}}function s_(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:li(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Vm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}en||e.flags&512&&Yd(e)}catch(h){yt(e,e.return,h)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function o_(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function a_(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ec(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Yd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Yd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var zE=Math.ceil,qu=nr.ReactCurrentDispatcher,pp=nr.ReactCurrentOwner,ei=nr.ReactCurrentBatchConfig,Qe=0,Ht=null,Pt=null,jt=0,bn=0,mo=Wr(0),Dt=0,Ja=null,Ts=0,Tc=0,mp=0,Pa=null,_n=null,_p=0,ko=1/0,zi=null,$u=!1,Kd=null,Pr=null,kl=!1,_r=null,Ku=0,ba=0,Zd=null,Mu=-1,Eu=0;function hn(){return Qe&6?wt():Mu!==-1?Mu:Mu=wt()}function br(n){return n.mode&1?Qe&2&&jt!==0?jt&-jt:ME.transition!==null?(Eu===0&&(Eu=Z0()),Eu):(n=tt,n!==0||(n=window.event,n=n===void 0?16:rv(n.type)),n):1}function mi(n,e,t,i){if(50<ba)throw ba=0,Zd=null,Error(ne(185));hl(n,t,i),(!(Qe&2)||n!==Ht)&&(n===Ht&&(!(Qe&2)&&(Tc|=t),Dt===4&&pr(n,jt)),yn(n,i),t===1&&Qe===0&&!(e.mode&1)&&(ko=wt()+500,yc&&Xr()))}function yn(n,e){var t=n.callbackNode;MM(n,e);var i=Uu(n,n===Ht?jt:0);if(i===0)t!==null&&_m(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&_m(t),e===1)n.tag===0?SE(l_.bind(null,n)):Ev(l_.bind(null,n)),gE(function(){!(Qe&6)&&Xr()}),t=null;else{switch(Q0(i)){case 1:t=Vh;break;case 4:t=$0;break;case 16:t=Du;break;case 536870912:t=K0;break;default:t=Du}t=Mx(t,mx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function mx(n,e){if(Mu=-1,Eu=0,Qe&6)throw Error(ne(327));var t=n.callbackNode;if(wo()&&n.callbackNode!==t)return null;var i=Uu(n,n===Ht?jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Zu(n,i);else{e=i;var r=Qe;Qe|=2;var s=gx();(Ht!==n||jt!==e)&&(zi=null,ko=wt()+500,fs(n,e));do try{VE();break}catch(a){_x(n,a)}while(!0);tp(),qu.current=s,Qe=r,Pt!==null?e=0:(Ht=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=Td(n),r!==0&&(i=r,e=Qd(n,r))),e===1)throw t=Ja,fs(n,0),pr(n,i),yn(n,wt()),t;if(e===6)pr(n,i);else{if(r=n.current.alternate,!(i&30)&&!BE(r)&&(e=Zu(n,i),e===2&&(s=Td(n),s!==0&&(i=s,e=Qd(n,s))),e===1))throw t=Ja,fs(n,0),pr(n,i),yn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ns(n,_n,zi);break;case 3:if(pr(n,i),(i&130023424)===i&&(e=_p+500-wt(),10<e)){if(Uu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Dd(ns.bind(null,n,_n,zi),e);break}ns(n,_n,zi);break;case 4:if(pr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zE(i/1960))-i,10<i){n.timeoutHandle=Dd(ns.bind(null,n,_n,zi),i);break}ns(n,_n,zi);break;case 5:ns(n,_n,zi);break;default:throw Error(ne(329))}}}return yn(n,wt()),n.callbackNode===t?mx.bind(null,n):null}function Qd(n,e){var t=Pa;return n.current.memoizedState.isDehydrated&&(fs(n,e).flags|=256),n=Zu(n,e),n!==2&&(e=_n,_n=t,e!==null&&Jd(e)),n}function Jd(n){_n===null?_n=n:_n.push.apply(_n,n)}function BE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(n,e){for(e&=~mp,e&=~Tc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pi(e),i=1<<t;n[t]=-1,e&=~i}}function l_(n){if(Qe&6)throw Error(ne(327));wo();var e=Uu(n,0);if(!(e&1))return yn(n,wt()),null;var t=Zu(n,e);if(n.tag!==0&&t===2){var i=Td(n);i!==0&&(e=i,t=Qd(n,i))}if(t===1)throw t=Ja,fs(n,0),pr(n,e),yn(n,wt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ns(n,_n,zi),yn(n,wt()),null}function gp(n,e){var t=Qe;Qe|=1;try{return n(e)}finally{Qe=t,Qe===0&&(ko=wt()+500,yc&&Xr())}}function ws(n){_r!==null&&_r.tag===0&&!(Qe&6)&&wo();var e=Qe;Qe|=1;var t=ei.transition,i=tt;try{if(ei.transition=null,tt=1,n)return n()}finally{tt=i,ei.transition=t,Qe=e,!(Qe&6)&&Xr()}}function vp(){bn=mo.current,ut(mo)}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,_E(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(Qh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ku();break;case 3:Oo(),ut(vn),ut(an),ap();break;case 5:op(i);break;case 4:Oo();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:np(i.type._context);break;case 22:case 23:vp()}t=t.return}if(Ht=n,Pt=n=Lr(n.current,null),jt=bn=e,Dt=0,Ja=null,mp=Tc=Ts=0,_n=Pa=null,ls!==null){for(e=0;e<ls.length;e++)if(t=ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ls=null}return n}function _x(n,e){do{var t=Pt;try{if(tp(),xu.current=Yu,ju){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ju=!1}if(Es=0,kt=Lt=_t=null,Ca=!1,Ka=0,pp.current=null,t===null||t.return===null){Dt=1,Ja=e,Pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=$m(o);if(m!==null){m.flags&=-257,Km(m,o,a,s,e),m.mode&1&&qm(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){qm(s,u,e),xp();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var p=$m(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Km(p,o,a,s,e),Jh(Fo(l,a));break e}}s=l=Fo(l,a),Dt!==4&&(Dt=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Jv(s,l,e);Hm(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Pr===null||!Pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ex(s,a,e);Hm(s,y);break e}}s=s.return}while(s!==null)}xx(t)}catch(T){e=T,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function gx(){var n=qu.current;return qu.current=Yu,n===null?Yu:n}function xp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ht===null||!(Ts&268435455)&&!(Tc&268435455)||pr(Ht,jt)}function Zu(n,e){var t=Qe;Qe|=2;var i=gx();(Ht!==n||jt!==e)&&(zi=null,fs(n,e));do try{HE();break}catch(r){_x(n,r)}while(!0);if(tp(),Qe=t,qu.current=i,Pt!==null)throw Error(ne(261));return Ht=null,jt=0,Dt}function HE(){for(;Pt!==null;)vx(Pt)}function VE(){for(;Pt!==null&&!hM();)vx(Pt)}function vx(n){var e=Sx(n.alternate,n,bn);n.memoizedProps=n.pendingProps,e===null?xx(n):Pt=e,pp.current=null}function xx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=IE(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Dt=6,Pt=null;return}}else if(t=NE(t,e,bn),t!==null){Pt=t;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);Dt===0&&(Dt=5)}function ns(n,e,t){var i=tt,r=ei.transition;try{ei.transition=null,tt=1,GE(n,e,t,i)}finally{ei.transition=r,tt=i}return null}function GE(n,e,t,i){do wo();while(_r!==null);if(Qe&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(EM(n,s),n===Ht&&(Pt=Ht=null,jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||kl||(kl=!0,Mx(Du,function(){return wo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ei.transition,ei.transition=null;var o=tt;tt=1;var a=Qe;Qe|=4,pp.current=null,FE(n,t),hx(t,n),uE(bd),Nu=!!Pd,bd=Pd=null,n.current=t,kE(t),pM(),Qe=a,tt=o,ei.transition=s}else n.current=t;if(kl&&(kl=!1,_r=n,Ku=r),s=n.pendingLanes,s===0&&(Pr=null),gM(t.stateNode),yn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($u)throw $u=!1,n=Kd,Kd=null,n;return Ku&1&&n.tag!==0&&wo(),s=n.pendingLanes,s&1?n===Zd?ba++:(ba=0,Zd=n):ba=0,Xr(),null}function wo(){if(_r!==null){var n=Q0(Ku),e=ei.transition,t=tt;try{if(ei.transition=null,tt=16>n?16:n,_r===null)var i=!1;else{if(n=_r,_r=null,Ku=0,Qe&6)throw Error(ne(331));var r=Qe;for(Qe|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:Ra(8,c,s)}var f=c.child;if(f!==null)f.return=c,pe=f;else for(;pe!==null;){c=pe;var h=c.sibling,m=c.return;if(cx(c),c===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var v=n.current;for(pe=v;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(T){yt(a,a.return,T)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Qe=r,Xr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(mc,n)}catch{}i=!0}return i}finally{tt=t,ei.transition=e}}return!1}function u_(n,e,t){e=Fo(t,e),e=Jv(n,e,1),n=Rr(n,e,1),e=hn(),n!==null&&(hl(n,1,e),yn(n,e))}function yt(n,e,t){if(n.tag===3)u_(n,n,t);else for(;e!==null;){if(e.tag===3){u_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=Fo(t,n),n=ex(e,n,1),e=Rr(e,n,1),n=hn(),e!==null&&(hl(e,1,n),yn(e,n));break}}e=e.return}}function WE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Ht===n&&(jt&t)===t&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>wt()-_p?fs(n,0):mp|=t),yn(n,e)}function yx(n,e){e===0&&(n.mode&1?(e=Rl,Rl<<=1,!(Rl&130023424)&&(Rl=4194304)):e=1);var t=hn();n=Zi(n,e),n!==null&&(hl(n,e,t),yn(n,t))}function XE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),yx(n,t)}function jE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),yx(n,t)}var Sx;Sx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,UE(n,e,t);gn=!!(n.flags&131072)}else gn=!1,ct&&e.flags&1048576&&Tv(e,Hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Su(n,e),n=e.pendingProps;var r=Uo(e,an.current);To(e,t),r=up(null,e,i,n,r,t);var s=cp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,zu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rp(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,zd(e,i,n,t),e=Vd(null,e,i,!0,s,t)):(e.tag=0,ct&&s&&Zh(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Su(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qE(i),n=li(i,n),r){case 0:e=Hd(null,e,i,n,t);break e;case 1:e=Jm(null,e,i,n,t);break e;case 11:e=Zm(null,e,i,n,t);break e;case 14:e=Qm(null,e,i,li(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Jm(n,e,i,r,t);case 3:e:{if(rx(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rv(n,e),Wu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fo(Error(ne(423)),e),e=e_(n,e,i,t,r);break e}else if(i!==r){r=Fo(Error(ne(424)),e),e=e_(n,e,i,t,r);break e}else for(Un=Cr(e.stateNode.containerInfo.firstChild),In=e,ct=!0,ci=null,t=Dv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(No(),i===r){e=Qi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return Uv(e),n===null&&Od(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ld(i,r)?o=null:s!==null&&Ld(i,s)&&(e.flags|=32),ix(n,e),cn(n,e,o,t),e.child;case 6:return n===null&&Od(e),null;case 13:return sx(n,e,t);case 4:return sp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Io(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Zm(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Vu,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!vn.current){e=Qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,To(e,t),r=ti(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),Qm(n,e,i,r,t);case 15:return tx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Su(n,e),e.tag=1,xn(i)?(n=!0,zu(e)):n=!1,To(e,t),bv(e,i,r),zd(e,i,r,t),Vd(null,e,i,!0,n,t);case 19:return ox(n,e,t);case 22:return nx(n,e,t)}throw Error(ne(156,e.tag))};function Mx(n,e){return q0(n,e)}function YE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new YE(n,e,t,i)}function yp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qE(n){if(typeof n=="function")return yp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===zh)return 11;if(n===Bh)return 14}return 2}function Lr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Tu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")yp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ro:return ds(t.children,r,s,e);case kh:o=8,r|=8;break;case ud:return n=Zn(12,t,e,r|2),n.elementType=ud,n.lanes=s,n;case cd:return n=Zn(13,t,e,r),n.elementType=cd,n.lanes=s,n;case fd:return n=Zn(19,t,e,r),n.elementType=fd,n.lanes=s,n;case L0:return wc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P0:o=10;break e;case b0:o=9;break e;case zh:o=11;break e;case Bh:o=14;break e;case cr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ds(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function wc(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=L0,n.lanes=t,n.stateNode={isHidden:!1},n}function gf(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function vf(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function $E(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sp(n,e,t,i,r,s,o,a,l){return n=new $E(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(s),n}function KE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ex(n){if(!n)return zr;n=n._reactInternals;e:{if(Us(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(xn(t))return Mv(n,t,e)}return e}function Tx(n,e,t,i,r,s,o,a,l){return n=Sp(t,i,!0,n,r,s,o,a,l),n.context=Ex(null),t=n.current,i=hn(),r=br(t),s=Yi(i,r),s.callback=e??null,Rr(t,s,r),n.current.lanes=r,hl(n,r,i),yn(n,i),n}function Ac(n,e,t,i){var r=e.current,s=hn(),o=br(r);return t=Ex(t),e.context===null?e.context=t:e.pendingContext=t,e=Yi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rr(r,e,o),n!==null&&(mi(n,r,o,s),vu(n,r,o)),o}function Qu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function c_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Mp(n,e){c_(n,e),(n=n.alternate)&&c_(n,e)}function ZE(){return null}var wx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ep(n){this._internalRoot=n}Cc.prototype.render=Ep.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ac(n,e,null,null)};Cc.prototype.unmount=Ep.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ws(function(){Ac(null,n,null,null)}),e[Ki]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=tv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hr.length&&e!==0&&e<hr[t].priority;t++);hr.splice(t,0,n),t===0&&iv(n)}};function Tp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function f_(){}function QE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Qu(o);s.call(u)}}var o=Tx(e,i,n,0,null,!1,!1,"",f_);return n._reactRootContainer=o,n[Ki]=o.current,Xa(n.nodeType===8?n.parentNode:n),ws(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Qu(l);a.call(u)}}var l=Sp(n,0,!1,null,null,!1,!1,"",f_);return n._reactRootContainer=l,n[Ki]=l.current,Xa(n.nodeType===8?n.parentNode:n),ws(function(){Ac(e,l,t,i)}),l}function Pc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qu(o);a.call(l)}}Ac(e,o,n,r)}else o=QE(t,e,n,r,i);return Qu(o)}J0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=va(e.pendingLanes);t!==0&&(Gh(e,t|1),yn(e,wt()),!(Qe&6)&&(ko=wt()+500,Xr()))}break;case 13:ws(function(){var i=Zi(n,1);if(i!==null){var r=hn();mi(i,n,1,r)}}),Mp(n,1)}};Wh=function(n){if(n.tag===13){var e=Zi(n,134217728);if(e!==null){var t=hn();mi(e,n,134217728,t)}Mp(n,134217728)}};ev=function(n){if(n.tag===13){var e=br(n),t=Zi(n,e);if(t!==null){var i=hn();mi(t,n,e,i)}Mp(n,e)}};tv=function(){return tt};nv=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};Sd=function(n,e,t){switch(e){case"input":if(pd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xc(i);if(!r)throw Error(ne(90));U0(i),pd(i,r)}}}break;case"textarea":I0(n,t);break;case"select":e=t.value,e!=null&&yo(n,!!t.multiple,e,!1)}};V0=gp;G0=ws;var JE={usingClientEntryPoint:!1,Events:[ml,lo,xc,B0,H0,gp]},ca={findFiberByHostInstance:as,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e1={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=j0(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||ZE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{mc=zl.inject(e1),Ri=zl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tp(e))throw Error(ne(200));return KE(n,e,null,t)};Bn.createRoot=function(n,e){if(!Tp(n))throw Error(ne(299));var t=!1,i="",r=wx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sp(n,1,!1,null,null,t,!1,i,r),n[Ki]=e.current,Xa(n.nodeType===8?n.parentNode:n),new Ep(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=j0(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return ws(n)};Bn.hydrate=function(n,e,t){if(!Rc(e))throw Error(ne(200));return Pc(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Tp(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=wx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Tx(e,null,n,1,t??null,r,!1,s,o),n[Ki]=e.current,Xa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cc(e)};Bn.render=function(n,e,t){if(!Rc(e))throw Error(ne(200));return Pc(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!Rc(n))throw Error(ne(40));return n._reactRootContainer?(ws(function(){Pc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1};Bn.unstable_batchedUpdates=gp;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Pc(n,e,t,!1,i)};Bn.version="18.2.0-next-9e3b772b8-20220608";function Ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ax)}catch(n){console.error(n)}}Ax(),T0.exports=Bn;var t1=T0.exports,d_=t1;ad.createRoot=d_.createRoot,ad.hydrateRoot=d_.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},el.apply(this,arguments)}var gr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(gr||(gr={}));const h_="popstate";function n1(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return eh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Cx(r)}return r1(e,t,null,n)}function Ut(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function wp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function i1(){return Math.random().toString(36).substr(2,8)}function p_(n,e){return{usr:n.state,key:n.key,idx:e}}function eh(n,e,t,i){return t===void 0&&(t=null),el({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Zo(e):e,{state:t,key:e&&e.key||i||i1()})}function Cx(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Zo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function r1(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=gr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(el({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=gr.Pop;let p=c(),d=p==null?null:p-u;u=p,l&&l({action:a,location:_.location,delta:d})}function h(p,d){a=gr.Push;let v=eh(_.location,p,d);t&&t(v,p),u=c()+1;let x=p_(v,u),y=_.createHref(v);try{o.pushState(x,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function m(p,d){a=gr.Replace;let v=eh(_.location,p,d);t&&t(v,p),u=c();let x=p_(v,u),y=_.createHref(v);o.replaceState(x,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function g(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Cx(p);return Ut(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let _={get action(){return a},get location(){return n(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(h_,f),l=p,()=>{r.removeEventListener(h_,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let d=g(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return o.go(p)}};return _}var m_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(m_||(m_={}));function s1(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?Zo(e):e,r=bx(i.pathname||"/",t);if(r==null)return null;let s=Rx(n);o1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=m1(s[a],v1(r));return o}function Rx(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ut(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=hs([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(Ut(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rx(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:h1(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Px(s.path))r(s,o,l)}),e}function Px(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Px(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function o1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:p1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const a1=/^:[\w-]+$/,l1=3,u1=2,c1=1,f1=10,d1=-2,__=n=>n==="*";function h1(n,e){let t=n.split("/"),i=t.length;return t.some(__)&&(i+=d1),e&&(i+=u1),t.filter(r=>!__(r)).reduce((r,s)=>r+(a1.test(s)?l1:s===""?c1:f1),i)}function p1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function m1(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let o=0;o<t.length;++o){let a=t[o],l=o===t.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=_1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let f=a.route;s.push({params:i,pathname:hs([r,c.pathname]),pathnameBase:w1(hs([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=hs([r,c.pathnameBase]))}return s}function _1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=g1(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[f];return m&&!g?u[h]=void 0:u[h]=x1(g||"",h),u},{}),pathname:s,pathnameBase:o,pattern:n}}function g1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),wp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function v1(n){try{return decodeURI(n)}catch(e){return wp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function x1(n,e){try{return decodeURIComponent(n)}catch(t){return wp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function bx(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function y1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Zo(n):n;return{pathname:t?t.startsWith("/")?t:S1(t,e):e,search:A1(i),hash:C1(r)}}function S1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function xf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function E1(n,e){let t=M1(n);return e?t.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function T1(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Zo(n):(r=el({},n),Ut(!r.pathname||!r.pathname.includes("?"),xf("?","pathname","search",r)),Ut(!r.pathname||!r.pathname.includes("#"),xf("#","pathname","hash",r)),Ut(!r.search||!r.search.includes("#"),xf("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=y1(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hs=n=>n.join("/").replace(/\/\/+/g,"/"),w1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),A1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,C1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function R1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Lx=["post","put","patch","delete"];new Set(Lx);const P1=["get",...Lx];new Set(P1);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},tl.apply(this,arguments)}const Ap=ye.createContext(null),b1=ye.createContext(null),bc=ye.createContext(null),Lc=ye.createContext(null),Qo=ye.createContext({outlet:null,matches:[],isDataRoute:!1}),Dx=ye.createContext(null);function Dc(){return ye.useContext(Lc)!=null}function Ux(){return Dc()||Ut(!1),ye.useContext(Lc).location}function Nx(n){ye.useContext(bc).static||ye.useLayoutEffect(n)}function L1(){let{isDataRoute:n}=ye.useContext(Qo);return n?W1():D1()}function D1(){Dc()||Ut(!1);let n=ye.useContext(Ap),{basename:e,future:t,navigator:i}=ye.useContext(bc),{matches:r}=ye.useContext(Qo),{pathname:s}=Ux(),o=JSON.stringify(E1(r,t.v7_relativeSplatPath)),a=ye.useRef(!1);return Nx(()=>{a.current=!0}),ye.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=T1(u,JSON.parse(o),s,c.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:hs([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,o,s,n])}function U1(n,e){return N1(n,e)}function N1(n,e,t,i){Dc()||Ut(!1);let{navigator:r}=ye.useContext(bc),{matches:s}=ye.useContext(Qo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ux(),c;if(e){var f;let p=typeof e=="string"?Zo(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Ut(!1),c=p}else c=u;let h=c.pathname||"/",m=l==="/"?h:h.slice(l.length)||"/",g=s1(n,{pathname:m}),_=z1(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:hs([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:hs([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,t,i);return e&&_?ye.createElement(Lc.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:gr.Pop}},_):_}function I1(){let n=G1(),e=R1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),t?ye.createElement("pre",{style:r},t):null,null)}const O1=ye.createElement(I1,null);class F1 extends ye.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ye.createElement(Qo.Provider,{value:this.props.routeContext},ye.createElement(Dx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k1(n){let{routeContext:e,match:t,children:i}=n,r=ye.useContext(Ap);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ye.createElement(Qo.Provider,{value:e},i)}function z1(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if((s=t)!=null&&s.errors)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||Ut(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:m}=t,g=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let m,g=!1,_=null,p=null;t&&(m=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||O1,l&&(u<0&&h===0?(X1("route-fallback",!1),g=!0,p=null):u===h&&(g=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,h+1)),v=()=>{let x;return m?x=_:g?x=p:f.route.Component?x=ye.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=c,ye.createElement(k1,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?ye.createElement(F1,{location:t.location,revalidation:t.revalidation,component:_,error:m,children:v(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):v()},null)}var Ix=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Ix||{}),Ju=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ju||{});function B1(n){let e=ye.useContext(Ap);return e||Ut(!1),e}function H1(n){let e=ye.useContext(b1);return e||Ut(!1),e}function V1(n){let e=ye.useContext(Qo);return e||Ut(!1),e}function Ox(n){let e=V1(),t=e.matches[e.matches.length-1];return t.route.id||Ut(!1),t.route.id}function G1(){var n;let e=ye.useContext(Dx),t=H1(Ju.UseRouteError),i=Ox(Ju.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function W1(){let{router:n}=B1(Ix.UseNavigateStable),e=Ox(Ju.UseNavigateStable),t=ye.useRef(!1);return Nx(()=>{t.current=!0}),ye.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,tl({fromRouteId:e},s)))},[n,e])}const g_={};function X1(n,e,t){!e&&!g_[n]&&(g_[n]=!0)}function th(n){Ut(!1)}function j1(n){let{basename:e="/",children:t=null,location:i,navigationType:r=gr.Pop,navigator:s,static:o=!1,future:a}=n;Dc()&&Ut(!1);let l=e.replace(/^\/*/,"/"),u=ye.useMemo(()=>({basename:l,navigator:s,static:o,future:tl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Zo(i));let{pathname:c="/",search:f="",hash:h="",state:m=null,key:g="default"}=i,_=ye.useMemo(()=>{let p=bx(c,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:g},navigationType:r}},[l,c,f,h,m,g,r]);return _==null?null:ye.createElement(bc.Provider,{value:u},ye.createElement(Lc.Provider,{children:t,value:_}))}function Y1(n){let{children:e,location:t}=n;return U1(nh(e),t)}new Promise(()=>{});function nh(n,e){e===void 0&&(e=[]);let t=[];return ye.Children.forEach(n,(i,r)=>{if(!ye.isValidElement(i))return;let s=[...e,r];if(i.type===ye.Fragment){t.push.apply(t,nh(i.props.children,s));return}i.type!==th&&Ut(!1),!i.props.index||!i.props.children||Ut(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=nh(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const q1="startTransition",v_=XS[q1];function $1(n){let{basename:e,children:t,future:i,window:r}=n,s=ye.useRef();s.current==null&&(s.current=n1({window:r,v5Compat:!0}));let o=s.current,[a,l]=ye.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=ye.useCallback(f=>{u&&v_?v_(()=>l(f)):l(f)},[l,u]);return ye.useLayoutEffect(()=>o.listen(c),[o,c]),ye.createElement(j1,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}var x_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(x_||(x_={}));var y_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="160",Fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K1=0,S_=1,Z1=2,Fx=1,Q1=2,ki=3,Br=0,Sn=1,Ti=2,Dr=0,Ao=1,M_=2,E_=3,T_=4,J1=5,ss=100,eT=101,tT=102,w_=103,A_=104,nT=200,iT=201,rT=202,sT=203,ih=204,rh=205,oT=206,aT=207,lT=208,uT=209,cT=210,fT=211,dT=212,hT=213,pT=214,mT=0,_T=1,gT=2,ec=3,vT=4,xT=5,yT=6,ST=7,Rp=0,MT=1,ET=2,Ur=0,TT=1,wT=2,AT=3,CT=4,RT=5,PT=6,kx=300,zo=301,Bo=302,sh=303,oh=304,Uc=306,ah=1e3,di=1001,lh=1002,fn=1003,C_=1004,yf=1005,qn=1006,bT=1007,nl=1008,Nr=1009,LT=1010,DT=1011,Pp=1012,zx=1013,vr=1014,xr=1015,il=1016,Bx=1017,Hx=1018,ps=1020,UT=1021,hi=1023,NT=1024,IT=1025,ms=1026,Ho=1027,OT=1028,Vx=1029,FT=1030,Gx=1031,Wx=1033,Sf=33776,Mf=33777,Ef=33778,Tf=33779,R_=35840,P_=35841,b_=35842,L_=35843,Xx=36196,D_=37492,U_=37496,N_=37808,I_=37809,O_=37810,F_=37811,k_=37812,z_=37813,B_=37814,H_=37815,V_=37816,G_=37817,W_=37818,X_=37819,j_=37820,Y_=37821,wf=36492,q_=36494,$_=36495,kT=36283,K_=36284,Z_=36285,Q_=36286,jx=3e3,_s=3001,zT=3200,BT=3201,Yx=0,HT=1,Kn="",Xt="srgb",Ji="srgb-linear",bp="display-p3",Nc="display-p3-linear",tc="linear",lt="srgb",nc="rec709",ic="p3",zs=7680,J_=519,VT=512,GT=513,WT=514,qx=515,XT=516,jT=517,YT=518,qT=519,eg=35044,tg="300 es",uh=1035,Xi=2e3,rc=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ng=1234567;const La=Math.PI/180,rl=180/Math.PI;function Jo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function Lp(n,e){return(n%e+e)%e}function $T(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function KT(n,e,t){return n!==e?(t-n)/(e-n):0}function Da(n,e,t){return(1-t)*n+t*e}function ZT(n,e,t,i){return Da(n,e,1-Math.exp(-t*i))}function QT(n,e=1){return e-Math.abs(Lp(n,e*2)-e)}function JT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ew(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nw(n,e){return n+Math.random()*(e-n)}function iw(n){return n*(.5-Math.random())}function rw(n){n!==void 0&&(ng=n);let e=ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sw(n){return n*La}function ow(n){return n*rl}function ch(n){return(n&n-1)===0&&n!==0}function aw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lw(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*m,a*u);break;case"YXY":n.set(l*m,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function no(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const uw={DEG2RAD:La,RAD2DEG:rl,generateUUID:Jo,clamp:tn,euclideanModulo:Lp,mapLinear:$T,inverseLerp:KT,lerp:Da,damp:ZT,pingpong:QT,smoothstep:JT,smootherstep:ew,randInt:tw,randFloat:nw,randFloatSpread:iw,seededRandom:rw,degToRad:sw,radToDeg:ow,isPowerOfTwo:ch,ceilPowerOfTwo:aw,floorPowerOfTwo:sc,setQuaternionFromProperEuler:lw,normalize:ln,denormalize:no};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],d=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*p+a*x+l*w,s[6]=o*d+a*y+l*M,s[1]=u*_+c*v+f*T,s[4]=u*p+c*x+f*w,s[7]=u*d+c*y+f*M,s[2]=h*_+m*v+g*T,s[5]=h*p+m*x+g*w,s[8]=h*d+m*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Af.makeScale(e,t)),this}rotate(e){return this.premultiply(Af.makeRotation(-e)),this}translate(e,t){return this.premultiply(Af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Af=new Xe;function $x(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cw(){const n=oc("canvas");return n.style.display="block",n}const ig={};function Ua(n){n in ig||(ig[n]=!0,console.warn(n))}const rg=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sg=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bl={[Ji]:{transfer:tc,primaries:nc,toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:lt,primaries:nc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Nc]:{transfer:tc,primaries:ic,toReference:n=>n.applyMatrix3(sg),fromReference:n=>n.applyMatrix3(rg)},[bp]:{transfer:lt,primaries:ic,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sg),fromReference:n=>n.applyMatrix3(rg).convertLinearToSRGB()}},fw=new Set([Ji,Nc]),nt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Bl[e].toReference,r=Bl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Bl[n].primaries},getTransfer:function(n){return n===Kn?tc:Bl[n].transfer}};function Co(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bs;class Kx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=oc("canvas")),Bs.width=e.width,Bs.height=e.height;const i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Co(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Co(t[i]/255)*255):t[i]=Co(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dw=0;class Zx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Jo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rf(r[o].image)):s.push(Rf(r[o]))}else s=Rf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hw=0;class On extends Ns{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=di,r=di,s=qn,o=nl,a=hi,l=Nr,u=On.DEFAULT_ANISOTROPY,c=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Jo(),this.name="",this.source=new Zx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===_s?Xt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?_s:jx}set encoding(e){Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_s?Xt:Kn}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=kx;On.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(m+1)/2,T=(d+1)/2,w=(c+h)/4,M=(f+_)/4,b=(g+p)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pw extends Ns{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_s?Xt:Kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends pw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qx extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mw extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==m||c!==g){let p=1-a;const d=l*h+u*m+c*g+f*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,d*v);p=Math.sin(p*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*p+h*y,u=u*p+m*y,c=c*p+g*y,f=f*p+_*y,p===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*m-u*h,e[t+1]=l*g+c*h+u*f-a*m,e[t+2]=u*g+c*m+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"YXZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"ZXY":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"ZYX":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"YZX":this._x=h*c*f+u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f-h*m*g;break;case"XZY":this._x=h*c*f-u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(og.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(og.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new F,og=new Cs;class gl{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Vl.subVectors(this.max,fa),Hs.subVectors(e.a,fa),Vs.subVectors(e.b,fa),Gs.subVectors(e.c,fa),sr.subVectors(Vs,Hs),or.subVectors(Gs,Vs),$r.subVectors(Hs,Gs);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-$r.z,$r.y,sr.z,0,-sr.x,or.z,0,-or.x,$r.z,0,-$r.x,-sr.y,sr.x,0,-or.y,or.x,0,-$r.y,$r.x,0];return!bf(t,Hs,Vs,Gs,Vl)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,Hs,Vs,Gs,Vl))?!1:(Gl.crossVectors(sr,or),t=[Gl.x,Gl.y,Gl.z],bf(t,Hs,Vs,Gs,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,Hl=new gl,Hs=new F,Vs=new F,Gs=new F,sr=new F,or=new F,$r=new F,fa=new F,Vl=new F,Gl=new F,Kr=new F;function bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),u=t.dot(Kr),c=i.dot(Kr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _w=new gl,da=new F,Lf=new F;class Ic{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_w.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Lf)),this.expandByPoint(da.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new F,Df=new F,Wl=new F,ar=new F,Uf=new F,Xl=new F,Nf=new F;class Oc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Df.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Df);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wl),a=ar.dot(this.direction),l=-ar.dot(Wl),u=ar.lengthSq(),c=Math.abs(1-o*o);let f,h,m,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Df).addScaledVector(Wl,h),m}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Uf.subVectors(t,e),Xl.subVectors(i,e),Nf.crossVectors(Uf,Xl);let o=this.direction.dot(Nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(ar,Xl));if(l<0)return null;const u=a*this.direction.dot(Uf.cross(ar));if(u<0||l+u>o)return null;const c=-a*ar.dot(Nf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,m,g,_,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,m,g,_,p)}set(e,t,i,r,s,o,a,l,u,c,f,h,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-m,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gw,e,vw)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),lr.crossVectors(i,Rn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),lr.crossVectors(i,Rn)),lr.normalize(),jl.crossVectors(Rn,lr),r[0]=lr.x,r[4]=jl.x,r[8]=Rn.x,r[1]=lr.y,r[5]=jl.y,r[9]=Rn.y,r[2]=lr.z,r[6]=jl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],b=r[8],S=r[12],A=r[1],I=r[5],G=r[9],$=r[13],D=r[2],O=r[6],z=r[10],q=r[14],U=r[3],k=r[7],B=r[11],Z=r[15];return s[0]=o*w+a*A+l*D+u*U,s[4]=o*M+a*I+l*O+u*k,s[8]=o*b+a*G+l*z+u*B,s[12]=o*S+a*$+l*q+u*Z,s[1]=c*w+f*A+h*D+m*U,s[5]=c*M+f*I+h*O+m*k,s[9]=c*b+f*G+h*z+m*B,s[13]=c*S+f*$+h*q+m*Z,s[2]=g*w+_*A+p*D+d*U,s[6]=g*M+_*I+p*O+d*k,s[10]=g*b+_*G+p*z+d*B,s[14]=g*S+_*$+p*q+d*Z,s[3]=v*w+x*A+y*D+T*U,s[7]=v*M+x*I+y*O+T*k,s[11]=v*b+x*G+y*z+T*B,s[15]=v*S+x*$+y*q+T*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+_*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],v=f*p*u-_*h*u+_*l*m-a*p*m-f*l*d+a*h*d,x=g*h*u-c*p*u-g*l*m+o*p*m+c*l*d-o*h*d,y=c*_*u-g*f*u+g*a*m-o*_*m-c*a*d+o*f*d,T=g*f*l-c*_*l-g*a*h+o*_*h+c*a*p-o*f*p,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*d-i*h*d)*M,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*M,e[4]=x*M,e[5]=(c*p*s-g*h*s+g*r*m-t*p*m-c*r*d+t*h*d)*M,e[6]=(g*l*s-o*p*s-g*r*u+t*p*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*M,e[8]=y*M,e[9]=(g*f*s-c*_*s-g*i*m+t*_*m+c*i*d-t*f*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*M,e[12]=T*M,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*p+t*f*p)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,g=s*f,_=o*c,p=o*f,d=a*f,v=l*u,x=l*c,y=l*f,T=i.x,w=i.y,M=i.z;return r[0]=(1-(_+d))*T,r[1]=(m+y)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(h+d))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(p-v)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ws.set(r[0],r[1],r[2]).length();const o=Ws.set(r[4],r[5],r[6]).length(),a=Ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const u=1/s,c=1/o,f=1/a;return oi.elements[0]*=u,oi.elements[1]*=u,oi.elements[2]*=u,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===Xi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,m=(i+r)*c;let g,_;if(a===Xi)g=(o+s)*f,_=-2*f;else if(a===rc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new F,oi=new bt,gw=new F(0,0,0),vw=new F(1,1,1),lr=new F,jl=new F,Rn=new F,ag=new bt,lg=new Cs;class Fc{constructor(e=0,t=0,i=0,r=Fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fc.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const ug=new F,Xs=new Cs,Ii=new bt,Yl=new F,ha=new F,yw=new F,Sw=new Cs,cg=new F(1,0,0),fg=new F(0,1,0),dg=new F(0,0,1),Mw={type:"added"},Ew={type:"removed"};class Yt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new F,t=new Fc,i=new Cs,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Xe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yl.copy(e):Yl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ha,Yl,this.up):Ii.lookAt(Yl,ha,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Xs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ew)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,yw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new F(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new F,Oi=new F,If=new F,Fi=new F,js=new F,Ys=new F,hg=new F,Of=new F,Ff=new F,kf=new F;let ql=!1;class fi{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ai.subVectors(r,t),Oi.subVectors(i,t),If.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Oi),l=ai.dot(If),u=Oi.dot(Oi),c=Oi.dot(If),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,r,s,o,a,l){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),Oi.subVectors(e,t),ai.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;js.subVectors(r,i),Ys.subVectors(s,i),Of.subVectors(e,i);const l=js.dot(Of),u=Ys.dot(Of);if(l<=0&&u<=0)return t.copy(i);Ff.subVectors(e,r);const c=js.dot(Ff),f=Ys.dot(Ff);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(js,o);kf.subVectors(e,s);const m=js.dot(kf),g=Ys.dot(kf);if(g>=0&&m<=g)return t.copy(s);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Ys,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return hg.subVectors(s,r),a=(f-c)/(f-c+(m-g)),t.copy(r).addScaledVector(hg,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(js,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},$l={h:0,s:0,l:0};function zf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Lp(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zf(o,s,e+1/3),this.g=zf(o,s,e),this.b=zf(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=Cf(e.r),this.g=Cf(e.g),this.b=Cf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return nt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(tn(Jt.r*255,0,255))*65536+Math.round(tn(Jt.g*255,0,255))*256+Math.round(tn(Jt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Xt){nt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL($l);const i=Da(ur.h,$l.h,t),r=Da(ur.s,$l.s,t),s=Da(ur.l,$l.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=Jx;let Tw=0;class ea extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Ao,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ih&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ey extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new F,Kl=new Fe;class _i{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eg&&(e.usage=this.usage),e}}class ty extends _i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ny extends _i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ir extends _i{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ww=0;const Gn=new bt,Bf=new Yt,qs=new F,Pn=new gl,pa=new gl,Ft=new F;class ir extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($x(e)?ny:ty)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Bf.lookAt(e),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Pn.min,pa.min),Pn.expandByPoint(Ft),Ft.addVectors(Pn.max,pa.max),Pn.expandByPoint(Ft)):(Pn.expandByPoint(pa.min),Pn.expandByPoint(pa.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ft.fromBufferAttribute(a,u),l&&(qs.fromBufferAttribute(e,u),Ft.add(qs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new F,c[A]=new F;const f=new F,h=new F,m=new F,g=new Fe,_=new Fe,p=new Fe,d=new F,v=new F;function x(A,I,G){f.fromArray(r,A*3),h.fromArray(r,I*3),m.fromArray(r,G*3),g.fromArray(o,A*2),_.fromArray(o,I*2),p.fromArray(o,G*2),h.sub(f),m.sub(f),_.sub(g),p.sub(g);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),v.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar($),u[A].add(d),u[I].add(d),u[G].add(d),c[A].add(v),c[I].add(v),c[G].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,I=y.length;A<I;++A){const G=y[A],$=G.start,D=G.count;for(let O=$,z=$+D;O<z;O+=3)x(i[O+0],i[O+1],i[O+2])}const T=new F,w=new F,M=new F,b=new F;function S(A){M.fromArray(s,A*3),b.copy(M);const I=u[A];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(b,I);const $=w.dot(c[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=$}for(let A=0,I=y.length;A<I;++A){const G=y[A],$=G.start,D=G.count;for(let O=$,z=$+D;O<z;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[m++]}return new _i(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pg=new bt,Zr=new Oc,Zl=new Ic,mg=new F,$s=new F,Ks=new F,Zs=new F,Hf=new F,Ql=new F,Jl=new Fe,eu=new Fe,tu=new Fe,_g=new F,gg=new F,vg=new F,nu=new F,iu=new F;class ji extends Yt{constructor(e=new ir,t=new ey){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Hf.fromBufferAttribute(f,e),o?Ql.addScaledVector(Hf,c):Ql.addScaledVector(Hf.sub(t),c))}t.add(Ql)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Zl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Zl,mg)===null||Zr.origin.distanceToSquared(mg)>(e.far-e.near)**2))&&(pg.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(pg),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);r=ru(this,d,e,i,u,c,f,w,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);r=ru(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,b=y+2;r=ru(this,d,e,i,u,c,f,w,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=p,x=p+1,y=p+2;r=ru(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Aw(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;iu.copy(a),iu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(iu);return u<t.near||u>t.far?null:{distance:u,point:iu.clone(),object:n}}function ru(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,$s),n.getVertexPosition(l,Ks),n.getVertexPosition(u,Zs);const c=Aw(n,e,t,i,$s,Ks,Zs,nu);if(c){r&&(Jl.fromBufferAttribute(r,a),eu.fromBufferAttribute(r,l),tu.fromBufferAttribute(r,u),c.uv=fi.getInterpolation(nu,$s,Ks,Zs,Jl,eu,tu,new Fe)),s&&(Jl.fromBufferAttribute(s,a),eu.fromBufferAttribute(s,l),tu.fromBufferAttribute(s,u),c.uv1=fi.getInterpolation(nu,$s,Ks,Zs,Jl,eu,tu,new Fe),c.uv2=c.uv1),o&&(_g.fromBufferAttribute(o,a),gg.fromBufferAttribute(o,l),vg.fromBufferAttribute(o,u),c.normal=fi.getInterpolation(nu,$s,Ks,Zs,_g,gg,vg,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};fi.getNormal($s,Ks,Zs,f.normal),c.face=f}return c}class vl extends ir{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ir(u,3)),this.setAttribute("normal",new Ir(c,3)),this.setAttribute("uv",new Ir(f,2));function g(_,p,d,v,x,y,T,w,M,b,S){const A=y/M,I=T/b,G=y/2,$=T/2,D=w/2,O=M+1,z=b+1;let q=0,U=0;const k=new F;for(let B=0;B<z;B++){const Z=B*I-$;for(let Q=0;Q<O;Q++){const j=Q*A-G;k[_]=j*v,k[p]=Z*x,k[d]=D,u.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[d]=w>0?1:-1,c.push(k.x,k.y,k.z),f.push(Q/M),f.push(1-B/b),q+=1}}for(let B=0;B<b;B++)for(let Z=0;Z<M;Z++){const Q=h+Z+O*B,j=h+Z+O*(B+1),K=h+(Z+1)+O*(B+1),ae=h+(Z+1)+O*B;l.push(Q,j,ae),l.push(j,K,ae),U+=6}a.addGroup(m,U,S),m+=U,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Vo(n[t]);for(const r in i)e[r]=i[r]}return e}function Cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iy(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const Rw={clone:Vo,merge:un};var Pw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rs extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pw,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ry extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $n extends ry{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class Lw extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Qs,Js,e,t);r.layers=this.layers,this.add(r);const s=new $n(Qs,Js,e,t);s.layers=this.layers,this.add(s);const o=new $n(Qs,Js,e,t);o.layers=this.layers,this.add(o);const a=new $n(Qs,Js,e,t);a.layers=this.layers,this.add(a);const l=new $n(Qs,Js,e,t);l.layers=this.layers,this.add(l);const u=new $n(Qs,Js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sy extends On{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:zo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dw extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_s?Xt:Kn),this.texture=new sy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vl(5,5,5),s=new Rs({name:"CubemapFromEquirect",uniforms:Vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Dr});s.uniforms.tEquirect.value=t;const o=new ji(r,s),a=t.minFilter;return t.minFilter===nl&&(t.minFilter=qn),new Lw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Vf=new F,Uw=new F,Nw=new Xe;class dr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vf.subVectors(i,t).cross(Uw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nw.getNormalMatrix(e),r=this.coplanarPoint(Vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Ic,su=new F;class Up{constructor(e=new dr,t=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-m,y-d).normalize(),i[1].setComponents(l+s,h+u,p+m,y+d).normalize(),i[2].setComponents(l+o,h+c,p+g,y+v).normalize(),i[3].setComponents(l-o,h-c,p-g,y-v).normalize(),i[4].setComponents(l-a,h-f,p-_,y-x).normalize(),t===Xi)i[5].setComponents(l+a,h+f,p+_,y+x).normalize();else if(t===rc)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(su.x=r.normal.x>0?e.max.x:e.min.x,su.y=r.normal.y>0?e.max.y:e.min.y,su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Iw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const h=c.array,m=c._updateRange,g=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class xl extends ir{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),T=v+1+u*(d+1),w=v+1+u*d;m.push(x,y,w),m.push(y,T,w)}this.setIndex(m),this.setAttribute("position",new Ir(g,3)),this.setAttribute("normal",new Ir(_,3)),this.setAttribute("uv",new Ir(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ow=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fw=`#ifdef USE_ALPHAHASH
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
#endif`,kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vw=`#ifdef USE_AOMAP
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
#endif`,Gw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ww=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$w=`#ifdef USE_IRIDESCENCE
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
#endif`,Kw=`#ifdef USE_BUMPMAP
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
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sA=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,oA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aA=`vec3 transformedNormal = objectNormal;
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
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dA="gl_FragColor = linearToOutputTexel( gl_FragColor );",hA=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pA=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_A=`#ifdef USE_ENVMAP
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
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EA=`#ifdef USE_GRADIENTMAP
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
}`,TA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RA=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,PA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NA=`PhysicalMaterial material;
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
#endif`,IA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,OA=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,FA=`#if defined( RE_IndirectDiffuse )
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
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jA=`#if defined( USE_POINTS_UV )
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
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rC=`#ifdef USE_NORMALMAP
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
#endif`,sC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,fC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_C=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MC=`#ifdef USE_SKINNING
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
#endif`,EC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,wC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RC=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PC=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bC=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OC=`uniform sampler2D t2D;
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
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`#include <common>
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
}`,VC=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,GC=`#define DISTANCE
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
}`,WC=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$C=`#include <common>
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
}`,KC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ZC=`#define LAMBERT
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
}`,QC=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,JC=`#define MATCAP
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
}`,eR=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tR=`#define NORMAL
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
}`,nR=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iR=`#define PHONG
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
}`,rR=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sR=`#define STANDARD
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
}`,oR=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aR=`#define TOON
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
}`,lR=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uR=`uniform float size;
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
}`,cR=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,dR=`uniform vec3 color;
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
}`,hR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pR=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,He={alphahash_fragment:Ow,alphahash_pars_fragment:Fw,alphamap_fragment:kw,alphamap_pars_fragment:zw,alphatest_fragment:Bw,alphatest_pars_fragment:Hw,aomap_fragment:Vw,aomap_pars_fragment:Gw,batching_pars_vertex:Ww,batching_vertex:Xw,begin_vertex:jw,beginnormal_vertex:Yw,bsdfs:qw,iridescence_fragment:$w,bumpmap_pars_fragment:Kw,clipping_planes_fragment:Zw,clipping_planes_pars_fragment:Qw,clipping_planes_pars_vertex:Jw,clipping_planes_vertex:eA,color_fragment:tA,color_pars_fragment:nA,color_pars_vertex:iA,color_vertex:rA,common:sA,cube_uv_reflection_fragment:oA,defaultnormal_vertex:aA,displacementmap_pars_vertex:lA,displacementmap_vertex:uA,emissivemap_fragment:cA,emissivemap_pars_fragment:fA,colorspace_fragment:dA,colorspace_pars_fragment:hA,envmap_fragment:pA,envmap_common_pars_fragment:mA,envmap_pars_fragment:_A,envmap_pars_vertex:gA,envmap_physical_pars_fragment:PA,envmap_vertex:vA,fog_vertex:xA,fog_pars_vertex:yA,fog_fragment:SA,fog_pars_fragment:MA,gradientmap_pars_fragment:EA,lightmap_fragment:TA,lightmap_pars_fragment:wA,lights_lambert_fragment:AA,lights_lambert_pars_fragment:CA,lights_pars_begin:RA,lights_toon_fragment:bA,lights_toon_pars_fragment:LA,lights_phong_fragment:DA,lights_phong_pars_fragment:UA,lights_physical_fragment:NA,lights_physical_pars_fragment:IA,lights_fragment_begin:OA,lights_fragment_maps:FA,lights_fragment_end:kA,logdepthbuf_fragment:zA,logdepthbuf_pars_fragment:BA,logdepthbuf_pars_vertex:HA,logdepthbuf_vertex:VA,map_fragment:GA,map_pars_fragment:WA,map_particle_fragment:XA,map_particle_pars_fragment:jA,metalnessmap_fragment:YA,metalnessmap_pars_fragment:qA,morphcolor_vertex:$A,morphnormal_vertex:KA,morphtarget_pars_vertex:ZA,morphtarget_vertex:QA,normal_fragment_begin:JA,normal_fragment_maps:eC,normal_pars_fragment:tC,normal_pars_vertex:nC,normal_vertex:iC,normalmap_pars_fragment:rC,clearcoat_normal_fragment_begin:sC,clearcoat_normal_fragment_maps:oC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:lC,opaque_fragment:uC,packing:cC,premultiplied_alpha_fragment:fC,project_vertex:dC,dithering_fragment:hC,dithering_pars_fragment:pC,roughnessmap_fragment:mC,roughnessmap_pars_fragment:_C,shadowmap_pars_fragment:gC,shadowmap_pars_vertex:vC,shadowmap_vertex:xC,shadowmask_pars_fragment:yC,skinbase_vertex:SC,skinning_pars_vertex:MC,skinning_vertex:EC,skinnormal_vertex:TC,specularmap_fragment:wC,specularmap_pars_fragment:AC,tonemapping_fragment:CC,tonemapping_pars_fragment:RC,transmission_fragment:PC,transmission_pars_fragment:bC,uv_pars_fragment:LC,uv_pars_vertex:DC,uv_vertex:UC,worldpos_vertex:NC,background_vert:IC,background_frag:OC,backgroundCube_vert:FC,backgroundCube_frag:kC,cube_vert:zC,cube_frag:BC,depth_vert:HC,depth_frag:VC,distanceRGBA_vert:GC,distanceRGBA_frag:WC,equirect_vert:XC,equirect_frag:jC,linedashed_vert:YC,linedashed_frag:qC,meshbasic_vert:$C,meshbasic_frag:KC,meshlambert_vert:ZC,meshlambert_frag:QC,meshmatcap_vert:JC,meshmatcap_frag:eR,meshnormal_vert:tR,meshnormal_frag:nR,meshphong_vert:iR,meshphong_frag:rR,meshphysical_vert:sR,meshphysical_frag:oR,meshtoon_vert:aR,meshtoon_frag:lR,points_vert:uR,points_frag:cR,shadow_vert:fR,shadow_frag:dR,sprite_vert:hR,sprite_frag:pR},le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mi={basic:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:un([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:un([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:un([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:un([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:un([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:un([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:un([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:un([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:un([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:un([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:un([le.lights,le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Mi.physical={uniforms:un([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ou={r:0,b:0,g:0};function mR(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function g(p,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Uc)?(c===void 0&&(c=new ji(new vl(1,1,1),new Rs({name:"BackgroundCubeMaterial",uniforms:Vo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==lt,(f!==x||h!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ji(new xl(2,2),new Rs({name:"BackgroundMaterial",uniforms:Vo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,d){p.getRGB(ou,iy(n)),i.buffers.color.setClear(ou.r,ou.g,ou.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function _R(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(D,O,z,q,U){let k=!1;if(o){const B=_(q,z,O);u!==B&&(u=B,m(u.object)),k=d(D,q,z,U),k&&v(D,q,z,U)}else{const B=O.wireframe===!0;(u.geometry!==q.id||u.program!==z.id||u.wireframe!==B)&&(u.geometry=q.id,u.program=z.id,u.wireframe=B,k=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,b(D,O,z,q),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,z){const q=z.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let k=U[O.id];k===void 0&&(k={},U[O.id]=k);let B=k[q];return B===void 0&&(B=p(h()),k[q]=B),B}function p(D){const O=[],z=[],q=[];for(let U=0;U<r;U++)O[U]=0,z[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:q,object:D,attributes:{},index:null}}function d(D,O,z,q){const U=u.attributes,k=O.attributes;let B=0;const Z=z.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=U[Q];let ae=k[Q];if(ae===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;B++}return u.attributesNum!==B||u.index!==q}function v(D,O,z,q){const U={},k=O.attributes;let B=0;const Z=z.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=k[Q];K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),U[Q]=ae,B++}u.attributes=U,u.attributesNum=B,u.index=q}function x(){const D=u.newAttributes;for(let O=0,z=D.length;O<z;O++)D[O]=0}function y(D){T(D,0)}function T(D,O){const z=u.newAttributes,q=u.enabledAttributes,U=u.attributeDivisors;z[D]=1,q[D]===0&&(n.enableVertexAttribArray(D),q[D]=1),U[D]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),U[D]=O)}function w(){const D=u.newAttributes,O=u.enabledAttributes;for(let z=0,q=O.length;z<q;z++)O[z]!==D[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function M(D,O,z,q,U,k,B){B===!0?n.vertexAttribIPointer(D,O,z,U,k):n.vertexAttribPointer(D,O,z,q,U,k)}function b(D,O,z,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=q.attributes,k=z.getAttributes(),B=O.defaultAttributeValues;for(const Z in k){const Q=k[Z];if(Q.location>=0){let j=U[Z];if(j===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const K=j.normalized,ae=j.itemSize,ge=t.get(j);if(ge===void 0)continue;const ve=ge.buffer,Ne=ge.type,Ie=ge.bytesPerElement,Re=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||j.gpuType===zx);if(j.isInterleavedBufferAttribute){const je=j.data,V=je.stride,Gt=j.offset;if(je.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)T(Q.location+we,je.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let we=0;we<Q.locationSize;we++)y(Q.location+we);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let we=0;we<Q.locationSize;we++)M(Q.location+we,ae/Q.locationSize,Ne,K,V*Ie,(Gt+ae/Q.locationSize*we)*Ie,Re)}else{if(j.isInstancedBufferAttribute){for(let je=0;je<Q.locationSize;je++)T(Q.location+je,j.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let je=0;je<Q.locationSize;je++)y(Q.location+je);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let je=0;je<Q.locationSize;je++)M(Q.location+je,ae/Q.locationSize,Ne,K,ae*Ie,ae/Q.locationSize*je*Ie,Re)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}w()}function S(){G();for(const D in a){const O=a[D];for(const z in O){const q=O[z];for(const U in q)g(q[U].object),delete q[U];delete O[z]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const z in O){const q=O[z];for(const U in q)g(q[U].object),delete q[U];delete O[z]}delete a[D.id]}function I(D){for(const O in a){const z=a[O];if(z[D.id]===void 0)continue;const q=z[D.id];for(const U in q)g(q[U].object),delete q[U];delete z[D.id]}}function G(){$(),c=!0,u!==l&&(u=l,m(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function gR(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(c[g],f[g]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function vR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function xR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new dr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(g,h,x,m);for(let T=0;T!==x;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function yR(n){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=zo:a===oh&&(o.mapping=Bo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sh||a===oh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Dw(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ay extends ry{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,xg=[.125,.215,.35,.446,.526,.582],os=20,Gf=new ay,yg=new Ze;let Wf=null,Xf=0,jf=0;const is=(1+Math.sqrt(5))/2,eo=1/is,Sg=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,is,eo),new F(0,is,-eo),new F(eo,0,is),new F(-eo,0,is),new F(is,eo,0),new F(-is,eo,0)];class Mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wf,Xf,jf),e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zo||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wf=this._renderer.getRenderTarget(),Xf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:il,format:hi,colorSpace:Ji,depthBuffer:!1},r=Eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SR(s)),this._blurMaterial=MR(s,e,t)}return r}_compileMaterial(e){const t=new ji(this._lodPlanes[0],e);this._renderer.compile(t,Gf)}_sceneToCubeUV(e,t,i,r){const a=new $n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(yg),c.toneMapping=Ur,c.autoClear=!1;const m=new ey({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new ji(new vl,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(yg),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;au(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zo||e.mapping===Bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ji(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;au(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sg[(r-1)%Sg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ji(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*os-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):os;p>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${os}`);const d=[];let v=0;for(let M=0;M<os;++M){const b=M/_,S=Math.exp(-b*b/2);d.push(S),M===0?v+=S:M<p&&(v+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-_o?r-x+_o:0),w=4*(this._cubeSize-y);au(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Gf)}}function SR(n){const e=[],t=[],i=[];let r=n;const s=n-_o+1+xg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_o?l=xg[o-n+_o-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,_=3,p=2,d=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(d*g*m);for(let w=0;w<m;w++){const M=w%3*2/3-1,b=w>2?0:-1,S=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];v.set(S,_*g*w),x.set(h,p*g*w);const A=[w,w,w,w,w,w];y.set(A,d*g*w)}const T=new ir;T.setAttribute("position",new _i(v,_)),T.setAttribute("uv",new _i(x,p)),T.setAttribute("faceIndex",new _i(y,d)),e.push(T),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eg(n,e,t){const i=new As(n,e,t);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function au(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function MR(n,e,t){const i=new Float32Array(os),r=new F(0,1,0);return new Rs({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Tg(){return new Rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function wg(){return new Rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function ER(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===sh||l===oh,c=l===zo||l===Bo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Mg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Mg(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function TR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wR(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];h.push(T,w,w,M,M,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;h.push(T,w,w,M,M,T)}}else return;const p=new($x(h)?ny:ty)(h,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function AR(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function f(m,g,_){if(_===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),t.update(g,s,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function CR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RR(n,e){return n[0]-e[0]}function PR(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bR(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Bt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(c);if(p===void 0||p.count!==_){let O=function(){$.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let A=c.attributes.position.count*S,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*I*4*_),$=new Qx(G,A,I,_);$.type=xr,$.needsUpdate=!0;const D=S*4;for(let z=0;z<_;z++){const q=w[z],U=M[z],k=b[z],B=A*I*4*z;for(let Z=0;Z<q.count;Z++){const Q=Z*D;x===!0&&(o.fromBufferAttribute(q,Z),G[B+Q+0]=o.x,G[B+Q+1]=o.y,G[B+Q+2]=o.z,G[B+Q+3]=0),y===!0&&(o.fromBufferAttribute(U,Z),G[B+Q+4]=o.x,G[B+Q+5]=o.y,G[B+Q+6]=o.z,G[B+Q+7]=0),T===!0&&(o.fromBufferAttribute(k,Z),G[B+Q+8]=o.x,G[B+Q+9]=o.y,G[B+Q+10]=o.z,G[B+Q+11]=k.itemSize===4?o.w:1)}}p={count:_,texture:$,size:new Fe(A,I)},s.set(c,p),c.addEventListener("dispose",O)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=h[y]}_.sort(PR);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(RR);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(p&&c.getAttribute("morphTarget"+y)!==p[w]&&c.setAttribute("morphTarget"+y,p[w]),d&&c.getAttribute("morphNormal"+y)!==d[w]&&c.setAttribute("morphNormal"+y,d[w]),r[y]=M,v+=M):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function LR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class ly extends On{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ms,c!==ms&&c!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ms&&(i=vr),i===void 0&&c===Ho&&(i=ps),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uy=new On,cy=new ly(1,1);cy.compareFunction=qx;const fy=new Qx,dy=new mw,hy=new sy,Ag=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),bg=new Float32Array(4);function ta(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ag[r];if(s===void 0&&(s=new Float32Array(r),Ag[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kc(n,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function NR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function OR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;bg.set(i),n.uniformMatrix2fv(this.addr,!1,bg),It(t,i)}}function FR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;Pg.set(i),n.uniformMatrix3fv(this.addr,!1,Pg),It(t,i)}}function kR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;Rg.set(i),n.uniformMatrix4fv(this.addr,!1,Rg),It(t,i)}}function zR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function HR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function VR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function GR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function WR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function XR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function jR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function YR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?cy:uy;t.setTexture2D(e||s,r)}function qR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dy,r)}function $R(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hy,r)}function KR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fy,r)}function ZR(n){switch(n){case 5126:return DR;case 35664:return UR;case 35665:return NR;case 35666:return IR;case 35674:return OR;case 35675:return FR;case 35676:return kR;case 5124:case 35670:return zR;case 35667:case 35671:return BR;case 35668:case 35672:return HR;case 35669:case 35673:return VR;case 5125:return GR;case 36294:return WR;case 36295:return XR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return KR}}function QR(n,e){n.uniform1fv(this.addr,e)}function JR(n,e){const t=ta(e,this.size,2);n.uniform2fv(this.addr,t)}function eP(n,e){const t=ta(e,this.size,3);n.uniform3fv(this.addr,t)}function tP(n,e){const t=ta(e,this.size,4);n.uniform4fv(this.addr,t)}function nP(n,e){const t=ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iP(n,e){const t=ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rP(n,e){const t=ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sP(n,e){n.uniform1iv(this.addr,e)}function oP(n,e){n.uniform2iv(this.addr,e)}function aP(n,e){n.uniform3iv(this.addr,e)}function lP(n,e){n.uniform4iv(this.addr,e)}function uP(n,e){n.uniform1uiv(this.addr,e)}function cP(n,e){n.uniform2uiv(this.addr,e)}function fP(n,e){n.uniform3uiv(this.addr,e)}function dP(n,e){n.uniform4uiv(this.addr,e)}function hP(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||uy,s[o])}function pP(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dy,s[o])}function mP(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hy,s[o])}function _P(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||fy,s[o])}function gP(n){switch(n){case 5126:return QR;case 35664:return JR;case 35665:return eP;case 35666:return tP;case 35674:return nP;case 35675:return iP;case 35676:return rP;case 5124:case 35670:return sP;case 35667:case 35671:return oP;case 35668:case 35672:return aP;case 35669:case 35673:return lP;case 5125:return uP;case 36294:return cP;case 36295:return fP;case 36296:return dP;case 35678:case 36198:case 36298:case 36306:case 35682:return hP;case 35679:case 36299:case 36307:return pP;case 35680:case 36300:case 36308:case 36293:return mP;case 36289:case 36303:case 36311:case 36292:return _P}}class vP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZR(t.type)}}class xP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gP(t.type)}}class yP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yf=/(\w+)(\])?(\[|\.)?/g;function Lg(n,e){n.seq.push(e),n.map[e.id]=e}function SP(n,e,t){const i=n.name,r=i.length;for(Yf.lastIndex=0;;){const s=Yf.exec(i),o=Yf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Lg(t,u===void 0?new vP(a,n,e):new xP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new yP(a),Lg(t,f)),t=f}}}class wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Dg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MP=37297;let EP=0;function TP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function wP(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===ic&&t===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&t===ic&&(i="LinearSRGBToLinearDisplayP3"),n){case Ji:case Nc:return[i,"LinearTransferOETF"];case Xt:case bp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ug(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+TP(n.getShaderSource(e),o)}else return r}function AP(n,e){const t=wP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function CP(n,e){let t;switch(e){case TT:t="Linear";break;case wT:t="Reinhard";break;case AT:t="OptimizedCineon";break;case CT:t="ACESFilmic";break;case PT:t="AgX";break;case RT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function RP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(go).join(`
`)}function PP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(go).join(`
`)}function bP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function go(n){return n!==""}function Ng(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DP=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(n){return n.replace(DP,NP)}const UP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NP(n,e){let t=He[e];if(t===void 0){const i=UP.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(t)}const IP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(n){return n.replace(IP,OP)}function OP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Q1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function kP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zo:case Bo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function BP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rp:e="ENVMAP_BLENDING_MULTIPLY";break;case MT:e="ENVMAP_BLENDING_MIX";break;case ET:e="ENVMAP_BLENDING_ADD";break}return e}function HP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FP(t),u=kP(t),c=zP(t),f=BP(t),h=HP(t),m=t.isWebGL2?"":RP(t),g=PP(t),_=bP(s),p=r.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(go).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(go).join(`
`),v.length>0&&(v+=`
`)):(d=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),v=[m,Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?He.tonemapping_pars_fragment:"",t.toneMapping!==Ur?CP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,AP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=fh(o),o=Ng(o,t),o=Ig(o,t),a=fh(a),a=Ng(a,t),a=Ig(a,t),o=Og(o),a=Og(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+d+o,T=x+v+a,w=Dg(r,r.VERTEX_SHADER,y),M=Dg(r,r.FRAGMENT_SHADER,T);r.attachShader(p,w),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function b(G){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(M).trim();let z=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,w,M);else{const U=Ug(r,w,"vertex"),k=Ug(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+U+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||O==="")&&(q=!1);q&&(G.diagnostics={runnable:z,programLog:$,vertexShader:{log:D,prefix:d},fragmentShader:{log:O,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new wu(r,p),A=LP(r,p)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,MP)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EP++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=M,this}let GP=0;class WP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XP(e),t.set(e,i)),i}}class XP{constructor(e){this.id=GP++,this.code=e,this.usedTimes=0}}function jP(n,e,t,i,r,s,o){const a=new Dp,l=new WP,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,A,I,G,$){const D=G.fog,O=$.geometry,z=S.isMeshStandardMaterial?G.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),U=q&&q.mapping===Uc?q.image.height:null,k=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=B!==void 0?B.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let j,K,ae,ge;if(k){const Mt=Mi[k];j=Mt.vertexShader,K=Mt.fragmentShader}else j=S.vertexShader,K=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const ve=n.getRenderTarget(),Ne=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,Re=!!S.map,je=!!S.matcap,V=!!q,Gt=!!S.aoMap,we=!!S.lightMap,Le=!!S.bumpMap,xe=!!S.normalMap,ot=!!S.displacementMap,ke=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,H=S.anisotropy>0,ie=S.clearcoat>0,ee=S.iridescence>0,re=S.sheen>0,Se=S.transmission>0,ce=H&&!!S.anisotropyMap,_e=ie&&!!S.clearcoatMap,Ce=ie&&!!S.clearcoatNormalMap,ze=ie&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,et=ee&&!!S.iridescenceThicknessMap,Ve=re&&!!S.sheenColorMap,De=re&&!!S.sheenRoughnessMap,Te=!!S.specularMap,de=!!S.specularColorMap,P=!!S.specularIntensityMap,se=Se&&!!S.transmissionMap,Me=Se&&!!S.thicknessMap,me=!!S.gradientMap,te=!!S.alphaMap,L=S.alphaTest>0,oe=!!S.alphaHash,ue=!!S.extensions,Pe=!!O.attributes.uv1,Ae=!!O.attributes.uv2,Ye=!!O.attributes.uv3;let qe=Ur;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(qe=n.toneMapping),{isWebGL2:c,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:K,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,instancing:Ne,instancingColor:Ne&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ji,map:Re,matcap:je,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:U,aoMap:Gt,lightMap:we,bumpMap:Le,normalMap:xe,displacementMap:h&&ot,emissiveMap:ke,normalMapObjectSpace:xe&&S.normalMapType===HT,normalMapTangentSpace:xe&&S.normalMapType===Yx,metalnessMap:R,roughnessMap:E,anisotropy:H,anisotropyMap:ce,clearcoat:ie,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:et,sheen:re,sheenColorMap:Ve,sheenRoughnessMap:De,specularMap:Te,specularColorMap:de,specularIntensityMap:P,transmission:Se,transmissionMap:se,thicknessMap:Me,gradientMap:me,opaque:S.transparent===!1&&S.blending===Ao,alphaMap:te,alphaTest:L,alphaHash:oe,combine:S.combine,mapUv:Re&&_(S.map.channel),aoMapUv:Gt&&_(S.aoMap.channel),lightMapUv:we&&_(S.lightMap.channel),bumpMapUv:Le&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:ot&&_(S.displacementMap.channel),emissiveMapUv:ke&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:_e&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:P&&_(S.specularIntensityMap.channel),transmissionMapUv:se&&_(S.transmissionMap.channel),thicknessMapUv:Me&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:Ye,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(Re||te),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)A.push(I),A.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(A,S),x(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=g[S.type];let I;if(A){const G=Mi[A];I=Rw.clone(G.uniforms)}else I=S.uniforms;return I}function T(S,A){let I;for(let G=0,$=u.length;G<$;G++){const D=u[G];if(D.cacheKey===A){I=D,++I.usedTimes;break}}return I===void 0&&(I=new VP(n,A,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:b}}function YP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function qP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||qP),i.length>1&&i.sort(h||kg),r.length>1&&r.sort(h||kg)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function $P(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zg,n.set(i,[o])):r>=s.length?(o=new zg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function ZP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QP=0;function JP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eb(n,e){const t=new KP,i=ZP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new bt,a=new bt;function l(c,f){let h=0,m=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let _=0,p=0,d=0,v=0,x=0,y=0,T=0,w=0,M=0,b=0,S=0;c.sort(JP);const A=f===!0?Math.PI:1;for(let G=0,$=c.length;G<$;G++){const D=c[G],O=D.color,z=D.intensity,q=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*z*A,m+=O.g*z*A,g+=O.b*z*A;else if(D.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],z);S++}else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const B=D.shadow,Z=i.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=k,_++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(O).multiplyScalar(z*A),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[d]=k;const B=D.shadow;if(D.map&&(r.spotLightMap[M]=D.map,M++,B.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[d]=B.matrix,D.castShadow){const Z=i.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.spotShadow[d]=Z,r.spotShadowMap[d]=U,w++}d++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(O).multiplyScalar(z),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=k,v++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),k.distance=D.distance,k.decay=D.decay,D.castShadow){const B=D.shadow,Z=i.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=D.shadow.matrix,T++}r.point[p]=k,p++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(z*A),k.groundColor.copy(D.groundColor).multiplyScalar(z*A),r.hemi[x]=k,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==_||I.pointLength!==p||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-b,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,I.directionalLength=_,I.pointLength=p,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=M,I.numLightProbes=S,r.version=QP++)}function u(c,f){let h=0,m=0,g=0,_=0,p=0;const d=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function Bg(n,e){const t=new eb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function tb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Bg(n,e),t.set(s,[l])):o>=a.length?(l=new Bg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class nb extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`;function ob(n,e,t){let i=new Up;const r=new Fe,s=new Fe,o=new Bt,a=new nb({depthPacking:BT}),l=new ib,u={},c=t.maxTextureSize,f={[Br]:Sn,[Sn]:Br,[Ti]:Ti},h=new Rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:rb,fragmentShader:sb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ir;g.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ji(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fx;let d=this.type;this.render=function(w,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Dr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=d!==ki&&this.type===ki,D=d===ki&&this.type!==ki;for(let O=0,z=w.length;O<z;O++){const q=w[O],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const k=U.getFrameExtents();if(r.multiply(k),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,U.mapSize.y=s.y)),U.map===null||$===!0||D===!0){const Z=this.type!==ki?{minFilter:fn,magFilter:fn}:{};U.map!==null&&U.map.dispose(),U.map=new As(r.x,r.y,Z),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const B=U.getViewportCount();for(let Z=0;Z<B;Z++){const Q=U.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),G.viewport(o),U.updateMatrices(q,Z),i=U.getFrustum(),y(M,b,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===ki&&v(U,b),U.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,A,I)};function v(w,M){const b=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new As(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,b,h,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,b,m,_,null)}function x(w,M,b,S){let A=null;const I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)A=I;else if(A=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const G=A.uuid,$=M.uuid;let D=u[G];D===void 0&&(D={},u[G]=D);let O=D[$];O===void 0&&(O=A.clone(),D[$]=O,M.addEventListener("dispose",T)),A=O}if(A.visible=M.visible,A.wireframe=M.wireframe,S===ki?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:f[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=b}return A}function y(w,M,b,S,A){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===ki)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const $=e.update(w),D=w.material;if(Array.isArray(D)){const O=$.groups;for(let z=0,q=O.length;z<q;z++){const U=O[z],k=D[U.materialIndex];if(k&&k.visible){const B=x(w,k,S,A);w.onBeforeShadow(n,w,M,b,$,B,U),n.renderBufferDirect(b,null,$,B,w,U),w.onAfterShadow(n,w,M,b,$,B,U)}}}else if(D.visible){const O=x(w,D,S,A);w.onBeforeShadow(n,w,M,b,$,O,null),n.renderBufferDirect(b,null,$,O,w,null),w.onAfterShadow(n,w,M,b,$,O,null)}}const G=w.children;for(let $=0,D=G.length;$<D;$++)y(G[$],M,b,S,A)}function T(w){w.target.removeEventListener("dispose",T);for(const b in u){const S=u[b],A=w.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function ab(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const oe=new Bt;let ue=null;const Pe=new Bt(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,Ye,qe,vt,Mt){Mt===!0&&(Ae*=vt,Ye*=vt,qe*=vt),oe.set(Ae,Ye,qe,vt),Pe.equals(oe)===!1&&(n.clearColor(Ae,Ye,qe,vt),Pe.copy(oe))},reset:function(){L=!1,ue=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ue=null,Pe=null;return{setTest:function(Ae){Ae?Ie(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!L&&(n.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(ue!==Ae){switch(Ae){case mT:n.depthFunc(n.NEVER);break;case _T:n.depthFunc(n.ALWAYS);break;case gT:n.depthFunc(n.LESS);break;case ec:n.depthFunc(n.LEQUAL);break;case vT:n.depthFunc(n.EQUAL);break;case xT:n.depthFunc(n.GEQUAL);break;case yT:n.depthFunc(n.GREATER);break;case ST:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Pe!==Ae&&(n.clearDepth(Ae),Pe=Ae)},reset:function(){L=!1,oe=null,ue=null,Pe=null}}}function o(){let L=!1,oe=null,ue=null,Pe=null,Ae=null,Ye=null,qe=null,vt=null,Mt=null;return{setTest:function(Je){L||(Je?Ie(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!L&&(n.stencilMask(Je),oe=Je)},setFunc:function(Je,At,vi){(ue!==Je||Pe!==At||Ae!==vi)&&(n.stencilFunc(Je,At,vi),ue=Je,Pe=At,Ae=vi)},setOp:function(Je,At,vi){(Ye!==Je||qe!==At||vt!==vi)&&(n.stencilOp(Je,At,vi),Ye=Je,qe=At,vt=vi)},setLocked:function(Je){L=Je},setClear:function(Je){Mt!==Je&&(n.clearStencil(Je),Mt=Je)},reset:function(){L=!1,oe=null,ue=null,Pe=null,Ae=null,Ye=null,qe=null,vt=null,Mt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,y=null,T=null,w=null,M=null,b=null,S=new Ze(0,0,0),A=0,I=!1,G=null,$=null,D=null,O=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=k>=2);let Z=null,Q={};const j=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ae=new Bt().fromArray(j),ge=new Bt().fromArray(K);function ve(L,oe,ue,Pe){const Ae=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(L,Ye),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ue;qe++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(oe+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ye}const Ne={};Ne[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(ec),ke(!1),R(S_),Ie(n.CULL_FACE),xe(Dr);function Ie(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function je(L,oe){return m[L]!==oe?(n.bindFramebuffer(L,oe),m[L]=oe,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function V(L,oe){let ue=_,Pe=!1;if(L)if(ue=g.get(oe),ue===void 0&&(ue=[],g.set(oe,ue)),L.isWebGLMultipleRenderTargets){const Ae=L.texture;if(ue.length!==Ae.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,qe=Ae.length;Ye<qe;Ye++)ue[Ye]=n.COLOR_ATTACHMENT0+Ye;ue.length=Ae.length,Pe=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Pe=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Gt(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const we={[ss]:n.FUNC_ADD,[eT]:n.FUNC_SUBTRACT,[tT]:n.FUNC_REVERSE_SUBTRACT};if(i)we[w_]=n.MIN,we[A_]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[w_]=L.MIN_EXT,we[A_]=L.MAX_EXT)}const Le={[nT]:n.ZERO,[iT]:n.ONE,[rT]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[cT]:n.SRC_ALPHA_SATURATE,[lT]:n.DST_COLOR,[oT]:n.DST_ALPHA,[sT]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[uT]:n.ONE_MINUS_DST_COLOR,[aT]:n.ONE_MINUS_DST_ALPHA,[fT]:n.CONSTANT_COLOR,[dT]:n.ONE_MINUS_CONSTANT_COLOR,[hT]:n.CONSTANT_ALPHA,[pT]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(L,oe,ue,Pe,Ae,Ye,qe,vt,Mt,Je){if(L===Dr){d===!0&&(Re(n.BLEND),d=!1);return}if(d===!1&&(Ie(n.BLEND),d=!0),L!==J1){if(L!==v||Je!==I){if((x!==ss||w!==ss)&&(n.blendEquation(n.FUNC_ADD),x=ss,w=ss),Je)switch(L){case Ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M_:n.blendFunc(n.ONE,n.ONE);break;case E_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case E_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,T=null,M=null,b=null,S.set(0,0,0),A=0,v=L,I=Je}return}Ae=Ae||oe,Ye=Ye||ue,qe=qe||Pe,(oe!==x||Ae!==w)&&(n.blendEquationSeparate(we[oe],we[Ae]),x=oe,w=Ae),(ue!==y||Pe!==T||Ye!==M||qe!==b)&&(n.blendFuncSeparate(Le[ue],Le[Pe],Le[Ye],Le[qe]),y=ue,T=Pe,M=Ye,b=qe),(vt.equals(S)===!1||Mt!==A)&&(n.blendColor(vt.r,vt.g,vt.b,Mt),S.copy(vt),A=Mt),v=L,I=!1}function ot(L,oe){L.side===Ti?Re(n.CULL_FACE):Ie(n.CULL_FACE);let ue=L.side===Sn;oe&&(ue=!ue),ke(ue),L.blending===Ao&&L.transparent===!1?xe(Dr):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){G!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),G=L)}function R(L){L!==K1?(Ie(n.CULL_FACE),L!==$&&(L===S_?n.cullFace(n.BACK):L===Z1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),$=L}function E(L){L!==D&&(U&&n.lineWidth(L),D=L)}function H(L,oe,ue){L?(Ie(n.POLYGON_OFFSET_FILL),(O!==oe||z!==ue)&&(n.polygonOffset(oe,ue),O=oe,z=ue)):Re(n.POLYGON_OFFSET_FILL)}function ie(L){L?Ie(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function ee(L){L===void 0&&(L=n.TEXTURE0+q-1),Z!==L&&(n.activeTexture(L),Z=L)}function re(L,oe,ue){ue===void 0&&(Z===null?ue=n.TEXTURE0+q-1:ue=Z);let Pe=Q[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[ue]=Pe),(Pe.type!==L||Pe.texture!==oe)&&(Z!==ue&&(n.activeTexture(ue),Z=ue),n.bindTexture(L,oe||Ne[L]),Pe.type=L,Pe.texture=oe)}function Se(){const L=Q[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function se(L){ge.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function Me(L,oe){let ue=f.get(oe);ue===void 0&&(ue=new WeakMap,f.set(oe,ue));let Pe=ue.get(L);Pe===void 0&&(Pe=n.getUniformBlockIndex(oe,L.name),ue.set(L,Pe))}function me(L,oe){const Pe=f.get(oe).get(L);c.get(oe)!==Pe&&(n.uniformBlockBinding(oe,Pe,L.__bindingPointIndex),c.set(oe,Pe))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,Q={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,y=null,T=null,w=null,M=null,b=null,S=new Ze(0,0,0),A=0,I=!1,G=null,$=null,D=null,O=null,z=null,ae.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ie,disable:Re,bindFramebuffer:je,drawBuffers:V,useProgram:Gt,setBlending:xe,setMaterial:ot,setFlipSided:ke,setCullFace:R,setLineWidth:E,setPolygonOffset:H,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:Se,compressedTexImage2D:ce,compressedTexImage3D:_e,texImage2D:Te,texImage3D:de,updateUBOMapping:Me,uniformBlockBinding:me,texStorage2D:Ve,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:P,viewport:se,reset:te}}function lb(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):oc("canvas")}function _(R,E,H,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=E?sc:Math.floor,Se=re(ee*R.width),ce=re(ee*R.height);f===void 0&&(f=g(Se,ce));const _e=H?g(Se,ce):f;return _e.width=Se,_e.height=ce,_e.getContext("2d").drawImage(R,0,0,Se,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+ce+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return ch(R.width)&&ch(R.height)}function d(R){return a?!1:R.wrapS!==di||R.wrapT!==di||R.minFilter!==fn&&R.minFilter!==qn}function v(R,E){return R.generateMipmaps&&E&&R.minFilter!==fn&&R.minFilter!==qn}function x(R){n.generateMipmap(R)}function y(R,E,H,ie,ee=!1){if(a===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=E;if(E===n.RED&&(H===n.FLOAT&&(re=n.R32F),H===n.HALF_FLOAT&&(re=n.R16F),H===n.UNSIGNED_BYTE&&(re=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.R8UI),H===n.UNSIGNED_SHORT&&(re=n.R16UI),H===n.UNSIGNED_INT&&(re=n.R32UI),H===n.BYTE&&(re=n.R8I),H===n.SHORT&&(re=n.R16I),H===n.INT&&(re=n.R32I)),E===n.RG&&(H===n.FLOAT&&(re=n.RG32F),H===n.HALF_FLOAT&&(re=n.RG16F),H===n.UNSIGNED_BYTE&&(re=n.RG8)),E===n.RGBA){const Se=ee?tc:nt.getTransfer(ie);H===n.FLOAT&&(re=n.RGBA32F),H===n.HALF_FLOAT&&(re=n.RGBA16F),H===n.UNSIGNED_BYTE&&(re=Se===lt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function T(R,E,H){return v(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===fn||R===C_||R===yf?n.NEAREST:n.LINEAR}function M(R){const E=R.target;E.removeEventListener("dispose",M),S(E),E.isVideoTexture&&c.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),I(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const H=R.source,ie=h.get(H);if(ie){const ee=ie[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(R),Object.keys(ie).length===0&&h.delete(H)}i.remove(R)}function A(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const H=R.source,ie=h.get(H);delete ie[E.__cacheKey],o.memory.textures--}function I(R){const E=R.texture,H=i.get(R),ie=i.get(E);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let re=0;re<H.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(H.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)n.deleteFramebuffer(H.__webglFramebuffer[ee]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=E.length;ee<re;ee++){const Se=i.get(E[ee]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(R)}let G=0;function $(){G=0}function D(){const R=G;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),G+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function z(R,E){const H=i.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(H,R,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function q(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function U(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function k(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ge(H,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const B={[ah]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[lh]:n.MIRRORED_REPEAT},Z={[fn]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[yf]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[bT]:n.LINEAR_MIPMAP_NEAREST,[nl]:n.LINEAR_MIPMAP_LINEAR},Q={[VT]:n.NEVER,[qT]:n.ALWAYS,[GT]:n.LESS,[qx]:n.LEQUAL,[WT]:n.EQUAL,[YT]:n.GEQUAL,[XT]:n.GREATER,[jT]:n.NOTEQUAL};function j(R,E,H){if(H?(n.texParameteri(R,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,B[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==di||E.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==fn&&E.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===fn||E.minFilter!==yf&&E.minFilter!==nl||E.type===xr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===il&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function K(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",M));const ie=E.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=O(E);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[re].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&A(E)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return H}function ae(R,E,H){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=K(R,E),re=E.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+H);const Se=i.get(re);if(re.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const ce=nt.getPrimaries(nt.workingColorSpace),_e=E.colorSpace===Kn?null:nt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Kn||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=d(E)&&p(E.image)===!1;let J=_(E.image,ze,!1,r.maxTextureSize);J=ke(E,J);const et=p(J)||a,Ve=s.convert(E.format,E.colorSpace);let De=s.convert(E.type),Te=y(E.internalFormat,Ve,De,E.colorSpace,E.isVideoTexture);j(ie,E,et);let de;const P=E.mipmaps,se=a&&E.isVideoTexture!==!0&&Te!==Xx,Me=Se.__version===void 0||ee===!0,me=T(E,J,et);if(E.isDepthTexture)Te=n.DEPTH_COMPONENT,a?E.type===xr?Te=n.DEPTH_COMPONENT32F:E.type===vr?Te=n.DEPTH_COMPONENT24:E.type===ps?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:E.type===xr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ms&&Te===n.DEPTH_COMPONENT&&E.type!==Pp&&E.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=vr,De=s.convert(E.type)),E.format===Ho&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,E.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ps,De=s.convert(E.type))),Me&&(se?t.texStorage2D(n.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Te,J.width,J.height,0,Ve,De,null));else if(E.isDataTexture)if(P.length>0&&et){se&&Me&&t.texStorage2D(n.TEXTURE_2D,me,Te,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,Ve,De,de.data):t.texImage2D(n.TEXTURE_2D,te,Te,de.width,de.height,0,Ve,De,de.data);E.generateMipmaps=!1}else se?(Me&&t.texStorage2D(n.TEXTURE_2D,me,Te,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ve,De,J.data)):t.texImage2D(n.TEXTURE_2D,0,Te,J.width,J.height,0,Ve,De,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,P[0].width,P[0].height,J.depth);for(let te=0,L=P.length;te<L;te++)de=P[te],E.format!==hi?Ve!==null?se?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,Ve,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Te,de.width,de.height,J.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,Ve,De,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Te,de.width,de.height,J.depth,0,Ve,De,de.data)}else{se&&Me&&t.texStorage2D(n.TEXTURE_2D,me,Te,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],E.format!==hi?Ve!==null?se?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,Ve,de.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,Ve,De,de.data):t.texImage2D(n.TEXTURE_2D,te,Te,de.width,de.height,0,Ve,De,de.data)}else if(E.isDataArrayTexture)se?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,De,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Ve,De,J.data);else if(E.isData3DTexture)se?(Me&&t.texStorage3D(n.TEXTURE_3D,me,Te,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,De,J.data)):t.texImage3D(n.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Ve,De,J.data);else if(E.isFramebufferTexture){if(Me)if(se)t.texStorage2D(n.TEXTURE_2D,me,Te,J.width,J.height);else{let te=J.width,L=J.height;for(let oe=0;oe<me;oe++)t.texImage2D(n.TEXTURE_2D,oe,Te,te,L,0,Ve,De,null),te>>=1,L>>=1}}else if(P.length>0&&et){se&&Me&&t.texStorage2D(n.TEXTURE_2D,me,Te,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],se?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ve,De,de):t.texImage2D(n.TEXTURE_2D,te,Te,Ve,De,de);E.generateMipmaps=!1}else se?(Me&&t.texStorage2D(n.TEXTURE_2D,me,Te,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,De,J)):t.texImage2D(n.TEXTURE_2D,0,Te,Ve,De,J);v(E,et)&&x(ie),Se.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,H){if(E.image.length!==6)return;const ie=K(R,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const Se=nt.getPrimaries(nt.workingColorSpace),ce=E.colorSpace===Kn?null:nt.getPrimaries(E.colorSpace),_e=E.colorSpace===Kn||Se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!Ce&&!ze?J[te]=_(E.image[te],!1,!0,r.maxCubemapSize):J[te]=ze?E.image[te].image:E.image[te],J[te]=ke(E,J[te]);const et=J[0],Ve=p(et)||a,De=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),de=y(E.internalFormat,De,Te,E.colorSpace),P=a&&E.isVideoTexture!==!0,se=re.__version===void 0||ie===!0;let Me=T(E,et,Ve);j(n.TEXTURE_CUBE_MAP,E,Ve);let me;if(Ce){P&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,de,et.width,et.height);for(let te=0;te<6;te++){me=J[te].mipmaps;for(let L=0;L<me.length;L++){const oe=me[L];E.format!==hi?De!==null?P?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,De,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,oe.width,oe.height,De,Te,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,oe.width,oe.height,0,De,Te,oe.data)}}}else{me=E.mipmaps,P&&se&&(me.length>0&&Me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,de,J[0].width,J[0].height));for(let te=0;te<6;te++)if(ze){P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,De,Te,J[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,J[te].width,J[te].height,0,De,Te,J[te].data);for(let L=0;L<me.length;L++){const ue=me[L].image[te].image;P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,ue.width,ue.height,De,Te,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,ue.width,ue.height,0,De,Te,ue.data)}}else{P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Te,J[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,De,Te,J[te]);for(let L=0;L<me.length;L++){const oe=me[L];P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,De,Te,oe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,De,Te,oe.image[te])}}}v(E,Ve)&&x(n.TEXTURE_CUBE_MAP),re.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ve(R,E,H,ie,ee,re){const Se=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),_e=y(H.internalFormat,Se,ce,H.colorSpace);if(!i.get(E).__hasExternalTextures){const ze=Math.max(1,E.width>>re),J=Math.max(1,E.height>>re);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,_e,ze,J,E.depth,0,Se,ce,null):t.texImage2D(ee,re,_e,ze,J,0,Se,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,i.get(H).__webglTexture,0,Le(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,i.get(H).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(R,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||xe(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===xr?ie=n.DEPTH_COMPONENT32F:ee.type===vr&&(ie=n.DEPTH_COMPONENT24));const re=Le(E);xe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ie,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ie,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ie=Le(E);H&&xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],Se=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),_e=y(re.internalFormat,Se,ce,re.colorSpace),Ce=Le(E);H&&xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,_e,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,ee=Le(E);if(E.depthTexture.format===ms)xe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ho)xe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(R){const E=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ne(E.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ne(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(R,E,H){const ie=i.get(R);E!==void 0&&ve(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Re(R)}function V(R){const E=R.texture,H=i.get(R),ie=i.get(E);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,Se=p(R)||a;if(ee){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let _e=0;_e<E.mipmaps.length;_e++)H.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else H.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)H.__webglFramebuffer[ce]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const ce=R.texture;for(let _e=0,Ce=ce.length;_e<Ce;_e++){const ze=i.get(ce[_e]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const ce=re?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const Ce=ce[_e];H.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const ze=s.convert(Ce.format,Ce.colorSpace),J=s.convert(Ce.type),et=y(Ce.internalFormat,ze,J,Ce.colorSpace,R.isXRRenderTarget===!0),Ve=Le(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,et,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),j(n.TEXTURE_CUBE_MAP,E,Se);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ve(H.__webglFramebuffer[ce][_e],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else ve(H.__webglFramebuffer[ce],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E,Se)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ce=R.texture;for(let _e=0,Ce=ce.length;_e<Ce;_e++){const ze=ce[_e],J=i.get(ze);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),j(n.TEXTURE_2D,ze,Se),ve(H.__webglFramebuffer,R,ze,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),v(ze,Se)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ie.__webglTexture),j(ce,E,Se),a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ve(H.__webglFramebuffer[_e],R,E,n.COLOR_ATTACHMENT0,ce,_e);else ve(H.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ce,0);v(E,Se)&&x(ce),t.unbindTexture()}R.depthBuffer&&Re(R)}function Gt(R){const E=p(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=H.length;ie<ee;ie++){const re=H[ie];if(v(re,E)){const Se=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(re).__webglTexture;t.bindTexture(Se,ce),x(Se),t.unbindTexture()}}}function we(R){if(a&&R.samples>0&&xe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ie=R.height;let ee=n.COLOR_BUFFER_BIT;const re=[],Se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(R),_e=R.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){re.push(n.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&re.push(Se);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ce]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),_e){const J=i.get(E[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,H,ie,0,0,H,ie,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ce]);const ze=i.get(E[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(R){const E=o.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function ke(R,E){const H=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===uh||H!==Ji&&H!==Kn&&(nt.getTransfer(H)===lt?a===!1?e.has("EXT_sRGB")===!0&&ie===hi?(R.format=uh,R.minFilter=qn,R.generateMipmaps=!1):E=Kx.sRGBToLinear(E):(ie!==hi||ee!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=je,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe}function ub(n,e,t){const i=t.isWebGL2;function r(s,o=Kn){let a;const l=nt.getTransfer(o);if(s===Nr)return n.UNSIGNED_BYTE;if(s===Bx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Hx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===LT)return n.BYTE;if(s===DT)return n.SHORT;if(s===Pp)return n.UNSIGNED_SHORT;if(s===zx)return n.INT;if(s===vr)return n.UNSIGNED_INT;if(s===xr)return n.FLOAT;if(s===il)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===UT)return n.ALPHA;if(s===hi)return n.RGBA;if(s===NT)return n.LUMINANCE;if(s===IT)return n.LUMINANCE_ALPHA;if(s===ms)return n.DEPTH_COMPONENT;if(s===Ho)return n.DEPTH_STENCIL;if(s===uh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===OT)return n.RED;if(s===Vx)return n.RED_INTEGER;if(s===FT)return n.RG;if(s===Gx)return n.RG_INTEGER;if(s===Wx)return n.RGBA_INTEGER;if(s===Sf||s===Mf||s===Ef||s===Tf)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ef)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===R_||s===P_||s===b_||s===L_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===R_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===P_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===b_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===L_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===D_||s===U_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===D_)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===U_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===N_||s===I_||s===O_||s===F_||s===k_||s===z_||s===B_||s===H_||s===V_||s===G_||s===W_||s===X_||s===j_||s===Y_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===N_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===I_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===O_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===F_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===k_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===z_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===B_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===H_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===V_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===G_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===W_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===X_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===j_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Y_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wf||s===q_||s===$_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wf)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===q_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kT||s===K_||s===Z_||s===Q_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===K_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Z_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Q_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ps?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class cb extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lu extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(u,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class db extends Ns{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const v=[],x=[],y=new Fe;let T=null;const w=new $n;w.layers.enable(1),w.viewport=new Bt;const M=new $n;M.layers.enable(2),M.viewport=new Bt;const b=[w,M],S=new cb;S.layers.enable(1),S.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=v[j];return K===void 0&&(K=new qf,v[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=v[j];return K===void 0&&(K=new qf,v[j]=K),K.getGripSpace()},this.getHand=function(j){let K=v[j];return K===void 0&&(K=new qf,v[j]=K),K.getHandSpace()};function G(j){const K=x.indexOf(j.inputSource);if(K===-1)return;const ae=v[K];ae!==void 0&&(ae.update(j.inputSource,j.frame,u||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",D);for(let j=0;j<v.length;j++){const K=x[j];K!==null&&(x[j]=null,v[j].disconnect(K))}A=null,I=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new As(m.framebufferWidth,m.framebufferHeight,{format:hi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ae=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Ho:ms,ae=_.stencil?ps:vr);const ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new As(h.textureWidth,h.textureHeight,{format:hi,type:Nr,depthTexture:new ly(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(d);Ne.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(j){for(let K=0;K<j.removed.length;K++){const ae=j.removed[K],ge=x.indexOf(ae);ge>=0&&(x[ge]=null,v[ge].disconnect(ae))}for(let K=0;K<j.added.length;K++){const ae=j.added[K];let ge=x.indexOf(ae);if(ge===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=x.length){x.push(ae),ge=Ne;break}else if(x[Ne]===null){x[Ne]=ae,ge=Ne;break}if(ge===-1)break}const ve=v[ge];ve&&ve.connect(ae)}}const O=new F,z=new F;function q(j,K,ae){O.setFromMatrixPosition(K.matrixWorld),z.setFromMatrixPosition(ae.matrixWorld);const ge=O.distanceTo(z),ve=K.projectionMatrix.elements,Ne=ae.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),Re=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],V=(ve[9]-1)/ve[5],Gt=(ve[8]-1)/ve[0],we=(Ne[8]+1)/Ne[0],Le=Ie*Gt,xe=Ie*we,ot=ge/(-Gt+we),ke=ot*-Gt;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Ie+ot,E=Re+ot,H=Le-ke,ie=xe+(ge-ke),ee=je*Re/E*R,re=V*Re/E*R;j.projectionMatrix.makePerspective(H,ie,ee,re,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=M.near=w.near=j.near,S.far=M.far=w.far=j.far,(A!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,I=S.far);const K=j.parent,ae=S.cameras;U(S,K);for(let ge=0;ge<ae.length;ge++)U(ae[ge],K);ae.length===2?q(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),k(j,S,K)};function k(j,K,ae){ae===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)};let B=null;function Z(j,K){if(c=K.getViewerPose(u||o),g=K,c!==null){const ae=c.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ge=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let ve=0;ve<ae.length;ve++){const Ne=ae[ve];let Ie=null;if(m!==null)Ie=m.getViewport(Ne);else{const je=f.getViewSubImage(h,Ne);Ie=je.viewport,ve===0&&(e.setRenderTargetTextures(d,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Re=b[ve];Re===void 0&&(Re=new $n,Re.layers.enable(ve),Re.viewport=new Bt,b[ve]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(Re)}}for(let ae=0;ae<v.length;ae++){const ge=x[ae],ve=v[ae];ge!==null&&ve!==void 0&&ve.update(ge,K,u||o)}B&&B(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Q=new oy;Q.setAnimationLoop(Z),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function hb(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,iy(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,x):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Sn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Sn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",p));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,A=b.length;S<A;S++){const I=b[S];if(m(I,w,S,T)===!0){const G=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let O=0;O<$.length;O++){const z=$[O],q=_(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,G+D,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const b=T[M];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return T[M]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,b=x.length;M<b;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let A=0,I=S.length;A<I;A++){const G=S[A],$=Array.isArray(G.value)?G.value:[G.value];for(let D=0,O=$.length;D<O;D++){const z=$[D],q=_(z),U=y%T;U!==0&&T-U<q.boundary&&(y+=T-U),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=q.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class py{constructor(e={}){const{canvas:t=cw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=Ur,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,b=-1,S=null;const A=new Bt,I=new Bt;let G=null;const $=new Ze(0);let D=0,O=t.width,z=t.height,q=1,U=null,k=null;const B=new Bt(0,0,O,z),Z=new Bt(0,0,O,z);let Q=!1;const j=new Up;let K=!1,ae=!1,ge=null;const ve=new bt,Ne=new Fe,Ie=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return M===null?q:1}let V=i;function Gt(C,N){for(let X=0;X<C.length;X++){const Y=C[X],W=t.getContext(Y,N);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cp}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),V===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),V=Gt(N,C),V===null)throw Gt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,Le,xe,ot,ke,R,E,H,ie,ee,re,Se,ce,_e,Ce,ze,J,et,Ve,De,Te,de,P,se;function Me(){we=new TR(V),Le=new vR(V,we,e),we.init(Le),de=new ub(V,we,Le),xe=new ab(V,we,Le),ot=new CR(V),ke=new YP,R=new lb(V,we,xe,ke,Le,de,ot),E=new yR(x),H=new ER(x),ie=new Iw(V,Le),P=new _R(V,we,ie,Le),ee=new wR(V,ie,ot,P),re=new LR(V,ee,ie,ot),Ve=new bR(V,Le,R),ze=new xR(ke),Se=new jP(x,E,H,we,Le,P,ze),ce=new hb(x,ke),_e=new $P,Ce=new tb(we,Le),et=new mR(x,E,H,xe,re,h,l),J=new ob(x,re,Le),se=new pb(V,ot,Le,xe),De=new gR(V,we,ot,Le),Te=new AR(V,we,ot,Le),ot.programs=Se.programs,x.capabilities=Le,x.extensions=we,x.properties=ke,x.renderLists=_e,x.shadowMap=J,x.state=xe,x.info=ot}Me();const me=new db(x,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(O,z,!1))},this.getSize=function(C){return C.set(O,z)},this.setSize=function(C,N,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,z=N,t.width=Math.floor(C*q),t.height=Math.floor(N*q),X===!0&&(t.style.width=C+"px",t.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(O*q,z*q).floor()},this.setDrawingBufferSize=function(C,N,X){O=C,z=N,q=X,t.width=Math.floor(C*X),t.height=Math.floor(N*X),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(B)},this.setViewport=function(C,N,X,Y){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,N,X,Y),xe.viewport(A.copy(B).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,N,X,Y){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,N,X,Y),xe.scissor(I.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){xe.setScissorTest(Q=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(C=!0,N=!0,X=!0){let Y=0;if(C){let W=!1;if(M!==null){const he=M.texture.format;W=he===Wx||he===Gx||he===Vx}if(W){const he=M.texture.type,Ee=he===Nr||he===vr||he===Pp||he===ps||he===Bx||he===Hx,be=et.getClearColor(),Ue=et.getClearAlpha(),Ge=be.r,Oe=be.g,Be=be.b;Ee?(m[0]=Ge,m[1]=Oe,m[2]=Be,m[3]=Ue,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=Ge,g[1]=Oe,g[2]=Be,g[3]=Ue,V.clearBufferiv(V.COLOR,0,g))}else Y|=V.COLOR_BUFFER_BIT}N&&(Y|=V.DEPTH_BUFFER_BIT),X&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),_e.dispose(),Ce.dispose(),ke.dispose(),E.dispose(),H.dispose(),re.dispose(),P.dispose(),se.dispose(),Se.dispose(),me.dispose(),me.removeEventListener("sessionstart",Mt),me.removeEventListener("sessionend",Je),ge&&(ge.dispose(),ge=null),At.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ot.autoReset,N=J.enabled,X=J.autoUpdate,Y=J.needsUpdate,W=J.type;Me(),ot.autoReset=C,J.enabled=N,J.autoUpdate=X,J.needsUpdate=Y,J.type=W}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const N=C.target;N.removeEventListener("dispose",ue),Pe(N)}function Pe(C){Ae(C),ke.remove(C)}function Ae(C){const N=ke.get(C).programs;N!==void 0&&(N.forEach(function(X){Se.releaseProgram(X)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,X,Y,W,he){N===null&&(N=Re);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,be=TS(C,N,X,Y,W);xe.setMaterial(Y,Ee);let Ue=X.index,Ge=1;if(Y.wireframe===!0){if(Ue=ee.getWireframeAttribute(X),Ue===void 0)return;Ge=2}const Oe=X.drawRange,Be=X.attributes.position;let Et=Oe.start*Ge,Cn=(Oe.start+Oe.count)*Ge;he!==null&&(Et=Math.max(Et,he.start*Ge),Cn=Math.min(Cn,(he.start+he.count)*Ge)),Ue!==null?(Et=Math.max(Et,0),Cn=Math.min(Cn,Ue.count)):Be!=null&&(Et=Math.max(Et,0),Cn=Math.min(Cn,Be.count));const Ot=Cn-Et;if(Ot<0||Ot===1/0)return;P.setup(W,Y,be,X,Ue);let Di,dt=De;if(Ue!==null&&(Di=ie.get(Ue),dt=Te,dt.setIndex(Di)),W.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*je()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(W.isLine){let We=Y.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*je()),W.isLineSegments?dt.setMode(V.LINES):W.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else W.isPoints?dt.setMode(V.POINTS):W.isSprite&&dt.setMode(V.TRIANGLES);if(W.isBatchedMesh)dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)dt.renderInstances(Et,Ot,W.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Vc=Math.min(X.instanceCount,We);dt.renderInstances(Et,Ot,Vc)}else dt.render(Et,Ot)};function Ye(C,N,X){C.transparent===!0&&C.side===Ti&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Ml(C,N,X),C.side=Br,C.needsUpdate=!0,Ml(C,N,X),C.side=Ti):Ml(C,N,X)}this.compile=function(C,N,X=null){X===null&&(X=C),p=Ce.get(X),p.init(),v.push(p),X.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const Y=new Set;return C.traverse(function(W){const he=W.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const be=he[Ee];Ye(be,X,W),Y.add(be)}else Ye(he,X,W),Y.add(he)}),v.pop(),p=null,Y},this.compileAsync=function(C,N,X=null){const Y=this.compile(C,N,X);return new Promise(W=>{function he(){if(Y.forEach(function(Ee){ke.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){W(C);return}setTimeout(he,10)}we.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let qe=null;function vt(C){qe&&qe(C)}function Mt(){At.stop()}function Je(){At.start()}const At=new oy;At.setAnimationLoop(vt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(C){qe=C,me.setAnimationLoop(C),C===null?At.stop():At.start()},me.addEventListener("sessionstart",Mt),me.addEventListener("sessionend",Je),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,N,M),p=Ce.get(C,v.length),p.init(),v.push(p),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(ve),ae=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ae),_=_e.get(C,d.length),_.init(),d.push(_),vi(C,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,k),this.info.render.frame++,K===!0&&ze.beginShadows();const X=p.state.shadowsArray;if(J.render(X,C,N),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,C),p.setupLights(x._useLegacyLights),N.isArrayCamera){const Y=N.cameras;for(let W=0,he=Y.length;W<he;W++){const Ee=Y[W];Qp(_,C,Ee,Ee.viewport)}}else Qp(_,C,N);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,N),P.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function vi(C,N,X,Y){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Y&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Ee=re.update(C),be=C.material;be.visible&&_.push(C,Ee,be,X,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Ee=re.update(C),be=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ie.copy(Ee.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Ue=Ee.groups;for(let Ge=0,Oe=Ue.length;Ge<Oe;Ge++){const Be=Ue[Ge],Et=be[Be.materialIndex];Et&&Et.visible&&_.push(C,Ee,Et,X,Ie.z,Be)}}else be.visible&&_.push(C,Ee,be,X,Ie.z,null)}}const he=C.children;for(let Ee=0,be=he.length;Ee<be;Ee++)vi(he[Ee],N,X,Y)}function Qp(C,N,X,Y){const W=C.opaque,he=C.transmissive,Ee=C.transparent;p.setupLightsView(X),K===!0&&ze.setGlobalState(x.clippingPlanes,X),he.length>0&&ES(W,he,N,X),Y&&xe.viewport(A.copy(Y)),W.length>0&&Sl(W,N,X),he.length>0&&Sl(he,N,X),Ee.length>0&&Sl(Ee,N,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ES(C,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const he=Le.isWebGL2;ge===null&&(ge=new As(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?il:Nr,minFilter:nl,samples:he?4:0})),x.getDrawingBufferSize(Ne),he?ge.setSize(Ne.x,Ne.y):ge.setSize(sc(Ne.x),sc(Ne.y));const Ee=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor($),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const be=x.toneMapping;x.toneMapping=Ur,Sl(C,X,Y),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Ue=!1;for(let Ge=0,Oe=N.length;Ge<Oe;Ge++){const Be=N[Ge],Et=Be.object,Cn=Be.geometry,Ot=Be.material,Di=Be.group;if(Ot.side===Ti&&Et.layers.test(Y.layers)){const dt=Ot.side;Ot.side=Sn,Ot.needsUpdate=!0,Jp(Et,X,Y,Cn,Ot,Di),Ot.side=dt,Ot.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),x.setRenderTarget(Ee),x.setClearColor($,D),x.toneMapping=be}function Sl(C,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let W=0,he=C.length;W<he;W++){const Ee=C[W],be=Ee.object,Ue=Ee.geometry,Ge=Y===null?Ee.material:Y,Oe=Ee.group;be.layers.test(X.layers)&&Jp(be,N,X,Ue,Ge,Oe)}}function Jp(C,N,X,Y,W,he){C.onBeforeRender(x,N,X,Y,W,he),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,N,X,Y,C,he),W.transparent===!0&&W.side===Ti&&W.forceSinglePass===!1?(W.side=Sn,W.needsUpdate=!0,x.renderBufferDirect(X,N,Y,W,C,he),W.side=Br,W.needsUpdate=!0,x.renderBufferDirect(X,N,Y,W,C,he),W.side=Ti):x.renderBufferDirect(X,N,Y,W,C,he),C.onAfterRender(x,N,X,Y,W,he)}function Ml(C,N,X){N.isScene!==!0&&(N=Re);const Y=ke.get(C),W=p.state.lights,he=p.state.shadowsArray,Ee=W.state.version,be=Se.getParameters(C,W.state,he,N,X),Ue=Se.getProgramCacheKey(be);let Ge=Y.programs;Y.environment=C.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(C.isMeshStandardMaterial?H:E).get(C.envMap||Y.environment),Ge===void 0&&(C.addEventListener("dispose",ue),Ge=new Map,Y.programs=Ge);let Oe=Ge.get(Ue);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Ee)return tm(C,be),Oe}else be.uniforms=Se.getUniforms(C),C.onBuild(X,be,x),C.onBeforeCompile(be,x),Oe=Se.acquireProgram(be,Ue),Ge.set(Ue,Oe),Y.uniforms=be.uniforms;const Be=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=ze.uniform),tm(C,be),Y.needsLights=AS(C),Y.lightsStateVersion=Ee,Y.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function em(C){if(C.uniformsList===null){const N=C.currentProgram.getUniforms();C.uniformsList=wu.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function tm(C,N){const X=ke.get(C);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function TS(C,N,X,Y,W){N.isScene!==!0&&(N=Re),R.resetTextureUnits();const he=N.fog,Ee=Y.isMeshStandardMaterial?N.environment:null,be=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ji,Ue=(Y.isMeshStandardMaterial?H:E).get(Y.envMap||Ee),Ge=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!X.morphAttributes.position,Et=!!X.morphAttributes.normal,Cn=!!X.morphAttributes.color;let Ot=Ur;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ot=x.toneMapping);const Di=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Di!==void 0?Di.length:0,We=ke.get(Y),Vc=p.state.lights;if(K===!0&&(ae===!0||C!==S)){const Vn=C===S&&Y.id===b;ze.setState(Y,C,Vn)}let xt=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Vc.state.version||We.outputColorSpace!==be||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Ue||Y.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ze.numPlanes||We.numIntersection!==ze.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==Be||We.morphNormals!==Et||We.morphColors!==Cn||We.toneMapping!==Ot||Le.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,We.__version=Y.version);let Yr=We.currentProgram;xt===!0&&(Yr=Ml(Y,N,W));let nm=!1,na=!1,Gc=!1;const $t=Yr.getUniforms(),qr=We.uniforms;if(xe.useProgram(Yr.program)&&(nm=!0,na=!0,Gc=!0),Y.id!==b&&(b=Y.id,na=!0),nm||S!==C){$t.setValue(V,"projectionMatrix",C.projectionMatrix),$t.setValue(V,"viewMatrix",C.matrixWorldInverse);const Vn=$t.map.cameraPosition;Vn!==void 0&&Vn.setValue(V,Ie.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&$t.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&$t.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,na=!0,Gc=!0)}if(W.isSkinnedMesh){$t.setOptional(V,W,"bindMatrix"),$t.setOptional(V,W,"bindMatrixInverse");const Vn=W.skeleton;Vn&&(Le.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),$t.setValue(V,"boneTexture",Vn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&($t.setOptional(V,W,"batchingTexture"),$t.setValue(V,"batchingTexture",W._matricesTexture,R));const Wc=X.morphAttributes;if((Wc.position!==void 0||Wc.normal!==void 0||Wc.color!==void 0&&Le.isWebGL2===!0)&&Ve.update(W,X,Yr),(na||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,$t.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(qr.envMap.value=Ue,qr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),na&&($t.setValue(V,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&wS(qr,Gc),he&&Y.fog===!0&&ce.refreshFogUniforms(qr,he),ce.refreshMaterialUniforms(qr,Y,q,z,ge),wu.upload(V,em(We),qr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wu.upload(V,em(We),qr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&$t.setValue(V,"center",W.center),$t.setValue(V,"modelViewMatrix",W.modelViewMatrix),$t.setValue(V,"normalMatrix",W.normalMatrix),$t.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Vn=Y.uniformsGroups;for(let Xc=0,CS=Vn.length;Xc<CS;Xc++)if(Le.isWebGL2){const im=Vn[Xc];se.update(im,Yr),se.bind(im,Yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yr}function wS(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function AS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,N,X){ke.get(C.texture).__webglTexture=N,ke.get(C.depthTexture).__webglTexture=X;const Y=ke.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,N){const X=ke.get(C);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,X=0){M=C,T=N,w=X;let Y=!0,W=null,he=!1,Ee=!1;if(C){const Ue=ke.get(C);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ue.__hasExternalTextures&&R.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Oe=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?W=Oe[N][X]:W=Oe[N],he=!0):Le.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?W=ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[X]:W=Oe,A.copy(C.viewport),I.copy(C.scissor),G=C.scissorTest}else A.copy(B).multiplyScalar(q).floor(),I.copy(Z).multiplyScalar(q).floor(),G=Q;if(xe.bindFramebuffer(V.FRAMEBUFFER,W)&&Le.drawBuffers&&Y&&xe.drawBuffers(C,W),xe.viewport(A),xe.scissor(I),xe.setScissorTest(G),he){const Ue=ke.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ue.__webglTexture,X)}else if(Ee){const Ue=ke.get(C.texture),Ge=N||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,Ge)}b=-1},this.readRenderTargetPixels=function(C,N,X,Y,W,he,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){xe.bindFramebuffer(V.FRAMEBUFFER,be);try{const Ue=C.texture,Ge=Ue.format,Oe=Ue.type;if(Ge!==hi&&de.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===il&&(we.has("EXT_color_buffer_half_float")||Le.isWebGL2&&we.has("EXT_color_buffer_float"));if(Oe!==Nr&&de.convert(Oe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===xr&&(Le.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-Y&&X>=0&&X<=C.height-W&&V.readPixels(N,X,Y,W,de.convert(Ge),de.convert(Oe),he)}finally{const Ue=M!==null?ke.get(M).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,N,X=0){const Y=Math.pow(2,-X),W=Math.floor(N.image.width*Y),he=Math.floor(N.image.height*Y);R.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,C.x,C.y,W,he),xe.unbindTexture()},this.copyTextureToTexture=function(C,N,X,Y=0){const W=N.image.width,he=N.image.height,Ee=de.convert(X.format),be=de.convert(X.type);R.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,W,he,Ee,be,N.image.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,Ee,be,N.image),Y===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,N,X,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,be=C.max.z-C.min.z+1,Ue=de.convert(Y.format),Ge=de.convert(Y.type);let Oe;if(Y.isData3DTexture)R.setTexture3D(Y,0),Oe=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Oe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=V.getParameter(V.UNPACK_ROW_LENGTH),Et=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Cn=V.getParameter(V.UNPACK_SKIP_PIXELS),Ot=V.getParameter(V.UNPACK_SKIP_ROWS),Di=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[W]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Oe,W,N.x,N.y,N.z,he,Ee,be,Ue,Ge,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Oe,W,N.x,N.y,N.z,he,Ee,be,Ue,dt.data)):V.texSubImage3D(Oe,W,N.x,N.y,N.z,he,Ee,be,Ue,Ge,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Be),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Cn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),W===0&&Y.generateMipmaps&&V.generateMipmap(Oe),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,xe.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bp?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?_s:jx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_s?Xt:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mb extends py{}mb.prototype.isWebGL1Renderer=!0;class _b extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class my extends ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hg=new bt,dh=new Oc,uu=new Ic,cu=new F;class gb extends Yt{constructor(e=new ir,t=new my){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uu.copy(i.boundingSphere),uu.applyMatrix4(r),uu.radius+=s,e.ray.intersectsSphere(uu)===!1)return;Hg.copy(r).invert(),dh.copy(e.ray).applyMatrix4(Hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=h,_=m;g<_;g++){const p=u.getX(g);cu.fromBufferAttribute(f,p),Vg(cu,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,_=m;g<_;g++)cu.fromBufferAttribute(f,g),Vg(cu,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vg(n,e,t,i,r,s,o){const a=dh.distanceSqToPoint(n);if(a<t){const l=new F;dh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vb extends ea{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yx,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xb extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $f=new bt,Gg=new F,Wg=new F;class yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),$f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sb extends yb{constructor(){super(new ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _y extends xb{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Sb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mb{constructor(e,t,i=0,r=1/0){this.ray=new Oc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return hh(e,this,i,t),i.sort(Xg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hh(e[r],this,i,t);return i.sort(Xg),i}}function Xg(n,e){return n.distance-e.distance}function hh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)hh(r[s],e,t,!0)}}class jg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);const Yg={type:"change"},Kf={type:"start"},qg={type:"end"},fu=new Oc,$g=new dr,Eb=Math.cos(70*uw.DEG2RAD);class Tb extends Ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ce),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Yg),i.update(),s=r.NONE},this.update=function(){const P=new F,se=new Cs().setFromUnitVectors(e.up,new F(0,1,0)),Me=se.clone().invert(),me=new F,te=new Cs,L=new F,oe=2*Math.PI;return function(Pe=null){const Ae=i.object.position;P.copy(Ae).sub(i.target),P.applyQuaternion(se),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&G(A(Pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ye=i.minAzimuthAngle,qe=i.maxAzimuthAngle;isFinite(Ye)&&isFinite(qe)&&(Ye<-Math.PI?Ye+=oe:Ye>Math.PI&&(Ye-=oe),qe<-Math.PI?qe+=oe:qe>Math.PI&&(qe-=oe),Ye<=qe?a.theta=Math.max(Ye,Math.min(qe,a.theta)):a.theta=a.theta>(Ye+qe)/2?Math.max(Ye,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=B(a.radius):a.radius=B(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(Me),Ae.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let vt=!1;if(i.zoomToCursor&&w){let Mt=null;if(i.object.isPerspectiveCamera){const Je=P.length();Mt=B(Je*u);const At=Je-Mt;i.object.position.addScaledVector(y,At),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Je=new F(T.x,T.y,0);Je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),vt=!0;const At=new F(T.x,T.y,0);At.unproject(i.object),i.object.position.sub(At).add(Je),i.object.updateMatrixWorld(),Mt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Mt).add(i.object.position):(fu.origin.copy(i.object.position),fu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(fu.direction))<Eb?e.lookAt(i.target):($g.setFromNormalAndCoplanarPoint(i.object.up,i.target),fu.intersectPlane($g,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),vt=!0);return u=1,w=!1,vt||me.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(Yg),me.copy(i.object.position),te.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jg,l=new jg;let u=1;const c=new F,f=new Fe,h=new Fe,m=new Fe,g=new Fe,_=new Fe,p=new Fe,d=new Fe,v=new Fe,x=new Fe,y=new F,T=new Fe;let w=!1;const M=[],b={};let S=!1;function A(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function I(P){const se=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*se)}function G(P){l.theta-=P}function $(P){l.phi-=P}const D=function(){const P=new F;return function(Me,me){P.setFromMatrixColumn(me,0),P.multiplyScalar(-Me),c.add(P)}}(),O=function(){const P=new F;return function(Me,me){i.screenSpacePanning===!0?P.setFromMatrixColumn(me,1):(P.setFromMatrixColumn(me,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Me),c.add(P)}}(),z=function(){const P=new F;return function(Me,me){const te=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let oe=P.length();oe*=Math.tan(i.object.fov/2*Math.PI/180),D(2*Me*oe/te.clientHeight,i.object.matrix),O(2*me*oe/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(Me*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),O(me*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(P,se){if(!i.zoomToCursor)return;w=!0;const Me=i.domElement.getBoundingClientRect(),me=P-Me.left,te=se-Me.top,L=Me.width,oe=Me.height;T.x=me/L*2-1,T.y=-(te/oe)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){f.set(P.clientX,P.clientY)}function Q(P){k(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function j(P){g.set(P.clientX,P.clientY)}function K(P){h.set(P.clientX,P.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*m.x/se.clientHeight),$(2*Math.PI*m.y/se.clientHeight),f.copy(h),i.update()}function ae(P){v.set(P.clientX,P.clientY),x.subVectors(v,d),x.y>0?q(I(x.y)):x.y<0&&U(I(x.y)),d.copy(v),i.update()}function ge(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),z(p.x,p.y),g.copy(_),i.update()}function ve(P){k(P.clientX,P.clientY),P.deltaY<0?U(I(P.deltaY)):P.deltaY>0&&q(I(P.deltaY)),i.update()}function Ne(P){let se=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),i.update())}function Ie(P){if(M.length===1)f.set(P.pageX,P.pageY);else{const se=de(P),Me=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);f.set(Me,me)}}function Re(P){if(M.length===1)g.set(P.pageX,P.pageY);else{const se=de(P),Me=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);g.set(Me,me)}}function je(P){const se=de(P),Me=P.pageX-se.x,me=P.pageY-se.y,te=Math.sqrt(Me*Me+me*me);d.set(0,te)}function V(P){i.enableZoom&&je(P),i.enablePan&&Re(P)}function Gt(P){i.enableZoom&&je(P),i.enableRotate&&Ie(P)}function we(P){if(M.length==1)h.set(P.pageX,P.pageY);else{const Me=de(P),me=.5*(P.pageX+Me.x),te=.5*(P.pageY+Me.y);h.set(me,te)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*m.x/se.clientHeight),$(2*Math.PI*m.y/se.clientHeight),f.copy(h)}function Le(P){if(M.length===1)_.set(P.pageX,P.pageY);else{const se=de(P),Me=.5*(P.pageX+se.x),me=.5*(P.pageY+se.y);_.set(Me,me)}p.subVectors(_,g).multiplyScalar(i.panSpeed),z(p.x,p.y),g.copy(_)}function xe(P){const se=de(P),Me=P.pageX-se.x,me=P.pageY-se.y,te=Math.sqrt(Me*Me+me*me);v.set(0,te),x.set(0,Math.pow(v.y/d.y,i.zoomSpeed)),q(x.y),d.copy(v);const L=(P.pageX+se.x)*.5,oe=(P.pageY+se.y)*.5;k(L,oe)}function ot(P){i.enableZoom&&xe(P),i.enablePan&&Le(P)}function ke(P){i.enableZoom&&xe(P),i.enableRotate&&we(P)}function R(P){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",H)),Ve(P),P.pointerType==="touch"?ze(P):ie(P))}function E(P){i.enabled!==!1&&(P.pointerType==="touch"?J(P):ee(P))}function H(P){De(P),M.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(qg),s=r.NONE}function ie(P){let se;switch(P.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Fs.DOLLY:if(i.enableZoom===!1)return;Q(P),s=r.DOLLY;break;case Fs.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;j(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case Fs.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;j(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kf)}function ee(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(P);break;case r.PAN:if(i.enablePan===!1)return;ge(P);break}}function re(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Kf),ve(Se(P)),i.dispatchEvent(qg))}function Se(P){const se=P.deltaMode,Me={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(se){case 1:Me.deltaY*=16;break;case 2:Me.deltaY*=100;break}return P.ctrlKey&&!S&&(Me.deltaY*=10),Me}function ce(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Ce(P){i.enabled===!1||i.enablePan===!1||Ne(P)}function ze(P){switch(Te(P),M.length){case 1:switch(i.touches.ONE){case ks.ROTATE:if(i.enableRotate===!1)return;Ie(P),s=r.TOUCH_ROTATE;break;case ks.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ks.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(P),s=r.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Gt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kf)}function J(P){switch(Te(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;we(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ot(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(P),i.update();break;default:s=r.NONE}}function et(P){i.enabled!==!1&&P.preventDefault()}function Ve(P){M.push(P.pointerId)}function De(P){delete b[P.pointerId];for(let se=0;se<M.length;se++)if(M[se]==P.pointerId){M.splice(se,1);return}}function Te(P){let se=b[P.pointerId];se===void 0&&(se=new Fe,b[P.pointerId]=se),se.set(P.pageX,P.pageY)}function de(P){const se=P.pointerId===M[0]?M[1]:M[0];return b[se]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function Bi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function gy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Go={duration:.5,overwrite:!1,delay:0},Ip,sn,ft,Qn=1e8,rt=1/Qn,ph=Math.PI*2,wb=ph/4,Ab=0,vy=Math.sqrt,Cb=Math.cos,Rb=Math.sin,Vt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},Op=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Fp=function(){return typeof window<"u"},du=function(e){return St(e)||Vt(e)},xy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,mh=/(?:-?\.?\d|\.)+/gi,yy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sy=/[+-]=-?[.\d]+/,My=/[^,'"\[\]\s]+/gi,Pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Si,_h,kp,zn={},ac={},Ey,Ty=function(e){return(ac=Ps(e,zn))&&An},zp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sl=function(e,t){return!t&&console.warn(e)},wy=function(e,t){return e&&(zn[e]=t)&&ac&&(ac[e]=t)||zn},ol=function(){return 0},bb={suppressEvents:!0,isStart:!0,kill:!1},Au={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},Bp={},Or=[],gh={},Ay,Ln={},Qf={},Kg=30,Cu=[],Hp="",Vp=function(e){var t=e[0],i,r;if(Li(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Cu.length;r--&&!Cu[r].targetTest(t););i=Cu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ky(e[r],i)))||e.splice(r,1);return e},gs=function(e){return e._gsap||Vp(Jn(e))[0]._gsap},Cy=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Op(i)&&e.getAttribute&&e.getAttribute(t)||i},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Db=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},lc=function(){var e=Or.length,t=Or.slice(0),i,r;for(gh={},Or.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ry=function(e,t,i,r){Or.length&&!sn&&lc(),e.render(t,i,r||sn&&t<0&&(e._initted||e._startAt)),Or.length&&!sn&&lc()},Py=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(My).length<2?t:Vt(e)?e.trim():e},by=function(e){return e},ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ub=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ps=function(e,t){for(var i in t)e[i]=t[i];return e},Zg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Li(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},uc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Na=function(e){var t=e.parent||pt,i=e.keyframes?Ub(on(e.keyframes)):ii;if(Mn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Nb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Ly=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},zc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ib=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vh=function(e,t,i,r){return e._startAt&&(sn?e._startAt.revert(Au):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ob=function n(e){return!e||e._ts&&n(e.parent)},Qg=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},cc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Hc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bc(e),i._dirty||vs(i,e)),e},Dy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=cc(e.rawTime(),t),(!t._dur||yl(0,t.totalDuration(),i)-t._tTime>rt)&&t.render(i,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-rt}},wi=function(e,t,i,r){return t.parent&&Hr(t),t._start=zt((er(i)?i:i||e!==pt?Wn(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ly(e,t,"_first","_last",e._sort?"_start":0),xh(t)||(e._recent=t),r||Dy(e,t),e._ts<0&&Hc(e,e._tTime),e},Uy=function(e,t){return(zn.ScrollTrigger||zp("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},Ny=function(e,t,i,r,s){if(Wp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ay!==Dn.frame)return Or.push(e),e._lazy=[s,r],1},Fb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Fb(e)&&!(!e._initted&&xh(e))||(e._ts<0||e._dp._ts<0)&&!xh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=yl(0,e._tDur,t),c=Wo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Ny(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?rt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&vh(e,t,i,!0),e._onUpdate&&!i&&Nn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!i&&!sn&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Xo=function(e,t,i,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Hc(e,e._tTime=e._tDur*a),e.parent&&Bc(e),i||vs(e.parent,e),e},Jg=function(e){return e instanceof dn?vs(e):Xo(e,e._dur)},Bb={_start:0,endTime:ol,totalDuration:ol},Wn=function n(e,t,i){var r=e.labels,s=e._recent||Bb,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,u;return Vt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(on(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ia=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Rt(t[0],o,t[s+1])},jr=function(e,t){return e||e===0?t(e):t},yl=function(e,t,i){return i<e?e:i>t?t:i},rn=function(e,t){return!Vt(e)||!(t=Pb.exec(e))?"":t[1]},Hb=function(e,t,i){return jr(i,function(r){return yl(e,t,r)})},yh=[].slice,Iy=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Si},Vb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Vt(r)&&!t||Iy(r,1)?(s=i).push.apply(s,Jn(r)):i.push(r)})||i},Jn=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):Vt(e)&&!i&&(_h||!jo())?yh.call((t||kp).querySelectorAll(e),0):on(e)?Vb(e,i):Iy(e)?yh.call(e,0):e?[e]:[]},Sh=function(e){return e=Jn(e)[0]||sl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jn(t,i.querySelectorAll?i:i===e?sl("Invalid scope")||kp.createElement("div"):e)}},Oy=function(e){return e.sort(function(){return .5-Math.random()})},Fy=function(e){if(St(e))return e;var t=Li(e)?e:{each:e},i=xs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Vt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,m,g){var _=(g||t).length,p=o[_],d,v,x,y,T,w,M,b,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!S){for(M=-Qn;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],d=l?Math.min(S,_)*c-.5:r%S,v=S===Qn?0:l?_*f/S-.5:r/S|0,M=0,b=Qn,w=0;w<_;w++)x=w%S-d,y=v-(w/S|0),p[w]=T=u?Math.abs(u==="y"?y:x):vy(x*x+y*y),T>M&&(M=T),T<b&&(b=T);r==="random"&&Oy(p),p.max=M-b,p.min=b,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=rn(t.amount||t.each)||0,i=i&&_<0?Yy(i):i}return _=(p[h]-p.min)/p.max||0,zt(p.b+(i?i(_):_)*p.v)+p.u}},Mh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:rn(i))}},ky=function(e,t){var i=on(e),r,s;return!i&&Li(e)&&(r=i=e.radius||Qn,e.values?(e=Jn(e.values),(s=!er(e[0]))&&(r*=r)):e=Mh(e.increment)),jr(t,i?St(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Qn,c=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||er(o)?c:c+rn(o)}:Mh(e))},zy=function(e,t,i,r){return jr(on(e)?!t:i===!0?!!(i=0):!r,function(){return on(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Gb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Wb=function(e,t){return function(i){return e(parseFloat(i))+(t||rn(i))}},Xb=function(e,t,i){return Hy(e,t,0,1,i)},By=function(e,t,i){return jr(i,function(r){return e[~~t(r)]})},jb=function n(e,t,i){var r=t-e;return on(e)?By(e,n(0,e.length),t):jr(i,function(s){return(r+(s-e)%r)%r+e})},Yb=function n(e,t,i){var r=t-e,s=r*2;return on(e)?By(e,n(0,e.length-1),t):jr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},al=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?My:mh),i+=e.substr(t,r-t)+zy(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Hy=function(e,t,i,r,s){var o=t-e,a=r-i;return jr(s,function(l){return i+((l-e)/o*a||0)})},qb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Vt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=Ps(on(e)?[]:{},e));if(!c){for(l in t)Gp.call(a,e,l,"get",t[l]);s=function(g){return Yp(g,a)||(o?e.p:e)}}}return jr(i,s)},e0=function(e,t,i){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,i){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Or.length&&lc(),a&&(ft=a),c=l?s.apply(u,l):s.call(u),ft=o,c},ya=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Nn(e,"onInterrupt"),e},xo,Vy=[],Gy=function(e){if(e)if(e=!e.name&&e.default||e,Fp()||e.headless){var t=e.name,i=St(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ol,render:Yp,add:Gp,kill:cL,modifier:uL,rawVars:0},o={targetTest:0,get:0,getSetter:jp,aliases:{},register:0};if(jo(),e!==r){if(Ln[t])return;ii(r,ii(uc(e,s),o)),Ps(r.prototype,Ps(s,uc(e,o))),Ln[r.prop=t]=r,e.targetTest&&(Cu.push(r),Bp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wy(t,r),e.register&&e.register(An,r,Tn)}else Vy.push(e)},it=255,Sa={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Jf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*it+.5|0},Wy=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&it,e&it]:0:Sa.black,s,o,a,l,u,c,f,h,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sa[e])r=Sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(mh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Jf(l+1/3,s,o),r[1]=Jf(l,s,o),r[2]=Jf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(yy),i&&r.length<4&&(r[3]=1),r}else r=e.match(mh)||Sa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(m=f-h,u=c>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Xy=function(e){var t=[],i=[],r=-1;return e.split(Fr).forEach(function(s){var o=s.match(vo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},t0=function(e,t,i){var r="",s=(e+r).match(Fr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=Wy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Xy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Fr,"1").split(vo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Fr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Fr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),$b=/hsl[a]?\(/,jy=function(e){var t=e.join(" "),i;if(Fr.lastIndex=0,Fr.test(t))return i=$b.test(t),e[1]=t0(e[1],i),e[0]=t0(e[0],i,Xy(e[1])),!0},ll,Dn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,m,g=function _(p){var d=n()-r,v=p===!0,x,y,T,w;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-o,(x>0||v)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(m=0;m<a.length;m++)a[m](T,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ey&&(!_h&&Fp()&&(Si=_h=window,kp=Si.document||{},zn.gsap=An,(Si.gsapVersions||(Si.gsapVersions=[])).push(An.version),Ty(ac||Si.GreenSockGlobals||!Si.gsap&&Si||{}),Vy.forEach(Gy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(p){return setTimeout(p,o-f.time*1e3+1|0)},ll=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ll=0,u=ol},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,d,v){var x=d?function(y,T,w,M){p(y,T,w,M),f.remove(x)}:p;return f.remove(p),a[v?"unshift":"push"](x),jo(),x},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},f}(),jo=function(){return!ll&&Dn.wake()},Ke={},Kb=/^[\d.\-M][\d.\-,\s]/,Zb=/["']/g,Qb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Zb,"").trim():+u,r=l.substr(a+1).trim();return t},Jb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},eL=function(e){var t=(e+"").split("("),i=Ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Qb(t[1])]:Jb(e).split(",").map(Py)):Ke._CE&&Kb.test(e)?Ke._CE("",e):i},Yy=function(e){return function(t){return 1-e(1-t)}},qy=function n(e,t){for(var i=e._first,r;i;)i instanceof dn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},xs=function(e,t){return e&&(St(e)?e:Ke[e]||eL(e))||t},Is=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return En(e,function(a){Ke[a]=zn[a]=s,Ke[o=a.toLowerCase()]=i;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},$y=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ed=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/ph*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Rb((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:$y(a);return s=ph/s,l.config=function(u,c){return n(e,u,c)},l},td=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:$y(i);return r.config=function(s){return n(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Is(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Is("Elastic",ed("in"),ed("out"),ed());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Is("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Is("Circ",function(n){return-(vy(1-n*n)-1)});Is("Sine",function(n){return n===1?1:-Cb(n*wb)+1});Is("Back",td("in"),td("out"),td());Ke.SteppedEase=Ke.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*yl(0,o,a)|0)+s)*i}}};Go.ease=Ke["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Hp+=n+","+n+"Params,"});var Ky=function(e,t){this.id=Ab++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cy,this.set=t?t.getSetter:jp},ul=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),ll||Dn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(jo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hc(this,i),!s._dp||s.parent||Dy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ry(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Qg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Qg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?cc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(yl(-Math.abs(this._delay),this._tDur,s),r!==!1),Bc(this),Ib(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Lb);var r=sn;return sn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Jg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Jg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),Mn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Mn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=St(i)?i:by,a=function(){var u=r.then;r.then=null,St(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ya(this)},n}();ii(ul.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var dn=function(n){gy(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Mn(i.sortChildren),pt&&wi(i.parent||pt,Bi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Uy(Bi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ia(0,arguments,this),this},t.from=function(r,s,o){return Ia(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ia(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return wi(this,Rt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Rt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Na(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Na(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:zt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,m,g,_,p,d,v,x,y,T,w,M;if(this!==pt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=zt(c%p),c===l?(_=this._repeat,h=u):(_=~~(c/p),_&&_===c/p&&(h=u,_--),h>u&&(h=u)),T=Wo(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),w&&_&1&&(h=u-h,M=1),_!==T&&!this._lock){var b=w&&T&1,S=b===(w&&_&1);if(_<T&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(M?0:zt(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;qy(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=zb(this,zt(a),zt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Nn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-rt);break}}m=g}else{m=this._last;for(var A=r<0?r:h;m;){if(g=m._prev,(m._act||A<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(A-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(A-m._start)*m._ts,s,o||sn&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=A?-rt:rt);break}}m=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-rt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Bc(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Nn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(er(s)||(s=Wn(this,s,r)),!(r instanceof ul)){if(on(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Vt(r))return this.addLabel(r,s);if(St(r))r=Rt.delayedCall(0,r);else return this}return this!==r?wi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Rt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Vt(r)?this.removeLabel(r):St(r)?this.killTweensOf(r):(zc(this,r),r===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Rt.delayedCall(0,s||ol,o);return a.data="isPause",this._hasPause=1,wi(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Jn(r),l=this._first,u=er(s),c;l;)l instanceof Rt?Db(l._targets,a)&&(u?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=Rt.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==p&&Xo(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ii({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),e0(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),e0(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Xo(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(Ry(pt,cc(r,pt)),Ay=Dn.frame),Dn.frame>=Kg){Kg+=Fn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&Fn.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(ul);ii(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tL=function(e,t,i,r,s,o,a){var l=new Tn(this._pt,e,t,0,1,nS,null,s),u=0,c=0,f,h,m,g,_,p,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=al(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(Zf)||[];f=Zf.exec(r);)g=f[0],_=r.substring(u,f.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==h[c++]&&(p=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:g.charAt(1)==="="?Ro(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=Zf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Sy.test(r)||d)&&(l.e=0),this._pt=l,l},Gp=function(e,t,i,r,s,o,a,l,u,c){St(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:St(f)?u?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,m=St(f)?u?oL:eS:Xp,g;if(Vt(r)&&(~r.indexOf("random(")&&(r=al(r)),r.charAt(1)==="="&&(g=Ro(h,r)+(rn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Eh)return!isNaN(h*r)&&r!==""?(g=new Tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?lL:tS,0,m),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&zp(t,r),tL.call(this,e,t,h,r,m,l||Fn.stringFilter,u))},nL=function(e,t,i,r,s){if(St(e)&&(e=Oa(e,s,t,i,r)),!Li(e)||e.style&&e.nodeType||on(e)||xy(e))return Vt(e)?Oa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Oa(e[a],s,t,i,r);return o},Zy=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:nL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},yr,Eh,Wp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,m=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:p,x=e._overwrite==="auto"&&!Ip,y=e.timeline,T,w,M,b,S,A,I,G,$,D,O,z,q;if(y&&(!h||!s)&&(s="none"),e._ease=xs(s,Go.ease),e._yEase=f?Yy(xs(f===!0?s:f,Go.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(G=p[0]?gs(p[0]).harness:0,z=G&&r[G.prop],T=uc(r,Bp),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!m?_.render(-1,!0):_.revert(c&&g?Au:bb),_._lazy=0),o){if(Hr(e._startAt=Rt.set(p,ii({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:u&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!m)&&e._startAt.revert(Au),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Mn(l),immediateRender:a,stagger:0,parent:d},T),z&&(M[G.prop]=z),Hr(e._startAt=Rt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Au):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Mn(l)||l&&!g,w=0;w<p.length;w++){if(S=p[w],I=S._gsap||Vp(p)[w]._gsap,e._ptLookup[w]=D={},gh[I.id]&&Or.length&&lc(),O=v===p?w:v.indexOf(S),G&&($=new G).init(S,z||T,e,O,v)!==!1&&(e._pt=b=new Tn(e._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(U){D[U]=b}),$.priority&&(A=1)),!G||z)for(M in T)Ln[M]&&($=Zy(M,T,e,O,S,v))?$.priority&&(A=1):D[M]=b=Gp.call(e,S,M,"get",T[M],O,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(yr=e,pt.killTweensOf(S,D,e.globalTime(t)),q=!e.parent,yr=0),e._pt&&l&&(gh[I.id]=1)}A&&iS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&y.render(Qn,!0,!0)},iL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,m;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(c=h[m][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Eh=1,e.vars[t]="+=0",Wp(e,a),Eh=0,l?sl(t+" not eligible for reset"):1;u.push(c)}for(m=u.length;m--;)f=u[m],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Tt(i)+rn(f.e)),f.b&&(f.b=c.s+rn(f.b))},rL=function(e,t){var i=e[0]?gs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ps({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},sL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(on(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Oa=function(e,t,i,r,s){return St(e)?e.call(t,i,r,s):Vt(e)&&~e.indexOf("random(")?al(e):e},Qy=Hp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jy={};En(Qy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Jy[n]=1});var Rt=function(n){gy(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Na(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,v=r.parent||pt,x=(on(i)||xy(i)?er(i[0]):"length"in r)?[i]:Jn(i),y,T,w,M,b,S,A,I;if(a._targets=x.length?Vp(x):sl("GSAP target "+i+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||du(u)||du(c)){if(r=a.vars,y=a.timeline=new dn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Bi(a),y._start=0,h||du(u)||du(c)){if(M=x.length,A=h&&Fy(h),Li(h))for(b in h)~Qy.indexOf(b)&&(I||(I={}),I[b]=h[b]);for(T=0;T<M;T++)w=uc(r,Jy),w.stagger=0,d&&(w.yoyoEase=d),I&&Ps(w,I),S=x[T],w.duration=+Oa(u,Bi(a),T,S,x),w.delay=(+Oa(c,Bi(a),T,S,x)||0)-a._delay,!h&&M===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(S,w,A?A(T,S,x):0),y._ease=Ke.none;y.duration()?u=c=0:a.timeline=0}else if(g){Na(ii(y.vars.defaults,{ease:"none"})),y._ease=xs(g.ease||r.ease||"none");var G=0,$,D,O;if(on(g))g.forEach(function(z){return y.to(x,z,">")}),y.duration();else{w={};for(b in g)b==="ease"||b==="easeEach"||sL(b,g[b],w,g.easeEach);for(b in w)for($=w[b].sort(function(z,q){return z.t-q.t}),G=0,T=0;T<$.length;T++)D=$[T],O={ease:D.e,duration:(D.t-(T?$[T-1].t:0))/100*u},O[b]=D.v,y.to(x,O,G),G+=O.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return m===!0&&!Ip&&(yr=Bi(a),pt.killTweensOf(x),yr=0),wi(v,Bi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===zt(v._time)&&Mn(f)&&Ob(Bi(a))&&v.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-c)||0)),p&&Uy(Bi(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-rt&&!c?l:r<rt?0:r,h,m,g,_,p,d,v,x,y;if(!u)kb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=zt(f%_),f===l?(g=this._repeat,h=u):(g=~~(f/_),g&&g===zt(f/_)&&(h=u,g--),h>u&&(h=u)),d=this._yoyo&&g&1,d&&(y=this._yEase,h=u-h),p=Wo(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&qy(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ny(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!g&&(Nn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&vh(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&vh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Nn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ll||Dn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wp(this,u),c=this._ease(u/this._dur),iL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Hc(this,0),this.parent||Ly(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,yr&&yr.vars.overwrite!==!0)._first||ya(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Jn(r):a,u=this._ptLookup,c=this._pt,f,h,m,g,_,p,d;if((!s||s==="all")&&Nb(a,l))return s==="all"&&(this._pt=0),ya(this);for(f=this._op=this._op||[],s!=="all"&&(Vt(s)&&(_={},En(s,function(v){return _[v]=1}),s=_),s=rL(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,g=h,m={}):(m=f[d]=f[d]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&zc(this,p,"_pt"),delete h[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&c&&ya(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ia(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ia(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(ul);ii(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(n){Rt[n]=function(){var e=new dn,t=yh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xp=function(e,t,i){return e[t]=i},eS=function(e,t,i){return e[t](i)},oL=function(e,t,i,r){return e[t](r.fp,i)},aL=function(e,t,i){return e.setAttribute(t,i)},jp=function(e,t){return St(e[t])?eS:Op(e[t])&&e.setAttribute?aL:Xp},tS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Yp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},uL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},cL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},fL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},iS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Tn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||tS,this.d=l||this,this.set=u||Xp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=fL,this.m=i,this.mt=s,this.tween=r},n}();En(Hp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Bp[n]=1});zn.TweenMax=zn.TweenLite=Rt;zn.TimelineLite=zn.TimelineMax=dn;pt=new dn({sortChildren:!1,defaults:Go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=jy;var ys=[],Ru={},dL=[],n0=0,hL=0,nd=function(e){return(Ru[e]||dL).map(function(t){return t()})},Th=function(){var e=Date.now(),t=[];e-n0>2&&(nd("matchMediaInit"),ys.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Si.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),nd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),n0=e,nd("matchMedia"))},rS=function(){function n(t,i){this.selector=i&&Sh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=hL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){St(i)&&(s=r,r=i,i=St);var o=this,a=function(){var u=ft,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Sh(s)),ft=o,f=r.apply(o,arguments),St(f)&&o._r.push(f),ft=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===St?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ft;ft=null,i(this),ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof dn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Rt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),pL=function(){function n(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Li(i)||(i={matches:i});var o=new rS(0,s||this.scope),a=o.conditions={},l,u,c;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Si.matchMedia(i[u]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Th):l.addEventListener("change",Th)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),fc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Gy(r)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Vt(e)&&(e=Jn(e)[0]);var s=gs(e||{}).get,o=i?by:Py;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Jn(e),e.length>1){var r=e.map(function(c){return An.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Ln[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;xo._pt=0,f.init(e,i?c+i:c,xo,0,[e]),f.render(1,f),xo._pt&&Yp(1,xo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=An.to(e,Ps((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,Go.ease)),Zg(Go,e||{})},config:function(e){return Zg(Fn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!zn[a]&&sl(t+" effect requires "+a+" plugin.")}),Qf[t]=function(a,l,u){return i(Jn(a),ii(l||{},s),u)},o&&(dn.prototype[t]=function(a,l,u){return this.add(Qf[t](a,Li(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ke[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):Ke},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new dn(e),r,s;for(i.smoothChildTiming=Mn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&wi(i,r,r._start-r._delay),r=s;return wi(pt,i,0),i},context:function(e,t){return e?new rS(e,t):ft},matchMedia:function(e){return new pL(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Th()},addEventListener:function(e,t){var i=Ru[e]||(Ru[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ru[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jb,wrapYoyo:Yb,distribute:Fy,random:zy,snap:ky,normalize:Xb,getUnit:rn,clamp:Hb,splitColor:Wy,toArray:Jn,selector:Sh,mapRange:Hy,pipe:Gb,unitize:Wb,interpolate:qb,shuffle:Oy},install:Ty,effects:Qf,ticker:Dn,updateRoot:dn.updateRoot,plugins:Ln,globalTimeline:pt,core:{PropTween:Tn,globals:wy,Tween:Rt,Timeline:dn,Animation:ul,getCache:gs,_removeLinkedListItem:zc,reverting:function(){return sn},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Ip=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return fc[n]=Rt[n]});Dn.add(dn.updateRoot);xo=fc.to({},{duration:0});var mL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},_L=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=mL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},id=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Vt(s)&&(l={},En(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}_L(a,s)}}}},An=fc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},id("roundProps",Mh),id("modifiers"),id("snap",ky))||fc;Rt.version=dn.version=An.version="3.12.5";Ey=1;Fp()&&jo();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var i0,Sr,Po,qp,cs,r0,$p,gL=function(){return typeof window<"u"},tr={},rs=180/Math.PI,bo=Math.PI/180,to=Math.atan2,s0=1e8,Kp=/([A-Z])/g,vL=/(left|right|width|margin|padding|x)/i,xL=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ML=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},sS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},oS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},EL=function(e,t,i){return e.style[t]=i},TL=function(e,t,i){return e.style.setProperty(t,i)},wL=function(e,t,i){return e._gsap[t]=i},AL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},CL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},RL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",wn=mt+"Origin",PL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Vi(r,a)}):this.tfm[e]=o.x?o[e]:Vi(r,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},aS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$p(),(!s||!s.isStart)&&!i[mt]&&(aS(i),r.zOrigin&&i[wn]&&(i[wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},lS=function(e,t){var i={target:e,props:[],revert:bL,save:PL};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},uS,Ah=function(e,t){var i=Sr.createElementNS?Sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Sr.createElement(e);return i&&i.style?i:Sr.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Yo(t)||t,1)||""},o0="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,i){var r=t||cs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(o0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?o0[o]:"")+e},Ch=function(){gL()&&window.document&&(i0=window,Sr=i0.document,Po=Sr.documentElement,cs=Ah("div")||{style:{}},Ah("div"),mt=Yo(mt),wn=mt+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uS=!!Yo("perspective"),$p=An.core.reverting,qp=1)},rd=function n(e){var t=Ah("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Po.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Po.removeChild(t),this.style.cssText=s,o},a0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},cS=function(e){var t;try{t=e.getBBox()}catch{t=rd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===rd||(t=rd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+a0(e,["x","cx","x1"])||0,y:+a0(e,["y","cy","y1"])||0,width:0,height:0}:t},fS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cS(e))},bs=function(e,t){if(t){var i=e.style,r;t in tr&&t!==wn&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Kp,"-$1").toLowerCase())):i.removeAttribute(t)}},Mr=function(e,t,i,r,s,o){var a=new Tn(e._pt,t,i,0,1,o?oS:sS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},l0={deg:1,rad:1,turn:1},LL={grid:1,flex:1},Vr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=cs.style,l=vL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",m=r==="%",g,_,p,d;if(r===o||!s||l0[r]||l0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&fS(e),(m||o==="%")&&(tr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Tt(m?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Sr||!_.appendChild)&&(_=Sr.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Dn.time&&!p.uncache)return Tt(s/p.width*f);if(m&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:bs(e,t)}else(m||o==="%")&&!LL[bi(_,"display")]&&(a.position=bi(e,"position")),_===e&&(a.position="static"),_.appendChild(cs),g=cs[c],_.removeChild(cs),a.position="absolute";return l&&m&&(p=gs(_),p.time=Dn.time,p.width=_[c]),Tt(h?g*s/f:g&&s?f/g*s:0)},Vi=function(e,t,i,r){var s;return qp||Ch(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=fl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:hc(bi(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=dc[t]&&dc[t](e,t,i)||bi(e,t)||Cy(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Vr(e,t,s,i)+i:s},DL=function(e,t,i,r){if(!i||i==="none"){var s=Yo(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,nS),l=0,u=0,c,f,h,m,g,_,p,d,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=bi(e,t)||r,_?e.style[t]=_:bs(e,t)),c=[i,r],jy(c),i=c[0],r=c[1],h=i.match(vo)||[],T=r.match(vo)||[],T.length){for(;f=vo.exec(r);)p=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=h[u++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=Ro(m,p)+y),d=parseFloat(p),x=p.substr((d+"").length),l=vo.lastIndex-x.length,x||(x=x||Fn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(m=Vr(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:m,c:d-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?oS:sS;return Sy.test(r)&&(a.e=0),this._pt=a,a},u0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=u0[i]||i,t[1]=u0[r]||r,t.join(" ")},NL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],tr[a]&&(l=1,a=a==="transformOrigin"?wn:mt),bs(i,a);l&&(bs(i,mt),o&&(o.svg&&i.removeAttribute("transform"),fl(i,1),o.uncache=1,aS(r)))}},dc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,i,0,0,NL);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},cl=[1,0,0,1,0,0],dS={},hS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},c0=function(e){var t=bi(e,mt);return hS(t)?cl:t.substr(7).match(yy).map(Tt)},Zp=function(e,t){var i=e._gsap||gs(e),r=e.style,s=c0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cl:s):(s===cl&&!e.offsetParent&&e!==Po&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Po.appendChild(e)),s=c0(e),l?r.display=l:bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Rh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,b,S;i?l!==cl&&(M=m*p-g*_)&&(b=y*(p/M)+T*(-_/M)+(_*v-p*d)/M,S=y*(-g/M)+T*(m/M)-(m*v-g*d)/M,y=b,T=S):(w=cS(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(d=y-u,v=T-c,a.xOffset=f+(d*m+v*_)-d,a.yOffset=h+(d*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[wn]="0px 0px",o&&(Mr(o,a,"xOrigin",u,y),Mr(o,a,"yOrigin",c,T),Mr(o,a,"xOffset",f,a.xOffset),Mr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},fl=function(e,t){var i=e._gsap||new Ky(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,wn)||"0",c,f,h,m,g,_,p,d,v,x,y,T,w,M,b,S,A,I,G,$,D,O,z,q,U,k,B,Z,Q,j,K,ae;return c=f=h=_=p=d=v=x=y=0,m=g=1,i.svg=!!(e.getCTM&&fS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),M=Zp(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Rh(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==cl&&(I=M[0],G=M[1],$=M[2],D=M[3],c=O=M[4],f=z=M[5],M.length===6?(m=Math.sqrt(I*I+G*G),g=Math.sqrt(D*D+$*$),_=I||G?to(G,I)*rs:0,v=$||D?to($,D)*rs+_:0,v&&(g*=Math.abs(Math.cos(v*bo))),i.svg&&(c-=T-(T*I+w*$),f-=w-(T*G+w*D))):(ae=M[6],j=M[7],B=M[8],Z=M[9],Q=M[10],K=M[11],c=M[12],f=M[13],h=M[14],b=to(ae,Q),p=b*rs,b&&(S=Math.cos(-b),A=Math.sin(-b),q=O*S+B*A,U=z*S+Z*A,k=ae*S+Q*A,B=O*-A+B*S,Z=z*-A+Z*S,Q=ae*-A+Q*S,K=j*-A+K*S,O=q,z=U,ae=k),b=to(-$,Q),d=b*rs,b&&(S=Math.cos(-b),A=Math.sin(-b),q=I*S-B*A,U=G*S-Z*A,k=$*S-Q*A,K=D*A+K*S,I=q,G=U,$=k),b=to(G,I),_=b*rs,b&&(S=Math.cos(b),A=Math.sin(b),q=I*S+G*A,U=O*S+z*A,G=G*S-I*A,z=z*S-O*A,I=q,O=U),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=Tt(Math.sqrt(I*I+G*G+$*$)),g=Tt(Math.sqrt(z*z+ae*ae)),b=to(O,z),v=Math.abs(b)>2e-4?b*rs:0,y=K?1/(K<0?-K:K):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!hS(bi(e,mt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Tt(m),i.scaleY=Tt(g),i.rotation=Tt(_)+a,i.rotationX=Tt(p)+a,i.rotationY=Tt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[wn]=hc(u)),i.xOffset=i.yOffset=0,i.force3D=Fn.force3D,i.renderTransform=i.svg?OL:uS?pS:IL,i.uncache=0,i},hc=function(e){return(e=e.split(" "))[0]+" "+e[1]},sd=function(e,t,i){var r=rn(t);return Tt(parseFloat(t)+parseFloat(Vr(e,"x",i+"px",r)))+r},IL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pS(e,t)},Jr="0deg",ma="0px",es=") ",pS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,m=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Jr||c!==Jr)){var w=parseFloat(c)*bo,M=Math.sin(w),b=Math.cos(w),S;w=parseFloat(f)*bo,S=Math.cos(w),o=sd(v,o,M*S*-x),a=sd(v,a,-Math.sin(w)*-x),l=sd(v,l,b*S*-x+x)}p!==ma&&(y+="perspective("+p+es),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==ma||a!==ma||l!==ma)&&(y+=l!==ma||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),u!==Jr&&(y+="rotate("+u+es),c!==Jr&&(y+="rotateY("+c+es),f!==Jr&&(y+="rotateX("+f+es),(h!==Jr||m!==Jr)&&(y+="skew("+h+", "+m+es),(g!==1||_!==1)&&(y+="scale("+g+", "+_+es),v.style[mt]=y||"translate(0, 0)"},OL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,m=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,b,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=bo,u*=bo,T=Math.cos(l)*f,w=Math.sin(l)*f,M=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=bo,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,b*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Tt(T),w=Tt(w),M=Tt(M),b=Tt(b)):(T=f,b=h,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Vr(m,"x",o,"px"),y=Vr(m,"y",a,"px")),(g||_||p||d)&&(x=Tt(x+g-(g*T+_*M)+p),y=Tt(y+_-(g*w+_*b)+d)),(r||s)&&(S=m.getBBox(),x=Tt(x+r/100*S.width),y=Tt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+b+","+x+","+y+")",m.setAttribute("transform",S),v&&(m.style[mt]=S)},FL=function(e,t,i,r,s){var o=360,a=Vt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rs:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*s0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*s0)%o-~~(u/o)*o)),e._pt=h=new Tn(e._pt,t,i,r,u,yL),h.e=c,h.u="deg",e._props.push(i),h},f0=function(e,t){for(var i in t)e[i]=t[i];return e},kL=function(e,t,i){var r=f0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,m,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=fl(i,1),bs(i,mt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[mt],o[mt]=t,a=fl(i,1),o[mt]=u);for(l in tr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=rn(u),g=rn(c),f=m!==g?Vr(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new Tn(e._pt,a,l,f,h-f,wh),e._pt.u=g||0,e._props.push(l));f0(a,r)};En("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});dc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,m;if(arguments.length<4)return h=o.map(function(g){return Vi(a,g,u)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(c+"").split(" "),m={},o.forEach(function(g,_){return m[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,m,f)}});var mS={name:"css",register:Ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,m,g,_,p,d,v,x,y,T,w,M,b;qp||Ch(),this.styles=this.styles||lS(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ln[_]&&Zy(_,t,i,r,e,s)))){if(m=typeof c,g=dc[_],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=al(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Fr.lastIndex=0,Fr.test(u)||(p=rn(u),d=rn(c)),d?p!==d&&(u=Vr(e,_,u,d)+d):p&&(c+=p),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Vt(u)&&~u.indexOf("random(")&&(u=al(u)),rn(u+"")||u==="auto"||(u+=Fn.units[_]||rn(Vi(e,_))||""),(u+"").charAt(1)==="="&&(u=Vi(e,_))):u=Vi(e,_),h=parseFloat(u),v=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Ai&&(_==="autoAlpha"&&(h===1&&Vi(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Mr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in tr,x){if(this.styles.save(_),y||(T=e._gsap,T.renderTransform&&!t.parseTransform||fl(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Tn(this._pt,a,mt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Tn(this._pt,T,"scaleY",T.scaleY,(v?Ro(T.scaleY,v+f):f)-T.scaleY||0,wh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(wn,0,a[wn]),c=UL(c),T.svg?Rh(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&Mr(this,T,"zOrigin",T.zOrigin,d),Mr(this,a,_,hc(u),hc(c)));continue}else if(_==="svgOrigin"){Rh(e,c,1,w,0,this);continue}else if(_ in dS){FL(this,T,_,h,v?Ro(h,v+c):c);continue}else if(_==="smoothOrigin"){Mr(this,T,"smooth",T.smooth,c);continue}else if(_==="force3D"){T[_]=c;continue}else if(_==="transform"){kL(this,c,e);continue}}else _ in a||(_=Yo(_)||_);if(x||(f||f===0)&&(h||h===0)&&!xL.test(c)&&_ in a)p=(u+"").substr((h+"").length),f||(f=0),d=rn(c)||(_ in Fn.units?Fn.units[_]:p),p!==d&&(h=Vr(e,_,u,d)),this._pt=new Tn(this._pt,x?T:a,_,h,(v?Ro(h,v+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?ML:wh),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=SL);else if(_ in a)DL.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){zp(_,c);continue}x||(_ in a?b.push(_,0,a[_]):b.push(_,1,u||e[_])),o.push(_)}}M&&iS(this)},render:function(e,t){if(t.tween._time||!$p())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Vi,aliases:Ai,getSetter:function(e,t,i){var r=Ai[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==wn&&(e._gsap.x||Vi(e,"x"))?i&&r0===i?t==="scale"?AL:wL:(r0=i||{})&&(t==="scale"?CL:RL):e.style&&!Op(e.style[t])?EL:~t.indexOf("-")?TL:jp(e,t)},core:{_removeProperty:bs,_getMatrix:Zp}};An.utils.checkPrefix=Yo;An.core.getStyleSaver=lS;(function(n,e,t,i){var r=En(n+","+e+","+t,function(s){tr[s]=1});En(e,function(s){Fn.units[s]="deg",dS[s]=1}),Ai[r[13]]=n+","+e,En(i,function(s){var o=s.split(":");Ai[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Fn.units[n]="px"});An.registerPlugin(mS);var nn=An.registerPlugin(mS)||An;nn.core.Tween;const Er={plane:{width:400,height:400,widthSegments:50,heightSegments:50}},Ls=new _b,qi=new $n(75,window.innerWidth/window.innerHeight,.1,1e3),Ci=new py;Ci.setSize(window.innerWidth,window.innerHeight);Ci.setPixelRatio(window.devicePixelRatio);document.body.appendChild(Ci.domElement);new Tb(qi,Ci.domElement);qi.position.z=50;const zL=new xl(Er.plane.width,Er.plane.height,Er.plane.widthSegments,Er.plane.heightSegments),BL=new vb({side:Ti,flatShading:!0,wireframe:!1,vertexColors:!0}),Xn=new ji(zL,BL);Ls.add(Xn);const Lo={r:.059,g:.059,b:.196};let od=0;const _S=new _y(16777215,1);_S.position.set(0,1,1);Ls.add(_S);const gS=new _y(16777215,1);gS.position.set(0,0,-1);Ls.add(gS);const vS=new ir,HL=new my({color:16777215}),xS=[];for(let n=0;n<1e4;n++){const e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,i=(Math.random()-.5)*2e3;xS.push(e,t,i)}vS.setAttribute("position",new Ir(xS,3));const yS=new gb(vS,HL);Ls.add(yS);const d0=new Mb,Ph={x:void 0,y:void 0};addEventListener("mousemove",n=>{Ph.x=n.clientX/innerWidth*2-1,Ph.y=-(n.clientY/innerHeight)*2+1});const VL=()=>{Xn.geometry.dispose(),Xn.geometry=new xl(Er.plane.width,Er.plane.height,Er.plane.widthSegments,Er.plane.heightSegments);const{array:n}=Xn.geometry.attributes.position,e=[];for(let i=0;i<n.length;i++){if(i%3===0){const r=n[i],s=n[i+1],o=n[i+2];n[i]=r+(Math.random()-.5)*3,n[i+1]=s+(Math.random()-.5)*3,n[i+2]=o+(Math.random()-.5)*3}e.push(Math.random()*Math.PI*2)}Xn.geometry.attributes.position.randomValues=e,Xn.geometry.attributes.position.originalPosition=Xn.geometry.attributes.position.array;const t=[];for(let i=0;i<Xn.geometry.attributes.position.count;i++)t.push(Lo.r,Lo.g,Lo.b);Xn.geometry.setAttribute("color",new _i(new Float32Array(t),3))};let SS;const MS=()=>{SS=requestAnimationFrame(MS),Ci.render(Ls,qi),d0.setFromCamera(Ph,qi),od+=.01;const{array:n,originalPosition:e,randomValues:t}=Xn.geometry.attributes.position;for(let r=0;r<n.length;r+=3)n[r]=e[r]+Math.cos(od+t[r])*.01,n[r+1]=e[r+1]+Math.sin(od+t[r+1])*.01;Xn.geometry.attributes.position.needsUpdate=!0;const i=d0.intersectObject(Xn);if(i.length>0){const{color:r}=i[0].object.geometry.attributes;r.needsUpdate=!0;const s={r:Lo.r,g:Lo.g,b:Lo.b},o={r:.2,g:.2,b:1};nn.to(o,{r:s.r,g:s.g,b:s.b,onUpdate:()=>{r.setX(i[0].face.a,o.r),r.setY(i[0].face.a,o.g),r.setZ(i[0].face.a,o.b),r.setX(i[0].face.b,o.r),r.setY(i[0].face.b,o.g),r.setZ(i[0].face.b,o.b),r.setX(i[0].face.c,o.r),r.setY(i[0].face.c,o.g),r.setZ(i[0].face.c,o.b),r.needsUpdate=!0}})}yS.rotation.y+=.002},GL=()=>{VL(),MS()},bh=()=>{qi.aspect=window.innerWidth/window.innerHeight,qi.updateProjectionMatrix(),Ci.setSize(window.innerWidth,window.innerHeight)},WL=()=>{const e="power4.out";let t=.5;const i=1,r=0;nn.to("#alex-basurto",{duration:1.5,delay:t,opacity:i,y:r,ease:e}),nn.to("#full-stack",{duration:1.5,delay:t+.8,opacity:i,y:r,ease:e}),nn.to("#web-developer",{duration:1.5,delay:t+1.6,opacity:i,y:r,ease:e}),nn.to("#view-work",{duration:1.5,delay:t+2.4,opacity:i,y:r,ease:e})},XL=()=>new Promise(n=>{nn.to(".miniapp",{opacity:0,duration:1,ease:"power4.out"}),nn.to(qi.position,{z:25,duration:1.5,ease:"power3.inOut"}),nn.to(qi.rotation,{x:1.57,duration:2,ease:"power3.inOut"}),nn.to(qi.position,{y:1e3,duration:1.5,ease:"power3.in",delay:1.5,onComplete:()=>{n()}})}),jL=()=>{cancelAnimationFrame(SS),Ls.children.forEach(n=>{n.geometry&&typeof n.geometry.dispose=="function"&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(e=>{typeof e.dispose=="function"&&e.dispose()}):typeof n.material.dispose=="function"&&n.material.dispose())}),Ls.clear(),Ci.domElement&&Ci.domElement.parentNode&&Ci.domElement.parentNode.removeChild(Ci.domElement),window.removeEventListener("resize",bh)};function YL(){const n=L1();ye.useEffect(()=>{GL(),WL()},[]),ye.useEffect(()=>(window.addEventListener("resize",bh),()=>window.removeEventListener("resize",bh)),[]);const e=async()=>{await XL().then(()=>{jL(),n("/work")})};return fe.jsx(fe.Fragment,{children:fe.jsxs("div",{className:"miniapp absolute",children:[fe.jsx("h1",{id:"alex-basurto",className:"opacity-zero",children:"Alex Basurto"}),fe.jsx("p",{id:"full-stack",className:"fs-web-dev opacity-zero",children:"Full Stack"}),fe.jsx("p",{id:"web-developer",className:"fs-web-dev opacity-zero",children:"Web Developer"}),fe.jsx("button",{id:"view-work",onClick:e,className:"opacity-zero",children:"View Portfolio"})]})})}const qL=()=>{const e="expo.out";let t=.5;const i=1,r=0,s=0;nn.to("header",{duration:.5,opacity:i}),nn.to("footer",{duration:.5,opacity:i}),nn.to("#box-1",{duration:1.5,delay:t,opacity:i,y:r,x:s,ease:e}),nn.to("#box-2",{duration:1.5,delay:t+.5,opacity:i,y:r,x:s,ease:e}),nn.to("#box-3",{duration:1.5,delay:t+1,opacity:i,y:r,x:s,ease:e}),nn.to("#box-4",{duration:1.5,delay:t+1.5,opacity:i,y:r,x:s,ease:e})},$L=()=>{ye.useEffect(()=>{qL()},[]);const n=e=>{const t=document.querySelectorAll(".portfolio-box"),i=e.currentTarget,r=i.querySelectorAll("a"),s=i.querySelector(".portfolio-minibox"),o=i.querySelector(".portfolio-txt"),a=i.querySelector(".portfolio-title h3");window.getComputedStyle(o).opacity==="1"?(o.style.opacity="0",a.style.color="black",a.style.textShadow="2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)",s.style.backgroundColor="transparent",r.forEach(l=>{l.classList.add("non-clickable")})):(o.style.opacity="1",a.style.color="white",a.style.textShadow="none",s.style.backgroundColor="rgba(57, 57, 57, 0.8)",r.forEach(l=>{l.classList.remove("non-clickable")}),t.forEach(l=>{l!==i&&(l.querySelector(".portfolio-txt").style.opacity="0",l.querySelector(".portfolio-title h3").style.color="black",l.querySelector(".portfolio-title h3").style.textShadow="2px 2px 2px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8), 1px -1px 2px rgba(255, 255, 255, 0.8), -1px 1px 2px rgba(255, 255, 255, 0.8)",l.querySelector(".portfolio-minibox").style.backgroundColor="transparent",l.querySelectorAll("a").forEach(u=>{u.classList.add("non-clickable")}))}))};return fe.jsxs("div",{className:"work",children:[fe.jsxs("header",{children:[fe.jsx("h1",{children:"Alex Basurto"}),fe.jsx("h2",{children:"Full Stack Web Developer"})]}),fe.jsxs("main",{children:[fe.jsxs("article",{className:"portfolio-box",id:"box-1",onClick:n,children:[fe.jsx("div",{className:"portfolio-img",children:fe.jsx("img",{src:"/me2.jpg",alt:"Alex Basurto"})}),fe.jsxs("div",{className:"portfolio-minibox",children:[fe.jsx("div",{className:"portfolio-title",children:fe.jsx("h3",{children:"About Me"})}),fe.jsxs("div",{className:"portfolio-txt",children:[fe.jsx("p",{children:"With several years of experience in the IT field and a recent specialisation in full stack web development, I am ready to take my career to new heights."}),fe.jsx("p",{children:"My journey in technology, complemented by my enthusiasm for nature and sport, underlines my commitment to continuous learning and professional and personal development."})]})]})]}),fe.jsxs("article",{className:"portfolio-box",id:"box-2",onClick:n,children:[fe.jsx("div",{className:"portfolio-img",children:fe.jsx("img",{src:"/stairs.jpg",alt:"Escaleras"})}),fe.jsxs("div",{className:"portfolio-minibox",children:[fe.jsx("div",{className:"portfolio-title",children:fe.jsx("h3",{children:"My Career"})}),fe.jsxs("div",{className:"portfolio-txt",children:[fe.jsx("p",{children:"My diverse experience spans roles as a systems and network technician, culminating in a position as an IT manager within a corporate group."}),fe.jsx("p",{children:"In this role, I focused on ERP management, e-commerce, and digital transformation."}),fe.jsx("p",{children:"Currently, I am shifting my focus to web development, an area that deeply motivates me."})]})]})]}),fe.jsxs("article",{className:"portfolio-box",id:"box-3",onClick:n,children:[fe.jsx("div",{className:"portfolio-img",children:fe.jsx("img",{src:"/skills.jpg",alt:"Ordenador portátil"})}),fe.jsxs("div",{className:"portfolio-minibox",children:[fe.jsx("div",{className:"portfolio-title",children:fe.jsx("h3",{children:"My Skills"})}),fe.jsxs("div",{className:"portfolio-txt",children:[fe.jsx("p",{children:fe.jsx("strong",{children:"Tech Skills"})}),fe.jsxs("p",{children:[fe.jsx("span",{children:"WEB DEV:"}),"React, NodeJS, ExpressJS, JavaScript, HTML, CSS, Docker, Git",fe.jsx("span",{children:"DATABASES:"}),"MySQL, PostgreSQL, MongoDB, MS SQL Server",fe.jsx("span",{children:"OTHERS:"}),fe.jsx("p",{children:"Python, VisualBasic"}),fe.jsx("p",{children:"Enthusiast of Linux and Bash"})]}),fe.jsx("p",{id:"soft-skills",children:fe.jsx("strong",{children:"Soft Skills"})}),fe.jsxs("p",{children:["I bring a suite of soft skills crucial in today","'","s professional environment, including a strong work methodology, pragmatism, effective communication, and leadership."]})]})]})]}),fe.jsxs("article",{className:"portfolio-box",id:"box-4",onClick:n,children:[fe.jsx("div",{className:"portfolio-img",children:fe.jsx("img",{src:"/github-linkedin.png",alt:"Logotipos de GitHub y LinkedIn"})}),fe.jsxs("div",{className:"portfolio-minibox",children:[fe.jsx("div",{className:"portfolio-title",children:fe.jsx("h3",{children:"Contact and projects"})}),fe.jsxs("div",{className:"portfolio-txt",children:[fe.jsxs("p",{children:["Contact with me on"," ",fe.jsx("a",{href:"https://www.linkedin.com/in/alex-basurto/",className:" non-clickable",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]}),fe.jsxs("p",{children:["Explore my work on"," ",fe.jsx("a",{href:"https://github.com/alexBasurto/",className:" non-clickable",target:"_blank",rel:"noreferrer",children:"GitHub"})]}),fe.jsxs("p",{children:["Or browse my ",fe.jsx("a",{href:"https://github.com/alexBasurto/alexBasurto/blob/main/PROJECTS.md",className:" non-clickable",target:"_blank",rel:"noreferrer",children:"projects"})," directly"]})]})]})]})]}),fe.jsx("footer",{children:fe.jsx("p",{children:"Made with React and ThreeJS"})})]})};ad.createRoot(document.getElementById("root")).render(fe.jsx(M0.StrictMode,{children:fe.jsx($1,{children:fe.jsxs(Y1,{children:[fe.jsx(th,{path:"/",element:fe.jsx(YL,{})}),fe.jsx(th,{path:"/work",element:fe.jsx($L,{})})]})})}));
