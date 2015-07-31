var clickedTime;
var createdTime;
var reactionTime;
var colors = ["red","lightblue","lightgreen","yellow","purple","orange"];
var color = ""
var bestTime = 100;

function makeBox() {
  var time = Math.random() * 2000;
  var top = Math.random() * 200;
  var left = Math.random() * 800;

  setTimeout(function(){
    $('#box').css("display", "block");
    $('#box').css("margin-top", top + "px");
    $('#box').css("margin-left", left + "px");

    color = colors[Math.floor(Math.random()*colors.length)];
    $('#box').css("background-color", color);

    createdTime = Date.now();
  }, time);
};

$("#box").click( function() {
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime) / 1000;

  if (reactionTime <= bestTime) {
    bestTime = reactionTime;
  };

  if (bestTime != 100) {
    $('#best-time').html(" --- Your best time: " + bestTime + "s");
  };

  $('#time').html(reactionTime);
  $(this).css("display", "none");
  makeBox();
});

$('#start').click( function() {
  makeBox();
  $(this).hide();
  $('#stop').fadeIn();
  $('#reset').hide();
});

$('#stop').click( function() {
  $(this).hide();
  $('#box').hide();
  $('#start').fadeIn();
  $('#reset').fadeIn();
});

$('#reset').click( function() {
  location.reload()
});
