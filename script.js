"use strict";
let secretNumber = Math.floor(Math.random() * (21 - 1)) + 1;
let score = 20;
let highScore = 0;

const checkHandler = function () {
  console.log("Hello");
  const guess = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  const randomNumber = document.querySelector(".number");
  const scoreBlock = document.querySelector(".score");
  if (!guess) {
    // when input is empty
    message.textContent = "No number:(";
  } else if (guess === secretNumber) {
    // when player wins
    message.textContent = "Woo,correct number";
    randomNumber.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else {
    if (score <= 0) {
      // when player loses
      message.textContent = "You've lost the game!";
    } else {
      // when player picks the wrong number
      message.textContent = "Sorry, wrong number";
      score--;
      scoreBlock.textContent = score;
    }
  }
};
const againHandler = function () {
  const message = document.querySelector(".message");
  const randomNumber = document.querySelector(".number");
  const scoreBlock = document.querySelector(".score");
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  secretNumber = Math.floor(Math.random() * (21 - 1)) + 1;
  randomNumber.textContent = "?";
  score = 20;
  scoreBlock.textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
document.querySelector(".check").addEventListener("click", checkHandler);
document.querySelector(".again").addEventListener("click", againHandler);
