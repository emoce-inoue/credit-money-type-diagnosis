(()=>{var e={643:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".l-question__select"),t=document.querySelector(".c-full-button--result-disabled"),o=document.querySelector(".c-full-button--result-on"),n=document.querySelector(".l-loading"),r=new Set;e.forEach((function(n,l){n.querySelectorAll("button").forEach((function(s){s.addEventListener("click",(function(){if(!s.classList.contains("c-button--selected")){var i=n.querySelector(".c-button--selected");if(i&&i.classList.remove("c-button--selected"),s.classList.add("c-button--selected"),r.add(l),l<e.length-1){var c=e[l+1].closest(".l-question");c&&c.scrollIntoView({behavior:"smooth"})}r.size===e.length&&(t.classList.add("c-full-button--hidden"),o.classList.remove("c-full-button--hidden"))}}))}))})),o.addEventListener("click",(function(){n.classList.remove("l-loading--hidden");var t=0;e.forEach((function(e){var o=e.querySelector(".c-button--selected");o&&(t+=parseInt(o.getAttribute("data-point"),10))})),document.querySelectorAll(".l-result").forEach((function(e){return e.classList.add("l-result--hidden")}));var o;o=t>=41?"resultIruka":t>=31?"resultMaguro":t>=26?"resultKumanomi":t>=16?"resultKujira":t>=6?"resultUmigame":"resultTatsunootoshigo";var r=document.getElementById(o);r.classList.remove("l-result--hidden"),r.scrollIntoView({behavior:"smooth",block:"start"}),document.querySelector(".l-sns").classList.remove("l-sns--hidden"),document.querySelector(".l-look").classList.remove("l-look--triangle-hidden"),setTimeout((function(){n.classList.add("l-loading--hidden")}),1e3)}))}))},945:()=>{var e,t;e=document.querySelector('meta[name="viewport"]'),t=function(){var t=window.outerWidth>360?"width=device-width,initial-scale=1":"width=360";e.getAttribute("content")!==t&&e.setAttribute("content",t)},window.addEventListener("resize",t),t(),document.addEventListener("DOMContentLoaded",(function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("is-inview")}))}),{threshold:.1});document.querySelectorAll(".js-fade, .js-fade-up").forEach((function(t){e.observe(t)}));var t=document.querySelector(".l-fixed-item");if(t){var o=t.offsetHeight;document.querySelectorAll(".scroll-link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substring(1);if(""!==n){var r=document.getElementById(n).getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:r,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})}))}))}}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(945),o(643)})()})();