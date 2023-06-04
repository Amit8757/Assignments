let i = 6;
//let i = parseInt(prompt("Enter the number of rows: "));
for (let row = i; row >= 1; row--) {
  let pattern = "";
  for (let column = 1; column <= row; column++) {
    pattern += "* ";
  }
  console.log(pattern);
}