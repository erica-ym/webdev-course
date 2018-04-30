//check off specific to-dos by clicking
$("ul").on("click", "li", function() { // when an LI is clicked WITHIN a UL - a tricky change!
  /*if ($(this).css('color')=="rgb(128, 128, 128)") {
    $(this).css( {
      color: "black",
      textDecoration: "none",
  } else {
  $(this).css( {
    color: "gray",
    textDecoration: "line-through",
  }
)}*/ //can replace this all with a single toggle class
$(this).toggleClass("completed"); //one line vs 10
})

//click on X to delete to-do
$("ul").on("click", "span", function(event) { // need to make these changes so that they apply to all future
  //listen on event that's already there, but when span is actually clicked
  $(this).parent().fadeOut(500, function() {
    $(this).remove(); //these THIS do not refer to the same thing
  }); //.parent() gives us the LI, .remove()/.fadeOut() takes it away
  event.stopPropagation(); //fires on the span,but not onto the LI listenet
})

$("input[type='text']").keypress(function(event) {
  if(event.which == 13) {
    var textInput = $(this).val();
    $(this).val("");   //clear input
    console.log(textInput);
    $("ul").append("<li><span>XX<i class='fa fa-trash'></i></span>"+ textInput + "</li>") //be careful with format here
    //append takes string of HTML
  }
})

$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
})
