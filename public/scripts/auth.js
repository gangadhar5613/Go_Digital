
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  console.log('hello')
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  console.log('hi')
});

const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('user_password');



const signUpBtn = document.querySelector('.signUp-btn');
const loginBtn = document.querySelector('.loginBtn');




function handleLogin(event){
  event.preventDefault();
  window.location.href = '/views/dashboard.ejs'
}


loginBtn.addEventListener('submit',handleLogin);









































// const firebaseConfig = {
//   apiKey: "AIzaSyBEbcKrTpjcuHOgcMzSQJ7uolNV8Ca5Uhg",
//   authDomain: "godigital-9d9cf.firebaseapp.com",
//   projectId: "godigital-9d9cf",
//   storageBucket: "godigital-9d9cf.appspot.com",
//   messagingSenderId: "212581582017",
//   appId: "1:212581582017:web:b55e9297106837070a4040"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// //getting email and password from form
















// //using firebase auth
// firebase.auth().onAuthStageChanged(function(user)  {

//  if(user) {
//      //if user is signed in
//      //getting an dom element email
//      //getting an password

//      const user = firebase.auth().currentUser();

//      if(user != null){

//         const email_id = user.email;
//         //welcome message with dom element

//      }

//  }else{
//      //if no user is signed in

//      //login information
//      //
//  }


// })



// //function for user login

// function login(event){
//   event.preventDefault();
//   //getting email and password by dom elements

//   const Useremail = document.getElementById('user_email').value;
//   const Userpassword = document.getElementById('user_password').value;

//   //firebase auth

//   firebase.auth().signInWithEmailAndPassword(Useremail,Userpassword).then(function(success){
//       //success result
//      alert('login success');
//      window.location.href = "/views/adminDashboard.ejs";
//   }).catch(function(error){
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       window.alert("Error : "  + errorMessage);

//   });


// }

// //event listener to login

// loginBtn.addEventListener('submit',login);


// //creating user


// function create_account(event){
//   event.preventDefault();
//     //getting email and password by dom elements
//     const Useremail = document.getElementById('user_email').value;
//     const Userpassword = document.getElementById('user_password').value;

//     firebase.auth().createUserWithEmailAndPassword(Useremail,Userpassword).then(function(succes){
//         //success message
//         console.log('register success');
//         window.alert('register success');
//     }).catch (function(error){
//         const errorCode   = error.code;
//         const errorMessage = error.message;
//         window.alert(errorCode + errorMessage);
//     })

// }


// //signup

// signUpBtn.addEventListener('submit',create_account);



// //logout functon

// function logout(){
//     firebase.auth().signOut();
// }



// //function to send email verification

// function sendVerification(){
//     const user = firebase.currentUser();
//      user.sendEmailVerification().then(function(success){
//          //email sent success message
//      }).catch(function(error){
//          //email sent failed message
//      });
// }