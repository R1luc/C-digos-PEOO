function verificar() {
    const numero = document.getElementById("numero").value;
    if (primo(numero))
        document.getElementById("resultado").innerHTML = `O numero ${numero} é primo`;

    else
        document.getElementById("resultado").innerHTML = `O número ${numero} não é primo`;

    let listagem = [];
    for (let i=2; i<=numero; i++) {
        if (primo(i))
            listagem.push(i);
    }
    document.getElementById("listagemprimos").innerHTML =
        `Números primos até ${numero} : ${listagem.toString()}`
}
function primo(numero) {
    let resultado = true;
    for (let i=2; i<numero; i++) {
        if (numero % i === 0) {
            resultado = false;
            break;
        }
    }
    return resultado
}