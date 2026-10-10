import { User } from "./model.js";
import express from "express";
const Router = express.Router();


// DELETE: আইডি দিয়ে ইউজার মুছে ফেলার ফাংশন
Router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found!",
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: deletedUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
export default Router;
