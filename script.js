// ==UserScript==
// @name         Odrabiamy.pl Watermark Remover
// @namespace    https://*.odrabiamy.pl/
// @version      0.2
// @description  Smacznej kawusi jebać kapusi
// @author       zgredinzyyy
// @match        https://odrabiamy.pl/*
// @grant        none
// ==/UserScript==

(function() {
      setInterval(() => {
          var elems = [].filter.call( document.getElementsByTagName("div"), function( input ) {
            input.className.slice(0,19) == "Watermark_watermark" ? input.innerHTML = "" : "";
          });
      }, 1000)
})();
