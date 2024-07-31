
const path = require("path");
const users = require("../models/users.model");

exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/users.html"));
}

exports.saveUsers = (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const nid = req.body.nid;

    const user = {
        name,
        age,
        nid,
    }

    users.push(user);
    res.send(users);



}