let click = document.getElementById("Double-click")
//console.log(click)
click.addEventListener("dblclick",bgc);
     function bgc(){
            click.style.backgroundColor = "red"
            alert("background-color changed")
     }
