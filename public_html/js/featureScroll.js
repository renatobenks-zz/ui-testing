/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).scroll(function(){
    var scroll, title;
    scroll = $(document).scrollTop();
    title = $(".title").offset().top *0.625;
    if(scroll == 0 || scroll <= title){
        $(".presents .logo").addClass("bounceInDown").removeClass("bounceOutUp");
        $("#1 .started h2").addClass("fadeOutDown").removeClass("fadeInUp");
        $("#1 .started .start").addClass("fadeOutDown").removeClass("fadeInUp");
        $(".pass-to-pass").removeClass("fadeInLeft");
    }
    if(scroll > 0 && scroll > title){
        $("#1 .started h2").addClass("fadeInUp").removeClass("fadeOutDown");
        $("#1 .started .start").addClass("fadeInUp").removeClass("fadeOutDown");
        $(".presents .logo").addClass("bounceOutUp").removeClass("bounceInDown");
        $(".pass-to-pass").addClass("fadeInLeft");
    }
});