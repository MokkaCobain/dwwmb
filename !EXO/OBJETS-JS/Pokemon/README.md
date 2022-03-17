Dans cet exercice, j'ai tenté de mettre en pratique mes nouvelles connaissances... 

I. FRONT :

-Sass = compilation + partiels (_reset & _font)

-MediaQueries = le resultat doit se rapprocher du visuel pdf fourni + s'adapter au ieux à tous les écrans


II. JAVASCRIPT DEBUTANT : 

-JS = manipuler les objets + les classes + le DOM

Détails des fichiers.js =
- pokemonGenerator instancie les objets définis dans les classe
- PokemonSportif && PokemonCasanier ont 1 attribut individuel chacun + reprennent les attributs de leur classe mère
- PokemonDesMers && PokemonDeCroisiere ont 1 get individuel pour le calcul vitesse + reprennent les attributs de leur classe mère 
- _PokemonTerre est mère de PokemonSportif && PokemonCasanier
- _PokemonMarin est mère de PokemonDesMers && PokemonDeCroisiere 
- __Pokemon est mère de _PokemonTerre && _PokemonMarin

----------------------------------------------------------------------

Vous verrez que les styles color & italic sont appliqués avec main.JS
Mais aussi que les dialogues des Pokemons sont insérés dans le HTML via pokemonGenerator.JS

----------------------------------------------------------------------

La prochaine étape : rendre le pokemonGenerator interactif avec le user. 

Via un formulaire, il entrera sa catégorie (PokemonTerre ou PokemonMarin) puis ses attributs = 
son nom, son poids, sa taille, nbPatte, cardiaque/tv 
OU 
son nom, son poids, son nbNageoire

A voir si on change les attributs pour rendre l'interaction + marrante

----------------------------------------------------------------------
