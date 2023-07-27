fetch(`../productos.json`)
    .then(response => response.json())
    .then((productos) => {
        let vino = productos.filter(tipo => tipo.tipo == "vino")
        vino.forEach(vino => {

            let tablaVino = document.getElementById("tablaVinos")
            let lista = document.createElement("tr");
            lista.innerHTML =
                `<tr>
                <th scope="row"> ${i++} </th>
                <td> ${vino.nombre} </td>
                <td> $ ${vino.precio} </td>
                <td> <button type="button" class="btn btn-primary" id="btn-agregar${vino.id}">agregar</button> </td>
              </tr>`
            tablaVino.appendChild(lista);
        });

        let botonAgregarRCM = document.getElementById("btn-agregar1")
        botonAgregarRCM.onclick = () => { agregarAlCarritoRCM() }

        let botonAgregarNM = document.getElementById("btn-agregar2")
        botonAgregarNM.onclick = () => { agregarAlCarritoNM() }

        let botonAgregarTM = document.getElementById("btn-agregar3")
        botonAgregarTM.onclick = () => { agregarAlCarritoTM() }

        let botonAgregarECS = document.getElementById("btn-agregar4")
        botonAgregarECS.onclick = () => { agregarAlCarritoECS() }
    });

function agregarAlCarritoRCM() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            vino = productos.filter(tipo => tipo.tipo == "vino")
            checkout.push(new listaCheckout(vino[0].nombre, vino[0].precio, qPred, (vino[0].precio * qPred)));
            let agregado = document.getElementById("btn-agregar1")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
};

function agregarAlCarritoNM() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            vino = productos.filter(tipo => tipo.tipo == "vino")
            checkout.push(new listaCheckout(vino[1].nombre, vino[1].precio, qPred, (vino[1].precio * qPred)));
            let agregado = document.getElementById("btn-agregar2")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
};

function agregarAlCarritoTM() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            vino = productos.filter(tipo => tipo.tipo == "vino")
            checkout.push(new listaCheckout(vino[2].nombre, vino[2].precio, qPred, (vino[2].precio * qPred)));
            let agregado = document.getElementById("btn-agregar3")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
};

function agregarAlCarritoECS() {
    let qPred = 1;
    fetch(`../productos.json`)
        .then(response => response.json())
        .then((productos) => {
            vino = productos.filter(tipo => tipo.tipo == "vino")
            checkout.push(new listaCheckout(vino[3].nombre, vino[3].precio, qPred, (vino[3].precio * qPred)));
            let agregado = document.getElementById("btn-agregar4")
            agregado.classList.add("disabled")
            agregado.innerText = "Agregado!"
            guardarCarritoJSON();
        })
};