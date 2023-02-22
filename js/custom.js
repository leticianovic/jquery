// instancia jQuery e evita conflitos
jQuery(function($){

    $('h4') // tag
    $('.featured-item') // class
    $('#featured') // id
    $('h4,h6') // seletores compostos: para tags
    $('div h4') // hierarquia

    let titulos = $('h4')
    
    let items = $('.featured-item')
    
    let destaques = $('#featured')

    titulos.first();
}) 