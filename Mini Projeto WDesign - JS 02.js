const segredo = Math.floor(Math.random()* 100)+1;
let tentativas = 0;
let palplite;
do{
    palpite = Number(prompt("Adivinhe o número (1 a 100):"));
    tentaivas++;
    if(!Number.isFinite(palpite) ||palplite <1 ||palpite >100){
        console.log("Valor inválido. Digite entre 1 e 100");
    } else if (palpite < segredo){
        console.log("Muitobaixo! Tente um número MAIOR");
    } else if (palpite > segredo) {
        console.log("Muito alto! Tente um número MENOR");
    } else{

        console.log("Acertou! O número era",segredo, "em", tentativas,"tentativas.");
    }

}while (palpite !==segredo);