# Iniciando com JQuery
- Um exemplo simples com jquery, é abrir o console e digitar:
`jQuery('body').html('<h1>Hello World com JQuery!</h1>')`

- Exemplos 
$('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>');
$('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>');

$('.featured-item:first h4').addClass('active');
$('.featured-item:first h4').removeClass('active');
$('.featured-item:first h4').toggleClass('active');

$('.featured-item:first h4').hide();
$('.featured-item:first h4').show();

$('.featured-item:first h4').fadeIn(2000);
$('.featured-item:first h4').fadeOut(4000);

$('.featured-item:first h4').css('color', '#00FA9A');

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

