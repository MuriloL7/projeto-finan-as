const lista = document.getElementById("listaNomes");
let pessoas;

if(localStorage.getItem("listaPessoas") != null){
    pessoas = JSON.parse(localStorage.getItem("listaPessoas"));
    exibirLista(lista);
}

function adicionarPessoa(){
    let input = document.getElementById("nome");
    let nome = input.value;

    if(nome == ''){
        alert("É necessário informar um nome");
    } else{
        if(localStorage.getItem("listaPessoas") === null){
            pessoas = [nome];

            input.value = "";
            
            localStorage.setItem("listaPessoas", JSON.stringify(pessoas));

            exibirLista(lista);
        } else{
            pessoas = JSON.parse(localStorage.getItem("listaPessoas"));
            input = document.getElementById("nome");
            nome = input.value;

            pessoas.push(nome);

            input.value = "";
            
            localStorage.setItem("listaPessoas", JSON.stringify(pessoas));

            exibirLista(lista);
        }
    }
}

function removerPessoa(cont){
    pessoas.splice(cont, 1);
    localStorage.setItem("listaPessoas", JSON.stringify(pessoas));

    exibirLista(lista);
}

function exibirLista(){
    let cont = 0;
    lista.innerHTML = "";
    for (let nome of pessoas){
            lista.innerHTML += `<li class="border border-slate-400 focus:border-slate-400 rounded-md nomes pl-4 flex flex-row justify-between">${nome} <button id="${cont}" onclick="removerPessoa(id)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></li>`;
            cont += 1;
    }
}