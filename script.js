function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();

    dateTimeElement.textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for contacting us!");
    contactForm.reset();
});

const descriptions = document.querySelectorAll(".description");

descriptions.forEach(function(description) {
    description.style.display = "none";
});

const toggleButtons = document.querySelectorAll(".toggle-description");
toggleButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        const description = descriptions[index];

        if (description.style.display === "none") {
    description.style.display = "block";
    button.textContent = "Hide Description";
    } else {
    description.style.display = "none";
    button.textContent = "Show Description";
    }

});

});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});