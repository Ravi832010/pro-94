var firebaseConfig = {
    apiKey: "AIzaSyARqCByx2YWXRsVfBOPaVdW6QmxTTt-gJI",
    authDomain: "kwitterv2-f4b09.firebaseapp.com",
    databaseURL: "https://kwitterv2-f4b09-default-rtdb.firebaseio.com/",
    projectId: "kwitterv2-f4b09",
    storageBucket: "kwitterv2-f4b09.appspot.com",
    messagingSenderId: "1013599372404",
    appId: "1:1013599372404:web:cb3d42113830b9b4747d21",
    measurementId: "G-V44P8M2NQT"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
