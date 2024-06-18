const firebaseConfig = {
    apiKey: "AIzaSyAlwVSjrzGzum-xwv30hSEx-6BbD8Owj6w",
    authDomain: "techplement-b29fd.firebaseapp.com",
    databaseURL: "https://techplement-b29fd-default-rtdb.firebaseio.com",
    projectId: "techplement-b29fd",
    storageBucket: "techplement-b29fd.appspot.com",
    messagingSenderId: "1034219808321",
    appId: "1:1034219808321:web:ee6469739b2437596b08c0"
  };
  

  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contact-form");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  console.log(name,email,message);

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contact-form").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};





//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });