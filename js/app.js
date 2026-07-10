function adicionar()
{
    let total = document.getElementById("valor-total");
    let carrinho = 1400;
    let quantidade = document.getElementById("quantidade").value;
    let produto = document.getElementById("produto");
    let valorProduto = document.getElementById("produto").value;

    carrinho += valorProduto * quantidade;
    total.innerHTML = carrinho;
    
}