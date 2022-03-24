// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// THEN I would add a "moment()" to display today's date

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// THEN I Would create the timeblocks in my HTML

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// THEN I would create a conditional statement to indicate what color each timeblock should be

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// THEN I would add an eventlistener
// THEN I would add local storage

// WHEN I refresh the page
// THEN the saved events persist
var UserInput9am = document.querySelector("#nine");
var UserInput10am = document.querySelector("#ten");
var UserInput11am = document.querySelector("#eleven");
var UserInput12pm = document.querySelector("#twelve");
var UserInput01pm = document.querySelector("#one");
var UserInput02pm = document.querySelector("#two");
var UserInput03pm = document.querySelector("#three");
var UserInput04pm = document.querySelector("#four");
var UserInput05pm = document.querySelector("#five");

var saveButton9 = document.querySelector("#btn9");
var saveButton10 = document.querySelector("#btn10");
var saveButton11 = document.querySelector("#btn11");
var saveButton12 = document.querySelector("#btn12");
var saveButton1 = document.querySelector("#btn1");
var saveButton2 = document.querySelector("#btn2");
var saveButton3 = document.querySelector("#btn3");
var saveButton4 = document.querySelector("#btn4");
var saveButton5 = document.querySelector("#btn5");

var timeColor = document.querySelectorAll(".custom-timeColor");
console.log(timeColor);
var timeBlocks = document.querySelectorAll(".time-block");
var currentDay = document.querySelector("#currentDay");
var today = moment();

currentDay.textContent = today.format("MMM-Do-YYYY");

function updateCurrentHour() {
  var currentHour = moment().format("H");
  console.log(currentHour);
  for (let i = 0; i < timeBlocks.length; i++) {
    var blockHour = timeBlocks[i].dataset.hour;
    console.log({ blockHour });
    console.log({ currentHour });
    if (blockHour === currentHour) {
      timeColor[i].classList.add("present");
    } else if (blockHour < currentHour) {
      timeColor[i].classList.add("past");
    } else {
      timeColor[i].classList.add("future");
    }
  }
}
updateCurrentHour();

renderLastSaved();
function renderLastSaved() {
  var text9 = localStorage.getItem("list9");
  var text10 = localStorage.getItem("list10");
  var text11 = localStorage.getItem("list11");
  var text12 = localStorage.getItem("list12");
  var text1 = localStorage.getItem("list1");
  var text2 = localStorage.getItem("list2");
  var text3 = localStorage.getItem("list3");
  var text4 = localStorage.getItem("list4");
  var text5 = localStorage.getItem("list5");
  console.log(text9);

  UserInput9am.textContent = text9;
  UserInput10am.textContent = text10;
  UserInput11am.textContent = text11;
  UserInput12pm.textContent = text12;
  UserInput01pm.textContent = text1;
  UserInput02pm.textContent = text2;
  UserInput03pm.textContent = text3;
  UserInput04pm.textContent = text4;
  UserInput05pm.textContent = text5;
}

saveButton9.addEventListener("click", function (event) {
  event.preventDefault();

  var text9 = document.querySelector("#nine").value;

  localStorage.setItem("list9", text9);
  renderLastSaved();
});
saveButton10.addEventListener("click", function (event) {
  event.preventDefault();

  var text10 = document.querySelector("#ten").value;

  localStorage.setItem("list10", text10);
  renderLastSaved();
});

saveButton11.addEventListener("click", function (event) {
  event.preventDefault();

  var text11 = document.querySelector("#eleven").value;

  localStorage.setItem("list11", text11);
  renderLastSaved();
});
saveButton12.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text12 = document.querySelector("#twelve").value;
  
    localStorage.setItem("list12", text12);
    renderLastSaved();
  });
  saveButton1.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text1 = document.querySelector("#one").value;
  
    localStorage.setItem("list1", text1);
    renderLastSaved();
  });
  saveButton2.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text2 = document.querySelector("#two").value;
  
    localStorage.setItem("list2", text2);
    renderLastSaved();
  });
  saveButton3.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text3 = document.querySelector("#three").value;
  
    localStorage.setItem("list3", text3);
    renderLastSaved();
  });
  saveButton4.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text4 = document.querySelector("#four").value;
  
    localStorage.setItem("list4", text4);
    renderLastSaved();
  });
  saveButton5.addEventListener("click", function (event) {
    event.preventDefault();
  
    var text5 = document.querySelector("#five").value;
  
    localStorage.setItem("list5", text5);
    renderLastSaved();
  });
