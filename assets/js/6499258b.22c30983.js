(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[390],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1301:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c={},i={unversionedId:"advanced/custom-executable",id:"advanced/custom-executable",isDocsHomePage:!1,title:"Custom executable",description:"You can use create executable and use Pine under the hood. To make it work you need to push the file flag to argv array so Pine knows where to load your pinefile.js from.",source:"@site/docs/advanced/custom-executable.md",sourceDirName:"advanced",slug:"/advanced/custom-executable",permalink:"/docs/advanced/custom-executable",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/advanced/custom-executable.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Shell",permalink:"/docs/functions/shell"},next:{title:"Plugins",permalink:"/docs/advanced/plugins"}},u=[],l={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use create executable and use Pine under the hood. To make it work you need to push the file flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," array so Pine knows where to load your ",(0,a.kt)("inlineCode",{parentName:"p"},"pinefile.js")," from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'#!/usr/bin/env node\n\nconst { api } = require("@pinefile/pine");\nconst argv = process.argv.slice(2);\n\nargv.push(`--file=${__dirname}/pinefile.js`);\n\napi.runCLI(argv);\n')))}s.isMDXComponent=!0}}]);