let totalGeral = 0

function separarDados() {
    let produtoEscolhido = document.querySelector('#produto').value;
    let dadosDoProduto = produtoEscolhido.split(' - ');
    let precoDoProduto = Number(dadosDoProduto[1].replace('R$', ''));
    let nomeDoProduto = dadosDoProduto[0];
    return {nome: nomeDoProduto, preco: precoDoProduto};
}

function adicionar() {
    let dados = separarDados();
    let quantidade = Number(document.querySelector('#quantidade').value);
    let valorDoAdicionado = dados.preco * quantidade;
    totalGeral += valorDoAdicionado;
    alterarPrecoTotal(totalGeral);
}

function limpar() {
    totalGeral = 0;
    alterarPrecoTotal(totalGeral);
}

function alterarPrecoTotal(valor) {
    let campo = document.querySelector('#valor-total');
    let preco = `R$${valor}`;
    campo.textContent = preco;
}

function adicionarProdutoNaLista(quantidade, nome, subtotal) {
    let lista = [];
}
