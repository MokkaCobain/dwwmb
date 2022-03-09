/********************************************
 * Les différentes boites de dialogues en js 
 ********************************************/

/* Affichage dans la console */

console.warn("ceci est une boite d'avertissement");
console.error("Cecie est une boite d'erreur");

/* Affichage dans navigateur */

alert("ceci est une boite d'alerte");
let reponse = confirm("ceci est une boite de dialogue avec le user avec boutons");
console.log(reponse);

let saisie = prompt("Ceci est une boite pour dialoguer avec l'user avec champ input type string");
console.log(saisie);
console.log(typeof saisie);

/********************************************
 * Pour utiliser des strings sans se faire chier 
 ********************************************/

console.log(`Dimanche c'est "pépouze"`); 
/* le template string ` ... ` c'est chouette */

/********************************************
 *  Pour transformer un string en number 
 ********************************************/

let nombre = Number(prompt("Cette réponse sera un nombre"));

/********************************************
 * Récupérer la saisie user 
 ********************************************/

let prenom= prompt("Entrez votre prénom :");
let age= prompt("Entrez votre âge :");
console.log("Bonjour" + prenom + ", vous avez" + age + "ans");


console.log(`Bonjour ${prenom}, vous avez ${age} ans`);



