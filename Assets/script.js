var currentDate = document.getElementById("#currentDay");
var date = dayjs().format("MMMM D, YYYY h:mm A");

console.log(date)
// This is the day and time displayed at the top of the screen
$("#currentDay").text(date);

var save = document.querySelectorAll(".saveBtn");


  $(save).on("click", function() {
    console.log ("this button works");
    var entryTime = $(this).parent().attr("id");
    var entry = $(this).siblings(".description").val();
  
  
  localStorage.setItem(entryTime,JSON.stringify(entry));

  // This loop should allow us to save the textareas in each key
  for (var i=9; i<18;i++){
    var saved = JSON.parse(localStorage.getItem(entryTime));
    
    $(".description").text(saved);
    console.log(saved);
  } 
 
  });

  // The capital H is to make it a 24hr clock for the function; therefore, the hour in local storage will be military time
  $(".time-block").each(function() {
    var color = parseInt(this.id);
    console.log(color);
    var clock = dayjs().format('H'); 
    console.log(clock);

    if(color<clock) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (color>clock){
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }


  })
  

