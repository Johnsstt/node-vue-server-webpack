webpackJsonp([1],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}o(1),o(302);var r=o(300),a=n(r),i=o(301),c=n(i),u=o(303),l=n(u);a["default"].use(c["default"]),a["default"].use(l["default"]);var f=new c["default"]({history:!0,saveScrollPosition:!0});f.map({"/":{component:function(e){o.e(2,function(){var t=o(304)["default"];e(t)})}},"/search/:keyword":{component:function(e){o.e(3,function(){var t=o(308)["default"];e(t)})},subRoutes:{"/":{component:function(e){o.e(4,function(){var t=o(312)["default"];e(t)})}},"/panda":{component:function(e){o.e(4,function(){var t=o(312)["default"];e(t)})}},"/huya":{component:function(e){o.e(5,function(){var t=o(317)["default"];e(t)})}},"/douyu":{component:function(e){o.e(6,function(){var t=o(322)["default"];e(t)})}},"/bili":{component:function(e){o.e(7,function(){var t=o(327)["default"];e(t)})}}}},"/video":{component:function(e){o.e(8,function(){var t=o(332)["default"];e(t)})}}}),f.redirect({"*":"/"});var s=a["default"].extend({});f.start(s,"#app")},302:function(e,t){},303:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=o(299),i=n(a),c={};c.install=function(e,t){e.cookie=function(e,t,o){var n,r,a,i;return arguments.length>1&&"[object Object]"!==String(t)?(o=$.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires&&(n=24*o.expires*60*60*1e3,r=o.expires=new Date,r.setTime(r.getTime()+n)),t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:encodeURIComponent(t),o.expires?"; expires="+o.expires.toUTCString():"","; path=/",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")):(o=t||{},i=o.raw?function(e){return e}:decodeURIComponent,(a=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?i(a[1]):null)},e.prototype.goLoginPage=function(e,t){$.device.isWeixin?window.location.href=i["default"].formatWeixinUrl("/webapp"+t):e.$router.go("/webapp/login")},e.prototype.goChatUrl=function(e){var t=$.localStorage.getItem("webapp_userInfo");t?e.$router.go("/webapp/chat"):$.device.isWeixin?window.location.href=i["default"].formatWeixinUrl("/webapp/chat"):e.$router.go("/webapp/login")},e.prototype.goBack=function(e){var t=void 0;try{t=e.$router._currentTransition.from.path,t?window.history.back():e.$router.replace("/")}catch(o){e.$router.replace("/")}},e.prototype.goRoute=function(e,t){t.$router.go(e)},e.prototype.showTopBar=window.showTopBar;var o=navigator.userAgent,n=o.match(/ChezhilWebview/);e.prototype.czl_webview=!!n,e.prototype.$device=function(e){return $.device[e]},$.localStorage={getItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":r(localStorage)))try{return JSON.parse(localStorage.getItem(e))}catch(t){alert("本站无痕浏览模式,请关闭后再试!")}},setItem:function(e,t){if("object"===("undefined"==typeof localStorage?"undefined":r(localStorage)))try{return localStorage.setItem(e,JSON.stringify(t))}catch(o){alert("请关闭[无痕浏览]模式后再试!")}},removeItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":r(localStorage)))try{return localStorage.removeItem(e)}catch(t){alert("请关闭[无痕浏览]模式后再试!")}},getUseSize:function(){if("object"===("undefined"==typeof localStorage?"undefined":r(localStorage)))try{return JSON.stringify(localStorage).length}catch(e){alert("请关闭[无痕浏览]模式后再试!")}}},$.saveUserInfo=function(e){if(e?$.localStorage.setItem("webapp_userInfo",e):$.localStorage.removeItem("webapp_userInfo"),e&&e.car&&e.car.type_id>0){var t={brand_id:e.car.brand_id,brand_name:e.car.brand_name,series_id:e.car.series_id,series_name:e.car.series_name,type_id:e.car.type_id,type_name:e.car.type_name};$.localStorage.setItem("myCar",t)}else $.localStorage.removeItem("myCar")},$.ajaxSettings.timeout=2e4,$.ajaxSettings.beforeSend=function(e,t){e.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")},$.ajaxSettings.complete=function(e,t){if("abort"==t)$.toast("请求失败");else if("timeout"==t)$.toast("请求超时");else if("error"==t)try{var o=JSON.parse(e.responseText);$.toast(o.message)}catch(n){$.toast("服务器错误")}},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}},t["default"]=c}});
//# sourceMappingURL=web_app.d1717c49.js.map