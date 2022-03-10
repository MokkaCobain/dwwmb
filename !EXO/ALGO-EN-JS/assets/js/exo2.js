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