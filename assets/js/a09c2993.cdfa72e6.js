"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_position:1,slug:"/"},a="Getting started",l={unversionedId:"introduction",id:"introduction",title:"Getting started",description:"Install with npm",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"Color",permalink:"/docs/functions/color"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Install with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save @pinefile/pine\n")),(0,i.kt)("p",null,"Then create ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pinefile.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { run }\xa0from \'@pinefile/pine\';\n\nexport const build = () => {\n  console.log("Building...");\n};\n\nexport const test = async () => {\n  await run("jest");\n};\n')),(0,i.kt)("p",null,"or by using default export"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { run }\xa0from \'@pinefile/pine\';\n\nexport default {\n  build: () => {\n    console.log("Building...");\n  },\n  test: async () => {\n    await run("jest");\n  },\n};\n')),(0,i.kt)("p",null,"Then run it! It is best to either place ",(0,i.kt)("inlineCode",{parentName:"p"},"pine")," inside a npm run script or run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx pine build\n")),(0,i.kt)("p",null,"From version 1.6.0 you can create ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/global"},"global")," pinefiles."))}u.isMDXComponent=!0}}]);