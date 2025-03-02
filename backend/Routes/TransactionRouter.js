import express from "express";
import { 
    getTransactions, 
    addTransaction, 
    deleteTransaction, 
    updateTransaction, 
    getSingleTransaction, 
    deleteMultipleTransactions 
} from "../controllers/transactionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getTransactions);
router.post("/add", authMiddleware, addTransaction);
router.delete("/delete/:id", authMiddleware, deleteTransaction);
router.put("/update/:id", authMiddleware, updateTransaction);
router.get("/:id", authMiddleware, getSingleTransaction);
router.post("/delete-multiple", authMiddleware, deleteMultipleTransactions);

export default router;
