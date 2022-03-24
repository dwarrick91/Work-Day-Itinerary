




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
var timeColor = document.querySelectorAll(".custom-timeColor")
console.log(timeColor);
var timeBlocks = document.querySelectorAll(".time-block")
var currentDay = document.querySelector("#currentDay")
var today = moment()

currentDay.textContent = today.format("MMM-Do-YYYY")



function updateCurrentHour() {
    var currentHour = moment().format("H")
    console.log(currentHour);
    for (let i = 0; i < timeBlocks.length; i++) {
        var blockHour = timeBlocks[i].dataset.hour;
        console.log({blockHour});
        console.log({currentHour})
        if (blockHour === currentHour) {
            timeColor[i].classList.add("present")

        } else if (blockHour < currentHour) {
            timeColor[i].classList.add("past")
        } else {
            timeColor[i].classList.add("future")
        
        }

    }
}
updateCurrentHour()



