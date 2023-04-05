let inputBox = document.getElementById("input-box");
let outputMsg = document.getElementById("output-msg");

// keydown event listener
inputBox.addEventListener("keydown", outputdown) 
  function outputdown(e){
    outputMsg.innerText = "key down" + e.key
  }

// keyup event listener
inputBox.addEventListener("keyup", outputup) 
  function outputup(e){
    outputMsg.innerText = "key up" + e.key
  }




