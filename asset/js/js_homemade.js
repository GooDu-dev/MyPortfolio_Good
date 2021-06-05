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
    document.getElementById("textWrite").addEventListener("animationend", function(){ 
        document.getElementById("PYEngi").style.visibility = "visible";  
        document.getElementById("PYEngi").classList.add("FadeUp");
        document.getElementById("textWrite").style.border = "transparent";
    });
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("welcome").classList.add("active");
        document.getElementById("profiles").classList.remove("active");
        document.getElementById("yEn").classList.remove("active");
        document.getElementById("Educa").classList.remove("active");  
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
        document.getElementById("profilePicture").classList.add("Animate");
    }
    if(document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.add("active");
        document.getElementById("yEn").classList.remove("active");
        document.getElementById("Educa").classList.remove("active");
        document.getElementById("fadeLeft").classList.add("FadeLeft")
        document.getElementById("fadeLeft").style.visibility = "visible";
        document.getElementById("fadeRight").className = "FadeRight";
        document.getElementById("fadeRight").style.visibility = "visible";
        document.getElementById("fadeUp").src = "./asset/Photo/CIE_Edited.jpg";
    }
    if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
        document.getElementById("profilePicture").classList.add("fadeChangePicture1");
        document.getElementById("profilePicture").src = "";
    }
    if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.remove("active");
        document.getElementById("yEn").classList.add("active");
        document.getElementById("Educa").classList.remove("active");
        document.getElementById("textWrite").style.visibility = "visible";
        document.getElementById("textWrite").style.fontSize = "60px"
        document.getElementById("textWrite").classList.add("typewriter-text");

    }
    if(document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("profiles").classList.remove("active");
        document.getElementById("yEn").classList.remove("active");
        document.getElementById("Educa").classList.add("active");
        document.getElementById("Education").style.visibility = "visible";
        document.getElementById("Education").classList.add("FadeUp");
        document.getElementById("PTDimg").style.visibility = "visible";
        document.getElementById("PTDimg").classList.add("FadeDown");
    }
    if(document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800){
        document.getElementById("HWimg").style.visibility = "visible";
        document.getElementById("HWimg").classList.add("FadeUp");
    }

}


