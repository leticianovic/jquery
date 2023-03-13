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

    /* Ouvinte de eventos .nav-modal-open */
    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();
  
        let elem = $(this).attr('rel')
  
        $('.modal-body').html($('#'+elem).html())
        
        $('.modal-header h5.modal-title').html($(this).text())
  
        let myModal = new bootstrap.Modal($('#modalId'))
  
        myModal.show()
    })

    /*
     * TODO: incrementar a validação
     * - checar se o nome é válido (mais de 2 caracteres)
     * - checar se o email é válido com ao menos um "@" e "."
     * - checar se o cpf é válido com regex
    */
    function validate(elem){
        if(elem.val() == '') {

            console.log('o campo de '+ elem.attr('name') + ' é obrigatório!')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false
        } 
        else if (elem.val().lenght <= 2){
            console.log('o campo de '+ elem.attr('name') + ' precisa conter a partir de 3 caracteres!')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false
        }
        else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }
  
    $('body').on('submit', '.modal-body .form', function(e){
  
        e.preventDefault()
  
        const inputName = $('#nome')
        const inputEmail = $('#email')
        //const inputCpf = $('#cpf')
  
        validate(inputName)
        validate(inputEmail)
        //validate(inputCpf)

        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
           console.log('verificar campos obrigatórios')
           return false
        } else {
           $(this).submit()  
        }
  
    })
  
    $('body').on('blur', '#nome', function(){
        validate($(this))
    })
  
    $('body').on('blur', '#email', function(){
        validate($(this))
    })

    $('body').on('blur', '#cpf', function(){
        validate($(this))
    })
  
     
});