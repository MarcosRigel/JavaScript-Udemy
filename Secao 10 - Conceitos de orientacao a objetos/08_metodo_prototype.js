function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuu");
}

Cachorro.prototype.latir = function() {
    console.log("Au au");
}

let husky = new Cachorro('Husk',4,'cinza'); // Construtor

husky.uivar();