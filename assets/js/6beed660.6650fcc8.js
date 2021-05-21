(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[729],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,u(u({ref:n},l),{},{components:t})):r.createElement(m,u({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9064:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),u={},i={unversionedId:"advanced/plugins",id:"advanced/plugins",isDocsHomePage:!1,title:"Plugins",description:"There is different ways to create a plugin:",source:"@site/docs/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docs/advanced/plugins",editUrl:"https://github.com/pinefile/pinefile.github.io/edit/develop/docs/advanced/plugins.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom executable",permalink:"/docs/advanced/custom-executable"},next:{title:"Runners",permalink:"/docs/advanced/runners"}},c=[{value:"Pure functions",id:"pure-functions",children:[]},{value:"Runner function",id:"runner-function",children:[]}],s={toc:c};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There is different ways to create a plugin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pure functions, e.g ",(0,a.kt)("a",{parentName:"li",href:"/docs/functions/shell"},"shell")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/functions/run"},"run")),(0,a.kt)("li",{parentName:"ul"},"Runner functions that takes three or four arguments and returns a function.")),(0,a.kt)("h2",{id:"pure-functions"},"Pure functions"),(0,a.kt)("p",null,"Most of the functions that Pine exports is standalone functions, e.g ",(0,a.kt)("a",{parentName:"p",href:"/docs/functions/shell"},"shell")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/functions/run"},"run"),", so writing your own functions is easy. You can use build-it functions like the ",(0,a.kt)("a",{parentName:"p",href:"/docs/functions/config"},"getConfig")," to receive the configuration object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const echo = console.log;\n\nmodule.exports = {\n  example: () => {\n    echo('Foo');\n  },\n};\n")),(0,a.kt)("h2",{id:"runner-function"},"Runner function"),(0,a.kt)("p",null,"You can read more about runner functions ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/runners"},"here")))}l.isMDXComponent=!0}}]);