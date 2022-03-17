// 3. Les Pokémons des mers : nom + poids (en kg) + nombre de nageoires + vitesse déplacement mer = poids / 25 * nombre de nageoires. 

import { PokemonMarin } from "./_PokemonMarin.js";


export class PokemonDesMers extends PokemonMarin {
    

    constructor(nom, poids,  nbNageoire){

        super(nom, poids, nbNageoire);

    }


    // GETTERS
    get vitesse() {
        return ((this.poids / 25) * this.nbNageoire).toFixed(1) ;
     } 

    

    toString() {
        return super.toString() + `ma vitesse est de ${this.vitesse}km/h j'ai ${this.nbNageoire} nageoires."`;
        
    }
}