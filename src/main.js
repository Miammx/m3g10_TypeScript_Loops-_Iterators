"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    console.log(json);
    displayCharacters(json.results);
    // Function to display character information
    function displayCharacters(characters) {
        const container = document.getElementById("character-info");
        if (container) {
            characters.forEach((character) => {
                // Create a character card
                const card = document.createElement("div");
                card.style.border = "1px solid #ccc";
                card.style.margin = "10px";
                card.style.padding = "10px";
                // Add character image
                const img = document.createElement("img");
                img.src = character.image;
                img.alt = character.name;
                img.style.width = "100px";
                card.appendChild(img);
                // Add character name
                const name = document.createElement("h2");
                name.textContent = `Name: ${character.name}`;
                card.appendChild(name);
                // Add character species
                const species = document.createElement("p");
                species.textContent = `Species: ${character.species}`;
                card.appendChild(species);
                // Add number of episodes
                const episodes = document.createElement("p");
                episodes.textContent = `Episodes: ${character.episode.length}`;
                card.appendChild(episodes);
                // Append card to container
                container.appendChild(card);
            });
        }
    }
});
