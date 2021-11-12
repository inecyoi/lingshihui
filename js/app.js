$(window).scroll(function(){var a=$(window).scrollTop();if(a>=50){$(".sticky").addClass("nav-sticky")}else{$(".sticky").removeClass("nav-sticky")}});$(".nav-item a, .mouse-down a").on("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-0},1500,"easeInOutExpo");b.preventDefault()});$(".navbar-nav").scrollspy({offset:70});$(window).on("load",function(){$("#status").fadeOut();$("#preloader").delay(350).fadeOut("slow");$("body").delay(350).css({overflow:"visible"})});$("#contact-form").submit(function(){var a=$(this).attr("action");$("#message").slideUp(750,function(){$("#message").hide();$("#submit").before("").attr("disabled","disabled");$.post(a,{name:$("#name").val(),email:$("#email").val(),comments:$("#comments").val(),},function(b){document.getElementById("message").innerHTML=b;$("#message").slideDown("slow");$("#cform img.contact-loader").fadeOut("slow",function(){$(this).remove()});$("#submit").removeAttr("disabled");if(b.match("success")!=null){$("#cform").slideUp("slow")}})});return false});

$("#mamax").click(function(){
    $("#mama").toggle(500);
})
var a = 1
$("#openBTN").click(function(){
    if(a==1){
        $("#openBTN").text("收起")
        $("#yaoqinghan").attr('src','images/han2.png')
        a=0
    }else{
        $("#openBTN").text("点击查看")
        $("#yaoqinghan").attr('src','images/han.png')
        a=1
    }
    
    
})
