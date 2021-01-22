/* ================================================================================================ */
// 1.- Funciones para validaciones
/* ================================================================================================ */
// 1.1.- Funcion para validar nombre de usuario
//       Alphanumeric string that may include and having a length of 8 to 8 characters
/* ------------------------------------------------------------------------------------------------ */
function validateUsername(username) {
 const usernameRegex = /^[a-zA-Z0-9]{8,8}$/
 if(usernameRegex.test(username)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

// 1.2.- Funcion para validar Email
/* ------------------------------------------------------------------------------------------------ */
function validateEmail(email) {
 const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 if(emailRegex.test(email)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

// 1.3.- Funcion para validar Password Fuerte
//       Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character
//       and be at least 8 characters long
/* ------------------------------------------------------------------------------------------------ */
function validatePasswordComplex(password) {
 const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
 if(passwordRegex.test(password)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */
/* ================================================================================================ */

export default {
 validateUsername,
 validateEmail,
 validatePasswordComplex,
}
