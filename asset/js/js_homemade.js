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
        document.getElementById("sd").style.visibility = "hidden";
        document.getElementById("welcome").classList.add("active");
        document.getElementById("fadeDown").className = "FadeDown";
        document.getElementById("fadeDown").style.visibility = "visible"
    }
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("fadeUp").className = "FadeUp";
        document.getElementById("fadeUp").style.visibility = "visible";
    }
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("welcome").classList.remove("active")
        document.getElementById("profiles").classList.add("active");
        document.getElementById("fadeLeft").className = "FadeLeft";
        document.getElementById("fadeLeft").style.visibility = "visible";
    }


}