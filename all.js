// hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("nav ul");

function clickHamburger() {
    hamburger.addEventListener("click", function() {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.paddingTop = "100px";
        }
    });
}  

clickHamburger();

// scroll page
let nav = document.querySelectorAll("nav li");

function scroll() {
    nav.forEach(item => {
        item.addEventListener("click", function() {
           
            if (item.innerHTML === "Home") {
                location.href = "#";
            }
            else {
                location.href = `#${item.innerHTML}`;
            }

            if (window.innerWidth <= 768) {
                menu.style.display = "none";
            }
        });
    })
}

scroll();

// Most popular hover
let countries = document.querySelectorAll(".countries");
let info = document.querySelectorAll(".information");

function hover() {
    countries.forEach((item, i) => {
        item.addEventListener("mouseover", function() {
            info[i].style.display = "block";
        });
        item.addEventListener("mouseout", function() {
            info[i].style.display = "none";
        });
    })
}

hover();

// Contact textarea
let textarea = document.querySelector("#messagesbox");
let remainChars = document.querySelector(".messages span");
let chars = 250;
remainChars.innerHTML = chars;

function remain() {
    textarea.addEventListener("input", function() {
        if (textarea.value.length <= 250) {
            remainChars.innerHTML = 250 - textarea.value.length;
        } else {
            remainChars.innerHTML = 0;
            alert("No more characters is allowed");
        }
        console.log(textarea.value);
    });
}



remain();

// Form submit
let submit = document.querySelector(".btSubmit");
function submitbtn() {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        alert(textarea.value.substring(0, 251));
    });
}

submitbtn();

// Back to top
let backToTop = document.querySelector(".btBackToTop");
function back() {
    backToTop.addEventListener("click", function() {
        location.href = "#";
    });
}

back();