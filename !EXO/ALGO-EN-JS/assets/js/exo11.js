

// 1. Créer une chaîne de caractères de 50 '-'

let tiret = `-`;
let cinquanteTiret = tiret.repeat(50);
// console.log(tiret.repeat(50));



// 2. Inverser une chaîne de caractères (sans supprimer l'originale).

function chaineInversee(s){
    return s.split(``).reverse(``).join(``);
}

let chaine = `Regarde ce chapeau`;
console.log(chaine);
chaine = chaineInversee(`Regarde ce chapeau`);
console.log(chaine);


// 3. Remplacer tous les caractères d'une chaîne par une '*'

let string = `J'arrive pas à remplacer`;
console.log(string.replace(string.charAt(0, 24), `*`));

// 4. Remplacer toutes les occurences d'une lettre par une autre dans une chaîne de caractères.

let occurence = `J'arrive pas à remplacer`;
console.log(string.replaceAll(`pas`, `bien`));

// 5. Supprimer toutes les occurences d'une lettre dans une chaîne de caractères.

let supp = `Je supprime`;
console.log(supp.replace(/p/g, ''));


// 6. Afficher la présence d'une lettre dans une chaîne (si oui, en afficher le nombre (quantité, si non, afficher "absent").

function presence(chaine, char){

    if (chaine.includes(char)){

        let chaine2 = chaine.split(char);

        var resul = chaine2.length -1;

        console.log(resul);

    } else {
        console.log(`absence`);
    }

    return resul;
}

let nombreOccurence = presence(`Ne dis pas n'importe quoi!`, `o`);


// 7. Compter le nombre d'occurence de chaque lettre dans une chaine.

let lettre = [];

lettre.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"); 

function jenAiMarre(chaine){
    let lachePas;
    
    for (var i = 0; i < lettre.length; i++){

        let tiensBon = chaine.split(lettre[i]);

        lachePas = tiensBon.length - 1;

        console.log(`La lettre ${lettre[i]} apparait ${lachePas} fois`);
    }

    return lachePas;
}

console.log(lettre);
console.log(jenAiMarre(`de la vie entière`));


// 8. Remplacer les double-espace (ou +) dans une chaîne de caractères par un espace.

const removeBlank = function (blank) {

    blank = blank.replace(/[\s]{2,}/g," ");
    console.log(blank);
    return blank;
}
removeBlank(`Il y    avait   trop d'espaces  dans cette phrase       .`);





// 9. Découper une chaîne de caractères en mots avec l'espace comme séparateur et les compter.
// 10. Inverser les mots d'une phrase



