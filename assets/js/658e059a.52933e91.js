"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=l,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),l=(n(7294),n(3905));const o={},a="Global",i={unversionedId:"commands/global",id:"commands/global",title:"Global",description:"Since 1.6.0",source:"@site/docs/commands/global.md",sourceDirName:"commands",slug:"/commands/global",permalink:"/docs/commands/global",draft:!1,editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/commands/global.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Utils",permalink:"/docs/functions/utils"},next:{title:"Custom executable",permalink:"/docs/advanced/custom-executable"}},p={},c=[{value:"Example",id:"example",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"global"},"Global"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since 1.6.0")),(0,l.kt)("p",null,"Run tasks in global pinefile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pine global <task> <options>\n")),(0,l.kt)("p",null,"The global command will look for pinefiles in:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Your home folder, e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"~/pinefile.js")),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.pine/")," folder, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.pine/pinefile.js"))),(0,l.kt)("p",null,"Or you can load files anywhere with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--file")," flag. This flag dosen't work with the ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," command."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pine global")," will run ",(0,l.kt)("inlineCode",{parentName:"p"},"~/pinefile.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pine/pinefile.js")," default task"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pine --file=$HOME/.pine/config.js")," will run a single task file that just exports a default function."))}u.isMDXComponent=!0}}]);