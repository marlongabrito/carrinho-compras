let totalGeral = 0;

const campoProduto = document.querySelector('#produto');
const campoQuantidade = document.querySelector('#quantidade');
const campoTotal = document.querySelector('#valor-total');
const listaProdutos = document.querySelector('#lista-produtos');

function obterProdutoSelecionado() {
    const [nome, precoTexto] = campoProduto.value.split(' - ');
    const preco = Number(precoTexto.replace('R$', ''));
    return { nome, preco };
}

function adicionar() {
    const quantidade = parseInt(campoQuantidade.value, 10);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Digite uma quantidade válida de produtos.');
        return;
    }

    const produto = obterProdutoSelecionado();
    const subtotal = produto.preco * quantidade;

    totalGeral += subtotal;
    atualizarTotal(totalGeral);
    adicionarItemNaLista(quantidade, produto.nome, subtotal);
    campoQuantidade.value = '';
}

function limpar() {
    totalGeral = 0;
    atualizarTotal(totalGeral);
    listaProdutos.innerHTML = '';
    campoQuantidade.value = '';
}

function atualizarTotal(valor) {
    campoTotal.textContent = `R$${valor}`;
}

function adicionarItemNaLista(quantidade, nome, subtotal) {
    listaProdutos.insertAdjacentHTML('beforeend', `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span>
        </section>`);
}
