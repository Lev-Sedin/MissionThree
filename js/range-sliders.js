const rangeOne = document.querySelector("#slider__one")
const rangeTwo = document.querySelector("#slider__two")
const rangeThree = document.querySelector("#slider__three")
const rangeFhour = document.querySelector("#slider__four")


if (rangeOne){
    noUiSlider.create(rangeOne, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });
}
if(rangeTwo){
    noUiSlider.create(rangeTwo, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}
if(rangeThree){
    noUiSlider.create(rangeThree, {
        start: [80, 120],
        step: 1,
        connect: true,
        tooltips: [true,  true],
        range: {
            'min': 0,
            'max': 200
        }
    });
}
if(rangeFhour){
    noUiSlider.create(rangeFhour, {
        start: 120,
        step: 1,
       connect: 'lower',
        tooltips: true,
        range: {
            'min': 0,
            'max': 200
        }
    });
}


