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
  // const printName = document.getElementById('print-name');

    console.log(window.location.pathname)
  let userReturn = JSON.parse(localStorage.getItem("resultado"));
  let nameResult = userReturn.displayName;
  let emailResult = userReturn.email;
  console.log(printName)
  // printName.innerHTML = nameResult;
  }
};

error = () => {
  alert("rellena todos los campos");
}