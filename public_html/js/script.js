/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var param = {
        minimum: 500,
        maximum: 1200,
        minFont: 12,
        maxFont: 40,
        fontRatio: 30
    };
    $('.title').flowtype(param);

    $('.started .start button p').flowtype(param);

    $(".started .check").flowtype(param);

    $(".started .start button").click(passTo);

    $(".pass-to-pass .passes div[id]").click(getObj);

    function getObj(e){
        var $this = $(this).html();
        var $id = parseInt($($this).html());
        $(document).each(passTo($id));
    }

    $(document).keyup(function (key) {
        if (key.which == '13') {
            $(document).each({keyDigit: key.which}, passTo);
        }
    });
    
    $(document).on('click', ".started .check .checkbox",checked);
    function checked(){
        var find = $(".started .check .checkbox").prop("class", "checkbox");
        var checkbox = $(".started .check input").prop("checked");
        if(checkbox == true){
            $(this).addClass("checked");
            $(".started .check input").prop("checked", false);
            $(window).load(checked);
        }else{
            $(this).removeClass("checked");
            $(".started .check input").prop("checked", true);
            $(window).load(checked);
        }
    }

    $(".started .select input").focusin(function () {
        $(this).keyup(function () {
            $(this).addClass("close").blur(function () {
                $(this).removeClass("close");
            });
        });
    });

    var heightPass = $(".pass-to-pass div.passes div").first().height();
    $(".pass-to-pass div.passes #checked").height(heightPass);

});