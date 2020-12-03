var firebaseConfig = {
    apiKey: "AIzaSyBEbcKrTpjcuHOgcMzSQJ7uolNV8Ca5Uhg",
    authDomain: "godigital-9d9cf.firebaseapp.com",
    projectId: "godigital-9d9cf",
    storageBucket: "godigital-9d9cf.appspot.com",
    messagingSenderId: "212581582017",
    appId: "1:212581582017:web:b55e9297106837070a4040"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



//using firebase auth
firebase.auth().onAuthStageChanged(function(user)  {

 if(user) {
     //if user is signed in
     //getting an dom element email
     //getting an password

     const user = firebase.auth().currentUser();

     if(user != null){

        const email_id = user.email;
        //welcome message with dom element

     }

 }else{
     //if no user is signed in

     //login information
     //
 }


})



//function for user login

function login(){

  //getting email and password by dom elements

  const Useremail = document.getElementById('user_email').value;
  const Userpassword = document.getElementById('user_password').value;

  //firebase auth

  firebase.auth().signInWithEmailAndPassword(Useremail,Userpassword).then(function(success){
      //success result
  }).catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : "  + errorMessage);

  });


}



//creating user


function createFunction(){

    //getting email and password by dom elements
    const Useremail = document.getElementById('user_email').value;
    const Userpassword = document.getElementById('user_password').value;

    firebase.auth().createUserWithEmailAndPassword(Useremail,Userpassword).then(function(succes){
        //success message
    }).catch (function(error){
        const errorCode   = error.code;
        const errorMessage = error.message;
    })

}




//logout functon

function logout(){
    firebase.auth().signOut();
}



//function to send email verification

function sendVerification(){
    const user = firebase.currentUser();
     user.sendEmailVerification().then(function(success){
         //email sent success message
     }).catch(function(error){
         //email sent failed message
     });
}