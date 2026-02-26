const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();
console.log("The current hour is: " + hour);
if (hour < 12) {
    nameHeading.textContent = "Good Morning, Dominic";
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Dominic";
} else {
    nameHeading.textContent = "Good Evening, Dominic"
}