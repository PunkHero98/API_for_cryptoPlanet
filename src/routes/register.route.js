import express from "express";
import registerController from "../controller/register.controller.js";
const router = express.Router();

router.post("/", registerController.register);

export default router;
