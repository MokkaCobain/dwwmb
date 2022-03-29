
$("document").ready(function (e){

    // EVENT = vérifier la saisie utilisateur
    $("#temperature").keyup(function (e){
        
        let saisie = $(this).val(); //.trim()
     
        if ( (saisie === "") || isNaN(saisie) ){

            // La div du résultat placée dans la div#content
            jQuery("#content").append('<div id=reponse class=mauvaise-saisie>Un nombre est attendu</div>');

        } else {

            // EVENT = convertir la saisie utilisateur lors du submit
            $("form[name=converter]").submit( function(e){

                e.preventDefault();
                    
                let resultat = (saisie * 9/5) + 32;

            // La div du résultat placée dans la div#content
               jQuery(" <div id=reponse class=bonne-saisie>"+saisie+ "°C =" +resultat+ "°F</div> ").appendTo("#content");

            });
        }
    });

})