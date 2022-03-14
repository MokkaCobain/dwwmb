// EXERCICE 09
// Dans un tableau de 10 entiers initialisé avec des valeurs aléatoires, trouver les rangs
// et les valeurs du plus petit et du plus grand élément, et les afficher dans la console.

let tableau = [];
for (let i = 0; i < 10; i++) {
    let alea = Math.floor((Math.random() - Math.random()) * 1000);
    tableau.push(alea);
}

console.log(tableau);

let plusPetiteValeur = Math.min(...tableau);
let rangPlusPetit = tableau.indexOf(plusPetiteValeur);
console.log(`plusPetiteValeur = ${plusPetiteValeur}; `,`rangPlusPetit = ${rangPlusPetit}`);

let plusGrandeValeur = Math.max(...tableau);
let rangPlusGrand = tableau.indexOf(plusGrandeValeur);
console.log(`plusGrandValeur = ${plusGrandeValeur}; `,`rangPlusGrand = ${rangPlusGrand}`);

