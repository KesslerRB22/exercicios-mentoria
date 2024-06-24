
//for (expressão inicial; condição a ser cumprida; atualização da expressão inicial) {
  
// código que será repetido

const listaDeCompras = [
    'maca',
    'gengibre',
    'miojo',
    'biscoito/bolacha',
    'banana',
    'feijao carioquinha',
    'pasta de dente',
  ];

const carrinho = [];



 for(let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; posicaoNaLista = posicaoNaLista + 1){
    if(posicaoNaLista === "maca" || posicaoNaLista[posicaoNaLista] === "banana") {
        carrinho.push(listaDeCompras[posicaoNaLista]);
    }
 }

 
 console.log(carrinho);























