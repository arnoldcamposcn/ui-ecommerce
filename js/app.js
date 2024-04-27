
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBnt = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarListeners();
function cargarListeners(){
    //cuando agregas un curso presionando "Agregar carrito"
    listaCursos.addEventListener('click',agregarCurso);

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    
    // Muestra los cursos de Local Storage
    document.addEventListener('DOMContentLoaded',() =>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    vaciarCarritoBnt.addEventListener('click', () =>{
    articulosCarrito = [];  // Reseteamos el carreglo
    limpiarHTML(); //Eliminamos todo el html
    })
}

function agregarCurso(e){
     // Previene el comportamiento predeterminado del evento
    e.preventDefault();


    // Verifica si el elemento clicado tiene la clase 'agregar-carrito'
   if( e.target.classList.contains('agregar-carrito') ){

     // Obtiene el elemento que representa el curso seleccionado

    const cursoSeleccionado = e.target.parentElement.parentElement;
    // Llama a la función 'leerDatosCurso' pasando el curso seleccionado como argumento
    leerDatosCurso(cursoSeleccionado);
}
}


//Elminar un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        carritoHTML();  //Iterar sobre el carrito y mostrar su HTML
       
    }
}


//lee el contenido html
function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
    if(existe){
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map( curso =>{
        if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso;
        }else{
            return curso;
        }
   });
   articulosCarrito = [...cursos];
   }else{
    //Agrega elementos al articulo del carrito
    articulosCarrito= [...articulosCarrito, infoCurso];
   }
    
    console.log(articulosCarrito);
    carritoHTML();
}

//muestra el carrito de compras

function carritoHTML() {

    // Limpiar carrito 
    limpiarHTML();

    // Recorre el carrito y genera el html 
    articulosCarrito.forEach( curso=> {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement('tr'); 
    row.innerHTML= `
    <td>
        <img src="${imagen}" width="100">
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${id}"> X </a>
    </td>
    `;
    
    // Agregar el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
});

    //Agregar el carrito de compras al storage
    sincronizarStorage();
}

    function sincronizarStorage(){
        localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
    }


    function limpiarHTML(){
        // contenedorCarrito.innerHTML = '';

        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }
