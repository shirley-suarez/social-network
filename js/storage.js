// Para saber si el local storage está disponible en este navegador

if (typeof(Storage) !== "undefined") {
  console.log ('LocalStorage disponible');
} else {
  console.log('LocalStorage no soportado en este navegador');
}


// // para guardar datos en el local storage
// localStorage.setItem("name", "Jonh parra");

// // para recuperar esos datos guardados
// localStorage.getItem("name");
