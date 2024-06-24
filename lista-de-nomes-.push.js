const quantidadeDeNomes = 3; 

let listaNomes = []; 


for(let i=1; i <= quantidadeDeNomes; i++ ) {
    listaNomes.push("Nome " + i );
}

listaNomes.forEach(element => {
    console.log(element);
});

console.log(listaNomes);