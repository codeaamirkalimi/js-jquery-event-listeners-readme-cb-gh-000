//define functions here
/*
$('h1').on("eventname", function(){
    //action you want taken
});

Define a function getIt that does not accept a parameter.
 The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
 Define a function frameIt that does not accept a parameter.
 The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
*/
$(document).ready(function(){

// call functions here

});
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}
