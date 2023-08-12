var clutter = "";
var score = 0;
var number;
var timer = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function makeBubble() {
  clutter = "";
  for (var i = 1; i <= 180; i++) {
    var bubble = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${bubble}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime() {
  timer = 60;
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = "Game Over";
    }
  }, 1000);
}

function getNewHit() {
  number = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = number;
  console.log(number);
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var hitBubble = Number(dets.target.textContent);
  if (number === hitBubble) {
    var snd = new Audio("./bubble.wav");
    snd.play();
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    var err = new Audio("./error.wav");
    err.play();
  }
});

getNewHit();

runTime();
makeBubble();
