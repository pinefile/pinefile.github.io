"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},492:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return f}});var r=t(3117),o=t(102),l=(t(7294),t(3905)),i=["components"],a={},c="Global command",p={unversionedId:"commands/global",id:"commands/global",title:"Global command",description:"Since 1.6.0",source:"@site/docs/commands/global.md",sourceDirName:"commands",slug:"/commands/global",permalink:"/docs/commands/global",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/commands/global.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Utils",permalink:"/docs/functions/utils"},next:{title:"Custom executable",permalink:"/docs/advanced/custom-executable"}},u={},m=[{value:"Example",id:"example",level:2}],s={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"global-command"},"Global command"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since 1.6.0")),(0,l.kt)("p",null,"Run tasks in global pinefile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pine global <task> <options>\n")),(0,l.kt)("p",null,"The global command will look for pinefiles in:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Your home folder, e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"~/pinefile.js")),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.pine/")," directory."),(0,l.kt)("li",{parentName:"ul"},"Or anywhere with ",(0,l.kt)("inlineCode",{parentName:"li"},"--file")," flag.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pine global")," will run ",(0,l.kt)("inlineCode",{parentName:"p"},"~/pinefile.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pine/pinefile.js")," default task"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pine --file=$HOME/.pine/config.js")," will run a single task file that just exports a default function."))}f.isMDXComponent=!0}}]);