const pokeApiUrl = "https://pokeapi.co/api/v2/";
const getPokemonData = async (pokemonName) =>
  fetch(`${pokeApiUrl}pokemon/${pokemonName}`).then((res) => res.json())
  .catch(error=>({requestFailed:true}));
const setPokemonData = async (pokemonName) => {
  const imgPokemonNotFound = "./img/404.png";
  const imgPokemonDisplay = document.getElementById("pokedisplay");
  const pokemonData = await getPokemonData(pokemonName);
  console.log(pokemonData);
  if (pokemonData.requestFailed) {
    imgPokemonDisplay.src = imgPokemonNotFound;
    //imgPokemonDisplay.src = pokemonData.sprites.front_default;
  } else {
    imgPokemonDisplay.src = pokemonData.sprites.front_default;
  }
};
const triggers = () => {
  const pokemonInput = document.getElementById("pokemonName");
  pokemonInput.onchange = (event) => setPokemonData(event.target.value);
};
window.onload = () => {
  triggers();
};
