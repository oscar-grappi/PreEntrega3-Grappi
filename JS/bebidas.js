printBebidas();

function agregarAlCarritoRL() {
    let qPred = 1;
    checkout.push(new listaCheckout(bebidas[0].nombre, bebidas[0].precio, qPred, (bebidas[0].precio * qPred)));
    let agregado = document.getElementById("btn-agregar9")
    agregado.classList.add("disabled")
    agregado.innerText = "Agregado!"
    guardarCarritoJSON();
}
function agregarAlCarritoBL() {
    let qPred = 1;
    checkout.push(new listaCheckout(bebidas[1].nombre, bebidas[1].precio, qPred, (bebidas[1].precio * qPred)));
    let agregado = document.getElementById("btn-agregar10")
    agregado.classList.add("disabled")
    agregado.innerText = "Agregado!"
    guardarCarritoJSON();
}
function agregarAlCarritoAV() {
    let qPred = 1;
    checkout.push(new listaCheckout(bebidas[2].nombre, bebidas[2].precio, qPred, (bebidas[2].precio * qPred)));
    let agregado = document.getElementById("btn-agregar11")
    agregado.classList.add("disabled")
    agregado.innerText = "Agregado!"
    guardarCarritoJSON();
}
function agregarAlCarritoJD() {
    let qPred = 1;
    checkout.push(new listaCheckout(bebidas[3].nombre, bebidas[3].precio, qPred, (bebidas[3].precio * qPred)));
    let agregado = document.getElementById("btn-agregar12")
    agregado.classList.add("disabled")
    agregado.innerText = "Agregado!"
    guardarCarritoJSON();
}

let botonAgregarJWRL = document.getElementById("btn-agregar9")
botonAgregarJWRL.onclick = () => {agregarAlCarritoRL()}

let botonAgregarJWBL = document.getElementById("btn-agregar10")
botonAgregarJWBL.onclick = () => {agregarAlCarritoBL()}

let botonAgregarAV = document.getElementById("btn-agregar11")
botonAgregarAV.onclick = () => {agregarAlCarritoAV()}

let botonAgregarJD = document.getElementById("btn-agregar12")
botonAgregarJD.onclick = () => {agregarAlCarritoJD()}

console.log (checkout);