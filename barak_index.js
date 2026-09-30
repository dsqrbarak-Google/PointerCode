(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))c(x);new MutationObserver(x=>{for(const b of x)if(b.type==="childList")for(const y of b.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function d(x){const b={};return x.integrity&&(b.integrity=x.integrity),x.referrerPolicy&&(b.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?b.credentials="include":x.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(x){if(x.ep)return;x.ep=!0;const b=d(x);fetch(x.href,b)}})();function Ex(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Do={exports:{}},qn={};var lm;function Tx(){if(lm)return qn;lm=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(c,x,b){var y=null;if(b!==void 0&&(y=""+b),x.key!==void 0&&(y=""+x.key),"key"in x){b={};for(var E in x)E!=="key"&&(b[E]=x[E])}else b=x;return x=b.ref,{$$typeof:s,type:c,key:y,ref:x!==void 0?x:null,props:b}}return qn.Fragment=u,qn.jsx=d,qn.jsxs=d,qn}var nm;function kx(){return nm||(nm=1,Do.exports=Tx()),Do.exports}var l=kx(),_o={exports:{}},ee={};var im;function Ax(){if(im)return ee;im=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),w=Symbol.iterator;function C(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,B={};function G(N,q,X){this.props=N,this.context=q,this.refs=B,this.updater=X||M}G.prototype.isReactComponent={},G.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=G.prototype;function Y(N,q,X){this.props=N,this.context=q,this.refs=B,this.updater=X||M}var P=Y.prototype=new L;P.constructor=Y,H(P,G.prototype),P.isPureReactComponent=!0;var ne=Array.isArray;function ve(){}var $={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function ue(N,q,X){var Z=X.ref;return{$$typeof:s,type:N,key:q,ref:Z!==void 0?Z:null,props:X}}function et(N,q){return ue(N.type,q,N.props)}function Ce(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function tt(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(X){return q[X]})}var qt=/\/+/g;function Ze(N,q){return typeof N=="object"&&N!==null&&N.key!=null?tt(""+N.key):q.toString(36)}function _e(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ve,ve):(N.status="pending",N.then(function(q){N.status==="pending"&&(N.status="fulfilled",N.value=q)},function(q){N.status==="pending"&&(N.status="rejected",N.reason=q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,q,X,Z,te){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var be=!1;if(N===null)be=!0;else switch(ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(N.$$typeof){case s:case u:be=!0;break;case p:return be=N._init,D(be(N._payload),q,X,Z,te)}}if(be)return te=te(N),be=Z===""?"."+Ze(N,0):Z,ne(te)?(X="",be!=null&&(X=be.replace(qt,"$&/")+"/"),D(te,q,X,"",function(Ql){return Ql})):te!=null&&(Ce(te)&&(te=et(te,X+(te.key==null||N&&N.key===te.key?"":(""+te.key).replace(qt,"$&/")+"/")+be)),q.push(te)),1;be=0;var lt=Z===""?".":Z+":";if(ne(N))for(var Ue=0;Ue<N.length;Ue++)Z=N[Ue],ie=lt+Ze(Z,Ue),be+=D(Z,q,X,ie,te);else if(Ue=C(N),typeof Ue=="function")for(N=Ue.call(N),Ue=0;!(Z=N.next()).done;)Z=Z.value,ie=lt+Ze(Z,Ue++),be+=D(Z,q,X,ie,te);else if(ie==="object"){if(typeof N.then=="function")return D(_e(N),q,X,Z,te);throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function Q(N,q,X){if(N==null)return N;var Z=[],te=0;return D(N,Z,"","",function(ie){return q.call(X,ie,te++)}),Z}function F(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(X){(N._status===0||N._status===-1)&&(N._status=1,N._result=X)},function(X){(N._status===0||N._status===-1)&&(N._status=2,N._result=X)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ge={map:Q,forEach:function(N,q,X){Q(N,function(){q.apply(this,arguments)},X)},count:function(N){var q=0;return Q(N,function(){q++}),q},toArray:function(N){return Q(N,function(q){return q})||[]},only:function(N){if(!Ce(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ee.Activity=g,ee.Children=ge,ee.Component=G,ee.Fragment=d,ee.Profiler=x,ee.PureComponent=Y,ee.StrictMode=c,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ee.__COMPILER_RUNTIME={__proto__:null,c:function(N){return $.H.useMemoCache(N)}},ee.cache=function(N){return function(){return N.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(N,q,X){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Z=H({},N.props),te=N.key;if(q!=null)for(ie in q.key!==void 0&&(te=""+q.key),q)!I.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||(Z[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)Z.children=X;else if(1<ie){for(var be=Array(ie),lt=0;lt<ie;lt++)be[lt]=arguments[lt+2];Z.children=be}return ue(N.type,te,Z)},ee.createContext=function(N){return N={$$typeof:y,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:b,_context:N},N},ee.createElement=function(N,q,X){var Z,te={},ie=null;if(q!=null)for(Z in q.key!==void 0&&(ie=""+q.key),q)I.call(q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(te[Z]=q[Z]);var be=arguments.length-2;if(be===1)te.children=X;else if(1<be){for(var lt=Array(be),Ue=0;Ue<be;Ue++)lt[Ue]=arguments[Ue+2];te.children=lt}if(N&&N.defaultProps)for(Z in be=N.defaultProps,be)te[Z]===void 0&&(te[Z]=be[Z]);return ue(N,ie,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(N){return{$$typeof:E,render:N}},ee.isValidElement=Ce,ee.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:F}},ee.memo=function(N,q){return{$$typeof:f,type:N,compare:q===void 0?null:q}},ee.startTransition=function(N){var q=$.T,X={};$.T=X;try{var Z=N(),te=$.S;te!==null&&te(X,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ve,pe)}catch(ie){pe(ie)}finally{q!==null&&X.types!==null&&(q.types=X.types),$.T=q}},ee.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ee.use=function(N){return $.H.use(N)},ee.useActionState=function(N,q,X){return $.H.useActionState(N,q,X)},ee.useCallback=function(N,q){return $.H.useCallback(N,q)},ee.useContext=function(N){return $.H.useContext(N)},ee.useDebugValue=function(){},ee.useDeferredValue=function(N,q){return $.H.useDeferredValue(N,q)},ee.useEffect=function(N,q){return $.H.useEffect(N,q)},ee.useEffectEvent=function(N){return $.H.useEffectEvent(N)},ee.useId=function(){return $.H.useId()},ee.useImperativeHandle=function(N,q,X){return $.H.useImperativeHandle(N,q,X)},ee.useInsertionEffect=function(N,q){return $.H.useInsertionEffect(N,q)},ee.useLayoutEffect=function(N,q){return $.H.useLayoutEffect(N,q)},ee.useMemo=function(N,q){return $.H.useMemo(N,q)},ee.useOptimistic=function(N,q){return $.H.useOptimistic(N,q)},ee.useReducer=function(N,q,X){return $.H.useReducer(N,q,X)},ee.useRef=function(N){return $.H.useRef(N)},ee.useState=function(N){return $.H.useState(N)},ee.useSyncExternalStore=function(N,q,X){return $.H.useSyncExternalStore(N,q,X)},ee.useTransition=function(){return $.H.useTransition()},ee.version="19.2.3",ee}var rm;function Ko(){return rm||(rm=1,_o.exports=Ax()),_o.exports}var z=Ko();const De=Ex(z);var Uo={exports:{}},Hn={},qo={exports:{}},Ho={};var sm;function Cx(){return sm||(sm=1,(function(s){function u(D,Q){var F=D.length;D.push(Q);e:for(;0<F;){var pe=F-1>>>1,ge=D[pe];if(0<x(ge,Q))D[pe]=Q,D[F]=ge,F=pe;else break e}}function d(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var Q=D[0],F=D.pop();if(F!==Q){D[0]=F;e:for(var pe=0,ge=D.length,N=ge>>>1;pe<N;){var q=2*(pe+1)-1,X=D[q],Z=q+1,te=D[Z];if(0>x(X,F))Z<ge&&0>x(te,X)?(D[pe]=te,D[Z]=F,pe=Z):(D[pe]=X,D[q]=F,pe=q);else if(Z<ge&&0>x(te,F))D[pe]=te,D[Z]=F,pe=Z;else break e}}return Q}function x(D,Q){var F=D.sortIndex-Q.sortIndex;return F!==0?F:D.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;s.unstable_now=function(){return b.now()}}else{var y=Date,E=y.now();s.unstable_now=function(){return y.now()-E}}var m=[],f=[],p=1,g=null,w=3,C=!1,M=!1,H=!1,B=!1,G=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function P(D){for(var Q=d(f);Q!==null;){if(Q.callback===null)c(f);else if(Q.startTime<=D)c(f),Q.sortIndex=Q.expirationTime,u(m,Q);else break;Q=d(f)}}function ne(D){if(H=!1,P(D),!M)if(d(m)!==null)M=!0,ve||(ve=!0,tt());else{var Q=d(f);Q!==null&&_e(ne,Q.startTime-D)}}var ve=!1,$=-1,I=5,ue=-1;function et(){return B?!0:!(s.unstable_now()-ue<I)}function Ce(){if(B=!1,ve){var D=s.unstable_now();ue=D;var Q=!0;try{e:{M=!1,H&&(H=!1,L($),$=-1),C=!0;var F=w;try{t:{for(P(D),g=d(m);g!==null&&!(g.expirationTime>D&&et());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,w=g.priorityLevel;var ge=pe(g.expirationTime<=D);if(D=s.unstable_now(),typeof ge=="function"){g.callback=ge,P(D),Q=!0;break t}g===d(m)&&c(m),P(D)}else c(m);g=d(m)}if(g!==null)Q=!0;else{var N=d(f);N!==null&&_e(ne,N.startTime-D),Q=!1}}break e}finally{g=null,w=F,C=!1}Q=void 0}}finally{Q?tt():ve=!1}}}var tt;if(typeof Y=="function")tt=function(){Y(Ce)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,Ze=qt.port2;qt.port1.onmessage=Ce,tt=function(){Ze.postMessage(null)}}else tt=function(){G(Ce,0)};function _e(D,Q){$=G(function(){D(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return w},s.unstable_next=function(D){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var F=w;w=Q;try{return D()}finally{w=F}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=w;w=D;try{return Q()}finally{w=F}},s.unstable_scheduleCallback=function(D,Q,F){var pe=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,D){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=F+ge,D={id:p++,callback:Q,priorityLevel:D,startTime:F,expirationTime:ge,sortIndex:-1},F>pe?(D.sortIndex=F,u(f,D),d(m)===null&&D===d(f)&&(H?(L($),$=-1):H=!0,_e(ne,F-pe))):(D.sortIndex=ge,u(m,D),M||C||(M=!0,ve||(ve=!0,tt()))),D},s.unstable_shouldYield=et,s.unstable_wrapCallback=function(D){var Q=w;return function(){var F=w;w=Q;try{return D.apply(this,arguments)}finally{w=F}}}})(Ho)),Ho}var om;function Rx(){return om||(om=1,qo.exports=Cx()),qo.exports}var Bo={exports:{}},at={};var cm;function Mx(){if(cm)return at;cm=1;var s=Ko();function u(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)f+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},x=Symbol.for("react.portal");function b(m,f,p){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:g==null?null:""+g,children:m,containerInfo:f,implementation:p}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,at.createPortal=function(m,f){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(u(299));return b(m,f,null,p)},at.flushSync=function(m){var f=y.T,p=c.p;try{if(y.T=null,c.p=2,m)return m()}finally{y.T=f,c.p=p,c.d.f()}},at.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,c.d.C(m,f))},at.prefetchDNS=function(m){typeof m=="string"&&c.d.D(m)},at.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var p=f.as,g=E(p,f.crossOrigin),w=typeof f.integrity=="string"?f.integrity:void 0,C=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;p==="style"?c.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:g,integrity:w,fetchPriority:C}):p==="script"&&c.d.X(m,{crossOrigin:g,integrity:w,fetchPriority:C,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},at.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var p=E(f.as,f.crossOrigin);c.d.M(m,{crossOrigin:p,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&c.d.M(m)},at.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var p=f.as,g=E(p,f.crossOrigin);c.d.L(m,p,{crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},at.preloadModule=function(m,f){if(typeof m=="string")if(f){var p=E(f.as,f.crossOrigin);c.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:p,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else c.d.m(m)},at.requestFormReset=function(m){c.d.r(m)},at.unstable_batchedUpdates=function(m,f){return m(f)},at.useFormState=function(m,f,p){return y.H.useFormState(m,f,p)},at.useFormStatus=function(){return y.H.useHostTransitionStatus()},at.version="19.2.3",at}var dm;function Ox(){if(dm)return Bo.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Bo.exports=Mx(),Bo.exports}var um;function Dx(){if(um)return Hn;um=1;var s=Rx(),u=Ko(),d=Ox();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(b(e)!==e)throw Error(c(188))}function f(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return m(i),e;if(r===n)return m(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,h=i.child;h;){if(h===a){o=!0,a=i,n=r;break}if(h===n){o=!0,n=i,a=r;break}h=h.sibling}if(!o){for(h=r.child;h;){if(h===a){o=!0,a=r,n=i;break}if(h===n){o=!0,n=r,a=i;break}h=h.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),Ce=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=Ce&&e[Ce]||e["@@iterator"],typeof e=="function"?e:null)}var qt=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case G:return"Profiler";case B:return"StrictMode";case ne:return"Suspense";case ve:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case Y:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Ze(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return Ze(e(t))}catch{}}return null}var _e=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function N(e){return{current:e}}function q(e){0>ge||(e.current=pe[ge],pe[ge]=null,ge--)}function X(e,t){ge++,pe[ge]=e.current,e.current=t}var Z=N(null),te=N(null),ie=N(null),be=N(null);function lt(e,t){switch(X(ie,t),X(te,e),X(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ef(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ef(t),e=Tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Z),X(Z,e)}function Ue(){q(Z),q(te),q(ie)}function Ql(e){e.memoizedState!==null&&X(be,e);var t=Z.current,a=Tf(t,e.type);t!==a&&(X(te,e),X(Z,a))}function Xn(e){te.current===e&&(q(Z),q(te)),be.current===e&&(q(be),On._currentValue=F)}var pr,tc;function Ua(e){if(pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pr=t&&t[1]||"",tc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+e+tc}var xr=!1;function gr(e,t){if(!e||xr)return"";xr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(R){var A=R}Reflect.construct(e,[],U)}else{try{U.call()}catch(R){A=R}e.call(U.prototype)}}else{try{throw Error()}catch(R){A=R}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],h=r[1];if(o&&h){var v=o.split(`
`),k=h.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===k.length)for(n=v.length-1,i=k.length-1;1<=n&&0<=i&&v[n]!==k[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==k[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==k[i]){var O=`
`+v[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=i);break}}}finally{xr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ua(a):""}function lh(e,t){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return e.child!==t&&t!==null?Ua("Suspense Fallback"):Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return gr(e.type,!1);case 11:return gr(e.type.render,!1);case 1:return gr(e.type,!0);case 31:return Ua("Activity");default:return""}}function ac(e){try{var t="",a=null;do t+=lh(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var br=Object.prototype.hasOwnProperty,vr=s.unstable_scheduleCallback,yr=s.unstable_cancelCallback,nh=s.unstable_shouldYield,ih=s.unstable_requestPaint,ft=s.unstable_now,rh=s.unstable_getCurrentPriorityLevel,lc=s.unstable_ImmediatePriority,nc=s.unstable_UserBlockingPriority,Vn=s.unstable_NormalPriority,sh=s.unstable_LowPriority,ic=s.unstable_IdlePriority,oh=s.log,ch=s.unstable_setDisableYieldValue,Xl=null,mt=null;function ua(e){if(typeof oh=="function"&&ch(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Xl,e)}catch{}}var ht=Math.clz32?Math.clz32:fh,dh=Math.log,uh=Math.LN2;function fh(e){return e>>>=0,e===0?32:31-(dh(e)/uh|0)|0}var Zn=256,Kn=262144,Jn=4194304;function qa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~r,n!==0?i=qa(n):(o&=h,o!==0?i=qa(o):a||(a=h&~e,a!==0&&(i=qa(a))))):(h=n&~r,h!==0?i=qa(h):o!==0?i=qa(o):a||(a=n&~e,a!==0&&(i=qa(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(){var e=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),e}function jr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Zl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hh(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,k=e.hiddenUpdates;for(a=o&~a;0<a;){var O=31-ht(a),U=1<<O;h[O]=0,v[O]=-1;var A=k[O];if(A!==null)for(k[O]=null,O=0;O<A.length;O++){var R=A[O];R!==null&&(R.lane&=-536870913)}a&=~U}n!==0&&sc(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function sc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ht(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function oc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ht(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function cc(e,t){var a=t&-t;return a=(a&42)!==0?1:Nr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Wf(e.type))}function uc(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var fa=Math.random().toString(36).slice(2),Ke="__reactFiber$"+fa,it="__reactProps$"+fa,al="__reactContainer$"+fa,Sr="__reactEvents$"+fa,ph="__reactListeners$"+fa,xh="__reactHandles$"+fa,fc="__reactResources$"+fa,Kl="__reactMarker$"+fa;function zr(e){delete e[Ke],delete e[it],delete e[Sr],delete e[ph],delete e[xh]}function ll(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[al]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Df(e);e!==null;){if(a=e[Ke])return a;e=Df(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[Ke]||e[al]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function il(e){var t=e[fc];return t||(t=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Kl]=!0}var mc=new Set,hc={};function Ha(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(hc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},xc={};function bh(e){return br.call(xc,e)?!0:br.call(pc,e)?!1:gh.test(e)?xc[e]=!0:(pc[e]=!0,!1)}function Wn(e,t,a){if(bh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function $n(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){if(!e._valueTracker){var t=gc(e)?"checked":"value";e._valueTracker=vh(e,t,""+e[t])}}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=gc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yh=/[\n"\\]/g;function wt(e){return e.replace(yh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tr(e,t,a,n,i,r,o,h){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?kr(e,o,Nt(t)):a!=null?kr(e,o,Nt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Nt(h):e.removeAttribute("name")}function vc(e,t,a,n,i,r,o,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Er(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Er(e)}function kr(e,t,a){t==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yc(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function jc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(_e(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Er(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||jh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function wc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Nc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Nc(e,r,t[r])}function Ar(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(e){return wh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Cr=null;function Rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,dl=null;function Sc(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[it]||null;if(!i)throw Error(c(90));Tr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&bc(n)}break e;case"textarea":yc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var Mr=!1;function zc(e,t,a){if(Mr)return e(t,a);Mr=!0;try{var n=e(t);return n}finally{if(Mr=!1,(cl!==null||dl!==null)&&(Li(),cl&&(t=cl,e=dl,dl=cl=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[it]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Or=!1;if(Vt)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){Or=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{Or=!1}var ma=null,Dr=null,ei=null;function Ec(){if(ei)return ei;var e,t=Dr,a=t.length,n,i="value"in ma?ma.value:ma.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return ei=i.slice(e,1<n?1-n:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Tc(){return!1}function rt(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ai:Tc,this.isPropagationStopped=Tc,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=rt(Ba),$l=g({},Ba,{view:0,detail:0}),Sh=rt($l),_r,Ur,Il,ni=g({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(_r=e.screenX-Il.screenX,Ur=e.screenY-Il.screenY):Ur=_r=0,Il=e),_r)},movementY:function(e){return"movementY"in e?e.movementY:Ur}}),kc=rt(ni),zh=g({},ni,{dataTransfer:0}),Eh=rt(zh),Th=g({},$l,{relatedTarget:0}),qr=rt(Th),kh=g({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Ah=rt(kh),Ch=g({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rh=rt(Ch),Mh=g({},Ba,{data:0}),Ac=rt(Mh),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_h[e])?!!t[e]:!1}function Hr(){return Uh}var qh=g({},$l,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hh=rt(qh),Bh=g({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=rt(Bh),Lh=g({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),Yh=rt(Lh),Gh=g({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=rt(Gh),Xh=g({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=rt(Xh),Zh=g({},Ba,{newState:0,oldState:0}),Kh=rt(Zh),Jh=[9,13,27,32],Br=Vt&&"CompositionEvent"in window,Pl=null;Vt&&"documentMode"in document&&(Pl=document.documentMode);var Fh=Vt&&"TextEvent"in window&&!Pl,Rc=Vt&&(!Br||Pl&&8<Pl&&11>=Pl),Mc=" ",Oc=!1;function Dc(e,t){switch(e){case"keyup":return Jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function Wh(e,t){switch(e){case"compositionend":return _c(t);case"keypress":return t.which!==32?null:(Oc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Oc?null:e;default:return null}}function $h(e,t){if(ul)return e==="compositionend"||!Br&&Dc(e,t)?(e=Ec(),ei=Dr=ma=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function qc(e,t,a,n){cl?dl?dl.push(n):dl=[n]:cl=n,t=Ki(t,"onChange"),0<t.length&&(a=new li("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var en=null,tn=null;function Ph(e){yf(e,0)}function ii(e){var t=Jl(e);if(bc(t))return e}function Hc(e,t){if(e==="change")return t}var Bc=!1;if(Vt){var Lr;if(Vt){var Yr="oninput"in document;if(!Yr){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),Yr=typeof Lc.oninput=="function"}Lr=Yr}else Lr=!1;Bc=Lr&&(!document.documentMode||9<document.documentMode)}function Yc(){en&&(en.detachEvent("onpropertychange",Gc),tn=en=null)}function Gc(e){if(e.propertyName==="value"&&ii(tn)){var t=[];qc(t,tn,e,Rr(e)),zc(Ph,t)}}function ep(e,t,a){e==="focusin"?(Yc(),en=t,tn=a,en.attachEvent("onpropertychange",Gc)):e==="focusout"&&Yc()}function tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(tn)}function ap(e,t){if(e==="click")return ii(t)}function lp(e,t){if(e==="input"||e==="change")return ii(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:np;function an(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!br.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var a=Qc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qc(a)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=In(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=In(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ip=Vt&&"documentMode"in document&&11>=document.documentMode,fl=null,Qr=null,ln=null,Xr=!1;function Kc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xr||fl==null||fl!==In(n)||(n=fl,"selectionStart"in n&&Gr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ln&&an(ln,n)||(ln=n,n=Ki(Qr,"onSelect"),0<n.length&&(t=new li("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=fl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ml={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Vr={},Jc={};Vt&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Ya(e){if(Vr[e])return Vr[e];if(!ml[e])return e;var t=ml[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Jc)return Vr[e]=t[a];return e}var Fc=Ya("animationend"),Wc=Ya("animationiteration"),$c=Ya("animationstart"),rp=Ya("transitionrun"),sp=Ya("transitionstart"),op=Ya("transitioncancel"),Ic=Ya("transitionend"),Pc=new Map,Zr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zr.push("scrollEnd");function Ot(e,t){Pc.set(e,t),Ha(t,[e])}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],hl=0,Kr=0;function si(){for(var e=hl,t=Kr=hl=0;t<e;){var a=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];St[t++]=null;var r=St[t];if(St[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&ed(a,i,r)}}function oi(e,t,a,n){St[hl++]=e,St[hl++]=t,St[hl++]=a,St[hl++]=n,Kr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Jr(e,t,a,n){return oi(e,t,a,n),ci(e)}function Ga(e,t){return oi(e,null,null,t),ci(e)}function ed(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-ht(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function ci(e){if(50<En)throw En=0,lo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pl={};function cp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new cp(e,t,a,n)}function Fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function td(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")Fr(e)&&(o=1);else if(typeof e=="string")o=hx(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=xt(31,a,t,i),e.elementType=ue,e.lanes=r,e;case H:return Qa(a.children,i,r,t);case B:o=8,i|=24;break;case G:return e=xt(12,a,t,i|2),e.elementType=G,e.lanes=r,e;case ne:return e=xt(13,a,t,i),e.elementType=ne,e.lanes=r,e;case ve:return e=xt(19,a,t,i),e.elementType=ve,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:o=10;break e;case L:o=9;break e;case P:o=11;break e;case $:o=14;break e;case I:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=xt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Qa(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function Wr(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function ad(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function $r(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ld=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=ld.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ac(t)},ld.set(e,t),t)}return{value:e,source:t,stack:ac(t)}}var xl=[],gl=0,ui=null,nn=0,Et=[],Tt=0,ha=null,Ht=1,Bt="";function Kt(e,t){xl[gl++]=nn,xl[gl++]=ui,ui=e,nn=t}function nd(e,t,a){Et[Tt++]=Ht,Et[Tt++]=Bt,Et[Tt++]=ha,ha=e;var n=Ht;e=Bt;var i=32-ht(n)-1;n&=~(1<<i),a+=1;var r=32-ht(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ht=1<<32-ht(t)+i|a<<i|n,Bt=r+e}else Ht=1<<r|a<<i|n,Bt=e}function Ir(e){e.return!==null&&(Kt(e,1),nd(e,1,0))}function Pr(e){for(;e===ui;)ui=xl[--gl],xl[gl]=null,nn=xl[--gl],xl[gl]=null;for(;e===ha;)ha=Et[--Tt],Et[Tt]=null,Bt=Et[--Tt],Et[Tt]=null,Ht=Et[--Tt],Et[Tt]=null}function id(e,t){Et[Tt++]=Ht,Et[Tt++]=Bt,Et[Tt++]=ha,Ht=t.id,Bt=t.overflow,ha=e}var Je=null,Ee=null,fe=!1,pa=null,kt=!1,es=Error(c(519));function xa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(zt(t,e)),es}function rd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ke]=e,t[it]=n,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<kn.length;a++)se(kn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),vc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),jc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Sf(t.textContent,a)?(n.popover!=null&&(se("beforetoggle",t),se("toggle",t)),n.onScroll!=null&&se("scroll",t),n.onScrollEnd!=null&&se("scrollend",t),n.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||xa(e,!0)}function sd(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:Je=Je.return}}function bl(e){if(e!==Je)return!1;if(!fe)return sd(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vo(e.type,e.memoizedProps)),a=!a),a&&Ee&&xa(e),sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Of(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Of(e)}else t===27?(t=Ee,Ca(e.type)?(e=So,So=null,Ee=e):Ee=t):Ee=Je?Ct(e.stateNode.nextSibling):null;return!0}function Xa(){Ee=Je=null,fe=!1}function ts(){var e=pa;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),pa=null),e}function rn(e){pa===null?pa=[e]:pa.push(e)}var as=N(null),Va=null,Jt=null;function ga(e,t,a){X(as,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=as.current,q(as)}function ls(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function ns(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var v=0;v<t.length;v++)if(h.context===t[v]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),ls(r.return,a,e),n||(o=null);break e}r=h.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),ls(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function vl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var h=i.type;pt(i.pendingProps.value,o.value)||(e!==null?e.push(h):e=[h])}}else if(i===be.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}i=i.return}e!==null&&ns(t,e,a,n),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return od(Va,e)}function mi(e,t){return Va===null&&Za(e),od(e,t)}function od(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(c(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},up=s.unstable_scheduleCallback,fp=s.unstable_NormalPriority,Be={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function is(){return{controller:new dp,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&up(fp,function(){e.controller.abort()})}var on=null,rs=0,yl=0,jl=null;function mp(e,t){if(on===null){var a=on=[];rs=0,yl=co(),jl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return rs++,t.then(cd,cd),t}function cd(){if(--rs===0&&on!==null){jl!==null&&(jl.status="fulfilled");var e=on;on=null,yl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var dd=D.S;D.S=function(e,t){Ku=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mp(e,t),dd!==null&&dd(e,t)};var Ka=N(null);function ss(){var e=Ka.current;return e!==null?e:ze.pooledCache}function hi(e,t){t===null?X(Ka,Ka.current):X(Ka,t.pool)}function ud(){var e=ss();return e===null?null:{parent:Be._currentValue,pool:e}}var Nl=Error(c(460)),os=Error(c(474)),pi=Error(c(542)),xi={then:function(){}};function fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function md(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pd(e),e}throw Fa=t,Nl}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fa=a,Nl):a}}var Fa=null;function hd(){if(Fa===null)throw Error(c(459));var e=Fa;return Fa=null,e}function pd(e){if(e===Nl||e===pi)throw Error(c(483))}var wl=null,cn=0;function gi(e){var t=cn;return cn+=1,wl===null&&(wl=[]),md(wl,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===w?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xd(e){function t(S,j){if(e){var T=S.deletions;T===null?(S.deletions=[j],S.flags|=16):T.push(j)}}function a(S,j){if(!e)return null;for(;j!==null;)t(S,j),j=j.sibling;return null}function n(S){for(var j=new Map;S!==null;)S.key!==null?j.set(S.key,S):j.set(S.index,S),S=S.sibling;return j}function i(S,j){return S=Zt(S,j),S.index=0,S.sibling=null,S}function r(S,j,T){return S.index=T,e?(T=S.alternate,T!==null?(T=T.index,T<j?(S.flags|=67108866,j):T):(S.flags|=67108866,j)):(S.flags|=1048576,j)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function h(S,j,T,_){return j===null||j.tag!==6?(j=Wr(T,S.mode,_),j.return=S,j):(j=i(j,T),j.return=S,j)}function v(S,j,T,_){var J=T.type;return J===H?O(S,j,T.props.children,_,T.key):j!==null&&(j.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===I&&Ja(J)===j.type)?(j=i(j,T.props),dn(j,T),j.return=S,j):(j=di(T.type,T.key,T.props,null,S.mode,_),dn(j,T),j.return=S,j)}function k(S,j,T,_){return j===null||j.tag!==4||j.stateNode.containerInfo!==T.containerInfo||j.stateNode.implementation!==T.implementation?(j=$r(T,S.mode,_),j.return=S,j):(j=i(j,T.children||[]),j.return=S,j)}function O(S,j,T,_,J){return j===null||j.tag!==7?(j=Qa(T,S.mode,_,J),j.return=S,j):(j=i(j,T),j.return=S,j)}function U(S,j,T){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Wr(""+j,S.mode,T),j.return=S,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case C:return T=di(j.type,j.key,j.props,null,S.mode,T),dn(T,j),T.return=S,T;case M:return j=$r(j,S.mode,T),j.return=S,j;case I:return j=Ja(j),U(S,j,T)}if(_e(j)||tt(j))return j=Qa(j,S.mode,T,null),j.return=S,j;if(typeof j.then=="function")return U(S,gi(j),T);if(j.$$typeof===Y)return U(S,mi(S,j),T);bi(S,j)}return null}function A(S,j,T,_){var J=j!==null?j.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return J!==null?null:h(S,j,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case C:return T.key===J?v(S,j,T,_):null;case M:return T.key===J?k(S,j,T,_):null;case I:return T=Ja(T),A(S,j,T,_)}if(_e(T)||tt(T))return J!==null?null:O(S,j,T,_,null);if(typeof T.then=="function")return A(S,j,gi(T),_);if(T.$$typeof===Y)return A(S,j,mi(S,T),_);bi(S,T)}return null}function R(S,j,T,_,J){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return S=S.get(T)||null,h(j,S,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case C:return S=S.get(_.key===null?T:_.key)||null,v(j,S,_,J);case M:return S=S.get(_.key===null?T:_.key)||null,k(j,S,_,J);case I:return _=Ja(_),R(S,j,T,_,J)}if(_e(_)||tt(_))return S=S.get(T)||null,O(j,S,_,J,null);if(typeof _.then=="function")return R(S,j,T,gi(_),J);if(_.$$typeof===Y)return R(S,j,T,mi(j,_),J);bi(j,_)}return null}function V(S,j,T,_){for(var J=null,me=null,K=j,le=j=0,de=null;K!==null&&le<T.length;le++){K.index>le?(de=K,K=null):de=K.sibling;var he=A(S,K,T[le],_);if(he===null){K===null&&(K=de);break}e&&K&&he.alternate===null&&t(S,K),j=r(he,j,le),me===null?J=he:me.sibling=he,me=he,K=de}if(le===T.length)return a(S,K),fe&&Kt(S,le),J;if(K===null){for(;le<T.length;le++)K=U(S,T[le],_),K!==null&&(j=r(K,j,le),me===null?J=K:me.sibling=K,me=K);return fe&&Kt(S,le),J}for(K=n(K);le<T.length;le++)de=R(K,S,le,T[le],_),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?le:de.key),j=r(de,j,le),me===null?J=de:me.sibling=de,me=de);return e&&K.forEach(function(_a){return t(S,_a)}),fe&&Kt(S,le),J}function W(S,j,T,_){if(T==null)throw Error(c(151));for(var J=null,me=null,K=j,le=j=0,de=null,he=T.next();K!==null&&!he.done;le++,he=T.next()){K.index>le?(de=K,K=null):de=K.sibling;var _a=A(S,K,he.value,_);if(_a===null){K===null&&(K=de);break}e&&K&&_a.alternate===null&&t(S,K),j=r(_a,j,le),me===null?J=_a:me.sibling=_a,me=_a,K=de}if(he.done)return a(S,K),fe&&Kt(S,le),J;if(K===null){for(;!he.done;le++,he=T.next())he=U(S,he.value,_),he!==null&&(j=r(he,j,le),me===null?J=he:me.sibling=he,me=he);return fe&&Kt(S,le),J}for(K=n(K);!he.done;le++,he=T.next())he=R(K,S,le,he.value,_),he!==null&&(e&&he.alternate!==null&&K.delete(he.key===null?le:he.key),j=r(he,j,le),me===null?J=he:me.sibling=he,me=he);return e&&K.forEach(function(zx){return t(S,zx)}),fe&&Kt(S,le),J}function Se(S,j,T,_){if(typeof T=="object"&&T!==null&&T.type===H&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case C:e:{for(var J=T.key;j!==null;){if(j.key===J){if(J=T.type,J===H){if(j.tag===7){a(S,j.sibling),_=i(j,T.props.children),_.return=S,S=_;break e}}else if(j.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===I&&Ja(J)===j.type){a(S,j.sibling),_=i(j,T.props),dn(_,T),_.return=S,S=_;break e}a(S,j);break}else t(S,j);j=j.sibling}T.type===H?(_=Qa(T.props.children,S.mode,_,T.key),_.return=S,S=_):(_=di(T.type,T.key,T.props,null,S.mode,_),dn(_,T),_.return=S,S=_)}return o(S);case M:e:{for(J=T.key;j!==null;){if(j.key===J)if(j.tag===4&&j.stateNode.containerInfo===T.containerInfo&&j.stateNode.implementation===T.implementation){a(S,j.sibling),_=i(j,T.children||[]),_.return=S,S=_;break e}else{a(S,j);break}else t(S,j);j=j.sibling}_=$r(T,S.mode,_),_.return=S,S=_}return o(S);case I:return T=Ja(T),Se(S,j,T,_)}if(_e(T))return V(S,j,T,_);if(tt(T)){if(J=tt(T),typeof J!="function")throw Error(c(150));return T=J.call(T),W(S,j,T,_)}if(typeof T.then=="function")return Se(S,j,gi(T),_);if(T.$$typeof===Y)return Se(S,j,mi(S,T),_);bi(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,j!==null&&j.tag===6?(a(S,j.sibling),_=i(j,T),_.return=S,S=_):(a(S,j),_=Wr(T,S.mode,_),_.return=S,S=_),o(S)):a(S,j)}return function(S,j,T,_){try{cn=0;var J=Se(S,j,T,_);return wl=null,J}catch(K){if(K===Nl||K===pi)throw K;var me=xt(29,K,null,S.mode);return me.lanes=_,me.return=S,me}}}var Wa=xd(!0),gd=xd(!1),ba=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ds(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=ci(e),ed(e,null,a),t}return oi(e,n,t,a),ci(e)}function un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,oc(e,a)}}function us(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var fs=!1;function fn(){if(fs){var e=jl;if(e!==null)throw e}}function mn(e,t,a,n){fs=!1;var i=e.updateQueue;ba=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var v=h,k=v.next;v.next=null,o===null?r=k:o.next=k,o=v;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==o&&(h===null?O.firstBaseUpdate=k:h.next=k,O.lastBaseUpdate=v))}if(r!==null){var U=i.baseState;o=0,O=k=v=null,h=r;do{var A=h.lane&-536870913,R=A!==h.lane;if(R?(ce&A)===A:(n&A)===A){A!==0&&A===yl&&(fs=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var V=e,W=h;A=t;var Se=a;switch(W.tag){case 1:if(V=W.payload,typeof V=="function"){U=V.call(Se,U,A);break e}U=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,A=typeof V=="function"?V.call(Se,U,A):V,A==null)break e;U=g({},U,A);break e;case 2:ba=!0}}A=h.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[A]:R.push(A))}else R={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(k=O=R,v=U):O=O.next=R,o|=A;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;R=h,h=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);O===null&&(v=U),i.baseState=v,i.firstBaseUpdate=k,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),za|=o,e.lanes=o,e.memoizedState=U}}function bd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function vd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bd(a[e],t)}var Sl=N(null),vi=N(0);function yd(e,t){e=na,X(vi,e),X(Sl,t),na=e|t.baseLanes}function ms(){X(vi,na),X(Sl,Sl.current)}function hs(){na=vi.current,q(Sl),q(vi)}var gt=N(null),At=null;function ja(e){var t=e.alternate;X(qe,qe.current&1),X(gt,e),At===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(At=e)}function ps(e){X(qe,qe.current),X(gt,e),At===null&&(At=e)}function jd(e){e.tag===22?(X(qe,qe.current),X(gt,e),At===null&&(At=e)):Na()}function Na(){X(qe,qe.current),X(gt,gt.current)}function bt(e){q(gt),At===e&&(At=null),q(qe)}var qe=N(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||No(a)||wo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wt=0,ae=null,Ne=null,Le=null,ji=!1,zl=!1,$a=!1,Ni=0,hn=0,El=null,pp=0;function Re(){throw Error(c(321))}function xs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function gs(e,t,a,n,i,r){return Wt=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?nu:Ms,$a=!1,r=a(n,i),$a=!1,zl&&(r=wd(t,a,n,i)),Nd(e),r}function Nd(e){D.H=gn;var t=Ne!==null&&Ne.next!==null;if(Wt=0,Le=Ne=ae=null,ji=!1,hn=0,El=null,t)throw Error(c(300));e===null||Ye||(e=e.dependencies,e!==null&&fi(e)&&(Ye=!0))}function wd(e,t,a,n){ae=e;var i=0;do{if(zl&&(El=null),hn=0,zl=!1,25<=i)throw Error(c(301));if(i+=1,Le=Ne=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=iu,r=t(a,n)}while(zl);return r}function xp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?pn(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ae.flags|=1024),t}function bs(){var e=Ni!==0;return Ni=0,e}function vs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ys(e){if(ji){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ji=!1}Wt=0,Le=Ne=ae=null,zl=!1,hn=Ni=0,El=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ae.memoizedState=Le=e:Le=Le.next=e,Le}function He(){if(Ne===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Le===null?ae.memoizedState:Le.next;if(t!==null)Le=t,Ne=e;else{if(e===null)throw ae.alternate===null?Error(c(467)):Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ae.memoizedState=Le=e:Le=Le.next=e}return Le}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pn(e){var t=hn;return hn+=1,El===null&&(El=[]),e=md(El,e,t),t=ae,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?nu:Ms),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pn(e);if(e.$$typeof===Y)return Fe(e)}throw Error(c(438,String(e)))}function js(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=wi(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=et;return t.index++,a}function $t(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=He();return Ns(t,Ne,e)}function Ns(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=o=null,v=null,k=t,O=!1;do{var U=k.lane&-536870913;if(U!==k.lane?(ce&U)===U:(Wt&U)===U){var A=k.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),U===yl&&(O=!0);else if((Wt&A)===A){k=k.next,A===yl&&(O=!0);continue}else U={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},v===null?(h=v=U,o=r):v=v.next=U,ae.lanes|=A,za|=A;U=k.action,$a&&a(r,U),r=k.hasEagerState?k.eagerState:a(r,U)}else A={lane:U,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},v===null?(h=v=A,o=r):v=v.next=A,ae.lanes|=U,za|=U;k=k.next}while(k!==null&&k!==t);if(v===null?o=r:v.next=h,!pt(r,e.memoizedState)&&(Ye=!0,O&&(a=jl,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ws(e){var t=He(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);pt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Sd(e,t,a){var n=ae,i=He(),r=fe;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!pt((Ne||i).memoizedState,a);if(o&&(i.memoizedState=a,Ye=!0),i=i.queue,Es(Td.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Tl(9,{destroy:void 0},Ed.bind(null,n,i,a,t),null),ze===null)throw Error(c(349));r||(Wt&127)!==0||zd(n,t,a)}return a}function zd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=wi(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ed(e,t,a,n){t.value=a,t.getSnapshot=n,kd(t)&&Ad(e)}function Td(e,t,a){return a(function(){kd(t)&&Ad(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function Ad(e){var t=Ga(e,2);t!==null&&ut(t,e,2)}function Ss(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),$a){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function Cd(e,t,a,n){return e.baseState=a,Ns(e,Ne,typeof n=="function"?n:$t)}function gp(e,t,a,n,i){if(ki(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Rd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Rd(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,o={};D.T=o;try{var h=a(i,n),v=D.S;v!==null&&v(o,h),Md(e,t,h)}catch(k){zs(e,t,k)}finally{r!==null&&o.types!==null&&(r.types=o.types),D.T=r}}else try{r=a(i,n),Md(e,t,r)}catch(k){zs(e,t,k)}}function Md(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Od(e,t,n)},function(n){return zs(e,t,n)}):Od(e,t,a)}function Od(e,t,a){t.status="fulfilled",t.value=a,Dd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Rd(e,a)))}function zs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Dd(t),t=t.next;while(t!==n)}e.action=null}function Dd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _d(e,t){return t}function Ud(e,t){if(fe){var a=ze.formState;if(a!==null){e:{var n=ae;if(fe){if(Ee){t:{for(var i=Ee,r=kt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Ct(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ee=Ct(i.nextSibling),n=i.data==="F!";break e}}xa(n)}n=!1}n&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_d,lastRenderedState:t},a.queue=n,a=tu.bind(null,ae,n),n.dispatch=a,n=Ss(!1),r=Rs.bind(null,ae,!1,n.queue),n=nt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=gp.bind(null,ae,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function qd(e){var t=He();return Hd(t,Ne,e)}function Hd(e,t,a){if(t=Ns(e,t,_d)[0],e=zi($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=pn(t)}catch(o){throw o===Nl?pi:o}else n=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,Tl(9,{destroy:void 0},bp.bind(null,i,a),null)),[n,r,e]}function bp(e,t){e.action=t}function Bd(e){var t=He(),a=Ne;if(a!==null)return Hd(t,a,e);He(),t=t.memoizedState,a=He();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Tl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=wi(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Ld(){return He().memoizedState}function Ei(e,t,a,n){var i=nt();ae.flags|=e,i.memoizedState=Tl(1|t,{destroy:void 0},a,n===void 0?null:n)}function Ti(e,t,a,n){var i=He();n=n===void 0?null:n;var r=i.memoizedState.inst;Ne!==null&&n!==null&&xs(n,Ne.memoizedState.deps)?i.memoizedState=Tl(t,r,a,n):(ae.flags|=e,i.memoizedState=Tl(1|t,r,a,n))}function Yd(e,t){Ei(8390656,8,e,t)}function Es(e,t){Ti(2048,8,e,t)}function vp(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=wi(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Gd(e){var t=He().memoizedState;return vp({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Qd(e,t){return Ti(4,2,e,t)}function Xd(e,t){return Ti(4,4,e,t)}function Vd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,a){a=a!=null?a.concat([e]):null,Ti(4,4,Vd.bind(null,t,e),a)}function Ts(){}function Kd(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&xs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Jd(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&xs(t,n[1]))return n[0];if(n=e(),$a){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n}function ks(e,t,a){return a===void 0||(Wt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fu(),ae.lanes|=e,za|=e,a)}function Fd(e,t,a,n){return pt(a,t)?a:Sl.current!==null?(e=ks(e,a,n),pt(e,t)||(Ye=!0),e):(Wt&42)===0||(Wt&1073741824)!==0&&(ce&261930)===0?(Ye=!0,e.memoizedState=a):(e=Fu(),ae.lanes|=e,za|=e,t)}function Wd(e,t,a,n,i){var r=Q.p;Q.p=r!==0&&8>r?r:8;var o=D.T,h={};D.T=h,Rs(e,!1,t,a);try{var v=i(),k=D.S;if(k!==null&&k(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=hp(v,n);xn(e,t,O,jt(e))}else xn(e,t,n,jt(e))}catch(U){xn(e,t,{then:function(){},status:"rejected",reason:U},jt())}finally{Q.p=r,o!==null&&h.types!==null&&(o.types=h.types),D.T=o}}function yp(){}function As(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=$d(e).queue;Wd(e,i,t,F,a===null?yp:function(){return Id(e),a(n)})}function $d(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Id(e){var t=$d(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},jt())}function Cs(){return Fe(On)}function Pd(){return He().memoizedState}function eu(){return He().memoizedState}function jp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=va(a);var n=ya(t,e,a);n!==null&&(ut(n,t,a),un(n,t,a)),t={cache:is()},e.payload=t;return}t=t.return}}function Np(e,t,a){var n=jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)?au(t,a):(a=Jr(e,t,a,n),a!==null&&(ut(a,e,n),lu(a,t,n)))}function tu(e,t,a){var n=jt();xn(e,t,a,n)}function xn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(e))au(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,h=r(o,a);if(i.hasEagerState=!0,i.eagerState=h,pt(h,o))return oi(e,t,i,0),ze===null&&si(),!1}catch{}if(a=Jr(e,t,i,n),a!==null)return ut(a,e,n),lu(a,t,n),!0}return!1}function Rs(e,t,a,n){if(n={lane:2,revertLane:co(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(c(479))}else t=Jr(e,a,n,2),t!==null&&ut(t,e,2)}function ki(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function au(e,t){zl=ji=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function lu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,oc(e,a)}}var gn={readContext:Fe,use:Si,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};gn.useEffectEvent=Re;var nu={readContext:Fe,use:Si,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Yd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ei(4194308,4,Vd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ei(4194308,4,e,t)},useInsertionEffect:function(e,t){Ei(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var n=e();if($a){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=nt();if(a!==void 0){var i=a(t);if($a){ua(!0);try{a(t)}finally{ua(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Np.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,a=tu.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ts,useDeferredValue:function(e,t){var a=nt();return ks(a,e,t)},useTransition:function(){var e=Ss(!1);return e=Wd.bind(null,ae,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,i=nt();if(fe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ze===null)throw Error(c(349));(ce&127)!==0||zd(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Yd(Td.bind(null,n,r,e),[e]),n.flags|=2048,Tl(9,{destroy:void 0},Ed.bind(null,n,r,a,t),null),a},useId:function(){var e=nt(),t=ze.identifierPrefix;if(fe){var a=Bt,n=Ht;a=(n&~(1<<32-ht(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ni++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=pp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cs,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Rs.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return nt().memoizedState=jp.bind(null,ae)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((xe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ms={readContext:Fe,use:Si,useCallback:Kd,useContext:Fe,useEffect:Es,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Xd,useMemo:Jd,useReducer:zi,useRef:Ld,useState:function(){return zi($t)},useDebugValue:Ts,useDeferredValue:function(e,t){var a=He();return Fd(a,Ne.memoizedState,e,t)},useTransition:function(){var e=zi($t)[0],t=He().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:Sd,useId:Pd,useHostTransitionStatus:Cs,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var a=He();return Cd(a,Ne,e,t)},useMemoCache:js,useCacheRefresh:eu};Ms.useEffectEvent=Gd;var iu={readContext:Fe,use:Si,useCallback:Kd,useContext:Fe,useEffect:Es,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Xd,useMemo:Jd,useReducer:ws,useRef:Ld,useState:function(){return ws($t)},useDebugValue:Ts,useDeferredValue:function(e,t){var a=He();return Ne===null?ks(a,e,t):Fd(a,Ne.memoizedState,e,t)},useTransition:function(){var e=ws($t)[0],t=He().memoizedState;return[typeof e=="boolean"?e:pn(e),t]},useSyncExternalStore:Sd,useId:Pd,useHostTransitionStatus:Cs,useFormState:Bd,useActionState:Bd,useOptimistic:function(e,t){var a=He();return Ne!==null?Cd(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:js,useCacheRefresh:eu};iu.useEffectEvent=Gd;function Os(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ds={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=jt(),i=va(n);i.payload=t,a!=null&&(i.callback=a),t=ya(e,i,n),t!==null&&(ut(t,e,n),un(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=jt(),i=va(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ya(e,i,n),t!==null&&(ut(t,e,n),un(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),n=va(a);n.tag=2,t!=null&&(n.callback=t),t=ya(e,n,a),t!==null&&(ut(t,e,a),un(t,e,a))}};function ru(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!an(a,n)||!an(i,r):!0}function su(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function ou(e){ri(e)}function cu(e){console.error(e)}function du(e){ri(e)}function Ai(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function uu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function _s(e,t,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ai(e,t)},a}function fu(e){return e=va(e),e.tag=3,e}function mu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){uu(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){uu(t,a,n),typeof i!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function wp(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&vl(t,a,i,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Yi():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ro(e,n,i)),!1;case 22:return a.flags|=65536,n===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ro(e,n,i)),!1}throw Error(c(435,a.tag))}return ro(e,n,i),Yi(),!1}if(fe)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==es&&(e=Error(c(422),{cause:n}),rn(zt(e,a)))):(n!==es&&(t=Error(c(423),{cause:n}),rn(zt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=zt(n,a),i=_s(e.stateNode,n,i),us(e,i),Me!==4&&(Me=2)),!1;var r=Error(c(520),{cause:n});if(r=zt(r,a),zn===null?zn=[r]:zn.push(r),Me!==4&&(Me=2),t===null)return!0;n=zt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=_s(a.stateNode,n,e),us(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=fu(i),mu(i,e,a,n),us(a,i),!1}a=a.return}while(a!==null);return!1}var Us=Error(c(461)),Ye=!1;function We(e,t,a,n){t.child=e===null?gd(t,null,a,n):Wa(t,e.child,a,n)}function hu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var h in n)h!=="ref"&&(o[h]=n[h])}else o=n;return Za(t),n=gs(e,t,a,o,r,i),h=bs(),e!==null&&!Ye?(vs(e,t,i),It(e,t,i)):(fe&&h&&Ir(t),t.flags|=1,We(e,t,n,i),t.child)}function pu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Fr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,xu(e,t,r,n,i)):(e=di(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Xs(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:an,a(o,n)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Zt(r,n),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(an(r,n)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=n=r,Xs(e,i))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,It(e,t,i)}return qs(e,t,a,n,i)}function gu(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return bu(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,r!==null?r.cachePool:null),r!==null?yd(t,r):ms(),jd(t);else return n=t.lanes=536870912,bu(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(hi(t,r.cachePool),yd(t,r),Na(),t.memoizedState=null):(e!==null&&hi(t,null),ms(),Na());return We(e,t,i,a),t.child}function bn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bu(e,t,a,n,i){var r=ss();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&hi(t,null),ms(),jd(t),e!==null&&vl(e,t,n,!0),t.childLanes=i,null}function Ci(e,t){return t=Mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vu(e,t,a){return Wa(t,e.child,null,a),e=Ci(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Sp(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(n.mode==="hidden")return e=Ci(t,n),t.lanes=536870912,bn(null,e);if(ps(t),(e=Ee)?(e=Mf(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=ad(e),a.return=t,t.child=a,Je=t,Ee=null)):e=null,e===null)throw xa(t);return t.lanes=536870912,null}return Ci(t,n)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(ps(t),i)if(t.flags&256)t.flags&=-257,t=vu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ye||vl(e,t,a,!1),i=(a&e.childLanes)!==0,Ye||i){if(n=ze,n!==null&&(o=cc(n,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,Ga(e,o),ut(n,e,o),Us;Yi(),t=vu(e,t,a)}else e=r.treeContext,Ee=Ct(o.nextSibling),Je=t,fe=!0,pa=null,kt=!1,e!==null&&id(t,e),t=Ci(t,n),t.flags|=4096;return t}return e=Zt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ri(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function qs(e,t,a,n,i){return Za(t),a=gs(e,t,a,n,void 0,i),n=bs(),e!==null&&!Ye?(vs(e,t,i),It(e,t,i)):(fe&&n&&Ir(t),t.flags|=1,We(e,t,a,i),t.child)}function yu(e,t,a,n,i,r){return Za(t),t.updateQueue=null,a=wd(t,n,a,i),Nd(e),n=bs(),e!==null&&!Ye?(vs(e,t,r),It(e,t,r)):(fe&&n&&Ir(t),t.flags|=1,We(e,t,a,r),t.child)}function ju(e,t,a,n,i){if(Za(t),t.stateNode===null){var r=pl,o=a.contextType;typeof o=="object"&&o!==null&&(r=Fe(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ds,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},cs(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Fe(o):pl,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Os(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Ds.enqueueReplaceState(r,r.state,null),mn(t,n,r,i),fn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,v=Ia(a,h);r.props=v;var k=r.context,O=a.contextType;o=pl,typeof O=="object"&&O!==null&&(o=Fe(O));var U=a.getDerivedStateFromProps;O=typeof U=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||k!==o)&&su(t,r,n,o),ba=!1;var A=t.memoizedState;r.state=A,mn(t,n,r,i),fn(),k=t.memoizedState,h||A!==k||ba?(typeof U=="function"&&(Os(t,a,U,n),k=t.memoizedState),(v=ba||ru(t,a,v,n,A,k,o))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=k),r.props=n,r.state=k,r.context=o,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,ds(e,t),o=t.memoizedProps,O=Ia(a,o),r.props=O,U=t.pendingProps,A=r.context,k=a.contextType,v=pl,typeof k=="object"&&k!==null&&(v=Fe(k)),h=a.getDerivedStateFromProps,(k=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==U||A!==v)&&su(t,r,n,v),ba=!1,A=t.memoizedState,r.state=A,mn(t,n,r,i),fn();var R=t.memoizedState;o!==U||A!==R||ba||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof h=="function"&&(Os(t,a,h,n),R=t.memoizedState),(O=ba||ru(t,a,O,n,A,R,v)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(k||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,R,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,R,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=R),r.props=n,r.state=R,r.context=v,n=O):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Ri(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,a,i)):We(e,t,a,i),t.memoizedState=r.state,e=t.child):e=It(e,t,i),e}function Nu(e,t,a,n){return Xa(),t.flags|=256,We(e,t,a,n),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bs(e){return{baseLanes:e,cachePool:ud()}}function Ls(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function wu(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(i?ja(t):Na(),(e=Ee)?(e=Mf(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=ad(e),a.return=t,t.child=a,Je=t,Ee=null)):e=null,e===null)throw xa(t);return wo(e)?t.lanes=32:t.lanes=536870912,null}var h=n.children;return n=n.fallback,i?(Na(),i=t.mode,h=Mi({mode:"hidden",children:h},i),n=Qa(n,i,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,n=t.child,n.memoizedState=Bs(a),n.childLanes=Ls(e,o,a),t.memoizedState=Hs,bn(null,n)):(ja(t),Ys(t,h))}var v=e.memoizedState;if(v!==null&&(h=v.dehydrated,h!==null)){if(r)t.flags&256?(ja(t),t.flags&=-257,t=Gs(e,t,a)):t.memoizedState!==null?(Na(),t.child=e.child,t.flags|=128,t=null):(Na(),h=n.fallback,i=t.mode,n=Mi({mode:"visible",children:n.children},i),h=Qa(h,i,a,null),h.flags|=2,n.return=t,h.return=t,n.sibling=h,t.child=n,Wa(t,e.child,null,a),n=t.child,n.memoizedState=Bs(a),n.childLanes=Ls(e,o,a),t.memoizedState=Hs,t=bn(null,n));else if(ja(t),wo(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var k=o.dgst;o=k,n=Error(c(419)),n.stack="",n.digest=o,rn({value:n,source:null,stack:null}),t=Gs(e,t,a)}else if(Ye||vl(e,t,a,!1),o=(a&e.childLanes)!==0,Ye||o){if(o=ze,o!==null&&(n=cc(o,a),n!==0&&n!==v.retryLane))throw v.retryLane=n,Ga(e,n),ut(o,e,n),Us;No(h)||Yi(),t=Gs(e,t,a)}else No(h)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ee=Ct(h.nextSibling),Je=t,fe=!0,pa=null,kt=!1,e!==null&&id(t,e),t=Ys(t,n.children),t.flags|=4096);return t}return i?(Na(),h=n.fallback,i=t.mode,v=e.child,k=v.sibling,n=Zt(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,k!==null?h=Zt(k,h):(h=Qa(h,i,a,null),h.flags|=2),h.return=t,n.return=t,n.sibling=h,t.child=n,bn(null,n),n=t.child,h=e.child.memoizedState,h===null?h=Bs(a):(i=h.cachePool,i!==null?(v=Be._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=ud(),h={baseLanes:h.baseLanes|a,cachePool:i}),n.memoizedState=h,n.childLanes=Ls(e,o,a),t.memoizedState=Hs,bn(e.child,n)):(ja(t),a=e.child,e=a.sibling,a=Zt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ys(e,t){return t=Mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mi(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Gs(e,t,a){return Wa(t,e.child,null,a),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Su(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ls(e.return,t,a)}function Qs(e,t,a,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function zu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var o=qe.current,h=(o&2)!==0;if(h?(o=o&1|2,t.flags|=128):o&=1,X(qe,o),We(e,t,n,a),n=fe?nn:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,a,t);else if(e.tag===19)Su(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Qs(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Qs(t,!0,a,null,r,n);break;case"together":Qs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(vl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function zp(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,Be,e.memoizedState.cache),Xa();break;case 27:case 5:Ql(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ps(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ja(t),t.flags|=128,null):(a&t.child.childLanes)!==0?wu(e,t,a):(ja(t),e=It(e,t,a),e!==null?e.sibling:null);ja(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(vl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return zu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(qe,qe.current),n)break;return null;case 22:return t.lanes=0,gu(e,t,a,t.pendingProps);case 24:ga(t,Be,e.memoizedState.cache)}return It(e,t,a)}function Eu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Xs(e,a)&&(t.flags&128)===0)return Ye=!1,zp(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,fe&&(t.flags&1048576)!==0&&nd(t,nn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")Fr(e)?(n=Ia(e,n),t.tag=1,t=ju(null,t,e,n,a)):(t.tag=0,t=qs(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===P){t.tag=11,t=hu(null,t,e,n,a);break e}else if(i===$){t.tag=14,t=pu(null,t,e,n,a);break e}}throw t=Ze(e)||e,Error(c(306,t,""))}}return t;case 0:return qs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ia(n,t.pendingProps),ju(e,t,n,i,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,ds(e,t),mn(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ga(t,Be,n),n!==r.cache&&ns(t,[Be],a,!0),fn(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Nu(e,t,n,a);break e}else if(n!==i){i=zt(Error(c(424)),t),rn(i),t=Nu(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ee=Ct(e.firstChild),Je=t,fe=!0,pa=null,kt=!0,a=gd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xa(),n===i){t=It(e,t,a);break e}We(e,t,n,a)}t=t.child}return t;case 26:return Ri(e,t),e===null?(a=Hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,n=Ji(ie.current).createElement(a),n[Ke]=t,n[it]=e,$e(n,a,e),Xe(n),t.stateNode=n):t.memoizedState=Hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ql(t),e===null&&fe&&(n=t.stateNode=_f(t.type,t.pendingProps,ie.current),Je=t,kt=!0,i=Ee,Ca(t.type)?(So=i,Ee=Ct(n.firstChild)):Ee=i),We(e,t,t.pendingProps.children,a),Ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((i=n=Ee)&&(n=tx(n,t.type,t.pendingProps,kt),n!==null?(t.stateNode=n,Je=t,Ee=Ct(n.firstChild),kt=!1,i=!0):i=!1),i||xa(t)),Ql(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,vo(i,r)?n=null:o!==null&&vo(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=gs(e,t,xp,null,null,a),On._currentValue=i),Ri(e,t),We(e,t,n,a),t.child;case 6:return e===null&&fe&&((e=a=Ee)&&(a=ax(a,t.pendingProps,kt),a!==null?(t.stateNode=a,Je=t,Ee=null,e=!0):e=!1),e||xa(t)),null;case 13:return wu(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Wa(t,null,n,a):We(e,t,n,a),t.child;case 11:return hu(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ga(t,t.type,n.value),We(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Za(t),i=Fe(i),n=n(i),t.flags|=1,We(e,t,n,a),t.child;case 14:return pu(e,t,t.type,t.pendingProps,a);case 15:return xu(e,t,t.type,t.pendingProps,a);case 19:return zu(e,t,a);case 31:return Sp(e,t,a);case 22:return gu(e,t,a,t.pendingProps);case 24:return Za(t),n=Fe(Be),e===null?(i=ss(),i===null&&(i=ze,r=is(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},cs(t),ga(t,Be,i)):((e.lanes&a)!==0&&(ds(e,t),mn(t,null,null,a),fn()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ga(t,Be,n)):(n=r.cache,ga(t,Be,n),n!==i.cache&&ns(t,[Be],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Pt(e){e.flags|=4}function Vs(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Pu())e.flags|=8192;else throw Fa=xi,os}else e.flags&=-16777217}function Tu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qf(t))if(Pu())e.flags|=8192;else throw Fa=xi,os}function Oi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rc():536870912,e.lanes|=t,Rl|=t)}function vn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ep(e,t,a){var n=t.pendingProps;switch(Pr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(Be),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bl(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ts())),Te(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(Pt(t),r!==null?(Te(t),Tu(t,r)):(Te(t),Vs(t,i,null,n,a))):r?r!==e.memoizedState?(Pt(t),Te(t),Tu(t,r)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pt(t),Te(t),Vs(t,i,e,n,a)),null;case 27:if(Xn(t),a=ie.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Te(t),null}e=Z.current,bl(t)?rd(t):(e=_f(i,n,a),t.stateNode=e,Pt(t))}return Te(t),null;case 5:if(Xn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Te(t),null}if(r=Z.current,bl(t))rd(t);else{var o=Ji(ie.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}r[Ke]=t,r[it]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch($e(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pt(t)}}return Te(t),Vs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,bl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Je,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Sf(e.nodeValue,a)),e||xa(t,!0)}else e=Ji(e).createTextNode(n),e[Ke]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=bl(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ke]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Te(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=bl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Ke]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else i=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Oi(t,t.updateQueue),Te(t),null);case 4:return Ue(),e===null&&ho(t.stateNode.containerInfo),Te(t),null;case 10:return Ft(t.type),Te(t),null;case 19:if(q(qe),n=t.memoizedState,n===null)return Te(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)vn(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=yi(e),r!==null){for(t.flags|=128,vn(n,!1),e=r.updateQueue,t.updateQueue=e,Oi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)td(a,e),a=a.sibling;return X(qe,qe.current&1|2),fe&&Kt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ft()>Hi&&(t.flags|=128,i=!0,vn(n,!1),t.lanes=4194304)}else{if(!i)if(e=yi(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Oi(t,e),vn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!fe)return Te(t),null}else 2*ft()-n.renderingStartTime>Hi&&a!==536870912&&(t.flags|=128,i=!0,vn(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ft(),e.sibling=null,a=qe.current,X(qe,i?a&1|2:a&1),fe&&Kt(t,n.treeForkCount),e):(Te(t),null);case 22:case 23:return bt(t),hs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&Oi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&q(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Tp(e,t){switch(Pr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Be),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(qe),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),hs(),e!==null&&q(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Be),null;case 25:return null;default:return null}}function ku(e,t){switch(Pr(t),t.tag){case 3:Ft(Be),Ue();break;case 26:case 27:case 5:Xn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:q(qe);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),hs(),e!==null&&q(Ka);break;case 24:Ft(Be)}}function yn(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(h){je(t,t.return,h)}}function wa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,h=o.destroy;if(h!==void 0){o.destroy=void 0,i=t;var v=a,k=h;try{k()}catch(O){je(i,v,O)}}}n=n.next}while(n!==r)}}catch(O){je(t,t.return,O)}}function Au(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{vd(t,a)}catch(n){je(e,e.return,n)}}}function Cu(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){je(e,t,n)}}function jn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){je(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){je(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){je(e,t,i)}else a.current=null}function Ru(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){je(e,e.return,i)}}function Zs(e,t,a){try{var n=e.stateNode;Fp(n,e.type,a,t),n[it]=t}catch(i){je(e,e.return,i)}}function Mu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Ks(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Js(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(n!==4&&(n===27&&Ca(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Js(e,t,a),e=e.sibling;e!==null;)Js(e,t,a),e=e.sibling}function Di(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Di(e,t,a),e=e.sibling;e!==null;)Di(e,t,a),e=e.sibling}function Ou(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);$e(t,n,a),t[Ke]=e,t[it]=a}catch(r){je(e,e.return,r)}}var ea=!1,Ge=!1,Fs=!1,Du=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function kp(e,t){if(e=e.containerInfo,go=tr,e=Zc(e),Gr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,h=-1,v=-1,k=0,O=0,U=e,A=null;t:for(;;){for(var R;U!==a||i!==0&&U.nodeType!==3||(h=o+i),U!==r||n!==0&&U.nodeType!==3||(v=o+n),U.nodeType===3&&(o+=U.nodeValue.length),(R=U.firstChild)!==null;)A=U,U=R;for(;;){if(U===e)break t;if(A===a&&++k===i&&(h=o),A===r&&++O===n&&(v=o),(R=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=R}a=h===-1||v===-1?null:{start:h,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(bo={focusedElem:e,selectionRange:a},tr=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var V=Ia(a.type,i);e=n.getSnapshotBeforeUpdate(V,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(W){je(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function _u(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),n&4&&yn(5,a);break;case 1:if(aa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){je(a,a.return,o)}else{var i=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){je(a,a.return,o)}}n&64&&Au(a),n&512&&jn(a,a.return);break;case 3:if(aa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{vd(e,t)}catch(o){je(a,a.return,o)}}break;case 27:t===null&&n&4&&Ou(a);case 26:case 5:aa(e,a),t===null&&n&4&&Ru(a),n&512&&jn(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),n&4&&Hu(e,a);break;case 13:aa(e,a),n&4&&Bu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qp.bind(null,a),lx(e,a))));break;case 22:if(n=a.memoizedState!==null||ea,!n){t=t!==null&&t.memoizedState!==null||Ge,i=ea;var r=Ge;ea=n,(Ge=t)&&!r?la(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),ea=i,Ge=r}break;case 30:break;default:aa(e,a)}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,st=!1;function ta(e,t,a){for(a=a.child;a!==null;)qu(e,t,a),a=a.sibling}function qu(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xl,a)}catch{}switch(a.tag){case 26:Ge||Lt(a,t),ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Lt(a,t);var n=ke,i=st;Ca(a.type)&&(ke=a.stateNode,st=!1),ta(e,t,a),Cn(a.stateNode),ke=n,st=i;break;case 5:Ge||Lt(a,t);case 6:if(n=ke,i=st,ke=null,ta(e,t,a),ke=n,st=i,ke!==null)if(st)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(r){je(a,t,r)}else try{ke.removeChild(a.stateNode)}catch(r){je(a,t,r)}break;case 18:ke!==null&&(st?(e=ke,Cf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bl(e)):Cf(ke,a.stateNode));break;case 4:n=ke,i=st,ke=a.stateNode.containerInfo,st=!0,ta(e,t,a),ke=n,st=i;break;case 0:case 11:case 14:case 15:wa(2,a,t),Ge||wa(4,a,t),ta(e,t,a);break;case 1:Ge||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Cu(a,t,n)),ta(e,t,a);break;case 21:ta(e,t,a);break;case 22:Ge=(n=Ge)||a.memoizedState!==null,ta(e,t,a),Ge=n;break;default:ta(e,t,a)}}function Hu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(a){je(t,t.return,a)}}}function Bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(a){je(t,t.return,a)}}function Ap(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Du),t;default:throw Error(c(435,e.tag))}}function _i(e,t){var a=Ap(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Hp.bind(null,e,n);n.then(i,i)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,h=o;e:for(;h!==null;){switch(h.tag){case 27:if(Ca(h.type)){ke=h.stateNode,st=!1;break e}break;case 5:ke=h.stateNode,st=!1;break e;case 3:case 4:ke=h.stateNode.containerInfo,st=!0;break e}h=h.return}if(ke===null)throw Error(c(160));qu(r,o,i),ke=null,st=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling}var Dt=null;function Lu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),ct(e),n&4&&(wa(3,e,e.return),yn(3,e),wa(5,e,e.return));break;case 1:ot(t,e),ct(e),n&512&&(Ge||a===null||Lt(a,a.return)),n&64&&ea&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Dt;if(ot(t,e),ct(e),n&512&&(Ge||a===null||Lt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Kl]||r[Ke]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),$e(r,n,a),r[Ke]=e,Xe(r),n=r;break e;case"link":var o=Yf("link","href",i).get(n+(a.href||""));if(o){for(var h=0;h<o.length;h++)if(r=o[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(h,1);break t}}r=i.createElement(n),$e(r,n,a),i.head.appendChild(r);break;case"meta":if(o=Yf("meta","content",i).get(n+(a.content||""))){for(h=0;h<o.length;h++)if(r=o[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(h,1);break t}}r=i.createElement(n),$e(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[Ke]=e,Xe(r),n=r}e.stateNode=n}else Gf(i,e.type,e.stateNode);else e.stateNode=Lf(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Gf(i,e.type,e.stateNode):Lf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Zs(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),ct(e),n&512&&(Ge||a===null||Lt(a,a.return)),a!==null&&n&4&&Zs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),ct(e),n&512&&(Ge||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{ol(i,"")}catch(V){je(e,e.return,V)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Zs(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Fs=!0);break;case 6:if(ot(t,e),ct(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(V){je(e,e.return,V)}}break;case 3:if($i=null,i=Dt,Dt=Fi(t.containerInfo),ot(t,e),Dt=i,ct(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(V){je(e,e.return,V)}Fs&&(Fs=!1,Yu(e));break;case 4:n=Dt,Dt=Fi(e.stateNode.containerInfo),ot(t,e),ct(e),Dt=n;break;case 12:ot(t,e),ct(e);break;case 31:ot(t,e),ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_i(e,n)));break;case 13:ot(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qi=ft()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_i(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,k=ea,O=Ge;if(ea=k||i,Ge=O||v,ot(t,e),Ge=O,ea=k,ct(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||ea||Ge||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{h=v.stateNode;var U=v.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;h.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(V){je(v,v.return,V)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(V){je(v,v.return,V)}}}else if(t.tag===18){if(a===null){v=t;try{var R=v.stateNode;i?Rf(R,!0):Rf(v.stateNode,!1)}catch(V){je(v,v.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,_i(e,a))));break;case 19:ot(t,e),ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_i(e,n)));break;case 30:break;case 21:break;default:ot(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Mu(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Ks(e);Di(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(ol(o,""),a.flags&=-33);var h=Ks(e);Di(e,h,o);break;case 3:case 4:var v=a.stateNode.containerInfo,k=Ks(e);Js(e,k,v);break;default:throw Error(c(161))}}catch(O){je(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Yu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_u(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wa(4,t,t.return),Pa(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cu(t,t.return,a),Pa(t);break;case 27:Cn(t.stateNode);case 26:case 5:Lt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function la(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:la(i,r,a),yn(4,r);break;case 1:if(la(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(k){je(n,n.return,k)}if(n=r,i=n.updateQueue,i!==null){var h=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)bd(v[i],h)}catch(k){je(n,n.return,k)}}a&&o&64&&Au(r),jn(r,r.return);break;case 27:Ou(r);case 26:case 5:la(i,r,a),a&&n===null&&o&4&&Ru(r),jn(r,r.return);break;case 12:la(i,r,a);break;case 31:la(i,r,a),a&&o&4&&Hu(i,r);break;case 13:la(i,r,a),a&&o&4&&Bu(i,r);break;case 22:r.memoizedState===null&&la(i,r,a),jn(r,r.return);break;case 30:break;default:la(i,r,a)}t=t.sibling}}function Ws(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function $s(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function _t(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gu(e,t,a,n),t=t.sibling}function Gu(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,n),i&2048&&yn(9,t);break;case 1:_t(e,t,a,n);break;case 3:_t(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(i&2048){_t(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,h=r.onPostCommit;typeof h=="function"&&h(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){je(t,t.return,v)}}else _t(e,t,a,n);break;case 31:_t(e,t,a,n);break;case 13:_t(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?_t(e,t,a,n):Nn(e,t):r._visibility&2?_t(e,t,a,n):(r._visibility|=2,kl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ws(o,t);break;case 24:_t(e,t,a,n),i&2048&&$s(t.alternate,t);break;default:_t(e,t,a,n)}}function kl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,h=a,v=n,k=o.flags;switch(o.tag){case 0:case 11:case 15:kl(r,o,h,v,i),yn(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?kl(r,o,h,v,i):Nn(r,o):(O._visibility|=2,kl(r,o,h,v,i)),i&&k&2048&&Ws(o.alternate,o);break;case 24:kl(r,o,h,v,i),i&&k&2048&&$s(o.alternate,o);break;default:kl(r,o,h,v,i)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Nn(a,n),i&2048&&Ws(n.alternate,n);break;case 24:Nn(a,n),i&2048&&$s(n.alternate,n);break;default:Nn(a,n)}t=t.sibling}}var wn=8192;function Al(e,t,a){if(e.subtreeFlags&wn)for(e=e.child;e!==null;)Qu(e,t,a),e=e.sibling}function Qu(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&wn&&e.memoizedState!==null&&px(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var n=Dt;Dt=Fi(e.stateNode.containerInfo),Al(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wn,wn=16777216,Al(e,t,a),wn=n):Al(e,t,a));break;default:Al(e,t,a)}}function Xu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ve=n,Zu(n,e)}Xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vu(e),e=e.sibling}function Vu(e){switch(e.tag){case 0:case 11:case 15:Sn(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Sn(e);break;case 12:Sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):Sn(e);break;default:Sn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ve=n,Zu(n,e)}Xu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wa(8,t,t.return),Ui(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function Zu(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:wa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:sn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ve=n;else e:for(a=e;Ve!==null;){n=Ve;var i=n.sibling,r=n.return;if(Uu(n),n===a){Ve=null;break e}if(i!==null){i.return=r,Ve=i;break e}Ve=r}}}var Cp={getCacheForType:function(e){var t=Fe(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Fe(Be).controller.signal}},Rp=typeof WeakMap=="function"?WeakMap:Map,xe=0,ze=null,re=null,ce=0,ye=0,vt=null,Sa=!1,Cl=!1,Is=!1,na=0,Me=0,za=0,el=0,Ps=0,yt=0,Rl=0,zn=null,dt=null,eo=!1,qi=0,Ku=0,Hi=1/0,Bi=null,Ea=null,Qe=0,Ta=null,Ml=null,ia=0,to=0,ao=null,Ju=null,En=0,lo=null;function jt(){return(xe&2)!==0&&ce!==0?ce&-ce:D.T!==null?co():dc()}function Fu(){if(yt===0)if((ce&536870912)===0||fe){var e=Kn;Kn<<=1,(Kn&3932160)===0&&(Kn=262144),yt=e}else yt=536870912;return e=gt.current,e!==null&&(e.flags|=32),yt}function ut(e,t,a){(e===ze&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Ol(e,0),ka(e,ce,yt,!1)),Zl(e,a),((xe&2)===0||e!==ze)&&(e===ze&&((xe&2)===0&&(el|=a),Me===4&&ka(e,ce,yt,!1)),Yt(e))}function Wu(e,t,a){if((xe&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Vl(e,t),i=n?Dp(e,t):io(e,t,!0),r=n;do{if(i===0){Cl&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Mp(a)){i=io(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var h=e;i=zn;var v=h.current.memoizedState.isDehydrated;if(v&&(Ol(h,o).flags|=256),o=io(h,o,!1),o!==2){if(Is&&!v){h.errorRecoveryDisabledLanes|=r,el|=r,i=4;break e}r=dt,dt=i,r!==null&&(dt===null?dt=r:dt.push.apply(dt,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){Ol(e,0),ka(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,yt,!Sa);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=qi+300-ft(),10<i)){if(ka(n,t,yt,!Sa),Fn(n,0,!0)!==0)break e;ia=t,n.timeoutHandle=kf($u.bind(null,n,a,dt,Bi,eo,t,yt,el,Rl,Sa,r,"Throttled",-0,0),i);break e}$u(n,a,dt,Bi,eo,t,yt,el,Rl,Sa,r,null,-0,0)}}break}while(!0);Yt(e)}function $u(e,t,a,n,i,r,o,h,v,k,O,U,A,R){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Qu(t,r,U);var V=(r&62914560)===r?qi-ft():(r&4194048)===r?Ku-ft():0;if(V=xx(U,V),V!==null){ia=r,e.cancelPendingCommit=V(rf.bind(null,e,t,r,a,n,i,o,h,v,O,U,null,A,R)),ka(e,r,o,!k);return}}rf(e,t,r,a,n,i,o,h,v)}function Mp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!pt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~Ps,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-ht(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&sc(e,a,t)}function Li(){return(xe&6)===0?(Tn(0),!1):!0}function no(){if(re!==null){if(ye===0)var e=re.return;else e=re,Jt=Va=null,ys(e),wl=null,cn=0,e=re;for(;e!==null;)ku(e.alternate,e),e=e.return;re=null}}function Ol(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ip(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,no(),ze=e,re=a=Zt(e.current,null),ce=t,ye=0,vt=null,Sa=!1,Cl=Vl(e,t),Is=!1,Rl=yt=Ps=el=za=Me=0,dt=zn=null,eo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ht(n),r=1<<i;t|=e[i],n&=~r}return na=t,si(),a}function Iu(e,t){ae=null,D.H=gn,t===Nl||t===pi?(t=hd(),ye=3):t===os?(t=hd(),ye=4):ye=t===Us?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,re===null&&(Me=1,Ai(e,zt(t,e.current)))}function Pu(){var e=gt.current;return e===null?!0:(ce&4194048)===ce?At===null:(ce&62914560)===ce||(ce&536870912)!==0?e===At:!1}function ef(){var e=D.H;return D.H=gn,e===null?gn:e}function tf(){var e=D.A;return D.A=Cp,e}function Yi(){Me=4,Sa||(ce&4194048)!==ce&&gt.current!==null||(Cl=!0),(za&134217727)===0&&(el&134217727)===0||ze===null||ka(ze,ce,yt,!1)}function io(e,t,a){var n=xe;xe|=2;var i=ef(),r=tf();(ze!==e||ce!==t)&&(Bi=null,Ol(e,t)),t=!1;var o=Me;e:do try{if(ye!==0&&re!==null){var h=re,v=vt;switch(ye){case 8:no(),o=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var k=ye;if(ye=0,vt=null,Dl(e,h,v,k),a&&Cl){o=0;break e}break;default:k=ye,ye=0,vt=null,Dl(e,h,v,k)}}Op(),o=Me;break}catch(O){Iu(e,O)}while(!0);return t&&e.shellSuspendCounter++,Jt=Va=null,xe=n,D.H=i,D.A=r,re===null&&(ze=null,ce=0,si()),o}function Op(){for(;re!==null;)af(re)}function Dp(e,t){var a=xe;xe|=2;var n=ef(),i=tf();ze!==e||ce!==t?(Bi=null,Hi=ft()+500,Ol(e,t)):Cl=Vl(e,t);e:do try{if(ye!==0&&re!==null){t=re;var r=vt;t:switch(ye){case 1:ye=0,vt=null,Dl(e,t,r,1);break;case 2:case 9:if(fd(r)){ye=0,vt=null,lf(t);break}t=function(){ye!==2&&ye!==9||ze!==e||(ye=7),Yt(e)},r.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:fd(r)?(ye=0,vt=null,lf(t)):(ye=0,vt=null,Dl(e,t,r,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var h=re;if(o?Qf(o):h.stateNode.complete){ye=0,vt=null;var v=h.sibling;if(v!==null)re=v;else{var k=h.return;k!==null?(re=k,Gi(k)):re=null}break t}}ye=0,vt=null,Dl(e,t,r,5);break;case 6:ye=0,vt=null,Dl(e,t,r,6);break;case 8:no(),Me=6;break e;default:throw Error(c(462))}}_p();break}catch(O){Iu(e,O)}while(!0);return Jt=Va=null,D.H=n,D.A=i,xe=a,re!==null?0:(ze=null,ce=0,si(),Me)}function _p(){for(;re!==null&&!nh();)af(re)}function af(e){var t=Eu(e.alternate,e,na);e.memoizedProps=e.pendingProps,t===null?Gi(e):re=t}function lf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=yu(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=yu(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:ys(t);default:ku(a,t),t=re=td(t,na),t=Eu(a,t,na)}e.memoizedProps=e.pendingProps,t===null?Gi(e):re=t}function Dl(e,t,a,n){Jt=Va=null,ys(t),wl=null,cn=0;var i=t.return;try{if(wp(e,i,t,a,ce)){Me=1,Ai(e,zt(a,e.current)),re=null;return}}catch(r){if(i!==null)throw re=i,r;Me=1,Ai(e,zt(a,e.current)),re=null;return}t.flags&32768?(fe||n===1?e=!0:Cl||(ce&536870912)!==0?e=!1:(Sa=e=!0,(n===2||n===9||n===3||n===6)&&(n=gt.current,n!==null&&n.tag===13&&(n.flags|=16384))),nf(t,e)):Gi(t)}function Gi(e){var t=e;do{if((t.flags&32768)!==0){nf(t,Sa);return}e=t.return;var a=Ep(t.alternate,t,na);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Me===0&&(Me=5)}function nf(e,t){do{var a=Tp(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Me=6,re=null}function rf(e,t,a,n,i,r,o,h,v){e.cancelPendingCommit=null;do Qi();while(Qe!==0);if((xe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Kr,hh(e,a,r,o,h,v),e===ze&&(re=ze=null,ce=0),Ml=t,Ta=e,ia=a,to=r,ao=i,Ju=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bp(Vn,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=Q.p,Q.p=2,o=xe,xe|=4;try{kp(e,t,a)}finally{xe=o,Q.p=i,D.T=n}}Qe=1,sf(),of(),cf()}}function sf(){if(Qe===1){Qe=0;var e=Ta,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=Q.p;Q.p=2;var i=xe;xe|=4;try{Lu(t,e);var r=bo,o=Zc(e.containerInfo),h=r.focusedElem,v=r.selectionRange;if(o!==h&&h&&h.ownerDocument&&Vc(h.ownerDocument.documentElement,h)){if(v!==null&&Gr(h)){var k=v.start,O=v.end;if(O===void 0&&(O=k),"selectionStart"in h)h.selectionStart=k,h.selectionEnd=Math.min(O,h.value.length);else{var U=h.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var R=A.getSelection(),V=h.textContent.length,W=Math.min(v.start,V),Se=v.end===void 0?W:Math.min(v.end,V);!R.extend&&W>Se&&(o=Se,Se=W,W=o);var S=Xc(h,W),j=Xc(h,Se);if(S&&j&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==j.node||R.focusOffset!==j.offset)){var T=U.createRange();T.setStart(S.node,S.offset),R.removeAllRanges(),W>Se?(R.addRange(T),R.extend(j.node,j.offset)):(T.setEnd(j.node,j.offset),R.addRange(T))}}}}for(U=[],R=h;R=R.parentNode;)R.nodeType===1&&U.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<U.length;h++){var _=U[h];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}tr=!!go,bo=go=null}finally{xe=i,Q.p=n,D.T=a}}e.current=t,Qe=2}}function of(){if(Qe===2){Qe=0;var e=Ta,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=Q.p;Q.p=2;var i=xe;xe|=4;try{_u(e,t.alternate,t)}finally{xe=i,Q.p=n,D.T=a}}Qe=3}}function cf(){if(Qe===4||Qe===3){Qe=0,ih();var e=Ta,t=Ml,a=ia,n=Ju;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ml=Ta=null,df(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ea=null),wr(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=Q.p,Q.p=2,D.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var h=n[o];r(h.value,{componentStack:h.stack})}}finally{D.T=t,Q.p=i}}(ia&3)!==0&&Qi(),Yt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===lo?En++:(En=0,lo=e):En=0,Tn(0)}}function df(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Qi(){return sf(),of(),cf(),uf()}function uf(){if(Qe!==5)return!1;var e=Ta,t=to;to=0;var a=wr(ia),n=D.T,i=Q.p;try{Q.p=32>a?32:a,D.T=null,a=ao,ao=null;var r=Ta,o=ia;if(Qe=0,Ml=Ta=null,ia=0,(xe&6)!==0)throw Error(c(331));var h=xe;if(xe|=4,Vu(r.current),Gu(r,r.current,o,a),xe=h,Tn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xl,r)}catch{}return!0}finally{Q.p=i,D.T=n,df(e,t)}}function ff(e,t,a){t=zt(a,t),t=_s(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(Zl(e,2),Yt(e))}function je(e,t,a){if(e.tag===3)ff(e,e,a);else for(;t!==null;){if(t.tag===3){ff(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ea===null||!Ea.has(n))){e=zt(a,e),a=fu(2),n=ya(t,a,2),n!==null&&(mu(a,n,t,e),Zl(n,2),Yt(n));break}}t=t.return}}function ro(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Rp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Is=!0,i.add(a),e=Up.bind(null,e,t,a),t.then(e,e))}function Up(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ce&a)===a&&(Me===4||Me===3&&(ce&62914560)===ce&&300>ft()-qi?(xe&2)===0&&Ol(e,0):Ps|=a,Rl===ce&&(Rl=0)),Yt(e)}function mf(e,t){t===0&&(t=rc()),e=Ga(e,t),e!==null&&(Zl(e,t),Yt(e))}function qp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),mf(e,a)}function Hp(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),mf(e,a)}function Bp(e,t){return vr(e,t)}var Xi=null,_l=null,so=!1,Vi=!1,oo=!1,Aa=0;function Yt(e){e!==_l&&e.next===null&&(_l===null?Xi=_l=e:_l=_l.next=e),Vi=!0,so||(so=!0,Yp())}function Tn(e,t){if(!oo&&Vi){oo=!0;do for(var a=!1,n=Xi;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,h=n.pingedLanes;r=(1<<31-ht(42|e)+1)-1,r&=i&~(o&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,gf(n,r))}else r=ce,r=Fn(n,n===ze?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Vl(n,r)||(a=!0,gf(n,r));n=n.next}while(a);oo=!1}}function Lp(){hf()}function hf(){Vi=so=!1;var e=0;Aa!==0&&$p()&&(e=Aa);for(var t=ft(),a=null,n=Xi;n!==null;){var i=n.next,r=pf(n,t);r===0?(n.next=null,a===null?Xi=i:a.next=i,i===null&&(_l=a)):(a=n,(e!==0||(r&3)!==0)&&(Vi=!0)),n=i}Qe!==0&&Qe!==5||Tn(e),Aa!==0&&(Aa=0)}function pf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-ht(r),h=1<<o,v=i[o];v===-1?((h&a)===0||(h&n)!==0)&&(i[o]=mh(h,t)):v<=t&&(e.expiredLanes|=h),r&=~h}if(t=ze,a=ce,a=Fn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&yr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&yr(n),wr(a)){case 2:case 8:a=nc;break;case 32:a=Vn;break;case 268435456:a=ic;break;default:a=Vn}return n=xf.bind(null,e),a=vr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&yr(n),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qi()&&e.callbackNode!==a)return null;var n=ce;return n=Fn(e,e===ze?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Wu(e,n,t),pf(e,ft()),e.callbackNode!=null&&e.callbackNode===a?xf.bind(null,e):null)}function gf(e,t){if(Qi())return null;Wu(e,t,!0)}function Yp(){Pp(function(){(xe&6)!==0?vr(lc,Lp):hf()})}function co(){if(Aa===0){var e=yl;e===0&&(e=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),Aa=e}return Aa}function bf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pn(""+e)}function vf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Gp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=bf((i[it]||null).action),o=n.submitter;o&&(t=(t=o[it]||null)?bf(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var h=new li("action","action",null,n,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Aa!==0){var v=o?vf(i,o):new FormData(i);As(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=o?vf(i,o):new FormData(i),As(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var uo=0;uo<Zr.length;uo++){var fo=Zr[uo],Qp=fo.toLowerCase(),Xp=fo[0].toUpperCase()+fo.slice(1);Ot(Qp,"on"+Xp)}Ot(Fc,"onAnimationEnd"),Ot(Wc,"onAnimationIteration"),Ot($c,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(rp,"onTransitionRun"),Ot(sp,"onTransitionStart"),Ot(op,"onTransitionCancel"),Ot(Ic,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kn));function yf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var h=n[o],v=h.instance,k=h.currentTarget;if(h=h.listener,v!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=k;try{r(i)}catch(O){ri(O)}i.currentTarget=null,r=v}else for(o=0;o<n.length;o++){if(h=n[o],v=h.instance,k=h.currentTarget,h=h.listener,v!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=k;try{r(i)}catch(O){ri(O)}i.currentTarget=null,r=v}}}}function se(e,t){var a=t[Sr];a===void 0&&(a=t[Sr]=new Set);var n=e+"__bubble";a.has(n)||(jf(t,e,2,!1),a.add(n))}function mo(e,t,a){var n=0;t&&(n|=4),jf(a,e,n,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[Zi]){e[Zi]=!0,mc.forEach(function(a){a!=="selectionchange"&&(Vp.has(a)||mo(a,!1,e),mo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,mo("selectionchange",!1,t))}}function jf(e,t,a,n){switch(Wf(t)){case 2:var i=vx;break;case 8:i=yx;break;default:i=Ao}a=i.bind(null,t,a,e),i=void 0,!Or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function po(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var h=n.stateNode.containerInfo;if(h===i)break;if(o===4)for(o=n.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;h!==null;){if(o=ll(h),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){n=r=o;continue e}h=h.parentNode}}n=n.return}zc(function(){var k=r,O=Rr(a),U=[];e:{var A=Pc.get(e);if(A!==void 0){var R=li,V=e;switch(e){case"keypress":if(ti(a)===0)break e;case"keydown":case"keyup":R=Hh;break;case"focusin":V="focus",R=qr;break;case"focusout":V="blur",R=qr;break;case"beforeblur":case"afterblur":R=qr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Yh;break;case Fc:case Wc:case $c:R=Ah;break;case Ic:R=Qh;break;case"scroll":case"scrollend":R=Sh;break;case"wheel":R=Vh;break;case"copy":case"cut":case"paste":R=Rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Cc;break;case"toggle":case"beforetoggle":R=Kh}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),S=W?A!==null?A+"Capture":null:A;W=[];for(var j=k,T;j!==null;){var _=j;if(T=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||T===null||S===null||(_=Fl(j,S),_!=null&&W.push(An(j,_,T))),Se)break;j=j.return}0<W.length&&(A=new R(A,V,null,a,O),U.push({event:A,listeners:W}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&a!==Cr&&(V=a.relatedTarget||a.fromElement)&&(ll(V)||V[al]))break e;if((R||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,R?(V=a.relatedTarget||a.toElement,R=k,V=V?ll(V):null,V!==null&&(Se=b(V),W=V.tag,V!==Se||W!==5&&W!==27&&W!==6)&&(V=null)):(R=null,V=k),R!==V)){if(W=kc,_="onMouseLeave",S="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(W=Cc,_="onPointerLeave",S="onPointerEnter",j="pointer"),Se=R==null?A:Jl(R),T=V==null?A:Jl(V),A=new W(_,j+"leave",R,a,O),A.target=Se,A.relatedTarget=T,_=null,ll(O)===k&&(W=new W(S,j+"enter",V,a,O),W.target=T,W.relatedTarget=Se,_=W),Se=_,R&&V)t:{for(W=Zp,S=R,j=V,T=0,_=S;_;_=W(_))T++;_=0;for(var J=j;J;J=W(J))_++;for(;0<T-_;)S=W(S),T--;for(;0<_-T;)j=W(j),_--;for(;T--;){if(S===j||j!==null&&S===j.alternate){W=S;break t}S=W(S),j=W(j)}W=null}else W=null;R!==null&&Nf(U,A,R,W,!1),V!==null&&Se!==null&&Nf(U,Se,V,W,!0)}}e:{if(A=k?Jl(k):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var me=Hc;else if(Uc(A))if(Bc)me=lp;else{me=tp;var K=ep}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?k&&Ar(k.elementType)&&(me=Hc):me=ap;if(me&&(me=me(e,k))){qc(U,me,a,O);break e}K&&K(e,A,k),e==="focusout"&&k&&A.type==="number"&&k.memoizedProps.value!=null&&kr(A,"number",A.value)}switch(K=k?Jl(k):window,e){case"focusin":(Uc(K)||K.contentEditable==="true")&&(fl=K,Qr=k,ln=null);break;case"focusout":ln=Qr=fl=null;break;case"mousedown":Xr=!0;break;case"contextmenu":case"mouseup":case"dragend":Xr=!1,Kc(U,a,O);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":Kc(U,a,O)}var le;if(Br)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else ul?Dc(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Rc&&a.locale!=="ko"&&(ul||de!=="onCompositionStart"?de==="onCompositionEnd"&&ul&&(le=Ec()):(ma=O,Dr="value"in ma?ma.value:ma.textContent,ul=!0)),K=Ki(k,de),0<K.length&&(de=new Ac(de,e,null,a,O),U.push({event:de,listeners:K}),le?de.data=le:(le=_c(a),le!==null&&(de.data=le)))),(le=Fh?Wh(e,a):$h(e,a))&&(de=Ki(k,"onBeforeInput"),0<de.length&&(K=new Ac("onBeforeInput","beforeinput",null,a,O),U.push({event:K,listeners:de}),K.data=le)),Gp(U,e,k,a,O)}yf(U,t)})}function An(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ki(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Fl(e,a),i!=null&&n.unshift(An(e,i,r)),i=Fl(e,t),i!=null&&n.push(An(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Zp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var h=a,v=h.alternate,k=h.stateNode;if(h=h.tag,v!==null&&v===n)break;h!==5&&h!==26&&h!==27||k===null||(v=k,i?(k=Fl(a,r),k!=null&&o.unshift(An(a,k,v))):i||(k=Fl(a,r),k!=null&&o.push(An(a,k,v)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Kp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function wf(e){return(typeof e=="string"?e:""+e).replace(Kp,`
`).replace(Jp,"")}function Sf(e,t){return t=wf(t),wf(e)===t}function we(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||ol(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&ol(e,""+n);break;case"className":$n(e,"class",n);break;case"tabIndex":$n(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,n);break;case"style":wc(e,n,r);break;case"data":if(t!=="object"){$n(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Pn(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",i.name,i,null),we(e,t,"formEncType",i.formEncType,i,null),we(e,t,"formMethod",i.formMethod,i,null),we(e,t,"formTarget",i.formTarget,i,null)):(we(e,t,"encType",i.encType,i,null),we(e,t,"method",i.method,i,null),we(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Pn(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Pn(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":se("beforetoggle",e),se("toggle",e),Wn(e,"popover",n);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Wn(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nh.get(a)||a,Wn(e,a,n))}}function xo(e,t,a,n,i,r){switch(a){case"style":wc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?ol(e,n):(typeof n=="number"||typeof n=="bigint")&&ol(e,""+n);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[it]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Wn(e,a,n)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,r,o,a,null)}}i&&we(e,t,"srcSet",a.srcSet,a,null),n&&we(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var h=r=o=i=null,v=null,k=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":i=O;break;case"type":o=O;break;case"checked":v=O;break;case"defaultChecked":k=O;break;case"value":r=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:we(e,t,n,O,a,null)}}vc(e,r,h,v,k,o,i,!1);return;case"select":se("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":o=h;break;case"multiple":n=h;default:we(e,t,i,h,a,null)}t=r,a=o,e.multiple=!!n,t!=null?sl(e,!!n,t,!1):a!=null&&sl(e,!!n,a,!0);return;case"textarea":se("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(h=a[o],h!=null))switch(o){case"value":n=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:we(e,t,o,h,a,null)}jc(e,n,i,r);return;case"option":for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!=null)&&(v==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":we(e,t,v,n,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(n=0;n<kn.length;n++)se(kn[n],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(n=a[k],n!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,k,n,a,null)}return;default:if(Ar(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&xo(e,t,O,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&we(e,t,h,n,a,null))}function Fp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,h=null,v=null,k=null,O=null;for(R in a){var U=a[R];if(a.hasOwnProperty(R)&&U!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=U;default:n.hasOwnProperty(R)||we(e,t,R,null,n,U)}}for(var A in n){var R=n[A];if(U=a[A],n.hasOwnProperty(A)&&(R!=null||U!=null))switch(A){case"type":r=R;break;case"name":i=R;break;case"checked":k=R;break;case"defaultChecked":O=R;break;case"value":o=R;break;case"defaultValue":h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==U&&we(e,t,A,R,n,U)}}Tr(e,o,h,v,k,O,r,i);return;case"select":R=o=h=A=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":R=v;default:n.hasOwnProperty(r)||we(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":A=r;break;case"defaultValue":h=r;break;case"multiple":o=r;default:r!==v&&we(e,t,i,r,n,v)}t=h,a=o,n=R,A!=null?sl(e,!!a,A,!1):!!n!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":R=A=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:we(e,t,h,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":A=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&we(e,t,o,i,n,r)}yc(e,A,R);return;case"option":for(var V in a)A=a[V],a.hasOwnProperty(V)&&A!=null&&!n.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:we(e,t,V,null,n,A));for(v in n)A=n[v],R=a[v],n.hasOwnProperty(v)&&A!==R&&(A!=null||R!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":we(e,t,v,A,n,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!n.hasOwnProperty(W)&&we(e,t,W,null,n,A);for(k in n)if(A=n[k],R=a[k],n.hasOwnProperty(k)&&A!==R&&(A!=null||R!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:we(e,t,k,A,n,R)}return;default:if(Ar(t)){for(var Se in a)A=a[Se],a.hasOwnProperty(Se)&&A!==void 0&&!n.hasOwnProperty(Se)&&xo(e,t,Se,void 0,n,A);for(O in n)A=n[O],R=a[O],!n.hasOwnProperty(O)||A===R||A===void 0&&R===void 0||xo(e,t,O,A,n,R);return}}for(var S in a)A=a[S],a.hasOwnProperty(S)&&A!=null&&!n.hasOwnProperty(S)&&we(e,t,S,null,n,A);for(U in n)A=n[U],R=a[U],!n.hasOwnProperty(U)||A===R||A==null&&R==null||we(e,t,U,A,n,R)}function zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,o=i.initiatorType,h=i.duration;if(r&&h&&zf(o)){for(o=0,h=i.responseEnd,n+=1;n<a.length;n++){var v=a[n],k=v.startTime;if(k>h)break;var O=v.transferSize,U=v.initiatorType;O&&zf(U)&&(v=v.responseEnd,o+=O*(v<h?1:(h-k)/(v-k)))}if(--n,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var go=null,bo=null;function Ji(e){return e.nodeType===9?e:e.ownerDocument}function Ef(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=null;function $p(){var e=window.event;return e&&e.type==="popstate"?e===yo?!1:(yo=e,!0):(yo=null,!1)}var kf=typeof setTimeout=="function"?setTimeout:void 0,Ip=typeof clearTimeout=="function"?clearTimeout:void 0,Af=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof Af<"u"?function(e){return Af.resolve(null).then(e).catch(ex)}:kf;function ex(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Cf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Bl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cn(a);for(var r=a.firstChild;r;){var o=r.nextSibling,h=r.nodeName;r[Kl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Cn(e.ownerDocument.body);a=i}while(a);Bl(t)}function Rf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jo(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tx(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ct(e.nextSibling),e===null)break}return null}function ax(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ct(e.nextSibling),e===null))return null;return e}function Mf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ct(e.nextSibling),e===null))return null;return e}function No(e){return e.data==="$?"||e.data==="$~"}function wo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lx(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var So=null;function Of(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ct(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function _f(e,t,a){switch(t=Ji(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Cn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zr(e)}var Rt=new Map,Uf=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=Q.d;Q.d={f:nx,r:ix,D:rx,C:sx,L:ox,m:cx,X:ux,S:dx,M:fx};function nx(){var e=ra.f(),t=Li();return e||t}function ix(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?Id(t):ra.r(e)}var Ul=typeof document>"u"?null:document;function qf(e,t,a){var n=Ul;if(n&&typeof t=="string"&&t){var i=wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Uf.has(i)||(Uf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),$e(t,"link",e),Xe(t),n.head.appendChild(t)))}}function rx(e){ra.D(e),qf("dns-prefetch",e,null)}function sx(e,t){ra.C(e,t),qf("preconnect",e,t)}function ox(e,t,a){ra.L(e,t,a);var n=Ul;if(n&&e&&t){var i='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+wt(a.imageSizes)+'"]')):i+='[href="'+wt(e)+'"]';var r=i;switch(t){case"style":r=ql(e);break;case"script":r=Hl(e)}Rt.has(r)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Rn(r))||t==="script"&&n.querySelector(Mn(r))||(t=n.createElement("link"),$e(t,"link",e),Xe(t),n.head.appendChild(t)))}}function cx(e,t){ra.m(e,t);var a=Ul;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+wt(n)+'"][href="'+wt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Hl(e)}if(!Rt.has(r)&&(e=g({rel:"modulepreload",href:e},t),Rt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(r)))return}n=a.createElement("link"),$e(n,"link",e),Xe(n),a.head.appendChild(n)}}}function dx(e,t,a){ra.S(e,t,a);var n=Ul;if(n&&e){var i=il(n).hoistableStyles,r=ql(e);t=t||"default";var o=i.get(r);if(!o){var h={loading:0,preload:null};if(o=n.querySelector(Rn(r)))h.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(r))&&zo(e,a);var v=o=n.createElement("link");Xe(v),$e(v,"link",e),v._p=new Promise(function(k,O){v.onload=k,v.onerror=O}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Wi(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:h},i.set(r,o)}}}function ux(e,t){ra.X(e,t);var a=Ul;if(a&&e){var n=il(a).hoistableScripts,i=Hl(e),r=n.get(i);r||(r=a.querySelector(Mn(i)),r||(e=g({src:e,async:!0},t),(t=Rt.get(i))&&Eo(e,t),r=a.createElement("script"),Xe(r),$e(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function fx(e,t){ra.M(e,t);var a=Ul;if(a&&e){var n=il(a).hoistableScripts,i=Hl(e),r=n.get(i);r||(r=a.querySelector(Mn(i)),r||(e=g({src:e,async:!0,type:"module"},t),(t=Rt.get(i))&&Eo(e,t),r=a.createElement("script"),Xe(r),$e(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Hf(e,t,a,n){var i=(i=ie.current)?Fi(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ql(a.href),a=il(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ql(a.href);var r=il(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(Rn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),r||mx(i,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=il(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ql(e){return'href="'+wt(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function Bf(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function mx(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),$e(t,"link",a),Xe(t),e.head.appendChild(t))}function Hl(e){return'[src="'+wt(e)+'"]'}function Mn(e){return"script[async]"+e}function Lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(n)return t.instance=n,Xe(n),n;var i=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),$e(n,"style",i),Wi(n,a.precedence,e),t.instance=n;case"stylesheet":i=ql(a.href);var r=e.querySelector(Rn(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;n=Bf(a),(i=Rt.get(i))&&zo(n,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var o=r;return o._p=new Promise(function(h,v){o.onload=h,o.onerror=v}),$e(r,"link",n),t.state.loading|=4,Wi(r,a.precedence,e),t.instance=r;case"script":return r=Hl(a.src),(i=e.querySelector(Mn(r)))?(t.instance=i,Xe(i),i):(n=a,(i=Rt.get(r))&&(n=g({},a),Eo(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),$e(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Wi(n,a.precedence,e));return t.instance}function Wi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var h=n[o];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $i=null;function Yf(e,t,a){if($i===null){var n=new Map,i=$i=new Map;i.set(a,n)}else i=$i,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Kl]||r[Ke]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var h=n.get(o);h?h.push(r):n.set(o,[r])}}return n}function Gf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function hx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function px(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=ql(n.href),r=t.querySelector(Rn(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Xe(r);return}r=t.ownerDocument||t,n=Bf(n),(i=Rt.get(i))&&zo(n,i),r=r.createElement("link"),Xe(r);var o=r;o._p=new Promise(function(h,v){o.onload=h,o.onerror=v}),$e(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ii.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var To=0;function xx(e,t){return e.stylesheets&&e.count===0&&er(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&er(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&To===0&&(To=62500*Wp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&er(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>To?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Ii(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)er(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pi=null;function er(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pi=new Map,t.forEach(gx,e),Pi=null,Ii.call(e))}function gx(e,t){if(!(t.state.loading&4)){var a=Pi.get(e);if(a)var n=a.get(null);else{a=new Map,Pi.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=Ii.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var On={$$typeof:Y,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function bx(e,t,a,n,i,r,o,h,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.hiddenUpdates=jr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Xf(e,t,a,n,i,r,o,h,v,k,O,U){return e=new bx(e,t,a,o,v,k,O,U,h),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=is(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},cs(r),e}function Vf(e){return e?(e=pl,e):pl}function Zf(e,t,a,n,i,r){i=Vf(i),n.context===null?n.context=i:n.pendingContext=i,n=va(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ya(e,n,t),a!==null&&(ut(a,e,t),un(a,e,t))}function Kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ko(e,t){Kf(e,t),(e=e.alternate)&&Kf(e,t)}function Jf(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ut(t,e,67108864),ko(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var t=jt();t=Nr(t);var a=Ga(e,t);a!==null&&ut(a,e,t),ko(e,t)}}var tr=!0;function vx(e,t,a,n){var i=D.T;D.T=null;var r=Q.p;try{Q.p=2,Ao(e,t,a,n)}finally{Q.p=r,D.T=i}}function yx(e,t,a,n){var i=D.T;D.T=null;var r=Q.p;try{Q.p=8,Ao(e,t,a,n)}finally{Q.p=r,D.T=i}}function Ao(e,t,a,n){if(tr){var i=Co(n);if(i===null)po(e,t,n,ar,a),$f(e,n);else if(Nx(i,e,t,a,n))n.stopPropagation();else if($f(e,n),t&4&&-1<jx.indexOf(e)){for(;i!==null;){var r=nl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=qa(r.pendingLanes);if(o!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;o;){var v=1<<31-ht(o);h.entanglements[1]|=v,o&=~v}Yt(r),(xe&6)===0&&(Hi=ft()+500,Tn(0))}}break;case 31:case 13:h=Ga(r,2),h!==null&&ut(h,r,2),Li(),ko(r,2)}if(r=Co(n),r===null&&po(e,t,n,ar,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else po(e,t,n,null,a)}}function Co(e){return e=Rr(e),Ro(e)}var ar=null;function Ro(e){if(ar=null,e=ll(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ar=e,null}function Wf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rh()){case lc:return 2;case nc:return 8;case Vn:case sh:return 32;case ic:return 268435456;default:return 32}default:return 32}}var Mo=!1,Ra=null,Ma=null,Oa=null,Dn=new Map,_n=new Map,Da=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function Un(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=nl(t),t!==null&&Jf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nx(e,t,a,n,i){switch(t){case"focusin":return Ra=Un(Ra,e,t,a,n,i),!0;case"dragenter":return Ma=Un(Ma,e,t,a,n,i),!0;case"mouseover":return Oa=Un(Oa,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Dn.set(r,Un(Dn.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,_n.set(r,Un(_n.get(r)||null,e,t,a,n,i)),!0}return!1}function If(e){var t=ll(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,uc(e.priority,function(){Ff(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,uc(e.priority,function(){Ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Co(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Cr=n,a.target.dispatchEvent(n),Cr=null}else return t=nl(a),t!==null&&Jf(t),e.blockedOn=a,!1;t.shift()}return!0}function Pf(e,t,a){lr(e)&&a.delete(t)}function wx(){Mo=!1,Ra!==null&&lr(Ra)&&(Ra=null),Ma!==null&&lr(Ma)&&(Ma=null),Oa!==null&&lr(Oa)&&(Oa=null),Dn.forEach(Pf),_n.forEach(Pf)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wx)))}var ir=null;function em(e){ir!==e&&(ir=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ir===e&&(ir=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Ro(n||a)===null)continue;break}var r=nl(a);r!==null&&(e.splice(t,3),t-=3,As(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Bl(e){function t(v){return nr(v,e)}Ra!==null&&nr(Ra,e),Ma!==null&&nr(Ma,e),Oa!==null&&nr(Oa,e),Dn.forEach(t),_n.forEach(t);for(var a=0;a<Da.length;a++){var n=Da[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)If(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[it]||null;if(typeof r=="function")o||em(a);else if(o){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[it]||null)h=o.formAction;else if(Ro(i)!==null)continue}else h=o.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),em(a)}}}function tm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Oo(e){this._internalRoot=e}rr.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=jt();Zf(a,n,e,t,null,null)},rr.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zf(e.current,2,null,e,null,null),Li(),t[al]=null}};function rr(e){this._internalRoot=e}rr.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&If(e)}};var am=u.version;if(am!=="19.2.3")throw Error(c(527,am,"19.2.3"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=f(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Sx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Xl=sr.inject(Sx),mt=sr}catch{}}return Hn.createRoot=function(e,t){if(!x(e))throw Error(c(299));var a=!1,n="",i=ou,r=cu,o=du;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xf(e,1,!1,null,null,a,n,null,i,r,o,tm),e[al]=t.current,ho(e),new Oo(t)},Hn.hydrateRoot=function(e,t,a){if(!x(e))throw Error(c(299));var n=!1,i="",r=ou,o=cu,h=du,v=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Xf(e,1,!0,t,a??null,n,i,v,r,o,h,tm),t.context=Vf(null),a=t.current,n=jt(),n=Nr(n),i=va(n),i.callback=null,ya(a,i,n),a=n,t.current.lanes=a,Zl(t,a),Yt(t),e[al]=t.current,ho(e),new rr(t)},Hn.version="19.2.3",Hn}var fm;function _x(){if(fm)return Uo.exports;fm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Uo.exports=Dx(),Uo.exports}var Ux=_x();var mm="popstate";function qx(s={}){function u(c,x){let{pathname:b,search:y,hash:E}=c.location;return Qo("",{pathname:b,search:y,hash:E},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function d(c,x){return typeof x=="string"?x:Ln(x)}return Bx(u,d,null,s)}function Ae(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Ut(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Hx(){return Math.random().toString(36).substring(2,10)}function hm(s,u){return{usr:s.state,key:s.key,idx:u}}function Qo(s,u,d=null,c){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?Yl(u):u,state:d,key:u&&u.key||c||Hx()}}function Ln({pathname:s="/",search:u="",hash:d=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Yl(s){let u={};if(s){let d=s.indexOf("#");d>=0&&(u.hash=s.substring(d),s=s.substring(0,d));let c=s.indexOf("?");c>=0&&(u.search=s.substring(c),s=s.substring(0,c)),s&&(u.pathname=s)}return u}function Bx(s,u,d,c={}){let{window:x=document.defaultView,v5Compat:b=!1}=c,y=x.history,E="POP",m=null,f=p();f==null&&(f=0,y.replaceState({...y.state,idx:f},""));function p(){return(y.state||{idx:null}).idx}function g(){E="POP";let B=p(),G=B==null?null:B-f;f=B,m&&m({action:E,location:H.location,delta:G})}function w(B,G){E="PUSH";let L=Qo(H.location,B,G);f=p()+1;let Y=hm(L,f),P=H.createHref(L);try{y.pushState(Y,"",P)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;x.location.assign(P)}b&&m&&m({action:E,location:H.location,delta:1})}function C(B,G){E="REPLACE";let L=Qo(H.location,B,G);f=p();let Y=hm(L,f),P=H.createHref(L);y.replaceState(Y,"",P),b&&m&&m({action:E,location:H.location,delta:0})}function M(B){return Lx(B)}let H={get action(){return E},get location(){return s(x,y)},listen(B){if(m)throw new Error("A history only accepts one active listener");return x.addEventListener(mm,g),m=B,()=>{x.removeEventListener(mm,g),m=null}},createHref(B){return u(x,B)},createURL:M,encodeLocation(B){let G=M(B);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:C,go(B){return y.go(B)}};return H}function Lx(s,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(d,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Ln(s);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function jm(s,u,d="/"){return Yx(s,u,d,!1)}function Yx(s,u,d,c){let x=typeof u=="string"?Yl(u):u,b=ca(x.pathname||"/",d);if(b==null)return null;let y=Nm(s);Gx(y);let E=null;for(let m=0;E==null&&m<y.length;++m){let f=Px(b);E=$x(y[m],f,c)}return E}function Nm(s,u=[],d=[],c="",x=!1){let b=(y,E,m=x,f)=>{let p={relativePath:f===void 0?y.path||"":f,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(c)&&m)return;Ae(p.relativePath.startsWith(c),`Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(c.length)}let g=oa([c,p.relativePath]),w=d.concat(p);y.children&&y.children.length>0&&(Ae(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Nm(y.children,u,w,g,m)),!(y.path==null&&!y.index)&&u.push({path:g,score:Fx(g,y.index),routesMeta:w})};return s.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))b(y,E);else for(let m of wm(y.path))b(y,E,!0,m)}),u}function wm(s){let u=s.split("/");if(u.length===0)return[];let[d,...c]=u,x=d.endsWith("?"),b=d.replace(/\?$/,"");if(c.length===0)return x?[b,""]:[b];let y=wm(c.join("/")),E=[];return E.push(...y.map(m=>m===""?b:[b,m].join("/"))),x&&E.push(...y),E.map(m=>s.startsWith("/")&&m===""?"/":m)}function Gx(s){s.sort((u,d)=>u.score!==d.score?d.score-u.score:Wx(u.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var Qx=/^:[\w-]+$/,Xx=3,Vx=2,Zx=1,Kx=10,Jx=-2,pm=s=>s==="*";function Fx(s,u){let d=s.split("/"),c=d.length;return d.some(pm)&&(c+=Jx),u&&(c+=Vx),d.filter(x=>!pm(x)).reduce((x,b)=>x+(Qx.test(b)?Xx:b===""?Zx:Kx),c)}function Wx(s,u){return s.length===u.length&&s.slice(0,-1).every((c,x)=>c===u[x])?s[s.length-1]-u[u.length-1]:0}function $x(s,u,d=!1){let{routesMeta:c}=s,x={},b="/",y=[];for(let E=0;E<c.length;++E){let m=c[E],f=E===c.length-1,p=b==="/"?u:u.slice(b.length)||"/",g=ur({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},p),w=m.route;if(!g&&f&&d&&!c[c.length-1].route.index&&(g=ur({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},p)),!g)return null;Object.assign(x,g.params),y.push({params:x,pathname:oa([b,g.pathname]),pathnameBase:lg(oa([b,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(b=oa([b,g.pathnameBase]))}return y}function ur(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,c]=Ix(s.path,s.caseSensitive,s.end),x=u.match(d);if(!x)return null;let b=x[0],y=b.replace(/(.)\/+$/,"$1"),E=x.slice(1);return{params:c.reduce((f,{paramName:p,isOptional:g},w)=>{if(p==="*"){let M=E[w]||"";y=b.slice(0,b.length-M.length).replace(/(.)\/+$/,"$1")}const C=E[w];return g&&!C?f[p]=void 0:f[p]=(C||"").replace(/%2F/g,"/"),f},{}),pathname:b,pathnameBase:y,pattern:s}}function Ix(s,u=!1,d=!0){Ut(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],x="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,m)=>(c.push({paramName:E,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),x+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?x+="\\/*$":s!==""&&s!=="/"&&(x+="(?:(?=\\/|$))"),[new RegExp(x,u?void 0:"i"),c]}function Px(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ut(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function ca(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,c=s.charAt(d);return c&&c!=="/"?null:s.slice(d)||"/"}var Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eg=s=>Sm.test(s);function tg(s,u="/"){let{pathname:d,search:c="",hash:x=""}=typeof s=="string"?Yl(s):s,b;if(d)if(eg(d))b=d;else{if(d.includes("//")){let y=d;d=d.replace(/\/\/+/g,"/"),Ut(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${d}`)}d.startsWith("/")?b=xm(d.substring(1),"/"):b=xm(d,u)}else b=u;return{pathname:b,search:ng(c),hash:ig(x)}}function xm(s,u){let d=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(x=>{x===".."?d.length>1&&d.pop():x!=="."&&d.push(x)}),d.length>1?d.join("/"):"/"}function Lo(s,u,d,c){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ag(s){return s.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function zm(s){let u=ag(s);return u.map((d,c)=>c===u.length-1?d.pathname:d.pathnameBase)}function Em(s,u,d,c=!1){let x;typeof s=="string"?x=Yl(s):(x={...s},Ae(!x.pathname||!x.pathname.includes("?"),Lo("?","pathname","search",x)),Ae(!x.pathname||!x.pathname.includes("#"),Lo("#","pathname","hash",x)),Ae(!x.search||!x.search.includes("#"),Lo("#","search","hash",x)));let b=s===""||x.pathname==="",y=b?"/":x.pathname,E;if(y==null)E=d;else{let g=u.length-1;if(!c&&y.startsWith("..")){let w=y.split("/");for(;w[0]==="..";)w.shift(),g-=1;x.pathname=w.join("/")}E=g>=0?u[g]:"/"}let m=tg(x,E),f=y&&y!=="/"&&y.endsWith("/"),p=(b||y===".")&&d.endsWith("/");return!m.pathname.endsWith("/")&&(f||p)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),lg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ng=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ig=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,rg=class{constructor(s,u,d,c=!1){this.status=s,this.statusText=u||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function sg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function og(s){return s.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function km(s,u){let d=s;if(typeof d!="string"||!Sm.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,x=!1;if(Tm)try{let b=new URL(window.location.href),y=d.startsWith("//")?new URL(b.protocol+d):new URL(d),E=ca(y.pathname,u);y.origin===b.origin&&E!=null?d=E+y.search+y.hash:x=!0}catch{Ut(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:x,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Am=["POST","PUT","PATCH","DELETE"];new Set(Am);var cg=["GET",...Am];new Set(cg);var Gl=z.createContext(null);Gl.displayName="DataRouter";var mr=z.createContext(null);mr.displayName="DataRouterState";var dg=z.createContext(!1),Cm=z.createContext({isTransitioning:!1});Cm.displayName="ViewTransition";var ug=z.createContext(new Map);ug.displayName="Fetchers";var fg=z.createContext(null);fg.displayName="Await";var Mt=z.createContext(null);Mt.displayName="Navigation";var Yn=z.createContext(null);Yn.displayName="Location";var Gt=z.createContext({outlet:null,matches:[],isDataRoute:!1});Gt.displayName="Route";var Jo=z.createContext(null);Jo.displayName="RouteError";var Rm="REACT_ROUTER_ERROR",mg="REDIRECT",hg="ROUTE_ERROR_RESPONSE";function pg(s){if(s.startsWith(`${Rm}:${mg}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function xg(s){if(s.startsWith(`${Rm}:${hg}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new rg(u.status,u.statusText,u.data)}catch{}}function gg(s,{relative:u}={}){Ae(Gn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=z.useContext(Mt),{hash:x,pathname:b,search:y}=Qn(s,{relative:u}),E=b;return d!=="/"&&(E=b==="/"?d:oa([d,b])),c.createHref({pathname:E,search:y,hash:x})}function Gn(){return z.useContext(Yn)!=null}function da(){return Ae(Gn(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Yn).location}var Mm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Om(s){z.useContext(Mt).static||z.useLayoutEffect(s)}function Dm(){let{isDataRoute:s}=z.useContext(Gt);return s?Rg():bg()}function bg(){Ae(Gn(),"useNavigate() may be used only in the context of a <Router> component.");let s=z.useContext(Gl),{basename:u,navigator:d}=z.useContext(Mt),{matches:c}=z.useContext(Gt),{pathname:x}=da(),b=JSON.stringify(zm(c)),y=z.useRef(!1);return Om(()=>{y.current=!0}),z.useCallback((m,f={})=>{if(Ut(y.current,Mm),!y.current)return;if(typeof m=="number"){d.go(m);return}let p=Em(m,JSON.parse(b),x,f.relative==="path");s==null&&u!=="/"&&(p.pathname=p.pathname==="/"?u:oa([u,p.pathname])),(f.replace?d.replace:d.push)(p,f.state,f)},[u,d,b,x,s])}var _m=z.createContext(null);function Fo(){return z.useContext(_m)}function vg(s){let u=z.useContext(Gt).outlet;return z.useMemo(()=>u&&z.createElement(_m.Provider,{value:s},u),[u,s])}function Qn(s,{relative:u}={}){let{matches:d}=z.useContext(Gt),{pathname:c}=da(),x=JSON.stringify(zm(d));return z.useMemo(()=>Em(s,JSON.parse(x),c,u==="path"),[s,x,c,u])}function yg(s,u){return Um(s,u)}function Um(s,u,d,c,x){Ae(Gn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=z.useContext(Mt),{matches:y}=z.useContext(Gt),E=y[y.length-1],m=E?E.params:{},f=E?E.pathname:"/",p=E?E.pathnameBase:"/",g=E&&E.route;{let L=g&&g.path||"";Hm(f,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let w=da(),C;if(u){let L=typeof u=="string"?Yl(u):u;Ae(p==="/"||L.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${L.pathname}" was given in the \`location\` prop.`),C=L}else C=w;let M=C.pathname||"/",H=M;if(p!=="/"){let L=p.replace(/^\//,"").split("/");H="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=jm(s,{pathname:H});Ut(g||B!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Ut(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=zg(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:oa([p,b.encodeLocation?b.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:oa([p,b.encodeLocation?b.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),y,d,c,x);return u&&G?z.createElement(Yn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},G):G}function jg(){let s=Cg(),u=sg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",x={padding:"0.5rem",backgroundColor:c},b={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",s),y=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:b},"ErrorBoundary")," or"," ",z.createElement("code",{style:b},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},u),d?z.createElement("pre",{style:x},d):null,y)}var Ng=z.createElement(jg,null),qm=class extends z.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const d=xg(s.digest);d&&(s=d)}let u=s!==void 0?z.createElement(Gt.Provider,{value:this.props.routeContext},z.createElement(Jo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?z.createElement(wg,{error:s},u):u}};qm.contextType=dg;var Yo=new WeakMap;function wg({children:s,error:u}){let{basename:d}=z.useContext(Mt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=pg(u.digest);if(c){let x=Yo.get(u);if(x)throw x;let b=km(c.location,d);if(Tm&&!Yo.get(u))if(b.isExternal||c.reloadDocument)window.location.href=b.absoluteURL||b.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(b.to,{replace:c.replace}));throw Yo.set(u,y),y}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b.absoluteURL||b.to}`})}}return s}function Sg({routeContext:s,match:u,children:d}){let c=z.useContext(Gl);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),z.createElement(Gt.Provider,{value:s},d)}function zg(s,u=[],d=null,c=null,x=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let b=s,y=d?.errors;if(y!=null){let p=b.findIndex(g=>g.route.id&&y?.[g.route.id]!==void 0);Ae(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),b=b.slice(0,Math.min(b.length,p+1))}let E=!1,m=-1;if(d)for(let p=0;p<b.length;p++){let g=b[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:w,errors:C}=d,M=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||M){E=!0,m>=0?b=b.slice(0,m+1):b=[b[0]];break}}}let f=d&&c?(p,g)=>{c(p,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:og(d.matches),errorInfo:g})}:void 0;return b.reduceRight((p,g,w)=>{let C,M=!1,H=null,B=null;d&&(C=y&&g.route.id?y[g.route.id]:void 0,H=g.route.errorElement||Ng,E&&(m<0&&w===0?(Hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,B=null):m===w&&(M=!0,B=g.route.hydrateFallbackElement||null)));let G=u.concat(b.slice(0,w+1)),L=()=>{let Y;return C?Y=H:M?Y=B:g.route.Component?Y=z.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,z.createElement(Sg,{match:g,routeContext:{outlet:p,matches:G,isDataRoute:d!=null},children:Y})};return d&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?z.createElement(qm,{location:d.location,revalidation:d.revalidation,component:H,error:C,children:L(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:f}):L()},null)}function Wo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(s){let u=z.useContext(Gl);return Ae(u,Wo(s)),u}function Tg(s){let u=z.useContext(mr);return Ae(u,Wo(s)),u}function kg(s){let u=z.useContext(Gt);return Ae(u,Wo(s)),u}function $o(s){let u=kg(s),d=u.matches[u.matches.length-1];return Ae(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function Ag(){return $o("useRouteId")}function Cg(){let s=z.useContext(Jo),u=Tg("useRouteError"),d=$o("useRouteError");return s!==void 0?s:u.errors?.[d]}function Rg(){let{router:s}=Eg("useNavigate"),u=$o("useNavigate"),d=z.useRef(!1);return Om(()=>{d.current=!0}),z.useCallback(async(x,b={})=>{Ut(d.current,Mm),d.current&&(typeof x=="number"?await s.navigate(x):await s.navigate(x,{fromRouteId:u,...b}))},[s,u])}var gm={};function Hm(s,u,d){!u&&!gm[s]&&(gm[s]=!0,Ut(!1,d))}z.memo(Mg);function Mg({routes:s,future:u,state:d,onError:c}){return Um(s,void 0,d,c,u)}function Bm(s){return vg(s.context)}function Ie(s){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Og({basename:s="/",children:u=null,location:d,navigationType:c="POP",navigator:x,static:b=!1,unstable_useTransitions:y}){Ae(!Gn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=s.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:E,navigator:x,static:b,unstable_useTransitions:y,future:{}}),[E,x,b,y]);typeof d=="string"&&(d=Yl(d));let{pathname:f="/",search:p="",hash:g="",state:w=null,key:C="default"}=d,M=z.useMemo(()=>{let H=ca(f,E);return H==null?null:{location:{pathname:H,search:p,hash:g,state:w,key:C},navigationType:c}},[E,f,p,g,w,C,c]);return Ut(M!=null,`<Router basename="${E}"> is not able to match the URL "${f}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:z.createElement(Mt.Provider,{value:m},z.createElement(Yn.Provider,{children:u,value:M}))}function Dg({children:s,location:u}){return yg(Xo(s),u)}function Xo(s,u=[]){let d=[];return z.Children.forEach(s,(c,x)=>{if(!z.isValidElement(c))return;let b=[...u,x];if(c.type===z.Fragment){d.push.apply(d,Xo(c.props.children,b));return}Ae(c.type===Ie,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||b.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=Xo(c.props.children,b)),d.push(y)}),d}var cr="get",dr="application/x-www-form-urlencoded";function hr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function _g(s){return hr(s)&&s.tagName.toLowerCase()==="button"}function Ug(s){return hr(s)&&s.tagName.toLowerCase()==="form"}function qg(s){return hr(s)&&s.tagName.toLowerCase()==="input"}function Hg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Bg(s,u){return s.button===0&&(!u||u==="_self")&&!Hg(s)}var or=null;function Lg(){if(or===null)try{new FormData(document.createElement("form"),0),or=!1}catch{or=!0}return or}var Yg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Go(s){return s!=null&&!Yg.has(s)?(Ut(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dr}"`),null):s}function Gg(s,u){let d,c,x,b,y;if(Ug(s)){let E=s.getAttribute("action");c=E?ca(E,u):null,d=s.getAttribute("method")||cr,x=Go(s.getAttribute("enctype"))||dr,b=new FormData(s)}else if(_g(s)||qg(s)&&(s.type==="submit"||s.type==="image")){let E=s.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||E.getAttribute("action");if(c=m?ca(m,u):null,d=s.getAttribute("formmethod")||E.getAttribute("method")||cr,x=Go(s.getAttribute("formenctype"))||Go(E.getAttribute("enctype"))||dr,b=new FormData(E,s),!Lg()){let{name:f,type:p,value:g}=s;if(p==="image"){let w=f?`${f}.`:"";b.append(`${w}x`,"0"),b.append(`${w}y`,"0")}else f&&b.append(f,g)}}else{if(hr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=cr,c=null,x=dr,y=s}return b&&x==="text/plain"&&(y=b,b=void 0),{action:c,method:d.toLowerCase(),encType:x,formData:b,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Io(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Qg(s,u,d,c){let x=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d?x.pathname.endsWith("/")?x.pathname=`${x.pathname}_.${c}`:x.pathname=`${x.pathname}.${c}`:x.pathname==="/"?x.pathname=`_root.${c}`:u&&ca(x.pathname,u)==="/"?x.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:x.pathname=`${x.pathname.replace(/\/$/,"")}.${c}`,x}async function Xg(s,u){if(s.id in u)return u[s.id];try{let d=await import(s.module);return u[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vg(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Zg(s,u,d){let c=await Promise.all(s.map(async x=>{let b=u.routes[x.route.id];if(b){let y=await Xg(b,d);return y.links?y.links():[]}return[]}));return Wg(c.flat(1).filter(Vg).filter(x=>x.rel==="stylesheet"||x.rel==="preload").map(x=>x.rel==="stylesheet"?{...x,rel:"prefetch",as:"style"}:{...x,rel:"prefetch"}))}function bm(s,u,d,c,x,b){let y=(m,f)=>d[f]?m.route.id!==d[f].route.id:!0,E=(m,f)=>d[f].pathname!==m.pathname||d[f].route.path?.endsWith("*")&&d[f].params["*"]!==m.params["*"];return b==="assets"?u.filter((m,f)=>y(m,f)||E(m,f)):b==="data"?u.filter((m,f)=>{let p=c.routes[m.route.id];if(!p||!p.hasLoader)return!1;if(y(m,f)||E(m,f))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(x.pathname+x.search+x.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Kg(s,u,{includeHydrateFallback:d}={}){return Jg(s.map(c=>{let x=u.routes[c.route.id];if(!x)return[];let b=[x.module];return x.clientActionModule&&(b=b.concat(x.clientActionModule)),x.clientLoaderModule&&(b=b.concat(x.clientLoaderModule)),d&&x.hydrateFallbackModule&&(b=b.concat(x.hydrateFallbackModule)),x.imports&&(b=b.concat(x.imports)),b}).flat(1))}function Jg(s){return[...new Set(s)]}function Fg(s){let u={},d=Object.keys(s).sort();for(let c of d)u[c]=s[c];return u}function Wg(s,u){let d=new Set;return new Set(u),s.reduce((c,x)=>{let b=JSON.stringify(Fg(x));return d.has(b)||(d.add(b),c.push({key:b,link:x})),c},[])}function Lm(){let s=z.useContext(Gl);return Io(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function $g(){let s=z.useContext(mr);return Io(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Po=z.createContext(void 0);Po.displayName="FrameworkContext";function Ym(){let s=z.useContext(Po);return Io(s,"You must render this element inside a <HydratedRouter> element"),s}function Ig(s,u){let d=z.useContext(Po),[c,x]=z.useState(!1),[b,y]=z.useState(!1),{onFocus:E,onBlur:m,onMouseEnter:f,onMouseLeave:p,onTouchStart:g}=u,w=z.useRef(null);z.useEffect(()=>{if(s==="render"&&y(!0),s==="viewport"){let H=G=>{G.forEach(L=>{y(L.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return w.current&&B.observe(w.current),()=>{B.disconnect()}}},[s]),z.useEffect(()=>{if(c){let H=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(H)}}},[c]);let C=()=>{x(!0)},M=()=>{x(!1),y(!1)};return d?s!=="intent"?[b,w,{}]:[b,w,{onFocus:Bn(E,C),onBlur:Bn(m,M),onMouseEnter:Bn(f,C),onMouseLeave:Bn(p,M),onTouchStart:Bn(g,C)}]:[!1,w,{}]}function Bn(s,u){return d=>{s&&s(d),d.defaultPrevented||u(d)}}function Pg({page:s,...u}){let{router:d}=Lm(),c=z.useMemo(()=>jm(d.routes,s,d.basename),[d.routes,s,d.basename]);return c?z.createElement(t0,{page:s,matches:c,...u}):null}function e0(s){let{manifest:u,routeModules:d}=Ym(),[c,x]=z.useState([]);return z.useEffect(()=>{let b=!1;return Zg(s,u,d).then(y=>{b||x(y)}),()=>{b=!0}},[s,u,d]),c}function t0({page:s,matches:u,...d}){let c=da(),{future:x,manifest:b,routeModules:y}=Ym(),{basename:E}=Lm(),{loaderData:m,matches:f}=$g(),p=z.useMemo(()=>bm(s,u,f,b,c,"data"),[s,u,f,b,c]),g=z.useMemo(()=>bm(s,u,f,b,c,"assets"),[s,u,f,b,c]),w=z.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let H=new Set,B=!1;if(u.forEach(L=>{let Y=b.routes[L.route.id];!Y||!Y.hasLoader||(!p.some(P=>P.route.id===L.route.id)&&L.route.id in m&&y[L.route.id]?.shouldRevalidate||Y.hasClientLoader?B=!0:H.add(L.route.id))}),H.size===0)return[];let G=Qg(s,E,x.unstable_trailingSlashAwareDataRequests,"data");return B&&H.size>0&&G.searchParams.set("_routes",u.filter(L=>H.has(L.route.id)).map(L=>L.route.id).join(",")),[G.pathname+G.search]},[E,x.unstable_trailingSlashAwareDataRequests,m,c,b,p,u,s,y]),C=z.useMemo(()=>Kg(g,b),[g,b]),M=e0(g);return z.createElement(z.Fragment,null,w.map(H=>z.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...d})),C.map(H=>z.createElement("link",{key:H,rel:"modulepreload",href:H,...d})),M.map(({key:H,link:B})=>z.createElement("link",{key:H,nonce:d.nonce,...B})))}function a0(...s){return u=>{s.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l0&&(window.__reactRouterVersion="7.12.0")}catch{}function n0({basename:s,children:u,unstable_useTransitions:d,window:c}){let x=z.useRef();x.current==null&&(x.current=qx({window:c,v5Compat:!0}));let b=x.current,[y,E]=z.useState({action:b.action,location:b.location}),m=z.useCallback(f=>{d===!1?E(f):z.startTransition(()=>E(f))},[d]);return z.useLayoutEffect(()=>b.listen(m),[b,m]),z.createElement(Og,{basename:s,children:u,location:y.location,navigationType:y.action,navigator:b,unstable_useTransitions:d})}var Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=z.forwardRef(function({onClick:u,discover:d="render",prefetch:c="none",relative:x,reloadDocument:b,replace:y,state:E,target:m,to:f,preventScrollReset:p,viewTransition:g,unstable_defaultShouldRevalidate:w,...C},M){let{basename:H,unstable_useTransitions:B}=z.useContext(Mt),G=typeof f=="string"&&Gm.test(f),L=km(f,H);f=L.to;let Y=gg(f,{relative:x}),[P,ne,ve]=Ig(c,C),$=s0(f,{replace:y,state:E,target:m,preventScrollReset:p,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:w,unstable_useTransitions:B});function I(et){u&&u(et),et.defaultPrevented||$(et)}let ue=z.createElement("a",{...C,...ve,href:L.absoluteURL||Y,onClick:L.isExternal||b?u:I,ref:a0(M,ne),target:m,"data-discover":!G&&d==="render"?"true":void 0});return P&&!G?z.createElement(z.Fragment,null,ue,z.createElement(Pg,{page:Y})):ue});Pe.displayName="Link";var sa=z.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:c="",end:x=!1,style:b,to:y,viewTransition:E,children:m,...f},p){let g=Qn(y,{relative:f.relative}),w=da(),C=z.useContext(mr),{navigator:M,basename:H}=z.useContext(Mt),B=C!=null&&f0(g)&&E===!0,G=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=w.pathname,Y=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;d||(L=L.toLowerCase(),Y=Y?Y.toLowerCase():null,G=G.toLowerCase()),Y&&H&&(Y=ca(Y,H)||Y);const P=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ne=L===G||!x&&L.startsWith(G)&&L.charAt(P)==="/",ve=Y!=null&&(Y===G||!x&&Y.startsWith(G)&&Y.charAt(G.length)==="/"),$={isActive:ne,isPending:ve,isTransitioning:B},I=ne?u:void 0,ue;typeof c=="function"?ue=c($):ue=[c,ne?"active":null,ve?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let et=typeof b=="function"?b($):b;return z.createElement(Pe,{...f,"aria-current":I,className:ue,ref:p,style:et,to:y,viewTransition:E},typeof m=="function"?m($):m)});sa.displayName="NavLink";var i0=z.forwardRef(({discover:s="render",fetcherKey:u,navigate:d,reloadDocument:c,replace:x,state:b,method:y=cr,action:E,onSubmit:m,relative:f,preventScrollReset:p,viewTransition:g,unstable_defaultShouldRevalidate:w,...C},M)=>{let{unstable_useTransitions:H}=z.useContext(Mt),B=d0(),G=u0(E,{relative:f}),L=y.toLowerCase()==="get"?"get":"post",Y=typeof E=="string"&&Gm.test(E),P=ne=>{if(m&&m(ne),ne.defaultPrevented)return;ne.preventDefault();let ve=ne.nativeEvent.submitter,$=ve?.getAttribute("formmethod")||y,I=()=>B(ve||ne.currentTarget,{fetcherKey:u,method:$,navigate:d,replace:x,state:b,relative:f,preventScrollReset:p,viewTransition:g,unstable_defaultShouldRevalidate:w});H&&d!==!1?z.startTransition(()=>I()):I()};return z.createElement("form",{ref:M,method:L,action:G,onSubmit:c?m:P,...C,"data-discover":!Y&&s==="render"?"true":void 0})});i0.displayName="Form";function r0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qm(s){let u=z.useContext(Gl);return Ae(u,r0(s)),u}function s0(s,{target:u,replace:d,state:c,preventScrollReset:x,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:E,unstable_useTransitions:m}={}){let f=Dm(),p=da(),g=Qn(s,{relative:b});return z.useCallback(w=>{if(Bg(w,u)){w.preventDefault();let C=d!==void 0?d:Ln(p)===Ln(g),M=()=>f(s,{replace:C,state:c,preventScrollReset:x,relative:b,viewTransition:y,unstable_defaultShouldRevalidate:E});m?z.startTransition(()=>M()):M()}},[p,f,g,d,c,u,s,x,b,y,E,m])}var o0=0,c0=()=>`__${String(++o0)}__`;function d0(){let{router:s}=Qm("useSubmit"),{basename:u}=z.useContext(Mt),d=Ag(),c=s.fetch,x=s.navigate;return z.useCallback(async(b,y={})=>{let{action:E,method:m,encType:f,formData:p,body:g}=Gg(b,u);if(y.navigate===!1){let w=y.fetcherKey||c0();await c(w,d,y.action||E,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:p,body:g,formMethod:y.method||m,formEncType:y.encType||f,flushSync:y.flushSync})}else await x(y.action||E,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:p,body:g,formMethod:y.method||m,formEncType:y.encType||f,replace:y.replace,state:y.state,fromRouteId:d,flushSync:y.flushSync,viewTransition:y.viewTransition})},[c,x,u,d])}function u0(s,{relative:u}={}){let{basename:d}=z.useContext(Mt),c=z.useContext(Gt);Ae(c,"useFormAction must be used inside a RouteContext");let[x]=c.matches.slice(-1),b={...Qn(s||".",{relative:u})},y=da();if(s==null){b.search=y.search;let E=new URLSearchParams(b.search),m=E.getAll("index");if(m.some(p=>p==="")){E.delete("index"),m.filter(g=>g).forEach(g=>E.append("index",g));let p=E.toString();b.search=p?`?${p}`:""}}return(!s||s===".")&&x.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(b.pathname=b.pathname==="/"?d:oa([d,b.pathname])),Ln(b)}function f0(s,{relative:u}={}){let d=z.useContext(Cm);Ae(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Qm("useViewTransitionState"),x=Qn(s,{relative:u});if(!d.isTransitioning)return!1;let b=ca(d.currentLocation.pathname,c)||d.currentLocation.pathname,y=ca(d.nextLocation.pathname,c)||d.nextLocation.pathname;return ur(x.pathname,y)!=null||ur(x.pathname,b)!=null}const m0=()=>{const s=da(),[u,d]=z.useState(!1),c=z.useRef(null),x=z.useRef(null),b=["/find-my-dog","/kolam","/laundry-tracker","/lobbygate"].some(g=>s.pathname===g||s.pathname.startsWith(g+"/"));z.useEffect(()=>{const g=C=>{c.current&&!c.current.contains(C.target)&&d(!1)},w=C=>{C.key==="Escape"&&d(!1)};return document.addEventListener("mousedown",g),document.addEventListener("touchstart",g,{passive:!0}),document.addEventListener("keydown",w),()=>{document.removeEventListener("mousedown",g),document.removeEventListener("touchstart",g),document.removeEventListener("keydown",w),x.current&&clearTimeout(x.current)}},[]);const y=()=>typeof window>"u"?!1:window.matchMedia("(hover: hover) and (pointer: fine)").matches,E=g=>{g.preventDefault(),g.stopPropagation(),x.current&&clearTimeout(x.current),d(w=>!w)},m=()=>{y()&&(x.current&&clearTimeout(x.current),d(!0))},f=()=>{y()&&(x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{d(!1)},250))},p=()=>{x.current&&clearTimeout(x.current),d(!1)};return l.jsxs("header",{className:"main-header",children:[l.jsxs("div",{className:"container header-content",children:[l.jsxs(sa,{to:"/",className:"brand",children:[l.jsx("img",{src:"/assets/tarsier-logo.svg",alt:"4S - דוד (דידי) ברק",className:"brand-logo"}),l.jsxs("div",{className:"brand-text",children:[l.jsx("span",{className:"brand-name",children:"דוד (דידי) ברק"}),l.jsx("span",{className:"brand-tagline",children:"4S • Smart Solutions for Silly Situations"})]})]}),l.jsxs("nav",{className:"main-nav",children:[l.jsx(sa,{to:"/",className:({isActive:g})=>g?"nav-link active":"nav-link",children:"בית"}),l.jsx(sa,{to:"/find-my-dog",className:({isActive:g})=>g?"nav-link active":"nav-link",children:"FindMyDog"}),l.jsxs("div",{className:"nav-dropdown",ref:c,onMouseEnter:m,onMouseLeave:f,children:[l.jsxs("button",{className:`nav-dropdown-btn ${b?"active":""} ${u?"open":""}`,onClick:E,"aria-expanded":u,"aria-haspopup":"true",type:"button",children:["פרויקטים נבחרים ",l.jsx("span",{className:`arrow ${u?"open":""}`,children:"▼"})]}),l.jsxs("div",{className:`nav-dropdown-content ${u?"show":""}`,children:[l.jsx(sa,{to:"/find-my-dog",onClick:p,className:({isActive:g})=>g?"dropdown-link active":"dropdown-link",children:"FindMyDog"}),l.jsx(sa,{to:"/kolam",onClick:p,className:({isActive:g})=>g?"dropdown-link active":"dropdown-link",children:"קולם (Kolam)"}),l.jsx(sa,{to:"/laundry-tracker",onClick:p,className:({isActive:g})=>g?"dropdown-link active":"dropdown-link",children:"מעקב כביסה"}),l.jsx(sa,{to:"/lobbygate",onClick:p,className:({isActive:g})=>g?"dropdown-link active":"dropdown-link",children:"בקר LobbyGate"})]})]})]})]}),l.jsx("style",{children:`
        .main-header {
          background: #111827;
          color: white;
          padding: 0.9rem 0;
          border-bottom: 2.5px solid #111827;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }
        .brand {
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: white;
          flex-shrink: 0;
        }
        .brand-logo {
          height: 44px;
          width: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fde047;
          box-shadow: 2px 2px 0px #000000;
          transition: transform 0.25s ease;
        }
        .brand:hover .brand-logo {
          transform: scale(1.08) rotate(-4deg);
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }
        .brand-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
        }
        .brand-tagline {
          font-size: 0.75rem;
          color: #fde047;
          font-weight: 600;
          letter-spacing: 0.02em;
          direction: ltr;
          text-align: right;
        }
        .main-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active {
          color: #fde047;
          background: rgba(255,255,255,0.1);
        }
        
        /* Dropdown styling */
        .nav-dropdown {
          position: relative;
          display: inline-block;
        }
        .nav-dropdown-btn {
          background: none;
          border: none;
          color: #94a3b8;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: inherit;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: inherit;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-dropdown-btn:hover, .nav-dropdown-btn.active, .nav-dropdown-btn.open {
          color: #fde047;
          background: rgba(255,255,255,0.1);
        }
        .nav-dropdown-btn .arrow {
          font-size: 0.7rem;
          transition: transform 0.3s;
          display: inline-block;
        }
        .nav-dropdown-btn.open .arrow {
          transform: rotate(180deg);
        }
        .nav-dropdown-content {
          display: none;
          position: absolute;
          background-color: #1e293b;
          min-width: 190px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.4);
          z-index: 1000;
          border-radius: 0.5rem;
          border: 1px solid #334155;
          top: calc(100% + 4px);
          right: 0;
          overflow: hidden;
        }
        /* Bridge element between button and dropdown to prevent hover loss on desktop */
        .nav-dropdown-content::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 10px;
        }
        .nav-dropdown-content.show {
          display: block;
        }
        
        /* Desktop-only hover rules */
        @media (hover: hover) and (pointer: fine) {
          .nav-dropdown:hover .nav-dropdown-content {
            display: block;
          }
          .nav-dropdown:hover .nav-dropdown-btn .arrow {
            transform: rotate(180deg);
          }
        }

        .dropdown-link {
          color: #94a3b8;
          padding: 0.75rem 1rem;
          text-decoration: none;
          display: block;
          transition: all 0.3s;
          text-align: right;
          white-space: nowrap;
          -webkit-tap-highlight-color: rgba(253, 224, 71, 0.2);
        }
        .dropdown-link:hover, .dropdown-link.active {
          color: #fde047;
          background-color: rgba(255,255,255,0.08);
        }

        /* Mobile & Responsive Adaptations */
        @media (max-width: 768px) {
          .main-header {
            padding: 0.65rem 0;
          }
          .header-content {
            flex-direction: column;
            align-items: center;
            gap: 0.65rem;
            padding: 0 0.5rem;
          }
          .brand {
            justify-content: center;
            gap: 0.65rem;
          }
          .brand-logo {
            height: 38px;
            width: 38px;
          }
          .brand-text {
            align-items: center;
            text-align: center;
          }
          .brand-name {
            font-size: 1.05rem;
          }
          .brand-tagline {
            font-size: 0.68rem;
            text-align: center;
          }
          .main-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.4rem;
            width: 100%;
          }
          .nav-link,
          .nav-dropdown-btn {
            padding: 0.42rem 0.75rem;
            font-size: 0.9rem;
          }
          .nav-dropdown-content {
            top: calc(100% + 6px);
            right: auto;
            left: 50%;
            transform: translateX(-50%);
            min-width: 220px;
            max-width: min(320px, calc(100vw - 24px));
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
          .dropdown-link {
            padding: 0.85rem 1.25rem;
            font-size: 0.95rem;
          }
        }
        @media (max-width: 480px) {
          .brand-tagline {
            display: none;
          }
        }
      `})]})},Xm=({isOpen:s,onClose:u})=>{if(!s)return null;const c=`mailto:didi@barak.rocks?subject=${encodeURIComponent("אשמח שתחזור אלי עם פרטים לאחר ביקור באתר שלך")}`;return l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-content",onClick:x=>x.stopPropagation(),children:[l.jsx("button",{className:"modal-close",onClick:u,children:"×"}),l.jsx("h3",{className:"modal-title",children:"צור קשר"}),l.jsxs("div",{className:"contact-details",children:[l.jsx("p",{className:"contact-intro",children:"נשמח לשמוע מכם! ניתן ליצור קשר באחת מהדרכים הבאות:"}),l.jsxs("div",{className:"contact-item",children:[l.jsx("span",{className:"contact-icon",children:"📧"}),l.jsxs("div",{className:"contact-info",children:[l.jsx("span",{className:"contact-label",children:"דואר אלקטרוני:"}),l.jsx("a",{href:c,className:"contact-value email-link",children:"didi@barak.rocks"})]})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("span",{className:"contact-icon",children:"📞"}),l.jsxs("div",{className:"contact-info",children:[l.jsx("span",{className:"contact-label",children:"טלפון נייד:"}),l.jsx("a",{href:"tel:052-8530303",className:"contact-value phone-link",style:{direction:"ltr",textAlign:"right"},children:"052-8530303"})]})]})]}),l.jsx("div",{className:"modal-actions",children:l.jsx("a",{href:c,className:"btn btn-primary w-100 text-center",style:{display:"block",textDecoration:"none"},children:'📬 שלח דוא"ל מהיר'})})]}),l.jsx("style",{children:`
                .modal-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: rgba(15, 23, 42, 0.75);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 10000;
                  backdrop-filter: blur(8px);
                  animation: fadeIn 0.25s ease-out;
                }
                .modal-content {
                  background: #ffffff;
                  color: #0f172a;
                  padding: 2.5rem 2rem;
                  border-radius: 1.25rem;
                  width: 90%;
                  max-width: 450px;
                  position: relative;
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                  border: 1px solid rgba(226, 232, 240, 0.8);
                  text-align: right;
                  direction: rtl;
                }
                .modal-close {
                  position: absolute;
                  top: 1rem;
                  left: 1rem;
                  background: none;
                  border: none;
                  font-size: 1.75rem;
                  cursor: pointer;
                  color: #94a3b8;
                  transition: color 0.2s;
                  padding: 0.25rem;
                  line-height: 1;
                }
                .modal-close:hover {
                  color: #0f172a;
                }
                .modal-title {
                  font-size: 1.75rem;
                  font-weight: 700;
                  color: #0f172a;
                  margin-bottom: 1.5rem;
                  text-align: center;
                }
                .contact-intro {
                  color: #64748b;
                  margin-bottom: 2rem;
                  font-size: 1rem;
                  text-align: center;
                }
                .contact-details {
                  display: flex;
                  flex-direction: column;
                  gap: 1.5rem;
                  margin-bottom: 2.5rem;
                }
                .contact-item {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  padding: 1rem;
                  background: #f8fafc;
                  border-radius: 0.75rem;
                  border: 1px solid #f1f5f9;
                  transition: all 0.2s ease;
                }
                .contact-item:hover {
                  background: #f1f5f9;
                  transform: translateY(-2px);
                }
                .contact-icon {
                  font-size: 1.75rem;
                  background: #ffffff;
                  padding: 0.5rem;
                  border-radius: 50%;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .contact-info {
                  display: flex;
                  flex-direction: column;
                  gap: 0.25rem;
                  width: 100%;
                }
                .contact-label {
                  font-size: 0.8rem;
                  color: #64748b;
                  font-weight: 500;
                }
                .contact-value {
                  font-size: 1.1rem;
                  font-weight: 600;
                  color: #0ea5e9;
                  text-decoration: none;
                  transition: color 0.2s;
                }
                .contact-value:hover {
                  color: #0369a1;
                  text-decoration: underline;
                }
                .modal-actions {
                  margin-top: 1rem;
                }
                .w-100 {
                  width: 100%;
                }
                .text-center {
                  text-align: center;
                }
                
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
              `})]})},h0="0.1.37",p0={version:h0},x0=()=>{const[s,u]=z.useState(!1),d=()=>u(!0);return l.jsxs("div",{className:"main-layout",style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[l.jsx(m0,{}),l.jsx("div",{style:{flex:1},children:l.jsx(Bm,{context:{openContact:d}})}),l.jsx("footer",{className:"global-footer",onClick:d,style:{padding:"1.5rem 1rem",textAlign:"center",backgroundColor:"#ffffff",color:"#111827",borderTop:"2.5px solid #111827",fontSize:"0.88rem",fontWeight:600,transition:"all 0.2s",cursor:"pointer",boxSizing:"border-box",width:"100%",maxWidth:"100%",overflowWrap:"break-word",wordBreak:"break-word"},children:l.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",lineHeight:1.6},children:["4S • Smart Solutions for Silly Situations By [D] | דוד (דידי) ברק © ",new Date().getFullYear()," | גרסה ",p0.version]})}),l.jsx(Xm,{isOpen:s,onClose:()=>u(!1)})]})},vm=({isOpen:s,onClose:u,title:d,content:c})=>s?l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-content",onClick:x=>x.stopPropagation(),children:[l.jsx("button",{className:"modal-close",onClick:u,children:"×"}),l.jsx("h3",{className:"mb-4",children:d}),l.jsx("div",{className:"modal-body text-content",children:c}),l.jsx("button",{className:"btn btn-primary w-100 mt-4",onClick:u,children:"סגור"})]}),l.jsx("style",{children:`
         /* Reusing styles but with specific text styling */
         .text-content {
           line-height: 1.6;
           color: #475569;
         }
         .text-content p {
           margin-bottom: 1rem;
         }
         .mt-4 { margin-top: 2rem; }
      `})]}):null,g0=()=>{const[s,u]=z.useState(null),d=y=>{u(y)},c=()=>{u(null)},x=l.jsxs("div",{children:[l.jsx("p",{children:"ברוכים הבאים ל-FindMyDog."}),l.jsx("p",{children:"המערכת שלנו נועדה לשמש ככלי עזר קהילתי וטכנולוגי לאיתור כלבים אבודים. אנו עושים את מירב המאמצים לספק שירות זמין ואמין, אך חשוב להבהיר:"}),l.jsxs("ul",{style:{paddingRight:"1.5rem",marginBottom:"1rem"},children:[l.jsx("li",{children:"האחריות הבלעדית על הכלב ושלומו חלה על בעלי הכלב בלבד."}),l.jsx("li",{children:"המערכת אינה יכולה להבטיח ב-100% את איתור הכלב במקרה שאבד."}),l.jsx("li",{children:"אנו ממליצים להשתמש בתג שלנו כפתרון משלים לשבב האלקטרוני ולמכשיר איתור GPS פעיל (במידה ויש)."})]}),l.jsx("p",{children:"השימוש במערכת הוא באחריות המשתמש בלבד."})]}),b=l.jsxs("div",{children:[l.jsx("p",{children:"אנו ב-FindMyDog מתייחסים ברצינות רבה לפרטיות שלכם."}),l.jsx("p",{children:"חשוב שתדעו:"}),l.jsxs("ul",{style:{paddingRight:"1.5rem",marginBottom:"1rem"},children:[l.jsx("li",{children:"פרטי הקשר שלכם (טלפון/דואל) במידה ותעבירו ביצירת קשר מהאתר אנו נשמור בצורה מאובטחת. אין במערכת פרטים אישים להוציא כתובת המייל שדרכה הזדהיתם בתהליך הרישום."}),l.jsx("li",{children:"העקרון המנחה במערכת שסריקת תג הכלב אינו חושף את הפרטים שלכם והדיווח אנונימי לחלוטין גם במקרה של משלוח פרטי GPS הכלב שנמצא."}),l.jsx("li",{children:"בחלון ההתכתבויות אתם יכולים להעביר לבעלים פרטים נוספים רק במידה ותרצו בכך."}),l.jsx("li",{children:"אנו לא מוכרים את המידע שלכם לצד שלישי ולא עושים בו שימוש לצרכים שאינם קשורים לשירות."})]})]});return l.jsxs("footer",{className:"footer-neo",dir:"rtl",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand-col",children:[l.jsx("a",{href:"https://findmydog.app",target:"_blank",rel:"noopener noreferrer",className:"footer-brand-link",children:l.jsx("img",{src:"/assets/logo.png",alt:"FindMyDog",className:"footer-logo"})}),l.jsx("p",{className:"footer-tagline",children:"הדרך המהירה, הבטוחה והפשוטה ביותר להחזיר את החבר הכי טוב הביתה. ללא צורך באפליקציה למאתר, עם התראת GPS מיידית ושמירה מלאה על פרטיות הבעלים."}),l.jsx("div",{className:"footer-barak-badge",children:l.jsxs("span",{children:["פותח בגאווה ע״י ",l.jsx("strong",{children:"ברק פתרונות מבריקים"})]})})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"משאבים וכלים 🐾"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/ambassador",className:"footer-link",children:"🎁 תוכנית שגרירים (תג חינם)"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/shop",className:"footer-link",children:"🛍️ חנות התגים החכמים"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/biometric-scan",className:"footer-link",children:"🧬 סורק פנים ביומטרי AI"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/flyer",className:"footer-link",children:"📄 מחולל פלייר איתור להדפסה"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/install",className:"footer-link",children:"📲 התקנת אפליקציה למכשיר (PWA)"})})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"קהילה ושותפים 🏥"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/partners",className:"footer-link",children:"🩺 וטרינרים וחנויות חיות"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/family",className:"footer-link",children:"👨‍👩‍👧‍👦 שיתוף משפחתי ומניעת גניבות"})}),l.jsx("li",{children:l.jsx(Pe,{to:"/find-my-dog/community",className:"footer-link",children:"🌐 רשת חילוץ קהילתית שכונתית"})}),l.jsx("li",{children:l.jsx("a",{href:"/assets/Fullpresentation.pdf",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"📑 מצגת הפרויקט המלאה (PDF)"})})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-col-title",children:"שירות ותמיכה 💬"}),l.jsxs("ul",{className:"footer-nav-list",children:[l.jsx("li",{children:l.jsx("button",{type:"button",className:"footer-btn-link",onClick:()=>d("contact"),children:"✉️ יצירת קשר ושירות לקוחות"})}),l.jsx("li",{children:l.jsx("button",{type:"button",className:"footer-btn-link",onClick:()=>d("privacy"),children:"🔒 מדיניות פרטיות"})}),l.jsx("li",{children:l.jsx("button",{type:"button",className:"footer-btn-link",onClick:()=>d("terms"),children:"📜 תנאי שימוש"})})]})]})]}),l.jsxs("div",{className:"footer-bottom-strip",children:[l.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," FindMyDog. כל הזכויות שמורות."]}),l.jsxs("div",{className:"footer-trust-chips",children:[l.jsx("span",{className:"ft-chip",children:"🔒 מאובטח בענן SSL"}),l.jsx("span",{className:"ft-chip",children:"🇮🇱 פיתוח כחול-לבן"})]})]})]}),l.jsx(Xm,{isOpen:s==="contact",onClose:c}),l.jsx(vm,{isOpen:s==="terms",onClose:c,title:"תנאי שימוש",content:x}),l.jsx(vm,{isOpen:s==="privacy",onClose:c,title:"מדיניות פרטיות",content:b}),l.jsx("style",{children:`
        .footer-neo {
          background: #ffffff;
          border-top: 2.5px solid #111827;
          padding: 4rem 0 2rem;
          color: #111827;
          font-family: inherit;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }
        .footer-logo {
          height: 44px;
          margin-bottom: 1.25rem;
          max-width: 180px;
          object-fit: contain;
        }
        .footer-tagline {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 1.25rem;
        }
        .footer-barak-badge {
          display: inline-block;
          background: #fdfbf7;
          border: 1.5px solid #111827;
          border-radius: 6px;
          padding: 0.4rem 0.75rem;
          font-size: 0.82rem;
          color: #111827;
          align-self: flex-start;
          box-shadow: 2px 2px 0px #111827;
        }

        .footer-col-title {
          font-size: 1.05rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1.25rem;
          border-bottom: 2px solid #fef08a;
          display: inline-block;
          padding-bottom: 0.25rem;
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link,
        .footer-btn-link {
          text-decoration: none;
          color: #4b5563;
          font-size: 0.92rem;
          font-weight: 600;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: right;
          font-family: inherit;
          transition: all 0.15s ease;
        }
        .footer-link:hover,
        .footer-btn-link:hover {
          color: #0284c7;
          transform: translateX(-3px);
        }

        .footer-bottom-strip {
          border-top: 1.5px solid #e2e8f0;
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }
        .footer-trust-chips {
          display: flex;
          gap: 0.6rem;
        }
        .ft-chip {
          background: #f1f5f9;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-strip {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})},ec=({isOpen:s,onClose:u,initialProduct:d=""})=>{const[c,x]=z.useState({name:"",contact:"",source:"",betaProgram:!1,area:"",product:d}),[b,y]=z.useState(!1),[E,m]=z.useState(!1),[f,p]=z.useState("");if(De.useEffect(()=>{s&&(x(C=>({...C,product:d})),m(!1),y(!1),p(""))},[s,d]),!s)return null;const g=C=>{const{name:M,value:H,type:B,checked:G}=C.target;x(L=>({...L,[M]:B==="checkbox"?G:H}))},w=C=>{C.preventDefault(),y(!0),p(""),fetch("https://us-central1-dogfinder-eb6fb.cloudfunctions.net/submitContactForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"order",name:c.name,contact:c.contact,area:c.area,source:c.source,product:c.product,betaProgram:c.betaProgram})}).then(M=>{if(!M.ok)throw new Error("שגיאה בתקשורת עם השרת");return M.json()}).then(M=>{if(!M.success)throw new Error(M.error||"השליחה נכשלה");y(!1),m(!0),x({name:"",contact:"",source:"",betaProgram:!1,area:"",product:""}),setTimeout(()=>{u()},2e3)}).catch(M=>{console.error("Order submission failed:",M),y(!1),p("שגיאה בשליחת הבקשה. יש לנסות שוב מאוחר יותר.")})};return l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[l.jsx("button",{className:"modal-close",onClick:u,children:"×"}),l.jsx("h3",{className:"text-center mb-4",children:"הזמנת תג חכם"}),l.jsx("p",{className:"text-center text-muted mb-4",children:"מלאו את הפרטים ונחזור אליכם בהקדם להשלמת ההזמנה."}),E?l.jsxs("div",{className:"alert alert-success text-center py-4",style:{textAlign:"center",padding:"2rem 1rem"},children:[l.jsx("span",{style:{fontSize:"3rem",display:"block",marginBottom:"1rem"},children:"✓"}),l.jsx("h4",{className:"mb-2",style:{color:"#166534",margin:"0 0 0.5rem 0"},children:"הבקשה נשלחה בהצלחה!"}),l.jsx("p",{className:"text-muted mb-0",style:{color:"#64748b",margin:0},children:"נציג מטעמנו יחזור אליך בהקדם להשלמת ההזמנה."})]}):l.jsxs("form",{onSubmit:w,children:[c.product&&l.jsxs("div",{className:"bg-blue-50 p-3 rounded mb-3",style:{background:"#eff6ff",borderRadius:"0.5rem",padding:"0.75rem",marginBottom:"1rem",border:"1px solid #bfdbfe"},children:[l.jsx("strong",{children:"מוצר נבחר:"})," ",c.product]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"שם מלא *"}),l.jsx("input",{type:"text",name:"name",required:!0,value:c.name,onChange:g,placeholder:"ישראל ישראלי"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"טלפון או מייל ליצירת קשר *"}),l.jsx("input",{type:"text",name:"contact",required:!0,value:c.contact,onChange:g,placeholder:"050-0000000 / example@mail.com"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"אזור מגורים"}),l.jsx("input",{type:"text",name:"area",value:c.area,onChange:g,placeholder:"למשל: תל אביב"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"איך שמעת על הפתרון?"}),l.jsxs("select",{name:"source",value:c.source,onChange:g,children:[l.jsx("option",{value:"",children:"בחר אפשרות..."}),l.jsx("option",{value:"facebook",children:"פייסבוק / אינסטגרם"}),l.jsx("option",{value:"friend",children:"חבר המליץ"}),l.jsx("option",{value:"vet",children:"וטרינר / חנות חיות"}),l.jsx("option",{value:"park",children:"גינת כלבים"}),l.jsx("option",{value:"other",children:"אחר"})]})]}),l.jsxs("div",{className:"form-group checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"betaProgram",name:"betaProgram",checked:c.betaProgram,onChange:g}),l.jsx("label",{htmlFor:"betaProgram",children:"אני מעוניין/ת להשתתף בתוכנית השיפור (Beta) ולקבל עדכונים"})]}),f&&l.jsx("div",{className:"alert alert-danger mb-3",children:f}),l.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",disabled:b,children:b?"שולח...":"שלח בקשה"})]})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          left: 1rem; /* RTL flip */
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #94a3b8;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .form-group input[type="text"],
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-family: inherit;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .checkbox-group label {
          margin-bottom: 0;
          font-weight: normal;
        }
        .checkbox-group input {
          width: 18px;
          height: 18px;
        }
        .w-100 { width: 100%; }
        .mt-3 { margin-top: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-3 { margin-bottom: 1rem; }
        .text-muted { color: #64748b; }
        
        .alert {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.95rem;
        }
        .alert-success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        .alert-danger {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }
      `})]})},b0=()=>{const[s,u]=z.useState(!1),d=Dm(),c=da(),x=b=>{if(c.pathname!=="/find-my-dog")d(`/find-my-dog#${b}`);else{const y=document.getElementById(b);y&&y.scrollIntoView({behavior:"smooth"})}};return l.jsxs("div",{className:"fmd-wrapper",children:[l.jsx("header",{className:"fmd-header",children:l.jsxs("div",{className:"container fmd-header-container",children:[l.jsxs("nav",{className:"fmd-nav",children:[l.jsx(sa,{to:"/find-my-dog",end:!0,className:({isActive:b})=>b?"fmd-link active":"fmd-link",children:"הפתרון 🐶"}),l.jsx("button",{type:"button",onClick:()=>x("how-it-works"),className:"fmd-btn-link",children:"איך זה עובד?"}),l.jsx("button",{type:"button",onClick:()=>x("interactive-scan"),className:"fmd-btn-link",children:"⚡ הדמיית סריקה"}),l.jsx("button",{type:"button",onClick:()=>x("shop-showcase"),className:"fmd-btn-link",children:"חנות תגים"}),l.jsx("button",{type:"button",onClick:()=>x("faq-section"),className:"fmd-btn-link",children:"שאלות נפוצות"})]}),l.jsx("div",{className:"cta-wrapper d-flex align-items-center gap-2",children:l.jsxs("button",{onClick:()=>d("/find-my-dog/ambassador"),className:"btn btn-ambassador-badge",title:"קבלו תג במתנה תמורת משוב קצר",children:[l.jsx("span",{className:"live-indicator ms-1"}),"🎁 תג חינם לשגרירים"]})})]})}),l.jsx("main",{children:l.jsx(Bm,{})}),l.jsx(g0,{}),l.jsx(ec,{isOpen:s,onClose:()=>u(!1)}),l.jsx("style",{children:`
        .fmd-header {
          background: #ffffff;
          border-bottom: 2px solid #111827;
          position: sticky;
          top: 0;
          z-index: 99;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        .fmd-header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.65rem 1.5rem;
          flex-wrap: nowrap;
        }
        
        .fmd-nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-shrink: 0;
        }
        .fmd-link,
        .fmd-btn-link {
          text-decoration: none;
          color: #475569;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .fmd-link:hover,
        .fmd-btn-link:hover,
        .fmd-link.active {
          color: #0284c7;
          background: #f0f9ff;
        }
        .fmd-link.active {
          font-weight: 800;
          border-bottom: 2px solid #0284c7;
          border-radius: 0;
        }

        .cta-wrapper {
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .fmd-header-container { 
            padding: 0.5rem 0.85rem; 
            gap: 0.75rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            max-width: 100%;
          }
          .fmd-nav { gap: 0.65rem; font-size: 0.88rem; }
          .fmd-link, .fmd-btn-link { padding: 0.35rem 0.5rem; font-size: 0.88rem; }
        }

        .btn-ambassador-badge {
          background: #fde047;
          color: #111827;
          font-size: 0.88rem;
          font-weight: 800;
          padding: 0.45rem 1rem;
          border-radius: 6px;
          border: 2px solid #111827;
          box-shadow: 2px 2px 0px #111827;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }
        .btn-ambassador-badge:hover {
          background: #fef08a;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #111827;
        }
        .live-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          animation: blink 1.5s infinite;
        }
        .gap-2 { gap: 0.5rem; }
        .d-flex { display: flex; }
        .align-items-center { align-items: center; }
        .ms-1 { margin-left: 0.35rem; }

        @keyframes blink {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
        }
      `})]})},v0=()=>{const{openContact:s}=Fo();return l.jsxs("div",{className:"brutalist-theme",children:[l.jsxs("div",{className:"container section",style:{maxWidth:"1020px",margin:"0 auto"},children:[l.jsxs("div",{className:"sticker-marquee",children:[l.jsx("span",{className:"sticker sticker-yellow",children:"⚡ VIBE CODING"}),l.jsx("span",{className:"sticker sticker-pink",children:"🖨️ FREECAD 3D PRINTING"}),l.jsx("span",{className:"sticker sticker-cyan",children:"🎛️ ESP32 & HOME ASSISTANT"}),l.jsx("span",{className:"sticker sticker-green",children:"🐒 4S: SMART SOLUTIONS FOR SILLY SITUATIONS"})]}),l.jsx("div",{className:"brutalist-box hero-box",children:l.jsxs("div",{className:"hero-flex",children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("div",{className:"author-tag",children:"דוד (דידי) ברק // ארכיטקט תוכנה, מייקר & ממציא"}),l.jsxs("h1",{className:"brutalist-h1",children:["מכרתי חברת תוכנה גדולה כדי שיהיה לי זמן לבנות ",l.jsx("span",{className:"highlight-marker",children:"דברים שאני באמת אוהב."})]}),l.jsxs("div",{className:"background-story",children:[l.jsx("div",{className:"bg-tag",children:"THE BACKGROUND"}),l.jsx("h2",{className:"bg-title",children:"ממערכות ליבה ארגוניות לחופש היצירה הממוקד"}),l.jsxs("p",{className:"brutalist-p",children:["כמייסד שותף, מנכ״ל וארכיטקט תוכנה ראשי ב",l.jsx("strong",{children:"גילסר טכנולוגיות מידע"}),", הובלתי במשך שנים רבות את התכנון וההטמעה של מערכות WMS, מערכות זמן אמת ורצפת ייצור בארגונים מובילים."]}),l.jsxs("p",{className:"brutalist-p",style:{marginBottom:0},children:["עם רכישת החברה ע״י ",l.jsx("strong",{children:"קומקס (Comax)"}),", פיניתי את מלא המרחב לעשייה טכנולוגית רב-תחומית: שילוב סוכני AI בפיתוח מהיר, תכנון מעגלים סביב ESP32 והדפסה הנדסית מדויקת ב-FreeCAD."]})]}),l.jsxs("div",{className:"brand-callout",dir:"rtl",children:[l.jsxs("div",{className:"callout-pill",children:[l.jsx("span",{children:"המותג:"})," ",l.jsx("strong",{dir:"ltr",children:"4S"})]}),l.jsx("div",{className:"callout-slogan",dir:"ltr",children:"Smart Solutions for Silly Situations By [D]"})]})]}),l.jsxs("div",{className:"mascot-column",children:[l.jsx("div",{className:"speech-bubble",children:'"למה שהמכונת כביסה לא תסמס לך כשהיא מפסיקה לרעוד? 4S פותר בדיוק את זה!"'}),l.jsx("div",{className:"mascot-img-wrap",children:l.jsx("a",{href:"https://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%A4%D7%99%D7%A3",target:"_blank",rel:"noopener noreferrer",className:"mascot-link",title:"לחצו להכרת הקופיף (Tarsier) בוויקיפדיה בעברית",children:l.jsx("img",{src:"/assets/tarsier-logo.svg",alt:"קופיף Tarsier - הכירו בוויקיפדיה",className:"tarsier-mascot-img"})})})]})]})}),l.jsx("div",{className:"brutalist-box photo-box",children:l.jsxs("div",{className:"photo-grid",children:[l.jsxs("div",{className:"photo-frame",children:[l.jsx("img",{src:"/assets/case-blue-4s.jpg",alt:"מארז 4S כחול בהדפסת תלת ממד"}),l.jsx("div",{className:"photo-caption",children:"מארז 4S מודפס ב-PETG עם לוגו מוטבע ישירות מה-FreeCAD"})]}),l.jsxs("div",{className:"photo-frame",children:[l.jsx("img",{src:"/assets/case-gray-4s.jpg",alt:"מארז ממסר 4S אפור"}),l.jsx("div",{className:"photo-caption",children:"בקר ממסר חכם 4S By [D] – תכנון פרמטרי מותאם רכיב"})]})]})}),l.jsxs("div",{style:{marginTop:"3.5rem"},children:[l.jsxs("div",{className:"section-title-wrap",children:[l.jsx("h2",{className:"brutalist-h2",children:"מה יצא מהסדנה שלי לאחרונה?"}),l.jsx("span",{className:"stamp-badge",children:"100% WORKING UNITS"})]}),l.jsxs("div",{className:"brutalist-grid",children:[l.jsxs("div",{className:"brutalist-box project-box card-laundry",children:[l.jsxs("div",{className:"card-header-bar",children:[l.jsx("span",{className:"cat-badge bg-cyan",children:"חומרה & IOT"}),l.jsx("span",{className:"status-dot",children:"● פועל בבית"})]}),l.jsx("h3",{children:"מעקב מחזור כביסה"}),l.jsx("p",{children:"חיישן רעידות אנלוגי מבוסס ESP32 שמתמגנט ישירות למכונת הכביסה. אלגוריתם חכם מזהה מתי נגמר שלב הסחיטה ושולח מייל והתראת פוש – בלי שום ענן צד-שלישי."}),l.jsx(Pe,{to:"/laundry-tracker",className:"btn-brutalist",children:"🚀 הכירו את מעקב הכביסה"})]}),l.jsxs("div",{className:"brutalist-box project-box card-gate",children:[l.jsxs("div",{className:"card-header-bar",children:[l.jsx("span",{className:"cat-badge bg-emerald",children:"BLUETOOTH & 3D"}),l.jsx("span",{className:"status-dot",children:"● פועל בשטח"})]}),l.jsx("h3",{children:"בקר שער LobbyGate"}),l.jsx("p",{children:"למה לחפש שלט או לפתוח אפליקציה? בקר ESP32 שמזהה את הטלפון שלך בכיס בבלוטות' ופותח את השער אוטומטית ברגע שהתקרבת. כולל מארז קיר בעיצוב ייעודי."}),l.jsx(Pe,{to:"/lobbygate",className:"btn-brutalist",children:"🚗 הכירו את LobbyGate"})]}),l.jsxs("div",{className:"brutalist-box project-box card-kolam",children:[l.jsxs("div",{className:"card-header-bar",children:[l.jsx("span",{className:"cat-badge bg-orange",children:"AI & קול"}),l.jsx("span",{className:"status-dot",children:"● שלב בטא"})]}),l.jsx("h3",{children:"קולם (Kolam)"}),l.jsx("p",{children:"מערכת AI להכתבת ביוגרפיה אישית לגיל השלישי. במקום להסתבך עם מקלדות, סבא וסבתא פשוט מדברים – והמערכת מתמללת, עורכת ומסדרת ספר זיכרונות משפחתי."}),l.jsx(Pe,{to:"/kolam",className:"btn-brutalist",children:"🎙️ הכירו את קולם"})]}),l.jsxs("div",{className:"brutalist-box project-box card-fmd",children:[l.jsxs("div",{className:"card-header-bar",children:[l.jsx("span",{className:"cat-badge bg-purple",children:"WEB & GPS"}),l.jsx("span",{className:"status-dot",children:"● בשימוש פעיל"})]}),l.jsx("h3",{children:"FindMyDog.app"}),l.jsx("p",{children:"תג קולר מעוצב עם קוד QR ואיתור GPS מהיר לכלבים אבודים. המוצא סורק בטלפון ללא אפליקציה, והבעלים מקבל מיקום מיידי ושיחה."}),l.jsx(Pe,{to:"/find-my-dog",className:"btn-brutalist",children:"🐶 הכירו את FindMyDog"})]})]})]}),l.jsx("div",{className:"brutalist-box cta-box-brutalist",children:l.jsxs("div",{className:"cta-content",children:[l.jsx("h2",{children:"יש לכם רעיון לפרויקט? בואו נדבר."}),l.jsx("p",{children:"בין אם אתם צריכים ייעוץ בארכיטקטורת תוכנה מורכבת, רוצים לפתח מיזם מהיר ב-Vibe Coding, או מחפשים פתרון חומרה / אוטומציה ביתית שנתפר בדיוק לצרכים שלכם – אני תמיד שמח לשיחה טובה."}),l.jsxs("div",{className:"cta-btn-group",children:[l.jsx("button",{onClick:s,className:"btn-brutalist btn-cta-main",children:"📬 שלח לי הודעה ישירה"}),l.jsx("a",{href:"mailto:didi@barak.rocks",className:"btn-brutalist btn-cta-sub",children:"✉️ didi@barak.rocks"})]})]})})]}),l.jsx("style",{children:`
                .brutalist-theme {
                    background-color: #fdfbf7;
                    color: #111827;
                    font-family: 'Rubik', system-ui, sans-serif;
                    min-height: 100vh;
                    padding-bottom: 5rem;
                }

                .sticker-marquee {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .sticker {
                    display: inline-block;
                    padding: 0.35rem 0.85rem;
                    font-weight: 800;
                    font-size: 0.85rem;
                    border: 2px solid #111827;
                    box-shadow: 3px 3px 0px #111827;
                    border-radius: 4px;
                    transform: rotate(-1.5deg);
                    max-width: 100%;
                    box-sizing: border-box;
                    word-break: break-word;
                    text-align: center;
                }
                .sticker-yellow { background: #fde047; transform: rotate(1deg); }
                .sticker-pink { background: #f472b6; transform: rotate(-2deg); }
                .sticker-cyan { background: #38bdf8; transform: rotate(1.5deg); }
                .sticker-green { background: #86efac; transform: rotate(-1deg); }

                .brutalist-box {
                    background: #ffffff;
                    border: 3px solid #111827;
                    box-shadow: 6px 6px 0px #111827;
                    border-radius: 12px;
                    padding: 2.5rem;
                    margin-bottom: 2.5rem;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .hero-flex {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 2.5rem;
                    align-items: center;
                }

                .author-tag {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0369a1;
                    font-weight: 700;
                    font-size: 0.9rem;
                    padding: 0.3rem 0.75rem;
                    border: 2px solid #111827;
                    border-radius: 6px;
                    box-shadow: 2px 2px 0px #111827;
                    margin-bottom: 1.25rem;
                }

                .brutalist-h1 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    line-height: 1.25;
                    margin-bottom: 1.25rem;
                    color: #111827;
                }

                .highlight-marker {
                    background: #fde047;
                    padding: 0 0.4rem;
                    border-radius: 4px;
                    box-decoration-break: clone;
                    -webkit-box-decoration-break: clone;
                }

                .background-story {
                    margin: 1.5rem 0;
                    padding: 1.25rem 1.5rem;
                    background: #f8fafc;
                    border: 2px dashed #94a3b8;
                    border-radius: 10px;
                }

                .bg-tag {
                    display: inline-block;
                    font-size: 0.8rem;
                    font-weight: 900;
                    color: #2563eb;
                    letter-spacing: 0.08em;
                    margin-bottom: 0.4rem;
                }

                .bg-title {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: #0f172a;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }

                .brutalist-p {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #374151;
                    margin-bottom: 0.85rem;
                }

                .brand-callout {
                    display: inline-flex;
                    align-items: center;
                    gap: 1.25rem;
                    background: #fef08a;
                    border: 2.5px solid #111827;
                    padding: 0.65rem 1.25rem;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0px #111827;
                    direction: rtl;
                    text-align: right;
                    flex-wrap: wrap;
                }
                .callout-pill {
                    background: #111827;
                    color: #fde047;
                    font-weight: 900;
                    padding: 0.35rem 0.85rem;
                    border-radius: 6px;
                    font-size: 1rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    white-space: nowrap;
                    direction: rtl;
                }
                .callout-slogan {
                    font-weight: 800;
                    font-size: 1.1rem;
                    color: #111827;
                    direction: ltr;
                    text-align: left;
                    letter-spacing: 0.01em;
                }

                .mascot-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .speech-bubble {
                    background: #ffffff;
                    border: 2px solid #111827;
                    box-shadow: 3px 3px 0px #111827;
                    padding: 1rem;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #1f2937;
                    position: relative;
                    margin-bottom: 1.25rem;
                }
                .speech-bubble::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 10px solid #111827;
                }
                .mascot-img-wrap {
                    width: 145px;
                    height: 145px;
                    border: 3px solid #111827;
                    border-radius: 50%;
                    box-shadow: 4px 4px 0px #111827;
                    background: #1e293b;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: float 4s ease-in-out infinite;
                }
                .mascot-link {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    text-decoration: none;
                    transition: transform 0.2s ease;
                }
                .mascot-link:hover .tarsier-mascot-img {
                    transform: scale(1.12);
                }
                .tarsier-mascot-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: transform 0.25s ease;
                }

                .photo-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .photo-frame {
                    border: 2px solid #111827;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #f8fafc;
                }
                .photo-frame img {
                    width: 100%;
                    height: 240px;
                    object-fit: cover;
                    border-bottom: 2px solid #111827;
                }
                .photo-caption {
                    padding: 0.6rem 0.8rem;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #475569;
                    background: #ffffff;
                }

                .section-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.75rem;
                }
                .brutalist-h2 {
                    font-size: 2.2rem;
                    font-weight: 900;
                }
                .stamp-badge {
                    background: #22c55e;
                    color: #ffffff;
                    border: 2px solid #111827;
                    font-weight: 900;
                    font-size: 0.8rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    box-shadow: 2px 2px 0px #111827;
                    transform: rotate(2deg);
                }

                .brutalist-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
                    gap: 1.75rem;
                }
                .project-box {
                    padding: 2rem 1.75rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .project-box:hover {
                    transform: translateY(-4px);
                    box-shadow: 8px 8px 0px #111827;
                }
                .card-header-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .cat-badge {
                    font-size: 0.75rem;
                    font-weight: 800;
                    padding: 0.2rem 0.6rem;
                    border: 2px solid #111827;
                    border-radius: 4px;
                }
                .bg-cyan { background: #38bdf8; color: #0f172a; }
                .bg-emerald { background: #6ee7b7; color: #064e3b; }
                .bg-orange { background: #fdba74; color: #7c2d12; }
                .bg-purple { background: #d8b4fe; color: #581c87; }
                .status-dot {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #16a34a;
                }

                .project-box h3 {
                    font-size: 1.45rem;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                }
                .project-box p {
                    font-size: 0.98rem;
                    line-height: 1.65;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }

                .btn-brutalist {
                    display: inline-block;
                    background: #ffffff;
                    color: #111827;
                    font-weight: 800;
                    font-size: 1rem;
                    padding: 0.75rem 1.25rem;
                    border: 2.5px solid #111827;
                    border-radius: 8px;
                    box-shadow: 4px 4px 0px #111827;
                    text-decoration: none;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-brutalist:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                    background: #fef08a;
                }
                .btn-brutalist:active {
                    transform: translate(3px, 3px);
                    box-shadow: 1px 1px 0px #111827;
                }

                .cta-box-brutalist {
                    background: #fde047;
                    margin-top: 4rem;
                    text-align: center;
                }
                .cta-content h2 {
                    font-size: 2.2rem;
                    font-weight: 900;
                    margin-bottom: 1rem;
                }
                .cta-content p {
                    font-size: 1.15rem;
                    max-width: 680px;
                    margin: 0 auto 2rem;
                    color: #1f2937;
                    line-height: 1.7;
                }
                .cta-btn-group {
                    display: flex;
                    justify-content: center;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                }
                .btn-cta-main {
                    background: #111827;
                    color: #ffffff;
                    padding: 0.9rem 2rem;
                }
                .btn-cta-main:hover {
                    background: #2563eb;
                    color: #ffffff;
                }
                .btn-cta-sub {
                    background: #ffffff;
                    padding: 0.9rem 1.75rem;
                }

                @media (max-width: 768px) {
                    .hero-flex { grid-template-columns: 1fr; gap: 1.5rem; }
                    .photo-grid { grid-template-columns: 1fr; }
                    .brutalist-h1 { font-size: 1.85rem; }
                    .brutalist-box { padding: 1.5rem 1.15rem; margin-bottom: 1.75rem; box-shadow: 4px 4px 0px #111827; }
                    .brand-callout { flex-direction: column; align-items: flex-start; gap: 0.75rem; max-width: 100%; box-sizing: border-box; }
                    .callout-slogan { font-size: 0.95rem; word-break: break-word; }
                    .sticker { transform: none !important; font-size: 0.78rem; padding: 0.3rem 0.6rem; }
                    .sticker-marquee { gap: 0.5rem; }
                    .brutalist-grid { grid-template-columns: 1fr; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(3deg); }
                }
            `})]})},y0=()=>{if(typeof window>"u")return{tab:"desktop",os:""};const s=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(s)?{tab:"android",os:"אנדרואיד (Android)"}:/iPad|iPhone|iPod/.test(s)&&!window.MSStream?{tab:"ios",os:"אייפון (iOS)"}:{tab:"desktop",os:"מחשב (PC / Mac)"}},j0=()=>{const[s]=z.useState(y0),[u,d]=z.useState(s.tab),[c]=z.useState(s.os);return l.jsxs("div",{className:"kolam-page",children:[l.jsx("section",{className:"kolam-hero",children:l.jsxs("div",{className:"container hero-grid",children:[l.jsxs("div",{className:"hero-text-content",children:[l.jsx("div",{className:"badge-wrapper",children:l.jsx("span",{className:"kolam-badge",children:"פרויקט נבחר"})}),l.jsx("h1",{className:"hero-title",children:"קולם (Kolam)"}),l.jsx("h2",{className:"hero-subtitle",children:"הכתבת ביוגרפיה קולית מבוססת AI לגיל השלישי"}),l.jsx("p",{className:"hero-desc",children:"מערכת מתקדמת ונגישה המאפשרת להורים, סבים וסבתות לתעד את סיפורי חייהם בקולם ולתרגם אותם באופן מיידי לביוגרפיה כתובה ומעוצבת, ללא כל קושי טכנולוגי."}),l.jsxs("div",{className:"hero-actions",children:[l.jsx("a",{id:"btn-enter-kolam",href:"https://kolam-app.web.app",target:"_blank",rel:"noopener noreferrer",className:"btn btn-kolam-primary",children:"כניסה לאפליקציה החיה 🌐"}),l.jsx("a",{href:"#how-it-works",className:"btn btn-kolam-secondary",children:"איך זה עובד?"})]})]}),l.jsx("div",{className:"hero-media",children:l.jsx("div",{className:"logo-glow-wrapper",children:l.jsx("img",{src:"/assets/kolam-logo.png",alt:"קולם לוגו",className:"kolam-hero-logo"})})})]})}),l.jsx("section",{className:"kolam-features",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title text-center",children:"מדוע קולם?"}),l.jsx("p",{className:"section-subtitle text-center",children:"פתרון שלם ונגיש שנוצר במיוחד כדי לפשט את תהליך התיעוד"}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",id:"feat-accessibility",children:[l.jsx("div",{className:"feature-icon",children:"👵👴"}),l.jsx("h3",{children:"נגישות מלאה"}),l.jsx("p",{children:"ממשק נקי ומזוקק עם גופנים ענקיים (32px), מותאם למשתמשים מבוגרים ומיועד למנוע בלבול או עייפות עיניים."})]}),l.jsxs("div",{className:"feature-card",id:"feat-ai-transcribe",children:[l.jsx("div",{className:"feature-icon",children:"✨🤖"}),l.jsx("h3",{children:"תמלול AI מילולי מדויק"}),l.jsx("p",{children:"אינטגרציה חזקה עם Gemini API המשמרת במדויק (Verbatim) את הסגנון, קצב הדיבור והניסוח המקורי של המספר."})]}),l.jsxs("div",{className:"feature-card",id:"feat-editor",children:[l.jsx("div",{className:"feature-icon",children:"📝✍️"}),l.jsx("h3",{children:"עורך טקסט אינטגרטיבי"}),l.jsx("p",{children:"עריכה ישירה בתוך הדפדפן ללא צורך בכלים חיצוניים. תמיכה מלאה בכתיבה מימין לשמאל (RTL)."})]}),l.jsxs("div",{className:"feature-card",id:"feat-docx",children:[l.jsx("div",{className:"feature-icon",children:"📥📂"}),l.jsx("h3",{children:"ייצוא ל-Microsoft Word"}),l.jsx("p",{children:"ייצוא מהיר בלחיצת כפתור של הסיפורים לקובץ DOCX מעוצב היטב, המותאם ישירות להדפסה או לשיתוף."})]})]})]})}),l.jsx("section",{id:"how-it-works",className:"kolam-how",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title text-center",children:"איך זה עובד?"}),l.jsxs("div",{className:"steps-flow",children:[l.jsxs("div",{className:"step-item",id:"step-1",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsx("h4",{children:"התחברות מאובטחת"}),l.jsx("p",{children:"נכנסים בקלות דרך Google Sign-In לשמירה מלאה על הפרטיות והפרדת הנתונים."})]}),l.jsxs("div",{className:"step-item",id:"step-2",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsx("h4",{children:"לחיצה והקלטה"}),l.jsx("p",{children:"בוחרים סיפור או פותחים סיפור חדש ומקליטים בקול. המערכת דואגת לסנן רעשים."})]}),l.jsxs("div",{className:"step-item",id:"step-3",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsx("h4",{children:"צפייה, עריכה וייצוא"}),l.jsx("p",{children:"הטקסט מתומלל מיד לעורך מוגדל, משם ניתן לערוך אותו ולשמור אותו כקובץ Word מוכן."})]})]})]})}),l.jsx("section",{className:"kolam-install",id:"install-guide",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title text-center",children:"כיצד להתקין כאפליקציה?"}),l.jsxs("p",{className:"section-subtitle text-center",children:["לשימוש נוח ומהיר יותר, ניתן להתקין את קולם ישירות על מסך הבית של הטלפון או המחשב ללא צורך בחנות אפליקציות.",c&&l.jsxs("span",{style:{display:"block",marginTop:"0.75rem",color:"#f5b041",fontWeight:"bold"},children:["מערכת הפעלה שזוהתה: ",c," (ההוראות המתאימות עבורך מוצגות כעת)"]})]}),l.jsxs("div",{className:"install-box",children:[l.jsxs("div",{className:"install-tabs",children:[l.jsx("button",{className:`install-tab-btn ${u==="desktop"?"active":""}`,onClick:()=>d("desktop"),children:"💻 מחשב (PC / Mac)"}),l.jsx("button",{className:`install-tab-btn ${u==="android"?"active":""}`,onClick:()=>d("android"),children:"🤖 אנדרואיד (Android)"}),l.jsx("button",{className:`install-tab-btn ${u==="ios"?"active":""}`,onClick:()=>d("ios"),children:"🍏 אייפון (iOS)"})]}),l.jsxs("div",{className:"install-content",children:[u==="desktop"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על המחשב (Windows / macOS)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"בדפדפן Chrome / Edge:"}),' לחצו על סמל ה-⊕ (התקנה) המופיע בשורת הכתובות בצד שמאל/ימין (או לחצו על שלוש הנקודות בפינה > "התקן את האפליקציה").']}),l.jsxs("li",{children:[l.jsx("strong",{children:"בדפדפן Safari (macOS Sonoma ואילך):"})," פתחו את האתר, לחצו על כפתור השיתוף בסרגל הכלים, ובחרו באפשרות ",l.jsx("strong",{children:'"הוסף ל-Dock"'})," (Add to Dock)."]}),l.jsx("li",{children:"לאחר מכן יתווסף קיצור דרך בשולחן העבודה או ב-Dock, והאפליקציה תיפתח בחלון נפרד ונקי ללא שורת כתובות של דפדפן."})]})]}),u==="android"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על מכשיר אנדרואיד (Android)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["פתחו את האתר בדפדפן ",l.jsx("strong",{children:"Chrome"})," (או בדפדפן המובנה של סמסונג)."]}),l.jsx("li",{children:"לחצו על שלוש הנקודות (תפריט הדפדפן) בפינת המסך."}),l.jsxs("li",{children:["בחרו באפשרות ",l.jsx("strong",{children:'"התקן אפליקציה"'})," (Install app) או ",l.jsx("strong",{children:'"הוסף למסך הבית"'})," (Add to Home screen)."]}),l.jsx("li",{children:"אשרו את הפעולה, והאפליקציה תופיע כקיצור דרך עם הלוגו של קולם במסך הבית שלכם."})]})]}),u==="ios"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על מכשירי אפל (iPhone / iPad)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["פתחו את האתר בדפדפן ",l.jsx("strong",{children:"Safari"})," של אפל."]}),l.jsx("li",{children:"לחצו על כפתור השיתוף 📤 (הריבוע עם החץ שמצביע כלפי מעלה) המופיע בתחתית המסך."}),l.jsx("li",{children:'גללו את תפריט האפשרויות כלפי מטה ולחצו על **"הוסף למסך הבית"** (Add to Home Screen).'}),l.jsx("li",{children:'לחצו על **"הוסף"** (Add) בפינה העליונה. הלוגו של קולם יופיע כעת במסך הבית שלך כאפליקציה עצמאית ומהירה.'})]})]})]})]})]})}),l.jsx("style",{children:`
                .kolam-page {
                    font-family: 'Rubik', system-ui, sans-serif;
                    background-color: #fdfbf7;
                    color: #111827;
                    min-height: 100vh;
                    direction: rtl;
                    padding-bottom: 5rem;
                }

                /* Hero Section */
                .kolam-hero {
                    padding: 4rem 0 3rem;
                }
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.3fr 0.7fr;
                    gap: 3rem;
                    align-items: center;
                }
                .hero-text-content {
                    text-align: right;
                }
                .badge-wrapper {
                    margin-bottom: 1.25rem;
                }
                .kolam-badge {
                    background-color: #fed7aa;
                    color: #9a3412;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    padding: 0.35rem 1rem;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    font-weight: 800;
                    display: inline-block;
                }
                .hero-title {
                    font-size: 3.2rem;
                    color: #111827;
                    margin-bottom: 0.75rem;
                    font-weight: 900;
                    line-height: 1.2;
                }
                .hero-subtitle {
                    font-size: 1.6rem;
                    color: #ea580c;
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                }
                .hero-desc {
                    font-size: 1.15rem;
                    line-height: 1.75;
                    color: #374151;
                    margin-bottom: 2rem;
                }
                .hero-actions {
                    display: flex;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                }
                .btn-kolam-primary {
                    background: #f59e0b;
                    color: #111827;
                    font-size: 1.05rem;
                    font-weight: 800;
                    padding: 0.85rem 1.75rem;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    text-decoration: none;
                    transition: all 0.15s ease;
                    cursor: pointer;
                }
                .btn-kolam-primary:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                    background: #fbbf24;
                }
                .btn-kolam-primary:active {
                    transform: translate(3px, 3px);
                    box-shadow: 1px 1px 0px #111827;
                }
                .btn-kolam-secondary {
                    background: #ffffff;
                    color: #111827;
                    font-size: 1.05rem;
                    font-weight: 800;
                    padding: 0.85rem 1.75rem;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    text-decoration: none;
                    transition: all 0.15s ease;
                    cursor: pointer;
                }
                .btn-kolam-secondary:hover {
                    background-color: #fef08a;
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                }

                .hero-media {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .logo-glow-wrapper {
                    position: relative;
                }
                .kolam-hero-logo {
                    width: 260px;
                    height: 260px;
                    border-radius: 20px;
                    border: 3px solid #111827;
                    box-shadow: 6px 6px 0px #111827;
                    object-fit: contain;
                    background-color: #ffffff;
                    padding: 10px;
                    animation: float-logo 5s ease-in-out infinite;
                }

                @keyframes float-logo {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }

                /* Features Section */
                .kolam-features {
                    padding: 4.5rem 0;
                    background-color: #fffbeb;
                    border-top: 2.5px solid #111827;
                    border-bottom: 2.5px solid #111827;
                }
                .section-title {
                    font-size: 2.3rem;
                    margin-bottom: 0.5rem;
                    color: #111827;
                    font-weight: 900;
                }
                .section-subtitle {
                    font-size: 1.15rem;
                    color: #4b5563;
                    margin-bottom: 3rem;
                    font-weight: 500;
                }
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .feature-card {
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    border-radius: 12px;
                    padding: 2.2rem 1.75rem;
                    text-align: center;
                    transition: all 0.2s ease;
                }
                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 6px 6px 0px #111827;
                }
                .feature-icon {
                    font-size: 2.8rem;
                    margin-bottom: 1.25rem;
                }
                .feature-card h3 {
                    font-size: 1.35rem;
                    color: #111827;
                    font-weight: 800;
                    margin-bottom: 0.85rem;
                }
                .feature-card p {
                    color: #4b5563;
                    font-size: 0.98rem;
                    line-height: 1.65;
                }

                /* How It Works */
                .kolam-how {
                    padding: 5rem 0;
                }
                .steps-flow {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    margin-top: 2.5rem;
                    position: relative;
                }
                .step-item {
                    text-align: center;
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    border-radius: 12px;
                    padding: 2rem 1.5rem;
                }
                .step-number {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: #fde047;
                    color: #111827;
                    font-size: 1.6rem;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                }
                .step-item h4 {
                    font-size: 1.25rem;
                    color: #111827;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                }
                .step-item p {
                    color: #4b5563;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    max-width: 320px;
                    margin: 0 auto;
                }

                /* Responsive */
                @media (max-width: 992px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    .hero-text-content {
                        text-align: center;
                    }
                    .badge-wrapper {
                        display: flex;
                        justify-content: center;
                    }
                    .hero-actions {
                        justify-content: center;
                    }
                    .kolam-hero-logo {
                        width: 200px;
                        height: 200px;
                    }
                    .hero-title {
                        font-size: 2.5rem;
                    }
                }

                /* Install App Guide Styles */
                .kolam-install {
                    padding: 4rem 0;
                    border-top: 2.5px solid #111827;
                }
                .install-box {
                    max-width: 820px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 6px 6px 0px #111827;
                }
                .install-tabs {
                    display: flex;
                    border-bottom: 2.5px solid #111827;
                    background: #f1f5f9;
                }
                .install-tab-btn {
                    flex: 1;
                    padding: 1.1rem 1rem;
                    background: none;
                    border: none;
                    color: #475569;
                    font-size: 1.05rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border-bottom: 3px solid transparent;
                }
                .install-tab-btn:hover {
                    color: #111827;
                    background: rgba(0, 0, 0, 0.03);
                }
                .install-tab-btn.active {
                    color: #111827;
                    background: #fef08a;
                    border-bottom: 3px solid #111827;
                }
                .install-content {
                    padding: 2.25rem 2rem;
                    text-align: right;
                }
                .install-instructions h4 {
                    font-size: 1.35rem;
                    color: #ea580c;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                }
                .install-instructions ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }
                .install-instructions li {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #374151;
                    position: relative;
                    padding-right: 1.75rem;
                }
                .install-instructions li::before {
                    content: "⚡";
                    position: absolute;
                    right: 0;
                    top: 0.1rem;
                    font-size: 1rem;
                    color: #ea580c;
                }
                
                .animate-fade {
                    animation: fadeIn 0.4s ease-out;
                }
                
                @media (max-width: 600px) {
                    .install-tabs {
                        flex-direction: column;
                    }
                    .install-tab-btn {
                        border-bottom: 1px solid #111827;
                        padding: 0.85rem;
                        text-align: right;
                    }
                    .install-tab-btn.active {
                        border-bottom: 2px solid #111827;
                    }
                }
            `})]})},N0="https://us-central1-dogfinder-eb6fb.cloudfunctions.net/laundryWaitlistSignup",w0=()=>{const u=Fo()?.openContact||(()=>{window.location.href="mailto:didi@barak.rocks"}),[d,c]=z.useState("idle"),[x,b]=z.useState(!1),y=z.useRef(null),[E,m]=z.useState(""),[f,p]=z.useState(!1),[g,w]=z.useState(!1),[C,M]=z.useState(""),[H,B]=z.useState(null),G=(I="washing")=>{y.current&&clearTimeout(y.current),b(!1),c(I),I==="washing"?y.current=setTimeout(()=>{c("spinning"),y.current=setTimeout(()=>{c("done"),b(!0)},3500)},3500):I==="spinning"?y.current=setTimeout(()=>{c("done"),b(!0)},3e3):I==="done"&&b(!0)},L=()=>{y.current&&clearTimeout(y.current),c("idle"),b(!1)},Y=I=>{B(H===I?null:I)},P=()=>{const I=document.getElementById("waitlist-section");I&&I.scrollIntoView({behavior:"smooth"})},ne=()=>{const I=document.getElementById("interactive-demo");I&&I.scrollIntoView({behavior:"smooth"})},ve=I=>{I.preventDefault(),E.trim()&&(w(!0),M(""),fetch(N0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:E})}).then(ue=>{if(!ue.ok)throw new Error("שגיאה בתקשורת עם השרת");return ue.json()}).then(ue=>{if(!ue.success)throw new Error(ue.error||"רישום נכשל");w(!1),p(!0),m("")}).catch(ue=>{console.error("Waitlist submission failed:",ue),w(!1),M("שגיאה ברישום לרשימת ההמתנה. יש לנסות שוב מאוחר יותר.")}))},$=[{q:"האם המכשיר מתאים למכונת הכביסה שלי?",a:"כן, ב-100%! המכשיר נצמד מגנטית לכל מכונת כביסה בעלת דופן מתכת (שזה כמעט כל מכונה ביתית בעולם - פתח חזית או פתח עליון, ישנה או חדשה). אין צורך בהתקנה מיוחדת."},{q:"האם צריך להזמין טכנאי או לחבר את המכשיר לחשמל?",a:"ממש לא. המכשיר פועל על סוללה פנימית איכותית שמחזיקה חודשים ארוכים בשימוש רגיל. כשהיא מתקרבת לסיום תקבלו הודעה, ופשוט מטעינים אותו עם כבל USB סטנדרטי."},{q:"איך המכשיר שולח לי את ההודעה?",a:"המכשיר מתחבר ל-WiFi הביתי שלכם. ברגע שסבב הכביסה והסחיטה מסתיימים, הוא שולח אליכם ישירות הודעה למייל או כהודעת SMS לטלפון. לא צריך להשאיר אפליקציה כבדה פתוחה ברקע."},{q:"יש לי מייבש כביסה שיושב מעל המכונה ורועד – זה לא יבלבל את החיישן?",a:"זו בדיוק הסיבה שפיתחנו אותו חכם: המכשיר מזהה את חתימת הרעידות הייחודית של סחיטת הכביסה, ויודע להתעלם מרעידות של מייבש שפועל במקביל. תקבלו התראה רק כשהכביסה באמת מחכה לכם."},{q:"מה קורה כשהמכונה עוצרת לכמה דקות כדי להשרות בגדים או לחמם מים?",a:"המכשיר חכם ויודע שתוכניות כביסה כוללות הפוגות קצרות. הוא לא ישלח לכם התראת שווא באמצע הכביסה, אלא ימתין ויוודא שהסחיטה הסופית הושלמה והתוף דומם לחלוטין."},{q:"מתי המוצר יהיה זמין לרכישה וכמה הוא יעלה?",a:"אנחנו נמצאים בשלבי ייצור מתקדמים של סדרת ההשקה הראשונה. הרשמה לרשימת ההמתנה בעמוד זה מקנה לכם קדימות מיידית בהזמנה והנחת השקה מיוחדת, ללא שום התחייבות!"}];return l.jsxs("div",{className:"laundry-marketing-page",children:[l.jsx("section",{className:"laundry-hero",children:l.jsxs("div",{className:"container hero-layout",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("div",{className:"hero-badge",children:l.jsx("span",{children:"🧺 פתרון פשוט לבעיה יומיומית מעצבנת • מבית 4S"})}),l.jsxs("h1",{className:"hero-main-title",children:["שוב שכחתם כביסה רטובה במכונה?",l.jsx("span",{className:"hero-highlight",children:" סוף לריח החמוץ ולשטיפות חוזרות."})]}),l.jsx("p",{className:"hero-lead-text",children:"מגנט קטן וחכם שנצמד לכל מכונת כביסה בשנייה אחת. הוא מרגיש בעצמו מתי המכונה סיימה להסתובב – ושולח לכם הודעה מיידית ישר לטלפון. תולים בזמן, שומרים על ריח מושלם של מרכך, וחוסכים חשמל וכביסות מיותרות."}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsx("button",{onClick:P,className:"btn-cta-primary",children:"🚀 שריינו לעצמכם יחידה (ללא עלות)"}),l.jsx("button",{onClick:ne,className:"btn-cta-secondary",children:"⚡ ראו איך זה עובד בזמן אמת"})]}),l.jsxs("div",{className:"hero-trust-badges",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🧲"}),l.jsx("span",{children:"נצמד במגנט לכל מכונה"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"📱"}),l.jsx("span",{children:"הודעה לנייד או במייל"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🔋"}),l.jsx("span",{children:"סוללה שמחזיקה חודשים"})]})]})]}),l.jsx("div",{className:"hero-visual-card",children:l.jsxs("div",{className:"washer-mockup-box",children:[l.jsxs("div",{className:"washer-header-strip",children:[l.jsx("span",{className:"washer-model-label",children:"STANDARD WASHER"}),l.jsx("div",{className:"washer-dial"})]}),l.jsx("div",{className:"washer-drum-area",children:l.jsxs("div",{className:"washer-drum-circle",children:[l.jsx("div",{className:"laundry-bubbles",children:"🫧 🧺 🫧"}),l.jsx("span",{className:"clean-clothes-icon",children:"👕"})]})}),l.jsxs("div",{className:"tracker-magnet-gadget",children:[l.jsx("div",{className:"magnet-corner-tag",children:"🧲 נצמד במגנט"}),l.jsxs("div",{className:"gadget-face",children:[l.jsx("span",{className:"gadget-mascot",children:"🐒"}),l.jsxs("div",{className:"gadget-info",children:[l.jsx("strong",{children:"4S Laundry"}),l.jsx("small",{children:"בקר רעידות חכם"})]}),l.jsx("div",{className:"gadget-sensor-led pulse-glow"})]})]}),l.jsxs("div",{className:"floating-phone-notification",children:[l.jsxs("div",{className:"notif-header",children:[l.jsx("span",{className:"notif-app",children:"4S • מעקב כביסה"}),l.jsx("span",{className:"notif-time",children:"הרגע"})]}),l.jsxs("div",{className:"notif-body",children:[l.jsx("strong",{children:'"היי! הכביסה הסתיימה הרגע 🧺"'}),l.jsx("p",{children:"הבגדים מחכים לך רעננים – כדאי לתלות עכשיו!"})]})]})]})})]})}),l.jsx("section",{className:"section comparison-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"ההבדל בין סיוט לשקט נפשי"}),l.jsx("h2",{className:"section-h2",children:"מכירים את זה שהכביסה נשארת כל הלילה?"}),l.jsx("p",{className:"section-subtitle",children:"כולנו היינו שם: מפעילים כביסה, נשאבים לשגרה, ונזכרים רק למחרת בבוקר. התוצאה? ריח נוראי של עובש וצורך להפעיל הכל מחדש."})]}),l.jsxs("div",{className:"comparison-grid",children:[l.jsxs("div",{className:"comparison-card card-before",children:[l.jsx("div",{className:"card-top-status bad-status",children:"❌ בלי 4S Laundry Tracker (הסיוט הידוע)"}),l.jsxs("ul",{className:"comparison-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"😫"}),l.jsxs("div",{children:[l.jsx("strong",{children:"הכביסה נשכחת שעות בתוף:"}),l.jsx("span",{children:"הבגדים הרטובים יושבים דחוסים בחושך ומפתחים בקטריות ולחות."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🤢"}),l.jsxs("div",{children:[l.jsx("strong",{children:"ריח חמוץ ומעופש:"}),l.jsx("span",{children:"הריח הנורא של עובש שנדבק לחולצות ומסרב לצאת."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🔄"}),l.jsxs("div",{children:[l.jsx("strong",{children:"שטיפה חוזרת ובזבוז כסף:"}),l.jsx("span",{children:"חייבים להפעיל שוב את המכונה – בזבוז של מים, חשמל, מרכך וזמן יקר."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🏃"}),l.jsxs("div",{children:[l.jsx("strong",{children:"לרוץ לבדוק כל רגע:"}),l.jsx("span",{children:"לגשת שוב ושוב למסדרון רק כדי לראות אם היא כבר סיימה."})]})]})]})]}),l.jsxs("div",{className:"comparison-card card-after",children:[l.jsx("div",{className:"card-top-status good-status",children:"✨ עם 4S Laundry Tracker (ראש שקט לחלוטין)"}),l.jsxs("ul",{className:"comparison-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"📱"}),l.jsxs("div",{children:[l.jsx("strong",{children:"התראה מיידית לרגע הסיום:"}),l.jsx("span",{children:"הטלפון מצפצף בדיוק כשהמכונה עצרה. אתם תמיד יודעים ראשונים."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🌸"}),l.jsxs("div",{children:[l.jsx("strong",{children:"ריח רענן של מרכך שנשמר:"}),l.jsx("span",{children:"הבגדים עוברים מיד לתלייה או למייבש – ריחניים, נעימים ונקיים באמת."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"💰"}),l.jsxs("div",{children:[l.jsx("strong",{children:"אפס כביסות כפולות:"}),l.jsx("span",{children:"כל סבב כביסה מסתיים בהצלחה בפעם הראשונה. חיסכון מצטבר מורגש."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🧘"}),l.jsxs("div",{children:[l.jsx("strong",{children:"חופש להמשיך בעיסוקים:"}),l.jsx("span",{children:"עובדים, נחים או צופים בטלוויזיה. כשזה מוכן – המכשיר יקרא לכם."})]})]})]})]})]})]})}),l.jsx("section",{className:"section how-it-works-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"פשטות גאונית"}),l.jsx("h2",{className:"section-h2",children:"שלושה צעדים קלים – ואתם מסודרים"}),l.jsx("p",{className:"section-subtitle",children:"בלי אנשי מקצוע, בלי לקדוח, ובלי להבין בטכנולוגיה. כל אחד יכול להפעיל תוך חצי דקה."})]}),l.jsxs("div",{className:"steps-cards-grid",children:[l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"1"}),l.jsx("div",{className:"step-icon-big",children:"🧲"}),l.jsx("h3",{children:"פשוט מצמידים למכונה"}),l.jsx("p",{children:"מניחים את המכשיר על דופן המכונה או על המכסה. מגנט הניאודימיום החזק ננעל מיידית למקומו ביציבות מוחלטת."}),l.jsx("span",{className:"step-pill",children:"0 ברגים • 0 חוטים"})]}),l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"2"}),l.jsx("div",{className:"step-icon-big",children:"🌀"}),l.jsx("h3",{children:"מכבסים כרגיל"}),l.jsx("p",{children:"מפעילים את המכונה כרגיל. החיישן מרגיש את תנודות המכונה, מבחין בין שלבי הכביסה, ומזהה את הסחיטה הסופית."}),l.jsx("span",{className:"step-pill",children:"זיהוי רעידות חכם"})]}),l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"3"}),l.jsx("div",{className:"step-icon-big",children:"🔔"}),l.jsx("h3",{children:"מקבלים הודעה ותולים"}),l.jsx("p",{children:"ברגע שהמכונה נעצרה, קופצת התראה ישירה לנייד שלכם (ב-SMS או במייל). תולים מיד ונהנים מבגדים בניחוח מושלם!"}),l.jsx("span",{className:"step-pill",children:"שלום לריח המעופש"})]})]})]})}),l.jsx("section",{id:"interactive-demo",className:"section interactive-demo-section",children:l.jsxs("div",{className:"container",style:{maxWidth:"960px"},children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"חוויה אינטראקטיבית"}),l.jsx("h2",{className:"section-h2",children:"התנסו בזה בעצמכם: איך זה מרגיש?"}),l.jsx("p",{className:"section-subtitle",children:"לחצו על הכפתורים למטה כדי להדמות סבב כביסה אמיתי ולראות איך ההתראה מגיעה אליכם לטלפון:"})]}),l.jsxs("div",{className:"simulator-box",children:[l.jsxs("div",{className:"simulator-controls-bar",children:[l.jsx("button",{onClick:()=>G("washing"),className:`sim-btn ${d==="washing"?"active":""}`,children:"🌀 1. הדמיית כביסה בפעולה"}),l.jsx("button",{onClick:()=>G("spinning"),className:`sim-btn ${d==="spinning"?"active":""}`,children:"⚡ 2. שלב סחיטה מהירה"}),l.jsx("button",{onClick:()=>G("done"),className:`sim-btn ${d==="done"?"active":""}`,children:"⏹️ 3. סיום כביסה"}),d!=="idle"&&l.jsx("button",{onClick:L,className:"sim-btn-reset",title:"איפוס",children:"🔄 איפוס"})]}),l.jsxs("div",{className:"simulator-stage",children:[l.jsxs("div",{className:`sim-washer ${d}`,children:[l.jsx("div",{className:"sim-washer-glass",children:l.jsxs("div",{className:`sim-clothes-drum ${d}`,children:[d==="idle"&&l.jsx("span",{children:"💤 מכונה במנוחה"}),d==="washing"&&l.jsx("span",{children:"🌀 כביסה מסתובבת..."}),d==="spinning"&&l.jsx("span",{children:"🌪️ סחיטה חזקה!"}),d==="done"&&l.jsx("span",{children:"✨ הסתיימה בהצלחה!"})]})}),l.jsxs("div",{className:`sim-sensor ${d}`,children:[l.jsx("span",{className:"sim-sensor-icon",children:"🧲 4S"}),l.jsx("span",{className:"sim-sensor-dot"})]})]}),l.jsxs("div",{className:"sim-status-banner",children:[d==="idle"&&l.jsxs("div",{className:"status-text idle-text",children:["💡 ",l.jsx("strong",{children:"מצב המתנה:"}),' המכשיר יושב שקט על המכונה בלי לבזבז סוללה. לחצו על "1. הדמיית כביסה בפעולה" כדי להתחיל.']}),d==="washing"&&l.jsxs("div",{className:"status-text washing-text",children:["🌊 ",l.jsx("strong",{children:"זיהוי כביסה:"})," המכשיר מזהה רעידות רצופות ומבין שהכביסה התחילה. הוא שומר על שקט ולא מפריע לכם."]}),d==="spinning"&&l.jsxs("div",{className:"status-text spinning-text",children:["⚡ ",l.jsx("strong",{children:"זיהוי שלב סחיטה:"})," המכשיר חש את תנודות הסחיטה הגבוהות ויודע שהסיום ממש קרוב!"]}),d==="done"&&l.jsxs("div",{className:"status-text done-text",children:["🎉 ",l.jsx("strong",{children:"הכביסה הסתיימה!"})," הרעידות פסקו לחלוטין. ברגע זה נשלחת אליכם ההודעה לנייד!"]})]}),l.jsxs("div",{className:"sim-phone-frame",children:[l.jsx("div",{className:"sim-phone-notch"}),l.jsxs("div",{className:"sim-phone-screen",children:[l.jsx("div",{className:"sim-phone-clock",children:"14:32"}),l.jsx("div",{className:"sim-phone-date",children:"יום רביעי, 29 בספטמבר"}),x?l.jsxs("div",{className:"sim-sms-bubble animate-bounce-in",children:[l.jsxs("div",{className:"sms-sender",children:[l.jsx("span",{children:"🧺 4S LAUNDRY TRACKER"}),l.jsx("small",{children:"עכשיו"})]}),l.jsxs("div",{className:"sms-text",children:[l.jsx("strong",{children:"היי! הכביסה שלך סיימה הרגע! 🎉"}),l.jsx("p",{children:"התוף דומם והבגדים מחכים לך רעננים ומוכנים לתלייה. בוא/י להוציא אותם לפני שיתחילו לקבל ריח חמוץ!"})]}),l.jsx("div",{className:"sms-action-tag",children:l.jsx("span",{children:"בגדים מוגנים • ריח מרכך נשמר 🌸"})})]}):l.jsxs("div",{className:"sim-phone-idle-msg",children:[d==="idle"&&"הטלפון יקבל התראה ברגע שהכביסה תסתיים...",d==="washing"&&"הכביסה בעיצומה... הטלפון יצפצף כשהיא תסתיים.",d==="spinning"&&"שלב סחיטה... עוד כמה רגעים תגיע ההתראה!"]})]})]})]})]})]})}),l.jsx("section",{className:"section highlights-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"הנדסה חכמה לחיי היומיום"}),l.jsx("h2",{className:"section-h2",children:"למה ה-Laundry Tracker הוא מוצר חובה בכל בית?"})]}),l.jsxs("div",{className:"features-showcase-grid",children:[l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🔌"}),l.jsx("h3",{children:"מתאים לכל מכונה קיימת"}),l.jsx("p",{children:'לא צריך לקנות מכונת כביסה "חכמה" חדשה באלפי שקלים. ה-4S Tracker הופך כל מכונה רגילה לחכמה ברגע, ללא שינוי או פירוק של המכונה.'})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🌪️"}),l.jsx("h3",{children:"יודע להתעלם מרעידות המייבש"}),l.jsx("p",{children:"המייבש יושב פיזית על מכונת הכביסה שלכם? פיתחנו אלגוריתם חכם שיודע לסנן את רעידות המייבש, כך שלא תקבלו התראות שווא כשהמייבש פועל."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🔋"}),l.jsx("h3",{children:"סוללה ארוכת טווח (חודשים!)"}),l.jsx("p",{children:"המכשיר נכנס למצב שינה עמוק כשהמכונה לא עובדת. סוללה פנימית איכותית מספקת חודשים ארוכים של עבודה רציפה, ונטענת בקלות בכבל USB."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"📲"}),l.jsx("h3",{children:"עובד ישירות – בלי אפליקציה כבדה"}),l.jsx("p",{children:"ההתראות מגיעות ישירות כהודעת SMS לטלפון או לכתובת המייל שלכם. פשוט, מהיר, ואמין – בלי להעמיס על זיכרון הטלפון."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🛡️"}),l.jsx("h3",{children:"מארז קשיח ועמיד למים ולחות"}),l.jsx("p",{children:"מתוכנן במיוחד עבור הסביבה הלחה של חדר הכביסה. מארז מודפס בחומר PETG הנדסי קשיח עם לוגו 4S מוטבע ואיטום מעולה."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🧠"}),l.jsx("h3",{children:"פיתוח ישראלי חכם ופרקטי"}),l.jsx("p",{children:"פותח כחלק מחזון 4S (Smart Solutions for Silly Situations) – פתרונות טכנולוגיים אלגנטיים שפותרים את הבעיות הקטנות והמעצבנות של החיים."})]})]})]})}),l.jsx("section",{id:"waitlist-section",className:"section waitlist-cta-section",children:l.jsx("div",{className:"container",style:{maxWidth:"820px"},children:l.jsxs("div",{className:"waitlist-big-card",children:[l.jsx("span",{className:"waitlist-badge",children:"מהדורת השקה מוגבלת ⏳"}),l.jsx("h2",{className:"waitlist-title",children:"היו הראשונים לקבל את ה-Laundry Tracker"}),l.jsxs("p",{className:"waitlist-sub",children:["אנחנו מרכיבים כעת את סדרת היחידות הראשונה בסדנה. הירשמו עכשיו לרשימת ההמתנה וקבלו ",l.jsx("strong",{children:"קדימות באספקה והנחת השקה בלעדית"}),", ללא כל התחייבות כספית!"]}),C&&l.jsxs("div",{className:"alert alert-danger",style:{direction:"rtl",textAlign:"right",marginBottom:"1.5rem"},children:["⚠️ ",C]}),f?l.jsxs("div",{className:"alert-success-box animate-fade",children:[l.jsx("span",{className:"success-icon",children:"🎉"}),l.jsx("h3",{children:"תודה רבה! נרשמת בהצלחה לרשימת ההמתנה."}),l.jsx("p",{children:"שריינו עבורך מקום ברשימת הקדימות. נשלח לך עדכון אישי ברגע שהיחידות הראשונות יהיו מוכנות למשלוח!"})]}):l.jsxs("form",{onSubmit:ve,className:"waitlist-form-clean",children:[l.jsxs("div",{className:"form-input-wrap",children:[l.jsx("input",{type:"email",value:E,onChange:I=>m(I.target.value),placeholder:"הזינו את כתובת הדוא''ל שלכם...",className:"waitlist-email-input",disabled:g,required:!0}),l.jsx("button",{type:"submit",className:"btn-waitlist-submit",disabled:g,children:g?"שומר...":"שריינו לי מקום ברשימה 🚀"})]}),l.jsx("div",{className:"form-micro-guarantee",children:l.jsx("span",{children:"🔒 הפרטיות שלכם חשובה לנו. אפס ספאם, נעדכן רק על המכשיר."})})]}),l.jsxs("div",{className:"early-perks-row",children:[l.jsx("div",{className:"perk-pill",children:"🏷️ הנחת השקה בלעדית"}),l.jsx("div",{className:"perk-pill",children:"📦 משלוח מוקדם ראשון"}),l.jsx("div",{className:"perk-pill",children:"🆓 שירות התראות כלול"})]})]})})}),l.jsx("section",{className:"section faq-section",children:l.jsxs("div",{className:"container",style:{maxWidth:"820px"},children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"שאלות נפוצות"}),l.jsx("h2",{className:"section-h2",children:"כל מה שרציתם לדעת על ה-Laundry Tracker"})]}),l.jsx("div",{className:"faq-accordion",children:$.map((I,ue)=>l.jsxs("div",{className:`faq-card ${H===ue?"open":""}`,onClick:()=>Y(ue),children:[l.jsxs("div",{className:"faq-question-row",children:[l.jsx("h4",{className:"faq-q-text",children:I.q}),l.jsx("span",{className:"faq-toggle-icon",children:H===ue?"▲":"▼"})]}),H===ue&&l.jsx("div",{className:"faq-answer-row animate-fade",children:l.jsx("p",{children:I.a})})]},ue))}),l.jsxs("div",{className:"faq-footer-contact",children:[l.jsx("span",{children:"יש לכם שאלה מיוחדת שלא מופיעה כאן?"}),l.jsx("button",{onClick:u,className:"btn-contact-link",children:"דברו עם דוד ישירות 💬"})]})]})}),l.jsx("style",{children:`
                .laundry-marketing-page {
                    font-family: 'Rubik', system-ui, -apple-system, sans-serif;
                    background-color: #fdfbf7;
                    color: #111827;
                    direction: rtl;
                    text-align: right;
                    overflow-x: clip;
                }

                /* HERO SECTION */
                .laundry-hero {
                    background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 100%);
                    border-bottom: 2.5px solid #111827;
                    padding: 4.5rem 0 4rem;
                }
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1.25fr 0.95fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .hero-badge {
                    display: inline-block;
                    background: #fde047;
                    color: #111827;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    padding: 0.35rem 0.9rem;
                    border-radius: 6px;
                    font-size: 0.88rem;
                    font-weight: 800;
                    margin-bottom: 1.25rem;
                }
                .hero-main-title {
                    font-size: 2.75rem;
                    font-weight: 900;
                    line-height: 1.25;
                    color: #111827;
                    margin-bottom: 1.25rem;
                }
                .hero-highlight {
                    color: #0284c7;
                    display: inline;
                }
                .hero-lead-text {
                    font-size: 1.18rem;
                    line-height: 1.75;
                    color: #374151;
                    margin-bottom: 2.25rem;
                }
                .hero-cta-group {
                    display: flex;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                    margin-bottom: 2.5rem;
                }
                .btn-cta-primary {
                    background: #0284c7;
                    color: #ffffff;
                    padding: 0.95rem 1.85rem;
                    font-size: 1.05rem;
                    font-weight: 800;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-cta-primary:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                    background: #0369a1;
                }
                .btn-cta-primary:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0px #111827;
                }
                .btn-cta-secondary {
                    background: #ffffff;
                    color: #111827;
                    padding: 0.95rem 1.6rem;
                    font-size: 1.05rem;
                    font-weight: 800;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-cta-secondary:hover {
                    background: #fef08a;
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                }
                .hero-trust-badges {
                    display: flex;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    padding-top: 1.25rem;
                    border-top: 1.5px dashed #94a3b8;
                }
                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #1f2937;
                }
                .trust-icon {
                    font-size: 1.15rem;
                }

                /* HERO VISUAL CARD (WASHER + NOTIFICATION) */
                .hero-visual-card {
                    display: flex;
                    justify-content: center;
                    position: relative;
                }
                .washer-mockup-box {
                    width: 320px;
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 20px;
                    box-shadow: 6px 6px 0px #111827;
                    padding: 1.5rem;
                    position: relative;
                }
                .washer-header-strip {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px dashed #cbd5e1;
                    padding-bottom: 0.85rem;
                    margin-bottom: 1.25rem;
                }
                .washer-model-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #64748b;
                    letter-spacing: 0.05em;
                }
                .washer-dial {
                    width: 24px;
                    height: 24px;
                    border: 2px solid #111827;
                    border-radius: 50%;
                    background: #e2e8f0;
                    position: relative;
                }
                .washer-dial::after {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 9px;
                    width: 2px;
                    height: 8px;
                    background: #111827;
                }
                .washer-drum-area {
                    height: 190px;
                    background: #f8fafc;
                    border: 2px solid #111827;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                    overflow: hidden;
                    position: relative;
                }
                .washer-drum-circle {
                    width: 140px;
                    height: 140px;
                    border: 3px solid #0284c7;
                    border-radius: 50%;
                    background: radial-gradient(circle, #bae6fd 0%, #e0f2fe 70%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    animation: float-drum 5s ease-in-out infinite;
                }
                .laundry-bubbles {
                    font-size: 1.2rem;
                }
                .clean-clothes-icon {
                    font-size: 2.2rem;
                }
                
                /* GADGET MAGNET SENSOR ON WASHER */
                .tracker-magnet-gadget {
                    background: #fef08a;
                    border: 2.5px solid #111827;
                    border-radius: 12px;
                    box-shadow: 3px 3px 0px #111827;
                    padding: 0.75rem 1rem;
                    position: relative;
                }
                .magnet-corner-tag {
                    position: absolute;
                    top: -10px;
                    right: 12px;
                    background: #111827;
                    color: #fde047;
                    font-size: 0.7rem;
                    font-weight: 800;
                    padding: 0.15rem 0.5rem;
                    border-radius: 4px;
                }
                .gadget-face {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.75rem;
                }
                .gadget-mascot {
                    font-size: 1.6rem;
                }
                .gadget-info {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.2;
                }
                .gadget-info strong {
                    font-size: 0.95rem;
                    color: #111827;
                }
                .gadget-info small {
                    font-size: 0.75rem;
                    color: #4b5563;
                    font-weight: 600;
                }
                .gadget-sensor-led {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #22c55e;
                    border: 1.5px solid #111827;
                }
                .pulse-glow {
                    animation: pulse-green 2s infinite;
                }

                /* FLOATING NOTIFICATION MOCKUP */
                .floating-phone-notification {
                    position: absolute;
                    bottom: -28px;
                    left: -35px;
                    background: #111827;
                    color: #ffffff;
                    border: 2px solid #38bdf8;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
                    padding: 0.85rem 1rem;
                    width: 250px;
                    z-index: 5;
                    animation: float-notif 4s ease-in-out infinite;
                }
                .notif-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.72rem;
                    color: #38bdf8;
                    font-weight: 700;
                    margin-bottom: 0.35rem;
                }
                .notif-body strong {
                    display: block;
                    font-size: 0.88rem;
                    color: #ffffff;
                    margin-bottom: 0.2rem;
                }
                .notif-body p {
                    font-size: 0.78rem;
                    color: #cbd5e1;
                    line-height: 1.35;
                    margin-bottom: 0;
                }

                /* COMPARISON SECTION */
                .comparison-section {
                    padding: 5rem 0;
                }
                .section-head-center {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 3.5rem;
                }
                .sub-badge {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0369a1;
                    font-weight: 800;
                    font-size: 0.85rem;
                    padding: 0.25rem 0.75rem;
                    border: 1.5px solid #111827;
                    border-radius: 4px;
                    box-shadow: 2px 2px 0px #111827;
                    margin-bottom: 0.85rem;
                }
                .section-h2 {
                    font-size: 2.35rem;
                    font-weight: 900;
                    color: #111827;
                    line-height: 1.25;
                    margin-bottom: 1rem;
                }
                .section-subtitle {
                    font-size: 1.12rem;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 0;
                }
                .comparison-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                .comparison-card {
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 16px;
                    box-shadow: 6px 6px 0px #111827;
                    overflow: hidden;
                }
                .card-top-status {
                    padding: 1rem 1.5rem;
                    font-size: 1.1rem;
                    font-weight: 800;
                    border-bottom: 2.5px solid #111827;
                }
                .bad-status {
                    background: #fee2e2;
                    color: #991b1b;
                }
                .good-status {
                    background: #dcfce7;
                    color: #166534;
                }
                .comparison-list {
                    list-style: none;
                    padding: 1.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin: 0;
                }
                .comparison-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 1rem;
                    line-height: 1.6;
                }
                .icon-bullet {
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    line-height: 1;
                }
                .comparison-list strong {
                    display: block;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.2rem;
                }
                .comparison-list span {
                    color: #4b5563;
                }

                /* 3 STEPS SECTION */
                .how-it-works-section {
                    background: #ffffff;
                    border-top: 2.5px solid #111827;
                    border-bottom: 2.5px solid #111827;
                    padding: 5rem 0;
                }
                .steps-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .step-marketing-card {
                    background: #fdfbf7;
                    border: 2.5px solid #111827;
                    border-radius: 14px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 2.25rem 1.75rem;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    transition: transform 0.2s ease;
                }
                .step-marketing-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 6px 6px 0px #111827;
                }
                .step-number-tag {
                    position: absolute;
                    top: -16px;
                    right: 20px;
                    background: #fde047;
                    color: #111827;
                    font-size: 1.15rem;
                    font-weight: 900;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .step-icon-big {
                    font-size: 2.75rem;
                    margin-bottom: 1.25rem;
                }
                .step-marketing-card h3 {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: #111827;
                    margin-bottom: 0.75rem;
                }
                .step-marketing-card p {
                    font-size: 1rem;
                    color: #4b5563;
                    line-height: 1.65;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                .step-pill {
                    background: #e2e8f0;
                    color: #334155;
                    font-size: 0.8rem;
                    font-weight: 800;
                    padding: 0.3rem 0.65rem;
                    border-radius: 6px;
                    align-self: flex-start;
                    border: 1px solid #cbd5e1;
                }

                /* INTERACTIVE SIMULATOR */
                .interactive-demo-section {
                    padding: 5rem 0;
                    background: #f1f5f9;
                    border-bottom: 2.5px solid #111827;
                }
                .simulator-box {
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 18px;
                    box-shadow: 6px 6px 0px #111827;
                    padding: 2rem;
                }
                .simulator-controls-bar {
                    display: flex;
                    gap: 0.85rem;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 2px dashed #cbd5e1;
                }
                .sim-btn {
                    background: #ffffff;
                    color: #111827;
                    font-size: 0.95rem;
                    font-weight: 800;
                    padding: 0.7rem 1.2rem;
                    border: 2px solid #111827;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .sim-btn:hover {
                    background: #fef08a;
                    transform: translate(-1px, -1px);
                    box-shadow: 4px 4px 0px #111827;
                }
                .sim-btn.active {
                    background: #0284c7;
                    color: #ffffff;
                }
                .sim-btn-reset {
                    background: #fee2e2;
                    color: #991b1b;
                    font-weight: 800;
                    padding: 0.7rem 1rem;
                    border: 2px solid #111827;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0px #111827;
                    cursor: pointer;
                }
                .simulator-stage {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    align-items: center;
                }
                
                /* SIMULATOR WASHER */
                .sim-washer {
                    background: #f8fafc;
                    border: 2.5px solid #111827;
                    border-radius: 16px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 1.5rem;
                    position: relative;
                    text-align: center;
                }
                .sim-washer.washing {
                    animation: shake-light 0.4s infinite;
                }
                .sim-washer.spinning {
                    animation: shake-fast 0.15s infinite;
                }
                .sim-washer.done {
                    background: #f0fdf4;
                }
                .sim-washer-glass {
                    width: 140px;
                    height: 140px;
                    border: 3px solid #111827;
                    border-radius: 50%;
                    background: #e0f2fe;
                    margin: 0 auto 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .sim-clothes-drum {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0369a1;
                }
                .sim-clothes-drum.washing {
                    animation: rotate-drum 2s linear infinite;
                }
                .sim-clothes-drum.spinning {
                    animation: rotate-drum 0.5s linear infinite;
                }
                .sim-sensor {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #fde047;
                    border: 2px solid #111827;
                    border-radius: 20px;
                    padding: 0.35rem 0.85rem;
                    font-size: 0.85rem;
                    font-weight: 800;
                }
                .sim-sensor-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #22c55e;
                }
                .sim-sensor.spinning .sim-sensor-dot {
                    background: #e11d48;
                    animation: blink 0.5s infinite;
                }

                /* SIM STATUS BANNER */
                .sim-status-banner {
                    grid-column: 1 / -1;
                    padding: 0.85rem 1.25rem;
                    border-radius: 8px;
                    border: 2px solid #111827;
                    background: #ffffff;
                    box-shadow: 2px 2px 0px #111827;
                }
                .status-text {
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                .idle-text { color: #475569; }
                .washing-text { color: #0284c7; }
                .spinning-text { color: #e11d48; }
                .done-text { color: #16a34a; }

                /* SIMULATED PHONE FRAME */
                .sim-phone-frame {
                    background: #0f172a;
                    border: 3px solid #111827;
                    border-radius: 24px;
                    box-shadow: 5px 5px 0px #111827;
                    padding: 1.25rem;
                    color: #ffffff;
                    min-height: 220px;
                    display: flex;
                    flex-direction: column;
                }
                .sim-phone-notch {
                    width: 60px;
                    height: 6px;
                    background: #334155;
                    border-radius: 4px;
                    margin: 0 auto 0.75rem;
                }
                .sim-phone-screen {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .sim-phone-clock {
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin-bottom: 0.15rem;
                }
                .sim-phone-date {
                    font-size: 0.75rem;
                    color: #94a3b8;
                    margin-bottom: 1.25rem;
                }
                .sim-phone-idle-msg {
                    font-size: 0.85rem;
                    color: #94a3b8;
                    line-height: 1.5;
                    padding: 1rem;
                }
                .sim-sms-bubble {
                    background: #1e293b;
                    border: 2px solid #38bdf8;
                    border-radius: 12px;
                    padding: 1rem;
                    text-align: right;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                    width: 100%;
                    box-sizing: border-box;
                }
                .sms-sender {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.75rem;
                    color: #38bdf8;
                    font-weight: 800;
                    margin-bottom: 0.4rem;
                }
                .sms-text strong {
                    display: block;
                    font-size: 0.95rem;
                    color: #fde047;
                    margin-bottom: 0.25rem;
                }
                .sms-text p {
                    font-size: 0.85rem;
                    color: #e2e8f0;
                    line-height: 1.4;
                    margin-bottom: 0.5rem;
                }
                .sms-action-tag {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #86efac;
                }

                /* FEATURES GRID */
                .highlights-section {
                    padding: 5rem 0;
                }
                .features-showcase-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.75rem;
                }
                .feature-item-box {
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    border-radius: 14px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 2rem 1.5rem;
                }
                .feat-icon-bubble {
                    font-size: 2.2rem;
                    margin-bottom: 1rem;
                }
                .feature-item-box h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.65rem;
                }
                .feature-item-box p {
                    font-size: 0.95rem;
                    color: #4b5563;
                    line-height: 1.6;
                    margin-bottom: 0;
                }

                /* WAITLIST SECTION */
                .waitlist-cta-section {
                    padding: 5rem 0;
                    background: #fdfbf7;
                }
                .waitlist-big-card {
                    background: #fde047;
                    border: 3.5px solid #111827;
                    border-radius: 20px;
                    box-shadow: 8px 8px 0px #111827;
                    padding: 3.5rem 2.5rem;
                    text-align: center;
                }
                .waitlist-badge {
                    display: inline-block;
                    background: #111827;
                    color: #ffffff;
                    font-weight: 900;
                    font-size: 0.85rem;
                    padding: 0.35rem 0.9rem;
                    border-radius: 20px;
                    margin-bottom: 1.25rem;
                    letter-spacing: 0.05em;
                }
                .waitlist-title {
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #111827;
                    margin-bottom: 1rem;
                    line-height: 1.25;
                }
                .waitlist-sub {
                    font-size: 1.15rem;
                    color: #1f2937;
                    line-height: 1.7;
                    max-width: 620px;
                    margin: 0 auto 2.5rem;
                }
                .waitlist-form-clean {
                    max-width: 580px;
                    margin: 0 auto;
                }
                .form-input-wrap {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 0.85rem;
                }
                .waitlist-email-input {
                    flex: 1;
                    padding: 1rem 1.25rem;
                    font-size: 1.05rem;
                    border: 2.5px solid #111827;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0px #111827;
                    background: #ffffff;
                    color: #111827;
                    font-family: inherit;
                    direction: rtl;
                    text-align: right;
                }
                .waitlist-email-input:focus {
                    outline: none;
                    background: #ffffff;
                }
                .btn-waitlist-submit {
                    background: #111827;
                    color: #ffffff;
                    font-size: 1.05rem;
                    font-weight: 800;
                    padding: 1rem 1.75rem;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 3px 3px 0px #111827;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.15s ease;
                }
                .btn-waitlist-submit:hover {
                    background: #2563eb;
                    transform: translate(-1px, -1px);
                    box-shadow: 4px 4px 0px #111827;
                }
                .form-micro-guarantee {
                    font-size: 0.82rem;
                    color: #4b5563;
                    font-weight: 600;
                }
                .early-perks-row {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 2px dashed rgba(17, 24, 39, 0.2);
                }
                .perk-pill {
                    background: #ffffff;
                    border: 2px solid #111827;
                    border-radius: 6px;
                    padding: 0.4rem 0.85rem;
                    font-size: 0.88rem;
                    font-weight: 800;
                    color: #111827;
                    box-shadow: 2px 2px 0px #111827;
                }
                .alert-success-box {
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 4px 4px 0px #111827;
                }
                .alert-success-box .success-icon {
                    font-size: 2.5rem;
                    display: block;
                    margin-bottom: 0.75rem;
                }
                .alert-success-box h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #15803d;
                    margin-bottom: 0.5rem;
                }
                .alert-success-box p {
                    font-size: 1rem;
                    color: #374151;
                    margin-bottom: 0;
                }

                /* FAQ SECTION */
                .faq-section {
                    padding: 5rem 0;
                    border-top: 2.5px solid #111827;
                    background: #ffffff;
                }
                .faq-accordion {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }
                .faq-card {
                    background: #fdfbf7;
                    border: 2.5px solid #111827;
                    border-radius: 12px;
                    box-shadow: 3px 3px 0px #111827;
                    padding: 1.25rem 1.5rem;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .faq-card:hover {
                    background: #fef08a;
                }
                .faq-card.open {
                    background: #ffffff;
                    box-shadow: 4px 4px 0px #111827;
                }
                .faq-question-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                .faq-q-text {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 0;
                }
                .faq-toggle-icon {
                    font-size: 0.85rem;
                    color: #64748b;
                    flex-shrink: 0;
                }
                .faq-answer-row {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1.5px dashed #cbd5e1;
                }
                .faq-answer-row p {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #374151;
                    margin: 0;
                }
                .faq-footer-contact {
                    text-align: center;
                    padding: 1.5rem;
                    background: #f8fafc;
                    border: 2px dashed #94a3b8;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .btn-contact-link {
                    background: #111827;
                    color: #fde047;
                    font-size: 0.95rem;
                    font-weight: 800;
                    padding: 0.5rem 1.2rem;
                    border-radius: 6px;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    cursor: pointer;
                    transition: transform 0.15s ease;
                }
                .btn-contact-link:hover {
                    transform: scale(1.05);
                }

                /* ANIMATIONS */
                @keyframes float-drum {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-4px) rotate(4deg); }
                }
                @keyframes float-notif {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes pulse-green {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                    50% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
                }
                @keyframes shake-light {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    25% { transform: translate(-1px, -1px) rotate(-0.5deg); }
                    50% { transform: translate(-1px, 1px) rotate(0.5deg); }
                    75% { transform: translate(1px, -1px) rotate(0deg); }
                    100% { transform: translate(1px, 1px) rotate(0deg); }
                }
                @keyframes shake-fast {
                    0% { transform: translate(2px, 1px) rotate(0deg); }
                    25% { transform: translate(-2px, -2px) rotate(-1deg); }
                    50% { transform: translate(-2px, 2px) rotate(1deg); }
                    75% { transform: translate(2px, -1px) rotate(0deg); }
                    100% { transform: translate(2px, 1px) rotate(0deg); }
                }
                @keyframes rotate-drum {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.2; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade {
                    animation: fadeIn 0.35s ease-out;
                }
                .animate-bounce-in {
                    animation: fadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                /* RESPONSIVE DESIGN (MOBILE & TABLET) */
                @media (max-width: 992px) {
                    .hero-layout {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-cta-group {
                        justify-content: center;
                    }
                    .hero-trust-badges {
                        justify-content: center;
                    }
                    .comparison-grid {
                        grid-template-columns: 1fr;
                    }
                    .steps-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .features-showcase-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .simulator-stage {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .hero-main-title {
                        font-size: 2.15rem;
                    }
                    .hero-lead-text {
                        font-size: 1.05rem;
                    }
                    .section-h2 {
                        font-size: 1.85rem;
                    }
                    .washer-mockup-box {
                        width: 280px;
                        padding: 1.25rem;
                    }
                    .floating-phone-notification {
                        left: -10px;
                        right: -10px;
                        width: auto;
                        bottom: -35px;
                    }
                    .features-showcase-grid {
                        grid-template-columns: 1fr;
                    }
                    .form-input-wrap {
                        flex-direction: column;
                    }
                    .waitlist-big-card {
                        padding: 2.5rem 1.5rem;
                    }
                    .waitlist-title {
                        font-size: 1.95rem;
                    }
                    .simulator-box {
                        padding: 1.25rem;
                    }
                    .sim-btn {
                        width: 100%;
                        font-size: 0.9rem;
                    }
                }
            `})]})},S0=()=>{const u=Fo()?.openContact||(()=>{window.location.href="mailto:didi@barak.rocks"}),[d,c]=z.useState("idle"),x=z.useRef(null),[b,y]=z.useState(null),E=w=>{y(b===w?null:w)},m=(w="approaching")=>{x.current&&clearTimeout(x.current),c(w),w==="approaching"?x.current=setTimeout(()=>{c("detected"),x.current=setTimeout(()=>{c("open")},1800)},2e3):w==="detected"&&(x.current=setTimeout(()=>{c("open")},1800))},f=()=>{x.current&&clearTimeout(x.current),c("idle")},p=()=>{const w=document.getElementById("gate-simulator");w&&w.scrollIntoView({behavior:"smooth"})},g=[{q:"האם LobbyGate מתאים לשער או לדלת הכניסה שלי?",a:"כן! המערכת מתחברת בפשטות לכל שער חשמלי, מחסום חניה, דלת אינטרקום או דלת לובי סטנדרטית עם מנעול חשמלי/מגנטי. המנגנון הישן (קודן, שלטים או מפתחות) ממשיך לעבוד כרגיל כגיבוי מלא."},{q:"האם הטלפון חייב להיות דלוק או עם אפליקציה פתוחה?",a:"ממש לא, וזה כל הקסם! הטלפון שלכם יכול להיות נעול לחלוטין ועמוק בתוך הכיס, בתיק הגב או בתחתית עגלת הקניות. אין צורך לפתוח אפליקציה ואין צורך לגעת במסך."},{q:"האם השער ייפתח אם אני סתם יושב בסלון בבית?",a:"לא. טווח הזיהוי מכויל בדיוק למרחק של מטרים ספורים מול פתח הכניסה. בנוסף, המערכת כוללת מנגנון חכם המונע פתיחות חוזרות כל עוד אתם שוהים באותו מקום."},{q:"כמה אנשים ומכשירים אפשר להגדיר במערכת?",a:'ניתן להוסיף את כל בני המשפחה או את כל דיירי הבניין. כל טלפון שמורשה פותח את השער בצורה אישית ומאובטחת ללא עלות נוספת על "שלטים".'},{q:"מה קורה אם נגמרה לי הסוללה בטלפון או ששכחתי אותו?",a:"שום דבר לא תקוע: השער ממשיך לפעול כרגיל עם כל האמצעים הקיימים בבניין – הקודן, האינטרקום או המפתח הרגיל. LobbyGate רק מוסיף שכבת נוחות עליונה מבלי לפגוע במה שכבר קיים."},{q:"האם מתאים להתקנה בבניין משותף (ועד בית)?",a:'בהחלט, זהו אחד השימושים הפופולריים ביותר! במקום שוועד הבית יגבה 150–200 ש"ח על כל שלט פיזי שנאבד או נשבר, כל דייר מקבל גישה קלה דרך הטלפון שלו, ומנהל הבניין יכול לנהל מורשים בקלות.'}];return l.jsxs("div",{className:"lobbygate-marketing-page",children:[l.jsx("section",{className:"lobbygate-hero",children:l.jsxs("div",{className:"container hero-layout",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("div",{className:"hero-badge",children:l.jsx("span",{children:"🚪 פתרון חכם לדלתות ושערים • מבית 4S"})}),l.jsxs("h1",{className:"hero-main-title",children:["הידיים עמוסות בקניות?",l.jsx("span",{className:"hero-highlight",children:" השער נפתח לבד ברגע שהתקרבתם."})]}),l.jsx("p",{className:"hero-lead-text",children:"בלי שלט שנגמרת לו הסוללה, בלי לחפש צ'יפ בתחתית התיק, ובלי להוציא את הטלפון מהכיס. LobbyGate מזהה את הגעתכם ופותח את שער הבניין או החניה באופן חלק, אוטומטי ומאובטח. חוויית נוחות של מלון יוקרה אצלכם בבניין."}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsx("button",{onClick:p,className:"btn-cta-primary",children:"⚡ נסו את הדמיית פתיחת השער החיה"}),l.jsx("button",{onClick:u,className:"btn-cta-secondary",children:"💬 התאמה לבניין / שער שלכם"})]}),l.jsxs("div",{className:"hero-trust-badges",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"📱"}),l.jsx("span",{children:"הטלפון נשאר בכיס"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🛑"}),l.jsx("span",{children:"אפס צורך באפליקציה פתוחה"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"👨‍👩‍👧‍👦"}),l.jsx("span",{children:"לכל המשפחה והדיירים"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🔒"}),l.jsx("span",{children:"בטוח, מקומי ואמין"})]})]})]}),l.jsx("div",{className:"hero-visual-card",children:l.jsxs("div",{className:"gate-mockup-frame",children:[l.jsxs("div",{className:"gate-header-bar",children:[l.jsx("span",{className:"gate-badge-label",children:"LOBBYGATE CONTROLLER"}),l.jsx("span",{className:"radar-status-dot"})]}),l.jsxs("div",{className:"gate-scene-display",children:[l.jsxs("div",{className:"gate-doors-container",children:[l.jsx("div",{className:"gate-post gate-post-left"}),l.jsx("div",{className:"gate-door gate-wing-left"}),l.jsx("div",{className:"gate-center-lock",children:l.jsx("span",{className:"lock-icon",children:"🔓"})}),l.jsx("div",{className:"gate-door gate-wing-right"}),l.jsx("div",{className:"gate-post gate-post-right"})]}),l.jsxs("div",{className:"proximity-waves-wrap",children:[l.jsx("div",{className:"wave wave-1"}),l.jsx("div",{className:"wave wave-2"}),l.jsx("div",{className:"wave wave-3"})]}),l.jsxs("div",{className:"approaching-person-avatar",children:[l.jsx("span",{className:"person-emoji",children:"🚶🛍️"}),l.jsx("span",{className:"phone-in-pocket-tag",children:"📱 בכיס"})]})]}),l.jsxs("div",{className:"floating-gate-card",children:[l.jsxs("div",{className:"gate-card-header",children:[l.jsx("span",{className:"gate-id-tag",children:"LobbyGate • זוהית בהצלחה!"}),l.jsx("span",{className:"tag-time",children:"הרגע"})]}),l.jsxs("div",{className:"gate-card-body",children:[l.jsx("strong",{children:'"דוד ברק התקרב (2 מטרים) ✨"'}),l.jsx("p",{children:"השער נפתח אוטומטית. הידיים שלכם נשארות פנויות לחלוטין!"})]})]})]})})]})}),l.jsx("section",{className:"section comparison-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"ההבדל בין סרבול לקלות מוחלטת"}),l.jsx("h2",{className:"section-h2",children:"למה להמשיך להילחם עם מפתחות ושלטים?"}),l.jsx("p",{className:"section-subtitle",children:"כולנו מכירים את הרגע המתסכל הזה: הידיים תפוסות, יורד גשם, ואתם נאלצים לחפש שלט או להקליד קוד בקודן מלוכלך."})]}),l.jsxs("div",{className:"comparison-grid",children:[l.jsxs("div",{className:"comparison-card card-before",children:[l.jsx("div",{className:"card-top-status bad-status",children:"❌ בלי LobbyGate (הסיוט של שער רגיל)"}),l.jsxs("ul",{className:"comparison-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🛒"}),l.jsxs("div",{children:[l.jsx("strong",{children:"להניח את הקניות על הרצפה:"}),l.jsx("span",{children:"שקיות כבדות מהסופר שצריך להניח על המדרכה המלוכלכת רק כדי לחפש מפתח."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🔍"}),l.jsxs("div",{children:[l.jsx("strong",{children:"לחפש את השלט בחושך או בגשם:"}),l.jsx("span",{children:"חיפוש מעצבן של הצ'יפ או השלט בתחתית התיק או בכיסים הקפואים."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🔋"}),l.jsxs("div",{children:[l.jsx("strong",{children:"שלט שנשבר או שנגמרה לו הסוללה:"}),l.jsx("span",{children:"הסוללה של השלט תמיד נגמרת ברגע הכי לא מתאים, בדיוק כשממהרים."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"💸"}),l.jsxs("div",{children:[l.jsx("strong",{children:'200 ש"ח לכל שלט רזרבי:'}),l.jsx("span",{children:"קנסות יקרים לוועד הבית כדי לקנות שלטים נוספים לילדים או לשותפים."})]})]})]})]}),l.jsxs("div",{className:"comparison-card card-after",children:[l.jsx("div",{className:"card-top-status good-status",children:"✨ עם LobbyGate (נוחות יוקרתית בכל יום)"}),l.jsxs("ul",{className:"comparison-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🚶"}),l.jsxs("div",{children:[l.jsx("strong",{children:"פשוט מתקרבים והשער נפתח:"}),l.jsx("span",{children:"הידיים שלכם נשארות פנויות לחלוטין. לא מורידים שקיות ולא מחפשים כלום."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"📱"}),l.jsxs("div",{children:[l.jsx("strong",{children:"הטלפון נשאר בכיס או בתיק:"}),l.jsx("span",{children:"לא צריך להדליק את המסך, לא לפתוח אפליקציה ולא להוריד כפפות."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🆓"}),l.jsxs("div",{children:[l.jsx("strong",{children:"שלט דיגיטלי חינמי לכל המשפחה:"}),l.jsx("span",{children:"מוסיפים את הטלפונים של הילדים, בני הזוג והדיירים בשניות ללא שום עלות."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon-bullet",children:"🛡️"}),l.jsxs("div",{children:[l.jsx("strong",{children:"השער המקורי ממשיך לעבוד:"}),l.jsx("span",{children:"הקודן והשלטים הקיימים נשארים פעילים כגיבוי מלא. אפס סיכון."})]})]})]})]})]})]})}),l.jsx("section",{className:"section how-it-works-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"פשטות בהתקנה ובשימוש"}),l.jsx("h2",{className:"section-h2",children:"איך הקסם הזה עובד? ב-3 צעדים"}),l.jsx("p",{className:"section-subtitle",children:"מערכת שתוכננה להיות אלגנטית, שקטה, ופשוטה להפליא עבור המשתמש."})]}),l.jsxs("div",{className:"steps-cards-grid",children:[l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"1"}),l.jsx("div",{className:"step-icon-big",children:"🔌"}),l.jsx("h3",{children:"חיבור לשער או לאינטרקום"}),l.jsx("p",{children:"בקר ה-LobbyGate הקטן מתחבר במקביל למגע הלחצן של השער הקיים או למערכת האינטרקום. ההתקנה מהירה ואינה פוגעת במערכת הקיימת."}),l.jsx("span",{className:"step-pill",children:"מתאים לכל שער חשמלי"})]}),l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"2"}),l.jsx("div",{className:"step-icon-big",children:"📲"}),l.jsx("h3",{children:"צימוד הטלפון פעם אחת"}),l.jsx("p",{children:"מבצעים צימוד Bluetooth פשוט של 10 שניות מהטלפון שלכם (בדיוק כמו שמצמדים אוזניות או רמקול). אין צורך להתקין שום אפליקציה כבדה!"}),l.jsx("span",{className:"step-pill",children:"צימוד חד-פעמי קל"})]}),l.jsxs("div",{className:"step-marketing-card",children:[l.jsx("div",{className:"step-number-tag",children:"3"}),l.jsx("div",{className:"step-icon-big",children:"🚪"}),l.jsx("h3",{children:"זהו! פשוט צועדים קדימה"}),l.jsx("p",{children:"בכל פעם שאתם מגיעים לכניסה, הבקר מרגיש את נוכחות הטלפון בכיסכם ופותח את השער בצורה חלקה ונעימה."}),l.jsx("span",{className:"step-pill",children:"השער פתוח עבורכם"})]})]})]})}),l.jsx("section",{id:"gate-simulator",className:"section interactive-demo-section",children:l.jsxs("div",{className:"container",style:{maxWidth:"960px"},children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"סימולטור חי ואינטראקטיבי"}),l.jsx("h2",{className:"section-h2",children:"נסו את פתיחת השער בעצמכם!"}),l.jsx("p",{className:"section-subtitle",children:"לחצו על הכפתורים וראו איך השער מגיב בדיוק להתקרבות שלכם:"})]}),l.jsxs("div",{className:"simulator-box",children:[l.jsxs("div",{className:"simulator-controls-bar",children:[l.jsx("button",{onClick:()=>m("approaching"),className:`sim-btn ${d==="approaching"?"active":""}`,children:"🚶 1. התקרבות לשער (מרחק 6 מטר)"}),l.jsx("button",{onClick:()=>m("detected"),className:`sim-btn ${d==="detected"?"active":""}`,children:"✨ 2. זיהוי בלוטות' בכיס (מרחק 2 מטר)"}),l.jsx("button",{onClick:()=>c("open"),className:`sim-btn ${d==="open"?"active":""}`,children:"🚪 3. שער נפתח אוטומטית!"}),d!=="idle"&&l.jsx("button",{onClick:f,className:"sim-btn-reset",title:"איפוס",children:"🔄 איפוס"})]}),l.jsxs("div",{className:"sim-interactive-stage",children:[l.jsxs("div",{className:"sim-gate-environment",children:[l.jsxs("div",{className:"sim-gate-frame",children:[l.jsx("div",{className:"sim-column col-left",children:l.jsxs("div",{className:"sim-controller-box",children:[l.jsx("span",{className:"ctrl-led pulse-glow"}),l.jsx("small",{children:"LobbyGate"})]})}),l.jsx("div",{className:`sim-door-wing left-wing ${d==="open"?"door-open":""}`,children:l.jsx("div",{className:"gate-bars"})}),l.jsx("div",{className:`sim-door-wing right-wing ${d==="open"?"door-open":""}`,children:l.jsx("div",{className:"gate-bars"})}),l.jsx("div",{className:"sim-column col-right",children:l.jsx("div",{className:"intercom-keypad-mockup",children:l.jsx("div",{className:"keypad-dots"})})})]}),l.jsxs("div",{className:"distance-ground-tracker",children:[l.jsx("div",{className:"distance-marker m-10",children:"10 מטר"}),l.jsx("div",{className:"distance-marker m-5",children:"5 מטר"}),l.jsx("div",{className:"distance-marker m-0",children:"שער כניסה"}),l.jsxs("div",{className:`user-position-pin pos-${d}`,children:[l.jsx("span",{className:"pin-avatar",children:"🚶🛍️"}),l.jsx("span",{className:"pin-label",children:"אתם (הטלפון בכיס)"})]})]})]}),l.jsxs("div",{className:"sim-event-details",children:[l.jsxs("div",{className:"details-header",children:[l.jsx("span",{className:"details-title",children:"סטטוס זיהוי בזמן אמת:"}),l.jsxs("span",{className:`details-badge state-${d}`,children:[d==="idle"&&"שער סגור (ממתין לדייר)",d==="approaching"&&"דייר מתקרב (חיפוש אות)",d==="detected"&&"טלפון מורשה זוהה!",d==="open"&&"שער נפתח – ברוכים הבאים!"]})]}),l.jsxs("div",{className:"details-body",children:[d==="idle"&&l.jsxs("p",{children:["השער נעול ומאובטח. בקר ה-LobbyGate עומד בהאזנה שקטה ברקע. לחצו על ",l.jsx("strong",{children:'"1. התקרבות לשער"'})," כדי להתחיל."]}),d==="approaching"&&l.jsx("p",{children:"אתם צועדים לכיוון הדלת (הידיים מלאות בשקיות). הבקר קולט את אות ה-Bluetooth הנמוך ומזהה שדייר מוכר הולך ומתקרב."}),d==="detected"&&l.jsxs("p",{children:["✨ ",l.jsx("strong",{children:"אימות מאובטח הושלם!"})," הבקר אימת את המכשיר בכיסכם ממרחק של 2 מטרים. נשלחת פקודה מיידית לממסר השער לפתיחה!"]}),d==="open"&&l.jsx("div",{className:"sim-success-alert animate-bounce-in",children:l.jsxs("div",{className:"alert-content",children:[l.jsx("span",{className:"success-check-icon",children:"🎉 🔓"}),l.jsxs("div",{children:[l.jsx("strong",{children:"השער פתוח לרווחה!"}),l.jsx("p",{children:"אתם נכנסים הביתה בנוחות מושלמת בלי לגעת בשום דבר. השער ייסגר אוטומטית מאחוריכם."})]})]})})]}),l.jsxs("div",{className:"details-features-micro",children:[l.jsx("span",{children:"🔒 הצפנה מקומית"}),l.jsx("span",{children:"⚡ זמן תגובה: 0.3 שניות"}),l.jsx("span",{children:"🔋 0% סוללת טלפון"})]})]})]})]})]})}),l.jsx("section",{className:"section highlights-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"יתרונות שמורגשים בכל יום"}),l.jsx("h2",{className:"section-h2",children:"למה LobbyGate הוא שדרוג חובה לכל כניסה?"})]}),l.jsxs("div",{className:"features-showcase-grid",children:[l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🛍️"}),l.jsx("h3",{children:"חופש מוחלט בידיים"}),l.jsx("p",{children:"חוזרים מקניות עם שקיות כבדות? הילד נרדם על הידיים? מחזיקים מטריה בגשם? לא צריך להוריד שום דבר לרצפה – פשוט נכנסים."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🛑"}),l.jsx("h3",{children:"אפס תלות באפליקציות"}),l.jsx("p",{children:"לא צריך להוריד אפליקציה כבדה, לא צריך לפתוח את המסך, ולא צריך להמתין שהווידג'ט ייטען. הכל עובד אוטומטית ברקע."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🎯"}),l.jsx("h3",{children:"טווח מדויק ללא פתיחות שווא"}),l.jsx("p",{children:"המערכת מכוילת בדיוק לטווח הכניסה הקרוב, וכוללת מנגנון השהיה חכם שלא יפתח את השער שוב ושוב כשאתם סתם יושבים בסלון."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"👨‍👩‍👧‍👦"}),l.jsx("h3",{children:"מורשים ללא הגבלה וללא עלות"}),l.jsx("p",{children:"לכל בני המשפחה או הדיירים. הוספה של מורשה חדש אורכת שניות ספורות ומבטלת לחלוטין את הצורך ברכישת שלטים פיזיים יקרים."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🛡️"}),l.jsx("h3",{children:"בטוח, מקומי ועצמאי"}),l.jsx("p",{children:"המערכת אינה תלויה בעננים חיצוניים או בשרתים שיכולים לקרוס. הזיהוי מתבצע מקומית ומאובטח ברמת חומרה."})]}),l.jsxs("div",{className:"feature-item-box",children:[l.jsx("div",{className:"feat-icon-bubble",children:"🏢"}),l.jsx("h3",{children:"פתרון מושלם לוועדי בתים"}),l.jsx("p",{children:"חוסך לוועד הבית את כאב הראש של הזמנת שלטים, סוללות שהתרוקנו ותלונות דיירים. שדרוג יוקרתי ומבוקש לכל בניין."})]})]})]})}),l.jsx("section",{className:"section faq-section",children:l.jsxs("div",{className:"container",style:{maxWidth:"820px"},children:[l.jsxs("div",{className:"section-head-center",children:[l.jsx("span",{className:"sub-badge",children:"שאלות נפוצות"}),l.jsx("h2",{className:"section-h2",children:"כל מה שחשוב לדעת על LobbyGate"})]}),l.jsx("div",{className:"faq-accordion",children:g.map((w,C)=>l.jsxs("div",{className:`faq-card ${b===C?"open":""}`,onClick:()=>E(C),children:[l.jsxs("div",{className:"faq-question-row",children:[l.jsx("h4",{className:"faq-q-text",children:w.q}),l.jsx("span",{className:"faq-toggle-icon",children:b===C?"▲":"▼"})]}),b===C&&l.jsx("div",{className:"faq-answer-row animate-fade",children:l.jsx("p",{children:w.a})})]},C))}),l.jsxs("div",{className:"faq-footer-contact",children:[l.jsx("span",{children:"רוצים לבדוק התאמה לשער או לדלת שלכם?"}),l.jsx("button",{onClick:u,className:"btn-contact-link",children:"דברו ישירות עם דוד 💬"})]})]})}),l.jsx("section",{className:"section bottom-cta-section",children:l.jsx("div",{className:"container",style:{maxWidth:"780px"},children:l.jsxs("div",{className:"cta-highlight-box",children:[l.jsx("span",{className:"cta-mascot-icon",children:"🐒 🚪"}),l.jsx("h2",{className:"cta-h2",children:"מוכנים להיכנס הביתה בלי לחפש מפתחות?"}),l.jsx("p",{className:"cta-p",children:"נשמח להתאים את בקר ה-LobbyGate לשער הכניסה, דלת הלובי או מחסום החניה שלכם. התקנה מהירה, ללא שינוי במערכות הקיימות ובמחיר משתלם."}),l.jsx("div",{className:"cta-btn-center",children:l.jsx("button",{onClick:u,className:"btn-cta-big",children:"🚀 פנו אליי לפרטים והתאמה אישית"})})]})})}),l.jsx("style",{children:`
                .lobbygate-marketing-page {
                    font-family: 'Rubik', system-ui, -apple-system, sans-serif;
                    background-color: #fdfbf7;
                    color: #111827;
                    direction: rtl;
                    text-align: right;
                    overflow-x: clip;
                }

                /* HERO SECTION */
                .lobbygate-hero {
                    background: linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 100%);
                    border-bottom: 2.5px solid #111827;
                    padding: 4.5rem 0 4rem;
                }
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1.25fr 0.95fr;
                    gap: 3.5rem;
                    align-items: center;
                }
                .hero-badge {
                    display: inline-block;
                    background: #fde047;
                    color: #111827;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    padding: 0.35rem 0.9rem;
                    border-radius: 6px;
                    font-size: 0.88rem;
                    font-weight: 800;
                    margin-bottom: 1.25rem;
                }
                .hero-main-title {
                    font-size: 2.75rem;
                    font-weight: 900;
                    line-height: 1.25;
                    color: #111827;
                    margin-bottom: 1.25rem;
                }
                .hero-highlight {
                    color: #059669;
                    display: inline;
                }
                .hero-lead-text {
                    font-size: 1.18rem;
                    line-height: 1.75;
                    color: #374151;
                    margin-bottom: 2.25rem;
                }
                .hero-cta-group {
                    display: flex;
                    gap: 1.25rem;
                    flex-wrap: wrap;
                    margin-bottom: 2.5rem;
                }
                .btn-cta-primary {
                    background: #059669;
                    color: #ffffff;
                    padding: 0.95rem 1.85rem;
                    font-size: 1.05rem;
                    font-weight: 800;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-cta-primary:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                    background: #047857;
                }
                .btn-cta-primary:active {
                    transform: translate(2px, 2px);
                    box-shadow: 1px 1px 0px #111827;
                }
                .btn-cta-secondary {
                    background: #ffffff;
                    color: #111827;
                    padding: 0.95rem 1.6rem;
                    font-size: 1.05rem;
                    font-weight: 800;
                    border-radius: 8px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-cta-secondary:hover {
                    background: #fef08a;
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0px #111827;
                }
                .hero-trust-badges {
                    display: flex;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    padding-top: 1.25rem;
                    border-top: 1.5px dashed #94a3b8;
                }
                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #1f2937;
                }
                .trust-icon {
                    font-size: 1.15rem;
                }

                /* HERO VISUAL (MOCKUP WITH GATE & DETECT CARD) */
                .hero-visual-card {
                    display: flex;
                    justify-content: center;
                    position: relative;
                }
                .gate-mockup-frame {
                    width: 320px;
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 20px;
                    box-shadow: 6px 6px 0px #111827;
                    padding: 1.5rem;
                    position: relative;
                }
                .gate-header-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px dashed #cbd5e1;
                    padding-bottom: 0.85rem;
                    margin-bottom: 1.25rem;
                }
                .gate-badge-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #047857;
                    letter-spacing: 0.05em;
                }
                .radar-status-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
                    animation: pulse-green 2s infinite;
                }
                .gate-scene-display {
                    height: 220px;
                    background: #f8fafc;
                    border: 2px solid #111827;
                    border-radius: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.25rem 1rem;
                    position: relative;
                    overflow: hidden;
                }
                .gate-doors-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    width: 100%;
                }
                .gate-post {
                    width: 14px;
                    height: 90px;
                    background: #334155;
                    border: 2px solid #111827;
                    border-radius: 4px;
                }
                .gate-door {
                    flex: 1;
                    height: 80px;
                    background: #e2e8f0;
                    border: 2px solid #111827;
                    border-radius: 4px;
                    background-image: repeating-linear-gradient(90deg, transparent, transparent 8px, #94a3b8 8px, #94a3b8 10px);
                }
                .gate-center-lock {
                    position: absolute;
                    top: 50px;
                    background: #111827;
                    color: #fde047;
                    border-radius: 50%;
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                }
                .approaching-person-avatar {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #ffffff;
                    border: 2px solid #111827;
                    border-radius: 20px;
                    padding: 0.35rem 0.85rem;
                    box-shadow: 2px 2px 0px #111827;
                    z-index: 2;
                }
                .person-emoji {
                    font-size: 1.4rem;
                }
                .phone-in-pocket-tag {
                    font-size: 0.78rem;
                    font-weight: 800;
                    color: #047857;
                }
                .proximity-waves-wrap {
                    position: absolute;
                    top: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .wave {
                    position: absolute;
                    border: 2px solid rgba(16, 185, 129, 0.4);
                    border-radius: 50%;
                }
                .wave-1 { width: 80px; height: 80px; animation: expand-wave 2s infinite; }
                .wave-2 { width: 130px; height: 130px; animation: expand-wave 2s infinite 0.6s; }
                .wave-3 { width: 180px; height: 180px; animation: expand-wave 2s infinite 1.2s; }

                /* FLOATING NOTIFICATION CARD */
                .floating-gate-card {
                    position: absolute;
                    bottom: -30px;
                    left: -30px;
                    background: #111827;
                    color: #ffffff;
                    border: 2px solid #34d399;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
                    padding: 0.85rem 1rem;
                    width: 250px;
                    z-index: 5;
                    animation: float-notif 4s ease-in-out infinite;
                }
                .gate-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.72rem;
                    color: #34d399;
                    font-weight: 700;
                    margin-bottom: 0.35rem;
                }
                .gate-card-body strong {
                    display: block;
                    font-size: 0.88rem;
                    color: #fde047;
                    margin-bottom: 0.2rem;
                }
                .gate-card-body p {
                    font-size: 0.78rem;
                    color: #cbd5e1;
                    line-height: 1.35;
                    margin-bottom: 0;
                }

                /* COMPARISON SECTION */
                .comparison-section {
                    padding: 5rem 0;
                }
                .section-head-center {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 3.5rem;
                }
                .sub-badge {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0369a1;
                    font-weight: 800;
                    font-size: 0.85rem;
                    padding: 0.25rem 0.75rem;
                    border: 1.5px solid #111827;
                    border-radius: 4px;
                    box-shadow: 2px 2px 0px #111827;
                    margin-bottom: 0.85rem;
                }
                .section-h2 {
                    font-size: 2.35rem;
                    font-weight: 900;
                    color: #111827;
                    line-height: 1.25;
                    margin-bottom: 1rem;
                }
                .section-subtitle {
                    font-size: 1.12rem;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 0;
                }
                .comparison-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                .comparison-card {
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 16px;
                    box-shadow: 6px 6px 0px #111827;
                    overflow: hidden;
                }
                .card-top-status {
                    padding: 1rem 1.5rem;
                    font-size: 1.1rem;
                    font-weight: 800;
                    border-bottom: 2.5px solid #111827;
                }
                .bad-status {
                    background: #fee2e2;
                    color: #991b1b;
                }
                .good-status {
                    background: #dcfce7;
                    color: #166534;
                }
                .comparison-list {
                    list-style: none;
                    padding: 1.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin: 0;
                }
                .comparison-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 1rem;
                    line-height: 1.6;
                }
                .icon-bullet {
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    line-height: 1;
                }
                .comparison-list strong {
                    display: block;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.2rem;
                }
                .comparison-list span {
                    color: #4b5563;
                }

                /* 3 STEPS SECTION */
                .how-it-works-section {
                    background: #ffffff;
                    border-top: 2.5px solid #111827;
                    border-bottom: 2.5px solid #111827;
                    padding: 5rem 0;
                }
                .steps-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .step-marketing-card {
                    background: #fdfbf7;
                    border: 2.5px solid #111827;
                    border-radius: 14px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 2.25rem 1.75rem;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    transition: transform 0.2s ease;
                }
                .step-marketing-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 6px 6px 0px #111827;
                }
                .step-number-tag {
                    position: absolute;
                    top: -16px;
                    right: 20px;
                    background: #fde047;
                    color: #111827;
                    font-size: 1.15rem;
                    font-weight: 900;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .step-icon-big {
                    font-size: 2.75rem;
                    margin-bottom: 1.25rem;
                }
                .step-marketing-card h3 {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: #111827;
                    margin-bottom: 0.75rem;
                }
                .step-marketing-card p {
                    font-size: 1rem;
                    color: #4b5563;
                    line-height: 1.65;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                .step-pill {
                    background: #e2e8f0;
                    color: #334155;
                    font-size: 0.8rem;
                    font-weight: 800;
                    padding: 0.3rem 0.65rem;
                    border-radius: 6px;
                    align-self: flex-start;
                    border: 1px solid #cbd5e1;
                }

                /* INTERACTIVE SIMULATOR */
                .interactive-demo-section {
                    padding: 5rem 0;
                    background: #f1f5f9;
                    border-bottom: 2.5px solid #111827;
                }
                .simulator-box {
                    background: #ffffff;
                    border: 3px solid #111827;
                    border-radius: 18px;
                    box-shadow: 6px 6px 0px #111827;
                    padding: 2rem;
                }
                .simulator-controls-bar {
                    display: flex;
                    gap: 0.85rem;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 2px dashed #cbd5e1;
                }
                .sim-btn {
                    background: #ffffff;
                    color: #111827;
                    font-size: 0.95rem;
                    font-weight: 800;
                    padding: 0.7rem 1.2rem;
                    border: 2px solid #111827;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .sim-btn:hover {
                    background: #fef08a;
                    transform: translate(-1px, -1px);
                    box-shadow: 4px 4px 0px #111827;
                }
                .sim-btn.active {
                    background: #059669;
                    color: #ffffff;
                }
                .sim-btn-reset {
                    background: #fee2e2;
                    color: #991b1b;
                    font-weight: 800;
                    padding: 0.7rem 1rem;
                    border: 2px solid #111827;
                    border-radius: 8px;
                    box-shadow: 3px 3px 0px #111827;
                    cursor: pointer;
                }
                
                .sim-interactive-stage {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 2rem;
                    align-items: center;
                }
                .sim-gate-environment {
                    background: #f8fafc;
                    border: 2.5px solid #111827;
                    border-radius: 16px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 2rem 1.5rem;
                    position: relative;
                }
                .sim-gate-frame {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 140px;
                    position: relative;
                    margin-bottom: 2rem;
                }
                .sim-column {
                    width: 22px;
                    height: 100%;
                    background: #1e293b;
                    border: 2px solid #111827;
                    border-radius: 4px;
                    position: relative;
                    z-index: 3;
                }
                .sim-controller-box {
                    position: absolute;
                    top: 20px;
                    right: 28px;
                    background: #fef08a;
                    border: 2px solid #111827;
                    border-radius: 6px;
                    padding: 0.2rem 0.5rem;
                    font-size: 0.7rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    box-shadow: 2px 2px 0px #111827;
                    white-space: nowrap;
                }
                .ctrl-led {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #10b981;
                }
                .intercom-keypad-mockup {
                    position: absolute;
                    top: 30px;
                    left: 28px;
                    width: 18px;
                    height: 32px;
                    background: #334155;
                    border: 1.5px solid #111827;
                    border-radius: 3px;
                }
                .sim-door-wing {
                    flex: 1;
                    height: 110px;
                    background: #ffffff;
                    border: 2px solid #111827;
                    border-radius: 4px;
                    position: relative;
                    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    background-image: repeating-linear-gradient(90deg, transparent, transparent 12px, #cbd5e1 12px, #cbd5e1 14px);
                    transform-origin: center;
                }
                .left-wing {
                    transform-origin: right center;
                }
                .right-wing {
                    transform-origin: left center;
                }
                .door-open.left-wing {
                    transform: rotateY(-70deg) scaleX(0.7);
                    opacity: 0.6;
                }
                .door-open.right-wing {
                    transform: rotateY(70deg) scaleX(0.7);
                    opacity: 0.6;
                }

                /* GROUND DISTANCE TRACKER */
                .distance-ground-tracker {
                    position: relative;
                    height: 48px;
                    border-top: 2px dashed #94a3b8;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding-top: 0.5rem;
                }
                .distance-marker {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #64748b;
                }
                .user-position-pin {
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.6s ease;
                }
                .user-position-pin.pos-idle {
                    right: 5%;
                }
                .user-position-pin.pos-approaching {
                    right: 40%;
                }
                .user-position-pin.pos-detected,
                .user-position-pin.pos-open {
                    right: 75%;
                }
                .pin-avatar {
                    font-size: 1.75rem;
                }
                .pin-label {
                    font-size: 0.68rem;
                    font-weight: 800;
                    background: #111827;
                    color: #ffffff;
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    white-space: nowrap;
                }

                /* SIM EVENT DETAILS */
                .sim-event-details {
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    border-radius: 14px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 1.5rem;
                }
                .details-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1.5px dashed #cbd5e1;
                    padding-bottom: 0.75rem;
                    margin-bottom: 1.25rem;
                }
                .details-title {
                    font-weight: 800;
                    font-size: 0.95rem;
                    color: #111827;
                }
                .details-badge {
                    font-size: 0.8rem;
                    font-weight: 800;
                    padding: 0.25rem 0.65rem;
                    border-radius: 6px;
                    border: 1.5px solid #111827;
                }
                .state-idle { background: #e2e8f0; color: #334155; }
                .state-approaching { background: #fef08a; color: #854d0e; }
                .state-detected { background: #bbf7d0; color: #166534; }
                .state-open { background: #86efac; color: #14532d; }

                .details-body p {
                    font-size: 1rem;
                    line-height: 1.65;
                    color: #374151;
                    margin-bottom: 1.25rem;
                }
                .sim-success-alert {
                    background: #dcfce7;
                    border: 2px solid #16a34a;
                    border-radius: 10px;
                    padding: 1rem;
                    margin-bottom: 1.25rem;
                }
                .alert-content {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                }
                .success-check-icon {
                    font-size: 1.6rem;
                }
                .alert-content strong {
                    display: block;
                    font-size: 1rem;
                    color: #166534;
                    margin-bottom: 0.2rem;
                }
                .alert-content p {
                    font-size: 0.88rem;
                    color: #14532d;
                    line-height: 1.4;
                    margin: 0;
                }
                .details-features-micro {
                    display: flex;
                    gap: 0.85rem;
                    flex-wrap: wrap;
                    border-top: 1px dashed #cbd5e1;
                    padding-top: 0.85rem;
                    font-size: 0.78rem;
                    font-weight: 700;
                    color: #64748b;
                }

                /* FEATURES GRID */
                .highlights-section {
                    padding: 5rem 0;
                }
                .features-showcase-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.75rem;
                }
                .feature-item-box {
                    background: #ffffff;
                    border: 2.5px solid #111827;
                    border-radius: 14px;
                    box-shadow: 4px 4px 0px #111827;
                    padding: 2rem 1.5rem;
                }
                .feat-icon-bubble {
                    font-size: 2.2rem;
                    margin-bottom: 1rem;
                }
                .feature-item-box h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #111827;
                    margin-bottom: 0.65rem;
                }
                .feature-item-box p {
                    font-size: 0.95rem;
                    color: #4b5563;
                    line-height: 1.6;
                    margin-bottom: 0;
                }

                /* FAQ SECTION */
                .faq-section {
                    padding: 5rem 0;
                    border-top: 2.5px solid #111827;
                    background: #ffffff;
                }
                .faq-accordion {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }
                .faq-card {
                    background: #fdfbf7;
                    border: 2.5px solid #111827;
                    border-radius: 12px;
                    box-shadow: 3px 3px 0px #111827;
                    padding: 1.25rem 1.5rem;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .faq-card:hover {
                    background: #fef08a;
                }
                .faq-card.open {
                    background: #ffffff;
                    box-shadow: 4px 4px 0px #111827;
                }
                .faq-question-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                .faq-q-text {
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 0;
                }
                .faq-toggle-icon {
                    font-size: 0.85rem;
                    color: #64748b;
                    flex-shrink: 0;
                }
                .faq-answer-row {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1.5px dashed #cbd5e1;
                }
                .faq-answer-row p {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #374151;
                    margin: 0;
                }
                .faq-footer-contact {
                    text-align: center;
                    padding: 1.5rem;
                    background: #f8fafc;
                    border: 2px dashed #94a3b8;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #334155;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .btn-contact-link {
                    background: #111827;
                    color: #fde047;
                    font-size: 0.95rem;
                    font-weight: 800;
                    padding: 0.5rem 1.2rem;
                    border-radius: 6px;
                    border: 2px solid #111827;
                    box-shadow: 2px 2px 0px #111827;
                    cursor: pointer;
                    transition: transform 0.15s ease;
                }
                .btn-contact-link:hover {
                    transform: scale(1.05);
                }

                /* BOTTOM CALL TO ACTION */
                .bottom-cta-section {
                    padding: 5rem 0 6rem;
                    background: #fdfbf7;
                }
                .cta-highlight-box {
                    background: #d1fae5;
                    border: 3.5px solid #111827;
                    border-radius: 20px;
                    box-shadow: 8px 8px 0px #111827;
                    padding: 3.5rem 2.5rem;
                    text-align: center;
                }
                .cta-mascot-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                }
                .cta-h2 {
                    font-size: 2.35rem;
                    font-weight: 900;
                    color: #111827;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }
                .cta-p {
                    font-size: 1.15rem;
                    color: #1f2937;
                    line-height: 1.7;
                    max-width: 620px;
                    margin: 0 auto 2.5rem;
                }
                .cta-btn-center {
                    display: flex;
                    justify-content: center;
                }
                .btn-cta-big {
                    background: #111827;
                    color: #ffffff;
                    font-size: 1.15rem;
                    font-weight: 800;
                    padding: 1.1rem 2.25rem;
                    border-radius: 10px;
                    border: 2.5px solid #111827;
                    box-shadow: 4px 4px 0px #111827;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }
                .btn-cta-big:hover {
                    background: #059669;
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0px #111827;
                }

                /* ANIMATIONS */
                @keyframes float-notif {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes pulse-green {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                    50% { transform: scale(1.2); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
                }
                @keyframes expand-wave {
                    0% { transform: scale(0.6); opacity: 0.8; }
                    100% { transform: scale(1.3); opacity: 0; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade {
                    animation: fadeIn 0.35s ease-out;
                }
                .animate-bounce-in {
                    animation: fadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                /* RESPONSIVE DESIGN (MOBILE & TABLET) */
                @media (max-width: 992px) {
                    .hero-layout {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-cta-group {
                        justify-content: center;
                    }
                    .hero-trust-badges {
                        justify-content: center;
                    }
                    .comparison-grid {
                        grid-template-columns: 1fr;
                    }
                    .steps-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .features-showcase-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .sim-interactive-stage {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .hero-main-title {
                        font-size: 2.15rem;
                    }
                    .hero-lead-text {
                        font-size: 1.05rem;
                    }
                    .section-h2 {
                        font-size: 1.85rem;
                    }
                    .gate-mockup-frame {
                        width: 280px;
                        padding: 1.25rem;
                    }
                    .floating-gate-card {
                        left: -10px;
                        right: -10px;
                        width: auto;
                        bottom: -35px;
                    }
                    .features-showcase-grid {
                        grid-template-columns: 1fr;
                    }
                    .simulator-box {
                        padding: 1.25rem;
                    }
                    .sim-btn {
                        width: 100%;
                        font-size: 0.9rem;
                    }
                    .cta-highlight-box {
                        padding: 2.5rem 1.5rem;
                    }
                    .cta-h2 {
                        font-size: 1.85rem;
                    }
                }
            `})]})},z0=()=>{const[s,u]=z.useState(!1),[d,c]=z.useState("תג עמיד"),[x,b]=z.useState("finder"),[y,E]=z.useState(!1),[m,f]=z.useState(""),[p,g]=z.useState(null),w=G=>{g(p===G?null:G)},C=(G="תג עמיד")=>{c(G),u(!0)},M=()=>{E(!0);const L=new Date().toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit"});f(L)},H=G=>{const L=document.getElementById(G);L&&L.scrollIntoView({behavior:"smooth"})},B=[{q:"מה ההבדל בין תג FindMyDog לשבב הרגיל שהווטרינר החדיר לכלב?",a:"שבב תת-עורי רגיל הוא פסיבי לחלוטין. כדי לקרוא אותו, המוצא חייב להעלות את הכלב לרכב, לנסוע למרפאה וטרינרית פתוחה (מה קורה בלילה או בחג?), ולקוות שהטלפון שלכם מעודכן במאגר הישן. תג FindMyDog מאפשר לכל עובר אורח ברחוב או בפארק לסרוק במצלמת הנייד שלו בשנייה אחת – לקבל התראת GPS מיידית וליצור איתכם קשר מיידי בצ'אט אנונימי מוצפן ומאובטח!"},{q:"האם האדם שמוצא את הכלב צריך להוריד אפליקציה?",a:"ממש לא! וזה היתרון הכי גדול של המערכת. כל סמארטפון (אייפון או אנדרואיד) פותח את כרטיס הכלב ישירות בדפדפן הרגיל של הטלפון דרך סריקת קוד ה-QR במצלמה. ללא כל התקנה או הרשמה למאתר."},{q:"האם יש דמי מנוי חודשיים על השימוש במערכת?",a:"לא! אין שום דמי מנוי חודשיים או תשלומים נסתרים. רכישת התג כוללת את השירות, הפרופיל הדיגיטלי, התראות ה-GPS והצ'אט המאובטח לכל החיים של הכלב."},{q:"מה אם הכלב איבד את הקולר עם התג?",a:"בדיוק בשביל זה פיתחנו את טכנולוגיית הזיהוי הביומטרי (AI Face Scan). תוכלו לרשום את צילומי הפנים של הכלב שלכם במערכת, וכל מוצא יכול לצלם את פני הכלב בנייד כדי לזהות אותו מול המאגר הארצי שלנו – גם ללא קולר!"},{q:"האם פרטי הקשר או מספר הטלפון שלי נחשפים למי שסורק?",a:"ממש לא! המערכת אנונימית לחלוטין לשני הצדדים – זהו אחד מסימני ההיכר הייחודיים של FindMyDog. כל התקשורת מתבצעת בצורה מוצפנת ומאובטחת ישירות דרך המערכת, מבלי לחשוף מספרי טלפון, פרטים אישיים או כתובות של אף אחד מהצדדים."},{q:"איך עובדת תוכנית השגרירים ואיך מקבלים תג בחינם?",a:'כחלק מהשקת המוצר, אנחנו מעניקים תגי FindMyDog בחינם להורים לכלבים שמוכנים להתנסות במוצר ולספק משוב קצר. פשוט לוחצים על "תג חינם לשגרירים" וממלאים טופס קצרצר!'}];return l.jsxs("div",{className:"fmd-home-page",dir:"rtl",children:[l.jsx("div",{className:"urgency-strip",children:l.jsxs("div",{className:"container d-flex justify-content-between align-items-center flex-wrap gap-2",children:[l.jsxs("div",{className:"strip-item",children:[l.jsx("span",{className:"strip-icon",children:"💡"}),l.jsxs("span",{children:[l.jsx("strong",{children:"ידעתם?"})," 90% מהכלבים האבודים נמצאים ב-12 השעות הראשונות אם פועלים מיד."]})]}),l.jsxs("div",{className:"strip-item d-none d-md-flex align-items-center gap-2",children:[l.jsx("span",{className:"badge-pill-live",children:"פעיל עכשיו"}),l.jsx("span",{children:"ללא צורך באפליקציה למאתר • התראת GPS מיידית • 100% פרטיות"})]})]})}),l.jsx("section",{className:"section hero-main-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"hero-grid",children:[l.jsxs("div",{className:"hero-copy-col",children:[l.jsx("div",{className:"hero-badge-pill",children:"🐕 הפתרון הבטוח והמהיר ביותר לכלבים אהובים"}),l.jsxs("h1",{className:"hero-headline",children:["הכלב הלך לאיבוד? ",l.jsx("br",{}),l.jsx("span",{className:"text-highlight",children:"החזירו אותו הביתה"})," ",l.jsx("br",{}),"עוד לפני שנכנסתם ללחץ."]}),l.jsxs("p",{className:"hero-subtext",children:["השיטה הישנה של שבב תת-עורי דורשת להגיע למרפאה וטרינרית פתוחה. עם ",l.jsx("strong",{children:"FindMyDog"}),", כל עובר אורח סורק את התג במצלמת הטלפון שלו – ואתם מקבלים ",l.jsx("strong",{children:"מיקום GPS מדויק והתראה בצ'אט אנונימי מוצפן"})," תוך שניות."]}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsx("button",{type:"button",onClick:()=>H("shop-showcase"),className:"btn-neo-primary",children:"הזמינו תג חכם עכשיו 🐾"}),l.jsx("button",{type:"button",onClick:()=>H("interactive-scan"),className:"btn-neo-secondary",children:"⚡ נסו את הדמיית הסריקה החיה"})]}),l.jsxs("div",{className:"hero-ambassador-bar",children:[l.jsx("span",{children:"רוצים לקבל תג חינם תמורת משוב קצר?"}),l.jsx(Pe,{to:"/find-my-dog/ambassador",className:"ambassador-link-inline",children:"הצטרפו לנבחרת השגרירים שלנו 🎁"})]}),l.jsxs("div",{className:"hero-trust-badges",children:[l.jsxs("div",{className:"trust-badge-item",children:[l.jsx("span",{className:"tb-icon",children:"📱"}),l.jsxs("div",{className:"tb-text",children:[l.jsx("strong",{children:"אפס התקנה למוצא"}),l.jsx("span",{children:"עובד בכל סמארטפון רגיל"})]})]}),l.jsxs("div",{className:"trust-badge-item",children:[l.jsx("span",{className:"tb-icon",children:"📍"}),l.jsxs("div",{className:"tb-text",children:[l.jsx("strong",{children:"התראת מיקום GPS"}),l.jsx("span",{children:"נשלחת אליכם ברגע הסריקה"})]})]}),l.jsxs("div",{className:"trust-badge-item",children:[l.jsx("span",{className:"tb-icon",children:"🔒"}),l.jsxs("div",{className:"tb-text",children:[l.jsx("strong",{children:"100% פרטיות ובטיחות"}),l.jsx("span",{children:"המספר שלכם מוגן מפני זרים"})]})]})]})]}),l.jsx("div",{className:"hero-visual-col",children:l.jsxs("div",{className:"hero-visual-stack",children:[l.jsxs("div",{className:"tag-hero-card",children:[l.jsxs("div",{className:"thc-header",children:[l.jsxs("span",{className:"thc-status-live",children:[l.jsx("span",{className:"live-dot-green"}),"התראת איתור בזמן אמת"]}),l.jsx("span",{className:"thc-model",children:"FindMyDog Smart Tag"})]}),l.jsxs("div",{className:"thc-dog-showcase",children:[l.jsx("div",{className:"dog-avatar-ring",children:l.jsx("img",{src:"/assets/finder-interface.jpg",alt:"לוקה - כלב חכם של FindMyDog",className:"dog-thumb-img",onError:G=>{G.target.onerror=null,G.target.src="/assets/case-blue-4s.jpg"}})}),l.jsxs("div",{className:"dog-info-text",children:[l.jsx("h3",{className:"dog-name",children:"לוקה (רועה אוסטרלי)"}),l.jsx("p",{className:"dog-micro-details",children:"📍 אזור תל אביב והמרכז • תקשורת מוצפנת ואנונימית 🔒"}),l.jsxs("div",{className:"dog-tag-pills",children:[l.jsx("span",{className:"pill-urgent",children:"🚨 במצב אבוד"}),l.jsx("span",{className:"pill-med",children:"💊 אלרגי לעוף"}),l.jsx("span",{className:"pill-peace",children:"❤️ ידידותי מאוד"})]})]})]}),l.jsxs("div",{className:"thc-alert-bubble",children:[l.jsx("div",{className:"tab-icon-wrap",children:"⚡"}),l.jsxs("div",{className:"tab-details",children:[l.jsx("strong",{children:"סריקה זוהתה לפני 30 שניות!"}),l.jsxs("p",{children:["המוצא שיתף מיקום: ",l.jsx("strong",{children:"שדרות רוטשילד 45, תל אביב"})]})]}),l.jsx("button",{type:"button",onClick:()=>H("interactive-scan"),className:"tab-action-btn",children:"צפה במפה"})]}),l.jsxs("div",{className:"thc-features-strip",children:[l.jsxs("div",{className:"fs-item",children:[l.jsx("span",{className:"fs-emoji",children:"💧"}),l.jsx("span",{children:"עמיד במים ובוץ"})]}),l.jsxs("div",{className:"fs-item",children:[l.jsx("span",{className:"fs-emoji",children:"🔋"}),l.jsx("span",{children:"ללא צורך בסוללות"})]}),l.jsxs("div",{className:"fs-item",children:[l.jsx("span",{className:"fs-emoji",children:"🔕"}),l.jsx("span",{children:"תג עמיד ושקט לחלוטין"})]})]})]}),l.jsxs("div",{className:"hero-floating-quote",children:[l.jsx("div",{className:"quote-stars",children:"⭐⭐⭐⭐⭐"}),l.jsx("p",{className:"quote-text",children:'"תוך 8 דקות מרגע שמיקה ברחה בפארק, שכנה סרקה את התג וקיבלתי מיקום מדויק ב-GPS ישר לטלפון. הצלתם אותנו מהתקף לב!"'}),l.jsx("span",{className:"quote-author",children:"– שירה ומיקה (גבעתיים)"})]})]})})]})})}),l.jsx("section",{className:"section bg-warm-contrast",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"למה שבב וטרינרי ישן פשוט לא מספיק?"}),l.jsx("h2",{className:"section-title",children:"השיטה המסורבלת של פעם מול החופש של FindMyDog"}),l.jsx("p",{className:"section-desc",children:"שבב תת-עורי הוא חשוב בחוק, אבל כשהכלב שלכם אבוד ומפוחד ברחוב – אף עובר אורח לא יכול לעשות איתו כלום."})]}),l.jsxs("div",{className:"compare-grid",children:[l.jsxs("div",{className:"compare-card compare-card-old",children:[l.jsxs("div",{className:"compare-card-head",children:[l.jsx("span",{className:"badge-old",children:"❌ השיטה הישנה (שבב תת-עורי בלבד)"}),l.jsx("h3",{children:"מה קורה כשהכלב נעלם כיום?"})]}),l.jsxs("ul",{className:"compare-list compare-list-old",children:[l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"🚫"}),l.jsxs("div",{children:[l.jsx("strong",{children:"עובר האורח חסר אונים:"})," אין לו שום דרך לדעת למי שייך הכלב או איך קוראים לו."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"🚗"}),l.jsxs("div",{children:[l.jsx("strong",{children:"סיוט לוגיסטי:"})," המוצא צריך להעלות כלב זר לרכב שלו ולנסוע לחפש מרפאה וטרינרית."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"⌛"}),l.jsxs("div",{children:[l.jsx("strong",{children:"שעות פעילות מוגבלות:"})," מה אם הכלב נאבד בערב, בשבת או בחג כשהמרפאות סגורות?"]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"📉"}),l.jsxs("div",{children:[l.jsx("strong",{children:"מאגרים ישנים ולא מעודכנים:"})," המספר שלכם השתנה או עברתם דירה? הסיכוי שיאתרו אתכם צונח."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"💔"}),l.jsxs("div",{children:[l.jsx("strong",{children:"שעות של חרדה ודמעות"})," עד שהכלב בכלל מגיע לידיים של איש מקצוע."]})]})]})]}),l.jsxs("div",{className:"compare-card compare-card-new",children:[l.jsx("div",{className:"badge-best-choice",children:"✨ הפתרון המהפכני של FindMyDog"}),l.jsxs("div",{className:"compare-card-head",children:[l.jsx("span",{className:"badge-new-fmd",children:"✅ תג חכם + מערכת ענן מהירה"}),l.jsx("h3",{children:"איך הכלב חוזר הביתה תוך דקות?"})]}),l.jsxs("ul",{className:"compare-list compare-list-new",children:[l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"📱"}),l.jsxs("div",{children:[l.jsx("strong",{children:"סריקה מיידית מכל נייד:"})," המוצא רק פותח את המצלמה של הסמארטפון – וכרטיס הכלב נפתח ברגע!"]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"📍"}),l.jsxs("div",{children:[l.jsx("strong",{children:"התראת מיקום GPS ישירות אליכם:"})," אתם מקבלים התראה עם נקודת הציון המדויקת שבה הכלב נסרק."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"💬"}),l.jsxs("div",{children:[l.jsx("strong",{children:"תקשורת אנונימית ומוצפנת לחלוטין:"})," המוצא והבעלים מתקשרים ישירות בצ'אט חירום מאובטח ואנונימי דרך המערכת, ללא חשיפת מספרי טלפון או פרטים אישיים של אף אחד מהצדדים."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"🩺"}),l.jsxs("div",{children:[l.jsx("strong",{children:"כרטיס רפואי והנחיות:"})," המוצא רואה מיד אם הכלב זקוק לתרופה, אלרגי למזון, או אם הוא חרדתי."]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"li-icon",children:"🎉"}),l.jsxs("div",{children:[l.jsx("strong",{children:"הקלה מיידית תוך דקות:"})," הכלב חוזר אליכם עוד לפני שהספקתם להדפיס מודעות ברחוב."]})]})]})]})]})]})}),l.jsx("section",{id:"how-it-works",className:"section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"פשוט כמו 1, 2, 3"}),l.jsx("h2",{className:"section-title",children:"איך זה עובד בפועל?"}),l.jsx("p",{className:"section-desc",children:"בלי תהליכים מסובכים ובלי להסתבך. שני צעדים קלים שלכם, והכלב מוגן לכל החיים."})]}),l.jsxs("div",{className:"steps-3-grid",children:[l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-number-badge",children:"1"}),l.jsx("div",{className:"step-icon-wrap",children:"🦮"}),l.jsx("h3",{className:"step-title",children:"מחברים את התג לקולר"}),l.jsx("p",{className:"step-text",children:"התג קל במיוחד, עמיד ונוח על הצוואר. הוא שקט לחלוטין (לא מקרקש באוזניים של הכלב) ועמיד ב-100% למים, בוץ ומשחקי דשא."}),l.jsx("div",{className:"step-footer-pill",children:"מתאים לכל קולר או רתמה"})]}),l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-number-badge",children:"2"}),l.jsx("div",{className:"step-icon-wrap",children:"⚡"}),l.jsx("h3",{className:"step-title",children:"מגדירים פרופיל ב-2 דקות"}),l.jsx("p",{className:"step-text",children:"סורקים את התג פעם אחת עם הנייד שלכם. מזינים את שם הכלב, תמונה יפה, מידע רפואי והנחיות למוצא. אין צורך להתקין אפליקציה כבדה."}),l.jsx("div",{className:"step-footer-pill",children:"אפשר לעדכן פרטים בכל עת בחינם"})]}),l.jsxs("div",{className:"step-card highlight-step",children:[l.jsx("div",{className:"step-number-badge",children:"3"}),l.jsx("div",{className:"step-icon-wrap",children:"🏡"}),l.jsx("h3",{className:"step-title",children:"חזרה בטוחה ומיידית הביתה!"}),l.jsx("p",{className:"step-text",children:"אם הכלב משתחרר או נבהל מזיקוקים – כל מי שפוגש בו סורק את התג. אתם מקבלים מיד התראת GPS בטלפון, והמוצא מתקשר איתכם בצ'אט מאובטח, מוצפן ואנונימי."}),l.jsx("div",{className:"step-footer-pill pill-green",children:"90% מהכלבים אותרו תוך שעה!"})]})]}),l.jsx("div",{className:"text-center mt-5",children:l.jsx("button",{type:"button",onClick:()=>H("shop-showcase"),className:"btn-neo-primary",children:"הזמינו עכשיו את התג החכם שלכם 🐾"})})]})}),l.jsx("section",{id:"interactive-scan",className:"section bg-warm-contrast",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"⚡ הדמיה אינטראקטיבית חיה"}),l.jsx("h2",{className:"section-title",children:"נסו בעצמכם: מה קורה כשהתג נסרק ברחוב?"}),l.jsx("p",{className:"section-desc",children:"בחרו בין תצוגת האדם שמצא את הכלב, לבין התראת ה-GPS המיידית שאתם כבעלים מקבלים בנייד:"})]}),l.jsxs("div",{className:"sim-tabs-wrap",children:[l.jsx("button",{type:"button",className:`sim-tab-btn ${x==="finder"?"active":""}`,onClick:()=>b("finder"),children:"📱 1. מה רואה המוצא בסמארטפון שלו? (ללא אפליקציה)"}),l.jsx("button",{type:"button",className:`sim-tab-btn ${x==="owner"?"active":""}`,onClick:()=>b("owner"),children:"🔔 2. מה הבעלים מקבל ברגע הסריקה? (התראת GPS חיה)"})]}),l.jsx("div",{className:"simulator-phone-wrapper",children:x==="finder"?l.jsxs("div",{className:"phone-screen-mock",children:[l.jsxs("div",{className:"phone-notch",children:[l.jsx("span",{className:"notch-time",children:"14:32"}),l.jsx("div",{className:"notch-speaker"}),l.jsx("span",{className:"notch-battery",children:"🔋 87%"})]}),l.jsxs("div",{className:"finder-header",children:[l.jsxs("div",{className:"finder-brand",children:[l.jsx("span",{className:"fb-paw",children:"🐾"}),l.jsx("span",{children:"FindMyDog Finder"})]}),l.jsx("span",{className:"finder-status-badge",children:"⚠️ כלב מוגדר כאבוד!"})]}),l.jsxs("div",{className:"finder-dog-card",children:[l.jsxs("div",{className:"dog-big-photo-box",children:[l.jsx("img",{src:"/assets/finder-interface.jpg",alt:"לוקה הכלב",className:"dog-sim-photo",onError:G=>{G.target.onerror=null,G.target.src="/assets/community-scene.jpg"}}),l.jsxs("div",{className:"dog-floating-name",children:[l.jsx("h3",{children:"לוקה (Luka) 🐕"}),l.jsx("span",{children:"רועה אוסטרלי מעורב • זכר • בן 3"})]})]}),l.jsxs("div",{className:"finder-owner-message",children:[l.jsx("strong",{children:"הודעה מבעלי הכלב:"}),l.jsx("p",{children:'"היי! תודה רבה שמצאתם את לוקה שלנו. הוא כלב עדין ומאוד ידידותי, אך נבהל מרעשים חזקים. אנא צרו איתנו קשר מיד, אנחנו מתגעגעים!"'})]}),l.jsxs("div",{className:"finder-med-badges",children:[l.jsx("div",{className:"fmb-pill pill-alert",children:"💊 זקוק לתרופה יומית"}),l.jsx("div",{className:"fmb-pill pill-warn",children:"🌾 אלרגי לעוף ולגלוטן"}),l.jsx("div",{className:"fmb-pill pill-safe",children:"👶 אוהב ילדים"})]}),l.jsx("div",{className:"finder-gps-action-box",children:y?l.jsxs("div",{className:"location-success-card animate-fade",children:[l.jsx("span",{className:"lsc-icon",children:"✅"}),l.jsxs("div",{children:[l.jsxs("strong",{children:["המיקום נשלח בהצלחה לבעלים! (",m,")"]}),l.jsx("p",{children:"נקודות ציון מדויקות (שדרות רוטשילד, תל אביב) הועברו אליהם ב-SMS ובמייל."})]})]}):l.jsx("button",{type:"button",onClick:M,className:"btn-share-location-sim",children:"📍 לחצו כאן לשיתוף מיקום הכלב עם הבעלים בלחיצה אחת"})}),l.jsx("div",{className:"finder-contact-actions",children:l.jsx("button",{type:"button",onClick:()=>alert("מדמה פתיחת צ'אט אנונימי ומוצפן ישירות עם בעלי הכלב!"),className:"btn-finder-chat",children:"💬 פתח צ'אט חירום אנונימי ומוצפן עם הבעלים"})}),l.jsxs("div",{className:"finder-anon-footer",children:["🔒 ",l.jsx("span",{children:"100% אנונימי ומאובטח: התקשורת מתבצעת ישירות במערכת ללא חשיפת מספרי טלפון לשני הצדדים."})]})]})]}):l.jsxs("div",{className:"phone-screen-mock",children:[l.jsxs("div",{className:"phone-notch",children:[l.jsx("span",{className:"notch-time",children:"14:33"}),l.jsx("div",{className:"notch-speaker"}),l.jsx("span",{className:"notch-battery",children:"🔋 92%"})]}),l.jsxs("div",{className:"owner-push-notification",children:[l.jsxs("div",{className:"opn-header",children:[l.jsx("span",{className:"opn-app-icon",children:"🔔 FindMyDog Alert"}),l.jsx("span",{className:"opn-time",children:"כרגע"})]}),l.jsx("h4",{className:"opn-title",children:"התג של לוקה נסרק עכשיו! 🚨"}),l.jsx("p",{className:"opn-body",children:"מישהו סרק את התג של לוקה ושיתף מיקום GPS חי. לחצו לצפייה במפה ובפרטי המוצא."})]}),l.jsxs("div",{className:"owner-map-card",children:[l.jsxs("div",{className:"map-radar-header",children:[l.jsx("span",{className:"radar-ping-dot"}),l.jsx("strong",{children:"מיקום נוכחי זוהה בדיוק של 3 מטרים"})]}),l.jsxs("div",{className:"map-view-box",children:[l.jsx("div",{className:"map-grid-graphic",children:l.jsxs("div",{className:"map-pin-pulse",children:[l.jsx("span",{className:"pin-marker",children:"📍"}),l.jsx("div",{className:"pin-pulse-wave"}),l.jsx("span",{className:"pin-label",children:"לוקה כאן! 🐕"})]})}),l.jsx("div",{className:"map-address-banner",children:l.jsx("span",{children:"📌 שדרות רוטשילד 45, תל אביב (ליד בית הקפה)"})})]}),l.jsxs("div",{className:"owner-nav-actions",children:[l.jsx("button",{type:"button",className:"btn-nav-waze",onClick:()=>alert("מדמה פתיחת מסלול ניווט מהיר אל הכלב ב-Waze!"),children:"🚗 נווט מיד ב-Waze"}),l.jsx("button",{type:"button",className:"btn-nav-google",onClick:()=>alert("מדמה פתיחת Google Maps"),children:"🗺️ פתח ב-Google Maps"})]}),l.jsxs("div",{className:"owner-incoming-message",children:[l.jsx("span",{className:"oim-sender",children:"הודעה אנונימית מהמוצא:"}),l.jsx("p",{className:"oim-text",children:'"היי! פגשתי את לוקה ליד בית הקפה, שמתי עליו רצועה והוא שותה קצת מים. מחכה לכם כאן!"'}),l.jsx("div",{className:"oim-actions",children:l.jsx("button",{type:"button",className:"btn-oim-chat",onClick:()=>alert("מדמה שליחת מענה מיידי בצ'אט האנונימי המוצפן"),children:"💬 מענה מיידי בצ'אט האנונימי המוצפן"})})]})]})]})}),l.jsx("div",{className:"sim-bottom-explainer text-center",children:l.jsxs("p",{children:["💡 ",l.jsx("strong",{children:"חשוב לדעת:"})," כל התהליך מתבצע ללא צורך בהתקנת שום אפליקציה למאתר, ותוך שמירה מוחלטת על אנונימיות מלאה לשני הצדדים ואפס חשיפה של מספרי טלפון או פרטים אישיים."]})})]})}),l.jsx("section",{className:"section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"טכנולוגיה שעובדת בשבילכם"}),l.jsx("h2",{className:"section-title",children:"יתרונות העל שמגנים על הכלב שלכם 24/7"}),l.jsx("p",{className:"section-desc",children:"FindMyDog היא לא סתם לוחית שם. זוהי מערכת בטיחות קהילתית מקיפה שנבנתה באהבה לכלבים."})]}),l.jsxs("div",{className:"superpowers-grid",children:[l.jsxs("div",{className:"superpower-card",children:[l.jsx("div",{className:"sp-icon-box",children:"👨‍👩‍👧‍👦"}),l.jsx("h3",{className:"sp-title",children:"שומרים משותפים (Co-Guardians)"}),l.jsxs("p",{className:"sp-desc",children:["הכלב הוא חלק מהמשפחה! תוכלו להגדיר מספר אנשי קשר במקביל (בן/בת הזוג, הילדים, הדוגווקר והפנסיון) כך שכולם יקבלו את התראת המיקום בו-זמנית. בנוסף, המערכת כוללת ",l.jsx("strong",{children:"הגנה מתקדמת מפני התחזות וגניבת בעלות"}),"."]}),l.jsx("div",{className:"sp-footer-link",children:l.jsx("span",{className:"sp-privacy-pill",children:"👥 שיתוף משפחתי רב-משתמשים"})})]}),l.jsxs("div",{className:"superpower-card",children:[l.jsx("div",{className:"sp-icon-box",children:"🌐"}),l.jsx("h3",{className:"sp-title",children:"רשת חילוץ קהילתית שכונתית"}),l.jsx("p",{className:"sp-desc",children:'"Waze של כלבים": אם כלב מוגדר כאבוד, בלחיצת כפתור אחת מופצת התראה לכל קהילת FindMyDog, לבעלי הכלבים ולעסקים ידידותיים לחיות ברדיוס הקרוב שלכם לסיוע באיתור מהיר.'}),l.jsx("div",{className:"sp-footer-link",children:l.jsx("span",{className:"sp-privacy-pill",children:"🚨 רשת התראות שכונתית"})})]}),l.jsxs("div",{className:"superpower-card",children:[l.jsx("div",{className:"sp-icon-box",children:"🐾"}),l.jsx("h3",{className:"sp-title",children:"זיהוי ביומטרי חכם (AI Face Scan)"}),l.jsx("p",{className:"sp-desc",children:"מה אם הכלב השתחרר מהקולר והתג אבד? פיתחנו מודל בינה מלאכותית פורץ דרך הממפה עשרות נקודות ציון בפני הכלב ובטביעת האף הייחודית שלו. צילום מהיר בנייד יכול לזהות אותו מול המאגר!"}),l.jsx("div",{className:"sp-footer-link",children:l.jsx("span",{className:"sp-privacy-pill",children:"🧬 גיבוי AI ללא קולר"})})]}),l.jsxs("div",{className:"superpower-card",children:[l.jsx("div",{className:"sp-icon-box",children:"🛡️"}),l.jsx("h3",{className:"sp-title",children:"אנונימיות מוחלטת והצפנה מקצה לקצה"}),l.jsx("p",{className:"sp-desc",children:"בניגוד לתגיות רגילות שעליהן הטלפון שלכם חשוף לכל עובר אורח, ב-FindMyDog המערכת אנונימית ב-100% לשני הצדדים. כל התקשורת מנוהלת ישירות בצ'אט חירום מוצפן ומאובטח במערכת – ללא שום חשיפה של מספרי טלפון, פרטים מזהים או מידע אישי."}),l.jsx("div",{className:"sp-footer-link",children:l.jsx("span",{className:"sp-privacy-pill",children:"🔒 100% אנונימי לשני הצדדים • מוצפן בענן"})})]})]})]})}),l.jsx("section",{id:"shop-showcase",className:"section bg-warm-contrast",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"🛍️ בחרו את התג המתאים לכם"}),l.jsx("h2",{className:"section-title",children:"תגי FindMyDog החכמים – יפים, עמידים וללא דמי מנוי"}),l.jsx("p",{className:"section-desc",children:"כל תג כולל קוד QR חכם ומהיר, פרופיל דיגיטלי מלא, וגישה למערכת הענן לכל החיים."})]}),l.jsxs("div",{className:"shop-cards-grid",children:[l.jsxs("div",{className:"product-neo-card popular-card",children:[l.jsx("div",{className:"badge-best-seller",children:"הנמכר ביותר 🔥"}),l.jsxs("div",{className:"pnc-header",children:[l.jsx("h3",{className:"pnc-title",children:"תג עמיד (Durable Smart Tag)"}),l.jsx("p",{className:"pnc-sub",children:"עמיד לפגעי מזג האוויר, שקט ואינו דורש סוללה"})]}),l.jsxs("div",{className:"pnc-price-wrap",children:[l.jsx("span",{className:"price-num price-tba",children:"יפורסם בקרוב"}),l.jsx("span",{className:"price-note",children:"תשלום חד-פעמי ללא דמי מנוי"})]}),l.jsxs("ul",{className:"pnc-features",children:[l.jsx("li",{children:"✓ מבנה עמיד במיוחד למים, בוץ, שריטות ומשחקים"}),l.jsxs("li",{children:["✓ ",l.jsx("strong",{children:"אינו דורש סוללה:"})," פועל תמיד 24/7 ללא צורך בהטענה"]}),l.jsx("li",{children:"✓ קוד QR ברור ומהיר לסריקה מכל סמארטפון ללא אפליקציה"}),l.jsx("li",{children:"✓ כולל פרופיל דיגיטלי מלא, התראת מיקום GPS וצ'אט מאובטח"}),l.jsx("li",{children:"✓ שקט לחלוטין – אינו מקרקש או מפריע לכלב"})]}),l.jsx("button",{type:"button",onClick:()=>C("תג עמיד"),className:"btn-order-neo btn-order-primary",children:"הזמינו עכשיו 🐾"})]}),l.jsxs("div",{className:"product-neo-card",children:[l.jsxs("div",{className:"pnc-header",children:[l.jsx("h3",{className:"pnc-title",children:"תג חכם אקטיבי (Active Smart Tag)"}),l.jsx("p",{className:"pnc-sub",children:"איתור מיקום אקטיבי ברשת Find Hub + סריקת חירום"})]}),l.jsxs("div",{className:"pnc-price-wrap",children:[l.jsx("span",{className:"price-num price-tba",children:"יפורסם בקרוב"}),l.jsx("span",{className:"price-note",children:"תשלום חד-פעמי ללא דמי מנוי"})]}),l.jsxs("ul",{className:"pnc-features",children:[l.jsxs("li",{children:["✓ ",l.jsx("strong",{children:"איתור מיקום אקטיבי:"})," תמיכה ברשת איתור גלובלית (Find Hub / Bluetooth)"]}),l.jsx("li",{children:"✓ כולל את כל תכונות התג העמיד (סריקת QR מהירה) לגיבוי מלא"}),l.jsx("li",{children:"✓ פועל תמיד גם אם הסוללה נגמרת באמצעות סריקת QR לשעת חירום (גיבוי כפול)"}),l.jsx("li",{children:"✓ התראות מרחק ומעקב בזמן אמת ללא דמי מנוי חודשיים"}),l.jsx("li",{children:"✓ קל, שקט ונוח לחיבור על כל קולר או רתמה"})]}),l.jsx("button",{type:"button",onClick:()=>C("תג חכם אקטיבי"),className:"btn-order-neo",children:"הזמינו עכשיו 🐾"})]}),l.jsxs("div",{className:"product-neo-card",children:[l.jsxs("div",{className:"pnc-header",children:[l.jsx("h3",{className:"pnc-title",children:"מארז משפחתי משולב (Combo Pack)"}),l.jsx("p",{className:"pnc-sub",children:"השילוב המושלם – תג חכם אקטיבי + תג עמיד"})]}),l.jsxs("div",{className:"pnc-price-wrap",children:[l.jsx("span",{className:"price-num price-tba",children:"יפורסם בקרוב"}),l.jsx("span",{className:"price-note",children:"חבילה משתלמת לכלבים מרובים"})]}),l.jsxs("ul",{className:"pnc-features",children:[l.jsxs("li",{children:["✓ ",l.jsx("strong",{children:"2 תגים חכמים:"})," תג עמיד + תג חכם אקטיבי לבחירתכם"]}),l.jsx("li",{children:"✓ מושלם לבתים עם שני כלבים או קולר ורתמה במקביל"}),l.jsx("li",{children:"✓ ניהול מרוכז של כל הכלבים באותו ממשק נוח"}),l.jsx("li",{children:"✓ כל תכונות הפרימיום וההתראות כלולות ללא דמי מנוי"}),l.jsx("li",{children:"✓ משלוח מהיר עד הבית"})]}),l.jsx("button",{type:"button",onClick:()=>C("מארז משפחתי משולב"),className:"btn-order-neo",children:"הזמינו עכשיו 🐾"})]})]}),l.jsx("div",{className:"text-center mt-5",children:l.jsx(Pe,{to:"/find-my-dog/shop",className:"btn-view-full-shop",children:"🛍️ צפו בקטלוג החנות המלא וכל האפשרויות ←"})})]})}),l.jsx("section",{id:"faq-section",className:"section",children:l.jsxs("div",{className:"container",style:{maxWidth:"850px"},children:[l.jsxs("div",{className:"section-head text-center",children:[l.jsx("span",{className:"section-subtitle-tag",children:"תשובות לכל שאלה"}),l.jsx("h2",{className:"section-title",children:"שאלות נפוצות"}),l.jsx("p",{className:"section-desc",children:"הנה כל מה שהורים לכלבים שואלים אותנו לפני ההזמנה:"})]}),l.jsx("div",{className:"faq-accordion-list",children:B.map((G,L)=>{const Y=p===L;return l.jsxs("div",{className:`faq-neo-item ${Y?"open":""}`,children:[l.jsxs("button",{type:"button",className:"faq-neo-question",onClick:()=>w(L),children:[l.jsx("span",{className:"faq-q-text",children:G.q}),l.jsx("span",{className:"faq-q-icon",children:Y?"−":"+"})]}),Y&&l.jsx("div",{className:"faq-neo-answer animate-fade",children:l.jsx("p",{children:G.a})})]},L)})}),l.jsxs("div",{className:"faq-extra-help text-center mt-4",children:[l.jsx("span",{children:"יש לכם שאלה מיוחדת?"}),l.jsx("button",{type:"button",onClick:()=>C("שאלה כללית"),className:"faq-contact-btn",children:"דברו איתנו ישירות ונשמח לעזור! 💬"})]})]})}),l.jsx(ec,{isOpen:s,onClose:()=>u(!1),initialProduct:d}),l.jsx("style",{children:`
        .fmd-home-page {
          background-color: #fdfbf7;
          color: #111827;
          font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        /* URGENCY TOP STRIP */
        .urgency-strip {
          background: #fef3c7;
          border-bottom: 2px solid #111827;
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          color: #78350f;
        }
        .strip-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .badge-pill-live {
          background: #10b981;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          border: 1.5px solid #111827;
        }

        /* HERO MAIN SECTION */
        .hero-main-section {
          padding: 3.5rem 0 4.5rem;
          background: #fdfbf7;
          border-bottom: 2.5px solid #111827;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-badge-pill {
          display: inline-block;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 0.9rem;
          font-weight: 800;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          border: 2px solid #111827;
          box-shadow: 2px 2px 0px #111827;
          margin-bottom: 1.25rem;
        }
        .hero-headline {
          font-size: 3.1rem;
          line-height: 1.15;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .text-highlight {
          background: linear-gradient(180deg, transparent 65%, #fef08a 65%);
          display: inline-block;
          color: #0f172a;
        }
        .hero-subtext {
          font-size: 1.22rem;
          line-height: 1.6;
          color: #374151;
          margin-bottom: 2rem;
          max-width: 620px;
        }

        /* HERO CTA GROUP */
        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .btn-neo-primary {
          background: #0284c7;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 800;
          padding: 0.95rem 1.85rem;
          border-radius: 8px;
          border: 2.5px solid #111827;
          box-shadow: 4px 4px 0px #111827;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-neo-primary:hover {
          background: #0369a1;
          transform: translate(-1px, -1px);
          box-shadow: 5px 5px 0px #111827;
        }
        .btn-neo-primary:active {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0px #111827;
        }
        .btn-neo-secondary {
          background: #ffffff;
          color: #111827;
          font-size: 1.05rem;
          font-weight: 800;
          padding: 0.95rem 1.6rem;
          border-radius: 8px;
          border: 2.5px solid #111827;
          box-shadow: 4px 4px 0px #111827;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-neo-secondary:hover {
          background: #fef08a;
          transform: translate(-1px, -1px);
          box-shadow: 5px 5px 0px #111827;
        }

        .hero-ambassador-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #4b5563;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .ambassador-link-inline {
          color: #0284c7;
          font-weight: 800;
          text-decoration: underline;
        }

        /* HERO TRUST BADGES */
        .hero-trust-badges {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 2px dashed #cbd5e1;
        }
        .trust-badge-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .tb-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .tb-text {
          display: flex;
          flex-direction: column;
        }
        .tb-text strong {
          font-size: 0.9rem;
          color: #111827;
        }
        .tb-text span {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* HERO VISUAL COLUMN */
        .hero-visual-stack {
          position: relative;
        }
        .tag-hero-card {
          background: #ffffff;
          border: 3px solid #111827;
          border-radius: 16px;
          box-shadow: 6px 6px 0px #111827;
          padding: 1.5rem;
        }
        .thc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .thc-status-live {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid #10b981;
        }
        .live-dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          animation: pulseGreen 1.5s infinite;
        }
        @keyframes pulseGreen {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
        .thc-model {
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
        }

        .thc-dog-showcase {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .dog-avatar-ring {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          border: 2.5px solid #111827;
          box-shadow: 2px 2px 0px #111827;
          overflow: hidden;
          flex-shrink: 0;
          background: #f1f5f9;
        }
        .dog-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dog-info-text {
          flex: 1;
        }
        .dog-name {
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 0.25rem;
          color: #111827;
        }
        .dog-micro-details {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 0.4rem;
        }
        .dog-tag-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .pill-urgent {
          background: #fee2e2;
          color: #b91c1c;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #f87171;
        }
        .pill-med {
          background: #fef3c7;
          color: #92400e;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #fbbf24;
        }
        .pill-peace {
          background: #dbeafe;
          color: #1e40af;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #60a5fa;
        }

        .thc-alert-bubble {
          background: #fef08a;
          border: 2px solid #111827;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .tab-icon-wrap {
          font-size: 1.4rem;
        }
        .tab-details {
          flex: 1;
          font-size: 0.85rem;
          line-height: 1.35;
        }
        .tab-details strong {
          display: block;
          color: #854d0e;
        }
        .tab-details p {
          margin: 0;
          color: #111827;
        }
        .tab-action-btn {
          background: #111827;
          color: #ffffff;
          border: none;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          white-space: nowrap;
        }

        .thc-features-strip {
          display: flex;
          justify-content: space-around;
          background: #f8fafc;
          border-radius: 8px;
          border: 1.5px solid #e2e8f0;
          padding: 0.65rem 0.5rem;
        }
        .fs-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
        }

        .hero-floating-quote {
          margin-top: 1.25rem;
          background: #ffffff;
          border: 2px solid #111827;
          border-radius: 12px;
          box-shadow: 4px 4px 0px #111827;
          padding: 1rem 1.25rem;
        }
        .quote-stars {
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
        }
        .quote-text {
          font-size: 0.88rem;
          line-height: 1.45;
          color: #374151;
          font-style: italic;
          margin-bottom: 0.35rem;
        }
        .quote-author {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0369a1;
        }

        /* SECTION HEADINGS */
        .section {
          padding: 4.5rem 0;
          position: relative;
        }
        .bg-warm-contrast {
          background-color: #f7f3ea;
          border-top: 2.5px solid #111827;
          border-bottom: 2.5px solid #111827;
        }
        .section-head {
          margin-bottom: 3.5rem;
        }
        .section-subtitle-tag {
          display: inline-block;
          background: #fef08a;
          color: #111827;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          border: 2px solid #111827;
          box-shadow: 2px 2px 0px #111827;
          margin-bottom: 0.9rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .section-desc {
          font-size: 1.15rem;
          color: #4b5563;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.55;
        }

        /* BEFORE VS AFTER GRID */
        .compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .compare-card {
          border-radius: 14px;
          padding: 2rem;
          position: relative;
        }
        .compare-card-old {
          background: #fff5f5;
          border: 2.5px solid #ef4444;
          box-shadow: 4px 4px 0px #ef4444;
        }
        .compare-card-new {
          background: #f0fdf4;
          border: 3px solid #111827;
          box-shadow: 6px 6px 0px #111827;
        }
        .badge-old {
          display: inline-block;
          background: #fee2e2;
          color: #991b1b;
          font-size: 0.82rem;
          font-weight: 800;
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .badge-new-fmd {
          display: inline-block;
          background: #dcfce7;
          color: #166534;
          font-size: 0.82rem;
          font-weight: 800;
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .badge-best-choice {
          position: absolute;
          top: -14px;
          left: 20px;
          background: #111827;
          color: #fef08a;
          font-size: 0.8rem;
          font-weight: 900;
          padding: 0.3rem 0.9rem;
          border-radius: 9999px;
          border: 2px solid #fef08a;
        }
        .compare-card-head h3 {
          font-size: 1.35rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1.5rem;
        }
        .compare-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }
        .compare-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.45;
        }
        .li-icon {
          font-size: 1.25rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .compare-list strong {
          color: #111827;
          display: block;
          margin-bottom: 0.15rem;
        }

        /* 3 SIMPLE STEPS */
        .steps-3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .step-card {
          background: #ffffff;
          border: 2.5px solid #111827;
          border-radius: 14px;
          box-shadow: 4px 4px 0px #111827;
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .highlight-step {
          background: #eff6ff;
          border-color: #0284c7;
          box-shadow: 5px 5px 0px #0284c7;
        }
        .step-number-badge {
          position: absolute;
          top: -16px;
          right: 20px;
          width: 36px;
          height: 36px;
          background: #fef08a;
          color: #111827;
          font-size: 1.15rem;
          font-weight: 900;
          border: 2.5px solid #111827;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px #111827;
        }
        .step-icon-wrap {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .step-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .step-text {
          font-size: 0.96rem;
          line-height: 1.55;
          color: #4b5563;
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .step-footer-pill {
          background: #f1f5f9;
          color: #334155;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          align-self: flex-start;
          border: 1px solid #cbd5e1;
        }
        .pill-green {
          background: #dcfce7;
          color: #15803d;
          border-color: #86efac;
        }

        /* INTERACTIVE SCAN SIMULATOR */
        .sim-tabs-wrap {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .sim-tab-btn {
          background: #ffffff;
          color: #475569;
          font-size: 1.05rem;
          font-weight: 800;
          padding: 0.85rem 1.6rem;
          border-radius: 10px;
          border: 2.5px solid #111827;
          box-shadow: 3px 3px 0px #111827;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .sim-tab-btn.active {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 4px 4px 0px #111827;
          transform: translate(-1px, -1px);
        }

        .simulator-phone-wrapper {
          max-width: 440px;
          margin: 0 auto;
        }
        .phone-screen-mock {
          background: #ffffff;
          border: 3.5px solid #111827;
          border-radius: 32px;
          box-shadow: 8px 8px 0px #111827;
          padding: 1.25rem 1.25rem 2rem;
          overflow: hidden;
          position: relative;
        }
        .phone-notch {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748b;
          border-bottom: 1.5px solid #e2e8f0;
          padding-bottom: 0.65rem;
          margin-bottom: 1rem;
        }
        .notch-speaker {
          width: 60px;
          height: 5px;
          background: #cbd5e1;
          border-radius: 9999px;
        }

        /* FINDER TAB STYLES */
        .finder-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .finder-brand {
          font-size: 0.95rem;
          font-weight: 900;
          color: #0284c7;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .finder-status-badge {
          background: #fee2e2;
          color: #dc2626;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
          border: 1px solid #f87171;
        }
        .dog-big-photo-box {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid #111827;
          margin-bottom: 1rem;
          height: 180px;
          background: #e2e8f0;
        }
        .dog-sim-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dog-floating-name {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%);
          padding: 1.25rem 0.85rem 0.65rem;
          color: #ffffff;
        }
        .dog-floating-name h3 {
          font-size: 1.2rem;
          font-weight: 900;
          margin: 0;
        }
        .dog-floating-name span {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .finder-owner-message {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          margin-bottom: 0.85rem;
          font-size: 0.82rem;
          line-height: 1.4;
        }
        .finder-owner-message strong {
          color: #1e293b;
          display: block;
          margin-bottom: 0.2rem;
        }
        .finder-owner-message p {
          margin: 0;
          color: #475569;
        }

        .finder-med-badges {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .fmb-pill {
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
        }
        .pill-alert { background: #fee2e2; color: #b91c1c; border: 1px solid #f87171; }
        .pill-warn { background: #fef3c7; color: #92400e; border: 1px solid #fbbf24; }
        .pill-safe { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }

        .finder-gps-action-box {
          margin-bottom: 1rem;
        }
        .btn-share-location-sim {
          width: 100%;
          background: #fef08a;
          color: #111827;
          border: 2px solid #111827;
          box-shadow: 3px 3px 0px #111827;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-share-location-sim:hover {
          background: #fde047;
          transform: translate(-1px, -1px);
        }
        .location-success-card {
          background: #ecfdf5;
          border: 2px solid #10b981;
          border-radius: 8px;
          padding: 0.75rem;
          display: flex;
          gap: 0.6rem;
          font-size: 0.8rem;
          line-height: 1.35;
          color: #065f46;
        }
        .lsc-icon { font-size: 1.2rem; }
        .location-success-card strong { display: block; color: #047857; margin-bottom: 0.15rem; }
        .location-success-card p { margin: 0; }

        .finder-contact-actions {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 0.85rem;
        }
        .btn-finder-chat {
          background: #0284c7;
          color: #ffffff;
          text-align: center;
          padding: 0.85rem;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          border: 2px solid #111827;
          box-shadow: 2px 2px 0px #111827;
          width: 100%;
          transition: all 0.15s ease;
        }
        .btn-finder-chat:hover {
          background: #0369a1;
          transform: translate(-1px, -1px);
        }
        .finder-anon-footer {
          font-size: 0.72rem;
          color: #64748b;
          text-align: center;
          line-height: 1.3;
        }

        /* OWNER TAB STYLES */
        .owner-push-notification {
          background: #1e293b;
          color: #ffffff;
          border: 2px solid #111827;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          box-shadow: 3px 3px 0px #111827;
          margin-bottom: 1.25rem;
        }
        .opn-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 0.35rem;
        }
        .opn-title {
          font-size: 1rem;
          font-weight: 900;
          color: #fef08a;
          margin: 0 0 0.25rem 0;
        }
        .opn-body {
          font-size: 0.82rem;
          line-height: 1.35;
          margin: 0;
          color: #cbd5e1;
        }

        .owner-map-card {
          border: 2px solid #111827;
          border-radius: 12px;
          background: #ffffff;
          overflow: hidden;
        }
        .map-radar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #ecfdf5;
          padding: 0.55rem 0.85rem;
          font-size: 0.8rem;
          color: #065f46;
          border-bottom: 1.5px solid #a7f3d0;
        }
        .radar-ping-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          animation: pingDot 1.2s infinite;
        }
        @keyframes pingDot {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .map-view-box {
          height: 160px;
          background: #cbd5e1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .map-grid-graphic {
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#94a3b8 1.5px, transparent 1.5px), radial-gradient(#94a3b8 1.5px, #f1f5f9 1.5px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-pin-pulse {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .pin-marker {
          font-size: 2.2rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        .pin-label {
          background: #111827;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          margin-top: -4px;
        }
        .map-address-banner {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.92);
          border-top: 1.5px solid #111827;
          padding: 0.4rem 0.65rem;
          font-size: 0.76rem;
          font-weight: 700;
          color: #1e293b;
        }

        .owner-nav-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0.75rem;
        }
        .btn-nav-waze {
          background: #0284c7;
          color: #ffffff;
          border: 1.5px solid #111827;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-nav-google {
          background: #ffffff;
          color: #111827;
          border: 1.5px solid #111827;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
        }

        .owner-incoming-message {
          border-top: 1.5px dashed #cbd5e1;
          padding: 0.85rem;
          background: #fafaf9;
        }
        .oim-sender {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0284c7;
          display: block;
          margin-bottom: 0.2rem;
        }
        .oim-text {
          font-size: 0.82rem;
          color: #334155;
          margin: 0 0 0.6rem 0;
          line-height: 1.35;
        }
        .oim-actions {
          display: flex;
          gap: 0.5rem;
        }
        .btn-oim-chat {
          width: 100%;
          background: #0284c7;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 800;
          padding: 0.55rem;
          border-radius: 6px;
          border: 1.5px solid #111827;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-oim-chat:hover {
          background: #0369a1;
        }

        .sim-bottom-explainer {
          max-width: 650px;
          margin: 2rem auto 0;
          font-size: 0.95rem;
          color: #475569;
        }

        /* SUPERPOWERS GRID */
        .superpowers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .superpower-card {
          background: #ffffff;
          border: 2.5px solid #111827;
          border-radius: 14px;
          box-shadow: 4px 4px 0px #111827;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .sp-icon-box {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .sp-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .sp-desc {
          font-size: 0.98rem;
          line-height: 1.55;
          color: #4b5563;
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .sp-footer-link {
          padding-top: 0.75rem;
          border-top: 1.5px dashed #e2e8f0;
        }
        .sp-text-link {
          color: #0284c7;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
        }
        .sp-text-link:hover {
          text-decoration: underline;
        }
        .sp-privacy-pill {
          display: inline-block;
          background: #f1f5f9;
          color: #475569;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }

        /* SHOP SHOWCASE */
        .shop-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }
        .product-neo-card {
          background: #ffffff;
          border: 2.5px solid #111827;
          border-radius: 14px;
          box-shadow: 4px 4px 0px #111827;
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .popular-card {
          border-color: #0284c7;
          box-shadow: 6px 6px 0px #0284c7;
          transform: translateY(-4px);
        }
        .badge-best-seller {
          position: absolute;
          top: -14px;
          right: 20px;
          background: #fef08a;
          color: #111827;
          font-size: 0.8rem;
          font-weight: 900;
          padding: 0.3rem 0.85rem;
          border-radius: 9999px;
          border: 2px solid #111827;
          box-shadow: 2px 2px 0px #111827;
        }
        .pnc-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.3rem;
        }
        .pnc-sub {
          font-size: 0.86rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }
        .pnc-price-wrap {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          border-bottom: 2px dashed #e2e8f0;
          padding-bottom: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .price-num {
          font-size: 2rem;
          font-weight: 900;
          color: #111827;
        }
        .price-tba {
          font-size: 1.45rem;
          color: #0284c7;
          letter-spacing: -0.3px;
        }
        .price-old {
          font-size: 1.1rem;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .price-note {
          font-size: 0.78rem;
          color: #10b981;
          font-weight: 800;
          margin-right: auto;
        }

        .pnc-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.45;
          flex: 1;
        }

        .btn-order-neo {
          width: 100%;
          background: #ffffff;
          color: #111827;
          font-size: 1.05rem;
          font-weight: 900;
          padding: 0.9rem;
          border-radius: 8px;
          border: 2.5px solid #111827;
          box-shadow: 3px 3px 0px #111827;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-order-neo:hover {
          background: #fef08a;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #111827;
        }
        .btn-order-primary {
          background: #0284c7;
          color: #ffffff;
        }
        .btn-order-primary:hover {
          background: #0369a1;
          color: #ffffff;
        }

        .btn-view-full-shop {
          display: inline-block;
          background: #ffffff;
          color: #111827;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.85rem 1.75rem;
          border-radius: 8px;
          border: 2.5px solid #111827;
          box-shadow: 4px 4px 0px #111827;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .btn-view-full-shop:hover {
          background: #fef08a;
          transform: translate(-1px, -1px);
        }

        /* FAQ ACCORDION */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-neo-item {
          background: #ffffff;
          border: 2.5px solid #111827;
          border-radius: 12px;
          box-shadow: 3px 3px 0px #111827;
          overflow: hidden;
          transition: all 0.15s ease;
        }
        .faq-neo-item.open {
          box-shadow: 4px 4px 0px #111827;
        }
        .faq-neo-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: right;
          font-family: inherit;
        }
        .faq-q-text {
          font-size: 1.1rem;
          font-weight: 800;
          color: #111827;
        }
        .faq-q-icon {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0284c7;
          line-height: 1;
        }
        .faq-neo-answer {
          padding: 0 1.5rem 1.35rem;
          font-size: 0.98rem;
          line-height: 1.6;
          color: #4b5563;
          border-top: 1.5px dashed #e2e8f0;
          padding-top: 1rem;
        }
        .faq-neo-answer p {
          margin: 0;
        }

        .faq-extra-help {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #4b5563;
          flex-wrap: wrap;
        }
        .faq-contact-btn {
          background: none;
          border: none;
          color: #0284c7;
          font-weight: 800;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.95rem;
          padding: 0;
        }

        /* AMBASSADOR CTA BANNER */
        .ambassador-cta-banner {
          padding: 4rem 0;
          background: #fdfbf7;
        }
        .ambassador-banner-box {
          background: #fef08a;
          border: 3px solid #111827;
          border-radius: 16px;
          box-shadow: 6px 6px 0px #111827;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 2.5rem;
          align-items: center;
        }
        .abb-badge {
          display: inline-block;
          background: #111827;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.3rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .abb-title {
          font-size: 2rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .abb-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #374151;
          margin-bottom: 2rem;
        }
        .abb-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-abb-primary {
          background: #111827;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.85rem 1.6rem;
          border-radius: 8px;
          border: 2px solid #111827;
          text-decoration: none;
          box-shadow: 3px 3px 0px rgba(0,0,0,0.25);
          transition: all 0.15s ease;
        }
        .btn-abb-primary:hover {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
          transform: translate(-1px, -1px);
        }
        .btn-abb-secondary {
          background: #ffffff;
          color: #111827;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.85rem 1.4rem;
          border-radius: 8px;
          border: 2px solid #111827;
          text-decoration: none;
          box-shadow: 3px 3px 0px #111827;
          transition: all 0.15s ease;
        }
        .btn-abb-secondary:hover {
          background: #f1f5f9;
          transform: translate(-1px, -1px);
        }
        .abb-visual {
          border: 2.5px solid #111827;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 4px 4px 0px #111827;
          height: 240px;
          background: #ffffff;
        }
        .abb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-headline {
            font-size: 2.5rem;
          }
          .compare-grid {
            grid-template-columns: 1fr;
          }
          .steps-3-grid {
            grid-template-columns: 1fr;
          }
          .superpowers-grid {
            grid-template-columns: 1fr;
          }
          .shop-cards-grid {
            grid-template-columns: 1fr;
          }
          .popular-card {
            transform: none;
          }
          .ambassador-banner-box {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .abb-visual {
            height: 200px;
          }
        }

        @media (max-width: 600px) {
          .hero-main-section {
            padding: 2rem 0 3rem;
          }
          .hero-headline {
            font-size: 2.1rem;
          }
          .hero-subtext {
            font-size: 1.05rem;
          }
          .hero-cta-group {
            flex-direction: column;
          }
          .btn-neo-primary, .btn-neo-secondary {
            width: 100%;
            text-align: center;
          }
          .hero-trust-badges {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 1.85rem;
          }
          .sim-tabs-wrap {
            flex-direction: column;
          }
          .sim-tab-btn {
            width: 100%;
            text-align: center;
            font-size: 0.92rem;
          }
          .phone-screen-mock {
            padding: 1rem;
            border-radius: 24px;
          }
        }
      `})]})},E0=()=>l.jsxs("section",{id:"how-it-works",className:"section bg-light",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-5",children:[l.jsx("h2",{children:"איך זה עובד?"}),l.jsxs("div",{className:"mt-3 d-flex flex-column align-items-center",children:[l.jsx("span",{className:"mb-2 fw-bold",style:{color:"#555"},children:"הסבר על איתור כלבים אבודים"}),l.jsxs("audio",{controls:!0,style:{borderRadius:"25px",width:"300px",maxWidth:"100%",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[l.jsx("source",{src:"/assets/איתור_כלבים_אבודים.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})]}),l.jsxs("div",{className:"split-view",children:[l.jsxs("div",{className:"split-card owner-side",children:[l.jsxs("div",{className:"content",children:[l.jsx("h3",{children:"לבעלים: שקט נפשי מלא"}),l.jsx("p",{children:"המערכת שלנו דואגת שתהיו מוכנים לכל תרחיש."}),l.jsxs("ul",{className:"feature-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"📋"}),l.jsxs("div",{children:[l.jsx("strong",{children:"פרופיל רפואי והתנהגותי"}),l.jsx("p",{children:"ציינו רגישויות, תרופות (כמו אינסולין), ומידע על אופי הכלב (ידידותי/חששן)."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"🔔"}),l.jsxs("div",{children:[l.jsx("strong",{children:'מצב "אבוד"'}),l.jsx("p",{children:"הפעילו מהנייד וכל הקהילה סביבכם תקבל התראה מיידית."})]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"🛡️"}),l.jsxs("div",{children:[l.jsx("strong",{children:"פרטיות מלאה"}),l.jsx("p",{children:"הטלפון שלכם חסוי עד שאתם מחליטים לשתף אותו."})]})]})]})]}),l.jsx("div",{className:"owner-visual mt-4",children:l.jsx("img",{src:"/assets/how-it-works-owner.png",alt:"תהליך לבעלים",className:"img-fluid rounded-lg",style:{maxWidth:"100%",borderRadius:"1rem",marginTop:"1rem"}})})]}),l.jsxs("div",{className:"split-card finder-side",children:[l.jsxs("div",{className:"content",children:[l.jsx("h3",{children:"למוצא: פשוט לסרוק ולהציל"}),l.jsx("p",{className:"highlight-text",children:"מצאת כלב? אין צורך באפליקציה."}),l.jsxs("ul",{className:"feature-list",children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"📷"}),l.jsx("strong",{children:"סריקה מהירה"})," - כל סמארטפון יכול לסרוק את התג."]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"📍"}),l.jsx("strong",{children:"שליחת מיקום GPS"})," - בלחיצת כפתור אחת."]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"💬"}),l.jsx("strong",{children:"צ'אט אנונימי ומאובטח"})," - תקשורת ישירה עם הבעלים."]})]})]}),l.jsx("div",{className:"visual mt-4",style:{marginTop:"2rem"},children:l.jsx("img",{src:"/assets/finder-interface.jpg",alt:"ממשק המוצא",className:"phone-mockup"})})]})]})]}),l.jsx("style",{children:`
        .bg-light { background-color: white; }
        .mb-5 { margin-bottom: 3rem; }
        
        .split-view {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .split-card {
          padding: 2rem;
          border-radius: 1.5rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease;
        }
        .split-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .owner-side {
          border-right: 4px solid var(--color-primary);
        }
        .finder-side {
          border-right: 4px solid var(--color-success);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .finder-side .content {
          text-align: right;
          width: 100%;
        }

        .feature-list {
          list-style: none;
          margin-top: 1.5rem;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .icon {
          font-size: 1.5rem;
          background: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .phone-mockup {
          width: 250px;
          border-radius: 30px;
          border: 8px solid #333;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          margin-bottom: 2rem;
        }
        
        .highlight-text {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--color-success);
          margin-bottom: 1rem;
        }

        @media (max-width: 900px) {
          .split-view { grid-template-columns: 1fr; }
          .finder-side { flex-direction: column-reverse; } /* Put phone on top via flex direction? or simple column */
          .finder-side .visual { margin-bottom: 2rem; }
        }
      `})]}),T0=({isOpen:s,onClose:u})=>{const[d,c]=z.useState({name:"",businessName:"",contact:"",area:"",source:"",businessType:"",otherDetails:""}),[x,b]=z.useState(!1),[y,E]=z.useState(!1),[m,f]=z.useState("");if(De.useEffect(()=>{s&&(E(!1),b(!1),f(""))},[s]),!s)return null;const p=w=>{const{name:C,value:M}=w.target;c(H=>({...H,[C]:M}))},g=w=>{w.preventDefault(),b(!0),f(""),fetch("https://us-central1-dogfinder-eb6fb.cloudfunctions.net/submitContactForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"partner",name:d.name,businessName:d.businessName,businessType:d.businessType,otherDetails:d.otherDetails,contact:d.contact,area:d.area,source:d.source})}).then(C=>{if(!C.ok)throw new Error("שגיאה בתקשורת עם השרת");return C.json()}).then(C=>{if(!C.success)throw new Error(C.error||"השליחה נכשלה");b(!1),E(!0),c({name:"",businessName:"",contact:"",area:"",source:"",businessType:"",otherDetails:""}),setTimeout(()=>{u()},2e3)}).catch(C=>{console.error("Partner submission failed:",C),b(!1),f("שגיאה בשליחת הבקשה. יש לנסות שוב מאוחר יותר.")})};return l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-content",onClick:w=>w.stopPropagation(),children:[l.jsx("button",{className:"modal-close",onClick:u,children:"×"}),l.jsx("h3",{className:"text-center mb-4 text-dark",children:"הצטרפות כשותף עסקי"}),l.jsx("p",{className:"text-center text-muted mb-4",children:"מלאו את הפרטים ונחזור אליכם עם כל המידע על ערכת ההתנסות."}),y?l.jsxs("div",{className:"alert alert-success text-center py-4",style:{textAlign:"center",padding:"2rem 1rem"},children:[l.jsx("span",{style:{fontSize:"3rem",display:"block",marginBottom:"1rem"},children:"✓"}),l.jsx("h4",{className:"mb-2",style:{color:"#166534",margin:"0 0 0.5rem 0"},children:"הבקשה נשלחה בהצלחה!"}),l.jsx("p",{className:"text-muted mb-0",style:{color:"#64748b",margin:0},children:"נציג מטעמנו יחזור אליך בהקדם לתיאום שיתוף הפעולה."})]}):l.jsxs("form",{onSubmit:g,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"שם איש קשר *"}),l.jsx("input",{type:"text",name:"name",required:!0,value:d.name,onChange:p})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"שם העסק *"}),l.jsx("input",{type:"text",name:"businessName",required:!0,value:d.businessName,onChange:p})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"סוג העסק *"}),l.jsxs("select",{name:"businessType",required:!0,value:d.businessType,onChange:p,children:[l.jsx("option",{value:"",children:"בחר סוג עסק..."}),l.jsx("option",{value:"וטרינר",children:"מרפאה וטרינרית"}),l.jsx("option",{value:"חנות חיות",children:"חנות חיות"}),l.jsx("option",{value:"מספרת כלבים",children:"מספרת כלבים"}),l.jsx("option",{value:"other",children:"אחר"})]})]}),d.businessType==="other"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"פרט אחר *"}),l.jsx("input",{type:"text",name:"otherDetails",required:!0,value:d.otherDetails,onChange:p})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"טלפון או מייל ליצירת קשר *"}),l.jsx("input",{type:"text",name:"contact",required:!0,value:d.contact,onChange:p})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"אזור פעילות *"}),l.jsx("input",{type:"text",name:"area",required:!0,value:d.area,onChange:p})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"איך שמעתם עלינו? *"}),l.jsxs("select",{name:"source",required:!0,value:d.source,onChange:p,children:[l.jsx("option",{value:"",children:"בחר אפשרות..."}),l.jsx("option",{value:"facebook",children:"פייסבוק / אינסטגרם"}),l.jsx("option",{value:"friend",children:"קולגה / חבר"}),l.jsx("option",{value:"search",children:"חיפוש בגוגל"}),l.jsx("option",{value:"conference",children:"כנס מקצועי"}),l.jsx("option",{value:"other",children:"אחר"})]})]}),m&&l.jsx("div",{className:"alert alert-danger mb-3",style:{marginBottom:"1rem"},children:m}),l.jsx("button",{type:"submit",className:"btn btn-secondary w-100 mt-3",disabled:x,children:x?"שולח...":"שלח בקשה"})]})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          max-height: 90vh; /* Handle small screens */
          overflow-y: auto;
        }
        .text-dark { color: #1e293b; }
        .modal-close {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #94a3b8;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: #334155;
        }
        .form-group input[type="text"],
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-family: inherit;
        }
        .w-100 { width: 100%; }
        .mt-3 { margin-top: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .text-muted { color: #64748b; }
        
        .alert {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.95rem;
        }
        .alert-success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        .alert-danger {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }
      `})]})},k0=()=>{const[s,u]=z.useState(!1);return l.jsxs("section",{id:"partners",className:"section partners-section",children:[l.jsx("div",{className:"container",children:l.jsxs("div",{className:"partners-content text-center",children:[l.jsx("span",{className:"badge",children:"וטרינרים וחנויות חיות"}),l.jsx("h2",{children:"הצטרפו למהפכת ההגנה על הכלבים"}),l.jsxs("p",{className:"lead",children:["העניקו ללקוחות שלכם פתרון הגנה מיידי ומשלים לשבב האלקטרוני.",l.jsx("br",{}),"מודל מפיצים פשוט ורווחי המעניק ערך אמיתי לבעלי הכלבים."]}),l.jsxs("div",{className:"benefits-grid",children:[l.jsxs("div",{className:"benefit-card",children:[l.jsx("h4",{children:"🛡️ הגנה מרגע היציאה מהקליניקה"}),l.jsx("p",{children:'בניגוד לשבב שדורש רישום וסורק מיוחד, התג שלנו פעיל מיידית וניתן לסריקה ע"י כל אחד.'})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("h4",{children:"🤝 פתרון משלים"}),l.jsx("p",{children:"לא מחליף את השבב, אלא עובד יחד איתו להגנה מקסימלית (שכבת הגנה ראשונה)."})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("h4",{children:"📦 ערכת תצוגה מעוצבת"}),l.jsx("p",{children:"קבלו מעמד תצוגה מרשים לקופה שימשוך את העין ויגדיל מכירות."})]})]}),l.jsxs("div",{className:"cta-wrapper",children:[l.jsx("button",{onClick:()=>u(!0),className:"btn btn-secondary btn-lg",children:"הזמן ערכת התנסות"}),l.jsx("p",{className:"small-text",children:"רוצים לשמוע עוד? צרו קשר עם מחלקת השותפים שלנו"}),l.jsxs("div",{style:{marginTop:"2.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem"},children:[l.jsx("a",{href:"/assets/Fullpresentation.pdf",target:"_blank",className:"btn btn-outline-light",children:"🐶 צפה במצגת העסקית המלאה (PDF)"}),l.jsxs("div",{className:"d-flex flex-column align-items-center",children:[l.jsx("span",{className:"mb-2",style:{color:"rgba(255,255,255,0.8)"},children:"הסבר לוטרינרים וחנויות"}),l.jsxs("audio",{controls:!0,style:{borderRadius:"25px",width:"300px",maxWidth:"100%"},children:[l.jsx("source",{src:"/assets/הסבר לוטרינרים וחנויות.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})]})]})]})}),l.jsx(T0,{isOpen:s,onClose:()=>u(!1)}),l.jsx("style",{children:`
        .partners-section {
          background-color: var(--color-dark);
          color: white;
          background-image: radial-gradient(circle at top right, #1e293b 0%, #0f172a 100%);
        }
        .btn-outline-light {
           display: inline-block;
           padding: 0.75rem 1.5rem;
           border-radius: 50px;
           text-decoration: none;
           font-weight: 600;
           transition: all 0.3s ease;
           cursor: pointer;
           border: 2px solid rgba(255,255,255,0.3);
           color: white;
           background: transparent;
        }
        .btn-outline-light:hover {
           background: white;
           color: var(--color-dark);
           border-color: white;
           transform: translateY(-2px);
        }
        .badge {
          background: rgba(255,255,255,0.1);
          color: var(--color-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: inline-block;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }
        .lead {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .benefit-card {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 1rem;
          text-align: right;
          border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.3s;
        }
        .benefit-card:hover {
          background: rgba(255,255,255,0.1);
        }
        .benefit-card h4 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .cta-wrapper {
          margin-top: 2rem;
        }
        .small-text {
          margin-top: 1rem;
          font-size: 0.9rem;
          opacity: 0.7;
        }
      `})]})},A0=()=>l.jsxs("section",{id:"community",className:"section",children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"text-center mb-5",children:"הרבה יותר מתג זיהוי - זו קהילה"}),l.jsxs("div",{className:"community-grid",children:[l.jsx("div",{className:"community-visual",children:l.jsx("img",{src:"/assets/community-scene.jpg",alt:"קהילת בעלי הכלבים",className:"rounded-img"})}),l.jsxs("div",{className:"community-content",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"📍 צ'ק-אין בגינות כלבים"}),l.jsx("p",{children:"ראו מי נמצא בגינה עכשיו, צרו חברויות חדשות והפגישו את הכלבים למשחק."})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"🚨 צוות חילוץ קהילתי"}),l.jsx("p",{children:"כשכלב הולך לאיבוד, משתמשים בסביבה מקבלים התראה ויכולים לעזור בחיפושים."})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"🐕 רשת חברתית לכלבים"}),l.jsx("p",{children:'הוסיפו "חברים" לרשימה של כלבכם ושתפו מידע חשוב.'})]})]})]})]}),l.jsx("style",{children:`
        .community-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .rounded-img {
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
          border: 4px solid white;
        }
        .feature-item {
          margin-bottom: 2.5rem;
        }
        .feature-item h3 {
          color: var(--color-secondary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        @media (max-width: 900px) {
          .community-grid { grid-template-columns: 1fr; }
          .community-visual { order: -1; }
        }
      `})]}),C0=()=>l.jsxs("section",{id:"family",className:"section",children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"text-center mb-5",children:"שיתוף משפחתי והעברת בעלות מתקדמת"}),l.jsxs("div",{className:"family-grid",children:[l.jsx("div",{className:"family-visual",children:l.jsx("img",{src:"/assets/family-share.png",alt:"שיתוף משפחתי",className:"rounded-img"})}),l.jsxs("div",{className:"family-content",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"👥 הוספת שומר-שותף מיידית"}),l.jsx("p",{children:"שתפו את האחריות בקלות! צרפו בן משפחה כמגן-שותף באמצעות לינק מאובטח. שניכם תקבלו התראות ומיקום GPS בזמן אמת בכל סריקה."})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"🛡️ אבטחה נגד חטיפה"}),l.jsx("p",{children:'מנגנון הגנה חכם: הקישור שתייצרו תקף ל-5 דקות בלבד. שותף יכול לקבל התראות ולעדכן סטטוס, אך אינו יכול למחוק את הפרופיל או להסיר את הבעלים הראשי ("Digital Dog-napping").'})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("h3",{children:"👑 העברת בעלות מלאה"}),l.jsx("p",{children:"צריכים להעביר את הכלב לבעלים חדש? בצעו העברת בעלות מלאה ומסודרת דרך האפליקציה, בצורה מאובטחת ופשוטה."})]})]})]})]}),l.jsx("style",{children:`
        .family-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .rounded-img {
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
          border: 4px solid white;
          width: 100%;
          height: auto;
        }
        .feature-item {
          margin-bottom: 2.5rem;
        }
        .feature-item h3 {
          color: var(--color-primary); /* Using Primary for Family tab to distinguish slightly or stick to theme */
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        @media (max-width: 900px) {
          .family-grid { grid-template-columns: 1fr; }
          .family-visual { order: -1; }
        }
      `})]}),R0=[{id:"durable",title:"תג עמיד",price:"יפורסם בקרוב",description:"תג עמיד במיוחד, מתאים לכל קולר. כולל סריקת QR מהירה ופרופיל דיגיטלי מלא לכלב.",features:["מבנה עמיד למים, בוץ ושריטות","אינו דורש סוללה (עובד 24/7)","פרופיל דיגיטלי והתראת סריקת GPS","שקט ונוח – אינו מפריע לכלב"],color:"var(--color-primary)",popular:!0},{id:"active",title:"תג חכם אקטיבי",price:"יפורסם בקרוב",description:"תג עם תמיכה באיתור מיקום אקטיבי ברשת Android Find Hub ו-Bluetooth, לצד כל יתרונות התג העמיד.",features:["איתור מיקום אקטיבי מרחוק","כל תכונות התג העמיד כלולות","פועל תמיד גם אם הסוללה נגמרת (סריקת QR לשעת חירום)","ללא דמי מנוי חודשיים"],color:"var(--color-secondary)",popular:!1},{id:"family",title:"מארז משפחתי משולב",price:"יפורסם בקרוב",description:"הפתרון המושלם לבתים עם מספר כלבים או שילוב של תג לקולר ותג לרתמה.",features:["שילוב תגים לבחירתכם (תג עמיד + תג חכם אקטיבי)","ניהול מרוכז של כל הכלבים בפרופיל אחד","כל יכולות הפרימיום וההתראות כלולות","חבילה משתלמת במיוחד"],color:"#8B5CF6",popular:!1}],M0=()=>{const[s,u]=z.useState(null),[d,c]=z.useState(!1),[x,b]=z.useState(R0);z.useEffect(()=>{(()=>{const f=localStorage.getItem("shop_products");if(f)try{b(JSON.parse(f))}catch(p){console.error("Failed to load shop overrides",p)}})()},[]);const y=m=>{u(m.title),c(!0)},E=m=>{const f="Android find hub";if(typeof m=="string"&&m.includes(f)){const p=m.split(f);return l.jsx(l.Fragment,{children:p.map((g,w)=>l.jsxs(De.Fragment,{children:[g,w<p.length-1&&l.jsx("a",{href:"https://www.android.com/intl/en_ca/learn-find-hub/",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline",fontWeight:"bold"},children:f})]},w))})}return m};return l.jsxs("section",{className:"section shop-section",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-5",children:[l.jsx("h2",{children:"חנות התגים"}),l.jsx("p",{className:"subtitle",children:"בחרו את התג המושלם לכלב שלכם"})]}),l.jsx("div",{className:"products-grid",children:x.map(m=>l.jsxs("div",{className:`product-card ${m.popular?"popular":""}`,children:[m.popular&&l.jsx("div",{className:"badge",children:"הכי נמכר"}),l.jsxs("div",{className:"card-header",style:{background:m.color},children:[l.jsx("h3",{children:m.title}),l.jsx("div",{className:"price",children:m.price})]}),l.jsxs("div",{className:"card-body",children:[l.jsx("p",{className:"description",children:E(m.description)}),l.jsx("ul",{className:"features",children:m.features.map((f,p)=>l.jsxs("li",{children:["✓ ",f]},p))}),l.jsx("button",{className:"btn btn-primary w-100",onClick:()=>y(m),style:{backgroundColor:m.color,borderColor:m.color},children:"הזמן עכשיו"})]})]},m.id))})]}),l.jsx(ec,{isOpen:d,onClose:()=>c(!1),initialProduct:s}),l.jsx("style",{children:`
                .shop-section {
                    background-color: white;
                }
                .subtitle {
                    font-size: 1.25rem;
                    color: var(--color-text-muted);
                }
                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    padding: 1rem 0;
                }
                .product-card {
                    background: white;
                    border-radius: 1.5rem;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid #e2e8f0;
                    transition: transform 0.3s ease;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }
                .product-card:hover {
                    transform: translateY(-5px);
                }
                .product-card.popular {
                    border: 2px solid var(--color-secondary);
                    transform: scale(1.05);
                }
                .product-card.popular:hover {
                    transform: scale(1.05) translateY(-5px);
                }
                .badge {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    background: var(--color-secondary);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.875rem;
                    font-weight: bold;
                    z-index: 10;
                }
                .card-header {
                    padding: 2rem;
                    color: white;
                    text-align: center;
                }
                .card-header h3 {
                    margin: 0;
                    margin-bottom: 0.5rem;
                    font-size: 1.5rem;
                }
                .price {
                    font-size: clamp(1.4rem, 2vw, 1.9rem);
                    font-weight: 800;
                }
                .card-body {
                    padding: 2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                .description {
                    color: var(--color-text-muted);
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                }
                .features {
                    list-style: none;
                    margin: 0;
                    margin-bottom: 2rem;
                    padding: 0;
                    flex-grow: 1;
                }
                .features li {
                    margin-bottom: 0.75rem;
                    display: flex;
                    gap: 0.5rem;
                }
                .mt-3 { margin-top: 1rem; }
            `})]})},O0=()=>l.jsxs("section",{className:"section ambassador-section",children:[l.jsx("div",{className:"container",children:l.jsxs("div",{className:"card ambassador-card",children:[l.jsx("div",{className:"card-header-custom",children:l.jsx("h1",{children:"היו הראשונים להגן על הכלב שלכם – בחינם לשנה."})}),l.jsx("div",{className:"promo-image-container",style:{textAlign:"center",marginBottom:"0",marginTop:"0"},children:l.jsx("img",{src:"/assets/ambassador_promo.jpg",alt:"Find My Dog Ambassador Promo",style:{width:"100%",height:"auto",display:"block"}})}),l.jsxs("div",{className:"card-body-custom",children:[l.jsxs("p",{className:"intro-text",children:["אנו משיקים את ה-",l.jsx("strong",{children:"Waze של הכלבים"}),' ומחפשים 50 "שגרירים" רציניים שיעזרו לנו לדייק את המוצר.']}),l.jsxs("div",{className:"benefits-section",children:[l.jsx("h3",{children:"מה אתם מקבלים?"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"🎁"}),l.jsx("span",{children:l.jsx("strong",{children:"תג לכלב – עלינו."})})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"👑"}),l.jsxs("span",{children:[l.jsx("strong",{children:'מנוי "פרימיום"'})," הכולל התראות וניהול שותפים – ",l.jsx("span",{className:"highlight",children:"חינם לכל השנה"})," (במקום מנוי חודשי עתידי)."]})]})]})]}),l.jsxs("div",{className:"requirements-section",children:[l.jsx("h3",{children:"מה אנחנו מבקשים?"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"🏷️"}),l.jsx("span",{children:"הצמידו את התג לקולר."})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"📝"}),l.jsx("span",{children:"הגדירו פרופיל מלא לכלב במערכת."})]}),l.jsxs("li",{children:[l.jsx("span",{className:"icon",children:"📢"}),l.jsx("span",{children:"ענו על שאלון משוב קצר בעוד שבועיים."})]})]})]}),l.jsxs("div",{className:"alert-box",children:[l.jsx("span",{className:"alert-icon",children:"⚠️"}),l.jsx("strong",{children:"המלאי מוגבל ל-50 הנרשמים הראשונים בלבד."})]}),l.jsxs("div",{className:"actions",style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[l.jsx("a",{href:"https://findmydog.app",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-lg pulse-animation",children:"אני רוצה להצטרף!"}),l.jsx(Pe,{to:"/find-my-dog/flyer",className:"btn btn-secondary btn-lg",title:"הדפס דף מידע לחלוקה",children:"🖨️ הדפס דף מידע"})]})]})]})}),l.jsx("style",{children:`
        .ambassador-section {
          padding: 3rem 0;
          background-color: #f0f9ff;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ambassador-card {
          background: white;
          border-radius: 2rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
          border: 1px solid #e2e8f0;
        }

        .card-header-custom {
          background: linear-gradient(135deg, var(--color-primary), #4f46e5);
          padding: 3rem 2rem;
          text-align: center;
          color: white;
        }

        .card-header-custom h1 {
          margin: 0;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .card-body-custom {
          padding: 3rem;
        }

        .intro-text {
          font-size: 1.25rem;
          text-align: center;
          margin-bottom: 2.5rem;
          color: #334155;
        }

        .benefits-section, .requirements-section {
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 1rem;
        }

        .benefits-section {
          background: #f0fdf4; /* Light green tint */
          border: 1px solid #bbf7d0;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1e293b;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
          display: inline-block;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: #475569;
        }

        li:last-child {
          margin-bottom: 0;
        }

        .icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .highlight {
          color: var(--color-success);
          font-weight: bold;
        }

        .alert-box {
          background: #fffbeb;
          border: 1px solid #fcd34d;
          color: #92400e;
          padding: 1rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .actions {
          text-align: center;
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
          }
        }

        @media (max-width: 600px) {
          .card-header-custom { padding: 2rem 1rem; }
          .card-header-custom h1 { font-size: 1.5rem; }
          .card-body-custom { padding: 1.5rem; }
        }
      `})]});var D0=Object.defineProperty,fr=Object.getOwnPropertySymbols,Vm=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,ym=(s,u,d)=>u in s?D0(s,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[u]=d,Vo=(s,u)=>{for(var d in u||(u={}))Vm.call(u,d)&&ym(s,d,u[d]);if(fr)for(var d of fr(u))Zm.call(u,d)&&ym(s,d,u[d]);return s},Zo=(s,u)=>{var d={};for(var c in s)Vm.call(s,c)&&u.indexOf(c)<0&&(d[c]=s[c]);if(s!=null&&fr)for(var c of fr(s))u.indexOf(c)<0&&Zm.call(s,c)&&(d[c]=s[c]);return d};var tl;(s=>{const u=class oe{constructor(m,f,p,g){if(this.version=m,this.errorCorrectionLevel=f,this.modules=[],this.isFunction=[],m<oe.MIN_VERSION||m>oe.MAX_VERSION)throw new RangeError("Version value out of range");if(g<-1||g>7)throw new RangeError("Mask value out of range");this.size=m*4+17;let w=[];for(let M=0;M<this.size;M++)w.push(!1);for(let M=0;M<this.size;M++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(p);if(this.drawCodewords(C),g==-1){let M=1e9;for(let H=0;H<8;H++){this.applyMask(H),this.drawFormatBits(H);const B=this.getPenaltyScore();B<M&&(g=H,M=B),this.applyMask(H)}}x(0<=g&&g<=7),this.mask=g,this.applyMask(g),this.drawFormatBits(g),this.isFunction=[]}static encodeText(m,f){const p=s.QrSegment.makeSegments(m);return oe.encodeSegments(p,f)}static encodeBinary(m,f){const p=s.QrSegment.makeBytes(m);return oe.encodeSegments([p],f)}static encodeSegments(m,f,p=1,g=40,w=-1,C=!0){if(!(oe.MIN_VERSION<=p&&p<=g&&g<=oe.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let M,H;for(M=p;;M++){const Y=oe.getNumDataCodewords(M,f)*8,P=y.getTotalBits(m,M);if(P<=Y){H=P;break}if(M>=g)throw new RangeError("Data too long")}for(const Y of[oe.Ecc.MEDIUM,oe.Ecc.QUARTILE,oe.Ecc.HIGH])C&&H<=oe.getNumDataCodewords(M,Y)*8&&(f=Y);let B=[];for(const Y of m){d(Y.mode.modeBits,4,B),d(Y.numChars,Y.mode.numCharCountBits(M),B);for(const P of Y.getData())B.push(P)}x(B.length==H);const G=oe.getNumDataCodewords(M,f)*8;x(B.length<=G),d(0,Math.min(4,G-B.length),B),d(0,(8-B.length%8)%8,B),x(B.length%8==0);for(let Y=236;B.length<G;Y^=253)d(Y,8,B);let L=[];for(;L.length*8<B.length;)L.push(0);return B.forEach((Y,P)=>L[P>>>3]|=Y<<7-(P&7)),new oe(M,f,L,w)}getModule(m,f){return 0<=m&&m<this.size&&0<=f&&f<this.size&&this.modules[f][m]}getModules(){return this.modules}drawFunctionPatterns(){for(let p=0;p<this.size;p++)this.setFunctionModule(6,p,p%2==0),this.setFunctionModule(p,6,p%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const m=this.getAlignmentPatternPositions(),f=m.length;for(let p=0;p<f;p++)for(let g=0;g<f;g++)p==0&&g==0||p==0&&g==f-1||p==f-1&&g==0||this.drawAlignmentPattern(m[p],m[g]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(m){const f=this.errorCorrectionLevel.formatBits<<3|m;let p=f;for(let w=0;w<10;w++)p=p<<1^(p>>>9)*1335;const g=(f<<10|p)^21522;x(g>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(g,w));this.setFunctionModule(8,7,c(g,6)),this.setFunctionModule(8,8,c(g,7)),this.setFunctionModule(7,8,c(g,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(g,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(g,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(g,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let m=this.version;for(let p=0;p<12;p++)m=m<<1^(m>>>11)*7973;const f=this.version<<12|m;x(f>>>18==0);for(let p=0;p<18;p++){const g=c(f,p),w=this.size-11+p%3,C=Math.floor(p/3);this.setFunctionModule(w,C,g),this.setFunctionModule(C,w,g)}}drawFinderPattern(m,f){for(let p=-4;p<=4;p++)for(let g=-4;g<=4;g++){const w=Math.max(Math.abs(g),Math.abs(p)),C=m+g,M=f+p;0<=C&&C<this.size&&0<=M&&M<this.size&&this.setFunctionModule(C,M,w!=2&&w!=4)}}drawAlignmentPattern(m,f){for(let p=-2;p<=2;p++)for(let g=-2;g<=2;g++)this.setFunctionModule(m+g,f+p,Math.max(Math.abs(g),Math.abs(p))!=1)}setFunctionModule(m,f,p){this.modules[f][m]=p,this.isFunction[f][m]=!0}addEccAndInterleave(m){const f=this.version,p=this.errorCorrectionLevel;if(m.length!=oe.getNumDataCodewords(f,p))throw new RangeError("Invalid argument");const g=oe.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][f],w=oe.ECC_CODEWORDS_PER_BLOCK[p.ordinal][f],C=Math.floor(oe.getNumRawDataModules(f)/8),M=g-C%g,H=Math.floor(C/g);let B=[];const G=oe.reedSolomonComputeDivisor(w);for(let Y=0,P=0;Y<g;Y++){let ne=m.slice(P,P+H-w+(Y<M?0:1));P+=ne.length;const ve=oe.reedSolomonComputeRemainder(ne,G);Y<M&&ne.push(0),B.push(ne.concat(ve))}let L=[];for(let Y=0;Y<B[0].length;Y++)B.forEach((P,ne)=>{(Y!=H-w||ne>=M)&&L.push(P[Y])});return x(L.length==C),L}drawCodewords(m){if(m.length!=Math.floor(oe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let f=0;for(let p=this.size-1;p>=1;p-=2){p==6&&(p=5);for(let g=0;g<this.size;g++)for(let w=0;w<2;w++){const C=p-w,H=(p+1&2)==0?this.size-1-g:g;!this.isFunction[H][C]&&f<m.length*8&&(this.modules[H][C]=c(m[f>>>3],7-(f&7)),f++)}}x(f==m.length*8)}applyMask(m){if(m<0||m>7)throw new RangeError("Mask value out of range");for(let f=0;f<this.size;f++)for(let p=0;p<this.size;p++){let g;switch(m){case 0:g=(p+f)%2==0;break;case 1:g=f%2==0;break;case 2:g=p%3==0;break;case 3:g=(p+f)%3==0;break;case 4:g=(Math.floor(p/3)+Math.floor(f/2))%2==0;break;case 5:g=p*f%2+p*f%3==0;break;case 6:g=(p*f%2+p*f%3)%2==0;break;case 7:g=((p+f)%2+p*f%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[f][p]&&g&&(this.modules[f][p]=!this.modules[f][p])}}getPenaltyScore(){let m=0;for(let w=0;w<this.size;w++){let C=!1,M=0,H=[0,0,0,0,0,0,0];for(let B=0;B<this.size;B++)this.modules[w][B]==C?(M++,M==5?m+=oe.PENALTY_N1:M>5&&m++):(this.finderPenaltyAddHistory(M,H),C||(m+=this.finderPenaltyCountPatterns(H)*oe.PENALTY_N3),C=this.modules[w][B],M=1);m+=this.finderPenaltyTerminateAndCount(C,M,H)*oe.PENALTY_N3}for(let w=0;w<this.size;w++){let C=!1,M=0,H=[0,0,0,0,0,0,0];for(let B=0;B<this.size;B++)this.modules[B][w]==C?(M++,M==5?m+=oe.PENALTY_N1:M>5&&m++):(this.finderPenaltyAddHistory(M,H),C||(m+=this.finderPenaltyCountPatterns(H)*oe.PENALTY_N3),C=this.modules[B][w],M=1);m+=this.finderPenaltyTerminateAndCount(C,M,H)*oe.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let C=0;C<this.size-1;C++){const M=this.modules[w][C];M==this.modules[w][C+1]&&M==this.modules[w+1][C]&&M==this.modules[w+1][C+1]&&(m+=oe.PENALTY_N2)}let f=0;for(const w of this.modules)f=w.reduce((C,M)=>C+(M?1:0),f);const p=this.size*this.size,g=Math.ceil(Math.abs(f*20-p*10)/p)-1;return x(0<=g&&g<=9),m+=g*oe.PENALTY_N4,x(0<=m&&m<=2568888),m}getAlignmentPatternPositions(){if(this.version==1)return[];{const m=Math.floor(this.version/7)+2,f=this.version==32?26:Math.ceil((this.version*4+4)/(m*2-2))*2;let p=[6];for(let g=this.size-7;p.length<m;g-=f)p.splice(1,0,g);return p}}static getNumRawDataModules(m){if(m<oe.MIN_VERSION||m>oe.MAX_VERSION)throw new RangeError("Version number out of range");let f=(16*m+128)*m+64;if(m>=2){const p=Math.floor(m/7)+2;f-=(25*p-10)*p-55,m>=7&&(f-=36)}return x(208<=f&&f<=29648),f}static getNumDataCodewords(m,f){return Math.floor(oe.getNumRawDataModules(m)/8)-oe.ECC_CODEWORDS_PER_BLOCK[f.ordinal][m]*oe.NUM_ERROR_CORRECTION_BLOCKS[f.ordinal][m]}static reedSolomonComputeDivisor(m){if(m<1||m>255)throw new RangeError("Degree out of range");let f=[];for(let g=0;g<m-1;g++)f.push(0);f.push(1);let p=1;for(let g=0;g<m;g++){for(let w=0;w<f.length;w++)f[w]=oe.reedSolomonMultiply(f[w],p),w+1<f.length&&(f[w]^=f[w+1]);p=oe.reedSolomonMultiply(p,2)}return f}static reedSolomonComputeRemainder(m,f){let p=f.map(g=>0);for(const g of m){const w=g^p.shift();p.push(0),f.forEach((C,M)=>p[M]^=oe.reedSolomonMultiply(C,w))}return p}static reedSolomonMultiply(m,f){if(m>>>8||f>>>8)throw new RangeError("Byte out of range");let p=0;for(let g=7;g>=0;g--)p=p<<1^(p>>>7)*285,p^=(f>>>g&1)*m;return x(p>>>8==0),p}finderPenaltyCountPatterns(m){const f=m[1];x(f<=this.size*3);const p=f>0&&m[2]==f&&m[3]==f*3&&m[4]==f&&m[5]==f;return(p&&m[0]>=f*4&&m[6]>=f?1:0)+(p&&m[6]>=f*4&&m[0]>=f?1:0)}finderPenaltyTerminateAndCount(m,f,p){return m&&(this.finderPenaltyAddHistory(f,p),f=0),f+=this.size,this.finderPenaltyAddHistory(f,p),this.finderPenaltyCountPatterns(p)}finderPenaltyAddHistory(m,f){f[0]==0&&(m+=this.size),f.pop(),f.unshift(m)}};u.MIN_VERSION=1,u.MAX_VERSION=40,u.PENALTY_N1=3,u.PENALTY_N2=3,u.PENALTY_N3=40,u.PENALTY_N4=10,u.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],u.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],s.QrCode=u;function d(E,m,f){if(m<0||m>31||E>>>m)throw new RangeError("Value out of range");for(let p=m-1;p>=0;p--)f.push(E>>>p&1)}function c(E,m){return(E>>>m&1)!=0}function x(E){if(!E)throw new Error("Assertion error")}const b=class Oe{constructor(m,f,p){if(this.mode=m,this.numChars=f,this.bitData=p,f<0)throw new RangeError("Invalid argument");this.bitData=p.slice()}static makeBytes(m){let f=[];for(const p of m)d(p,8,f);return new Oe(Oe.Mode.BYTE,m.length,f)}static makeNumeric(m){if(!Oe.isNumeric(m))throw new RangeError("String contains non-numeric characters");let f=[];for(let p=0;p<m.length;){const g=Math.min(m.length-p,3);d(parseInt(m.substring(p,p+g),10),g*3+1,f),p+=g}return new Oe(Oe.Mode.NUMERIC,m.length,f)}static makeAlphanumeric(m){if(!Oe.isAlphanumeric(m))throw new RangeError("String contains unencodable characters in alphanumeric mode");let f=[],p;for(p=0;p+2<=m.length;p+=2){let g=Oe.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p))*45;g+=Oe.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p+1)),d(g,11,f)}return p<m.length&&d(Oe.ALPHANUMERIC_CHARSET.indexOf(m.charAt(p)),6,f),new Oe(Oe.Mode.ALPHANUMERIC,m.length,f)}static makeSegments(m){return m==""?[]:Oe.isNumeric(m)?[Oe.makeNumeric(m)]:Oe.isAlphanumeric(m)?[Oe.makeAlphanumeric(m)]:[Oe.makeBytes(Oe.toUtf8ByteArray(m))]}static makeEci(m){let f=[];if(m<0)throw new RangeError("ECI assignment value out of range");if(m<128)d(m,8,f);else if(m<16384)d(2,2,f),d(m,14,f);else if(m<1e6)d(6,3,f),d(m,21,f);else throw new RangeError("ECI assignment value out of range");return new Oe(Oe.Mode.ECI,0,f)}static isNumeric(m){return Oe.NUMERIC_REGEX.test(m)}static isAlphanumeric(m){return Oe.ALPHANUMERIC_REGEX.test(m)}getData(){return this.bitData.slice()}static getTotalBits(m,f){let p=0;for(const g of m){const w=g.mode.numCharCountBits(f);if(g.numChars>=1<<w)return 1/0;p+=4+w+g.bitData.length}return p}static toUtf8ByteArray(m){m=encodeURI(m);let f=[];for(let p=0;p<m.length;p++)m.charAt(p)!="%"?f.push(m.charCodeAt(p)):(f.push(parseInt(m.substring(p+1,p+3),16)),p+=2);return f}};b.NUMERIC_REGEX=/^[0-9]*$/,b.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,b.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=b;s.QrSegment=b})(tl||(tl={}));(s=>{(u=>{const d=class{constructor(x,b){this.ordinal=x,this.formatBits=b}};d.LOW=new d(0,1),d.MEDIUM=new d(1,0),d.QUARTILE=new d(2,3),d.HIGH=new d(3,2),u.Ecc=d})(s.QrCode||(s.QrCode={}))})(tl||(tl={}));(s=>{(u=>{const d=class{constructor(x,b){this.modeBits=x,this.numBitsCharCount=b}numCharCountBits(x){return this.numBitsCharCount[Math.floor((x+7)/17)]}};d.NUMERIC=new d(1,[10,12,14]),d.ALPHANUMERIC=new d(2,[9,11,13]),d.BYTE=new d(4,[8,16,16]),d.KANJI=new d(8,[8,10,12]),d.ECI=new d(7,[0,0,0]),u.Mode=d})(s.QrSegment||(s.QrSegment={}))})(tl||(tl={}));var Ll=tl;var _0={L:Ll.QrCode.Ecc.LOW,M:Ll.QrCode.Ecc.MEDIUM,Q:Ll.QrCode.Ecc.QUARTILE,H:Ll.QrCode.Ecc.HIGH},Km=128,Jm="L",Fm="#FFFFFF",Wm="#000000",$m=!1,Im=1,U0=4,q0=0,H0=.1;function Pm(s,u=0){const d=[];return s.forEach(function(c,x){let b=null;c.forEach(function(y,E){if(!y&&b!==null){d.push(`M${b+u} ${x+u}h${E-b}v1H${b+u}z`),b=null;return}if(E===c.length-1){if(!y)return;b===null?d.push(`M${E+u},${x+u} h1v1H${E+u}z`):d.push(`M${b+u},${x+u} h${E+1-b}v1H${b+u}z`);return}y&&b===null&&(b=E)})}),d.join("")}function eh(s,u){return s.slice().map((d,c)=>c<u.y||c>=u.y+u.h?d:d.map((x,b)=>b<u.x||b>=u.x+u.w?x:!1))}function B0(s,u,d,c){if(c==null)return null;const x=s.length+d*2,b=Math.floor(u*H0),y=x/u,E=(c.width||b)*y,m=(c.height||b)*y,f=c.x==null?s.length/2-E/2:c.x*y,p=c.y==null?s.length/2-m/2:c.y*y,g=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let M=Math.floor(f),H=Math.floor(p),B=Math.ceil(E+f-M),G=Math.ceil(m+p-H);w={x:M,y:H,w:B,h:G}}const C=c.crossOrigin;return{x:f,y:p,h:m,w:E,excavation:w,opacity:g,crossOrigin:C}}function L0(s,u){return u!=null?Math.max(Math.floor(u),0):s?U0:q0}function th({value:s,level:u,minVersion:d,includeMargin:c,marginSize:x,imageSettings:b,size:y,boostLevel:E}){let m=De.useMemo(()=>{const M=(Array.isArray(s)?s:[s]).reduce((H,B)=>(H.push(...Ll.QrSegment.makeSegments(B)),H),[]);return Ll.QrCode.encodeSegments(M,_0[u],d,void 0,void 0,E)},[s,u,d,E]);const{cells:f,margin:p,numCells:g,calculatedImageSettings:w}=De.useMemo(()=>{let C=m.getModules();const M=L0(c,x),H=C.length+M*2,B=B0(C,y,M,b);return{cells:C,margin:M,numCells:H,calculatedImageSettings:B}},[m,y,b,c,x]);return{qrcode:m,margin:p,cells:f,numCells:g,calculatedImageSettings:w}}var Y0=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),G0=De.forwardRef(function(u,d){const c=u,{value:x,size:b=Km,level:y=Jm,bgColor:E=Fm,fgColor:m=Wm,includeMargin:f=$m,minVersion:p=Im,boostLevel:g,marginSize:w,imageSettings:C}=c,H=Zo(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:B}=H,G=Zo(H,["style"]),L=C?.src,Y=De.useRef(null),P=De.useRef(null),ne=De.useCallback(Ze=>{Y.current=Ze,typeof d=="function"?d(Ze):d&&(d.current=Ze)},[d]),[ve,$]=De.useState(!1),{margin:I,cells:ue,numCells:et,calculatedImageSettings:Ce}=th({value:x,level:y,minVersion:p,boostLevel:g,includeMargin:f,marginSize:w,imageSettings:C,size:b});De.useEffect(()=>{if(Y.current!=null){const Ze=Y.current,_e=Ze.getContext("2d");if(!_e)return;let D=ue;const Q=P.current,F=Ce!=null&&Q!==null&&Q.complete&&Q.naturalHeight!==0&&Q.naturalWidth!==0;F&&Ce.excavation!=null&&(D=eh(ue,Ce.excavation));const pe=window.devicePixelRatio||1;Ze.height=Ze.width=b*pe;const ge=b/et*pe;_e.scale(ge,ge),_e.fillStyle=E,_e.fillRect(0,0,et,et),_e.fillStyle=m,Y0?_e.fill(new Path2D(Pm(D,I))):ue.forEach(function(N,q){N.forEach(function(X,Z){X&&_e.fillRect(Z+I,q+I,1,1)})}),Ce&&(_e.globalAlpha=Ce.opacity),F&&_e.drawImage(Q,Ce.x+I,Ce.y+I,Ce.w,Ce.h)}}),De.useEffect(()=>{$(!1)},[L]);const tt=Vo({height:b,width:b},B);let qt=null;return L!=null&&(qt=De.createElement("img",{src:L,key:L,style:{display:"none"},onLoad:()=>{$(!0)},ref:P,crossOrigin:Ce?.crossOrigin})),De.createElement(De.Fragment,null,De.createElement("canvas",Vo({style:tt,height:b,width:b,ref:ne,role:"img"},G)),qt)});G0.displayName="QRCodeCanvas";var ah=De.forwardRef(function(u,d){const c=u,{value:x,size:b=Km,level:y=Jm,bgColor:E=Fm,fgColor:m=Wm,includeMargin:f=$m,minVersion:p=Im,boostLevel:g,title:w,marginSize:C,imageSettings:M}=c,H=Zo(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:B,cells:G,numCells:L,calculatedImageSettings:Y}=th({value:x,level:y,minVersion:p,boostLevel:g,includeMargin:f,marginSize:C,imageSettings:M,size:b});let P=G,ne=null;M!=null&&Y!=null&&(Y.excavation!=null&&(P=eh(G,Y.excavation)),ne=De.createElement("image",{href:M.src,height:Y.h,width:Y.w,x:Y.x+B,y:Y.y+B,preserveAspectRatio:"none",opacity:Y.opacity,crossOrigin:Y.crossOrigin}));const ve=Pm(P,B);return De.createElement("svg",Vo({height:b,width:b,viewBox:`0 0 ${L} ${L}`,ref:d,role:"img"},H),!!w&&De.createElement("title",null,w),De.createElement("path",{fill:E,d:`M0,0 h${L}v${L}H0z`,shapeRendering:"crispEdges"}),De.createElement("path",{fill:m,d:ve,shapeRendering:"crispEdges"}),ne)});ah.displayName="QRCodeSVG";const Q0="/assets/logo_print-DtBTiYos.png",X0="/assets/infographic_print-D_4Yyi5a.png",V0={he:{title:"שומרים על הכלב – בחינם",subtitle:'מחפשים 50 "שגרירים" להשקת הפיילוט',benefits_title:"מה מקבלים?",benefit_1:"🎁 תג חכם ומעוצב",benefit_2:"🌞 מנוי פרימיום לשנה שלמה",plus:"+",help_text_1:'עזרו לנו להשיק את "ה-Waze של הכלבים"',help_text_2:"כל מה שצריך זה להצמיד לקולר ולתת לנו משוב.",scan_cta:"סרקו לקבלת מתנה",limit:"*מוגבל ל-50 הנרשמים הראשונים בלבד",direction:"rtl",font:"sans-serif"},ru:{title:"Защитите свою собаку – Бесплатно",subtitle:"Мы ищем 50 Амбассадоров для пилота",benefits_title:"Что вы получите?",benefit_1:"🎁 Умный и стильный адресник",benefit_2:"🌞 Премиум подписка на целый год",plus:"+",help_text_1:'Помогите нам протестировать "Waze для собак".',help_text_2:"Прикрепите адресник к ошейнику и оставьте отзыв.",scan_cta:"Сканируйте",limit:"*Только для первых 50 участников",direction:"ltr",font:"sans-serif"},en:{title:"Protect Your Dog – For Free",subtitle:'Looking for 50 "Ambassadors" for our pilot',benefits_title:"What do you get?",benefit_1:"🎁 Smart & Stylish Tag",benefit_2:"🌞 1 Year Premium Subscription",plus:"+",help_text_1:'Help us launch the "Waze for Dogs".',help_text_2:"Just attach to collar and give feedback.",scan_cta:"Scan to get a gift",limit:"*Limited to first 50 registrants",direction:"ltr",font:"sans-serif"}},Z0=()=>{const[s,u]=z.useState("he"),d=V0[s],c="https://findmydog.app",x=()=>{window.print()};return l.jsxs("div",{className:"flyer-page-container",children:[l.jsxs("div",{className:"no-print control-panel",children:[l.jsx("h2",{children:"בחרו שפה להדפסה / Select Language"}),l.jsxs("div",{className:"lang-buttons",children:[l.jsx("button",{onClick:()=>u("he"),className:s==="he"?"active":"",children:"עברית"}),l.jsx("button",{onClick:()=>u("en"),className:s==="en"?"active":"",children:"English"}),l.jsx("button",{onClick:()=>u("ru"),className:s==="ru"?"active":"",children:"Русский"})]}),l.jsx("button",{onClick:x,className:"print-btn",children:"🖨️ הדפס מודעה / Print Flyer"}),l.jsx("p",{className:"note",children:'Use A4 paper size and "Portrait" orientation.'})]}),l.jsxs("div",{className:"flyer-a4",dir:d.direction,children:[l.jsx("div",{className:"flyer-header",children:l.jsx("img",{src:Q0,alt:"FindMyDog Logo",className:"logo-img"})}),l.jsxs("div",{className:"flyer-content",children:[l.jsx("h1",{className:"main-title",children:d.title}),l.jsx("h2",{className:"subtitle",children:d.subtitle}),l.jsxs("div",{className:"offer-box",children:[l.jsx("h3",{className:"benefits-title",children:d.benefits_title}),l.jsx("div",{className:"benefit-item",children:d.benefit_1}),l.jsx("div",{className:"plus-sign",children:d.plus}),l.jsx("div",{className:"benefit-item",children:d.benefit_2})]}),l.jsxs("div",{className:"promo-split-row",children:[l.jsx("div",{className:"text-side",children:l.jsxs("div",{className:"mission-statement",children:[l.jsx("p",{children:d.help_text_1}),l.jsx("p",{children:d.help_text_2})]})}),l.jsxs("div",{className:"qr-side",children:[l.jsx("div",{className:"qr-code-container",children:l.jsx(ah,{value:c,size:150,level:"H"})}),l.jsx("div",{className:"scan-cta",children:d.scan_cta}),l.jsx("div",{className:"limit-text",children:d.limit})]})]})]}),l.jsx("div",{className:"flyer-footer",children:l.jsx("img",{src:X0,alt:"How it works",className:"infographic-img"})})]}),l.jsx("style",{children:`
        /* Page Background */
        .flyer-page-container {
          min-height: 100vh;
          background: #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Control Panel */
        .control-panel {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
          text-align: center;
          width: 100%;
          max-width: 600px;
        }

        .lang-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 1rem 0;
        }

        button {
          padding: 0.5rem 1.5rem;
          border: 2px solid #ccc;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.2s;
        }

        button.active {
          border-color: #4f46e5;
          background: #e0e7ff;
          color: #4f46e5;
        }

        .print-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }
        
        .print-btn:hover {
          background: #4338ca;
        }

        .note {
          font-size: 0.8rem;
          color: #666;
          margin-top: 0.5rem;
        }

        /* A4 Flyer Design */
        .flyer-a4 {
          background: white;
          width: 210mm;
          height: 297mm;
          padding: 15mm;
          box-sizing: border-box;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: relative;
          color: #1e293b;
        }

        .flyer-header {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .logo-img {
          max-width: 80%;
          max-height: 120px;
          object-fit: contain;
        }

        .flyer-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .main-title {
          font-size: 2.5rem;
          margin: 0.2rem 0;
          color: #1e3a8a; /* Dark Blue */
          font-weight: 900;
        }

        .subtitle {
          font-size: 1.5rem;
          margin: 0 0 1rem;
          color: #d97706; /* Amber/Orange */
          font-weight: 700;
        }

        .offer-box {
          border: 3px solid #3b82f6;
          border-radius: 1.5rem;
          padding: 1.25rem;
          width: 90%;
          margin-bottom: 1.5rem;
          background: #eff6ff;
        }

        .benefits-title {
          margin-top: 0;
          font-size: 1.4rem;
          color: #1e40af;
          text-decoration: underline;
        }

        .benefit-item {
          font-size: 1.3rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        .plus-sign {
          font-size: 2rem;
          color: #ef4444;
          line-height: 1;
          font-weight: bold;
        }

        .promo-split-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          width: 95%;
          margin-bottom: 0.5rem;
        }

        .text-side {
          flex: 1;
        }
        
        /* Force text alignment based on direction - Hebrew (RTL) needs right align, LTR needs left */
        .flyer-a4[dir="rtl"] .text-side {
          text-align: right; 
        }
        .flyer-a4[dir="ltr"] .text-side {
          text-align: left;
        }

        .qr-side {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mission-statement {
          font-size: 1.4rem;
          color: #334155;
          margin-bottom: 0;
          font-weight: 600;
          line-height: 1.3;
        }

        .qr-section {
           display: none; /* Removed as we use the new layout */
        }

        .qr-code-container {
          display: inline-block;
          padding: 0.75rem;
          border: 4px solid #1e293b;
          border-radius: 1rem;
          background: white;
          margin-bottom: 0.2rem;
        }

        .scan-cta {
          font-size: 1.5rem;
          font-weight: 800;
          color: #475569;
          margin-top: 0;
          line-height: 1.2;
        }

        .limit-text {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0;
        }

        .flyer-footer {
          width: 100%;
          margin-top: auto;
          /* Border removed as requested */
          padding-top: 0.5rem;
          display: flex;
          justify-content: center;
          flex-shrink: 0; /* Don't shrink the container */
        }

        .infographic-img {
          width: 100%;
          max-height: 300px; /* Allowed a bit more space since we compacted above */
          object-fit: contain;
        }

        /* Print Specifics */
        /* Print Specifics */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          /* Hide all other site elements */
          body * {
            visibility: hidden;
          }

          /* Explicitly hide layout headers and footers to remove their space */
          header, footer, .main-header, .fmd-header, .smart-app-header {
            display: none !important;
          }

          /* Reset all parent containers */
          html, body, #root, .main-layout, .fmd-wrapper, main {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
            background: white;
          }

          .no-print {
            display: none !important;
          }

          /* Make the flyer container visible and position it over everything */
          .flyer-page-container {
            visibility: visible;
            position: fixed;
            left: 0;
            top: 0;
            width: 210mm;
            height: 297mm;
            margin: 0 auto;
            padding: 0;
            background: white;
            z-index: 9999;
            /* Flex to center if paper is larger, though fixed size usually handles it */
            display: flex;
            justify-content: center;
          }

          /* Make children visible */
          .flyer-page-container * {
            visibility: visible;
          }

          .flyer-a4 {
            width: 100%;
            height: 100%;
            padding: 10mm; /* Reduced padding for print */
            box-shadow: none;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
        }
      `})]})},K0=()=>{if(typeof window>"u")return{tab:"desktop",os:""};const s=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(s)?{tab:"android",os:"אנדרואיד (Android)"}:/iPad|iPhone|iPod/.test(s)&&!window.MSStream?{tab:"ios",os:"אייפון (iOS)"}:{tab:"desktop",os:"מחשב (PC / Mac)"}},J0=()=>{const[s]=z.useState(K0),[u,d]=z.useState(s.tab),[c]=z.useState(s.os);return l.jsxs("section",{className:"section fmd-install-section",style:{background:"#f8fafc",padding:"4rem 0"},children:[l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"text-center mb-2",style:{fontWeight:800},children:"כיצד להתקין את FindMyDog כאפליקציה?"}),l.jsxs("p",{className:"text-center text-muted mb-5",style:{maxWidth:"600px",margin:"0 auto 3rem auto",fontSize:"1.1rem"},children:["תוכלו להתקין את האפליקציה ישירות על מסך הבית של הנייד או על שולחן העבודה של המחשב לגישה מהירה ונוחה במיוחד בכל עת, ללא צורך בחנות אפליקציות.",c&&l.jsxs("span",{style:{display:"block",marginTop:"0.75rem",color:"var(--color-primary)",fontWeight:"bold"},children:["מערכת הפעלה שזוהתה: ",c," (ההוראות המתאימות מוצגות כברירת מחדל)"]})]}),l.jsxs("div",{className:"install-box",children:[l.jsxs("div",{className:"install-tabs",children:[l.jsx("button",{className:`install-tab-btn ${u==="desktop"?"active":""}`,onClick:()=>d("desktop"),children:"💻 מחשב (PC / Mac)"}),l.jsx("button",{className:`install-tab-btn ${u==="android"?"active":""}`,onClick:()=>d("android"),children:"🤖 אנדרואיד (Android)"}),l.jsx("button",{className:`install-tab-btn ${u==="ios"?"active":""}`,onClick:()=>d("ios"),children:"🍏 אייפון (iOS)"})]}),l.jsxs("div",{className:"install-content",children:[u==="desktop"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על המחשב (Windows / macOS)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"בדפדפן Chrome / Edge:"}),' לחצו על סמל ה-⊕ (התקנה) המופיע בשורת הכתובות בצד שמאל/ימין (או לחצו על שלוש הנקודות בפינה > "התקן את האפליקציה").']}),l.jsxs("li",{children:[l.jsx("strong",{children:"בדפדפן Safari (macOS Sonoma ואילך):"})," פתחו את האתר, לחצו על כפתור השיתוף בסרגל הכלים, ובחרו באפשרות ",l.jsx("strong",{children:'"הוסף ל-Dock"'})," (Add to Dock)."]}),l.jsx("li",{children:"לאחר מכן יתווסף קיצור דרך בשולחן העבודה או ב-Dock, והאפליקציה תיפתח בחלון נפרד ונקי ללא שורת כתובות של דפדפן."})]})]}),u==="android"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על מכשיר אנדרואיד (Android)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["פתחו את האתר בדפדפן ",l.jsx("strong",{children:"Chrome"})," (או בדפדפן המובנה של סמסונג)."]}),l.jsx("li",{children:"לחצו על שלוש הנקודות (תפריט הדפדפן) בפינת המסך."}),l.jsxs("li",{children:["בחרו באפשרות ",l.jsx("strong",{children:'"התקן אפליקציה"'})," (Install app) או ",l.jsx("strong",{children:'"הוסף למסך הבית"'})," (Add to Home screen)."]}),l.jsx("li",{children:"אשרו את הפעולה, והאפליקציה תופיע כקיצור דרך עם הלוגו של FindMyDog במסך הבית שלכם."})]})]}),u==="ios"&&l.jsxs("div",{className:"install-instructions animate-fade",children:[l.jsx("h4",{children:"התקנה על מכשירי אפל (iPhone / iPad)"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["פתחו את האתר בדפדפן ",l.jsx("strong",{children:"Safari"})," של אפל."]}),l.jsx("li",{children:"לחצו על כפתור השיתוף 📤 (הריבוע עם החץ שמצביע כלפי מעלה) המופיע בתחתית המסך."}),l.jsx("li",{children:'גללו את תפריט האפשרויות כלפי מטה ולחצו על **"הוסף למסך הבית"** (Add to Home Screen).'}),l.jsx("li",{children:'לחצו על **"הוסף"** (Add) בפינה העליונה. הלוגו של FindMyDog יופיע כעת במסך הבית שלך כאפליקציה עצמאית ומהירה.'})]})]})]})]})]}),l.jsx("style",{children:`
                .install-box {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 1.25rem;
                    overflow: hidden;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
                }
                .install-tabs {
                    display: flex;
                    border-bottom: 1px solid #e2e8f0;
                    background: #f8fafc;
                }
                .install-tab-btn {
                    flex: 1;
                    padding: 1.25rem 1rem;
                    background: none;
                    border: none;
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    border-bottom: 3px solid transparent;
                    font-family: inherit;
                }
                .install-tab-btn:hover {
                    color: var(--color-primary);
                    background: rgba(0, 0, 0, 0.01);
                }
                .install-tab-btn.active {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                    background: #ffffff;
                }
                .install-content {
                    padding: 2.5rem 2rem;
                    text-align: right;
                }
                .install-instructions h4 {
                    font-size: 1.4rem;
                    color: var(--color-primary);
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                }
                .install-instructions ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }
                .install-instructions li {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--color-text);
                    position: relative;
                    padding-right: 1.75rem;
                }
                .install-instructions li::before {
                    content: "🐶";
                    position: absolute;
                    right: 0;
                    top: 0.1rem;
                    font-size: 1.1rem;
                }
                
                .animate-fade {
                    animation: fadeIn 0.4s ease-out;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @media (max-width: 600px) {
                    .install-tabs {
                        flex-direction: column;
                    }
                    .install-tab-btn {
                        border-bottom: none;
                        border-left: 3px solid transparent;
                        padding: 1rem;
                        text-align: right;
                    }
                    .install-tab-btn.active {
                        border-left-color: var(--color-primary);
                        border-bottom-color: transparent;
                    }
                }
            `})]})},F0=()=>{const[s,u]=z.useState("idle"),[d,c]=z.useState(0),x=["מזהה פנים ומייצב תמונה... 📸","ממפה 85 נקודות ציון ביומטריות ייחודיות... 🧬","מנתח מרחקי עיניים, מבנה גשר אף וקווי לסת... 📐","מצליב נתונים מול מאגר הכלבים האבודים הארצי... 🖥️"],b=()=>{u("scanning"),c(0);let E=0;const m=setInterval(()=>{E+=1,E<x.length?c(E):(clearInterval(m),u("done"))},1500)},y=()=>{u("idle"),c(0)};return l.jsxs("section",{className:"section biometric-section",style:{background:"#f8fafc",padding:"4rem 0"},children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-5",children:[l.jsx("span",{className:"badge-new",children:"חדש באתר! 🔥"}),l.jsx("h1",{className:"mt-3 mb-3",style:{fontWeight:900},children:"סריקה ביומטרית לזיהוי כלבים"}),l.jsx("h3",{className:"text-muted",style:{fontWeight:400,maxWidth:"700px",margin:"0 auto",fontSize:"1.25rem"},children:"טכנולוגיית זיהוי פנים מתקדמת המאפשרת לאתר ולזהות כלב אבוד באמצעות צילום פנים בלבד, ישירות מהמצלמה בנייד!"})]}),l.jsxs("div",{className:"alert-custom mb-5",children:[l.jsx("div",{className:"alert-icon",children:"⚠️"}),l.jsxs("div",{className:"alert-content-box",children:[l.jsx("strong",{children:"דרישות מערכת וטלפונים נתמכים:"}),l.jsxs("p",{className:"mb-0 text-muted",style:{fontSize:"0.95rem",marginTop:"0.25rem"},children:["תכונה זו מתבססת על עיבוד גרפי כבד ובינה מלאכותית מקומית בדפדפן. השירות ",l.jsx("strong",{children:"מתאים לטלפונים תואמים בלבד ושאינם מאוד ישנים"})," (לדוגמה: אייפון XS ומעלה, או מכשירי אנדרואיד מודרניים בעלי מעבד חזק ומצלמת פוקוס אוטומטי). במכשירים ישנים מאוד ייתכנו איטיות או חוסר תאימות."]})]})]}),l.jsxs("div",{className:"grid-biometric",children:[l.jsxs("div",{className:"simulator-card text-center",children:[l.jsx("h4",{className:"mb-3",style:{fontWeight:700},children:"סימולטור סריקה אינטראקטיבי"}),l.jsx("p",{className:"text-muted mb-4",style:{fontSize:"0.95rem"},children:"נסו את הדמיית הסריקה בעצמכם וראו כיצד האלגוריתם מזהה ומנתח את הכלב:"}),l.jsxs("div",{className:"scan-viewport",children:[s==="scanning"&&l.jsx("div",{className:"scanning-line"}),l.jsx("div",{className:"dog-mockup-avatar",children:l.jsxs("div",{className:"husky-face",children:[l.jsx("div",{className:"husky-ears"}),l.jsxs("div",{className:"husky-eyes",children:[l.jsx("div",{className:"eye left",children:s==="scanning"&&l.jsx("span",{className:"marker"})}),l.jsx("div",{className:"eye right",children:s==="scanning"&&l.jsx("span",{className:"marker"})})]}),l.jsx("div",{className:"husky-nose",children:s==="scanning"&&l.jsx("span",{className:"marker-nose"})}),l.jsx("div",{className:"husky-mouth"})]})}),s==="idle"&&l.jsx("div",{className:"viewport-overlay",children:l.jsx("button",{onClick:b,className:"btn btn-primary btn-lg",children:"🐕 הפעל סריקת הדגמה"})}),s==="scanning"&&l.jsxs("div",{className:"viewport-overlay scanning",children:[l.jsx("div",{className:"spinner-border text-primary mb-3",role:"status"}),l.jsx("p",{className:"scan-status-text",children:x[d]})]}),s==="done"&&l.jsxs("div",{className:"viewport-overlay success",children:[l.jsx("div",{className:"success-badge",children:"✅ נמצאה התאמה 99.8%!"}),l.jsxs("div",{className:"result-card mt-3",children:[l.jsxs("p",{className:"mb-1",children:[l.jsx("strong",{children:"שם הכלב:"})," שלג (Husky)"]}),l.jsxs("p",{className:"mb-1",children:[l.jsx("strong",{children:"בעלים:"})," דוד ברק"]}),l.jsx("p",{className:"mb-2 text-danger",children:"⚠️ מדווח כאבוד בחיפה!"}),l.jsx("button",{onClick:y,className:"btn btn-outline-primary btn-sm",children:"🔄 סריקה חדשה"})]})]})]})]}),l.jsxs("div",{className:"explanation-card",children:[l.jsx("h4",{className:"mb-4",style:{fontWeight:700,color:"var(--color-primary)"},children:"איך פועל זיהוי פנים לכלבים?"}),l.jsxs("div",{className:"how-step mb-4",children:[l.jsx("div",{className:"step-num",children:"1"}),l.jsxs("div",{className:"step-desc",children:[l.jsx("h5",{children:"צילום קל ונוח"}),l.jsx("p",{className:"text-muted",children:"מכוונים את מצלמת הטלפון אל פני הכלב. אין צורך לצלם תמונה סטטית - המערכת מזהה ומקליטה את קווי הפנים ישירות מזרם הווידאו החי בדפדפן."})]})]}),l.jsxs("div",{className:"how-step mb-4",children:[l.jsx("div",{className:"step-num",children:"2"}),l.jsxs("div",{className:"step-desc",children:[l.jsx("h5",{children:"מיפוי 85 נקודות ציון"}),l.jsx("p",{className:"text-muted",children:"הבינה המלאכותית ממפה ומנתחת את הגיאומטריה הייחודית של הכלב: המרחק בין העיניים, מבנה גשר האף, צורת האוזניים, והפיגמנטציה הייחודית סביב הפה והעיניים."})]})]}),l.jsxs("div",{className:"how-step",children:[l.jsx("div",{className:"step-num",children:"3"}),l.jsxs("div",{className:"step-desc",children:[l.jsx("h5",{children:"הצלבה מיידית מול המאגר"}),l.jsx("p",{className:"text-muted",children:"נקודות הציון הופכות לקוד ביומטרי מוצפן (Biometric Vector) ומושוות מיידית מול אלפי הכלבים האבודים שדווחו במאגר הארצי שלנו, ללא תלות בקולר או תג פיזי!"})]})]})]})]})]}),l.jsx("style",{children:`
                .badge-new {
                    background-color: rgba(14, 165, 233, 0.15);
                    color: var(--color-primary);
                    font-size: 0.95rem;
                    font-weight: 700;
                    padding: 0.4rem 1.2rem;
                    border-radius: 50px;
                    border: 1px solid rgba(14, 165, 233, 0.3);
                }
                .alert-custom {
                    background: #fffbeb;
                    border: 1px solid #fef3c7;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: right;
                }
                .alert-icon {
                    font-size: 1.5rem;
                    line-height: 1;
                }
                .alert-content-box strong {
                    color: #92400e;
                    font-size: 1.05rem;
                }
                .grid-biometric {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    max-width: 1000px;
                    margin: 0 auto;
                    align-items: start;
                }
                .simulator-card, .explanation-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 1.25rem;
                    padding: 2.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
                }
                .scan-viewport {
                    width: 100%;
                    max-width: 380px;
                    height: 380px;
                    margin: 0 auto;
                    border-radius: 1.25rem;
                    background: #1e293b;
                    position: relative;
                    overflow: hidden;
                    border: 4px solid var(--color-primary);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .dog-mockup-avatar {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #334155;
                }
                /* CSS Styled Husky Face Mockup */
                .husky-face {
                    width: 160px;
                    height: 160px;
                    background: #f1f5f9;
                    border-radius: 50%;
                    position: relative;
                    border: 4px solid #94a3b8;
                    box-shadow: inset 0 -10px 0 #cbd5e1;
                }
                .husky-ears {
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 30px solid transparent;
                    border-right: 30px solid transparent;
                    border-bottom: 50px solid #64748b;
                    top: -25px;
                    left: 10px;
                }
                .husky-ears::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-bottom: 30px solid #f87171;
                    top: 15px;
                    left: -15px;
                }
                /* Mirror the right ear using inline sibling or pseudo element trick */
                .husky-ears::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 30px solid transparent;
                    border-right: 30px solid transparent;
                    border-bottom: 50px solid #64748b;
                    left: 70px;
                    top: 0px;
                }
                .husky-eyes {
                    display: flex;
                    justify-content: space-between;
                    width: 90px;
                    position: absolute;
                    top: 55px;
                    left: 31px;
                }
                .eye {
                    width: 24px;
                    height: 24px;
                    background: #0284c7;
                    border-radius: 50%;
                    position: relative;
                    border: 3px solid #1e293b;
                }
                .eye::after {
                    content: '';
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: #ffffff;
                    border-radius: 50%;
                    top: 4px;
                    left: 4px;
                }
                .husky-nose {
                    width: 32px;
                    height: 20px;
                    background: #0f172a;
                    border-radius: 10px 10px 20px 20px;
                    position: absolute;
                    top: 85px;
                    left: 60px;
                }
                .husky-mouth {
                    width: 40px;
                    height: 15px;
                    border-radius: 0 0 20px 20px;
                    border: 3px solid #64748b;
                    border-top: none;
                    position: absolute;
                    top: 110px;
                    left: 56px;
                }
                /* Biometric Scanning Overlay markers */
                .marker {
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border: 2px solid #22c55e;
                    border-radius: 50%;
                    top: -5px;
                    left: -5px;
                    animation: pulse 1.2s infinite;
                }
                .marker-nose {
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border: 2px solid #22c55e;
                    border-radius: 50%;
                    top: 3px;
                    left: 9px;
                    animation: pulse 1.2s infinite;
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                
                .scanning-line {
                    position: absolute;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(to right, transparent, #22c55e, transparent);
                    box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;
                    z-index: 10;
                    top: 0;
                    animation: scan 3s linear infinite;
                }
                
                @keyframes scan {
                    0% { top: 0%; }
                    50% { top: 100%; }
                    100% { top: 0%; }
                }
                
                .viewport-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 15;
                    padding: 1.5rem;
                }
                .viewport-overlay.scanning {
                    background: rgba(15, 23, 42, 0.85);
                }
                .viewport-overlay.success {
                    background: rgba(15, 23, 42, 0.9);
                }
                .scan-status-text {
                    color: #ffffff;
                    font-size: 1.1rem;
                    font-weight: 500;
                    margin-top: 1rem;
                    text-align: center;
                }
                .success-badge {
                    background: #22c55e;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    box-shadow: 0 4px 10px rgba(34, 197, 94, 0.4);
                }
                .result-card {
                    background: #ffffff;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    width: 100%;
                    max-width: 280px;
                    color: var(--color-text);
                    text-align: right;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
                }
                
                .how-step {
                    display: flex;
                    gap: 1.25rem;
                    align-items: flex-start;
                }
                .step-num {
                    width: 36px;
                    height: 36px;
                    background: var(--color-primary);
                    color: white;
                    border-radius: 50%;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.15rem;
                    flex-shrink: 0;
                }
                .step-desc h5 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin-bottom: 0.35rem;
                }
                .step-desc p {
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
                
                @media (max-width: 900px) {
                    .grid-biometric {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `})]})};function W0(){return l.jsx(n0,{children:l.jsx(Dg,{children:l.jsxs(Ie,{path:"/",element:l.jsx(x0,{}),children:[l.jsx(Ie,{index:!0,element:l.jsx(v0,{})}),l.jsx(Ie,{path:"kolam",element:l.jsx(j0,{})}),l.jsx(Ie,{path:"laundry-tracker",element:l.jsx(w0,{})}),l.jsx(Ie,{path:"lobbygate",element:l.jsx(S0,{})}),l.jsxs(Ie,{path:"find-my-dog",element:l.jsx(b0,{}),children:[l.jsx(Ie,{index:!0,element:l.jsx(z0,{})}),l.jsx(Ie,{path:"how-it-works",element:l.jsx(E0,{})}),l.jsx(Ie,{path:"community",element:l.jsx(A0,{})}),l.jsx(Ie,{path:"family",element:l.jsx(C0,{})}),l.jsx(Ie,{path:"shop",element:l.jsx(M0,{})}),l.jsx(Ie,{path:"install",element:l.jsx(J0,{})}),l.jsx(Ie,{path:"biometric-scan",element:l.jsx(F0,{})}),l.jsx(Ie,{path:"ambassador",element:l.jsx(O0,{})}),l.jsx(Ie,{path:"flyer",element:l.jsx(Z0,{})}),l.jsx(Ie,{path:"partners",element:l.jsx(k0,{})})]})]})})})}Ux.createRoot(document.getElementById("root")).render(l.jsx(z.StrictMode,{children:l.jsx(W0,{})}));
