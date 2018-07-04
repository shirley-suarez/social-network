window.social= {
crearCuenta: (name, email, pass, ) => {
    console.log(name, email, pass, )
    // location.href='../views/singin.html'

  if (name.length !== 0 && email.length !== 0 && pass.length !== 0) {
    location.href='../views/content.html';
    }else {
      modal();
    }
  }
};

modal= () => {
alert("rellena todos los campos");
}
