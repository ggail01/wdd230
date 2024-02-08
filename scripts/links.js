const activitiesList = document.querySelector('#links');
const baseURL = "https://ggail01.github.io/wdd230/";
const linksURL = "https://ggail01.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
} 

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const li = document.createElement('li');
        li.textContent = `${week.week} `;
        week.links.forEach(link => {
            const a = document.createElement('a');
            a.setAttribute('href', baseURL + link.url);
            a.setAttribute('target', '_blank');
            a.textContent = `${link.title} | `;
            li.appendChild(a);
        });
        activitiesList.appendChild(li);
    });
}

getLinks();