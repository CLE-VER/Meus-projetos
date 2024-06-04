const pokemonNome =document.querySelector('.pokemon__nome');
const pokemonId =document.querySelector('.pokemon__id');
const pokemonImage =document.querySelector('.pokemon__image');
const form =document.querySelector('.form');
const input =document.querySelector('.input__search');

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonNome.innerHTML = data.name;
    pokemonId.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
form.addEventListener('submit', (event) => {

event.preventDefault();
renderPokemon(input.value.toLowerCase());
input.value = '';

});