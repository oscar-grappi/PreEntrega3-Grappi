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
                    title: 'Compra Finalizada',
                    text: 'muchas gracias por su compra, vuelva pronto!',
                    confirmButtonText: '<a href="../index.html" style="color:white">genial!</a>',
                })
            }
            form.classList.add('was-validated')
        }, false)
    })
})()



