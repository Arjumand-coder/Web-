var firebaseConfig = {
  apiKey: "AIzaSyACc9XbOTmPBdjIIkAS9JDBY1bWQC26aQY",
  authDomain: "kwitter-7a709.firebaseapp.com",
  databaseURL: "https://kwitter-7a709-default-rtdb.firebaseio.com",
  projectId: "kwitter-7a709",
  storageBucket: "kwitter-7a709.appspot.com",
  messagingSenderId: "723885758892",
  appId: "1:723885758892:web:2e47af8b82e23cf1714209"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " +    user_name + "!" ;

function addRoom()
{
     room_name= document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location ="kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
   console.log("Room Name - "+ Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+ Room_names +"</div> <hr>";
   document.getElementById("ouput").innerHTML +=row;

  });
});

    }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("romm_name", name);
  window.location="kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
