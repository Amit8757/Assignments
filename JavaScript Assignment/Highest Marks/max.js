let marks = [80, 75, 90, 85, 95];
let highestMark = 0;

for (let i = 0; i < marks.length; i++) {
  highestMark = (marks[i] > highestMark) ? marks[i] : highestMark;
}

console.log('The highest mark scored in the class is'+ " "  + (highestMark) + ".");
