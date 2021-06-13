import express from "express";
const router = express.Router();

import { signup, signin, signout, test } from "../controllers/auth";
import { userSignupValidator } from "../validator";
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/test", test);


module.exports = router;
