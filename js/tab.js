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