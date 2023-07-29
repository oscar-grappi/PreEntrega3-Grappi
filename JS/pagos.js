let totalFinal = JSON.parse(sessionStorage.getItem("precioTotal")) || [];

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                Swal.fire({
                    icon: 'success',
                    title: `Compra Finalizada, se le enviara la factura a ${document.getElementById("emailCliente").value} por un total de $${totalFinal}`,
                    text: `muchas gracias por tu compra ${document.getElementById("nombreCliente").value}, volvé pronto!`,
                    confirmButtonText: '<a href="../index.html" style="color:white">genial!</a>',
                })
            }
            form.classList.add('was-validated')
        }, false)
    })
})()