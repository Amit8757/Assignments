const Decrease = document.getElementById("Decrease");
const increase = document.getElementById("increase");
const displayvalue = document.getElementById("displayvalue");
const reset = document.getElementById("reset");

// Decrease button

Decrease.addEventListener("click", () =>{
    const value = Number(displayvalue.innerText);
    if (value > 0){
        displayvalue.innerText = value - 1;
    }else{
        alert("Negetive value not allowed")
    }
});




//increase button
increase.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayvalue.innerText = value + 1;
    }
  });




//reset button
reset.addEventListener("click", () => {
    displayvalue.innerText = 0;
  });