let msg = document.getElementById("mouse-out")

msg.addEventListener("mouseout",displaymsg);
   function displaymsg(){
     document.getElementById("h1-text").innerText = "move out from here"
     alert("mouseout is working")
   }
