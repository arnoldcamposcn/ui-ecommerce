


document.addEventListener('DOMContentLoaded', function () {

    const inputBusqueda = document.getElementById('buscador');

    // Obtiene todos los elementos que representan los cursos
    const cursos = document.querySelectorAll('.card');

    inputBusqueda.addEventListener('input', function () {
        // Obtiene el texto de búsqueda del campo de entrada y lo convierte a minúsculas
        const textoBusqueda = inputBusqueda.value.trim().toLowerCase();

        
        // Itera sobre cada uno de los cursos
        cursos.forEach(function (curso) {
            const tituloCurso = curso.querySelector('h4').textContent.toLowerCase();  // Obtiene el texto del título del curso

            if (tituloCurso.includes(textoBusqueda)) {
                curso.style.display = 'block'; // Muestra el curso si coincide con la búsqueda
            } else {
                curso.style.display = 'none'; // Oculta el curso si no coincide con la búsqueda
            }
        });
    });
});




// INDICADOR DE CARGANDO 

document.addEventListener('DOMContentLoaded', function() {
    const microfono = document.getElementById('microfono');
    const textoOriginal = document.getElementById('texto-original');
    const textoCarga = document.getElementById('texto-carga');

    microfono.addEventListener('click', function() {
        textoOriginal.classList.toggle('ocultar');
        textoCarga.classList.toggle('ocultar');

        setTimeout(function() {
            textoOriginal.classList.toggle('ocultar');
            textoCarga.classList.toggle('ocultar');
        }, 2000);
    });
});





// CUANDO SE BUSCA UN PRODUCTO Y NO EXISTE USAREMOS ESTA FUNCION 

document.addEventListener('DOMContentLoaded', function () {
    const inputBusqueda = document.getElementById('buscador');
    const cursos = document.querySelectorAll('.card');
    const listaCursos = document.getElementById('lista-cursos');

    // Crear y configurar el elemento para el mensaje "Producto no existente"
    const mensajeNoExistente = document.createElement('p');
    mensajeNoExistente.id = 'mensaje-no-existente';
    mensajeNoExistente.textContent = 'Producto no existente';
    mensajeNoExistente.style.display = 'none'; // Ocultar mensaje inicialmente
    listaCursos.appendChild(mensajeNoExistente);

    inputBusqueda.addEventListener('input', function () {
        const textoBusqueda = inputBusqueda.value.trim().toLowerCase();
        let cursosMostrados = false;

        cursos.forEach(function (curso) {
            const tituloCurso = curso.querySelector('h4').textContent.toLowerCase();
            const coincidencia = tituloCurso.includes(textoBusqueda);
            curso.style.display = coincidencia ? 'block' : 'none';
            if (coincidencia) {
                cursosMostrados = true;
            }
        });

        mostrarOcultarMensajeNoExistente(!cursosMostrados);
    });
});

function mostrarOcultarMensajeNoExistente(mostrar) {
    const mensajeNoExistente = document.getElementById('mensaje-no-existente');
    mensajeNoExistente.style.display = mostrar ? 'block' : 'none';
    mensajeNoExistente.style.fontSize = mostrar ? '20px' : 'initial'; // Cambiar el tamaño del texto a 20px si se muestra
}
