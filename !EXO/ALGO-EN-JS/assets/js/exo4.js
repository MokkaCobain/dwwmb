/*** EXO4 ***
 ***      ***/


//  Proposez un programme JavaScript qui demande le poids en kg et la taille en cm à son utilisateur puis calcule son IMC et lui affiche un message en fonction du résultat obtenu.
//  Le calcul de l'IMC se fait en divisant le poids « exprimé en kg » par la taille au carré « exprimée en m ».
let poids = Number(prompt(`Entrez votre poids en kg`));
let taille = Number(prompt(`Entrez votre taille en cm`));

if (isNaN(poids) && isNaN(taille)){
    console.log(`Arrêtez de tricher`);
} else {
    taille = taille/100;
    taille = Math.pow(taille,2);

    let calcImc = poids/taille;

    let imc = calcImc.toFixed(2);

    console.log(`Votre IMC égale à ${imc}`);

if (imc < 18.5){
    console.log(`Insuffisance pondérale`);

} else if (imc > 18.5 && imc < 25){
    console.log(`Poids normal`);

} else if (imc <= 25 && imc < 30){
    console.log(`Surpoids`);

} else {
    console.log(`Obésité`);
} 
}
