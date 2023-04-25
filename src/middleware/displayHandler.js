// fonction middleWare qui s'interpose entre 
// la requête et la reponse 

export default (req, res, next) => {

    // evaluation de l'url utilisee lors de la
    // requète et affectation d'une valeur à une clé display de
    // l'objet "res/locals", sera accessible tout le long 
    // du cycle de vie de la requète
    // (puis transmise par le controlleur à la vue)

    if (req.url === "/") {
        res.locals.display = "../admin/list";
    }
    if (req.url === "/product/add") {
        res.locals.display = "../admin/add_product";
    }
    next(); // -> permet au cycle continuer
};
