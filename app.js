function post(){
    var textarea=document.getElementById("textarea")
    var value=textarea.value
    if(value===""){
        alert("Write Something")
    }
    else{
        // document.getElementById("after_post").id +=" posted_visible"
        var posted=document.getElementById("post_content").innerHTML=value
        // var sec2main=document.getElementById("sec2_main")
        // var element=document.createElement("div")
        // var id=element.setAttribute('id',"after_post")

        // var div1=document.createElement("div")

        // var btn1=document.createElement("button")
        // var setAtt1=btn1.setAttribute("id","like")
        // var setAtt2=btn1.setAttribute("onclick","")
        // var text=document.createTextNode("Like")
        // btn1.appendChild(text)
        // var firstDiv=btn1.firstChild
        // btn1.insertBefore(btn1,firstDiv)
        // console.log(document.getElementById("like").innerHTML);

        // document.getElementsByClassName("after_post").id +=" after_post "
        textarea.value=""
    }

}

function add(){
    alert("Sorry! Currently Unavailable.")
}
