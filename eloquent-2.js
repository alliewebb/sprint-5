//Looping A Triangle
for (let hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash);
}

//FizzBuzz
for (i = 1; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
      console.log("Fizz")
    }
    else if (i % 5 === 0) {
      console.log("Buzz")
    }
    else console.log(i)
  }

//ChessBoard
let size = 8;

let chessBoard = "";

for (let a = 0; a < size; a++) {
  for (let b = 0; b < size; b++) {
    if ((a + b) % 2 === 0) {
      chessBoard += " ";
    } 
    else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard)
