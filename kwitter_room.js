
var firebaseConfig = {
      apiKey: "AIzaSyBfWEHYsMeUVzXz_v0FrmLzct9qm8BGwss",
      authDomain: "qwitter-f36de.firebaseapp.com",
      databaseURL: "https://qwitter-f36de-default-rtdb.firebaseio.com",
      projectId: "qwitter-f36de",
      storageBucket: "qwitter-f36de.appspot.com",
      messagingSenderId: "546936097514",
      appId: "1:546936097514:web:85caf21806996ac602a593"
    };
    
   
    firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
username = localStorage.getItem("username");
room_name = localStorage.getItem("pluto_room");
document.getElementById("username").innerHTML = "bienvenido "+ username;
function addsala()
{
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "sala creada"
      });
      localStorage.setItem("pluto_room",room_name);
      window.location = "kwitter_page.html";
}

function getData()  {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) 
      {
             document.getElementById("output").innerHTML = "";
              snapshot.forEach(function (childSnapshot) 
              {
                   childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                    if (childKey != "purpose") 
                    {
                         firebase_message_id = childKey;
                          message_data = childData;
                           console.log(firebase_message_id);
                            console.log(message_data);
                             name = message_data['name'];
                              message = message_data['message'];
                               like = message_data['like'];
                                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                                 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                                  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                                   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                                     document.getElementById("output").innerHTML += row;
                                     }}); });

}
      

getData();
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("pluto_room");
          window.location = "index.html";
      }
      function redirigir(name)
{
  console.log(name);
  localStorage.setItem("pluto_room", name);
    window.location = "kwitter_page.html";
}
