let lampada = 'desligada';
let estadoDaLampada;

if (lampada=="ligada"){
    estadoDaLampada = "Lampada ligada";
} else if(lampada=="piscando"){
    estadoDaLampada = "Lampada queimada";
}else if(lampada=="desligada"){
    estadoDaLampada = "Lampada desligada";
} else{
    console.log("Sem lampada");
}
console.log(estadoDaLampada);

