$(document).ready(() =>{
// get current time
let currentTime = moment().format("dddd, MMMM D, YYYY.");
// get current hour
let currentHour = moment().format("HH");
// 
$("#currentDay").text(currentTime);
//main loop to iterate through the elements 
// add time to left side. update color of text area and add listener to 
//



$(".input-group").each(function(index, element) {
  let blockTime = $(this.firstElementChild.firstElementChild);
  
  blockTime.text(moment().hour(index + 8).minutes(00).format("hh:mm A"));
  let blockID = moment().hour(index + 8).minutes(00).format("HH");
  
  $($(this)).attr("data-value", blockID);
  let blockHour = $(this).data("value");

    // set value of the block text area relative to the input group id
    let blockTextArea = $($(this)[0].children[1]);
      blockTextArea.val(localStorage.getItem(blockHour));

    if(currentHour > blockHour){
      blockTextArea.addClass("past").attr("data-value", blockID)
                    .attr("id", blockHour + "textArea");
    }else if (currentHour < blockHour){
      blockTextArea.addClass("future").attr("data-value", blockID)
                    .attr("id", blockHour + "textArea");
    } else {
      blockTextArea.addClass("present").attr("data-value", blockID)
                  .attr("id", blockHour + "textArea");
    }
    // set variable for add event button element
   let blockEventButton = $($(this)[0].children[2].firstElementChild) 
  blockEventButton.addClass(blockHour + " addEventButton").attr("data-value", blockHour)
        .attr("id", blockHour + "addEventButton");
});
//click handler for to add an event 
$(".addEventButton").click(addEvent);

function addEvent(event){
  let targetBlockId = $(this).data("value");
  let newText = $("#"+targetBlockId+"textArea")[0].value;
  
  window.localStorage.setItem(targetBlockId.toString(), newText);
}
}); //end of DOM loaded event

