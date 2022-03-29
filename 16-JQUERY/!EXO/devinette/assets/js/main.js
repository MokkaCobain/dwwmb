
$("document").ready( function (e){

    // Variables utiles
    let nbJuste = Math.floor(Math.random() * 10) + 1;
    console.log(nbJuste);

    let nbCoup = 0;
    
    // EVENT = Vérifier la saisie de l'utilisateur après submit
    $("form[name=devinette]").submit( function(e){

        e.preventDefault(); 

        // La valeur entrée dans l'input (la saisie)
        let saisie = $("#essai").val();

        if( (saisie == "") || isNaN(saisie) || (parseInt(saisie) == 0) || (parseInt(saisie) > 10) ){

            // La div erreur apparait
            $("#erreur").removeAttr("hidden").addClass("erreur-saisie").css({"border-color" : "red" , "border-style" : "solid"});

        }else {

            nbCoup++;

            if(saisie < nbJuste){

                // La div du réponse placée dans la div#container
                jQuery(" <div id=reponse class=essaye-encore>Coup n°"+nbCoup+ ", vous avez tenté le nombre " +saisie+ " mais c'est plus grand</div> ").appendTo("#container");

            }else if (saisie > nbJuste){

                // La div du réponse placée dans la div#container
                jQuery(" <div id=reponse class=essaye-encore>Coup n°"+nbCoup+ ", vous avez tenté le nombre " +saisie+ " mais c'est plus petit</div> ").appendTo("#container");

            }else {

                // La div du réponse placée dans la div#container
                jQuery(" <div id=reponse class=bravo>Bravo vous avez réussi à trouver " +saisie+ " en "+nbCoup+ " coups</div> ").appendTo("#container");

            };
        };

        // Réiniialiser la saisie       
        saisie = " ";
            
    });

})