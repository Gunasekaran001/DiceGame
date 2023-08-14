document.addEventListener("DOMContentLoaded", function () {
    const rollButton1 = document.getElementById("rollButton1");
    const rollButton2 = document.getElementById("rollButton2");
    const score1Element = document.getElementById("score1");
    const score2Element = document.getElementById("score2");
    const resultElement = document.getElementById("result");
    const imageElement = document.getElementById("imageEl");
    const resetButton = document.getElementById("reset-button");
  
    let score1 = 0;
    let score2 = 0;
    const winningPoint = 30;
    let currentPlayer = 1;
  
    function checkWin() {
      if (score1 >= winningPoint) {
        resultElement.textContent = "Player 1 wins!";
        disableRollButtons();
      } else if (score2 >= winningPoint) {
        resultElement.textContent = "Player 2 wins!";
        disableRollButtons();
      }
    }
  
    function disableRollButtons() {
      rollButton1.disabled = true;
      rollButton2.disabled = true;
    }
  
    function switchPlayer() {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
    
    resetButton.addEventListener("click", resetGame);
    function resetGame() {
      let score1=0;
      let score2=0;
      score1Element.textContent=0;
      score2Element.textContent=0;
      imageElement.imageContent="";

  }
  
    rollButton1.addEventListener("click", function () {
      if (currentPlayer === 1) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        score1 += randomNumber;
        imageElement.src=`img${randomNumber}.png`;
        score1Element.textContent = score1;
        checkWin();
        switchPlayer();
      }
    });
  
    rollButton2.addEventListener("click", function () {
      if (currentPlayer === 2) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        score2 += randomNumber;
        imageElement.src=`img${randomNumber}.png`;
        score2Element.textContent = score2;
        checkWin();
        switchPlayer();
      }
    });
  });
