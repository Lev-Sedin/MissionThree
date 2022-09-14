const progFunc = () =>{
  const progress = document.querySelector(".progress-done");
  const percentage = document.querySelector(".progress-text");
  let value = progress.getAttribute("data-done");
  width = 0

  setInterval(()=>{
    if(width == value){
        clearInterval();
    }else{
        progress.style.opacity = 1;
        width +=1;
        percentage.innerHTML = width + "% uploaded";
        progress.style.width = progress.getAttribute("data-done") + "%";
    }
},30)
}
progFunc()