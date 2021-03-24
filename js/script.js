function sortear() {
    let numeroPessoas = 100;
    let numeroSorteado = Math.round(Math.random() * numeroPessoas)

    document.getElementById("d").innerHTML = numeroSorteado;

}