/*! For license information please see form-validation.js.LICENSE.txt */
(globalThis.webpackChunkredsparrow=globalThis.webpackChunkredsparrow||[]).push([[58],{3519:e=>{var t;window,t=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.ts")}({"./src/index.ts":function(e,t,r){"use strict";r.r(t),r.d(t,"MvcValidationProviders",(function(){return a})),r.d(t,"ValidationService",(function(){return i}));function n(e,t){var r=t.substr(2),n=e.lastIndexOf(".");if(n>-1){var a=e.substr(0,n)+"."+r,i=document.getElementsByName(a)[0];if(i)return i}return document.getElementsByName(r)[0]}var a=function(){this.required=function(e,t,r){return Boolean(e)},this.stringLength=function(e,t,r){if(!e)return!0;if(r.min){var n=parseInt(r.min);if(e.length<n)return!1}if(r.max){var a=parseInt(r.max);if(e.length>a)return!1}return!0},this.compare=function(e,t,r){if(!r.other)return!0;var a=n(t.name,r.other);return!a||a.value===e},this.range=function(e,t,r){if(!e)return!0;var n=parseFloat(e);return!(isNaN(n)||r.min&&n<parseFloat(r.min)||r.max&&n>parseFloat(r.max))},this.regex=function(e,t,r){return!e||!r.pattern||new RegExp(r.pattern).test(e)},this.email=function(e,t,r){return!e||/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(e)},this.creditcard=function(e,t,r){if(!e)return!0;if(/[^0-9 \-]+/.test(e))return!1;var n,a,i=0,o=0,s=!1;if((e=e.replace(/\D/g,"")).length<13||e.length>19)return!1;for(n=e.length-1;n>=0;n--)a=e.charAt(n),o=parseInt(a,10),s&&(o*=2)>9&&(o-=9),i+=o,s=!s;return i%10==0},this.url=function(e,t,r){return!e||new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i").test(e)},this.phone=function(e,t,r){return!e||!/[\+\-\s][\-\s]/g.test(e)&&/^\+?[0-9\-\s]+$/.test(e)},this.remote=function(e,t,r){if(!e)return!0;for(var a=r.additionalfields.split(","),i={},o=0,s=a;o<s.length;o++){var u=s[o],d=u.substr(2),l=n(t.name,u);Boolean(l&&l.value)&&(i[d]=l.value)}var f=r.url,c=[];for(var d in i){var x=encodeURIComponent(d)+"="+encodeURIComponent(i[d]);c.push(x)}var v=c.join("&");return new Promise((function(e,t){var n=new XMLHttpRequest;if("Post"===r.type){var a=new FormData;for(var o in i)a.append(o,i[o]);n.open("post",f),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(v)}else n.open("get",f+"?"+v),n.send();n.onload=function(r){if(n.status>=200&&n.status<300){var a=JSON.parse(n.responseText);e(a)}else t({status:n.status,statusText:n.statusText,data:n.responseText})},n.onerror=function(e){t({status:n.status,statusText:n.statusText,data:n.responseText})}}))}},i=function(){function e(){this.providers={},this.messageFor={},this.elementUIDs=[],this.elementByUID={},this.formInputs={},this.validators={},this.elementEvents={},this.summary={},this.debounce=300}return e.prototype.addProvider=function(e,t){this.providers[e]||(this.providers[e]=t)},e.prototype.addMvcProviders=function(){var e=new a;this.addProvider("required",e.required),this.addProvider("length",e.stringLength),this.addProvider("maxlength",e.stringLength),this.addProvider("minlength",e.stringLength),this.addProvider("equalto",e.compare),this.addProvider("range",e.range),this.addProvider("regex",e.regex),this.addProvider("creditcard",e.creditcard),this.addProvider("email",e.email),this.addProvider("url",e.url),this.addProvider("phone",e.phone),this.addProvider("remote",e.remote)},e.prototype.scanMessages=function(){for(var e=document.querySelectorAll("[data-valmsg-for]"),t=0;t<e.length;t++){var r=e[t],n=r.getAttribute("data-valmsg-for");this.messageFor[n]||(this.messageFor[n]=[]),this.messageFor[n].push(r)}},e.prototype.parseDirectives=function(e){for(var t={},r={},n="data-val-".length,a=0;a<e.length;a++){var i=e[a];if(0===i.name.indexOf("data-val-")){var o=i.name.substr(n);r[o]=i.value}}var s=function(e){if(-1===e.indexOf("-")){for(var n=Object.keys(r).filter((function(t){return t!==e&&0===t.indexOf(e)})),a={error:r[e],params:{}},i=(e+"-").length,o=0;o<n.length;o++){var s=r[n[o]],u=n[o].substr(i);a.params[u]=s}t[e]=a}};for(var o in r)s(o);return t},e.prototype.guid4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},e.prototype.getElementUID=function(e){var t=this.elementUIDs.filter((function(t){return t.node===e}))[0];if(t)return t.uid;var r=this.guid4();return this.elementUIDs.push({node:e,uid:r}),this.elementByUID[r]=e,r},e.prototype.getFormValidationTask=function(e){var t=this.formInputs[e];if(!t||0===t.length)return null;for(var r=[],n=0;n<t.length;n++){var a=t[n];r.push(this.validators[a])}var i=r.map((function(e){return e()}));return Promise.all(i).then((function(e){return e.every((function(e){return e}))}))},e.prototype.trackFormInput=function(e,t){var r=this,n=this.getElementUID(e);if(this.formInputs[n]||(this.formInputs[n]=[]),-1===this.formInputs[n].indexOf(t)&&this.formInputs[n].push(t),!this.elementEvents[n]){var a=function(t){var a=r.getFormValidationTask(n);a&&(t.preventDefault(),a.then((function(t){t&&e.submit()})).catch((function(e){console.log(e)})))};e.addEventListener("submit",a),e.addEventListener("reset",(function(e){for(var t=0,a=r.formInputs[n];t<a.length;t++){var i=a[t],o=r.elementByUID[i];o.classList.remove("input-validation-error"),o.classList.remove("input-validation-valid");var s=r.messageFor[o.name];if(s)for(var u=0;u<s.length;u++)s[u].innerHTML="";delete r.summary[i]}r.renderSummary()})),this.elementEvents[n]=a}},e.prototype.addInput=function(e){var t=this,r=this.getElementUID(e),n=this.parseDirectives(e.attributes),a=this.createValidator(e,n);if(this.validators[r]=a,e.form&&this.trackFormInput(e.form,r),!this.elementEvents[r]){var i,o=function(e){var n=t.validators[r];clearTimeout(i),i=setTimeout(n,t.debounce)};"select"===e.tagName.toLowerCase()?e.addEventListener("change",o):e.addEventListener("input",o),this.elementEvents[r]=o}},e.prototype.scanInputs=function(){for(var e=document.querySelectorAll('[data-val="true"]'),t=0;t<e.length;t++){var r=e[t];this.addInput(r)}},e.prototype.createSummaryDOM=function(){if(!Object.keys(this.summary).length)return null;var e=document.createElement("ul");for(var t in this.summary){var r=document.createElement("li");r.innerHTML=this.summary[t],e.appendChild(r)}return e},e.prototype.renderSummary=function(){var e=document.querySelectorAll('[data-valmsg-summary="true"]');if(e.length){var t=JSON.stringify(this.summary,Object.keys(this.summary).sort());if(t!==this.renderedSummaryJSON){this.renderedSummaryJSON=t;for(var r=this.createSummaryDOM(),n=0;n<e.length;n++){var a=e[n];a.innerHTML="",r?(a.className="validation-summary-errors",a.appendChild(r.cloneNode(!0))):a.className="validation-summary-valid"}}}},e.prototype.addError=function(e,t){var r=this.messageFor[e.name];if(r)for(var n=0;n<r.length;n++)r[n].innerHTML=t,r[n].className="field-validation-error";e.classList.remove("input-validation-valid"),e.classList.add("input-validation-error");var a=this.getElementUID(e);this.summary[a]=t,this.renderSummary()},e.prototype.removeError=function(e){var t=this.messageFor[e.name];if(t)for(var r=0;r<t.length;r++)t[r].innerHTML="",t[r].className="field-validation-valid";e.classList.remove("input-validation-error"),e.classList.add("input-validation-valid");var n=this.getElementUID(e);delete this.summary[n],this.renderSummary()},e.prototype.createValidator=function(e,t){var r=this;return function(){return n=r,a=void 0,o=function(){var r,n,a,i,o,s,u,d,l,f;return function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(c){switch(c.label){case 0:for(n in r=[],t)r.push(n);a=0,c.label=1;case 1:return a<r.length?(i=r[a],o=t[i],(s=this.providers[i])?(u=s(e.value,e,o.params),d=!1,l=o.error,"boolean"!=typeof u?[3,2]:(d=u,[3,5])):(console.log("aspnet-validation provider not implemented: "+i),[3,6])):[3,7];case 2:return"string"!=typeof u?[3,3]:(d=!1,l=u,[3,5]);case 3:return[4,u];case 4:"boolean"==typeof(f=c.sent())?d=f:(d=!1,l=f),c.label=5;case 5:if(!d)return this.addError(e,l),[2,!1];c.label=6;case 6:return a++,[3,1];case 7:return this.removeError(e),[2,!0]}}))},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{u(o.next(e))}catch(e){t(e)}}function s(e){try{u(o.throw(e))}catch(e){t(e)}}function u(t){t.done?e(t.value):new i((function(e){e(t.value)})).then(r,s)}u((o=o.apply(n,a||[])).next())}));var n,a,i,o}},e.prototype.bootstrap=function(){var e=this;this.addMvcProviders(),window.addEventListener("load",(function(t){e.scanMessages(),e.scanInputs()}))},e}()}})},e.exports=t()},5815:(e,t,r)=>{"use strict";(new(r(3519).ValidationService)).bootstrap()}},0,[[5815,666]]]);