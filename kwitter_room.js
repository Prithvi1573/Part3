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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
function addRoom()
{
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;       
console.log("room name-"+Room_name);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>;";
document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_   name",name);
      window.location="kwiter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
