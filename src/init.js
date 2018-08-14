// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice, Tell Me More
$(document).ready(function(){
  var person = {
    firstName: "Chelsa",
    lastName: "Hiatt",
    jobTitle: "Technical Program Manager",
    homeOffice: "Austin",
    tellMeMore: "I was born and raised in Seattle. I love to hike, travel, eat (and cook). I have a medium sized collection of both wine and scotch/whisky."
  }

  // event click on buttons
  var element = $(document.getElementById('#results'));

  $('#fName').click( function(){
    $('#results').val (String(person.firstName));
  });

  $('#lName').click( function(){
    $('#results').val (String(person.lastName));
  });

  $('#job').click( function(){
    $('#results').val (String(person.jobTitle));
  });

  $('#office').click( function(){
    $('#results').val (String(person.homeOffice));
  });

  $('#more').click( function(){
    $('#results').val(String(person.tellMeMore));
  });

})

// using jQuery and the object above, display the information as the appropriate button is clicked
