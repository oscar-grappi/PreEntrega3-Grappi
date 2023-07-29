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
        checkout[i].cantidad = input.value
        guardarCarritoJSON();
        actualizarCarrito();
    })
}


let botonRemover = document.getElementsByClassName("btn-eliminar")
for (let i = 0; i < botonRemover.length; i++) {
    boton = botonRemover[i]
    boton.addEventListener("click", function (event) {
        let botonClickeado = event.target
        botonClickeado.parentElement.parentElement.remove()
        let checkoutFake = checkout.splice(i, 1)
        guardarCarritoJSON();
        actualizarCarrito();
        location.reload();
    })
}

let botonBorrarCarrito = document.getElementById("btn-eliminarTodo")
botonBorrarCarrito.onclick = () => {
    Swal.fire({
        title: 'Quiere borrar el carrito?',
        text: "este cambio no es reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, borrar el carrito',
        cancelButtonText: `no todavia!`,
    }).then((result) => {
        if (result.isConfirmed) {
            borrarCarrito();
            Swal.fire(
                '',
                'El carrito fue borrado!',
                'success'
            )
        } else {
            swal.fire(
                '',
                'El carrito seguirá guardado!',
                'success'
            )
        }
    })
}


let botonComprar = document.getElementById("boton-compra")
botonComprar.onclick = () => {
    if (totalCheckOut == 0 || totalCheckOut < 0) {
        Swal.fire({
            icon: 'error',
            title: 'falta algo',
            text: 'agregue productos antes de proseguir',
        })
    } else {
        confirmarCompra = Swal.fire({
            title: 'queres finalizar la compra e ir al pago?',
            showDenyButton: true,
            confirmButtonText: '<a href="./pago.html" style="color:white">si, quiero proseguir al pago</a>',
            denyButtonText: `no! todavia me faltó algo`,
        }).then((result) => {
            if (result.isDenied) {
                Swal.fire('el carrito seguirá guardado mientras terminas la compras!', '', 'info')
            } else if (result.isConfirmed) {
                guardarTotalCompra ();
                borrarCarrito ();
                printCheckOut();
            }
        })
    }
}