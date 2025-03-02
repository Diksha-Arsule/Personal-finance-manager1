import express from "express";
import {
    registerController,
    loginController,
    getUserProfile,
    setAvatarController,
    getAllUsers,
    deleteUser
} from "../controllers/UserController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { deleteUser } from "../controllers/UserController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.delete("/delete", authMiddleware, deleteUser);

export default router;