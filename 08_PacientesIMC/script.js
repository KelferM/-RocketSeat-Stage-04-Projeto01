
let listName = []
let listAge = []
let listWeight = []
let listHeight = []
let listIMC = []
let option



while(option != 9 ) {

  option = Number(prompt(`Olá usuário! Digite o número da opção desejada,
  Para cadastro de pacientes e calculo do IMC:
  1. Cadastrar Paciente
  2. Cadastrar Idade
  3. Cadastrar Peso
  4. Cadastrar Altura
  5. Consultar Pacientes + IMC 
  9. Para fechar o programa`))

  switch(option) {

    case 1:

      let names

      while(names != 2 ) {

        names = prompt(`
        Digite o nome dos Pacientes.

        Digite "2" apos digitar todos Nomes
        `)

         if(names != 2 ){
         listName.push(names)
         }

      }

    break

    case 2:

      let Age

      while(Age != 2 ) {

        Age = prompt(`
        Digite a idade dos Pacientes.

        Digite "2" apos digitar todos Nomes
        `)

         if(Age != 2 ){
         listAge.push(Age)
         }

      }

    break

    case 3:

      let Weight

      while(Weight != 2 ) {

        Weight = prompt(`
        Digite o Peso dos Pacientes.

        Digite "2" apos digitar todos Nomes
        `)

         if(Weight != 2 ){
          listWeight.push(Weight)
         }

      }

    break

    case 4:

      let Height

      while(Height != 2 ) {

        Height = prompt(`
        Digite a altura dos Pacientes.

        Digite "2" apos digitar todos Nomes
        `)

        Height = Height.replace(",", ".")

         if(Height != 2 ){
          listHeight.push(Height)
         }

      }

    break

    case 5:
      
      if(listName.length == 0) {

        alert("Não existem Pacientes cadastrados")

      } else {

        for (let i = 0; i < listName.length; i++) {
          let IMCmessage = (listWeight[i] / ((listHeight[i]) ** 2)).toFixed(2)
          listIMC.push(IMCmessage)
        }

        alert("Paciente: " + listName 
        + "\nIdade: " + listAge 
        + "\nPeso: " + listWeight  
        + "\nAltura: " + listHeight
        + "\nIMC: " + listIMC)

      
      }

    break

    case 9:

      alert("GoodBye")

    break

    default:

    alert("Opção inválida. Tente novamente")


  }
}