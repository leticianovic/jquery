// instancia jQuery e evita conflitos
/* jQuery(function($){

    $('h4') // tag
    $('.featured-item') // class
    $('#featured') // id
    $('h4,h6') // seletores compostos: para tags
    $('div h4') // hierarquia

    let titulos = $('h4')
    
    let items = $('.featured-item')
    
    let destaques = $('#featured')

    titulos.first();
}); */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    // configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');

    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        });
    });
    
    // Manipulação de eventos
    $('.featured-item a').on('click', function(event){
        event.preventDefault();

        alert('Produto esgotado');

    })
    

});