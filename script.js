// let idadeUsuario = Number(prompt("Qual é a sua idade?"))

// if (idadeUsuario === 13) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }

// else if (idadeUsuario === 14) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }

// else if (idadeUsuario === 15) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }

// else if (idadeUsuario === 16) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }

// else if (idadeUsuario === 17) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }

// else if (idadeUsuario > 12 && idadeUsuario < 18) {
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// }


// else {
//     console.log("Consulte outras possibilidades do Labank")
// }

// idadeUsuario===13?console.log("A idade do dependente é 13 e já pode ter um cartão"):console.log("Verifique as opções possíveis.")

// if (idadeUsuario >= 13 && idadeUsuario <=17) {
//     const ramalEscolhido = Number(prompt("Com qual ramal gostaria de falar? 1 para Fácil, 2 para Black, 3 para Platinum, 4 para Master gold."))
    
//     switch(ramalEscolhido) {
//         case 1:
//             console.log(`Tipo de cartão: Fácil`)
//             break;
//         case 2:
//             console.log(`Tipo de cartão: Black`)
//             break;
//         case 3:
//             console.log(`Tipo de cartão: Platinum`)
//             break;
//         case 4:
//             console.log(`Tipo de cartão: Master Gold`)
//             break;
//         default: console.log(`Escolha uma das quatro opções disponíveis.`)

//     }
    
// }


const numeroPedido = Number(prompt("De-me um número para saber se o número é divisivel por 2 e por 3!"))

if (numeroPedido % 2 === 0) {

    if (numeroPedido % 3 === 0) {
        console.log("Número é divisível por 2 e por 3!")
    }

    else {
        console.log("Número não é divisível por 3!")
    }

    numeroPedido === 30? console.log("UFA, é 30!"):console.log("Não foi dessa vez :(")

    switch(numeroPedido) {
        case 6:
            console.log("É o número 6!")
            break
        case 12:
            console.log("É o número 12!")
            break
        case 18:
            console.log("É o número 18!")
            break
        case 24:
            console.log("É o número 24!")
            break
        case 30:
            console.log("É o número 30!")
            break
        default:
            console.log("O número é menor que 6 ou maior que 30.")
    }
}

else {
    console.log("Não é divisível por 2!")
}