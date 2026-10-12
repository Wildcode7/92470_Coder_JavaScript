const producto = "Laptop";
const precio = 2500000;
let stock = 7;

function solicitarCantidad(mensaje) {
    const respuesta = prompt(mensaje);

    if (respuesta === null) {
        return null;
    }

    return Number(respuesta);
}

function calcularTotal(cantidad, precio) {
    return cantidad * precio;
}


function validarCompra(cantidad, stock) {
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return "cantidad_invalida";
    }

    if (cantidad > stock) {
        return "stock_insuficiente";
    }

    return "compra_valida";
}


const calcularStockRestante = (stock, cantidad) => stock - cantidad;


function mostrarResultado(mensaje, total) {
    console.log(mensaje);
    alert(mensaje);

    if (total !== null) {
        console.log("Total a pagar:", total);
        alert("Total a pagar: $" + total);
    }
}

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

    if (resultado === "cantidad_invalida") {
        mostrarResultado(
            "La cantidad debe ser mayor que 0.",
            null
        );

    } else if (resultado === "stock_insuficiente") {
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

console.log("Simulador finalizado.");
alert("Gracias por utilizar el simulador.");









