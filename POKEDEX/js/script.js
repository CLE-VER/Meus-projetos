const pokemonNome =document.querySelector('.pokemon__nome');
const pokemonId =document.querySelector('.pokemon__id');
const pokemonImage =document.querySelector('.pokemon__image');

const form =document.querySelector('.form');
const input =document.querySelector('.input__search');
const buttonPrev =document.querySelector('.btn-prev');
const buttonNext =document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresponse.status == 200){
        const data = await APIresponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonNome.innerHTML = "Buscando..."
    pokemonId.innerHTML = ''
    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';
        pokemonNome.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display ='none';
        pokemonNome.innerHTML ='Não encontrado :/';
    }

}
form.addEventListener('submit', (event) => {

event.preventDefault();
renderPokemon(input.value.toLowerCase());

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
    
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});


});

renderPokemon(searchPokemon);