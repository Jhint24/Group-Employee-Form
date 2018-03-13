
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAeHdXwszTA_jJR3_m_MZckSozle6n5Wc4",
    authDomain: "timesheet-project-ced16.firebaseapp.com",
    databaseURL: "https://timesheet-project-ced16.firebaseio.com",
    projectId: "timesheet-project-ced16",
    storageBucket: "timesheet-project-ced16.appspot.com",
    messagingSenderId: "963514758705"
  };
  firebase.initializeApp(config);
  
  var name;
  var role;
  var start;
  var rate;
  
  $('#run-search').click(function() {
    name = $('#search-name').val();
    role = $('#search-role').val();
    start = $('#start-date').val();
    rate = $('#monthly-rate').val();
    console.log(name, role, start, rate)

  });
  