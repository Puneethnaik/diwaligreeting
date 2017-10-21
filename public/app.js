//first ask for card id
var id = prompt("Please enter the card id given by your loved one:");
var CardId = document.getElementById('CardId');
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
  const dbRefObject = firebase.database().ref();;
  //Sync object changes
  //dbRefObject.push(obj);
  var nextId;

  dbRefObject.child('users').orderByKey().equalTo(id).once('value', function(snap){
      if(snap.val() === null){
          alert("sorry, did you write the card id correct. Please refresh and enter the card id again..")
          location.reload();
      }
      //console.log(JSON.stringify(snap.val()[id.toString()]));
      document.getElementById("From").innerHTML = 'From : ' + snap.val()[id.toString()]['from'] + ' and family';
      document.getElementById("To").innerHTML = 'To : ' + snap.val()[id.toString()]['to'] + ' and family';
});
  //dbRefObject.child('users').orderByValue().on('value', function(snap){console.log(snap.val());document.getElementById("From").innerHTML = 'From : ' + snap['from'] + ' and family';document.getElementById("To").innerHTML = 'To : ' + snap['to'] + ' and family';});
//console.log("Good for every");
  $("#shareButton").on('click', function(e){
      var from = $("#FromIn").val();
      var to = $("#ToIn").val();
      if(from.length != 0  && to.length != 0){
          var obj = {
              'from' : from,
              'to' : to
          }
          dbRefObject.child('users/countOfUsers').once('value', function(snap){
              nextId = snap.val();
              nextId++;
              dbRefObject.child('users/' + nextId.toString()).set(obj);
              dbRefObject.child('users/countOfUsers').set(nextId);
              CardId.innerHTML = 'Your Card id is : ' + nextId.toString();
          });
      }
  });
