// ---------------- Constantes, Arrays y Varialbes universales ------------------------ //

const productos = [
    { id: 1, nombre: "Rutini Caberner-Malbec", tipo: "vino", precio: 3450 },
    { id: 2, nombre: "Nicasia Malbec", tipo: "vino", precio: 1860 },
    { id: 3, nombre: "Trumpeter Malbec", tipo: "vino", precio: 2050 },
    { id: 4, nombre: "Escorihuela Cabernet Sauvignon", tipo: "vino", precio: 1670 },
    { id: 5, nombre: "Nieto Senetiner Brut Nature", tipo: "espumante", precio: 2250 },
    { id: 6, nombre: "Nieto Senetiner Extra Brut", tipo: "espumante", precio: 2150 },
    { id: 7, nombre: "Baron.B", tipo: "espumante", precio: 4905 },
    { id: 8, nombre: "Baron.B Rosé", tipo: "espumante", precio: 6100 },
    { id: 9, nombre: "Johnnie Walker Red Label", tipo: "bebida", precio: 5640 },
    { id: 10, nombre: "Johnnie Walker Black Label", tipo: "bebida", precio: 9700 },
    { id: 11, nombre: "Absolut Vodka", tipo: "bebida", precio: 5520 },
    { id: 12, nombre: "Jack Daniels", tipo: "bebida", precio: 10764 },
];

// - filtros

const vino = productos.filter(tipo => tipo.tipo == "vino");
const espumante = productos.filter(tipo => tipo.tipo == "espumante");
const bebidas = productos.filter(tipo => tipo.tipo == "bebida");

// - checkout

let checkout = [];
let checkoutArray = (clave, valor) => { localStorage.setItem(clave, valor) };
class listaCheckout {
    constructor(nombre, precio, cantidad, subtotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
}

// - variables
let i = 1;
let total = 0;
let cantidad = 1;
let idBebida;

// ------------------------------ Funciones ------------------------------------ //

function printVinos() {

    vino.forEach(Vino => {

        let tablaVino = document.getElementById("tablaVinos")
        let lista = document.createElement("tr");
        lista.innerHTML =
            `<tr>
        <th scope="row"> ${i++} </th>
        <td> ${Vino.nombre} </td>
        <td> $ ${Vino.precio} </td>
        <td> <button type="button" class="btn btn-primary" id="btn-agregar${Vino.id}">agregar</button> </td>
      </tr>`
        tablaVino.appendChild(lista);
    });
};

function printEspumantes() {

    espumante.forEach(Espumante => {

        let tablaEspumante = document.getElementById("tablaEspumantes")
        let lista = document.createElement("tr");
        lista.innerHTML =
            `<tr>
        <th scope="row"> ${i++} </th>
        <td> ${Espumante.nombre} </td>
        <td> ${Espumante.precio} </td>
        <td> <button type="button" class="btn btn-primary" id="btn-agregar${Espumante.id}">agregar</button> </td>
      </tr>`
        tablaEspumante.appendChild(lista);
    });
};

function printBebidas() {

    bebidas.forEach(Bebida => {

        let tablaBebida = document.getElementById("tablaBebidas")
        let lista = document.createElement("tr");
        lista.classList.add("row-productos")
        lista.innerHTML =
            `<tr>
        <th scope="row"> ${i++} </th>
        <td class="nombre-producto"> ${Bebida.nombre} </td>
        <td class="precio-producto"> $ ${Bebida.precio} </td>
        <td> <button type="button" class="btn btn-primary btn-agregar" id="btn-agregar${Bebida.id}">agregar</button> </td>
      </tr>`
        tablaBebida.appendChild(lista);
    });
};

function printCheckOut() {

    checkout.forEach(producto => {

        let tablaCheckOut = document.getElementById("tablaCheckOut")
        let lista = document.createElement("tr");
        lista.classList.add("row-productos")
        lista.innerHTML =
            `<tr>
        <th scope="row"> ${i++} </th>
        <td class="nombre-producto"> ${producto.nombre} </td>
        <td class="precio-producto"> $ ${producto.precio} </td>
        <td class ="cantidad-producto"> ${cantidad} </td>
        <td> <button type="button" class="btn btn-danger btn-eliminar" id="btn-eliminar${producto.id}">eliminar</button> </td>
        </tr>`
        tablaCheckOut.appendChild(lista);
    });
};



function guardarCarritoJSON() {
    checkoutArray("listaArray", JSON.stringify(checkout));
};

function bajarCarritoJSON() {
    checkout = JSON.parse(localStorage.getItem("listaArray"))
}

function borrarCarrito() {
    localStorage.clear();
    checkout = []
    checkoutArray = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarCarritoJSON();
    let tablaCheckOut = document.getElementById("tablaCheckOut")
    tablaCheckOut.remove()
}

function actualizarCarrito(){
    let listaCheckOut = document.getElementsByClassName("tablaCheckOut")[0]
    let lineaProductosCheckOut = listaCheckOut.getElementsByClassName("row-productos")
    let totalCheckOut = 0
    for (let i=0; i< lineaProductosCheckOut.length; i++) {
        let lineaProductos = lineaProductosCheckOut[i]
        let productoPrecio = lineaProductos.getElementsByClassName("precio-producto")[0]
        let productoCantidad = lineaProductos.getElementsByClassName("cantidad-producto")[0]
        let precio = parseFloat(productoPrecio.innerText.replace("$", ""))
        let cantidad = parseFloat(productoCantidad.innerText)
        totalCheckOut = totalCheckOut + (precio*cantidad)
    }
    document.getElementById("totalCheckOut").innerText = "total:  $" + totalCheckOut
    
}
// -------------------------------- Ejecuciones ---------------------------------- //
bajarCarritoJSON()