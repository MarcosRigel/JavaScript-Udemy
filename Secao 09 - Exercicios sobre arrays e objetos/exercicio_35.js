const calculadora = {
    somar: function (a, b) {
        return a + b;
    },

    subtrair: function (a,b) {
        return a - b;
    },

    multiplicar: function (a,b) {
        return a * b;
    },

    dividir: function (a,b) {
        return a / b;
    }
};

console.log(calculadora.somar(10, 20));
console.log(calculadora.subtrair(30, 15));
console.log(calculadora.multiplicar(100, 20));
console.log(calculadora.dividir(10, 20));