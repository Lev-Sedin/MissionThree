
 

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