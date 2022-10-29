/* 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada 
estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let listName = []
let listP1 = []
let listP2 = []
let listMedia = []
let listResultContest = []
let option

while(option != 99 ) {

  option = Number(prompt(`Olá usuário! Digite o número da opção desejada,
  Para cadastro de Alunos e calculo da Média:
  
  1. Cadastrar Aluno
  2. Consultar Média dos Alunos

  99. Para fechar o programa`))


  switch(option) {

    case 1:
      
      let names
      let P1
      let P2
      let resultContest

        names = prompt(`
        Digite o nome do Aluno.   
        `)

        P1 = prompt(`
        Digite a nota P1.   
        `)

        P2 = prompt(`
        Digite a nota P2.   
        `)  

        P1 = P1.replace(",", ".")
        P2 = P2.replace(",", ".")
        P1 = Number(P1)
        P2 = Number(P2)
           
        media = ((P1 + P2)/2).toFixed(2)

        if(media >= 7){

        resultContest = "Aprovado."

        }else{

        resultContest = "Reprovado"

        }
  
        listName.push(names)
        listP1.push(P1)
        listP2.push(P2)
        listMedia.push(media)
        listResultContest.push(resultContest)
    
    break

    case 2:
      
        for (i = 0; i < listName.length; i++ ){

        alert("Aluno: " + listName[i]
        + "\nNota P1: " + listP1[i]
        + "\nNota P2: " + listP2[i]  
        + "\nMédia: " + listMedia[i]
        + "\nVocê foi: " + listResultContest[i])

        }
      
    break

    case 99:

      alert("GoodBye")

    break

    default:

    alert("Opção inválida.")


      

}

}