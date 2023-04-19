let delay = 3; // set the delay in seconds

console.log(`Generating a random number in ${delay} seconds...`);

let countdown = setInterval(function() {
  delay--;
  console.log(`${delay} seconds remaining...`);
  if (delay <= 0) {
    clearInterval(countdown);
    let random_number = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
    console.log(`Random number: ${random_number}`);
  }
}, 1000); // display countdown every 1 second
