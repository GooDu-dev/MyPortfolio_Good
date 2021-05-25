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