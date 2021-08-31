var count =0;
var Boolcount=true;

window.onscroll = function(){
    navbar(),
    NavCheckPos(),
    ShowOrHide()
}
window.onpageshow = function(){
    checkHome()
}
window.onkeypress = function(){
    presscheck()
}
window.ontouchstart = function(){
    presscheck()
}
window.ononline = function(){
    ShowOrHide()
}
window.addEventListener("load", function(){
    var div = document.getElementById("loader");
    div.style.opacity = "0";
});
window.addEventListener("mousemove", function(){
    var div = document.getElementById("loader");
    div.style.display = "none";
});
window.addEventListener("touchstart", function(){
    var div = document.getElementById("loader");
    div.style.display = "none";
});

var prevY = window.pageYOffset || document.documentElement.scrollTop;
function navbar(){
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById("navbar");
    var proPos = document.getElementById("proflies").offsetTop;
    var toggle = document.getElementById("toggle");
    if(prevY > currentY){
        nav.style.top = "0px";
        toggle.style.right = "5vw"
        if(currentY >= proPos){
            nav.style.backgroundColor = "#13294B";
        }
    }
    else{
        nav.style.top = "-80px";
        toggle.style.right = "-60px";
        nav.style.zIndex = "1";
    }
    prevY = currentY;
}

