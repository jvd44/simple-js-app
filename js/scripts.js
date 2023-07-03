let pokemonRepository = (function () { //Wrap array in IIFE

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll () {//returns all pokemon in pokemonList array
        return pokemonList;
    }

    function add (pokemon) {//adds pokemon to pokemon array
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
        pokemonList.push(pokemon);
         } else {
        console.log('Pokemon is not correct');
        }
    }
    function addListItem (pokemon) {/*creates pokemon list in the form of stylized buttons*/
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    };
 
    

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Adds details to the items
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
    function showDetails(pokemon) {  //logs pokemon details in console when button clicked
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    };

    return { // returns functions to be used outside IIFE
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
        };
    })();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
     });
});

//pokemonRepository.add({name: "Pikachu", height: 0.3, types: ["electric"] });







/*  Orignal for loop---Displaying pokemon array
for (let i = 0; i < pokemonList.length; i++){
    document.write(`<p>${pokemonList[i].name + " " }`)
    document.write(`(height: ${pokemonList[i].height}")` + " ")
    if (pokemonList[i].height >= 0.7){
        document.write(`Wow, that's big!` + " ");
    }
};
*/
