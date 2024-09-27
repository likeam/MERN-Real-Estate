import express from "express";

import { signup, signin, goolge } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/goolge", goolge);

export default router;
