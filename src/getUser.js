import express from "express";
import { User } from "./model.js";

const router = express.Router();

// ১. READ ALL: ডাটাবেজের সব ইউজার পাওয়ার রুট (GET /users)
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            totalUsers: users.length,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// ২. READ ONE: নির্দিষ্ট একজন ইউজারকে আইডি দিয়ে খোঁজার রুট (GET /users/:id)
router.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!",
            });
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;
