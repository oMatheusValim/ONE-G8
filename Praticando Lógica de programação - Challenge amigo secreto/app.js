let nomes = []; // criação de uma lista para armazenar os nomes 

function adicionarAmigo(){
    let input_nome = document.querySelector('#amigo').value; // coleta o que é dito no input com id 'amigo'

    if (input_nome.trim() === ""){ // validação
        alert("Por favor, insira um nome válido.");
        return 
    } 

    nomes.push(input_nome);  // adiciona o nome a lista 

    limpar_slot();
    atualizarLista();

    document.querySelector('.button-draw').removeAttribute('disabled');
}


function atualizarLista(){ // mostra os nomes na tela

    const lista_amigos = document.querySelector("#listaAmigos");
    lista_amigos.innerHTML = "";

    nomes.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista_amigos.appendChild(item);
    })
}

function sortearAmigo(){ // seleciona um amigo dentre os que foram adicinados 

    if (nomes.length == 0){
        alert("Por favor, adicione amigos antes de realizar o sorteio.");
        return
    }

    let num_sorteado = Math.floor(Math.random() * nomes.length)
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: ${nomes[num_sorteado]}`;  
    
    // Habilita o botão de novo sorteio e desabilita o botão de sorteio após o sorteio
    document.getElementById('reiniciar').removeAttribute('disabled'); 
    document.querySelector('.button-draw').setAttribute('disabled', true);
}

function limpar_slot(){ // limpa o slot do input
    input_nome = document.querySelector('#amigo');
    input_nome.value = '';
}

function novo_sorteio(){ // reinicia a lista e possibilita criar outra lista e sortea-la sem atualizar a página
    nomes = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('reiniciar').setAttribute('disabled', true)
}