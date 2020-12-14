// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBO9U48BP4CXQzHHH-QIDUwqbkHllFtVGY",
  authDomain: "login-68ed9.firebaseapp.com",
  projectId: "login-68ed9",
  storageBucket: "login-68ed9.appspot.com",
  messagingSenderId: "651737486533",
  appId: "1:651737486533:web:89463b8cd8c43cf36e4cac"  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

firebase.auth().onAuthStateChanged(function (user) { //monitor if there is user signed in 
  if (user) {
    console.log("user signed in");
  } else {
    console.log('no user');
  }
});

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  // console.log("Signed In");
  // window.location = "home.html"
  
}


function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
  window.location = "home.html"
}

function signOut() {
  const promise = auth.signOut();
  window.location = "index.html"
}

function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function () {
    console.log("Success, Google Acount Linked");
  }).catch(function (error) {
    console.log(error);
    console.log("Failed to do");
  });
}