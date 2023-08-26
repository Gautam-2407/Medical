const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController");
const drcontrollers = require("../controllers/drController");

//Routes
router.post("/user/login", controllers.userlogin);
router.post("/user/register", controllers.userregister);
router.post("/dr/login" , drcontrollers.drlogin);
router.post("/dr/register" , drcontrollers.drregister);
module.exports = router;