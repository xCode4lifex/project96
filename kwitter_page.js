//YOUR FIREBASE LINKS
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
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value = "";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
