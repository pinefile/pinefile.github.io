"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{2198:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294);function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var i=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a},l=n(5257),s=n(9960),c=n(2263),o="heroBanner_qdFl",u="buttons_AeoN",m=n(3117),d="features_xdhU",f=[{title:"\u26a1\ufe0f Easy to use and learn",description:"With a few built-in functions you don't need to learn that much before using Pine. You can start right away."},{title:"\ud83d\udca1 Use existing npm packages",description:"Instead of having a lot of built-in functions or plugins you can just use an existing npm package to write your task."},{title:"\ud83d\udcaa Flexible",description:"Pine is a flexible task runner that just works and can be used with TypeScript and other JavaScript-transpilers."}];function p(e){var t=e.title,n=e.description;return a.createElement("div",{className:i("col col--4")},a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,n)))}function h(){return a.createElement("section",{className:d},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},f.map((function(e,t){return a.createElement(p,(0,m.Z)({key:t},e))})))))}var g=function(){var e=(0,c.Z)().siteConfig,t=e.baseUrl;return a.createElement("header",{className:i("hero hero--primary",o)},a.createElement("div",{className:"container"},a.createElement("div",null,a.createElement("img",{src:t+"img/logo.png",alt:"Pine",width:"100px",height:"100px"})),a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",null,e.tagline),a.createElement("div",{className:u},a.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs"},"Getting started"))))};function E(){var e=(0,c.Z)().siteConfig;return a.createElement(l.Z,{title:e.title,description:"Small JavaScript-based task runner for node.js"},a.createElement(g,null),a.createElement("main",null,a.createElement(h,null)))}}}]);