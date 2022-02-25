"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5786:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),s=["components"],a={},u="Series",c={unversionedId:"functions/series",id:"functions/series",title:"Series",description:"Run tasks that will be executed one after another, in sequential order.",source:"@site/docs/functions/series.md",sourceDirName:"functions",slug:"/functions/series",permalink:"/docs/functions/series",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/functions/series.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Run",permalink:"/docs/functions/run"},next:{title:"Shell",permalink:"/docs/functions/shell"}},l={},p=[{value:"Combined tasks into one",id:"combined-tasks-into-one",level:2},{value:"Run multiple functions in series",id:"run-multiple-functions-in-series",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"series"},"Series"),(0,o.kt)("p",null,"Run tasks that will be executed one after another, in sequential order."),(0,o.kt)("h2",{id:"combined-tasks-into-one"},"Combined tasks into one"),(0,o.kt)("p",null,"You can combine tasks into one, e.g have a default task for building everything."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { series } = require("@pinefile/pine");\n\nmodule.exports = {\n  example: series("line", "build"),\n  lint: () => {},\n  build: () => {},\n};\n')),(0,o.kt)("h2",{id:"run-multiple-functions-in-series"},"Run multiple functions in series"),(0,o.kt)("p",null,"Support both ",(0,o.kt)("inlineCode",{parentName:"p"},"callback"),"-format and asynchronous functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { log, series } = require("@pinefile/pine");\n\nmodule.exports = {\n  example: async () => {\n    const tasks = [\n      (done) => {\n        log.push("callback");\n        done();\n      },\n      async () => {\n        return new Promise((resolve) => {\n          log.info("async");\n          resolve();\n        });\n      },\n    ];\n\n    await series(tasks);\n  },\n};\n')))}d.isMDXComponent=!0}}]);