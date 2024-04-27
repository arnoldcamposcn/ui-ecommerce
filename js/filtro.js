



// Espera a que el contenido del documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento select con el id 'select-precio'
    const selectPrecio = document.querySelector('#select-precio');

    // Agrega un evento de cambio al elemento select
    selectPrecio.addEventListener('change', function() {
        // Obtiene el valor seleccionado en el select
        const precioSeleccionado = selectPrecio.value;

        // Obtiene todos los elementos con la clase 'four columns' dentro del contenedor con el id 'lista-cursos'
        const cursos = document.querySelectorAll('#lista-cursos .four.columns');

        // Recorre cada curso
        cursos.forEach(curso => {
            // Obtiene el precio del curso del atributo 'data-precio' y lo convierte a un número
            const precioCurso = parseFloat(curso.getAttribute('data-precio'));
            
            // Verifica si el curso está dentro del rango seleccionado o si se seleccionó 'Todos'
            if (precioSeleccionado === '0-0' || (precioCurso >= parseFloat(precioSeleccionado.split('-')[0]) && precioCurso <= parseFloat(precioSeleccionado.split('-')[1]))) {
                // Si el curso está dentro del rango, lo muestra
                curso.style.display = 'block';
            } else {
                // Si el curso no está dentro del rango, lo oculta
                curso.style.display = 'none';
            }
        });
    });
});
