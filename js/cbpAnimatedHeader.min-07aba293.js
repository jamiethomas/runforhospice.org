/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(){c||(c=!0,setTimeout(n,250))},!1)}function n(){var e=t();e>=o?classie.add(r,"cbp-af-header-shrink"):classie.remove(r,"cbp-af-header-shrink"),c=!1}function t(){return window.pageYOffset||a.scrollTop}var a=document.documentElement,r=document.querySelector(".navbar-default"),c=!1,o=300;e()}();