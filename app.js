let textArray = [];

let counter = -1;

$("#save-btn").click(function(e) {
  e.preventDefault();

  $("#p-container").empty();

  const fullText = $("#full-text").val();

  textArray = fullText.split("\n");

  counter = 0;
});

$("#next-btn").click(function(e) {
  e.preventDefault();

  if (counter >= 0 && counter < textArray.length) {
    $("#p-container").append($("<p></p>").text(textArray[counter]));

    counter++;

    // scrolling
    window.scrollTo(0, document.body.scrollHeight);
  }
});
