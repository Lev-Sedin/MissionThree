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
const choosePage = () =>{
    const element = document.querySelector('.pagination__select');
    const choices = new Choices(element,{
        searchEnabled: false,
    });
}
choosePage()