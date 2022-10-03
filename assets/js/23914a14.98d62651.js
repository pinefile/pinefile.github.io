"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[823],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5398:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],u={},c="Run",l={unversionedId:"functions/run",id:"functions/run",title:"Run",description:"Run shell commands and log instead of returning output as shell function does.",source:"@site/docs/functions/run.md",sourceDirName:"functions",slug:"/functions/run",permalink:"/docs/functions/run",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/functions/run.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Parallel",permalink:"/docs/functions/parallel"},next:{title:"Series",permalink:"/docs/functions/series"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[],level:2}],p={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run"},"Run"),(0,i.kt)("p",null,"Run shell commands and log instead of returning output as ",(0,i.kt)("a",{parentName:"p",href:"/docs/functions/shell"},"shell")," function does."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { run } from "@pinefile/pine";\n\nexport default {\n  example: async () => {\n    await run("tsc");\n  },\n};\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"All Execa ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/execa#options"},"options")," can be used except ",(0,i.kt)("inlineCode",{parentName:"p"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," that's are defaulting to ",(0,i.kt)("inlineCode",{parentName:"p"},"inherit"),"."),(0,i.kt)("p",null,"To change them you should use ",(0,i.kt)("a",{parentName:"p",href:"/docs/functions/shell"},"shell")," function instead and read about the default options for ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," function."))}f.isMDXComponent=!0}}]);