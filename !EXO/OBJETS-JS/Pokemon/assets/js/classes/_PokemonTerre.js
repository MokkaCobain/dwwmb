
import { Pokemon } from "./__Pokemon.js";


export class PokemonTerre extends Pokemon {
    
    #taille;
    #nbPatte;
    
   
    constructor(nom, poids, taille, nbPatte){

        super(nom, poids);
        this.#taille = taille;
        this.#nbPatte = nbPatte; //get + set

    }

    // GETTERS
    get taille() {
        return this.#taille;
    }

    // GETTERS
    get nbPatte() {
        return this.#nbPatte;
    }
    
     // GETTERS
     get vitesse() {
        return (this.nbPatte * this.taille * 3).toFixed(1);
     } 
    
     // SETTERS
     set taille(taille) {
        this.#taille = taille;
    }
    
    // SETTERS
    set nbPatte(nbPatte) {
        this.#nbPatte = nbPatte;
    }
 
 
    toString() {
        let affiche2 = super.toString() + `, ma vitesse est de ${this.vitesse}km/h j'ai ${this.nbPatte} pattes, ma taille est de ${this.taille}m`;
        return affiche2;
        
    }

}