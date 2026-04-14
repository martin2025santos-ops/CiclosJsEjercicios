//("Hola empezando con mi segundo Trabajo de Ciclos");
// A) Ciclo for
let resultadoFor = 0;

for (let numero = 1; numero <= 5; numero++) {
    resultadoFor += numero;
}

console.log("Resultado con for:", resultadoFor);


// B) Ciclo while
let resultadoWhile = 0;
let numero = 1; // reiniciamos la variable

while (numero <= 5) {
    resultadoWhile += numero;
    numero++;
}

console.log("Resultado con while:", resultadoWhile);


// C) Ciclo do while
let resultadoDoWhile = 0;
numero = 1; // reiniciamos nuevamente la variable

do {
    resultadoDoWhile += numero;
    numero++;
} while (numero <= 5);

console.log("Resultado con do while:", resultadoDoWhile);