const progFunc = () =>{
  const progress = document.querySelector(".progress-done");
  const percentage = document.querySelector(".progress-text");
  width = 0
  setTimeout(() =>{
    progress.style.opacity = 1;
    percentage.innerHTML = width++
    percentage.innerHTML = progress.getAttribute("data-done")  + "% uploaded";
    progress.style.width = progress.getAttribute("data-done") + "%";
    
  },1500,)
}
progFunc()