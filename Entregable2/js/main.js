const producto = "Laptop";
const precio = 2500000;
let stock = 7;

let cantidad;
let continuar = "si";
let respuestaValida = "";
let total = 0;

while (continuar === "si") {

    cantidad = Number(prompt("¿Cuántas unidades deseas comprar?"));

    console.log("Producto:", producto);
    console.log("Cantidad:", cantidad);

    if (isNaN(cantidad)) {
        console.log("Debes ingresar una cantidad numérica.");

    } else if (cantidad <= 0) {
        console.log("La cantidad debe ser mayor que 0");

    } else if (cantidad > stock) {
        console.log("No hay suficiente stock");

    } else {
        console.log("Compra permitida");

        total = cantidad * precio;
        console.log("Total a pagar:", total);

        stock = stock - cantidad;
        console.log("Stock restante:", stock);
    }

    respuestaValida = "";

    while (respuestaValida !== "si" && respuestaValida !== "no") {

        respuestaValida = prompt(
            "¿Deseas realizar otra compra? Escribe si o no"
        );

        if (respuestaValida === null) {
            break;
        }

        respuestaValida = respuestaValida.toLowerCase();

        if (respuestaValida !== "si" && respuestaValida !== "no") {
            console.log("Respuesta no válida. Debes escribir si o no.");
        }
    }

    if (respuestaValida === null) {
        break;
    }

    continuar = respuestaValida;
}


/*Según la retroalimentación del tutor, había que mejorar 4 aspectos:
1. Mover la etiqueta <script> al <head> en Entregable2/index.html, conservando el atributo defer.
2. Validar entradas no numéricas en Entregable2/js/main.js, usando isNaN(cantidad) para evitar que textos como "hola" se acepten como compras válidas.
3. Corregir la indentación del bloque if / else if / else para que el código sea más legible y ordenado.
4. Inicializar las variables al declararlas:*/


