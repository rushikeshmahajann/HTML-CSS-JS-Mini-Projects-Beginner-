let counter = 0;
const value = document.querySelector("#count");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            counter--;
            
        }
        
        else if (styles.contains("increase")){
            counter++;
            
        }
        else {
            counter = 0;
           
        }
        if (counter > 0) {
            value.style.color = "green"
        }
        if (counter <0){
            value.style.color = "red"
        }
        if (counter ===0){
            value.style.color = "black"
        }
       
        value.textContent = counter;
    })
})
