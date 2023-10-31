document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#correo');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    const nuevoComentario = document.getElementById('nuevoComentario');
    const listaComentarios = document.getElementById('comentarios');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      if (nombre.value === '' || correo.value === '' || asunto.value === '' || mensaje.value === '') {
        mensajeEnviado.textContent = 'Por favor, complete todos los campos.';
        mensajeEnviado.style.color = 'red';
      } else {
        mensajeEnviado.textContent = 'Formulario enviado exitosamente.';
        mensajeEnviado.style.color = 'yellow';
        form.reset();
      }
  
      mensajeEnviado.style.display = 'block';
    });
  
    document.getElementById('agregarComentario').addEventListener('click', function() {
      const comentario = nuevoComentario.value;
      if (comentario !== '') {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = comentario;
        listaComentarios.appendChild(nuevoElemento);
        nuevoComentario.value = ''; // Limpia el campo de entrada
      }
    });
  });
  