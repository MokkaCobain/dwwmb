// Crée par Joachim Zadi le 14/03/2022 à 15:52. Version 1.0
// ========================================================

// Une fonction est une suite d'instructions nommée

// Definition d'une fonction en JS
function maFonction(x) {
    // Ici les instruction s à executées
    console.log("Bonjour");
    console.log(`x = ${x}`);
}

// On fait un appel de la fonction
maFonction("Joachim");

// Définition d'une nouvelle fonction
function sum(g, d) {
   let resultat = g + d;
   return resultat;
}

// Appel de la fonction
let maVariable = sum(6,8);
console.log(sum(41,3));
console.log(maFonction("Joachim"));

// Calcul un nombre au carré
function carre(x) {
    console.log('Bonjour');
    // Un return doit etre la derniere instructions d'une fonction qui retourne une valeur
    return x * x;
}

// Fonction anonyme
const getSum = function (g, d) {
    return g + d;
}

// Fonction flêchée 
const getSomme = (g, d) => {
    return g + g;
}

// Une procédure dite "modificateur"
function setSomme (g, d) {
    console.log(g + d);
}


console.log(carre(10));

console.log(typeof carre);

// Calcul avec exposant (puissance)
function puissance(base, exposant) {
    let resultat = 1;
    for (let i = 0; i < exposant; i++) {
        resultat *= base;
    }
    return resultat;
}

console.log(puissance(5, 3));

// Générer un tableau aléatoire avec une fonction
function tableauAleatoire(n) {
    let tab = [];
    for (let i = 0; i < n; i++) {
        tab.push(Math.ceil(Math.random() * 100));
    }
    return tab;
}

console.log(tableauAleatoire(12));

 //Modulo avec une fonction 
function modulo(g, d) {
    return g % d;
}

// Cette definition est identique à la precedente
const modulo = function (g, d) {
    return g % d;
}

console.log(modulo(5, 3));
console.log(typeof modulo);

// Arrow Function ou fonction flêchée
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 5));

let z = 0; // Variable globale
let a = 25

const addition = (x, y) => {
    console.log(x);
    let z = x + y + 2 + a; // Variable locale
    a = 3;
    console.log(z);
    return x + y;
}
// console.log(x);

console.log(addition(10, 5));
console.log(z);
console.log(a);

let variable;

// Exemple : je déclare deux variables globales
let a = 18;
let b = 10;

function getExemple() {
    let variableGlobale = a + b; // J'ai appelé les variables globales déclarée plus haut
    let a = 25; // Je redéclare une variable nommée a. Ici a = 25, elle est locale
    console.log(`a + b = ${a + b}`);
    let c = 12;
    console.log(`c = ${c}`);
}

//La variable appelée ici est celle déclarée hors des bloc c'est à dire = 18
console.log(`a = ${a}`);

// IIEF ou fonction auto-appelante
(function multiply(...args) {
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    console.log(result);
})(5, 2, -12); // La valeurs des arguments sont attribués ici


// Une fonction passée en parametre d'une autre fonction est appeleé un callback
function definieDeuxFois(func) {
    func();
    func();
}

// Fonction flêchée
const rire = () => {
    console.log("HAHAHAHAHAHAHAHA");
    console.log("HIHIHIHIHIHIHIHI");
}

definieDeuxFois(rire); // la fonction rire devient une fonction call back car elle est passée en argument de la fonction definieDeuxFois