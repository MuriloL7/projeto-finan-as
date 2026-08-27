let pessoas = [];
const lista = document.getElementById("listaNomes");

function adicionarPessoa(){
    const input = document.getElementById("nome");
    const nome = input.value;

    pessoas.push(nome);

    input.value = "";

    exibirLista(lista);

    return lista;
}

function removerPessoa(id){
    const index = pessoas.indexOf(id)

    pessoas.splice(index, 1);

    console.log(pessoas);
    

    exibirLista(lista);
}


function exibirLista(lista){
    lista.innerHTML = "";
    for (let nome of pessoas){
            lista.innerHTML += `<li class="nomes pl-4 flex flex-row justify-between">${nome} <button id="${nome}" onclick="removerPessoa(id)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17></line></svg></button></li>`;
    }
}