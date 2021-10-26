"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2648:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var t=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],p={},s="Transpilers",l={unversionedId:"advanced/transpilers",id:"advanced/transpilers",isDocsHomePage:!1,title:"Transpilers",description:"Example of how to use Babel transpiler for your pinefile.js",source:"@site/docs/advanced/transpilers.md",sourceDirName:"advanced",slug:"/advanced/transpilers",permalink:"/docs/advanced/transpilers",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/advanced/transpilers.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Split up tasks",permalink:"/docs/advanced/split-up-tasks"}},c=[],u={toc:c};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transpilers"},"Transpilers"),(0,i.kt)("p",null,"Example of how to use ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpiler for your ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pine": {\n    "require": ["@babel/register"]\n  },\n  "babel": {\n    "presets": ["env"]\n  },\n  "devDependencies": {\n    "@babel/core": "^7.12.3",\n    "@babel/preset-env": "^7.12.1",\n    "@babel/register": "^7.12.1"\n  }\n}\n')),(0,i.kt)("p",null,"Example of how to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," transpiler for your ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pine": {\n    "require": ["ts-node/register"]\n  },\n  "devDependencies": {\n    "ts-node": "^9.0.0",\n    "typescript": "^4.0.5"\n  }\n}\n')),(0,i.kt)("p",null,"Example of how to use ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," transpiler for your ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.[j|t]s")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pine": {\n    "require": ["esbuild-register"]\n  },\n  "devDependencies": {\n    "esbuild-register": "^2.3.0"\n  }\n}\n')),(0,i.kt)("p",null,"Example of how to use ",(0,i.kt)("a",{parentName:"p",href:"https://swc.rs/"},"swc")," transpiler for your ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.[j|t]s")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pine": {\n    "require": ["@swc-node/register"]\n  },\n  "devDependencies": {\n    "@swc-node/register": "^1.3.6"\n  }\n}\n')))}d.isMDXComponent=!0}}]);