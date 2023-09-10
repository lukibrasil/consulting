
// // Get the form element by its id
// var form = document.getElementById("name-form");

// // Add an event listener for when the form is submitted
// form.addEventListener("submit", function(event) {

//   // Prevent the default action of submitting the form
//   event.preventDefault();

//   // Get the input element by its id
//   var nameInput = document.getElementById("name");

//   // Get the value of the input element
//   var nameValue = nameInput.value;

//   // Check if the input value is not empty
//   if (nameValue) {

//     // Redirect the user to another page with their name as a query parameter
//     window.location.href = "question.html?name=" + nameValue;

//     // Clear the input value
//     nameInput.value = "";

//     // Otherwise, alert an error message
//     } else {

//       alert("Please enter your name!");
//     }
//   });


  // Get the sliders and their values by their ids
var techSlider = document.getElementById('tech-slider');
var techValue = document.getElementById('tech-value');
var writeSlider = document.getElementById('write-slider');
var writeValue = document.getElementById('write-value');

// Update the values when the sliders change
techSlider.oninput = function() {
 techValue.innerHTML = this.value;
}
writeSlider.oninput = function() {
 writeValue.innerHTML = this.value;
}
var techSlider = document.getElementById('tech-slider');
var techValue = document.getElementById('tech-value');

techSlider.oninput = function() {
  techValue.innerHTML = this.value;
}
// Create variables to store the slider answers
var techAnswer;
var writeAnswer;

// Create a function to store the slider answers when the user clicks a button
function storeAnswers() {
  // Get the button element by its id
  var button = document.getElementById('store-button');
  // Add an event listener for when the button is clicked
  button.addEventListener('click', function() {
    // Assign the slider values to the answer variables
    techAnswer = techSlider.value;
    writeAnswer = writeSlider.value;
    // Alert a confirmation message
    alert("Your answers have been stored!");
  });
}

// Call the function when the page loads
storeAnswers();  
// Alert the stored answers
alert("Your tech answer is: " + techAnswer);
alert("Your write answer is: " + writeAnswer);

// Log the stored answers to the console
console.log("Your tech answer is: " + techAnswer);
console.log("Your write answer is: " + writeAnswer);




