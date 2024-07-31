const paht = require("path");
const students = require("../models/students.model");

exports.getStudents = (req,res)=>{
    res.sendFile(paht.join(__dirname + "/../views/students.html"))
}

exports.saveStudents = (req,res)=>{
    const name = req.body.name;
    const roll = Number(req.body.roll);
    const reg = req.body.reg;

    const student = {
        name,roll,reg
    }

    students.push(student);
    res.send(students);
}