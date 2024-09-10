let string = "";
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");
let plus = document.querySelector(".plus");
let minus = document.querySelector("minus");
let divide = document.querySelector("divide");
let equal = document.querySelector("equal");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            screen.innerHTML = `${string}`
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            screen.innerText = `${string}`
        }
        else{
            string = string + e.target.innerHTML;
            screen.innerHTML = `${string}`
    
        }
    })
});