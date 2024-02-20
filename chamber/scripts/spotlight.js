// ---SPOTLIGHT---

document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("members.json")
      .then(response => response.json())
      .then(data => {
        // Filter members with silver or gold membership level
        const silverGoldMembers = data.members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
  
        // Shuffle the array to get random members
        shuffleArray(silverGoldMembers);
  
        // Select 2 or 3 random members
        const spotlightMembers = silverGoldMembers.slice(0, Math.floor(Math.random() * 2) + 2);
  
        // Display spotlight members
        const spotlightContainer = document.getElementById("spotlight-card");
        spotlightMembers.forEach(member => {
          const card = createMemberCard(member);
          spotlightContainer.appendChild(card);
        });
      })
      .catch(error => console.log(error));
  
    // Function to shuffle array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    // Function to create member card
    function createMemberCard(member) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const logo = document.createElement("img");
      logo.src = member.logo;
      logo.alt = member.name + " Logo";
      card.appendChild(logo);
  
      const details = document.createElement("div");
      details.classList.add("details");
  
      const name = document.createElement("h3");
      name.textContent = member.name;
      details.appendChild(name);
  
      const level = document.createElement("p");
      level.textContent = "Membership Level: " + member.membershipLevel;
      details.appendChild(level);
  
      card.appendChild(details);
  
      return card;
    }
  });
  