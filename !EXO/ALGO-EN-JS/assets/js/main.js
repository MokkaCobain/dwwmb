
/*** EXO1 ***
 ***      ***/

let message = ``;
let eau = Number(prompt(`Entrez la température de l'eau`));

if (eau <= 0 || eau < 5){
    message = `glace`;
}

if (eau >= 5 && eau < 100){
    message = `liquide`;
}

if (eau >= 100)  {
    message = `vapeur`;
}
console.log(message);

/*** EXO2 ***
 ***      ***/

let age = Number(prompt(`Entrez votre âge`));

if (!Number.isInteger(age)){
    console.log(`Entrez un nombre ENTIER`);
}
else {
if ((age > 5) && (age <= 7)) {
    console.log("Poussin");

} else if (age >= 8 && age <= 9) {
    console.log("Pupille");
} 
else if ((age >= 10) && (age < 12)) {
    console.log("Minime");
}
else if (age >= 12) {
    console.log('Cadet');
} else {
    console.log('Si vous n\'avez pas au moins 6 ans, vous êtes trop petit pour jouer');
}
}

/*** EXO3 ***
 ***      ***/

let a = 5;
let b = 13;
console.log(`Avant permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
let c = a;
a = b;
b = c;
console.log(`Après permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

/*** EXO4 ***
 ***      ***/

let poids = Number(prompt(`Entrez votre poids en kg`));
let taille = Number(prompt(`Entrez votre taille en cm`));

taille = taille/100;
taille = Math.pow(taille,2);

let imc = poids/taille;

if (!Number.isInteger(imc)) {
    imc = Math.ceil(imc);
}

console.log(`Votre IMC égale à ${imc}`);

if (imc < 18.5){
    console.log(`Insuffisance pondérale`);
}
if (imc > 18.5 && imc < 25){
    console.log(`Poids normal`);
}
if (imc >= 30){
    console.log(`Surpoids`);
} 


/*** EXO5 ***
 ***      ***/

let annee = Number(prompt(`Entrez une année, on vous dit si elle est bissextile`));

if (!Number.isInteger(annee)){
    console.log(`ne faites pas l'imbécile`);
}
else {

    if ((annee % 4 == 0 && annee % 100 > 0) || annee % 400 == 0){
        console.log(`C'est une année bissextile !`);
    }
    else {
        console.log(`Ce n'est pas une année bissextile`);
    }
}

console.log(`Ceci est la fin de la première série d'exercice JS`);