
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBjTJCyibbLlYtwl3fjCISFOMuPgS0DO44",
      authDomain: "kwitter-acd36.firebaseapp.com",
      databaseURL: "https://kwitter-acd36-default-rtdb.firebaseio.com",
      projectId: "kwitter-acd36",
      storageBucket: "kwitter-acd36.appspot.com",
      messagingSenderId: "670324647430",
      appId: "1:670324647430:web:234e6366f818cb74d60587",
      measurementId: "G-BR6BT92376"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom() {
       room_name = document.getElementById("room_name").value ;
       firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
     }
        

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;

      });});}
     getData();
    
     function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
     }