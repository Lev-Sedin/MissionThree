
const progCircle = () =>{
    const progress = document.querySelector(".circle")
    let number = progress.getAttribute("data-done");
    percent = number/100
    console.log(percent)
    var circleBar = new ProgressBar.Circle("#circle-container", {
      color: "white",
      strokeWidth: 5,
      trailWidth: 5,
      borderRadius:10 ,
      trailColor: 'rgba(224, 224, 224, 1)',
      easing: "easeInOut",
      from: { color: "#18A0FB", width: 5 },
      to: { color: "#18A0FB", width: 5 },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: 'black',
          position: 'absolute',
          top: '36%',
          left: '18%',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.path.setAttribute("stroke-width", state.width);
        shape.setText(Math.round(shape.value() * 100) +'%');
      }
    });
    
    circleBar.animate(percent, {
      duration: 1500
    });
  }
  
  progCircle()
  