var navegarPara = function (div, page) {
    $(div).load(page);
}

var exibeMensagem = function (div, mensagem) {
    $(div).html(mensagem);
}

$(function () {
    $('#bnt_msg').click(function () {
        alert('Minha mensagem!')
    })
})