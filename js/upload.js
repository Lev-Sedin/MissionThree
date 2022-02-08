const upFunc = () =>{
   
    const uploadFile = document.querySelector(".button__file");
    const uploadBtn = document.querySelector(".donwoload__btn");
    const uploadText = document.querySelector(".donwoload__text");

    uploadBtn.addEventListener("click", function (){
        uploadFile.click ();
    })

    uploadFile.addEventListener("change", function(){
        if (uploadFile.value){
           uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
         }else{
            uploadText.innerText = "UPLOAD"
        }
            
        })
    
}
upFunc()

const errorFuns =() =>{
    const uploadFile = document.getElementById("button-error");
    const uploadBtn = document.getElementById("donwoload-error");
    const uploadText = document.getElementById("donwoload-text-error");

    uploadBtn.addEventListener("click", function (){
        uploadFile.click ();
    })

    uploadFile.addEventListener("change", function(){
        if (uploadFile.value){
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        }else{
            uploadText.innerText = "UPLOAD"
        }
            
    })

}
errorFuns()



const successFuns =() =>{
    const uploadFile = document.getElementById("button-success");
    const uploadBtn = document.getElementById("donwoload-success");
    const uploadText = document.getElementById("donwoload-text-success");

    uploadBtn.addEventListener("click", function (){
        uploadFile.click ();
    })

    uploadFile.addEventListener("change", function(){
        if (uploadFile.value){
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        }else{
            uploadText.innerText = "UPLOAD"
        }
            
    })

}
successFuns()