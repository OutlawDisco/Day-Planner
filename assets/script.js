var currentDay = $("#currentDay");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
$(function () {
  $(".saveBtn").on("click", function () {
    console.log($(this).parent().attr("id"));
    var hour = $(this).parent().attr("id");
    var toDo = $(this).siblings("textarea").val();
    console.log(toDo);
    localStorage.setItem(hour, toDo);
  });

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  $(".time-block").each(function () {
    var time = dayjs().hour();
    var id = $(this).attr("id").slice(5);
    console.log(id, time);

    if (id < time) {
      $(this).addClass("past").removeClass("present future");
    } else if (id == time) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("present past");
    }
  });
  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    localStorage.getItem(id);
    // pick up child text area add local storage as value
    $(this).siblings("textarea").val();
  });

  // Add code to display the current date in the header of the page.
  currentDay.text(dayjs().format("MM/DD/YYYY"));
});
