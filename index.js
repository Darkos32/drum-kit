var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");
var snare = new Audio("./sounds/snare.mp3");
var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");

drumAnimation = (pressed) => {
  var ativo = document.querySelector("." + pressed);
  ativo.classList.add("pressed");
  setTimeout(() => {
    ativo.classList.remove("pressed");
  }, 100);
};

function playSound(name) {
  switch (name) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kick.play();
      break;
  }
}

function handleClick() {
  var textContent = this.textContent;
  playSound(textContent);
  drumAnimation(textContent);
}

var buttons = document.querySelectorAll(".drum");
var button;
for (var i = 0; i < buttons.length; i++) {
  button = buttons[i];
  button.addEventListener("click", handleClick);
}

document.addEventListener("keydown", (e) => {
  playSound(e.key);
  drumAnimation(e.key);
});
