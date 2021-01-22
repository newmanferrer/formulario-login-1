/* ================================================================================================ */
// 1.- Importaciones 
/* ================================================================================================ */
import validate from './validate.js';
/* ================================================================================================ */

/* ================================================================================================ */
// 2.- Declaración de constantes y variables 
/* ================================================================================================ */
const d = document;
const $formulario = d.getElementById('formulario');
const $messageContainer = d.getElementById('message-container');
const $modalHelpContainer = d.getElementById('modal-help-container');
/* ================================================================================================ */

/* ================================================================================================ */
// 3.- Eventos de escucha 
/* ================================================================================================ */
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.target.matches('#formulario')) return false;

  const userNameEmail = event.target.username.value;
  const password = event.target.password.value;
  $messageContainer.classList.add('none');
  let message = '';

  if ((!validate.validateUsername(userNameEmail)) && (!validate.validateEmail(userNameEmail))) {
   message = `
    <p class="message-paragraph">Username o Email no validos
     <a class="message-link" href="#">Ayuda?</a> 
    </p>
   `;
  }

  if (!validate.validatePasswordComplex(password)) {
   message = `
    <p class="message-paragraph">Password no valido
     <a class="message-link" href="#">Ayuda?</a> 
    </p>
   `;
  }

  if (message !== '') {
   $messageContainer.classList.remove('none');
   $messageContainer.innerHTML = message;
  } else {
   $formulario.reset();

   setTimeout(() => {
    alert('Acceso autorizado...');
   }, 2000);
  }
});

$messageContainer.addEventListener('click', (event) => {
 if (!event.target.matches('#message-container a')) return false;
 $modalHelpContainer.classList.add('modal--show');
});

$modalHelpContainer.addEventListener('click', (event) => {
 if (!event.target.matches('#modal-help-container')) return false;
 $modalHelpContainer.classList.remove('modal--show');
});
/* ================================================================================================ */
