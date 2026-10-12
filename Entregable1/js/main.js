// console.log("Mi primer script interactivo");
// const nombre = prompt("¿Cuál es tu nombre?");
// const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
// const edad = 2026 - anioNacimiento;
// const ciudad = prompt("¿En qué ciudad vives?");
// const mensaje = "Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".";
// console.log(mensaje);

/* Sugerencias del tutor:
1. Evitar el exceso de constantes (const).
- Utilizar let cuando necesites una variable cuyo valor pueda cambiar.
- Reservar const para valores que no vas a reasignar.
- No significa que debas reemplazar todos los const por let, sino elegir correctamente.
2. No guardar el mensaje en una variable innecesaria.
- Evitar crear una variable únicamente para almacenar un texto que vas a mostrar inmediatamente.
- Construir el mensaje directamente dentro de console.log() y alert().
3. Agregar alert() para mostrar el resultado en el navegador.
- Actualmente, el resultado se muestra en la consola.
- El tutor recomienda utilizar también alert() para que el usuario vea el mensaje en una ventana emergente.
4. Utilizar console.log() y alert() juntos.
- console.log() muestra el resultado en la consola del navegador, útil para revisar el código.
- alert() muestra el resultado en una ventana emergente, visible para el usuario.
- Según la devolución, utilizar ambos permite alcanzar el nivel excelente en ese criterio.*/


let nombre = prompt("¿Cuál es tu nombre?");
let anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
let ciudad = prompt("¿En qué ciudad vives?");

let edad = 2026 - anioNacimiento;

console.log("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");
alert("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");





