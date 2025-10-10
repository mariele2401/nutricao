var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.text.Content;
console.log(altura);

varImc = paciente.querySelector(".info-imc");
console.log(imc);

var pesoEhValido = true;
var alturaEhValido = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
    imc.textContent = "Peso inválido";
}

if (altura < 0 || altura > 2.00) {
    console.log("Altura inválida");
    alturaEhValido = false;
    imc.textContent = "Altura inválido";
}

if (alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura);
    imc.textContent = imc;
}

