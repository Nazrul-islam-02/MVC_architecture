const express = require("express");
const productsRouter = require("./routes/products.routes");
const userRouter = require("./routes/users.route");
const studentRoute = require("./routes/students.route");
const app = express();
const port = 3007;

app.use(express.urlencoded({extended:true}));
app.use(productsRouter);
app.use(userRouter);
app.use(studentRoute);



app.use("*",(req,res)=>{
    res.send("404 page is not found");
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})
