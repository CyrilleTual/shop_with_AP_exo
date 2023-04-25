// fonction qui prend en paramètre les 2 paramètres 
// du cycle de communication client/serveur et va retourner au client le HTML

export const shopView = (req, res) => {
    res // la reponse est revoyée
    .status(200)  // -> la requête est réussie
    .render("layout",    // la fonction render de Express va renvoyer le HTML 
    {                       // -> layout.ejs dans les views
        template: "shop/index",   //  et lui passer des variables locales  
        datas: res.locals.datas,   
    });
};

export const productView = (req, res) => {
    res // la reponse est revoyée
    .status(200)  // -> la requête est réussie

    .render("layout", { template: "shop/product" });
};
