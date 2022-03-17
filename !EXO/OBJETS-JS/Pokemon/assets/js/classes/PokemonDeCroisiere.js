// 4. Les Pokémons de croisière : nom + poids (en kg) + nombre de nageoires + vitesse déplacement mer = (poids / 25 * nombre de nageoires) / 2.

import { PokemonMarin } from "./_PokemonMarin.js";


export class PokemonDeCroisiere extends PokemonMarin {
    

    constructor(nom, poids,  nbNageoire){

        super(nom, poids, nbNageoire);

    }


    // GETTERS
    get vitesse() {
        return ((this.poids / 25) * this.nbNageoire / 2).toFixed(1) ;
     } 

    

    toString() {
        return super.toString() + `ma vitesse est de ${this.vitesse}km/h j'ai ${this.nbNageoire} nageoires."`;
        
    }
}