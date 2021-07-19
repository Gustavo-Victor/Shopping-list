//pegar elementos html
var campo_item = window.document.getElementById("item");
var botao = window.document.getElementById("adicionar");
var ul = window.document.getElementById("lista");
var classitems = window.document.getElementsByClassName("apagar"); //array de elementos com mesma classe
var btn_limpar = window.document.getElementById("limpar");

//chamar função ao clicar nos botões
botao.addEventListener('click', adicionarItem);
btn_limpar.addEventListener('click', limparTudo);


//função adicionar elementos à lista
function adicionarItem(){
    if(campo_item.value != ''){
        //criar li e o botao
        let item_lista = window.document.createElement('li');
        let botao_criado = window.document.createElement('button');

        //definir coisas do botão
        botao_criado.setAttribute('class', 'apagar');
        botao_criado.innerText = "X";
        botao_criado.setAttribute('onmouseover', 'eventoBotao()');

        //pegar valor do campo do formulário
        let valor_item = campo_item.value;

        //colocar no li (item da lista) o texto digitado e o botão
        item_lista.append(valor_item);
        item_lista.append(botao_criado);

        //colocar o item da lista na lista
        ul.appendChild(item_lista);

        //limçpar campo do formuário e deixar visível o botão limpar 
        campo_item.value = "";
        btn_limpar.style.opacity = 1;              

    }else{
        window.alert("Você precisa digitar algo para adicionar à lista");
    }
}


//funlçai que chama exclusão de item 
function eventoBotao(){
    for(let i = 0; i < classitems.length; i++){
        classitems[i].addEventListener('click', apagarItem);
    }
}

//função que apaga cada item da lista
function apagarItem(){
    this.parentElement.remove();
    window.alert("Removido com sucesso!");
}

//limpar Tudo
function limparTudo(){
    let confirmacao = window.confirm("Tem certeza que deseja limpar tudo na lista?");

    if(confirmacao == true){
        ul.innerHTML = "";
        btn_limpar.style.opacity = 0;
    }
}
