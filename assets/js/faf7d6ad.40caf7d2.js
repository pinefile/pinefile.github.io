"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[912],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1779:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a={},l="Shell",s={unversionedId:"functions/shell",id:"functions/shell",isDocsHomePage:!1,title:"Shell",description:"Run shell commands and returning output instead of log as run function does.",source:"@site/docs/functions/shell.md",sourceDirName:"functions",slug:"/functions/shell",permalink:"/docs/functions/shell",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/functions/shell.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Series",permalink:"/docs/functions/series"},next:{title:"Custom executable",permalink:"/docs/advanced/custom-executable"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shell"},"Shell"),(0,i.kt)("p",null,"Run shell commands and returning output instead of log as ",(0,i.kt)("a",{parentName:"p",href:"/docs/functions/run"},"run")," function does."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { shell } = require('@pinefile/pine');\n\nmodule.exports = {\n  example: async () => {\n    const gitLatestCommitID = await shell('git rev-parse HEAD');\n  },\n};\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"All Execa ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/execa#options"},"options")," can be used. Pine has some default values that are different from Execa:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shell")," option is default ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," so shell-specific features can be used (for or example, ",(0,i.kt)("inlineCode",{parentName:"li"},"&&")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"||"),")")))}p.isMDXComponent=!0}}]);