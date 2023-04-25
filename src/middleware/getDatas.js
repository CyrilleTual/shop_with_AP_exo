// import de la methode readfile 
// à partir du module natif de Node "FileSytem"
import { readFile } from "fs";

// middleWare personnalisé qui va, entre la requête et la réponse,
// aller chercher les datas dans un fichier Json

export default (req, res, next) => {

    // Methode de FS qui va lire le contenn d'un fichier
    readFile("src/data/product.json", "utf8", (err, data) => {
        if (err) {
            console.log("error during the process of retrieving file", err);
            return;
        }
        // stockage des données récupérées et parsées dans une cle "datas" de res.locals 
        res.locals.datas = JSON.parse(data);
        next();
    });
};
