$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const sentence = $("#sentence").val().split(" ");

    console.log(sentence);
    console.log(typeof(sentence));

    let newArray = [];
    console.log(sentence.length)
    sentence.forEach(function(element) {
    if (element.toString().length >= 3) {
      newArray.push(element);
    };
    });
    newArray.reverse();
    console.log(newArray);
    $("#sentenceFinal").text(newArray.join(" "));
  });
});