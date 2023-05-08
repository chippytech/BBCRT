// ==UserScript==
// @name         Load Retro Theme on VistaPanel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Loads two CSS files on cpanel
// @author       BBCRT
// @match        https://cpanel.epizy.com/panel/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var head = document.getElementsByTagName('head')[0];
    var css1 = document.createElement('link');
    css1.rel = 'stylesheet';
    css1.type = 'text/css';
    css1.href = 'https://vpt.cdn.wybenetwork.com/retro/icon_spritemap.css';
    head.appendChild(css1);
    var css2 = document.createElement('link');
    css2.rel = 'stylesheet';
    css2.type = 'text/css';
    css2.href = 'https://vpt.cdn.wybenetwork.com/retro/styles.css';
    head.appendChild(css2);
})();
