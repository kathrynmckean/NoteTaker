let sampleTitle = "Hello im a fake title";
let sampleText = "sample sample yes hi hello";
let data = {
  title: sampleTitle,
  text: sampleText
};

let i = 0;
let isReturnButton = 0;

//  sticky note creation
function createNote() {
  // creating the new element, giving it the same class as its siblings
  let findId = document.getElementById("gridContainer").children.length;

  let getGridContainer = document.getElementById("gridContainer");
  let makeGridSquare = document.createElement("div");

  //
  let makeTitle = document.createElement("div");
  makeTitle.innerHTML = `${sampleTitle}`;
  makeTitle.setAttribute("id", `title${findId + 1}`);

  let makeText = document.createElement("div");
  makeText.innerHTML = `${sampleText}`;
  makeText.setAttribute("id", `text${findId + 1}`);

  makeGridSquare.appendChild(makeTitle);
  makeGridSquare.appendChild(makeText);

  makeGridSquare.setAttribute("class", "gridSquare");
  makeGridSquare.setAttribute("contenteditable", "false");
  // setting the id to match the number of squares including itself

  makeGridSquare.setAttribute("id", `q${findId + 1}`);

  // add onclick attribute
  makeGridSquare.setAttribute("onclick", `expandNote(${findId + 1})`);

  // officially creating the note
  getGridContainer.appendChild(makeGridSquare);
}

// expand view of sticky note - takes up more of screen
function expandNote(a) {
  // if the note isnt expanded then expand and show the back button, edit button
  if (isReturnButton == 0) {
    isReturnButton = 1;

    let findClick = document.querySelector(`#q${a}`); //find the item you clicked on by ID

    // findClick.classList.replace("gridSquare", "expandedNote");
    findClick.classList.add("expanded");

    // button that takes you back to the homepage

    let showReturnButton = document.querySelector("#returnButton");
    showReturnButton.setAttribute("onclick", `reduceNote(${a})`);
    showReturnButton.style.visibility = "visible";

    let showEditButton = document.querySelector("#editButton");
    showEditButton.setAttribute("onclick", `editNote(${a})`);
    showEditButton.style.visibility = "visible";

    let showDeleteButton = document.querySelector("#deleteButton");
    showDeleteButton.setAttribute("onclick", `deleteNote(${a})`);
    showDeleteButton.style.visibility = "visible";

    console.log("note was expanded");
    return;
  } else {
    // Remove the class name from the thing you didnt click
    let findOtherNote = document.querySelector(`.gridSquare.expanded`);
    // findOtherNote.classList.replace("expandedNote", "gridSquare");
    findOtherNote.classList.remove("expanded");

    //     add class name to clicked item
    let findClick = document.querySelector(`#q${a}`); //find the item you clicked on by ID

    // findClick.classList.replace("gridSquare", "expandedNote");
    findClick.classList.add("expanded");

    //     find return button and replace onclick with this one!
    let showReturnButton = document.querySelector("#returnButton");
    showReturnButton.setAttribute("onclick", `reduceNote(${a})`);
    showReturnButton.style.visibility = "visible";

    //   SHOW EDIT BUTTON
    let showButton = document.querySelector("#editButton");
    showButton.setAttribute("onclick", `editNote(${a})`);
    showButton.style.visibility = "visible";

    return;
  }
}

function deleteNote(a) {
  console.log("delete function");
}

function editNote(a) {
  let noteTitle = document.getElementById(`title${a}`).innerHTML;
  let expandedTitle = document.getElementById("titleEditor");
  expandedTitle.innerHTML = `${noteTitle}`;

  let noteText = document.getElementById(`text${a}`).innerHTML;
  let expandedText = document.getElementById("textEditor");
  expandedText.value = `${noteText}`;

  // show the editing page class=expandedGridContainer
  let findEditor = document.querySelector(`#expandedGridContainer`);
  findEditor.style.display = "flex";
}

function writeData() {
  let title = document.getElementById("titleEditor").value;
  let text = document.getElementById("textEditor").value;

  if (title == "" || text == "") {
    alert("please enter field");
  } else {
    console.log("saved in firebase lol");
    let data = {
      title: title,
      text: text
    };
  }
}
function reduceNote(a) {
  if ((isReturnButton = 1)) {
    isReturnButton = 0;
    let findClick = document.querySelector(`#q${a}`); //find the item you clicked on by ID
    // findClick.classList.replace("expandedNote", "gridSquare");
    findClick.classList.remove("expanded");
    // stop showing the expanded edit section
    // show the editing page class=expandedGridContainer
    let findEditor = document.querySelector(`#expandedGridContainer`);
    findEditor.style.display = "none";

    //     hide back button
    let removeReturnButton = document.getElementById("returnButton");
    removeReturnButton.style.visibility = "hidden";

    //     hide edit button
    let hideButton = document.querySelector("#editButton");
    hideButton.setAttribute("onclick", `editNote(${a})`);
    hideButton.style.visibility = "hidden";

    // hide delete button
    let removeDeleteButton = document.getElementById("deleteButton");
    removeDeleteButton.style.visibility = "hidden";
  }
}

// when you reduce the note reset the class name and hide the button, i--

// closeNote

// update sticky note

// delete sticky note

// let button = document.getElementById("button");
// button.addEventListener("click", function () {
//   let title = document.getElementById("titleEditor").value;
//   let text = document.getElementById("textEditor").value;
//   if (title == "" || text == "") {
//     alert("please enter field");
//   } else {
//     let data = {
//       title: title,
//       text: text
//     };
//     let database = firebase.database();

//     let ref = database.ref("records");

//     ref.push(data);
//   }
// });

// firebase.initializeApp({
//   apiKey: "AIzaSyDYsuAJfQubrFpyL9VfyvrfvjDJE4qbXmE",
//   authDomain: "notepad-b0ea6.firebaseapp.com",
//   databaseURL: "https://notepad-b0ea6-default-rtdb.firebaseio.com",
//   projectId: "notepad-b0ea6",
//   storageBucket: "notepad-b0ea6.appspot.com",
//   messagingSenderId: "25717815917",
//   appId: "1:25717815917:web:3aa79a4c9b311963421d64",
//   measurementId: "G-X876EH2JG9"
// });

// function writeData() {
//   console.log("hiiiiii");
//   firebase
//     .database()
//     .ref("note")
//     .set({
//       title: document.querySelector(".titleEditor"),
//       text: document.querySelector(".textEditor")
//     });
// }
