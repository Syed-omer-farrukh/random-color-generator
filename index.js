function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#circle1").css("transition-duration", ".5s");
  $("#circle1").css("transition-delay", "0");
  $("#circle1").css("background-color", randomColor());

  document.getElementById("colorName1").innerHTML = randomColor().toString();
}

function setRandomColor2() {
  $("#circle2").css("transition-duration", ".5s");
  $("#circle2").css("transition-delay", "0");
  $("#circle2").css("background-color", randomColor());

  document.getElementById("colorName2").innerHTML = randomColor().toString();
}

function setRandomColor3() {
  $("#circle3").css("transition-duration", ".5s");
  $("#circle3").css("transition-delay", "0");
  $("#circle3").css("background-color", randomColor());

  document.getElementById("colorName3").innerHTML = randomColor().toString();
}

function setRandomColor4() {
  $("#circle4").css("transition-duration", ".5s");
  $("#circle4").css("transition-delay", "0");
  $("#circle4").css("background-color", randomColor());

  document.getElementById("colorName4").innerHTML = randomColor().toString();
}

function setRandomColor5() {
  $("#circle5").css("transition-duration", ".5s");
  $("#circle5").css("transition-delay", "0");
  $("#circle5").css("animation-delay", "0s");
  $("#circle5").css("background-color", randomColor());

  document.getElementById("colorName5").innerHTML = randomColor().toString();
}

function newPallete() {
  $("#circle1").css("background-color", randomColor());
  $("#circle1").css("transition-duration", "1s");
  $("#circle1").css("animation", "pulse 2s");

  document.getElementById("colorName1").innerHTML = randomColor().toString();

  $("#circle2").css("background-color", randomColor());
  $("#circle2").css("animation", "pulse 2s");
  document.getElementById("circle2").style.animationDelay = ".25s";
  $("#circle2").css("transition-duration", "1s");
  $("#circle2").css("transition-delay", ".25s");

  document.getElementById("colorName2").innerHTML = randomColor().toString();

  $("#circle3").css("background-color", randomColor());
  $("#circle3").css("animation", "pulse 2s");
  document.getElementById("circle3").style.animationDelay = "1s";
  $("#circle3").css("transition-duration", "1s");
  $("#circle3").css("transition-delay", "1s");

  document.getElementById("colorName3").innerHTML = randomColor().toString();

  $("#circle4").css("background-color", randomColor());
  $("#circle4").css("animation", "pulse 2s");
  document.getElementById("circle4").style.animationDelay = ".5s";
  $("#circle4").css("transition-duration", "1s");
  $("#circle4").css("transition-delay", ".5s");
  document.getElementById("colorName4").innerHTML = randomColor().toString();

  $("#circle5").css("background-color", randomColor());
  $("#circle5").css("animation", "pulse 2s");
  document.getElementById("circle5").style.animationDelay = ".75s";
  $("#circle5").css("transition-duration", "1s");
  $("#circle5").css("transition-delay", ".75s");
  document.getElementById("colorName5").innerHTML = randomColor().toString();

  return newPalette();
}
