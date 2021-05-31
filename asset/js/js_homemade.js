function warp(url){
    document.getElementById("TextToWarp");
    window.location.replace(url);
}

function show(){
    var x = document.getElementById("showThis");
    if (x.style.display === "none") {
        document.getElementById("showmore").innerHTML = "Show less!"
        x.style.display = "block";
    } else {
        document.getElementById("showmore").innerHTML = "Show more!"
        x.style.display = "none";
    }
}


window.onscroll = function() {Pic_fade()};
function Pic_fade(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("welcome").classList.add("active");
        document.getElementById("profiles").classList.remove("active")
        document.getElementById("sd").style.visibility = "hidden";
        document.getElementById("fadeDown").className = "FadeDown";
        document.getElementById("fadeDown").style.fontSize = "108" + "px"
        document.getElementById("fadeDown").style.visibility = "visible"
    }
    if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        document.getElementById("fadeUp").className = "FadeUp";
        document.getElementById("fadeUp").style.visibility = "visible";
    }
    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
        document.getElementById("profilePicture").style.visibility = "visible";
        document.getElementById("profilePicture").classList.add("profileImgPos2");
        
    }
    if(document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.add("active");
        document.getElementById("fadeLeft").className = "FadeLeft";
        document.getElementById("fadeLeft").style.visibility = "visible";
        document.getElementById("fadeRight").className = "FadeRight";
        document.getElementById("fadeRight").style.visibility = "visible";
        document.getElementById("genTextTag").classList.add("FadeRight");
        document.getElementById("genTextTag").style.visibility = "visible";
        document.getElementById("aniBorder").style.visibility = "visible";
    }
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        document.getElementById("profilePicture").classList.add("fadeChangePicture1")
    }
    if(document.body.scrollTop > 1510 || document.documentElement.scrollTop > 1510){
        document.getElementById("profilePicture").classList.add("fadeChangePicture2");
        document.getElementById("profilePicture").src = "./asset/Photo/Sport_day_01.jpg";
        document.getElementById("profilePicture").style.marginTop = "15rem"
    }


}

