// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  var saveButton = $(".saveBtn");
  // Handling the click event for the save button
  saveButton.click(function () {
    console.log("Save button clicked!");

    var timeBlock = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();

    // This saves user input in local storage
    localStorage.setItem(timeBlock, userInput);
  });

  // Changing each class to change color based on past, present, and future
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

  // Retrieving data from local storage and applying it to each text area
  var hourData9 = localStorage.getItem("09");
  document.getElementById("09-text").innerHTML = hourData9;

  var hourData10 = localStorage.getItem("10");
  document.getElementById("10-text").innerHTML = hourData10;

  var hourData11 = localStorage.getItem("11");
  document.getElementById("11-text").innerHTML = hourData11;

  var hourData12 = localStorage.getItem("12");
  document.getElementById("12-text").innerHTML = hourData12;

  var hourData01 = localStorage.getItem("1");
  document.getElementById("01-text").innerHTML = hourData01;

  var hourData02 = localStorage.getItem("2");
  document.getElementById("02-text").innerHTML = hourData02;

  var hourData03 = localStorage.getItem("3");
  document.getElementById("03-text").innerHTML = hourData03;

  var hourData04 = localStorage.getItem("4");
  document.getElementById("04-text").innerHTML = hourData04;

  var hourData05 = localStorage.getItem("5");
  document.getElementById("05-text").innerHTML = hourData05;

  //
  // TODO: Add code to display the current date in the header of the page.
  var dayWeek = today.format("dddd, MMMM D");
  $("#currentDay").text(dayWeek);
});
