const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=> {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({message: "Lista wszystkich produktów"});
});

router.post("/", (req, res, next)=> {
    res.status(201).json({
        message: "Dodano nowy produkt",
        creatdProduct: product
    });
});

router.get("/:productID", (req, res, net)=> {
    const id = req.params.productID;
    res.status(200).json({message: "Szczególy produktu o nr" + id})
})
router.patch("/:productID", (req, res, net)=> {
    const id = req.params.productID;
    res.status(200).json({message: "Zmiana produktu o nr" + id})
})
router.delete("/:productID", (req, res, net)=> {
    const id = req.params.productID;
    res.status(200).json({message: "Usunięcie produktu o nr" + id})
})

module.exports = router;