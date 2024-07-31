
const path = require("path");
const products = require("../models/products.model")
exports.getProducts = (req,res)=>{
    res.sendfile(path.join(__dirname+"/../views/products.html"));
};

exports.saveProducts = (req,res)=>{
    const product_no = req.body.product_no;
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
        product_no,
        name,
        price,
    }
    products.push(product);
    res.send(products);

};