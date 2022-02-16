
 

const stepHorizontal = (() =>{
let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});
  function progress(stepNum) {
    let p = stepNum * 32;
    document.getElementsByClassName('step-bar__percent')[0].style.width = `${p}%`;
    steps.forEach((e) => {
      if (e.id === stepNum) {
        e.classList.add('step-bar__selected');
        e.classList.remove('step-bar__completed');
      }
      if (e.id < stepNum) {
        e.classList.add('step-bar__completed');
      }
      if (e.id > stepNum) {
        e.classList.remove('step-bar__selected', 'step-bar__completed');
      }
    });
  }
})
stepHorizontal()

const stepVertical = (() =>{
let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});
  function progress(stepNum) {
    let p = stepNum * 34;
    document.getElementsByClassName('step-bar__percent__vertical')[0].style.height = `${p}%`;
    steps.forEach((e) => {
      if (e.id === stepNum) {
        e.classList.add('step-bar__selected');
        e.classList.remove('step-bar__completed');
      }
      if (e.id < stepNum) {
        e.classList.add('step-bar__completed');
      }
      if (e.id > stepNum) {
        e.classList.remove('step-bar__selected', 'step-bar__completed');
      }
    });
  }
})
stepVertical()


const stepMini = (()=>{
let els = document.getElementsByClassName('step__mini');

let text = document.querySelectorAll(".step__text")

text.forEach((tab, index)=>{
  tab.addEventListener("click", () =>{
    changeActiveTabs(index)
  })
})

const changeActiveTabs = ((indexClickedTab)=>{
      text.forEach((tab,index)=>{
            if(index === indexClickedTab){
                tab.classList.add("step__text_completed")
            }
            if(index > indexClickedTab){
              tab.classList.remove("step__text_completed")
            }
       })
        
})


let stepsMini = [];
Array.prototype.forEach.call(els, (e) => {
  stepsMini.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});
function progress(stepNum) {
    let p = stepNum*50;
    document.getElementsByClassName('step-bar__percent__mini')[0].style.width = `${p + 25}%`;
    stepsMini.forEach((e) => {
      if (e.id === stepNum) {
        e.classList.add('step-bar__selected__mini');
        e.classList.remove('step-bar__completed__mini');
        changeActiveTabs()
      }
      if (e.id < stepNum) {
        
        e.classList.add('step-bar__completed__mini');
        changeActiveTabs()
      }
      if (e.id > stepNum) {
        e.classList.remove('step-bar__selected__mini', 'step-bar__completed__mini');
        changeActiveTabs()
      }
    });
  }
})

stepMini()