let numeros = [2, 3, 7, 8, 10]
console.log(numeros.toString());

const quadrados = numeros.map(function(num) {
    return num ** 2;
});
console.log(quadrados.toString());

const resultado = numeros.filter(function(num) {
    return num > 5;
})
console.log(resultado.toString());