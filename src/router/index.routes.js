//Import du module "router" d'express 
import { Router } from "express";

// import de nos fonctions
import { homeView } from "../controller/home.js";
import shopRouter from "./shop.routes.js";
import adminRouter from "./admin.routes.js";


// creation d'une instance de type Router,
// va permettre d'utiliser les méthodes HTTP 
const router = Router();

//La methode get est utlisée sur une url "vide"
// on va chercher le controlleur 
router.get("/", homeView);

// en cas d'url /shop ou /admin on 
// continue l'analyse (use) de l'url par les 
// fonction adéquate
router.use("/shop", shopRouter);
router.use("/admin", adminRouter);

export default router;
