(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56470],{34005:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return f},withMDXComponents:function(){return s}});var r=n(67597);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){return function(t){var n=f(t.components);return r.createElement(e,i({},t,{components:n}))}},f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=f(n),p=o,y=s["".concat(a,".").concat(p)]||s[p]||d[p]||i;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"===typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},64618:function(e,t,n){"use strict";var r=n(67597),o=n(34005);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var c=i(r),u=a(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[i,a]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{a(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:u.mdx,React:c.default},t),r=Object.keys(n),o=Object.values(n),i=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return i.apply(i,o)}),[t,e]);if(!i)return c.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const s=c.default.createElement(u.MDXProvider,{components:n},c.default.createElement(l,null));return o?c.default.createElement("div",null,s):s}},29209:function(e,t,n){"use strict";var r=n(34889);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},71037:function(e,t,n){e.exports=n(29209)()},34889:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},68184:function(e,t,n){"use strict";var r=n(7033),o=n(95565);var i=(0,n(66106).Z)("twitter",(function(e,t){var n=t.title,i=t.via,a=t.hashtags,c=void 0===a?[]:a,u=t.related,l=void 0===u?[]:u;return(0,r.Z)(e,"twitter.url"),(0,r.Z)(Array.isArray(c),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:n,via:i,hashtags:c.length>0?c.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});t.Z=i},66106:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67597),o=n(43186),i=n.n(o),a=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},p=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},d=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function y(e,t,n){var r=t.height,o=t.width,i=s(t,["height","width"]),a=c({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),u=window.open(e,"",Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join(", "));if(n)var l=window.setInterval((function(){try{(null===u||u.closed)&&(window.clearInterval(l),n(u))}catch(e){console.error(e)}}),1e3);return u}var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,u=void 0===a?"windowCenter":a,l=n.windowWidth,s=void 0===l?550:l;y(e,c({height:i,width:s},"windowCenter"===u?p(s,i):d(s,i)),r)},t.handleClick=function(e){return u(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,u,s,p;return l(this,(function(l){switch(l.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,u=t.opts,s=o(a,u),r?[2]:(e.preventDefault(),n?(p=n(),f(p)?[4,p]:[3,2]):[3,2]);case 1:l.sent(),l.label=2;case 2:return c&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,a=e.disabledStyle,u=e.forwardedRef,l=(e.networkLink,e.networkName),f=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),p=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,s(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),y=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),h=c(c(f?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},p),o&&a);return r.createElement("button",c({},d,{"aria-label":d["aria-label"]||l,className:y,onClick:this.handleClick,ref:u,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),w=h,b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};var v=function(e,t,n,o){function i(i,a){var c=n(i),u=b({},i);return Object.keys(c).forEach((function(e){delete u[e]})),r.createElement(w,b({},o,u,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-".concat(e),(0,r.forwardRef)(i)}},7033:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return r(t,e),t}(Error);function i(e,t){if(!e)throw new o(t)}},95565:function(e,t,n){"use strict";function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}n.d(t,{Z:function(){return r}})},43186:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);