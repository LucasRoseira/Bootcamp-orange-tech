
// const url2 = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

/*return a promise
response take time
*/
const pokemonlist = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151;
const limit = 10;
let offset = 0;





function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}


// pokemonList.innerHTML += '<li>Teste</li>';

// fetch(url)
//     // Arrow function is a reduction of the sintax.
//     //callback function
//     .then((response) => response.json())
//     .then((jsonBody) => jsonBody.results)
// pokeApi.getPokemons().then((pokemons = []) => {
//     const listItems = [];

    // const newList = pokemons.map((pokemon) => convertPokemonToHtml(pokemon))
    // const newList = pokemons.map(convertPokemonToLi).join('');
    // pokemonlist.innerHTML += pokemons.map(convertPokemonToLi).join('');
    // const newHTML = newList.join('');

    // pokemonlist.innerHTML += newHTML;
    // console.log(newList);

    // for (let i = 0; i< pokemons.length; i++) {
    //     const pokemon = pokemons[i];

    // listItems.push(convertPokemonToHtml(pokemon));

    //    console.log(convertPokemonToHtml(pokemon));
    //    pokemonList.innerHTML += convertPokemonToHtml(pokemon);


    // debugger
    //    console.log(pokemonList)
// })

//     .catch((error) => console.log(error))


// response
//     .json()
//     .then(function (responseBody) {
//         console.log(responseBody);
//     }


// .then(function (response) {
//     return response.json();
//     // response
//     //     .json()
//     //     .then(function (responseBody) {
//     //         console.log(responseBody);
//     //     })

// })  

// .finally(function () {
//     console.log('Requisição concluída');
// })
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit)
    }
})