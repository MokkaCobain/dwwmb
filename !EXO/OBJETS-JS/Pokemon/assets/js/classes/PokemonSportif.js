
// 1. Les Pokémons sportifs : nom + poids (en kg) + nombre de pattes +  taille (en mètres) + fréquence cardiaque + vitesse de déplacement terre = nombre de pattes * taille * 3.

import { PokemonTerre } from "./_PokemonTerre.js";

export class PokemonSportif extends PokemonTerre {
    
    #cardiaque;

    constructor(nom, poids, taille, nbPatte, cardiaque){

        super(nom, poids, taille, nbPatte);

        this.#cardiaque = cardiaque; // get

    }

    // GETTERS
    get cardiaque() {
        return this.#cardiaque;
    }

    // SETTERS
    set cardiaque(cardiaque) {
        this.#cardiaque = cardiaque;
    }

    toString() {
        return super.toString() + `  et ma fréquence cardiaque est de ${this.cardiaque} pulsations à la minute."`;
        
    }
}