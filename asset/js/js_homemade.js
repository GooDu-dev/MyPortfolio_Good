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
        document.getElementById("profiles").classList.remove("active");
        document.getElementById("yEn").classList.remove("active");
        document.getElementById("sd").style.visibility = "hidden";
        document.getElementById("fadeDown").className = "FadeDown";
        document.getElementById("fadeDown").style.fontSize = "108" + "px"
        document.getElementById("fadeDown").style.visibility = "visible"
        
    }
    if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        document.getElementById("fadeUp").className = "FadeUp";
        document.getElementById("fadeUp").style.visibility = "visible";
        document.getElementById("profilePicture").style.visibility = "visible";
        document.getElementById("profilePicture").classList.add("FadeUp");
    }
    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
        document.getElementById("profilePicture").style.visibility = "visible";
        document.getElementById("profilePicture").classList.add("profileImgPos2");
        
    }
    if(document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.add("active");
        document.getElementById("yEn").classList.remove("active");
        document.getElementById("fadeLeft").className = "FadeLeft";
        document.getElementById("fadeLeft").style.visibility = "visible";
        document.getElementById("fadeRight").className = "FadeRight";
        document.getElementById("fadeRight").style.visibility = "visible";
        document.getElementById("genTextTag").classList.add("FadeRight");
        document.getElementById("genTextTag").style.visibility = "visible";
        document.getElementById("aniBorder").style.visibility = "visible";
        document.getElementById("fadeUp").src = "./asset/Photo/CIE_Edited.jpg";
    }
    if(document.body.scrollTop > 1650 || document.documentElement.scrollTop > 1650){
        document.getElementById("profilePicture").classList.add("fadeChangePicture1")
    }
    if(document.body.scrollTop > 1660 || document.documentElement.scrollTop > 1660){
        document.getElementById("profilePicture").classList.add("fadeChangePicture2");
        document.getElementById("profilePicture").src = "./asset/Photo/Sport_day_01.jpg";
        document.getElementById("profilePicture").style.marginTop = "15rem"
    }
    if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.remove("active");
        document.getElementById("yEn").classList.add("active");
        document.getElementById("textWrite").style.visibility = "visible";
        document.getElementById("textWrite").style.fontSize = "60px"
        document.getElementById("textWrite").classList.add("typewriter-text");

    }
    document.getElementById("textWrite").addEventListener("animationend", function(){
        document.getElementById("textWrite").style.textShadow = "10px 5px 50px pink";
        document.getElementById("textWrite").style.color = "black";   
        document.getElementById("PYEngi").style.visibility = "visible"  
        document.getElementById("PYEngi").classList.add("FadeUp") 
    });

}


