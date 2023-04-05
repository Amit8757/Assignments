let msg = document.getElementById("Output-msg")
let input = document.getElementById("input-box")

input.addEventListener("keypress", output);
function output(e) {
  msg.innerText = "pressed key is " + e.key;
}