// import d'une fonction utilitaire pour generer un 
// nombre aléatoire
import { getRandomInteger } from "../utils/index.js";


// fonction qui prend en paramètre les 2 paramètres 
// du cycle de communication client/serveur 

export const homeView = (req, res) => {

    // recupération du fichier de data defini 
    //  dans res.local.datas par notre middleWare personalisé "getDatas"
    const datas = res.locals.datas;
    // selection d'un element aléatoire du tableau de data
    const randomProduct = datas[getRandomInteger(0, datas.length - 1)];

    // la reponse est revoyée
    res
        .status(200)  // avec le statut 200 : succès
        // methode render de express va retourner au client le HTML
        // ici page de base 'layout.ejs' (dans les views) à laquelle 
        // on passe 2 paramètres qui seront utilisés dans la page
        .render("layout", { template: "home", data: randomProduct });
};
