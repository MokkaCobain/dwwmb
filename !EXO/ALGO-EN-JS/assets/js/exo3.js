/*** EXO3 ***
 ***      ***/

//  Ecrivez un programme JavaScript qui permet d'échanger la valeur contenue dans deux variables. Par exemple, si A vaut 5 et B 13 au début de l'algorithme, faites-en sorte que A soit égal à 13 et B à 5 à la fin de l'algorithme.

let a = prompt(`Entrez un nombre`);
let b = prompt(`Entrez un nombre`);
console.log(`Avant le tour de magie...`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
let c = a;
a = b;
b = c;
console.log(`Après le tour de magie :`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`Tadaaaaaaaa`);