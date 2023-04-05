let hover = document.getElementById("mouseover");
//console.log(hover)

hover.addEventListener("mouseover",danger);
      function danger(){
        hover.style.backgroundColor = "red"
        alert("you are on  danger area")
      }