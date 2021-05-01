var firebaseConfig = {
    apiKey: "AIzaSyCP25vt9civ068cFwUHGSf7mWKmRapfu3s",
    authDomain: "kwitter-f2b2c.firebaseapp.com",
    databaseURL: "https://kwitter-f2b2c-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2b2c",
    storageBucket: "kwitter-f2b2c.appspot.com",
    messagingSenderId: "1073577328523",
    appId: "1:1073577328523:web:7aa0892305733f0190f98e",
    measurementId: "G-ZQ8HFE8THT"
  };
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";

}

