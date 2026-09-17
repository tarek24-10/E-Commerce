import{a as Pt,b as Vr}from"./chunk-EMMRLPJH.js";import{a as Xr}from"./chunk-D2XGEPJG.js";import{a as Hr,b as Ei}from"./chunk-ALXHAXJK.js";import{a as _i,b as cr,c as lr,d as fi}from"./chunk-TE2LFDRJ.js";import{a as Zr,b as oe}from"./chunk-QBEOOFKA.js";import{a as Sr,b as Dr,c as Ir,f as Br,g as jr}from"./chunk-RW4VUDAN.js";import{a as yt,b as ze}from"./chunk-P6GU32NA.js";import{C as Pr,D as wi,I as Be,J as Rr,K as Lr,L as je,M as Or,N as Ar,R as Nr,T as He,W as Fr,_ as zr,l as wr,r as Er,s as Tr,v as Cr,x as Mr,z as tn}from"./chunk-OL6NDPKC.js";import{$ as zn,$a as Wn,$b as gi,$c as kr,Ab as Qn,B as Rn,Ba as de,Ca as Xt,Cc as _r,D as Ln,Da as Un,Db as Pe,E as On,Eb as Re,Ec as fr,F as An,Ga as Gn,Gb as hi,Ic as bi,Ja as vt,K as si,Ka as et,Kb as Kn,Kc as vi,L as Yi,La as it,Lb as Le,Lc as yi,M as We,Ma as ue,O as Nn,Oa as qt,Ob as $t,Oc as br,Pa as Ut,Q as Fn,Qa as Z,Qb as Gt,R as we,Ra as m,Rb as Ki,S as Ee,Sa as d,T as zt,Ta as U,Ua as pe,V as p,Va as Se,Vc as vr,Wa as Qe,Wb as $n,Wc as fe,Y as ct,Yb as Oe,Yc as Dt,Z as lt,Zb as Jn,Zc as yr,_ as ci,_a as wt,_b as tr,_c as xr,a as Wi,aa as Te,ab as q,ac as er,ad as xi,b as Cn,ba as Ye,bb as Yn,bc as ir,bd as ki,ca as Qt,cb as O,d as ye,da as Kt,db as De,dc as nr,dd as It,e as Mn,eb as Bt,ec as rr,ed as Fe,fa as Bn,fb as Ie,fc as Wt,ga as bt,gb as ui,gc as Yt,h as xe,ha as jn,hb as Mt,hc as ar,ia as Hn,ib as St,ic as or,ja as li,jc as Ae,ka as kt,kc as sr,la as Vn,lc as $i,mb as jt,mc as mr,na as Ce,nb as Qi,nc as dr,o as Ge,oa as b,ob as _t,oc as ur,p as Sn,pa as Zn,pb as pi,qa as mi,qb as f,qc as pr,r as Dn,rb as ot,rc as hr,sa as re,sb as Ht,ta as Xn,ua as qn,ub as he,uc as Ji,va as di,vb as ge,w as In,wb as _e,wc as Ne,xa as V,xb as ae,xc as gr,y as ke,ya as Me,yb as Ke,z as Pn,za as gt,zb as $e}from"./chunk-6QDNUWNE.js";var Da=Object.defineProperty,Ia=Object.defineProperties,Pa=Object.getOwnPropertyDescriptors,qr=Object.getOwnPropertySymbols,Ra=Object.prototype.hasOwnProperty,La=Object.prototype.propertyIsEnumerable,rn=(i,r,t)=>r in i?Da(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,Ur=(i,r)=>{for(var t in r||(r={}))Ra.call(r,t)&&rn(i,t,r[t]);if(qr)for(var t of qr(r))La.call(r,t)&&rn(i,t,r[t]);return i},Oa=(i,r)=>Ia(i,Pa(r)),A=(i,r,t)=>(rn(i,typeof r!="symbol"?r+"":r,t),t),Et=globalThis;function Tt(i){return(Et.__Zone_symbol_prefix||"__zone_symbol__")+i}function Aa(){let i=Et.performance;function r($){i&&i.mark&&i.mark($)}function t($,o){i&&i.measure&&i.measure($,o)}r("Zone");let e=class an{constructor(o,s){A(this,"_parent"),A(this,"_name"),A(this,"_properties"),A(this,"_zoneDelegate"),this._parent=o,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,s)}static assertZonePatched(){if(Et.Promise!==H.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let o=an.current;for(;o.parent;)o=o.parent;return o}static get current(){return nt.zone}static get currentTask(){return xt}static __load_patch(o,s,l=!1){if(H.hasOwnProperty(o)){let T=Et[Tt("forceDuplicateZoneCheck")]===!0;if(!l&&T)throw Error("Already loaded patch: "+o)}else if(!Et["__Zone_disable_"+o]){let T="Zone:"+o;r(T),H[o]=s(Et,an,N),t(T,T)}}get parent(){return this._parent}get name(){return this._name}get(o){let s=this.getZoneWith(o);if(s)return s._properties[o]}getZoneWith(o){let s=this;for(;s;){if(s._properties.hasOwnProperty(o))return s;s=s._parent}return null}fork(o){if(!o)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,o)}wrap(o,s){if(typeof o!="function")throw new Error("Expecting function got: "+o);let l=this._zoneDelegate.intercept(this,o,s),T=this;return function(){return T.runGuarded(l,this,arguments,s)}}run(o,s,l,T){nt={parent:nt,zone:this};try{return this._zoneDelegate.invoke(this,o,s,l,T)}finally{nt=nt.parent}}runGuarded(o,s=null,l,T){nt={parent:nt,zone:this};try{try{return this._zoneDelegate.invoke(this,o,s,l,T)}catch(M){if(this._zoneDelegate.handleError(this,M))throw M}}finally{nt=nt.parent}}runTask(o,s,l){if(o.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(o.zone||P).name+"; Execution: "+this.name+")");let T=o,{type:M,data:{isPeriodic:Ct=!1,isRefreshable:Ot=!1}={}}=o;if(o.state===y&&(M===R||M===F))return;let At=o.state!=Q;At&&T._transitionTo(Q,Y);let be=xt;xt=T,nt={parent:nt,zone:this};try{M==F&&o.data&&!Ct&&!Ot&&(o.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,T,s,l)}catch(g){if(this._zoneDelegate.handleError(this,g))throw g}}finally{let g=o.state;if(g!==y&&g!==E)if(M==R||Ct||Ot&&g===W)At&&T._transitionTo(Y,Q,W);else{let h=T._zoneDelegates;this._updateTaskCount(T,-1),At&&T._transitionTo(y,Q,y),Ot&&(T._zoneDelegates=h)}nt=nt.parent,xt=be}}scheduleTask(o){if(o.zone&&o.zone!==this){let l=this;for(;l;){if(l===o.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${o.zone.name}`);l=l.parent}}o._transitionTo(W,y);let s=[];o._zoneDelegates=s,o._zone=this;try{o=this._zoneDelegate.scheduleTask(this,o)}catch(l){throw o._transitionTo(E,W,y),this._zoneDelegate.handleError(this,l),l}return o._zoneDelegates===s&&this._updateTaskCount(o,1),o.state==W&&o._transitionTo(Y,W),o}scheduleMicroTask(o,s,l,T){return this.scheduleTask(new v(at,o,s,l,T,void 0))}scheduleMacroTask(o,s,l,T,M){return this.scheduleTask(new v(F,o,s,l,T,M))}scheduleEventTask(o,s,l,T,M){return this.scheduleTask(new v(R,o,s,l,T,M))}cancelTask(o){if(o.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(o.zone||P).name+"; Execution: "+this.name+")");if(!(o.state!==Y&&o.state!==Q)){o._transitionTo(K,Y,Q);try{this._zoneDelegate.cancelTask(this,o)}catch(s){throw o._transitionTo(E,K),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(o,-1),o._transitionTo(y,K),o.runCount=-1,o}}_updateTaskCount(o,s){let l=o._zoneDelegates;s==-1&&(o._zoneDelegates=null);for(let T=0;T<l.length;T++)l[T]._updateTaskCount(o.type,s)}};A(e,"__symbol__",Tt);let n=e,a={name:"",onHasTask:($,o,s,l)=>$.hasTask(s,l),onScheduleTask:($,o,s,l)=>$.scheduleTask(s,l),onInvokeTask:($,o,s,l,T,M)=>$.invokeTask(s,l,T,M),onCancelTask:($,o,s,l)=>$.cancelTask(s,l)};class u{constructor(o,s,l){A(this,"_zone"),A(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),A(this,"_forkDlgt"),A(this,"_forkZS"),A(this,"_forkCurrZone"),A(this,"_interceptDlgt"),A(this,"_interceptZS"),A(this,"_interceptCurrZone"),A(this,"_invokeDlgt"),A(this,"_invokeZS"),A(this,"_invokeCurrZone"),A(this,"_handleErrorDlgt"),A(this,"_handleErrorZS"),A(this,"_handleErrorCurrZone"),A(this,"_scheduleTaskDlgt"),A(this,"_scheduleTaskZS"),A(this,"_scheduleTaskCurrZone"),A(this,"_invokeTaskDlgt"),A(this,"_invokeTaskZS"),A(this,"_invokeTaskCurrZone"),A(this,"_cancelTaskDlgt"),A(this,"_cancelTaskZS"),A(this,"_cancelTaskCurrZone"),A(this,"_hasTaskDlgt"),A(this,"_hasTaskDlgtOwner"),A(this,"_hasTaskZS"),A(this,"_hasTaskCurrZone"),this._zone=o,this._forkZS=l&&(l&&l.onFork?l:s._forkZS),this._forkDlgt=l&&(l.onFork?s:s._forkDlgt),this._forkCurrZone=l&&(l.onFork?this._zone:s._forkCurrZone),this._interceptZS=l&&(l.onIntercept?l:s._interceptZS),this._interceptDlgt=l&&(l.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=l&&(l.onIntercept?this._zone:s._interceptCurrZone),this._invokeZS=l&&(l.onInvoke?l:s._invokeZS),this._invokeDlgt=l&&(l.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=l&&(l.onInvoke?this._zone:s._invokeCurrZone),this._handleErrorZS=l&&(l.onHandleError?l:s._handleErrorZS),this._handleErrorDlgt=l&&(l.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=l&&(l.onHandleError?this._zone:s._handleErrorCurrZone),this._scheduleTaskZS=l&&(l.onScheduleTask?l:s._scheduleTaskZS),this._scheduleTaskDlgt=l&&(l.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=l&&(l.onScheduleTask?this._zone:s._scheduleTaskCurrZone),this._invokeTaskZS=l&&(l.onInvokeTask?l:s._invokeTaskZS),this._invokeTaskDlgt=l&&(l.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=l&&(l.onInvokeTask?this._zone:s._invokeTaskCurrZone),this._cancelTaskZS=l&&(l.onCancelTask?l:s._cancelTaskZS),this._cancelTaskDlgt=l&&(l.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=l&&(l.onCancelTask?this._zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let T=l&&l.onHasTask,M=s&&s._hasTaskZS;(T||M)&&(this._hasTaskZS=T?l:a,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,l.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this._zone),l.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this._zone),l.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(o,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,o,s):new n(o,s)}intercept(o,s,l){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,o,s,l):s}invoke(o,s,l,T,M){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,o,s,l,T,M):s.apply(l,T)}handleError(o,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,o,s):!0}scheduleTask(o,s){let l=s;if(this._scheduleTaskZS)this._hasTaskZS&&l._zoneDelegates.push(this._hasTaskDlgtOwner),l=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,o,s),l||(l=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==at)ft(s);else throw new Error("Task is missing scheduleFn.");return l}invokeTask(o,s,l,T){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,o,s,l,T):s.callback.apply(l,T)}cancelTask(o,s){let l;if(this._cancelTaskZS)l=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,o,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");l=s.cancelFn(s)}return l}hasTask(o,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,o,s)}catch(l){this.handleError(o,l)}}_updateTaskCount(o,s){let l=this._taskCounts,T=l[o],M=l[o]=T+s;if(M<0)throw new Error("More tasks executed then were scheduled.");if(T==0||M==0){let Ct={microTask:l.microTask>0,macroTask:l.macroTask>0,eventTask:l.eventTask>0,change:o};this.hasTask(this._zone,Ct)}}}class v{constructor(o,s,l,T,M,Ct){if(A(this,"type"),A(this,"source"),A(this,"invoke"),A(this,"callback"),A(this,"data"),A(this,"scheduleFn"),A(this,"cancelFn"),A(this,"_zone",null),A(this,"runCount",0),A(this,"_zoneDelegates",null),A(this,"_state","notScheduled"),this.type=o,this.source=s,this.data=T,this.scheduleFn=M,this.cancelFn=Ct,!l)throw new Error("callback is not defined");this.callback=l;let Ot=this;o===R&&T&&T.useG?this.invoke=v.invokeTask:this.invoke=function(){return v.invokeTask.call(Et,Ot,this,arguments)}}static invokeTask(o,s,l){o||(o=this),ht++;try{return o.runCount++,o.zone.runTask(o,s,l)}finally{ht===1&&!Et[D]&&ut(),ht--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(y,W)}_transitionTo(o,s,l){if(this._state===s||this._state===l)this._state=o,o==y&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${o}', expecting state '${s}'${l?" or '"+l+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let w=Tt("setTimeout"),S=Tt("Promise"),x=Tt("then"),D=Tt("enable_native_microtask_draining"),L=[],X=!1,dt;function rt($){var o;!dt&&Et[S]&&(dt=Et[S].resolve(0)),dt?((o=dt[x])!=null?o:dt.then).call(dt,$):Et[w]($,0)}function ft($){let o=Et[D],s=o&&L.length===0&&!X,l=!o&&ht===0&&L.length===0;(s||l)&&rt(ut),$&&L.push($)}function ut(){if(!X){for(X=!0;L.length;){let $=L;L=[];for(let o of $)try{o.zone.runTask(o,null,null)}catch(s){N.onUnhandledError(s)}}Et[D]?(X=!1,N.microtaskDrainDone()):(N.microtaskDrainDone(),X=!1)}}let P={name:"NO ZONE"},y="notScheduled",W="scheduling",Y="scheduled",Q="running",K="canceling",E="unknown",at="microTask",F="macroTask",R="eventTask",H={},N={symbol:Tt,currentZoneFrame:()=>nt,onUnhandledError:st,microtaskDrainDone:st,scheduleMicroTask:ft,showUncaughtError:()=>!n[Tt("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:st,patchMethod:()=>st,bindArguments:()=>[],patchThen:()=>st,patchMacroTask:()=>st,patchEventPrototype:()=>st,getGlobalObjects:()=>{},ObjectDefineProperty:()=>st,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>st,wrapWithCurrentZone:()=>st,filterProperties:()=>[],attachOriginToPatched:()=>st,_redefineProperty:()=>st,patchCallbacks:()=>st,nativeScheduleMicroTask:rt},nt={parent:null,zone:new n(null,null)},xt=null,ht=0;function st(){}return t("Zone","Zone"),n}function Na(){var i;let r=globalThis,t=r[Tt("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(t||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=r.Zone)!=null||(r.Zone=Aa()),r.Zone}var ti=Object.getOwnPropertyDescriptor,sn=Object.defineProperty,cn=Object.getPrototypeOf,Fa=Object.create,za=Array.prototype.slice,ln="addEventListener",mn="removeEventListener",en=Tt(ln),nn=Tt(mn),Jt="true",te="false",ei=Tt("");function dn(i,r){return Zone.current.wrap(i,r)}function un(i,r,t,e,n){return Zone.current.scheduleMacroTask(i,r,t,e,n)}var G=Tt,Mi=typeof window<"u",Si=Mi?window:void 0,pt=Mi&&Si||globalThis,Ba="removeAttribute";function pn(i,r){for(let t=i.length-1;t>=0;t--)typeof i[t]=="function"&&(i[t]=dn(i[t],r+"_"+t));return i}function ja(i,r){let t=i.constructor.name;for(let e=0;e<r.length;e++){let n=r[e],a=i[n];if(a){let u=ti(i,n);if(!$r(u))continue;i[n]=(v=>{let w=function(){return v.apply(this,pn(arguments,t+"."+n))};return ie(w,v),w})(a)}}}function $r(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var Jr=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Di=!("nw"in pt)&&typeof pt.process<"u"&&pt.process.toString()==="[object process]",hn=!Di&&!Jr&&!!(Mi&&Si.HTMLElement),ta=typeof pt.process<"u"&&pt.process.toString()==="[object process]"&&!Jr&&!!(Mi&&Si.HTMLElement),Ci={},Ha=G("enable_beforeunload"),Gr=function(i){if(i=i||pt.event,!i)return;let r=Ci[i.type];r||(r=Ci[i.type]=G("ON_PROPERTY"+i.type));let t=this||i.target||pt,e=t[r],n;if(hn&&t===Si&&i.type==="error"){let a=i;n=e&&e.call(this,a.message,a.filename,a.lineno,a.colno,a.error),n===!0&&i.preventDefault()}else n=e&&e.apply(this,arguments),i.type==="beforeunload"&&pt[Ha]&&typeof n=="string"?i.returnValue=n:n!=null&&!n&&i.preventDefault();return n};function Wr(i,r,t){let e=ti(i,r);if(!e&&t&&ti(t,r)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let n=G("on"+r+"patched");if(i.hasOwnProperty(n)&&i[n])return;delete e.writable,delete e.value;let a=e.get,u=e.set,v=r.slice(2),w=Ci[v];w||(w=Ci[v]=G("ON_PROPERTY"+v)),e.set=function(S){let x=this;if(!x&&i===pt&&(x=pt),!x)return;typeof x[w]=="function"&&x.removeEventListener(v,Gr),u?.call(x,null),x[w]=S,typeof S=="function"&&x.addEventListener(v,Gr,!1)},e.get=function(){let S=this;if(!S&&i===pt&&(S=pt),!S)return null;let x=S[w];if(x)return x;if(a){let D=a.call(this);if(D)return e.set.call(this,D),typeof S[Ba]=="function"&&S.removeAttribute(r),D}return null},sn(i,r,e),i[n]=!0}function ea(i,r,t){if(r)for(let e=0;e<r.length;e++)Wr(i,"on"+r[e],t);else{let e=[];for(let n in i)n.slice(0,2)=="on"&&e.push(n);for(let n=0;n<e.length;n++)Wr(i,e[n],t)}}var Vt=G("originalInstance");function Je(i){let r=pt[i];if(!r)return;pt[G(i)]=r,pt[i]=function(){let n=pn(arguments,i);switch(n.length){case 0:this[Vt]=new r;break;case 1:this[Vt]=new r(n[0]);break;case 2:this[Vt]=new r(n[0],n[1]);break;case 3:this[Vt]=new r(n[0],n[1],n[2]);break;case 4:this[Vt]=new r(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},ie(pt[i],r);let t=new r(function(){}),e;for(e in t)i==="XMLHttpRequest"&&e==="responseBlob"||(function(n){typeof t[n]=="function"?pt[i].prototype[n]=function(){return this[Vt][n].apply(this[Vt],arguments)}:sn(pt[i].prototype,n,{set:function(a){typeof a=="function"?(this[Vt][n]=dn(a,i+"."+n),ie(this[Vt][n],a)):this[Vt][n]=a},get:function(){return this[Vt][n]}})})(e);for(e in r)e!=="prototype"&&r.hasOwnProperty(e)&&(pt[i][e]=r[e])}function Va(i,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(r,e,{get:function(){return i[e]},set:function(a){n&&(!n.writable||typeof n.set!="function")||(i[e]=a)},enumerable:n?n.enumerable:!0,configurable:n?n.configurable:!0})})}var Za=!1;function ee(i,r,t){let e=i;for(;e&&!e.hasOwnProperty(r);)e=cn(e);!e&&i[r]&&(e=i);let n=G(r),a=null;if(e&&(!(a=e[n])||!e.hasOwnProperty(n))){a=e[n]=e[r];let u=e&&ti(e,r);if($r(u)){let v=t(a,n,r);e[r]=function(){return v(this,arguments)},ie(e[r],a),Za&&Va(a,e[r])}}return a}function Xa(i,r,t){let e=null;function n(a){let u=a.data;return u.args[u.cbIdx]=function(){a.invoke.apply(this,arguments)},e.apply(u.target,u.args),a}e=ee(i,r,a=>function(u,v){let w=t(u,v);return w.cbIdx>=0&&typeof v[w.cbIdx]=="function"?un(w.name,v[w.cbIdx],w,n):a.apply(u,v)})}function ie(i,r){i[G("OriginalDelegate")]=r}function Yr(i){return typeof i=="function"}function Qr(i){return typeof i=="number"}var qa={useG:!0},Rt={},ia={},na=new RegExp("^"+ei+"(\\w+)(true|false)$"),ra=G("propagationStopped");function aa(i,r){let t=(r?r(i):i)+te,e=(r?r(i):i)+Jt,n=ei+t,a=ei+e;Rt[i]={},Rt[i][te]=n,Rt[i][Jt]=a}function Ua(i,r,t,e){let n=e&&e.add||ln,a=e&&e.rm||mn,u=e&&e.listeners||"eventListeners",v=e&&e.rmAll||"removeAllListeners",w=G(n),S="."+n+":",x="prependListener",D="."+x+":",L=function(P,y,W){if(P.isRemoved)return;let Y=P.callback;typeof Y=="object"&&Y.handleEvent&&(P.callback=E=>Y.handleEvent(E),P.originalDelegate=Y);let Q;try{P.invoke(P,y,[W])}catch(E){Q=E}let K=P.options;if(K&&typeof K=="object"&&K.once){let E=P.originalDelegate?P.originalDelegate:P.callback;y[a].call(y,W.type,E,K)}return Q};function X(P,y,W){if(y=y||i.event,!y)return;let Y=P||y.target||i,Q=Y[Rt[y.type][W?Jt:te]];if(Q){let K=[];if(Q.length===1){let E=L(Q[0],Y,y);E&&K.push(E)}else{let E=Q.slice();for(let at=0;at<E.length&&!(y&&y[ra]===!0);at++){let F=L(E[at],Y,y);F&&K.push(F)}}if(K.length===1)throw K[0];for(let E=0;E<K.length;E++){let at=K[E];r.nativeScheduleMicroTask(()=>{throw at})}}}let dt=function(P){return X(this,P,!1)},rt=function(P){return X(this,P,!0)};function ft(P,y){if(!P)return!1;let W=!0;y&&y.useG!==void 0&&(W=y.useG);let Y=y&&y.vh,Q=!0;y&&y.chkDup!==void 0&&(Q=y.chkDup);let K=!1;y&&y.rt!==void 0&&(K=y.rt);let E=P;for(;E&&!E.hasOwnProperty(n);)E=cn(E);if(!E&&P[n]&&(E=P),!E||E[w])return!1;let at=y&&y.eventNameToString,F={},R=E[w]=E[n],H=E[G(a)]=E[a],N=E[G(u)]=E[u],nt=E[G(v)]=E[v],xt;y&&y.prepend&&(xt=E[G(y.prepend)]=E[y.prepend]);function ht(c,_){return _?typeof c=="boolean"?{capture:c,passive:!0}:c?typeof c=="object"&&c.passive!==!1?Oa(Ur({},c),{passive:!0}):c:{passive:!0}:c}let st=function(c){if(!F.isExisting)return R.call(F.target,F.eventName,F.capture?rt:dt,F.options)},$=function(c){if(!c.isRemoved){let _=Rt[c.eventName],C;_&&(C=_[c.capture?Jt:te]);let I=C&&c.target[C];if(I){for(let k=0;k<I.length;k++)if(I[k]===c){I.splice(k,1),c.isRemoved=!0,c.removeAbortListener&&(c.removeAbortListener(),c.removeAbortListener=null),I.length===0&&(c.allRemoved=!0,c.target[C]=null);break}}}if(c.allRemoved)return H.call(c.target,c.eventName,c.capture?rt:dt,c.options)},o=function(c){return R.call(F.target,F.eventName,c.invoke,F.options)},s=function(c){return xt.call(F.target,F.eventName,c.invoke,F.options)},l=function(c){return H.call(c.target,c.eventName,c.invoke,c.options)},T=W?st:o,M=W?$:l,Ct=function(c,_){let C=typeof _;return C==="function"&&c.callback===_||C==="object"&&c.originalDelegate===_},Ot=y?.diff||Ct,At=Zone[G("UNPATCHED_EVENTS")],be=i[G("PASSIVE_EVENTS")];function g(c){if(typeof c=="object"&&c!==null){let _=Ur({},c);return c.signal&&(_.signal=c.signal),_}return c}let h=function(c,_,C,I,k=!1,z=!1){return function(){let B=this||i,j=arguments[0];y&&y.transferEventName&&(j=y.transferEventName(j));let J=arguments[1];if(!J)return c.apply(this,arguments);if(Di&&j==="uncaughtException")return c.apply(this,arguments);let tt=!1;if(typeof J!="function"){if(!J.handleEvent)return c.apply(this,arguments);tt=!0}if(Y&&!Y(c,J,B,arguments))return;let ne=!!be&&be.indexOf(j)!==-1,Nt=g(ht(arguments[2],ne)),me=Nt?.signal;if(me?.aborted)return;if(At){for(let Zt=0;Zt<At.length;Zt++)if(j===At[Zt])return ne?c.call(B,j,J,Nt):c.apply(this,arguments)}let Ui=Nt?typeof Nt=="boolean"?!0:Nt.capture:!1,xn=Nt&&typeof Nt=="object"?Nt.once:!1,Sa=Zone.current,Gi=Rt[j];Gi||(aa(j,at),Gi=Rt[j]);let kn=Gi[Ui?Jt:te],ve=B[kn],wn=!1;if(ve){if(wn=!0,Q){for(let Zt=0;Zt<ve.length;Zt++)if(Ot(ve[Zt],J))return}}else ve=B[kn]=[];let oi,En=B.constructor.name,Tn=ia[En];Tn&&(oi=Tn[j]),oi||(oi=En+_+(at?at(j):j)),F.options=Nt,xn&&(F.options.once=!1),F.target=B,F.capture=Ui,F.eventName=j,F.isExisting=wn;let Ue=W?qa:void 0;Ue&&(Ue.taskData=F),me&&(F.options.signal=void 0);let Ft=Sa.scheduleEventTask(oi,J,Ue,C,I);if(me){F.options.signal=me;let Zt=()=>Ft.zone.cancelTask(Ft);c.call(me,"abort",Zt,{once:!0}),Ft.removeAbortListener=()=>me.removeEventListener("abort",Zt)}if(F.target=null,Ue&&(Ue.taskData=null),xn&&(F.options.once=!0),typeof Ft.options!="boolean"&&(Ft.options=Nt),Ft.target=B,Ft.capture=Ui,Ft.eventName=j,tt&&(Ft.originalDelegate=J),z?ve.unshift(Ft):ve.push(Ft),k)return B}};return E[n]=h(R,S,T,M,K),xt&&(E[x]=h(xt,D,s,M,K,!0)),E[a]=function(){let c=this||i,_=arguments[0];y&&y.transferEventName&&(_=y.transferEventName(_));let C=arguments[2],I=C?typeof C=="boolean"?!0:C.capture:!1,k=arguments[1];if(!k)return H.apply(this,arguments);if(Y&&!Y(H,k,c,arguments))return;let z=Rt[_],B;z&&(B=z[I?Jt:te]);let j=B&&c[B];if(j)for(let J=0;J<j.length;J++){let tt=j[J];if(Ot(tt,k)){if(j.splice(J,1),tt.isRemoved=!0,j.length===0&&(tt.allRemoved=!0,c[B]=null,!I&&typeof _=="string")){let ne=ei+"ON_PROPERTY"+_;c[ne]=null}return tt.zone.cancelTask(tt),K?c:void 0}}return H.apply(this,arguments)},E[u]=function(){let c=this||i,_=arguments[0];y&&y.transferEventName&&(_=y.transferEventName(_));let C=[],I=oa(c,at?at(_):_);for(let k=0;k<I.length;k++){let z=I[k],B=z.originalDelegate?z.originalDelegate:z.callback;C.push(B)}return C},E[v]=function(){let c=this||i,_=arguments[0];if(_){y&&y.transferEventName&&(_=y.transferEventName(_));let C=Rt[_];if(C){let I=C[te],k=C[Jt],z=c[I],B=c[k];if(z){let j=z.slice();for(let J=0;J<j.length;J++){let tt=j[J],ne=tt.originalDelegate?tt.originalDelegate:tt.callback;this[a].call(this,_,ne,tt.options)}}if(B){let j=B.slice();for(let J=0;J<j.length;J++){let tt=j[J],ne=tt.originalDelegate?tt.originalDelegate:tt.callback;this[a].call(this,_,ne,tt.options)}}}}else{let C=Object.keys(c);for(let I=0;I<C.length;I++){let k=C[I],z=na.exec(k),B=z&&z[1];B&&B!=="removeListener"&&this[v].call(this,B)}this[v].call(this,"removeListener")}if(K)return this},ie(E[n],R),ie(E[a],H),nt&&ie(E[v],nt),N&&ie(E[u],N),!0}let ut=[];for(let P=0;P<t.length;P++)ut[P]=ft(t[P],e);return ut}function oa(i,r){if(!r){let a=[];for(let u in i){let v=na.exec(u),w=v&&v[1];if(w&&(!r||w===r)){let S=i[u];if(S)for(let x=0;x<S.length;x++)a.push(S[x])}}return a}let t=Rt[r];t||(aa(r),t=Rt[r]);let e=i[t[te]],n=i[t[Jt]];return e?n?e.concat(n):e.slice():n?n.slice():[]}function Ga(i,r){let t=i.Event;t&&t.prototype&&r.patchMethod(t.prototype,"stopImmediatePropagation",e=>function(n,a){n[ra]=!0,e&&e.apply(n,a)})}function Wa(i,r){r.patchMethod(i,"queueMicrotask",t=>function(e,n){Zone.current.scheduleMicroTask("queueMicrotask",n[0])})}var Ti=G("zoneTask");function Ve(i,r,t,e){let n=null,a=null;r+=e,t+=e;let u={};function v(S){let x=S.data;x.args[0]=function(){return S.invoke.apply(this,arguments)};let D=n.apply(i,x.args);return Qr(D)?x.handleId=D:(x.handle=D,x.isRefreshable=Yr(D.refresh)),S}function w(S){let{handle:x,handleId:D}=S.data;return a.call(i,x??D)}n=ee(i,r,S=>function(x,D){var L;if(Yr(D[0])){let X={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?D[1]||0:void 0,args:D},dt=D[0];D[0]=function(){try{return dt.apply(this,arguments)}finally{let{handle:Y,handleId:Q,isPeriodic:K,isRefreshable:E}=X;!K&&!E&&(Q?delete u[Q]:Y&&(Y[Ti]=null))}};let rt=un(r,D[0],X,v,w);if(!rt)return rt;let{handleId:ft,handle:ut,isRefreshable:P,isPeriodic:y}=rt.data;if(ft)u[ft]=rt;else if(ut&&(ut[Ti]=rt,P&&!y)){let W=ut.refresh;ut.refresh=function(){let{zone:Y,state:Q}=rt;return Q==="notScheduled"?(rt._state="scheduled",Y._updateTaskCount(rt,1)):Q==="running"&&(rt._state="scheduling"),W.call(this)}}return(L=ut??ft)!=null?L:rt}else return S.apply(i,D)}),a=ee(i,t,S=>function(x,D){let L=D[0],X;Qr(L)?(X=u[L],delete u[L]):(X=L?.[Ti],X?L[Ti]=null:X=L),X?.type?X.cancelFn&&X.zone.cancelTask(X):S.apply(i,D)})}function Ya(i,r){let{isBrowser:t,isMix:e}=r.getGlobalObjects();if(!t&&!e||!i.customElements||!("customElements"in i))return;let n=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,i.customElements,"customElements","define",n)}function Qa(i,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:e,TRUE_STR:n,FALSE_STR:a,ZONE_SYMBOL_PREFIX:u}=r.getGlobalObjects();for(let w=0;w<t.length;w++){let S=t[w],x=S+a,D=S+n,L=u+x,X=u+D;e[S]={},e[S][a]=L,e[S][n]=X}let v=i.EventTarget;if(!(!v||!v.prototype))return r.patchEventTarget(i,r,[v&&v.prototype]),!0}function Ka(i,r){r.patchEventPrototype(i,r)}function sa(i,r,t){if(!t||t.length===0)return r;let e=t.filter(a=>a.target===i);if(e.length===0)return r;let n=e[0].ignoreProperties;return r.filter(a=>n.indexOf(a)===-1)}function Kr(i,r,t,e){if(!i)return;let n=sa(i,r,t);ea(i,n,e)}function on(i){return Object.getOwnPropertyNames(i).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function $a(i,r){if(Di&&!ta||Zone[i.symbol("patchEvents")])return;let t=r.__Zone_ignore_on_properties,e=[];if(hn){let n=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),Kr(n,on(n),t,cn(n))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let n=0;n<e.length;n++){let a=r[e[n]];a?.prototype&&Kr(a.prototype,on(a.prototype),t)}}function Ja(i){i.__load_patch("timers",r=>{let e="clear";Ve(r,"set",e,"Timeout"),Ve(r,"set",e,"Interval"),Ve(r,"set",e,"Immediate")}),i.__load_patch("requestAnimationFrame",r=>{Ve(r,"request","cancel","AnimationFrame"),Ve(r,"mozRequest","mozCancel","AnimationFrame"),Ve(r,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(r,t)=>{let e=["alert","prompt","confirm"];for(let n=0;n<e.length;n++){let a=e[n];ee(r,a,(u,v,w)=>function(S,x){return t.current.run(u,r,x,w)})}}),i.__load_patch("EventTarget",(r,t,e)=>{Ka(r,e),Qa(r,e);let n=r.XMLHttpRequestEventTarget;n&&n.prototype&&e.patchEventTarget(r,e,[n.prototype])}),i.__load_patch("MutationObserver",(r,t,e)=>{Je("MutationObserver"),Je("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(r,t,e)=>{Je("IntersectionObserver")}),i.__load_patch("FileReader",(r,t,e)=>{Je("FileReader")}),i.__load_patch("on_property",(r,t,e)=>{$a(e,r)}),i.__load_patch("customElements",(r,t,e)=>{Ya(r,e)}),i.__load_patch("XHR",(r,t)=>{S(r);let e=G("xhrTask"),n=G("xhrSync"),a=G("xhrListener"),u=G("xhrScheduled"),v=G("xhrURL"),w=G("xhrErrorBeforeScheduled");function S(x){let D=x.XMLHttpRequest;if(!D)return;let L=D.prototype;function X(R){return R[e]}let dt=L[en],rt=L[nn];if(!dt){let R=x.XMLHttpRequestEventTarget;if(R){let H=R.prototype;dt=H[en],rt=H[nn]}}let ft="readystatechange",ut="scheduled";function P(R){let H=R.data,N=H.target;N[u]=!1,N[w]=!1;let nt=N[a];dt||(dt=N[en],rt=N[nn]),nt&&rt.call(N,ft,nt);let xt=N[a]=()=>{if(N.readyState===N.DONE)if(!H.aborted&&N[u]&&R.state===ut){let st=N[t.__symbol__("loadfalse")];if(N.status!==0&&st&&st.length>0){let $=R.invoke;R.invoke=function(){let o=N[t.__symbol__("loadfalse")];for(let s=0;s<o.length;s++)o[s]===R&&o.splice(s,1);!H.aborted&&R.state===ut&&$.call(R)},st.push(R)}else R.invoke()}else!H.aborted&&N[u]===!1&&(N[w]=!0)};return dt.call(N,ft,xt),N[e]||(N[e]=R),at.apply(N,H.args),N[u]=!0,R}function y(){}function W(R){let H=R.data;return H.aborted=!0,F.apply(H.target,H.args)}let Y=ee(L,"open",()=>function(R,H){return R[n]=H[2]==!1,R[v]=H[1],Y.apply(R,H)}),Q="XMLHttpRequest.send",K=G("fetchTaskAborting"),E=G("fetchTaskScheduling"),at=ee(L,"send",()=>function(R,H){if(t.current[E]===!0||R[n])return at.apply(R,H);{let N={target:R,url:R[v],isPeriodic:!1,args:H,aborted:!1},nt=un(Q,y,N,P,W);R&&R[w]===!0&&!N.aborted&&nt.state===ut&&nt.invoke()}}),F=ee(L,"abort",()=>function(R,H){let N=X(R);if(N&&typeof N.type=="string"){if(N.cancelFn==null||N.data&&N.data.aborted)return;N.zone.cancelTask(N)}else if(t.current[K]===!0)return F.apply(R,H)})}}),i.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&ja(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(r,t)=>{function e(n){return function(a){oa(r,n).forEach(v=>{let w=r.PromiseRejectionEvent;if(w){let S=new w(n,{promise:a.promise,reason:a.rejection});v.invoke(S)}})}}r.PromiseRejectionEvent&&(t[G("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),t[G("rejectionHandledHandler")]=e("rejectionhandled"))}),i.__load_patch("queueMicrotask",(r,t,e)=>{Wa(r,e)})}function to(i){i.__load_patch("ZoneAwarePromise",(r,t,e)=>{let n=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function u(g){if(g&&g.toString===Object.prototype.toString){let h=g.constructor&&g.constructor.name;return(h||"")+": "+JSON.stringify(g)}return g?g.toString():Object.prototype.toString.call(g)}let v=e.symbol,w=[],S=r[v("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,x=v("Promise"),D=v("then"),L="__creationTrace__";e.onUnhandledError=g=>{if(e.showUncaughtError()){let h=g&&g.rejection;h?console.error("Unhandled Promise rejection:",h instanceof Error?h.message:h,"; Zone:",g.zone.name,"; Task:",g.task&&g.task.source,"; Value:",h,h instanceof Error?h.stack:void 0):console.error(g)}},e.microtaskDrainDone=()=>{for(;w.length;){let g=w.shift();try{g.zone.runGuarded(()=>{throw g.throwOriginal?g.rejection:g})}catch(h){dt(h)}}};let X=v("unhandledPromiseRejectionHandler");function dt(g){e.onUnhandledError(g);try{let h=t[X];typeof h=="function"&&h.call(this,g)}catch{}}function rt(g){return g&&typeof g.then=="function"}function ft(g){return g}function ut(g){return M.reject(g)}let P=v("state"),y=v("value"),W=v("finally"),Y=v("parentPromiseValue"),Q=v("parentPromiseState"),K="Promise.then",E=null,at=!0,F=!1,R=0;function H(g,h){return c=>{try{ht(g,h,c)}catch(_){ht(g,!1,_)}}}let N=function(){let g=!1;return function(c){return function(){g||(g=!0,c.apply(null,arguments))}}},nt="Promise resolved with itself",xt=v("currentTaskTrace");function ht(g,h,c){let _=N();if(g===c)throw new TypeError(nt);if(g[P]===E){let C=null;try{(typeof c=="object"||typeof c=="function")&&(C=c&&c.then)}catch(I){return _(()=>{ht(g,!1,I)})(),g}if(h!==F&&c instanceof M&&c.hasOwnProperty(P)&&c.hasOwnProperty(y)&&c[P]!==E)$(c),ht(g,c[P],c[y]);else if(h!==F&&typeof C=="function")try{C.call(c,_(H(g,h)),_(H(g,!1)))}catch(I){_(()=>{ht(g,!1,I)})()}else{g[P]=h;let I=g[y];if(g[y]=c,g[W]===W&&h===at&&(g[P]=g[Q],g[y]=g[Y]),h===F&&c instanceof Error){let k=t.currentTask&&t.currentTask.data&&t.currentTask.data[L];k&&a(c,xt,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<I.length;)o(g,I[k++],I[k++],I[k++],I[k++]);if(I.length==0&&h==F){g[P]=R;let k=c;try{throw new Error("Uncaught (in promise): "+u(c)+(c&&c.stack?`
`+c.stack:""))}catch(z){k=z}S&&(k.throwOriginal=!0),k.rejection=c,k.promise=g,k.zone=t.current,k.task=t.currentTask,w.push(k),e.scheduleMicroTask()}}}return g}let st=v("rejectionHandledHandler");function $(g){if(g[P]===R){try{let h=t[st];h&&typeof h=="function"&&h.call(this,{rejection:g[y],promise:g})}catch{}g[P]=F;for(let h=0;h<w.length;h++)g===w[h].promise&&w.splice(h,1)}}function o(g,h,c,_,C){$(g);let I=g[P],k=I?typeof _=="function"?_:ft:typeof C=="function"?C:ut;h.scheduleMicroTask(K,()=>{try{let z=g[y],B=!!c&&W===c[W];B&&(c[Y]=z,c[Q]=I);let j=h.run(k,void 0,B&&k!==ut&&k!==ft?[]:[z]);ht(c,!0,j)}catch(z){ht(c,!1,z)}},c)}let s="function ZoneAwarePromise() { [native code] }",l=function(){},T=r.AggregateError;class M{static toString(){return s}static resolve(h){return h instanceof M?h:ht(new this(null),at,h)}static reject(h){return ht(new this(null),F,h)}static withResolvers(){let h={};return h.promise=new M((c,_)=>{h.resolve=c,h.reject=_}),h}static any(h){if(!h||typeof h[Symbol.iterator]!="function")return Promise.reject(new T([],"All promises were rejected"));let c=[],_=0;try{for(let k of h)_++,c.push(M.resolve(k))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(_===0)return Promise.reject(new T([],"All promises were rejected"));let C=!1,I=[];return new M((k,z)=>{for(let B=0;B<c.length;B++)c[B].then(j=>{C||(C=!0,k(j))},j=>{I.push(j),_--,_===0&&(C=!0,z(new T(I,"All promises were rejected")))})})}static race(h){let c,_,C=new this((z,B)=>{c=z,_=B});function I(z){c(z)}function k(z){_(z)}for(let z of h)rt(z)||(z=this.resolve(z)),z.then(I,k);return C}static all(h){return M.allWithCallback(h)}static allSettled(h){return(this&&this.prototype instanceof M?this:M).allWithCallback(h,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(h,c){let _,C,I=new this((j,J)=>{_=j,C=J}),k=2,z=0,B=[];for(let j of h){rt(j)||(j=this.resolve(j));let J=z;try{j.then(tt=>{B[J]=c?c.thenCallback(tt):tt,k--,k===0&&_(B)},tt=>{c?(B[J]=c.errorCallback(tt),k--,k===0&&_(B)):C(tt)})}catch(tt){C(tt)}k++,z++}return k-=2,k===0&&_(B),I}constructor(h){let c=this;if(!(c instanceof M))throw new Error("Must be an instanceof Promise.");c[P]=E,c[y]=[];try{let _=N();h&&h(_(H(c,at)),_(H(c,F)))}catch(_){ht(c,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return M}then(h,c){var _;let C=(_=this.constructor)==null?void 0:_[Symbol.species];(!C||typeof C!="function")&&(C=this.constructor||M);let I=new C(l),k=t.current;return this[P]==E?this[y].push(k,I,h,c):o(this,k,I,h,c),I}catch(h){return this.then(null,h)}finally(h){var c;let _=(c=this.constructor)==null?void 0:c[Symbol.species];(!_||typeof _!="function")&&(_=M);let C=new _(l);C[W]=W;let I=t.current;return this[P]==E?this[y].push(I,C,h,h):o(this,I,C,h,h),C}}M.resolve=M.resolve,M.reject=M.reject,M.race=M.race,M.all=M.all;let Ct=r[x]=r.Promise;r.Promise=M;let Ot=v("thenPatched");function At(g){let h=g.prototype,c=n(h,"then");if(c&&(c.writable===!1||!c.configurable))return;let _=h.then;h[D]=_,g.prototype.then=function(C,I){return new M((z,B)=>{_.call(this,z,B)}).then(C,I)},g[Ot]=!0}e.patchThen=At;function be(g){return function(h,c){let _=g.apply(h,c);if(_ instanceof M)return _;let C=_.constructor;return C[Ot]||At(C),_}}if(Ct){At(Ct);let g=Ct.try;g&&typeof g=="function"&&(M.try=g),ee(r,"fetch",h=>be(h))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=w,M})}function eo(i){i.__load_patch("toString",r=>{let t=Function.prototype.toString,e=G("OriginalDelegate"),n=G("Promise"),a=G("Error"),u=function(){if(typeof this=="function"){let x=this[e];if(x)return typeof x=="function"?t.call(x):Object.prototype.toString.call(x);if(this===Promise){let D=r[n];if(D)return t.call(D)}if(this===Error){let D=r[a];if(D)return t.call(D)}}return t.call(this)};u[e]=t,Function.prototype.toString=u;let v=Object.prototype.toString,w="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?w:v.call(this)}})}function io(i,r,t,e,n){let a=Zone.__symbol__(e);if(r[a])return;let u=r[a]=r[e];r[e]=function(v,w,S){return w&&w.prototype&&n.forEach(function(x){let D=`${t}.${e}::`+x,L=w.prototype;try{if(L.hasOwnProperty(x)){let X=i.ObjectGetOwnPropertyDescriptor(L,x);X&&X.value?(X.value=i.wrapWithCurrentZone(X.value,D),i._redefineProperty(w.prototype,x,X)):L[x]&&(L[x]=i.wrapWithCurrentZone(L[x],D))}else L[x]&&(L[x]=i.wrapWithCurrentZone(L[x],D))}catch{}}),u.call(r,v,w,S)},i.attachOriginToPatched(r[e],u)}function no(i){i.__load_patch("util",(r,t,e)=>{let n=on(r);e.patchOnProperties=ea,e.patchMethod=ee,e.bindArguments=pn,e.patchMacroTask=Xa;let a=t.__symbol__("BLACK_LISTED_EVENTS"),u=t.__symbol__("UNPATCHED_EVENTS");r[u]&&(r[a]=r[u]),r[a]&&(t[a]=t[u]=r[a]),e.patchEventPrototype=Ga,e.patchEventTarget=Ua,e.ObjectDefineProperty=sn,e.ObjectGetOwnPropertyDescriptor=ti,e.ObjectCreate=Fa,e.ArraySlice=za,e.patchClass=Je,e.wrapWithCurrentZone=dn,e.filterProperties=sa,e.attachOriginToPatched=ie,e._redefineProperty=Object.defineProperty,e.patchCallbacks=io,e.getGlobalObjects=()=>({globalSources:ia,zoneSymbolEventNames:Rt,eventNames:n,isBrowser:hn,isMix:ta,isNode:Di,TRUE_STR:Jt,FALSE_STR:te,ZONE_SYMBOL_PREFIX:ei,ADD_EVENT_LISTENER_STR:ln,REMOVE_EVENT_LISTENER_STR:mn})})}function ro(i){to(i),eo(i),no(i)}var ca=Na();ro(ca);Ja(ca);var Ii=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-screen-2xl","mt-28","mx-auto","p-4"],[1,"flex","flex-col","items-center","py-16","justify-center","rounded-2xl","shadow-xl","relative"],["src","../images/hero1.jpg","alt","E-Commerce",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-6xl"],["routerLink","/shop",1,"bg-gradient-to-r","from-blue-600","to-cyan-500","font-semibold","text-2xl","text-white","rounded-2xl","px-8","py-2","border-2","border-transparent","mt-8"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1),U(2,"img",2),m(3,"div",3)(4,"h1",4),f(5,"Welcome to E-commerce"),d(),m(6,"button",5),f(7," Go to shop"),d()()()())},dependencies:[Yt],encapsulation:2})};var se=class i{baseUrl=Ae.apiUrl;http=p(gi);brands=[];types=[];getProducts(r){let t=new tr;return r.brands.length>0&&(t=t.append("brands",r.brands.join(","))),r.types.length>0&&(t=t.append("types",r.types.join(","))),r.sort&&(t=t.append("sort",r.sort)),r.search&&(t=t.append("search",r.search)),t=t.append("pagesize",r.pageSize),t=t.append("pageNumber",r.pageNumber),this.http.get(this.baseUrl+"products",{params:t})}getBrands(){return this.http.get(this.baseUrl+"products/brands").subscribe({next:r=>this.brands=r,error:r=>console.log(r)})}getTypes(){return this.http.get(this.baseUrl+"products/types").subscribe({next:r=>this.types=r,error:r=>console.log(r)})}getProduct(r){return this.http.get(this.baseUrl+"products/"+r)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=we({token:i,factory:i.\u0275fac,providedIn:"root"})};function ao(i,r){if(i&1){let t=wt();m(0,"mat-card",0),U(1,"img",1),m(2,"mat-card-content",2)(3,"h2",3),f(4),d(),m(5,"p",4),f(6),Pe(7,"currency"),d()(),m(8,"mat-card-actions",5),q("click",function(n){return n.stopPropagation()}),m(9,"button",6),q("click",function(){ct(t);let n=O();return lt(n.cartService.addItemToCart(n.product))}),m(10,"mat-icon"),f(11,"add_shopping_cart"),d(),f(12," Add to cart "),d()()()}if(i&2){let t=O();Z("routerLink",Ke("/shop/",t.product.id)),b(),Z("src",ae(t.product.pictureUrl),Ce),b(3),ot(t.product.name),b(2),ot(Re(7,6,t.product.price))}}var Pi=class i{product;cartService=p(Pt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card",3,"routerLink"],["alt","image of {{prduct.name}",1,"rounded-t-lg",3,"src"],[1,"mt-2"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"]],template:function(t,e){t&1&&et(0,ao,13,8,"mat-card",0),t&2&&it(e.product?0:-1)},dependencies:[fi,_i,lr,cr,Fe,ze,yt,Yt,Oe],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0003;cursor:pointer}"]})};var Ze=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=Dt(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Dt(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(vt("aria-orientation",n.vertical?"vertical":"horizontal"),_t("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),ma=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=Me({type:i});static \u0275inj=Ee({imports:[$i]})}return i})();var co=["*"],lo=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,mo=["unscopedContent"];var uo=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],po=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function ho(i,r){i&1&&Bt(0,4)}function go(i,r){if(i&1&&(m(0,"div",11),U(1,"input",12),m(2,"div",13),ci(),m(3,"svg",14),U(4,"path",15),d(),zn(),U(5,"div",16),d()()),i&2){let t=O();_t("mdc-checkbox--disabled",t.disabled),b(),Z("checked",t.selected)("disabled",t.disabled)}}function _o(i,r){if(i&1&&(m(0,"div",17),U(1,"input",18),m(2,"div",19),U(3,"div",20)(4,"div",21),d()()),i&2){let t=O();_t("mdc-radio--disabled",t.disabled),b(),Z("checked",t.selected)("disabled",t.disabled)}}function fo(i,r){}function bo(i,r){if(i&1&&(m(0,"span",4),Xt(1,fo,0,0,"ng-template",6),d()),i&2){O();let t=jt(3);b(),Z("ngTemplateOutlet",t)}}function vo(i,r){}function yo(i,r){if(i&1&&(m(0,"span",5),Xt(1,vo,0,0,"ng-template",6),d()),i&2){O();let t=jt(5);b(),Z("ngTemplateOutlet",t)}}function xo(i,r){}function ko(i,r){if(i&1&&Xt(0,xo,0,0,"ng-template",6),i&2){O();let t=jt(1);Z("ngTemplateOutlet",t)}}function wo(i,r){}function Eo(i,r){if(i&1&&(m(0,"span",9),Xt(1,wo,0,0,"ng-template",6),d()),i&2){O();let t=jt(3);b(),Z("ngTemplateOutlet",t)}}function To(i,r){}function Co(i,r){if(i&1&&(m(0,"span",9),Xt(1,To,0,0,"ng-template",6),d()),i&2){O();let t=jt(5);b(),Z("ngTemplateOutlet",t)}}function Mo(i,r){}function So(i,r){if(i&1&&Xt(0,Mo,0,0,"ng-template",6),i&2){O();let t=jt(1);Z("ngTemplateOutlet",t)}}var ua=new zt("ListOption"),Do=(()=>{class i{_elementRef=p(kt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Io=(()=>{class i{_elementRef=p(kt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var pa=(()=>{class i{_listOption=p(ua,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,hostVars:4,hostBindings:function(e,n){e&2&&_t("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Po=(()=>{class i extends pa{static \u0275fac=(()=>{let t;return function(n){return(t||(t=li(i)))(n||i)}})();static \u0275dir=gt({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[de]})}return i})(),Ro=(()=>{class i extends pa{static \u0275fac=(()=>{let t;return function(n){return(t||(t=li(i)))(n||i)}})();static \u0275dir=gt({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[de]})}return i})(),Lo=new zt("MAT_LIST_CONFIG"),gn=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Dt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Dt(t))}_disabled=bt(!1);_defaultOptions=p(Lo,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,hostVars:1,hostBindings:function(e,n){e&2&&vt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),da=(()=>{class i{_elementRef=p(kt);_ngZone=p(Kt);_listBase=p(gn,{optional:!0});_platform=p(pr);_hostElement;_isButtonElement;_noopAnimations=fe();_avatars;_icons;set lines(t){this._explicitLines=hr(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Dt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Dt(t))}_disabled=bt(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p(Ne).load(xi);let t=p(xr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new yr(this,this._ngZone,this._hostElement,this._platform,p(Te)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ke(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,contentQueries:function(e,n,a){if(e&1&&Ie(a,Po,4)(a,Ro,4),e&2){let u;Mt(u=St())&&(n._avatars=u),Mt(u=St())&&(n._icons=u)}},hostVars:4,hostBindings:function(e,n){e&2&&(vt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),_t("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var ha=new zt("SelectionList"),ii=(()=>{class i extends da{_selectionList=p(ha);_changeDetectorRef=p($t);_lines;_titles;_unscopedContent;selectedChange=new Qt;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(t){this.togglePosition=t}get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=Dt(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(n=>t.compareWith(this._value,n))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected("icons",t)||this._hasProjected("avatars",t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute("tabindex",t+"")}_hasBothLeadingAndTrailing(){let t=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),e=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return t&&e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=li(i)))(n||i)}})();static \u0275cmp=V({type:i,selectors:[["mat-list-option"]],contentQueries:function(e,n,a){if(e&1&&Ie(a,Io,5)(a,Do,5),e&2){let u;Mt(u=St())&&(n._lines=u),Mt(u=St())&&(n._titles=u)}},viewQuery:function(e,n){if(e&1&&ui(mo,5),e&2){let a;Mt(a=St())&&(n._unscopedContent=a.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(e,n){e&1&&q("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),e&2&&(vt("aria-selected",n.selected),_t("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[$e([{provide:da,useExisting:i},{provide:ua,useExisting:i}]),de],ngContentSelectors:po,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(e,n){e&1&&(De(uo),Xt(0,ho,1,0,"ng-template",null,0,hi)(2,go,6,4,"ng-template",null,1,hi)(4,_o,5,4,"ng-template",null,2,hi),et(6,bo,2,1,"span",4)(7,yo,2,1,"span",5),et(8,ko,1,1,null,6),m(9,"span",7),Bt(10),Bt(11,1),m(12,"span",8,3),q("cdkObserveContent",function(){return n._updateItemLines(!0)}),Bt(14,2),d()(),et(15,Eo,2,1,"span",9)(16,Co,2,1,"span",9),et(17,So,1,1,null,6),Bt(18,3),U(19,"div",10)),e&2&&(b(6),it(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),b(2),it(n._hasIconsOrAvatarsAt("before")?8:-1),b(7),it(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),b(2),it(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[$n,_r],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Oo={provide:Pr,useExisting:Fn(()=>ni),multi:!0},_n=class{source;options;constructor(r,t){this.source=r,this.options=t}},ni=(()=>{class i extends gn{_element=p(kt);_ngZone=p(Kt);_renderer=p(re);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new xe;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new Qt;color="accent";compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=Dt(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new tn(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=Dt(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new tn(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=p($t);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,n=t.disableRipple,a=t.hideSingleSelectionIndicator;(n&&!n.firstChange||e&&!e.firstChange||a&&!a.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new _n(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(Dt(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=bt(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(We(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let n=this.options.find(a=>a.selected?!1:this.compareWith(a.value,e));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let n=[];return this.options.forEach(a=>{(!e||!a.disabled)&&a._setSelected(t)&&n.push(a)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&bi(t,"ctrlKey","metaKey")){let n=this.options.some(a=>!a.disabled&&!a.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{if(this.disabled)return;let e=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new vi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(We(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,n)=>e._setTabindex(n===t?0:-1)),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=ur();return t&&this._element.nativeElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-selection-list"]],contentQueries:function(e,n,a){if(e&1&&Ie(a,ii,5),e&2){let u;Mt(u=St())&&(n._items=u)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(e,n){e&1&&q("keydown",function(u){return n._handleKeydown(u)}),e&2&&vt("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[$e([Oo,{provide:gn,useExisting:i},{provide:ha,useExisting:i}]),de,Hn],ngContentSelectors:co,decls:1,vars:0,template:function(e,n){e&1&&(De(),Bt(0))},styles:[lo],encapsulation:2,changeDetection:0})}return i})();function Ao(i,r){if(i&1&&(m(0,"mat-list-option",5),f(1),d()),i&2){let t=r.$implicit;Z("value",t),b(),ot(t)}}function No(i,r){if(i&1&&(m(0,"mat-list-option",5),f(1),d()),i&2){let t=r.$implicit;Z("value",t),b(),ot(t)}}var Ri=class i{shopService=p(se);dialogRef=p(Sr);data=p(Dr);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-filter-dialog"]],decls:19,vars:4,consts:[[1,"text-center","text-3xl","py-3"],[1,"flex","p-4"],[1,"w-1/2"],[1,"font-semibold","text-xl","text-primary"],[3,"ngModelChange","ngModel","multiple"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&(m(0,"div",0),f(1,"Filters"),d(),U(2,"mat-divider"),m(3,"div",1)(4,"div",2)(5,"h4",3),f(6,"Brands"),d(),m(7,"mat-selection-list",4),_e("ngModelChange",function(a){return ge(e.selectedBrands,a)||(e.selectedBrands=a),a}),qt(8,Ao,2,2,"mat-list-option",5,ue),d()(),m(10,"div",2)(11,"h4",3),f(12,"Types"),d(),m(13,"mat-selection-list",4),_e("ngModelChange",function(a){return ge(e.selectedTypes,a)||(e.selectedTypes=a),a}),qt(14,No,2,2,"mat-list-option",5,ue),d()()(),m(16,"div",6)(17,"button",7),q("click",function(){return e.applyFilters()}),f(18,"Apply filters"),d()()),t&2&&(b(7),he("ngModel",e.selectedBrands),Z("multiple",!0),b(),Ut(e.shopService.brands),b(5),he("ngModel",e.selectedTypes),Z("multiple",!0),b(),Ut(e.shopService.types))},dependencies:[ma,Ze,ni,ii,Fe,He,Be,je],encapsulation:2})};var jo=["mat-menu-item",""],Ho=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Vo=["mat-icon, [matMenuItemIcon]","*"];function Zo(i,r){i&1&&(ci(),m(0,"svg",2),U(1,"polygon",3),d())}var Xo=["*"];function qo(i,r){if(i&1){let t=wt();pe(0,"div",0),Yn("click",function(){ct(t);let n=O();return lt(n.closed.emit("click"))})("animationstart",function(n){ct(t);let a=O();return lt(a._onAnimationStart(n.animationName))})("animationend",function(n){ct(t);let a=O();return lt(a._onAnimationDone(n.animationName))})("animationcancel",function(n){ct(t);let a=O();return lt(a._onAnimationDone(n.animationName))}),pe(1,"div",1),Bt(2),Se()()}if(i&2){let t=O();pi(t._classList),_t("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Wn("id",t.panelId),vt("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var yn=new zt("MAT_MENU_PANEL"),ri=(()=>{class i{_elementRef=p(kt);_document=p(Ye);_focusMonitor=p(Ji);_parentMenu=p(yn,{optional:!0});_changeDetectorRef=p($t);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new xe;_focused=new xe;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(Ne).load(xi),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&q("click",function(u){return n._checkDisabled(u)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(vt("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),_t("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Gt],disableRipple:[2,"disableRipple","disableRipple",Gt]},exportAs:["matMenuItem"],attrs:jo,ngContentSelectors:Vo,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(De(Ho),Bt(0),m(1,"span",0),Bt(2,1),d(),U(3,"div",1),et(4,Zo,2,0,":svg:svg",2)),e&2&&(b(3),Z("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),b(),it(n._triggersSubmenu?4:-1))},dependencies:[kr],encapsulation:2,changeDetection:0})}return i})();var Uo=new zt("MatMenuContent");var Go=new zt("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),vn="_mat-menu-enter",Li="_mat-menu-exit",ce=(()=>{class i{_elementRef=p(kt);_changeDetectorRef=p($t);_injector=p(Te);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=fe();_allItems;_directDescendantItems=new Vn;_classList={};_panelAnimationState="void";_animationDone=new xe;_isAnimating=bt(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=Wi({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Qt;close=this.closed;panelId=p(yi).getId("mat-menu-panel-");constructor(){let t=p(Go);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(si(this._directDescendantItems),Yi(t=>ke(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),a=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[a]&&!n[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(si(this._directDescendantItems),Yi(e=>ke(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:bi(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Zn(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Cn(Wi({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Li;(e||t===vn)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===vn||t===Li)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Li),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?vn:Li)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(si(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,a){if(e&1&&Ie(a,Uo,5)(a,ri,5)(a,ri,4),e&2){let u;Mt(u=St())&&(n.lazyContent=u.first),Mt(u=St())&&(n._allItems=u),Mt(u=St())&&(n.items=u)}},viewQuery:function(e,n){if(e&1&&ui(mi,5),e&2){let a;Mt(a=St())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(e,n){e&2&&vt("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Gt],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Gt(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[$e([{provide:yn,useExisting:i}])],ngContentSelectors:Xo,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(De(),Un(0,qo,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Wo=new zt("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=p(Te);return()=>Er(i)}});var Xe=new WeakMap,Yo=(()=>{class i{_canHaveBackdrop;_element=p(kt);_viewContainerRef=p(di);_menuItemInstance=p(ri,{optional:!0,self:!0});_dir=p(sr,{optional:!0});_focusMonitor=p(Ji);_ngZone=p(Kt);_injector=p(Te);_scrollStrategy=p(Wo);_changeDetectorRef=p($t);_animationsDisabled=fe();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ye.EMPTY;_menuCloseSubscription=ye.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=p(yn,{optional:!0});this._parentMaterialMenu=e instanceof ce?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Xe.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=Xe.get(e);Xe.set(e,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(e),u=a.getConfig(),v=u.positionStrategy;this._setPosition(e,v),this._canHaveBackdrop?u.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:u.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof ce&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(We(e.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof ce&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ln(1)).subscribe(()=>{e.detach(),Xe.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Xe.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Mr(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof ce&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Tr({positionStrategy:Cr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",u=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,u)})})}_setPosition(t,e){let[n,a]=t.xPosition==="before"?["end","start"]:["start","end"],[u,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[w,S]=[u,v],[x,D]=[n,a],L=0;if(this._triggersSubmenu()){if(D=n=t.xPosition==="before"?"start":"end",a=x=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let X=this._parentMaterialMenu.items.first;this._parentInnerPadding=X?X._getHostElement().offsetTop:0}L=u==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(w=u==="top"?"bottom":"top",S=v==="top"?"bottom":"top");e.withPositions([{originX:n,originY:w,overlayX:x,overlayY:u,offsetY:L},{originX:a,originY:w,overlayX:D,overlayY:u,offsetY:L},{originX:n,originY:S,overlayX:x,overlayY:v,offsetY:-L},{originX:a,originY:S,overlayX:D,overlayY:v,offsetY:-L}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ge(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Pn(u=>this._menuOpen&&u!==this._menuItemInstance)):Ge();return ke(t,n,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new wr(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Xe.get(t)===this}_triggerIsAriaDisabled(){return Gt(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){qn()};static \u0275dir=gt({type:i})}return i})(),Oi=(()=>{class i extends Yo{_cleanupTouchstart;_hoverSubscription=ye.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Qt;onMenuOpen=this.menuOpened;menuClosed=new Qt;onMenuClose=this.menuClosed;constructor(){super(!0);let t=p(re);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{dr(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){mr(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&q("click",function(u){return n._handleClick(u)})("mousedown",function(u){return n._handleMousedown(u)})("keydown",function(u){return n._handleKeydown(u)}),e&2&&vt("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[de]})}return i})();var ai=class{brands=[];types=[];sort="name";pageNumber=1;pageSize=10;search=""};var le=class i{loading=bt(!1);busyRequestCount=0;busy(){this.busyRequestCount++,this.loading.set(!0)}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading.set(!1))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=we({token:i,factory:i.\u0275fac,providedIn:"root"})};function Qo(i,r){if(i&1){let t=wt();m(0,"div",0)(1,"div",1)(2,"mat-icon",2),f(3),d(),m(4,"p",3),f(5),d(),m(6,"button",4),q("click",function(){ct(t);let n=O();return lt(n.onAction())}),f(7),d()()()}if(i&2){let t=O();b(3),ot(t.icon()),b(2),Ht(" ",t.message()," "),b(2),ot(t.actionText())}}var qe=class i{message=Le.required();icon=Le.required();actionText=Le.required();action=Kn();loadService=p(le);onAction(){this.action.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-empty-state"]],inputs:{message:[1,"message"],icon:[1,"icon"],actionText:[1,"actionText"]},outputs:{action:"action"},decls:1,vars:1,consts:[[1,"max-w-screen-xl","mx-auto","px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","p-12","w-full"],[1,"icon-display","mb-8"],[1,"text-lg","font-semibold","text-gray-400","mb-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&et(0,Qo,8,3,"div",0),t&2&&it(e.loadService.busyRequestCount===0?0:-1)},dependencies:[It,yt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var Ko=(i,r)=>r.id;function $o(i,r){if(i&1&&U(0,"app-product-item",13),i&2){let t=r.$implicit;Z("product",t)}}function Jo(i,r){if(i&1&&(m(0,"mat-list-option",15),f(1),d()),i&2){let t=r.$implicit,e=O(2);Z("value",t.value)("selected",e.shopParams.sort===t.value),b(),ot(t.name)}}function ts(i,r){if(i&1){let t=wt();m(0,"div",3)(1,"mat-paginator",4),q("page",function(n){ct(t);let a=O();return lt(a.handlePageEvent(n))}),d(),m(2,"form",5,0),q("ngSubmit",function(){ct(t);let n=O();return lt(n.onSearchChange())}),m(4,"div",6)(5,"input",7),_e("ngModelChange",function(n){ct(t);let a=O();return ge(a.shopParams.search,n)||(a.shopParams.search=n),lt(n)}),d(),m(6,"button",8)(7,"mat-icon"),f(8,"search"),d()()()(),m(9,"div",9)(10,"button",10),q("click",function(){ct(t);let n=O();return lt(n.openFilterDialog())}),m(11,"mat-icon"),f(12,"filter_list"),d(),f(13," Filters "),d(),m(14,"button",11)(15,"mat-icon"),f(16,"swap_vert"),d(),f(17," sort "),d()()(),m(18,"div",12),qt(19,$o,1,1,"app-product-item",13,Ko),d(),m(21,"mat-menu",null,1)(23,"mat-selection-list",14),q("selectionChange",function(n){ct(t);let a=O();return lt(a.onSortChange(n))}),qt(24,Jo,2,3,"mat-list-option",15,ue),d()()}if(i&2){let t,e,n,a=jt(22),u=O();b(),Z("length",(t=u.products())==null?null:t.count)("pageSize",(e=u.products())==null?null:e.pageSize)("showFirstLastButtons",!0)("pageSizeOptions",u.pageSizeOptions)("pageIndex",u.shopParams.pageNumber-1),b(4),he("ngModel",u.shopParams.search),b(9),Z("matMenuTriggerFor",a),b(5),Ut((n=u.products())==null?null:n.data),b(4),Z("multiple",!1),b(),Ut(u.sortOptions)}}function es(i,r){if(i&1){let t=wt();m(0,"app-empty-state",16),q("action",function(){ct(t);let n=O();return lt(n.resetFilters())}),d()}}var Ai=class i{title="E-Commerce";shopService=p(se);dialogService=p(Ir);sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low-High",value:"priceAsc"},{name:"price: High-Low",value:"priceDesc"}];shopParams=new ai;pageSizeOptions=[5,10,15,20];products=bt(void 0);ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new ai,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:r=>this.products.set(r),error:r=>console.log(r)})}openFilterDialog(){this.dialogService.open(Ri,{minWidth:"500px",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(this.shopParams.brands=t.selectedBrands,this.shopParams.types=t.selectedTypes,this.shopParams.pageNumber=1,this.getProducts())}})}onSortChange(r){let t=r.options[0];t&&(this.shopParams.sort=t.value),this.shopParams.pageNumber=1,this.getProducts()}handlePageEvent(r){this.shopParams.pageNumber=r.pageIndex+1,this.shopParams.pageSize=r.pageSize,console.log(this.shopParams.pageNumber),console.log(this.shopParams.pageSize),this.getProducts()}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-shop"]],decls:2,vars:1,consts:[["serachFrom","ngForm"],["sortMenu","matMenu"],["message","No product match this filter","icon","filter_alt_off","actionText","Reset filters"],[1,"flex","justify-between","items-center","mb-3"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex"],[1,"w-full","max-w-md","flex","items-center",3,"ngSubmit"],[1,"border","border-gray-300","w-full","rounded-lg","flex","justify-between","mr-4"],["type","search","placeholder","Search","name","search",1,"outline-0","rounded-lg","p-4","text-gray-900","block","w-full",3,"ngModelChange","ngModel"],["mat-icon-button","","type","submit",1,"flex","items-center","top-2","right-2"],[1,"flex","gap-3"],["mat-stroked-button","",1,"match-input-height",3,"click"],["mat-stroked-button","",3,"matMenuTriggerFor"],[1,"grid","grid-cols-5","gap-4"],[3,"product"],[3,"selectionChange","multiple"],[3,"value","selected"],["message","No product match this filter","icon","filter_alt_off","actionText","Reset filters",3,"action"]],template:function(t,e){if(t&1&&et(0,ts,26,8)(1,es,1,0,"app-empty-state",2),t&2){let n;it((((n=e.products())==null?null:n.count)??0)>0?0:1)}},dependencies:[fi,Pi,Fe,ze,yt,ce,ni,ii,Oi,jr,Br,He,Or,wi,Be,Rr,je,Lr,ki,qe],encapsulation:2})};function is(i,r){if(i&1){let t=wt();m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),U(4,"img",4),d(),m(5,"div")(6,"h1",5),f(7),d(),m(8,"p"),f(9),d(),m(10,"div",6)(11,"p",7),f(12),Pe(13,"currency"),d()(),m(14,"div",8)(15,"button",9),q("click",function(){ct(t);let n=O();return lt(n.updateCart())}),m(16,"mat-icon"),f(17,"shopping_cart"),d(),f(18),d(),m(19,"mat-form-field",10)(20,"mat-label"),f(21,"Quantity"),d(),m(22,"input",11),_e("ngModelChange",function(n){ct(t);let a=O();return ge(a.quantity,n)||(a.quantity=n),lt(n)}),d()()(),U(23,"mat-divider"),m(24,"p",12),f(25),d()()()()()}if(i&2){let t=r,e=O();b(4),Z("src",ae(t.pictureUrl),Ce),b(3),Ht(" ",t.name," "),b(2),Ht("You have ",e.quantityInCart," of this item in your cart"),b(3),Ht(" ",Re(13,9,t.price)," "),b(3),Z("disabled",e.quantity==e.quantityInCart),b(3),Ht(" ",e.getButtonText()," "),b(4),he("ngModel",e.quantity),b(3),ot(t.description)}}var Ni=class i{shopService=p(se);activatedRoute=p(nr);product=bt(void 0);cartService=p(Pt);quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let r=this.activatedRoute.snapshot.paramMap.get("id");r&&this.shopService.getProduct(+r).subscribe({next:t=>{this.product.set(t),this.updateQuantityInCart()},error:t=>console.log(t)})}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(r=>r.productId==this.product()?.id)?.quantity??0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?"Update cart":"Add to cart"}updateCart(){let r=this.product();if(r)if(this.quantity>this.quantityInCart){let t=this.quantity-this.quantityInCart;this.quantityInCart+=t,this.cartService.addItemToCart(r,t)}else{let t=this.quantityInCart-this.quantity;this.quantityInCart-=t,this.cartService.removeItemfromCart(r.id,t)}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-screen-2xl","mx-auto","px-4"],[1,"grid","grid-cols-2","gap-8"],[1,"max-w-xl","mx-auto"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"min-h-14",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","type","number","min","0",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(t,e){if(t&1&&et(0,is,26,11,"section",0),t&2){let n;it((n=e.product())?0:-1,n)}},dependencies:[It,yt,zr,Hr,Fr,Ze,He,wi,Ar,Be,Nr,je,Oe],encapsulation:2})};function ns(i,r){if(i&1&&(m(0,"li",4),f(1),d()),i&2){let t=r.$implicit;b(),ot(t)}}function rs(i,r){if(i&1&&(m(0,"div",2)(1,"ul",3),qt(2,ns,2,1,"li",4,ue),d()()),i&2){let t=O();b(2),Ut(t.validationErrors())}}var Fi=class i{http=p(gi);baseurl=Ae.apiUrl;validationErrors=bt(void 0);get404Error(){this.http.get(this.baseurl+"error/notfound").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400Error(){this.http.get(this.baseurl+"error/badrequest").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseurl+"error/unauthorized").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseurl+"error/internalerror").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseurl+"error/validationerror",{}).subscribe({next:r=>console.log(r),error:r=>this.validationErrors.set(r)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","justify-center","gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","mt-5","max-w-lg","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"button",1),q("click",function(){return e.get500Error()}),f(2,"Test 500 Error"),d(),m(3,"button",1),q("click",function(){return e.get400Error()}),f(4,"Test 400 Error"),d(),m(5,"button",1),q("click",function(){return e.get401Error()}),f(6,"Test 401 Error"),d(),m(7,"button",1),q("click",function(){return e.get404Error()}),f(8,"Test 404 Error"),d(),m(9,"button",1),q("click",function(){return e.get400ValidationError()}),f(10,"TestValidation Error"),d()(),et(11,rs,4,0,"div",2)),t&2&&(b(11),it(e.validationErrors()?11:-1))},dependencies:[It],encapsulation:2})};function as(i,r){if(i&1&&(m(0,"h5",2),f(1),d(),m(2,"p",3),f(3,"This error comes from the server, not angular"),d(),m(4,"p",4),f(5,"What to do next?"),d(),m(6,"ol",5)(7,"li",6),f(8,"Check the network tab in chrome dev tools"),d(),m(9,"li",6),f(10,"reproduce the error in postman, if same error, don't waste your time troubleshooting angular code"),d()(),m(11,"h5",7),f(12,"Stack trace"),d(),m(13,"mat-card",8)(14,"code",9),f(15),d()()),i&2){let t=O();b(),Ht("Error: ",t.error.message),b(14),ot(t.error.details)}}var zi=class i{constructor(r){this.router=r;let t=r.currentNavigation();this.error=t?.extras.state?.error}router;error;static \u0275fac=function(t){return new(t||i)(Xn(Wt))};static \u0275cmp=V({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5","bg-gray-100","rounded","shadow-lg"],[1,"text-2xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold","mb-2"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"h1",1),f(2,"Internal Server Error"),d(),et(3,as,16,2),d()),t&2&&(b(3),it(e.error?3:-1))},dependencies:[_i],encapsulation:2})};var Bi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","flex-col","items-center","justify-center","min-h-96","bg-gray-100"],[1,"text-center"],[1,"text-purple-700!","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-4"],[1,"text-lg","text-gray-600","mt-2"],["mat-flat-button","","routerLink","/shop",1,"mt-4"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1)(2,"mat-icon",2),f(3,"error_outline"),d(),m(4,"h1",3),f(5,"404"),d(),m(6,"p",4),f(7,"Page not found"),d(),m(8,"button",5),f(9,"Back to shop"),d()()())},dependencies:[yt,It,Yt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};var ji=class i{item=Le.required();cartService=p(Pt);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemfromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemfromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-shopping-cart-item"]],inputs:{item:[1,"item"]},decls:26,vars:11,consts:[[1,"rounded","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","items-center","justify-between","gap-6"],[1,"shrink","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20",3,"src"],[1,"flex","items-center","justify-between","order-3"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","order-4","w-32"],[1,"font-bold","text-xl"],[1,"w-full","flex","flex-col","items-start","flex-1","space-y-4","order-2","max-w-md"],[1,"font-medium",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!",3,"click"]],template:function(t,e){t&1&&(m(0,"div",0)(1,"div",1)(2,"a",2),U(3,"img",3),d(),m(4,"div",4)(5,"div",5)(6,"button",6),q("click",function(){return e.decrementQuantity()}),m(7,"mat-icon",7),f(8,"remove"),d()(),m(9,"div",8),f(10),d(),m(11,"button",6),q("click",function(){return e.incrementQuantity()}),m(12,"mat-icon",9),f(13,"add"),d()()(),m(14,"div",10)(15,"p",11),f(16),Pe(17,"currency"),d()()(),m(18,"div",12)(19,"a",13),f(20),d(),m(21,"div",14)(22,"button",15),q("click",function(){return e.removeItemFromCart()}),m(23,"mat-icon"),f(24,"delete"),d(),f(25," Delete "),d()()()()()),t&2&&(b(2),Z("routerLink",Ke("/shop/",e.item().productId)),b(),Z("src",ae(e.item().pictureUrl),Ce),b(7),Ht(" ",e.item().quantity," "),b(6),ot(Re(17,9,e.item().price)),b(3),Z("routerLink",Ke("/shop/",e.item().productId)),b(),ot(e.item().productName))},dependencies:[Yt,It,yt,ki,Oe],encapsulation:2})};var os=(i,r)=>r.productId;function ss(i,r){if(i&1&&U(0,"app-shopping-cart-item",3),i&2){let t=r.$implicit;Z("item",t)}}function cs(i,r){if(i&1&&(m(0,"div",0)(1,"div",2),qt(2,ss,1,1,"app-shopping-cart-item",3,os),d(),m(4,"div",4),U(5,"app-order-summary"),d()()),i&2){let t,e=O();b(2),Ut((t=e.cartService.cart())==null?null:t.items)}}function ls(i,r){if(i&1){let t=wt();m(0,"app-empty-state",5),q("action",function(){ct(t);let n=O();return lt(n.onAction())}),d()}}var Hi=class i{cartService=p(Pt);router=p(Wt);onAction(){this.router.navigateByUrl("/shop")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","items-start","gap-6","mt-32"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop"],[1,"w-3/4"],[3,"item"],[1,"w-1/4"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop",3,"action"]],template:function(t,e){if(t&1&&(m(0,"section"),et(1,cs,6,0,"div",0)(2,ls,1,0,"app-empty-state",1),d()),t&2){let n;b(),it(((n=e.cartService.cart())==null||n.items==null?null:n.items.length)>0?1:2)}},dependencies:[ji,Vr,qe],encapsulation:2})};var ba=(i,r)=>{let t=p(oe),e=p(Wt),n=p(Ei);return t.isAdmin()?!0:(n.error("Not authorized"),e.navigateByUrl("/shop"),!1)};var va=[{path:"",component:Ii},{path:"shop",component:Ai},{path:"shop/:id",component:Ni},{path:"cart",component:Hi},{path:"checkout",loadChildren:()=>import("./chunk-DL6LGEM5.js").then(i=>i.checkoutRoutes)},{path:"orders",loadChildren:()=>import("./chunk-R4K2TVL5.js").then(i=>i.orderRoutes)},{path:"account",loadChildren:()=>import("./chunk-JVX54WCZ.js").then(i=>i.accountRoutes)},{path:"test-error",component:Fi},{path:"not-found",component:Bi},{path:"server-error",component:zi},{path:"admin",loadComponent:()=>import("./chunk-TNNOTPKI.js").then(i=>i.Admin),canActivate:[Xr,ba]},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var ya=(i,r)=>{let t=p(Wt),e=p(Ei);return r(i).pipe(Rn(n=>{if(n.status===400)if(n.error.errors){let a=[];for(let u in n.error.errors)n.error.errors[u]&&a.push(n.error.errors[u]);throw a.flat()}else e.error(n.error.title||n.error);if(n.status===403&&e.error("Forbidden"),n.status===401&&e.error(n.error.title||n.error),n.status===404&&t.navigateByUrl("/not-found"),n.status===500){let a={state:{error:n.error}};t.navigateByUrl("/server-error",a)}return Sn(()=>n)}))};var xa=(i,r)=>{let t=p(le);return t.busy(),r(i).pipe(Ae.production?Mn:On(500),An(()=>t.idle()))};var Vi=class i{cartService=p(Pt);accountService=p(oe);signalrService=p(Zr);test;init(){let r=localStorage.getItem("cart_id"),t=r?this.cartService.getCart(r):Ge(null);return In({cart:t,user:this.accountService.getUserInfo().pipe(Nn(e=>{e&&this.signalrService.createHubConnection()}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=we({token:i,factory:i.\u0275fac,providedIn:"root"})};var ka=(i,r)=>{let t=i.clone({withCredentials:!0});return r(t)};function ms(i){return()=>{Dn(i.init()).finally(()=>{let r=document.getElementById("initial-splash");r&&r.remove()})}}var wa={providers:[Bn(),or(va),er(ir([ya,xa,ka])),Gn(()=>ms(p(Vi))())]};var Ea="mat-badge-content",ds=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Ta=(()=>{class i{_ngZone=p(Kt);_elementRef=p(kt);_ariaDescriber=p(br);_renderer=p(re);_animationsDisabled=fe();_idGenerator=p(yi);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(fr);_document=p(Ye);constructor(){let t=p(Ne);t.load(ds),t.load(gr)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Ea),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Ea}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=gt({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&_t("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Gt],disabled:[2,"matBadgeDisabled","disabled",Gt],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Gt]}})}return i})();function us(i,r){i&1&&Qe(0,"div",2)}var ps=new zt("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ma=(()=>{class i{_elementRef=p(kt);_ngZone=p(Kt);_changeDetectorRef=p($t);_renderer=p(re);_cleanupTransitionEnd;constructor(){let t=vr(),e=p(ps,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=Ca(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Ca(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Qt;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=V({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(e,n){e&2&&(vt("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),pi("mat-"+n.color),_t("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ki],bufferValue:[2,"bufferValue","bufferValue",Ki],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,n){e&1&&(pe(0,"div",0),Qe(1,"div",1),et(2,us,1,0,"div",2),Se(),pe(3,"div",3),Qe(4,"span",4),Se(),pe(5,"div",5),Qe(6,"span",4),Se()),e&2&&(b(),Qi("flex-basis",n._getBufferBarFlexBasis()),b(),it(n.mode==="buffer"?2:-1),b(),Qi("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Ca(i,r=0,t=100){return Math.max(r,Math.min(t,i))}var Zi=class i{accountService=p(oe);viewContainerRef=p(di);templateRef=p(mi);constructor(){jn(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=gt({type:i,selectors:[["","appIsAdmin",""]]})};var hs=()=>({exact:!0});function gs(i,r){i&1&&(m(0,"a",18),f(1,"Admin"),d())}function _s(i,r){if(i&1&&(m(0,"button",12)(1,"mat-icon"),f(2,"arrow_drop_down"),d(),m(3,"span"),f(4),d()()),i&2){let t,e=O(),n=jt(19);Z("matMenuTriggerFor",n),b(4),ot((t=e.accountSevice.currentUser())==null?null:t.email)}}function fs(i,r){i&1&&(m(0,"button",19),f(1,"Login"),d(),m(2,"button",20),f(3,"Register"),d())}function bs(i,r){i&1&&U(0,"mat-progress-bar",13)}var Xi=class i{loadService=p(le);cartService=p(Pt);accountSevice=p(oe);router=p(Wt);logout(){this.accountSevice.logout().subscribe({next:()=>{this.accountSevice.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-header"]],decls:33,vars:6,consts:[["menu","matMenu"],[1,"shadow-md","p-3","w-full","max-h-20","fixed","top-0","z-50","bg-white"],[1,"flex","align-middle","items-center","justify-between","max-w-screen-2xl","mx-auto"],["routerLink","/","src","/images/logo.png","alt","app logo",1,"max-h-16"],[1,"flex","gap-3","my-2","uppercase","font-mono","text-2xl"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],[1,"flex","gap-3","align-middle"],["routerLink","/cart","routerLinkActive","active","matBadgeSize","large",1,"mt-2","mr-2",3,"matBadge"],[1,"custom-badge"],["mat-button","",3,"matMenuTriggerFor"],["mode","indeterminate",1,"mt-1"],[1,"px-5"],["mat-menu-item","","routerLink","/cart",1,"px-3"],["mat-menu-item","","routerLink","/orders",1,"px-3"],["mat-menu-item","",1,"px-3",3,"click"],["routerLink","/admin","routerLinkActive","active"],["mat-stroked-button","","routerLink","/account/login"],["mat-stroked-button","","routerLink","/account/register"]],template:function(t,e){t&1&&(m(0,"header",1)(1,"div",2),U(2,"img",3),m(3,"nav",4)(4,"a",5),f(5,"Home"),d(),m(6,"a",6),f(7,"Shop"),d(),m(8,"a",7),f(9,"Errors"),d(),Xt(10,gs,2,0,"a",8),d(),m(11,"div",9)(12,"a",10)(13,"mat-icon",11),f(14,"shopping_cart"),d()(),et(15,_s,5,2,"button",12)(16,fs,4,0),d()(),et(17,bs,1,0,"mat-progress-bar",13),d(),m(18,"mat-menu",14,0)(20,"button",15)(21,"mat-icon"),f(22,"shopping_cart"),d(),f(23," My cart "),d(),m(24,"button",16)(25,"mat-icon"),f(26,"history"),d(),f(27," My orders "),d(),U(28,"mat-divider"),m(29,"button",17),q("click",function(){return e.logout()}),m(30,"mat-icon"),f(31,"logout"),d(),f(32," Logout "),d()()),t&2&&(b(4),Z("routerLinkActiveOptions",Qn(5,hs)),b(8),Z("matBadge",ae(e.cartService.itemCount())),b(3),it(e.accountSevice.currentUser()?15:16),b(2),it(e.loadService.loading()?17:-1))},dependencies:[ze,yt,Ta,It,Yt,ar,Ma,Oi,ce,Ze,ri,Zi],encapsulation:2})};var qi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=V({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"px-4","mt-24"]],template:function(t,e){t&1&&(U(0,"app-header"),m(1,"div",0),U(2,"router-outlet"),d())},dependencies:[rr,Xi],encapsulation:2})};Jn(qi,wa).catch(i=>console.error(i));
