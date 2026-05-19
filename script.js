function login() {
    let first = document.getElementById('first').value.trim();
    let email = document.getElementById('email').value.trim();

    if (!first || !email) {
        alert("Please fill in your name and email");
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify({ name: first }));
    document.getElementById('welcome-msg').innerHTML = `Welcome back, ${first}!`;
    alert(`Welcome ${first}! You are now logged in.`);
}

function bookTrip() {
    let name = document.getElementById('name').value.trim();
    let country = document.getElementById('country').value;
    let price = document.getElementById('price').value;
    let currency = document.getElementById('currency').value;

    if (!name || !country) {
        alert("Please fill name and select a destination");
        return;
    }

    let message = `Booking Confirmed!\n\n`;
    message += `Name: ${name}\n`;
    message += `Destination: ${country}\n`;
    if (price) message += `Price: ${price} ${currency}\n`;
    message += `\nThank you for booking with us!`;

    alert(message);
    
    document.getElementById('name').value = '';
    document.getElementById('date1').value = '';
    document.getElementById('date2').value = '';
    document.getElementById('price').value = '';
}

function saveFav() {
    let budget = document.getElementById('budget').value;
    let activities = document.getElementById('activities').value.trim();

    if (!budget || !activities) {
        alert("Please enter your budget and activities");
        return;
    }

    alert("Your preferences have been saved!");
    document.getElementById('budget').value = '';
    document.getElementById('activities').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hero-search').addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            alert("Searching destinations...");
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            let target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const user = localStorage.getItem('currentUser');
    if (user) {
        let name = JSON.parse(user).name;
        document.getElementById('welcome-msg').innerHTML = `Welcome back, ${name}!`;
    }
});