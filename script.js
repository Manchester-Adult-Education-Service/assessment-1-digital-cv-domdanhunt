#alert("Welcome to my portfolio! Feel free to contact me if you have any queries.");


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

document.getElementById('highlight').style.backgroundColor = blue;


