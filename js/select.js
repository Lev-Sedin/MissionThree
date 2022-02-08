const defaultSelect = () =>{
    const element = document.querySelector('.Option__box');
    const choices = new Choices(element,{
        searchEnabled: false,
    });
}
defaultSelect()

const defaultChoose = () =>{
    const element = document.querySelector('.Choose__box');
    const choices = new Choices(element,{
        searchEnabled: false,
    });
}
defaultChoose()