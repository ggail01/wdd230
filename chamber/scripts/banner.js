// ---BANNER---

// Function to close the banner
function closeBanner() {
    document.getElementById("chamberBanner").style.display = "none";
}

// Function to check if it's Monday, Tuesday, or Wednesday and display the banner accordingly
function displayBanner() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday(1), Tuesday(2), Wednesday(3)
        document.getElementById("chamberBanner").style.display = "block";
    }
}

// Call the function to display the banner when the page loads
window.onload = function() {
    displayBanner();
};