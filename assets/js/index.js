const descricao = document.querySelector(".apresentacao__descricao");
typeWrite(descricao);

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    //foreach - para cada 
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

