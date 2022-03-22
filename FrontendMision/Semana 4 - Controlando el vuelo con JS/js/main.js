const pokeApiUrl = "https://pokeapi.co/api/v2/";
const pokedex = () => {
  const imageContainer = document.getElementById("pokedisplay-container");
  const buttons = document.getElementsByClassName("btn");
  const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' />";
  const images = {
    imgPokemonNotFound: "./img/404.png",
    imgLoading: "./img/404.png",
  };
  const colorsByType={
    
  }
  const setLoading = () => {
    imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
    for (const button of buttons) {
      button.disabled = true;
    }
  };
  const setLoadingComplete = () => {
    for (const button of buttons) {
      button.disabled = false;
    }
  };
  const getPokemonData = async (pokemonName) =>
    fetch(`${pokeApiUrl}pokemon/${pokemonName}`)
      .then((res) => res.json())
      .catch((error) => ({ requestFailed: true }));
  const setPokemonData = async (pokemonName) => {
    setLoading();
    const pokemonData = await getPokemonData(pokemonName);
    console.log(pokemonData);
    if (pokemonData.requestFailed) {
      imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound);
    } else {
      imageContainer.innerHTML = `
      ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_default)} 
      ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}
      `;

      
    }
    setLoadingComplete();
  };

  const triggers = () => {
    const pokemonInput = document.getElementById("pokemonName");
    pokemonInput.onchange = (event) => setPokemonData(event.target.value);
  };
  return { triggers };
};

window.onload = () => {
  const main = pokedex();
  main.triggers();
};
