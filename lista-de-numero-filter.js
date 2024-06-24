let listaDeNúmeros = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
let menorQueTres = listaDeNúmeros.filter((valor) => {
    if (valor < 3 )
        return valor
})
 
menorQueTres.forEach((num) => console.log(num*2));

let listaDeNomes = [" Kessler ", "Gui"];
listaDeNomes.forEach((nome) => console.log(nome.toUpperCase()));


