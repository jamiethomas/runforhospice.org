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
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(){o||(o=!0,setTimeout(n,250))},!1)}function n(){t()>=r?classie.add(c,"cbp-af-header-shrink"):classie.remove(c,"cbp-af-header-shrink"),o=!1}function t(){return window.pageYOffset||a.scrollTop}var a=document.documentElement,c=document.querySelector(".navbar-default"),o=!1,r=300;e()}();