import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { updateUserController } from "../controller/userController.js";

//router object
const router = express.Router();

//routes
//get users get

//update user put
router.put("/update-user", userAuth, updateUserController);

export default router;
