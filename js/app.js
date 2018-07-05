document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let database = firebase.database();
let buttonLogout =document.getElementById('logout');



let objDB={
  users:[]
}
// console.log(objDB)
var contador = new Date().getTime();

var formulario = document.getElementById("crear-post")

const extraerDatosForm = (e) => {
  e.preventDefault();

  let date = `${new Date()}`;
  const user =  { "id": contador,
                "nombre" : document.getElementById("nombre").innerHTML,
                "correo" : document.getElementById("correo").innerHTML,
                "Fecha" : date,
                "mensaje" : document.getElementById("mensaje").value
              }
  console.log(user);  
  console.log(objDB.users)
  objDB.users.push(user)
  contador++;
  crearJsonNuevaEmpresa(objDB);
}

formulario.addEventListener("submit",extraerDatosForm);

const crearJsonNuevaEmpresa = (users) => {
  // console.log(users);
  database.ref("/").set(users);
}


const mostrarPost = () => {
  //Leer datos en BD:
  database.ref('/users').on('value',(snapshot) => {
    let user= snapshot.val();
    // console.log(user);
    objDB.users = user;
    crearPostInDom(user);
  })
}

mostrarPost();

const crearPostInDom = (posts) => {
  var plantillaFinal = "";
  // let plantilla = ""
  const containerPost= document.getElementById('container-posts')
  posts.forEach(function (post) {
  plantillaFinal += `<div class="row">
                      <div class="col s12">
                        <div class="card black">
                          <div class="card-content white-text">
                            <span class="card-title">${post.nombre}</span>
                            <p>${post.mensaje}.</p>
                            <span>${post.Fecha}</span>
                            </div>
                            <div class="card-action">
                              <a href="#">Editar</a>
                              <a href="#">Eliminar</a>
                            </div>
                          </div>
                        </div>
                      </div>`
  });
  containerPost.insertAdjacentHTML("beforeend" ,plantillaFinal);
}


printUserResult = () => {
  let printName = document.getElementById('nombre');
  let printEmail = document.getElementById('correo');
  let imageUser = document.getElementById('imagen-usuario')
  let userReturn = JSON.parse(localStorage.getItem("resultado"));
  let nameResult = userReturn.displayName;
  let emailResult = userReturn.email;
  let imageUserReturn = userReturn.photoURL  ;
  console.log(userReturn);

  printName.innerHTML = nameResult;
  printEmail.innerHTML = emailResult;
  imageUser.innerHTML = `<a id="imagen-usuario" href="#user"><img class="circle" src="${imageUserReturn}"></a>`
}

printUserResult();



killSesion = () => {
  alert('Bye');
}

buttonLogout.addEventListener('click', killSesion);
