const character = "#"; // The character used to form the pattern
const count = 8; // The number of rows in the pyramid
const rows = []; // Array to store each row of the pattern
let inverted = true; // Boolean to control the order of rows (normal or inverted pyramid)

// Function to create a row with the appropriate padding and character count
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Loop through each row from 1 to the count value
for (let i = 1; i <= count; i++) {
  if (inverted) {
    // If inverted is true, add the new row to the beginning of the array
    rows.unshift(padRow(i, count));
  } else {
    // If inverted is false, add the new row to the end of the array
    rows.push(padRow(i, count));
  }
}

let result = "" // Initialize an empty string to hold the final pattern

// Concatenate each row into the result string
for (const row of rows) {
  result = result + "\n" + row;
}

// Output the final pattern to the console
console.log(result);
