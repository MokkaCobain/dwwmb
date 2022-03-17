

// Déclaration d'un objet

let personne = {};
console.log(typeof personne); // le type retourné est OBJET


// On attribue propriétés à l'objet et on donne des valeurs aux propriétés
personne.prenom = `Joachim`;
personne.age = 53;
console.log(personne);

// Déclarer un objet en utilisant JSON
let personne = {prenom : Joachim, age : 53, nbFreres:[`Fred`, `Jerry`]};
console.log(personne);

personne = {prenom: 'Emmanuel', age: 28, estMajeur: true, nbFreres: ["Françaois", "Nicolas"], conjoint: null}
console.log(personne);

console.log(typeof ["Françaois", "Nicolas"]);

// LA NOTAION QUE L'ON VIENT D'UTILISER  ==> JSON
// JSON ==> JavaScript Object Notation

let tab = ["François", "Nicolas"];
console.log(tab);
console.log(typeof tab);

tab = new Array("François", "Nicolas");
console.log(tab);
console.log(typeof tab);

console.log(Object.getOwnPropertyNames(personne));

let nicolas = {prenom: 'kim'};
console.log(typeof nicolas);

let bruni = {prenom: 'kim'};
console.log(typeof bruni);
console.log(nicolas == bruni);

let tabUn = [1, 2, 3, 4];
console.log(typeof tabUn);

let tabDeux = [1, 2, 3, 4];
console.log(typeof tabDeux);
console.log(tabUn == tabDeux);

let nbUn = 28;
console.log(typeof nbUn);
let nbDeux = 28;

console.log(typeof nbDeux);
console.log(nbUn == nbDeux);

let chUn = 'Morgane';
console.log(typeof chUn);
let chDeux = 'Morgane';
console.log(typeof chDeux);
console.log(chUn == chDeux);

nbUn = new Number(28);
console.log(nbUn);
console.log(typeof nbUn);

nbDeux = new Number(28);
console.log(nbDeux);
console.log(typeof nbDeux);
console.log(nbUn === nbDeux);

nbUn = 5;
console.log(typeof nbUn);

nbUn = Number(5);
console.log(nbUn * 2);
console.log(typeof nbUn);

// TOUT  EN JS ES CONSIDERE COMME OBJECT



