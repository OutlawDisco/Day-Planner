var currentDay = $("#currentDay");

//Save items to local storage.
$(function () {
  $(".saveBtn").on("click", function () {
    console.log($(this).parent().attr("id"));
    var hour = $(this).parent().attr("id");
    var toDo = $(this).siblings("textarea").val();
    console.log(toDo);
    localStorage.setItem(hour, toDo);
  });

  // Added past, present, or future class to each time block by comparing the id to the current hour.
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

  //Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    localStorage.getItem(id);
    // pick up child text area add local storage as value
    $(this).children("textarea").val(localStorage.getItem(id));
  });

  //code to display the current date in the header of the page.
  currentDay.text(dayjs().format("MM/DD/YYYY"));
});
