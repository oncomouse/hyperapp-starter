!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";e.b=function(n,e){var t,r=[],o=[],u=arguments.length;for(;u-- >2;)r.push(arguments[u]);for(;r.length;)if(Array.isArray(t=r.pop()))for(u=t.length;u--;)r.push(t[u]);else null!=t&&!0!==t&&!1!==t&&o.push(t);return"function"==typeof n?n(e||{},o):{name:n,props:e||{},children:o}},e.a=function(n,e,t,r){var o,u=[],c=r&&r.children[0]||null,i=c&&function n(e,t){return{name:e.nodeName.toLowerCase(),props:{},children:t.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e,t)})}}(c,[].map),a=p(n),f=p(e);return l(function n(e,t,r){for(var o in r)"function"==typeof r[o]?function(n,o){r[n]=function(n){return"function"==typeof(n=o(n))&&(n=n(v(e,a),r)),n&&n!==(t=v(e,a))&&!n.then&&l(a=d(e,p(t,n),a)),n}}(o,r[o]):n(e.concat(o),t[o]=t[o]||{},r[o]=p(r[o]))}([],a,f)),f;function s(){o=!o;var n=t(a,f);for(r&&!o&&(c=function n(e,t,r,o,c,i){if(o===r);else if(null==r)t=e.insertBefore(m(o,c),t);else if(o.name&&o.name===r.name){!function(n,e,t,r){for(var o in p(e,t))t[o]!==("value"===o||"checked"===o?n[o]:e[o])&&h(n,o,t[o],r,e[o]);t.onupdate&&u.push(function(){t.onupdate(n,e)})}(t,r.props,o.props,c=c||"svg"===o.name);for(var a=[],f={},s={},l=0;l<r.children.length;l++){a[l]=t.childNodes[l];var d=r.children[l],v=b(d);null!=v&&(f[v]=[a[l],d])}for(var l=0,g=0;g<o.children.length;){var d=r.children[l],k=o.children[g],v=b(d),j=b(k);if(s[v])l++;else if(null==j)null==v&&(n(t,a[l],d,k,c),g++),l++;else{var O=f[j]||[];v===j?(n(t,O[0],O[1],k,c),l++):O[0]?n(t,t.insertBefore(O[0],a[l]),O[1],k,c):n(t,a[l],null,k,c),g++,s[j]=k}}for(;l<r.children.length;){var d=r.children[l];null==b(d)&&y(t,a[l],d),l++}for(var l in f)s[f[l][1].props.key]||y(t,f[l][0],f[l][1])}else o.name===r.name?t.nodeValue=o:(t=e.insertBefore(m(o,c),i=t),y(e,i,r));return t}(r,c,i,i=n));n=u.pop();)n()}function l(){o||(o=!o,setTimeout(s))}function p(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t}function d(n,e,t){var r={};return n.length?(r[n[0]]=n.length>1?d(n.slice(1),e,t[n[0]]):e,p(t,r)):e}function v(n,e){for(var t=0;t<n.length;t++)e=e[n[t]];return e}function b(n){return n&&n.props?n.props.key:null}function h(n,e,t,r,o){if("key"===e);else if("style"===e)for(var u in p(o,t))n[e][u]=null==t||null==t[u]?"":t[u];else"function"==typeof t||e in n&&!r?n[e]=null==t?"":t:null!=t&&!1!==t&&n.setAttribute(e,t),null!=t&&!1!==t||n.removeAttribute(e)}function m(n,e){var t="string"==typeof n||"number"==typeof n?document.createTextNode(n):(e=e||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name):document.createElement(n.name);if(n.props){n.props.oncreate&&u.push(function(){n.props.oncreate(t)});for(var r=0;r<n.children.length;r++)t.appendChild(m(n.children[r],e));for(var o in n.props)h(t,o,n.props[o],e)}return t}function y(n,e,t,r){function o(){n.removeChild(function n(e,t,r){if(r=t.props){for(var o=0;o<t.children.length;o++)n(e.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,t))}t.props&&(r=t.props.onremove)?r(e,o):o()}}},function(n,e,t){"use strict";var r=t(7);t.d(e,"b",function(){return r.a});var o=t(8);t.d(e,"a",function(){return o.a});t(9)},function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"d",function(){return o}),t.d(e,"b",function(){return u}),t.d(e,"j",function(){return c}),t.d(e,"h",function(){return i}),t.d(e,"e",function(){return a}),t.d(e,"c",function(){return f}),t.d(e,"f",function(){return s}),t.d(e,"g",function(){return l}),t.d(e,"i",function(){return p});var r="action",o="frame",u="delay",c="time",i="log",a="http",f="event",s="keydown",l="keyup",p="random"},function(n,e,t){"use strict";e.b="UP";e.a="DOWN"},function(n,e,t){t(5),n.exports=t(6)},function(n,e){},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),o=t(1),u=t(10),c=t(11),i=t(12);Object(o.b)(r.a)(c.a,u.a,n=>Object(r.b)(i.a,{state:n}),document.body)},function(n,e,t){"use strict";e.a=function(n){return function(e,t,r,c){var f=function n(e){return Object.keys(e||{}).reduce(function(t,r){var o=e[r];return t[r]=u(o)?function(n){return function(e,t){var r=o(n);return r=u(r)?r(e,t):r,i(t,null,r)}}:n(o),t},{})}(t),s=u(r)?function(n,e){var t=r(n,e);return function n(e,t){if("object"==typeof t){for(var r in t.props){var u=t.props[r];o(u)&&(t.props[r]=a(e,u))}for(var c in t.children)n(e,t.children[c])}}(e,t),t}:void 0,l=n(e,f,s,c);return l}};var r=t(2),o=Array.isArray,u=function(n){return"function"==typeof n};function c(n,e){return function n(e,t){var r=e[t[0]];return 1===t.length?r:n(r,t.slice(1))}(n,e.split("."))}function i(n,e,t){if(!o(t))return t;if(o(t[0]))for(var u in t)i(n,e,t[u]);else{var a=t[0],f=t[1];switch(a){case r.a:c(n,f.name)(f.data);break;case r.d:requestAnimationFrame(function(e){c(n,f.action)(e)});break;case r.b:setTimeout(function(){c(n,f.action)(f.data)},f.duration);break;case r.j:c(n,f.action)(performance.now());break;case r.h:console.log.apply(null,f.args);break;case r.e:f.options=f.options||{},f.options.response=f.options.response||"json",fetch(f.url,f.options).then(function(n){return n[f.options.response]()}).then(function(e){c(n,f.action)(e)});break;case r.c:c(n,f.action)(e);break;case r.f:document.onkeydown=function(e){c(n,f.action)(e)};break;case r.g:document.onkeyup=function(e){c(n,f.action)(e)};break;case r.i:var s=Math.random()*(f.max-f.min)+f.min;c(n,f.action)(s)}}}function a(n,e){return function(t){i(n,t,e)}}},function(n,e,t){"use strict";e.a=function(n){return[r.c,{action:n}]};var r=t(2)},function(n,e,t){"use strict"},function(n,e,t){"use strict";var r=t(3);const o={[r.a]:()=>n=>({count:n.count-1}),[r.b]:()=>n=>({count:n.count+1})};e.a=o},function(n,e,t){"use strict";e.a={count:0}},function(n,e,t){"use strict";var r=t(0),o=t(13),u=t(3),c=t(14);const i=Object(c.a)("h1")({fontFamily:"Times New Roman",color:"fuschia"});e.a=(({state:n})=>Object(r.b)("main",{className:"measure-l tc sans-serif ml-auto mr-auto"},Object(r.b)(i,null,n.count),Object(r.b)(o.a,{clickSymbol:u.a,value:"-"}),Object(r.b)(o.a,{clickSymbol:u.b,value:"+"})))},function(n,e,t){"use strict";var r=t(0),o=t(1);e.a=(({clickSymbol:n,value:e,color:t})=>Object(r.b)("button",{className:(({color:n="green"})=>`f5 fw6 link dim br3 ba bw1 ph3 pv2 mh1 mb2 dib ${n} b--${n}`)(t||"green"),onclick:Object(o.a)(n)},e))},function(n,e,t){"use strict";var r=t(0),o=t(15);const u=Object(o.a)(r.b);e.a=u},function(n,e,t){"use strict";var r=0,o=document.head.appendChild(document.createElement("style")).sheet,u=JSON.stringify.bind(null);function c(n,e){return n+(/^\w/.test(e)?" ":"")+e}function i(n,e,t,u){for(var a in e=e||"",u=u||"p"+(r++).toString(36),n){var f=n[a];if("object"==typeof f){var s=/^@/.test(a)?a:null;i(f,s?e:c(e,a),s,u)}}var l;return l=function(n,e,t){var r=[];for(var o in e)"object"!=typeof e[o]&&r.push(o.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+e[o]+";");var u="."+n+"{"+r.join("")+"}";return t?t+"{"+u+"}":u}(c(u,e),n,t),o.insertRule(l,0),u}e.a=function(n){return function(e){var t={};return function(r){var o="function"==typeof r;return function(c,a){var f=u(c=c||{});t[f]||(t[f]=o&&i(r(c))||i(r));var s=n(e,c,a);return s.props.class=[c.class,t[f]].filter(Boolean).join(" "),s}}}}}]);