(()=>{"use strict";({432:function(){var t=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(c,o){function r(t){try{l(i.next(t))}catch(t){o(t)}}function u(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,u)}l((i=i.apply(t,e||[])).next())}))};const e=document.querySelector("#canvas")||document.createElement("canvas"),n=e.getContext("2d"),i=document.querySelector("#startBtn");null==i||i.addEventListener("click",(()=>{t(void 0,void 0,void 0,(function*(){e.width=window.innerWidth,e.height=window.innerHeight,null==n||(n.fillStyle="red"),null==n||n.fillRect(0,0,e.width,e.height),e.requestFullscreen&&(yield e.requestFullscreen())}))}))}})[432]()})();