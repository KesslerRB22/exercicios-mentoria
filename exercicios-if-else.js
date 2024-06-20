// teste if else else if 

let corDoSemaforo;
let comoProceder ;

if (corDoSemaforo === "Verde"){
    comoProceder = "Siga em frente"; 
}else if(corDoSemaforo === "Vermelho"){
    comoProceder = "PARE!!";
}else if(corDoSemaforo === "Amarelo"){
    comoProceder = "Siga com cuidado";
} else{
    comoProceder= "Siga com muito cuidado, semáforo estragado!!!";
}
console.log(comoProceder); 