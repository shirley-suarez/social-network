window.social= {

crearCuenta: (name, email, pass, ) => {
    console.log(name, email, pass, )
    // location.href='../views/singin.html'
  if (name.length !== 0 && email.length !== 0 && pass.length !== 0) {
    // alert(name, email, pass);
    location.href='../views/singin.html';
    }else {
      error();
    }
  },

  ingresarAMuro : ()  => {
    location.href='../views/muro.html';
  },

  validarDatosMensaje : (event) => {
    const targetEvent = event.target.value.trim();
  	if (targetEvent.length > 0 && targetEvent.length < 141 ) {
      return true;
  	} else {
      return false;
    }
  }
};

error = () => {
  alert("rellena todos los campos");
};
