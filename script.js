"use strict";
let secretNumber = Math.floor(Math.random() * (21 - 1)) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const setBackGroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const displaySN = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const checkHandler = function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // when input is empty
    displayMessage("No number:(");
  } else if (guess === secretNumber) {
    // when player wins
    displayMessage("Woo,correct number");
    displaySN(secretNumber);
    setBackGroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } //when guess is different
  else {
    if (score <= 1) {
      // when player loses
      displayMessage("You've lost the game!");
      setBackGroundColor("#FF0000");
      displaySN(secretNumber);
      displayScore(0);
    } else {
      // when player picks the wrong number
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    }
  }
};
const againHandler = function () {
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  secretNumber = Math.floor(Math.random() * (21 - 1)) + 1;
  displaySN("?");
  score = 20;
  displayScore(score);
  setBackGroundColor("#222");
  document.querySelector(".number").style.width = "15rem";
};
document.querySelector(".check").addEventListener("click", checkHandler);
document.querySelector(".again").addEventListener("click", againHandler);