function NavCheckPos(){
    var home = document.getElementById("navHome");
    var profiles = document.getElementById("navPro");
    var hobby = document.getElementById("navHob");
    var act = document.getElementById("navAct");
    var cer = document.getElementById("navCer");
    var nav = document.getElementById("navbar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    var homePos = document.getElementById("home").offsetTop;
    var proPos = document.getElementById("proflies").offsetTop;
    var hobPos = document.getElementById("hobPos").offsetTop;
    var actPos = document.getElementById("act").offsetTop;
    var cerPos = document.getElementById("certi").offsetTop;

    if(scrollTop < proPos){
        home.classList.add("active");
        profiles.classList.remove("active");
        hobby.classList.remove("active");
        act.classList.remove("active");
        cer.classList.remove("active");
        nav.style.backgroundColor = "transparent";
    }
    if(scrollTop >= proPos && scrollTop < hobPos){
        home.classList.remove("active");
        profiles.classList.add("active");
        hobby.classList.remove("active")
        act.classList.remove("active");
        cer.classList.remove("active");
    }
    if(scrollTop >= hobPos && scrollTop < actPos){
        home.classList.remove("active");
        profiles.classList.remove("active");
        hobby.classList.add("active");
        act.classList.remove("active");
        cer.classList.remove("active");
    }
    if(scrollTop >= actPos && scrollTop < cerPos){
        home.classList.remove("active");
        profiles.classList.remove("active");
        hobby.classList.remove("active");
        act.classList.add("active");
        cer.classList.remove("active");
    }
    if(scrollTop >= cerPos){
        home.classList.remove("active");
        profiles.classList.remove("active");
        hobby.classList.remove("active");
        act.classList.remove("active");
        cer.classList.add("active");
    }
    
}

function checkHome(){
        var type1 = document.getElementById("type-1");
        var type2 = document.getElementById("type-2");
        var type3 = document.getElementById("type-3");
        var blink = document.getElementById("press");
        type1.addEventListener("animationend", function(){
            blink.style.visibility = "visible";
            blink.classList.add("textblink");
            type1.classList.remove("texttyper");
            type1.style.borderRight = "transparent";
            type1.style.whiteSpace = "wrap !important";
        });
    }

        function presscheck(){
            var type1 = document.getElementById("type-1");
            var type2 = document.getElementById("type-2");
            var type3 = document.getElementById("type-3");
            var blink = document.getElementById("press");
            var contract = document.getElementById("contract");
            count++;
            if(count == 1){
                type2.style.visibility = "visible";
                type2.style.animationPlayState = "running";
                type1.classList.remove("texttyper");
                type2.addEventListener("animationend", function(){
                    type2.style.borderRight = "transparent";
                    type2.style.whiteSpace = "wrap !important";
                });
            }
            else if(count == 2){
                type3.style.visibility = "visible";
                type3.style.animationPlayState = "running";
                type3.addEventListener("animationend", function(){
                    type3.style.borderRight = "transparent";
                    type3.style.whiteSpace = "wrap !important";
                });
            }
            else if(count == 3){
                blink.style.display = "none";
                contract.style.opacity = "1";
            }
        }
    
function ShowOrHide(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var typer = document.getElementById("typer");
    var proPhotos1 = document.getElementById("proPhotos1");
    var proPhotos2 = document.getElementById("proPhotos2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var homePos = document.getElementById("home").offsetTop;
    var proPos = document.getElementById("proflies").offsetTop;
    console.log(proPos);
    console.log(homePos);
    console.log(scrollTop);
    if(scrollTop >= homePos){
        typer.style.animationPlayState = "running, running";
        typer.style.visibility = "visible";
    }
    if(scrollTop >= proPos-200){
        typer.style.border = "transparent";
        typer.style.padding = "10px";
        typer.style.transition = "2s";
        typer.style.boxShadow = "0px 0px 20px black";
        typer.style.borderRadius = "25px";
        console.log("aniamtion Ended");
        showAfterTyped();
    };
    function showAfterTyped(){
        console.log("run last function");
        proPhotos1.style.visibility = "visible";
        proPhotos1.style.animation = "fadeFromLeft 2s forwards";
        text1.style.visibility = "visible";
        text1.style.animation = "fadeFromRight 2s forwards";
        text2.style.visibility = "visible";
        text2.style.animation = "faceFromTop 2s forwards";
        proPhotos2.style.visibility = "visible";
        proPhotos2.style.animation = "fadeFromBottom 2s forwards"
    }
}

function hobbyBoxHover(itemName,buttonName){
    var item = document.getElementById(itemName);
    var button = document.getElementById(buttonName);
    button.style.opacity = "1";
    button.style.visibility = "visible";
    item.style.opacity = "0.2";
}
function hobbyBoxNormal(itemName,buttonName){
    var item = document.getElementById(itemName);
    var button = document.getElementById(buttonName);
    button.style.opacity = "0";
    button.style.visibility = "hidden";
    item.style.opacity = "1";
}
function learnMore(itemName,buttonName){
    var item = document.getElementById(itemName);
    var button = document.getElementById(buttonName);
    item.style.gridColumn = "span 2";
    item.style.maxWidth = "750px";
}


function showAll(){
    let item1 = document.getElementById("group-1");
    let item2 = document.getElementById("group-2");
    let item3 = document.getElementById("group-3");
    let item4 = document.getElementById("group-4");
    let item5 = document.getElementById("group-5");
    let item6 = document.getElementById("group-6");
    let item7 = document.getElementById("group-7");
    let item8 = document.getElementById("group-8");
    let item9 = document.getElementById("group-9");
    let item10 = document.getElementById("group-10");
    let allbtn = document.getElementById("all");
    let unibtn = document.getElementById("uni");
    let arbtn = document.getElementById("ar");
    let mbbtn = document.getElementById("mb");

    allbtn.className = "active";
    unibtn.className = " ";
    arbtn.className = " ";
    mbbtn.className = " ";
    item1.className = "item showcamp";
    item2.className = "item showcamp";
    item3.className = "item showcamp";
    item4.className = "item showcamp";
    item5.className = "item showcamp";
    item6.className = "item showcamp";
    item7.className = "item showcamp";
    item8.className = "item showcamp";
    item9.className = "item showcamp";
    item10.className = "item showcamp";
}
function showAr(){
    let item1 = document.getElementById("group-1");
    let item2 = document.getElementById("group-2");
    let item3 = document.getElementById("group-3");
    let item4 = document.getElementById("group-4");
    let item5 = document.getElementById("group-5");
    let item6 = document.getElementById("group-6");
    let item7 = document.getElementById("group-7");
    let item8 = document.getElementById("group-8");
    let item9 = document.getElementById("group-9");
    let item10 = document.getElementById("group-10");
    let allbtn = document.getElementById("all");
    let unibtn = document.getElementById("uni");
    let arbtn = document.getElementById("ar");
    let mbbtn = document.getElementById("mb");

    allbtn.className = "";
    unibtn.className = "";
    arbtn.className = "active";
    mbbtn.className = "";
    item1.className = "item hidecamp";
    item2.className = "item showcamp";
    item3.className = "item hidecamp";
    item4.className = "item hidecamp";
    item5.className = "item hidecamp";
    item6.className = "item showcamp";
    item7.className = "item showcamp";
    item8.className = "item showcamp";
    item9.className = "item showcamp";
    item10.className = "item showcamp";
}
function showUni(){
    let item1 = document.getElementById("group-1");
    let item2 = document.getElementById("group-2");
    let item3 = document.getElementById("group-3");
    let item4 = document.getElementById("group-4");
    let item5 = document.getElementById("group-5");
    let item6 = document.getElementById("group-6");
    let item7 = document.getElementById("group-7");
    let item8 = document.getElementById("group-8");
    let item9 = document.getElementById("group-9");
    let item10 = document.getElementById("group-10");
    let allbtn = document.getElementById("all");
    let unibtn = document.getElementById("uni");
    let arbtn = document.getElementById("ar");
    let mbbtn = document.getElementById("mb");

    allbtn.className = "";
    unibtn.className = "active";
    arbtn.className = "";
    mbbtn.className = "";
    item1.className = "item hidecamp";
    item2.className = "item hidecamp";
    item3.className = "item showcamp";
    item4.className = "item showcamp";
    item5.className = "item hidecamp";
    item6.className = "item hidecamp";
    item7.className = "item hidecamp";
    item8.className = "item hidecamp";
    item9.className = "item hidecamp";
    item10.className = "item hidecamp";
}
function showMb(){
    let item1 = document.getElementById("group-1");
    let item2 = document.getElementById("group-2");
    let item3 = document.getElementById("group-3");
    let item4 = document.getElementById("group-4");
    let item5 = document.getElementById("group-5");
    let item6 = document.getElementById("group-6");
    let item7 = document.getElementById("group-7");
    let item8 = document.getElementById("group-8");
    let item9 = document.getElementById("group-9");
    let item10 = document.getElementById("group-10");
    let allbtn = document.getElementById("all");
    let unibtn = document.getElementById("uni");
    let arbtn = document.getElementById("ar");
    let mbbtn = document.getElementById("mb");

    allbtn.className = "";
    unibtn.className = "";
    arbtn.className = "";
    mbbtn.className = "active";
    item1.className = "item showcamp";
    item2.className = "item hidecamp";
    item3.className = "item hidecamp";
    item4.className = "item hidecamp";
    item5.className = "item showcamp";
    item6.className = "item hidecamp";
    item7.className = "item hidecamp";
    item8.className = "item hidecamp";
    item9.className = "item hidecamp";
    item10.className = "item hidecamp";
}
function learnMore(groupName, itemName, buttonName, textName){
    var group = document.getElementById(groupName);
    var btn = document.getElementById(buttonName);
    var item = document.getElementById(itemName);
    var text = document.getElementById(textName);

    if(btn.innerHTML === "Learn More"){
        group.classList.add("activate");
        btn.classList.add("activate");
        item.classList.add("activate");
        text.classList.add("activate");
        btn.innerHTML = "Hide";
    }
    else if(btn.innerHTML === "Hide"){
        group.classList.remove("activate");
        btn.classList.remove("activate");
        item.classList.remove("activate");
        text.classList.remove("activate");
        btn.innerHTML = "Learn More";
    }
}

function toggleNavbar(){
    var navbar = document.getElementById("navbar");
            var toggle = document.getElementById("toggle");
            toggle.addEventListener("touch", function(){
                if(Boolcount){
                    navbar.style.right = "0px";
                } 
                else{
                    navbar.style.right = "-200px";
                }
                Boolcount = !Boolcount;
            });
            toggle.addEventListener("click", function(){
                if(Boolcount){
                    navbar.style.right = "0px";
                } 
                else{
                    navbar.style.right = "-200px";
                }
                Boolcount = !Boolcount;
            });
}