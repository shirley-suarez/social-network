 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyC_N3kPrfRGNu_M7DnofKWSs4FQtfikhfc",
  authDomain: "red-social-597bd.firebaseapp.com",
  databaseURL: "https://red-social-597bd.firebaseio.com",
  projectId: "red-social-597bd",
  storageBucket: "red-social-597bd.appspot.com",
  messagingSenderId: "415598953382"
};
firebase.initializeApp(config);

const getProvider = () => {
  let provider;
  switch (event.target.id) {
    case "google":
      provider = new firebase.auth.GoogleAuthProvider();
      auth(provider);
      break;
    case "facebook":
      provider = new firebase.auth.FacebookAuthProvider();
      auth(provider);
      break;
    case "twitter":
      provider = new firebase.auth.TwitterAuthProvider();
      auth(provider);
      break;
    case "github":
      provider = new firebase.auth.GithubAuthProvider();
      auth(provider);
      break;
    default:
      console.log("Error");
  }
}

const auth = provider => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
    const token = result.credential.accessToken;
    const user = result.user;
    showNewsFeed(user);
  }).catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });
}


showNewsFeed = (user) => {
  location.href='../views/muro.html';
  user = JSON.stringify(user);
  localStorage.setItem("resultado",user);
  // para recuperar el objeto
  // let regreso =  JSON.parse(localStorage.getItem("resultado"));
}


const logout = () => {
  console.log('Bye', firebase);
  location.href = '../index.html';
  localStorage.clear();
  // firebase.auth().signOut().then(function() {
  //   console.log("salio")
  // }).catch(function(error) {
  //   console.log("ocurrio un error ")
  // });
}