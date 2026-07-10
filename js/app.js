
let carrinho = 1400;
function adicionar()
{
    let total = document.getElementById("valor-total");
    let quantidade = Math.max(1, Number(document.getElementById("quantidade").value));
    let produto = document.getElementById("produto");
    let valorProduto = Number(document.getElementById("produto").value);
    let carrinho = getElementById("lista-produtos");
    carrinho += valorProduto * quantidade;
    total.innerHTML = `R$${carrinho}`;
    
}