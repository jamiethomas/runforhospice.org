/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(function(){$("a.page-scroll").bind("click",function(o){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),o.preventDefault()})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("#DateCountdown").TimeCircles({animation:"smooth",bg_width:1.2,fg_width:.1,circle_bg_color:"#60686F",time:{Days:{text:"Days",color:"#FFCC66",show:!0},Hours:{text:"Hours",color:"#99CCFF",show:!0},Minutes:{text:"Minutes",color:"#BBFFBB",show:!0},Seconds:{text:"Seconds",color:"#FF9999",show:!0}}});