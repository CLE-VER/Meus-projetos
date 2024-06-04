const pokemonNome =document.querySelector('.pokemon_nome');
const pokemonId =document.querySelector('.pokemon_id');

const fetchpokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}
const renderpokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);
    pokemonNome.innerHTML = data.name;
    pokemonId.innerHTML = data.id;
}

renderpokemon('94')