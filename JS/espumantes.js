fetch(`../productos.json`)
    .then(response => response.json())
    .then((productos) => {
        let espumante = productos.filter(tipo => tipo.tipo == "espumante")
        espumante.forEach(espumante => {

            let tablaEspumantes = document.getElementById("tablaEspumantes")
            let lista = document.createElement("tr");
            lista.innerHTML =
                `<tr>
                <th scope="row"> ${i++} </th>
                <td> ${espumante.nombre} </td>
                <td> $ ${espumante.precio} </td>
                <td> <button type="button" class="btn btn-primary" id="btn-agregar${espumante.id}">agregar</button> </td>
              </tr>`
            tablaEspumantes.appendChild(lista);
        });

        let botonAgregarNSBN = document.getElementById("btn-agregar5")
        botonAgregarNSBN.onclick = () => { agregarAlCarritoNSBN() }

        let botonAgregarNSEB = document.getElementById("btn-agregar6")
        botonAgregarNSEB.onclick = () => { agregarAlCarritoNSEB() }

        let botonAgregarBB = document.getElementById("btn-agregar7")
        botonAgregarBB.onclick = () => { agregarAlCarritoBB() }

        let botonAgregarBBR = document.getElementById("btn-agregar8")
        botonAgregarBBR.onclick = () => { agregarAlCarritoBBR() }

    });

function agregarAlCarritoNSBN() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            let espumante = productos.filter(tipo => tipo.tipo == "espumante")
            checkout.push(new listaCheckout(espumante[0].id, espumante[0].nombre, espumante[0].precio, qPred, (espumante[0].precio * qPred)));
            let agregado = document.getElementById("btn-agregar5")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
}

function agregarAlCarritoNSEB() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            let espumante = productos.filter(tipo => tipo.tipo == "espumante")
            checkout.push(new listaCheckout(espumante[1].id, espumante[1].nombre, espumante[1].precio, qPred, (espumante[1].precio * qPred)));
            let agregado = document.getElementById("btn-agregar6")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
}

function agregarAlCarritoBB() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            let espumante = productos.filter(tipo => tipo.tipo == "espumante")
            checkout.push(new listaCheckout(espumante[2].id, espumante[2].nombre, espumante[2].precio, qPred, (espumante[2].precio * qPred)));
            let agregado = document.getElementById("btn-agregar7")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
}

function agregarAlCarritoBBR() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            let espumante = productos.filter(tipo => tipo.tipo == "espumante")
            checkout.push(new listaCheckout(espumante[3].id, espumante[3].nombre, espumante[3].precio, qPred, (espumante[3].precio * qPred)));
            let agregado = document.getElementById("btn-agregar8")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
}