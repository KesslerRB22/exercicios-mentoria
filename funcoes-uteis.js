const nome = "Kessler";
const idade = 22;
const opcaoDesejada = 1;

const retornaTamanhoNome = (nome) => console.log(nome.length);
const maiorDeIdade = (idade) => idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");
const resolveOpcaoEscolhida = (opcaoDesejada) => {
    switch(opcaoDesejada){
        case 1 : 
            console.log("Voce escolheu uma TV");
            break
        case 2 : 
            console.log("Voce escolheu um videogame");
            break
        default:
            console.log("Opcao invalida");
            break
    }
}


retornaTamanhoNome(nome);
maiorDeIdade(idade);
resolveOpcaoEscolhida(opcaoDesejada);
