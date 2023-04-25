import { Router } from "express";

import { adminView } from "../controller/admin.js";
import displayHandler from "../middleware/displayHandler.js";


// intanciation d'une nouvelle occurence de Router
const router = Router();


// ici on est sur l'url:  /admin 
// on appelle en premier un middleWare qui va vérifier
// l'url et affecter la valeur "../admin/list" à une clé display de
// l'objet "res/locals" si on est bien sur "/"
// puis appel du controlleur 
router.get("/", displayHandler, adminView);



// ici url /admion/product/add 
// ici on est sur l'url /admin 
// on appelle en premier un middleWare qui va vérifier
// l'url et affectation la valeur "../admin/add_product" à une clé display de
// l'objet "res/locals" si on est bien sur "/product/add"
router.get("/product/add", displayHandler, adminView);

export default router;
