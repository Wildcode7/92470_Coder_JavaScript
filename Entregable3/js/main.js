/*
==================================================
SIMULADOR DE COMPRAS - PRE-ENTREGA 3
==================================================

RESUMEN DE LOS CAMBIOS REALIZADOS

1. Se reemplazaron las variables individuales de producto,
   precio y stock por un objeto llamado productos.
   Ahora se pueden administrar varios productos.

2. Se conservó como comentario la función calcularTotal()
   original y se creó su versión como función flecha.

3. Se creó la función validarCompra() para comprobar que
   la cantidad sea un número entero mayor que cero y que
   no supere el stock disponible.

4. Se creó calcularStockRestante() como función flecha
   para actualizar las unidades disponibles.

5. Se conservó mostrarResultado() para mostrar mensajes
   en la consola y mediante alert().

6. Se modificó procesarCompra() para utilizar switch-case
   en lugar del if-else anterior al evaluar el resultado
   de la validación.

7. Se creó seleccionarProducto() para mostrar el menú
   y obtener la opción elegida por el usuario.

8. Se creó ejecutarOpcion() con switch-case para dirigir
   la ejecución hacia el producto seleccionado.

9. Se reemplazó el ciclo while anterior por uno que
   permite realizar varias compras y salir del simulador.

10. Se conservaron las versiones anteriores comentadas
    para facilitar la comparación y el aprendizaje.

==================================================
*/

// --------------------------------------------------
// 1. DATOS DE LOS PRODUCTOS
// --------------------------------------------------

// Código anterior:
// const producto = "Laptop";
// const precio = 2500000;
// let stock = 7;

// Nueva versión: objeto con varios productos.
const productos = {
    1: {
        nombre: "Laptop",
        precio: 2500000,
        stock: 7
    },
    2: {
        nombre: "Teclado",
        precio: 120000,
        stock: 10
    },
    3: {
        nombre: "Mouse",
        precio: 65000,
        stock: 15
    }
};


// --------------------------------------------------
// 2. SOLICITAR LA CANTIDAD
// --------------------------------------------------

function solicitarCantidad(mensaje) {
    const respuesta = prompt(mensaje);

    if (respuesta === null) {
        return null;
    }

    return Number(respuesta);
}


// --------------------------------------------------
// 3. CALCULAR EL TOTAL
// --------------------------------------------------

// Versión anterior: función declarada.
// function calcularTotal(cantidad, precio) {
//     return cantidad * precio;
// }

// Nueva versión: función flecha.
const calcularTotal = (cantidad, precio) => cantidad * precio;


// --------------------------------------------------
// 4. VALIDAR LA COMPRA
// --------------------------------------------------

function validarCompra(cantidad, stock) {
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return "cantidad invalida";
    }

    if (cantidad > stock) {
        return "stock insuficiente";
    }

    return "compra valida";
}


// --------------------------------------------------
// 5. CALCULAR EL STOCK RESTANTE
// --------------------------------------------------

const calcularStockRestante = (stock, cantidad) => stock - cantidad;


// --------------------------------------------------
// 6. MOSTRAR LOS RESULTADOS
// --------------------------------------------------

function mostrarResultado(mensaje, total) {
    console.log(mensaje);
    alert(mensaje);

    if (total !== null) {
        console.log("Total a pagar:", total);
        alert("Total a pagar: $" + total);
    }
}


// --------------------------------------------------
// 7. PROCESAR LA COMPRA
// --------------------------------------------------

// Versión anterior conservada para comparar.
// Utilizaba if-else para evaluar el resultado.
/*
function procesarCompra(producto) {
    const cantidad = solicitarCantidad(
        `¿Cuántas unidades de ${producto.nombre} deseas comprar?`
    );

    if (cantidad === null) {
        console.log("Compra cancelada por el usuario.");
        return;
    }

    const resultado = validarCompra(cantidad, producto.stock);

    if (resultado === "cantidad invalida") {
        mostrarResultado(
            "La cantidad debe ser un número entero mayor que 0.",
            null
        );
    } else if (resultado === "stock insuficiente") {
        mostrarResultado(
            "No hay suficiente stock.",
            null
        );
    } else {
        const total = calcularTotal(cantidad, producto.precio);

        producto.stock = calcularStockRestante(
            producto.stock,
            cantidad
        );

        mostrarResultado(
            `Compra de ${producto.nombre} permitida. Stock restante: ${producto.stock}`,
            total
        );
    }
}
*/

