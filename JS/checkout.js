printCheckOut();
actualizarCarrito();

let botonRemover = document.getElementsByClassName("btn-eliminar")
for (let i = 0; i < botonRemover.length; i++) {
    boton = botonRemover[i]
    boton.addEventListener("click", function(event) {
        let botonClickeado = event.target
        botonClickeado.parentElement.parentElement.remove()
        actualizarCarrito()
    })
}

let botonBorrarCarrito = document.getElementById("btn-eliminarTodo")
botonBorrarCarrito.onclick = () => {
    confirmarEliminar = prompt ("seguro que desea eliminiar el carrito? si/no")
    if (confirmarEliminar == "si") {
        borrarCarrito();
        alert("el carrito fué borrado");
    }else {
        alert("no se ha borrado el carrito")
    }
};

let botonComprar = document.getElementById("boton-compra")
botonComprar.onclick = () => {
    confirmarCompra = prompt("quiere finalizar la compra? tenes un " + document.getElementById("totalCheckOut").innerText + " si/no")
    if (confirmarCompra == "si") {
    alert ("gracias por tu compra!")
    borrarCarrito();
    actualizarCarrito();
    } else {
        alert ("no se completo la compra, su carrito seguirá guardado")
    }
}