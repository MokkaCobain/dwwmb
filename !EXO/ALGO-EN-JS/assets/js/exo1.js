


/*** EXO1 ***
 ***      ***/

let message = ``;
let eau = Number(prompt(`Entrez la température de l'eau`));

if (eau <= 0){
    message = `glace`;
}

else if (eau >= 1 && eau < 100){
    message = `liquide`;
}

else if (eau >= 100)  {
    message = `vapeur`;
}
console.log(message);