const visitDisplay = document.querySelector('.visits')

let numVisits = Number(window.localStorage.getItem('numberVisitsStorage')) || 0;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
}
else {
    visitDisplay.textContent = ` 🎊 Welcome! 🎊`
}

numVisits++;

localStorage.setItem('numberVisitsStorage', numVisits);