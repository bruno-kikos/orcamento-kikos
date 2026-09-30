let pedido = [];

function adicionarProduto(nome){

const itemExistente =
pedido.find(item => item.nome === nome);

if(itemExistente){

itemExistente.quantidade++;

}else{

pedido.push({
    nome:nome,
    quantidade:1
});

}

atualizarPedido();

}

function atualizarPedido(){

const lista =
document.getElementById("itensPedido");

lista.innerHTML = "";

pedido.forEach(item => {

const li =
document.createElement("li");

li.innerHTML =
item.nome + " (" + item.quantidade + ")";

lista.appendChild(li);

});

}
