/*
This is my  attempt at filling up a magic square. 
A magic square is a 9x9 grid where all rows, all columns and 
each diagonal add up to the same number.
*/

  /** This is a helper function to print the grid.
 * @param {Array} square a 2-d array which represents the magic square
 */
  
  function displayMagicBox(square) {
	console.log("-------------")
	for (let i = 0; i < 3; i++) {
	  let row = square[i].map(num => `| ${num} `).join("") + "|"
	  console.log(row)
	  if (i < 2) {
		console.log("----+---+----")
	  } else {
		console.log("-------------")
	  }
	}
  }
  


/** This is a helper function to check if a 3x3 grid is a magic square.
 * @param {Array} square a 2-d array which represents the magic square
 * @returns {boolean} true if it's a magic square, false otherwise
 */
function isMagicBox(square) {
	// Calculate the expected sum of rows, columns, and diagonals
	let total = 15; // The sum of rows, columns, and diagonals in a 3x3 magic square.
  
	// Checking rows and columns
	for (let i = 0; i < 3; i++) {
	  let rowSum = 0
	  let colSum = 0
	  for (let j = 0; j < 3; j++) {
		rowSum += square[i][j];
		colSum += square[j][i];
	  }
	  if (rowSum !== total || colSum !== total) {
		return false;
	  }
	}
  
	// Checking diagonals
	let diagonal1Sum = square[0][0] + square[1][1] + square[2][2]
	let diagonal2Sum = square[0][2] + square[1][1] + square[2][0]
  
	 if(diagonal1Sum === total && diagonal2Sum === total){
		return true
	}
  }
  /**
   * This is helper function to generate the random square and checking until 
   * get magic square using do-while loop
   * @returns {array} magic square
   */
  function generateRandomMagicBox() {
	let magicSquare
	do {
	  magicSquare = [
		[],
		[],
		[],
	  ];
  
	  let numbers = [...Array(9)].map((_, i) => i + 1)
  
	  for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
		  let randomIndex = Math.floor(Math.random() * numbers.length)
		  magicSquare[i][j] = numbers.splice(randomIndex, 1)[0]
		}
	  }
	} while (!isMagicBox(magicSquare))
 	return magicSquare
  }
/**
 * this is main function to call the helping functions
 */
function main() {
	let magicSquare = generateRandomMagicBox()
	console.log("Magic Box:")
	displayMagicBox(magicSquare)
  }
  
main(); // Call the main function
  