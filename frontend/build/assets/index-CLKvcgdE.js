(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();var kh={exports:{}},_a={},Nh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function SE(){if(ym)return Ie;ym=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function V(D){return D===null||typeof D!="object"?null:(D=R&&D[R]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,X={};function W(D,$,Ee){this.props=D,this.context=$,this.refs=X,this.updater=Ee||B}W.prototype.isReactComponent={},W.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ue(){}ue.prototype=W.prototype;function me(D,$,Ee){this.props=D,this.context=$,this.refs=X,this.updater=Ee||B}var ge=me.prototype=new ue;ge.constructor=me,K(ge,W.prototype),ge.isPureReactComponent=!0;var Te=Array.isArray,ze=Object.prototype.hasOwnProperty,ke={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(D,$,Ee){var we,Se={},Ae=null,be=null;if($!=null)for(we in $.ref!==void 0&&(be=$.ref),$.key!==void 0&&(Ae=""+$.key),$)ze.call($,we)&&!k.hasOwnProperty(we)&&(Se[we]=$[we]);var De=arguments.length-2;if(De===1)Se.children=Ee;else if(1<De){for(var Ue=Array(De),Ut=0;Ut<De;Ut++)Ue[Ut]=arguments[Ut+2];Se.children=Ue}if(D&&D.defaultProps)for(we in De=D.defaultProps,De)Se[we]===void 0&&(Se[we]=De[we]);return{$$typeof:i,type:D,key:Ae,ref:be,props:Se,_owner:ke.current}}function A(D,$){return{$$typeof:i,type:D.type,key:$,ref:D.ref,props:D.props,_owner:D._owner}}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function P(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return $[Ee]})}var O=/\/+/g;function S(D,$){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):$.toString(36)}function Be(D,$,Ee,we,Se){var Ae=typeof D;(Ae==="undefined"||Ae==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(Ae){case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case i:case e:be=!0}}if(be)return be=D,Se=Se(be),D=we===""?"."+S(be,0):we,Te(Se)?(Ee="",D!=null&&(Ee=D.replace(O,"$&/")+"/"),Be(Se,$,Ee,"",function(Ut){return Ut})):Se!=null&&(x(Se)&&(Se=A(Se,Ee+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(O,"$&/")+"/")+D)),$.push(Se)),1;if(be=0,we=we===""?".":we+":",Te(D))for(var De=0;De<D.length;De++){Ae=D[De];var Ue=we+S(Ae,De);be+=Be(Ae,$,Ee,Ue,Se)}else if(Ue=V(D),typeof Ue=="function")for(D=Ue.call(D),De=0;!(Ae=D.next()).done;)Ae=Ae.value,Ue=we+S(Ae,De++),be+=Be(Ae,$,Ee,Ue,Se);else if(Ae==="object")throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return be}function gt(D,$,Ee){if(D==null)return D;var we=[],Se=0;return Be(D,we,"","",function(Ae){return $.call(Ee,Ae,Se++)}),we}function Pt(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var Ge={current:null},Z={transition:null},le={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ke};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:gt,forEach:function(D,$,Ee){gt(D,function(){$.apply(this,arguments)},Ee)},count:function(D){var $=0;return gt(D,function(){$++}),$},toArray:function(D){return gt(D,function($){return $})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=W,Ie.Fragment=t,Ie.Profiler=a,Ie.PureComponent=me,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ie.act=te,Ie.cloneElement=function(D,$,Ee){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var we=K({},D.props),Se=D.key,Ae=D.ref,be=D._owner;if($!=null){if($.ref!==void 0&&(Ae=$.ref,be=ke.current),$.key!==void 0&&(Se=""+$.key),D.type&&D.type.defaultProps)var De=D.type.defaultProps;for(Ue in $)ze.call($,Ue)&&!k.hasOwnProperty(Ue)&&(we[Ue]=$[Ue]===void 0&&De!==void 0?De[Ue]:$[Ue])}var Ue=arguments.length-2;if(Ue===1)we.children=Ee;else if(1<Ue){De=Array(Ue);for(var Ut=0;Ut<Ue;Ut++)De[Ut]=arguments[Ut+2];we.children=De}return{$$typeof:i,type:D.type,key:Se,ref:Ae,props:we,_owner:be}},Ie.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},Ie.createElement=I,Ie.createFactory=function(D){var $=I.bind(null,D);return $.type=D,$},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:m,render:D}},Ie.isValidElement=x,Ie.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Pt}},Ie.memo=function(D,$){return{$$typeof:v,type:D,compare:$===void 0?null:$}},Ie.startTransition=function(D){var $=Z.transition;Z.transition={};try{D()}finally{Z.transition=$}},Ie.unstable_act=te,Ie.useCallback=function(D,$){return Ge.current.useCallback(D,$)},Ie.useContext=function(D){return Ge.current.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D){return Ge.current.useDeferredValue(D)},Ie.useEffect=function(D,$){return Ge.current.useEffect(D,$)},Ie.useId=function(){return Ge.current.useId()},Ie.useImperativeHandle=function(D,$,Ee){return Ge.current.useImperativeHandle(D,$,Ee)},Ie.useInsertionEffect=function(D,$){return Ge.current.useInsertionEffect(D,$)},Ie.useLayoutEffect=function(D,$){return Ge.current.useLayoutEffect(D,$)},Ie.useMemo=function(D,$){return Ge.current.useMemo(D,$)},Ie.useReducer=function(D,$,Ee){return Ge.current.useReducer(D,$,Ee)},Ie.useRef=function(D){return Ge.current.useRef(D)},Ie.useState=function(D){return Ge.current.useState(D)},Ie.useSyncExternalStore=function(D,$,Ee){return Ge.current.useSyncExternalStore(D,$,Ee)},Ie.useTransition=function(){return Ge.current.useTransition()},Ie.version="18.3.1",Ie}var _m;function wd(){return _m||(_m=1,Nh.exports=SE()),Nh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function AE(){if(vm)return _a;vm=1;var i=wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,R={},V=null,B=null;v!==void 0&&(V=""+v),y.key!==void 0&&(V=""+y.key),y.ref!==void 0&&(B=y.ref);for(w in y)s.call(y,w)&&!c.hasOwnProperty(w)&&(R[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)R[w]===void 0&&(R[w]=y[w]);return{$$typeof:e,type:m,key:V,ref:B,props:R,_owner:a.current}}return _a.Fragment=t,_a.jsx=h,_a.jsxs=h,_a}var Em;function CE(){return Em||(Em=1,kh.exports=AE()),kh.exports}var j=CE(),lu={},xh={exports:{}},Kt={},Dh={exports:{}},Vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function RE(){return wm||(wm=1,(function(i){function e(Z,le){var te=Z.length;Z.push(le);e:for(;0<te;){var D=te-1>>>1,$=Z[D];if(0<a($,le))Z[D]=le,Z[te]=$,te=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var le=Z[0],te=Z.pop();if(te!==le){Z[0]=te;e:for(var D=0,$=Z.length,Ee=$>>>1;D<Ee;){var we=2*(D+1)-1,Se=Z[we],Ae=we+1,be=Z[Ae];if(0>a(Se,te))Ae<$&&0>a(be,Se)?(Z[D]=be,Z[Ae]=te,D=Ae):(Z[D]=Se,Z[we]=te,D=we);else if(Ae<$&&0>a(be,te))Z[D]=be,Z[Ae]=te,D=Ae;else break e}}return le}function a(Z,le){var te=Z.sortIndex-le.sortIndex;return te!==0?te:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,R=null,V=3,B=!1,K=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(Z){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=Z)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Te(Z){if(X=!1,ge(Z),!K)if(t(y)!==null)K=!0,Pt(ze);else{var le=t(v);le!==null&&Ge(Te,le.startTime-Z)}}function ze(Z,le){K=!1,X&&(X=!1,ue(I),I=-1),B=!0;var te=V;try{for(ge(le),R=t(y);R!==null&&(!(R.expirationTime>le)||Z&&!P());){var D=R.callback;if(typeof D=="function"){R.callback=null,V=R.priorityLevel;var $=D(R.expirationTime<=le);le=i.unstable_now(),typeof $=="function"?R.callback=$:R===t(y)&&s(y),ge(le)}else s(y);R=t(y)}if(R!==null)var Ee=!0;else{var we=t(v);we!==null&&Ge(Te,we.startTime-le),Ee=!1}return Ee}finally{R=null,V=te,B=!1}}var ke=!1,k=null,I=-1,A=5,x=-1;function P(){return!(i.unstable_now()-x<A)}function O(){if(k!==null){var Z=i.unstable_now();x=Z;var le=!0;try{le=k(!0,Z)}finally{le?S():(ke=!1,k=null)}}else ke=!1}var S;if(typeof me=="function")S=function(){me(O)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,gt=Be.port2;Be.port1.onmessage=O,S=function(){gt.postMessage(null)}}else S=function(){W(O,0)};function Pt(Z){k=Z,ke||(ke=!0,S())}function Ge(Z,le){I=W(function(){Z(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){K||B||(K=!0,Pt(ze))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(V){case 1:case 2:case 3:var le=3;break;default:le=V}var te=V;V=le;try{return Z()}finally{V=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=V;V=Z;try{return le()}finally{V=te}},i.unstable_scheduleCallback=function(Z,le,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:w++,callback:le,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>D?(Z.sortIndex=te,e(v,Z),t(y)===null&&Z===t(v)&&(X?(ue(I),I=-1):X=!0,Ge(Te,te-D))):(Z.sortIndex=$,e(y,Z),K||B||(K=!0,Pt(ze))),Z},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(Z){var le=V;return function(){var te=V;V=le;try{return Z.apply(this,arguments)}finally{V=te}}}})(Vh)),Vh}var Tm;function PE(){return Tm||(Tm=1,Dh.exports=RE()),Dh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function kE(){if(Im)return Kt;Im=1;var i=wd(),e=PE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function V(n){return y.call(R,n)?!0:y.call(w,n)?!1:v.test(n)?R[n]=!0:(w[n]=!0,!1)}function B(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,o,u){if(r===null||typeof r>"u"||B(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,o,u,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function me(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ue,me);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ue,me);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ue,me);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,o,u){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,o,d,u)&&(o=null),u||d===null?V(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),ke=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function $(n){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var Ee=!1;function we(n,r){if(!n||Ee)return"";Ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){u=F}n.call(r.prototype)}else{try{throw Error()}catch(F){u=F}n()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=u.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{Ee=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function Se(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case ke:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gt:return r=n.displayName||null,r!==null?r:Ae(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Ae(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ut(n){var r=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){u=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function is(n){n._valueTracker||(n._valueTracker=Ut(n))}function So(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Cr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ss(n,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ga(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=De(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function os(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function wi(n,r){os(n,r);var o=De(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?at(n,r.type,o):r.hasOwnProperty("defaultValue")&&at(n,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ao(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function at(n,r,o){(r!=="number"||Cr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var nt=Array.isArray;function mn(n,r,o,u){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Co(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ro(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(nt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:De(o)}}function Ka(n,r){var o=De(r.value),u=De(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Rr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Po(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Po(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pr,Qa=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ti(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ya=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(n){Ya.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),kr[r]=kr[n]})});function Nr(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||kr.hasOwnProperty(n)&&kr[n]?(""+r).trim():r+"px"}function ls(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Nr(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ko=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gn(n,r){if(r){if(ko[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function us(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xr=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nr=null,rr=null,et=null;function No(n){if(n=ra(n)){if(typeof nr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Il(r),nr(n.stateNode,n.type,r))}}function Dr(n){rr?et?et.push(n):et=[n]:rr=n}function Vr(){if(rr){var n=rr,r=et;if(et=rr=null,No(n),r)for(n=0;n<r.length;n++)No(r[n])}}function Xa(n,r){return n(r)}function Ja(){}var Nn=!1;function Za(n,r,o){if(Nn)return n(r,o);Nn=!0;try{return Xa(n,r,o)}finally{Nn=!1,(rr!==null||et!==null)&&(Ja(),Vr())}}function Ii(n,r){var o=n.stateNode;if(o===null)return null;var u=Il(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Or=!1;if(m)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Or=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Or=!1}function el(n,r,o,u,d,f,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(H){this.onError(H)}}var ir=!1,xn=null,hs=!1,on=null,tl={onError:function(n){ir=!0,xn=n}};function nl(n,r,o,u,d,f,_,T,C){ir=!1,xn=null,el.apply(tl,arguments)}function xo(n,r,o,u,d,f,_,T,C){if(nl.apply(this,arguments),ir){if(ir){var F=xn;ir=!1,xn=null}else throw Error(t(198));hs||(hs=!0,on=F)}}function yn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Do(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function rl(n){if(yn(n)!==n)throw Error(t(188))}function il(n){var r=n.alternate;if(!r){if(r=yn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return rl(d),n;if(f===u)return rl(d),r;f=f.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=f;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,u=f;break}if(T===u){_=!0,u=d,o=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===o){_=!0,o=f,u=d;break}if(T===u){_=!0,u=f,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function sl(n){return n=il(n),n!==null?Si(n):null}function Si(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Si(n);if(r!==null)return r;n=n.sibling}return null}var Vo=e.unstable_scheduleCallback,ds=e.unstable_cancelCallback,Ai=e.unstable_shouldYield,sr=e.unstable_requestPaint,qe=e.unstable_now,oc=e.unstable_getCurrentPriorityLevel,fs=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,Ci=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,ps=e.unstable_IdlePriority,Ri=null,Yt=null;function ol(n){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Pi,Dn=Math.log,an=Math.LN2;function Pi(n){return n>>>=0,n===0?32:31-(Dn(n)/an|0)|0}var Vn=64,Mr=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function or(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,f=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?u=Me(T):(f&=_,f!==0&&(u=Me(f)))}else _=o&~d,_!==0?u=Me(_):f!==0&&(u=Me(f));if(u===0)return 0;if(r!==0&&r!==u&&(r&d)===0&&(d=u&-u,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-Xt(r),d=1<<o,u|=n[o],r&=~d;return u}function ki(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ni(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-Xt(f),T=1<<_,C=d[_];C===-1?((T&o)===0||(T&u)!==0)&&(d[_]=ki(T,r)):C<=r&&(n.expiredLanes|=T),f&=~T}}function Mo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bo(){var n=Vn;return Vn<<=1,(Vn&4194240)===0&&(Vn=64),n}function Fo(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function xi(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=o}function ac(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Xt(o),f=1<<d;r[d]=0,u[d]=-1,n[d]=-1,o&=~f}}function Uo(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Xt(o),d=1<<u;d&r|n[u]&r&&(n[u]|=r),o&=~d}}var Re=0;function On(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jo,ms,zo,Bo,$o,Ln=!1,gs=[],Mn=null,bn=null,Tt=null,Di=new Map,ar=new Map,Jt=[],al="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function br(n,r){switch(n){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Di.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(r.pointerId)}}function _n(n,r,o,u,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ra(r),r!==null&&ms(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function ll(n,r,o,u,d){switch(r){case"focusin":return Mn=_n(Mn,n,r,o,u,d),!0;case"dragenter":return bn=_n(bn,n,r,o,u,d),!0;case"mouseover":return Tt=_n(Tt,n,r,o,u,d),!0;case"pointerover":var f=d.pointerId;return Di.set(f,_n(Di.get(f)||null,n,r,o,u,d)),!0;case"gotpointercapture":return f=d.pointerId,ar.set(f,_n(ar.get(f)||null,n,r,o,u,d)),!0}return!1}function ys(n){var r=Mi(n.target);if(r!==null){var o=yn(r);if(o!==null){if(r=o.tag,r===13){if(r=Do(o),r!==null){n.blockedOn=r,$o(n.priority,function(){zo(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function je(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=_s(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xr=u,o.target.dispatchEvent(u),xr=null}else return r=ra(o),r!==null&&ms(r),n.blockedOn=o,!1;r.shift()}return!0}function ul(n,r,o){je(n)&&o.delete(r)}function lc(){Ln=!1,Mn!==null&&je(Mn)&&(Mn=null),bn!==null&&je(bn)&&(bn=null),Tt!==null&&je(Tt)&&(Tt=null),Di.forEach(ul),ar.forEach(ul)}function Fr(n,r){n.blockedOn===r&&(n.blockedOn=null,Ln||(Ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lc)))}function Ur(n){function r(d){return Fr(d,n)}if(0<gs.length){Fr(gs[0],n);for(var o=1;o<gs.length;o++){var u=gs[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Mn!==null&&Fr(Mn,n),bn!==null&&Fr(bn,n),Tt!==null&&Fr(Tt,n),Di.forEach(r),ar.forEach(r),o=0;o<Jt.length;o++)u=Jt[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Jt.length&&(o=Jt[0],o.blockedOn===null);)ys(o),o.blockedOn===null&&Jt.shift()}var lr=Te.ReactCurrentBatchConfig,ur=!0;function Fn(n,r,o,u){var d=Re,f=lr.transition;lr.transition=null;try{Re=1,qo(n,r,o,u)}finally{Re=d,lr.transition=f}}function cl(n,r,o,u){var d=Re,f=lr.transition;lr.transition=null;try{Re=4,qo(n,r,o,u)}finally{Re=d,lr.transition=f}}function qo(n,r,o,u){if(ur){var d=_s(n,r,o,u);if(d===null)vc(n,r,u,Un,o),br(n,u);else if(ll(d,n,r,o,u))u.stopPropagation();else if(br(n,u),r&4&&-1<al.indexOf(n)){for(;d!==null;){var f=ra(d);if(f!==null&&jo(f),f=_s(n,r,o,u),f===null&&vc(n,r,u,Un,o),f===d)break;d=f}d!==null&&u.stopPropagation()}else vc(n,r,u,null,o)}}var Un=null;function _s(n,r,o,u){if(Un=null,n=cs(u),n=Mi(n),n!==null)if(r=yn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Do(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Un=n,null}function vs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oc()){case fs:return 1;case Oo:return 4;case Ci:case Lo:return 16;case ps:return 536870912;default:return 16}default:return 16}}var Zt=null,Es=null,cr=null;function hl(){if(cr)return cr;var n,r=Es,o=r.length,u,d="value"in Zt?Zt.value:Zt.textContent,f=d.length;for(n=0;n<o&&r[n]===d[n];n++);var _=o-n;for(u=1;u<=_&&r[o-u]===d[f-u];u++);return cr=d.slice(n,1<u?1-u:void 0)}function Vi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function Ho(){return!1}function kt(n){function r(o,u,d,f,_){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jn:Ho,this.isPropagationStopped=Ho,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=kt(zn),jr=te({},zn,{view:0,detail:0}),ws=kt(jr),Ts,Is,en,Li=te({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ye,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==en&&(en&&n.type==="mousemove"?(Ts=n.screenX-en.screenX,Is=n.screenY-en.screenY):Is=Ts=0,en=n),Ts)},movementY:function(n){return"movementY"in n?n.movementY:Is}}),Wo=kt(Li),dl=te({},Li,{dataTransfer:0}),fl=kt(dl),Ss=te({},jr,{relatedTarget:0}),It=kt(Ss),pl=te({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),ml=kt(pl),zr=te({},zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=kt(zr),p=te({},zn,{data:0}),g=kt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function ye(){return J}var rt=te({},jr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Vi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ye,charCode:function(n){return n.type==="keypress"?Vi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fe=kt(rt),lt=te({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tn=kt(lt),hr=te({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ye}),Bn=kt(hr),$n=te({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),As=kt($n),Go=te({},Li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=kt(Go),vv=[9,13,27,32],uc=m&&"CompositionEvent"in window,Ko=null;m&&"documentMode"in document&&(Ko=document.documentMode);var Ev=m&&"TextEvent"in window&&!Ko,uf=m&&(!uc||Ko&&8<Ko&&11>=Ko),cf=" ",hf=!1;function df(n,r){switch(n){case"keyup":return vv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function wv(n,r){switch(n){case"compositionend":return ff(r);case"keypress":return r.which!==32?null:(hf=!0,cf);case"textInput":return n=r.data,n===cf&&hf?null:n;default:return null}}function Tv(n,r){if(Cs)return n==="compositionend"||!uc&&df(n,r)?(n=hl(),cr=Es=Zt=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return uf&&r.locale!=="ko"?null:r.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Iv[n.type]:r==="textarea"}function mf(n,r,o,u){Dr(u),r=El(r,"onChange"),0<r.length&&(o=new Oi("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Qo=null,Yo=null;function Sv(n){Vf(n,0)}function gl(n){var r=xs(n);if(So(r))return n}function Av(n,r){if(n==="change")return r}var gf=!1;if(m){var cc;if(m){var hc="oninput"in document;if(!hc){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),hc=typeof yf.oninput=="function"}cc=hc}else cc=!1;gf=cc&&(!document.documentMode||9<document.documentMode)}function _f(){Qo&&(Qo.detachEvent("onpropertychange",vf),Yo=Qo=null)}function vf(n){if(n.propertyName==="value"&&gl(Yo)){var r=[];mf(r,Yo,n,cs(n)),Za(Sv,r)}}function Cv(n,r,o){n==="focusin"?(_f(),Qo=r,Yo=o,Qo.attachEvent("onpropertychange",vf)):n==="focusout"&&_f()}function Rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gl(Yo)}function Pv(n,r){if(n==="click")return gl(r)}function kv(n,r){if(n==="input"||n==="change")return gl(r)}function Nv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var vn=typeof Object.is=="function"?Object.is:Nv;function Xo(n,r){if(vn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!y.call(r,d)||!vn(n[d],r[d]))return!1}return!0}function Ef(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wf(n,r){var o=Ef(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ef(o)}}function Tf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Tf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function If(){for(var n=window,r=Cr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Cr(n.document)}return r}function dc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function xv(n){var r=If(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Tf(o.ownerDocument.documentElement,o)){if(u!==null&&dc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!n.extend&&f>u&&(d=u,u=f,f=d),d=wf(o,f);var _=wf(o,u);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>u?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dv=m&&"documentMode"in document&&11>=document.documentMode,Rs=null,fc=null,Jo=null,pc=!1;function Sf(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||Rs==null||Rs!==Cr(u)||(u=Rs,"selectionStart"in u&&dc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Jo&&Xo(Jo,u)||(Jo=u,u=El(fc,"onSelect"),0<u.length&&(r=new Oi("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Rs)))}function yl(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ps={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},mc={},Af={};m&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function _l(n){if(mc[n])return mc[n];if(!Ps[n])return n;var r=Ps[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Af)return mc[n]=r[o];return n}var Cf=_l("animationend"),Rf=_l("animationiteration"),Pf=_l("animationstart"),kf=_l("transitionend"),Nf=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){Nf.set(n,r),c(r,[n])}for(var gc=0;gc<xf.length;gc++){var yc=xf[gc],Vv=yc.toLowerCase(),Ov=yc[0].toUpperCase()+yc.slice(1);Br(Vv,"on"+Ov)}Br(Cf,"onAnimationEnd"),Br(Rf,"onAnimationIteration"),Br(Pf,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(kf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Df(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,xo(u,r,void 0,n),n.currentTarget=null}function Vf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var f=void 0;if(r)for(var _=u.length-1;0<=_;_--){var T=u[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==f&&d.isPropagationStopped())break e;Df(d,T,F),f=C}else for(_=0;_<u.length;_++){if(T=u[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==f&&d.isPropagationStopped())break e;Df(d,T,F),f=C}}}if(hs)throw n=on,hs=!1,on=null,n}function He(n,r){var o=r[Ac];o===void 0&&(o=r[Ac]=new Set);var u=n+"__bubble";o.has(u)||(Of(r,n,2,!1),o.add(u))}function _c(n,r,o){var u=0;r&&(u|=4),Of(o,n,u,r)}var vl="_reactListening"+Math.random().toString(36).slice(2);function ea(n){if(!n[vl]){n[vl]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lv.has(o)||_c(o,!1,n),_c(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[vl]||(r[vl]=!0,_c("selectionchange",!1,r))}}function Of(n,r,o,u){switch(vs(r)){case 1:var d=Fn;break;case 4:d=cl;break;default:d=qo}o=d.bind(null,r,o,n),d=void 0,!Or||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function vc(n,r,o,u,d){var f=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=u.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Mi(T),_===null)return;if(C=_.tag,C===5||C===6){u=f=_;continue e}T=T.parentNode}}u=u.return}Za(function(){var F=f,H=cs(o),G=[];e:{var q=Nf.get(n);if(q!==void 0){var ee=Oi,ie=n;switch(n){case"keypress":if(Vi(o)===0)break e;case"keydown":case"keyup":ee=Fe;break;case"focusin":ie="focus",ee=It;break;case"focusout":ie="blur",ee=It;break;case"beforeblur":case"afterblur":ee=It;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Bn;break;case Cf:case Rf:case Pf:ee=ml;break;case kf:ee=As;break;case"scroll":ee=ws;break;case"wheel":ee=_v;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=tn}var oe=(r&4)!==0,it=!oe&&n==="scroll",L=oe?q!==null?q+"Capture":null:q;oe=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=Ii(N,L),Y!=null&&oe.push(ta(N,Y,b)))),it)break;N=N.return}0<oe.length&&(q=new ee(q,ie,null,o,H),G.push({event:q,listeners:oe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&o!==xr&&(ie=o.relatedTarget||o.fromElement)&&(Mi(ie)||ie[dr]))break e;if((ee||q)&&(q=H.window===H?H:(q=H.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=F,ie=ie?Mi(ie):null,ie!==null&&(it=yn(ie),ie!==it||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(oe=Wo,Y="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=tn,Y="onPointerLeave",L="onPointerEnter",N="pointer"),it=ee==null?q:xs(ee),b=ie==null?q:xs(ie),q=new oe(Y,N+"leave",ee,o,H),q.target=it,q.relatedTarget=b,Y=null,Mi(H)===F&&(oe=new oe(L,N+"enter",ie,o,H),oe.target=b,oe.relatedTarget=it,Y=oe),it=Y,ee&&ie)t:{for(oe=ee,L=ie,N=0,b=oe;b;b=ks(b))N++;for(b=0,Y=L;Y;Y=ks(Y))b++;for(;0<N-b;)oe=ks(oe),N--;for(;0<b-N;)L=ks(L),b--;for(;N--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=ks(oe),L=ks(L)}oe=null}else oe=null;ee!==null&&Lf(G,q,ee,oe,!1),ie!==null&&it!==null&&Lf(G,it,ie,oe,!0)}}e:{if(q=F?xs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ae=Av;else if(pf(q))if(gf)ae=kv;else{ae=Rv;var ce=Cv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=Pv);if(ae&&(ae=ae(n,F))){mf(G,ae,o,H);break e}ce&&ce(n,q,F),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&at(q,"number",q.value)}switch(ce=F?xs(F):window,n){case"focusin":(pf(ce)||ce.contentEditable==="true")&&(Rs=ce,fc=F,Jo=null);break;case"focusout":Jo=fc=Rs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Sf(G,o,H);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Sf(G,o,H)}var he;if(uc)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Cs?df(n,o)&&(pe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(pe="onCompositionStart");pe&&(uf&&o.locale!=="ko"&&(Cs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Cs&&(he=hl()):(Zt=H,Es="value"in Zt?Zt.value:Zt.textContent,Cs=!0)),ce=El(F,pe),0<ce.length&&(pe=new g(pe,n,null,o,H),G.push({event:pe,listeners:ce}),he?pe.data=he:(he=ff(o),he!==null&&(pe.data=he)))),(he=Ev?wv(n,o):Tv(n,o))&&(F=El(F,"onBeforeInput"),0<F.length&&(H=new g("onBeforeInput","beforeinput",null,o,H),G.push({event:H,listeners:F}),H.data=he))}Vf(G,r)})}function ta(n,r,o){return{instance:n,listener:r,currentTarget:o}}function El(n,r){for(var o=r+"Capture",u=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ii(n,o),f!=null&&u.unshift(ta(n,f,d)),f=Ii(n,r),f!=null&&u.push(ta(n,f,d))),n=n.return}return u}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lf(n,r,o,u,d){for(var f=r._reactName,_=[];o!==null&&o!==u;){var T=o,C=T.alternate,F=T.stateNode;if(C!==null&&C===u)break;T.tag===5&&F!==null&&(T=F,d?(C=Ii(o,f),C!=null&&_.unshift(ta(o,C,T))):d||(C=Ii(o,f),C!=null&&_.push(ta(o,C,T)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var Mv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function Mf(n){return(typeof n=="string"?n:""+n).replace(Mv,`
`).replace(bv,"")}function wl(n,r,o){if(r=Mf(r),Mf(n)!==r&&o)throw Error(t(425))}function Tl(){}var Ec=null,wc=null;function Tc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(n){return bf.resolve(null).then(n).catch(jv)}:Ic;function jv(n){setTimeout(function(){throw n})}function Sc(n,r){var o=r,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Ur(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Ur(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Ff(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ns,na="__reactProps$"+Ns,dr="__reactContainer$"+Ns,Ac="__reactEvents$"+Ns,zv="__reactListeners$"+Ns,Bv="__reactHandles$"+Ns;function Mi(n){var r=n[qn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[dr]||o[qn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Ff(n);n!==null;){if(o=n[qn])return o;n=Ff(n)}return r}n=o,o=n.parentNode}return null}function ra(n){return n=n[qn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Il(n){return n[na]||null}var Cc=[],Ds=-1;function qr(n){return{current:n}}function We(n){0>Ds||(n.current=Cc[Ds],Cc[Ds]=null,Ds--)}function $e(n,r){Ds++,Cc[Ds]=n.current,n.current=r}var Hr={},Nt=qr(Hr),$t=qr(!1),bi=Hr;function Vs(n,r){var o=n.type.contextTypes;if(!o)return Hr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=r[f];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Sl(){We($t),We(Nt)}function Uf(n,r,o){if(Nt.current!==Hr)throw Error(t(168));$e(Nt,r),$e($t,o)}function jf(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return te({},o,u)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,bi=Nt.current,$e(Nt,n),$e($t,$t.current),!0}function zf(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=jf(n,r,bi),u.__reactInternalMemoizedMergedChildContext=n,We($t),We(Nt),$e(Nt,n)):We($t),$e($t,o)}var fr=null,Cl=!1,Rc=!1;function Bf(n){fr===null?fr=[n]:fr.push(n)}function $v(n){Cl=!0,Bf(n)}function Wr(){if(!Rc&&fr!==null){Rc=!0;var n=0,r=Re;try{var o=fr;for(Re=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}fr=null,Cl=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),Vo(fs,Wr),d}finally{Re=r,Rc=!1}}return null}var Os=[],Ls=0,Rl=null,Pl=0,ln=[],un=0,Fi=null,pr=1,mr="";function Ui(n,r){Os[Ls++]=Pl,Os[Ls++]=Rl,Rl=n,Pl=r}function $f(n,r,o){ln[un++]=pr,ln[un++]=mr,ln[un++]=Fi,Fi=n;var u=pr;n=mr;var d=32-Xt(u)-1;u&=~(1<<d),o+=1;var f=32-Xt(r)+d;if(30<f){var _=d-d%5;f=(u&(1<<_)-1).toString(32),u>>=_,d-=_,pr=1<<32-Xt(r)+d|o<<d|u,mr=f+n}else pr=1<<f|o<<d|u,mr=n}function Pc(n){n.return!==null&&(Ui(n,1),$f(n,1,0))}function kc(n){for(;n===Rl;)Rl=Os[--Ls],Os[Ls]=null,Pl=Os[--Ls],Os[Ls]=null;for(;n===Fi;)Fi=ln[--un],ln[un]=null,mr=ln[--un],ln[un]=null,pr=ln[--un],ln[un]=null}var nn=null,rn=null,Ke=!1,En=null;function qf(n,r){var o=fn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Hf(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Fi!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=fn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xc(n){if(Ke){var r=rn;if(r){var o=r;if(!Hf(n,r)){if(Nc(n))throw Error(t(418));r=$r(o.nextSibling);var u=nn;r&&Hf(n,r)?qf(u,o):(n.flags=n.flags&-4097|2,Ke=!1,nn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,nn=n}}}function Wf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function kl(n){if(n!==nn)return!1;if(!Ke)return Wf(n),Ke=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Tc(n.type,n.memoizedProps)),r&&(r=rn)){if(Nc(n))throw Gf(),Error(t(418));for(;r;)qf(n,r),r=$r(r.nextSibling)}if(Wf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){rn=$r(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?$r(n.stateNode.nextSibling):null;return!0}function Gf(){for(var n=rn;n;)n=$r(n.nextSibling)}function Ms(){rn=nn=null,Ke=!1}function Dc(n){En===null?En=[n]:En.push(n)}var qv=Te.ReactCurrentBatchConfig;function ia(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Nl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Kf(n){var r=n._init;return r(n._payload)}function Qf(n){function r(L,N){if(n){var b=L.deletions;b===null?(L.deletions=[N],L.flags|=16):b.push(N)}}function o(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function u(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ei(L,N),L.index=0,L.sibling=null,L}function f(L,N,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<N?(L.flags|=2,N):b):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,N,b,Y){return N===null||N.tag!==6?(N=Ih(b,L.mode,Y),N.return=L,N):(N=d(N,b),N.return=L,N)}function C(L,N,b,Y){var ae=b.type;return ae===k?H(L,N,b.props.children,Y,b.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pt&&Kf(ae)===N.type)?(Y=d(N,b.props),Y.ref=ia(L,N,b),Y.return=L,Y):(Y=eu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=ia(L,N,b),Y.return=L,Y)}function F(L,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Sh(b,L.mode,Y),N.return=L,N):(N=d(N,b.children||[]),N.return=L,N)}function H(L,N,b,Y,ae){return N===null||N.tag!==7?(N=Gi(b,L.mode,Y,ae),N.return=L,N):(N=d(N,b),N.return=L,N)}function G(L,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Ih(""+N,L.mode,b),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ze:return b=eu(N.type,N.key,N.props,null,L.mode,b),b.ref=ia(L,null,N),b.return=L,b;case ke:return N=Sh(N,L.mode,b),N.return=L,N;case Pt:var Y=N._init;return G(L,Y(N._payload),b)}if(nt(N)||le(N))return N=Gi(N,L.mode,b,null),N.return=L,N;Nl(L,N)}return null}function q(L,N,b,Y){var ae=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(L,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:return b.key===ae?C(L,N,b,Y):null;case ke:return b.key===ae?F(L,N,b,Y):null;case Pt:return ae=b._init,q(L,N,ae(b._payload),Y)}if(nt(b)||le(b))return ae!==null?null:H(L,N,b,Y,null);Nl(L,b)}return null}function ee(L,N,b,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,T(N,L,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ze:return L=L.get(Y.key===null?b:Y.key)||null,C(N,L,Y,ae);case ke:return L=L.get(Y.key===null?b:Y.key)||null,F(N,L,Y,ae);case Pt:var ce=Y._init;return ee(L,N,b,ce(Y._payload),ae)}if(nt(Y)||le(Y))return L=L.get(b)||null,H(N,L,Y,ae,null);Nl(N,Y)}return null}function ie(L,N,b,Y){for(var ae=null,ce=null,he=N,pe=N=0,vt=null;he!==null&&pe<b.length;pe++){he.index>pe?(vt=he,he=null):vt=he.sibling;var Le=q(L,he,b[pe],Y);if(Le===null){he===null&&(he=vt);break}n&&he&&Le.alternate===null&&r(L,he),N=f(Le,N,pe),ce===null?ae=Le:ce.sibling=Le,ce=Le,he=vt}if(pe===b.length)return o(L,he),Ke&&Ui(L,pe),ae;if(he===null){for(;pe<b.length;pe++)he=G(L,b[pe],Y),he!==null&&(N=f(he,N,pe),ce===null?ae=he:ce.sibling=he,ce=he);return Ke&&Ui(L,pe),ae}for(he=u(L,he);pe<b.length;pe++)vt=ee(he,L,pe,b[pe],Y),vt!==null&&(n&&vt.alternate!==null&&he.delete(vt.key===null?pe:vt.key),N=f(vt,N,pe),ce===null?ae=vt:ce.sibling=vt,ce=vt);return n&&he.forEach(function(ti){return r(L,ti)}),Ke&&Ui(L,pe),ae}function oe(L,N,b,Y){var ae=le(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var ce=ae=null,he=N,pe=N=0,vt=null,Le=b.next();he!==null&&!Le.done;pe++,Le=b.next()){he.index>pe?(vt=he,he=null):vt=he.sibling;var ti=q(L,he,Le.value,Y);if(ti===null){he===null&&(he=vt);break}n&&he&&ti.alternate===null&&r(L,he),N=f(ti,N,pe),ce===null?ae=ti:ce.sibling=ti,ce=ti,he=vt}if(Le.done)return o(L,he),Ke&&Ui(L,pe),ae;if(he===null){for(;!Le.done;pe++,Le=b.next())Le=G(L,Le.value,Y),Le!==null&&(N=f(Le,N,pe),ce===null?ae=Le:ce.sibling=Le,ce=Le);return Ke&&Ui(L,pe),ae}for(he=u(L,he);!Le.done;pe++,Le=b.next())Le=ee(he,L,pe,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&he.delete(Le.key===null?pe:Le.key),N=f(Le,N,pe),ce===null?ae=Le:ce.sibling=Le,ce=Le);return n&&he.forEach(function(IE){return r(L,IE)}),Ke&&Ui(L,pe),ae}function it(L,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ze:e:{for(var ae=b.key,ce=N;ce!==null;){if(ce.key===ae){if(ae=b.type,ae===k){if(ce.tag===7){o(L,ce.sibling),N=d(ce,b.props.children),N.return=L,L=N;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pt&&Kf(ae)===ce.type){o(L,ce.sibling),N=d(ce,b.props),N.ref=ia(L,ce,b),N.return=L,L=N;break e}o(L,ce);break}else r(L,ce);ce=ce.sibling}b.type===k?(N=Gi(b.props.children,L.mode,Y,b.key),N.return=L,L=N):(Y=eu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=ia(L,N,b),Y.return=L,L=Y)}return _(L);case ke:e:{for(ce=b.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){o(L,N.sibling),N=d(N,b.children||[]),N.return=L,L=N;break e}else{o(L,N);break}else r(L,N);N=N.sibling}N=Sh(b,L.mode,Y),N.return=L,L=N}return _(L);case Pt:return ce=b._init,it(L,N,ce(b._payload),Y)}if(nt(b))return ie(L,N,b,Y);if(le(b))return oe(L,N,b,Y);Nl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(o(L,N.sibling),N=d(N,b),N.return=L,L=N):(o(L,N),N=Ih(b,L.mode,Y),N.return=L,L=N),_(L)):o(L,N)}return it}var bs=Qf(!0),Yf=Qf(!1),xl=qr(null),Dl=null,Fs=null,Vc=null;function Oc(){Vc=Fs=Dl=null}function Lc(n){var r=xl.current;We(xl),n._currentValue=r}function Mc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Us(n,r){Dl=n,Vc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function cn(n){var r=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:r,next:null},Fs===null){if(Dl===null)throw Error(t(308));Fs=n,Dl.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return r}var ji=null;function bc(n){ji===null?ji=[n]:ji.push(n)}function Xf(n,r,o,u){var d=r.interleaved;return d===null?(o.next=o,bc(r)):(o.next=d.next,d.next=o),r.interleaved=o,gr(n,u)}function gr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Gr=!1;function Fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ve&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,gr(n,o)}return d=u.interleaved,d===null?(r.next=r,bc(u)):(r.next=d.next,d.next=r),u.interleaved=r,gr(n,o)}function Vl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Uo(n,o)}}function Zf(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=_:f=f.next=_,o=o.next}while(o!==null);f===null?d=f=r:f=f.next=r}else d=f=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Ol(n,r,o,u){var d=n.updateQueue;Gr=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?f=F:_.next=F,_=C;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=F:T.next=F,H.lastBaseUpdate=C))}if(f!==null){var G=d.baseState;_=0,H=F=C=null,T=f;do{var q=T.lane,ee=T.eventTime;if((u&q)===q){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,oe=T;switch(q=r,ee=o,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){G=ie.call(ee,G,q);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,q=typeof ie=="function"?ie.call(ee,G,q):ie,q==null)break e;G=te({},G,q);break e;case 2:Gr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(F=H=ee,C=G):H=H.next=ee,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(H===null&&(C=G),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);$i|=_,n.lanes=_,n.memoizedState=G}}function ep(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var sa={},Hn=qr(sa),oa=qr(sa),aa=qr(sa);function zi(n){if(n===sa)throw Error(t(174));return n}function Uc(n,r){switch($e(aa,r),$e(oa,n),$e(Hn,sa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:as(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=as(r,n)}We(Hn),$e(Hn,r)}function js(){We(Hn),We(oa),We(aa)}function tp(n){zi(aa.current);var r=zi(Hn.current),o=as(r,n.type);r!==o&&($e(oa,n),$e(Hn,o))}function jc(n){oa.current===n&&(We(Hn),We(oa))}var Xe=qr(0);function Ll(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zc=[];function Bc(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var Ml=Te.ReactCurrentDispatcher,$c=Te.ReactCurrentBatchConfig,Bi=0,Je=null,ft=null,yt=null,bl=!1,la=!1,ua=0,Hv=0;function xt(){throw Error(t(321))}function qc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!vn(n[o],r[o]))return!1;return!0}function Hc(n,r,o,u,d,f){if(Bi=f,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ml.current=n===null||n.memoizedState===null?Qv:Yv,n=o(u,d),la){f=0;do{if(la=!1,ua=0,25<=f)throw Error(t(301));f+=1,yt=ft=null,r.updateQueue=null,Ml.current=Xv,n=o(u,d)}while(la)}if(Ml.current=jl,r=ft!==null&&ft.next!==null,Bi=0,yt=ft=Je=null,bl=!1,r)throw Error(t(300));return n}function Wc(){var n=ua!==0;return ua=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=n:yt=yt.next=n,yt}function hn(){if(ft===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var r=yt===null?Je.memoizedState:yt.next;if(r!==null)yt=r,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},yt===null?Je.memoizedState=yt=n:yt=yt.next=n}return yt}function ca(n,r){return typeof r=="function"?r(n):r}function Gc(n){var r=hn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ft,d=u.baseQueue,f=o.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}u.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,u=u.baseState;var T=_=null,C=null,F=f;do{var H=F.lane;if((Bi&H)===H)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:n(u,F.action);else{var G={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=G,_=u):C=C.next=G,Je.lanes|=H,$i|=H}F=F.next}while(F!==null&&F!==f);C===null?_=u:C.next=T,vn(u,r.memoizedState)||(Ht=!0),r.memoizedState=u,r.baseState=_,r.baseQueue=C,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do f=d.lane,Je.lanes|=f,$i|=f,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Kc(n){var r=hn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,f=r.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);vn(f,r.memoizedState)||(Ht=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),o.lastRenderedState=f}return[f,u]}function np(){}function rp(n,r){var o=Je,u=hn(),d=r(),f=!vn(u.memoizedState,d);if(f&&(u.memoizedState=d,Ht=!0),u=u.queue,Qc(op.bind(null,o,u,n),[n]),u.getSnapshot!==r||f||yt!==null&&yt.memoizedState.tag&1){if(o.flags|=2048,ha(9,sp.bind(null,o,u,d,r),void 0,null),_t===null)throw Error(t(349));(Bi&30)!==0||ip(o,r,d)}return d}function ip(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function sp(n,r,o,u){r.value=o,r.getSnapshot=u,ap(r)&&lp(n)}function op(n,r,o){return o(function(){ap(r)&&lp(n)})}function ap(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!vn(n,o)}catch{return!0}}function lp(n){var r=gr(n,1);r!==null&&Sn(r,n,1,-1)}function up(n){var r=Wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},r.queue=n,n=n.dispatch=Kv.bind(null,Je,n),[r.memoizedState,n]}function ha(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function cp(){return hn().memoizedState}function Fl(n,r,o,u){var d=Wn();Je.flags|=n,d.memoizedState=ha(1|r,o,void 0,u===void 0?null:u)}function Ul(n,r,o,u){var d=hn();u=u===void 0?null:u;var f=void 0;if(ft!==null){var _=ft.memoizedState;if(f=_.destroy,u!==null&&qc(u,_.deps)){d.memoizedState=ha(r,o,f,u);return}}Je.flags|=n,d.memoizedState=ha(1|r,o,f,u)}function hp(n,r){return Fl(8390656,8,n,r)}function Qc(n,r){return Ul(2048,8,n,r)}function dp(n,r){return Ul(4,2,n,r)}function fp(n,r){return Ul(4,4,n,r)}function pp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function mp(n,r,o){return o=o!=null?o.concat([n]):null,Ul(4,4,pp.bind(null,r,n),o)}function Yc(){}function gp(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&qc(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function yp(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&qc(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function _p(n,r,o){return(Bi&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=o):(vn(o,r)||(o=bo(),Je.lanes|=o,$i|=o,n.baseState=!0),r)}function Wv(n,r){var o=Re;Re=o!==0&&4>o?o:4,n(!0);var u=$c.transition;$c.transition={};try{n(!1),r()}finally{Re=o,$c.transition=u}}function vp(){return hn().memoizedState}function Gv(n,r,o){var u=Jr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ep(n))wp(r,o);else if(o=Xf(n,r,o,u),o!==null){var d=zt();Sn(o,n,u,d),Tp(o,r,u)}}function Kv(n,r,o){var u=Jr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))wp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,o);if(d.hasEagerState=!0,d.eagerState=T,vn(T,_)){var C=r.interleaved;C===null?(d.next=d,bc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}o=Xf(n,r,d,u),o!==null&&(d=zt(),Sn(o,n,u,d),Tp(o,r,u))}}function Ep(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function wp(n,r){la=bl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Tp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Uo(n,o)}}var jl={readContext:cn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Qv={readContext:cn,useCallback:function(n,r){return Wn().memoizedState=[n,r===void 0?null:r],n},useContext:cn,useEffect:hp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Fl(4194308,4,pp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Fl(4,2,n,r)},useMemo:function(n,r){var o=Wn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Wn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Gv.bind(null,Je,n),[u.memoizedState,n]},useRef:function(n){var r=Wn();return n={current:n},r.memoizedState=n},useState:up,useDebugValue:Yc,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=up(!1),r=n[0];return n=Wv.bind(null,n[1]),Wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Je,d=Wn();if(Ke){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),_t===null)throw Error(t(349));(Bi&30)!==0||ip(u,r,o)}d.memoizedState=o;var f={value:o,getSnapshot:r};return d.queue=f,hp(op.bind(null,u,f,n),[n]),u.flags|=2048,ha(9,sp.bind(null,u,f,o,r),void 0,null),o},useId:function(){var n=Wn(),r=_t.identifierPrefix;if(Ke){var o=mr,u=pr;o=(u&~(1<<32-Xt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=ua++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Hv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Yv={readContext:cn,useCallback:gp,useContext:cn,useEffect:Qc,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:yp,useReducer:Gc,useRef:cp,useState:function(){return Gc(ca)},useDebugValue:Yc,useDeferredValue:function(n){var r=hn();return _p(r,ft.memoizedState,n)},useTransition:function(){var n=Gc(ca)[0],r=hn().memoizedState;return[n,r]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1},Xv={readContext:cn,useCallback:gp,useContext:cn,useEffect:Qc,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:yp,useReducer:Kc,useRef:cp,useState:function(){return Kc(ca)},useDebugValue:Yc,useDeferredValue:function(n){var r=hn();return ft===null?r.memoizedState=n:_p(r,ft.memoizedState,n)},useTransition:function(){var n=Kc(ca)[0],r=hn().memoizedState;return[n,r]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1};function wn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Xc(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:te({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var zl={isMounted:function(n){return(n=n._reactInternals)?yn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=zt(),d=Jr(n),f=yr(u,d);f.payload=r,o!=null&&(f.callback=o),r=Kr(n,f,d),r!==null&&(Sn(r,n,d,u),Vl(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=zt(),d=Jr(n),f=yr(u,d);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Kr(n,f,d),r!==null&&(Sn(r,n,d,u),Vl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zt(),u=Jr(n),d=yr(o,u);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,u),r!==null&&(Sn(r,n,u,o),Vl(r,n,u))}};function Ip(n,r,o,u,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,f,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(o,u)||!Xo(d,f):!0}function Sp(n,r,o){var u=!1,d=Hr,f=r.contextType;return typeof f=="object"&&f!==null?f=cn(f):(d=qt(r)?bi:Nt.current,u=r.contextTypes,f=(u=u!=null)?Vs(n,d):Hr),r=new r(o,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=zl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Ap(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&zl.enqueueReplaceState(r,r.state,null)}function Jc(n,r,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Fc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=cn(f):(f=qt(r)?bi:Nt.current,d.context=Vs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Xc(n,r,f,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&zl.enqueueReplaceState(d,d.state,null),Ol(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var o="",u=r;do o+=Se(u),u=u.return;while(u);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function Zc(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function eh(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Jv=typeof WeakMap=="function"?WeakMap:Map;function Cp(n,r,o){o=yr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Kl||(Kl=!0,mh=u),eh(n,r)},o}function Rp(n,r,o){o=yr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;o.payload=function(){return u(d)},o.callback=function(){eh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){eh(n,r),typeof u!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function Pp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Jv;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(d.add(o),n=dE.bind(null,n,r,o),r.then(n,n))}function kp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Np(n,r,o,u,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=yr(-1,1),r.tag=2,Kr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Zv=Te.ReactCurrentOwner,Ht=!1;function jt(n,r,o,u){r.child=n===null?Yf(r,null,o,u):bs(r,n.child,o,u)}function xp(n,r,o,u,d){o=o.render;var f=r.ref;return Us(r,d),u=Hc(n,r,o,u,f,d),o=Wc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ke&&o&&Pc(r),r.flags|=1,jt(n,r,u,d),r.child)}function Dp(n,r,o,u,d){if(n===null){var f=o.type;return typeof f=="function"&&!Th(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=f,Vp(n,r,f,u,d)):(n=eu(o.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(o=o.compare,o=o!==null?o:Xo,o(_,u)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=ei(f,u),n.ref=r.ref,n.return=r,r.child=n}function Vp(n,r,o,u,d){if(n!==null){var f=n.memoizedProps;if(Xo(f,u)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=u=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,_r(n,r,d)}return th(n,r,o,u,d)}function Op(n,r,o){var u=r.pendingProps,d=u.children,f=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e($s,sn),sn|=o;else{if((o&1073741824)===0)return n=f!==null?f.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e($s,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:o,$e($s,sn),sn|=u}else f!==null?(u=f.baseLanes|o,r.memoizedState=null):u=o,$e($s,sn),sn|=u;return jt(n,r,d,o),r.child}function Lp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function th(n,r,o,u,d){var f=qt(o)?bi:Nt.current;return f=Vs(r,f),Us(r,d),o=Hc(n,r,o,u,f,d),u=Wc(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ke&&u&&Pc(r),r.flags|=1,jt(n,r,o,d),r.child)}function Mp(n,r,o,u,d){if(qt(o)){var f=!0;Al(r)}else f=!1;if(Us(r,d),r.stateNode===null)$l(n,r),Sp(r,o,u),Jc(r,o,u,d),u=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var C=_.context,F=o.contextType;typeof F=="object"&&F!==null?F=cn(F):(F=qt(o)?bi:Nt.current,F=Vs(r,F));var H=o.getDerivedStateFromProps,G=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==u||C!==F)&&Ap(r,_,u,F),Gr=!1;var q=r.memoizedState;_.state=q,Ol(r,u,_,d),C=r.memoizedState,T!==u||q!==C||$t.current||Gr?(typeof H=="function"&&(Xc(r,o,H,u),C=r.memoizedState),(T=Gr||Ip(r,o,T,u,q,C,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=C),_.props=u,_.state=C,_.context=F,u=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{_=r.stateNode,Jf(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:wn(r.type,T),_.props=F,G=r.pendingProps,q=_.context,C=o.contextType,typeof C=="object"&&C!==null?C=cn(C):(C=qt(o)?bi:Nt.current,C=Vs(r,C));var ee=o.getDerivedStateFromProps;(H=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==C)&&Ap(r,_,u,C),Gr=!1,q=r.memoizedState,_.state=q,Ol(r,u,_,d);var ie=r.memoizedState;T!==G||q!==ie||$t.current||Gr?(typeof ee=="function"&&(Xc(r,o,ee,u),ie=r.memoizedState),(F=Gr||Ip(r,o,F,u,q,ie,C)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,ie,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,ie,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ie),_.props=u,_.state=ie,_.context=C,u=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),u=!1)}return nh(n,r,o,u,f,d)}function nh(n,r,o,u,d,f){Lp(n,r);var _=(r.flags&128)!==0;if(!u&&!_)return d&&zf(r,o,!1),_r(n,r,f);u=r.stateNode,Zv.current=r;var T=_&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,f),r.child=bs(r,null,T,f)):jt(n,r,T,f),r.memoizedState=u.state,d&&zf(r,o,!0),r.child}function bp(n){var r=n.stateNode;r.pendingContext?Uf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Uf(n,r.context,!1),Uc(n,r.containerInfo)}function Fp(n,r,o,u,d){return Ms(),Dc(d),r.flags|=256,jt(n,r,o,u),r.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function ih(n){return{baseLanes:n,cachePool:null,transitions:null}}function Up(n,r,o){var u=r.pendingProps,d=Xe.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Xe,d&1),n===null)return xc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=u.children,n=u.fallback,f?(u=r.mode,f=r.child,_={mode:"hidden",children:_},(u&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=tu(_,u,0,null),n=Gi(n,u,o,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=ih(o),r.memoizedState=rh,n):sh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return eE(n,r,_,u,T,d,o);if(f){f=u.fallback,_=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:u.children};return(_&1)===0&&r.child!==d?(u=r.child,u.childLanes=0,u.pendingProps=C,r.deletions=null):(u=ei(d,C),u.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ei(T,f):(f=Gi(f,_,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,_=n.child.memoizedState,_=_===null?ih(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~o,r.memoizedState=rh,u}return f=n.child,n=f.sibling,u=ei(f,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function sh(n,r){return r=tu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Bl(n,r,o,u){return u!==null&&Dc(u),bs(r,n.child,null,o),n=sh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function eE(n,r,o,u,d,f,_){if(o)return r.flags&256?(r.flags&=-257,u=Zc(Error(t(422))),Bl(n,r,_,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=u.fallback,d=r.mode,u=tu({mode:"visible",children:u.children},d,0,null),f=Gi(f,d,_,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,(r.mode&1)!==0&&bs(r,n.child,null,_),r.child.memoizedState=ih(_),r.memoizedState=rh,f);if((r.mode&1)===0)return Bl(n,r,_,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var T=u.dgst;return u=T,f=Error(t(419)),u=Zc(f,u,void 0),Bl(n,r,_,u)}if(T=(_&n.childLanes)!==0,Ht||T){if(u=_t,u!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,gr(n,d),Sn(u,n,d,-1))}return wh(),u=Zc(Error(t(421))),Bl(n,r,_,u)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=fE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,rn=$r(d.nextSibling),nn=r,Ke=!0,En=null,n!==null&&(ln[un++]=pr,ln[un++]=mr,ln[un++]=Fi,pr=n.id,mr=n.overflow,Fi=r),r=sh(r,u.children),r.flags|=4096,r)}function jp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Mc(n.return,r,o)}function oh(n,r,o,u,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=o,f.tailMode=d)}function zp(n,r,o){var u=r.pendingProps,d=u.revealOrder,f=u.tail;if(jt(n,r,u.children,o),u=Xe.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jp(n,o,r);else if(n.tag===19)jp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($e(Xe,u),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&Ll(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),oh(r,!1,d,o,f);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ll(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}oh(r,!0,o,null,f);break;case"together":oh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function $l(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),$i|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=ei(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ei(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function tE(n,r,o){switch(r.tag){case 3:bp(r),Ms();break;case 5:tp(r);break;case 1:qt(r.type)&&Al(r);break;case 4:Uc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,d=r.memoizedProps.value;$e(xl,u._currentValue),u._currentValue=d;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?($e(Xe,Xe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Up(n,r,o):($e(Xe,Xe.current&1),n=_r(n,r,o),n!==null?n.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return zp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Xe,Xe.current),u)break;return null;case 22:case 23:return r.lanes=0,Op(n,r,o)}return _r(n,r,o)}var Bp,ah,$p,qp;Bp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ah=function(){},$p=function(n,r,o,u){var d=n.memoizedProps;if(d!==u){n=r.stateNode,zi(Hn.current);var f=null;switch(o){case"input":d=ss(n,d),u=ss(n,u),f=[];break;case"select":d=te({},d,{value:void 0}),u=te({},u,{value:void 0}),f=[];break;case"textarea":d=Co(n,d),u=Co(n,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Tl)}gn(o,u);var _;o=null;for(F in d)if(!u.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in u){var C=u[F];if(T=d?.[F],u.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(o||(o={}),o[_]=C[_])}else o||(f||(f=[]),f.push(F,o)),o=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(f=f||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&He("scroll",n),f||T===C||(f=[])):(f=f||[]).push(F,C))}o&&(f=f||[]).push("style",o);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},qp=function(n,r,o,u){o!==u&&(r.flags|=4)};function da(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function nE(n,r,o){var u=r.pendingProps;switch(kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return qt(r.type)&&Sl(),Dt(r),null;case 3:return u=r.stateNode,js(),We($t),We(Nt),Bc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(kl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,En!==null&&(_h(En),En=null))),ah(n,r),Dt(r),null;case 5:jc(r);var d=zi(aa.current);if(o=r.type,n!==null&&r.stateNode!=null)$p(n,r,o,u,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=zi(Hn.current),kl(r)){u=r.stateNode,o=r.type;var f=r.memoizedProps;switch(u[qn]=r,u[na]=f,n=(r.mode&1)!==0,o){case"dialog":He("cancel",u),He("close",u);break;case"iframe":case"object":case"embed":He("load",u);break;case"video":case"audio":for(d=0;d<Zo.length;d++)He(Zo[d],u);break;case"source":He("error",u);break;case"img":case"image":case"link":He("error",u),He("load",u);break;case"details":He("toggle",u);break;case"input":Ga(u,f),He("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},He("invalid",u);break;case"textarea":Ro(u,f),He("invalid",u)}gn(o,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?u.textContent!==T&&(f.suppressHydrationWarning!==!0&&wl(u.textContent,T,n),d=["children",T]):typeof T=="number"&&u.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&wl(u.textContent,T,n),d=["children",""+T]):a.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&He("scroll",u)}switch(o){case"input":is(u),Ao(u,f,!0);break;case"textarea":is(u),Rr(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Tl)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Po(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=_.createElement(o,{is:u.is}):(n=_.createElement(o),o==="select"&&(_=n,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):n=_.createElementNS(n,o),n[qn]=r,n[na]=u,Bp(n,r,!1,!1),r.stateNode=n;e:{switch(_=us(o,u),o){case"dialog":He("cancel",n),He("close",n),d=u;break;case"iframe":case"object":case"embed":He("load",n),d=u;break;case"video":case"audio":for(d=0;d<Zo.length;d++)He(Zo[d],n);d=u;break;case"source":He("error",n),d=u;break;case"img":case"image":case"link":He("error",n),He("load",n),d=u;break;case"details":He("toggle",n),d=u;break;case"input":Ga(n,u),d=ss(n,u),He("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=te({},u,{value:void 0}),He("invalid",n);break;case"textarea":Ro(n,u),d=Co(n,u),He("invalid",n);break;default:d=u}gn(o,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var C=T[f];f==="style"?ls(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Qa(n,C)):f==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Ti(n,C):typeof C=="number"&&Ti(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?C!=null&&f==="onScroll"&&He("scroll",n):C!=null&&ge(n,f,C,_))}switch(o){case"input":is(n),Ao(n,u,!1);break;case"textarea":is(n),Rr(n);break;case"option":u.value!=null&&n.setAttribute("value",""+De(u.value));break;case"select":n.multiple=!!u.multiple,f=u.value,f!=null?mn(n,!!u.multiple,f,!1):u.defaultValue!=null&&mn(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Tl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)qp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=zi(aa.current),zi(Hn.current),kl(r)){if(u=r.stateNode,o=r.memoizedProps,u[qn]=r,(f=u.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:wl(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wl(u.nodeValue,o,(n.mode&1)!==0)}f&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[qn]=r,r.stateNode=u}return Dt(r),null;case 13:if(We(Xe),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Gf(),Ms(),r.flags|=98560,f=!1;else if(f=kl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[qn]=r}else Ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),f=!1}else En!==null&&(_h(En),En=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?pt===0&&(pt=3):wh())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return js(),ah(n,r),n===null&&ea(r.stateNode.containerInfo),Dt(r),null;case 10:return Lc(r.type._context),Dt(r),null;case 17:return qt(r.type)&&Sl(),Dt(r),null;case 19:if(We(Xe),f=r.memoizedState,f===null)return Dt(r),null;if(u=(r.flags&128)!==0,_=f.rendering,_===null)if(u)da(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ll(n),_!==null){for(r.flags|=128,da(f,!1),u=_.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)f=o,n=u,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $e(Xe,Xe.current&1|2),r.child}n=n.sibling}f.tail!==null&&qe()>qs&&(r.flags|=128,u=!0,da(f,!1),r.lanes=4194304)}else{if(!u)if(n=Ll(_),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),da(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Ke)return Dt(r),null}else 2*qe()-f.renderingStartTime>qs&&o!==1073741824&&(r.flags|=128,u=!0,da(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(o=f.last,o!==null?o.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=qe(),r.sibling=null,o=Xe.current,$e(Xe,u?o&1|2:o&1),r):(Dt(r),null);case 22:case 23:return Eh(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function rE(n,r){switch(kc(r),r.tag){case 1:return qt(r.type)&&Sl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),We($t),We(Nt),Bc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return jc(r),null;case 13:if(We(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Xe),null;case 4:return js(),null;case 10:return Lc(r.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var ql=!1,Vt=!1,iE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Bs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){tt(n,r,u)}else o.current=null}function lh(n,r,o){try{o()}catch(u){tt(n,r,u)}}var Hp=!1;function sE(n,r){if(Ec=ur,n=If(),dc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var _=0,T=-1,C=-1,F=0,H=0,G=n,q=null;t:for(;;){for(var ee;G!==o||d!==0&&G.nodeType!==3||(T=_+d),G!==f||u!==0&&G.nodeType!==3||(C=_+u),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===o&&++F===d&&(T=_),q===f&&++H===u&&(C=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}o=T===-1||C===-1?null:{start:T,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(wc={focusedElem:n,selectionRange:o},ur=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,it=ie.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?oe:wn(r.type,oe),it);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Hp,Hp=!1,ie}function fa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&lh(r,o,f)}d=d.next}while(d!==u)}}function Hl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function uh(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Wp(n){var r=n.alternate;r!==null&&(n.alternate=null,Wp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[na],delete r[Ac],delete r[zv],delete r[Bv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gp(n){return n.tag===5||n.tag===3||n.tag===4}function Kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ch(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Tl));else if(u!==4&&(n=n.child,n!==null))for(ch(n,r,o),n=n.sibling;n!==null;)ch(n,r,o),n=n.sibling}function hh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(hh(n,r,o),n=n.sibling;n!==null;)hh(n,r,o),n=n.sibling}var St=null,Tn=!1;function Qr(n,r,o){for(o=o.child;o!==null;)Qp(n,r,o),o=o.sibling}function Qp(n,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ri,o)}catch{}switch(o.tag){case 5:Vt||Bs(o,r);case 6:var u=St,d=Tn;St=null,Qr(n,r,o),St=u,Tn=d,St!==null&&(Tn?(n=St,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):St.removeChild(o.stateNode));break;case 18:St!==null&&(Tn?(n=St,o=o.stateNode,n.nodeType===8?Sc(n.parentNode,o):n.nodeType===1&&Sc(n,o),Ur(n)):Sc(St,o.stateNode));break;case 4:u=St,d=Tn,St=o.stateNode.containerInfo,Tn=!0,Qr(n,r,o),St=u,Tn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&lh(o,r,_),d=d.next}while(d!==u)}Qr(n,r,o);break;case 1:if(!Vt&&(Bs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(T){tt(o,r,T)}Qr(n,r,o);break;case 21:Qr(n,r,o);break;case 22:o.mode&1?(Vt=(u=Vt)||o.memoizedState!==null,Qr(n,r,o),Vt=u):Qr(n,r,o);break;default:Qr(n,r,o)}}function Yp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new iE),r.forEach(function(u){var d=pE.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function In(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Tn=!1;break e;case 3:St=T.stateNode.containerInfo,Tn=!0;break e;case 4:St=T.stateNode.containerInfo,Tn=!0;break e}T=T.return}if(St===null)throw Error(t(160));Qp(f,_,d),St=null,Tn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){tt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Xp(r,n),r=r.sibling}function Xp(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(In(r,n),Gn(n),u&4){try{fa(3,n,n.return),Hl(3,n)}catch(oe){tt(n,n.return,oe)}try{fa(5,n,n.return)}catch(oe){tt(n,n.return,oe)}}break;case 1:In(r,n),Gn(n),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(In(r,n),Gn(n),u&512&&o!==null&&Bs(o,o.return),n.flags&32){var d=n.stateNode;try{Ti(d,"")}catch(oe){tt(n,n.return,oe)}}if(u&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=o!==null?o.memoizedProps:f,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&os(d,f),us(T,_);var F=us(T,f);for(_=0;_<C.length;_+=2){var H=C[_],G=C[_+1];H==="style"?ls(d,G):H==="dangerouslySetInnerHTML"?Qa(d,G):H==="children"?Ti(d,G):ge(d,H,G,F)}switch(T){case"input":wi(d,f);break;case"textarea":Ka(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?mn(d,!!f.multiple,ee,!1):q!==!!f.multiple&&(f.defaultValue!=null?mn(d,!!f.multiple,f.defaultValue,!0):mn(d,!!f.multiple,f.multiple?[]:"",!1))}d[na]=f}catch(oe){tt(n,n.return,oe)}}break;case 6:if(In(r,n),Gn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){tt(n,n.return,oe)}}break;case 3:if(In(r,n),Gn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ur(r.containerInfo)}catch(oe){tt(n,n.return,oe)}break;case 4:In(r,n),Gn(n);break;case 13:In(r,n),Gn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(ph=qe())),u&4&&Yp(n);break;case 22:if(H=o!==null&&o.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||H,In(r,n),Vt=F):In(r,n),Gn(n),u&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!H&&(n.mode&1)!==0)for(re=n,H=n.child;H!==null;){for(G=re=H;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:fa(4,q,q.return);break;case 1:Bs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){u=q,o=q.return;try{r=u,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(oe){tt(u,o,oe)}}break;case 5:Bs(q,q.return);break;case 22:if(q.memoizedState!==null){em(G);continue}}ee!==null?(ee.return=q,re=ee):em(G)}H=H.sibling}e:for(H=null,G=n;;){if(G.tag===5){if(H===null){H=G;try{d=G.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=G.stateNode,C=G.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Nr("display",_))}catch(oe){tt(n,n.return,oe)}}}else if(G.tag===6){if(H===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(oe){tt(n,n.return,oe)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;H===G&&(H=null),G=G.return}H===G&&(H=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:In(r,n),Gn(n),u&4&&Yp(n);break;case 21:break;default:In(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Gp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ti(d,""),u.flags&=-33);var f=Kp(n);hh(n,f,d);break;case 3:case 4:var _=u.stateNode.containerInfo,T=Kp(n);ch(n,T,_);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function oE(n,r,o){re=n,Jp(n)}function Jp(n,r,o){for(var u=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&u){var _=d.memoizedState!==null||ql;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Vt;T=ql;var F=Vt;if(ql=_,(Vt=C)&&!F)for(re=d;re!==null;)_=re,C=_.child,_.tag===22&&_.memoizedState!==null?tm(d):C!==null?(C.return=_,re=C):tm(d);for(;f!==null;)re=f,Jp(f),f=f.sibling;re=d,ql=T,Vt=F}Zp(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):Zp(n)}}function Zp(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||Hl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Vt)if(o===null)u.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:wn(r.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&ep(r,f,u);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}ep(r,_,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var G=H.dehydrated;G!==null&&Ur(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&uh(r)}catch(q){tt(r,r.return,q)}}if(r===n){re=null;break}if(o=r.sibling,o!==null){o.return=r.return,re=o;break}re=r.return}}function em(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var o=r.sibling;if(o!==null){o.return=r.return,re=o;break}re=r.return}}function tm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Hl(4,r)}catch(C){tt(r,o,C)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(C){tt(r,d,C)}}var f=r.return;try{uh(r)}catch(C){tt(r,f,C)}break;case 5:var _=r.return;try{uh(r)}catch(C){tt(r,_,C)}}}catch(C){tt(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var aE=Math.ceil,Wl=Te.ReactCurrentDispatcher,dh=Te.ReactCurrentOwner,dn=Te.ReactCurrentBatchConfig,Ve=0,_t=null,ut=null,At=0,sn=0,$s=qr(0),pt=0,pa=null,$i=0,Gl=0,fh=0,ma=null,Wt=null,ph=0,qs=1/0,vr=null,Kl=!1,mh=null,Yr=null,Ql=!1,Xr=null,Yl=0,ga=0,gh=null,Xl=-1,Jl=0;function zt(){return(Ve&6)!==0?qe():Xl!==-1?Xl:Xl=qe()}function Jr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&At!==0?At&-At:qv.transition!==null?(Jl===0&&(Jl=bo()),Jl):(n=Re,n!==0||(n=window.event,n=n===void 0?16:vs(n.type)),n)}function Sn(n,r,o,u){if(50<ga)throw ga=0,gh=null,Error(t(185));xi(n,o,u),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Gl|=o),pt===4&&Zr(n,At)),Gt(n,u),o===1&&Ve===0&&(r.mode&1)===0&&(qs=qe()+500,Cl&&Wr()))}function Gt(n,r){var o=n.callbackNode;Ni(n,r);var u=or(n,n===_t?At:0);if(u===0)o!==null&&ds(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&ds(o),r===1)n.tag===0?$v(rm.bind(null,n)):Bf(rm.bind(null,n)),Uv(function(){(Ve&6)===0&&Wr()}),o=null;else{switch(On(u)){case 1:o=fs;break;case 4:o=Oo;break;case 16:o=Ci;break;case 536870912:o=ps;break;default:o=Ci}o=hm(o,nm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function nm(n,r){if(Xl=-1,Jl=0,(Ve&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Hs()&&n.callbackNode!==o)return null;var u=or(n,n===_t?At:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Zl(n,u);else{r=u;var d=Ve;Ve|=2;var f=sm();(_t!==n||At!==r)&&(vr=null,qs=qe()+500,Hi(n,r));do try{cE();break}catch(T){im(n,T)}while(!0);Oc(),Wl.current=f,Ve=d,ut!==null?r=0:(_t=null,At=0,r=pt)}if(r!==0){if(r===2&&(d=Mo(n),d!==0&&(u=d,r=yh(n,d))),r===1)throw o=pa,Hi(n,0),Zr(n,u),Gt(n,qe()),o;if(r===6)Zr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!lE(d)&&(r=Zl(n,u),r===2&&(f=Mo(n),f!==0&&(u=f,r=yh(n,f))),r===1))throw o=pa,Hi(n,0),Zr(n,u),Gt(n,qe()),o;switch(n.finishedWork=d,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Wi(n,Wt,vr);break;case 3:if(Zr(n,u),(u&130023424)===u&&(r=ph+500-qe(),10<r)){if(or(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ic(Wi.bind(null,n,Wt,vr),r);break}Wi(n,Wt,vr);break;case 4:if(Zr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,d=-1;0<u;){var _=31-Xt(u);f=1<<_,_=r[_],_>d&&(d=_),u&=~f}if(u=d,u=qe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*aE(u/1960))-u,10<u){n.timeoutHandle=Ic(Wi.bind(null,n,Wt,vr),u);break}Wi(n,Wt,vr);break;case 5:Wi(n,Wt,vr);break;default:throw Error(t(329))}}}return Gt(n,qe()),n.callbackNode===o?nm.bind(null,n):null}function yh(n,r){var o=ma;return n.current.memoizedState.isDehydrated&&(Hi(n,r).flags|=256),n=Zl(n,r),n!==2&&(r=Wt,Wt=o,r!==null&&_h(r)),n}function _h(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function lE(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],f=d.getSnapshot;d=d.value;try{if(!vn(f(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~fh,r&=~Gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Xt(r),u=1<<o;n[o]=-1,r&=~u}}function rm(n){if((Ve&6)!==0)throw Error(t(327));Hs();var r=or(n,0);if((r&1)===0)return Gt(n,qe()),null;var o=Zl(n,r);if(n.tag!==0&&o===2){var u=Mo(n);u!==0&&(r=u,o=yh(n,u))}if(o===1)throw o=pa,Hi(n,0),Zr(n,r),Gt(n,qe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Wi(n,Wt,vr),Gt(n,qe()),null}function vh(n,r){var o=Ve;Ve|=1;try{return n(r)}finally{Ve=o,Ve===0&&(qs=qe()+500,Cl&&Wr())}}function qi(n){Xr!==null&&Xr.tag===0&&(Ve&6)===0&&Hs();var r=Ve;Ve|=1;var o=dn.transition,u=Re;try{if(dn.transition=null,Re=1,n)return n()}finally{Re=u,dn.transition=o,Ve=r,(Ve&6)===0&&Wr()}}function Eh(){sn=$s.current,We($s)}function Hi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Fv(o)),ut!==null)for(o=ut.return;o!==null;){var u=o;switch(kc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Sl();break;case 3:js(),We($t),We(Nt),Bc();break;case 5:jc(u);break;case 4:js();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:Lc(u.type._context);break;case 22:case 23:Eh()}o=o.return}if(_t=n,ut=n=ei(n.current,null),At=sn=r,pt=0,pa=null,fh=Gl=$i=0,Wt=ma=null,ji!==null){for(r=0;r<ji.length;r++)if(o=ji[r],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,f=o.pending;if(f!==null){var _=f.next;f.next=d,u.next=_}o.pending=u}ji=null}return n}function im(n,r){do{var o=ut;try{if(Oc(),Ml.current=jl,bl){for(var u=Je.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}bl=!1}if(Bi=0,yt=ft=Je=null,la=!1,ua=0,dh.current=null,o===null||o.return===null){pt=1,pa=r,ut=null;break}e:{var f=n,_=o.return,T=o,C=r;if(r=At,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,H=T,G=H.tag;if((H.mode&1)===0&&(G===0||G===11||G===15)){var q=H.alternate;q?(H.updateQueue=q.updateQueue,H.memoizedState=q.memoizedState,H.lanes=q.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=kp(_);if(ee!==null){ee.flags&=-257,Np(ee,_,T,f,r),ee.mode&1&&Pp(f,F,r),r=ee,C=F;var ie=r.updateQueue;if(ie===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else ie.add(C);break e}else{if((r&1)===0){Pp(f,F,r),wh();break e}C=Error(t(426))}}else if(Ke&&T.mode&1){var it=kp(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Np(it,_,T,f,r),Dc(zs(C,T));break e}}f=C=zs(C,T),pt!==4&&(pt=2),ma===null?ma=[f]:ma.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=Cp(f,C,r);Zf(f,L);break e;case 1:T=C;var N=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yr===null||!Yr.has(b)))){f.flags|=65536,r&=-r,f.lanes|=r;var Y=Rp(f,T,r);Zf(f,Y);break e}}f=f.return}while(f!==null)}am(o)}catch(ae){r=ae,ut===o&&o!==null&&(ut=o=o.return);continue}break}while(!0)}function sm(){var n=Wl.current;return Wl.current=jl,n===null?jl:n}function wh(){(pt===0||pt===3||pt===2)&&(pt=4),_t===null||($i&268435455)===0&&(Gl&268435455)===0||Zr(_t,At)}function Zl(n,r){var o=Ve;Ve|=2;var u=sm();(_t!==n||At!==r)&&(vr=null,Hi(n,r));do try{uE();break}catch(d){im(n,d)}while(!0);if(Oc(),Ve=o,Wl.current=u,ut!==null)throw Error(t(261));return _t=null,At=0,pt}function uE(){for(;ut!==null;)om(ut)}function cE(){for(;ut!==null&&!Ai();)om(ut)}function om(n){var r=cm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?am(n):ut=r,dh.current=null}function am(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=nE(o,r,sn),o!==null){ut=o;return}}else{if(o=rE(o,r),o!==null){o.flags&=32767,ut=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ut=null;return}}if(r=r.sibling,r!==null){ut=r;return}ut=r=n}while(r!==null);pt===0&&(pt=5)}function Wi(n,r,o){var u=Re,d=dn.transition;try{dn.transition=null,Re=1,hE(n,r,o,u)}finally{dn.transition=d,Re=u}return null}function hE(n,r,o,u){do Hs();while(Xr!==null);if((Ve&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=o.lanes|o.childLanes;if(ac(n,f),n===_t&&(ut=_t=null,At=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ql||(Ql=!0,hm(Ci,function(){return Hs(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=dn.transition,dn.transition=null;var _=Re;Re=1;var T=Ve;Ve|=4,dh.current=null,sE(n,o),Xp(o,n),xv(wc),ur=!!Ec,wc=Ec=null,n.current=o,oE(o),sr(),Ve=T,Re=_,dn.transition=f}else n.current=o;if(Ql&&(Ql=!1,Xr=n,Yl=d),f=n.pendingLanes,f===0&&(Yr=null),ol(o.stateNode),Gt(n,qe()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Kl)throw Kl=!1,n=mh,mh=null,n;return(Yl&1)!==0&&n.tag!==0&&Hs(),f=n.pendingLanes,(f&1)!==0?n===gh?ga++:(ga=0,gh=n):ga=0,Wr(),null}function Hs(){if(Xr!==null){var n=On(Yl),r=dn.transition,o=Re;try{if(dn.transition=null,Re=16>n?16:n,Xr===null)var u=!1;else{if(n=Xr,Xr=null,Yl=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var f=re,_=f.child;if((re.flags&16)!==0){var T=f.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:fa(8,H,f)}var G=H.child;if(G!==null)G.return=H,re=G;else for(;re!==null;){H=re;var q=H.sibling,ee=H.return;if(Wp(H),H===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=f.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var it=oe.sibling;oe.sibling=null,oe=it}while(oe!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,re=_;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:fa(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,re=L;break e}re=f.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Hl(9,T)}}catch(ae){tt(T,T.return,ae)}if(T===_){re=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,re=Y;break e}re=T.return}}if(Ve=d,Wr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ri,n)}catch{}u=!0}return u}finally{Re=o,dn.transition=r}}return!1}function lm(n,r,o){r=zs(o,r),r=Cp(n,r,1),n=Kr(n,r,1),r=zt(),n!==null&&(xi(n,1,r),Gt(n,r))}function tt(n,r,o){if(n.tag===3)lm(n,n,o);else for(;r!==null;){if(r.tag===3){lm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Yr===null||!Yr.has(u))){n=zs(o,n),n=Rp(r,n,1),r=Kr(r,n,1),n=zt(),r!==null&&(xi(r,1,n),Gt(r,n));break}}r=r.return}}function dE(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&o,_t===n&&(At&o)===o&&(pt===4||pt===3&&(At&130023424)===At&&500>qe()-ph?Hi(n,0):fh|=o),Gt(n,r)}function um(n,r){r===0&&((n.mode&1)===0?r=1:(r=Mr,Mr<<=1,(Mr&130023424)===0&&(Mr=4194304)));var o=zt();n=gr(n,r),n!==null&&(xi(n,r,o),Gt(n,o))}function fE(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),um(n,o)}function pE(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),um(n,o)}var cm;cm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||$t.current)Ht=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Ht=!1,tE(n,r,o);Ht=(n.flags&131072)!==0}else Ht=!1,Ke&&(r.flags&1048576)!==0&&$f(r,Pl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;$l(n,r),n=r.pendingProps;var d=Vs(r,Nt.current);Us(r,o),d=Hc(null,r,u,n,d,o);var f=Wc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(u)?(f=!0,Al(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fc(r),d.updater=zl,r.stateNode=d,d._reactInternals=r,Jc(r,u,n,o),r=nh(null,r,u,!0,f,o)):(r.tag=0,Ke&&f&&Pc(r),jt(null,r,d,o),r=r.child),r;case 16:u=r.elementType;e:{switch($l(n,r),n=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=gE(u),n=wn(u,n),d){case 0:r=th(null,r,u,n,o);break e;case 1:r=Mp(null,r,u,n,o);break e;case 11:r=xp(null,r,u,n,o);break e;case 14:r=Dp(null,r,u,wn(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:wn(u,d),th(n,r,u,d,o);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:wn(u,d),Mp(n,r,u,d,o);case 3:e:{if(bp(r),n===null)throw Error(t(387));u=r.pendingProps,f=r.memoizedState,d=f.element,Jf(n,r),Ol(r,u,null,o);var _=r.memoizedState;if(u=_.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=zs(Error(t(423)),r),r=Fp(n,r,u,o,d);break e}else if(u!==d){d=zs(Error(t(424)),r),r=Fp(n,r,u,o,d);break e}else for(rn=$r(r.stateNode.containerInfo.firstChild),nn=r,Ke=!0,En=null,o=Yf(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ms(),u===d){r=_r(n,r,o);break e}jt(n,r,u,o)}r=r.child}return r;case 5:return tp(r),n===null&&xc(r),u=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Tc(u,d)?_=null:f!==null&&Tc(u,f)&&(r.flags|=32),Lp(n,r),jt(n,r,_,o),r.child;case 6:return n===null&&xc(r),null;case 13:return Up(n,r,o);case 4:return Uc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=bs(r,null,u,o):jt(n,r,u,o),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:wn(u,d),xp(n,r,u,d,o);case 7:return jt(n,r,r.pendingProps,o),r.child;case 8:return jt(n,r,r.pendingProps.children,o),r.child;case 12:return jt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,$e(xl,u._currentValue),u._currentValue=_,f!==null)if(vn(f.value,_)){if(f.children===d.children&&!$t.current){r=_r(n,r,o);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var C=T.firstContext;C!==null;){if(C.context===u){if(f.tag===1){C=yr(-1,o&-o),C.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?C.next=C:(C.next=H.next,H.next=C),F.pending=C}}f.lanes|=o,C=f.alternate,C!==null&&(C.lanes|=o),Mc(f.return,o,r),T.lanes|=o;break}C=C.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),Mc(_,o,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}jt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,Us(r,o),d=cn(d),u=u(d),r.flags|=1,jt(n,r,u,o),r.child;case 14:return u=r.type,d=wn(u,r.pendingProps),d=wn(u.type,d),Dp(n,r,u,d,o);case 15:return Vp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:wn(u,d),$l(n,r),r.tag=1,qt(u)?(n=!0,Al(r)):n=!1,Us(r,o),Sp(r,u,d),Jc(r,u,d,o),nh(null,r,u,!0,n,o);case 19:return zp(n,r,o);case 22:return Op(n,r,o)}throw Error(t(156,r.tag))};function hm(n,r){return Vo(n,r)}function mE(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(n,r,o,u){return new mE(n,r,o,u)}function Th(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gE(n){if(typeof n=="function")return Th(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===gt)return 14}return 2}function ei(n,r){var o=n.alternate;return o===null?(o=fn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function eu(n,r,o,u,d,f){var _=2;if(u=n,typeof n=="function")Th(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return Gi(o.children,d,f,r);case I:_=8,d|=8;break;case A:return n=fn(12,o,r,d|2),n.elementType=A,n.lanes=f,n;case S:return n=fn(13,o,r,d),n.elementType=S,n.lanes=f,n;case Be:return n=fn(19,o,r,d),n.elementType=Be,n.lanes=f,n;case Ge:return tu(o,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case P:_=9;break e;case O:_=11;break e;case gt:_=14;break e;case Pt:_=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=fn(_,o,r,d),r.elementType=n,r.type=u,r.lanes=f,r}function Gi(n,r,o,u){return n=fn(7,n,u,r),n.lanes=o,n}function tu(n,r,o,u){return n=fn(22,n,u,r),n.elementType=Ge,n.lanes=o,n.stateNode={isHidden:!1},n}function Ih(n,r,o){return n=fn(6,n,null,r),n.lanes=o,n}function Sh(n,r,o){return r=fn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function yE(n,r,o,u,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fo(0),this.expirationTimes=Fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ah(n,r,o,u,d,f,_,T,C){return n=new yE(n,r,o,T,C),r===1?(r=1,f===!0&&(r|=8)):r=0,f=fn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(f),n}function _E(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function dm(n){if(!n)return Hr;n=n._reactInternals;e:{if(yn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(qt(o))return jf(n,o,r)}return r}function fm(n,r,o,u,d,f,_,T,C){return n=Ah(o,u,!0,n,d,f,_,T,C),n.context=dm(null),o=n.current,u=zt(),d=Jr(o),f=yr(u,d),f.callback=r??null,Kr(o,f,d),n.current.lanes=d,xi(n,d,u),Gt(n,u),n}function nu(n,r,o,u){var d=r.current,f=zt(),_=Jr(d);return o=dm(o),r.context===null?r.context=o:r.pendingContext=o,r=yr(f,_),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Kr(d,r,_),n!==null&&(Sn(n,d,_,f),Vl(n,d,_)),_}function ru(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Ch(n,r){pm(n,r),(n=n.alternate)&&pm(n,r)}function vE(){return null}var mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rh(n){this._internalRoot=n}iu.prototype.render=Rh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));nu(n,r,null,null)},iu.prototype.unmount=Rh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qi(function(){nu(null,n,null,null)}),r[dr]=null}};function iu(n){this._internalRoot=n}iu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bo();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Jt.length&&r!==0&&r<Jt[o].priority;o++);Jt.splice(o,0,n),o===0&&ys(n)}};function Ph(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gm(){}function EE(n,r,o,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var F=ru(_);f.call(F)}}var _=fm(r,u,n,0,null,!1,!1,"",gm);return n._reactRootContainer=_,n[dr]=_.current,ea(n.nodeType===8?n.parentNode:n),qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var T=u;u=function(){var F=ru(C);T.call(F)}}var C=Ah(n,0,!1,null,null,!1,!1,"",gm);return n._reactRootContainer=C,n[dr]=C.current,ea(n.nodeType===8?n.parentNode:n),qi(function(){nu(r,C,o,u)}),C}function ou(n,r,o,u,d){var f=o._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var C=ru(_);T.call(C)}}nu(r,_,n,d)}else _=EE(o,r,n,d,u);return ru(_)}jo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Me(r.pendingLanes);o!==0&&(Uo(r,o|1),Gt(r,qe()),(Ve&6)===0&&(qs=qe()+500,Wr()))}break;case 13:qi(function(){var u=gr(n,1);if(u!==null){var d=zt();Sn(u,n,1,d)}}),Ch(n,1)}},ms=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var o=zt();Sn(r,n,134217728,o)}Ch(n,134217728)}},zo=function(n){if(n.tag===13){var r=Jr(n),o=gr(n,r);if(o!==null){var u=zt();Sn(o,n,r,u)}Ch(n,r)}},Bo=function(){return Re},$o=function(n,r){var o=Re;try{return Re=n,r()}finally{Re=o}},nr=function(n,r,o){switch(r){case"input":if(wi(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var d=Il(u);if(!d)throw Error(t(90));So(u),wi(u,d)}}}break;case"textarea":Ka(n,o);break;case"select":r=o.value,r!=null&&mn(n,!!o.multiple,r,!1)}},Xa=vh,Ja=qi;var wE={usingClientEntryPoint:!1,Events:[ra,xs,Il,Dr,Vr,vh]},ya={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TE={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sl(n),n===null?null:n.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||vE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Ri=au.inject(TE),Yt=au}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE,Kt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(r))throw Error(t(200));return _E(n,r,null,o)},Kt.createRoot=function(n,r){if(!Ph(n))throw Error(t(299));var o=!1,u="",d=mm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ah(n,1,!1,null,null,o,!1,u,d),n[dr]=r.current,ea(n.nodeType===8?n.parentNode:n),new Rh(r)},Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sl(r),n=n===null?null:n.stateNode,n},Kt.flushSync=function(n){return qi(n)},Kt.hydrate=function(n,r,o){if(!su(r))throw Error(t(200));return ou(null,n,r,!0,o)},Kt.hydrateRoot=function(n,r,o){if(!Ph(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,f="",_=mm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=fm(r,null,n,1,o??null,d,!1,f,_),n[dr]=r.current,ea(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new iu(r)},Kt.render=function(n,r,o){if(!su(r))throw Error(t(200));return ou(null,n,r,!1,o)},Kt.unmountComponentAtNode=function(n){if(!su(n))throw Error(t(40));return n._reactRootContainer?(qi(function(){ou(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Kt.unstable_batchedUpdates=vh,Kt.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!su(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ou(n,r,o,!1,u)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Sm;function NE(){if(Sm)return xh.exports;Sm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),xh.exports=kE(),xh.exports}var Am;function xE(){if(Am)return lu;Am=1;var i=NE();return lu.createRoot=i.createRoot,lu.hydrateRoot=i.hydrateRoot,lu}var DE=xE(),wt=wd();const VE=()=>{};var Cm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},OE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[t++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|h&63)}}return e.join("")},iy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,w=c>>2,R=(c&3)<<4|m>>4;let V=(m&15)<<2|v>>6,B=v&63;y||(B=64,h||(V=64)),s.push(t[w],t[R],t[V],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):OE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const R=a<i.length?t[i.charAt(a)]:64;if(++a,c==null||m==null||v==null||R==null)throw new LE;const V=c<<2|m>>4;if(s.push(V),v!==64){const B=m<<4&240|v>>2;if(s.push(B),R!==64){const K=v<<6&192|R;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ME=function(i){const e=ry(i);return iy.encodeByteArray(e,!0)},Au=function(i){return ME(i).replace(/\./g,"")},sy=function(i){try{return iy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>bE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof Cm>"u")return;const i=Cm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},jE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&sy(i[1]);return e&&JSON.parse(e)},Bu=()=>{try{return VE()||FE()||UE()||jE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oy=i=>Bu()?.emulatorHosts?.[i],zE=i=>{const e=oy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ay=()=>Bu()?.config,ly=i=>Bu()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Au(JSON.stringify(t)),Au(JSON.stringify(h)),""].join(".")}const Sa={};function qE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Sa))Sa[e]?i.emulator.push(e):i.prod.push(e);return i}function HE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Rm=!1;function cy(i,e){if(typeof window>"u"||typeof document>"u"||!mo(window.location.host)||Sa[i]===e||Sa[i]||Rm)return;Sa[i]=e;function t(V){return`__firebase__banner__${V}`}const s="__firebase__banner",c=qE().prod.length>0;function h(){const V=document.getElementById(s);V&&V.remove()}function m(V){V.style.display="flex",V.style.background="#7faaf0",V.style.position="fixed",V.style.bottom="5px",V.style.left="5px",V.style.padding=".5em",V.style.borderRadius="5px",V.style.alignItems="center"}function y(V,B){V.setAttribute("width","24"),V.setAttribute("id",B),V.setAttribute("height","24"),V.setAttribute("viewBox","0 0 24 24"),V.setAttribute("fill","none"),V.style.marginLeft="-6px"}function v(){const V=document.createElement("span");return V.style.cursor="pointer",V.style.marginLeft="16px",V.style.fontSize="24px",V.innerHTML=" &times;",V.onclick=()=>{Rm=!0,h()},V}function w(V,B){V.setAttribute("id",B),V.innerText="Learn more",V.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",V.setAttribute("target","__blank"),V.style.paddingLeft="5px",V.style.textDecoration="underline"}function R(){const V=HE(s),B=t("text"),K=document.getElementById(B)||document.createElement("span"),X=t("learnmore"),W=document.getElementById(X)||document.createElement("a"),ue=t("preprendIcon"),me=document.getElementById(ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(V.created){const ge=V.element;m(ge),w(W,X);const Te=v();y(me,ue),ge.append(me,K,W,Te),document.body.appendChild(ge)}c?(K.innerText="Preview backend disconnected.",me.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(me.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function GE(){const i=Bu()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XE(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function JE(){return!GE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZE(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FirebaseError";class Ar extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tw,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,c=this.errors[e],h=c?nw(c,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Ar(a,m,s)}}function nw(i,e){return i.replace(rw,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const rw=/\{\$([^}]+)}/g;function iw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ji(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const c=i[a],h=e[a];if(Pm(c)&&Pm(h)){if(!Ji(c,h))return!1}else if(c!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function Pm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function va(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function Ea(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function sw(i,e){const t=new ow(i,e);return t.subscribe.bind(t)}class ow{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Oh),a.error===void 0&&(a.error=Oh),a.complete===void 0&&(a.complete=Oh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Oh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(i){return i&&i._delegate?i._delegate:i}class Zi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new BE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cw(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uw(i){return i===Ki?void 0:i}function cw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const dw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},fw=Ce.INFO,pw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},mw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=pw[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=fw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const gw=(i,e)=>e.some(t=>i instanceof t);let km,Nm;function yw(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _w(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,Gh=new WeakMap,dy=new WeakMap,Lh=new WeakMap,Id=new WeakMap;function vw(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{t(ui(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&hy.set(t,i)}).catch(()=>{}),Id.set(e,i),e}function Ew(i){if(Gh.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});Gh.set(i,e)}let Kh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Gh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||dy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ui(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ww(i){Kh=i(Kh)}function Tw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Mh(this),e,...t);return dy.set(s,e.sort?e.sort():[e]),ui(s)}:_w().includes(i)?function(...e){return i.apply(Mh(this),e),ui(hy.get(this))}:function(...e){return ui(i.apply(Mh(this),e))}}function Iw(i){return typeof i=="function"?Tw(i):(i instanceof IDBTransaction&&Ew(i),gw(i,yw())?new Proxy(i,Kh):i)}function ui(i){if(i instanceof IDBRequest)return vw(i);if(Lh.has(i))return Lh.get(i);const e=Iw(i);return e!==i&&(Lh.set(i,e),Id.set(e,i)),e}const Mh=i=>Id.get(i);function Sw(i,e,{blocked:t,upgrade:s,blocking:a,terminated:c}={}){const h=indexedDB.open(i,e),m=ui(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ui(h.result),y.oldVersion,y.newVersion,ui(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Aw=["get","getKey","getAll","getAllKeys","count"],Cw=["put","add","delete","clear"],bh=new Map;function xm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Cw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Aw.includes(t)))return;const c=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return bh.set(e,c),c}ww(i=>({...i,get:(e,t,s)=>xm(e,t)||i.get(e,t,s),has:(e,t)=>!!xm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Pw(i){return i.getComponent()?.type==="VERSION"}const Qh="@firebase/app",Dm="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Td("@firebase/app"),kw="@firebase/app-compat",Nw="@firebase/analytics-compat",xw="@firebase/analytics",Dw="@firebase/app-check-compat",Vw="@firebase/app-check",Ow="@firebase/auth",Lw="@firebase/auth-compat",Mw="@firebase/database",bw="@firebase/data-connect",Fw="@firebase/database-compat",Uw="@firebase/functions",jw="@firebase/functions-compat",zw="@firebase/installations",Bw="@firebase/installations-compat",$w="@firebase/messaging",qw="@firebase/messaging-compat",Hw="@firebase/performance",Ww="@firebase/performance-compat",Gw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Qw="@firebase/storage",Yw="@firebase/storage-compat",Xw="@firebase/firestore",Jw="@firebase/ai",Zw="@firebase/firestore-compat",e0="firebase",t0="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="[DEFAULT]",n0={[Qh]:"fire-core",[kw]:"fire-core-compat",[xw]:"fire-analytics",[Nw]:"fire-analytics-compat",[Vw]:"fire-app-check",[Dw]:"fire-app-check-compat",[Ow]:"fire-auth",[Lw]:"fire-auth-compat",[Mw]:"fire-rtdb",[bw]:"fire-data-connect",[Fw]:"fire-rtdb-compat",[Uw]:"fire-fn",[jw]:"fire-fn-compat",[zw]:"fire-iid",[Bw]:"fire-iid-compat",[$w]:"fire-fcm",[qw]:"fire-fcm-compat",[Hw]:"fire-perf",[Ww]:"fire-perf-compat",[Gw]:"fire-rc",[Kw]:"fire-rc-compat",[Qw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Xw]:"fire-fst",[Zw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[e0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map,r0=new Map,Xh=new Map;function Vm(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function so(i){const e=i.name;if(Xh.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,i);for(const t of Cu.values())Vm(t,i);for(const t of r0.values())Vm(t,i);return!0}function Sd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function An(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new ba("app","Firebase",i0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=t0;function fy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Yh,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw ci.create("bad-app-name",{appName:String(a)});if(t||(t=ay()),!t)throw ci.create("no-options");const c=Cu.get(a);if(c){if(Ji(t,c.options)&&Ji(s,c.config))return c;throw ci.create("duplicate-app",{appName:a})}const h=new hw(a);for(const y of Xh.values())h.addComponent(y);const m=new s0(t,s,h);return Cu.set(a,m),m}function py(i=Yh){const e=Cu.get(i);if(!e&&i===Yh&&ay())return fy();if(!e)throw ci.create("no-app",{appName:i});return e}function hi(i,e,t){let s=n0[i]??i;t&&(s+=`-${t}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(h.join(" "));return}so(new Zi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-heartbeat-database",a0=1,Na="firebase-heartbeat-store";let Fh=null;function my(){return Fh||(Fh=Sw(o0,a0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Na)}catch(t){console.warn(t)}}}}).catch(i=>{throw ci.create("idb-open",{originalErrorMessage:i.message})})),Fh}async function l0(i){try{const t=(await my()).transaction(Na),s=await t.objectStore(Na).get(gy(i));return await t.done,s}catch(e){if(e instanceof Ar)Tr.warn(e.message);else{const t=ci.create("idb-get",{originalErrorMessage:e?.message});Tr.warn(t.message)}}}async function Om(i,e){try{const s=(await my()).transaction(Na,"readwrite");await s.objectStore(Na).put(e,gy(i)),await s.done}catch(t){if(t instanceof Ar)Tr.warn(t.message);else{const s=ci.create("idb-set",{originalErrorMessage:t?.message});Tr.warn(s.message)}}}function gy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=1024,c0=30;class h0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lm();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>c0){const a=p0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Tr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lm(),{heartbeatsToSend:t,unsentEntries:s}=d0(this._heartbeatsCache.heartbeats),a=Au(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Tr.warn(e),""}}}function Lm(){return new Date().toISOString().substring(0,10)}function d0(i,e=u0){const t=[];let s=i.slice();for(const a of i){const c=t.find(h=>h.agent===a.agent);if(c){if(c.dates.push(a.date),Mm(t)>e){c.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Mm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class f0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZE()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await l0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mm(i){return Au(JSON.stringify({version:2,heartbeats:i})).length}function p0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(i){so(new Zi("platform-logger",e=>new Rw(e),"PRIVATE")),so(new Zi("heartbeat",e=>new h0(e),"PRIVATE")),hi(Qh,Dm,i),hi(Qh,Dm,"esm2020"),hi("fire-js","")}m0("");function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g0=yy,_y=new ba("auth","Firebase",yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Td("@firebase/auth");function y0(i,...e){Ru.logLevel<=Ce.WARN&&Ru.warn(`Auth (${go}): ${i}`,...e)}function gu(i,...e){Ru.logLevel<=Ce.ERROR&&Ru.error(`Auth (${go}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(i,...e){throw Ad(i,...e)}function Yn(i,...e){return Ad(i,...e)}function vy(i,e,t){const s={...g0(),[e]:t};return new ba("auth","Firebase",s).create(e,{appName:i.name})}function di(i){return vy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ad(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return _y.create(i,...e)}function fe(i,e,...t){if(!i)throw Ad(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw gu(e),new Error(e)}function Ir(i,e){i||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){return typeof self<"u"&&self.location?.href||""}function _0(){return bm()==="http:"||bm()==="https:"}function bm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_0()||QE()||"connection"in navigator)?navigator.onLine:!0}function E0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=WE()||YE()}get(){return v0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I0=new Ua(3e4,6e4);function ns(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ei(i,e,t,s,a={}){return wy(i,a,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const m=Fa({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...c};return KE()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&mo(i.emulatorConfig.host)&&(v.credentials="include"),Ey.fetch()(await Ty(i,i.config.apiHost,t,m),v)})}async function wy(i,e,t){i._canInitEmulator=!1;const s={...w0,...e};try{const a=new A0(i),c=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw uu(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw uu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw uu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw vy(i,w,v);Pn(i,w)}}catch(a){if(a instanceof Ar)throw a;Pn(i,"network-request-failed",{message:String(a)})}}async function $u(i,e,t,s,a={}){const c=await Ei(i,e,t,s,a);return"mfaPendingCredential"in c&&Pn(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Ty(i,e,t,s){const a=`${e}${t}?${s}`,c=i,h=c.config.emulator?Cd(i.config,a):`${i.config.apiScheme}://${a}`;return T0.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function S0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yn(this.auth,"network-request-failed")),I0.get())})}}function uu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Yn(i,e,s);return a.customData._tokenResponse=t,a}function Fm(i){return i!==void 0&&i.enterprise!==void 0}class C0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return S0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R0(i,e){return Ei(i,"GET","/v2/recaptchaConfig",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(i,e){return Ei(i,"POST","/v1/accounts:delete",e)}async function Pu(i,e){return Ei(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k0(i,e=!1){const t=Rn(i),s=await t.getIdToken(e),a=Rd(s);fe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,h=c?.sign_in_provider;return{claims:a,token:s,authTime:Aa(Uh(a.auth_time)),issuedAtTime:Aa(Uh(a.iat)),expirationTime:Aa(Uh(a.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Uh(i){return Number(i)*1e3}function Rd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const a=sy(t);return a?JSON.parse(a):(gu("Failed to decode base64 JWT payload"),null)}catch(a){return gu("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Um(i){const e=Rd(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ar&&N0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function N0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(i){const e=i.auth,t=await i.getIdToken(),s=await xa(i,Pu(e,{idToken:t}));fe(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const c=a.providerUserInfo?.length?Iy(a.providerUserInfo):[],h=V0(i.providerData,c),m=i.isAnonymous,y=!(i.email&&a.passwordHash)&&!h?.length,v=m?y:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Zh(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function D0(i){const e=Rn(i);await ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V0(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Iy(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(i,e){const t=await wy(i,{},async()=>{const s=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,h=await Ty(i,a,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&mo(i.emulatorConfig.host)&&(y.credentials="include"),Ey.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function L0(i,e){return Ei(i,"POST","/v2/accounts:revokeToken",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Um(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:c}=await O0(e,t);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:c}=t,h=new Xs;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(fe(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),c&&(fe(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Zh(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await xa(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return k0(this,e)}reload(){return D0(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ku(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(di(this.auth));const e=await this.getIdToken();return await xa(this,P0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:R,emailVerified:V,isAnonymous:B,providerData:K,stsTokenManager:X}=t;fe(R&&X,e,"internal-error");const W=Xs.fromJSON(this.name,X);fe(typeof R=="string",e,"internal-error"),ni(s,e.name),ni(a,e.name),fe(typeof V=="boolean",e,"internal-error"),fe(typeof B=="boolean",e,"internal-error"),ni(c,e.name),ni(h,e.name),ni(m,e.name),ni(y,e.name),ni(v,e.name),ni(w,e.name);const ue=new Cn({uid:R,auth:e,email:a,emailVerified:V,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:W,createdAt:v,lastLoginAt:w});return K&&Array.isArray(K)&&(ue.providerData=K.map(me=>({...me}))),y&&(ue._redirectEventId=y),ue}static async _fromIdTokenResponse(e,t,s=!1){const a=new Xs;a.updateFromServerResponse(t);const c=new Cn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await ku(c),c}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];fe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Iy(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!c?.length,m=new Xs;m.updateFromIdToken(s);const y=new Cn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Zh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;function wr(i){Ir(i instanceof Function,"Expected a class definition");let e=jm.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,jm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sy.type="NONE";const zm=Sy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(i,e,t){return`firebase:${i}:${e}:${t}`}class Js{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=yu(this.userKey,a.apiKey,c),this.fullPersistenceKey=yu("persistence",a.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pu(this.auth,{idToken:e}).catch(()=>{});return t?Cn._fromGetAccountInfoResponse(this.auth,t,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Js(wr(zm),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=a[0]||wr(zm);const h=yu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let R;if(typeof w=="string"){const V=await Pu(e,{idToken:w}).catch(()=>{});if(!V)break;R=await Cn._fromGetAccountInfoResponse(e,V,w)}else R=Cn._fromJSON(e,w);v!==c&&(m=R),c=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new Js(c,e,s):(c=y[0],m&&await c._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new Js(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ny(e))return"Blackberry";if(xy(e))return"Webos";if(Cy(e))return"Safari";if((e.includes("chrome/")||Ry(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Ay(i=Ft()){return/firefox\//i.test(i)}function Cy(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ry(i=Ft()){return/crios\//i.test(i)}function Py(i=Ft()){return/iemobile/i.test(i)}function ky(i=Ft()){return/android/i.test(i)}function Ny(i=Ft()){return/blackberry/i.test(i)}function xy(i=Ft()){return/webos/i.test(i)}function Pd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function M0(i=Ft()){return Pd(i)&&!!window.navigator?.standalone}function b0(){return XE()&&document.documentMode===10}function Dy(i=Ft()){return Pd(i)||ky(i)||xy(i)||Ny(i)||/windows phone/i.test(i)||Py(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(i,e=[]){let t;switch(i){case"Browser":t=Bm(Ft());break;case"Worker":t=`${Bm(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${go}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,m)=>{try{const y=e(c);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(i,e={}){return Ei(i,"GET","/v2/passwordPolicy",ns(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=6;class z0{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??j0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $m(this),this.idTokenSubscription=new $m(this),this.beforeStateQueue=new F0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pu(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(An(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===h)&&m?.user&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ku(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(di(this));const t=e?Rn(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U0(this),t=new z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await L0(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&y0(`Error while retrieving App Check token: ${e.error}`),e?.token}}function yo(i){return Rn(i)}class $m{constructor(e){this.auth=e,this.observer=null,this.addObserver=sw(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $0(i){qu=i}function Oy(i){return qu.loadJS(i)}function q0(){return qu.recaptchaEnterpriseScript}function H0(){return qu.gapiScript}function W0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class G0{constructor(){this.enterprise=new K0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class K0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Q0="recaptcha-enterprise",Ly="NO_RECAPTCHA";class Y0{constructor(e){this.type=Q0,this.auth=yo(e)}async verify(e="verify",t=!1){async function s(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,m)=>{R0(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new C0(y);return c.tenantId==null?c._agentRecaptchaConfig=v:c._tenantRecaptchaConfigs[c.tenantId]=v,h(v.siteKey)}}).catch(y=>{m(y)})})}function a(c,h,m){const y=window.grecaptcha;Fm(y)?y.enterprise.ready(()=>{y.enterprise.execute(c,{action:e}).then(v=>{h(v)}).catch(()=>{h(Ly)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new G0().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(m=>{if(!t&&Fm(window.grecaptcha))a(m,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=q0();y.length!==0&&(y+=m),Oy(y).then(()=>{a(m,c,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function qm(i,e,t,s=!1,a=!1){const c=new Y0(i);let h;if(a)h=Ly;else try{h=await c.verify(t)}catch{h=await c.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Hm(i,e,t,s,a){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await qm(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await qm(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(i,e){const t=Sd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),c=t.getOptions();if(Ji(c,e??{}))return a;Pn(a,"already-initialized")}return t.initialize({options:e})}function J0(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(wr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Z0(i,e,t){const s=yo(i);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=My(e),{host:h,port:m}=eT(e),y=m===null?"":`:${m}`,v={url:`${c}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Ji(v,s.config.emulator)&&Ji(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,mo(h)?(uy(`${c}//${h}${y}`),cy("Auth",!0)):tT()}function My(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eT(i){const e=My(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Wm(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Wm(h)}}}function Wm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function nT(i,e){return Ei(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(i,e){return $u(i,"POST","/v1/accounts:signInWithPassword",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(i,e){return $u(i,"POST","/v1/accounts:signInWithEmailLink",ns(i,e))}async function sT(i,e){return $u(i,"POST","/v1/accounts:signInWithEmailLink",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends kd{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Da(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Da(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,t,"signInWithPassword",rT);case"emailLink":return iT(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,s,"signUpPassword",nT);case"emailLink":return sT(e,{idToken:t,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(i,e){return $u(i,"POST","/v1/accounts:signInWithIdp",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="http://localhost";class es extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...c}=t;if(!s||!a)return null;const h=new es(s,a);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Zs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zs(e,t)}buildRequest(){const e={requestUri:oT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lT(i){const e=va(Ea(i)).link,t=e?va(Ea(e)).deep_link_id:null,s=va(Ea(i)).deep_link_id;return(s?va(Ea(s)).link:null)||s||t||e||i}class Nd{constructor(e){const t=va(Ea(e)),s=t.apiKey??null,a=t.oobCode??null,c=aT(t.mode??null);fe(s&&a&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=lT(e);try{return new Nd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.providerId=_o.PROVIDER_ID}static credential(e,t){return Da._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Nd.parseLink(t);return fe(s,"argument-error"),Da._fromEmailAndCode(e,s.code,s.tenantId)}}_o.PROVIDER_ID="password";_o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends by{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ja{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ja{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends ja{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const c=await Cn._fromIdTokenResponse(e,s,a),h=Gm(s);return new oo({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Gm(s);return new oo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Gm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Ar{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Nu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Nu(e,t,s,a)}}function Fy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Nu._fromErrorAndOperation(i,c,e,s):c})}async function uT(i,e,t=!1){const s=await xa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return oo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(i,e,t=!1){const{auth:s}=i;if(An(s.app))return Promise.reject(di(s));const a="reauthenticate";try{const c=await xa(i,Fy(s,a,e,i),t);fe(c.idToken,s,"internal-error");const h=Rd(c.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),oo._forOperation(i,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&Pn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(i,e,t=!1){if(An(i.app))return Promise.reject(di(i));const s="signIn",a=await Fy(i,s,e),c=await oo._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(c.user),c}async function hT(i,e){return Uy(yo(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(i){const e=yo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function fT(i,e,t){return An(i.app)?Promise.reject(di(i)):hT(Rn(i),_o.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dT(i),s})}function pT(i,e,t,s){return Rn(i).onIdTokenChanged(e,t,s)}function mT(i,e,t){return Rn(i).beforeAuthStateChanged(e,t)}const xu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=1e3,yT=10;class zy extends jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);b0()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,yT):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zy.type="LOCAL";const _T=zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By extends jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}By.type="SESSION";const $y=By;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Hu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:c}=t.data,h=this.handlersMap[a];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,c)),y=await vT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,h;return new Promise((m,y)=>{const v=xd("",20);a.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(R){const V=R;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(w),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(V.data.response);break;default:clearTimeout(w),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function wT(i){Xn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function TT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IT(){return navigator?.serviceWorker?.controller||null}function ST(){return qy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="firebaseLocalStorageDb",AT=1,Du="firebaseLocalStorage",Wy="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wu(i,e){return i.transaction([Du],e?"readwrite":"readonly").objectStore(Du)}function CT(){const i=indexedDB.deleteDatabase(Hy);return new za(i).toPromise()}function ed(){const i=indexedDB.open(Hy,AT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Du,{keyPath:Wy})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Du)?e(s):(s.close(),await CT(),e(await ed()))})})}async function Km(i,e,t){const s=Wu(i,!0).put({[Wy]:e,value:t});return new za(s).toPromise()}async function RT(i,e){const t=Wu(i,!1).get(e),s=await new za(t).toPromise();return s===void 0?null:s.value}function Qm(i,e){const t=Wu(i,!0).delete(e);return new za(t).toPromise()}const PT=800,kT=3;class Gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(ST()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await TT(),!this.activeServiceWorker)return;this.sender=new ET(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await Km(e,xu,"1"),await Qm(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Km(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>RT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Wu(a,!1).getAll();return new za(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gy.type="LOCAL";const NT=Gy;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(i,e){return e?wr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function DT(i){return Uy(i.auth,new Dd(i),i.bypassAuthState)}function VT(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),cT(t,new Dd(i),i.bypassAuthState)}async function OT(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),uT(t,new Dd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DT;case"linkViaPopup":case"linkViaRedirect":return OT;case"reauthViaPopup":case"reauthViaRedirect":return VT;default:Pn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Ua(2e3,1e4);class Ys extends Ky{constructor(e,t,s,a,c){super(e,t,a,c),this.provider=s,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LT.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="pendingRedirect",_u=new Map;class bT extends Ky{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const s=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FT(i,e){const t=zT(e),s=jT(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function UT(i,e){_u.set(i._key(),e)}function jT(i){return wr(i._redirectPersistence)}function zT(i){return yu(MT,i.config.apiKey,i.name)}async function BT(i,e,t=!1){if(An(i.app))return Promise.reject(di(i));const s=yo(i),a=xT(s,e),h=await new bT(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=600*1e3;class qT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Qy(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Yn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Qy({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function HT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(i,e={}){return Ei(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KT=/^https?/;async function QT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await WT(i);for(const t of e)try{if(YT(t))return}catch{}Pn(i,"unauthorized-domain")}function YT(i){const e=Jh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!KT.test(t))return!1;if(GT.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Ua(3e4,6e4);function Xm(){const i=Xn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function JT(i){return new Promise((e,t)=>{function s(){Xm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xm(),t(Yn(i,"network-request-failed"))},timeout:XT.get()})}if(Xn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Xn().gapi?.load)s();else{const a=W0("iframefcb");return Xn()[a]=()=>{gapi.load?s():t(Yn(i,"network-request-failed"))},Oy(`${H0()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw vu=null,e})}let vu=null;function ZT(i){return vu=vu||JT(i),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Ua(5e3,15e3),tI="__/auth/iframe",nI="emulator/auth/iframe",rI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Cd(e,nI):`https://${i.config.authDomain}/${tI}`,s={apiKey:e.apiKey,appName:i.name,v:go},a=iI.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Fa(s).slice(1)}`}async function oI(i){const e=await ZT(i),t=Xn().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:sI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rI,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const h=Yn(i,"network-request-failed"),m=Xn().setTimeout(()=>{c(h)},eI.get());function y(){Xn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lI=500,uI=600,cI="_blank",hI="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dI(i,e,t,s=lI,a=uI){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...aI,width:s.toString(),height:a.toString(),top:c,left:h},v=Ft().toLowerCase();t&&(m=Ry(v)?cI:t),Ay(v)&&(e=e||hI,y.scrollbars="yes");const w=Object.entries(y).reduce((V,[B,K])=>`${V}${B}=${K},`,"");if(M0(v)&&m!=="_self")return fI(e||"",m),new Jm(null);const R=window.open(e||"",m,w);fe(R,i,"popup-blocked");try{R.focus()}catch{}return new Jm(R)}function fI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="__/auth/handler",mI="emulator/auth/handler",gI=encodeURIComponent("fac");async function Zm(i,e,t,s,a,c){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:go,eventId:a};if(e instanceof by){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",iw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof ja){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${gI}=${encodeURIComponent(y)}`:"";return`${yI(i)}?${Fa(m).slice(1)}${v}`}function yI({config:i}){return i.emulator?Cd(i,mI):`https://${i.authDomain}/${pI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="webStorageSupport";class _I{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$y,this._completeRedirectFn=BT,this._overrideRedirectResult=UT}async _openPopup(e,t,s,a){Ir(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Zm(e,t,s,Jh(),a);return dI(e,c,xd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const c=await Zm(e,t,s,Jh(),a);return wT(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:c}=this.eventManagers[t];return a?Promise.resolve(a):(Ir(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await oI(e),s=new qT(e);return t.register("authEvent",a=>(fe(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jh,{type:jh},a=>{const c=a?.[0]?.[jh];c!==void 0&&t(!!c),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dy()||Cy()||Pd()}}const vI=_I;var eg="@firebase/auth",tg="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TI(i){so(new Zi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vy(i)},v=new B0(s,a,c,y);return J0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),so(new Zi("auth-internal",e=>{const t=yo(e.getProvider("auth").getImmediate());return(s=>new EI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(eg,tg,wI(i)),hi(eg,tg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=300,SI=ly("authIdTokenMaxAge")||II;let ng=null;const AI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>SI)return;const a=t?.token;ng!==a&&(ng=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function CI(i=py()){const e=Sd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=X0(i,{popupRedirectResolver:vI,persistence:[NT,_T,$y]}),s=ly("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=AI(c.toString());mT(t,h,()=>h(t.currentUser)),pT(t,m=>h(m))}}const a=oy("auth");return a&&Z0(t,`http://${a}`),t}function RI(){return document.getElementsByTagName("head")?.[0]??document}$0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Yn("internal-error");c.customData=a,t(c)},s.type="text/javascript",s.charset="UTF-8",RI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TI("Browser");var PI="firebase",kI="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(PI,kI,"app");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,Yy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function A(){}A.prototype=I.prototype,k.F=I.prototype,k.prototype=new A,k.prototype.constructor=k,k.D=function(x,P,O){for(var S=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)S[Be-2]=arguments[Be];return I.prototype[P].apply(x,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,I,A){A||(A=0);const x=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)x[P]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(P=0;P<16;++P)x[P]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=k.g[0],A=k.g[1],P=k.g[2];let O=k.g[3],S;S=I+(O^A&(P^O))+x[0]+3614090360&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(P^I&(A^P))+x[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=P+(A^O&(I^A))+x[2]+606105819&4294967295,P=O+(S<<17&4294967295|S>>>15),S=A+(I^P&(O^I))+x[3]+3250441966&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(O^A&(P^O))+x[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(P^I&(A^P))+x[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=P+(A^O&(I^A))+x[6]+2821735955&4294967295,P=O+(S<<17&4294967295|S>>>15),S=A+(I^P&(O^I))+x[7]+4249261313&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(O^A&(P^O))+x[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(P^I&(A^P))+x[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=P+(A^O&(I^A))+x[10]+4294925233&4294967295,P=O+(S<<17&4294967295|S>>>15),S=A+(I^P&(O^I))+x[11]+2304563134&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(O^A&(P^O))+x[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(P^I&(A^P))+x[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=P+(A^O&(I^A))+x[14]+2792965006&4294967295,P=O+(S<<17&4294967295|S>>>15),S=A+(I^P&(O^I))+x[15]+1236535329&4294967295,A=P+(S<<22&4294967295|S>>>10),S=I+(P^O&(A^P))+x[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^P&(I^A))+x[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(O^I))+x[11]+643717713&4294967295,P=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(P^O))+x[0]+3921069994&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^O&(A^P))+x[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^P&(I^A))+x[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(O^I))+x[15]+3634488961&4294967295,P=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(P^O))+x[4]+3889429448&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^O&(A^P))+x[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^P&(I^A))+x[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(O^I))+x[3]+4107603335&4294967295,P=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(P^O))+x[8]+1163531501&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(P^O&(A^P))+x[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^P&(I^A))+x[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=P+(I^A&(O^I))+x[7]+1735328473&4294967295,P=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(P^O))+x[12]+2368359562&4294967295,A=P+(S<<20&4294967295|S>>>12),S=I+(A^P^O)+x[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^P)+x[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=P+(O^I^A)+x[11]+1839030562&4294967295,P=O+(S<<16&4294967295|S>>>16),S=A+(P^O^I)+x[14]+4259657740&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^O)+x[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^P)+x[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=P+(O^I^A)+x[7]+4139469664&4294967295,P=O+(S<<16&4294967295|S>>>16),S=A+(P^O^I)+x[10]+3200236656&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^O)+x[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^P)+x[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=P+(O^I^A)+x[3]+3572445317&4294967295,P=O+(S<<16&4294967295|S>>>16),S=A+(P^O^I)+x[6]+76029189&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(A^P^O)+x[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^P)+x[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=P+(O^I^A)+x[15]+530742520&4294967295,P=O+(S<<16&4294967295|S>>>16),S=A+(P^O^I)+x[2]+3299628645&4294967295,A=P+(S<<23&4294967295|S>>>9),S=I+(P^(A|~O))+x[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~P))+x[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=P+(I^(O|~A))+x[14]+2878612391&4294967295,P=O+(S<<15&4294967295|S>>>17),S=A+(O^(P|~I))+x[5]+4237533241&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~O))+x[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~P))+x[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=P+(I^(O|~A))+x[10]+4293915773&4294967295,P=O+(S<<15&4294967295|S>>>17),S=A+(O^(P|~I))+x[1]+2240044497&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~O))+x[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~P))+x[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=P+(I^(O|~A))+x[6]+2734768916&4294967295,P=O+(S<<15&4294967295|S>>>17),S=A+(O^(P|~I))+x[13]+1309151649&4294967295,A=P+(S<<21&4294967295|S>>>11),S=I+(P^(A|~O))+x[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~P))+x[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=P+(I^(O|~A))+x[2]+718787259&4294967295,P=O+(S<<15&4294967295|S>>>17),S=A+(O^(P|~I))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,I){I===void 0&&(I=k.length);const A=I-this.blockSize,x=this.C;let P=this.h,O=0;for(;O<I;){if(P==0)for(;O<=A;)a(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<I;)if(x[P++]=k.charCodeAt(O++),P==this.blockSize){a(this,x),P=0;break}}else for(;O<I;)if(x[P++]=k[O++],P==this.blockSize){a(this,x),P=0;break}}this.h=P,this.o+=I},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;I=this.o*8;for(var A=k.length-8;A<k.length;++A)k[A]=I&255,I/=256;for(this.v(k),k=Array(16),I=0,A=0;A<4;++A)for(let x=0;x<32;x+=8)k[I++]=this.g[A]>>>x&255;return k};function c(k,I){var A=m;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=I(k)}function h(k,I){this.h=I;const A=[];let x=!0;for(let P=k.length-1;P>=0;P--){const O=k[P]|0;x&&O==I||(A[P]=O,x=!1)}this.g=A}var m={};function y(k){return-128<=k&&k<128?c(k,function(I){return new h([I|0],I<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return R;if(k<0)return W(v(-k));const I=[];let A=1;for(let x=0;k>=A;x++)I[x]=k/A|0,A*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return W(w(k.substring(1),I));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=v(Math.pow(I,8));let x=R;for(let O=0;O<k.length;O+=8){var P=Math.min(8,k.length-O);const S=parseInt(k.substring(O,O+P),I);P<8?(P=v(Math.pow(I,P)),x=x.j(P).add(v(S))):(x=x.j(A),x=x.add(v(S)))}return x}var R=y(0),V=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();let k=0,I=1;for(let A=0;A<this.g.length;A++){const x=this.i(A);k+=(x>=0?x:4294967296+x)*I,I*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(K(this))return"0";if(X(this))return"-"+W(this).toString(k);const I=v(Math.pow(k,6));var A=this;let x="";for(;;){const P=Te(A,I).g;A=ue(A,P.j(I));let O=((A.g.length>0?A.g[0]:A.h)>>>0).toString(k);if(A=P,K(A))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function K(k){if(k.h!=0)return!1;for(let I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function X(k){return k.h==-1}i.l=function(k){return k=ue(this,k),X(k)?-1:K(k)?0:1};function W(k){const I=k.g.length,A=[];for(let x=0;x<I;x++)A[x]=~k.g[x];return new h(A,~k.h).add(V)}i.abs=function(){return X(this)?W(this):this},i.add=function(k){const I=Math.max(this.g.length,k.g.length),A=[];let x=0;for(let P=0;P<=I;P++){let O=x+(this.i(P)&65535)+(k.i(P)&65535),S=(O>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);x=S>>>16,O&=65535,S&=65535,A[P]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ue(k,I){return k.add(W(I))}i.j=function(k){if(K(this)||K(k))return R;if(X(this))return X(k)?W(this).j(W(k)):W(W(this).j(k));if(X(k))return W(this.j(W(k)));if(this.l(B)<0&&k.l(B)<0)return v(this.m()*k.m());const I=this.g.length+k.g.length,A=[];for(var x=0;x<2*I;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(let P=0;P<k.g.length;P++){const O=this.i(x)>>>16,S=this.i(x)&65535,Be=k.i(P)>>>16,gt=k.i(P)&65535;A[2*x+2*P]+=S*gt,me(A,2*x+2*P),A[2*x+2*P+1]+=O*gt,me(A,2*x+2*P+1),A[2*x+2*P+1]+=S*Be,me(A,2*x+2*P+1),A[2*x+2*P+2]+=O*Be,me(A,2*x+2*P+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function me(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function ge(k,I){this.g=k,this.h=I}function Te(k,I){if(K(I))throw Error("division by zero");if(K(k))return new ge(R,R);if(X(k))return I=Te(W(k),I),new ge(W(I.g),W(I.h));if(X(I))return I=Te(k,W(I)),new ge(W(I.g),I.h);if(k.g.length>30){if(X(k)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=V,x=I;x.l(k)<=0;)A=ze(A),x=ze(x);var P=ke(A,1),O=ke(x,1);for(x=ke(x,2),A=ke(A,2);!K(x);){var S=O.add(x);S.l(k)<=0&&(P=P.add(A),O=S),x=ke(x,1),A=ke(A,1)}return I=ue(k,P.j(I)),new ge(P,I)}for(P=R;k.l(I)>=0;){for(A=Math.max(1,Math.floor(k.m()/I.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=v(A),S=O.j(I);X(S)||S.l(k)>0;)A-=x,O=v(A),S=O.j(I);K(O)&&(O=V),P=P.add(O),k=ue(k,S)}return new ge(P,k)}i.B=function(k){return Te(this,k).h},i.and=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)&k.i(x);return new h(A,this.h&k.h)},i.or=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)|k.i(x);return new h(A,this.h|k.h)},i.xor=function(k){const I=Math.max(this.g.length,k.g.length),A=[];for(let x=0;x<I;x++)A[x]=this.i(x)^k.i(x);return new h(A,this.h^k.h)};function ze(k){const I=k.g.length+1,A=[];for(let x=0;x<I;x++)A[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(A,k.h)}function ke(k,I){const A=I>>5;I%=32;const x=k.g.length-A,P=[];for(let O=0;O<x;O++)P[O]=I>0?k.i(O+A)>>>I|k.i(O+A+1)<<32-I:k.i(O+A);return new h(P,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Yy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,fi=h}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xy,wa,Jy,Eu,td,Zy,e_,t_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cu=="object"&&cu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}a("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function R(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,U){for(var J=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)J[ye-2]=arguments[ye];return p.prototype[M].apply(E,J)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function K(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let J=0;J<U;J++)l[g+J]=M[J]}else l.push(M)}}class X{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function W(l){h.setTimeout(()=>{throw l},0)}function ue(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class me{constructor(){this.h=this.g=null}add(p,g){const E=ge.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ge=new X(()=>new Te,l=>l.reset());class Te{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ke=!1,k=new me,I=()=>{const l=Promise.resolve(void 0);ze=()=>{l.then(A)}};function A(){for(var l;l=ue();){try{l.h.call(l.g)}catch(g){W(g)}var p=ge;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ke=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}R(Be,P),Be.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),Pt=0;function Ge(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++Pt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function le(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function te(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function D(l){const p={};for(const g in l)p[g]=l[g];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let U=0;U<$.length;U++)g=$[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,p,g,E,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const J=Ae(l,p,E,M);return J>-1?(p=l[J],g||(p.fa=!1)):(p=new Ge(p,this.src,U,!!E,M),p.fa=g,l.push(p)),p};function Se(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(E,M,1),U&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ae(l,p,g,E){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==E)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),De={};function Ue(l,p,g,E,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)Ue(l,p[U],g,E,M);return null}return g=Ao(g),l&&l[gt]?l.J(p,g,m(E)?!!E.capture:!1,M):Ut(l,p,g,!1,E,M)}function Ut(l,p,g,E,M,U){if(!p)throw Error("Invalid event type");const J=m(M)?!!M.capture:!!M;let ye=os(l);if(ye||(l[be]=ye=new we(l)),g=ye.add(p,g,E,J,U),g.proxy)return g;if(E=is(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)O||(M=J),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ss(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function is(){function l(g){return p.call(l.src,l.listener,g)}const p=Ga;return l}function So(l,p,g,E,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)So(l,p[U],g,E,M);else E=m(E)?!!E.capture:!!E,g=Ao(g),l&&l[gt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Ae(p,g,E,M),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=os(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ae(p,g,E,M)),(g=l>-1?p[l]:null)&&Cr(g))}function Cr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[gt])Se(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ss(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=os(p))?(Se(g,l),g.h==0&&(g.src=null,p[be]=null)):Z(l)}}}function ss(l){return l in De?De[l]:De[l]="on"+l}function Ga(l,p){if(l.da)l=!0;else{p=new Be(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Cr(l),l=g.call(E,p)}return l}function os(l){return l=l[be],l instanceof we?l:null}var wi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ao(l){return typeof l=="function"?l:(l[wi]||(l[wi]=function(p){return l.handleEvent(p)}),l[wi])}function at(){x.call(this),this.i=new we(this),this.M=this,this.G=null}R(at,x),at.prototype[gt]=!0,at.prototype.removeEventListener=function(l,p,g,E){So(this,l,p,g,E)};function nt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var M=p;p=new P(E,l),Ee(p,M)}M=!0;let U,J;if(g)for(J=g.length-1;J>=0;J--)U=p.g=g[J],M=mn(U,E,!0,p)&&M;if(U=p.g=l,M=mn(U,E,!0,p)&&M,M=mn(U,E,!1,p)&&M,g)for(J=0;J<g.length;J++)U=p.g=g[J],M=mn(U,E,!1,p)&&M}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)Z(g[E]);delete l.g[p],l.h--}}this.G=null},at.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},at.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function mn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const J=p[U];if(J&&!J.da&&J.capture==g){const ye=J.listener,rt=J.ha||J.src;J.fa&&Se(l.i,J),M=ye.call(rt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Co(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Ro(l){l.g=Co(()=>{l.g=null,l.i&&(l.i=!1,Ro(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Ka extends x{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Ro(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(l){x.call(this),this.h=l,this.g={}}R(Rr,x);var Po=[];function as(l){le(l.g,function(p,g){this.g.hasOwnProperty(g)&&Cr(p)},l),l.g={}}Rr.prototype.N=function(){Rr.Z.N.call(this),as(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=h.JSON.stringify,Qa=h.JSON.parse,Ti=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function kr(){}function Ya(){}var Nr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ls(){P.call(this,"d")}R(ls,P);function ko(){P.call(this,"c")}R(ko,P);var gn={},us=null;function xr(){return us=us||new at}gn.Ia="serverreachability";function cs(l){P.call(this,gn.Ia,l)}R(cs,P);function nr(l){const p=xr();nt(p,new cs(p))}gn.STAT_EVENT="statevent";function rr(l,p){P.call(this,gn.STAT_EVENT,l),this.stat=p}R(rr,P);function et(l){const p=xr();nt(p,new rr(p,l))}gn.Ja="timingevent";function No(l,p){P.call(this,gn.Ja,l),this.size=p}R(No,P);function Dr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Vr(){this.g=!0}Vr.prototype.ua=function(){this.g=!1};function Xa(l,p,g,E,M,U){l.info(function(){if(l.g)if(U){var J="",ye=U.split("&");for(let Fe=0;Fe<ye.length;Fe++){var rt=ye[Fe].split("=");if(rt.length>1){const lt=rt[0];rt=rt[1];const tn=lt.split("_");J=tn.length>=2&&tn[1]=="type"?J+(lt+"="+rt+"&"):J+(lt+"=redacted&")}}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+J})}function Ja(l,p,g,E,M,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+J})}function Nn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ii(l,g)+(E?" "+E:"")})}function Za(l,p){l.info(function(){return"TIMEOUT: "+p})}Vr.prototype.info=function(){};function Ii(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let J=1;J<E.length;J++)E[J]=""}}}}return Pr(U)}catch{return p}}var Or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Lr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},el;function ir(){}R(ir,kr),ir.prototype.g=function(){return new XMLHttpRequest},el=new ir;function xn(l){return encodeURIComponent(String(l))}function hs(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function on(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Rr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tl}function tl(){this.i=null,this.g="",this.h=!1}var nl={},xo={};function yn(l,p,g){l.M=1,l.A=or(an(p)),l.u=g,l.R=!0,Do(l,null)}function Do(l,p){l.F=Date.now(),Si(l),l.B=an(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Bo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new tl,l.g=dl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new Ka(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Po[0]=M.toString()),M=Po);for(let U=0;U<M.length;U++){const J=Ue(g,M[U],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),nr(),Xa(l.i,l.v,l.B,l.l,l.S,l.u)}on.prototype.ba=function(l){l=l.target;const p=this.O;p&&Fn(l)==3?p.j():this.Y(l)},on.prototype.Y=function(l){try{if(l==this.g)e:{const ye=Fn(this.g),rt=this.g.ya(),Fe=this.g.ca();if(!(ye<3)&&(ye!=3||this.g&&(this.h.h||this.g.la()||cl(this.g)))){this.K||ye!=4||rt==7||(rt==8||Fe<=0?nr(3):nr(2)),ds(this);var p=this.g.ca();this.X=p;var g=rl(this);if(this.o=p==200,Ja(this.i,this.v,this.B,this.l,this.S,ye,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var U=E;break t}}U=null}if(l=U)Nn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qe(this,l);else{this.o=!1,this.m=3,et(12),sr(this),Ai(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=sl(this,g),lt==xo){ye==4&&(this.m=4,et(14),l=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==nl){this.m=4,et(15),Nn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Nn(this.i,this.l,lt,null),qe(this,lt);if(il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||g.length!=0||this.h.h||(this.m=1,et(16),l=!1),this.o=this.o&&l,!l)Nn(this.i,this.l,g,"[Invalid Chunked Response]"),sr(this),Ai(this);else if(g.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Oi(J),J.P=!0,et(11))}}else Nn(this.i,this.l,g,null),qe(this,g);ye==4&&sr(this),this.o&&!this.K&&(ye==4?Ts(this.j,this):(this.o=!1,Si(this)))}else qo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),sr(this),Ai(this)}}}catch{}finally{}};function rl(l){if(!il(l))return l.g.la();const p=cl(l.g);if(p==="")return"";let g="";const E=p.length,M=Fn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return sr(l),Ai(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function il(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function sl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?xo:(g=Number(p.substring(g,E)),isNaN(g)?nl:(E+=1,E+g>p.length?xo:(p=p.slice(E,E+g),l.C=E+g,p)))}on.prototype.cancel=function(){this.K=!0,sr(this)};function Si(l){l.T=Date.now()+l.H,Vo(l,l.H)}function Vo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Dr(v(l.aa,l),p)}function ds(l){l.D&&(h.clearTimeout(l.D),l.D=null)}on.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Za(this.i,this.B),this.M!=2&&(nr(),et(17)),sr(this),this.m=2,Ai(this)):Vo(this,this.T-l)};function Ai(l){l.j.I==0||l.K||Ts(l.j,l)}function sr(l){ds(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,as(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Lo(g.h,l))){if(!l.L&&Lo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)ws(g),Zt(g);else break e;zn(g),et(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Dr(v(g.Va,g),6e3));Ci(g.h)<=1&&g.ta&&(g.ta=void 0)}else en(g,11)}else if((l.L||g.g==l)&&ws(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Fe=M[p];const lt=Fe[0];if(!(lt<=g.K))if(g.K=lt,Fe=Fe[1],g.I==2)if(Fe[0]=="c"){g.M=Fe[1],g.ba=Fe[2];const tn=Fe[3];tn!=null&&(g.ka=tn,g.j.info("VER="+g.ka));const hr=Fe[4];hr!=null&&(g.za=hr,g.j.info("SVER="+g.za));const Bn=Fe[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(E=1.5*Bn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const $n=l.g;if($n){const As=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(As){var U=E.h;U.g||As.indexOf("spdy")==-1&&As.indexOf("quic")==-1&&As.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ps(U,U.h),U.h=null))}if(E.G){const Go=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(E.wa=Go,Me(E.J,E.G,Go))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var J=l;if(E.na=Wo(E,E.L?E.ba:null,E.W),J.L){Ri(E.h,J);var ye=J,rt=E.O;rt&&(ye.H=rt),ye.D&&(ds(ye),Si(ye)),E.g=J}else kt(E);g.i.length>0&&cr(g)}else Fe[0]!="stop"&&Fe[0]!="close"||en(g,7);else g.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?en(g,7):vs(g):Fe[0]!="noop"&&g.l&&g.l.qa(Fe),g.A=0)}}nr(4)}catch{}}var oc=class{constructor(l,p){this.g=l,this.map=p}};function fs(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ci(l){return l.h?1:l.g?l.g.size:0}function Lo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ps(l,p){l.g?l.g.add(p):l.h=p}function Ri(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}fs.prototype.cancel=function(){if(this.i=Yt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Yt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,U=null;E>=0?(M=l[g].substring(0,E),U=l[g].substring(E+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Dn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Dn?(this.l=l.l,Pi(this,l.j),this.o=l.o,this.g=l.g,Vn(this,l.u),this.h=l.h,Mr(this,$o(l.i)),this.m=l.m):l&&(p=String(l).match(ol))?(this.l=!1,Pi(this,p[1]||"",!0),this.o=ki(p[2]||""),this.g=ki(p[3]||"",!0),Vn(this,p[4]),this.h=ki(p[5]||"",!0),Mr(this,p[6]||"",!0),this.m=ki(p[7]||"")):(this.l=!1,this.i=new Re(null,this.l))}Dn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ni(p,bo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ni(p,bo,!0),"@"),l.push(xn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ni(g,g.charAt(0)=="/"?xi:Fo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ni(g,Uo)),l.join("")},Dn.prototype.resolve=function(l){const p=an(this);let g=!!l.j;g?Pi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Vn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let J=0;J<M.length;){const ye=M[J++];ye=="."?E&&J==M.length&&U.push(""):ye==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&J==M.length&&U.push("")):(U.push(ye),E=!0)}E=U.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?Mr(p,$o(l.i)):g=!!l.m,g&&(p.m=l.m),p};function an(l){return new Dn(l)}function Pi(l,p,g){l.j=g?ki(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Vn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Mr(l,p,g){p instanceof Re?(l.i=p,gs(l.i,l.l)):(g||(p=Ni(p,ac)),l.i=new Re(p,l.l))}function Me(l,p,g){l.i.set(p,g)}function or(l){return Me(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function ki(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ni(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Mo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Mo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var bo=/[#\/\?@]/g,Fo=/[#\?:]/g,xi=/[#\?]/g,ac=/[#\?@]/g,Uo=/#/g;function Re(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function On(l){l.g||(l.g=new Map,l.h=0,l.i&&Xt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Re.prototype,i.add=function(l,p){On(this),this.i=null,l=Ln(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function jo(l,p){On(l),p=Ln(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function ms(l,p){return On(l),p=Ln(l,p),l.g.has(p)}i.forEach=function(l,p){On(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function zo(l,p){On(l);let g=[];if(typeof p=="string")ms(l,p)&&(g=g.concat(l.g.get(Ln(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return On(this),this.i=null,l=Ln(this,l),ms(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=zo(this,l),l.length>0?String(l[0]):p):p};function Bo(l,p,g){jo(l,p),g.length>0&&(l.i=null,l.g.set(Ln(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=xn(g);g=zo(this,g);for(let U=0;U<g.length;U++){let J=M;g[U]!==""&&(J+="="+xn(g[U])),l.push(J)}}return this.i=l.join("&")};function $o(l){const p=new Re;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Ln(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function gs(l,p){p&&!l.j&&(On(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(jo(this,E),Bo(this,M,g))},l)),l.j=p}function Mn(l,p){const g=new Vr;if(h.Image){const E=new Image;E.onload=w(Tt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(Tt,g,"TestLoadImage: error",!1,p,E),E.onabort=w(Tt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(Tt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function bn(l,p){const g=new Vr,E=new AbortController,M=setTimeout(()=>{E.abort(),Tt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(M),U.ok?Tt(g,"TestPingServer: ok",!0,p):Tt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Tt(g,"TestPingServer: error",!1,p)})}function Tt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Di(){this.g=new Ti}function ar(l){this.i=l.Sb||null,this.h=l.ab||!1}R(ar,kr),ar.prototype.g=function(){return new Jt(this.i,this.h)};function Jt(l,p){at.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}R(Jt,at),i=Jt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,_n(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;al(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function al(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?br(this):_n(this),this.readyState==3&&al(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,br(this))},i.Na=function(l){this.g&&(this.response=l,br(this))},i.ga=function(){this.g&&br(this)};function br(l){l.readyState=4,l.l=null,l.j=null,l.B=null,_n(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function _n(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ll(l){let p="";return le(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function ys(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ll(g),typeof l=="string"?g!=null&&xn(g):Me(l,p,g))}function je(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}R(je,at);var ul=/^https?$/i,lc=["POST","PUT"];i=je.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():el.g(),this.g.onreadystatechange=V(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Fr(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(lc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of g)this.g.setRequestHeader(U,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Fr(this,U)}};function Fr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Ur(l),ur(l)}function Ur(l){l.A||(l.A=!0,nt(l,"complete"),nt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,nt(this,"complete"),nt(this,"abort"),ur(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),je.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?lr(this):this.Xa())},i.Xa=function(){lr(this)};function lr(l){if(l.h&&typeof c<"u"){if(l.v&&Fn(l)==4)setTimeout(l.Ca.bind(l),0);else if(nt(l,"readystatechange"),Fn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=U===0){let J=String(l.D).match(ol)[1]||null;!J&&h.self&&h.self.location&&(J=h.self.location.protocol.slice(0,-1)),E=!ul.test(J?J.toLowerCase():"")}g=E}if(g)nt(l,"complete"),nt(l,"success");else{l.o=6;try{var M=Fn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Ur(l)}}finally{ur(l)}}}}function ur(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||nt(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Fn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Qa(p)}};function cl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qo(l){const p={};l=(l.g&&Fn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=hs(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}te(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function _s(l){this.za=0,this.i=[],this.j=new Vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,l),this.Za=Un("retryDelaySeedMs",1e4,l),this.Ta=Un("forwardChannelMaxRetries",2,l),this.va=Un("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new fs(l&&l.concurrentRequestLimit),this.Ba=new Di,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=_s.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){et(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Wo(this,null,this.W),cr(this)};function vs(l){if(Es(l),l.I==3){var p=l.V++,g=an(l.J);if(Me(g,"SID",l.M),Me(g,"RID",p),Me(g,"TYPE","terminate"),jn(l,g),p=new on(l,l.j,p),p.M=2,p.A=or(an(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=dl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Si(p)}Li(l)}function Zt(l){l.g&&(Oi(l),l.g.cancel(),l.g=null)}function Es(l){Zt(l),l.v&&(h.clearTimeout(l.v),l.v=null),ws(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function cr(l){if(!Oo(l.h)&&!l.m){l.m=!0;var p=l.Ea;ze||I(),ke||(ze(),ke=!0),k.add(p,l),l.D=0}}function hl(l,p){return Ci(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Dr(v(l.Ea,l,p),Is(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new on(this,this.j,l);let U=this.o;if(this.U&&(U?(U=D(U),Ee(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Ho(this,M,p),g=an(this.J),Me(g,"RID",l),Me(g,"CVER",22),this.G&&Me(g,"X-HTTP-Session-Id",this.G),jn(this,g),U&&(this.R?p="headers="+xn(ll(U))+"&"+p:this.u&&ys(g,this.u,U)),ps(this.h,M),this.Ra&&Me(g,"TYPE","init"),this.S?(Me(g,"$req",p),Me(g,"SID","null"),M.U=!0,yn(M,g,null)):yn(M,g,p),this.I=2}}else this.I==3&&(l?Vi(this,l):this.i.length==0||Oo(this.h)||Vi(this))};function Vi(l,p){var g;p?g=p.l:g=l.V++;const E=an(l.J);Me(E,"SID",l.M),Me(E,"RID",g),Me(E,"AID",l.K),jn(l,E),l.u&&l.o&&ys(E,l.u,l.o),g=new on(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Ho(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ps(l.h,g),yn(g,E,p)}function jn(l,p){l.H&&le(l.H,function(g,E){Me(p,E,g)}),l.l&&le({},function(g,E){Me(p,E,g)})}function Ho(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var M=l.i;let ye=-1;for(;;){const rt=["count="+g];ye==-1?g>0?(ye=M[0].g,rt.push("ofs="+ye)):ye=0:rt.push("ofs="+ye);let Fe=!0;for(let lt=0;lt<g;lt++){var U=M[lt].g;const tn=M[lt].map;if(U-=ye,U<0)ye=Math.max(0,M[lt].g-100),Fe=!1;else try{U="req"+U+"_"||"";try{var J=tn instanceof Map?tn:Object.entries(tn);for(const[hr,Bn]of J){let $n=Bn;m(Bn)&&($n=Pr(Bn)),rt.push(U+hr+"="+encodeURIComponent($n))}}catch(hr){throw rt.push(U+"type="+encodeURIComponent("_badmap")),hr}}catch{E&&E(tn)}}if(Fe){J=rt.join("&");break e}}J=void 0}return l=l.i.splice(0,g),p.G=l,J}function kt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;ze||I(),ke||(ze(),ke=!0),k.add(p,l),l.A=0}}function zn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Dr(v(l.Da,l),Is(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,jr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Dr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),Zt(this),jr(this))};function Oi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function jr(l){l.g=new on(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=an(l.na);Me(p,"RID","rpc"),Me(p,"SID",l.M),Me(p,"AID",l.K),Me(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Me(p,"TO",l.ia),Me(p,"TYPE","xmlhttp"),jn(l,p),l.u&&l.o&&ys(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=or(an(p)),g.u=null,g.R=!0,Do(g,l)}i.Va=function(){this.C!=null&&(this.C=null,Zt(this),zn(this),et(19))};function ws(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ts(l,p){var g=null;if(l.g==p){ws(l),Oi(l),l.g=null;var E=2}else if(Lo(l.h,p))g=p.G,Ri(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=xr(),nt(E,new No(E,g)),cr(l)}else kt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&hl(l,p)||E==2&&zn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:en(l,5);break;case 4:en(l,10);break;case 3:en(l,6);break;default:en(l,2)}}}function Is(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function en(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const M=!E;E=new Dn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Pi(E,"https"),or(E),M?Mn(E.toString(),g):bn(E.toString(),g)}else et(2);l.I=0,l.l&&l.l.pa(p),Li(l),Es(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Li(l){if(l.I=0,l.ja=[],l.l){const p=Yt(l.h);(p.length!=0||l.i.length!=0)&&(K(l.ja,p),K(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function Wo(l,p,g){var E=g instanceof Dn?an(g):new Dn(g);if(E.g!="")p&&(E.g=p+"."+E.g),Vn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new Dn(null);E&&Pi(U,E),p&&(U.g=p),M&&Vn(U,M),g&&(U.h=g),E=U}return g=l.G,p=l.wa,g&&p&&Me(E,g,p),Me(E,"VER",l.ka),jn(l,E),E}function dl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new je(new ar({ab:g})):new je(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function fl(){}i=fl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ss(){}Ss.prototype.g=function(l,p){return new It(l,p)};function It(l,p){at.call(this),this.g=new _s(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new zr(this)}R(It,at),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){vs(this.g)},It.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Pr(l),l=g);p.i.push(new oc(p.Ya++,l)),p.I==3&&cr(p)},It.prototype.N=function(){this.g.l=null,delete this.j,vs(this.g),delete this.g,It.Z.N.call(this)};function pl(l){ls.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}R(pl,ls);function ml(){ko.call(this),this.status=1}R(ml,ko);function zr(l){this.g=l}R(zr,fl),zr.prototype.ra=function(){nt(this.g,"a")},zr.prototype.qa=function(l){nt(this.g,new pl(l))},zr.prototype.pa=function(l){nt(this.g,new ml)},zr.prototype.oa=function(){nt(this.g,"b")},Ss.prototype.createWebChannel=Ss.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,t_=function(){return new Ss},e_=function(){return xr()},Zy=gn,td={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,Eu=Or,Lr.COMPLETE="complete",Jy=Lr,Ya.EventType=Nr,Nr.OPEN="a",Nr.CLOSE="b",Nr.ERROR="c",Nr.MESSAGE="d",at.prototype.listen=at.prototype.J,wa=Ya,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,Xy=je}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});const ig="@firebase/firestore",sg="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Td("@firebase/firestore");function Ws(){return ts.logLevel}function ne(i,...e){if(ts.logLevel<=Ce.DEBUG){const t=e.map(Vd);ts.debug(`Firestore (${vo}): ${i}`,...t)}}function Sr(i,...e){if(ts.logLevel<=Ce.ERROR){const t=e.map(Vd);ts.error(`Firestore (${vo}): ${i}`,...t)}}function ao(i,...e){if(ts.logLevel<=Ce.WARN){const t=e.map(Vd);ts.warn(`Firestore (${vo}): ${i}`,...t)}}function Vd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,n_(i,s,t)}function n_(i,e,t){let s=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Sr(s),new Error(s)}function Ze(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||n_(e,a,s)}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class xI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class DI{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Yi,e.enqueueRetryable((()=>a(this.currentUser)))};const h=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Yi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new r_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class VI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new VI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=c=>{c.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const a=c=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new og(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new og(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=MI(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<t&&(s+=e.charAt(a[c]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function nd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const a=i.charAt(s),c=e.charAt(s);if(a!==c)return zh(a)===zh(c)?Pe(a,c):zh(a)?1:-1}return Pe(i.length,e.length)}const bI=55296,FI=57343;function zh(i){const e=i.charCodeAt(0);return e>=bI&&e<=FI}function lo(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__name__";class Kn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const c=Kn.compareSegments(e.get(a),t.get(a));if(c!==0)return c}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Kn.isNumericId(e),a=Kn.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Kn.extractNumericId(e).compare(Kn.extractNumericId(t)):nd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class Qe extends Kn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const UI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Kn{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return UI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ag}static keyField(){return new bt([ag])}static fromServerFormat(e){const t=[];let s="",a=0;const c=()=>{if(s.length===0)throw new se(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new se(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new se(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(c(),a++)}if(c(),h)throw new se(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Qe.fromString(e))}static fromName(e){return new de(Qe.fromString(e).popFirst(5))}static empty(){return new de(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Qe(e.slice()))}}function jI(i,e,t,s){if(e===!0&&s===!0)throw new se(Q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function lg(i){if(de.isDocumentKey(i))throw new se(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function s_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Gu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function rd(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gu(i);throw new se(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ba(i,e){if(!s_(i))throw new se(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new se(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=-62135596800,cg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*cg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ug)throw new se(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cg}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ba(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:dt("string",Ye._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Ye(0,0))}static max(){return new _e(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=-1;function zI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=_e.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new pi(a,de.empty(),e)}function BI(i){return new pi(i.readTime,i.key,Va)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(_e.min(),de.empty(),Va)}static max(){return new pi(_e.max(),de.empty(),Va)}}function $I(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(i){if(i.code!==Q.FAILED_PRECONDITION||i.message!==qI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(t,c).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,s)=>{t(e)}))}static reject(e){return new z(((t,s)=>{s(e)}))}static waitFor(e){return new z(((t,s)=>{let a=0,c=0,h=!1;e.forEach((m=>{++a,m.next((()=>{++c,h&&c===a&&t()}),(y=>s(y)))})),h=!0,c===a&&t()}))}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next((a=>a?z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,c)=>{s.push(t.call(this,a,c))})),this.waitFor(s)}static mapArray(e,t){return new z(((s,a)=>{const c=e.length,h=new Array(c);let m=0;for(let y=0;y<c;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===c&&s(h)}),(w=>a(w)))}}))}static doWhile(e,t){return new z(((s,a)=>{const c=()=>{e()===!0?t().next((()=>{c()}),a):s()};c()}))}}function WI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Eo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=-1;function Yu(i){return i==null}function Vu(i){return i===0&&1/i==-1/0}function KI(i){return typeof i=="number"&&Number.isInteger(i)&&!Vu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="";function QI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=hg(e)),e=YI(i.get(t),e);return hg(e)}function YI(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":t+="";break;case o_:t+="";break;default:t+=c}}return t}function hg(i){return i+o_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function wo(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function a_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=t?s(e.key,t):1,t&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,a,c){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=a??Ct.EMPTY,this.right=c??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,c){return new Ct(e??this.key,t??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,t,s),null):c===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ct.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,a,c){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fg(this.data.getIterator())}getIteratorFrom(e){return new fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new ai([])}unionWith(e){let t=new mt(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ai(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new l_("Invalid base64 string: "+c):c}})(e);return new Rt(t)}static fromUint8Array(e){const t=(function(a){let c="";for(let h=0;h<a.length;++h)c+=String.fromCharCode(a[h]);return c})(e);return new Rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(i){if(Ze(!!i,39018),typeof i=="string"){let e=0;const t=XI.exec(i);if(Ze(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(i.seconds),nanos:st(i.nanos)}}function st(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function gi(i){return typeof i=="string"?Rt.fromBase64String(i):Rt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="server_timestamp",c_="__type__",h_="__previous_value__",d_="__local_write_time__";function Od(i){return(i?.mapValue?.fields||{})[c_]?.stringValue===u_}function Xu(i){const e=i.mapValue.fields[h_];return Od(e)?Xu(e):e}function Oa(i){const e=mi(i.mapValue.fields[d_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t,s,a,c,h,m,y,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const Ou="(default)";class La{constructor(e,t){this.projectId=e,this.database=t||Ou}static empty(){return new La("","")}get isDefaultDatabase(){return this.database===Ou}isEqual(e){return e instanceof La&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="__type__",ZI="__max__",du={mapValue:{}},p_="__vector__",Lu="value";function yi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Od(i)?4:tS(i)?9007199254740991:eS(i)?10:11:ve(28295,{value:i})}function tr(i,e){if(i===e)return!0;const t=yi(i);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Oa(i).isEqual(Oa(e));case 3:return(function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const h=mi(a.timestampValue),m=mi(c.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,c){return gi(a.bytesValue).isEqual(gi(c.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,c){return st(a.geoPointValue.latitude)===st(c.geoPointValue.latitude)&&st(a.geoPointValue.longitude)===st(c.geoPointValue.longitude)})(i,e);case 2:return(function(a,c){if("integerValue"in a&&"integerValue"in c)return st(a.integerValue)===st(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const h=st(a.doubleValue),m=st(c.doubleValue);return h===m?Vu(h)===Vu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return lo(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return(function(a,c){const h=a.mapValue.fields||{},m=c.mapValue.fields||{};if(dg(h)!==dg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!tr(h[y],m[y])))return!1;return!0})(i,e);default:return ve(52216,{left:i})}}function Ma(i,e){return(i.values||[]).find((t=>tr(t,e)))!==void 0}function uo(i,e){if(i===e)return 0;const t=yi(i),s=yi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return(function(c,h){const m=st(c.integerValue||c.doubleValue),y=st(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return pg(i.timestampValue,e.timestampValue);case 4:return pg(Oa(i),Oa(e));case 5:return nd(i.stringValue,e.stringValue);case 6:return(function(c,h){const m=gi(c),y=gi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(c,h){const m=c.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Pe(m[v],y[v]);if(w!==0)return w}return Pe(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(c,h){const m=Pe(st(c.latitude),st(h.latitude));return m!==0?m:Pe(st(c.longitude),st(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return mg(i.arrayValue,e.arrayValue);case 10:return(function(c,h){const m=c.fields||{},y=h.fields||{},v=m[Lu]?.arrayValue,w=y[Lu]?.arrayValue,R=Pe(v?.values?.length||0,w?.values?.length||0);return R!==0?R:mg(v,w)})(i.mapValue,e.mapValue);case 11:return(function(c,h){if(c===du.mapValue&&h===du.mapValue)return 0;if(c===du.mapValue)return 1;if(h===du.mapValue)return-1;const m=c.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const V=nd(y[R],w[R]);if(V!==0)return V;const B=uo(m[y[R]],v[w[R]]);if(B!==0)return B}return Pe(y.length,w.length)})(i.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function pg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=mi(i),s=mi(e),a=Pe(t.seconds,s.seconds);return a!==0?a:Pe(t.nanos,s.nanos)}function mg(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const c=uo(t[a],s[a]);if(c)return c}return Pe(t.length,s.length)}function co(i){return id(i)}function id(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=mi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return gi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const c of t.values||[])a?a=!1:s+=",",s+=id(c);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",c=!0;for(const h of s)c?c=!1:a+=",",a+=`${h}:${id(t.fields[h])}`;return a+"}"})(i.mapValue):ve(61005,{value:i})}function wu(i){switch(yi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xu(i);return e?16+wu(e):16;case 5:return 2*i.stringValue.length;case 6:return gi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,c)=>a+wu(c)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return wo(s.fields,((c,h)=>{a+=c.length+wu(h)})),a})(i.mapValue);default:throw ve(13486,{value:i})}}function gg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function sd(i){return!!i&&"integerValue"in i}function Ld(i){return!!i&&"arrayValue"in i}function yg(i){return!!i&&"nullValue"in i}function _g(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Bh(i){return!!i&&"mapValue"in i}function eS(i){return(i?.mapValue?.fields||{})[f_]?.stringValue===p_}function Ca(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return wo(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ca(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ca(i.arrayValue.values[t]);return e}return{...i}}function tS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===ZI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Bh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(t)}setAll(e){let t=bt.emptyPath(),s={},a=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=Ca(h):a.push(m.lastSegment())}));const c=this.getFieldsMap(t);this.applyChanges(c,s,a)}delete(e){const t=this.field(e.popLast());Bh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Bh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){wo(t,((a,c)=>e[a]=c));for(const a of s)delete e[a]}clone(){return new Qn(Ca(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,a,c,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=c,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,_e.min(),_e.min(),_e.min(),Qn.empty(),0)}static newFoundDocument(e,t,s,a){return new Mt(e,1,t,_e.min(),s,a,0)}static newNoDocument(e,t){return new Mt(e,2,t,_e.min(),_e.min(),Qn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,_e.min(),_e.min(),Qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.position=e,this.inclusive=t}}function vg(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],h=i.position[a];if(c.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=uo(h,t.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t="asc"){this.field=e,this.dir=t}}function nS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{}class ht extends m_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iS(e,t,s):t==="array-contains"?new aS(e,s):t==="in"?new lS(e,s):t==="not-in"?new uS(e,s):t==="array-contains-any"?new cS(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sS(e,s):new oS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(uo(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends m_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new kn(e,t)}matches(e){return g_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function g_(i){return i.op==="and"}function y_(i){return rS(i)&&g_(i)}function rS(i){for(const e of i.filters)if(e instanceof kn)return!1;return!0}function od(i){if(i instanceof ht)return i.field.canonicalString()+i.op.toString()+co(i.value);if(y_(i))return i.filters.map((e=>od(e))).join(",");{const e=i.filters.map((t=>od(t))).join(",");return`${i.op}(${e})`}}function __(i,e){return i instanceof ht?(function(s,a){return a instanceof ht&&s.op===a.op&&s.field.isEqual(a.field)&&tr(s.value,a.value)})(i,e):i instanceof kn?(function(s,a){return a instanceof kn&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((c,h,m)=>c&&__(h,a.filters[m])),!0):!1})(i,e):void ve(19439)}function v_(i){return i instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`})(i):i instanceof kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(v_).join(" ,")+"}"})(i):"Filter"}class iS extends ht{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class sS extends ht{constructor(e,t){super(e,"in",t),this.keys=E_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oS extends ht{constructor(e,t){super(e,"not-in",t),this.keys=E_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function E_(i,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class aS extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ld(t)&&Ma(t.arrayValue,this.value)}}class lS extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ma(this.value.arrayValue,t)}}class uS extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ma(this.value.arrayValue,t)}}class cS extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ld(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ma(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t=null,s=[],a=[],c=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=h,this.endAt=m,this.Te=null}}function wg(i,e=null,t=[],s=[],a=null,c=null,h=null){return new hS(i,e,t,s,a,c,h)}function Md(i){const e=xe(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>od(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Yu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>co(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>co(s))).join(",")),e.Te=t}return e.Te}function bd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!nS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!__(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Eg(i.startAt,e.startAt)&&Eg(i.endAt,e.endAt)}function ad(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t=null,s=[],a=[],c=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dS(i,e,t,s,a,c,h,m){return new $a(i,e,t,s,a,c,h,m)}function w_(i){return new $a(i)}function Tg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function T_(i){return i.collectionGroup!==null}function Ra(i){const e=xe(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),t.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(bt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((c=>{t.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new bu(c,s))})),t.has(bt.keyField().canonicalString())||e.Ie.push(new bu(bt.keyField(),s))}return e.Ie}function Jn(i){const e=xe(i);return e.Ee||(e.Ee=fS(e,Ra(i))),e.Ee}function fS(i,e){if(i.limitType==="F")return wg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const c=a.dir==="desc"?"asc":"desc";return new bu(a.field,c)}));const t=i.endAt?new Mu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Mu(i.startAt.position,i.startAt.inclusive):null;return wg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ld(i,e){const t=i.filters.concat([e]);return new $a(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function ud(i,e,t){return new $a(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Ju(i,e){return bd(Jn(i),Jn(e))&&i.limitType===e.limitType}function I_(i){return`${Md(Jn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>v_(a))).join(", ")}]`),Yu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>co(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>co(a))).join(",")),`Target(${s})`})(Jn(i))}; limitType=${i.limitType})`}function Zu(i,e){return e.isFoundDocument()&&(function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):de.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(i,e)&&(function(s,a){for(const c of Ra(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(h,m,y){const v=vg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Ra(s),a)||s.endAt&&!(function(h,m,y){const v=vg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Ra(s),a))})(i,e)}function pS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function S_(i){return(e,t)=>{let s=!1;for(const a of Ra(i)){const c=mS(a,e,t);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function mS(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(c,h,m){const y=h.data.field(c),v=m.data.field(c);return y!==null&&v!==null?uo(y,v):ve(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,((t,s)=>{for(const[a,c]of s)e(a,c)}))}isEmpty(){return a_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new ot(de.comparator);function _i(){return gS}const A_=new ot(de.comparator);function Ta(...i){let e=A_;for(const t of i)e=e.insert(t.key,t);return e}function yS(i){let e=A_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Qi(){return Pa()}function C_(){return Pa()}function Pa(){return new rs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const _S=new mt(de.comparator);function Oe(...i){let e=_S;for(const t of i)e=e.add(t);return e}const vS=new mt(Pe);function ES(){return vS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function R_(i){return{integerValue:""+i}}function wS(i,e){return KI(e)?R_(e):Fd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this._=void 0}}function TS(i,e,t){return i instanceof cd?(function(a,c){const h={fields:{[c_]:{stringValue:u_},[d_]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&Od(c)&&(c=Xu(c)),c&&(h.fields[h_]=c),{mapValue:h}})(t,e):i instanceof Fu?P_(i,e):i instanceof Uu?k_(i,e):(function(a,c){const h=SS(a,c),m=Ig(h)+Ig(a.Ae);return sd(h)&&sd(a.Ae)?R_(m):Fd(a.serializer,m)})(i,e)}function IS(i,e,t){return i instanceof Fu?P_(i,e):i instanceof Uu?k_(i,e):t}function SS(i,e){return i instanceof hd?(function(s){return sd(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class cd extends ec{}class Fu extends ec{constructor(e){super(),this.elements=e}}function P_(i,e){const t=N_(e);for(const s of i.elements)t.some((a=>tr(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Uu extends ec{constructor(e){super(),this.elements=e}}function k_(i,e){let t=N_(e);for(const s of i.elements)t=t.filter((a=>!tr(a,s)));return{arrayValue:{values:t}}}class hd extends ec{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ig(i){return st(i.integerValue||i.doubleValue)}function N_(i){return Ld(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function AS(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof Fu&&a instanceof Fu||s instanceof Uu&&a instanceof Uu?lo(s.elements,a.elements,tr):s instanceof hd&&a instanceof hd?tr(s.Ae,a.Ae):s instanceof cd&&a instanceof cd})(i.transform,e.transform)}class Xi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xi}static exists(e){return new Xi(void 0,e)}static updateTime(e){return new Xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ud{}function x_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new RS(i.key,Xi.none()):new jd(i.key,i.data,Xi.none());{const t=i.data,s=Qn.empty();let a=new mt(bt.comparator);for(let c of e.fields)if(!a.has(c)){let h=t.field(c);h===null&&c.length>1&&(c=c.popLast(),h=t.field(c)),h===null?s.delete(c):s.set(c,h),a=a.add(c)}return new tc(i.key,s,new ai(a.toArray()),Xi.none())}}function CS(i,e,t){i instanceof jd?(function(a,c,h){const m=a.value.clone(),y=Ag(a.fieldTransforms,c,h.transformResults);m.setAll(y),c.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof tc?(function(a,c,h){if(!Tu(a.precondition,c))return void c.convertToUnknownDocument(h.version);const m=Ag(a.fieldTransforms,c,h.transformResults),y=c.data;y.setAll(D_(a)),y.setAll(m),c.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(a,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ka(i,e,t,s){return i instanceof jd?(function(c,h,m,y){if(!Tu(c.precondition,h))return m;const v=c.value.clone(),w=Cg(c.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof tc?(function(c,h,m,y){if(!Tu(c.precondition,h))return m;const v=Cg(c.fieldTransforms,y,h),w=h.data;return w.setAll(D_(c)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((R=>R.field)))})(i,e,t,s):(function(c,h,m){return Tu(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function Sg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&lo(s,a,((c,h)=>AS(c,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class jd extends Ud{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class tc extends Ud{constructor(e,t,s,a,c=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function D_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Ag(i,e,t){const s=new Map;Ze(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const c=i[a],h=c.transform,m=e.data.field(c.field);s.set(c.field,IS(h,m,t[a]))}return s}function Cg(i,e,t){const s=new Map;for(const a of i){const c=a.transform,h=t.data.field(a.field);s.set(a.field,TS(c,h,e))}return s}class RS extends Ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&CS(c,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=C_();return this.mutations.forEach((a=>{const c=e.get(a.key),h=c.overlayedDocument;let m=this.applyToLocalView(h,c.mutatedFields);m=t.has(a.key)?null:m;const y=x_(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,((t,s)=>Sg(t,s)))&&lo(this.baseMutations,e.baseMutations,((t,s)=>Sg(t,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ne;function V_(i){if(i===void 0)return Sr("GRPC error has no .code"),Q.UNKNOWN;switch(i){case ct.OK:return Q.OK;case ct.CANCELLED:return Q.CANCELLED;case ct.UNKNOWN:return Q.UNKNOWN;case ct.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ct.INTERNAL:return Q.INTERNAL;case ct.UNAVAILABLE:return Q.UNAVAILABLE;case ct.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ct.NOT_FOUND:return Q.NOT_FOUND;case ct.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ct.ABORTED:return Q.ABORTED;case ct.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ct.DATA_LOSS:return Q.DATA_LOSS;default:return ve(39323,{code:i})}}(Ne=ct||(ct={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new fi([4294967295,4294967295],0);function Rg(i){const e=xS().encode(i),t=new Yy;return t.update(e),new Uint8Array(t.digest())}function Pg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new fi([t,s],0),new fi([a,c],0)]}class zd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ia(`Invalid padding: ${t}`);if(s<0)throw new Ia(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=fi.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(fi.fromNumber(s)));return a.compare(DS)===1&&(a=new fi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Rg(e),[s,a]=Pg(t);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,a,c);if(!this.we(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new zd(c,a,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Rg(e),[s,a]=Pg(t);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,a,c);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,s,a,c){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new nc(_e.min(),a,new ot(Pe),_i(),Oe())}}class qa{constructor(e,t,s,a,c){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new qa(s,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class O_{constructor(e,t){this.targetId=e,this.Ce=t}}class L_{constructor(e,t,s=Rt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class kg{constructor(){this.ve=0,this.Fe=Ng(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),s=Oe();return this.Fe.forEach(((a,c)=>{switch(c){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ve(38017,{changeType:c})}})),new qa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ng()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class VS{constructor(e){this.Ge=e,this.ze=new Map,this.je=_i(),this.Je=fu(),this.He=fu(),this.Ye=new ot(Pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const c=a.target;if(ad(c))if(s===0){const h=new de(c.path);this.et(t,h,Mt.newNoDocument(h,_e.min()))}else Ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:c=0}=t;let h,m;try{h=gi(s).toUint8Array()}catch(y){if(y instanceof l_)return ao("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new zd(h,a,c)}catch(y){return ao(y instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((c=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.et(t,c,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((c,h)=>{const m=this.ot(h);if(m){if(c.current&&ad(m.target)){const y=new de(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Mt.newNoDocument(y,e))}c.Be&&(t.set(h,c.ke()),c.qe())}}));let s=Oe();this.He.forEach(((c,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(c))})),this.je.forEach(((c,h)=>h.setReadTime(e)));const a=new nc(e,t,this.Ye,this.je,s);return this.je=_i(),this.Je=fu(),this.He=fu(),this.Ye=new ot(Pe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new mt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new mt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fu(){return new ot(de.comparator)}function Ng(){return new ot(de.comparator)}const OS={asc:"ASCENDING",desc:"DESCENDING"},LS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MS={and:"AND",or:"OR"};class bS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dd(i,e){return i.useProto3Json||Yu(e)?e:{value:e}}function fd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function eo(i){return Ze(!!i,49232),_e.fromTimestamp((function(t){const s=mi(t);return new Ye(s.seconds,s.nanos)})(i))}function b_(i,e){return pd(i,e).canonicalString()}function pd(i,e){const t=(function(a){return new Qe(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function F_(i){const e=Qe.fromString(i);return Ze($_(e),10190,{key:e.toString()}),e}function $h(i,e){const t=F_(e);if(t.get(1)!==i.databaseId.projectId)throw new se(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(j_(t))}function U_(i,e){return b_(i.databaseId,e)}function FS(i){const e=F_(i);return e.length===4?Qe.emptyPath():j_(e)}function xg(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function j_(i){return Ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function US(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],c=(function(v,w){return v.useProto3Json?(Ze(w===void 0||typeof w=="string",58123),Rt.fromBase64String(w||"")):(Ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Rt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?Q.UNKNOWN:V_(v.code);return new se(w,v.message||"")})(h);t=new L_(s,a,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=$h(i,s.document.name),c=eo(s.document.updateTime),h=s.document.createTime?eo(s.document.createTime):_e.min(),m=new Qn({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(a,c,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Iu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=$h(i,s.document),c=s.readTime?eo(s.readTime):_e.min(),h=Mt.newNoDocument(a,c),m=s.removedTargetIds||[];t=new Iu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=$h(i,s.document),c=s.removedTargetIds||[];t=new Iu([],c,a,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:c}=s,h=new NS(a,c),m=s.targetId;t=new O_(m,h)}}return t}function jS(i,e){return{documents:[U_(i,e.path)]}}function zS(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=U_(i,a);const c=(function(v){if(v.length!==0)return B_(kn.create(v,"and"))})(e.filters);c&&(t.structuredQuery.where=c);const h=(function(v){if(v.length!==0)return v.map((w=>(function(V){return{field:Ks(V.field),direction:qS(V.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:a}}function BS(i){let e=FS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ze(s===1,65062);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let c=[];t.where&&(c=(function(R){const V=z_(R);return V instanceof kn&&y_(V)?V.getFilters():[V]})(t.where));let h=[];t.orderBy&&(h=(function(R){return R.map((V=>(function(K){return new bu(Qs(K.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(V)))})(t.orderBy));let m=null;t.limit&&(m=(function(R){let V;return V=typeof R=="object"?R.value:R,Yu(V)?null:V})(t.limit));let y=null;t.startAt&&(y=(function(R){const V=!!R.before,B=R.values||[];return new Mu(B,V)})(t.startAt));let v=null;return t.endAt&&(v=(function(R){const V=!R.before,B=R.values||[];return new Mu(B,V)})(t.endAt)),dS(e,a,h,c,m,"F",y,v)}function $S(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function z_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Qs(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Qs(t.unaryFilter.field);return ht.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Qs(t.unaryFilter.field);return ht.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Qs(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ht.create(Qs(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return kn.create(t.compositeFilter.filters.map((s=>z_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(i):ve(30097,{filter:i})}function qS(i){return OS[i]}function HS(i){return LS[i]}function WS(i){return MS[i]}function Ks(i){return{fieldPath:i.canonicalString()}}function Qs(i){return bt.fromServerFormat(i.fieldPath)}function B_(i){return i instanceof ht?(function(t){if(t.op==="=="){if(_g(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NAN"}};if(yg(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_g(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NAN"}};if(yg(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(t.field),op:HS(t.op),value:t.value}}})(i):i instanceof kn?(function(t){const s=t.getFilters().map((a=>B_(a)));return s.length===1?s[0]:{compositeFilter:{op:WS(t.op),filters:s}}})(i):ve(54877,{filter:i})}function $_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s,a,c=_e.min(),h=_e.min(),m=Rt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.yt=e}}function KS(i){const e=BS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.Cn=new YS}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(pi.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class YS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new mt(Qe.comparator),c=!a.has(s);return this.index[t]=a.add(s),c}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new mt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},q_=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(q_,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ho(0)}static cr(){return new ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="LruGarbageCollector",XS=1048576;function Og([i,e],[t,s]){const a=Pe(i,t);return a===0?Pe(e,s):a}class JS{constructor(e){this.Ir=e,this.buffer=new mt(Og),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Og(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Vg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Eo(t)?ne(Vg,"Ignoring IndexedDB error during garbage collection: ",t):await Ku(t)}await this.Vr(3e5)}))}}class e1{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Qu.ce);const s=new JS(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Dg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,c,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),a=this.params.maximumSequenceNumbersToCollect):a=R,h=Date.now(),this.nthSequenceNumber(e,a)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,t)))).next((R=>(c=R,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(v=Date.now(),Ws()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${c} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:R}))))}}function t1(i,e){return new e1(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.changes=new rs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ka(s.mutation,a,ai.empty(),Ye.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Oe()){const a=Qi();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((c=>{let h=Ta();return c.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Oe())))}populateOverlays(e,t,s){const a=[];return s.forEach((c=>{t.has(c)||a.push(c)})),this.documentOverlayCache.getOverlays(e,a).next((c=>{c.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,a){let c=_i();const h=Pa(),m=(function(){return Pa()})();return t.forEach(((y,v)=>{const w=s.get(v.key);a.has(v.key)&&(w===void 0||w.mutation instanceof tc)?c=c.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ka(w.mutation,v,w.mutation.getFieldMask(),Ye.now())):h.set(v.key,ai.empty())})),this.recalculateAndSaveOverlays(e,c).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>m.set(v,new r1(w,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Pa();let a=new ot(((h,m)=>h-m)),c=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||ai.empty();w=m.applyToLocalView(v,w),s.set(y,w);const R=(a.get(m.batchId)||Oe()).add(y);a=a.insert(m.batchId,R)}))})).next((()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,R=C_();w.forEach((V=>{if(!c.has(V)){const B=x_(t.get(V),s.get(V));B!==null&&R.set(V,B),c=c.add(V)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,R))}return z.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):T_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((c=>{const h=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-c.size):z.resolve(Qi());let m=Va,y=c;return h.next((v=>z.forEach(v,((w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),c.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next((V=>{y=y.insert(w,V)}))))).next((()=>this.populateOverlays(e,v,c))).next((()=>this.computeViews(e,y,v,Oe()))).next((w=>({batchId:m,changes:yS(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let a=Ta();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const c=t.collectionGroup;let h=Ta();return this.indexManager.getCollectionParents(e,c).next((m=>z.forEach(m,(y=>{const v=(function(R,V){return new $a(V,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(t,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next((w=>{w.forEach(((R,V)=>{h=h.insert(R,V)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,c,a)))).next((h=>{c.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))}));let m=Ta();return h.forEach(((y,v)=>{const w=c.get(y);w!==void 0&&ka(w.mutation,v,ai.empty(),Ye.now()),Zu(t,v)&&(m=m.insert(y,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:eo(a.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:KS(a.bundledQuery),readTime:eo(a.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.overlays=new ot(de.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return z.forEach(t,(a=>this.getOverlay(e,a).next((c=>{c!==null&&s.set(a,c)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,c)=>{this.St(e,t,c)})),z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const a=Qi(),c=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let c=new ot(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=c.get(v.largestBatchId);w===null&&(w=Qi(),c=c.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Qi(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=a)););return z.resolve(m)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new kS(t,s));let c=this.qr.get(t);c===void 0&&(c=Oe(),this.qr.set(t,c)),this.qr.set(t,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.Qr=new mt(Et.$r),this.Ur=new mt(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Et(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new Qe([])),s=new Et(t,e),a=new Et(t,e+1),c=[];return this.Ur.forEachInRange([s,a],(h=>{this.Gr(h),c.push(h.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new Qe([])),s=new Et(t,e),a=new Et(t,e+1);let c=Oe();return this.Ur.forEachInRange([s,a],(h=>{c=c.add(h.key)})),c}containsKey(e){const t=new Et(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Pe(e.Yr,t.Yr)}static Kr(e,t){return Pe(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new mt(Et.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new PS(c,t,s,a);this.mutationQueue.push(h);for(const m of a)this.Zr=this.Zr.add(new Et(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),c=a<0?0:a;return z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?GI:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),a=new Et(t,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,a],(h=>{const m=this.Xr(h.Yr);c.push(m)})),z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Pe);return t.forEach((a=>{const c=new Et(a,0),h=new Et(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,h],(m=>{s=s.add(m.Yr)}))})),z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let c=s;de.isDocumentKey(c)||(c=c.child(""));const h=new Et(new de(c),0);let m=new mt(Pe);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.Yr)),!0)}),h),z.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return z.forEach(t.mutations,(a=>{const c=new Et(a.key,t.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Et(t,0),a=this.Zr.firstAfterOrEqual(s);return z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.ri=e,this.docs=(function(){return new ot(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),c=a?a.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=_i();return t.forEach((a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Mt.newInvalidDocument(a))})),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let c=_i();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||$I(BI(w),s)<=0||(a.has(w.key)||Zu(t,w))&&(c=c.insert(w.key,w.mutableCopy()))}return z.resolve(c)}getAllFromCollectionGroup(e,t,s,a){ve(9500)}ii(e,t){return z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new c1(this)}getSize(e){return z.resolve(this.size)}}class c1 extends n1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.persistence=e,this.si=new rs((t=>Md(t)),bd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.oi=0,this._i=new Bd,this.targetCount=0,this.ai=ho.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ho(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let a=0;const c=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),z.waitFor(c).next((()=>a))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,c=[];return a&&t.forEach((h=>{c.push(a.markPotentiallyOrphaned(e,h))})),z.waitFor(c)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.ui={},this.overlays={},this.ci=new Qu(0),this.li=!1,this.li=!0,this.hi=new a1,this.referenceDelegate=e(this),this.Pi=new h1(this),this.indexManager=new QS,this.remoteDocumentCache=(function(a){return new u1(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new GS(t),this.Ii=new s1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new o1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new l1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const a=new d1(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((c=>this.referenceDelegate.di(a).next((()=>c)))).toPromise().then((c=>(a.raiseOnCommittedEvent(),c)))}Ai(e,t){return z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class d1 extends HI{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.Ri=new Bd,this.Vi=null}static mi(e){return new $d(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(s=>{const a=de.fromPath(s);return this.gi(e,a).next((c=>{c||t.removeEntry(a,_e.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.pi=new rs((s=>QI(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=t1(this,t)}static mi(e,t){return new ju(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((c=>c?z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,c.removeEntry(h,_e.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wu(e.data.value)),t}br(e,t,s){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Oe(),a=Oe();for(const c of t.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new qd(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return JE()?8:WI(Ft())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const c={result:null};return this.ys(e,t).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.ws(e,t,a,s).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new f1;return this.Ss(e,t,h).next((m=>{if(c.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>c.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Ws()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Ws()<=Ce.DEBUG&&ne("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Ws()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):z.resolve())}ys(e,t){if(Tg(t))return z.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=ud(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const h=Oe(...c);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,ud(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,a){return Tg(t)||a.isEqual(_e.min())?z.resolve(null):this.ps.getDocuments(e,s).next((c=>{const h=this.Ds(t,c);return this.Cs(t,h,s,a)?z.resolve(null):(Ws()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Gs(t)),this.vs(e,h,t,zI(a,Va)).next((m=>m)))}))}Ds(e,t){let s=new mt(S_(e));return t.forEach(((a,c)=>{Zu(e,c)&&(s=s.add(c))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const c=e.limitType==="F"?t.last():t.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}Ss(e,t,s){return Ws()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.ps.getDocumentsMatchingQuery(e,t,pi.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((c=>(t.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="LocalStore",m1=3e8;class g1{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new ot(Pe),this.xs=new rs((c=>Md(c)),bd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function y1(i,e,t,s){return new g1(i,e,t,s)}async function W_(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((c=>(a=c,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((c=>{const h=[],m=[];let y=Oe();for(const v of a){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of c){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function G_(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function _1(i,e){const t=xe(i),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const m=[];e.targetChanges.forEach(((w,R)=>{const V=a.get(R);if(!V)return;m.push(t.Pi.removeMatchingKeys(c,w.removedDocuments,R).next((()=>t.Pi.addMatchingKeys(c,w.addedDocuments,R))));let B=V.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(R)!==null?B=B.withResumeToken(Rt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),a=a.insert(R,B),(function(X,W,ue){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=m1?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0})(V,B,w)&&m.push(t.Pi.updateTargetData(c,B))}));let y=_i(),v=Oe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(c,w))})),m.push(v1(c,h,e.documentUpdates).next((w=>{y=w.ks,v=w.qs}))),!s.isEqual(_e.min())){const w=t.Pi.getLastRemoteSnapshotVersion(c).next((R=>t.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));m.push(w)}return z.waitFor(m).next((()=>h.apply(c))).next((()=>t.localDocuments.getLocalViewOfDocuments(c,y,v))).next((()=>y))})).then((c=>(t.Ms=a,c)))}function v1(i,e,t){let s=Oe(),a=Oe();return t.forEach((c=>s=s.add(c))),e.getEntries(i,s).next((c=>{let h=_i();return t.forEach(((m,y)=>{const v=c.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(_e.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(Hd,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:a}}))}function E1(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((c=>c?(a=c,z.resolve(a)):t.Pi.allocateTargetId(s).next((h=>(a=new li(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function md(i,e,t){const s=xe(i),a=s.Ms.get(e),c=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",c,(h=>s.persistence.referenceDelegate.removeTarget(h,a)))}catch(h){if(!Eo(h))throw h;ne(Hd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Lg(i,e,t){const s=xe(i);let a=_e.min(),c=Oe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const R=xe(y),V=R.xs.get(w);return V!==void 0?z.resolve(R.Ms.get(V)):R.Pi.getTargetData(v,w)})(s,h,Jn(e)).next((m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{c=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?a:_e.min(),t?c:Oe()))).next((m=>(w1(s,pS(e),m),{documents:m,Qs:c})))))}function w1(i,e,t){let s=i.Os.get(e)||_e.min();t.forEach(((a,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),i.Os.set(e,s)}class Mg{constructor(){this.activeTargetIds=ES()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T1{constructor(){this.Mo=new Mg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="ConnectivityMonitor";class Fg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(bg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(bg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu=null;function gd(){return pu===null?pu=(function(){return 268435456+Math.round(2147483648*Math.random())})():pu++,"0x"+pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="RestConnection",S1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Ou?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,c){const h=gd(),m=this.zo(e,t.toUriEncodedString());ne(qh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,a,c);const{host:v}=new URL(m),w=mo(v);return this.Jo(e,m,y,s,w).then((R=>(ne(qh,`Received RPC '${e}' ${h}: `,R),R)),(R=>{throw ao(qh,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R}))}Ho(e,t,s,a,c,h){return this.Go(e,t,s,a,c)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,c)=>e[c]=a)),s&&s.headers.forEach(((a,c)=>e[c]=a))}zo(e,t){const s=S1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class R1 extends A1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,c){const h=gd();return new Promise(((m,y)=>{const v=new Xy;v.setWithCredentials(!0),v.listenOnce(Jy.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Eu.NO_ERROR:const R=v.getResponseJson();ne(Ot,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case Eu.TIMEOUT:ne(Ot,`RPC '${e}' ${h} timed out`),y(new se(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const V=v.getStatus();if(ne(Ot,`RPC '${e}' ${h} failed with status:`,V,"response text:",v.getResponseText()),V>0){let B=v.getResponseJson();Array.isArray(B)&&(B=B[0]);const K=B?.error;if(K&&K.status&&K.message){const X=(function(ue){const me=ue.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(me)>=0?me:Q.UNKNOWN})(K.status);y(new se(X,K.message))}else y(new se(Q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new se(Q.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ne(Ot,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(a);ne(Ot,`RPC '${e}' ${h} sending request:`,a),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const a=gd(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=t_(),m=e_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=c.join("");ne(Ot,`Creating RPC '${e}' stream ${a}: ${w}`,y);const R=h.createWebChannel(w,y);this.I_(R);let V=!1,B=!1;const K=new C1({Yo:W=>{B?ne(Ot,`Not sending because RPC '${e}' stream ${a} is closed:`,W):(V||(ne(Ot,`Opening RPC '${e}' stream ${a} transport.`),R.open(),V=!0),ne(Ot,`RPC '${e}' stream ${a} sending:`,W),R.send(W))},Zo:()=>R.close()}),X=(W,ue,me)=>{W.listen(ue,(ge=>{try{me(ge)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return X(R,wa.EventType.OPEN,(()=>{B||(ne(Ot,`RPC '${e}' stream ${a} transport opened.`),K.o_())})),X(R,wa.EventType.CLOSE,(()=>{B||(B=!0,ne(Ot,`RPC '${e}' stream ${a} transport closed`),K.a_(),this.E_(R))})),X(R,wa.EventType.ERROR,(W=>{B||(B=!0,ao(Ot,`RPC '${e}' stream ${a} transport errored. Name:`,W.name,"Message:",W.message),K.a_(new se(Q.UNAVAILABLE,"The operation could not be completed")))})),X(R,wa.EventType.MESSAGE,(W=>{if(!B){const ue=W.data[0];Ze(!!ue,16349);const me=ue,ge=me?.error||me[0]?.error;if(ge){ne(Ot,`RPC '${e}' stream ${a} received error:`,ge);const Te=ge.status;let ze=(function(I){const A=ct[I];if(A!==void 0)return V_(A)})(Te),ke=ge.message;ze===void 0&&(ze=Q.INTERNAL,ke="Unknown error status: "+Te+" with message "+ge.message),B=!0,K.a_(new se(ze,ke)),R.close()}else ne(Ot,`RPC '${e}' stream ${a} received:`,ue),K.u_(ue)}})),X(m,Zy.STAT_EVENT,(W=>{W.stat===td.PROXY?ne(Ot,`RPC '${e}' stream ${a} detected buffering proxy`):W.stat===td.NOPROXY&&ne(Ot,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{K.__()}),0),K}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(i){return new bS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s=1e3,a=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="PersistentStream";class P1{constructor(e,t,s,a,c,h,m,y){this.Mi=e,this.S_=s,this.b_=a,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new K_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new se(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(Ug,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(Ug,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class k1 extends P1{constructor(e,t,s,a,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=c}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=US(this.serializer,e),s=(function(c){if(!("targetChange"in c))return _e.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?eo(h.readTime):_e.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=xg(this.serializer),t.addTarget=(function(c,h){let m;const y=h.target;if(m=ad(y)?{documents:jS(c,y)}:{query:zS(c,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=M_(c,h.resumeToken);const v=dd(c,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=fd(c,h.snapshotVersion.toTimestamp());const v=dd(c,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=$S(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=xg(this.serializer),t.removeTarget=e,this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{}class x1 extends N1{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new se(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Go(e,pd(t,s),a,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new se(Q.UNKNOWN,c.toString())}))}Ho(e,t,s,a,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,pd(t,s),a,h,m,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(Q.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class D1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="RemoteStore";class V1{constructor(e,t,s,a,c){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Wa(this)&&(ne(fo,"Restarting streams for network reachability change."),await(async function(y){const v=xe(y);v.Ea.add(4),await Ha(v),v.Ra.set("Unknown"),v.Ea.delete(4),await ic(v)})(this))}))})),this.Ra=new D1(s,a)}}async function ic(i){if(Wa(i))for(const e of i.da)await e(!0)}async function Ha(i){for(const e of i.da)await e(!1)}function Q_(i,e){const t=xe(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qd(t)?Kd(t):To(t).O_()&&Gd(t,e))}function Wd(i,e){const t=xe(i),s=To(t);t.Ia.delete(e),s.O_()&&Y_(t,e),t.Ia.size===0&&(s.O_()?s.L_():Wa(t)&&t.Ra.set("Unknown"))}function Gd(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).Y_(e)}function Y_(i,e){i.Va.Ue(e),To(i).Z_(e)}function Kd(i){i.Va=new VS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),To(i).start(),i.Ra.ua()}function Qd(i){return Wa(i)&&!To(i).x_()&&i.Ia.size>0}function Wa(i){return xe(i).Ea.size===0}function X_(i){i.Va=void 0}async function O1(i){i.Ra.set("Online")}async function L1(i){i.Ia.forEach(((e,t)=>{Gd(i,e)}))}async function M1(i,e){X_(i),Qd(i)?(i.Ra.ha(e),Kd(i)):i.Ra.set("Unknown")}async function b1(i,e,t){if(i.Ra.set("Online"),e instanceof L_&&e.state===2&&e.cause)try{await(async function(a,c){const h=c.cause;for(const m of c.targetIds)a.Ia.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.Ia.delete(m),a.Va.removeTarget(m))})(i,e)}catch(s){ne(fo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jg(i,s)}else if(e instanceof Iu?i.Va.Ze(e):e instanceof O_?i.Va.st(e):i.Va.tt(e),!t.isEqual(_e.min()))try{const s=await G_(i.localStore);t.compareTo(s)>=0&&await(function(c,h){const m=c.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=c.Ia.get(v);w&&c.Ia.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=c.Ia.get(y);if(!w)return;c.Ia.set(y,w.withResumeToken(Rt.EMPTY_BYTE_STRING,w.snapshotVersion)),Y_(c,y);const R=new li(w.target,y,v,w.sequenceNumber);Gd(c,R)})),c.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(fo,"Failed to raise snapshot:",s),await jg(i,s)}}async function jg(i,e,t){if(!Eo(e))throw e;i.Ea.add(1),await Ha(i),i.Ra.set("Offline"),t||(t=()=>G_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(fo,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await ic(i)}))}async function zg(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),ne(fo,"RemoteStore received new credentials");const s=Wa(t);t.Ea.add(3),await Ha(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ic(t)}async function F1(i,e){const t=xe(i);e?(t.Ea.delete(2),await ic(t)):e||(t.Ea.add(2),await Ha(t),t.Ra.set("Unknown"))}function To(i){return i.ma||(i.ma=(function(t,s,a){const c=xe(t);return c.sa(),new k1(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Xo:O1.bind(null,i),t_:L1.bind(null,i),r_:M1.bind(null,i),H_:b1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Qd(i)?Kd(i):i.Ra.set("Unknown")):(await i.ma.stop(),X_(i))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,s,a,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,c){const h=Date.now()+s,m=new Yd(e,t,h,a,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J_(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),Eo(i))return new se(Q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static emptySet(e){return new to(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ta(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(!a.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new to;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.ga=new ot(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class po{constructor(e,t,s,a,c,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,c){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new po(e,t,to.emptySet(t),h,s,a,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class j1{constructor(){this.queries=$g(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=xe(t),c=a.queries;a.queries=$g(),c.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new se(Q.ABORTED,"Firestore shutting down"))}}function $g(){return new rs((i=>I_(i)),Ju)}async function z1(i,e){const t=xe(i);let s=3;const a=e.query;let c=t.queries.get(a);c?!c.ba()&&e.Da()&&(s=2):(c=new U1,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await t.onListen(a,!0);break;case 1:c.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=J_(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,c),c.Sa.push(e),e.va(t.onlineState),c.wa&&e.Fa(c.wa)&&Xd(t)}async function B1(i,e){const t=xe(i),s=e.query;let a=3;const c=t.queries.get(s);if(c){const h=c.Sa.indexOf(e);h>=0&&(c.Sa.splice(h,1),c.Sa.length===0?a=e.Da()?0:1:!c.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $1(i,e){const t=xe(i);let s=!1;for(const a of e){const c=a.query,h=t.queries.get(c);if(h){for(const m of h.Sa)m.Fa(a)&&(s=!0);h.wa=a}}s&&Xd(t)}function q1(i,e,t){const s=xe(i),a=s.queries.get(e);if(a)for(const c of a.Sa)c.onError(t);s.queries.delete(e)}function Xd(i){i.Ca.forEach((e=>{e.next()}))}var yd,qg;(qg=yd||(yd={})).Ma="default",qg.Cache="cache";class H1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class W1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=S_(e),this.tu=new to(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Bg,a=t?t.tu:this.tu;let c=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((w,R)=>{const V=a.get(w),B=Zu(this.query,R)?R:null,K=!!V&&this.mutatedKeys.has(V.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;V&&B?V.data.isEqual(B.data)?K!==X&&(s.track({type:3,doc:B}),W=!0):this.su(V,B)||(s.track({type:2,doc:B}),W=!0,(y&&this.eu(B,y)>0||v&&this.eu(B,v)<0)&&(m=!0)):!V&&B?(s.track({type:0,doc:B}),W=!0):V&&!B&&(s.track({type:1,doc:V}),W=!0,(y||v)&&(m=!0)),W&&(B?(h=h.add(B),c=X?c.add(w):c.delete(w)):(h=h.delete(w),c=c.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),c=c.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:c}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,R)=>(function(B,K){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:W})}};return X(B)-X(K)})(w.type,R.type)||this.eu(w.doc,R.doc))),this.ou(s),a=a??!1;const m=t&&!a?this._u():[],y=this.Xa.size===0&&this.current&&!a?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new po(this.query,e.tu,c,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new ev(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Z_(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Jd="SyncEngine";class G1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class K1{constructor(e){this.key=e,this.hu=!1}}class Q1{constructor(e,t,s,a,c,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new rs((m=>I_(m)),Ju),this.Iu=new Map,this.Eu=new Set,this.du=new ot(de.comparator),this.Au=new Map,this.Ru=new Bd,this.Vu={},this.mu=new Map,this.fu=ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Y1(i,e,t=!0){const s=sv(i);let a;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),a=c.view.lu()):a=await tv(s,e,t,!0),a}async function X1(i,e){const t=sv(i);await tv(t,e,!0,!1)}async function tv(i,e,t,s){const a=await E1(i.localStore,Jn(e)),c=a.targetId,h=i.sharedClientState.addLocalQueryTarget(c,t);let m;return s&&(m=await J1(i,e,c,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&Q_(i.remoteStore,a),m}async function J1(i,e,t,s,a){i.pu=(R,V,B)=>(async function(X,W,ue,me){let ge=W.view.ru(ue);ge.Cs&&(ge=await Lg(X.localStore,W.query,!1).then((({documents:k})=>W.view.ru(k,ge))));const Te=me&&me.targetChanges.get(W.targetId),ze=me&&me.targetMismatches.get(W.targetId)!=null,ke=W.view.applyChanges(ge,X.isPrimaryClient,Te,ze);return Wg(X,W.targetId,ke.au),ke.snapshot})(i,R,V,B);const c=await Lg(i.localStore,e,!0),h=new W1(e,c.Qs),m=h.ru(c.documents),y=qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);Wg(i,t,v.au);const w=new G1(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function Z1(i,e,t){const s=xe(i),a=s.Tu.get(e),c=s.Iu.get(a.targetId);if(c.length>1)return s.Iu.set(a.targetId,c.filter((h=>!Ju(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await md(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Wd(s.remoteStore,a.targetId),_d(s,a.targetId)})).catch(Ku)):(_d(s,a.targetId),await md(s.localStore,a.targetId,!0))}async function eA(i,e){const t=xe(i),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Wd(t.remoteStore,s.targetId))}async function nv(i,e){const t=xe(i);try{const s=await _1(t.localStore,e);e.targetChanges.forEach(((a,c)=>{const h=t.Au.get(c);h&&(Ze(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h.hu=!0:a.modifiedDocuments.size>0?Ze(h.hu,14607):a.removedDocuments.size>0&&(Ze(h.hu,42227),h.hu=!1))})),await iv(t,s,e)}catch(s){await Ku(s)}}function Hg(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((c,h)=>{const m=h.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(h,m){const y=xe(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,R)=>{for(const V of R.Sa)V.va(m)&&(v=!0)})),v&&Xd(y)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tA(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),c=a&&a.key;if(c){let h=new ot(de.comparator);h=h.insert(c,Mt.newNoDocument(c,_e.min()));const m=Oe().add(c),y=new nc(_e.min(),new Map,new ot(Pe),h,m);await nv(s,y),s.du=s.du.remove(c),s.Au.delete(e),Zd(s)}else await md(s.localStore,e,!1).then((()=>_d(s,e,t))).catch(Ku)}function _d(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||rv(i,s)}))}function rv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Wd(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Zd(i))}function Wg(i,e,t){for(const s of t)s instanceof Z_?(i.Ru.addReference(s.key,e),nA(i,s)):s instanceof ev?(ne(Jd,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||rv(i,s.key)):ve(19791,{wu:s})}function nA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ne(Jd,"New document in limbo: "+t),i.Eu.add(s),Zd(i))}function Zd(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(Qe.fromString(e)),s=i.fu.next();i.Au.set(s,new K1(t)),i.du=i.du.insert(t,s),Q_(i.remoteStore,new li(Jn(w_(t.path)),s,"TargetPurposeLimboResolution",Qu.ce))}}async function iv(i,e,t){const s=xe(i),a=[],c=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{if((v||t)&&s.isPrimaryClient){const w=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,w?"current":"not-current")}if(v){a.push(v);const w=qd.As(y.targetId,v);c.push(w)}})))})),await Promise.all(h),s.Pu.H_(a),await(async function(y,v){const w=xe(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>z.forEach(v,(V=>z.forEach(V.Es,(B=>w.persistence.referenceDelegate.addReference(R,V.targetId,B))).next((()=>z.forEach(V.ds,(B=>w.persistence.referenceDelegate.removeReference(R,V.targetId,B)))))))))}catch(R){if(!Eo(R))throw R;ne(Hd,"Failed to update sequence numbers: "+R)}for(const R of v){const V=R.targetId;if(!R.fromCache){const B=w.Ms.get(V),K=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(K);w.Ms=w.Ms.insert(V,X)}}})(s.localStore,c))}async function rA(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){ne(Jd,"User change. New user:",e.toKey());const s=await W_(t.localStore,e);t.currentUser=e,(function(c,h){c.mu.forEach((m=>{m.forEach((y=>{y.reject(new se(Q.CANCELLED,h))}))})),c.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await iv(t,s.Ls)}}function iA(i,e){const t=xe(i),s=t.Au.get(e);if(s&&s.hu)return Oe().add(s.key);{let a=Oe();const c=t.Iu.get(e);if(!c)return a;for(const h of c){const m=t.Tu.get(h);a=a.unionWith(m.view.nu)}return a}}function sv(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tA.bind(null,e),e.Pu.H_=$1.bind(null,e.eventManager),e.Pu.yu=q1.bind(null,e.eventManager),e}class zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return y1(this.persistence,new p1,e.initialUser,this.serializer)}Cu(e){return new H_($d.mi,this.serializer)}Du(e){return new T1}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zu.provider={build:()=>new zu};class sA extends zu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ze(this.persistence.referenceDelegate instanceof ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ZS(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new H_((s=>ju.mi(s,t)),this.serializer)}}class vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rA.bind(null,this.syncEngine),await F1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new j1})()}createDatastore(e){const t=rc(e.databaseInfo.databaseId),s=(function(c){return new R1(c)})(e.databaseInfo);return(function(c,h,m,y){return new x1(c,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,c,h,m){return new V1(s,a,c,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Hg(this.syncEngine,t,0)),(function(){return Fg.v()?new Fg:new I1})())}createSyncEngine(e,t){return(function(a,c,h,m,y,v,w){const R=new Q1(a,c,h,m,y,v);return w&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=xe(t);ne(fo,"RemoteStore shutting down."),s.Ea.add(5),await Ha(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}vd.provider={build:()=>new vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="FirestoreClient";class aA{constructor(e,t,s,a,c){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=i_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async h=>{ne(vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=J_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Wh(i,e){i.asyncQueue.verifyOperationInProgress(),ne(vi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await W_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Gg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await lA(i);ne(vi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>zg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>zg(e.remoteStore,a))),i._onlineComponents=e}async function lA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(vi,"Using user provided OfflineComponentProvider");try{await Wh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ao("Error using user provided cache. Falling back to memory cache: "+t),await Wh(i,new zu)}}else ne(vi,"Using default OfflineComponentProvider"),await Wh(i,new sA(void 0));return i._offlineComponents}async function uA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(vi,"Using user provided OnlineComponentProvider"),await Gg(i,i._uninitializedComponentsProvider._online)):(ne(vi,"Using default OnlineComponentProvider"),await Gg(i,new vd))),i._onlineComponents}async function cA(i){const e=await uA(i),t=e.eventManager;return t.onListen=Y1.bind(null,e.syncEngine),t.onUnlisten=Z1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=X1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eA.bind(null,e.syncEngine),t}function hA(i,e,t={}){const s=new Yi;return i.asyncQueue.enqueueAndForget((async()=>(function(c,h,m,y,v){const w=new oA({next:V=>{w.Nu(),h.enqueueAndForget((()=>B1(c,R))),V.fromCache&&y.source==="server"?v.reject(new se(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),R=new H1(m,w,{includeMetadataChanges:!0,qa:!0});return z1(c,R)})(await cA(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firestore.googleapis.com",Qg=!0;class Yg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=av,this.ssl=Qg}else this.host=e.host,this.ssl=e.ssl??Qg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=q_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XS)throw new se(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ov(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new NI;switch(s.type){case"firstParty":return new OI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Kg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Kg.delete(t),s.terminate())})(this),Promise.resolve()}}function dA(i,e,t,s={}){i=rd(i,ef);const a=mo(e),c=i._getSettings(),h={...c,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;a&&(uy(`https://${m}`),cy("Firestore",!0)),c.host!==av&&c.host!==m&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:m,ssl:a,emulatorOptions:s};if(!Ji(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,w;if(typeof s.mockUserToken=="string")v=s.mockUserToken,w=Lt.MOCK_USER;else{v=$E(s.mockUserToken,i._app?.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new se(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Lt(R)}i._authCredentials=new xI(new r_(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class Bt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new no(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}toJSON(){return{type:Bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ba(t,Bt._jsonSchema))return new Bt(e,s||null,new de(Qe.fromString(t.referencePath)))}}Bt._jsonSchemaVersion="firestore/documentReference/1.0",Bt._jsonSchema={type:dt("string",Bt._jsonSchemaVersion),referencePath:dt("string")};class no extends Io{constructor(e,t,s){super(e,t,w_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new de(e))}withConverter(e){return new no(this.firestore,e,this._path)}}function fA(i,e,...t){if(i=Rn(i),i instanceof ef){const s=Qe.fromString(e,...t);return lg(s),new no(i,null,s)}{if(!(i instanceof Bt||i instanceof no))throw new se(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return lg(s),new no(i.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="AsyncQueue";class Jg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new K_(this,"async_queue_retry"),this._c=()=>{const s=Hh();s&&ne(Xg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Hh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Yi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Eo(e))throw e;ne(Xg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",Zg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Yd.createAndSchedule(this,e,t,s,(c=>this.hc(c)));return this.tc.push(a),a}uc(){this.nc&&ve(47125,{Pc:Zg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Zg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class lv extends ef{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Jg,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jg(e),this._firestoreClient=void 0,await e}}}function pA(i,e){const t=typeof i=="object"?i:py(),s=typeof i=="string"?i:Ou,a=Sd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=zE("firestore");c&&dA(a,...c)}return a}function mA(i){if(i._terminated)throw new se(Q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||gA(i),i._firestoreClient}function gA(i){const e=i._freezeSettings(),t=(function(a,c,h,m){return new JI(a,c,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,ov(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new aA(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(Rt.fromBase64String(e))}catch(t){throw new se(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ba(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:dt("string",pn._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(Ba(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:dt("string",Zn._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ba(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new er(e.vectorValues);throw new se(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:dt("string",er._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=/^__.*__$/;function hv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:i})}}class tf{constructor(e,t,s,a,c,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new tf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ed(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(hv(this.Ac)&&yA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _A{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||rc(e)}Cc(e,t,s,a=!1){return new tf({Ac:e,methodName:t,Dc:s,path:bt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vA(i){const e=i._freezeSettings(),t=rc(i._databaseId);return new _A(i._databaseId,!!e.ignoreUndefinedProperties,t)}function EA(i,e,t,s=!1){return nf(t,i.Cc(s?4:3,e))}function nf(i,e){if(dv(i=Rn(i)))return TA("Unsupported field value:",e,i),wA(i,e);if(i instanceof cv)return(function(s,a){if(!hv(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const c=[];let h=0;for(const m of s){let y=nf(m,a.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),h++}return{arrayValue:{values:c}}})(i,e)}return(function(s,a){if((s=Rn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return wS(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ye.fromDate(s);return{timestampValue:fd(a.serializer,c)}}if(s instanceof Ye){const c=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fd(a.serializer,c)}}if(s instanceof Zn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pn)return{bytesValue:M_(a.serializer,s._byteString)};if(s instanceof Bt){const c=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(c))throw a.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:b_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof er)return(function(h,m){return{mapValue:{fields:{[f_]:{stringValue:p_},[Lu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return Fd(m.serializer,v)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Gu(s)}`)})(i,e)}function wA(i,e){const t={};return a_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wo(i,((s,a)=>{const c=nf(a,e.mc(s));c!=null&&(t[s]=c)})),{mapValue:{fields:t}}}function dv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof Zn||i instanceof pn||i instanceof Bt||i instanceof cv||i instanceof er)}function TA(i,e,t){if(!dv(t)||!s_(t)){const s=Gu(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}const IA=new RegExp("[~\\*/\\[\\]]");function SA(i,e,t){if(e.search(IA)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new uv(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ed(i,e,t,s,a){const c=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(c||h)&&(y+=" (found",c&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new se(Q.INVALID_ARGUMENT,m+i+y)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,s,a,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AA extends fv{data(){return super.data()}}function rf(i,e){return typeof e=="string"?SA(i,e):e instanceof uv?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sf{}class RA extends sf{}function PA(i,e,...t){let s=[];e instanceof sf&&s.push(e),s=s.concat(t),(function(c){const h=c.filter((y=>y instanceof of)).length,m=c.filter((y=>y instanceof sc)).length;if(h>1||h>0&&m>0)throw new se(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)i=a._apply(i);return i}class sc extends RA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new sc(e,t,s)}_apply(e){const t=this._parse(e);return pv(e._query,t),new Io(e.firestore,e.converter,ld(e._query,t))}_parse(e){const t=vA(e.firestore);return(function(c,h,m,y,v,w,R){let V;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){ty(R,w);const K=[];for(const X of R)K.push(ey(y,c,X));V={arrayValue:{values:K}}}else V=ey(y,c,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||ty(R,w),V=EA(m,h,R,w==="in"||w==="not-in");return ht.create(v,w,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function kA(i,e,t){const s=e,a=rf("where",i);return sc._create(a,s,t)}class of extends sf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new of(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,c){let h=a;const m=c.getFlattenedFilters();for(const y of m)pv(h,y),h=ld(h,y)})(e._query,t),new Io(e.firestore,e.converter,ld(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ey(i,e,t){if(typeof(t=Rn(t))=="string"){if(t==="")throw new se(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T_(e)&&t.indexOf("/")!==-1)throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Qe.fromString(t));if(!de.isDocumentKey(s))throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gg(i,new de(s))}if(t instanceof Bt)return gg(i,t._key);throw new se(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gu(t)}.`)}function ty(i,e){if(!Array.isArray(i)||i.length===0)throw new se(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pv(i,e){const t=(function(a,c){for(const h of a)for(const m of h.getFlattenedFilters())if(c.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NA{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return wo(e,((a,c)=>{s[a]=this.convertValue(c,t)})),s}convertVectorValue(e){const t=e.fields?.[Lu].arrayValue?.values?.map((s=>st(s.doubleValue)));return new er(t)}convertGeoPoint(e){return new Zn(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const t=mi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Ze($_(s),9688,{name:e});const a=new La(s.get(1),s.get(3)),c=new de(s.popFirst(5));return a.isEqual(t)||Sr(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),c}}class mu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ro extends fv{constructor(e,t,s,a,c,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ro._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ro._jsonSchemaVersion="firestore/documentSnapshot/1.0",ro._jsonSchema={type:dt("string",ro._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Su extends ro{data(e={}){return super.data(e)}}class io{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new mu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Su(this._firestore,this._userDataWriter,s.key,s,new mu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map((m=>{const y=new Su(a._firestore,a._userDataWriter,m.doc.key,m.doc,new mu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const y=new Su(a._firestore,a._userDataWriter,m.doc.key,m.doc,new mu(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:xA(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=io._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=i_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}io._jsonSchemaVersion="firestore/querySnapshot/1.0",io._jsonSchema={type:dt("string",io._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class DA extends NA{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,t)}}function VA(i){i=rd(i,Io);const e=rd(i.firestore,lv),t=mA(e),s=new DA(e);return CA(i._query),hA(t,i._query).then((a=>new io(e,s,i,a)))}(function(e,t=!0){(function(a){vo=a})(go),so(new Zi("firestore",((s,{instanceIdentifier:a,options:c})=>{const h=s.getProvider("app").getImmediate(),m=new lv(new DI(s.getProvider("auth-internal")),new LI(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new se(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(v.options.projectId,w)})(h,a),h);return c={useFetchStreams:t,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),hi(ig,sg,e),hi(ig,sg,"esm2020")})();const OA={apiKey:"YOUR_API_KEY",authDomain:"YOUR_PROJECT_ID.firebaseapp.com",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_PROJECT_ID.appspot.com",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},mv=fy(OA),gv=CI(mv),LA=pA(mv);function MA({onLogin:i}){const[e,t]=wt.useState(""),[s,a]=wt.useState(""),[c,h]=wt.useState(null),[m,y]=wt.useState(!1),v=async w=>{w.preventDefault(),h(null),y(!0);try{await fT(gv,e,s),i()}catch(R){console.error("Login failed",R),R.code==="auth/invalid-credential"||R.code==="auth/user-not-found"||R.code==="auth/wrong-password"?h("Invalid email or password."):h("Login failed. Please try again.")}finally{y(!1)}};return j.jsx("div",{className:"flex items-center justify-center min-h-screen px-8",children:j.jsxs("div",{className:"w-full max-w-md",children:[j.jsxs("div",{className:"text-center mb-8",children:[j.jsx("h1",{className:"text-slate-900 mb-2",children:"Magnus Registration System"}),j.jsx("p",{className:"text-slate-600",children:"Volunteer Login"})]}),j.jsxs("form",{onSubmit:v,className:"space-y-6",children:[c&&j.jsx("div",{className:"p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100",children:c}),j.jsxs("div",{children:[j.jsx("label",{htmlFor:"email",className:"block text-slate-900 mb-2",children:"Email Address"}),j.jsx("input",{type:"email",id:"email",value:e,onChange:w=>t(w.target.value),className:"w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"volunteer@magnus.edu",required:!0,disabled:m})]}),j.jsxs("div",{children:[j.jsx("label",{htmlFor:"password",className:"block text-slate-900 mb-2",children:"Password"}),j.jsx("input",{type:"password",id:"password",value:s,onChange:w=>a(w.target.value),className:"w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"Enter your password",required:!0,disabled:m})]}),j.jsx("button",{type:"submit",disabled:m,className:"w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:m?"Logging in...":"Login"})]})]})})}function bA({onStart:i}){return j.jsx("div",{className:"flex items-center justify-center min-h-screen",children:j.jsxs("div",{className:"text-center space-y-8",children:[j.jsxs("div",{className:"space-y-2",children:[j.jsx("h1",{className:"text-slate-900",children:"Magnus On-Spot Registration"}),j.jsx("p",{className:"text-slate-600",children:"AI & ML Technical Symposium"})]}),j.jsx("button",{onClick:i,className:"w-full min-w-[320px] px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors",children:"New Registration"})]})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UA=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),ny=i=>{const e=UA(i);return e.charAt(0).toUpperCase()+e.slice(1)},yv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=wt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:h,...m},y)=>wt.createElement("svg",{ref:y,...jA,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:yv("lucide",a),...m},[...h.map(([v,w])=>wt.createElement(v,w)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=(i,e)=>{const t=wt.forwardRef(({className:s,...a},c)=>wt.createElement(zA,{ref:c,iconNode:e,className:yv(`lucide-${FA(ny(i))}`,`lucide-${i}`,s),...a}));return t.displayName=ny(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lf=af("arrow-left",BA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qA=af("circle-check",$A);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],WA=af("loader-circle",HA);function GA({initialData:i,onNext:e,onBack:t}){const[s,a]=wt.useState(i||{fullName:"",phoneNumber:"",collegeName:"",email:""}),c=m=>{m.preventDefault(),s.fullName&&s.phoneNumber&&s.collegeName&&s.email&&e(s)},h=(m,y)=>{a(v=>({...v,[m]:y}))};return j.jsx("div",{className:"flex items-center justify-center min-h-screen px-8",children:j.jsxs("div",{className:"w-full max-w-2xl relative",children:[j.jsxs("button",{type:"button",onClick:t,className:"absolute -top-16 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2",children:[j.jsx(lf,{className:"w-5 h-5"}),"Back"]}),j.jsxs("div",{className:"mb-8",children:[j.jsx("div",{className:"text-slate-500 mb-2",children:"Step 1 of 3"}),j.jsx("h1",{className:"text-slate-900",children:"Participant Details"})]}),j.jsxs("form",{onSubmit:c,className:"space-y-6",children:[j.jsxs("div",{children:[j.jsx("label",{htmlFor:"fullName",className:"block text-slate-900 mb-2",children:"Full Name"}),j.jsx("input",{type:"text",id:"fullName",value:s.fullName,onChange:m=>h("fullName",m.target.value),className:"w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"Enter participant's full name",required:!0,autoFocus:!0})]}),j.jsxs("div",{children:[j.jsx("label",{htmlFor:"email",className:"block text-slate-900 mb-2",children:"Email Address"}),j.jsx("input",{type:"email",id:"email",value:s.email,onChange:m=>h("email",m.target.value),className:"w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"Enter participant's email",required:!0})]}),j.jsxs("div",{children:[j.jsx("label",{htmlFor:"phoneNumber",className:"block text-slate-900 mb-2",children:"Phone Number"}),j.jsx("input",{type:"tel",id:"phoneNumber",value:s.phoneNumber,onChange:m=>h("phoneNumber",m.target.value),className:"w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"Enter 10-digit phone number",pattern:"[0-9]{10}",required:!0})]}),j.jsxs("div",{children:[j.jsx("label",{htmlFor:"collegeName",className:"block text-slate-900 mb-2",children:"College Name"}),j.jsx("input",{type:"text",id:"collegeName",value:s.collegeName,onChange:m=>h("collegeName",m.target.value),className:"w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors",placeholder:"Enter college or institution name",required:!0})]}),j.jsx("button",{type:"submit",className:"w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors mt-8",children:"Proceed to Event Selection"})]})]})})}function KA({initialSelectedEvents:i,onNext:e,onBack:t}){const[s,a]=wt.useState([]),[c,h]=wt.useState(!0),[m,y]=wt.useState(new Set(i?.map(K=>K.id)));wt.useEffect(()=>{(async()=>{try{const X=PA(fA(LA,"events"),kA("active","==",!0)),W=await VA(X),ue=[];W.forEach(me=>{const ge=me.data();ue.push({id:me.id,name:ge.name,fee:Number(ge.price),category:ge.category||"technical"})}),a(ue)}catch(X){console.error("Error fetching events:",X)}finally{h(!1)}})()},[]);const v=K=>{y(X=>{const W=new Set(X);return W.has(K)?W.delete(K):W.add(K),W})},w=s.filter(K=>m.has(K.id)),R=w.reduce((K,X)=>K+X.fee,0),V=()=>{w.length>0&&e(w,R)},B=(K,X)=>{const W=s.filter(ue=>ue.category===K);return W.length===0?null:j.jsxs("div",{children:[j.jsx("h3",{className:"text-slate-900 mb-3",children:X}),j.jsx("div",{className:"space-y-2",children:W.map(ue=>j.jsxs("label",{className:`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${m.has(ue.id)?"border-slate-900 bg-slate-50":"border-slate-200 bg-white hover:border-slate-300"}`,children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("input",{type:"checkbox",checked:m.has(ue.id),onChange:()=>v(ue.id),className:"w-5 h-5 accent-slate-900"}),j.jsx("span",{className:"text-slate-900",children:ue.name})]}),j.jsxs("span",{className:"text-slate-900",children:["₹",ue.fee]})]},ue.id))})]})};return c?j.jsx("div",{className:"flex items-center justify-center min-h-screen",children:j.jsx(WA,{className:"w-8 h-8 animate-spin text-slate-900"})}):j.jsx("div",{className:"min-h-screen px-8 py-8",children:j.jsxs("div",{className:"max-w-7xl mx-auto relative",children:[j.jsxs("button",{onClick:t,className:"absolute -top-2 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2",children:[j.jsx(lf,{className:"w-5 h-5"}),"Back"]}),j.jsxs("div",{className:"mb-8 pt-12",children:[j.jsx("div",{className:"text-slate-500 mb-2",children:"Step 2 of 3"}),j.jsx("h1",{className:"text-slate-900",children:"Event Selection"})]}),j.jsxs("div",{className:"grid grid-cols-3 gap-8",children:[j.jsxs("div",{className:"col-span-2 space-y-6",children:[B("technical","Technical Events"),B("non-technical","Non-Technical Events"),B("workshop","Workshops")]}),j.jsx("div",{children:j.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-lg p-6 sticky top-8",children:[j.jsx("h3",{className:"text-slate-900 mb-4",children:"Summary"}),w.length===0?j.jsx("p",{className:"text-slate-500 text-center py-8",children:"No events selected"}):j.jsx("div",{className:"space-y-3 mb-6",children:w.map(K=>j.jsxs("div",{className:"flex justify-between text-slate-700",children:[j.jsx("span",{children:K.name}),j.jsxs("span",{children:["₹",K.fee]})]},K.id))}),j.jsx("div",{className:"border-t-2 border-slate-200 pt-4 mb-6",children:j.jsxs("div",{className:"flex justify-between items-center",children:[j.jsx("span",{className:"text-slate-900",children:"Total Amount"}),j.jsxs("span",{className:"text-slate-900",children:["₹",R]})]})}),j.jsx("button",{onClick:V,disabled:w.length===0,className:"w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed",children:"Proceed to Payment"})]})})]})]})})}function QA({totalAmount:i,onConfirm:e,onBack:t,isSubmitting:s=!1}){const[a,c]=wt.useState("cash"),h=()=>{e(a)};return j.jsx("div",{className:"min-h-screen px-8 py-8",children:j.jsxs("div",{className:"max-w-2xl mx-auto relative",children:[j.jsxs("button",{onClick:t,disabled:s,className:"absolute top-0 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 disabled:opacity-50",children:[j.jsx(lf,{className:"w-5 h-5"}),"Back"]}),j.jsxs("div",{className:"mb-8 pt-12",children:[j.jsx("div",{className:"text-slate-500 mb-2",children:"Step 3 of 3"}),j.jsx("h1",{className:"text-slate-900",children:"Payment Confirmation"})]}),j.jsxs("div",{className:"space-y-8",children:[j.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-lg p-8 text-center",children:[j.jsx("div",{className:"text-slate-600 mb-2",children:"Total Amount"}),j.jsxs("div",{className:"text-slate-900",style:{fontSize:"3rem"},children:["₹",i]})]}),j.jsxs("div",{children:[j.jsx("label",{className:"block text-slate-900 mb-4",children:"Payment Mode"}),j.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[j.jsx("button",{onClick:()=>c("cash"),disabled:s,className:`p-6 border-2 rounded-lg transition-all ${a==="cash"?"border-slate-900 bg-slate-50":"border-slate-200 bg-white hover:border-slate-300"} ${s?"opacity-50 cursor-not-allowed":""}`,children:j.jsx("div",{className:"text-slate-900",children:"Cash"})}),j.jsx("button",{onClick:()=>c("upi"),disabled:s,className:`p-6 border-2 rounded-lg transition-all ${a==="upi"?"border-slate-900 bg-slate-50":"border-slate-200 bg-white hover:border-slate-300"} ${s?"opacity-50 cursor-not-allowed":""}`,children:j.jsx("div",{className:"text-slate-900",children:"UPI"})})]})]}),j.jsx("button",{onClick:h,disabled:s,className:"w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center",children:s?j.jsxs(j.Fragment,{children:[j.jsx("span",{className:"animate-spin mr-2",children:"⏳"})," Processing Payment & Registration..."]}):"Payment Received"})]})]})})}function YA({registrationData:i,onRegisterNext:e}){const{participant:t,selectedEvents:s,totalAmount:a,paymentMode:c}=i;return j.jsx("div",{className:"flex items-center justify-center min-h-screen px-8",children:j.jsxs("div",{className:"w-full max-w-2xl",children:[j.jsxs("div",{className:"text-center mb-8",children:[j.jsx("div",{className:"flex justify-center mb-4",children:j.jsx(qA,{className:"w-16 h-16 text-green-600"})}),j.jsx("h1",{className:"text-slate-900 mb-2",children:"Registration Successful"}),j.jsx("p",{className:"text-slate-600",children:"Confirmation email sent to participant"})]}),j.jsx("div",{className:"bg-white border-2 border-slate-200 rounded-lg p-8 mb-8",children:j.jsxs("div",{className:"space-y-6",children:[j.jsxs("div",{children:[j.jsx("h3",{className:"text-slate-900 mb-3",children:"Participant Information"}),j.jsxs("div",{className:"space-y-2",children:[j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-600",children:"Name"}),j.jsx("span",{className:"text-slate-900",children:t.fullName})]}),j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-600",children:"Phone Number"}),j.jsx("span",{className:"text-slate-900",children:t.phoneNumber})]}),j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-600",children:"College"}),j.jsx("span",{className:"text-slate-900",children:t.collegeName})]})]})]}),j.jsx("div",{className:"border-t-2 border-slate-100"}),j.jsxs("div",{children:[j.jsx("h3",{className:"text-slate-900 mb-3",children:"Registered Events"}),j.jsx("div",{className:"space-y-2",children:s.map(h=>j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-700",children:h.name}),j.jsxs("span",{className:"text-slate-700",children:["₹",h.fee]})]},h.id))})]}),j.jsx("div",{className:"border-t-2 border-slate-100"}),j.jsxs("div",{children:[j.jsx("h3",{className:"text-slate-900 mb-3",children:"Payment Information"}),j.jsxs("div",{className:"space-y-2",children:[j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-600",children:"Payment Mode"}),j.jsx("span",{className:"text-slate-900 uppercase",children:c})]}),j.jsxs("div",{className:"flex justify-between",children:[j.jsx("span",{className:"text-slate-900",children:"Amount Paid"}),j.jsxs("span",{className:"text-slate-900",children:["₹",a]})]})]})]})]})}),j.jsx("button",{onClick:e,className:"w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors",children:"Register Next Participant"})]})})}function XA(){const[i,e]=wt.useState("login"),[t,s]=wt.useState({selectedEvents:[]}),[a,c]=wt.useState(!1),h=()=>{e("start")},m=()=>{e("details")},y=B=>{s(K=>({...K,participant:B})),e("events")},v=(B,K)=>{s(X=>({...X,selectedEvents:B,totalAmount:K})),e("payment")},w=async B=>{if(!t.participant||!t.selectedEvents){console.error("Missing registration data");return}c(!0);try{const K=gv.currentUser;if(!K){alert("You must be logged in to register participants."),e("login");return}const X=await K.getIdToken(),W="http://localhost:3000/api",ue={name:t.participant.fullName,phone:t.participant.phoneNumber,email:t.participant.email,college:t.participant.collegeName,eventIds:t.selectedEvents.map(Te=>Te.id),paymentMode:B==="cash"?"CASH":"UPI"},me=await fetch(`${W}/register`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${X}`},body:JSON.stringify(ue)});if(!me.ok){const Te=await me.json();throw new Error(Te.error||"Registration failed")}const ge=await me.json();console.log("Registration success:",ge),s(Te=>({...Te,paymentMode:B})),e("confirmation")}catch(K){console.error("Registration error:",K),alert(`Registration Failed: ${K.message}`)}finally{c(!1)}},R=()=>{s({selectedEvents:[]}),e("start")},V=()=>{i==="details"?e("start"):i==="events"?e("details"):i==="payment"&&e("events")};return j.jsxs("div",{className:"min-h-screen bg-neutral-50",children:[i==="login"&&j.jsx(MA,{onLogin:h}),i==="start"&&j.jsx(bA,{onStart:m}),i==="details"&&j.jsx(GA,{initialData:t.participant,onNext:y,onBack:V}),i==="events"&&j.jsx(KA,{initialSelectedEvents:t.selectedEvents||[],onNext:v,onBack:V}),i==="payment"&&j.jsx(QA,{totalAmount:t.totalAmount||0,onConfirm:w,onBack:V,isSubmitting:a}),i==="confirmation"&&j.jsx(YA,{registrationData:t,onRegisterNext:R})]})}DE.createRoot(document.getElementById("root")).render(j.jsx(XA,{}));
