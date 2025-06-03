function rockPaperScissors() {
  let player1 = prompt('Player 1, enter rock, paper, or scissors:');

  if (player1 === null || player1.trim() === '') {
    alert('Player 1 did not enter anything.');
    return;
  }

  player1 = player1.toLowerCase();

  let validWords = ['rock', 'paper', 'scissors'];
  if (!validWords.includes(player1)) {
    alert('Invalid input from Player 1. Please enter rock, paper, or scissors.');
    return;
  }
 // თუ პირველი მოთამაშე სწორად შეიყვანს, შემდეგ გადავა მეორე მოთამაშეზე
  let player2 = prompt('Player 2, enter rock, paper, or scissors:');

  if (player2 === null || player2.trim() === '') {
    alert('Player 2 did not enter anything.');
    return;
  }

  player2 = player2.toLowerCase();

  if (!validWords.includes(player2)) {
    alert('Invalid input from Player 2. Please enter rock, paper, or scissors.');
    return;
  }

  // Nested if-else ლოგიკა თამაშისთვის
  if (player1 === player2) {
    alert('It\'s a tie!');
  } else {
    if (player1 === 'rock') {
      if (player2 === 'scissors') {
        alert('Player 1 wins!');
      } else {
        alert('Player 2 wins!');
      }
    } else if (player1 === 'paper') {
      if (player2 === 'rock') {
        alert('Player 1 wins!');
      } else {
        alert('Player 2 wins!');
      }
    } else if (player1 === 'scissors') {
      if (player2 === 'paper') {
        alert('Player 1 wins!');
      } else {
        alert('Player 2 wins!');
      }
    }
  }
}

rockPaperScissors();