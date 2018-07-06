document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let database = firebase.database();

let objDB={
  posts:[]
}

var contador = new Date().getTime();

let userReturn = JSON.parse(localStorage.getItem("resultado"));
var contador = new Date().getTime();

var formulario = document.getElementById("crear-post")

const createObjPost = (userReturn) => {
  // para cuando ropas la bdd
  // posts:[]
  console.log(userReturn);
  let date = `${new Date()}`;
  console.log(date);
  const user =  { "idPerfil": userReturn.uid,
                "nombre" : userReturn.displayName,
                "correo" : userReturn.email,
                "FotoURL": userReturn.photoURL,
                "mensaje" : {
                  "idPost": contador,
                  "Fecha" : date,
                  "like" : 0,
                  "textMensaje" : document.getElementById("mensaje").value
                }
              }
  console.log(user);
  objDB.posts.unshift(user)
  contador++;
  crearJsonNuevoPost(objDB);
  document.getElementById("mensaje").value = " ";
}

formulario.addEventListener("submit",() => {
  event.preventDefault();
  createObjPost(userReturn);
  }
);

const crearJsonNuevoPost = (posts) => {
  database.ref("/").set(posts);
}


const mostrarPost = () => {
  //Leer datos en BD:
  database.ref('/posts').on('value',(snapshot) => {
    let user= snapshot.val();
    objDB.posts = user;
    crearPostInDom(user);
  })
}

mostrarPost();

const crearPostInDom = (posts) => {
 // let containerPost= document.getElementById('container-posts').value = " ";

  var plantillaFinal = "";
  let containerPost= document.getElementById('container-posts');
  posts.forEach(function (post) {
  plantillaFinal += `<div class="row">
                      <div class="col s12">
                        <div class="card black">
                          <div class="card-content white-text">
                            <span class="card-title">${post.nombre}</span>
                            <span class="fz-10 c-dorado">${post.mensaje.Fecha}</span>
                            <p class="fz-16">${post.mensaje.textMensaje}</p>
                            </div>
                            <div class="card-action">
                              <a href="#">Editar</a>
                              <a href="#" data-id-post="${post.mensaje.idPost}">Eliminar</a>
                            </div>
                          </div>
                        </div>
                      </div>`
  });

  containerPost.innerHTML = plantillaFinal;
}


printUserResult = (userReturn) => {
  let printName = document.getElementById('nombre');
  let printEmail = document.getElementById('correo');
  let imageUser = document.getElementById('imagen-usuario')
  let nameResult = userReturn.displayName;
  let emailResult = userReturn.email;
  let imageUserReturn = userReturn.photoURL;

  printName.innerHTML = nameResult;
  printEmail.innerHTML = emailResult;
  imageUser.innerHTML = `<a id="imagen-usuario" href="#user"><img class="circle" src="${imageUserReturn}"></a>`
}

printUserResult(userReturn);


// =================================logout
let buttonLogout =document.getElementById('logout');
buttonLogout.addEventListener('click', logout);
// =================================logout




// --------------------------modal
let modalButton = document.getElementById('modal');

runModal =() => {
  let paraModal = document.getElementById('para-modal');
  console.log("hola");
  let newModal =`<div id="modal1" class="modal")>
  <div class="modal-content">
  <a id="imagen-usuario" href="#user"><img class="circle" src="${userReturn.photoURL}" width="50%"></a>
    <h5>${userReturn.displayName}</h5>
    <p>  ${userReturn.email}</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>`;
paraModal.innerHTML = newModal;
$('.modal').modal();

}

modalButton.addEventListener('click', runModal);



// --------------------------modal
