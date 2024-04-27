// const microfono = document.querySelector('#microfono');

// microfono.addEventListener('click', ejecutarBusquedaPorVoz);

// function ejecutarBusquedaPorVoz() {
//     const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
//     const recognition = new SpeechRecognition();

//     recognition.start();

//     recognition.onstart = function() {
//         console.log('Escuchando...');
//     };

//     recognition.onresult = function(event) {
//         const transcript = event.results[0][0].transcript;
//         console.log('Transcripción:', transcript);

//         // Colocar la transcripción en el campo de búsqueda
//         document.getElementById('buscador').value = transcript;

//         buscarProducto(transcript);
//     };

//     recognition.onerror = function(event) {
//         console.error('Error en el reconocimiento de voz:', event.error);
//     };
// }

// function buscarProducto(consulta) {
//     const cursos = document.querySelectorAll('.info-card h4');
//     let productoEncontrado = false;

//     cursos.forEach(curso => {
//         const titulo = curso.textContent.toLowerCase();
//         const resultado = titulo.includes(consulta.toLowerCase());

//         if (resultado) {
//             console.log('Resultado de búsqueda:', curso.parentElement.parentElement);
//             curso.parentElement.parentElement.style.display = 'block';
//             productoEncontrado = true;
//         } else {
//             curso.parentElement.parentElement.style.display = 'none';
//         }
//     });

//     // Mostrar el mensaje "Producto no existente" si no se encontró ningún producto
//     mostrarOcultarMensajeNoExistente(!productoEncontrado);
// }

const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarBusquedaPorVoz);

function ejecutarBusquedaPorVoz() {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    // Desvincular el evento click después de iniciar el reconocimiento de voz
    microfono.removeEventListener('click', ejecutarBusquedaPorVoz);

    recognition.onstart = function() {
        console.log('Escuchando...');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Transcripción:', transcript);

        // Colocar la transcripción en el campo de búsqueda
        document.getElementById('buscador').value = transcript;

        buscarProducto(transcript);
    };

    recognition.onerror = function(event) {
        console.error('Error en el reconocimiento de voz:', event.error);
    };
}

function buscarProducto(consulta) {
    const cursos = document.querySelectorAll('.info-card h4');
    let productoEncontrado = false;

    cursos.forEach(curso => {
        const titulo = curso.textContent.toLowerCase();
        const resultado = titulo.includes(consulta.toLowerCase());

        if (resultado) {
            console.log('Resultado de búsqueda:', curso.parentElement.parentElement);
            curso.parentElement.parentElement.style.display = 'block';
            productoEncontrado = true;
        } else {
            curso.parentElement.parentElement.style.display = 'none';
        }
    });

    // Mostrar el mensaje "Producto no existente" si no se encontró ningún producto
    mostrarOcultarMensajeNoExistente(!productoEncontrado);
}
