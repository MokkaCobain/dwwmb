// EXERCICE 13 : POO
// PARTIE 1 : POKEMON

// Pokémon sportif :
// ▪ "Je suis le Pokémon Pikachu mon poids est de 18 kg, ma vitesse est de 5,1 km/h j'ai 2 pattes, ma taille est de 0,85m ma fréquence cardiaque est de 120 pulsations à la minute."

// Pokémon casanier :
// ▪ "Je suis le pokémon Salameche mon poids est de 12 kg, ma vitesse est de 3,9 km/h j'ai 2 pattes, ma taille est de 0,65m je regarde la télé 8h par jour."

// Pokémon des mers :
// ▪ "Je suis le Pokémon Rondoudou mon poids est de 45 kg, ma vitesse est de 3,6 km/h j'ai 2 nageoires."

// Pokémon de croisière :
// ▪ "Je suis le Pokémon Bulbizarre mon poids est de 15 kg, ma vitesse est de 0,9 km/h j'ai 3 nageoires."


import {PokemonSportif} from "./classes/PokemonSportif.js";
import {PokemonCasanier} from "./classes/PokemonCasanier.js";
import {PokemonDesMers} from "./classes/PokemonDesMers.js";
import {PokemonDeCroisiere} from "./classes/PokemonDeCroisiere.js";



//  Attributs de PokemonSportif 
//  (nom, poids, taille, nbPatte, cardiaque)

const pikachu = new PokemonSportif(`Pikachu`, 18, 0.85, 2, 120);
console.log(pikachu.toString());


//  Attributs de PokemonCasanier
//  (nom, poids, taille, nbPatte, tv)

const salameche = new PokemonCasanier(`Salameche`, 12, 0.65, 2, 8);
console.log(salameche.toString());


//  Attributs de PokemonDeCroisiere && PokemonDesMers
//  (nom, poids, nbNageoire)

const rondoudou = new PokemonDesMers(`Rondoudou`, 45, 2);
console.log(rondoudou.toString());


const bulbizarre = new PokemonDeCroisiere(`Bulbizarre`, 15, 3);
console.log(bulbizarre.toString());


// ********* PLACER LES POKEMON ********* //

//Sportif
let sportif = document.getElementById(`PokemonSportif`);
sportif.innerText += `${pikachu.toString()}`;

//Casanier
let casanier = document.getElementById(`PokemonCasanier`);
casanier.innerText += `${salameche.toString()}`;


//DesMers
let desMers = document.getElementById(`PokemonDesMers`);
desMers.innerText += `${rondoudou.toString()}`;

//DeCroisiere
let deCroisiere = document.getElementById(`PokemonDeCroisiere`);
deCroisiere.innerText += `${bulbizarre.toString()}`;
