let buttons = document.querySelectorAll(".button")
let display = document.querySelector(".display")

buttons.forEach(button=>{button.addEventListener("click",el=>{
    doCalculate(el)
})
})
function doCalculate(e){
    if(display.innerHTML=="0"){
        display.innerHTML=""
    }
    switch (e.target.innerHTML){
        case "AC":
            display.innerHTML="0"
            break;
         case "DEL":
             if(display.innerHTML=="Error"){
                display.innerHTML="0"
             }
             if(display.innerHTML){

           
            display.innerHTML=display.innerHTML.slice(0,-1)
             }
             if(display.innerHTML==""){
                 display.innerHTML="0"
             }
             break;
         case "=":
             try{
            display.innerHTML=eval(display.innerHTML)
             }catch{
                 display.innerHTML="Error"
             }
            break;
         case "AC":
            display.innerHTML="0"
            break;
        default:
            display.innerHTML+=e.target.innerHTML            
    }
}
