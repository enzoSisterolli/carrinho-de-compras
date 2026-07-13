
let valorDoCarrinho = 0;
let produtos = {};
function adicionar()
{   
    //alterando o valor total
    let total = document.getElementById("valor-total");
    let quantidade = Math.max(1, Number(document.getElementById("quantidade").value));

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = Number(produto.split('R$')[1]);

    valorDoCarrinho += valorProduto * quantidade;
    total.innerHTML = `R$${valorDoCarrinho}`
    //adicionando os produtos na lista
    if (produtos[nomeProduto]) 
    {
        produtos[nomeProduto].quantidade += quantidade;
        
    } 
    else 
    {
        produtos[nomeProduto] = 
        {
            quantidade : quantidade,
            valor : valorProduto
        };

    }

    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = "";
    for (let produto in produtos) {
    carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
          <span class="texto-azul">${produtos[produto].quantidade}x</span> <span> ${produto} </span> <span class = "texto-azul"> R$${produtos[produto].valor} </span>
         </section>`;
    }

    
}

function limpar()
{
    let total = document.getElementById("valor-total");
    valorDoCarrinho = 0
    total.innerHTML = `R$${valorDoCarrinho}`
    let produtosDoCarrinho = document.getElementById("lista-produtos");
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span>Sem nenhum item ainda...<span class="texto-azul"></span>
        </section>`;
    

}