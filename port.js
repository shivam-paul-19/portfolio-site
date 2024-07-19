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