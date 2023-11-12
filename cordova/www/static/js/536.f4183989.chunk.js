/*! For license information please see 536.f4183989.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[536],{1600:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2791),i=n(4940);function o(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(r){}return e}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},u=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?i.Q(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=o(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var r;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=a(a({},this.cookies),((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=a(a({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),s=r.createContext(new u),c=(s.Provider,s.Consumer,s);function l(e){var t=(0,r.useContext)(c);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),i=(0,r.useState)(n),o=i[0],a=i[1],u=(0,r.useRef)(o);return"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement&&(0,r.useLayoutEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,i=e;r<i.length;r++){var o=i[r];if(t[o]!==n[o])return!0}return!1})(e||null,n,u.current)&&a(n),u.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[o,(0,r.useMemo)((function(){return t.set.bind(t)}),[t]),(0,r.useMemo)((function(){return t.remove.bind(t)}),[t])]}},4940:function(e,t){t.Q=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(";"),u=i.decode||n,s=0;s<a.length;s++){var c=a[s],l=c.indexOf("=");if(!(l<0)){var f=c.substring(0,l).trim();if(void 0==r[f]){var d=c.substring(l+1,c.length).trim();'"'===d[0]&&(d=d.slice(1,-1)),r[f]=o(d,u)}}}return r},t.q=function(e,t,n){var o=n||{},a=o.encode||r;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var u=a(t);if(u&&!i.test(u))throw new TypeError("argument val is invalid");var s=e+"="+u;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(c)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(s+="; HttpOnly");o.secure&&(s+="; Secure");if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s};var n=decodeURIComponent,r=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(n){return e}}},8438:function(e,t,n){n.d(t,{E:function(){return F}});var r=n(885),i=n(5987),o=n(4942),a=n(1413),u=n(2982),s=n(2791),c=n(5612),l=n(7003),f=n(9904),d=n(4705),p=n(7369),v=n(981);var h,m,g=n(4368),y=n(1248),b=n(8373),E=n(4159),w=n(3402),C=n(172),O=n(5718),k=n(3654),R=n(1978),T=n(2953),S=["value","defaultValue","name","onChange","by","disabled"],A=["value","disabled"],x=((m=x||{})[m.RegisterOption=0]="RegisterOption",m[m.UnregisterOption=1]="UnregisterOption",m),Z=(h={},(0,o.Z)(h,0,(function(e,t){var n=[].concat((0,u.Z)(e.options),[{id:t.id,element:t.element,propsRef:t.propsRef}]);return(0,a.Z)((0,a.Z)({},e),{},{options:(0,v.z2)(n,(function(e){return e.element.current}))})})),(0,o.Z)(h,1,(function(e,t){var n=e.options.slice(),r=e.options.findIndex((function(e){return e.id===t.id}));return-1===r?e:(n.splice(r,1),(0,a.Z)((0,a.Z)({},e),{},{options:n}))})),h),_=(0,s.createContext)(null);function L(e){var t=(0,s.useContext)(_);if(null===t){var n=new Error("<".concat(e," /> is missing a parent <RadioGroup /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return t}function P(e,t){return(0,f.E)(t.type,Z,e,t)}_.displayName="RadioGroupContext";var D=(0,c.yV)((function(e,t){var n=e.value,u=e.defaultValue,f=e.name,d=e.onChange,h=e.by,m=void 0===h?function(e,t){return e===t}:h,T=e.disabled,A=void 0!==T&&T,x=(0,i.Z)(e,S),Z=(0,k.z)("string"==typeof m?function(e,t){var n=m;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:m),L=(0,s.useReducer)(P,{options:[]}),D=(0,r.Z)(L,2),M=D[0],N=D[1],F=M.options,I=(0,g.b)(),U=(0,r.Z)(I,2),j=U[0],G=U[1],z=(0,y.f)(),H=(0,r.Z)(z,2),K=H[0],V=H[1],B="headlessui-radiogroup-".concat((0,l.M)()),q=(0,s.useRef)(null),J=(0,E.T)(q,t),Q=(0,R.q)(n,d,u),W=(0,r.Z)(Q,2),Y=W[0],$=W[1],X=(0,s.useMemo)((function(){return F.find((function(e){return!e.propsRef.current.disabled}))}),[F]),ee=(0,s.useMemo)((function(){return F.some((function(e){return Z(e.propsRef.current.value,Y)}))}),[F,Y]),te=(0,k.z)((function(e){var t;if(A||Z(e,Y))return!1;var n=null==(t=F.find((function(t){return Z(t.propsRef.current.value,e)})))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==$||$(e),!0)}));(0,b.B)({container:q.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var ne=(0,k.z)((function(e){var t=q.current;if(t){var n=(0,O.r)(t),r=F.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case p.R.Enter:(0,C.g)(e.currentTarget);break;case p.R.ArrowLeft:case p.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,v.jA)(r,v.TO.Previous|v.TO.WrapAround)===v.fE.Success){var i=F.find((function(e){return e.element.current===(null==n?void 0:n.activeElement)}));i&&te(i.propsRef.current.value)}break;case p.R.ArrowRight:case p.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,v.jA)(r,v.TO.Next|v.TO.WrapAround)===v.fE.Success){var o=F.find((function(e){return e.element.current===(null==n?void 0:n.activeElement)}));o&&te(o.propsRef.current.value)}break;case p.R.Space:e.preventDefault(),e.stopPropagation();var a=F.find((function(e){return e.element.current===(null==n?void 0:n.activeElement)}));a&&te(a.propsRef.current.value)}}})),re=(0,k.z)((function(e){return N((0,a.Z)({type:0},e)),function(){return N({type:1,id:e.id})}})),ie=(0,s.useMemo)((function(){return{registerOption:re,firstOption:X,containsCheckedOption:ee,change:te,disabled:A,value:Y,compare:Z}}),[re,X,ee,te,A,Y,Z]),oe={ref:J,id:B,role:"radiogroup","aria-labelledby":j,"aria-describedby":K,onKeyDown:ne},ae=(0,s.useMemo)((function(){return{value:Y}}),[Y]);return s.createElement(V,{name:"RadioGroup.Description"},s.createElement(G,{name:"RadioGroup.Label"},s.createElement(_.Provider,{value:ie},null!=f&&null!=Y&&(0,C.t)((0,o.Z)({},f,Y)).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return s.createElement(w._,(0,a.Z)({features:w.A.Hidden},(0,c.oA)({key:n,as:"input",type:"radio",checked:null!=i,hidden:!0,readOnly:!0,name:n,value:i})))})),(0,c.sY)({ourProps:oe,theirProps:x,slot:ae,defaultTag:"div",name:"RadioGroup"}))))})),M=function(e){return e[e.Empty=1]="Empty",e[e.Active=2]="Active",e}(M||{}),N=(0,c.yV)((function(e,t){var n=(0,s.useRef)(null),o=(0,E.T)(n,t),a="headlessui-radiogroup-option-".concat((0,l.M)()),u=(0,g.b)(),f=(0,r.Z)(u,2),p=f[0],v=f[1],h=(0,y.f)(),m=(0,r.Z)(h,2),b=m[0],w=m[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,s.useState)(e),n=(0,r.Z)(t,2),i=n[0],o=n[1],a=(0,s.useCallback)((function(e){return o((function(t){return t|e}))}),[i]),u=(0,s.useCallback)((function(e){return Boolean(i&e)}),[i]),c=(0,s.useCallback)((function(e){return o((function(t){return t&~e}))}),[o]),l=(0,s.useCallback)((function(e){return o((function(t){return t^e}))}),[o]);return{addFlag:a,hasFlag:u,removeFlag:c,toggleFlag:l}}(1),O=C.addFlag,R=C.removeFlag,S=C.hasFlag,x=e.value,Z=e.disabled,_=void 0!==Z&&Z,P=(0,i.Z)(e,A),D=(0,s.useRef)({value:x,disabled:_});(0,d.e)((function(){D.current.value=x}),[x,D]),(0,d.e)((function(){D.current.disabled=_}),[_,D]);var M=L("RadioGroup.Option"),N=M.registerOption,F=M.disabled,I=M.change,U=M.firstOption,j=M.containsCheckedOption,G=M.value,z=M.compare;(0,d.e)((function(){return N({id:a,element:n,propsRef:D})}),[a,N,n,e]);var H=(0,k.z)((function(e){var t;if((0,T.P)(e.currentTarget))return e.preventDefault();!I(x)||(O(2),null==(t=n.current)||t.focus())})),K=(0,k.z)((function(e){if((0,T.P)(e.currentTarget))return e.preventDefault();O(2)})),V=(0,k.z)((function(){return R(2)})),B=(null==U?void 0:U.id)===a,q=F||_,J=z(G,x),Q={ref:o,id:a,role:"radio","aria-checked":J?"true":"false","aria-labelledby":p,"aria-describedby":b,"aria-disabled":!!q||void 0,tabIndex:q?-1:J||!j&&B?0:-1,onClick:q?void 0:H,onFocus:q?void 0:K,onBlur:q?void 0:V},W=(0,s.useMemo)((function(){return{checked:J,disabled:q,active:S(2)}}),[J,q,S]);return s.createElement(w,{name:"RadioGroup.Description"},s.createElement(v,{name:"RadioGroup.Label"},(0,c.sY)({ourProps:Q,theirProps:P,slot:W,defaultTag:"div",name:"RadioGroup.Option"})))})),F=Object.assign(D,{Option:N,Label:g._,Description:y.d})}}]);
//# sourceMappingURL=536.f4183989.chunk.js.map