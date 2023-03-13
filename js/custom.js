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
    
    

    /*
     * Ouvinte de eventos .nav-modal-open
    */
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

    // Irá verificar se caso os campos estejam vazios irá retorar campo inválido
    function validate(elem){
        if (elem.val() == ''){
            
            console.log('O campo ' + elem.attr('name') + ' é obrigatório')

            elem.addClass('invalid')

            return false
        }
        else {
            elem.removeClass('invalid')
        } 
    }

    // Serão validos os campos de nome, email e CPF
    $('.form').on('submit', function(e){
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')
        const inputCpf = $('#cpf')

        validate(inputName)
        validate(inputEmail)
        validate(inputCpf)

        if (inputName.hasClass('invalid') || inputEmail.hasClass('invalid') || inputCpf.hasClass('invalid')){
            
            console.log('Os campos são obrigatórios!')

            return false
        }
        else {
            $(this).submit()
        }
    })

    // Validar caso tire o campo de foco
    $('body').on('blur', '#nome', function(){
        validate($(this))
    })
  
    $('body').on('blur', '#email', function(){
        validate($(this))
    })

    $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
     })
     
});