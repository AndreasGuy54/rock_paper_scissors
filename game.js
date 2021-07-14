console.log('Game Started: Rock Paper Scissors!');

function computerPlay() {
	// Create a random selection for the computer 1 - 3
	let computerSelection = Math.floor(Math.random() * 3) + 1;

	// If 1, Rock. 2, Paper. 3, Scissors
	switch (computerSelection) {
		case 1:
			return 'Rock';
			break;
		case 2:
			return 'Paper';
			break;
		case 3:
			return 'Scissors';
		default:
			break;
	}
}
//  assign choice of computer
let computerChoice = computerPlay();

// Take input from user
let playerSelection = prompt('Enter rock, paper or scissors');

function playRound(userChoice, compChoice) {
	//Check for draw / same selection
	if (userChoice.toLowerCase() === compChoice.toLowerCase()) {
		console.log(`You draw, ${userChoice.toLowerCase()} ties with ${compChoice.toLowerCase()}`);
	} else if (playerSelection.toLowerCase() !== compChoice.toLowerCase()) {
		// Check for different selection
		// rock and paper
		if (playerSelection.toLowerCase() == 'rock' && compChoice.toLowerCase() == 'paper') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}
		// rock and scissors
		if (playerSelection.toLowerCase() == 'rock' && compChoice.toLowerCase() == 'scissors') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}

		// paper and scissors
		if (playerSelection.toLowerCase() == 'paper' && compChoice.toLowerCase() == 'scissors') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}

		// paper and rock
		if (playerSelection.toLowerCase() == 'paper' && compChoice.toLowerCase() == 'rock') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}

		// scissors and rock
		if (playerSelection.toLowerCase() == 'scissors' && compChoice.toLowerCase() == 'rock') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}

		// scissors and paper
		if (playerSelection.toLowerCase() == 'scissors' && compChoice.toLowerCase() == 'paper') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}
	}
}

// Call the function to play a round
playRound(playerSelection, computerChoice);
