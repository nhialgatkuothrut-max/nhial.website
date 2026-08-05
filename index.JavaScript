
      // ==========================
// Nhial Gatkuoth Rut Portfolio
// script.js
// ==========================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully!");
});

// ==========================
// Smooth Scroll Navigation
// ==========================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        if(this.hash !== ""){

            e.preventDefault();

            const target = document.querySelector(this.hash);

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });
});

// ==========================
// Typing Animation
// ==========================

const text =
"Electrical & Computer Engineering Student";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,80);

    }

}

window.onload = typing;


// ==========================
// Scroll Animation
// ==========================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

    for(let i=0;i<reveals.length;i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}

// ==========================
// Active Menu
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop-150){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

const name = form.querySelector("input[type='text']").value.trim();

const email = form.querySelector("input[type='email']").value.trim();

const message = form.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

e.preventDefault();

alert("Please fill in all fields.");

}else{

alert("Thank you! Your message is ready to be sent.");

}

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
   
