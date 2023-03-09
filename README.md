# Iniciando com JQuery
- Um exemplo simples com jquery, é abrir o console e digitar:


`jQuery('body').html('<h1>Hello World com JQuery!</h1>')`

- Exemplos:


`$('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>');`


`$('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>');`


`$('.featured-item:first h4').addClass('active');`


`$('.featured-item:first h4').removeClass('active');`


`$('.featured-item:first h4').toggleClass('active');`


`$('.featured-item:first h4').hide();`


`$('.featured-item:first h4').show();`


`$('.featured-item:first h4').fadeIn(2000);`


`$('.featured-item:first h4').fadeOut(4000);`



`$('.featured-item:first h4').css('color', '#00FA9A');`

- Evento: quando clicar faça algo

```

$('.featured-item h4').click(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        });
 });

```

- Evento: quando der clique duplo

 ```

 $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        });
 });

 ```

## Animaçoes
- Oculta um elemento 
  `.hide()`

- Mostra um elemento
  `.show()`

- Aumenta a transparência do elemento até que se torne invísivel 
  `.fadeOut()`

- Faz com que o elemento tenha sua opacidade aumentada até se tornar vísivel
  `.fadeIn()`

- Proporciona a escolha de revelar e esconder conteúdos
  `.toggle()`

- instancia jQuery e evita conflitos

```

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
});

```

- Manipulação de eventos

```

$('.featured-item a').on('click', function(event){
      event.preventDefault();

      alert('Produto esgotado');
})

 ```

- Callback: Entendendo ações que começam ao término de outra

 ```
  $('.featured-item:nth(1)')
        .hide(2000, function(){
            // este é o callback
            console.log($(this).find('h4').text() + ' esgotado');
        })
        .show(2000, function(){
            console.log($(this).find('h4').text() + ' em estoque');
        })
 ```

- Animações

 ```
  $('.featured-item:nth(2)')
    .toggle(2000)
    .toggle(2000)

 ```