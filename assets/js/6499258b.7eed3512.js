(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[390],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1301:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={},i="Custom executable",u={unversionedId:"advanced/custom-executable",id:"advanced/custom-executable",isDocsHomePage:!1,title:"Custom executable",description:"You can use create executable and use Pine under the hood. To make it work you need to push the file flag to argv array so Pine knows where to load your pinefile.js from.",source:"@site/docs/advanced/custom-executable.md",sourceDirName:"advanced",slug:"/advanced/custom-executable",permalink:"/docs/advanced/custom-executable",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/advanced/custom-executable.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Shell",permalink:"/docs/functions/shell"},next:{title:"Plugins",permalink:"/docs/advanced/plugins"}},l=[],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-executable"},"Custom executable"),(0,a.kt)("p",null,"You can use create executable and use Pine under the hood. To make it work you need to push the file flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"argv")," array so Pine knows where to load your ",(0,a.kt)("inlineCode",{parentName:"p"},"pinefile.js")," from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'#!/usr/bin/env node\n\nconst { api } = require("@pinefile/pine");\nconst argv = process.argv.slice(2);\n\nargv.push(`--file=${__dirname}/pinefile.js`);\n\napi.runCLI(argv);\n')))}p.isMDXComponent=!0}}]);