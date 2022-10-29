/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

*/

let firstNumber = prompt ( "Digite aqui o primeiro número da operação:" )
let secondNumber = prompt ( "Digite aqui o segundo número da operação:" )

firstNumber = firstNumber.replace(",", ".")
secondNumber = secondNumber.replace(",", ".")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


let sum = (firstNumber + secondNumber).toFixed(2)
let subtraction = (firstNumber - secondNumber).toFixed(2)
let multiplication = (firstNumber * secondNumber).toFixed(2)
let division = (firstNumber / secondNumber).toFixed(2)
let retDivis = (firstNumber % secondNumber).toFixed(2)
let parImpar
let equalDiff

if(sum % 2 == 0 ){

  parImpar = "Par"

}else{

  parImpar = "Impar"

}

if(subtraction == 0){

  equalDiff = "Iguais"

}else{

  equalDiff = "Diferentes"

}

sum = sum.replace(".", ",")
subtraction = subtraction.replace(".", ",")
multiplication = multiplication.replace(".", ",")
division = division.replace(".", ",")
retDivis = retDivis.replace(".", ",")

alert(`Soma: ${sum}
Subtração: ${subtraction}
Multiplicação: ${multiplication}
Divisão: ${division}
Resto da Divisão: ${retDivis}
Resultado da Soma é: ${parImpar}
Os valores Inseridos São: ${equalDiff}
`)