$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(__) _____-____'
    })
    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            mensagem:{
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            } 
        },
        messages:{
            nome: 'Por favor, insira o seu nome'
        }//,
        //  submitHandler: function(form){
        //     console.log(form)
        // },
        //  invalidHandler: function(evento, validador){
        // let camposIncorretos = validador.numberOFInvalids();
        //     console.log(camposIncorretos);
        //  }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        // alert($(this).paren().find('h3').text());

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})