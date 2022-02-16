const tabFubnc = () =>{
    const tabs = document.querySelectorAll(".tab__change")
 
    const changeActiveTabs = ((indexClickedTab)=>{
        tabs.forEach((tab,index)=>{
            tab.classList.remove("active")

            if(index === indexClickedTab){
                tab.classList.add("active")
            }
        })
        
    })

    tabs.forEach((tab, index)=>{
        tab.addEventListener("click", () =>{
            changeActiveTabs(index)
        })
    })
}
tabFubnc()
const breadcrumbs = (() =>{
  let breadcrumb = document.querySelectorAll(".breadcrumbs__link")
 breadcrumb.forEach((tab, index)=>{
  tab.addEventListener("click", () =>{
    changeBreadcrumb(index)
  })
  const changeBreadcrumb = ((indexBreadcrumb)=>{
      breadcrumb.forEach((breadcrumbs,index)=>{
            if(index === indexBreadcrumb){
              breadcrumbs.classList.add("breadcrumbs__active");
            }
            if(index < indexBreadcrumb){
              breadcrumbs.classList.add("breadcrumbs__active")
            }
            if(index > indexBreadcrumb){
              breadcrumbs.classList.remove("breadcrumbs__active")
            }
       })
        
})



})
})
breadcrumbs()

const stepsChange = (()=>{
let stepChange = document.querySelectorAll(".step-breadcrumb")


stepChange.forEach((tab, index)=>{
  tab.addEventListener("click", () =>{
    changeActiveStep(index)
  })
})


const changeActiveStep = ((indexClickedText)=>{
      stepChange.forEach((steps,index)=>{
            if(index === indexClickedText){
                steps.classList.add("step-breadcrumb__active");
            }
            if(index < indexClickedText){
              steps.classList.add("step-breadcrumb__active")
            }
            if(index > indexClickedText){
                steps.classList.remove("step-breadcrumb__active")
            }
       })
        
})


})
stepsChange()