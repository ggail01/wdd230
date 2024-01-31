//---Visits
document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    let message;
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            const dayWord = daysSinceLastVisit === 1 ? "day" : "days";
            message = `You last visited ${daysSinceLastVisit} ${dayWord} ago.`;
        }
    }
    visitMessage.textContent = message;
    localStorage.setItem('lastVisit', now);

    const lazyImages = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.add('lazy-loaded');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});

// ---Calendar
function fillCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = document.querySelector('.calendar-days');
    calendarDays.innerHTML = '';

    // Empty cells for days of the week before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.innerHTML += '<div></div>';
    }

    // Filling in the days
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.innerHTML += `<div>${day}</div>`;
    }
}

// Initialize the calendar for January 2024
fillCalendar(2024, 0); // January is 0 in JavaScript's Date object