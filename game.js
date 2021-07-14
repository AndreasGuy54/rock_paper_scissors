console.log('Game Started: Rock Paper Scissors!');

let computerSelection = Math.floor(Math.random() * 3) + 1;

function computerPlay() {
	switch (computerSelection) {
		case 1:
			option = 'Rock';
			console.log(option);
			break;
		case 2:
			option = 'Paper';
			console.log(option);
			break;
		case 3:
			option = 'Scissors';
			console.log(option);
		default:
			break;
	}
}

computerPlay();

// let playerSelection = prompt('Enter rock, paper or scissors');

// function round(playerSelection, computerSelection) {
//     if (playerSelection.toLowerCase() == ) {

//     }
// }
