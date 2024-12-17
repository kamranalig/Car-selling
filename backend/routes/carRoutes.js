import express from "express";
const router = express.Router();
import { submitCar } from "../controllers/carController.js";
import upload from "../middleware/uploadMiddleware.js";

router.post("/submit", upload.array("images"), submitCar);

export default router;
