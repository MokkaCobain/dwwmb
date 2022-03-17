
import { PokemonTerre } from "./_PokemonTerre.js";

export class Pokemon {
    
    #nom;
    #poids;
    

    constructor(nom, poids){

        this.#nom = nom;
        this.#poids = poids;
       
    }


    // GETTERS
    get nom() {
        return this.#nom;
    }

    // GETTERS
    get poids() {
        return this.#poids;
    }

    
    // SETTERS
    set nom(nom) {
        this.#nom = nom;
    }

     // SETTERS
     set poids(poids) {
        this.#poids = poids;
    }


    toString(){

        let affiche = `"Je suis le Pokemon ${this.nom} mon poids est de ${this.poids}kg`;
        return affiche;
    }

}