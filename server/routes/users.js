const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.post('/signin', user.signin)
router.post("/signup", user.signup);
module.exports=router