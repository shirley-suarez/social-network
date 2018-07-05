document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let database = firebase.database();

var contador = new Date().getTime();
const objDB={
  users:[]
}

var formulario = document.getElementById("crear-post")

const extraerDatosForm = (e) => {
  e.preventDefault();
  let date = `${new Date()}`;
  console.log(date);
  const user =  { "id": contador,
                "nombre" : document.getElementById("nombre").innerHTML,
                "correo" : document.getElementById("correo").innerHTML,
                "Fecha" : date,
                "mensaje" : document.getElementById("mensaje").value
              }
  console.log(user);
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
    console.log(user);
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
  containerPost.innerHTML = plantillaFinal;
}
