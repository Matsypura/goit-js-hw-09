var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const i={form:document.querySelector(".form")},l={useIcon:!1};function u(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function s({position:e,delay:o}){return r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`,l)}function f({position:e,delay:o}){return r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`,l)}i.form.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:n,amount:t}=i.form.elements;let r=Number(o.value);const l=Number(n.value),a=Number(t.value);for(let e=1;e<=a;e+=1)u(e,r).then(s).catch(f),r+=l;i.form.reset()}));
//# sourceMappingURL=03-promises.245acc67.js.map
