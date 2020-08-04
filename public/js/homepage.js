/*const text = document.getElementById('name');
const textArr = text.innerText.split('');

const toto = text.innerHTML = `
    ${textArr.map(letter => `<span
class="${randomVisibility()}">${letter}
</span>`).join('')}
`;

function randomVisibility(){
    return Math.random() <0.5 ? 'visible' : 'hidden';
}**/

const menu = document.getElementById("menu_top");
const menuLogo = document.getElementById("menu_logo");
menuLogo.addEventListener("click", function(){
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

document.getElementById("home_text").onmouseover = function() {mouseOverHome()};
document.getElementById("home_text").onmouseout = function() {mouseOutHome()};

document.getElementById("about_text").onmouseover = function() {mouseOverAbout()};
document.getElementById("about_text").onmouseout = function() {mouseOutAbout()};

document.getElementById("work_text").onmouseover = function() {mouseOverWork()};
document.getElementById("work_text").onmouseout = function() {mouseOutWork()};

document.getElementById("background_text").onmouseover = function() {mouseOverBackground()};
document.getElementById("background_text").onmouseout = function() {mouseOutBackground()};

document.getElementById("contact_text").onmouseover = function() {mouseOverContact()};
document.getElementById("contact_text").onmouseout = function() {mouseOutContact()};

function mouseOverHome() {
    document.getElementById("home_text").innerHTML = "Home";

}

function mouseOutHome() {
    document.getElementById("home_text").innerHTML = '<i class=\"fas fa-home\" id=\"home_img\"></i>';
}

function mouseOverAbout() {
    document.getElementById("about_text").innerHTML = "About me";
}

function mouseOutAbout() {
    document.getElementById("about_text").innerHTML = '<i class="far fa-address-card" id="about_img"></i>';
}

function mouseOverWork() {
    document.getElementById("work_text").innerHTML = "My work";
}

function mouseOutWork() {
    document.getElementById("work_text").innerHTML = '<i class="far fa-eye" id="work_img"></i>';
}

function mouseOverBackground() {
    document.getElementById("background_text").innerHTML = "My background";
}

function mouseOutBackground() {
    document.getElementById("background_text").innerHTML = '<i class="fas fa-shoe-prints" id="background_img"></i>';
}

function mouseOverContact() {
    document.getElementById("contact_text").innerHTML = "Contact me";
}

function mouseOutContact() {
    document.getElementById("contact_text").innerHTML = '<i class="far fa-envelope" id="contact_img"></i>';
}
