let totalCheckOut = 0

printCheckOut();
actualizarCarrito();

let cantidadInputs = document.getElementsByClassName("cantidadProductos")
for (let i = 0; i < cantidadInputs.length; i++) {
    let input = cantidadInputs[i]
    input.addEventListener("change", function (event) {
        input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        actualizarCarrito();
    })
}


let botonRemover = document.getElementsByClassName("btn-eliminar")
for (let i = 0; i < botonRemover.length; i++) {
    boton = botonRemover[i]
    boton.addEventListener("click", function (event) {
        let botonClickeado = event.target
        botonClickeado.parentElement.parentElement.remove()
        actualizarCarrito()
    })
}

let botonBorrarCarrito = document.getElementById("btn-eliminarTodo")
botonBorrarCarrito.onclick = () => {
    confirmarEliminar = prompt("seguro que desea eliminiar el carrito? si/no")
    if (confirmarEliminar == "si") {
        borrarCarrito();
        alert("el carrito fué borrado");
    } else {
        alert("no se ha borrado el carrito")
    }
};

let botonComprar = document.getElementById("boton-compra")
botonComprar.onclick = () => {
    confirmarCompra = prompt("quiere finalizar la compra? tenes un " + document.getElementById("totalCheckOut").innerText + " si/no")
    if (totalCheckOut == 0 || totalCheckOut < 0) {
        alert("por favor agregue productos antes de finalizar la compra")
    } else if (confirmarCompra == "si") {
        alert("gracias por tu compra!")
        borrarCarrito();
        printCheckOut();
    } else {
        alert("no se completo la compra, su carrito seguirá guardado")
    }
}