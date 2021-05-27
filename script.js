"use strict";
const secretNumber = Math.floor(Math.random() * (21 - 1)) + 1;
let score = 20;
const highScore = [];
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
    score += 10;
    scoreBlock.textContent = score;
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
document.querySelector(".check").addEventListener("click", checkHandler);
