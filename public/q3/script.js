// read from the localStorage saved as a string - to see if there are anything saved on the users coomputer
let signupString = localStorage.getItem("clubsignups")
if (!signupString) { signupsList = {} } // initialize the variable to contain the list of accounts object
else signupsList = JSON.parse(signupString) // converts string into the correct data type in this case object

const form = document.getElementById("dForm"); // get the HTML form from q3ge2Mendoza.html

// event handler on the submit button instead of onsubmit on the button itself
form.addEventListener("submit", function(e) { // assign an event handler of submit to the form
    e.preventDefault(); // prevent page reload because forms gets submitted

    if (confirm("Sure You Want To Save Your Work?")) {   
        // use a predefined class to create an object of data
        const data = new FormData(form);

        // Convert to object
        const obj = Object.fromEntries(data.entries()); // get all the data from the form
        // place the object inside the accountList
        // accountList is an object containing other objects with username as the key
        signupsList[obj.sid] = {};
        for (let key in obj) { // go through the properties of the object and create another account
            if (key != "sid") { 
                signupsList[obj.sid][key] = obj[key];
            }
        }
        
        console.log(signupsList) // to check all the account information if it will be saved correctly
        signupString = JSON.stringify(signupsList) // convert object into string, as a requirement of localStorage
        localStorage.setItem("clubsignups", signupString) // save on the user's computer
        form.submit();
    }
  });

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { // 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});

// another way to assign event listener is to use the actual attribute
// onclick event listeners for buttons
show.onclick = function() {
  window.location.href = "viewSignUps.html";
}

home.onclick = function() {
  window.location.href = "../../index.html";
}

// called when user is on the input field
function changeColor(ele) {
 // console.log(ele); // to check what is inside ele
  ele.style.backgroundColor = "blue";
} 
function resetColor(ele) {
  //console.log(ele); // to check what is inside ele
  ele.style.backgroundColor = "white";
  ele.style.border="2px solid black"
  if (!ele.value.trim()) { // checks if a value had been given
    ele.style.border="2px solid red"
    ele.style.backgroundColor="lightpink"
  }
} 