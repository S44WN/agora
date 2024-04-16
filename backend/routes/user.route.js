import express from "express";
import { deleteuser } from "../controllers/user.controller";

const router = express.Router();

router.get("/test", deleteuser);

export default router;
