function recebeString(texto) {
    if(texto.length > 10) {
        console.log("Texto muito longo");
    }
    else {
        console.log("Texto dentro do limite");
    }
    console.log(texto.length);
}

recebeString("Ola mundo!"); 
recebeString("Teste");
recebeString("Vamos testar se funciona");
recebeString("10-");