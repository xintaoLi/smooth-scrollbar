!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("smooth-scrollbar")):"function"==typeof define&&define.amd?define(["smooth-scrollbar"],e):"object"==typeof exports?exports.OverscrollPlugin=e(require("smooth-scrollbar")):t.OverscrollPlugin=e(t.Scrollbar)}(this,(function(t){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(e,o){e.exports=t},function(t,e,o){t.exports=o(2)},function(t,e,o){"use strict";o.r(e),o.d(e,"OverscrollEffect",(function(){return h}));var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};var r=function(){return(r=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(t){var e=function(t){return t.touches?t.touches[t.touches.length-1]:t}(t);return{x:e.clientX,y:e.clientY}}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError,new WeakMap;var s=["webkit","moz","ms","o"],c=new RegExp("^-(?!(?:".concat(s.join("|"),")-)"));function a(t,e){e=function(t){var e={};return Object.keys(t).forEach((function(o){if(c.test(o)){var i=t[o];o=o.replace(/^-/,""),e[o]=i,s.forEach((function(t){e["-".concat(t,"-").concat(o)]=i}))}else e[o]=t[o]})),e}(e),Object.keys(e).forEach((function(o){var i=o.replace(/^-/,"").replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}));t.style[i]=e[o]}))}var l=function(){function t(t){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=n(t)}return t.prototype.update=function(t){var e=this.velocity,o=this.updateTime,i=this.lastPosition,r=Date.now(),s=n(t),c={x:-(s.x-i.x),y:-(s.y-i.y)},a=r-o||16.7,l=c.x/a*16.7,u=c.y/a*16.7;e.x=l*this.velocityMultiplier,e.y=u*this.velocityMultiplier,this.delta=c,this.updateTime=r,this.lastPosition=s},t}();function u(t,e,o){return Math.max(e,Math.min(o,t))}!function(){function t(){this._touchList={}}Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!1,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?r({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?r({},t.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(t){var e=1-t,o={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach((function(t){for(var r=Math.abs(i[t])<=10?0:i[t];0!==r;)o[t]+=r,r=r*e|0})),o},t.prototype.track=function(t){var e=this,o=t.targetTouches;return Array.from(o).forEach((function(t){e._add(t)})),this._touchList},t.prototype.update=function(t){var e=this,o=t.touches,i=t.changedTouches;return Array.from(o).forEach((function(t){e._renew(t)})),this._setActiveID(i),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach((function(t){e._delete(t)}))},t.prototype._add=function(t){this._has(t)&&this._delete(t);var e=new l(t);this._touchList[t.identifier]=e},t.prototype._renew=function(t){if(this._has(t)){var e=this._touchList[t.identifier];null==e||e.update(t)}},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){var t=this._touchList,e=this._activeTouchID;return t[null!=e?e:0]}}();var h,p=o(0),f=function(){function t(t){this._scrollbar=t}return t.prototype.render=function(t){var e=t.x,o=void 0===e?0:e,i=t.y,r=void 0===i?0:i,n=this._scrollbar,s=n.size,c=n.track,l=n.offset;if(a(n.contentEl,{"-transform":"translate3d(".concat(-(l.x+o),"px, ").concat(-(l.y+r),"px, 0)")}),o){c.xAxis.show();var u=s.container.width/(s.container.width+Math.abs(o));a(c.xAxis.thumb.element,{"-transform":"translate3d(".concat(c.xAxis.thumb.offset,"px, 0, 0) scale3d(").concat(u,", 1, 1)"),"-transform-origin":o<0?"left":"right"})}r&&(c.yAxis.show(),u=s.container.height/(s.container.height+Math.abs(r)),a(c.yAxis.thumb.element,{"-transform":"translate3d(0, ".concat(c.yAxis.thumb.offset,"px, 0) scale3d(1, ").concat(u,", 1)"),"-transform-origin":r<0?"top":"bottom"})),c.autoHideOnIdle()},t}(),_=function(){function t(t){this._scrollbar=t,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),a(this._canvas,{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"})}return t.prototype.mount=function(){this._scrollbar.containerEl.appendChild(this._canvas)},t.prototype.unmount=function(){this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)},t.prototype.adjust=function(){var t=this._scrollbar.size,e=window.devicePixelRatio||1,o=t.container.width*e,i=t.container.height*e;o===this._canvas.width&&i===this._canvas.height||(this._canvas.width=o,this._canvas.height=i,this._ctx.scale(e,e))},t.prototype.recordTouch=function(t){var e=t.touches[t.touches.length-1];this._touchX=e.clientX,this._touchY=e.clientY},t.prototype.render=function(t,e){var o=t.x,i=void 0===o?0:o,r=t.y,n=void 0===r?0:r;if(i||n){a(this._canvas,{display:"block"});var s=this._scrollbar.size;this._ctx.clearRect(0,0,s.container.width,s.container.height),this._ctx.fillStyle=e,this._renderX(i),this._renderY(n)}else a(this._canvas,{display:"none"})},t.prototype._getMaxOverscroll=function(){var t=this._scrollbar.options.plugins.overscroll;return t&&t.maxOverscroll?t.maxOverscroll:150},t.prototype._renderX=function(t){var e=this._scrollbar.size,o=this._getMaxOverscroll(),i=e.container,r=i.width,n=i.height,s=this._ctx;s.save(),t>0&&s.transform(-1,0,0,1,r,0);var c=u(Math.abs(t)/o,0,.75),a=u(c,0,.25)*r,l=Math.abs(t),h=this._touchY||n/2;s.globalAlpha=c,s.beginPath(),s.moveTo(0,-a),s.quadraticCurveTo(l,h,0,n+a),s.fill(),s.closePath(),s.restore()},t.prototype._renderY=function(t){var e=this._scrollbar.size,o=this._getMaxOverscroll(),i=e.container,r=i.width,n=i.height,s=this._ctx;s.save(),t>0&&s.transform(1,0,0,-1,0,n);var c=u(Math.abs(t)/o,0,.75),a=u(c,0,.25)*r,l=this._touchX||r/2,h=Math.abs(t);s.globalAlpha=c,s.beginPath(),s.moveTo(-a,0),s.quadraticCurveTo(l,h,r+a,0),s.fill(),s.closePath(),s.restore()},t}();!function(t){t.BOUNCE="bounce",t.GLOW="glow"}(h||(h={}));var d=/wheel|touch/,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._glow=new _(e.scrollbar),e._bounce=new f(e.scrollbar),e._wheelScrollBack={x:!1,y:!1},e._lockWheel={x:!1,y:!1},e._touching=!1,e._amplitude={x:0,y:0},e._position={x:0,y:0},e._releaseWheel=function(t,e,o){var i;void 0===e&&(e=0);return function(){for(var o=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];clearTimeout(i),i=setTimeout((function(){t.apply(o,r)}),e)}}((function(){e._lockWheel.x=!1,e._lockWheel.y=!1}),30),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),Object.defineProperty(e.prototype,"_isWheelLocked",{get:function(){return this._lockWheel.x||this._lockWheel.y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_enabled",{get:function(){return!!this.options.effect},enumerable:!1,configurable:!0}),e.prototype.onInit=function(){var t=this._glow,e=this.options,o=this.scrollbar,i=e.effect;Object.defineProperty(e,"effect",{get:function(){return i},set:function(e){if(e){if(e!==h.BOUNCE&&e!==h.GLOW)throw new TypeError("unknow overscroll effect: ".concat(e));i=e,o.options.continuousScrolling=!1,e===h.GLOW?(t.mount(),t.adjust()):t.unmount()}else i=void 0}}),e.effect=i},e.prototype.onUpdate=function(){this.options.effect===h.GLOW&&this._glow.adjust()},e.prototype.onRender=function(t){if(this._enabled){this.scrollbar.options.continuousScrolling&&(this.scrollbar.options.continuousScrolling=!1);var e=t.x,o=t.y;!this._amplitude.x&&this._willOverscroll("x",t.x)&&(e=0,this._absorbMomentum("x",t.x)),!this._amplitude.y&&this._willOverscroll("y",t.y)&&(o=0,this._absorbMomentum("y",t.y)),this.scrollbar.setMomentum(e,o),this._render()}},e.prototype.transformDelta=function(t,e){if(this._lastEventType=e.type,!this._enabled||!d.test(e.type))return t;this._isWheelLocked&&/wheel/.test(e.type)&&(this._releaseWheel(),this._willOverscroll("x",t.x)&&(t.x=0),this._willOverscroll("y",t.y)&&(t.y=0));var o=t.x,i=t.y;switch(this._willOverscroll("x",t.x)&&(o=0,this._addAmplitude("x",t.x)),this._willOverscroll("y",t.y)&&(i=0,this._addAmplitude("y",t.y)),e.type){case"touchstart":case"touchmove":this._touching=!0,this._glow.recordTouch(e);break;case"touchcancel":case"touchend":this._touching=!1}return{x:o,y:i}},e.prototype._willOverscroll=function(t,e){if(!e)return!1;if(this._position[t])return!0;var o=this.scrollbar.offset[t],i=this.scrollbar.limit[t];return 0!==i&&u(o+e,0,i)===o&&(0===o||o===i)},e.prototype._absorbMomentum=function(t,e){var o=this.options,i=this._lastEventType,r=this._amplitude;d.test(i)&&(r[t]=u(e,-o.maxOverscroll,o.maxOverscroll))},e.prototype._addAmplitude=function(t,e){var o=this.options,i=this.scrollbar,r=this._amplitude,n=this._position,s=r[t],c=e*s<0,a=s+e*(1-(c?0:this._wheelScrollBack[t]?1:Math.abs(s/o.maxOverscroll)));r[t]=0===i.offset[t]?u(a,-o.maxOverscroll,0):u(a,0,o.maxOverscroll),c&&(n[t]=r[t])},e.prototype._render=function(){var t=this.options,e=this._amplitude,o=this._position;if(this._enabled&&(e.x||e.y||o.x||o.y)){var i=this._nextAmp("x"),n=this._nextAmp("y");switch(e.x=i.amplitude,o.x=i.position,e.y=n.amplitude,o.y=n.position,t.effect){case h.BOUNCE:this._bounce.render(o);break;case h.GLOW:this._glow.render(o,this.options.glowColor)}"function"==typeof t.onScroll&&t.onScroll.call(this,r({},o))}},e.prototype._nextAmp=function(t){var e=this.options,o=this._amplitude,i=this._position,r=1-e.damping,n=o[t],s=i[t],c=this._touching?n:n*r|0,a=c-s,l=s+a-(a*r|0);return!this._touching&&Math.abs(l)<Math.abs(s)&&(this._wheelScrollBack[t]=!0),this._wheelScrollBack[t]&&Math.abs(l)<=1&&(this._wheelScrollBack[t]=!1,this._lockWheel[t]=!0),{amplitude:c,position:l}},e.pluginName="overscroll",e.defaultOptions={effect:h.BOUNCE,onScroll:void 0,damping:.2,maxOverscroll:150,glowColor:"#87ceeb"},e}(p.ScrollbarPlugin);e.default=y}]).default}));