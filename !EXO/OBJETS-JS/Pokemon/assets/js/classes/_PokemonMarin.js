
import { Pokemon } from "./__Pokemon.js";


export class PokemonMarin extends Pokemon {
    
    #nbNageoire;
    
   
    constructor(nom, poids, nbNageoire){

        super(nom, poids);

        this.#nbNageoire = nbNageoire; //get + set

    }

   // GETTERS
    get nbNageoire() {
        return this.#nbNageoire;
    }
    
    // SETTERS
    set nbNageoire(nbNageoire) {
        this.#nbNageoire = nbNageoire;
    }
 
    toString() {
        let affiche2 = super.toString() + `, `;
        return affiche2;
        
    }

}