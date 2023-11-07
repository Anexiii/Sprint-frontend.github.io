// Función para manejar el envío del formulario
function manejarFormularioSubmit(event) {
  event.preventDefault();

  const form = document.querySelector('form');
  const nombre = document.querySelector('#nombre');
  const correo = document.querySelector('#correo');
  const asunto = document.querySelector('#asunto');
  const mensaje = document.querySelector('#mensaje');
  const mensajeEnviado = document.getElementById('mensaje-enviado');

  if (nombre.value === '' || correo.value === '' || asunto.value === '' || mensaje.value === '') {
    mensajeEnviado.textContent = 'Por favor, complete todos los campos.';
    mensajeEnviado.style.color = 'red';
  } else {
    mensajeEnviado.textContent = 'Formulario enviado exitosamente.';
    mensajeEnviado.style.color = 'yellow';
    form.reset();
  }

  mensajeEnviado.style.display = 'block';
}

// Función para manejar la adición de comentarios
function manejarAgregarComentarioClick() {
  const nuevoComentario = document.getElementById('nuevoComentario');
  const listaComentarios = document.getElementById('comentarios');
  const comentario = nuevoComentario.value;

  if (comentario !== '') {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = comentario;
    listaComentarios.appendChild(nuevoElemento);
    nuevoComentario.value = ''; // Limpia el campo de entrada
  }
}

// Asignar las funciones a los eventos correspondientes
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const agregarComentarioButton = document.getElementById('agregarComentario');

  form.addEventListener('submit', manejarFormularioSubmit);
  agregarComentarioButton.addEventListener('click', manejarAgregarComentarioClick);

  // Evento para mostrar todos los comentarios
  const mostrarComentariosButton = document.getElementById('mostrarComentarios');
  const listaComentarios = document.getElementById('comentarios');

  mostrarComentariosButton.addEventListener('click', function() {
    listaComentarios.style.display = 'block';
  });
});
