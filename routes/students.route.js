const express = require("express");
const { getStudents, saveStudents } = require("../controllers/students.controller");
const studentRoute = express.Router();

studentRoute.get("/students",getStudents);
studentRoute.post("/students",saveStudents);

module.exports = studentRoute;