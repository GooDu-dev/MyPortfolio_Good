var count =0;
var Boolcount=true;
sizeOp();
fitErasingNavbar();
window.onscroll = function(){
    navbar(),
    NavCheckPos(),
    ShowOrHide(),
    runCounter(),
    actShowUp(),
    certiShowup()
}
window.ononline = function(){
    ShowOrHide(),
    sizeOp(),
    fitErasingNavbar()
}
window.onresize = function(){
    sizeOp(),
    fitErasingNavbar()
}
function sizeOp(){
    var home = document.getElementById("home");
    var screenHeight = window.innerHeight;
    home.style.height = screenHeight +"px";
}

var prevY = window.pageYOffset || document.documentElement.scrollTop;
function navbar(){
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById("navbar");
    var proPos = document.getElementById("proflies").offsetTop - window.innerHeight/2;
    var toggle = document.getElementById("toggle");
    if(prevY >= currentY){
        // * Scroll Up
        if(window.innerWidth > 780){
            nav.style.top = "0px";
            if(currentY >= proPos){
                nav.style.backgroundColor = "#13294B";
            }
            else{
                nav.style.backgroundColor = "transparent";
            }
        }
        else{
            toggle.style.right = "5%"
            nav.style.transform = "translateX(0%)";
            nav.style.top = "0px";
            nav.style.backgroundColor = "#13294B";
        }
    }
    else{
        // * Scroll Down
        if(window.innerWidth > 780){
            nav.style.top = "-120px";
        }
        else{
            toggle.style.right = "-20%"
            nav.style.transform = "translateX(0%)";
            nav.style.top = "0px";
        }
    }
    prevY = currentY;
}
function toggleNavbar(){
    var navbar = document.getElementById("navbar");
    var toggle = document.getElementById("toggle");
    if(Boolcount){
            navbar.style.transform = "translateX(-100%)";
    } 
    else{
        navbar.style.transform = "translateX(0%)";
    }
    Boolcount = !Boolcount;
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
    var hobPos = document.getElementById("hob").offsetTop;
    var actPos = document.getElementById("act").offsetTop;
    var cerPos = document.getElementById("certi").offsetTop;

    if(scrollTop < proPos){
        home.classList.remove("active");
        profiles.classList.remove("active");
        hobby.classList.remove("active");
        act.classList.remove("active");
        cer.classList.remove("active");
        if(window.innerWidth > 780){
            nav.style.backgroundColor = "transparent";
        }
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
function ShowOrHide(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var typer = document.getElementById("typer");
    var proPhotos1 = document.getElementById("proPhotos1");
    var proPhotos2 = document.getElementById("proPhotos2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var homePos = document.getElementById("home").offsetTop;
    var proPos = document.getElementById("proflies").offsetTop;
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
        showAfterTyped();
    };
    function showAfterTyped(){
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
var actFirsttime = true;
function actShowUp(){
    var style = document.getElementById("style")
    var hobbyContainer = document.getElementById("hob");
    var hobHeight = hobbyContainer.offsetHeight + hobbyContainer.offsetTop - window.innerHeight/2;
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > hobHeight && actFirsttime){
        style.innerHTML += ".timeline-container .act-header h2::after{animation: borderplus 1.5s forwards ease-in-out;}";
        actFirsttime = false;
    }
}
var certiFirstTime = true
function certiShowup(){
    var style = document.getElementById("style");
    var scrollTop = document.documentElement.scrollTop;
    var timelineCont = document.getElementById("act");
    var timelineHeight = timelineCont.offsetHeight + timelineCont.offsetTop - window.innerHeight/2;
    if(scrollTop > timelineHeight && certiFirstTime){
        style.innerHTML += ".cer-header::after{animation: borderplus 1.5s forwards ease-in-out;}"
        certiFirstTime = false;
    }
}
function showAll(){
    let blocks = document.querySelectorAll(".block");
    let all = document.getElementById("all");
    let uni = document.getElementById("uni");
    let ar = document.getElementById("ar");
    let mb = document.getElementById("mb");
    let web = document.getElementById("web");
    all.classList.add("active");
    uni.classList.remove("active");
    ar.classList.remove("active");
    mb.classList.remove("active");
    web.classList.remove("active");
    blocks.forEach(block => {
        var type = block.getAttribute("type");
        if(type != null){
            block.classList.remove("hidecamp");
            block.classList.add("showcamp");
            block.style.display = "initial"
        }
    });
}
function showAr(){
    let blocks = document.querySelectorAll(".block");
    let all = document.getElementById("all");
    let uni = document.getElementById("uni");
    let ar = document.getElementById("ar");
    let mb = document.getElementById("mb");
    let web = document.getElementById("web");
    all.classList.remove("active");
    uni.classList.remove("active");
    ar.classList.add("active");
    mb.classList.remove("active");
    web.classList.remove("active");
    blocks.forEach(block => {
        var type = block.getAttribute("type");
        block.classList.add("hidecamp");
        block.classList.remove("showcamp");
        block.style.display = "none"
        if(type == "arduino"){
            block.classList.add("showcamp");
            block.classList.remove("hidecamp");
            block.style.display = "initial"
        }
    });
}
function showUni(){
    let blocks = document.querySelectorAll(".block");
    let all = document.getElementById("all");
    let uni = document.getElementById("uni");
    let ar = document.getElementById("ar");
    let mb = document.getElementById("mb");
    let web = document.getElementById("web");
    all.classList.remove("active");
    uni.classList.add("active");
    ar.classList.remove("active");
    mb.classList.remove("active");
    web.classList.remove("active");
    blocks.forEach(block => {
        var type = block.getAttribute("type");
        block.classList.add("hidecamp");
        block.classList.remove("showcamp");
        block.style.display = "none"
        if(type == "unity"){
            block.classList.add("showcamp");
            block.classList.remove("hidecamp");
            block.style.display = "initial"
        }
    });
}
function showMb(){
    let blocks = document.querySelectorAll(".block");
    let all = document.getElementById("all");
    let uni = document.getElementById("uni");
    let ar = document.getElementById("ar");
    let mb = document.getElementById("mb");
    let web = document.getElementById("web");
    all.classList.remove("active");
    uni.classList.remove("active");
    ar.classList.remove("active");
    mb.classList.add("active");
    web.classList.remove("active");
    blocks.forEach(block => {
        var type = block.getAttribute("type");
        block.classList.add("hidecamp");
        block.classList.remove("showcamp");
        block.style.display = "none"
        if(type == "microbit"){
            block.classList.add("showcamp");
            block.classList.remove("hidecamp");
            block.style.display = "initial"
        }
    });
}
function showWeb(){
    let blocks = document.querySelectorAll(".block");
    let all = document.getElementById("all");
    let uni = document.getElementById("uni");
    let ar = document.getElementById("ar");
    let mb = document.getElementById("mb");
    let web = document.getElementById("web");
    all.classList.remove("active");
    uni.classList.remove("active");
    ar.classList.remove("active");
    mb.classList.remove("active");
    web.classList.add("active");
    blocks.forEach(block => {
        var type = block.getAttribute("type");
        block.classList.add("hidecamp");
        block.classList.remove("showcamp");
        block.style.display = "none"
        if(type == "website"){
            block.classList.add("showcamp");
            block.classList.remove("hidecamp");
            block.style.display = "initial"
        }
    });
}
function hover(n){
    var block = document.getElementsByClassName("block")[n - 1]
    var button = block.getElementsByTagName("button")[0];
    button.style.opacity = "1";
}
function mouseout(n){
    var block = document.getElementsByClassName("block")[n - 1]
    var button = block.getElementsByTagName("button")[0];
    button.style.opacity = "0";
}
function activateBlock(n) {
    let screen_width = window.innerWidth;
    var block = document.getElementsByClassName("block")[n - 1]
    var button = block.getElementsByTagName("button")[0];
    if(button.innerHTML == "More"){
        button.innerHTML = "Hide";
        block.classList.add("activate");
        if(screen_width  <= 650){
            block.style.gridColumn = "span 1"
            block.style.gridRow = "span 2"
        }
        else if(screen_width <= 780){
            block.style.gridColumn = "span 2"
            block.style.gridRow = "span 3"
        }
        else{
            block.style.gridColumn = "span 2"
            block.style.gridRow = "span 2"
        }
        
    }
    else if(button.innerHTML == "Hide"){
        button.innerHTML = "More";
        block.classList.remove("activate");
        if(screen_width <= 640){
            setTimeout(() =>{
                block.style.gridColumn = "span 1"
                block.style.gridRow = "span 1"
            }, 220);
        }
        else if(screen_width <= 780){
            setTimeout(() =>{
                block.style.gridColumn = "span 1"
                block.style.gridRow = "span 1"
            }, 50);
        }
        else{
            setTimeout(() =>{
                block.style.gridColumn = "span 1"
                block.style.gridRow = "span 1"
            }, 187.5);
        }
    }
}
function easingNav(clicked){
    let screen_width = window.innerWidth;
    var currentclick = document.getElementById(clicked);
    var tab = document.getElementById("tab");
    if(screen_width > 780){
        tab.style.left = currentclick.offsetLeft +"px";
        tab.style.width = currentclick.offsetWidth +"px";
    }
    else{
        tab.style.top = currentclick.offsetTop + "px";
        tab.style.height = currentclick.offsetHeight + "px";
        tab.style.width = currentclick.offsetWidth +"px";
        tab.style.left = currentclick.offsetLeft + "px";
    }
}
function fitErasingNavbar(){
    let tab = document.getElementById("tab");
    let all = document.getElementById("all")
    tab.style.height = all.offsetHeight + "px";
    tab.style.width = all.offsetWidth + "px";
    tab.style.top = all.offsetTop + "px";
    tab.style.left = all.offsetLeft + "px";
}
var firsttime = true;
function runCounter(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var profiles = document.getElementById("proflies");
    var skill = document.getElementById("skill");
    var checkLine = profiles.offsetTop+profiles.offsetHeight -skill.offsetHeight/5;
    if(scrollTop >= checkLine && firsttime){
        SkillCounter();
        firsttime = false;
    }
}
function SkillCounter(){
    const numbers = document.querySelectorAll(".num-count");
    const COUNT_SPEED = 5000;
    numbers.forEach(number => {
        const UpdateCounter = () => {
            const numText = +number.innerText;
            const goal = +number.getAttribute("data-count");

            const plus = goal/COUNT_SPEED;

            if(numText < goal){
                number.innerText = Math.ceil(numText + plus);
                setTimeout(UpdateCounter, 200);
            }
            else{
                number.innerText = goal;
            }
        }
        UpdateCounter();
    })
}

function showAllType(button_Activate ,all_BLOCK){
    var cer_blocks = document.querySelectorAll(all_BLOCK);
    let buttons = document.querySelectorAll(".options");
    buttons.forEach(button => {
        let button_id = button.getAttribute("id")
        if(button_id == button_Activate){
            button.classList.add("activate");
        }
        else{
            button.classList.remove("activate");
        }
    })
    cer_blocks.forEach(block => {
        block.classList.remove("hidecamp");
        block.classList.add("showcamp");
        block.style.display = "flex";
    });
}
function showType(button_Activate ,all_BLOCK, TYPE_1, TYPE_2){
    let cer_blocks = document.querySelectorAll(all_BLOCK);
    let buttons = document.querySelectorAll(".options");
    buttons.forEach(button => {
        let button_id = button.getAttribute("id")
        if(button_id == button_Activate){
            button.classList.add("activate");
        }
        else{
            button.classList.remove("activate");
        }
    })
    cer_blocks.forEach(block => {
        let type = block.getAttribute("type");
        block.classList.remove("showcamp");
        block.classList.add("hidecamp");
        block.style.display = "none";
        setTimeout(() => {
            if(type == TYPE_1 || type == TYPE_2){
                block.classList.remove("hidecamp");
                block.classList.add("showcamp");
                block.classList.add("activate");
            }
            else{
                block.classList.remove("activate");
            }
        }, 1);
    })
}

function Replace(url){
    document.location.href =url;
}
