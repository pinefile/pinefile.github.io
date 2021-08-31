"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),f=l(t),d=a,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(h,i(i({ref:e},c),{},{components:t})):r.createElement(h,i({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},244:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i={},u="Runners",s={unversionedId:"advanced/runners",id:"advanced/runners",isDocsHomePage:!1,title:"Runners",description:"Runners functions are a way to run a task in another way than the standard way, e.g parallel and series function does this, they use bach under the hood to run tasks in parallel or series.",source:"@site/docs/advanced/runners.md",sourceDirName:"advanced",slug:"/advanced/runners",permalink:"/docs/advanced/runners",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/advanced/runners.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Plugins",permalink:"/docs/advanced/plugins"},next:{title:"Split up tasks",permalink:"/docs/advanced/split-up-tasks"}},l=[{value:"Create runner function",id:"create-runner-function",children:[]},{value:"Task based runner functions",id:"task-based-runner-functions",children:[]},{value:"Global runner function for all tasks",id:"global-runner-function-for-all-tasks",children:[]}],c={toc:l};function p(n){var e=n.components,t=(0,a.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runners"},"Runners"),(0,o.kt)("p",null,"Runners functions are a way to run a task in another way than the standard way, e.g ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/parallel"},"parallel")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/series"},"series")," function does this, they use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bach"},"bach")," under the hood to run tasks in parallel or series."),(0,o.kt)("h2",{id:"create-runner-function"},"Create runner function"),(0,o.kt)("p",null,"The api to create a runner function is quite small and you can use them for both tasks and as a global runner, the big different between them is that you do it in another way. Pine provide a function to wrap the runner with a function that returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function. This return is important for all runners and you can do it by yourself and not use the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.createRunner")," function."),(0,o.kt)("p",null,"The returning function can take a ",(0,o.kt)("inlineCode",{parentName:"p"},"done")," callback argument where you can send in errors. You can also return a promise reject. To resolve a task function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pinefile")," object you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"api.resolveTask")," function. This is because the object isn't the same as in your Pinefile."),(0,o.kt)("p",null,"You can always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," function to set and ",(0,o.kt)("inlineCode",{parentName:"p"},"getConfig")," function to get the values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { api } = require('@pinefile/pine');\n\n// with create runner function\nconst runner = api.createRunner(async (pinefile, name, argv) => {\n  const task = api.resolveTask(pinefile, name);\n\n  if (task) {\n    await task(argv);\n  }\n});\n\n// without create runner function\nconst runner = async (pinefile, name, argv) => {\n  return async () => {\n    const task = api.resolveTask(pinefile, name);\n\n    if (task) {\n      await task(argv);\n    }\n  }\n});\n")),(0,o.kt)("h2",{id:"task-based-runner-functions"},"Task based runner functions"),(0,o.kt)("p",null,"Every task in pine can be a runner function that does something completely different than the default behaviour. You can combine a task based runner function with the actual task, here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { api, log } = require('@pinefile/pine');\n\nmodule.exports = {\n  hello: async (pinefile, name, argv) => {\n    if (argv) {\n      return async () => {\n        const task = api.resolveTask(pinefile, name);\n\n        if (task) {\n          await task(argv);\n        }\n      };\n    }\n\n    // pinefile arg is argv at this point.\n    log.info(`Hello ${pinefile.name}`);\n  },\n};\n")),(0,o.kt)("p",null,"Then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pine hello --name Foo")," and it will run a custom runner and then execute the task function."),(0,o.kt)("p",null,"You can see different example of runner functions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinefile/pine/blob/master/packages/pine/test/fixtures/pinefile.runner.js"},"here")),(0,o.kt)("h2",{id:"global-runner-function-for-all-tasks"},"Global runner function for all tasks"),(0,o.kt)("p",null,"Global runner functions are used for all tasks and it changes the way a task is executed. To configure the global runner you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," function and send in a runner function to the config object."),(0,o.kt)("p",null,"Runner functions do support options and that can be handy if you want to configure your runner. The options object will be sent in as a fourth argument to the runner function, here is a example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { api, configure, log } = require('@pinefile/pine');\n\n// with create runner function\nconst runner = api.createRunner(async (pinefile, name, argv, options = {}) => {\n  const task = api.resolveTask(pinefile, name);\n\n  if (task) {\n    await task(argv);\n  }\n});\n\nconfigure({\n  runner,\n});\n\nmodule.exports = {\n  hello: () => {\n    log.info(`Hello ${pinefile.name}`);\n  },\n};\n")),(0,o.kt)("p",null,"Global runner functions can take a optional options object so you can configure your runner function from the Pinefile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { api, configure, log } = require('@pinefile/pine');\n\n// with create runner function\nconst runner = api.createRunner(\n  async (pinefile, name, argv, options = { foo: 'standard' }) => {\n    const task = api.resolveTask(pinefile, name);\n    log.info(`Using: ${options.foo}`);\n\n    if (task) {\n      await task(argv);\n    }\n  }\n);\n\nconfigure({\n  runner: [\n    runner,\n    {\n      foo: 'bar',\n    },\n  ],\n});\n\nmodule.exports = {\n  hello: () => {\n    log.info(`Hello ${pinefile.name}`);\n  },\n};\n")))}p.isMDXComponent=!0}}]);