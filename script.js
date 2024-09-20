document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic validation
            if (name && email && message) {
                alert(`Thank you for your message, ${name}! We will get back to you soon.`);
                form.reset(); // Reset the form after submission
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
