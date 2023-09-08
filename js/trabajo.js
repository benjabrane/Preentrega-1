//ALGORITMO CON CONDICIONAL 

let numero = parseFloat(prompt("Ingrese un número:"));
if (numero > 0) {
console.log("El número ingresado es positivo.");
} else if (numero < 0) {
console.log("El número ingresado es negativo.");
} else {
console.log("El número ingresado es igual a cero.");
}

//ALGORITMO UTILIZANDO UN CICLO

let N = parseInt(prompt("Ingrese un número N:"));
let suma = 0;
for (let i = 1; i <= N; i++) {
suma += i;
}
console.log(`La suma de los primeros ${N} números naturales es: ${suma}`);


//SIMULADOR INTERACTIVO 

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
function iniciarJuego() {
intentos = 0;

jugar();
}

//function jugar() {
//const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
//intentos++;

// if (intento === numeroAleatorio) {
    //console.log(`¡Felicitaciones! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
//} else if (intento < numeroAleatorio) {
    //console.log("El número es mayor. Intenta nuevamente.");
    //jugar();
//} else {
    //console.log("El número es menor. Intenta nuevamente.");
    //jugar();
//}
//}

//iniciarJuego();

//PRE ENTREGA 2

const entrada = prompt("Por favor, ingresa algo:");
console.log("Capturaste la entrada: " + entrada);

let entradaUsuario;


entradaUsuario = prompt("Por favor, ingresa tu nombre:");


const miObjeto = {

nombreUsuario: entradaUsuario,


saludar: function() {
}
};


miObjeto.saludar();

function dividir(dividendo, divisor) {

if (divisor === 0) {
return "No es posible dividir por cero";
}

return dividendo / divisor;
}


const resultado = dividir(10, 2); 
console.log("Resultado: " + resultado);