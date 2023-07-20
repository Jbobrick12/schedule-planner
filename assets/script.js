// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var today = dayjs();
  var saveButton = $(".saveBtn");

  saveButton.click(function () {
    // Handling the click event for the save button
    console.log("Save button clicked!");

    var timeBlock = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();

    // This saves user input in local storage
    localStorage.setItem(timeBlock, userInput);
  });

  // Check if there is saved text
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function () {
    const timeBlockHour = $(this).attr("id");
    const currentHour = dayjs().hour();

    if (timeBlockHour < currentHour) {
      $(this).removeClass("present future");
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present past");
      $(this).addClass("future");
    }
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var hourData9 = localStorage.getItem("09");
  document.getElementById('09-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("10");
  document.getElementById('10-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("11");
  document.getElementById('11-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("12");
  document.getElementById('12-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("1");
  document.getElementById('01-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("2");
  document.getElementById('02-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("3");
  document.getElementById('03-text').innerHTML = hourData9;

  var hourData9 = localStorage.getItem("4");
  document.getElementById('04-text').innerHTML = hourData9;
  
  var hourData9 = localStorage.getItem("5");
  document.getElementById('05-text').innerHTML = hourData9;


  var savedInput = localStorage.getItem(userInput);
  document.querySelector(".description").value = savedInput;
  //
  // TODO: Add code to display the current date in the header of the page.
  var dayWeek = today.format("dddd, MMMM D");
  $("#currentDay").text(dayWeek);
});
