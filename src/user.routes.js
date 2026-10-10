import express from "express";
import { User } from "./model.js";

const router = express.Router();

// CREATE: নতুন ইউজার তৈরির রুট (POST /users)
router.post("/users", async (req, res) => {
    try {
        const { name, email, age, isAdmin } = req.body;

        const newUser = await User.create({
            name,
            email,
            age,
            isAdmin,
        });

        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;
