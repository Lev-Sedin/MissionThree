const counterFunc = () =>{
    const counterUp = document.querySelector(".counter-up")
    const counterDown = document.querySelector(".counter-down")
    const counterPage = document.querySelector(".counter__number")

    counterUp.addEventListener("click", (countUp));
    function countUp(){
        if(counterPage.innerHTML < 5 ){
            counterPage.innerHTML ++
        }
    }
    counterDown.addEventListener("click", (countDowm));
    function countDowm(){
        if(counterPage.innerHTML > 1 ){
            counterPage.innerHTML --
        }
    }
}
counterFunc()

