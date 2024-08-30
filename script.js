document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.innerHTML = "<p>JavaScript is working!</p>";
    } else {
        console.log("Form container not found.");
    }
});
