let array01 = [10, 11, 12, 123, 77];
let array02 = [1, 2, 3];

function verificaElementos (arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    }
    else {
        console.log("Poucos elementos")
    }
}

verificaElementos(array01);
verificaElementos(array02);