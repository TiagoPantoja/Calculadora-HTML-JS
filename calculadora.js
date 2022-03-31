function inserir(numero) {
    let resultado = document.getElementById('visor').innerHTML;

    document.getElementById('visor').innerHTML = resultado + numero
    // resultado = numero;
    console.log(resultado);
}

function limpar() {
    document.getElementById('visor').innerHTML = ";";
}

function back() {
    let resultado = document.getElementById('visor').innerHTML;
    let subRes = resultado.substring(0,resultado.length - 1);

    document.getElementById('visor').innerHTML = subRes;
    // console.log(subRes);
}

function igual() {
    let resultado = document.getElementById('visor').innerHTML
}