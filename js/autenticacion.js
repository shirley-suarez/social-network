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
provider = new firebase.auth.GoogleAuthProvider();
 auth(provider);
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

const logout = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

google.addEventListener("click", getProvider);