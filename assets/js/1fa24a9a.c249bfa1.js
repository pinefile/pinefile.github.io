(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[409],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5562:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),i={},a={unversionedId:"functions/color",id:"functions/color",isDocsHomePage:!1,title:"Color",description:"Pine use chalk under the hood and exports it as color. So everything you can do with chalk you can do with the color export.",source:"@site/docs/functions/color.md",sourceDirName:"functions",slug:"/functions/color",permalink:"/docs/functions/color",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/functions/color.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"Configure",permalink:"/docs/functions/config"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Pine use ",(0,c.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chalk"},"chalk")," under the hood and exports it as ",(0,c.kt)("inlineCode",{parentName:"p"},"color"),". So everything you can do with ",(0,c.kt)("inlineCode",{parentName:"p"},"chalk")," you can do with the ",(0,c.kt)("inlineCode",{parentName:"p"},"color")," export."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'const { log, color } = require("@pinefile/pine");\n\nmodule.exports = {\n  example: () => {\n    log.info(color.cyan("Foo"));\n  },\n};\n')))}p.isMDXComponent=!0}}]);