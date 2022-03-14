let plusGrand = -Infinity;
let plusPetit = Infinity;
let chaine = ``;
let rang = -1;

for (let i = 1; i < 11; i++){
    let saisie = Number(prompt(`Saisie n°${i}`));

    if (isNaN(saisie)) {

        do {
            alert("Vous devez saisir un nombre !!!");
            saisie = Number(prompt(`Saisie N°${i}`));
        } while ((isNaN(saisie)))
    }else {
        chaine += ` ${saisie} `;

        if (saisie > plusGrand){
            plusGrand =  saisie;
        }

        if (saisie < plusPetit){
            plusPetit =  saisie;
            rang = i;
        }
    }
}
console.log(chaine);
console.log(`plusGrand= ${plusGrand}`);

console.log(chaine);
console.log(`plusPetit= ${plusPetit}`);
console.log(`Son rang= ${rang}`);