// Nueva versión: utiliza switch-case.
function procesarCompra(producto) {
    const cantidad = solicitarCantidad(
        `¿Cuántas unidades de ${producto.nombre} deseas comprar?`
    );

    if (cantidad === null) {
        console.log("Compra cancelada por el usuario.");
        return;
    }

    const resultado = validarCompra(cantidad, producto.stock);

    switch (resultado) {
        case "cantidad invalida":
            mostrarResultado(
                "La cantidad debe ser un número entero mayor que 0.",
                null
            );
            break;

        case "stock insuficiente":
            mostrarResultado(
                "No hay suficiente stock.",
                null
            );
            break;

        case "compra valida": {
            const total = calcularTotal(cantidad, producto.precio);

            producto.stock = calcularStockRestante(
                producto.stock,
                cantidad
            );

            mostrarResultado(
                `Compra de ${producto.nombre} permitida. Stock restante: ${producto.stock}`,
                total
            );
            break;
        }
    }
}


// --------------------------------------------------
// 8. SELECCIONAR UN PRODUCTO
// --------------------------------------------------

// Versión anterior conservada.
// Convertía directamente la respuesta del prompt.
/*
function seleccionarProducto() {
    const opcion = Number(prompt(
        "¿Qué producto deseas comprar?\n" +
        "1. Laptop\n" +
        "2. Teclado\n" +
        "3. Mouse\n" +
        "4. Salir"
    ));

    return opcion;
}
*/

// Nueva versión: también contempla Cancelar.
function seleccionarProducto() {
    const respuesta = prompt(
        "¿Qué producto deseas comprar?\n" +
        "1. Laptop\n" +
        "2. Teclado\n" +
        "3. Mouse\n" +
        "4. Salir"
    );

    if (respuesta === null) {
        return 4;
    }

    return Number(respuesta);
}


// --------------------------------------------------
// 9. EJECUTAR LA OPCIÓN SELECCIONADA
// --------------------------------------------------

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case 1:
            procesarCompra(productos[1]);
            break;

        case 2:
            procesarCompra(productos[2]);
            break;

        case 3:
            procesarCompra(productos[3]);
            break;

        case 4:
            console.log("Saliendo del simulador.");
            return false;

        default:
            mostrarResultado(
                "Opción inválida. Elige del 1 al 4.",
                null
            );
    }

    return true;
}


// --------------------------------------------------
// 10. CICLO PRINCIPAL DEL SIMULADOR
// --------------------------------------------------

// Versión anterior conservada.
// Solo permitía comprar laptops.
/*
let continuar = true;

while (continuar) {
    const cantidad = solicitarCantidad(
        "¿Cuántas laptops deseas comprar?"
    );

    if (cantidad === null) {
        console.log("Compra cancelada por el usuario.");
        break;
    }

    const resultado = validarCompra(cantidad, stock);

    if (resultado === "cantidad invalida") {
        mostrarResultado(
            "La cantidad debe ser mayor que 0.",
            null
        );
    } else if (resultado === "stock insuficiente") {
        mostrarResultado(
            "No hay suficiente stock.",
            null
        );
    } else {
        const total = calcularTotal(cantidad, precio);

        stock = calcularStockRestante(stock, cantidad);

        mostrarResultado(
            "Compra de " + producto +
            " permitida. Stock restante: " + stock,
            total
        );
    }

    continuar = confirm("¿Deseas realizar otra compra?");
}
*/

// Nueva versión: permite elegir entre varios productos.
let continuar = true;

while (continuar) {
    const opcion = seleccionarProducto();

    if (opcion === 4) {
        console.log("Simulador finalizado.");
        alert("Gracias por utilizar el simulador.");
        break;
    }

    continuar = ejecutarOpcion(opcion);

    if (continuar) {
        continuar = confirm("¿Deseas realizar otra compra?");
    }
}


// --------------------------------------------------
// FIN DEL SIMULADOR
// --------------------------------------------------

// Mensajes finales anteriores conservados como comentario.
// Se comentaron porque la opción 4 ya muestra estos mensajes.

// console.log("Simulador finalizado.");
// alert("Gracias por utilizar el simulador.");

