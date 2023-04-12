var currentDate = document.getElementById("#currentDay");
var date = dayjs().format("MMMM D, YYYY h:mm A");

console.log(date)

$("#currentDay").text(date);

let save = document.querySelectorAll(".saveBtn")


  $(save).on("click", function() {
    console.log ("this button works");
    var entryTime = $(this).parent().attr("id");
    var entry = $(this).siblings(".description").val();
  
  // In the local storage the negative numbers are considered am times while positive numbers are pm times
  localStorage.setItem(entryTime,JSON.stringify(entry));
  save.value = localStorage.getItem("entry");
  });

  $(".time-block").each(function() {
    var color = parseInt(this.id);
    console.log(color);
    var clock = dayjs().format('h'); 
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
  

//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });
