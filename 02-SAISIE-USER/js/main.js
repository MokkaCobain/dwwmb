/********************************************
 * Les différentes boites de dialogues en js 
 ********************************************/


// let warning = window.warn("ceci est une boite de ?");
// let erreur = window.error("Cecie est une boite d'erreur");
// let alerte = window.alert("ceci est une boite d'alerte");
// let reponse = window.confirm("ceci est une boite de dialogue avec le user avec boutons");
// let saisie = prompt("Ceci est une boite pour dialoguer avec l'user avec champ input type string");

/********************************************
 * Pour utiliser des strings sans se faire chier 
 ********************************************/

console.log(`Dimanche c'est "pépouze"`); // le template string ` ... ` c'est chouette

/********************************************
 *  Pour transformer un string en number 
 ********************************************/

// let nombre = Number(prompt("Cette réponse sera un nombre"));

/********************************************
 * Récupérer la saisie user 
 ********************************************/

let prenom= prompt("Entrez votre prénom :");
let age= prompt("Entrez votre âge :");
console.log("Bonjour" + prenom + ", vous avez" + age + "ans");


console.log(`Bonjour ${prenom}, vous avez ${age} ans`);



