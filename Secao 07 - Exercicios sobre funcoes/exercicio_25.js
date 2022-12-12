function decremento(numero) {
    if (numero > 0) {
        for (let i = numero; i >= 0; i--) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("Numero negativo!");
    }
} 

decremento(10);