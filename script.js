alert("Welcome to my portfolio! Feel free to contact me if you have any queries.");


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

const mainContainer = document.querySelector("main");
const headerBar = document.querySelector("header");
const subTitles = document.querySelectorAll("h2");

document.getElementById("theme-btn").addEventListener('click', function() {
    if (document.body.style.backgroundColor === "none") {
        document.body.style.color = "#eca9a9";
    } else {
        document.body.style.backgroundColor = "#3E5641";
        document.body.style.color = "#F0F0F0";
        mainContainer.style.backgroundColor = "#1e293b";
        headerBar.style.backgroundColor = "#1e293b";
        subTitles.forEach(subTitle => {
            subTitle.style.color = "#f0f0f0"
        });
    }
});

const quoteBtn = document.getElementById('quote-btn')
const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')

quoteBtn.addEventListener('click', function() {
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `-${data.author}`;
    });
});
