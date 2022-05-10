
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD5Dc1IzQBJ0nJ8f5_3dydm64EBf1tUZu0",
    authDomain: "kwitter-618ef.firebaseapp.com",
    databaseURL: "https://kwitter-618ef-default-rtdb.firebaseio.com",
    projectId: "kwitter-618ef",
    storageBucket: "kwitter-618ef.appspot.com",
    messagingSenderId: "784233168188",
    appId: "1:784233168188:web:93efa1912ab2230ec2b239",
    measurementId: "G-EGBJFD5KC1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function addName(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding_user"
    }) ; 
}
