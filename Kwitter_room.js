// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEHslgbiyE_MAz1b5njgCdjeiyB9LolO8",
  authDomain: "let-s-chat-658d6.firebaseapp.com",
  databaseURL: "https://let-s-chat-658d6-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-658d6",
  storageBucket: "let-s-chat-658d6.appspot.com",
  messagingSenderId: "47697634761",
  appId: "1:47697634761:web:4339c85f8e576c8b897418"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
