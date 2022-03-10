/*** EXO5 ***
 ***      ***/

let annee = Number(prompt(`Entrez une année, on vous dit si elle est bissextile`));

if (!Number.isInteger(annee)){
    console.log(`ne faites pas l'imbécile`);

} else { 
    if ( ((annee % 4 == 0) && (annee % 100 > 0)) || (annee % 400 == 0) ){
        console.log(`C'est une année bissextile !`);

    } else {
        console.log(`Ce n'est pas une année bissextile`);
    }
}