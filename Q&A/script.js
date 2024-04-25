const dropDown = document.querySelector('.open')
const showAnswer = document.querySelector('.answer')
const closeDropDown = document.querySelector(".close")



dropDown.addEventListener("click", function(){
    showAnswer.classList.add("show-answer")
    dropDown.classList.add("down-hidden")
    closeDropDown.classList.add('close-visible')
})
closeDropDown.addEventListener("click", function(){
    showAnswer.classList.remove("show-answer");
    dropDown.classList.remove("down-hidden")
    closeDropDown.classList.remove("close-visible")
})