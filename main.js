function checkrslt(){
    if(check2.value){
       localStorage.setItem("schoolcode",check2.value)
       window.location="result.html"
    }else{
        msg.innerText= "*Please fill the field"
    }
}
 function anotherrslt(){
    localStorage.removeItem("schoolcode")
    window.location = "index.html"
 }