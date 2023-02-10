

const pintarCarrito = () => {
    modalContainer.innerHTML= "";
    modalContainer.style.display= "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
modalContainer.append(modalHeader);
console.log(carrito.length);
const modalbutton = document.createElement("h1");
modalbutton.innerText = "❌";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener("click", () => {
modalContainer.style.display = "none";


});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
let carritoContent = document.createElement("div");
carritoContent.className = "modal-content";
carritoContent.innerHTML = `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p>${product.precio}$ </p>
<p>cantidad:${product.cantidad}</p>
<p>Total:${product.cantidad * product.precio}</p>

`;

modalContainer.append(carritoContent);



let eliminar = document.createElement("span");

eliminar.innerText = "❌ ";
eliminar.className = "delete-product";
carritoContent.append(eliminar);



eliminar.addEventListener("click",eliminarProducto)

}) 



const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad,0);

const totalBuying = document.createElement("div");
totalBuying.className = "total-content"
totalBuying.innerHTML = `Total a pagar: ${total}$`;
 modalContainer.append(totalBuying);

};

verCarrito.addEventListener("click", pintarCarrito);




const eliminarProducto = () =>{
    const foundId = carrito.find((element)=>element.id);
    Swal.fire(
        'Quitaste un producto del carrito',
        'para continuar hacer click en OK',
        'error',
        
    )
    carrito = carrito.filter((carritoId)=> {
        return carritoId !== foundId;
    });
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;

}

