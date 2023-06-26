let pokemonRepository = (function () { //Wrap array in IIFE

    let pokemonList = [
        {
        name: 'Bulbasaur',
        height: 0.7,
        types: ['grass','poison']
        }, 
        {
        name: 'Charmander',
        height: 0.6,
        types: 'fire',
        }, 
        {
        name: 'Squirtle',
        height: 0.5,
        types: 'water',
        }
    ]

    function getAll () {//returns all pokemon in pokemonList array
        return pokemonList;
    }

    function add (pokemon) {//adds pokemon to pokemon array
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
        pokemonList.push(pokemon);
         } else {
        console.log('Pokemon is not correct');
        }
    }
    function addListItem (pokemon){/*creates pokemon list in the form of stylized buttons*/
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    };
 
    function showDetails(pokemon) {  //logs pokemon in console when button clicked
        console.log(pokemon);
    };

    return { // returns functions to be used outside IIFE
        getAll: getAll,
        add: add,
        addListItem: addListItem
        };
    })();

pokemonRepository.add({name: "Pikachu", height: 0.3, types: ["electric"] });

pokemonRepository.getAll().forEach(function(pokemon) {
   pokemonRepository.addListItem(pokemon);
});





/*  Orignal for loop---Displaying pokemon array
for (let i = 0; i < pokemonList.length; i++){
    document.write(`<p>${pokemonList[i].name + " " }`)
    document.write(`(height: ${pokemonList[i].height}")` + " ")
    if (pokemonList[i].height >= 0.7){
        document.write(`Wow, that's big!` + " ");
    }
};
*/
