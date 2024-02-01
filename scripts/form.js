// Password
function validatePasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("confirmPassword").setCustomValidity("Passwords do not match");
    } else {
        document.getElementById("confirmPassword").setCustomValidity("");
    }
}

// Show Password
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var showPasswordBtn = document.querySelector(`#${inputId} + .password-container .show-password-btn`);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPasswordBtn.textContent = "Show";
    }
}

// Rating Value
function updateRatingValue() {
    var ratingValue = document.getElementById("pageRating").value;
    document.getElementById("ratingValue").innerText = ratingValue;
}