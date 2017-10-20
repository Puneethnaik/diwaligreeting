
var config = {
    apiKey: "AIzaSyDprSbVayrn1UJe1a7YPd-anIOqIftLJIE",
    authDomain: "noteit-87e18.firebaseapp.com",
    databaseURL: "https://noteit-87e18.firebaseio.com",
    projectId: "noteit-87e18",
    storageBucket: "noteit-87e18.appspot.com",
    messagingSenderId: "631164868302"
  };
  firebase.initializeApp(config);
  //firebase end
  //Create references
  const dbRefObject = firebase.database().ref();
  //Sync object changes
  dbRefObject.child('from').on('value', function(snap){document.getElementById("From").innerHTML = 'From : ' + snap.val() + ' and family'});
  dbRefObject.child('to').on('value', function(snap){document.getElementById("To").innerHTML = 'To : ' + snap.val() + ' and family'});
//console.log("Good for every");
  $("#shareButton").on('click', function(e){
      var from = $("#FromIn").val();
      var to = $("#ToIn").val();
      if(from.length != 0  && to.length != 0){
          dbRefObject.child('from').set(from);
          dbRefObject.child('to').set(to);
      }
  });
