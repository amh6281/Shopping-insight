import express from "express";
import { createInsight } from "../controllers/shopping.js";

const router = express.Router();

router.post("/", createInsight);

export default router;
