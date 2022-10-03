"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[269],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(t),f=o,m=g["".concat(c,".").concat(f)]||g[f]||u[f]||l;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(3117),o=(t(7294),t(3905));const l={},a="Log",i={unversionedId:"functions/log",id:"functions/log",title:"Log",description:"Pine has a built-in logger which support different log levels. You can configure this or set process.env.LOG_LEVEL",source:"@site/docs/functions/log.md",sourceDirName:"functions",slug:"/functions/log",permalink:"/docs/functions/log",draft:!1,editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/functions/log.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Configure",permalink:"/docs/functions/config"},next:{title:"Parallel",permalink:"/docs/functions/parallel"}},c={},p=[{value:"Info",id:"info",level:2},{value:"Warning",id:"warning",level:2},{value:"Error",id:"error",level:2},{value:"Create logger",id:"create-logger",level:2},{value:"Configure custom logger",id:"configure-custom-logger",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log"},"Log"),(0,o.kt)("p",null,"Pine has a built-in logger which support different log levels. You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/config"},"configure")," this or set ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.LOG_LEVEL")),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\xa0log } from '@pinefile/pine';\n\nexport default {\n  example: () => {\n    log.info(\"Foo\");\n  },\n};\n")),(0,o.kt)("h2",{id:"warning"},"Warning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\xa0log } from '@pinefile/pine';\n\nexport default {\n  example: () => {\n    log.warn(\"Foo\");\n  },\n};\n")),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\xa0log } from '@pinefile/pine';\n\nexport default {\n  example: () => {\n    log.error(\"Foo\");\n  },\n};\n")),(0,o.kt)("h2",{id:"create-logger"},"Create logger"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"createLogger")," you can create your own logger with custom prefix"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createLogger } from '@pinefile/pine';\n\nconst log = createLogger({\n  prefix: '[pine]'\n});\n\nexport default {\n  example: () => {\n    log.info('Foo');\n  },\n};\n")),(0,o.kt)("h2",{id:"configure-custom-logger"},"Configure custom logger"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since 1.1.0")),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," you can set your custom logger so the core of Pine uses the same one, instead of the built in. To do this you need to follow the simple log api that Pine uses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const customLogger = {\n  info: (...msg) => console.log(...msg)\n  warn: (...msg) => console.warn(...msg),\n  error: (...msg) => console.error(...msg),\n};\n")),(0,o.kt)("p",null,"With TypeScript you can import and extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Logger } from '@pinefile/pine';\n\nclass CustomLogger extends Logger {\n  ...\n}\n")),(0,o.kt)("p",null,"And then use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"configure({\n  logger: customLogger,\n});\n")))}u.isMDXComponent=!0}}]);