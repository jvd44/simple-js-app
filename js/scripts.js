let pokemonRepository = (function () { //Wrap array in IIFE

    let pokemonList = [
        {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass','poison']
        }, 
        {
        name: 'Charmander',
        height: 0.6,
        type: 'fire',
        }, 
        {
        name: 'Squirtle',
        height: 0.5,
        type: 'water',
        }
    ]
    function getAll () {//returns all pokemon in pokemonList array
        return pokemonList;
    }
    function add (pokemon) {//adds pokemon to pokemon array
        pokemonList.push(pokemon);
    }
    return { // returns functions to be used outside IIFE
        getAll: getAll,
        add: add
    }
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " " + `(height: ${pokemon.height}")` + "  </p>")
});
/*
for (let i = 0; i < pokemonList.length; i++){
    document.write(`<p>${pokemonList[i].name + " " }`)
    document.write(`(height: ${pokemonList[i].height}")` + " ")
    if (pokemonList[i].height >= 0.7){
        document.write(`Wow, that's big!` + " ");
    }
};
*/
