// count characters in submit modal
function countChar(val) {
  var len = val.value.length;
  if (len >= 150) {
    val.value = val.value.substring(0, 150);
  } else {
    $('#js-submit-modal__form__count').text(len);
  }
}

// transition between div.pg-lie & div.pg-result 
$('#btn-lie').click(function() {
  
  $("#pg-lie").fadeOut(1000, function() {
    $(this).css("display", "none");
    
    $("#pg-result").fadeIn(400, function() {
      // based off of Matthew Taine's Number Counter
      // http://codepen.io/matttaine/pen/kpxqf
      var currentVal = 0,
          endVal = 26;
      $({ Counter: currentVal }).animate({ Counter: endVal }, { 
          duration: 1000,
          step: function () {
              $('#count').text(Math.ceil(this.Counter) + "%");
          }
      });
      
      $(this).css("display", "block");
    });
  })
});


// WHAT'S A WHITE LIE?
$("#modal-def").click(function(){
  $("#modal-container").css("display", "block");
});

$("#modal-hide").click(function(){
  $("#modal-container").css("display", "none");
});

// WHY IT'S A LIE
$("#modal-false").click(function(){
  $("#modal-container-2").css("display", "block");
});

$("#modal-hide-2").click(function(){
  $("#modal-container-2").css("display", "none");
});

// SUBMIT A LIE
$("#modal-submit").click(function(){
  $("#modal-container-3").css("display", "block");
});

$("#modal-hide-3").click(function(){
  $("#modal-container-3").css("display", "none");
});

// FEEDBACK
$("#js-feedback").click(function(){
  $("#js-feedback-modal").css("display", "block");
});

$("#modal-hide-4").click(function(){
  $("#js-feedback-modal").css("display", "none");
});