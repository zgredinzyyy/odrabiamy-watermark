// ==UserScript==
// @name         Odrabiamy.pl Watermark Remover
// @namespace    https://*.odrabiamy.pl/
// @version      0.1
// @description  Smacznej kawusi jebać kapusi
// @author       zgredinzyyy
// @match        https://odrabiamy.pl/*
// @grant        none
// ==/UserScript==

(function() {
      setInterval(() => {
          var elems = [].filter.call( document.getElementsByTagName("div"), function( input ) {
            input.className == "watermark" ? input.innerHTML = "" : "";
          });
      }, 1000)
})();
