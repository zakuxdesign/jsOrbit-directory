// User Controls & Directory Array
const addButton = document.getElementById("add-button");
let cards = document.querySelector(".class");
let directory = [];

/*
CLEAR ALL INPUTS ------------------------------------------------------------------------------------------------
*/
function clearInputs() {
  document.getElementById("first-name").value = null;
  document.getElementById("last-name").value = null;
  document.getElementById("email").value = null;
  document.getElementById("phone").value = null;
}

/*
CLEAR ALL INPUTS ------------------------------------------------------------------------------------------------
*/
function checkFields() {
  const input = document.querySelector("input");

  for (var v = 0; v < input.length; v++) {
    if (input == null) {
    }
  }
}

/*
Main func 1: RENDER TO DOM ------------------------------------------------------------------------------------------------
  delete all cards from page
  loop through global array and append to dom
    (put the index of the array's element in the id)
*/

function renderToDOM() {
  let renderedCards = document.querySelectorAll(".card");
  // First, remove elements from the DOM
  function removeOldCards() {
    for (var oldContact = 0; oldContact < renderedCards.length; oldContact++) {
      renderedCards[oldContact].remove();
    }
  }
  removeOldCards();

  // Second, Rerender them with the new contact
  for (var contact = 0; contact < directory.length; contact++) {
    const newContact = document.createElement("DIV");
    const contactNumber = "contact--" + [contact];
    document.getElementById("page--right-side").appendChild(newContact);
    newContact.setAttribute("class", "card");
    newContact.setAttribute("id", contactNumber);

    // name
    const contactName = document.createElement("H2");
    contactName.innerHTML = directory[contact].name;
    document.getElementById(contactNumber).appendChild(contactName);
    // email
    const contactEmail = document.createElement("p");
    contactEmail.innerHTML = directory[contact].email;
    document.getElementById(contactNumber).appendChild(contactEmail);
    // phone
    const contactPhone = document.createElement("p");
    contactPhone.innerHTML = directory[contact].phone;
    document.getElementById(contactNumber).appendChild(contactPhone);
    // delete button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute("class", "remove-button");
    removeButton.setAttribute("id", "remove-button" + contactNumber);
    document.getElementById(contactNumber).appendChild(removeButton);
    removeButton.onclick = function(contactNumber) {
      removeCard(contactNumber);
    };
  }
}

/*
Main func 2: USER CLICKS ADD BUTTON ------------------------------------------------------------------------------------------------
  info is captured
  put it into an object
  put into an array
  call a render() function
*/
addButton.addEventListener("click", function() {
  // User Inputs
  const firstInput = document.getElementById("first-name").value;
  const lastInput = document.getElementById("last-name").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;
  // add inputs to a new object
  const card = new Object();
  card.name = firstInput + " " + lastInput;
  card.email = emailInput;
  card.phone = phoneInput;

  // pushes to the directory array
  function addToArray() {
    directory.push(card);
  }

  addToArray();
  clearInputs();
  renderToDOM();
});

/*
Main func 3: USER CLICKS DELETE ON CARD ------------------------------------------------------------------------------------------------
  use a click event to figure out what to delete
  delete that card index from the array
  call a render() function
*/
function removeCard(id) {
  console.log("remove " + id);
  // renderToDOM();

  console.log(directory + "before");
  directory.splice(id, 1);
  console.log(directory + "after");
  renderToDOM();
}

// EDGE CASES
// User shouldn't be able to create a record if a field is missing
// Phone numbers should only accept 7 numbers
// email addresses should be valid (Valid - carey@aol.com)
// First and Last names should only have the first letter capitalized
