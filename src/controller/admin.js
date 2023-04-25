// après le travail du routeur, 
// fonction qui prend en paramètre les 2 paramètres 
// du cycle de communication client/serveur 

export const adminView = (req, res) => {

    // res -> retourne une reponse au client
    res
        .status(200) // -> la requête est réussie

        // methode render va renvoye le HTML
        // ici on fait appel à la page "layout"
        // a laquelle on passe 2 paramètres dans
        // un objet.
        // res.local.diplay vient d'être defini par un middleWare 
        // appelé par le routeur 
        .render("layout", {
            template: "admin/index",
            component: res.locals.display,
        });
};
