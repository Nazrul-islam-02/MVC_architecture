const express = require("express");
const userRouter = require("./routes/users.route")

const app = express();
const port = 3003;

app.use(express.urlencoded({extended:true}));
app.use(userRouter);





app.use((req,res,next)=>{
    res.send("`404! page is not found`");
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})

