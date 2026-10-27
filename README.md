# Carrinho de Compras

Aplicação web simples que simula um carrinho de compras: você escolhe um produto, informa a quantidade e acompanha os itens e o valor total na tela.

## Funcionalidades

- Escolha do produto em uma lista (Fone de ouvido, Celular e Oculus VR)
- Escolha da quantidade de unidades
- Validação da quantidade, com mensagem de erro quando o valor é vazio, zero ou negativo
- Exibição dos itens adicionados, com quantidade e subtotal de cada um
- Cálculo automático do valor total do carrinho
- Botão para limpar o carrinho e começar de novo

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Clone o repositório:
```bash
   git clone https://github.com/marlongabrito/carrinho-de-compras.git
```
2. Abra o arquivo `index.html` no navegador.
3. Selecione um **Produto** e preencha o campo **Qtde.**
4. Clique em **Adicionar** para incluir o item no carrinho.
5. Clique em **Limpar** para esvaziar o carrinho.

## Exemplo

| Produto        | Quantidade | Item na lista               | Total do carrinho |
|----------------|------------|-----------------------------|-------------------|
| Celular        | 2          | 2x Celular R$2800           | R$2800            |
| Fone de ouvido | 1          | 1x Fone de ouvido R$100     | R$2900            |

## Estrutura do projeto

```
carrinho-de-compras/
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/
    ├── arrow-down.svg
    ├── carrinho-cinza.svg
    ├── grafismo-azul.svg
    ├── icone-carrinho.svg
    └── oculos.png
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Marlon Brito: [@marlongabrito](https://github.com/marlongabrito)
