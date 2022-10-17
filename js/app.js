class rollDice {
  // list of all items to be selected from randomly
  items;

  constructor(items) {
    // store the use of set items
    this.items = items;
  }

  // returns a random entry from the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

let move = 0;
let progress1 = document.getElementById("playerProg1");
let progress2 = document.getElementById("playerProg2");
let player1progress = 10;
let player2progress = 10;

// let rolly = document.getElementById("rolly");
const rolly = document.querySelector("#rolly");
const reset = document.querySelector("#restarty");
reset.disabled = true;
let dice = document.querySelector("img");

class Game extends rollDice {
  outputElement;
  constructor(element) {
    // array of options from the dice
    super([1, 2, 3, 4, 5, 6]);
    this.outputElement = element;
  }

  // play game function that rolls the dice and switches players
  playGame() {
    let diceOne = this.pickRandom();
    let diceTwo = this.pickRandom();
    let total = diceOne + diceTwo;
    let dice = document.querySelectorAll("img");
    let player1 = 0;
    let player2 = 1;
    move++;

    dice.forEach(function (die) {
      die.classList.add("shake");
    });
    setTimeout(function () {
      dice.forEach(function (die) {
        die.classList.remove("shake");
      });
    }, 400);
    // if / else if statements for the game to function wins being on 7 & 11
    if (total == 2) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 3) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 4) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 5) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 6) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 8) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 9) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 10) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 12) {
      console.log("loss");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Loss";
    } else if (total == 7) {
      console.log("win");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Win";
    } else if (total == 11) {
      console.log("win");
      this.outputElement.innerHTML =
        "Dice One : " +
        diceOne +
        " " +
        "Dice Two : " +
        diceTwo +
        " " +
        "Total :" +
        total +
        " " +
        "Win";
    }
    console.log(total);
    // the dice svgs
    document.getElementById("die-1").src = "./images/dice-" + diceOne + ".svg";
    document.getElementById("die-2").src = "./images/dice-" + diceTwo + ".svg";

    //if statements for progressing the progress bar
    if (move == 0) {
      console.log("player1");
      document.getElementById("playerTurn").innerHTML = "Player 1's Turn";
      if (total == 7) {
        progress1.style.width = player1progress + "px";
        player1progress = player1progress + 14;
        // console.log(player1progress);
      }
      if (total == 11) {
        progress1.style.width = player1progress + "px";
        player1progress = player1progress + 14;
        // console.log(player1progress);
      }
      if (player1progress >= 70) {
        rolly.disabled = true;
        reset.disabled = false;
        document.getElementById("playerTurn").innerHTML = "Player 1 Won!!!";
      }
    } else if (move == 1) {
      console.log("player2");
      move = move - 2;
      document.getElementById("playerTurn").innerHTML = "Player 2's Turn";
      if (total == 7) {
        progress2.style.width = player2progress + "px";
        player2progress = player2progress + 14;
        // console.log(player2progress);
      }
      if (total == 11) {
        progress2.style.width = player2progress + "px";
        player2progress = player2progress + 14;
        // console.log(player2progress);
      }
      if (player2progress >= 70) {
        rolly.disabled = true;
        reset.disabled = false;
        document.getElementById("playerTurn").innerHTML = "Player 2 Won!!!";
      }
    }
  }
}
let mydice = new Game(document.getElementById("diceRoll"));
