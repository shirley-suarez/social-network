// Imputs
const inputName = document.getElementById("icon_name");
const inputEmail = document.getElementById('icon_email');
const inputPassword = document.getElementById('icon_password')
const inputPassword2 = document.getElementById('icon_password-2');
const modalBox = document.getElementById('modal1');


// botons
const google   = document.getElementById('google');
const login = document.getElementById('login');
const singup = document.getElementById('singup');


google.addEventListener("click", getProvider );


singup.addEventListener("click", event =>{
  window.social.crearCuenta(
    inputName.value,
    inputEmail.value,
    inputPassword.value,
    // inputPassword2.value
  );
})
 
