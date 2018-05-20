$(function () {
    'use strict'
    var timer = new Timer();
    var x = document.getElementById("myAudio"); 
    var time15 = 5;

    function init(){
        $('#modal-inicio').modal('show')
    }
    init();

    function time(){
        timer.start({callback: function (timer) {
            if(timer.getTimeValues().seconds % 15 == 0){
                $("#help")[0].src = 'img/help2.png';
                x.play(); 
            }
            else
                $("#help")[0].src = 'img/help.png';

            $('#callbackExample .values').html(
                timer.getTimeValues().toString(['minutes', 'seconds'])
            );
        }});    
    }

    

    $( ".respostas li>label" ).on( "click", function(){
        $(".respostas li").removeClass("active");
        $(this).parent().addClass("active");
    });

    $('#tentar-de-novo').on('click', function(){
        timer.start();
    })

    $('#confirmar-bonus').on('click', function(){
        $("#titulo-sup").text('Desbravador');
        $("#sub-titulo").text('de equações desconhecidas');
    })

    $('#iniciar').on('click', function(){
        time();
    })

    $('#responder').on('click', function(){
        if ($('#resposta-certa').hasClass('active')){
            $('#modal-success').modal('show')  
        } 
        else {
            var pontos = $('#pontos').text;
            console.log(pontos);
            console.log($('#pontos').text(parseInt($('#pontos').text()) - 5))
            console.log($('#exp').text(parseInt($('#exp').text()) - 2))
            $('#modal-warning').modal('show');
        }
        timer.pause();
    })
   
})

