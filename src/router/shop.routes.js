import { Router } from "express";
import { shopView, productView } from "../controller/shop.js";

//instanciation d'une nouvelle occurence de Router
const router = Router();


// on est ici sur une url:    /shop (ou /shop/ )
// on fait appel render via le controller dédié
router.get("/", shopView);   

// on est ici sur une url:    /shop/product 
// on fait appel au controller pou rendre la vue correcte
router.get("/product", productView);

export default router;
