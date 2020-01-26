const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRouters = require("./api/routes/products")

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/products", productRouters);
// app.use((req, res, next)=> { //pobranie, wrzucenie, odniesienie do kolejnej metody
//     res.status(200).json({message: "Wszystko działa"})
// });

app.use((req, res, next)=> {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next)=>{
    res.status(error.status || 404);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.export = app;
// kod sklada sie z 3 czesci. importy, tresc, exporty