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

    validatePasswords(); // Trigger password validation after toggling visibility
}

// Matching Password
function validatePasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMatchStatus = document.getElementById("passwordMatchStatus");

    if (password === confirmPassword) {
        passwordMatchStatus.textContent = "Passwords match!";
        passwordMatchStatus.style.color = "#3a9adf";
    } else {
        passwordMatchStatus.textContent = "Passwords do not match.";
        passwordMatchStatus.style.color = "red";
    }
}

// Rating Value
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}