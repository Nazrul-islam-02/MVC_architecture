
const path = require("path");
const users = require("../models/users.model");

exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
}

exports.saveUsers = (req,res)=>{
    const name =req.body.name;
    const age = Number(req.body.age);
    const user = {
        name, 
        age
    }
    users.push(user);
    res.send(users);

}

exports.regUsers = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/indexRe.html"));
}

exports.saveRe = (req,res)=>{
    const name = req.body.name;
    const roll = req.body.roll;
    const student ={
        name,
        roll
    }
    users.push(student)
    res.send(users);
}