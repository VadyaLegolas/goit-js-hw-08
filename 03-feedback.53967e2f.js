!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};let n={FEEDBACK_FORM_STATE:"feedback-form-state"};var o={},i="Expected a function",r=0/0,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=f.test(e);return o||l.test(e)?c(e.slice(2),o?2:8):u.test(e)?r:+e}o=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(i);function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function T(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||m&&o>=a}function S(){var e,n,o,i=y();if(T(i))return O(i);f=setTimeout(S,(e=i-l,n=i-c,o=t-e,m?v(o,a-n):o))}function O(e){return(f=void 0,d&&o)?g(e):(o=r=void 0,u)}function F(){var e,n=y(),i=T(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(S,t),s?g(e):u;if(m)return f=setTimeout(S,t),g(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=E(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?p(E(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),F.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},F.flush=function(){return void 0===f?u:O(y())},F}(e,t,{leading:o,maxWait:t,trailing:r})};let T={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]'),submitBtn:document.querySelector('button[type="submit"]')},S=JSON.parse(localStorage.getItem(n.FEEDBACK_FORM_STATE))??{};T.form.addEventListener("input",((e=o)&&e.__esModule?e.default:e)(function(e){S[e.target.name]=e.target.value,localStorage.setItem(n.FEEDBACK_FORM_STATE,JSON.stringify(S))},500)),T.form.addEventListener("submit",function(e){e.preventDefault(),console.log("FormData: ",JSON.parse(localStorage.getItem(n.FEEDBACK_FORM_STATE))),e.currentTarget.reset(),localStorage.removeItem(n.FEEDBACK_FORM_STATE)}),S.email&&(T.email.value=S.email),S.message&&(T.message.value=S.message)}();
//# sourceMappingURL=03-feedback.53967e2f.js.map
