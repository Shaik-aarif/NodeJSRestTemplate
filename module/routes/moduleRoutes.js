import express from "express";
import * as moduleController from "../controllers/moduleController.js";
const router = express.Router(); 


router.get("/get" , moduleController.getMethod)



export default router;