const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    formMessage.textContent = `Thanks, ${name}! We'll contact you at ${email}.`;
})