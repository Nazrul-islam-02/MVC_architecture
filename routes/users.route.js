
const express = require("express");
const { getUsers, saveUsers, regUsers, saveRe } = require("../controller/user.controller");
const router = express.Router();



router.get("/users",getUsers)
router.post("/users",saveUsers)


router.get("/reg",regUsers)
router.post("/reg",saveRe)


module.exports = router;
