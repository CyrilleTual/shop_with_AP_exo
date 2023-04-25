/**
 * App.js fichier d'entrée dans l'application ( defini dans le package.json)
 */

//Importation du module express préalablement installé via NPM
// pour pouvoir l'utiliser dans le projet
import express from "express"; 

// importation de nos modules personnalisés
// pour en utiliser lors des cycles de req/res
import router from "./router/index.routes.js";
import getDatas from "./middleware/getDatas.js";

// creation d'une instance type express qui represente notre application
const app = express();

// definiion du port de communication de l'application 
// soit sur 'process.env.PORT' si il est defini (hebergement) soit 9000
const PORT = process.env.PORT || 9000;

app
    .set("views", "./src/views")  // chemin vers les vues
    .set("view engine", "ejs");    // moteur de rendu utilise (préalablement importé par NPM) 


// Ici pile de fonctions MiddleWare qui seront executées lors de chaque cycle de req/res
// donc à chaque requête du client vers le serveur     
app.use(express.static("public")) // defini le dossier de base des fichiers "statics"
    .use(express.urlencoded({ extended: true })) // permet de recupérer les donnes de formulaires 
    .use(getDatas)  // middleWarepersonalisé recupere les fichiers de données
    .use(router);   // va analyser l'url -> routage 


// lance l'ecoute sur le port PORT
app.listen(PORT, (err) => {
    err // fonction ternaire sur la survenue d'erreurs 
        ? console.log(err)
        : console.log(`Listening at http://${process.env.HOSTNAME}:${PORT}`);
});
