class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.estado = estado;
        this.cidade = cidade;
    }

    set novaRua (novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC");

console.log(endereco);

endereco.novaRua = "Rua dos Pardais";

console.log(endereco);

endereco.novaCidade = "São Paulo";

console.log(endereco);