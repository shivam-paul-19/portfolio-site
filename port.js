let skill_btns = document.querySelectorAll(".skill-tab-btn");

for(btns of skill_btns) {
    btns.addEventListener("click", () => {
        let id = event.srcElement.getAttribute("id");
        skill_shift(id);
    });
}

function skill_shift(bt) {
    for(btns of skill_btns) {
        btns.classList.remove("skill-tab-btn-active");
    }
    let clicked = document.getElementById(bt);
    clicked.classList.add("skill-tab-btn-active");
    let des = document.querySelectorAll("#skill-des ul");
    let icons = document.querySelectorAll("#skill-i");
    if(bt == "lang") {
        des[0].innerHTML = "<li>Python</li><li>C</li><li>C++</li><li>Java</li><li>PHP</li><li>JavaScript</li>";
        icons[0].innerHTML = '<i class="fa-brands fa-python"></i><i class="fa-brands fa-java"></i><i class="fa-brands fa-js"></i>';
    }
    if(bt == "tech") {
        des[0].innerHTML = "<li>HTML 5</li><li>CSS 3</li><li>Node JS</li><li>Git & Github</li><li>MySQL</li>";
        icons[0].innerHTML = '<i class="fa-brands fa-node"></i><i class="fa-brands fa-git-alt"></i><i class="fa-solid fa-database"></i>';
    }
    if(bt == "soft") {
        des[0].innerHTML = "<li>MS office</li><li>Adobe Illustrator</li><li>Figma</li><li>Da vinci video editor</li>";
        icons[0].innerHTML = '<i class="fa-solid fa-bezier-curve"></i></i><i class="fa-solid fa-laptop-code"></i></i></i><i class="fa-solid fa-code"></i>';
    }
}

let modTitle = document.querySelectorAll("#exampleModalLabel");
let certview = document.querySelectorAll(".cert-view > button");
let img = document.querySelectorAll("#cert-image");

for(btn of certview) {
    btn.addEventListener("click", () => {
        let id = event.srcElement.getAttribute("id");
        if(id == "apnclg") {
            img[0].attributes.src.nodeValue = "./assets/certificate-sigma-batch-dsa-662f9454b676a6f0bf0547cb.jpg";
        }
        if(id == "iit") {
            img[0].attributes.src.nodeValue = "./assets/DSA05696_14.jpg";
        }
        if(id == "vips") {
            img[0].attributes.src.nodeValue = "./assets/devBaseCert.jpg";
        }
    });
}

let sec = document.querySelectorAll(".container-md");
let navopt = document.querySelectorAll(".navopt");
document.addEventListener("scroll", () => {
    sec.forEach(section => {
        if(window.scrollY >= 0 && window.scrollY <= 740) {
            navopt[0].classList.add("navopt-active");
            navopt[1].classList.remove("navopt-active");
        } else if(window.scrollY >= 740 && window.scrollY <= 1200) {
            navopt[0].classList.remove("navopt-active");
            navopt[1].classList.add("navopt-active");
            navopt[2].classList.remove("navopt-active");
        } else if(window.scrollY >= 1200 && window.scrollY <= 1650) {
            navopt[0].classList.remove("navopt-active");
            navopt[1].classList.remove("navopt-active");
            navopt[2].classList.add("navopt-active");
            navopt[3].classList.remove("navopt-active");
        } else if(window.scrollY >= 1650 && window.scrollY <= 2140) {
            navopt[0].classList.remove("navopt-active");
            navopt[2].classList.remove("navopt-active");
            navopt[3].classList.add("navopt-active");
            navopt[4].classList.remove("navopt-active");
        } else if(window.scrollY >= 2140 && window.scrollY <= 2690) {
            navopt[0].classList.remove("navopt-active");
            navopt[3].classList.remove("navopt-active");
            navopt[4].classList.add("navopt-active");
            navopt[5].classList.remove("navopt-active");
        } else {
            navopt[0].classList.remove("navopt-active");
            navopt[4].classList.remove("navopt-active");
            navopt[5].classList.add("navopt-active");
        }
    })
});

for(btn of navopt) {
    btn.addEventListener("click", () => {
        let e = event.srcElement.getAttribute("id");
        if(e == "home") {
            window.scrollTo(0, 0);
        } else if(e == "skill") {
            window.scrollTo(0, 741);
        } else if(e == "edu") {
            window.scrollTo(0, 1201);
        } else if(e == "project") {
            window.scrollTo(0, 1651);
        } else if(e == "cert") {
            window.scrollTo(0, 2141);
        } else if(e == "con") {
            window.scrollTo(0, 2691);
        }
    });
}

let modebtn = document.querySelector("#mode");
let isLight = false;
dark();

modebtn.addEventListener("click", () => {
    if(isLight) {
        isLight = false;
        dark();
    } else {
        isLight = true;
        light();
    }
});

function dark() {
    console.log("switched to dark mode");
    document.querySelector("#mode").classList.remove("fa-sun");
    document.querySelector("#mode").classList.add("fa-moon");
    document.querySelector("body").classList.add("body-dark");
    document.querySelector(".nav").classList.add("nav-bar-dark");
    document.querySelector(".hd1").classList.add("hd1-dark");

    let heads = document.querySelectorAll("h1, .about > h2, .i1");
    for(head of heads) {
        head.classList.add("dark-h");
    }
    document.querySelector(".nav-h").classList.add("dark-nav-h");
    document.querySelector(".i2").classList.add("i2-dark");

    let ic = document.querySelectorAll(".con_icons i");
    for(i of ic) {
        i.classList.add("fa-brands-dark");
    }

    let boxes = document.querySelectorAll(".light-box");
    for(box of boxes) {
        box.classList.add("dark-box");
    }

    let cards = document.querySelectorAll(".edu-card, .cert-card");
    for(card of cards) {
        card.classList.add("dark-card");
    }

    let btn = document.querySelectorAll(".btn-dark");
    for(btns of btn) {
        btns.classList.remove("btn-dark");
        btns.classList.add("btn-light");
    }

    document.querySelector("footer").classList.add("footer-dark");
    document.querySelector(".cont-sec").classList.add("con-dark");
}

function light() {
    console.log("switched to light mode");
    document.querySelector("#mode").classList.add("fa-sun");
    document.querySelector("#mode").classList.remove("fa-moon");
    document.querySelector("body").classList.remove("body-dark");
    document.querySelector(".nav").classList.remove("nav-bar-dark");
    document.querySelector(".hd1").classList.remove("hd1-dark");

    let heads = document.querySelectorAll("h1, .about > h2, .i1");
    for(head of heads) {
        head.classList.remove("dark-h");
    }
    document.querySelector(".nav-h").classList.remove("dark-nav-h");
    document.querySelector(".i2").classList.remove("i2-dark");

    let ic = document.querySelectorAll(".con_icons i");
    for(i of ic) {
        i.classList.remove("fa-brands-dark");
    }

    let boxes = document.querySelectorAll(".light-box");
    for(box of boxes) {
        box.classList.remove("dark-box");
    }

    let cards = document.querySelectorAll(".edu-card, .cert-card");
    for(card of cards) {
        card.classList.remove("dark-card");
    }

    let btn = document.querySelectorAll(".btn-light");
    for(btns of btn) {
        btns.classList.add("btn-dark");
        btns.classList.remove("btn-light");
    }

    document.querySelector("footer").classList.remove("footer-dark");
    document.querySelector(".cont-sec").classList.remove("con-dark");
}