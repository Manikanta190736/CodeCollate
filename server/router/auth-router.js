const express= require("express");
const router = express.Router();
const autocontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
 
router.route("/").get(autocontrollers.home);
router.route('/register').post(validate(signupSchema), autocontrollers.register);
router.route('/login').post(autocontrollers.login);                 


module.exports= router;