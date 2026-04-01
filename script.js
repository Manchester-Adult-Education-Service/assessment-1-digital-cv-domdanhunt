alert("Welcome to my portfolio! Feel free to contact me if you have any queries.");
const mainContainer = document.querySelector("main");
const headerBar = document.querySelector("header");
const subTitles = document.querySelectorAll("h2");

document.getElementById("theme-btn").addEventListener('click', function(document.body.style.backgroundColor === "#eca9a9") {
    if (document.body.style.backgroundColor === "#eca9a9") {
        document.body.style.backgroundColor = "#3E5641";
        document.body.style.color = "#F0F0F0";
    } else {
        document.body.style.color = "#eca9a9";
    }
});

const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();
console.log("The current hour is: " + hour);

if (hour < 12) {
    nameHeading.textContent = "Good Morning!";
} else if (hour < 18) {
     nameHeading.textContent = "Good Afternoon!";
} else {
    nameHeading.textContent = "Good Evening!"
}

const year = new Date().getFullYear();
document.getElementById("copyright").textContent = `Copyright © ${year} Dominic`


const time = new Date().toLocaleTimeString();
document.getElementById('time').textContent = time;

const allSkills = document.querySelectorAll("li");

allSkills.forEach(skill => {
    if (skill.textContent.includes ("Python")) {
        skill.style.color = "#ea580c"; 
        skill.style.fontWeight = "bold";
    }
});