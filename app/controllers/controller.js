/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(passTo);
function passTo(event) {
    var id = parseInt($("div.ui.column.grid").prop("id"));
    $(".pass-to-pass div.passes div[id='pass-" + id + "']").removeClass("checkPass");
    if (parseInt(event)) {
        $(".pass-to-pass div.passes div[id='pass-" + id + "']").removeClass("checkPass");
        if (id != event) {
            var id = event - 1;
            $(".pass-to-pass div.passes div[id='pass-" + event + "']").addClass("checkPass");
        }
    } else {
        $(".pass-to-pass div.passes div[id='pass-" + (id +1) + "']").addClass("checkPass");
    }
    var myJSON = '{ "title" : [' +
            '{ "h1":"Vamos começar? É rapidinho..." , "h2":"" },' +
            '{ "h1":"Encontre a empresa que você deseja monitorar", "h2":"Após encontrar a empresa, você escolherá a cidade onde ela se encontra."},' +
            '{ "h1":"Encontre a empresa que você deseja monitorar" , "h2":"Após encontrar a cidade, você escolherá a unidade." },' +
            '{ "h1":"Encontramos <span></span> Selecione um para monitorar" , "h2":"" }' +
            '],' +
            '"data" : [' +
            '{"h2":"Em <span>menos de um minuto</span>, você estará em nosso painel.", "p":"Iniciar agora"},' +
            '{"h2":"Nome do estabelecimento", "button":"Restaurante Costa do Mar" ,"p":"Avançar"},' +
            '{"h2":"Nome da cidade", "button": "Joinville / SC" ,"p":"Avançar"},' +
            '{"establishment":"Hamburgueria da VACA", "desc":"Endereço: R. São Paulo, 31 - Bucarein, Joinville - SC, 89202-200" ,"p":"Ok, ir para o Painel"}' +
            ']}';
    var obj = JSON.parse(myJSON);
    var num_objJSON = obj.title.length;
    if (id < num_objJSON) {
        $(".title h1").addClass('fadeOutLeft').delay(1000).queue(removeObj);
        $(".title h2").addClass('fadeOutLeft').delay(1000).queue(removeObj);
        $(".started h2").addClass('fadeOutLeft').delay(1000).queue(removeObj);
        $(".started .select input").addClass('fadeOutLeft').delay(1000).queue(removeObj);
        $(".started .select div").remove();
        $(".started .select").remove();
        $(".started .check").addClass("fadeOutLeft").delay(1000).queue(removeObj);
        window.onload = addObj();
        $(".started .start button p").remove();
        $(".started .start button").append("<p class='animated bounce'>" + obj.data[id].p + "</p>");
        id = id + 1;
        $("div.ui.column.grid").removeAttr('id').attr("id", id);
    }
    function removeObj() {
        $(this).remove().dequeue(function () {
            window.onload = addObj();
        });
    }
    function addObj() {
        if (obj.title[id].h2 !== "") {
            $(".title").prepend("<h2 id='" + id + "' class='animated fadeInRight'>" + obj.title[id].h2 + "</h2>");
        }
        if (obj.data[id].button !== undefined) {
            $(".started").prepend("<div class='select'></div>");
            $(".started .select").prepend("<div><span></span></div>");
            $(".started .select").prepend('<input class="animated fadeInRight" placeholder="Ex.: ' + obj.data[id].button + '" type="text">');
            if (id == 2) {
                var width = $(".started .select input").width();
                $(".started .select div span").animate({
                    "width": width,
                    "padding-right": "5rem",
                    "padding-left": "1.5rem"
                }, 800);
            }
        }
        if (obj.data[id].desc !== undefined) {
            $(".title").prepend("<h1 id='" + id + "'class='animated fadeInRight'>" + obj.title[id].h1 + "</h1>");
            $(".started").prepend('<div class="check">\n\
                                      <input checked value="' + obj.data[id].establishment + '" type="checkbox"/></div>');
            var establishment = '<div class="animated fadeInRight column">\n\
                                            <div class="checkbox"></div>\n\
                                            <div class="label"><h2>' + obj.data[id].establishment + '</h2>\n\
                                            <span>' + obj.data[id].desc + '</span></div>\n\
                                            </div>';
            $(".started .check input").hide();
            //variavel 'n' que será passado do bd o número de estabelecimentos
            var n = 3;
            $(".title h1 span").append(n + " estabelecimentos.");
            var i = 0;
            for (i = i + 1; i <= n; i++) {
                $(".started .check").append(establishment);
            }
        } else {
            $(".started").prepend("<h2 id='" + id + "' class='animated fadeInRight'>" + obj.data[id].h2 + "</h2>");
            $(".title").prepend("<h1 id='" + id + "'class='animated fadeInRight'>" + obj.title[id].h1 + "</h1>");

        }

    }
}