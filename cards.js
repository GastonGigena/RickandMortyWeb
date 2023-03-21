const $container = document.getElementById("card-contenedor");

const URL_API = "https://rickandmortyapi.com/api/character";

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;
    console.log(characters);

    for (let character of characters) {
      $container.innerHTML += `
        <div class="card">
        <img class="character-image" src=${character.image} alt="Imagen de ${character.name}">
        <div class="character-info">
        <h2 class="character-name">${character.name}</h2>
        <p>Gender: ${character.gender}</p>
        <p>Species: ${character.species}</p>
        <p>Status: ${character.status}</p>
        </div>
        </div>
        `;
    }
  });

  function name(params) {
    
  }