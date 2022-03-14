

let n = Number(prompt(`Entrez un premier nombre :`));
let m = Number(prompt(`Entrez un deuxième nombre :`));



if ( isNaN(m) || isNaN(n) || m == 0 || n == 0){
    console.warn(`Entrez un NOMBRE`);
} else {

    console.log(`Le premier nombre est ${n}`);
    console.log(`Le deuxième nombre est ${m}`);
do {
    console.log(n);
    n++;
} while (n < m); 


if (n > m){
    throw Error(`Il y a une erreur wesh`); // Pour arrêter le programme JS (Throw = une exception)
}

if (n > m){
erreur = n;
n = m;
m = erreur - 1;
console.log(`Nouvelle valeur de n : ${n}`);
console.log(`Nouvelle valeur de m : ${m}`);
}


}
