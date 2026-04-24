let button = document.querySelectorAll(".box");
let body = document.querySelector("body");
let heading = document.getElementById("heading");

button.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'red'){
            body.style.backgroundColor = "red";
            heading.style.color = "#FFFFFF";
           
        }
         if (e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
            heading.style.color = "#000000";
            
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = "green";
            heading.style.color = "#FFFFFF";
            
        }
        if (e.target.id === 'pink'){
            body.style.backgroundColor = "pink";
            heading.style.color = "#4B0082";
            
        }
        if (e.target.id === 'purple'){
            body.style.backgroundColor = "purple";
            heading.style.color = "#FFFFFF";
            
        }
        if (e.target.id === 'black'){
            body.style.backgroundColor = "black";
            heading.style.color = "#CCCCCC";
           
        }



    })
})