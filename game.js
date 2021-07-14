console.log('Game Started: Rock Paper Scissors!');

function computerPlay() {
	// Create a random selection for the computer 1 - 3
	let rand = Math.floor(Math.random() * 3) + 1;

	// If 1, Rock. 2, Paper. 3, Scissors
	switch (rand) {
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
// let computerChoice = computerPlay();

function playRound(userChoice, compChoice) {
	// Take input from user
	userChoice = prompt('Enter rock, paper or scissors');

	//Check for draw / same selection
	if (userChoice.toLowerCase() === compChoice.toLowerCase()) {
		console.log(`You draw, ${userChoice.toLowerCase()} ties with ${compChoice.toLowerCase()}`);
	} else if (userChoice.toLowerCase() !== compChoice.toLowerCase()) {
		// Check for different selection
		// rock and paper
		if (userChoice.toLowerCase() == 'rock' && compChoice.toLowerCase() == 'paper') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}
		// rock and scissors
		if (userChoice.toLowerCase() == 'rock' && compChoice.toLowerCase() == 'scissors') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}

		// paper and scissors
		if (userChoice.toLowerCase() == 'paper' && compChoice.toLowerCase() == 'scissors') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}

		// paper and rock
		if (userChoice.toLowerCase() == 'paper' && compChoice.toLowerCase() == 'rock') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}

		// scissors and rock
		if (userChoice.toLowerCase() == 'scissors' && compChoice.toLowerCase() == 'rock') {
			console.log(`You lose, ${userChoice.toLowerCase()} loses to ${compChoice.toLowerCase()}`);
		}

		// scissors and paper
		if (userChoice.toLowerCase() == 'scissors' && compChoice.toLowerCase() == 'paper') {
			console.log(`You win, ${userChoice.toLowerCase()} beats ${compChoice.toLowerCase()}`);
		}
	}
}

function game() {
	for (let index = 0; index < 5; index++) {
		let comp = computerPlay();
		let playerChoice;
		// Call the function to play a round
		playRound(playerChoice, comp);
	}
}

game();
