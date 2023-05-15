$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown() //Abrindo formulário
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp() //Fechando formulário
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-imagem-nova').val() //Atribuindo o valor colocado no input para uma constante
        const novoItem = $('<li style="display: none"></li>') //Criando constante para receber as linhas de código que forem colocadas no input
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem) //Adicionando a imagem a linha de código "novoItem"
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real>
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem) //Linha de código escrita manualmente para ser adicionada no "novoItem"
        $(novoItem).appendTo('ul') //Adicionando "novoItem" para o "ul" no HTML
        $(novoItem).fadeIn(1000) //Efeito de aparecer gradativamente o "novoItem". fadeIn(ms) é medido em milissegundos
        $('#endereco-imagem-nova').val('')  //Limpando o input
    })
})