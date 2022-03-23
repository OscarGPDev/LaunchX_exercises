const pokeApiUrl = "https://pokeapi.co/api/v2/";
const pokedex = () => {
  const imageContainer = document.getElementById("pokedisplay-container");
  const pokemonTypesContainer = document.getElementById("pokemonTypes");
  const buttons = document.getElementsByClassName("btn");
  const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' />";
  const pokemonStatsElements = {
    hp: document.getElementById("pokemonStatHp"),
    attack: document.getElementById("pokemonStatAttack"),
    defense: document.getElementById("pokemonStatDefense"),
    specialAttack: document.getElementById("pokemonStatSpecialAttack"),
    specialDefense: document.getElementById("pokemonStatSpecialDefense"),
    speed: document.getElementById("pokemonStatSpeed"),
  };
  const pokemonNameElement = document.getElementById("pokemonNameResult");
  const pokemonAbilitiesElement = document.getElementById("pokemonAbilities");
  const pokemonMovesElement = document.getElementById("pokemonMoves");
  pokemonAbilities;
  const images = {
    imgPokemonNotFound: "./img/404.png",
    imgLoading: "./img/404.png",
  };
  const processPokemonTypes = (pokemonData) => {
    let pokemonType = "";
    pokemonData.types?.forEach((pokemonTypeData) => {
      pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
    });
    pokemonTypesContainer.innerHTML = pokemonType;
  };
  const processPokemonStats = (pokemonData) => {
    pokemonData.stats?.forEach((pokemonStatData) => {
      switch (pokemonStatData.stat.name) {
        case "hp":
          pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
          pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
        case "attack":
          pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
          pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
        case "defense":
          pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
          pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
        case "special-attack":
          pokemonStatsElements.specialAttack.innerHTML =
            pokemonStatData.base_stat;
          pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
        case "special-defense":
          pokemonStatsElements.specialDefense.innerHTML =
            pokemonStatData.base_stat;
          pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
        case "speed":
          pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
          pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%); `;
          break;
      }
    });
  };
  const processPokemonMoves = (pokemonData) => {
    let pokemonMovesContent = "";
    pokemonData.moves?.forEach((pokemonMove) => {
      pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
    });
    pokemonMovesElement.innerHTML = pokemonMovesContent;
  };
  const processPokemonAbilities = (pokemonData) => {
    let pokemonAbilitiesContent = "";
    pokemonData.abilities?.forEach((pokemonAbility) => {
      pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
    });
    pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
  };
  const setLoading = () => {
    imageContainer.innerHTML = imageTemplate.replace(
      "{imgSrc}",
      images.imgLoading
    );
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
      imageContainer.innerHTML = imageTemplate.replace(
        "{imgSrc}",
        images.imgPokemonNotFound
      );
    } else {
      imageContainer.innerHTML = `
      ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_default)} 
      ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}
      `;
      pokemonNameElement.innerHTML = pokemonData.name;
      processPokemonTypes(pokemonData);
      processPokemonStats(pokemonData);
      processPokemonAbilities(pokemonData);
      processPokemonMoves(pokemonData);

    }
    setLoadingComplete();
  };

  const triggers = () => {
    const pokemonInput = document.getElementById("pokemonName");
    const btnPokemonSearch = document.getElementById("btnSearch");
    btnPokemonSearch.onclick = () => setPokemonData(pokemonInput.value);
  };
  return { triggers };
};

window.onload = () => {
  const main = pokedex();
  main.triggers();
};
