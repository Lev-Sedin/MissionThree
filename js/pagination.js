const paginationFunc = () =>{
const paginationUp = document.querySelector(".pagination-up")
const paginationDown = document.querySelector(".pagination-down")
const paginationsPage = document.querySelectorAll(".pagination__item")
let page = 0


// console.log(paginationDown)


paginationsPage[0].classList.add('pagination-active')

paginationUp.addEventListener("click", (pageUp));
    function pageUp (){
        if(page < 4){
            paginationsPage[page].classList.remove('pagination-active');
            page++
            paginationsPage[page].classList.add('pagination-active');
        }
    }

paginationDown.addEventListener("click", (pageDowm));
    function pageDowm(){
        if(page > 0){
            paginationsPage[page].classList.remove("pagination-active")
            page--
            paginationsPage[page].classList.add('pagination-active');
        }
    }
};

paginationFunc()