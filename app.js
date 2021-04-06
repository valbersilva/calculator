var iniciar = parseInt(alert("Qual operação voce deseja?"));
var escolherOperação = parseInt(prompt("1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão"));

var primeiroValor = parseInt(prompt("Qual seu primeiro valor?"));
var segundoValor = parseInt(prompt("Qual seu segundo valor?"));

var soma = primeiroValor+segundoValor
var subtracao = primeiroValor-segundoValor
var multipicacao = primeiroValor*segundoValor
var divisão = primeiroValor/segundoValor


if (escolherOperação === 1) {
   document.write("<h2>"+ primeiroValor + segundoValor + soma + "</h2>")
  } else {
    if (escolherOperação === 2) {
        document.write("<h2>"+ primeiroValor + segundoValor + subtracao + "</h2>")
      } else {
        if (escolherOperação === 3) {
            document.write("<h2>"+ primeiroValor + segundoValor + multipicacao + "</h2>")
          } else {
            if (escolherOperação === 4) {
                document.write("<h2>"+ primeiroValor + segundoValor + divisao + "</h2>")
               } else {

               }
          }
      }
  }