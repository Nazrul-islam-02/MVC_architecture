const express = require("express");
const { getUsers, saveUsers } = require("../controllers/users.controller");
const userRouter = express.Router();

userRouter.get("/users",getUsers);
userRouter.post("/users",saveUsers);

module.exports = userRouter;