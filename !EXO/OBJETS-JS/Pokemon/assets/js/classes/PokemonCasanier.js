
// 2. Les Pokémons casaniers : nom + poids (en kg) + nombre de pattes + taille (en mètres) + nombre d’heures par jour où ils regardent la télévision + vitesse de déplacement terre = nombre de pattes * taille * 3.

import { PokemonTerre } from "./_PokemonTerre.js";

export class PokemonCasanier extends PokemonTerre {
    
    #tv;

    constructor(nom, poids, taille, nbPatte, tv){

        super(nom, poids, taille, nbPatte);

        this.#tv = tv; // get + set

    }

    // GETTERS
    get tv() {
        return this.#tv;
    }

     // SETTERS
     set tv(tv) {
        this.#tv = tv;
    }

    toString() {
        return super.toString() + `  et je regarde la télévision ${this.tv}h par jour."`;
        
    }
}