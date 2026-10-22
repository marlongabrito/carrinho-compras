let carrinhoDeCompras = [];
let nomeProduto;
let quantidade;

function adicionarItem() {
    nomeProduto = document.querySelector('#quantidade').value;
    quantidade = Number(document.querySelector('#quantidade').value);
    let adicionarItem = `${quantidade}x ${nomeProduto}`;
    carrinhoDeCompras.push(adicionarItem);
    console.log(carrinhoDeCompras);
}

function limpar() {
    carrinhoDeCompras = [];
}

limpar();

function adicionar() {
    if (Number.isInteger(quantidade)) {
        adicionarItem()
    }
}
