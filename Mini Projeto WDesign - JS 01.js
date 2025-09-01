let valor = 120;
let desconto = 0;

if (valor > 200) {
    desconto = 0.2;
} else if (valor>100){
    desconto = 0.1;
}else {
    desconto =0;
}

let precoFinal = valor - (valor * desconto);

console.log("Preço final: R$ " + precoFinal);