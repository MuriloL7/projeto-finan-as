let pessoas = [];

function adicionarPessoa(){
    const input = document.getElementById("nome");
    const nome = input.value;

    pessoas.push(nome);

    const lista = document.getElementById("listaNomes");

    lista.innerHTML = "";

    for (let nome of pessoas){
        lista.innerHTML += `<li>${nome}</li>`;
    }
    input.value = "";

}
