(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(92)),a={sidebar_position:1},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"Create Pinefile or pinefile.js",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/master/docs/docs/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Color",permalink:"/docs/functions/color"}},p=[],l={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"Pinefile")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pinefile.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { run } = require("@pinefile/pine");\n\nexports.build = () => {\n  console.log("Building...");\n};\n\nexports.test = async () => {\n  await run("jest");\n};\n')),Object(o.b)("p",null,"or by using ",Object(o.b)("inlineCode",{parentName:"p"},"module.exports")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { run } = require("@pinefile/pine");\n\nmodule.exports = {\n  build: () => {\n    console.log("Building...");\n  },\n  test: async () => {\n    await run("jest");\n  },\n};\n')),Object(o.b)("p",null,"Then run it! It is best to either place ",Object(o.b)("inlineCode",{parentName:"p"},"pine")," inside a npm run script or run it with ",Object(o.b)("inlineCode",{parentName:"p"},"npx"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npx pine build\n")))}u.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return t?i.a.createElement(f,c(c({ref:n},l),{},{components:t})):i.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);