
// Le titre en violet
let titre = document.getElementsByTagName(`h1`);
for (let purple = 0; purple < titre.length; purple++){
    titre[purple].style.color = `purple`;
}

// Les formule en rouge
let formule = document.getElementsByClassName(`formule`);
for (let red = 0; red < formule.length; red++) {
    formule[red].style.color = "red";
}

// La methode toString() en bleu
let string = document.getElementsByClassName(`string`);
for (let blue = 0; blue < string.length; blue++){
    string[blue].style.color = `cornflowerblue`;
}

// Les 2 methodes toString() en italique
let italic = document.getElementById(`string-1`);
italic.style.fontStyle = `italic`;

italic = document.getElementById(`string-2`);
italic.style.fontStyle = `italic`;

// Les pokemons en violet 
let pokemon = document.getElementsByClassName(`pokemon`);
for (let purple = 0; purple < pokemon.length; purple++){
    pokemon[purple].style.color = `purple`;
}

// Les pokemons en italic
italic = document.getElementById(`PokemonSportif`);
italic.style.fontStyle = `italic`;

italic = document.getElementById(`PokemonCasanier`);
italic.style.fontStyle = `italic`;

italic = document.getElementById(`PokemonDesMers`);
italic.style.fontStyle = `italic`;

italic = document.getElementById(`PokemonDeCroisiere`);
italic.style.fontStyle = `italic`;