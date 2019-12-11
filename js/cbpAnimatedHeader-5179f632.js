/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function n(){window.addEventListener("scroll",function(){r||(r=!0,setTimeout(e,250))},!1)}function e(){t()>=c?classie.add(o,"navbar-shrink"):classie.remove(o,"navbar-shrink"),r=!1}function t(){return window.pageYOffset||a.scrollTop}var a=document.documentElement,o=document.querySelector(".navbar-default"),r=!1,c=300;n()}();