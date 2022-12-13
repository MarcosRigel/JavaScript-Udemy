let onibus = { // objeto onibus
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,
};

delete onibus.rodas; // deletou propriedade

console.log(onibus.rodas);

onibus.janelas = 20; // adicionando propriedade janela no onibus

console.log(onibus);
console.log(onibus.janelas);